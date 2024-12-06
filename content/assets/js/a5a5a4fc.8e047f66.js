"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[72261],{39279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"sql-overview","title":"Pulsar SQL Overview","description":"One of the common use cases of Pulsar is storing streams of event data. Often the event data is structured which predefined fields.  There is tremendous value for users to be able to query the existing data that is already stored in Pulsar topics.  With the implementation of the Schema Registry, structured data can be stored in Pulsar and allows for the potential to query that data via SQL language.","source":"@site/versioned_docs/version-2.3.0/sql-overview.md","sourceDirName":".","slug":"/sql-overview","permalink":"/docs/2.3.0/sql-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.0/sql-overview.md","tags":[],"version":"2.3.0","frontMatter":{"id":"sql-overview","title":"Pulsar SQL Overview","sidebar_label":"Overview","original_id":"sql-overview"},"sidebar":"docsSidebar","previous":{"title":"CDC Connector","permalink":"/docs/2.3.0/io-cdc"},"next":{"title":"Query data","permalink":"/docs/2.3.0/sql-getting-started"}}');var a=r(74848),n=r(28453);const o={id:"sql-overview",title:"Pulsar SQL Overview",sidebar_label:"Overview",original_id:"sql-overview"},i=void 0,c={},l=[{value:"Performance",id:"performance",level:2}];function d(e){const t={a:"a",h2:"h2",img:"img",p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["One of the common use cases of Pulsar is storing streams of event data. Often the event data is structured which predefined fields.  There is tremendous value for users to be able to query the existing data that is already stored in Pulsar topics.  With the implementation of the ",(0,a.jsx)(t.a,{href:"/docs/2.3.0/concepts-schema-registry",children:"Schema Registry"}),", structured data can be stored in Pulsar and allows for the potential to query that data via SQL language."]}),"\n",(0,a.jsxs)(t.p,{children:["By leveraging ",(0,a.jsx)(t.a,{href:"https://prestosql.io/",children:"Presto"}),", we have created a method for users to be able to query structured data stored within Pulsar in a very efficient and scalable manner. We will discuss why this very efficient and scalable in the ",(0,a.jsx)(t.a,{href:"#performance",children:"Performance"})," section below."]}),"\n",(0,a.jsx)(t.p,{children:"At the core of this Pulsar SQL is the Presto Pulsar connector which allows Presto workers within a Presto cluster to query data from Pulsar."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"The Pulsar consumer and reader interfaces",src:r(38583).A+"",width:"1847",height:"854"})}),"\n",(0,a.jsx)(t.h2,{id:"performance",children:"Performance"}),"\n",(0,a.jsxs)(t.p,{children:["The reason why query performance is very efficient and highly scalable because of Pulsar's ",(0,a.jsx)(t.a,{href:"/docs/2.3.0/concepts-architecture-overview#apache-bookkeeper",children:"two level segment based architecture"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Topics in Pulsar are stored as segments in ",(0,a.jsx)(t.a,{href:"https://bookkeeper.apache.org/",children:"Apache Bookkeeper"}),". Each topic segment is also replicated to a configurable (default 3) number of Bookkeeper nodes which allows for concurrent reads and high read throughput. In the Presto Pulsar connector, we read data directly from Bookkeeper to take advantage of the Pulsar's segment based architecture.  Thus, Presto workers can read concurrently from horizontally scalable number bookkeeper nodes."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"The Pulsar consumer and reader interfaces",src:r(14652).A+"",width:"1847",height:"854"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},14652:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/pulsar-sql-arch-1-8b257e31ca5666ee351dbd8bfd3289aa.png"},38583:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/pulsar-sql-arch-2-a5eba8dcb20b1e762f3f459e05bad282.png"},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var s=r(96540);const a={},n=s.createContext(a);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);