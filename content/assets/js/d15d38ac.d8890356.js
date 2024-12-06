"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[84340],{31698:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"io-hbase-sink","title":"HBase sink connector","description":"You can download all the Pulsar connectors on download page.","source":"@site/versioned_docs/version-2.11.x/io-hbase-sink.md","sourceDirName":".","slug":"/io-hbase-sink","permalink":"/docs/2.11.x/io-hbase-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/io-hbase-sink.md","tags":[],"version":"2.11.x","frontMatter":{"id":"io-hbase-sink","title":"HBase sink connector","sidebar_label":"HBase sink connector"}}');var r=s(74848),i=s(28453);const d={id:"io-hbase-sink",title:"HBase sink connector",sidebar_label:"HBase sink connector"},o=void 0,l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["You can download all the Pulsar connectors on ",(0,r.jsx)(n.a,{href:"pathname:///download",children:"download page"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"The HBase sink connector pulls the messages from Pulsar topics and persists the messages to HBase tables"}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"The configuration of the HBase sink connector has the following properties."}),"\n",(0,r.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"hbaseConfigResources"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsxs)(n.td,{children:["HBase system configuration ",(0,r.jsx)(n.code,{children:"hbase-site.xml"})," file."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"zookeeperQuorum"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsxs)(n.td,{children:["HBase system configuration about ",(0,r.jsx)(n.code,{children:"hbase.zookeeper.quorum"})," value."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"zookeeperClientPort"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"2181"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsxs)(n.td,{children:["HBase system configuration about ",(0,r.jsx)(n.code,{children:"hbase.zookeeper.property.clientPort"})," value."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"zookeeperZnodeParent"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"/hbase"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsxs)(n.td,{children:["HBase system configuration about ",(0,r.jsx)(n.code,{children:"zookeeper.znode.parent"})," value."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"tableName"})}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsxs)(n.td,{children:["HBase table, the value is ",(0,r.jsx)(n.code,{children:"namespace:tableName"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"rowKeyName"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"HBase table rowkey name."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"familyName"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"HBase table column family name."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"qualifierNames"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"HBase table column qualifier names."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"batchTimeMs"})}),(0,r.jsx)(n.td,{children:"Long"}),(0,r.jsx)(n.td,{children:"1000l"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"HBase table operation timeout in milliseconds."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"batchSize"})}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"200"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"Batch size of updates made to the HBase table."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Before using the HBase sink connector, you need to create a configuration file through one of the following methods."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"JSON"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n   "configs": {\n      "hbaseConfigResources": "hbase-site.xml",\n      "zookeeperQuorum": "localhost",\n      "zookeeperClientPort": "2181",\n      "zookeeperZnodeParent": "/hbase",\n      "tableName": "pulsar_hbase",\n      "rowKeyName": "rowKey",\n      "familyName": "info",\n      "qualifierNames": [ \'name\', \'address\', \'age\']\n   }\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"YAML"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'configs:\n    hbaseConfigResources: "hbase-site.xml"\n    zookeeperQuorum: "localhost"\n    zookeeperClientPort: "2181"\n    zookeeperZnodeParent: "/hbase"\n    tableName: "pulsar_hbase"\n    rowKeyName: "rowKey"\n    familyName: "info"\n    qualifierNames: [ \'name\', \'address\', \'age\']\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var t=s(96540);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);