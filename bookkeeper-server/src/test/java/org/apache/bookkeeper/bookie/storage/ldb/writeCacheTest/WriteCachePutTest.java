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

    private Object expected;

    private boolean result;

    private static final ByteBufAllocator allocator = UnpooledByteBufAllocator.DEFAULT;
    private static final int entrySize = 1024;
    private static final int cacheCapability = 2 * entrySize;
    private  static final int invalidSize = 2048;
    WriteCache cache;

    public WriteCachePutTest(long ledgerId, long entryId, ByteBuf entry, int maxSegmentSize, Object expected) {
        configure(ledgerId, entryId, entry, maxSegmentSize, expected);
    }

   private void configure(long ledgerId, long entryId, ByteBuf entry, int maxSegmentSize, Object expected){
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
        ByteBuf invalidEntry = allocator.buffer(cacheCapability + invalidSize);
        invalidEntry.writeBytes(generateRandomString(cacheCapability + invalidSize).getBytes());

        ByteBuf limitEntry = allocator.buffer(cacheCapability);
        limitEntry.writeBytes(generateRandomString(cacheCapability).getBytes());

        ByteBuf limitMutantEntry = allocator.buffer(entrySize+1);
        limitMutantEntry.writeBytes(generateRandomString(entrySize+1).getBytes());

        return Arrays.asList(new Object[][] {

                //ledgerId entryid entry
                {-1, -1, null, entrySize, NullPointerException.class},          // 0
                {-1, -1, validEntry, entrySize, IllegalArgumentException.class},    // 1
                {-1, -1, invalidEntry, cacheCapability+invalidSize, false},  // 2
                {-1, 0, null, entrySize, NullPointerException.class},           // 3
                {-1, 0, validEntry, entrySize, IllegalArgumentException.class},     // 4
                {-1, 0, invalidEntry, cacheCapability+invalidSize, false},   // 5
                {-1, 1, null, entrySize, NullPointerException.class},           // 6
                {-1, 1, validEntry, entrySize, IllegalArgumentException.class},     // 7
                {-1, 1, invalidEntry, cacheCapability+invalidSize, false},   // 8
                {0, -1, null, entrySize, NullPointerException.class},           // 9
                {0, -1, validEntry, entrySize, IllegalArgumentException.class},     // 10
                {0, -1, invalidEntry, cacheCapability+invalidSize, false},   // 11
                {0, 0, null, entrySize, NullPointerException.class},            // 12
                {0, 0, validEntry, entrySize, true},       // 13
                {0, 0, invalidEntry, cacheCapability+invalidSize, false},    // 14
                {0, 1, null, entrySize, NullPointerException.class},            // 15
                {0, 1, validEntry, entrySize, true},       // 16
                {0, 1, invalidEntry, cacheCapability+invalidSize, false},    // 17
                {1, -1, null, entrySize, NullPointerException.class},           // 18
                {1, -1, validEntry, entrySize, IllegalArgumentException.class},     // 19
                {1, -1, invalidEntry, cacheCapability+invalidSize, false},   // 20
                {1, 0, null, entrySize, NullPointerException.class},            // 21
                {1, 0, validEntry, entrySize, true},       // 22
                {1, 0, invalidEntry, cacheCapability+invalidSize, false},    // 23
                {1, 1, null, entrySize, NullPointerException.class},            // 24
                {1, 1, validEntry, entrySize, true},       // 25
                {1, 1, invalidEntry, cacheCapability+invalidSize, false},    // 26

                //tests for mutations
                //for changed boundary row 150, working
                {1, 1, limitEntry, cacheCapability, true},       // 27
                {1, 1, limitEntry, entrySize, false},       // 28
                //for replaced long addiction with substraction row 150, working
                {1, 1, validEntry, 0, false}, //29
                //row153, still to work on it
                {1, 1, limitMutantEntry, entrySize, false},

        });
    }



    @Test
    public void putTest() {
        if(maxSegmentSize != 0){
            //custom
            cache = new WriteCache(allocator, cacheCapability,this.maxSegmentSize);
        }else{
            //default but with unsufficient maxCacheSize
            cache = new WriteCache(allocator, 1023,entrySize);
        }


        try {
            this.result = cache.put(this.ledgerId, this.entryId, this.entry);
            assertEquals(expected, result);
        } catch (Exception e) {
            assertEquals(expected, e.getClass());
        }


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
