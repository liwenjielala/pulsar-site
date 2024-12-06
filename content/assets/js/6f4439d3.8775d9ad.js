"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[42372],{15575:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"client-libraries-producers","title":"Work with producer","description":"Learn how to work with producers in Pulsar.","source":"@site/docs/client-libraries-producers.md","sourceDirName":".","slug":"/client-libraries-producers","permalink":"/docs/next/client-libraries-producers","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/docs/client-libraries-producers.md","tags":[],"version":"current","frontMatter":{"id":"client-libraries-producers","title":"Work with producer","sidebar_label":"Work with producer","description":"Learn how to work with producers in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"Work with clients","permalink":"/docs/next/client-libraries-clients"},"next":{"title":"Work with consumer","permalink":"/docs/next/client-libraries-consumers"}}');var r=t(74848),l=t(28453),i=t(11470),a=t(19365);const c={id:"client-libraries-producers",title:"Work with producer",sidebar_label:"Work with producer",description:"Learn how to work with producers in Pulsar."},o=void 0,d={},u=[{value:"Create the producer",id:"create-the-producer",level:2},{value:"Publish messages",id:"publish-messages",level:2},{value:"Configure messages",id:"configure-messages",level:2},{value:"Publish messages to partitioned topics",id:"publish-messages-to-partitioned-topics",level:2},{value:"Use built-in message router",id:"use-built-in-message-router",level:3},{value:"Customize message router",id:"customize-message-router",level:3},{value:"Choose partitions when using a key",id:"choose-partitions-when-using-a-key",level:3},{value:"Enable chunking",id:"enable-chunking",level:2},{value:"Intercept messages",id:"intercept-messages",level:2},{value:"Configure encryption policies",id:"configure-encryption-policies",level:2},{value:"Configure access mode",id:"configure-access-mode",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["After setting up your clients, you can explore more to start working with ",(0,r.jsx)(s.a,{href:"/docs/next/concepts-clients#producers",children:"producers"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"create-the-producer",children:"Create the producer"}),"\n",(0,r.jsx)(s.p,{children:"This example shows how to create a producer."}),"\n",(0,r.jsxs)(i.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C++",value:"C++"}],children:[(0,r.jsxs)(a.A,{value:"Java",children:[(0,r.jsx)(s.p,{children:"Create a producer synchronously:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:'Producer<String> producer = pulsarClient.newProducer(Schema.STRING)\n              .topic("my-topic")\n              .create();\n'})}),(0,r.jsx)(s.p,{children:"Create a producer asynchronously:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:'pulsarClient.newProducer(Schema.STRING)\n              .topic("my-topic")\n              .createAsync()\n              .thenAccept(p -> {\n                  log.info("Producer created: {}", p.getProducerName());\n              });\n'})})]}),(0,r.jsx)(a.A,{value:"C++",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:'Producer producer;\nResult result = client.createProducer("my-topic", producer);\n'})})})]}),"\n",(0,r.jsx)(s.h2,{id:"publish-messages",children:"Publish messages"}),"\n",(0,r.jsxs)(s.p,{children:["Pulsar supports both synchronous and asynchronous publishing of messages in most clients. In some language-specific clients, such as Node.js and C#, you can publish messages synchronously based on the asynchronous method using language-specific mechanisms (like ",(0,r.jsx)(s.code,{children:"await"}),")."]}),"\n",(0,r.jsx)(s.p,{children:"With async publishment, the producer puts the message in a blocking queue and returns it immediately. Then the client library sends the message to the broker in the background. If the queue is full (max size configurable), the producer is blocked or fails immediately when calling the API, depending on arguments passed to the producer."}),"\n",(0,r.jsx)(s.p,{children:"This example shows how to publish messages using producers. The publish operation is done until the broker tells you the message has been successfully published. The broker returns the message ID after the message is published successfully."}),"\n",(0,r.jsxs)(i.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C++",value:"C++"},{label:"Go",value:"Go"},{label:"Node.js",value:"Node.js"},{label:"C#",value:"C#"}],children:[(0,r.jsxs)(a.A,{value:"Java",children:[(0,r.jsx)(s.p,{children:"Publish messages synchronously:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:'MessageId messageId = producer.newMessage()\n                  .value("my-sync-message")\n                  .send();\n'})}),(0,r.jsx)(s.p,{children:"Publish messages asynchronously:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:'producer.newMessage()\n        .value("my-sync-message")\n        .sendAsync()\n        .thenAccept(messageId -> {\n            log.info("Message ID: {}", messageId);\n        });\n'})})]}),(0,r.jsx)(a.A,{value:"C++",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:'Message msg = MessageBuilder()\n                    .setContent("my-sync-message")\n                    .build();\nResult res = producer.send(msg);\n'})})}),(0,r.jsxs)(a.A,{value:"Go",children:[(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-go",children:' msg := pulsar.ProducerMessage{\n     Payload: []byte("my-sync-message"),\n }\n\n if _, err := producer.send(msg); err != nil {\n   log.Fatalf("Could not publish message due to: %v", err)\n }\n'})}),(0,r.jsxs)(s.p,{children:["For all methods of the ",(0,r.jsx)(s.code,{children:"ProducerMessage"})," object, see ",(0,r.jsx)(s.a,{href:"https://pkg.go.dev/github.com/apache/pulsar-client-go/pulsar#ProducerMessage",children:"Go API doc"}),"."]})]}),(0,r.jsxs)(a.A,{value:"Node.js",children:[(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:"const msg = {\ndata: Buffer.from('my-sync-message'),\n}\n\nawait producer.send(msg);\n"})}),(0,r.jsx)(s.p,{children:"The following keys are available for producer message objects:"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"data"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"The actual data payload of the message."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"properties"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"A Object for any application-specific metadata attached to the message."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"eventTimestamp"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"The timestamp associated with the message."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"sequenceId"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"The sequence ID of the message."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"partitionKey"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"The optional key associated with the message (particularly useful for things like topic compaction)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"replicationClusters"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"The clusters to which this message is replicated. Pulsar brokers handle message replication automatically; you should only change this setting if you want to override the broker default."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"deliverAt"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"The absolute timestamp at or after which the message is delivered."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"deliverAfter"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"The relative delay after which the message is delivered."})]})]})]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Message object operations"})}),(0,r.jsx)(s.p,{children:"In Pulsar Node.js client, you can receive (or read) message objects as consumers (or readers)."}),(0,r.jsx)(s.p,{children:"The message object has the following methods available:"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Return type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"getTopicName()"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Getter method of topic name."}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"String"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"getProperties()"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Getter method of properties."}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"Array<Object>"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"getData()"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Getter method of message data."}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"Buffer"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"getMessageId()"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:["Getter method of ",(0,r.jsx)(s.a,{href:"#message-id-object-operations",children:"message id object"}),"."]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"Object"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"getPublishTimestamp()"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Getter method of publish timestamp."}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"Number"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"getEventTimestamp()"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Getter method of event timestamp."}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"Number"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"getRedeliveryCount()"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Getter method of redelivery count."}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"Number"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"getPartitionKey()"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Getter method of partition key."}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"String"})})]})]})]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Message ID object operations"})}),(0,r.jsx)(s.p,{children:"In Pulsar Node.js client, you can get message id objects from message objects."}),(0,r.jsx)(s.p,{children:"The message id object has the following methods available:"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Return type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"serialize()"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Serialize the message id into a Buffer for storing."}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"Buffer"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"toString()"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Get message id as String."}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"String"})})]})]})]}),(0,r.jsxs)(s.p,{children:["The client has a static method of message id object. You can access it as ",(0,r.jsx)(s.code,{children:"Pulsar.MessageId.someStaticMethod"}),"."]}),(0,r.jsx)(s.p,{children:"The following static methods are available for the message id object:"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Method"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Return type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"earliest()"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"MessageId representing the earliest, or oldest available message stored in the topic."}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"Object"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"latest()"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"MessageId representing the latest, or last published message in the topic."}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"Object"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"deserialize(Buffer)"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Deserialize a message id object from a Buffer."}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"Object"})})]})]})]})]}),(0,r.jsx)(a.A,{value:"C#",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:'var data = Encoding.UTF8.GetBytes("Hello World");\nawait producer.Send(data);\n'})})})]}),"\n",(0,r.jsx)(s.h2,{id:"configure-messages",children:"Configure messages"}),"\n",(0,r.jsx)(s.p,{children:"You can set various properties of Pulsar's messages. The values of these properties are stored in the metadata of a message."}),"\n",(0,r.jsxs)(i.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C++",value:"C++"},{label:"C#",value:"C#"}],children:[(0,r.jsxs)(a.A,{value:"Java",children:[(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:'producer.newMessage()\n              .key("my-key") // Set the message key\n              .eventTime(System.currentTimeMillis()) // Set the event time\n              .sequenceId(1203) // Set the sequenceId for the deduplication purposes\n              .deliverAfter(1, TimeUnit.HOURS) // Delay message delivery for 1 hour\n              .property("my-key", "my-value") // Set the customized metadata\n              .property("my-other-key", "my-other-value")\n              .replicationClusters(\n                      Lists.newArrayList("r1", "r2")) // Set the geo-replication clusters for this message.\n              .value("content")\n              .send();\n'})}),(0,r.jsxs)(s.p,{children:["For the Java client, you can also use ",(0,r.jsx)(s.code,{children:"loadConf"})," to configure the message metadata. Here is an example:"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:'Map<String, Object> conf = new HashMap<>();\nconf.put("key", "my-key");\nconf.put("eventTime", System.currentTimeMillis());\nproducer.newMessage()\n        .value("my-message")\n        .loadConf(conf)\n        .send();\n'})})]}),(0,r.jsx)(a.A,{value:"C++",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:'Message msg = MessageBuilder()\n                  .setContent("content")\n                  .setProperty("my-key", "my-value")\n                  .setProperty("my-other-key", "my-other-value")\n                  .setDeliverAfter(std::chrono::minutes(3)) // Delay message delivery for 3 minutes\n                  .build();\nResult res = producer.send(msg);\n'})})}),(0,r.jsx)(a.A,{value:"Go",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-go",children:'ID, err := producer.Send(context.Background(), &pulsar.ProducerMessage{\n     Payload:      []byte(fmt.Sprintf("content")),\n     DeliverAfter: 3 * time.Second, // Delay message delivery for 3 seconds\n })\n if err != nil {\n     log.Fatal(err)\n }\n'})})}),(0,r.jsx)(a.A,{value:"C#",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:'var messageId = await producer.NewMessage()\n                            .Property("SomeKey", "SomeValue")\n                            .Send(data);\n'})})})]}),"\n",(0,r.jsx)(s.h2,{id:"publish-messages-to-partitioned-topics",children:"Publish messages to partitioned topics"}),"\n",(0,r.jsxs)(s.p,{children:["By default, Pulsar topics are served by a single broker, which limits the maximum throughput of a topic. ",(0,r.jsx)(s.em,{children:"Partitioned topics"})," can span multiple brokers and thus allow for higher throughput."]}),"\n",(0,r.jsx)(s.p,{children:"You can publish messages to partitioned topics using Pulsar client libraries. When publishing messages to partitioned topics, you must specify a routing mode. If you do not specify any routing mode when you create a new producer, the round-robin routing mode is used."}),"\n",(0,r.jsx)(s.h3,{id:"use-built-in-message-router",children:"Use built-in message router"}),"\n",(0,r.jsx)(s.p,{children:"The routing mode determines which partition (internal topic) each message should be published to."}),"\n",(0,r.jsx)(s.p,{children:"The following is an example:"}),"\n",(0,r.jsxs)(i.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C++",value:"C++"},{label:"Go",value:"Go"}],children:[(0,r.jsx)(a.A,{value:"Java",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:'Producer<byte[]> producer = pulsarClient.newProducer()\n   .topic("my-topic")\n   .messageRoutingMode(MessageRoutingMode.SinglePartition)\n   .create();\n'})})}),(0,r.jsx)(a.A,{value:"C++",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:'#include "lib/RoundRobinMessageRouter.h" // Make sure include this header file\n\nProducer producer;\nResult result = client.createProducer(\n   "my-topic",\n   ProducerConfiguration().setMessageRouter(std::make_shared<RoundRobinMessageRouter>(\n       ProducerConfiguration::BoostHash, true, 1000, 100000, boost::posix_time::seconds(1))),\n   producer);\n'})})}),(0,r.jsx)(a.A,{value:"Go",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-go",children:' producer, err := client.CreateProducer(pulsar.ProducerOptions{\n     Topic: "my-topic",\n     MessageRouter: func(msg *pulsar.ProducerMessage, tm pulsar.TopicMetadata) int {\n         fmt.Println("Topic has", tm.NumPartitions(), "partitions. Routing message ", msg, " to partition 2.")\n         // always push msg to partition 2\n         return 2\n     },\n })\n'})})})]}),"\n",(0,r.jsx)(s.h3,{id:"customize-message-router",children:"Customize message router"}),"\n",(0,r.jsxs)(i.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C++",value:"C++"},{label:"Go",value:"Go"}],children:[(0,r.jsxs)(a.A,{value:"Java",children:[(0,r.jsxs)(s.p,{children:["To use a custom message router, you need to provide an implementation of the ",(0,r.jsx)(s.a,{href:"https://pulsar.apache.org/api/client/4.0.x/org/apache/pulsar/client/api/MessageRouter",children:"MessageRouter"})," interface, which has just one ",(0,r.jsx)(s.code,{children:"choosePartition"})," method:"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"public interface MessageRouter extends Serializable {\n    int choosePartition(Message msg);\n}\n"})}),(0,r.jsx)(s.p,{children:"The following router routes every message to partition 10:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"public class AlwaysTenRouter implements MessageRouter {\n    public int choosePartition(Message msg) {\n        return 10;\n    }\n}\n"})}),(0,r.jsx)(s.p,{children:"With that implementation, you can send messages to partitioned topics as below."}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:'Producer<byte[]> producer = pulsarClient.newProducer()\n        .topic("my-topic")\n        .messageRouter(new AlwaysTenRouter())\n        .create();\nproducer.send("Partitioned topic message".getBytes());\n'})})]}),(0,r.jsxs)(a.A,{value:"C++",children:[(0,r.jsxs)(s.p,{children:["To use a custom message router, you need to provide an implementation of the ",(0,r.jsx)(s.code,{children:"MessageRoutingPolicy"})," interface, which has one ",(0,r.jsx)(s.code,{children:"getPartition"})," method:"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:"class MessageRouter : public MessageRoutingPolicy {\n   public:\n    MessageRouter() : {}\n\n    int getPartition(const Message& msg, const TopicMetadata& topicMetadata) {\n        // The implementation of getPartition\n    }\n\n};\n"})}),(0,r.jsx)(s.p,{children:"The following router routes every message to partition 10:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:"class MessageRouter : public MessageRoutingPolicy {\n   public:\n    MessageRouter() {}\n\n    int getPartition(const Message& msg, const TopicMetadata& topicMetadata) {\n        return 10;\n    }\n};\n"})}),(0,r.jsx)(s.p,{children:"With that implementation, you can send messages to partitioned topics as below."}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:'Producer producer;\nResult result = client.createProducer(\n    "my-topic",\n    ProducerConfiguration().setMessageRouter(std::make_shared<MessageRouter>()),\n    producer);\nMessage msg = MessageBuilder().setContent("content").build();\nresult = producer.send(msg);\n'})})]}),(0,r.jsxs)(a.A,{value:"Go",children:[(0,r.jsx)(s.p,{children:"In the Go client, you can configure a customized message router by passing a function."}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-go",children:' producer, err := client.CreateProducer(pulsar.ProducerOptions{\n     Topic: "my-topic",\n     MessageRouter: func(msg *pulsar.ProducerMessage, tm pulsar.TopicMetadata) int {\n         fmt.Println("Topic has", tm.NumPartitions(), "partitions. Routing message ", msg, " to partition 10.")\n         // always push msg to partition 10\n         return 10\n     },\n })\n'})})]})]}),"\n",(0,r.jsx)(s.h3,{id:"choose-partitions-when-using-a-key",children:"Choose partitions when using a key"}),"\n",(0,r.jsx)(s.p,{children:"If a message has a key, it supersedes the round robin routing policy. The following java example code illustrates how to choose the partition when using a key."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"// If the message has a key, it supersedes the round robin routing policy\nif (msg.hasKey()) {\n    return signSafeMod(hash.makeHash(msg.getKey()), topicMetadata.numPartitions());\n}\n\nif (isBatchingEnabled) { // if batching is enabled, choose partition on `partitionSwitchMs` boundary.\n    long currentMs = clock.millis();\n    return signSafeMod(currentMs / partitionSwitchMs + startPtnIdx, topicMetadata.numPartitions());\n} else {\n    return signSafeMod(PARTITION_INDEX_UPDATER.getAndIncrement(this), topicMetadata.numPartitions());\n}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"enable-chunking",children:"Enable chunking"}),"\n",(0,r.jsxs)(s.p,{children:["Message ",(0,r.jsx)(s.a,{href:"/docs/next/concepts-messaging#chunking",children:"chunking"})," enables Pulsar to process large payload messages by splitting the message into chunks at the producer side and aggregating chunked messages on the consumer side."]}),"\n",(0,r.jsx)(s.p,{children:"The message chunking feature is OFF by default. The following is an example of how to enable message chunking when creating a producer."}),"\n",(0,r.jsxs)(i.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C++",value:"C++"},{label:"Go",value:"Go"},{label:"Python",value:"Python"}],children:[(0,r.jsx)(a.A,{value:"Java",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"  Producer<byte[]> producer = client.newProducer()\n     .topic(topic)\n     .enableChunking(true)\n     .enableBatching(false)\n     .create();\n"})})}),(0,r.jsx)(a.A,{value:"C++",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:'ProducerConfiguration conf;\nconf.setBatchingEnabled(false);\nconf.setChunkingEnabled(true);\nProducer producer;\nclient.createProducer("my-topic", conf, producer);\n'})})}),(0,r.jsx)(a.A,{value:"Go",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-go",children:'// The message chunking feature is OFF by default.\n// By default, a producer chunks the large message based on the max message size (`maxMessageSize`) configured at the broker side (for example, 5MB).\n// Client can also configure the max chunked size using the producer configuration `ChunkMaxMessageSize`.\n// Note: to enable chunking, you need to disable batching (`DisableBatching=true`) concurrently.\nproducer, err := client.CreateProducer(pulsar.ProducerOptions{\n  Topic:               "my-topic",\n  DisableBatching:     true,\n  EnableChunking:      true,\n})\n\nif err != nil {\n\tlog.Fatal(err)\n}\ndefer producer.Close()\n'})})}),(0,r.jsx)(a.A,{value:"Python",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"producer = client.create_producer(\n         topic,\n         chunking_enabled=True\n     )\n"})})})]}),"\n",(0,r.jsxs)(s.p,{children:["By default, producer chunks the large message based on max message size (",(0,r.jsx)(s.code,{children:"maxMessageSize"}),") configured at broker (eg: 5MB). However, client can also configure max chunked size using producer configuration ",(0,r.jsx)(s.code,{children:"chunkMaxMessageSize"}),"."]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["To enable chunking, you need to disable batching (",(0,r.jsx)(s.code,{children:"enableBatching"}),"=",(0,r.jsx)(s.code,{children:"false"}),") concurrently."]})}),"\n",(0,r.jsx)(s.h2,{id:"intercept-messages",children:"Intercept messages"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"ProducerInterceptor"})," intercepts and possibly mutates messages received by the producer before they are published to the brokers."]}),"\n",(0,r.jsx)(s.p,{children:"The interface has three main events:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"eligible"})," checks if the interceptor can be applied to the message."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"beforeSend"})," is triggered before the producer sends the message to the broker. You can modify messages within this event."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"onSendAcknowledgement"})," is triggered when the message is acknowledged by the broker or the sending failed."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["To intercept messages, you can add a ",(0,r.jsx)(s.code,{children:"ProducerInterceptor"})," or multiple ones when creating a ",(0,r.jsx)(s.code,{children:"Producer"})," as follows."]}),"\n",(0,r.jsxs)(i.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C++",value:"C++"}],children:[(0,r.jsx)(a.A,{value:"Java",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"Producer<byte[]> producer = client.newProducer()\n     .topic(topic)\n     .intercept(new ProducerInterceptor {\n \t\t@Override\n \t\tboolean eligible(Message message) {\n \t\t    return true;  // process all messages\n \t\t}\n\n \t\t@Override\n \t\tMessage beforeSend(Producer producer, Message message) {\n \t\t    // user-defined processing logic\n \t\t}\n\n \t\t@Override\n \t\tvoid onSendAcknowledgement(Producer producer, Message message, MessageId msgId, Throwable exception) {\n \t\t    // user-defined processing logic\n \t\t}\n     })\n     .create();\n"})})}),(0,r.jsxs)(a.A,{value:"C++",children:[(0,r.jsx)(s.p,{children:"Implement the custom interceptor:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:" class MyInterceptor : public ProducerInterceptor {\n   public:\n     MyInterceptor() {}\n\n     Message beforeSend(const Producer& producer, const Message& message) override {\n       // Your implementation code\n       return message;\n     }\n\n     void onSendAcknowledgement(const Producer& producer, Result result, const Message& message,\n                               const MessageId& messageID) override {\n       // Your implementation code\n     }\n\n     void close() override {\n       // Your implementation code\n     }\n };\n"})}),(0,r.jsx)(s.p,{children:"Configue the producer:"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:" ProducerConfiguration conf;\n conf.intercept({std::make_shared<MyInterceptor>(),\n                 std::make_shared<MyInterceptor>()}); // You can add multiple interceptors to the same producer\n Producer producer;\n client.createProducer(topic, conf, producer);\n"})})]})]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Multiple interceptors apply in the order they are passed to the ",(0,r.jsx)(s.code,{children:"intercept"})," method."]})}),"\n",(0,r.jsx)(s.h2,{id:"configure-encryption-policies",children:"Configure encryption policies"}),"\n",(0,r.jsx)(s.p,{children:"The Pulsar C# client supports four kinds of encryption policies:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"EnforceUnencrypted"}),": always use unencrypted connections."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"EnforceEncrypted"}),": always use encrypted connections)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"PreferUnencrypted"}),": use unencrypted connections, if possible."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"PreferEncrypted"}),": use encrypted connections, if possible."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["This example shows how to set the ",(0,r.jsx)(s.code,{children:"EnforceUnencrypted"})," encryption policy."]}),"\n",(0,r.jsx)(i.A,{groupId:"lang-choice",defaultValue:"C#",values:[{label:"C#",value:"C#"}],children:(0,r.jsx)(a.A,{value:"C#",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"using DotPulsar;\n\nvar client = PulsarClient.Builder()\n                      .ConnectionSecurity(EncryptionPolicy.EnforceEncrypted)\n                      .Build();\n"})})})}),"\n",(0,r.jsx)(s.h2,{id:"configure-access-mode",children:"Configure access mode"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/next/concepts-clients#access-mode",children:"Access mode"}),' allows applications to require exclusive producer access on a topic to achieve a "single-writer" situation.']}),"\n",(0,r.jsx)(s.p,{children:"This example shows how to set producer access mode."}),"\n",(0,r.jsxs)(i.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C++",value:"C++"}],children:[(0,r.jsxs)(a.A,{value:"Java",children:[(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"This feature is supported in Java client 2.8.0 or later versions."})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"Producer<byte[]> producer = client.newProducer()\n     .topic(topic)\n     .accessMode(ProducerAccessMode.Exclusive)\n     .create();\n"})})]}),(0,r.jsxs)(a.A,{value:"C++",children:[(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"This feature is supported in C++ client 3.1.0 or later versions."})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:" Producer producer;\n ProducerConfiguration producerConfiguration;\n producerConfiguration.setAccessMode(ProducerConfiguration::Exclusive);\n client.createProducer(topicName, producerConfiguration, producer);\n"})})]})]})]})}function p(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,s,t)=>{t.d(s,{A:()=>i});t(96540);var n=t(34164);const r={tabItem:"tabItem_Ymn6"};var l=t(74848);function i(e){let{children:s,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,i),hidden:t,children:s})}},11470:(e,s,t)=>{t.d(s,{A:()=>A});var n=t(96540),r=t(34164),l=t(23104),i=t(56347),a=t(205),c=t(57485),o=t(31682),d=t(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:t}=e;return(0,n.useMemo)((()=>{const e=s??function(e){return u(e).map((e=>{let{props:{value:s,label:t,attributes:n,default:r}}=e;return{value:s,label:t,attributes:n,default:r}}))}(t);return function(e){const s=(0,o.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,t])}function p(e){let{value:s,tabValues:t}=e;return t.some((e=>e.value===s))}function g(e){let{queryString:s=!1,groupId:t}=e;const r=(0,i.W6)(),l=function(e){let{queryString:s=!1,groupId:t}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:s,groupId:t});return[(0,c.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const s=new URLSearchParams(r.location.search);s.set(l,e),r.replace({...r.location,search:s.toString()})}),[l,r])]}function x(e){const{defaultValue:s,queryString:t=!1,groupId:r}=e,l=h(e),[i,c]=(0,n.useState)((()=>function(e){let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:l}))),[o,u]=g({queryString:t,groupId:r}),[x,m]=function(e){let{groupId:s}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,l]=(0,d.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),j=(()=>{const e=o??x;return p({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{j&&c(j)}),[j]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var m=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function y(e){let{className:s,block:t,selectedValue:n,selectValue:i,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),d=e=>{const s=e.currentTarget,t=c.indexOf(s),r=a[t].value;r!==n&&(o(s),i(r))},u=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;s=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;s=c[t]??c[c.length-1];break}}s?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},s),children:a.map((e=>{let{value:s,label:t,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>c.push(e),onKeyDown:u,onClick:d,...l,className:(0,r.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":n===s}),children:t??s},s)}))})}function b(e){let{lazy:s,children:t,selectedValue:l}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(s){const e=i.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==l})))})}function v(e){const s=x(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,f.jsx)(y,{...s,...e}),(0,f.jsx)(b,{...s,...e})]})}function A(e){const s=(0,m.A)();return(0,f.jsx)(v,{...e,children:u(e.children)},String(s))}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>a});var n=t(96540);const r={},l=n.createContext(r);function i(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);