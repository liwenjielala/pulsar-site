"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[90086],{41696:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"io-kafka-sink","title":"Kafka sink connector","description":"The Kafka sink connector pulls messages from Pulsar topics and persists the messages","source":"@site/versioned_docs/version-2.5.2/io-kafka-sink.md","sourceDirName":".","slug":"/io-kafka-sink","permalink":"/docs/2.5.2/io-kafka-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.2/io-kafka-sink.md","tags":[],"version":"2.5.2","frontMatter":{"id":"io-kafka-sink","title":"Kafka sink connector","sidebar_label":"Kafka sink connector","original_id":"io-kafka-sink"}}');var t=r(74848),i=r(28453);const a={id:"io-kafka-sink",title:"Kafka sink connector",sidebar_label:"Kafka sink connector",original_id:"io-kafka-sink"},o=void 0,c={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"The Kafka sink connector pulls messages from Pulsar topics and persists the messages\nto Kafka topics."}),"\n",(0,t.jsx)(s.p,{children:"This guide explains how to configure and use the Kafka sink connector."}),"\n",(0,t.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(s.p,{children:"The configuration of the Kafka sink connector has the following parameters."}),"\n",(0,t.jsx)(s.h3,{id:"property",children:"Property"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Default"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"bootstrapServers"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"true"}),(0,t.jsx)(s.td,{children:'" " (empty string)'}),(0,t.jsx)(s.td,{children:"A comma-separated list of host and port pairs for establishing the initial connection to the Kafka cluster."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"acks"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"true"}),(0,t.jsx)(s.td,{children:'" " (empty string)'}),(0,t.jsxs)(s.td,{children:["The number of acknowledgments that the producer requires the leader to receive before a request completes. ",(0,t.jsx)("br",{}),"This controls the durability of the sent records."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"batchsize"})}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"16384L"}),(0,t.jsx)(s.td,{children:"The batch size that a Kafka producer attempts to batch records together before sending them to brokers."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"maxRequestSize"})}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"1048576L"}),(0,t.jsx)(s.td,{children:"The maximum size of a Kafka request in bytes."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"topic"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"true"}),(0,t.jsx)(s.td,{children:'" " (empty string)'}),(0,t.jsx)(s.td,{children:"The Kafka topic which receives messages from Pulsar."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"keyDeserializationClass"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"org.apache.kafka.common.serialization.StringSerializer"}),(0,t.jsx)(s.td,{children:"The serializer class for Kafka producers to serialize keys."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"valueDeserializationClass"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"org.apache.kafka.common.serialization.ByteArraySerializer"}),(0,t.jsxs)(s.td,{children:["The serializer class for Kafka producers to serialize values.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"The serializer is set by a specific implementation of ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaAbstractSink.java",children:(0,t.jsx)(s.code,{children:"KafkaAbstractSink"})}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"producerConfigProperties"})}),(0,t.jsx)(s.td,{children:"Map"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:'" " (empty string)'}),(0,t.jsxs)(s.td,{children:["The producer configuration properties to be passed to producers. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(s.strong,{children:"Note:  other properties specified in the connector configuration file take precedence over this configuration"}),"."]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(s.p,{children:"Before using the Kafka sink connector, you need to create a configuration file through one of the following methods."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"JSON"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'\n{\n    "bootstrapServers": "localhost:6667",\n    "topic": "test",\n    "acks": "1",\n    "batchSize": "16384",\n    "maxRequestSize": "1048576",\n    "producerConfigProperties":\n     {\n        "client.id": "test-pulsar-producer",\n        "security.protocol": "SASL_PLAINTEXT",\n        "sasl.mechanism": "GSSAPI",\n        "sasl.kerberos.service.name": "kafka",\n        "acks": "all"\n     }\n}\n\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"YAML"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:'yaml\nconfigs:\nbootstrapServers: "localhost:6667"\ntopic: "test"\nacks: "1"\nbatchSize: "16384"\nmaxRequestSize: "1048576"\nproducerConfigProperties:\nclient.id: "test-pulsar-producer"\nsecurity.protocol: "SASL_PLAINTEXT"\nsasl.mechanism: "GSSAPI"\nsasl.kerberos.service.name: "kafka"\nacks: "all"'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>o});var n=r(96540);const t={},i=n.createContext(t);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);