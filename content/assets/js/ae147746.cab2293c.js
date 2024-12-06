"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6342],{34418:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"io-cassandra-sink","title":"Cassandra sink connector","description":"The Cassandra sink connector pulls messages from Pulsar topics to Cassandra clusters.","source":"@site/versioned_docs/version-2.6.1/io-cassandra-sink.md","sourceDirName":".","slug":"/io-cassandra-sink","permalink":"/docs/2.6.1/io-cassandra-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.1/io-cassandra-sink.md","tags":[],"version":"2.6.1","frontMatter":{"id":"io-cassandra-sink","title":"Cassandra sink connector","sidebar_label":"Cassandra sink connector","original_id":"io-cassandra-sink"}}');var t=n(74848),a=n(28453);const i={id:"io-cassandra-sink",title:"Cassandra sink connector",sidebar_label:"Cassandra sink connector",original_id:"io-cassandra-sink"},o=void 0,c={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"The Cassandra sink connector pulls messages from Pulsar topics to Cassandra clusters."}),"\n",(0,t.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(s.p,{children:"The configuration of the Cassandra sink connector has the following properties."}),"\n",(0,t.jsx)(s.h3,{id:"property",children:"Property"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Default"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"roots"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"true"}),(0,t.jsx)(s.td,{children:'" " (empty string)'}),(0,t.jsx)(s.td,{children:"A comma-separated list of Cassandra hosts to connect to."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"keyspace"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"true"}),(0,t.jsx)(s.td,{children:'" " (empty string)'}),(0,t.jsxs)(s.td,{children:["The key space used for writing pulsar messages. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsxs)(s.strong,{children:["Note: ",(0,t.jsx)(s.code,{children:"keyspace"})," should be created prior to a Cassandra sink."]})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"keyname"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"true"}),(0,t.jsx)(s.td,{children:'" " (empty string)'}),(0,t.jsxs)(s.td,{children:["The key name of the Cassandra column family. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"The column is used for storing Pulsar message keys. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"If a Pulsar message doesn't have any key associated, the message value is used as the key."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"columnFamily"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"true"}),(0,t.jsx)(s.td,{children:'" " (empty string)'}),(0,t.jsxs)(s.td,{children:["The Cassandra column family name.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsxs)(s.strong,{children:["Note: ",(0,t.jsx)(s.code,{children:"columnFamily"})," should be created prior to a Cassandra sink."]})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"columnName"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"true"}),(0,t.jsx)(s.td,{children:'" " (empty string)'}),(0,t.jsxs)(s.td,{children:["The column name of the Cassandra column family.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," The column is used for storing Pulsar message values."]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(s.p,{children:"Before using the Cassandra sink connector, you need to create a configuration file through one of the following methods."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"JSON"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'\n{\n    "roots": "localhost:9042",\n    "keyspace": "pulsar_test_keyspace",\n    "columnFamily": "pulsar_test_table",\n    "keyname": "key",\n    "columnName": "col"\n}\n\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"YAML"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'\nconfigs:\n    roots: "localhost:9042"\n    keyspace: "pulsar_test_keyspace"\n    columnFamily: "pulsar_test_table"\n    keyname: "key"\n    columnName: "col"\n\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(s.p,{children:["For more information about ",(0,t.jsx)(s.strong,{children:"how to connect Pulsar with Cassandra"}),", see ",(0,t.jsx)(s.a,{href:"/docs/2.6.1/io-quickstart#connect-pulsar-to-apache-cassandra",children:"here"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var r=n(96540);const t={},a=r.createContext(t);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);