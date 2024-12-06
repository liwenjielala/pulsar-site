"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8273],{31669:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"sql-overview","title":"Pulsar SQL Overview","description":"Apache Pulsar is used to store streams of event data, and the event data is structured with predefined fields. With the implementation of the Schema Registry, you can store structured data in Pulsar and query the data by using Trino (formerly Presto SQL.md).","source":"@site/versioned_docs/version-2.5.2/sql-overview.md","sourceDirName":".","slug":"/sql-overview","permalink":"/docs/2.5.2/sql-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.2/sql-overview.md","tags":[],"version":"2.5.2","frontMatter":{"id":"sql-overview","title":"Pulsar SQL Overview","sidebar_label":"Overview"},"sidebar":"docsSidebar","previous":{"title":"CLI","permalink":"/docs/2.5.2/io-cli"},"next":{"title":"Query data","permalink":"/docs/2.5.2/sql-getting-started"}}');var a=r(74848),n=r(28453);const o={id:"sql-overview",title:"Pulsar SQL Overview",sidebar_label:"Overview"},i=void 0,c={},d=[];function l(e){const t={a:"a",code:"code",img:"img",p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Apache Pulsar is used to store streams of event data, and the event data is structured with predefined fields. With the implementation of the ",(0,a.jsx)(t.a,{href:"/docs/2.5.2/schema-get-started",children:"Schema Registry"}),", you can store structured data in Pulsar and query the data by using ",(0,a.jsx)(t.a,{href:"https://trino.io/",children:"Trino (formerly Presto SQL.md)"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"As the core of Pulsar SQL, Presto Pulsar connector enables Presto workers within a Presto cluster to query data from Pulsar."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"The Pulsar consumer and reader interfaces",src:r(38583).A+"",width:"1847",height:"854"})}),"\n",(0,a.jsxs)(t.p,{children:["The query performance is efficient and highly scalable, because Pulsar adopts ",(0,a.jsx)(t.a,{href:"/docs/2.5.2/concepts-architecture-overview#apache-bookkeeper",children:"two level segment based architecture"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Topics in Pulsar are stored as segments in ",(0,a.jsx)(t.a,{href:"https://bookkeeper.apache.org/",children:"Apache BookKeeper"}),". Each topic segment is replicated to some BookKeeper nodes, which enables concurrent reads and high read throughput. You can configure the number of BookKeeper nodes, and the default number is ",(0,a.jsx)(t.code,{children:"3"}),". In Presto Pulsar connector, data is read directly from BookKeeper, so Presto workers can read concurrently from horizontally scalable number BookKeeper nodes."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"The Pulsar consumer and reader interfaces",src:r(14652).A+"",width:"1847",height:"854"})})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},14652:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/pulsar-sql-arch-1-8b257e31ca5666ee351dbd8bfd3289aa.png"},38583:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/pulsar-sql-arch-2-a5eba8dcb20b1e762f3f459e05bad282.png"},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var s=r(96540);const a={},n=s.createContext(a);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);