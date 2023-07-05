package org.apache.bookkeeper.proto.checksum.digestManagerTest;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.buffer.UnpooledByteBufAllocator;
import junit.framework.TestCase;
import org.apache.bookkeeper.proto.DataFormats;
import org.apache.bookkeeper.proto.checksum.DigestManager;
import org.apache.bookkeeper.proto.checksum.MacDigestManager;
import org.apache.bookkeeper.util.ByteBufList;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import java.security.GeneralSecurityException;
import java.util.Arrays;
import java.util.Collection;
import java.util.Random;

/*test for the private method computeDigestAndPackageForSendingV3*/

@RunWith(value = Parameterized.class)
public class ComputeDigestAndPackageForSendingTest extends TestCase {
    private static DigestManager digestManager;

    private long lastAddConfirmed;
    private long length;
    private long mutationLength = digestManager.METADATA_LENGTH - MacDigestManager.MAC_CODE_LENGTH;
    private ByteBuf data;
    private long entryId;
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

        ByteBuf invalidEntry = Unpooled.buffer(0);
        invalidEntry.writeBytes(generateRandomString(0).getBytes());

        return Arrays.asList(new Object[][] {

                //entryId, lastAddConfirmed, length, data, expected
                //Tests based on monodimensional analysis
                {-1,0,-1,null, NullPointerException.class},
                {1,1,0,createEntry(0, 1, 1), null},
                {2,-1,1,invalidEntry, IndexOutOfBoundsException.class},

                //tests to have a better coverage
                {0,1,0,createCompositeByteBufEntry(0, 1, 0),null},
                {0,1,0,createWrappedEntry(0, 1, 0),null},
                {2,1,1,createEntry(1, 1, 2), null},

                //tests for mutations
                {2,1,60,createEntry(60, 1, 2), null},
                {0,1,60,createCompositeByteBufEntry(60, 1, 0),null},
                {0,1,60,createWrappedEntry(60, 1, 0),null},

        });
    }

    @Before
    public void setUp() throws GeneralSecurityException {
        digestManager = DigestManager.instantiate(ledgerId, "password".getBytes(), DataFormats.LedgerMetadataFormat.DigestType.HMAC, UnpooledByteBufAllocator.DEFAULT, flagIsV2Proto);
        //this.entryTest = createEntry((int)length);
    }

    @Test
    public void testComputeDigestData() {

        try {
            if(this.length >=0){
                this.entryTest = createEntry((int)length, this.lastAddConfirmed, this.entryId);
            }
            ByteBufList byteBuf = (ByteBufList) digestManager.computeDigestAndPackageForSending(entryId, lastAddConfirmed, length, data,dummy, dummyInt);
            assertEquals(entryTest.readLong(), byteBuf.getBuffer(1).readLong());
            assertEquals(entryTest.readLong(), byteBuf.getBuffer(1).readLong());
            assertEquals(entryTest.readLong(), byteBuf.getBuffer(1).readLong());
            assertEquals(entryTest.readLong(), byteBuf.getBuffer(1).readLong());
        } catch (Exception e) {
            assertEquals(this.expected, e.getClass());
        }
    }

    //creation of WrappedEntry
    private static ByteBuf createWrappedEntry(int length, long lac, long entryId) {
        ByteBuf byteBuffer = createEntry(length, lac, entryId);
        return Unpooled.wrappedBuffer(byteBuffer);
    }

    //creation of a CompositeByteBuf
    private static ByteBuf createCompositeByteBufEntry(int length, long lac, long entryId) {
        byte[] data = new byte[length];
        ByteBuf byteBuffer = Unpooled.compositeBuffer();
        byteBuffer.writeLong(ledgerId); // Ledger
        byteBuffer.writeLong(entryId); // Entry
        byteBuffer.writeLong(lac); // LAC
        byteBuffer.writeLong(length); // Length
        byteBuffer.writeBytes(data);
        return byteBuffer;
    }


    //create a buffer related to the single entry
    private static ByteBuf createEntry(int length, long lac, long entryId) {
        byte[] data = new byte[length];
        ByteBuf byteBuffer = Unpooled.buffer(1024);
        byteBuffer.writeLong(ledgerId); // Ledger
        byteBuffer.writeLong(entryId); // Entry
        byteBuffer.writeLong(lac); // LAC
        byteBuffer.writeLong(length); // Length
        byteBuffer.writeBytes(data);
        return byteBuffer;
    }

    public static String generateRandomString(int length) {
        String characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        StringBuilder sb = new StringBuilder(length);
        Random random = new Random();

        for (int i = 0; i < length; i++) {
            int randomIndex = random.nextInt(characters.length());
            char randomChar = characters.charAt(randomIndex);
            sb.append(randomChar);
        }

        return sb.toString();
    }
}
