"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[34265],{87722:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"io-hbase-sink","title":"HBase sink connector","description":"The HBase sink connector pulls the messages from Pulsar topics","source":"@site/versioned_docs/version-2.5.0/io-hbase-sink.md","sourceDirName":".","slug":"/io-hbase-sink","permalink":"/docs/2.5.0/io-hbase-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.0/io-hbase-sink.md","tags":[],"version":"2.5.0","frontMatter":{"id":"io-hbase-sink","title":"HBase sink connector","sidebar_label":"HBase sink connector","original_id":"io-hbase-sink"}}');var i=s(74848),a=s(28453);const r={id:"io-hbase-sink",title:"HBase sink connector",sidebar_label:"HBase sink connector",original_id:"io-hbase-sink"},t=void 0,l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The HBase sink connector pulls the messages from Pulsar topics\nand persists the messages to HBase tables"}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"The configuration of the HBase sink connector has the following properties."}),"\n",(0,i.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,i.jsxs)(n.p,{children:["| Name | Type|Default | Required | Description |\n|------|---------|----------|-------------|\n| ",(0,i.jsx)(n.code,{children:"hbaseConfigResources"})," | String|None | false | HBase system configuration ",(0,i.jsx)(n.code,{children:"hbase-site.xml"})," file. |\n| ",(0,i.jsx)(n.code,{children:"zookeeperQuorum"})," | String|None | true | HBase system configuration about ",(0,i.jsx)(n.code,{children:"hbase.zookeeper.quorum"})," value. |\n| ",(0,i.jsx)(n.code,{children:"zookeeperClientPort"})," | String|2181 | false | HBase system configuration about ",(0,i.jsx)(n.code,{children:"hbase.zookeeper.property.clientPort"})," value. |\n| ",(0,i.jsx)(n.code,{children:"zookeeperZnodeParent"})," | String|/hbase | false | HBase system configuration about ",(0,i.jsx)(n.code,{children:"zookeeper.znode.parent"})," value. |\n| ",(0,i.jsx)(n.code,{children:"tableName"})," | None |String | true | HBase table, the value is ",(0,i.jsx)(n.code,{children:"namespace:tableName"}),". |\n| ",(0,i.jsx)(n.code,{children:"rowKeyName"})," | String|None | true | HBase table rowkey name. |\n| ",(0,i.jsx)(n.code,{children:"familyName"})," | String|None | true | HBase table column family name. |\n| ",(0,i.jsx)(n.code,{children:"qualifierNames"})," |String| None | true | HBase table column qualifier names. |\n| ",(0,i.jsx)(n.code,{children:"batchTimeMs"})," | Long|1000l| false | HBase table operation timeout in milliseconds. |\n| ",(0,i.jsx)(n.code,{children:"batchSize"})," | int|200| false | Batch size of updates made to the HBase table. |"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Before using the HBase sink connector, you need to create a configuration file through one of the following methods."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"JSON"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'\n{\n    "hbaseConfigResources": "hbase-site.xml",\n    "zookeeperQuorum": "localhost",\n    "zookeeperClientPort": "2181",\n    "zookeeperZnodeParent": "/hbase",\n    "tableName": "pulsar_hbase",\n    "rowKeyName": "rowKey",\n    "familyName": "info",\n    "qualifierNames": [ \'name\', \'address\', \'age\']\n}\n\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"YAML"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'\nconfigs:\n    hbaseConfigResources: "hbase-site.xml"\n    zookeeperQuorum: "localhost"\n    zookeeperClientPort: "2181"\n    zookeeperZnodeParent: "/hbase"\n    tableName: "pulsar_hbase"\n    rowKeyName: "rowKey"\n    familyName: "info"\n    qualifierNames: [ \'name\', \'address\', \'age\']\n\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>t});var o=s(96540);const i={},a=o.createContext(i);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);