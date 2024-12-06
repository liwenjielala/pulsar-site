"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[52732],{46786:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"admin-api-overview","title":"Pulsar admin interfaces","description":"Pulsar admin APIs enable you to administer clusters programmatically. For example, you can create, update, delete, and manage all the entities within Pulsar instances (such as clusters, namespaces, tenants, topics, schemas, connectors, functions, and so on), and set various policies for data, resources, and security.","source":"@site/versioned_docs/version-3.1.x/admin-api-overview.md","sourceDirName":".","slug":"/admin-api-overview","permalink":"/docs/3.1.x/admin-api-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/admin-api-overview.md","tags":[],"version":"3.1.x","frontMatter":{"id":"admin-api-overview","title":"Pulsar admin interfaces","sidebar_label":"Overview"},"sidebar":"docsSidebar","previous":{"title":"Configure cluster-level failover","permalink":"/docs/3.1.x/client-libraries-cluster-level-failover"},"next":{"title":"Use cases","permalink":"/docs/3.1.x/admin-api-use-cases"}}');var r=n(74848),s=n(28453);n(11470),n(19365);const i={id:"admin-api-overview",title:"Pulsar admin interfaces",sidebar_label:"Overview"},l=void 0,o={},u=[{value:"Related topics",id:"related-topics",level:3}];function c(e){const a={a:"a",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"Pulsar admin APIs enable you to administer clusters programmatically. For example, you can create, update, delete, and manage all the entities within Pulsar instances (such as clusters, namespaces, tenants, topics, schemas, connectors, functions, and so on), and set various policies for data, resources, and security."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Pulsar admin APIs - definition",src:n(25604).A+"",width:"1175",height:"313"})}),"\n",(0,r.jsx)(a.h3,{id:"related-topics",children:"Related topics"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["To learn usage scenarios, see ",(0,r.jsx)(a.a,{href:"/docs/3.1.x/admin-api-use-cases",children:"Pulsar admin API - Use cases"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["To learn common administrative tasks, see ",(0,r.jsx)(a.a,{href:"/docs/3.1.x/admin-api-features",children:"Pulsar admin API - Features"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["To perform administrative operations, see ",(0,r.jsx)(a.a,{href:"/docs/3.1.x/admin-api-tools",children:"Pulsar admin API - Tools"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["To get up quickly, see ",(0,r.jsx)(a.a,{href:"/docs/3.1.x/admin-api-get-started",children:"Pulsar admin API - Get started"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"To check the detailed usage, see the API references below."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://pulsar.apache.org/api/admin/3.1.x/",children:"Java admin API"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"/docs/3.1.x/reference-rest-api-overview",children:"REST API"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},19365:(e,a,n)=>{n.d(a,{A:()=>i});n(96540);var t=n(34164);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:a,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:n,children:a})}},11470:(e,a,n)=>{n.d(a,{A:()=>y});var t=n(96540),r=n(34164),s=n(23104),i=n(56347),l=n(205),o=n(57485),u=n(31682),c=n(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}(n);return function(e){const a=(0,u.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function m(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:n}=e;const r=(0,i.W6)(),s=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(r.location.search);a.set(s,e),r.replace({...r.location,search:a.toString()})}),[s,r])]}function f(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,s=p(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:s}))),[u,d]=h({queryString:n,groupId:r}),[f,v]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,s]=(0,c.Dv)(n);return[r,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),b=(()=>{const e=u??f;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function g(e){let{className:a,block:n,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const a=e.currentTarget,n=o.indexOf(a),r=l[n].value;r!==t&&(u(a),i(r))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;a=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;a=o[n]??o[o.length-1];break}}a?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a),children:l.map((e=>{let{value:a,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function j(e){let{lazy:a,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function w(e){const a=f(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,x.jsx)(g,{...a,...e}),(0,x.jsx)(j,{...a,...e})]})}function y(e){const a=(0,v.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(a))}},25604:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/admin-api-definition-9d96d3970c533be029b5bc88ae2a064d.svg"},28453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>l});var t=n(96540);const r={},s=t.createContext(r);function i(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);