package org.apache.bookkeeper.proto.checksum.digestManagerTest;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.buffer.UnpooledByteBufAllocator;
import junit.framework.TestCase;
import org.apache.bookkeeper.client.BKException;
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
import java.util.Random;

@RunWith(value = Parameterized.class)
public class VerifyDigestTest extends TestCase{
        private static DigestManager digestManager;
        private static DigestManager digestManager32;
        private static boolean flagIsV2Proto = false;
        private static final long length = 1024;
        private ByteBuf dataReceived;
        private static long entryId;
        private Object expected;
        private static final long ledgerId = 1;

        private boolean skipEntryIdCheck;
        private boolean need32Manager;
        private ByteBuf entryTest;
        private static int dummyInt = 1;
        private static byte[] dummy = null;
        private static String bufferString = generateRandomString(length);


        public VerifyDigestTest(long entryId, ByteBuf dataReceived, boolean skipEntryIdCheck, boolean need32Manager, Object expected) {
            configure(entryId, dataReceived, skipEntryIdCheck, need32Manager, expected);
        }

        private void configure(long entryId, ByteBuf dataReceived, boolean skipEntryIdCheck, boolean need32Manager, Object expected){
            this.dataReceived = dataReceived;
            this.entryId = entryId;
            this.expected = expected;
            this.skipEntryIdCheck = skipEntryIdCheck;
            this.need32Manager = need32Manager;

        }



        //private void verifyDigest(long entryId, ByteBuf dataReceived, boolean skipEntryIdCheck)

        @Parameterized.Parameters
        public static Collection parameters() throws Exception {

            return Arrays.asList(new Object[][] {


                    //entryId dataReceived skip need32 multidimensional base analysis
                    {-1,null, false,false, NullPointerException.class},
                    {-1,ByteBufList.coalesce(createEntryWithDigest(length,ledgerId,0, DataFormats.LedgerMetadataFormat.DigestType.HMAC)),false,false, BKException.BKDigestMatchException.class},
                    {-1,ByteBufList.coalesce(createEntryWithDigest(length,ledgerId,-1, DataFormats.LedgerMetadataFormat.DigestType.HMAC)),false, false, BKException.BKDigestMatchException.class},
                    {0,null,false,false, NullPointerException.class},
                    {0,ByteBufList.coalesce(createEntryWithDigest(length,ledgerId,1, DataFormats.LedgerMetadataFormat.DigestType.HMAC)),false, false, BKException.BKDigestMatchException.class},
                    {0,ByteBufList.coalesce(createEntryWithDigest(length,ledgerId,0, DataFormats.LedgerMetadataFormat.DigestType.HMAC)),false,false, null},
                    {1,null,false,false, NullPointerException.class},
                    {1,ByteBufList.coalesce(createEntryWithDigest(length,ledgerId,2, DataFormats.LedgerMetadataFormat.DigestType.HMAC)),false,false, BKException.BKDigestMatchException.class},
                    {1,ByteBufList.coalesce(createEntryWithDigest(length,ledgerId,1, DataFormats.LedgerMetadataFormat.DigestType.HMAC)),false,false, null},

                    //tests to have a better coverage
                    {1,ByteBufList.coalesce(createBadShortEntryWithDigest()),false,false, BKException.BKDigestMatchException.class},
                    {1,ByteBufList.coalesce(createEntryWithDigest(length,ledgerId,1, DataFormats.LedgerMetadataFormat.DigestType.CRC32)),false,false, BKException.BKDigestMatchException.class},
                    {1,ByteBufList.coalesce(createEntryWithDigest(length,ledgerId,1, DataFormats.LedgerMetadataFormat.DigestType.HMAC)),false,true, BKException.BKDigestMatchException.class},
                    {1,ByteBufList.coalesce(createEntryWithDigest(length,ledgerId+1,1, DataFormats.LedgerMetadataFormat.DigestType.HMAC)),false,false, BKException.BKDigestMatchException.class},
                    {1,ByteBufList.coalesce(createEntryWithDigest(length,ledgerId,1, DataFormats.LedgerMetadataFormat.DigestType.CRC32C)),false,true, null},
            });
        }

        @Before
        public void setUp() throws GeneralSecurityException {
            this.digestManager = DigestManager.instantiate(ledgerId, "password".getBytes(), DataFormats.LedgerMetadataFormat.DigestType.HMAC, UnpooledByteBufAllocator.DEFAULT, flagIsV2Proto);
            this.digestManager32 = DigestManager.instantiate(ledgerId, "password".getBytes(), DataFormats.LedgerMetadataFormat.DigestType.CRC32C, UnpooledByteBufAllocator.DEFAULT, flagIsV2Proto);
            this.entryTest = createEntry(length);
        }

        @Test
        public void testVerifyDigest() {
            try {

                ByteBuf dataBack;
                if(need32Manager){
                    dataBack = digestManager32.verifyDigestAndReturnData(entryId, dataReceived);
                }else{
                    dataBack = digestManager.verifyDigestAndReturnData(entryId, dataReceived);
                }
                ByteBuf dataToCompare = Unpooled.buffer((int)length);
                dataToCompare.writeBytes(dataBack,0,(int)length);
                assertEquals(this.entryTest.toString(), dataToCompare.toString());
            } catch (Exception e) {
                assertEquals(expected, e.getClass());
            }
        }

    //creation of a validEntry with digest
    private static ByteBufList createEntryWithDigest(long length, long inputLedgerId, long inputEntryId, DataFormats.LedgerMetadataFormat.DigestType type) throws GeneralSecurityException {
        DigestManager digestMan = DigestManager.instantiate(inputLedgerId, "password".getBytes(), type, UnpooledByteBufAllocator.DEFAULT, false);
        ByteBuf byteBuffer = createEntry(length);
        ByteBufList byteBufList = (ByteBufList) digestMan.computeDigestAndPackageForSending(inputEntryId, 0,  length, byteBuffer, dummy, dummyInt);
        return byteBufList;
    }

    private static ByteBufList createBadShortEntryWithDigest() throws GeneralSecurityException {
        int shorterLength = 20; //must be less than 52
        byte[] data = generateRandomString(shorterLength).getBytes();
        ByteBuf byteBuffer = Unpooled.buffer(shorterLength);
        byteBuffer.writeBytes(data);
        return ByteBufList.get(byteBuffer);
    }



    private static ByteBuf createEntry(long length) {
        byte[] data = bufferString.getBytes();
        ByteBuf byteBuffer = Unpooled.buffer((int)length);
        byteBuffer.writeBytes(data);
        return byteBuffer;
    }

    public static String generateRandomString(long length) {
        String characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        StringBuilder sb = new StringBuilder((int)length);
        Random random = new Random();

        for (int i = 0; i < length; i++) {
            int randomIndex = random.nextInt(characters.length());
            char randomChar = characters.charAt(randomIndex);
            sb.append(randomChar);
        }

        return sb.toString();
    }
}
