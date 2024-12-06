"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[99209],{39569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"pulsar-2.0","title":"Pulsar 2.0","description":"Pulsar 2.0 is a major new release for Pulsar that brings some bold changes to the platform, including simplified topic names, the addition of the Pulsar Functions feature, some terminology changes, and more.","source":"@site/versioned_docs/version-2.2.1/pulsar-2.0.md","sourceDirName":".","slug":"/pulsar-2.0","permalink":"/docs/2.2.1/pulsar-2.0","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.1/pulsar-2.0.md","tags":[],"version":"2.2.1","frontMatter":{"id":"pulsar-2.0","title":"Pulsar 2.0","sidebar_label":"Pulsar 2.0"},"sidebar":"docsSidebar","previous":{"title":"About","permalink":"/docs/2.2.1/"},"next":{"title":"Run Pulsar locally","permalink":"/docs/2.2.1/getting-started-standalone"}}');var l=n(74848),i=n(28453);const r={id:"pulsar-2.0",title:"Pulsar 2.0",sidebar_label:"Pulsar 2.0"},a=void 0,o={},c=[{value:"New features in Pulsar 2.0",id:"new-features-in-pulsar-20",level:2},{value:"Major changes",id:"major-changes",level:2},{value:"Properties versus tenants",id:"properties-versus-tenants",level:3},{value:"Topic names",id:"topic-names",level:3},{value:"No cluster component",id:"no-cluster-component",level:4},{value:"Flexible topic naming",id:"flexible-topic-naming",level:4}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:["Pulsar 2.0 is a major new release for Pulsar that brings some bold changes to the platform, including ",(0,l.jsx)(t.a,{href:"#topic-names",children:"simplified topic names"}),", the addition of the ",(0,l.jsx)(t.a,{href:"/docs/2.2.1/functions-overview",children:"Pulsar Functions"})," feature, some terminology changes, and more."]}),"\n",(0,l.jsx)(t.h2,{id:"new-features-in-pulsar-20",children:"New features in Pulsar 2.0"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Feature"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/2.2.1/functions-overview",children:"Pulsar Functions"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"A lightweight compute option for Pulsar"})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"major-changes",children:"Major changes"}),"\n",(0,l.jsx)(t.p,{children:"There are a few major changes that you should be aware of, as they may significantly impact your day-to-day usage."}),"\n",(0,l.jsx)(t.h3,{id:"properties-versus-tenants",children:"Properties versus tenants"}),"\n",(0,l.jsxs)(t.p,{children:['Previously, Pulsar had a concept of properties. A property is essentially the exact same thing as a tenant, so the "property" terminology has been removed in version 2.0. The ',(0,l.jsx)(t.a,{href:"/docs/2.2.1/reference-pulsar-admin#pulsar-admin",children:(0,l.jsx)(t.code,{children:"pulsar-admin properties"})})," command-line interface, for example, has been replaced with the ",(0,l.jsx)(t.a,{href:"/docs/2.2.1/reference-pulsar-admin#pulsar-admin-tenants",children:(0,l.jsx)(t.code,{children:"pulsar-admin tenants"})})," interface. In some cases the properties terminology is still used but is now considered deprecated and will be removed entirely in a future release."]}),"\n",(0,l.jsx)(t.h3,{id:"topic-names",children:"Topic names"}),"\n",(0,l.jsxs)(t.p,{children:["Prior to version 2.0, ",(0,l.jsx)(t.em,{children:"all"})," Pulsar topics had the following form:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-http",children:"\n{persistent|non-persistent}://property/cluster/namespace/topic\n\n"})}),"\n",(0,l.jsx)(t.p,{children:"Two important changes have been made in Pulsar 2.0:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["There is no longer a ",(0,l.jsx)(t.a,{href:"#no-cluster",children:"cluster component"})]}),"\n",(0,l.jsxs)(t.li,{children:["Properties have been ",(0,l.jsx)(t.a,{href:"#tenants",children:"renamed to tenants"})]}),"\n",(0,l.jsxs)(t.li,{children:["You can use a ",(0,l.jsx)(t.a,{href:"#flexible-topic-naming",children:"flexible"})," naming system to shorten many topic names"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"/"})," is not allowed in topic name"]}),"\n"]}),"\n",(0,l.jsx)(t.h4,{id:"no-cluster-component",children:"No cluster component"}),"\n",(0,l.jsx)(t.p,{children:"The cluster component has been removed from topic names. Thus, all topic names now have the following form:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-http",children:"\n{persistent|non-persistent}://tenant/namespace/topic\n\n"})}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"Existing topics that use the legacy name format will continue to work without any change, and there are no plans to change that."}),"\n"]}),"\n",(0,l.jsx)(t.h4,{id:"flexible-topic-naming",children:"Flexible topic naming"}),"\n",(0,l.jsxs)(t.p,{children:["All topic names in Pulsar 2.0 internally have the form shown ",(0,l.jsx)(t.a,{href:"#no-cluster-component",children:"above"})," but you can now use shorthand names in many cases (for the sake of simplicity). The flexible naming system stems from the fact that there is now a default topic type, tenant, and namespace:"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Topic aspect"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"topic type"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"persistent"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"tenant"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"public"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"namespace"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"default"})})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"The table below shows some example topic name translations that use implicit defaults:"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Input topic name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Translated topic name"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"my-topic"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"persistent://public/default/my-topic"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"my-tenant/my-namespace/my-topic"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"persistent://my-tenant/my-namespace/my-topic"})})]})]})]}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.p,{children:["For ",(0,l.jsx)(t.a,{href:"/docs/2.2.1/concepts-messaging#non-persistent-topics",children:"non-persistent topics"})," you'll need to continue to specify the entire topic name, as the default-based rules for persistent topic names don't apply. Thus you cannot use a shorthand name like ",(0,l.jsx)(t.code,{children:"non-persistent://my-topic"})," and would need to use ",(0,l.jsx)(t.code,{children:"non-persistent://public/default/my-topic"})," instead"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const l={},i=s.createContext(l);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);