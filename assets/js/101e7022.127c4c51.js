"use strict";(self.webpackChunkdevops_extensions_docs=self.webpackChunkdevops_extensions_docs||[]).push([[4618],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3433:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],s={},c="Work Item Wiki",l={unversionedId:"extensions/work-item-wiki/index",id:"extensions/work-item-wiki/index",title:"Work Item Wiki",description:"Work Item Wiki is an extension with a custom control to embed existing Wiki Pages into your work item. This can be useful if you want to provide addtional information on your work items. It can be added on an existing page, or as a new tab. For how to do this, refer to the official documentation.",source:"@site/docs/extensions/work-item-wiki/index.md",sourceDirName:"extensions/work-item-wiki",slug:"/extensions/work-item-wiki/",permalink:"/docs/extensions/work-item-wiki/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"workItemWiki",next:{title:"Scopes",permalink:"/docs/extensions/work-item-wiki/scopes"}},u={},p=[{value:"Example - Bug Criticality",id:"example---bug-criticality",level:2}],m={toc:p};function d(e){var t=e.components,s=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"work-item-wiki"},"Work Item Wiki"),(0,o.kt)("p",null,"Work Item Wiki is an extension with a custom control to embed existing Wiki Pages into your work item. This can be useful if you want to provide addtional information on your work items. It can be added on an existing page, or as a new tab. For how to do this, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/organizations/settings/work/custom-controls-process?view=azure-devops#add-a-field-level-contribution-or-custom-control"},"official documentation"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Wiki Url")," is the url to the wiki page, it should look something like: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://dev.azure.com/organization/demo-project/_wiki/wikis/demo-project.wiki/1/This-is-a-page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Version Branch")," is used when publishing the wiki from code. If your main branch is not ",(0,o.kt)("inlineCode",{parentName:"li"},"wikiMaster"),", this field must be set to load links, images and attachments correctly.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("img",{alt:"Config one",src:n(3119).Z,width:"521",height:"533"})),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("img",{alt:"Config one",src:n(6725).Z,width:"517",height:"528"}))))),(0,o.kt)("h2",{id:"example---bug-criticality"},"Example - Bug Criticality"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new wiki page with information"),(0,o.kt)("li",{parentName:"ol"},'Add a new work item page "Bug Criticality" to the "Bug" work item')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"example",src:n(304).Z,width:"3252",height:"1496"})))}d.isMDXComponent=!0},304:function(e,t,n){t.Z=n.p+"assets/images/bug-example-ffa5d12196d2f06d041888a109255e73.png"},3119:function(e,t,n){t.Z=n.p+"assets/images/control-config-1-5fc426a0819e1eed64819fe8c18b868d.png"},6725:function(e,t,n){t.Z=n.p+"assets/images/control-config-2-1edbb7a5fa591d84e4f1ce0a1cc838a9.png"}}]);