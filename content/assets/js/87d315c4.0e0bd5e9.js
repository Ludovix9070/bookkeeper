"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[9716],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(r),d=a,k=h["".concat(c,".").concat(d)]||h[d]||u[d]||n;return r?o.createElement(k,i(i({ref:t},p),{},{components:r})):o.createElement(k,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},85140:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var o=r(87462),a=r(63366),n=(r(67294),r(3905)),i=["components"],l={id:"autorecovery",title:"Using AutoRecovery"},c=void 0,s={unversionedId:"admin/autorecovery",id:"version-4.7.3/admin/autorecovery",title:"Using AutoRecovery",description:"When a bookie crashes, all ledgers on that bookie become under-replicated. In order to bring all ledgers in your BookKeeper cluster back to full replication, you'll need to recover the data from any offline bookies. There are two ways to recover bookies' data:",source:"@site/versioned_docs/version-4.7.3/admin/autorecovery.md",sourceDirName:"admin",slug:"/admin/autorecovery",permalink:"/docs/4.7.3/admin/autorecovery",tags:[],version:"4.7.3",frontMatter:{id:"autorecovery",title:"Using AutoRecovery"},sidebar:"version-4.7.3/docsSidebar",previous:{title:"BookKeeper administration",permalink:"/docs/4.7.3/admin/bookies"},next:{title:"Metric collection",permalink:"/docs/4.7.3/admin/metrics"}},p={},u=[{value:"Manual recovery",id:"manual-recovery",level:2},{value:"The manual recovery process",id:"the-manual-recovery-process",level:3},{value:"AutoRecovery",id:"autorecovery",level:2},{value:"Running AutoRecovery",id:"running-autorecovery",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Disable AutoRecovery",id:"disable-autorecovery",level:2},{value:"AutoRecovery architecture",id:"autorecovery-architecture",level:2},{value:"Auditor",id:"auditor",level:3},{value:"Replication Worker",id:"replication-worker",level:3},{value:"The rereplication process",id:"the-rereplication-process",level:3}],h={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When a bookie crashes, all ledgers on that bookie become under-replicated. In order to bring all ledgers in your BookKeeper cluster back to full replication, you'll need to ",(0,n.kt)("em",{parentName:"p"},"recover")," the data from any offline bookies. There are two ways to recover bookies' data:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Using ",(0,n.kt)("a",{parentName:"li",href:"#manual-recovery"},"manual recovery")),(0,n.kt)("li",{parentName:"ol"},"Automatically, using ",(0,n.kt)("a",{parentName:"li",href:"#autorecovery"},(0,n.kt)("em",{parentName:"a"},"AutoRecovery")))),(0,n.kt)("h2",{id:"manual-recovery"},"Manual recovery"),(0,n.kt)("p",null,"You can manually recover failed bookies using the ",(0,n.kt)("a",{parentName:"p",href:"../reference/cli"},(0,n.kt)("inlineCode",{parentName:"a"},"bookkeeper"))," command-line tool. You need to specify:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("inlineCode",{parentName:"li"},"shell recover")," option "),(0,n.kt)("li",{parentName:"ul"},"an IP and port for your BookKeeper cluster's ZooKeeper ensemble"),(0,n.kt)("li",{parentName:"ul"},"the IP and port for the failed bookie")),(0,n.kt)("p",null,"Here's an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ bookkeeper-server/bin/bookkeeper shell recover \\\n  zk1.example.com:2181 \\ # IP and port for ZooKeeper\n  192.168.1.10:3181      # IP and port for the failed bookie\n")),(0,n.kt)("p",null,"If you wish, you can also specify which bookie you'd like to rereplicate to. Here's an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ bookkeeper-server/bin/bookkeeper shell recover \\\n  zk1.example.com:2181 \\ # IP and port for ZooKeeper\n  192.168.1.10:3181 \\    # IP and port for the failed bookie\n  192.168.1.11:3181      # IP and port for the bookie to rereplicate to\n")),(0,n.kt)("h3",{id:"the-manual-recovery-process"},"The manual recovery process"),(0,n.kt)("p",null,"When you initiate a manual recovery process, the following happens:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The client (the process running ) reads the metadata of active ledgers from ZooKeeper."),(0,n.kt)("li",{parentName:"ol"},"The ledgers that contain fragments from the failed bookie in their ensemble are selected."),(0,n.kt)("li",{parentName:"ol"},"A recovery process is initiated for each ledger in this list and the rereplication process is run for each ledger."),(0,n.kt)("li",{parentName:"ol"},"Once all the ledgers are marked as fully replicated, bookie recovery is finished.")),(0,n.kt)("h2",{id:"autorecovery"},"AutoRecovery"),(0,n.kt)("p",null,"AutoRecovery is a process that:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"automatically detects when a bookie in your BookKeeper cluster has become unavailable and then"),(0,n.kt)("li",{parentName:"ul"},"rereplicates all the ledgers that were stored on that bookie.")),(0,n.kt)("p",null,"AutoRecovery can be run in two ways:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"On dedicated nodes in your BookKeeper cluster"),(0,n.kt)("li",{parentName:"ol"},"On the same machines on which your bookies are running")),(0,n.kt)("h2",{id:"running-autorecovery"},"Running AutoRecovery"),(0,n.kt)("p",null,"You can start up AutoRecovery using the ",(0,n.kt)("a",{parentName:"p",href:"../reference/cli#bookkeeper-autorecovery"},(0,n.kt)("inlineCode",{parentName:"a"},"autorecovery"))," command of the ",(0,n.kt)("a",{parentName:"p",href:"../reference/cli"},(0,n.kt)("inlineCode",{parentName:"a"},"bookkeeper"))," CLI tool."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ bookkeeper-server/bin/bookkeeper autorecovery\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The most important thing to ensure when starting up AutoRecovery is that the ZooKeeper connection string specified by the ",(0,n.kt)("a",{parentName:"p",href:"../reference/config#zkServers"},(0,n.kt)("inlineCode",{parentName:"a"},"zkServers"))," parameter points to the right ZooKeeper cluster.")),(0,n.kt)("p",null,"If you start up AutoRecovery on a machine that is already running a bookie, then the AutoRecovery process will run alongside the bookie on a separate thread."),(0,n.kt)("p",null,"You can also start up AutoRecovery on a fresh machine if you'd like to create a dedicated cluster of AutoRecovery nodes."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"There are a handful of AutoRecovery-related configs in the ",(0,n.kt)("a",{parentName:"p",href:"../reference/config"},(0,n.kt)("inlineCode",{parentName:"a"},"bk_server.conf"))," configuration file. For a listing of those configs, see ",(0,n.kt)("a",{parentName:"p",href:"../reference/config#autorecovery-settings"},"AutoRecovery settings"),"."),(0,n.kt)("h2",{id:"disable-autorecovery"},"Disable AutoRecovery"),(0,n.kt)("p",null,"You can disable AutoRecovery at any time, for example during maintenance. Disabling AutoRecovery ensures that bookies' data isn't unnecessarily rereplicated when the bookie is only taken down for a short period of time, for example when the bookie is being updated or the configuration if being changed."),(0,n.kt)("p",null,"You can disable AutoRecover using the ",(0,n.kt)("a",{parentName:"p",href:"../reference/cli#bookkeeper-shell-autorecovery"},(0,n.kt)("inlineCode",{parentName:"a"},"bookkeeper"))," CLI tool:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ bookkeeper-server/bin/bookkeeper shell autorecovery -disable\n")),(0,n.kt)("p",null,"Once disabled, you can reenable AutoRecovery using the ",(0,n.kt)("a",{parentName:"p",href:"../reference/cli#bookkeeper-shell-autorecovery"},(0,n.kt)("inlineCode",{parentName:"a"},"enable"))," shell command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ bookkeeper-server/bin/bookkeeper shell autorecovery -enable\n")),(0,n.kt)("h2",{id:"autorecovery-architecture"},"AutoRecovery architecture"),(0,n.kt)("p",null,"AutoRecovery has two components:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("a",{parentName:"li",href:"#auditor"},(0,n.kt)("strong",{parentName:"a"},"auditor"))," (see the ",(0,n.kt)("a",{parentName:"li",href:"https://bookkeeper.apache.org//docs/latest/api/javadoc/org/apache/bookkeeper/replication/Auditor.html"},(0,n.kt)("inlineCode",{parentName:"a"},"Auditor"))," class) is a singleton node that watches bookies to see if they fail and creates rereplication tasks for the ledgers on failed bookies."),(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("a",{parentName:"li",href:"#replication-worker"},(0,n.kt)("strong",{parentName:"a"},"replication worker"))," (see the ",(0,n.kt)("a",{parentName:"li",href:"https://bookkeeper.apache.org//docs/latest/api/javadoc/org/apache/bookkeeper/replication/ReplicationWorker.html"},(0,n.kt)("inlineCode",{parentName:"a"},"ReplicationWorker"))," class) runs on each bookie and executes rereplication tasks provided by the auditor.")),(0,n.kt)("p",null,"Both of these components run as threads in the ",(0,n.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org//docs/latest/api/javadoc/org/apache/bookkeeper/replication/AutoRecoveryMain"},(0,n.kt)("inlineCode",{parentName:"a"},"AutoRecoveryMain"))," process, which runs on each bookie in the cluster. All recovery nodes participate in leader election---using ZooKeeper---to decide which node becomes the auditor. Nodes that fail to become the auditor watch the elected auditor and run an election process again if they see that the auditor node has failed."),(0,n.kt)("h3",{id:"auditor"},"Auditor"),(0,n.kt)("p",null,"The auditor watches all bookies in the cluster that are registered with ZooKeeper. Bookies register with ZooKeeper at startup. If the bookie crashes or is killed, the bookie's registration in ZooKeeper disappears and the auditor is notified of the change in the list of registered bookies."),(0,n.kt)("p",null,"When the auditor sees that a bookie has disappeared, it immediately scans the complete ledger list to find ledgers that have data stored on the failed bookie. Once it has a list of ledgers for that bookie, the auditor will publish a rereplication task for each ledger under the ",(0,n.kt)("inlineCode",{parentName:"p"},"/underreplicated/")," ",(0,n.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org/doc/current/zookeeperOver.html"},"znode")," in ZooKeeper."),(0,n.kt)("h3",{id:"replication-worker"},"Replication Worker"),(0,n.kt)("p",null,"Each replication worker watches for tasks being published by the auditor on the ",(0,n.kt)("inlineCode",{parentName:"p"},"/underreplicated/")," znode in ZooKeeper. When a new task appears, the replication worker will try to get a lock on it. If it cannot acquire the lock, it will try the next entry. The locks are implemented using ZooKeeper ephemeral znodes."),(0,n.kt)("p",null,"The replication worker will scan through the rereplication task's ledger for fragments of which its local bookie is not a member. When it finds fragments matching this criterion, it will replicate the entries of that fragment to the local bookie. If, after this process, the ledger is fully replicated, the ledgers entry under /underreplicated/ is deleted, and the lock is released. If there is a problem replicating, or there are still fragments in the ledger which are still underreplicated (due to the local bookie already being part of the ensemble for the fragment), then the lock is simply released."),(0,n.kt)("p",null,"If the replication worker finds a fragment which needs rereplication, but does not have a defined endpoint (i.e. the final fragment of a ledger currently being written to), it will wait for a grace period before attempting rereplication. If the fragment needing rereplication still does not have a defined endpoint, the ledger is fenced and rereplication then takes place."),(0,n.kt)("p",null,"This avoids the situation in which a client is writing to a ledger and one of the bookies goes down, but the client has not written an entry to that bookie before rereplication takes place. The client could continue writing to the old fragment, even though the ensemble for the fragment had changed. This could lead to data loss. Fencing prevents this scenario from happening. In the normal case, the client will try to write to the failed bookie within the grace period, and will have started a new fragment before rereplication starts."),(0,n.kt)("p",null,"You can configure this grace period using the ",(0,n.kt)("a",{parentName:"p",href:"../reference/config#openLedgerRereplicationGracePeriod"},(0,n.kt)("inlineCode",{parentName:"a"},"openLedgerRereplicationGracePeriod"))," parameter."),(0,n.kt)("h3",{id:"the-rereplication-process"},"The rereplication process"),(0,n.kt)("p",null,"The ledger rereplication process happens in these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The client goes through all ledger fragments in the ledger, selecting those that contain the failed bookie."),(0,n.kt)("li",{parentName:"ol"},"A recovery process is initiated for each ledger fragment in this list.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"The client selects a bookie to which all entries in the ledger fragment will be replicated; In the case of autorecovery, this will always be the local bookie."),(0,n.kt)("li",{parentName:"ol"},"The client reads entries that belong to the ledger fragment from other bookies in the ensemble and writes them to the selected bookie."),(0,n.kt)("li",{parentName:"ol"},"Once all entries have been replicated, the zookeeper metadata for the fragment is updated to reflect the new ensemble."),(0,n.kt)("li",{parentName:"ol"},"The fragment is marked as fully replicated in the recovery tool."))),(0,n.kt)("li",{parentName:"ol"},"Once all ledger fragments are marked as fully replicated, the ledger is marked as fully replicated.")))}d.isMDXComponent=!0}}]);