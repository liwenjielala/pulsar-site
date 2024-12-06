"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[73320],{36730:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"cookbooks-message-queue","title":"Using Pulsar as a message queue","description":"Message queues are essential components of many large-scale data architectures. If every single work object that passes through your system absolutely must be processed in spite of the slowness or downright failure of this or that system component, there\'s a good chance that you\'ll need a message queue to step in and ensure that unprocessed data is retained---with correct ordering---until the required actions are taken.","source":"@site/versioned_docs/version-2.7.4/cookbooks-message-queue.md","sourceDirName":".","slug":"/cookbooks-message-queue","permalink":"/docs/2.7.4/cookbooks-message-queue","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.4/cookbooks-message-queue.md","tags":[],"version":"2.7.4","frontMatter":{"id":"cookbooks-message-queue","title":"Using Pulsar as a message queue","sidebar_label":"Message queue","original_id":"cookbooks-message-queue"},"sidebar":"docsSidebar","previous":{"title":"Encryption","permalink":"/docs/2.7.4/cookbooks-encryption"},"next":{"title":"BookKeeper Ledger Metadata","permalink":"/docs/2.7.4/cookbooks-bookkeepermetadata"}}');var r=n(74848),o=n(28453);const i={id:"cookbooks-message-queue",title:"Using Pulsar as a message queue",sidebar_label:"Message queue",original_id:"cookbooks-message-queue"},a="Client configuration changes",c={},u=[{value:"Java clients",id:"java-clients",level:2},{value:"Python clients",id:"python-clients",level:2},{value:"C++ clients",id:"c-clients",level:2},{value:"Go clients",id:"go-clients",level:2}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Message queues are essential components of many large-scale data architectures. If every single work object that passes through your system absolutely ",(0,r.jsx)(s.em,{children:"must"})," be processed in spite of the slowness or downright failure of this or that system component, there's a good chance that you'll need a message queue to step in and ensure that unprocessed data is retained---with correct ordering---until the required actions are taken."]}),"\n",(0,r.jsx)(s.p,{children:"Pulsar is a great choice for a message queue because:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["it was built with ",(0,r.jsx)(s.a,{href:"/docs/2.7.4/concepts-architecture-overview#persistent-storage",children:"persistent message storage"})," in mind"]}),"\n",(0,r.jsxs)(s.li,{children:["it offers automatic load balancing across ",(0,r.jsx)(s.a,{href:"/docs/2.7.4/reference-terminology#consumer",children:"consumers"})," for messages on a topic (or custom load balancing if you wish)"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"You can use the same Pulsar installation to act as a real-time message bus and as a message queue if you wish (or just one or the other). You can set aside some topics for real-time purposes and other topics for message queue purposes (or use specific namespaces for either purpose if you wish)."}),"\n"]}),"\n",(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"client-configuration-changes",children:"Client configuration changes"})}),"\n",(0,r.jsxs)(s.p,{children:["To use a Pulsar ",(0,r.jsx)(s.a,{href:"/docs/2.7.4/reference-terminology#topic",children:"topic"})," as a message queue, you should distribute the receiver load on that topic across several consumers (the optimal number of consumers will depend on the load). Each consumer must:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Establish a ",(0,r.jsx)(s.a,{href:"/docs/2.7.4/concepts-messaging#shared",children:"shared subscription"})," and use the same subscription name as the other consumers (otherwise the subscription is not shared and the consumers can't act as a processing ensemble)"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["If you'd like to have tight control over message dispatching across consumers, set the consumers' ",(0,r.jsx)(s.strong,{children:"receiver queue"})," size very low (potentially even to 0 if necessary). Each Pulsar ",(0,r.jsx)(s.a,{href:"/docs/2.7.4/reference-terminology#consumer",children:"consumer"})," has a receiver queue that determines how many messages the consumer will attempt to fetch at a time. A receiver queue of 1000 (the default), for example, means that the consumer will attempt to process 1000 messages from the topic's backlog upon connection. Setting the receiver queue to zero essentially means ensuring that each consumer is only doing one thing at a time."]}),"\n",(0,r.jsxs)(s.p,{children:["The downside to restricting the receiver queue size of consumers is that that limits the potential throughput of those consumers and cannot be used with ",(0,r.jsx)(s.a,{href:"/docs/2.7.4/reference-terminology#partitioned-topic",children:"partitioned topics"}),". Whether the performance/control trade-off is worthwhile will depend on your use case."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"java-clients",children:"Java clients"}),"\n",(0,r.jsx)(s.p,{children:"Here's an example Java consumer configuration that uses a shared subscription:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:'\nimport org.apache.pulsar.client.api.Consumer;\nimport org.apache.pulsar.client.api.PulsarClient;\nimport org.apache.pulsar.client.api.SubscriptionType;\n\nString SERVICE_URL = "pulsar://localhost:6650";\nString TOPIC = "persistent://public/default/mq-topic-1";\nString subscription = "sub-1";\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl(SERVICE_URL)\n        .build();\n\nConsumer consumer = client.newConsumer()\n        .topic(TOPIC)\n        .subscriptionName(subscription)\n        .subscriptionType(SubscriptionType.Shared)\n        // If you\'d like to restrict the receiver queue size\n        .receiverQueueSize(10)\n        .subscribe();\n\n'})}),"\n",(0,r.jsx)(s.h2,{id:"python-clients",children:"Python clients"}),"\n",(0,r.jsx)(s.p,{children:"Here's an example Python consumer configuration that uses a shared subscription:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:'\nfrom pulsar import Client, ConsumerType\n\nSERVICE_URL = "pulsar://localhost:6650"\nTOPIC = "persistent://public/default/mq-topic-1"\nSUBSCRIPTION = "sub-1"\n\nclient = Client(SERVICE_URL)\nconsumer = client.subscribe(\n    TOPIC,\n    SUBSCRIPTION,\n    # If you\'d like to restrict the receiver queue size\n    receiver_queue_size=10,\n    consumer_type=ConsumerType.Shared)\n\n'})}),"\n",(0,r.jsx)(s.h2,{id:"c-clients",children:"C++ clients"}),"\n",(0,r.jsx)(s.p,{children:"Here's an example C++ consumer configuration that uses a shared subscription:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:'\n#include <pulsar/Client.h>\n\nstd::string serviceUrl = "pulsar://localhost:6650";\nstd::string topic = "persistent://public/defaultmq-topic-1";\nstd::string subscription = "sub-1";\n\nClient client(serviceUrl);\n\nConsumerConfiguration consumerConfig;\nconsumerConfig.setConsumerType(ConsumerType.ConsumerShared);\n// If you\'d like to restrict the receiver queue size\nconsumerConfig.setReceiverQueueSize(10);\n\nConsumer consumer;\n\nResult result = client.subscribe(topic, subscription, consumerConfig, consumer);\n\n'})}),"\n",(0,r.jsx)(s.h2,{id:"go-clients",children:"Go clients"}),"\n",(0,r.jsx)(s.p,{children:"Here is an example of a Go consumer configuration that uses the shared subscription."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-go",children:'\nimport "github.com/apache/pulsar-client-go/pulsar"\nclient, err := pulsar.NewClient(pulsar.ClientOptions{\n    URL: "pulsar://localhost:6650",\n})\nif err != nil {\n    log.Fatal(err)\n}\nconsumer, err := client.Subscribe(pulsar.ConsumerOptions{\n    Topic:             "persistent://public/default/mq-topic-1",\n    SubscriptionName:  "sub-1",\n    Type:              pulsar.Shared,\n    ReceiverQueueSize: 10, // If you\'d like to restrict the receiver queue size\n})\nif err != nil {\n    log.Fatal(err)\n}\n\n'})})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>a});var t=n(96540);const r={},o=t.createContext(r);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);