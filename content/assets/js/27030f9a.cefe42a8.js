"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[48709],{48217:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"admin-api-tenants","title":"Managing Tenants","description":"Important","source":"@site/versioned_docs/version-2.3.2/admin-api-tenants.md","sourceDirName":".","slug":"/admin-api-tenants","permalink":"/docs/2.3.2/admin-api-tenants","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.2/admin-api-tenants.md","tags":[],"version":"2.3.2","frontMatter":{"id":"admin-api-tenants","title":"Managing Tenants","sidebar_label":"Tenants"},"sidebar":"docsSidebar","previous":{"title":"Clusters","permalink":"/docs/2.3.2/admin-api-clusters"},"next":{"title":"Brokers","permalink":"/docs/2.3.2/admin-api-brokers"}}');var s=a(74848),r=a(28453),l=a(89089),i=a(19365);const c={id:"admin-api-tenants",title:"Managing Tenants",sidebar_label:"Tenants"},d=void 0,o={},u=[{value:"Tenant resources",id:"tenant-resources",level:2},{value:"List",id:"list",level:3},{value:"Create",id:"create",level:3},{value:"Get configuration",id:"get-configuration",level:3},{value:"Delete",id:"delete",level:3},{value:"Update",id:"update",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Important"})}),"\n",(0,s.jsxs)(n.p,{children:["This page only shows ",(0,s.jsx)(n.strong,{children:"some frequently used operations"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For the latest and complete information about ",(0,s.jsx)(n.code,{children:"Pulsar admin"}),", including commands, flags, descriptions, and more, see Pulsar admin doc"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For the latest and complete information about ",(0,s.jsx)(n.code,{children:"REST API"}),", including parameters, responses, samples, and more, see ",(0,s.jsx)(n.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API doc."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For the latest and complete information about ",(0,s.jsx)(n.code,{children:"Java admin API"}),", including classes, methods, descriptions, and more, see ",(0,s.jsx)(n.a,{href:"https://pulsar.apache.org/api/admin/",children:"Java admin API doc"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Tenants, like namespaces, can be managed using the ",(0,s.jsx)(n.a,{href:"/docs/2.3.2/admin-api-overview",children:"admin API"}),". There are currently two configurable aspects of tenants:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Admin roles"}),"\n",(0,s.jsx)(n.li,{children:"Allowed clusters"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"tenant-resources",children:"Tenant resources"}),"\n",(0,s.jsx)(n.h3,{id:"list",children:"List"}),"\n",(0,s.jsxs)(n.p,{children:["You can list all of the tenants associated with an ",(0,s.jsx)(n.a,{href:"/docs/2.3.2/reference-terminology#instance",children:"instance"}),"."]}),"\n",(0,s.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,s.jsxs)(i.A,{value:"pulsar-admin",children:[(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.a,{href:"/docs/2.3.2/reference-pulsar-admin#tenants-list",children:(0,s.jsx)(n.code,{children:"list"})})," subcommand."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin tenants list\nmy-tenant-1\nmy-tenant-2\n\n"})})]}),(0,s.jsx)(i.A,{value:"REST API",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.3.2&apiversion=v2#operation/getTenants",children:"GET /admin/v2/tenants/getTenants"})})}),(0,s.jsx)(i.A,{value:"JAVA",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"\nadmin.tenants().getTenants();\n\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"create",children:"Create"}),"\n",(0,s.jsx)(n.p,{children:"You can create a new tenant."}),"\n",(0,s.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,s.jsxs)(i.A,{value:"pulsar-admin",children:[(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.a,{href:"/docs/2.3.2/reference-pulsar-admin#tenants-create",children:(0,s.jsx)(n.code,{children:"create"})})," subcommand:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin tenants create my-tenant\n\n"})}),(0,s.jsxs)(n.p,{children:["When creating a tenant, you can optionally assign admin roles using the ",(0,s.jsx)(n.code,{children:"-r"}),"/",(0,s.jsx)(n.code,{children:"--admin-roles"}),"\nflag, and clusters using the ",(0,s.jsx)(n.code,{children:"-c"}),"/",(0,s.jsx)(n.code,{children:"--allowed-clusters"})," flag. You can specify multiple values\nas a comma-separated list. Here are some examples:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin tenants create my-tenant \\\n  --admin-roles role1,role2,role3 \\\n  --allowed-clusters cluster1\n\n$ pulsar-admin tenants create my-tenant \\\n  -r role1\n  -c cluster1\n\n"})})]}),(0,s.jsx)(i.A,{value:"REST API",children:(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.3.2&apiversion=v2#operation/createTenant",children:["PUT /admin/v2/tenants/",":tenant","/createTenant"]})})}),(0,s.jsx)(i.A,{value:"JAVA",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"\nadmin.tenants().createTenant(tenantName, tenantInfo);\n\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"get-configuration",children:"Get configuration"}),"\n",(0,s.jsxs)(n.p,{children:["You can fetch the ",(0,s.jsx)(n.a,{href:"/docs/2.3.2/reference-configuration",children:"configuration"})," for an existing tenant at any time."]}),"\n",(0,s.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,s.jsxs)(i.A,{value:"pulsar-admin",children:[(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.a,{href:"/docs/2.3.2/reference-pulsar-admin#tenants-get",children:(0,s.jsx)(n.code,{children:"get"})})," subcommand and specify the name of the tenant. Here's an example:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'\n$ pulsar-admin tenants get my-tenant\n{\n  "adminRoles": [\n    "admin1",\n    "admin2"\n  ],\n  "allowedClusters": [\n    "cl1",\n    "cl2"\n  ]\n}\n\n'})})]}),(0,s.jsx)(i.A,{value:"REST API",children:(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.3.2&apiversion=v2#operation/getTenant",children:["GET /admin/v2/tenants/",":tenant","/getTenant"]})})}),(0,s.jsx)(i.A,{value:"JAVA",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"\nadmin.tenants().getTenantInfo(tenantName);\n\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"delete",children:"Delete"}),"\n",(0,s.jsxs)(n.p,{children:["Tenants can be deleted from a Pulsar ",(0,s.jsx)(n.a,{href:"/docs/2.3.2/reference-terminology#instance",children:"instance"}),"."]}),"\n",(0,s.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,s.jsxs)(i.A,{value:"pulsar-admin",children:[(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.a,{href:"/docs/2.3.2/reference-pulsar-admin#tenants-delete",children:(0,s.jsx)(n.code,{children:"delete"})})," subcommand and specify the name of the tenant."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin tenants delete my-tenant\n\n"})})]}),(0,s.jsx)(i.A,{value:"REST API",children:(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.3.2&apiversion=v2#operation/deleteTenant",children:["DELETE /admin/v2/tenants/",":tenant","/deleteTenant"]})})}),(0,s.jsx)(i.A,{value:"JAVA",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"\nadmin.Tenants().deleteTenant(tenantName);\n\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"update",children:"Update"}),"\n",(0,s.jsx)(n.p,{children:"You can update a tenant's configuration."}),"\n",(0,s.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,s.jsxs)(i.A,{value:"pulsar-admin",children:[(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.a,{href:"/docs/2.3.2/reference-pulsar-admin#tenants-update",children:(0,s.jsx)(n.code,{children:"update"})})," subcommand."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin tenants update my-tenant\n\n"})})]}),(0,s.jsx)(i.A,{value:"REST API",children:(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.3.2&apiversion=v2#operation/updateTenant",children:["POST /admin/v2/tenants/",":tenant","/updateTenant"]})})}),(0,s.jsx)(i.A,{value:"JAVA",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"\nadmin.tenants().updateTenant(tenantName, tenantInfo);\n\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>l});a(96540);var t=a(34164);const s={tabItem:"tabItem_Ymn6"};var r=a(74848);function l(e){let{children:n,hidden:a,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,l),hidden:a,children:n})}},89089:(e,n,a)=>{a.d(n,{A:()=>T});var t=a(96540),s=a(34164),r=a(23104),l=a(56347),i=a(205),c=a(57485),d=a(31682),o=a(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:s}}=e;return{value:n,label:a,attributes:t,default:s}}))}(a);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const s=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function x(e){const{defaultValue:n,queryString:a=!1,groupId:s}=e,r=h(e),[l,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[d,u]=m({queryString:a,groupId:s}),[x,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,o.Dv)(a);return[s,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:s}),v=(()=>{const e=d??x;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{v&&c(v)}),[v]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=a(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(74848);function g(e){let{className:n,block:a,selectedValue:t,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),o=e=>{const n=e.currentTarget,a=c.indexOf(n),s=i[a].value;s!==t&&(d(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:o,...r,className:(0,s.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function b(e){let{lazy:n,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function A(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,j.jsx)(g,{...n,...e}),(0,j.jsx)(b,{...n,...e})]})}function T(e){const n=(0,f.A)();return(0,j.jsx)(A,{...e,children:u(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>i});var t=a(96540);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);