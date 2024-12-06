"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[17631],{7910:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"client-libraries-node-use","title":"Usee Node.js client","description":"Learn how to use Node.js client in Pulsar.","source":"@site/versioned_docs/version-3.2.x/client-libraries-node-use.md","sourceDirName":".","slug":"/client-libraries-node-use","permalink":"/docs/3.2.x/client-libraries-node-use","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/client-libraries-node-use.md","tags":[],"version":"3.2.x","frontMatter":{"id":"client-libraries-node-use","title":"Usee Node.js client","sidebar_label":"Use","description":"Learn how to use Node.js client in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"Initialize","permalink":"/docs/3.2.x/client-libraries-node-initialize"},"next":{"title":"Configs","permalink":"/docs/3.2.x/client-libraries-node-configs"}}');var r=s(74848),i=s(28453);const l={id:"client-libraries-node-use",title:"Usee Node.js client",sidebar_label:"Use",description:"Learn how to use Node.js client in Pulsar."},c=void 0,o={},d=[{value:"Create a producer",id:"create-a-producer",level:2},{value:"Producer operations",id:"producer-operations",level:4},{value:"Producer example",id:"producer-example",level:4},{value:"Create a consumer",id:"create-a-consumer",level:2},{value:"Consumer operations",id:"consumer-operations",level:4},{value:"Consumer example",id:"consumer-example",level:4},{value:"Create a reader",id:"create-a-reader",level:2},{value:"Reader operations",id:"reader-operations",level:4},{value:"Reader example",id:"reader-example",level:4}];function a(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"create-a-producer",children:"Create a producer"}),"\n",(0,r.jsxs)(t.p,{children:["You can configure Node.js producers using a ",(0,r.jsx)(t.a,{href:"/docs/3.2.x/client-libraries-node-configs#producer-configuration",children:"producer configuration"})," object."]}),"\n",(0,r.jsx)(t.p,{children:"Here is an example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const producer = await client.createProducer({\n  topic: 'my-topic', // or 'my-tenant/my-namespace/my-topic' to specify topic's tenant and namespace\n});\n\nawait producer.send({\n  data: Buffer.from(\"Hello, Pulsar\"),\n});\n\nawait producer.close();\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["When you create a new Pulsar producer, the operation returns ",(0,r.jsx)(t.code,{children:"Promise"})," object and get producer instance or an error through executor function. In the above example, use ",(0,r.jsx)(t.code,{children:"await"})," operator instead of executor function."]})}),"\n",(0,r.jsx)(t.h4,{id:"producer-operations",children:"Producer operations"}),"\n",(0,r.jsx)(t.p,{children:"Pulsar Node.js producers have the following methods available:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Return type"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"send(Object)"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Publishes a ",(0,r.jsx)(t.a,{href:"#messages",children:"message"})," to the producer's topic. When the message is successfully acknowledged by the Pulsar broker, or an error is thrown, the Promise object whose result is the message ID runs executor function."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"Promise<Object>"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"flush()"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Sends message from send queue to Pulsar broker. When the message is successfully acknowledged by the Pulsar broker, or an error is thrown, the Promise object runs executor function."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"Promise<null>"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"close()"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Closes the producer and releases all resources allocated to it. Once ",(0,r.jsx)(t.code,{children:"close()"})," is called, no more messages are accepted from the publisher. This method returns a Promise object. It runs the executor function when all pending publish requests are persisted by Pulsar. If an error is thrown, no pending writes are retried."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"Promise<null>"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"getProducerName()"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Getter method of the producer name."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"getTopic()"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Getter method of the name of the topic."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"string"})})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"producer-example",children:"Producer example"}),"\n",(0,r.jsxs)(t.p,{children:["This example creates a Node.js producer for the ",(0,r.jsx)(t.code,{children:"my-topic"})," topic and sends 10 messages to that topic:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const Pulsar = require('pulsar-client');\n\n(async () => {\n  // Create a client\n  const client = new Pulsar.Client({\n    serviceUrl: 'pulsar://localhost:6650',\n  });\n\n  // Create a producer\n  const producer = await client.createProducer({\n    topic: 'my-topic',\n  });\n\n  // Send messages\n  for (let i = 0; i < 10; i += 1) {\n    const msg = `my-message-${i}`;\n    producer.send({\n      data: Buffer.from(msg),\n    });\n    console.log(`Sent message: ${msg}`);\n  }\n  await producer.flush();\n\n  await producer.close();\n  await client.close();\n})();\n"})}),"\n",(0,r.jsx)(t.h2,{id:"create-a-consumer",children:"Create a consumer"}),"\n",(0,r.jsxs)(t.p,{children:["You can configure Node.js consumers using a ",(0,r.jsx)(t.a,{href:"/docs/3.2.x/client-libraries-node-configs#consumer-configuration",children:"consumer configuration"})," object."]}),"\n",(0,r.jsx)(t.p,{children:"Here is an example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const consumer = await client.subscribe({\n  topic: 'my-topic',\n  subscription: 'my-subscription',\n});\n\nconst msg = await consumer.receive();\nconsole.log(msg.getData().toString());\nconsumer.acknowledge(msg);\n\nawait consumer.close();\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["When you create a new Pulsar consumer, the operation returns ",(0,r.jsx)(t.code,{children:"Promise"})," object and get consumer instance or an error through executor function. In this example, use ",(0,r.jsx)(t.code,{children:"await"})," operator instead of executor function."]})}),"\n",(0,r.jsx)(t.h4,{id:"consumer-operations",children:"Consumer operations"}),"\n",(0,r.jsx)(t.p,{children:"Pulsar Node.js consumers have the following methods available:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Return type"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"receive()"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Receives a single message from the topic. When the message is available, the Promise object run executor function and get message object."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"Promise<Object>"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"receive(Number)"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Receives a single message from the topic with specific timeout in milliseconds."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"Promise<Object>"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"acknowledge(Object)"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.a,{href:"/docs/3.2.x/reference-terminology#acknowledgment-ack",children:"Acknowledges"})," a message to the Pulsar ",(0,r.jsx)(t.a,{href:"/docs/3.2.x/reference-terminology#broker",children:"broker"})," by message object."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"void"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"acknowledgeId(Object)"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.a,{href:"/docs/3.2.x/reference-terminology#acknowledgment-ack",children:"Acknowledges"})," a message to the Pulsar ",(0,r.jsx)(t.a,{href:"/docs/3.2.x/reference-terminology#broker",children:"broker"})," by message ID object."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"void"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"acknowledgeCumulative(Object)"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.a,{href:"/docs/3.2.x/reference-terminology#acknowledgment-ack",children:"Acknowledges"})," ",(0,r.jsx)(t.em,{children:"all"})," the messages in the stream, up to and including the specified message. The ",(0,r.jsx)(t.code,{children:"acknowledgeCumulative"})," method returns void, and send the ack to the broker asynchronously. After that, the messages are ",(0,r.jsx)(t.em,{children:"not"})," redelivered to the consumer. Cumulative acking can not be used with a ",(0,r.jsx)(t.a,{href:"/docs/3.2.x/concepts-messaging#shared",children:"shared"})," subscription type."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"void"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"acknowledgeCumulativeId(Object)"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.a,{href:"/docs/3.2.x/reference-terminology#acknowledgment-ack",children:"Acknowledges"})," ",(0,r.jsx)(t.em,{children:"all"})," the messages in the stream, up to and including the specified message ID."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"void"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"negativeAcknowledge(Message)"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.a,{href:"/docs/3.2.x/reference-terminology#negative-acknowledgment-nack",children:"Negatively acknowledges"}),"  a message to the Pulsar broker by message object."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"void"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"negativeAcknowledgeId(MessageId)"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.a,{href:"/docs/3.2.x/reference-terminology#negative-acknowledgment-nack",children:"Negatively acknowledges"})," a message to the Pulsar broker by message ID object."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"void"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"close()"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Closes the consumer, disabling its ability to receive messages from the broker."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"Promise<null>"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"unsubscribe()"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Unsubscribes the subscription."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"Promise<null>"})})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"consumer-example",children:"Consumer example"}),"\n",(0,r.jsxs)(t.p,{children:["This example creates a Node.js consumer with the ",(0,r.jsx)(t.code,{children:"my-subscription"})," subscription on the ",(0,r.jsx)(t.code,{children:"my-topic"})," topic, receives messages, prints the content that arrive, and acknowledges each message to the Pulsar broker for 10 times:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const Pulsar = require('pulsar-client');\n\n(async () => {\n  // Create a client\n  const client = new Pulsar.Client({\n    serviceUrl: 'pulsar://localhost:6650',\n  });\n\n  // Create a consumer\n  const consumer = await client.subscribe({\n    topic: 'my-topic',\n    subscription: 'my-subscription',\n    subscriptionType: 'Exclusive',\n  });\n\n  // Receive messages\n  for (let i = 0; i < 10; i += 1) {\n    const msg = await consumer.receive();\n    console.log(msg.getData().toString());\n    consumer.acknowledge(msg);\n  }\n\n  await consumer.close();\n  await client.close();\n})();\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Instead, a consumer can be created with ",(0,r.jsx)(t.code,{children:"listener"})," to process messages."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"// Create a consumer\nconst consumer = await client.subscribe({\n  topic: 'my-topic',\n  subscription: 'my-subscription',\n  subscriptionType: 'Exclusive',\n  listener: (msg, msgConsumer) => {\n    console.log(msg.getData().toString());\n    msgConsumer.acknowledge(msg);\n  },\n});\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Pulsar Node.js client uses ",(0,r.jsx)(t.a,{href:"https://github.com/nodejs/node-addon-api/blob/main/doc/async_worker",children:"AsyncWorker"}),". Asynchronous operations such as creating consumers/producers and receiving/sending messages are performed in worker threads.\nUntil completion of these operations, worker threads are blocked.\nSince there are only 4 worker threads by default, a called method may never be complete.\nTo avoid this situation, you can set ",(0,r.jsx)(t.code,{children:"UV_THREADPOOL_SIZE"})," to increase the number of worker threads, or define ",(0,r.jsx)(t.code,{children:"listener"})," instead of calling ",(0,r.jsx)(t.code,{children:"receive()"})," many times."]})}),"\n",(0,r.jsx)(t.h2,{id:"create-a-reader",children:"Create a reader"}),"\n",(0,r.jsxs)(t.p,{children:["Pulsar readers are different from consumers because with readers you need to explicitly specify which message in the stream you want to begin with (consumers, on the other hand, automatically begin with the most recently unacked message). You can configure Node.js readers using a ",(0,r.jsx)(t.a,{href:"/docs/3.2.x/client-libraries-node-configs#reader-configuration",children:"reader configuration"})," object."]}),"\n",(0,r.jsx)(t.p,{children:"Here is an example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const reader = await client.createReader({\n  topic: 'my-topic',\n  startMessageId: Pulsar.MessageId.earliest(),\n});\n\nconst msg = await reader.readNext();\nconsole.log(msg.getData().toString());\n\nawait reader.close();\n"})}),"\n",(0,r.jsx)(t.h4,{id:"reader-operations",children:"Reader operations"}),"\n",(0,r.jsx)(t.p,{children:"Pulsar Node.js readers have the following methods available:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Method"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Return type"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"readNext()"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Receives the next message on the topic (analogous to the ",(0,r.jsx)(t.code,{children:"receive"})," method for ",(0,r.jsx)(t.a,{href:"#consumer-operations",children:"consumers"}),"). When the message is available, the Promise object run executor function and get message object."]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"Promise<Object>"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"readNext(Number)"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Receives a single message from the topic with specific timeout in milliseconds."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"Promise<Object>"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"hasNext()"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Return whether the broker has next message in target topic."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"Boolean"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"close()"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Closes the reader, disabling its ability to receive messages from the broker."}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"Promise<null>"})})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"reader-example",children:"Reader example"}),"\n",(0,r.jsxs)(t.p,{children:["This example creates a Node.js reader with the ",(0,r.jsx)(t.code,{children:"my-topic"})," topic, reads messages, and prints the content that arrive for 10 times:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const Pulsar = require('pulsar-client');\n\n(async () => {\n  // Create a client\n  const client = new Pulsar.Client({\n    serviceUrl: 'pulsar://localhost:6650',\n    operationTimeoutSeconds: 30,\n  });\n\n  // Create a reader\n  const reader = await client.createReader({\n    topic: 'my-topic',\n    startMessageId: Pulsar.MessageId.earliest(),\n  });\n\n  // read messages\n  for (let i = 0; i < 10; i += 1) {\n    const msg = await reader.readNext();\n    console.log(msg.getData().toString());\n  }\n\n  await reader.close();\n  await client.close();\n})();\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>c});var n=s(96540);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);