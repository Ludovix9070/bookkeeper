"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[7666],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,b=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(b,l(l({ref:n},s),{},{components:t})):r.createElement(b,l({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=f;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},35090:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),l=["components"],a={id:"run-locally",title:"Run bookies locally"},c=void 0,u={unversionedId:"getting-started/run-locally",id:"version-4.9.2/getting-started/run-locally",title:"Run bookies locally",description:"Bookies are individual BookKeeper servers. You can run an ensemble of bookies locally on a single machine using the localbookie command of the bookkeeper CLI tool and specifying the number of bookies you'd like to include in the ensemble.",source:"@site/versioned_docs/version-4.9.2/getting-started/run-locally.md",sourceDirName:"getting-started",slug:"/getting-started/run-locally",permalink:"/docs/4.9.2/getting-started/run-locally",tags:[],version:"4.9.2",frontMatter:{id:"run-locally",title:"Run bookies locally"},sidebar:"version-4.9.2/docsSidebar",previous:{title:"BookKeeper installation",permalink:"/docs/4.9.2/getting-started/installation"},next:{title:"BookKeeper concepts and architecture",permalink:"/docs/4.9.2/getting-started/concepts"}},s={},p=[],f={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Bookies are individual BookKeeper servers. You can run an ensemble of bookies locally on a single machine using the ",(0,i.kt)("a",{parentName:"p",href:"../reference/cli#bookkeeper-localbookie"},(0,i.kt)("inlineCode",{parentName:"a"},"localbookie"))," command of the ",(0,i.kt)("inlineCode",{parentName:"p"},"bookkeeper")," CLI tool and specifying the number of bookies you'd like to include in the ensemble."),(0,i.kt)("p",null,"This would start up an ensemble with 10 bookies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ bookkeeper-server/bin/bookkeeper localbookie 10\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When you start up an ensemble using ",(0,i.kt)("inlineCode",{parentName:"p"},"localbookie"),", all bookies run in a single JVM process.")))}d.isMDXComponent=!0}}]);