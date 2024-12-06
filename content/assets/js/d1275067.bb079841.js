"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[12457],{17302:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"client-libraries-node-configs","title":"Pulsar Node.js client configurations","description":"Client configs","source":"@site/versioned_docs/version-3.1.x/client-libraries-node-configs.md","sourceDirName":".","slug":"/client-libraries-node-configs","permalink":"/docs/3.1.x/client-libraries-node-configs","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/client-libraries-node-configs.md","tags":[],"version":"3.1.x","frontMatter":{"id":"client-libraries-node-configs","title":"Pulsar Node.js client configurations","sidebar_label":"Configs"},"sidebar":"docsSidebar","previous":{"title":"Use","permalink":"/docs/3.1.x/client-libraries-node-use"},"next":{"title":"C# client","permalink":"/docs/3.1.x/client-libraries-dotnet"}}');var i=s(74848),n=s(28453);const r={id:"client-libraries-node-configs",title:"Pulsar Node.js client configurations",sidebar_label:"Configs"},d=void 0,c={},o=[{value:"Client configs",id:"client-configs",level:2},{value:"Producer configs",id:"producer-configs",level:2},{value:"Consumer configs",id:"consumer-configs",level:2},{value:"Reader configs",id:"reader-configs",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"client-configs",children:"Client configs"}),"\n",(0,i.jsx)(t.p,{children:"The following configurable parameters are available for Pulsar Node.js clients:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"serviceUrl"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["The connection URL for the Pulsar cluster. See ",(0,i.jsx)(t.a,{href:"#connection-urls",children:"above"})," for more info."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"authentication"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Configure the authentication provider. (default: no authentication). See ",(0,i.jsx)(t.a,{href:"/docs/3.1.x/security-tls-authentication",children:"mTLS authentication"})," for more info."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"operationTimeoutSeconds"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["The timeout for Node.js client operations (creating producers, subscribing to and unsubscribing from ",(0,i.jsx)(t.a,{href:"/docs/3.1.x/reference-terminology#topic",children:"topics"}),"). Retries occur until this threshold is reached, at which point the operation fails."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"30"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"ioThreads"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["The number of threads to use for handling connections to Pulsar ",(0,i.jsx)(t.a,{href:"/docs/3.1.x/reference-terminology#broker",children:"brokers"}),"."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"messageListenerThreads"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["The number of threads used by message listeners (",(0,i.jsx)(t.a,{href:"#consumers",children:"consumers"})," and ",(0,i.jsx)(t.a,{href:"#readers",children:"readers"}),")."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"concurrentLookupRequest"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The number of concurrent lookup requests that can be sent on each broker connection. Setting a maximum helps to keep from overloading brokers. You should set values over the default of 50000 only if the client needs to produce and/or subscribe to thousands of Pulsar topics."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"50000"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"tlsTrustCertsFilePath"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The file path for the trusted TLS certificate."}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"tlsValidateHostname"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The boolean value of setup whether to enable TLS hostname verification."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"tlsAllowInsecureConnection"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The boolean value of setup whether the Pulsar client accepts untrusted TLS certificate from broker."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"statsIntervalInSeconds"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Interval between each stat info. Stats is activated with positive statsInterval. The value should be set to 1 second at least"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"600"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"log"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"A function that is used for logging."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"console.log"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"producer-configs",children:"Producer configs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"topic"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["The Pulsar ",(0,i.jsx)(t.a,{href:"/docs/3.1.x/reference-terminology#topic",children:"topic"})," to which the producer publishes messages. The topic format is ",(0,i.jsx)(t.code,{children:"<topic-name>"})," or ",(0,i.jsx)(t.code,{children:"<tenant-name>/<namespace-name>/<topic-name>"}),". For example, ",(0,i.jsx)(t.code,{children:"sample/ns1/my-topic"}),"."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"producerName"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["A name for the producer. If you do not explicitly assign a name, Pulsar automatically generates a globally unique name.  If you choose to explicitly assign a name, it needs to be unique across ",(0,i.jsx)(t.em,{children:"all"})," Pulsar clusters, otherwise the creation operation throws an error."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"sendTimeoutMs"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["When publishing a message to a topic, the producer waits for an acknowledgment from the responsible Pulsar ",(0,i.jsx)(t.a,{href:"/docs/3.1.x/reference-terminology#broker",children:"broker"}),". If a message is not acknowledged within the threshold set by this parameter, an error is thrown. If you set ",(0,i.jsx)(t.code,{children:"sendTimeoutMs"})," to -1, the timeout is set to infinity (and thus removed). Removing the send timeout is recommended when using Pulsar's ",(0,i.jsx)(t.a,{href:"/docs/3.1.x/cookbooks-deduplication",children:"message de-duplication"})," feature."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"30000"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"initialSequenceId"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The initial sequence ID of the message. When producer send message, add sequence ID to message. The ID is increased each time to send."}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"maxPendingMessages"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["The maximum size of the queue holding pending messages (i.e. messages waiting to receive an acknowledgment from the ",(0,i.jsx)(t.a,{href:"/docs/3.1.x/reference-terminology#broker",children:"broker"}),"). By default, when the queue is full all calls to the ",(0,i.jsx)(t.code,{children:"send"})," method fails ",(0,i.jsx)(t.em,{children:"unless"})," ",(0,i.jsx)(t.code,{children:"blockIfQueueFull"})," is set to ",(0,i.jsx)(t.code,{children:"true"}),"."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1000"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"maxPendingMessagesAcrossPartitions"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The maximum size of the sum of partition's  pending queue."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"50000"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"blockIfQueueFull"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["If set to ",(0,i.jsx)(t.code,{children:"true"}),", the producer's ",(0,i.jsx)(t.code,{children:"send"})," method waits when the outgoing message queue is full rather than failing and throwing an error (the size of that queue is dictated by the ",(0,i.jsx)(t.code,{children:"maxPendingMessages"})," parameter); if set to ",(0,i.jsx)(t.code,{children:"false"})," (the default), ",(0,i.jsx)(t.code,{children:"send"})," operations fails and throw a error when the queue is full."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"messageRoutingMode"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["The message routing logic (for producers on ",(0,i.jsx)(t.a,{href:"/docs/3.1.x/concepts-messaging#partitioned-topics",children:"partitioned topics"}),"). This logic is applied only when no key is set on messages. The available options are: round robin (",(0,i.jsx)(t.code,{children:"RoundRobinDistribution"}),"), or publishing all messages to a single partition (",(0,i.jsx)(t.code,{children:"UseSinglePartition"}),", the default)."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"UseSinglePartition"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"hashingScheme"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["The hashing function that determines the partition on which a particular message is published (partitioned topics only). The available options are: ",(0,i.jsx)(t.code,{children:"JavaStringHash"})," (the equivalent of ",(0,i.jsx)(t.code,{children:"String.hashCode()"})," in Java), ",(0,i.jsx)(t.code,{children:"Murmur3_32Hash"})," (applies the ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/MurmurHash",children:"Murmur3"})," hashing function), or ",(0,i.jsx)(t.code,{children:"BoostHash"})," (applies the hashing function from C++'s ",(0,i.jsx)(t.a,{href:"https://www.boost.org/doc/libs/1_62_0/doc/html/hash.html",children:"Boost"})," library)."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"BoostHash"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"compressionType"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["The message data compression type used by the producer. The available options are ",(0,i.jsx)(t.a,{href:"https://github.com/lz4/lz4",children:(0,i.jsx)(t.code,{children:"LZ4"})}),", and ",(0,i.jsx)(t.a,{href:"https://zlib.net/",children:(0,i.jsx)(t.code,{children:"Zlib"})}),", ",(0,i.jsx)(t.a,{href:"https://github.com/facebook/zstd/",children:"ZSTD"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/google/snappy/",children:"SNAPPY"}),"."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Compression None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"batchingEnabled"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["If set to ",(0,i.jsx)(t.code,{children:"true"}),", the producer send message as batch."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"true"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"batchingMaxPublishDelayMs"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The maximum time of delay sending message in batching."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"10"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"batchingMaxMessages"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The maximum size of sending message in each time of batching."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1000"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"properties"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The metadata of producer."}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"consumer-configs",children:"Consumer configs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"topic"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The Pulsar topic on which the consumer establishes a subscription and listen for messages."}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"topics"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The array of topics."}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"topicsPattern"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The regular expression for topics."}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"subscription"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The subscription name for this consumer."}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"subscriptionType"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Available options are ",(0,i.jsx)(t.code,{children:"Exclusive"}),", ",(0,i.jsx)(t.code,{children:"Shared"}),", ",(0,i.jsx)(t.code,{children:"Key_Shared"}),", and ",(0,i.jsx)(t.code,{children:"Failover"}),"."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"Exclusive"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"subscriptionInitialPosition"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Initial position at which to set cursor when subscribing to a topic at first time."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"SubscriptionInitialPosition.Latest"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"ackTimeoutMs"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Acknowledge timeout in milliseconds."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nAckRedeliverTimeoutMs"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Delay to wait before redelivering messages that failed to be processed."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"60000"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"receiverQueueSize"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Sets the size of the consumer's receiver queue, i.e. the number of messages that can be accumulated by the consumer before the application calls ",(0,i.jsx)(t.code,{children:"receive"}),". A value higher than the default of 1000 could increase consumer throughput, though at the expense of more memory utilization."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1000"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"receiverQueueSizeAcrossPartitions"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Set the max total receiver queue size across partitions. This setting is used to reduce the receiver queue size for individual partitions if the total exceeds this value."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"50000"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"consumerName"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["The name of consumer. Currently(v2.4.1), ",(0,i.jsx)(t.a,{href:"/docs/3.1.x/concepts-messaging#failover",children:"failover"})," mode use consumer name in ordering."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"properties"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The metadata of consumer."}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"listener"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"A listener that is called for a message received."}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"readCompacted"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["If enabling ",(0,i.jsx)(t.code,{children:"readCompacted"}),", a consumer reads messages from a compacted topic rather than reading a full message backlog of a topic.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"A consumer only sees the latest value for each key in the compacted topic, up until reaching the point in the topic message when compacting backlog. Beyond that point, send messages as normal.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})," ",(0,i.jsx)(t.code,{children:"readCompacted"})," can only be enabled on subscriptions to persistent topics, which have a single active consumer (like failure or exclusive subscriptions).",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Attempting to enable it on subscriptions to non-persistent topics or on shared subscriptions leads to a subscription call throwing a ",(0,i.jsx)(t.code,{children:"PulsarClientException"}),"."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"false"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"reader-configs",children:"Reader configs"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"topic"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["The Pulsar ",(0,i.jsx)(t.a,{href:"/docs/3.1.x/reference-terminology#topic",children:"topic"})," on which the reader establishes a subscription and listen for messages."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"startMessageId"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["The initial reader position, i.e. the message at which the reader begins processing messages. The options are ",(0,i.jsx)(t.code,{children:"Pulsar.MessageId.earliest"})," (the earliest available message on the topic), ",(0,i.jsx)(t.code,{children:"Pulsar.MessageId.latest"})," (the latest available message on the topic), or a message ID object for a position that is not earliest or latest."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"receiverQueueSize"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Sets the size of the reader's receiver queue, i.e. the number of messages that can be accumulated by the reader before the application calls ",(0,i.jsx)(t.code,{children:"readNext"}),". A value higher than the default of 1000 could increase reader throughput, though at the expense of more memory utilization."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1000"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"readerName"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The name of the reader."}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"subscriptionRolePrefix"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The subscription role prefix."}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"readCompacted"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["If enabling ",(0,i.jsx)(t.code,{children:"readCompacted"}),", a consumer reads messages from a compacted topic rather than reading a full message backlog of a topic.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"A consumer only sees the latest value for each key in the compacted topic, up until reaching the point in the topic message when compacting backlog. Beyond that point, send messages as normal.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})," ",(0,i.jsx)(t.code,{children:"readCompacted"})," can only be enabled on subscriptions to persistent topics, which have a single active consumer (like failure or exclusive subscriptions).",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Attempting to enable it on subscriptions to non-persistent topics or on shared subscriptions leads to a subscription call throwing a ",(0,i.jsx)(t.code,{children:"PulsarClientException"}),"."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>d});var l=s(96540);const i={},n=l.createContext(i);function r(e){const t=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(n.Provider,{value:t},e.children)}}}]);