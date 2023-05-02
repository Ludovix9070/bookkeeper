"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[3676],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45344:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"overview",title:"Apache BookKeeper 4.6.2"},p=void 0,s={unversionedId:"overview/overview",id:"version-4.6.2/overview/overview",title:"Apache BookKeeper 4.6.2",description:"\x3c!--",source:"@site/versioned_docs/version-4.6.2/overview/overview.md",sourceDirName:"overview",slug:"/overview/",permalink:"/docs/4.6.2/overview/",tags:[],version:"4.6.2",frontMatter:{id:"overview",title:"Apache BookKeeper 4.6.2"},sidebar:"version-4.6.2/docsSidebar",next:{title:"BookKeeper installation",permalink:"/docs/4.6.2/getting-started/installation"}},c={},u=[{value:"Users",id:"users",level:3},{value:"Administrators",id:"administrators",level:3},{value:"Contributors",id:"contributors",level:3}],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This documentation is for Apache BookKeeper","\u2122"," version ",(0,a.kt)("inlineCode",{parentName:"p"},"4.6.2"),"."),(0,a.kt)("p",null,"Apache BookKeeper","\u2122"," is a scalable, fault tolerant and low latency storage service optimized for realtime workloads.\nIt offers ",(0,a.kt)("inlineCode",{parentName:"p"},"durability"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"replication")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"strong consistency")," as essentials for building reliable real-time applications."),(0,a.kt)("p",null,"It is suitable for being used in following scenerios:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Write-ahead_logging"},"WAL")," (Write-Ahead-Logging), e.g. HDFS ",(0,a.kt)("a",{parentName:"li",href:"https://hadoop.apache.org/docs/r2.5.2/hadoop-project-dist/hadoop-hdfs/HDFSHighAvailabilityWithNFS.html#BookKeeper_as_a_Shared_storage_EXPERIMENTAL"},"namenode"),"."),(0,a.kt)("li",{parentName:"ul"},"Message Store, e.g. ",(0,a.kt)("a",{parentName:"li",href:"https://pulsar.incubator.apache.org/"},"Apache Pulsar"),"."),(0,a.kt)("li",{parentName:"ul"},"Offset/Cursor Store, e.g. Apache Pulsar."),(0,a.kt)("li",{parentName:"ul"},"Object/Blob Store, e.g. storing snapshots to replicated state machines.")),(0,a.kt)("p",null,"Learn more about Apache BookKeeper","\u2122"," and what it can do for your organization:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/release-notes#462"},"Apache BookKeeper 4.6.2 Release Notes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://bookkeeper.apache.org//docs/latest/api/javadoc"},"Java API docs"))),(0,a.kt)("p",null,"Or start using Apache BookKeeper today."),(0,a.kt)("h3",{id:"users"},"Users"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Concepts"),": Start with ",(0,a.kt)("a",{parentName:"li",href:"../getting-started/concepts"},"concepts"),". This will help you to fully understand\nthe other parts of the documentation, including the setup, integration and operation guides."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Getting Started"),": Install ",(0,a.kt)("a",{parentName:"li",href:"../getting-started/installation"},"Apache BookKeeper")," and run bookies ",(0,a.kt)("a",{parentName:"li",href:"../getting-started/run-locally"},"locally")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"API"),": Read the ",(0,a.kt)("a",{parentName:"li",href:"../api/overview"},"API")," documentation to learn how to use Apache BookKeeper to build your applications."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Deployment"),": The ",(0,a.kt)("a",{parentName:"li",href:"../deployment/manual"},"Deployment Guide")," shows how to deploy Apache BookKeeper to production clusters.")),(0,a.kt)("h3",{id:"administrators"},"Administrators"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Operations"),": The ",(0,a.kt)("a",{parentName:"li",href:"../admin/bookies"},"Admin Guide")," shows how to run Apache BookKeeper on production, what are the production\nconsiderations and best practices.")),(0,a.kt)("h3",{id:"contributors"},"Contributors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Details"),": Learn ",(0,a.kt)("a",{parentName:"li",href:"../development/protocol"},"design details")," to know more internals.")))}m.isMDXComponent=!0}}]);