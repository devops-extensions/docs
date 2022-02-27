"use strict";(self.webpackChunkdevops_extensions_docs=self.webpackChunkdevops_extensions_docs||[]).push([[933],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7103:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],a={sidebar_position:1},l="Pull Request Utils",u={unversionedId:"extensions/pull-request-utils/index",id:"extensions/pull-request-utils/index",title:"Pull Request Utils",description:"Pull Request Utils is a collection of tasks to interact with pull requests from your pipelines. The tasks currently provide:",source:"@site/docs/extensions/pull-request-utils/index.md",sourceDirName:"extensions/pull-request-utils",slug:"/extensions/pull-request-utils/",permalink:"/docs/docs/extensions/pull-request-utils/",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"pullRequestUtils",next:{title:"Pull Request Comments",permalink:"/docs/docs/extensions/pull-request-utils/tasks/pull-request-comments"}},p=[],c={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pull-request-utils"},"Pull Request Utils"),(0,o.kt)("p",null,"Pull Request Utils is a collection of tasks to interact with pull requests from your pipelines. The tasks currently provide:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Creating and updating comments"),(0,o.kt)("li",{parentName:"ul"},"Assigning tags"),(0,o.kt)("li",{parentName:"ul"},"Removing tags"),(0,o.kt)("li",{parentName:"ul"},"Checking if tag is assigned"),(0,o.kt)("li",{parentName:"ul"},"Creating/Updating custom statuses"),(0,o.kt)("li",{parentName:"ul"},"Updating pull request description")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u2757 This extension requires the user account ",(0,o.kt)("inlineCode",{parentName:"p"},"<project name> Build Service (<org name>)")," to be granted the permission ",(0,o.kt)("inlineCode",{parentName:"p"},"Contribute to pull requests")))),(0,o.kt)("p",null,"Please report any feedback/issue ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/joachimdalen/azdevops-pull-request-utils"},"here")))}m.isMDXComponent=!0}}]);