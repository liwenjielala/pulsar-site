"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[20052],{97190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"tutorials-tenant","title":"How to set up a tenant","description":"Learn how to set up a tenant in Pulsar.","source":"@site/versioned_docs/version-3.3.x/tutorials-tenant.md","sourceDirName":".","slug":"/tutorials-tenant","permalink":"/docs/3.3.x/tutorials-tenant","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/tutorials-tenant.md","tags":[],"version":"3.3.x","frontMatter":{"Id":"tutorials-tenant","title":"How to set up a tenant","sidebar_label":"Set up a tenant","description":"Learn how to set up a tenant in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"Tutorials","permalink":"/docs/3.3.x/how-to-landing"},"next":{"title":"Create a namespace","permalink":"/docs/3.3.x/tutorials-namespace"}}');var a=n(74848),i=n(28453);const r={Id:"tutorials-tenant",title:"How to set up a tenant",sidebar_label:"Set up a tenant",description:"Learn how to set up a tenant in Pulsar."},o=void 0,l={},c=[{value:"Related Topics",id:"related-topics",level:4}];function d(e){const t={a:"a",code:"code",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Pulsar is a powerful messaging system you can use to process and route high volumes of data. Each ",(0,a.jsx)(t.a,{href:"/docs/3.3.x/concepts-multi-tenancy#tenants",children:"tenant"})," provides a distinct unit of isolation with its own set of roles, permissions, configuration settings, and bookmarks."]}),"\n",(0,a.jsx)(t.p,{children:'In this tutorial, you will create a new tenant, named "apache" in your Pulsar cluster, hosted in K8s helm.'}),"\n",(0,a.jsx)(t.p,{children:"To create a tenant, complete the following steps."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Enter the toolset container."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubectl exec -it -n pulsar pulsar-mini-toolset-0 -- /bin/bash\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"In the toolset container, create a tenant named apache."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"bin/pulsar-admin tenants create apache\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"List the tenants to see if the tenant is created successfully."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"bin/pulsar-admin tenants list\n"})}),"\n",(0,a.jsx)(t.p,{children:"You should see a similar output as below."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'The tenant apache has been successfully created.\n"apache"\n"public"\n"pulsar"\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"related-topics",children:"Related Topics"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/3.3.x/tutorials-namespace",children:"Create a namespace"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/3.3.x/tutorials-topic",children:"Create a topic"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/3.3.x/getting-started-helm",children:"Run a standalone cluster in Kubernetes"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);