"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[64475],{49916:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"admin-api-permissions","title":"Managing permissions","description":"Important","source":"@site/versioned_docs/version-2.10.x/admin-api-permissions.md","sourceDirName":".","slug":"/admin-api-permissions","permalink":"/docs/2.10.x/admin-api-permissions","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/admin-api-permissions.md","tags":[],"version":"2.10.x","frontMatter":{"id":"admin-api-permissions","title":"Managing permissions","sidebar_label":"Permissions","original_id":"admin-api-permissions"},"sidebar":"docsSidebar","previous":{"title":"Namespaces","permalink":"/docs/2.10.x/admin-api-namespaces"},"next":{"title":"Topics","permalink":"/docs/2.10.x/admin-api-topics"}}');var r=s(74848),i=s(28453),l=s(11470),o=s(19365);const t={id:"admin-api-permissions",title:"Managing permissions",sidebar_label:"Permissions",original_id:"admin-api-permissions"},c=void 0,d={},u=[{value:"Grant permissions",id:"grant-permissions",level:2},{value:"Get permissions",id:"get-permissions",level:2},{value:"Revoke permissions",id:"revoke-permissions",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Important"})}),"\n",(0,r.jsxs)(n.p,{children:["This page only shows ",(0,r.jsx)(n.strong,{children:"some frequently used operations"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["For the latest and complete information about ",(0,r.jsx)(n.code,{children:"Pulsar admin"}),", including commands, flags, descriptions, and more, see ",(0,r.jsx)(n.a,{href:"pathname:///reference/#/2.10.x/pulsar-admin/",children:"Pulsar admin doc"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["For the latest and complete information about ",(0,r.jsx)(n.code,{children:"REST API"}),", including parameters, responses, samples, and more, see ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API doc."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["For the latest and complete information about ",(0,r.jsx)(n.code,{children:"Java admin API"}),", including classes, methods, descriptions, and more, see ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/admin/2.10.x/",children:"Java admin API doc"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Pulsar allows you to grant namespace-level or topic-level permission to users."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If you grant a namespace-level permission to a user, then the user can access all the topics under the namespace."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If you grant a topic-level permission to a user, then the user can access only the topic."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The chapters below demonstrate how to grant namespace-level permissions to users. For how to grant topic-level permissions to users, see ",(0,r.jsx)(n.a,{href:"admin-api-topics.md/#grant-permission",children:"manage topics"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"grant-permissions",children:"Grant permissions"}),"\n",(0,r.jsxs)(n.p,{children:["You can grant permissions to specific roles for lists of operations such as ",(0,r.jsx)(n.code,{children:"produce"})," and ",(0,r.jsx)(n.code,{children:"consume"}),"."]}),"\n",(0,r.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,r.jsxs)(o.A,{value:"pulsar-admin",children:[(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.a,{href:"/docs/2.10.x/pulsar-admin#grant-permission",children:(0,r.jsx)(n.code,{children:"grant-permission"})})," subcommand and specify a namespace, actions using the ",(0,r.jsx)(n.code,{children:"--actions"})," flag, and a role using the ",(0,r.jsx)(n.code,{children:"--role"})," flag:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces grant-permission test-tenant/ns1 \\\n  --actions produce,consume \\\n  --role admin10\n\n"})}),(0,r.jsxs)(n.p,{children:["Wildcard authorization can be performed when ",(0,r.jsx)(n.code,{children:"authorizationAllowWildcardsMatching"})," is set to ",(0,r.jsx)(n.code,{children:"true"})," in ",(0,r.jsx)(n.code,{children:"broker.conf"}),"."]}),(0,r.jsx)(n.p,{children:"e.g."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces grant-permission test-tenant/ns1 \\\n                        --actions produce,consume \\\n                        --role 'my.role.*'\n\n"})}),(0,r.jsxs)(n.p,{children:["Then, roles ",(0,r.jsx)(n.code,{children:"my.role.1"}),", ",(0,r.jsx)(n.code,{children:"my.role.2"}),", ",(0,r.jsx)(n.code,{children:"my.role.foo"}),", ",(0,r.jsx)(n.code,{children:"my.role.bar"}),", etc. can produce and consume."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces grant-permission test-tenant/ns1 \\\n                        --actions produce,consume \\\n                        --role '*.role.my'\n\n"})}),(0,r.jsxs)(n.p,{children:["Then, roles ",(0,r.jsx)(n.code,{children:"1.role.my"}),", ",(0,r.jsx)(n.code,{children:"2.role.my"}),", ",(0,r.jsx)(n.code,{children:"foo.role.my"}),", ",(0,r.jsx)(n.code,{children:"bar.role.my"}),", etc. can produce and consume."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": A wildcard matching works at ",(0,r.jsx)(n.strong,{children:"the beginning or end of the role name only"}),"."]}),(0,r.jsx)(n.p,{children:"e.g."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces grant-permission test-tenant/ns1 \\\n                        --actions produce,consume \\\n                        --role 'my.*.role'\n\n"})}),(0,r.jsxs)(n.p,{children:["In this case, only the role ",(0,r.jsx)(n.code,{children:"my.*.role"})," has permissions.\nRoles ",(0,r.jsx)(n.code,{children:"my.1.role"}),", ",(0,r.jsx)(n.code,{children:"my.2.role"}),", ",(0,r.jsx)(n.code,{children:"my.foo.role"}),", ",(0,r.jsx)(n.code,{children:"my.bar.role"}),", etc. ",(0,r.jsx)(n.strong,{children:"cannot"})," produce and consume."]})]}),(0,r.jsx)(o.A,{value:"REST API",children:(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.10.6&apiversion=v2#operation/grantPermissionOnNamespace",children:["POST /admin/v2/namespaces/",":tenant","/",":namespace","/permissions/",":role","/grantPermissionOnNamespace"]})})}),(0,r.jsx)(o.A,{value:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().grantPermissionOnNamespace(namespace, role, getAuthActions(actions));\n\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"get-permissions",children:"Get permissions"}),"\n",(0,r.jsx)(n.p,{children:"You can see which permissions have been granted to which roles in a namespace."}),"\n",(0,r.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,r.jsxs)(o.A,{value:"pulsar-admin",children:[(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.a,{href:"reference-pulsar-admin#permissions",children:(0,r.jsx)(n.code,{children:"permissions"})})," subcommand and specify a namespace:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'\n$ pulsar-admin namespaces permissions test-tenant/ns1\n{\n  "admin10": [\n    "produce",\n    "consume"\n  ]\n}\n\n'})})]}),(0,r.jsx)(o.A,{value:"REST API",children:(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.10.6&apiversion=v2#operation/getPermissions",children:["GET /admin/v2/namespaces/",":tenant","/",":namespace","/permissions/getPermissions"]})})}),(0,r.jsx)(o.A,{value:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().getPermissions(namespace);\n\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"revoke-permissions",children:"Revoke permissions"}),"\n",(0,r.jsx)(n.p,{children:"You can revoke permissions from specific roles, which means that those roles will no longer have access to the specified namespace."}),"\n",(0,r.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,r.jsxs)(o.A,{value:"pulsar-admin",children:[(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.a,{href:"/docs/2.10.x/pulsar-admin#revoke-permission",children:(0,r.jsx)(n.code,{children:"revoke-permission"})})," subcommand and specify a namespace and a role using the ",(0,r.jsx)(n.code,{children:"--role"})," flag:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces revoke-permission test-tenant/ns1 \\\n  --role admin10\n\n"})})]}),(0,r.jsx)(o.A,{value:"REST API",children:(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.10.6&apiversion=v2#operation/revokePermissionsOnNamespace",children:["DELETE /admin/v2/namespaces/",":tenant","/",":namespace","/permissions/",":role","/revokePermissionsOnNamespace"]})})}),(0,r.jsx)(o.A,{value:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().revokePermissionsOnNamespace(namespace, role);\n\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>l});s(96540);var a=s(34164);const r={tabItem:"tabItem_Ymn6"};var i=s(74848);function l(e){let{children:n,hidden:s,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>A});var a=s(96540),r=s(34164),i=s(23104),l=s(56347),o=s(205),t=s(57485),c=s(31682),d=s(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:r}}=e;return{value:n,label:s,attributes:a,default:r}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function m(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:s}=e;const r=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,t.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=p(e),[l,t]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,u]=h({queryString:s,groupId:r}),[x,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Dv)(s);return[r,(0,a.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),v=(()=>{const e=c??x;return m({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{v&&t(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);t(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=s(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function f(e){let{className:n,block:s,selectedValue:a,selectValue:l,tabValues:o}=e;const t=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,s=t.indexOf(n),r=o[s].value;r!==a&&(c(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=t.indexOf(e.currentTarget)+1;n=t[s]??t[0];break}case"ArrowLeft":{const s=t.indexOf(e.currentTarget)-1;n=t[s]??t[t.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>t.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:i}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(f,{...n,...e}),(0,g.jsx)(b,{...n,...e})]})}function A(e){const n=(0,j.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var a=s(96540);const r={},i=a.createContext(r);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);