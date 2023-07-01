package org.apache.bookkeeper.bookie.storage.ldb.writeCacheTest;

import io.netty.buffer.*;
import junit.framework.TestCase;
import org.apache.bookkeeper.bookie.storage.ldb.WriteCache;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import java.util.Arrays;
import java.util.Collection;
import java.util.Random;


@RunWith(value = Parameterized.class)
public class WriteCachePutTest extends TestCase {

    private long ledgerId;
    private long entryId;
    private ByteBuf entry;
    private int maxSegmentSize;

    private boolean expected;

    private boolean result;

    private static final ByteBufAllocator allocator = UnpooledByteBufAllocator.DEFAULT;
    private static final int entrySize = 1024;
    private static final int cacheCapability = 2 * entrySize;
    //private static final int wrongCapability = cacheCapability + entrySize;
    private  static final int invalidSize = 2048;
    WriteCache cache;

    public WriteCachePutTest(long ledgerId, long entryId, ByteBuf entry, int maxSegmentSize, boolean expected) {
        configure(ledgerId, entryId, entry, maxSegmentSize, expected);
    }

   private void configure(long ledgerId, long entryId, ByteBuf entry, int maxSegmentSize, boolean expected){
        this.ledgerId = ledgerId;
        this.entryId = entryId;
        this.entry = entry;
        this.maxSegmentSize = maxSegmentSize;
        this.expected = expected;
   }



    @Parameterized.Parameters
    public static Collection parameters(){

        ByteBuf validEntry = allocator.buffer(entrySize);
        validEntry.writeBytes(generateRandomString(entrySize).getBytes());
        //validEntry.writerIndex(validEntry.capacity());
        ByteBuf invalidEntry = allocator.buffer(cacheCapability + invalidSize);
        invalidEntry.writeBytes(generateRandomString(cacheCapability + invalidSize).getBytes());

        ByteBuf limitEntry = allocator.buffer(cacheCapability);
        limitEntry.writeBytes(generateRandomString(cacheCapability).getBytes());
        //limitEntry.writerIndex(limitEntry.capacity());

        return Arrays.asList(new Object[][] {

                //ledgerId entryid entry
                {-1, -1, null, entrySize, false},          // 0
                {-1, -1, validEntry, entrySize, false},    // 1
                {-1, -1, invalidEntry, cacheCapability+invalidSize, false},  // 2
                {-1, 0, null, entrySize, false},           // 3
                {-1, 0, validEntry, entrySize, false},     // 4
                {-1, 0, invalidEntry, cacheCapability+invalidSize, false},   // 5
                {-1, 1, null, entrySize, false},           // 6
                {-1, 1, validEntry, entrySize, false},     // 7
                {-1, 1, invalidEntry, cacheCapability+invalidSize, false},   // 8
                {0, -1, null, entrySize, false},           // 9
                {0, -1, validEntry, entrySize, false},     // 10
                {0, -1, invalidEntry, cacheCapability+invalidSize, false},   // 11
                {0, 0, null, entrySize, false},            // 12
                {0, 0, validEntry, entrySize, true},       // 13
                {0, 0, invalidEntry, cacheCapability+invalidSize, false},    // 14
                {0, 1, null, entrySize, false},            // 15
                {0, 1, validEntry, entrySize, true},       // 16
                {0, 1, invalidEntry, cacheCapability+invalidSize, false},    // 17
                {1, -1, null, entrySize, false},           // 18
                {1, -1, validEntry, entrySize, false},     // 19
                {1, -1, invalidEntry, cacheCapability+invalidSize, false},   // 20
                {1, 0, null, entrySize, false},            // 21
                {1, 0, validEntry, entrySize, true},       // 22
                {1, 0, invalidEntry, cacheCapability+invalidSize, false},    // 23
                {1, 1, null, entrySize, false},            // 24
                {1, 1, validEntry, entrySize, true},       // 25
                {1, 1, invalidEntry, cacheCapability+invalidSize, false},    // 26

                //tests for mutations
                //for changed boundary riga 150
                {1, 1, limitEntry, cacheCapability, true},       // 27
                {1, 1, limitEntry, entrySize, false},       // 28
                //{1, 1, validEntry, 0, false}, //29

        });
    }



    @Test
    public void putTest() {
        if(maxSegmentSize != 0){
            cache = new WriteCache(this.allocator, this.cacheCapability,this.maxSegmentSize);
        }else{
            cache = new WriteCache(this.allocator, 1023,entrySize);
        }

        try {
            this.result = cache.put(this.ledgerId, this.entryId, this.entry);
        } catch (Exception e) {
            this.result = false;
        }

        assertEquals(expected, result);
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

    @After
    public void cleanUp() {
        cache.close();
    }

}
