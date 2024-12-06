"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[84702],{44386:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"admin-api-overview","title":"Pulsar admin interfaces","description":"Get a comprehensive understanding of usage of Pulsar admin APIs.","source":"@site/versioned_docs/version-3.3.x/admin-api-overview.md","sourceDirName":".","slug":"/admin-api-overview","permalink":"/docs/3.3.x/admin-api-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/admin-api-overview.md","tags":[],"version":"3.3.x","frontMatter":{"id":"admin-api-overview","title":"Pulsar admin interfaces","sidebar_label":"Overview","description":"Get a comprehensive understanding of usage of Pulsar admin APIs."},"sidebar":"docsSidebar","previous":{"title":"Configure cluster-level failover","permalink":"/docs/3.3.x/client-libraries-cluster-level-failover"},"next":{"title":"Use cases","permalink":"/docs/3.3.x/admin-api-use-cases"}}');var r=a(74848),s=a(28453);a(89089),a(19365);const i={id:"admin-api-overview",title:"Pulsar admin interfaces",sidebar_label:"Overview",description:"Get a comprehensive understanding of usage of Pulsar admin APIs."},l=void 0,o={},u=[{value:"Related topics",id:"related-topics",level:3}];function c(e){const n={a:"a",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Pulsar admin APIs enable you to administer clusters programmatically. For example, you can create, update, delete, and manage all the entities within Pulsar instances (such as clusters, namespaces, tenants, topics, schemas, connectors, functions, and so on), and set various policies for data, resources, and security."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Defination of Pulsar admin APIs",src:a(25604).A+"",width:"1175",height:"313"})}),"\n",(0,r.jsx)(n.h3,{id:"related-topics",children:"Related topics"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["To learn usage scenarios, see ",(0,r.jsx)(n.a,{href:"/docs/3.3.x/admin-api-use-cases",children:"Pulsar admin API - Use cases"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["To learn common administrative tasks, see ",(0,r.jsx)(n.a,{href:"/docs/3.3.x/admin-api-features",children:"Pulsar admin API - Features"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["To perform administrative operations, see ",(0,r.jsx)(n.a,{href:"/docs/3.3.x/admin-api-tools",children:"Pulsar admin API - Tools"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["To get up quickly, see ",(0,r.jsx)(n.a,{href:"/docs/3.3.x/admin-api-get-started",children:"Pulsar admin API - Get started"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"To check the detailed usage, see the API references below."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/admin/3.3.x/",children:"Java admin API"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/3.3.x/reference-rest-api-overview",children:"REST API"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>i});a(96540);var t=a(34164);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function i(e){let{children:n,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:a,children:n})}},89089:(e,n,a)=>{a.d(n,{A:()=>I});var t=a(96540),r=a(34164),s=a(23104),i=a(56347),l=a(205),o=a(57485),u=a(31682),c=a(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:a}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=p(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[u,d]=h({queryString:a,groupId:r}),[f,v]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),b=(()=>{const e=u??f;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(74848);function g(e){let{className:n,block:a,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,a=o.indexOf(n),r=l[a].value;r!==t&&(u(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:s}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function I(e){const n=(0,v.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(n))}},25604:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/admin-api-definition-9d96d3970c533be029b5bc88ae2a064d.svg"},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>l});var t=a(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);