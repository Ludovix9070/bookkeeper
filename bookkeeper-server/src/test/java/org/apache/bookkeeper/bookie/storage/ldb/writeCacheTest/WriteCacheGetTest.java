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
public class WriteCacheGetTest extends TestCase {

    private long ledgerId;
    private long entryId;

    private ByteBuf expected;

    private ByteBuf result;
    private ByteBuf entry;

    private final static String entryString = generateRandomString(1024);
    //private final static String entryString = "";



    private static final ByteBufAllocator allocator = UnpooledByteBufAllocator.DEFAULT;
    private static final int entrySize = 1024;
    private int maxSegmentSize;
    private static final int cacheCapability = 2 * entrySize;
    private static WriteCache cache;

    public WriteCacheGetTest(long ledgerId, long entryId, int maxSegmentSize, ByteBuf expected) {
        configure(ledgerId, entryId, maxSegmentSize, expected);
    }

    private void configure(long ledgerId, long entryId, int maxSegmentSize, ByteBuf expected){
        this.ledgerId = ledgerId;
        this.entryId = entryId;
        this.maxSegmentSize = maxSegmentSize;
        this.expected = expected;
    }



    @Parameterized.Parameters
    public static Collection parameters(){

        ByteBuf validEntry = allocator.buffer(entrySize);
        validEntry.writeBytes(entryString.getBytes());

        return Arrays.asList(new Object[][] {
                {-1, -1, entrySize, null},          // 0
                {-1, 0, entrySize, null},    // 1
                {-1, 1, entrySize, null},  // 2
                {0, -1, entrySize, null},           // 3
                {0, 0, entrySize, validEntry},     // 4
                {0, 1, entrySize, validEntry},   // 5
                {1, -1, entrySize, null},           // 6
                {1, 0, entrySize, validEntry},     // 7
                {1, 1, entrySize, validEntry},   // 8

                //tests to kill mutations
                {1, 1, 512, null},   // 9
                {1, 1, entrySize, validEntry}, //10

        });
    }



    @Test
    public void getTest() {
        if(maxSegmentSize != 0){
            cache = new WriteCache(this.allocator, this.cacheCapability,this.maxSegmentSize);
        }else{
            cache = new WriteCache(this.allocator, this.cacheCapability);
        }

        this.entry = allocator.buffer(entrySize);
        this.entry.writeBytes(entryString.getBytes());

       try {
            cache.put(this.ledgerId, this.entryId, this.entry);
        } catch (Exception e) {
            //this.result = null;
        }


       try {
            this.result = cache.get(this.ledgerId, this.entryId);
        } catch (Exception e) {
            this.result = null;
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
