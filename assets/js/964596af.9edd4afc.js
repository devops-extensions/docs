"use strict";(self.webpackChunkdevops_extensions_docs=self.webpackChunkdevops_extensions_docs||[]).push([[288],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2013:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={},s="Processing",p={unversionedId:"extensions/acceptance-criterias/processing/index",id:"extensions/acceptance-criterias/processing/index",title:"Processing",description:"The following diagram shows the approval flow for acceptance criterias.",source:"@site/docs/extensions/acceptance-criterias/processing/index.md",sourceDirName:"extensions/acceptance-criterias/processing",slug:"/extensions/acceptance-criterias/processing/",permalink:"/docs/extensions/acceptance-criterias/processing/",tags:[],version:"current",frontMatter:{},sidebar:"acceptanceCriterias",previous:{title:"Text criteria",permalink:"/docs/extensions/acceptance-criterias/work-item-control/creating-criterias/text-criteria"}},l={},d=[{value:"Completing",id:"completing",level:2},{value:"Approvals and Rejections",id:"approvals-and-rejections",level:2},{value:"Rejection",id:"rejection",level:3}],m={toc:d};function u(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"processing"},"Processing"),(0,i.kt)("p",null,"The following diagram shows the approval flow for acceptance criterias."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7657).Z,width:"653",height:"384"})),(0,i.kt)("p",null,"If a criteria has approvers assigned, only the user or a member of the approver group can complete the criteria, when no approvers is assigned, anyone can complete it. Processing can be done from the Criteria Details view."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Approval and Rejection comments")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Approval and rejection comments are not available yet, but on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/joachimdalen/azdevops-acceptance-criterias/issues/4"},"Roadmap")))),(0,i.kt)("h2",{id:"completing"},"Completing"),(0,i.kt)("p",null,"The criteria goes into the ",(0,i.kt)("inlineCode",{parentName:"p"},"Completed")," state when no approvers is assigned."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("img",{src:n(4151).Z,width:"628",height:"282"})),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("img",{src:n(7515).Z,width:"631",height:"391"})))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Complete the criteria by selecting ",(0,i.kt)("inlineCode",{parentName:"td"},"Complete")),(0,i.kt)("td",{parentName:"tr",align:null},"Once completed, you can chose to edit the criteria or reset the state to new")))),(0,i.kt)("h2",{id:"approvals-and-rejections"},"Approvals and Rejections"),(0,i.kt)("p",null,"When a criteria is assigned an approver, the criteria goes into the approval flow. Acceptance Criterias supports the following as approvers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users"),(0,i.kt)("li",{parentName:"ul"},"Teams"),(0,i.kt)("li",{parentName:"ul"},"Permission Groups")),(0,i.kt)("p",null,"Once a Team or Permission Group is assigned as an approver, only one member needs to approve."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("img",{src:n(465).Z,width:"632",height:"308"})),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("img",{src:n(9838).Z,width:"627",height:"303"})))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Send the criteria to approval by selecting ",(0,i.kt)("inlineCode",{parentName:"td"},"Send to approval")),(0,i.kt)("td",{parentName:"tr",align:null},"Processing can now be done by a member of the required approvers group")))),(0,i.kt)("h3",{id:"rejection"},"Rejection"),(0,i.kt)("p",null,"Rejecting a criteria gives additional processing options."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("img",{src:n(7717).Z,width:"627",height:"306"})))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"One rejected, the criteria can either be set back to new, or it can be resubmitted for approval")))))}u.isMDXComponent=!0},7657:function(e,t,n){t.Z=n.p+"assets/images/process-12e09350ff8145797ae455bc2b82d99c.png"},9838:function(e,t,n){t.Z=n.p+"assets/images/scenario-criteria-approve-or-reject-b4db7a8cc5a5fc26f4b849269909287b.png"},7717:function(e,t,n){t.Z=n.p+"assets/images/scenario-criteria-rejected-0f6060af6d936f8121a8257ca3fc1ebe.png"},465:function(e,t,n){t.Z=n.p+"assets/images/scenario-criteria-send-to-approval-1d5a5ef68907944a36c2eb874f642dfa.png"},4151:function(e,t,n){t.Z=n.p+"assets/images/text-criteria-complete-57137dcaef2743880d5a6f4f49737167.png"},7515:function(e,t,n){t.Z=n.p+"assets/images/text-criteria-completed-97f7f537eaa275a03c421d416fd0f758.png"}}]);