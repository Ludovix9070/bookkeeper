"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[9157],{3905:function(e,o,n){n.d(o,{Zo:function(){return m},kt:function(){return u}});var t=n(67294);function i(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){i(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function a(e,o){if(null==e)return{};var n,t,i=function(e,o){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],o.indexOf(n)>=0||(i[n]=e[n]);return i}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),c=function(e){var o=t.useContext(l),n=o;return e&&(n="function"==typeof e?e(o):s(s({},o),e)),n},m=function(e){var o=c(e.components);return t.createElement(l.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},d=t.forwardRef((function(e,o){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,k=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return n?t.createElement(k,s(s({ref:o},m),{},{components:n})):t.createElement(k,s({ref:o},m))}));function u(e,o){var n=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var a={};for(var l in o)hasOwnProperty.call(o,l)&&(a[l]=o[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<r;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95879:function(e,o,n){n.r(o),n.d(o,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var t=n(87462),i=n(63366),r=(n(67294),n(3905)),s=["components"],a={id:"decomission",title:"Decommission Bookies"},l=void 0,c={unversionedId:"admin/decomission",id:"version-4.15.4/admin/decomission",title:"Decommission Bookies",description:"In case the user wants to decommission a bookie, the following process is useful to follow in order to verify if the",source:"@site/versioned_docs/version-4.15.4/admin/decomission.md",sourceDirName:"admin",slug:"/admin/decomission",permalink:"/docs/4.15.4/admin/decomission",tags:[],version:"4.15.4",frontMatter:{id:"decomission",title:"Decommission Bookies"},sidebar:"docsSidebar",previous:{title:"BookKeeper Admin REST API",permalink:"/docs/4.15.4/admin/http"},next:{title:"BookKeeper API",permalink:"/docs/4.15.4/api/overview"}},m={},p=[{value:"Before we decommission",id:"before-we-decommission",level:3},{value:"Process of Decommissioning",id:"process-of-decommissioning",level:3}],d={toc:p};function u(e){var o=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,t.Z)({},d,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In case the user wants to decommission a bookie, the following process is useful to follow in order to verify if the\ndecommissioning was safely done."),(0,r.kt)("h3",{id:"before-we-decommission"},"Before we decommission"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure state of your cluster can support the decommissioning of the target bookie.\nCheck if ",(0,r.kt)("inlineCode",{parentName:"p"},"EnsembleSize >= Write Quorum >= Ack Quorum")," stays true with one less bookie")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure target bookie shows up in the listbookies command.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure that there is no other process ongoing (upgrade etc)."))),(0,r.kt)("h3",{id:"process-of-decommissioning"},"Process of Decommissioning"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log on to the bookie node, check if there are underreplicated ledgers.")),(0,r.kt)("p",null,"If there are, the decommission command will force them to be replicated.\n",(0,r.kt)("inlineCode",{parentName:"p"},"$ bin/bookkeeper shell listunderreplicated")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop the bookie\n",(0,r.kt)("inlineCode",{parentName:"p"},"$ bin/bookkeeper-daemon.sh stop bookie"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the decommission command.\nIf you have logged onto the node you wish to decommission, you don't need to provide ",(0,r.kt)("inlineCode",{parentName:"p"},"-bookieid"),"\nIf you are running the decommission command for target bookie node from another bookie node you should mention\nthe target bookie id in the arguments for ",(0,r.kt)("inlineCode",{parentName:"p"},"-bookieid"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"$ bin/bookkeeper shell decommissionbookie"),"\nor\n",(0,r.kt)("inlineCode",{parentName:"p"},"$ bin/bookkeeper shell decommissionbookie -bookieid <target bookieid>"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Validate that there are no ledgers on decommissioned bookie\n",(0,r.kt)("inlineCode",{parentName:"p"},"$ bin/bookkeeper shell listledgers -bookieid <target bookieid>")))),(0,r.kt)("p",null,"Last step to verify is you could run this command to check if the bookie you decommissioned doesn\u2019t show up in list bookies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./bookkeeper shell listbookies -rw -h\n./bookkeeper shell listbookies -ro -h\n")))}u.isMDXComponent=!0}}]);