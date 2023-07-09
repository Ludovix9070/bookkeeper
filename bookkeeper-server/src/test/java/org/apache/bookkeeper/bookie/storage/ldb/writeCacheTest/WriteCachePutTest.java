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

                {-1, -1, null, entrySize, NullPointerException.class},
                {-1, -1, validEntry, entrySize, IllegalArgumentException.class},
                {-1, -1, invalidEntry, cacheCapability+invalidSize, false},
                {-1, 0, null, entrySize, NullPointerException.class},
                {-1, 0, validEntry, entrySize, IllegalArgumentException.class},
                {-1, 0, invalidEntry, cacheCapability+invalidSize, false},
                {-1, 1, null, entrySize, NullPointerException.class},
                {-1, 1, validEntry, entrySize, IllegalArgumentException.class},
                {-1, 1, invalidEntry, cacheCapability+invalidSize, false},
                {0, -1, null, entrySize, NullPointerException.class},
                {0, -1, validEntry, entrySize, IllegalArgumentException.class},
                {0, -1, invalidEntry, cacheCapability+invalidSize, false},
                {0, 0, null, entrySize, NullPointerException.class},
                {0, 0, validEntry, entrySize, true},
                {0, 0, invalidEntry, cacheCapability+invalidSize, false},
                {0, 1, null, entrySize, NullPointerException.class},
                {0, 1, validEntry, entrySize, true},
                {0, 1, invalidEntry, cacheCapability+invalidSize, false},
                {1, -1, null, entrySize, NullPointerException.class},
                {1, -1, validEntry, entrySize, IllegalArgumentException.class},
                {1, -1, invalidEntry, cacheCapability+invalidSize, false},
                {1, 0, null, entrySize, NullPointerException.class},
                {1, 0, validEntry, entrySize, true},
                {1, 0, invalidEntry, cacheCapability+invalidSize, false},
                {1, 1, null, entrySize, NullPointerException.class},
                {1, 1, validEntry, entrySize, true},
                {1, 1, invalidEntry, cacheCapability+invalidSize, false},

                //tests for mutations
                {1, 1, limitEntry, cacheCapability, true},
                {1, 1, limitEntry, entrySize, false},
                {1, 1, validEntry, 0, false},
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

        assertEquals(0,cache.count());

        try {
            this.result = cache.put(this.ledgerId, this.entryId, this.entry);
            if(this.result == true){
                assertEquals(1, cache.count());
            }
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
