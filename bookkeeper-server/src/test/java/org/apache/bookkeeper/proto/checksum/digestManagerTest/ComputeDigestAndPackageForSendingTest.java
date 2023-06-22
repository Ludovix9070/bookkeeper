package org.apache.bookkeeper.proto.checksum.digestManagerTest;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.buffer.UnpooledByteBufAllocator;
import io.netty.util.ReferenceCounted;
import junit.framework.TestCase;
import org.apache.bookkeeper.client.api.DigestType;
import org.apache.bookkeeper.proto.DataFormats;
import org.apache.bookkeeper.proto.checksum.DigestManager;
import org.apache.bookkeeper.util.ByteBufList;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import java.security.GeneralSecurityException;
import java.util.Arrays;
import java.util.Collection;

/*test for the private method computeDigestAndPackageForSendingV3*/

@RunWith(value = Parameterized.class)
public class ComputeDigestAndPackageForSendingTest extends TestCase {
    private static DigestManager digestManager;

    private static long lastAddConfirmed;
    private long length;
    private ByteBuf data;
    private static long entryId;
    private Object expected;
    private static final long ledgerId = 1;

    private static boolean flagIsV2Proto = false;
    private ByteBuf entryTest;
    private static int dummyInt = 1;
    private static byte[] dummy = null;

    public ComputeDigestAndPackageForSendingTest(long entryId, long lastAddConfirmed, long length, ByteBuf data, Object expected) {
        configure(entryId, lastAddConfirmed,length,data, expected);
    }

    private void configure(long entryId, long lastAddConfirmed,long length,ByteBuf data, Object expected){
        this.lastAddConfirmed = lastAddConfirmed;
        this.length = length;
        this.entryId = entryId;
        this.data = data;
        this.expected = expected;

    }

    @Parameterized.Parameters
    public static Collection parameters() throws Exception {
        return Arrays.asList(new Object[][] {

                //entryId, lastAddConfirmed, length, data, expected

                //Suite minimale
                {-1,-1,0,null, NullPointerException.class},
                {1,0,0,createEntry(0), null},
                {2,1,1,createEntry(1), null},

        });
    }

    @Before
    public void setUp() throws GeneralSecurityException {
        this.digestManager = DigestManager.instantiate(ledgerId, "password".getBytes(), DataFormats.LedgerMetadataFormat.DigestType.HMAC, UnpooledByteBufAllocator.DEFAULT, flagIsV2Proto);
        this.entryTest = createEntry((int)length);
    }

    @Test
    public void testComputeDigestData() {

        try {
            // Assert that the buffer of data contained in the byteBuf is equal to what sent
            ByteBufList byteBuf = (ByteBufList) digestManager.computeDigestAndPackageForSending(entryId, lastAddConfirmed, length, data,dummy, dummyInt);
            assertEquals(entryTest.readLong(), byteBuf.getBuffer(1).readLong());
        } catch (Exception e) {
            assertEquals(this.expected, e.getClass());
        }
    }


    //method used to generate a buffer related to the single entry, filled with the informations of the entry like indicated in the documentation
    private static ByteBuf createEntry(int length) {
        byte[] data = new byte[length];
        ByteBuf byteBuffer = Unpooled.buffer(1024);
        byteBuffer.writeLong(ledgerId); // Ledger
        byteBuffer.writeLong(entryId); // Entry
        byteBuffer.writeLong(lastAddConfirmed); // LAC
        byteBuffer.writeLong(length); // Length
        byteBuffer.writeBytes(data);
        return byteBuffer;
    }
}
