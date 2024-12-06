"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[11174],{77265:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"io-overview","title":"Pulsar IO Overview","description":"Messaging systems are most powerful when you can easily use them in conjunction with external systems like databases and other messaging systems. Pulsar IO is a feature of Pulsar that enables you to easily create, deploy, and manage Pulsar connectors that interact with external systems, such as Apache Cassandra, Aerospike, and many others.","source":"@site/versioned_docs/version-2.2.0/io-overview.md","sourceDirName":".","slug":"/io-overview","permalink":"/docs/2.2.0/io-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.0/io-overview.md","tags":[],"version":"2.2.0","frontMatter":{"id":"io-overview","title":"Pulsar IO Overview","sidebar_label":"Overview","original_id":"io-overview"},"sidebar":"docsSidebar","previous":{"title":"Metrics","permalink":"/docs/2.2.0/functions-metrics"},"next":{"title":"Getting started","permalink":"/docs/2.2.0/io-quickstart"}}');var i=a(74848),n=a(28453);const t={id:"io-overview",title:"Pulsar IO Overview",sidebar_label:"Overview",original_id:"io-overview"},o=void 0,c={},l=[{value:"Pulsar IO and Pulsar Functions",id:"pulsar-io-and-pulsar-functions",level:4},{value:"Sources and sinks",id:"sources-and-sinks",level:2},{value:"Working with connectors",id:"working-with-connectors",level:2}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Messaging systems are most powerful when you can easily use them in conjunction with external systems like databases and other messaging systems. ",(0,i.jsx)(s.strong,{children:"Pulsar IO"})," is a feature of Pulsar that enables you to easily create, deploy, and manage Pulsar ",(0,i.jsx)(s.strong,{children:"connectors"})," that interact with external systems, such as ",(0,i.jsx)(s.a,{href:"https://cassandra.apache.org",children:"Apache Cassandra"}),", ",(0,i.jsx)(s.a,{href:"https://www.aerospike.com",children:"Aerospike"}),", and many others."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.h4,{id:"pulsar-io-and-pulsar-functions",children:"Pulsar IO and Pulsar Functions"}),"\n",(0,i.jsxs)(s.p,{children:["Under the hood, Pulsar IO connectors are specialized ",(0,i.jsx)(s.a,{href:"/docs/2.2.0/functions-overview",children:"Pulsar Functions"})," purpose-built to interface with external systems. The ",(0,i.jsx)(s.a,{href:"/docs/2.2.0/io-quickstart",children:"administrative interface"})," for Pulsar IO is, in fact, quite similar to that of Pulsar Functions."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"sources-and-sinks",children:"Sources and sinks"}),"\n",(0,i.jsx)(s.p,{children:"Pulsar IO connectors come in two types:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Sources"})," feed data ",(0,i.jsx)(s.em,{children:"into"}),' Pulsar from other systems. Common sources include other messaging systems and "firehose"-style data pipeline APIs.']}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Sinks"})," are fed data ",(0,i.jsx)(s.em,{children:"from"})," Pulsar. Common sinks include other messaging systems and SQL and NoSQL databases."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"This diagram illustrates the relationship between sources, sinks, and Pulsar:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Pulsar IO diagram",src:a(88999).A+"",title:"Pulsar IO connectors (sources and sinks)",width:"1758",height:"352"})}),"\n",(0,i.jsx)(s.h2,{id:"working-with-connectors",children:"Working with connectors"}),"\n",(0,i.jsxs)(s.p,{children:["Pulsar IO connectors can be managed via the ",(0,i.jsx)(s.a,{href:"/docs/2.2.0/reference-pulsar-admin",children:(0,i.jsx)(s.code,{children:"pulsar-admin"})})," CLI tool, in particular the ",(0,i.jsx)(s.a,{href:"/docs/2.2.0/reference-pulsar-admin#source",children:(0,i.jsx)(s.code,{children:"source"})})," and ",(0,i.jsx)(s.a,{href:"/docs/2.2.0/reference-pulsar-admin#sink",children:(0,i.jsx)(s.code,{children:"sink"})})," commands."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["For a guide to managing connectors in your Pulsar installation, see the ",(0,i.jsx)(s.a,{href:"/docs/2.2.0/io-quickstart",children:"Getting started with Pulsar IO"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The following connectors are currently available for Pulsar:"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Java Class"}),(0,i.jsx)(s.th,{children:"Documentation"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://www.aerospike.com/",children:"Aerospike sink"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/aerospike/src/main/java/org/apache/pulsar/io/aerospike/AerospikeStringSink.java",children:(0,i.jsx)(s.code,{children:"org.apache.pulsar.io.aerospike.AerospikeSink"})})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/2.2.0/io-aerospike",children:"Documentation"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://cassandra.apache.org",children:"Cassandra sink"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/cassandra/src/main/java/org/apache/pulsar/io/cassandra/CassandraStringSink.java",children:(0,i.jsx)(s.code,{children:"org.apache.pulsar.io.cassandra.CassandraSink"})})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/2.2.0/io-cassandra",children:"Documentation"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://kafka.apache.org",children:"Kafka source"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaStringSource.java",children:(0,i.jsx)(s.code,{children:"org.apache.pulsar.io.kafka.KafkaSource"})})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/2.2.0/io-kafka#source",children:"Documentation"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://kafka.apache.org",children:"Kafka sink"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaStringSink.java",children:(0,i.jsx)(s.code,{children:"org.apache.pulsar.io.kafka.KafkaSink"})})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/2.2.0/io-kafka#sink",children:"Documentation"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://aws.amazon.com/kinesis/",children:"Kinesis sink"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kinesis/src/main/java/org/apache/pulsar/io/kinesis/KinesisSink.java",children:(0,i.jsx)(s.code,{children:"org.apache.pulsar.io.kinesis.KinesisSink"})})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/2.2.0/io-kinesis#sink",children:"Documentation"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://www.rabbitmq.com",children:"RabbitMQ source"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/rabbitmq/src/main/java/org/apache/pulsar/io/rabbitmq/RabbitMQSource.java",children:(0,i.jsx)(s.code,{children:"org.apache.pulsar.io.rabbitmq.RabbitMQSource"})})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/2.2.0/io-rabbitmq#sink",children:"Documentation"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://developer.twitter.com/en/docs",children:"Twitter Firehose source"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/twitter/src/main/java/org/apache/pulsar/io/twitter/TwitterFireHose.java",children:(0,i.jsx)(s.code,{children:"org.apache.pulsar.io.twitter.TwitterFireHose"})})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/2.2.0/io-twitter#source",children:"Documentation"})})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},88999:(e,s,a)=>{a.d(s,{A:()=>r});const r=a.p+"assets/images/pulsar-io-8e834df5eaed9d5b0a7e0ffa162e850a.png"},28453:(e,s,a)=>{a.d(s,{R:()=>t,x:()=>o});var r=a(96540);const i={},n=r.createContext(i);function t(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);