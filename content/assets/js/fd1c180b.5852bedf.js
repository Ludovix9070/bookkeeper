"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[5056],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=m(a),k=r,u=c["".concat(p,".").concat(k)]||c[k]||s[k]||o;return a?n.createElement(u,l(l({ref:t},d),{},{components:a})):n.createElement(u,l({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},37702:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return s}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],i={id:"installation",title:"BookKeeper installation"},p=void 0,m={unversionedId:"getting-started/installation",id:"version-4.7.3/getting-started/installation",title:"BookKeeper installation",description:"You can install BookKeeper either by downloading a GZipped tarball package or cloning the BookKeeper repository.",source:"@site/versioned_docs/version-4.7.3/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/4.7.3/getting-started/installation",tags:[],version:"4.7.3",frontMatter:{id:"installation",title:"BookKeeper installation"},sidebar:"version-4.7.3/docsSidebar",previous:{title:"Apache BookKeeper 4.7.3",permalink:"/docs/4.7.3/overview/"},next:{title:"Run bookies locally",permalink:"/docs/4.7.3/getting-started/run-locally"}},d={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Download",id:"download",level:2},{value:"Clone",id:"clone",level:2},{value:"Build using Maven",id:"build-using-maven",level:2},{value:"Useful Maven commands",id:"useful-maven-commands",level:3},{value:"Package directory",id:"package-directory",level:2}],c={toc:s};function k(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can install BookKeeper either by ",(0,o.kt)("a",{parentName:"p",href:"#download"},"downloading")," a ",(0,o.kt)("a",{parentName:"p",href:"http://www.gzip.org/"},"GZipped")," tarball package or ",(0,o.kt)("a",{parentName:"p",href:"#clone"},"cloning")," the BookKeeper repository."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.opengroup.org/membership/forums/platform/unix"},"Unix environment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html"},"Java Development Kit 1.6")," or later"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://maven.apache.org/install.html"},"Maven 3.0")," or later")),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,"You can download Apache BookKeeper releases from one of many ",(0,o.kt)("a",{parentName:"p",href:"http://www.apache.org/dyn/closer.cgi/bookkeeper"},"Apache mirrors"),". "),(0,o.kt)("h2",{id:"clone"},"Clone"),(0,o.kt)("p",null,"To build BookKeeper from source, clone the repository, either from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/bookkeeper"},"GitHub mirror")," or from the ",(0,o.kt)("a",{parentName:"p",href:"https://git.apache.org/bookkeeper.git"},"Apache repository"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# From the GitHub mirror\n$ git clone https://github.com/apache/bookkeeper\n\n# From Apache directly\n$ git clone git://git.apache.org/bookkeeper.git/\n")),(0,o.kt)("h2",{id:"build-using-maven"},"Build using Maven"),(0,o.kt)("p",null,"Once you have the BookKeeper on your local machine, either by ",(0,o.kt)("a",{parentName:"p",href:"#download"},"downloading")," or ",(0,o.kt)("a",{parentName:"p",href:"#clone"},"cloning")," it, you can then build BookKeeper from source using Maven:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ mvn package\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can skip tests by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"-DskipTests")," flag when running ",(0,o.kt)("inlineCode",{parentName:"p"},"mvn package"),".")),(0,o.kt)("h3",{id:"useful-maven-commands"},"Useful Maven commands"),(0,o.kt)("p",null,"Some other useful Maven commands beyond ",(0,o.kt)("inlineCode",{parentName:"p"},"mvn package"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Action"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"mvn clean")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Removes build artifacts")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"mvn compile")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Compiles JAR files from Java sources")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"mvn compile spotbugs:spotbugs")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Compile using the Maven ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/spotbugs/spotbugs-maven-plugin"},"SpotBugs")," plugin")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"mvn install")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Install the BookKeeper JAR locally in your local Maven cache (usually in the ",(0,o.kt)("inlineCode",{parentName:"td"},"~/.m2")," directory)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"mvn deploy")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Deploy the BookKeeper JAR to the Maven repo (if you have the proper credentials)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"mvn verify")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Performs a wide variety of verification and validation tasks")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"mvn apache-rat:check")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Run Maven using the ",(0,o.kt)("a",{parentName:"td",href:"http://creadur.apache.org/rat/apache-rat-plugin/"},"Apache Rat")," plugin")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"mvn compile javadoc:aggregate")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Build Javadocs locally")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"mvn package assembly:single")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Build a complete distribution using the Maven ",(0,o.kt)("a",{parentName:"td",href:"http://maven.apache.org/plugins/maven-assembly-plugin/"},"Assembly")," plugin")))),(0,o.kt)("h2",{id:"package-directory"},"Package directory"),(0,o.kt)("p",null,"The BookKeeper project contains several subfolders that you should be aware of:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Subfolder"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Contains"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/bookkeeper/tree/master/bookkeeper-server"},(0,o.kt)("inlineCode",{parentName:"a"},"bookkeeper-server"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"The BookKeeper server and client")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/bookkeeper/tree/master/bookkeeper-benchmark"},(0,o.kt)("inlineCode",{parentName:"a"},"bookkeeper-benchmark"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"A benchmarking suite for measuring BookKeeper performance")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/bookkeeper/tree/master/bookkeeper-stats"},(0,o.kt)("inlineCode",{parentName:"a"},"bookkeeper-stats"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"A BookKeeper stats library")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/apache/bookkeeper/tree/master/bookkeeper-stats-providers"},(0,o.kt)("inlineCode",{parentName:"a"},"bookkeeper-stats-providers"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"BookKeeper stats providers")))))}k.isMDXComponent=!0}}]);