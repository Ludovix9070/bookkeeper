"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[9076],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(n),u=r,m=h["".concat(s,".").concat(u)]||h[u]||p[u]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},64002:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={},s="BP-21: New API close inconsistencies",c={type:"mdx",permalink:"/bps/BP-21-new-api-close-inconsistencies",source:"@site/src/pages/bps/BP-21-new-api-close-inconsistencies.md",title:"BP-21: New API close inconsistencies",description:"Rejected due to lack of agreement that the issues raised in the motivation are valid.",frontMatter:{}},d=[{value:"Motivation",id:"motivation",level:3},{value:"Public Interfaces",id:"public-interfaces",level:3},{value:"Proposed Changes",id:"proposed-changes",level:3},{value:"Compatibility, Deprecation, and Migration Plan",id:"compatibility-deprecation-and-migration-plan",level:3},{value:"Test Plan",id:"test-plan",level:3},{value:"Rejected Alternatives",id:"rejected-alternatives",level:3}],p={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bp-21-new-api-close-inconsistencies"},"BP-21: New API close inconsistencies"),(0,o.kt)("p",null,"Rejected due to lack of agreement that the issues raised in the motivation are valid."),(0,o.kt)("h3",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/api/javadoc/org/apache/bookkeeper/client/api/Handle.html"},"Handle")," interface provides two methods, #asyncClose and #close (overriding AutoCloseable). "),(0,o.kt)("p",null,"#close is implemented in both ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/api/javadoc/org/apache/bookkeeper/client/api/ReadHandle.html"},"ReadHandle")," and ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/api/javadoc/org/apache/bookkeeper/client/api/WriteHandle.html"},"WriteHandle"),". "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'The implementations in ReadHandle and WriteHandle do vastly different things. In ReadHandle, #close unregisters listeners from the ledger manager. This is local resource cleanup, which is in line with what AutoCloseable is designed for. In WriteHandle, #close calls #asyncClose which writes the lastAddConfirmed to the LedgerMetadata. This violates the principle of separation of concerns, and overloads the meaning of the term "close".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"#asyncClose is defined in Handle, but it only has any meaning in the WriteHandle. In ReadHandle, closing only cleans up local resources, there's no network nor disk I/O involved. The implementation directly calls the callback. It's only in WriteHandle that asyncClose has any meaning, and here it is completely different to in ReadHandle.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The name #asyncClose is inconsistent with every other method on the new api Handles (append, read, readLastAddConfirmed, etc).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"#close is part of AutoClosable, so its not unreasonable for it to be used in a try-with-resource block. This means that a ledger closure (i.e. distributed state mutation) could be triggered by an exception within the block. This is nasty."))),(0,o.kt)("p",null,'Overloading the meaning of the term "close" is very problematic on its own. Closing a WriteHandle is a very important part of the BookKeeper protocol, so it should at least have it\'s own ',(0,o.kt)("em",{parentName:"p"},"verb"),'. I propose that we stop using "closing a ledger" to describe setting the last entry of a ledger, and instead call it "sealing a ledger".'),(0,o.kt)("h3",{id:"public-interfaces"},"Public Interfaces"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Remove Handle#asyncClose"),(0,o.kt)("li",{parentName:"ol"},"Add new method WriteHandle#seal.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"class WriteHandle {\n    CompletableFuture<Void> seal();\n}\n")),(0,o.kt)("h3",{id:"proposed-changes"},"Proposed Changes"),(0,o.kt)("p",null,"The proposed change remove asyncClose from all handles and replaces it with a async #seal method on WriteHandle. WriteHandle will still have a #close method for cleaning up local resources. "),(0,o.kt)("p",null,"The proposed usage would look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'try (WriteHandle writer = bk.newCreateLedgerOp().withPassword("bleh".getBytes()).execute().get()) {\n    for (int i = 0; i < 100; i++) {\n        writer.append("foobar".getBytes());\n    }\n    writer.seal().get(); // no more entries can be added\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"What if the user forgets to call #seal before closing the ledger?")),(0,o.kt)("p",null,"The ledger is left unsealed. Readers will not read past the end of the unsealed ledger, and they will either try to recover the ledger or wait forever. In both cases, the consistency of the data is guaranteed as the writer would only acknowledge writes which have hit the full ack quorum, which will always be picked up by recovery. If the writer had made any writes that were not acknowledged, it would have halted and not moved onto writing a new ledger."),(0,o.kt)("h3",{id:"compatibility-deprecation-and-migration-plan"},"Compatibility, Deprecation, and Migration Plan"),(0,o.kt)("p",null,"None, this only affects the new api."),(0,o.kt)("h3",{id:"test-plan"},"Test Plan"),(0,o.kt)("p",null,"The current tests for #asyncClose will be migrated to use #seal()."),(0,o.kt)("h3",{id:"rejected-alternatives"},"Rejected Alternatives"),(0,o.kt)("p",null,"The alternative is how it is now. The movitation section describes the problem with this."))}h.isMDXComponent=!0}}]);