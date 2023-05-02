"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[3641],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),g=n,m=c["".concat(s,".").concat(g)]||c[g]||h[g]||o;return a?r.createElement(m,l(l({ref:t},p),{},{components:a})):r.createElement(m,l({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},68461:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return h}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=["components"],i={id:"concepts",title:"BookKeeper concepts and architecture"},s=void 0,d={unversionedId:"getting-started/concepts",id:"version-4.11.1/getting-started/concepts",title:"BookKeeper concepts and architecture",description:"BookKeeper is a service that provides persistent storage of streams of log entries---aka records---in sequences called ledgers. BookKeeper replicates stored entries across multiple servers.",source:"@site/versioned_docs/version-4.11.1/getting-started/concepts.md",sourceDirName:"getting-started",slug:"/getting-started/concepts",permalink:"/docs/4.11.1/getting-started/concepts",tags:[],version:"4.11.1",frontMatter:{id:"concepts",title:"BookKeeper concepts and architecture"},sidebar:"version-4.11.1/docsSidebar",previous:{title:"Run bookies locally",permalink:"/docs/4.11.1/getting-started/run-locally"},next:{title:"Manual deployment",permalink:"/docs/4.11.1/deployment/manual"}},p={},h=[{value:"Basic terms",id:"basic-terms",level:2},{value:"Entries",id:"entries",level:2},{value:"Ledgers",id:"ledgers",level:2},{value:"Clients and APIs",id:"clients-and-apis",level:2},{value:"Bookies",id:"bookies",level:2},{value:"Motivation",id:"motivation",level:3},{value:"Metadata storage",id:"metadata-storage",level:2},{value:"Data management in bookies",id:"data-management-in-bookies",level:2},{value:"Journals",id:"journals",level:3},{value:"Entry logs",id:"entry-logs",level:3},{value:"Index files",id:"index-files",level:3},{value:"Ledger cache",id:"ledger-cache",level:3},{value:"Adding entries",id:"adding-entries",level:3},{value:"Data flush",id:"data-flush",level:3},{value:"Data compaction",id:"data-compaction",level:3},{value:"ZooKeeper metadata",id:"zookeeper-metadata",level:2},{value:"Ledger manager",id:"ledger-manager",level:2},{value:"Hierarchical ledger manager",id:"hierarchical-ledger-manager",level:3},{value:"Flat ledger manager",id:"flat-ledger-manager",level:3}],c={toc:h};function g(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"BookKeeper is a service that provides persistent storage of streams of log ",(0,o.kt)("a",{parentName:"p",href:"#entries"},"entries"),"---aka ",(0,o.kt)("em",{parentName:"p"},"records"),"---in sequences called ",(0,o.kt)("a",{parentName:"p",href:"#ledgers"},"ledgers"),". BookKeeper replicates stored entries across multiple servers."),(0,o.kt)("h2",{id:"basic-terms"},"Basic terms"),(0,o.kt)("p",null,"In BookKeeper:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"each unit of a log is an ",(0,o.kt)("a",{parentName:"li",href:"#entries"},(0,o.kt)("em",{parentName:"a"},"entry"))," (aka record)"),(0,o.kt)("li",{parentName:"ul"},"streams of log entries are called ",(0,o.kt)("a",{parentName:"li",href:"#ledgers"},(0,o.kt)("em",{parentName:"a"},"ledgers"))),(0,o.kt)("li",{parentName:"ul"},"individual servers storing ledgers of entries are called ",(0,o.kt)("a",{parentName:"li",href:"#bookies"},(0,o.kt)("em",{parentName:"a"},"bookies")))),(0,o.kt)("p",null,"BookKeeper is designed to be reliable and resilient to a wide variety of failures. Bookies can crash, corrupt data, or discard data, but as long as there are enough bookies behaving correctly in the ensemble the service as a whole will behave correctly."),(0,o.kt)("h2",{id:"entries"},"Entries"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Entries")," contain the actual data written to ledgers, along with some important metadata.")),(0,o.kt)("p",null,"BookKeeper entries are sequences of bytes that are written to ",(0,o.kt)("a",{parentName:"p",href:"#ledgers"},"ledgers"),". Each entry has the following fields:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Java type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Ledger number"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"long")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The ID of the ledger to which the entry has been written")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Entry number"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"long")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The unique ID of the entry")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Last confirmed (LC)"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"long")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The ID of the last recorded entry")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Data"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"byte[]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The entry's data (written by the client application)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Authentication code"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"byte[]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The message auth code, which includes ",(0,o.kt)("em",{parentName:"td"},"all")," other fields in the entry")))),(0,o.kt)("h2",{id:"ledgers"},"Ledgers"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Ledgers")," are the basic unit of storage in BookKeeper.")),(0,o.kt)("p",null,"Ledgers are sequences of entries, while each entry is a sequence of bytes. Entries are written to a ledger:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"sequentially, and"),(0,o.kt)("li",{parentName:"ul"},"at most once.")),(0,o.kt)("p",null,"This means that ledgers have ",(0,o.kt)("em",{parentName:"p"},"append-only")," semantics. Entries cannot be modified once they've been written to a ledger. Determining the proper write order is the responsibility of ",(0,o.kt)("a",{parentName:"p",href:"#clients"},"client applications"),"."),(0,o.kt)("h2",{id:"clients-and-apis"},"Clients and APIs"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"BookKeeper clients have two main roles: they create and delete ledgers, and they read entries from and write entries to ledgers."),(0,o.kt)("p",{parentName:"blockquote"},"BookKeeper provides both a lower-level and a higher-level API for ledger interaction.")),(0,o.kt)("p",null,"There are currently two APIs that can be used for interacting with BookKeeper:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"../api/ledger-api"},"ledger API")," is a lower-level API that enables you to interact with ledgers directly."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"../api/distributedlog-api"},"DistributedLog API")," is a higher-level API that enables you to use BookKeeper without directly interacting with ledgers.")),(0,o.kt)("p",null,"In general, you should choose the API based on how much granular control you need over ledger semantics. The two APIs can also both be used within a single application."),(0,o.kt)("h2",{id:"bookies"},"Bookies"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Bookies")," are individual BookKeeper servers that handle ledgers (more specifically, fragments of ledgers). Bookies function as part of an ensemble.")),(0,o.kt)("p",null,"A bookie is an individual BookKeeper storage server. Individual bookies store fragments of ledgers, not entire ledgers (for the sake of performance). For any given ledger ",(0,o.kt)("strong",{parentName:"p"},"L"),", an ",(0,o.kt)("em",{parentName:"p"},"ensemble")," is the group of bookies storing the entries in ",(0,o.kt)("strong",{parentName:"p"},"L"),"."),(0,o.kt)("p",null,"Whenever entries are written to a ledger, those entries are striped across the ensemble (written to a sub-group of bookies rather than to all bookies)."),(0,o.kt)("h3",{id:"motivation"},"Motivation"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"BookKeeper was initially inspired by the NameNode server in HDFS but its uses now extend far beyond this.")),(0,o.kt)("p",null,"The initial motivation for BookKeeper comes from the ",(0,o.kt)("a",{parentName:"p",href:"http://hadoop.apache.org/"},"Hadoop")," ecosystem. In the ",(0,o.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HADOOP2/HDFS"},"Hadoop Distributed File System")," (HDFS), a special node called the ",(0,o.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HADOOP2/NameNode"},"NameNode")," logs all operations in a reliable fashion, which ensures that recovery is possible in case of crashes."),(0,o.kt)("p",null,"The NameNode, however, served only as initial inspiration for BookKeeper. The applications for BookKeeper extend far beyond this and include essentially any application that requires an append-based storage system. BookKeeper provides a number of advantages for such applications:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Highly efficient writes"),(0,o.kt)("li",{parentName:"ul"},"High fault tolerance via replication of messages within ensembles of bookies"),(0,o.kt)("li",{parentName:"ul"},"High throughput for write operations via striping (across as many bookies as you wish)")),(0,o.kt)("h2",{id:"metadata-storage"},"Metadata storage"),(0,o.kt)("p",null,"BookKeeper requires a metadata storage service to store information related to ",(0,o.kt)("a",{parentName:"p",href:"#ledgers"},"ledgers")," and available bookies. BookKeeper currently uses ",(0,o.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org"},"ZooKeeper")," for this and other tasks."),(0,o.kt)("h2",{id:"data-management-in-bookies"},"Data management in bookies"),(0,o.kt)("p",null,"Bookies manage data in a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Log-structured_file_system"},"log-structured")," way, which is implemented using three types of files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#journals"},"journals")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#entry-logs"},"entry logs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#index-files"},"index files"))),(0,o.kt)("h3",{id:"journals"},"Journals"),(0,o.kt)("p",null,"A journal file contains BookKeeper transaction logs. Before any update to a ledger takes place, the bookie ensures that a transaction describing the update is written to non-volatile storage. A new journal file is created once the bookie starts or the older journal file reaches the journal file size threshold."),(0,o.kt)("h3",{id:"entry-logs"},"Entry logs"),(0,o.kt)("p",null,"An entry log file manages the written entries received from BookKeeper clients. Entries from different ledgers are aggregated and written sequentially, while their offsets are kept as pointers in a ",(0,o.kt)("a",{parentName:"p",href:"#ledger-cache"},"ledger cache")," for fast lookup."),(0,o.kt)("p",null,"A new entry log file is created once the bookie starts or the older entry log file reaches the entry log size threshold. Old entry log files are removed by the Garbage Collector Thread once they are not associated with any active ledger."),(0,o.kt)("h3",{id:"index-files"},"Index files"),(0,o.kt)("p",null,"An index file is created for each ledger, which comprises a header and several fixed-length index pages that record the offsets of data stored in entry log files."),(0,o.kt)("p",null,"Since updating index files would introduce random disk I/O index files are updated lazily by a sync thread running in the background. This ensures speedy performance for updates. Before index pages are persisted to disk, they are gathered in a ledger cache for lookup."),(0,o.kt)("h3",{id:"ledger-cache"},"Ledger cache"),(0,o.kt)("p",null,"Ledger indexes pages are cached in a memory pool, which allows for more efficient management of disk head scheduling."),(0,o.kt)("h3",{id:"adding-entries"},"Adding entries"),(0,o.kt)("p",null,"When a client instructs a bookie to write an entry to a ledger, the entry will go through the following steps to be persisted on disk:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The entry is appended to an ",(0,o.kt)("a",{parentName:"li",href:"#entry-logs"},"entry log")),(0,o.kt)("li",{parentName:"ol"},"The index of the entry is updated in the ",(0,o.kt)("a",{parentName:"li",href:"#ledger-cache"},"ledger cache")),(0,o.kt)("li",{parentName:"ol"},"A transaction corresponding to this entry update is appended to the ",(0,o.kt)("a",{parentName:"li",href:"#journals"},"journal")),(0,o.kt)("li",{parentName:"ol"},"A response is sent to the BookKeeper client")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For performance reasons, the entry log buffers entries in memory and commits them in batches, while the ledger cache holds index pages in memory and flushes them lazily. This process is described in more detail in the ",(0,o.kt)("a",{parentName:"p",href:"#data-flush"},"Data flush")," section below.")),(0,o.kt)("h3",{id:"data-flush"},"Data flush"),(0,o.kt)("p",null,"Ledger index pages are flushed to index files in the following two cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ledger cache memory limit is reached. There is no more space available to hold newer index pages. Dirty index pages will be evicted from the ledger cache and persisted to index files."),(0,o.kt)("li",{parentName:"ul"},"A background thread synchronous thread is responsible for flushing index pages from the ledger cache to index files periodically.")),(0,o.kt)("p",null,"Besides flushing index pages, the sync thread is responsible for rolling journal files in case that journal files use too much disk space. The data flush flow in the sync thread is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("inlineCode",{parentName:"p"},"LastLogMark")," is recorded in memory. The ",(0,o.kt)("inlineCode",{parentName:"p"},"LastLogMark")," indicates that those entries before it have been persisted (to both index and entry log files) and contains two parts:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"txnLogId")," (the file ID of a journal)"),(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"txnLogPos")," (offset in a journal)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Dirty index pages are flushed from the ledger cache to the index file, and entry log files are flushed to ensure that all buffered entries in entry log files are persisted to disk."),(0,o.kt)("p",{parentName:"li"},"  Ideally, a bookie only needs to flush index pages and entry log files that contain entries before ",(0,o.kt)("inlineCode",{parentName:"p"},"LastLogMark"),". There is, however, no such information in the ledger and entry log mapping to journal files. Consequently, the thread flushes the ledger cache and entry log entirely here, and may flush entries after the ",(0,o.kt)("inlineCode",{parentName:"p"},"LastLogMark"),". Flushing more is not a problem, though, just redundant.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"LastLogMark")," is persisted to disk, which means that entries added before ",(0,o.kt)("inlineCode",{parentName:"p"},"LastLogMark")," whose entry data and index page were also persisted to disk. It is now time to safely remove journal files created earlier than ",(0,o.kt)("inlineCode",{parentName:"p"},"txnLogId"),"."))),(0,o.kt)("p",null,"If the bookie has crashed before persisting ",(0,o.kt)("inlineCode",{parentName:"p"},"LastLogMark")," to disk, it still has journal files containing entries for which index pages may not have been persisted. Consequently, when this bookie restarts, it inspects journal files to restore those entries and data isn't lost."),(0,o.kt)("p",null,"Using the above data flush mechanism, it is safe for the sync thread to skip data flushing when the bookie shuts down. However, in the entry logger it uses a buffered channel to write entries in batches and there might be data buffered in the buffered channel upon a shut down. The bookie needs to ensure that the entry log flushes its buffered data during shutdown. Otherwise, entry log files become corrupted with partial entries."),(0,o.kt)("h3",{id:"data-compaction"},"Data compaction"),(0,o.kt)("p",null,"On bookies, entries of different ledgers are interleaved in entry log files. A bookie runs a garbage collector thread to delete un-associated entry log files to reclaim disk space. If a given entry log file contains entries from a ledger that has not been deleted, then the entry log file would never be removed and the occupied disk space never reclaimed. In order to avoid such a case, a bookie server compacts entry log files in a garbage collector thread to reclaim disk space."),(0,o.kt)("p",null,"There are two kinds of compaction running with different frequency: minor compaction and major compaction. The differences between minor compaction and major compaction lies in their threshold value and compaction interval."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The garbage collection threshold is the size percentage of an entry log file occupied by those undeleted ledgers. The default minor compaction threshold is 0.2, while the major compaction threshold is 0.8."),(0,o.kt)("li",{parentName:"ul"},"The garbage collection interval is how frequently to run the compaction. The default minor compaction interval is 1 hour, while the major compaction threshold is 1 day.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If either the threshold or interval is set to less than or equal to zero, compaction is disabled.")),(0,o.kt)("p",null,"The data compaction flow in the garbage collector thread is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The thread scans entry log files to get their entry log metadata, which records a list of ledgers comprising an entry log and their corresponding percentages."),(0,o.kt)("li",{parentName:"ul"},"With the normal garbage collection flow, once the bookie determines that a ledger has been deleted, the ledger will be removed from the entry log metadata and the size of the entry log reduced."),(0,o.kt)("li",{parentName:"ul"},"If the remaining size of an entry log file reaches a specified threshold, the entries of active ledgers in the entry log will be copied to a new entry log file."),(0,o.kt)("li",{parentName:"ul"},"Once all valid entries have been copied, the old entry log file is deleted.")),(0,o.kt)("h2",{id:"zookeeper-metadata"},"ZooKeeper metadata"),(0,o.kt)("p",null,"BookKeeper requires a ZooKeeper installation for storing ",(0,o.kt)("a",{parentName:"p",href:"#ledger"},"ledger")," metadata. Whenever you construct a ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org//docs/latest/api/javadoc/org/apache/bookkeeper/client/BookKeeper"},(0,o.kt)("inlineCode",{parentName:"a"},"BookKeeper"))," client object, you need to pass a list of ZooKeeper servers as a parameter to the constructor, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'String zkConnectionString = "127.0.0.1:2181";\nBookKeeper bkClient = new BookKeeper(zkConnectionString);\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more info on using the BookKeeper Java client, see ",(0,o.kt)("a",{parentName:"p",href:"../api/ledger-api#the-java-ledger-api-client"},"this guide"),".")),(0,o.kt)("h2",{id:"ledger-manager"},"Ledger manager"),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"ledger manager")," handles ledgers' metadata (which is stored in ZooKeeper). BookKeeper offers two types of ledger managers: the ",(0,o.kt)("a",{parentName:"p",href:"#flat-ledger-manager"},"flat ledger manager")," and the ",(0,o.kt)("a",{parentName:"p",href:"#hierarchical-ledger-manager"},"hierarchical ledger manager"),". Both ledger managers extend the ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org//docs/latest/api/javadoc/org/apache/bookkeeper/meta/AbstractZkLedgerManager"},(0,o.kt)("inlineCode",{parentName:"a"},"AbstractZkLedgerManager"))," abstract class."),(0,o.kt)("h3",{id:"hierarchical-ledger-manager"},"Hierarchical ledger manager"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"default ledger manager."),(0,o.kt)("p",{parentName:"blockquote"},"The hierarchical ledger manager is able to manage very large numbers of BookKeeper ledgers (> 50,000).")),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"hierarchical ledger manager"),", implemented in the ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org//docs/latest/api/javadoc/org/apache/bookkeeper/meta/HierarchicalLedgerManager"},(0,o.kt)("inlineCode",{parentName:"a"},"HierarchicalLedgerManager"))," class, first obtains a global unique ID from ZooKeeper using an ",(0,o.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org/doc/current/api/org/apache/zookeeper/CreateMode.html#EPHEMERAL_SEQUENTIAL"},(0,o.kt)("inlineCode",{parentName:"a"},"EPHEMERAL_SEQUENTIAL"))," znode. Since ZooKeeper's sequence counter has a format of ",(0,o.kt)("inlineCode",{parentName:"p"},"%10d")," (10 digits with 0 padding, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"<path>0000000001"),"), the hierarchical ledger manager splits the generated ID into 3 parts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"{level1 (2 digits)}{level2 (4 digits)}{level3 (4 digits)}\n")),(0,o.kt)("p",null,"These three parts are used to form the actual ledger node path to store ledger metadata:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"{ledgers_root_path}/{level1}/{level2}/L{level3}\n")),(0,o.kt)("p",null,"For example, ledger 0000000001 is split into three parts, 00, 0000, and 00001, and stored in znode ",(0,o.kt)("inlineCode",{parentName:"p"},"/{ledgers_root_path}/00/0000/L0001"),". Each znode could have as many 10,000 ledgers, which avoids the problem of the child list being larger than the maximum ZooKeeper packet size (which is the ",(0,o.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/BOOKKEEPER-39"},"limitation")," that initially prompted the creation of the hierarchical ledger manager)."),(0,o.kt)("h3",{id:"flat-ledger-manager"},"Flat ledger manager"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"deprecated since 4.7.0, not recommand now.")),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"flat ledger manager"),", implemented in the ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org//docs/latest/api/javadoc/org/apache/bookkeeper/meta/FlatLedgerManager.html"},(0,o.kt)("inlineCode",{parentName:"a"},"FlatLedgerManager"))," class, stores all ledgers' metadata in child nodes of a single ZooKeeper path. The flat ledger manager creates ",(0,o.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org/doc/trunk/zookeeperProgrammers.html#Sequence+Nodes+--+Unique+Naming"},"sequential nodes")," to ensure the uniqueness of the ledger ID and prefixes all nodes with ",(0,o.kt)("inlineCode",{parentName:"p"},"L"),". Bookie servers manage their own active ledgers in a hash map so that it's easy to find which ledgers have been deleted from ZooKeeper and then garbage collect them."),(0,o.kt)("p",null,"The flat ledger manager's garbage collection follow proceeds as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All existing ledgers are fetched from ZooKeeper (",(0,o.kt)("inlineCode",{parentName:"li"},"zkActiveLedgers"),")"),(0,o.kt)("li",{parentName:"ul"},"All ledgers currently active within the bookie are fetched (",(0,o.kt)("inlineCode",{parentName:"li"},"bkActiveLedgers"),")"),(0,o.kt)("li",{parentName:"ul"},"The currently actively ledgers are looped through to determine which ledgers don't currently exist in ZooKeeper. Those are then garbage collected."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"hierarchical ledger manager")," stores ledgers' metadata in two-level ",(0,o.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/doc/current/zookeeperOver.html#Nodes+and+ephemeral+nodes"},"znodes"),".")))}g.isMDXComponent=!0}}]);