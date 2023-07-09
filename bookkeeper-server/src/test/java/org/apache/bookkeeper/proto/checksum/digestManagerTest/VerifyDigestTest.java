package org.apache.bookkeeper.proto.checksum.digestManagerTest;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.buffer.UnpooledByteBufAllocator;
import junit.framework.TestCase;
import org.apache.bookkeeper.client.BKException;
import org.apache.bookkeeper.proto.DataFormats;
import org.apache.bookkeeper.proto.checksum.DigestManager;
import org.apache.bookkeeper.proto.checksum.MacDigestManager;
import org.apache.bookkeeper.util.ByteBufList;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import java.nio.charset.Charset;
import java.security.GeneralSecurityException;
import java.util.Arrays;
import java.util.Collection;
import java.util.Random;

@RunWith(value = Parameterized.class)
public class VerifyDigestTest extends TestCase{
        private static DigestManager digestManager;
        private static DigestManager digestManager32;
        private static boolean flagIsV2Proto = false;
        private static final long length = 52;
        private static final int limitLength = digestManager.METADATA_LENGTH + MacDigestManager.MAC_CODE_LENGTH;
        private ByteBuf dataReceived;
        private static long entryId;
        private Object expected;
        private static final long ledgerId = 1;

        private boolean skipEntryIdCheck;
        private boolean need32Manager;
        private ByteBuf entryTest;
        private boolean limit;
        private static int dummyInt = 1;
        private static byte[] dummy = null;
        private static String bufferString = generateRandomString(length);


        public VerifyDigestTest(long entryId, ByteBuf dataReceived, boolean skipEntryIdCheck, boolean need32Manager, boolean limit, Object expected) {
            configure(entryId, dataReceived, skipEntryIdCheck, need32Manager, limit, expected);
        }

        private void configure(long entryId, ByteBuf dataReceived, boolean skipEntryIdCheck, boolean need32Manager, boolean limit, Object expected){
            this.dataReceived = dataReceived;
            this.entryId = entryId;
            this.expected = expected;
            this.skipEntryIdCheck = skipEntryIdCheck;
            this.need32Manager = need32Manager;
            this.limit = limit;

        }


        @Parameterized.Parameters
        public static Collection parameters() throws Exception {

            return Arrays.asList(new Object[][] {


                    //tests based on multidimensional analysis
                    {-1,null, false,false, false, NullPointerException.class},
                    {-1,ByteBufList.coalesce(createEntryWithDigest(length,ledgerId,0, DataFormats.LedgerMetadataFormat.DigestType.HMAC)),false,false,false, BKException.BKDigestMatchException.class},
                    {-1,ByteBufList.coalesce(createEntryWithDigest(length,ledgerId,-1, DataFormats.LedgerMetadataFormat.DigestType.HMAC)),false, false,false, BKException.BKDigestMatchException.class},
                    {0,null,false,false, false, NullPointerException.class},
                    {0,ByteBufList.coalesce(createEntryWithDigest(length,ledgerId,1, DataFormats.LedgerMetadataFormat.DigestType.HMAC)),false, false,false, BKException.BKDigestMatchException.class},
                    {0,ByteBufList.coalesce(createEntryWithDigest(length,ledgerId,0, DataFormats.LedgerMetadataFormat.DigestType.HMAC)),false,false, false, null},
                    {1,null,false,false,false, NullPointerException.class},
                    {1,ByteBufList.coalesce(createEntryWithDigest(length,ledgerId,2, DataFormats.LedgerMetadataFormat.DigestType.HMAC)),false,false,false, BKException.BKDigestMatchException.class},
                    {1,ByteBufList.coalesce(createEntryWithDigest(length,ledgerId,1, DataFormats.LedgerMetadataFormat.DigestType.HMAC)),false,false,false, null},

                    //tests to have a better coverage
                    {1,ByteBufList.coalesce(createBadShortEntryWithDigest(20)),false,false,false, BKException.BKDigestMatchException.class},
                    {1,ByteBufList.coalesce(createEntryWithDigest(length,ledgerId,1, DataFormats.LedgerMetadataFormat.DigestType.CRC32)),false,false,false, BKException.BKDigestMatchException.class},
                    {1,ByteBufList.coalesce(createEntryWithDigest(length,ledgerId,1, DataFormats.LedgerMetadataFormat.DigestType.HMAC)),false,true,false, BKException.BKDigestMatchException.class},
                    {1,ByteBufList.coalesce(createEntryWithDigest(length,ledgerId+1,1, DataFormats.LedgerMetadataFormat.DigestType.HMAC)),false,false,false, BKException.BKDigestMatchException.class},
                    {1,ByteBufList.coalesce(createEntryWithDigest(length,ledgerId,1, DataFormats.LedgerMetadataFormat.DigestType.CRC32C)),false,true,false, null},

                    //tests for mutations
                    {1,ByteBufList.coalesce(createGoodLimitEntryWithDigest(ledgerId,1, DataFormats.LedgerMetadataFormat.DigestType.HMAC)),false,false, true, null},
                    {1,ByteBufList.coalesce(createEntryWithLacDigest(length,ledgerId,1, DataFormats.LedgerMetadataFormat.DigestType.HMAC)),true,false, false, null},
                    {1,ByteBufList.coalesce(createBadShortEntryWithDigest(6)),true,false, false, BKException.BKDigestMatchException.class},

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

                ByteBuf dataBack = null;
                DigestManager.RecoveryData recoveryData = null;
                if(need32Manager){
                    dataBack = digestManager32.verifyDigestAndReturnData(entryId, dataReceived);
                }else{
                    if(skipEntryIdCheck){
                        recoveryData = digestManager.verifyDigestAndReturnLastConfirmed(dataReceived);
                    }else{
                        dataBack = digestManager.verifyDigestAndReturnData(entryId, dataReceived);
                    }

                }

                if(!skipEntryIdCheck){
                    if(limit){
                        assertEquals("", dataBack.toString(Charset.defaultCharset()));
                    }else{
                        assertEquals(this.entryTest.toString(Charset.defaultCharset()), dataBack.toString(Charset.defaultCharset()));
                    }
                }else{
                    assertEquals(1,recoveryData.getLastAddConfirmed());
                }

            } catch (Exception e) {
                assertEquals(expected, e.getClass());
            }
        }

    private static ByteBufList createEntryWithDigest(long length, long inputLedgerId, long inputEntryId, DataFormats.LedgerMetadataFormat.DigestType type) throws GeneralSecurityException {
        DigestManager digestMan = DigestManager.instantiate(inputLedgerId, "password".getBytes(), type, UnpooledByteBufAllocator.DEFAULT, false);
        ByteBuf byteBuffer = createEntry(length);
        ByteBufList byteBufList = (ByteBufList) digestMan.computeDigestAndPackageForSending(inputEntryId, 0,  length, byteBuffer, dummy, dummyInt);
        return byteBufList;
    }

    private static ByteBufList createEntryWithLacDigest(long length, long inputLedgerId, long inputEntryId, DataFormats.LedgerMetadataFormat.DigestType type) throws GeneralSecurityException {
        DigestManager digestMan = DigestManager.instantiate(inputLedgerId, "password".getBytes(), type, UnpooledByteBufAllocator.DEFAULT, false);
        ByteBuf byteBuffer = createEntry(length);
        ByteBufList byteBufList = (ByteBufList) digestMan.computeDigestAndPackageForSending(inputEntryId, 1,  length, byteBuffer, dummy, dummyInt);
        return byteBufList;
    }

    private static ByteBufList createGoodLimitEntryWithDigest(long inputLedgerId, long inputEntryId, DataFormats.LedgerMetadataFormat.DigestType type) throws GeneralSecurityException {
        DigestManager digestMan = DigestManager.instantiate(inputLedgerId, "password".getBytes(), type, UnpooledByteBufAllocator.DEFAULT, false);
        ByteBuf byteBuffer = createShortValidEntry(0);
        ByteBufList byteBufList = (ByteBufList) digestMan.computeDigestAndPackageForSending(inputEntryId, limitLength,  0, byteBuffer, dummy, dummyInt);
        return byteBufList;
    }

    private static ByteBufList createBadShortEntryWithDigest(int shorterLength) throws GeneralSecurityException {
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

    private static ByteBuf createShortValidEntry(int length) {
        byte[] data = generateRandomString(length).getBytes();
        ByteBuf byteBuffer = Unpooled.buffer(length);
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
