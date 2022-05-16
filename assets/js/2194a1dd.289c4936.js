"use strict";(self.webpackChunkdevops_extensions_docs=self.webpackChunkdevops_extensions_docs||[]).push([[9880],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),o=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=o(e.components);return l.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=o(n),c=a,g=m["".concat(i,".").concat(c)]||m[c]||d[c]||r;return n?l.createElement(g,u(u({ref:t},p),{},{components:n})):l.createElement(g,u({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,u=new Array(r);u[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var o=2;o<r;o++)u[o]=n[o];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7899:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return d}});var l=n(7462),a=n(3366),r=(n(7294),n(3905)),u=["components"],s={},i="Pull Request Tags",o={unversionedId:"extensions/pull-request-utils/tasks/pull-request-tags",id:"extensions/pull-request-utils/tasks/pull-request-tags",title:"Pull Request Tags",description:"Manage labels for a pull request. Gives the ability to manage pull request tags, or check if a tag is assigned.",source:"@site/docs/extensions/pull-request-utils/tasks/pull-request-tags.md",sourceDirName:"extensions/pull-request-utils/tasks",slug:"/extensions/pull-request-utils/tasks/pull-request-tags",permalink:"/docs/extensions/pull-request-utils/tasks/pull-request-tags",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"pullRequestUtils",previous:{title:"Pull Request Status",permalink:"/docs/extensions/pull-request-utils/tasks/pull-request-status"}},p={},d=[{value:"YAML Snippet",id:"yaml-snippet",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Examples",id:"examples",level:2},{value:"Assign tag to pull request",id:"assign-tag-to-pull-request",level:3},{value:"Remove tag from pull request",id:"remove-tag-from-pull-request",level:3},{value:"Check if tag is assigned to pull request",id:"check-if-tag-is-assigned-to-pull-request",level:3}],m={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,u);return(0,r.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pull-request-tags"},"Pull Request Tags"),(0,r.kt)("p",null,"Manage labels for a pull request. Gives the ability to manage pull request tags, or check if a tag is assigned."),(0,r.kt)("h2",{id:"yaml-snippet"},"YAML Snippet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- task: PullRequestTags@0\n  inputs:\n    action: assign\n    tag: #Tag to perform action on.\n    outputVariable: PullRequest.TagCheckResult #The name of the output variable containing the check result\n    isOutput: false #If set, `outputVariable` is set as output and accessible from other jobs\n    useDefined: false #If set, overrides the value from `System.PullRequest.PullRequestId`\n    pullRequestId: $(System.PullRequest.PullRequestId) #If no id is given, the value from `System.PullRequest.PullRequestId` is taken. If a value is given, this overrides the value from `System.PullRequest.PullRequestId`\n\n")),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Argument"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"action")," ",(0,r.kt)("br",null),"Action"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"(Optional)")," ",(0,r.kt)("br",null)," Options: ",(0,r.kt)("inlineCode",{parentName:"td"},"assign"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"check"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"delete")," ",(0,r.kt)("br",null)," Default value: ",(0,r.kt)("inlineCode",{parentName:"td"},"assign"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tag")," ",(0,r.kt)("br",null),"Tag"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"(Required)")," Tag to perform action on. ",(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"outputVariable")," ",(0,r.kt)("br",null),"Output Variable"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"(Required)")," The name of the output variable containing the check result ",(0,r.kt)("br",null)," Default value: ",(0,r.kt)("inlineCode",{parentName:"td"},"PullRequest.TagCheckResult"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"isOutput")," ",(0,r.kt)("br",null),"Is output"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"(Optional)")," If set, ",(0,r.kt)("inlineCode",{parentName:"td"},"outputVariable")," is set as output and accessible from other jobs ",(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"useDefined")," ",(0,r.kt)("br",null),"Use defined id"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"(Optional)")," If set, overrides the value from ",(0,r.kt)("inlineCode",{parentName:"td"},"System.PullRequest.PullRequestId")," ",(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pullRequestId")," ",(0,r.kt)("br",null),"Pull Request Id"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"(Optional)")," If no id is given, the value from ",(0,r.kt)("inlineCode",{parentName:"td"},"System.PullRequest.PullRequestId")," is taken. If a value is given, this overrides the value from ",(0,r.kt)("inlineCode",{parentName:"td"},"System.PullRequest.PullRequestId")," ",(0,r.kt)("br",null)," Default value: ",(0,r.kt)("inlineCode",{parentName:"td"},"$(System.PullRequest.PullRequestId)"))))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"assign-tag-to-pull-request"},"Assign tag to pull request"),(0,r.kt)("p",null,"Given the following pipeline configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"steps:\n  - task: PullRequestTags@0\n    inputs:\n      tag: 'my-tag'\n")),(0,r.kt)("p",null,"it will assign the tag ",(0,r.kt)("inlineCode",{parentName:"p"},"my-tag")," to the pull request"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"remove-tag-from-pull-request"},"Remove tag from pull request"),(0,r.kt)("p",null,"Given the following pipeline configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"steps:\n  - task: PullRequestTags@0\n    inputs:\n      action: 'delete'\n      tag: 'my-tag'\n")),(0,r.kt)("p",null,"it will remove the tag ",(0,r.kt)("inlineCode",{parentName:"p"},"my-tag")," from the pull request"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"check-if-tag-is-assigned-to-pull-request"},"Check if tag is assigned to pull request"),(0,r.kt)("p",null,"Given the following pipeline configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"steps:\n  - task: PullRequestTags@0\n    name: 'check_tag'\n    inputs:\n      action: 'check'\n      tag: 'my-tag'\n      outputVariable: 'PullRequest.TagCheckResult'\n      isOutput: true\n")),(0,r.kt)("p",null,"it will check if the tag ",(0,r.kt)("inlineCode",{parentName:"p"},"my-tag")," is assiged to the active pull request and output the result (",(0,r.kt)("inlineCode",{parentName:"p"},"true")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),") to the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"PullRequest.TagCheckResult")))}c.isMDXComponent=!0}}]);