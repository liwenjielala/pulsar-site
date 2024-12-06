"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[35832],{20345:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"io-cassandra-sink","title":"Cassandra sink connector","description":"You can download all the Pulsar connectors on download page.","source":"@site/versioned_docs/version-4.0.x/io-cassandra-sink.md","sourceDirName":".","slug":"/io-cassandra-sink","permalink":"/docs/4.0.x/io-cassandra-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-4.0.x/io-cassandra-sink.md","tags":[],"version":"4.0.x","frontMatter":{"id":"io-cassandra-sink","title":"Cassandra sink connector","sidebar_label":"Cassandra sink connector"}}');var t=s(74848),a=s(28453);const o={id:"io-cassandra-sink",title:"Cassandra sink connector",sidebar_label:"Cassandra sink connector"},i=void 0,d={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["You can download all the Pulsar connectors on ",(0,t.jsx)(n.a,{href:"pathname:///download",children:"download page"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"The Cassandra sink connector pulls messages from Pulsar topics to Cassandra clusters."}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"The configuration of the Cassandra sink connector has the following properties."}),"\n",(0,t.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"roots"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:'" " (empty string)'}),(0,t.jsx)(n.td,{children:"A comma-separated list of Cassandra hosts to connect to."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"keyspace"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:'" " (empty string)'}),(0,t.jsxs)(n.td,{children:["The key space used for writing pulsar messages. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsxs)(n.strong,{children:["Note: ",(0,t.jsx)(n.code,{children:"keyspace"})," should be created prior to a Cassandra sink."]})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"keyname"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:'" " (empty string)'}),(0,t.jsxs)(n.td,{children:["The key name of the Cassandra column family. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"The column is used for storing Pulsar message keys. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"If a Pulsar message doesn't have any key associated, the message value is used as the key."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"columnFamily"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:'" " (empty string)'}),(0,t.jsxs)(n.td,{children:["The Cassandra column family name.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsxs)(n.strong,{children:["Note: ",(0,t.jsx)(n.code,{children:"columnFamily"})," should be created prior to a Cassandra sink."]})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"columnName"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:'" " (empty string)'}),(0,t.jsxs)(n.td,{children:["The column name of the Cassandra column family.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," The column is used for storing Pulsar message values."]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Before using the Cassandra sink connector, you need to create a configuration file through one of the following methods."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"JSON"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n   "configs": {\n      "roots": "localhost:9042",\n      "keyspace": "pulsar_test_keyspace",\n      "columnFamily": "pulsar_test_table",\n      "keyname": "key",\n      "columnName": "col"\n   }\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"YAML"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'configs:\n    roots: "localhost:9042"\n    keyspace: "pulsar_test_keyspace"\n    columnFamily: "pulsar_test_table"\n    keyname: "key"\n    columnName: "col"\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["For more information about ",(0,t.jsx)(n.strong,{children:"how to connect Pulsar with Cassandra"}),", see ",(0,t.jsx)(n.a,{href:"/docs/4.0.x/io-quickstart#connect-pulsar-to-cassandra",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var r=s(96540);const t={},a=r.createContext(t);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);