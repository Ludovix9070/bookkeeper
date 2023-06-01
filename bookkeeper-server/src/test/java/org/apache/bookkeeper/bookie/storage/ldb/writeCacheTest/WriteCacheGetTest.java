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

    private final static String entryString = "HelloWorld";



    private static final ByteBufAllocator allocator = UnpooledByteBufAllocator.DEFAULT;
    private static final int entrySize = 1024;
    private static final int cacheCapability = 2 * entrySize;
    private static WriteCache cache;

    public WriteCacheGetTest(long ledgerId, long entryId, ByteBuf expected) {
        configure(ledgerId, entryId, expected);
    }

    private void configure(long ledgerId, long entryId, ByteBuf expected){
        this.ledgerId = ledgerId;
        this.entryId = entryId;
        this.expected = expected;
    }



    @Parameterized.Parameters
    public static Collection parameters(){

        ByteBuf validEntry = allocator.buffer(entrySize);
        validEntry.writeBytes(entryString.getBytes());

        return Arrays.asList(new Object[][] {
                {-1, -1, null},          // 0
                {-1, 0, null},    // 1
                {-1, 1, null},  // 2
                {0, -1, null},           // 3
                {0, 0, validEntry},     // 4
                {0, 1, validEntry},   // 5
                {1, -1, null},           // 6
                {1, 0, validEntry},     // 7
                {1, 1, validEntry},   // 8

        });
    }



    @Test
    public void getTest() {
        cache = new WriteCache(this.allocator, this.cacheCapability);
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


    @After
    public void cleanUp() {
        cache.close();
    }

}
