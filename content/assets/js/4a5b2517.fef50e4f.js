"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8616],{38707:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"cookbooks-partitioned","title":"Partitioned topics","description":"By default, Pulsar topics are served by a single broker. Using only a single broker limits a topic\'s maximum throughput. Partitioned topics are a special type of topic that can span multiple brokers and thus allow for much higher throughput. For an explanation of how partitioned topics work, see the Partitioned Topics concepts.","source":"@site/versioned_docs/version-2.5.2/cookbooks-partitioned.md","sourceDirName":".","slug":"/cookbooks-partitioned","permalink":"/docs/2.5.2/cookbooks-partitioned","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.2/cookbooks-partitioned.md","tags":[],"version":"2.5.2","frontMatter":{"id":"cookbooks-partitioned","title":"Partitioned topics","sidebar_label":"Partitioned Topics","original_id":"cookbooks-partitioned"},"sidebar":"docsSidebar","previous":{"title":"Non-persistent messaging","permalink":"/docs/2.5.2/cookbooks-non-persistent"},"next":{"title":"Message retention and expiry","permalink":"/docs/2.5.2/cookbooks-retention-expiry"}}');var n=t(74848),s=t(28453);const r={id:"cookbooks-partitioned",title:"Partitioned topics",sidebar_label:"Partitioned Topics",original_id:"cookbooks-partitioned"},a=void 0,c={},l=[{value:"Publish to partitioned topics",id:"publish-to-partitioned-topics",level:2},{value:"Routing mode",id:"routing-mode",level:3},{value:"Custom message router",id:"custom-message-router",level:3},{value:"How to choose partitions when using a key",id:"how-to-choose-partitions-when-using-a-key",level:3},{value:"Manage partitioned topics",id:"manage-partitioned-topics",level:2}];function d(e){const i={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["By default, Pulsar topics are served by a single broker. Using only a single broker limits a topic's maximum throughput. ",(0,n.jsx)(i.em,{children:"Partitioned topics"})," are a special type of topic that can span multiple brokers and thus allow for much higher throughput. For an explanation of how partitioned topics work, see the ",(0,n.jsx)(i.a,{href:"/docs/2.5.2/concepts-messaging#partitioned-topics",children:"Partitioned Topics"})," concepts."]}),"\n",(0,n.jsxs)(i.p,{children:["You can publish to partitioned topics using Pulsar client libraries and you can ",(0,n.jsx)(i.a,{href:"#managing-partitioned-topics",children:"create and manage"})," partitioned topics using Pulsar ",(0,n.jsx)(i.a,{href:"/docs/2.5.2/admin-api-overview",children:"admin API"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"publish-to-partitioned-topics",children:"Publish to partitioned topics"}),"\n",(0,n.jsxs)(i.p,{children:["When publishing to partitioned topics, you do not need to explicitly specify a ",(0,n.jsx)(i.a,{href:"/docs/2.5.2/concepts-messaging#routing-modes",children:"routing mode"})," when you create a new producer. If you do not specify a routing mode, the round robin route mode is used. Take ",(0,n.jsx)(i.a,{href:"#java",children:"Java"})," as an example."]}),"\n",(0,n.jsxs)(i.p,{children:["Publishing messages to partitioned topics in the Java client works much like ",(0,n.jsx)(i.a,{href:"/docs/2.5.2/client-libraries-java#using-producers",children:"publishing to normal topics"}),". The difference is that you need to specify either one of the currently available message routers or a custom router."]}),"\n",(0,n.jsx)(i.h3,{id:"routing-mode",children:"Routing mode"}),"\n",(0,n.jsx)(i.p,{children:"You can specify the routing mode in the ProducerConfiguration object that you use to configure your producer. Three options are available:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"SinglePartition"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"RoundRobinPartition"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"CustomPartition"})}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"The following is an example:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:'\nString pulsarBrokerRootUrl = "pulsar://localhost:6650";\nString topic = "persistent://my-tenant/my-namespace/my-topic";\n\nPulsarClient pulsarClient = PulsarClient.builder().serviceUrl(pulsarBrokerRootUrl).build();\nProducer<byte[]> producer = pulsarClient.newProducer()\n        .topic(topic)\n        .messageRoutingMode(MessageRoutingMode.SinglePartition)\n        .create();\nproducer.send("Partitioned topic message".getBytes());\n\n'})}),"\n",(0,n.jsx)(i.h3,{id:"custom-message-router",children:"Custom message router"}),"\n",(0,n.jsxs)(i.p,{children:["To use a custom message router, you need to provide an implementation of the ",(0,n.jsx)(i.a,{href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/MessageRouter",children:"MessageRouter"})," interface, which has just one ",(0,n.jsx)(i.code,{children:"choosePartition"})," method:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:"\npublic interface MessageRouter extends Serializable {\n    int choosePartition(Message msg);\n}\n\n"})}),"\n",(0,n.jsx)(i.p,{children:"The following router routes every message to partition 10:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:"\npublic class AlwaysTenRouter implements MessageRouter {\n    public int choosePartition(Message msg) {\n        return 10;\n    }\n}\n\n"})}),"\n",(0,n.jsx)(i.p,{children:"With that implementation in hand, you can send"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:'\nString pulsarBrokerRootUrl = "pulsar://localhost:6650";\nString topic = "persistent://my-tenant/my-cluster-my-namespace/my-topic";\n\nPulsarClient pulsarClient = PulsarClient.builder().serviceUrl(pulsarBrokerRootUrl).build();\nProducer<byte[]> producer = pulsarClient.newProducer()\n        .topic(topic)\n        .messageRouter(new AlwaysTenRouter())\n        .create();\nproducer.send("Partitioned topic message".getBytes());\n\n'})}),"\n",(0,n.jsx)(i.h3,{id:"how-to-choose-partitions-when-using-a-key",children:"How to choose partitions when using a key"}),"\n",(0,n.jsx)(i.p,{children:"If a message has a key, it supersedes the round robin routing policy. The following example illustrates how to choose partition when you use a key."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:"\n// If the message has a key, it supersedes the round robin routing policy\n        if (msg.hasKey()) {\n            return signSafeMod(hash.makeHash(msg.getKey()), topicMetadata.numPartitions());\n        }\n\n        if (isBatchingEnabled) { // if batching is enabled, choose partition on `partitionSwitchMs` boundary.\n            long currentMs = clock.millis();\n            return signSafeMod(currentMs / partitionSwitchMs + startPtnIdx, topicMetadata.numPartitions());\n        } else {\n            return signSafeMod(PARTITION_INDEX_UPDATER.getAndIncrement(this), topicMetadata.numPartitions());\n        }\n\n"})}),"\n",(0,n.jsx)(i.h2,{id:"manage-partitioned-topics",children:"Manage partitioned topics"}),"\n",(0,n.jsxs)(i.p,{children:["You can use Pulsar ",(0,n.jsx)(i.a,{href:"/docs/2.5.2/admin-api-overview",children:"admin API"})," to create and manage ",(0,n.jsx)(i.a,{href:"/docs/2.5.2/admin-api-partitioned-topics",children:"partitioned topics"}),"."]})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>a});var o=t(96540);const n={},s=o.createContext(n);function r(e){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(s.Provider,{value:i},e.children)}}}]);