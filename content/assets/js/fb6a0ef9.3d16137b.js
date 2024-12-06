"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[17750],{27367:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"concepts-clients","title":"Pulsar Clients","description":"Pulsar exposes a client API with language bindings for Java,  Go, Python and C++. The client API optimizes and encapsulates Pulsar\'s client-broker communication protocol and exposes a simple and intuitive API for use by applications.","source":"@site/versioned_docs/version-2.6.4/concepts-clients.md","sourceDirName":".","slug":"/concepts-clients","permalink":"/docs/2.6.4/concepts-clients","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.4/concepts-clients.md","tags":[],"version":"2.6.4","frontMatter":{"id":"concepts-clients","title":"Pulsar Clients","sidebar_label":"Clients","original_id":"concepts-clients"},"sidebar":"docsSidebar","previous":{"title":"Architecture","permalink":"/docs/2.6.4/concepts-architecture-overview"},"next":{"title":"Geo Replication","permalink":"/docs/2.6.4/concepts-replication"}}');var i=t(74848),a=t(28453);const r={id:"concepts-clients",title:"Pulsar Clients",sidebar_label:"Clients",original_id:"concepts-clients"},o=void 0,c={},l=[{value:"Custom client libraries",id:"custom-client-libraries",level:4},{value:"Client setup phase",id:"client-setup-phase",level:2},{value:"Reader interface",id:"reader-interface",level:2},{value:"Non-partitioned topics only",id:"non-partitioned-topics-only",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Pulsar exposes a client API with language bindings for ",(0,i.jsx)(n.a,{href:"/docs/2.6.4/client-libraries-java",children:"Java"}),",  ",(0,i.jsx)(n.a,{href:"/docs/2.6.4/client-libraries-go",children:"Go"}),", ",(0,i.jsx)(n.a,{href:"/docs/2.6.4/client-libraries-python",children:"Python"})," and ",(0,i.jsx)(n.a,{href:"/docs/2.6.4/client-libraries-cpp",children:"C++"}),". The client API optimizes and encapsulates Pulsar's client-broker communication protocol and exposes a simple and intuitive API for use by applications."]}),"\n",(0,i.jsx)(n.p,{children:"Under the hood, the current official Pulsar client libraries support transparent reconnection and/or connection failover to brokers, queuing of messages until acknowledged by the broker, and heuristics such as connection retries with backoff."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.h4,{id:"custom-client-libraries",children:"Custom client libraries"}),"\n",(0,i.jsxs)(n.p,{children:["If you'd like to create your own client library, we recommend consulting the documentation on Pulsar's custom ",(0,i.jsx)(n.a,{href:"/docs/2.6.4/developing-binary-protocol",children:"binary protocol"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"client-setup-phase",children:"Client setup phase"}),"\n",(0,i.jsx)(n.p,{children:"When an application wants to create a producer/consumer, the Pulsar client library will initiate a setup phase that is composed of two steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The client will attempt to determine the owner of the topic by sending an HTTP lookup request to the broker. The request could reach one of the active brokers which, by looking at the (cached) zookeeper metadata will know who is serving the topic or, in case nobody is serving it, will try to assign it to the least loaded broker."}),"\n",(0,i.jsx)(n.li,{children:"Once the client library has the broker address, it will create a TCP connection (or reuse an existing connection from the pool) and authenticate it. Within this connection, client and broker exchange binary commands from a custom protocol. At this point the client will send a command to create producer/consumer to the broker, which will comply after having validated the authorization policy."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Whenever the TCP connection breaks, the client will immediately re-initiate this setup phase and will keep trying with exponential backoff to re-establish the producer or consumer until the operation succeeds."}),"\n",(0,i.jsx)(n.h2,{id:"reader-interface",children:"Reader interface"}),"\n",(0,i.jsxs)(n.p,{children:['In Pulsar, the "standard" ',(0,i.jsx)(n.a,{href:"/docs/2.6.4/concepts-messaging#consumers",children:"consumer interface"})," involves using consumers to listen on ",(0,i.jsx)(n.a,{href:"/docs/2.6.4/reference-terminology#topic",children:"topics"}),", process incoming messages, and finally acknowledge those messages when they've been processed.  Whenever a new subscription is created, it is initially positioned at the end of the topic (by default), and consumers associated with that subscription will begin reading with the first message created afterwards.  Whenever a consumer connects to a topic using a pre-existing subscription, it begins reading from the earliest message un-acked within that subscription.  In summary, with the consumer interface, subscription cursors are automatically managed by Pulsar in response to ",(0,i.jsx)(n.a,{href:"/docs/2.6.4/concepts-messaging#acknowledgement",children:"message acknowledgements"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"reader interface"})," for Pulsar enables applications to manually manage cursors. When you use a reader to connect to a topic---rather than a consumer---you need to specify ",(0,i.jsx)(n.em,{children:"which"})," message the reader begins reading from when it connects to a topic. When connecting to a topic, the reader interface enables you to begin with:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"earliest"})," available message in the topic"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"latest"})," available message in the topic"]}),"\n",(0,i.jsx)(n.li,{children:'Some other message between the earliest and the latest. If you select this option, you\'ll need to explicitly provide a message ID. Your application will be responsible for "knowing" this message ID in advance, perhaps fetching it from a persistent data store or cache.'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'The reader interface is helpful for use cases like using Pulsar to provide effectively-once processing semantics for a stream processing system. For this use case, it\'s essential that the stream processing system be able to "rewind" topics to a specific message and begin reading there. The reader interface provides Pulsar clients with the low-level abstraction necessary to "manually position" themselves within a topic.'}),"\n",(0,i.jsx)(n.p,{children:"Internally, the reader interface is implemented as a consumer using an exclusive, non-durable subscription to the topic with a randomly-allocated name."}),"\n",(0,i.jsxs)(n.p,{children:["[ ",(0,i.jsx)(n.strong,{children:"IMPORTANT"})," ]"]}),"\n",(0,i.jsxs)(n.p,{children:["Unlike subscription/consumer, readers are non-durable in nature and will not prevent data in a topic from being deleted, thus it is ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"strongly"})})," advised that ",(0,i.jsx)(n.a,{href:"/docs/2.6.4/cookbooks-retention-expiry",children:"data retention"})," be configured.   If data retention for a topic is not configured for an adequate amount of time, messages that the reader has not yet read might be deleted .  This will cause readers to essentially skip messages.  Configuring the data retention for a topic guarantees the reader with have a certain duration to read a message."]}),"\n",(0,i.jsx)(n.p,{children:'Please also note that a reader can have a "backlog", but the metric is just to allow users to know how behind the reader is and is not considered for any backlog quota calculations.'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"The Pulsar consumer and reader interfaces",src:t(34968).A+"",width:"1289",height:"1720"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.h3,{id:"non-partitioned-topics-only",children:"Non-partitioned topics only"}),"\n",(0,i.jsxs)(n.p,{children:["The reader interface for Pulsar cannot currently be used with ",(0,i.jsx)(n.a,{href:"/docs/2.6.4/concepts-messaging#partitioned-topics",children:"partitioned topics"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Here's a Java example that begins reading from the earliest available message on a topic:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'\nimport org.apache.pulsar.client.api.Message;\nimport org.apache.pulsar.client.api.MessageId;\nimport org.apache.pulsar.client.api.Reader;\n\n// Create a reader on a topic and for a specific message (and onward)\nReader<byte[]> reader = pulsarClient.newReader()\n    .topic("reader-api-test")\n    .startMessageId(MessageId.earliest)\n    .create();\n\nwhile (true) {\n    Message message = reader.readNext();\n\n    // Process the message\n}\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"To create a reader that will read from the latest available message:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nReader<byte[]> reader = pulsarClient.newReader()\n    .topic(topic)\n    .startMessageId(MessageId.latest)\n    .create();\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"To create a reader that will read from some message between earliest and latest:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nbyte[] msgIdBytes = // Some byte array\nMessageId id = MessageId.fromByteArray(msgIdBytes);\nReader<byte[]> reader = pulsarClient.newReader()\n    .topic(topic)\n    .startMessageId(id)\n    .create();\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},34968:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/pulsar-reader-consumer-interfaces-4c838d3fa1b811f2c074087d44b991ea.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);