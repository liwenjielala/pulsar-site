"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[55968],{9272:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"io-mongo-sink","title":"MongoDB sink connector","description":"The MongoDB sink connector pulls messages from Pulsar topics","source":"@site/versioned_docs/version-2.7.0/io-mongo-sink.md","sourceDirName":".","slug":"/io-mongo-sink","permalink":"/docs/2.7.0/io-mongo-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.0/io-mongo-sink.md","tags":[],"version":"2.7.0","frontMatter":{"id":"io-mongo-sink","title":"MongoDB sink connector","sidebar_label":"MongoDB sink connector","original_id":"io-mongo-sink"}}');var s=o(74848),i=o(28453);const r={id:"io-mongo-sink",title:"MongoDB sink connector",sidebar_label:"MongoDB sink connector",original_id:"io-mongo-sink"},c=void 0,l={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The MongoDB sink connector pulls messages from Pulsar topics\nand persists the messages to collections."}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"The configuration of the MongoDB sink connector has the following properties."}),"\n",(0,s.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"mongoUri"})}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:'" " (empty string)'}),(0,s.jsxs)(n.td,{children:["The MongoDB URI to which the connector connects. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"For more information, see ",(0,s.jsx)(n.a,{href:"https://docs.mongodb.com/manual/reference/connection-string/",children:"connection string URI format"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"database"})}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:'" " (empty string)'}),(0,s.jsx)(n.td,{children:"The database name to which the collection belongs."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"collection"})}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:'" " (empty string)'}),(0,s.jsx)(n.td,{children:"The collection name to which the connector writes messages."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"batchSize"})}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"100"}),(0,s.jsx)(n.td,{children:"The batch size of writing messages to collections."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"batchTimeMs"})}),(0,s.jsx)(n.td,{children:"long"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"1000"}),(0,s.jsx)(n.td,{children:"The batch operation interval in milliseconds."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Before using the Mongo sink connector, you need to create a configuration file through one of the following methods."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"JSON"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'\n{\n    "mongoUri": "mongodb://localhost:27017",\n    "database": "pulsar",\n    "collection": "messages",\n    "batchSize": "2",\n    "batchTimeMs": "500"\n}\n\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"YAML"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'\nconfigs:\n    mongoUri: "mongodb://localhost:27017"\n    database: "pulsar"\n    collection: "messages"\n    batchSize: 2\n    batchTimeMs: 500\n\n'})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var t=o(96540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);