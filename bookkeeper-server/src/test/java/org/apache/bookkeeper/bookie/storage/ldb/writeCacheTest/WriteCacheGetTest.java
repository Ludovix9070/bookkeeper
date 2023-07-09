package org.apache.bookkeeper.bookie.storage.ldb.writeCacheTest;

import io.netty.buffer.*;
import junit.framework.TestCase;
import org.apache.bookkeeper.bookie.storage.ldb.WriteCache;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.Collection;
import java.util.Random;


@RunWith(value = Parameterized.class)
public class WriteCacheGetTest extends TestCase {

    private long ledgerId;
    private long entryId;
    private Object expected;

    private ByteBuf result;
    private ByteBuf entry;

    private final static String entryString = generateRandomString(6);



    private static final ByteBufAllocator allocator = UnpooledByteBufAllocator.DEFAULT;
    private static final int entrySize = 1024;
    private int maxSegmentSize;
    private static final int cacheCapability = 2 * entrySize;
    private static WriteCache cache;

    public WriteCacheGetTest(long ledgerId, long entryId, int maxSegmentSize, Object expected) {
        configure(ledgerId, entryId, maxSegmentSize, expected);
    }

    private void configure(long ledgerId, long entryId, int maxSegmentSize, Object expected){
        this.ledgerId = ledgerId;
        this.entryId = entryId;
        this.maxSegmentSize = maxSegmentSize;
        this.expected = expected;
    }



    @Parameterized.Parameters
    public static Collection parameters(){

        ByteBuf validEntry = allocator.buffer(entryString.length());
        validEntry.writeBytes(entryString.getBytes());

        return Arrays.asList(new Object[][] {
                {-1, -1, entrySize, IllegalArgumentException.class},
                {-1, 0, entrySize, IllegalArgumentException.class},
                {-1, 1, entrySize, IllegalArgumentException.class},
                {0, -1, entrySize, null},
                {0, 0, entrySize, validEntry},
                {0, 1, entrySize, validEntry},
                {1, -1, entrySize, null},
                {1, 0, entrySize, validEntry},
                {1, 1, entrySize, validEntry},

                //additional tests
                {1, 1, entryString.length()-2, null},
                {1, 1, 0, validEntry},

        });
    }



    @Test
    public void getTest() {
        if(maxSegmentSize != 0){
            //custom
            cache = new WriteCache(allocator, cacheCapability,this.maxSegmentSize);
        }else{
            //default
            cache = new WriteCache(allocator, cacheCapability);
        }

        this.entry = allocator.buffer(entryString.length());
        this.entry.writeBytes(entryString.getBytes());

        cache.put(0, 0, this.entry);
        cache.put(1, 1, this.entry);
        cache.put(1, 0, this.entry);
        cache.put(0, 1, this.entry);


       try {
            this.result = cache.get(this.ledgerId, this.entryId);
            assertEquals(expected, result);
            if(result != null){
                assertEquals(entryString, result.toString(Charset.defaultCharset()));
            }
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
