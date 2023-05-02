"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[719],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return r?a.createElement(k,o(o({ref:t},c),{},{components:r})):a.createElement(k,o({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67759:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"metrics",title:"Metric collection"},s=void 0,p={unversionedId:"admin/metrics",id:"version-4.16.0/admin/metrics",title:"Metric collection",description:"BookKeeper enables metrics collection through a variety of stats providers.",source:"@site/versioned_docs/version-4.16.0/admin/metrics.md",sourceDirName:"admin",slug:"/admin/metrics",permalink:"/docs/admin/metrics",tags:[],version:"4.16.0",frontMatter:{id:"metrics",title:"Metric collection"},sidebar:"docsSidebar",previous:{title:"Using AutoRecovery",permalink:"/docs/admin/autorecovery"},next:{title:"Upgrade",permalink:"/docs/admin/upgrade"}},c={},d=[{value:"Stats providers",id:"stats-providers",level:2},{value:"Enabling stats providers in bookies",id:"enabling-stats-providers-in-bookies",level:2}],m={toc:d};function u(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"BookKeeper enables metrics collection through a variety of ",(0,i.kt)("a",{parentName:"p",href:"#stats-providers"},"stats providers"),"."),(0,i.kt)("h2",{id:"stats-providers"},"Stats providers"),(0,i.kt)("p",null,"BookKeeper has stats provider implementations for these sinks:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Provider"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Provider class name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.bookkeeper.stats/codahale-metrics-provider"},"Codahale Metrics")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"org.apache.bookkeeper.stats.CodahaleMetricsProvider"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://prometheus.io/"},"Prometheus")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"org.apache.bookkeeper.stats.prometheus.PrometheusMetricsProvider"))))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/bookkeeper/tree/master/bookkeeper-stats-providers/codahale-metrics-provider"},"Codahale Metrics")," stats provider is the default provider.")),(0,i.kt)("h2",{id:"enabling-stats-providers-in-bookies"},"Enabling stats providers in bookies"),(0,i.kt)("p",null,"Two stats-related ",(0,i.kt)("a",{parentName:"p",href:"../reference/config/"},"configuration parameters")," are available for bookies:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"enableStatistics")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether statistics are enabled for the bookie"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sanityCheckMetricsEnabled")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Flag to enable sanity check metrics in bookie stats"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"statsProviderClass")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The stats provider class used by the bookie"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"org.apache.bookkeeper.stats.CodahaleMetricsProvider"))))),(0,i.kt)("p",null,"To enable stats:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"set the ",(0,i.kt)("inlineCode",{parentName:"li"},"enableStatistics")," parameter to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"set ",(0,i.kt)("inlineCode",{parentName:"li"},"statsProviderClass")," to the desired provider (see the ",(0,i.kt)("a",{parentName:"li",href:"#stats-providers"},"table above")," for a listing of classes)")))}u.isMDXComponent=!0}}]);