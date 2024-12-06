"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[14521],{98644:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"io-mongo","title":"MongoDB Connector","description":"Sink","source":"@site/versioned_docs/version-2.3.1/io-mongo.md","sourceDirName":".","slug":"/io-mongo","permalink":"/docs/2.3.1/io-mongo","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.1/io-mongo.md","tags":[],"version":"2.3.1","frontMatter":{"id":"io-mongo","title":"MongoDB Connector","sidebar_label":"MongoDB Connector","original_id":"io-mongo"}}');var i=o(74848),s=o(28453);const c={id:"io-mongo",title:"MongoDB Connector",sidebar_label:"MongoDB Connector",original_id:"io-mongo"},d=void 0,r={},l=[{value:"Sink",id:"sink",level:2},{value:"Sink Configuration Options",id:"sink-configuration-options",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"sink",children:"Sink"}),"\n",(0,i.jsx)(n.p,{children:"The MongoDB Sink Connector is used to pull messages from Pulsar topics and persist the messages\nto a collection."}),"\n",(0,i.jsx)(n.h2,{id:"sink-configuration-options",children:"Sink Configuration Options"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"mongoUri"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"null"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsxs)(n.td,{children:["The uri of mongodb that the connector connects to (see: ",(0,i.jsx)(n.a,{href:"https://docs.mongodb.com/manual/reference/connection-string/",children:"https://docs.mongodb.com/manual/reference/connection-string/"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"database"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"null"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsx)(n.td,{children:"The name of the database to which the collection belongs to."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"collection"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"null"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsx)(n.td,{children:"The collection name that the connector writes messages to."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"batchSize"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"100"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:"The batch size of write to the collection."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"batchTimeMs"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1000"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:"The batch operation interval in milliseconds."})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>d});var t=o(96540);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);