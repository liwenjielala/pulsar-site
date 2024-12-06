"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[98091],{40189:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"functions-develop-schema-registry","title":"Use schema registry","description":"Learn to develop functions using schema registry in Pulsar.","source":"@site/versioned_docs/version-3.3.x/functions-develop-schema-registry.md","sourceDirName":".","slug":"/functions-develop-schema-registry","permalink":"/docs/3.3.x/functions-develop-schema-registry","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/functions-develop-schema-registry.md","tags":[],"version":"3.3.x","frontMatter":{"id":"functions-develop-schema-registry","title":"Use schema registry","sidebar_label":"Use schema registry","description":"Learn to develop functions using schema registry in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"Call Pulsar admin APIs","permalink":"/docs/3.3.x/functions-develop-admin-api"},"next":{"title":"Use SerDe","permalink":"/docs/3.3.x/functions-develop-serde"}}');var r=t(74848),i=t(28453);const c={id:"functions-develop-schema-registry",title:"Use schema registry",sidebar_label:"Use schema registry",description:"Learn to develop functions using schema registry in Pulsar."},d=void 0,a={},o=[];function l(e){const s={a:"a",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Pulsar has a built-in ",(0,r.jsx)(s.a,{href:"/docs/3.3.x/schema-overview",children:"schema registry"})," and is bundled with popular ",(0,r.jsx)(s.a,{href:"/docs/3.3.x/schema-understand#schema-type",children:"schema types"}),". Pulsar Functions can leverage the existing schema information from input topics and derive the input type. The schema registry applies to output topics as well."]}),"\n",(0,r.jsx)(s.p,{children:"The following table outlines the supportability of schema types in Pulsar Functions."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Schema Type"}),(0,r.jsx)(s.th,{children:"Java Function"}),(0,r.jsx)(s.th,{children:"Python Function"}),(0,r.jsx)(s.th,{children:"Go Function"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"\u2705"}),(0,r.jsx)(s.td,{children:"\u2705"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Avro"}),(0,r.jsx)(s.td,{children:"\u2705"}),(0,r.jsx)(s.td,{children:"\u2705"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"JSON"}),(0,r.jsx)(s.td,{children:"\u2705"}),(0,r.jsx)(s.td,{children:"\u2705"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Protobuf"}),(0,r.jsx)(s.td,{children:"\u2705"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ProtobufNative"}),(0,r.jsx)(s.td,{children:"\u2705"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Key/Value"}),(0,r.jsx)(s.td,{children:"\u2705"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"AUTO_PRODUCE"}),(0,r.jsx)(s.td,{children:"\u2705"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"AUTO_CONSUME"}),(0,r.jsx)(s.td,{children:"\u2705"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["For more code examples, see ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/java-examples/src/main/java/org/apache/pulsar/functions/api/examples/AutoSchemaFunction.java",children:"Java Functions"})," and ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/python-examples/",children:"Python Functions"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>d});var n=t(96540);const r={},i=n.createContext(r);function c(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);