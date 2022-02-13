"use strict";(self.webpackChunkdevops_extensions_docs=self.webpackChunkdevops_extensions_docs||[]).push([[737],{3905:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),s=d(n),u=r,N=s["".concat(p,".").concat(u)]||s[u]||m[u]||l;return n?a.createElement(N,i(i({ref:e},k),{},{components:n})):a.createElement(N,i({ref:e},k))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},651:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return k},default:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},p="Rules",d={unversionedId:"extensions/auto-state/rules",id:"extensions/auto-state/rules",title:"Rules",description:"The rule system is the core of Auto State. These rules define how states should be updated, and when.",source:"@site/docs/extensions/auto-state/rules.md",sourceDirName:"extensions/auto-state",slug:"/extensions/auto-state/rules",permalink:"/docs/docs/extensions/auto-state/rules",tags:[],version:"current",frontMatter:{},sidebar:"autoState",previous:{title:"Preset Rules",permalink:"/docs/docs/extensions/auto-state/presets"},next:{title:"Scopes",permalink:"/docs/docs/extensions/auto-state/scopes"}},k=[{value:"Children lookup",id:"children-lookup",children:[{value:"Example One - Closing a user story",id:"example-one---closing-a-user-story",children:[],level:3},{value:"Example Two - Closing a user story with multiple types as children",id:"example-two---closing-a-user-story-with-multiple-types-as-children",children:[],level:3},{value:"Example Three - Activating the parent",id:"example-three---activating-the-parent",children:[],level:3}],level:2},{value:"Process Parents",id:"process-parents",children:[],level:2}],m={toc:k};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rules"},"Rules"),(0,l.kt)("p",null,"The rule system is the core of Auto State. These rules define how states should be updated, and when."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Work item type"),(0,l.kt)("td",{parentName:"tr",align:null},"This is the work item type for this rule to trigger on")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent type"),(0,l.kt)("td",{parentName:"tr",align:null},"This is the work item type of the parent relation. E.g the work item type that should be updated.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Transition state"),(0,l.kt)("td",{parentName:"tr",align:null},"The transitioned state for the rule to trigger on (When work item type changes to this) state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent not in state"),(0,l.kt)("td",{parentName:"tr",align:null},"Do not trigger the rule if the parent work item is in this state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent target state"),(0,l.kt)("td",{parentName:"tr",align:null},"This is the state that the parent work item should transition to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Children lookup"),(0,l.kt)("td",{parentName:"tr",align:null},"Take child work items into consideration when processing the rule. See ",(0,l.kt)("a",{parentName:"td",href:"#children-lookup"},"Children lookup")," for more information.")))),(0,l.kt)("h2",{id:"children-lookup"},"Children lookup"),(0,l.kt)("p",null,"This option is in most case only needed when wanting to set the parents state to something like ",(0,l.kt)("inlineCode",{parentName:"p"},"Resolved")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Closed"),". When ",(0,l.kt)("inlineCode",{parentName:"p"},"Children lookup")," is turned on, the rule system will take child workitems into consideration when processing work items."),(0,l.kt)("p",null,"As a general rule:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Category group"),(0,l.kt)("th",{parentName:"tr",align:null},"Use ",(0,l.kt)("inlineCode",{parentName:"th"},"Children lookup")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Proposed"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"In Progress"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Resolved"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Completed"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Removed"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,l.kt)("p",null,"To better explain this, let us look at the following setup:"),(0,l.kt)("h3",{id:"example-one---closing-a-user-story"},"Example One - Closing a user story"),(0,l.kt)("p",null,"Take the following rule:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Rule One"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Work item type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Task"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"User Story"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Transition state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Closed"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent not in state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Resolved"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Closed"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Removed"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent target state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Resolved"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Children lookup"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"False"))))),(0,l.kt)("p",null,"When setting ",(0,l.kt)("inlineCode",{parentName:"p"},"Task (4)")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"Closed"),", it will update ",(0,l.kt)("inlineCode",{parentName:"p"},"User Story (3)")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"Resolved"),"."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"Children lookup")," was set to ",(0,l.kt)("inlineCode",{parentName:"p"},"True")," for this rule, it would check all other child work items of ",(0,l.kt)("inlineCode",{parentName:"p"},"User Story (3)")," where the target state is the same as the one defined for this rule."),(0,l.kt)("p",null,"For this scenario it would not change the state of ",(0,l.kt)("inlineCode",{parentName:"p"},"User Story (3)"),", since ",(0,l.kt)("inlineCode",{parentName:"p"},"Task (5)")," does not match the rule condition. If the state of ",(0,l.kt)("inlineCode",{parentName:"p"},"Task (5)")," was ",(0,l.kt)("inlineCode",{parentName:"p"},"Closed"),", it would update the state of ",(0,l.kt)("inlineCode",{parentName:"p"},"User Story (3)"),"."),(0,l.kt)("h3",{id:"example-two---closing-a-user-story-with-multiple-types-as-children"},"Example Two - Closing a user story with multiple types as children"),(0,l.kt)("p",null,"Take the following rule:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Rule One"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Work item type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Documentation"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"User Story"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Transition state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Closed"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent not in state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Resolved"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Closed"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Removed"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent target state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Closed"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Children lookup"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"False"))))),(0,l.kt)("p",null,"When setting ",(0,l.kt)("inlineCode",{parentName:"p"},"Documentation (8)")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"Closed"),", it will update ",(0,l.kt)("inlineCode",{parentName:"p"},"User Story (6)")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"Resolved"),"."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"Children lookup")," was set to ",(0,l.kt)("inlineCode",{parentName:"p"},"True")," for this rule, it would check all other child work items of ",(0,l.kt)("inlineCode",{parentName:"p"},"User Story (8)")," where the target state is the same as the one defined for this rule. Since this parent has two different types of child items (",(0,l.kt)("inlineCode",{parentName:"p"},"Documentation")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Task"),") a rule would need to be defined for both of them."),(0,l.kt)("h3",{id:"example-three---activating-the-parent"},"Example Three - Activating the parent"),(0,l.kt)("p",null,"Take the following rule:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Rule One"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Work item type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Task"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"User Story"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Transition state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Active"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent not in state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Active"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Resolved"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Closed"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Removed"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent target state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Active"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Children lookup"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"False"))))),(0,l.kt)("p",null,"When setting ",(0,l.kt)("inlineCode",{parentName:"p"},"Task (5)")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"Active"),", it will update ",(0,l.kt)("inlineCode",{parentName:"p"},"User Story (3)")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"Active"),"."),(0,l.kt)("p",null,"Currently recursive updates are not implemented, but the feature is planned ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/joachimdalen/azdevops-auto-state/issues/1"},"GH#1 Allow recursive update of parents"),". This feature would allow for setting ",(0,l.kt)("inlineCode",{parentName:"p"},"User Story (3)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Feature (2)")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Epic (1)")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"Active")," when ",(0,l.kt)("inlineCode",{parentName:"p"},"Task (5)")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"Active"),"."),(0,l.kt)("h2",{id:"process-parents"},"Process Parents"),(0,l.kt)("p",null,"Setting ",(0,l.kt)("inlineCode",{parentName:"p"},"Process parents")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"On")," will process rules for the parent work item type when finding a rule that matches."),(0,l.kt)("p",null,"Consider the three following rules:"),(0,l.kt)("p",null,"Rules for ",(0,l.kt)("inlineCode",{parentName:"p"},"Task"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Rule"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Work item type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Task"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"User Story"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Transition state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Active"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent not in state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Active"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Resolved"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Closed"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Removed"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent target state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Active"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Children lookup"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"False"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Process parent"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True"))))),(0,l.kt)("p",null,"Rules for ",(0,l.kt)("inlineCode",{parentName:"p"},"User Story"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Rule"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Work item type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"User Story"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Feature"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Transition state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Active"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent not in state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Active"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Resolved"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Closed"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Removed"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent target state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Active"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Children lookup"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"False"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Process parent"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True"))))),(0,l.kt)("p",null,"Rules for ",(0,l.kt)("inlineCode",{parentName:"p"},"Feature"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Rule"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Work item type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Feature"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Epic"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Transition state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Active"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent not in state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Active"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Resolved"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Closed"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Removed"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parent target state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Active"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Children lookup"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"False"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Process parent"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"False"))))),(0,l.kt)("p",null,"When a ",(0,l.kt)("inlineCode",{parentName:"p"},"Task")," is updated from ",(0,l.kt)("inlineCode",{parentName:"p"},"New -> Active")," this will set the state of the parent ",(0,l.kt)("inlineCode",{parentName:"p"},"User Story")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"Actice"),". Since ",(0,l.kt)("inlineCode",{parentName:"p"},"Process parent")," is turned on here, Auto State will then process rules for ",(0,l.kt)("inlineCode",{parentName:"p"},"User Story")," and so on."),(0,l.kt)("p",null,"This means that with the rules defined above, and the following as the initial states of the work item hierarchy:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Task: ",(0,l.kt)("inlineCode",{parentName:"li"},"New")),(0,l.kt)("li",{parentName:"ul"},"User Story: ",(0,l.kt)("inlineCode",{parentName:"li"},"New")),(0,l.kt)("li",{parentName:"ul"},"Feature: ",(0,l.kt)("inlineCode",{parentName:"li"},"New"))),(0,l.kt)("p",null,"We will end up with the following states after ",(0,l.kt)("inlineCode",{parentName:"p"},"Task")," is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"Actice")," and processing is completed:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Task: ",(0,l.kt)("inlineCode",{parentName:"li"},"Active")),(0,l.kt)("li",{parentName:"ul"},"User Story: ",(0,l.kt)("inlineCode",{parentName:"li"},"Active")),(0,l.kt)("li",{parentName:"ul"},"Feature: ",(0,l.kt)("inlineCode",{parentName:"li"},"Active"))))}s.isMDXComponent=!0}}]);