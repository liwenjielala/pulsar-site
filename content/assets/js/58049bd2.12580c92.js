"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[18203],{53214:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"adaptors-storm","title":"Pulsar adaptor for Apache Storm","description":"Pulsar Storm is an adaptor for integrating with Apache Storm topologies. It provides core Storm implementations for sending and receiving data.","source":"@site/versioned_docs/version-2.7.5/adaptors-storm.md","sourceDirName":".","slug":"/adaptors-storm","permalink":"/docs/2.7.5/adaptors-storm","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.5/adaptors-storm.md","tags":[],"version":"2.7.5","frontMatter":{"id":"adaptors-storm","title":"Pulsar adaptor for Apache Storm","sidebar_label":"Apache Storm","original_id":"adaptors-storm"},"sidebar":"docsSidebar","previous":{"title":"Apache Spark","permalink":"/docs/2.7.5/adaptors-spark"},"next":{"title":"Topic compaction","permalink":"/docs/2.7.5/cookbooks-compaction"}}');var a=t(74848),o=t(28453);const n={id:"adaptors-storm",title:"Pulsar adaptor for Apache Storm",sidebar_label:"Apache Storm",original_id:"adaptors-storm"},l=void 0,i={},p=[{value:"Using the Pulsar Storm Adaptor",id:"using-the-pulsar-storm-adaptor",level:2},{value:"Pulsar Spout",id:"pulsar-spout",level:2},{value:"Pulsar Bolt",id:"pulsar-bolt",level:2}];function u(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["Pulsar Storm is an adaptor for integrating with ",(0,a.jsx)(s.a,{href:"http://storm.apache.org/",children:"Apache Storm"})," topologies. It provides core Storm implementations for sending and receiving data."]}),"\n",(0,a.jsx)(s.p,{children:"An application can inject data into a Storm topology via a generic Pulsar spout, as well as consume data from a Storm topology via a generic Pulsar bolt."}),"\n",(0,a.jsx)(s.h2,{id:"using-the-pulsar-storm-adaptor",children:"Using the Pulsar Storm Adaptor"}),"\n",(0,a.jsx)(s.p,{children:"Include dependency for Pulsar Storm Adaptor:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-xml",children:"\n<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>pulsar-storm</artifactId>\n  <version>${pulsar.version}</version>\n</dependency>\n\n"})}),"\n",(0,a.jsx)(s.h2,{id:"pulsar-spout",children:"Pulsar Spout"}),"\n",(0,a.jsxs)(s.p,{children:["The Pulsar Spout allows for the data published on a topic to be consumed by a Storm topology. It emits a Storm tuple based on the message received and the ",(0,a.jsx)(s.code,{children:"MessageToValuesMapper"})," provided by the client."]}),"\n",(0,a.jsx)(s.p,{children:"The tuples that fail to be processed by the downstream bolts will be re-injected by the spout with an exponential backoff, within a configurable timeout (the default is 60 seconds) or a configurable number of retries, whichever comes first, after which it is acknowledged by the consumer. Here's an example construction of a spout:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'\nMessageToValuesMapper messageToValuesMapper = new MessageToValuesMapper() {\n\n    @Override\n    public Values toValues(Message msg) {\n        return new Values(new String(msg.getData()));\n    }\n\n    @Override\n    public void declareOutputFields(OutputFieldsDeclarer declarer) {\n        // declare the output fields\n        declarer.declare(new Fields("string"));\n    }\n};\n\n// Configure a Pulsar Spout\nPulsarSpoutConfiguration spoutConf = new PulsarSpoutConfiguration();\nspoutConf.setServiceUrl("pulsar://broker.messaging.usw.example.com:6650");\nspoutConf.setTopic("persistent://my-property/usw/my-ns/my-topic1");\nspoutConf.setSubscriptionName("my-subscriber-name1");\nspoutConf.setMessageToValuesMapper(messageToValuesMapper);\n\n// Create a Pulsar Spout\nPulsarSpout spout = new PulsarSpout(spoutConf);\n\n'})}),"\n",(0,a.jsxs)(s.p,{children:["For a complete example, click ",(0,a.jsx)(s.a,{href:"https://github.com/apache/pulsar-adapters/blob/master/pulsar-storm/src/test/java/org/apache/pulsar/storm/PulsarSpoutTest.java",children:"here"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"pulsar-bolt",children:"Pulsar Bolt"}),"\n",(0,a.jsxs)(s.p,{children:["The Pulsar bolt allows data in a Storm topology to be published on a topic. It publishes messages based on the Storm tuple received and the ",(0,a.jsx)(s.code,{children:"TupleToMessageMapper"})," provided by the client."]}),"\n",(0,a.jsxs)(s.p,{children:["A partitioned topic can also be used to publish messages on different topics. In the implementation of the ",(0,a.jsx)(s.code,{children:"TupleToMessageMapper"}),', a "key" will need to be provided in the message which will send the messages with the same key to the same topic. Here\'s an example bolt:']}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'\nTupleToMessageMapper tupleToMessageMapper = new TupleToMessageMapper() {\n\n    @Override\n    public TypedMessageBuilder<byte[]> toMessage(TypedMessageBuilder<byte[]> msgBuilder, Tuple tuple) {\n        String receivedMessage = tuple.getString(0);\n        // message processing\n        String processedMsg = receivedMessage + "-processed";\n        return msgBuilder.value(processedMsg.getBytes());\n    }\n\n    @Override\n    public void declareOutputFields(OutputFieldsDeclarer declarer) {\n        // declare the output fields\n    }\n};\n\n// Configure a Pulsar Bolt\nPulsarBoltConfiguration boltConf = new PulsarBoltConfiguration();\nboltConf.setServiceUrl("pulsar://broker.messaging.usw.example.com:6650");\nboltConf.setTopic("persistent://my-property/usw/my-ns/my-topic2");\nboltConf.setTupleToMessageMapper(tupleToMessageMapper);\n\n// Create a Pulsar Bolt\nPulsarBolt bolt = new PulsarBolt(boltConf);\n\n'})})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>n,x:()=>l});var r=t(96540);const a={},o=r.createContext(a);function n(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);