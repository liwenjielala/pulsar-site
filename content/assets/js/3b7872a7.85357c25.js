"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[19234],{9105:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"client-libraries-java","title":"The Pulsar Java client","description":"The Pulsar Java client can be used both to create Java producers, consumers, and readers of messages and to perform administrative tasks. The current version of the Java client is 2.3.1.","source":"@site/versioned_docs/version-2.3.1/client-libraries-java.md","sourceDirName":".","slug":"/client-libraries-java","permalink":"/docs/2.3.1/client-libraries-java","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.1/client-libraries-java.md","tags":[],"version":"2.3.1","frontMatter":{"id":"client-libraries-java","title":"The Pulsar Java client","sidebar_label":"Java","original_id":"client-libraries-java"},"sidebar":"docsSidebar","previous":{"title":"Extend Authentication and Authorization","permalink":"/docs/2.3.1/security-extending"},"next":{"title":"Go","permalink":"/docs/2.3.1/client-libraries-go"}}');var r=s(74848),i=s(28453);const t={id:"client-libraries-java",title:"The Pulsar Java client",sidebar_label:"Java",original_id:"client-libraries-java"},c=void 0,l={},o=[{value:"Installation",id:"installation",level:2},{value:"Maven",id:"maven",level:3},{value:"Gradle",id:"gradle",level:3},{value:"Connection URLs",id:"connection-urls",level:2},{value:"Client configuration",id:"client-configuration",level:2},{value:"Default broker URLs for standalone clusters",id:"default-broker-urls-for-standalone-clusters",level:4},{value:"Producers",id:"producers",level:2},{value:"Configuring producers",id:"configuring-producers",level:3},{value:"Message routing",id:"message-routing",level:3},{value:"Async send",id:"async-send",level:3},{value:"Configuring messages",id:"configuring-messages",level:3},{value:"Consumers",id:"consumers",level:2},{value:"Configuring consumers",id:"configuring-consumers",level:3},{value:"Async receive",id:"async-receive",level:3},{value:"Multi-topic subscriptions",id:"multi-topic-subscriptions",level:3},{value:"Reader interface",id:"reader-interface",level:2},{value:"Schemas",id:"schemas",level:2},{value:"Schema example",id:"schema-example",level:3},{value:"Authentication",id:"authentication",level:2},{value:"TLS Authentication",id:"tls-authentication",level:3},{value:"Athenz",id:"athenz",level:3},{value:"Supported pattern formats",id:"supported-pattern-formats",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The Pulsar Java client can be used both to create Java producers, consumers, and ",(0,r.jsx)(n.a,{href:"#reader-interface",children:"readers"})," of messages and to perform ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/admin-api-overview",children:"administrative tasks"}),". The current version of the Java client is ",(0,r.jsx)(n.strong,{children:"2.3.1"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Javadoc for the Pulsar client is divided up into two domains, by package:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Package"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Maven Artifact"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/client/2.3.1",children:(0,r.jsx)(n.code,{children:"org.apache.pulsar.client.api"})})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The producer and consumer API"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client%7C2.3.1%7Cjar",children:"org.apache.pulsar:pulsar-client:2.3.1"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/admin/2.3.1",children:(0,r.jsx)(n.code,{children:"org.apache.pulsar.client.admin"})})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["The Java ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/admin-api-overview",children:"admin API"})]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client-admin%7C2.3.1%7Cjar",children:"org.apache.pulsar:pulsar-client-admin:2.3.1"})})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["This document will focus only on the client API for producing and consuming messages on Pulsar topics. For a guide to using the Java admin client, see ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/admin-api-overview",children:"The Pulsar admin interface"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.p,{children:["The latest version of the Pulsar Java client library is available via ",(0,r.jsx)(n.a,{href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client%7C2.3.1%7Cjar",children:"Maven Central"}),". To use the latest version, add the ",(0,r.jsx)(n.code,{children:"pulsar-client"})," library to your build configuration."]}),"\n",(0,r.jsx)(n.h3,{id:"maven",children:"Maven"}),"\n",(0,r.jsxs)(n.p,{children:["If you're using Maven, add this to your ",(0,r.jsx)(n.code,{children:"pom.xml"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"\n\x3c!-- in your <properties> block --\x3e\n<pulsar.version>2.3.1</pulsar.version>\n\n\x3c!-- in your <dependencies> block --\x3e\n<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>pulsar-client</artifactId>\n  <version>${pulsar.version}</version>\n</dependency>\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"gradle",children:"Gradle"}),"\n",(0,r.jsxs)(n.p,{children:["If you're using Gradle, add this to your ",(0,r.jsx)(n.code,{children:"build.gradle"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:"\ndef pulsarVersion = '2.3.1'\n\ndependencies {\n    compile group: 'org.apache.pulsar', name: 'pulsar-client', version: pulsarVersion\n}\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"connection-urls",children:"Connection URLs"}),"\n",(0,r.jsxs)(n.p,{children:["To connect to Pulsar using client libraries, you need to specify a ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/developing-binary-protocol",children:"Pulsar protocol"})," URL."]}),"\n",(0,r.jsxs)(n.p,{children:["Pulsar protocol URLs are assigned to specific clusters, use the ",(0,r.jsx)(n.code,{children:"pulsar"})," scheme and have a default port of 6650. Here's an example for ",(0,r.jsx)(n.code,{children:"localhost"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",children:"\npulsar://localhost:6650\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"A URL for a production Pulsar cluster may look something like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",children:"\npulsar://pulsar.us-west.example.com:6650\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you're using ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/security-tls-authentication",children:"TLS"})," authentication, the URL will look like something like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",children:"\npulsar+ssl://pulsar.us-west.example.com:6651\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"client-configuration",children:"Client configuration"}),"\n",(0,r.jsxs)(n.p,{children:["You can instantiate a ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/PulsarClient",children:"PulsarClient"})," object using just a URL for the target Pulsar ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/reference-terminology#cluster",children:"cluster"}),", like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .build();\n\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.h4,{id:"default-broker-urls-for-standalone-clusters",children:"Default broker URLs for standalone clusters"}),"\n",(0,r.jsxs)(n.p,{children:["If you're running a cluster in ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/getting-started-standalone",children:"standalone mode"}),", the broker will be available at the ",(0,r.jsx)(n.code,{children:"pulsar://localhost:6650"})," URL by default."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Check out the Javadoc for the ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/PulsarClient",children:"PulsarClient"})," class for a full listing of configurable parameters."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["In addition to client-level configuration, you can also apply ",(0,r.jsx)(n.a,{href:"#configuring-producers",children:"producer"})," and ",(0,r.jsx)(n.a,{href:"#configuring-consumers",children:"consumer"})," specific configuration, as you'll see in the sections below."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"producers",children:"Producers"}),"\n",(0,r.jsxs)(n.p,{children:["In Pulsar, producers write messages to topics. Once you've instantiated a ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/PulsarClient",children:"PulsarClient"})," object (as in the section ",(0,r.jsx)(n.a,{href:"#client-configuration",children:"above"}),"), you can create a ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/Producer",children:"Producer"})," for a specific Pulsar ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/reference-terminology#topic",children:"topic"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nProducer<byte[]> producer = client.newProducer()\n        .topic("my-topic")\n        .create();\n\n// You can then send messages to the broker and topic you specified:\nproducer.send("My message".getBytes());\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["By default, producers produce messages that consist of byte arrays. You can produce different types, however, by specifying a message ",(0,r.jsx)(n.a,{href:"#schemas",children:"schema"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nProducer<String> stringProducer = client.newProducer(Schema.STRING)\n        .topic("my-topic")\n        .create();\nstringProducer.send("My message");\n\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"You should always make sure to close your producers, consumers, and clients when they are no longer needed:"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"\nproducer.close();\nconsumer.close();\nclient.close();\n\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Close operations can also be asynchronous:"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nproducer.closeAsync()\n   .thenRun(() -> System.out.println("Producer closed"));\n   .exceptionally((ex) -> {\n       System.err.println("Failed to close producer: " + ex);\n       return ex;\n   });\n\n\n'})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"configuring-producers",children:"Configuring producers"}),"\n",(0,r.jsxs)(n.p,{children:["If you instantiate a ",(0,r.jsx)(n.code,{children:"Producer"})," object specifying only a topic name, as in the example above, the producer will use the default configuration. To use a non-default configuration, there's a variety of configurable parameters that you can set. For a full listing, see the Javadoc for the ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/ProducerBuilder",children:"ProducerBuilder"})," class. Here's an example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nProducer<byte[]> producer = client.newProducer()\n    .topic("my-topic")\n    .batchingMaxPublishDelay(10, TimeUnit.MILLISECONDS)\n    .sendTimeout(10, TimeUnit.SECONDS)\n    .blockIfQueueFull(true)\n    .create();\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"message-routing",children:"Message routing"}),"\n",(0,r.jsxs)(n.p,{children:["When using partitioned topics, you can specify the routing mode whenever you publish messages using a producer. For more on specifying a routing mode using the Java client, see the ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/cookbooks-partitioned",children:"Partitioned Topics"})," cookbook."]}),"\n",(0,r.jsx)(n.h3,{id:"async-send",children:"Async send"}),"\n",(0,r.jsxs)(n.p,{children:["You can also publish messages ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/concepts-messaging#send-modes",children:"asynchronously"})," using the Java client. With async send, the producer will put the message in a blocking queue and return immediately. The client library will then send the message to the broker in the background. If the queue is full (max size configurable), the producer could be blocked or fail immediately when calling the API, depending on arguments passed to the producer."]}),"\n",(0,r.jsx)(n.p,{children:"Here's an example async send operation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nproducer.sendAsync("my-async-message".getBytes()).thenAccept(msgId -> {\n    System.out.printf("Message with ID %s successfully sent", msgId);\n});\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["As you can see from the example above, async send operations return a ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/MessageId",children:"MessageId"})," wrapped in a ",(0,r.jsx)(n.a,{href:"http://www.baeldung.com/java-completablefuture",children:(0,r.jsx)(n.code,{children:"CompletableFuture"})}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"configuring-messages",children:"Configuring messages"}),"\n",(0,r.jsx)(n.p,{children:"In addition to a value, it's possible to set additional items on a given message:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nproducer.newMessage()\n    .key("my-message-key")\n    .value("my-async-message".getBytes())\n    .property("my-key", "my-value")\n    .property("my-other-key", "my-other-value")\n    .send();\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["As for the previous case, it's also possible to terminate the builder chain with ",(0,r.jsx)(n.code,{children:"sendAsync()"})," and\nget a future returned."]}),"\n",(0,r.jsx)(n.h2,{id:"consumers",children:"Consumers"}),"\n",(0,r.jsxs)(n.p,{children:["In Pulsar, consumers subscribe to topics and handle messages that producers publish to those topics. You can instantiate a new ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/reference-terminology#consumer",children:"consumer"})," by first instantiating a ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/PulsarClient",children:"PulsarClient"})," object and passing it a URL for a Pulsar broker (as ",(0,r.jsx)(n.a,{href:"#client-configuration",children:"above"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["Once you've instantiated a ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/PulsarClient",children:"PulsarClient"})," object, you can create a ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/Consumer",children:"Consumer"})," by specifying a ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/reference-terminology#topic",children:"topic"})," and a ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/concepts-messaging#subscription-modes",children:"subscription"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nConsumer consumer = client.newConsumer()\n        .topic("my-topic")\n        .subscriptionName("my-subscription")\n        .subscribe();\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"subscribe"})," method will automatically subscribe the consumer to the specified topic and subscription. One way to make the consumer listen on the topic is to set up a ",(0,r.jsx)(n.code,{children:"while"})," loop. In this example loop, the consumer listens for messages, prints the contents of any message that's received, and then ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/reference-terminology#acknowledgment-ack",children:"acknowledges"})," that the message has been processed. If the processing logic fails, we use ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/reference-terminology#acknowledgment-ack",children:"negative acknowledgement"}),"\nto have the message redelivered at a later point in time."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nwhile (true) {\n  // Wait for a message\n  Message msg = consumer.receive();\n\n  try {\n      // Do something with the message\n      System.out.printf("Message received: %s", new String(msg.getData()));\n\n      // Acknowledge the message\n      consumer.acknowledge(msg);\n  } catch (Exception e) {\n      // Message failed to process, redeliver later\n      consumer.negativeAcknowledge(msg);\n  }\n}\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"configuring-consumers",children:"Configuring consumers"}),"\n",(0,r.jsxs)(n.p,{children:["If you instantiate a ",(0,r.jsx)(n.code,{children:"Consumer"})," object specifying only a topic and subscription name, as in the example above, the consumer will use the default configuration. To use a non-default configuration, there's a variety of configurable parameters that you can set. For a full listing, see the Javadoc for the ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/ConsumerBuilder",children:"ConsumerBuilder"})," class. Here's an example:"]}),"\n",(0,r.jsx)(n.p,{children:"Here's an example configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nConsumer consumer = client.newConsumer()\n        .topic("my-topic")\n        .subscriptionName("my-subscription")\n        .ackTimeout(10, TimeUnit.SECONDS)\n        .subscriptionType(SubscriptionType.Exclusive)\n        .subscribe();\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"async-receive",children:"Async receive"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"receive"})," method will receive messages synchronously (the consumer process will be blocked until a message is available). You can also use ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/concepts-messaging#receive-modes",children:"async receive"}),", which will return immediately with a ",(0,r.jsx)(n.a,{href:"http://www.baeldung.com/java-completablefuture",children:(0,r.jsx)(n.code,{children:"CompletableFuture"})})," object that completes once a new message is available."]}),"\n",(0,r.jsx)(n.p,{children:"Here's an example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"\nCompletableFuture<Message> asyncMessage = consumer.receiveAsync();\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Async receive operations return a ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/Message",children:"Message"})," wrapped inside of a ",(0,r.jsx)(n.a,{href:"http://www.baeldung.com/java-completablefuture",children:(0,r.jsx)(n.code,{children:"CompletableFuture"})}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"multi-topic-subscriptions",children:"Multi-topic subscriptions"}),"\n",(0,r.jsxs)(n.p,{children:["In addition to subscribing a consumer to a single Pulsar topic, you can also subscribe to multiple topics simultaneously using ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/concepts-messaging#multi-topic-subscriptions",children:"multi-topic subscriptions"}),". To use multi-topic subscriptions you can supply either a regular expression (regex) or a ",(0,r.jsx)(n.code,{children:"List"})," of topics. If you select topics via regex, all topics must be within the same Pulsar namespace."]}),"\n",(0,r.jsx)(n.p,{children:"Here are some examples:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nimport org.apache.pulsar.client.api.Consumer;\nimport org.apache.pulsar.client.api.PulsarClient;\n\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.regex.Pattern;\n\nConsumerBuilder consumerBuilder = pulsarClient.newConsumer()\n        .subscriptionName(subscription);\n\n// Subscribe to all topics in a namespace\nPattern allTopicsInNamespace = Pattern.compile("persistent://public/default/.*");\nConsumer allTopicsConsumer = consumerBuilder\n        .topicsPattern(allTopicsInNamespace)\n        .subscribe();\n\n// Subscribe to a subsets of topics in a namespace, based on regex\nPattern someTopicsInNamespace = Pattern.compile("persistent://public/default/foo.*");\nConsumer allTopicsConsumer = consumerBuilder\n        .topicsPattern(someTopicsInNamespace)\n        .subscribe();\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can also subscribe to an explicit list of topics (across namespaces if you wish):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nList<String> topics = Arrays.asList(\n        "topic-1",\n        "topic-2",\n        "topic-3"\n);\n\nConsumer multiTopicConsumer = consumerBuilder\n        .topics(topics)\n        .subscribe();\n\n// Alternatively:\nConsumer multiTopicConsumer = consumerBuilder\n        .topics(\n            "topic-1",\n            "topic-2",\n            "topic-3"\n        )\n        .subscribe();\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can also subscribe to multiple topics asynchronously using the ",(0,r.jsx)(n.code,{children:"subscribeAsync"})," method rather than the synchronous ",(0,r.jsx)(n.code,{children:"subscribe"})," method. Here's an example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nPattern allTopicsInNamespace = Pattern.compile("persistent://public/default.*");\nconsumerBuilder\n        .topics(topics)\n        .subscribeAsync()\n        .thenAccept(consumer -> {\n            do {\n                try {\n                    Message msg = consumer.receive();\n                    // Do something with the received message\n                } catch (PulsarClientException e) {\n                    e.printStackTrace();\n                }\n            } while (true);\n        });\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"reader-interface",children:"Reader interface"}),"\n",(0,r.jsxs)(n.p,{children:["With the ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/concepts-clients#reader-interface",children:"reader interface"}),', Pulsar clients can "manually position" themselves within a topic, reading all messages from a specified message onward. The Pulsar API for Java enables you to create  ',(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/Reader",children:"Reader"})," objects by specifying a topic, a ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/MessageId",children:"MessageId"}),", and ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/ReaderConfiguration",children:"ReaderConfiguration"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Here's an example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"\nReaderConfiguration conf = new ReaderConfiguration();\nbyte[] msgIdBytes = // Some message ID byte array\nMessageId id = MessageId.fromByteArray(msgIdBytes);\nReader reader = pulsarClient.newReader()\n        .topic(topic)\n        .startMessageId(id)\n        .create();\n\nwhile (true) {\n    Message message = reader.readNext();\n    // Process message\n}\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the example above, a ",(0,r.jsx)(n.code,{children:"Reader"})," object is instantiated for a specific topic and message (by ID); the reader then iterates over each message in the topic after the message identified by ",(0,r.jsx)(n.code,{children:"msgIdBytes"})," (how that value is obtained depends on the application)."]}),"\n",(0,r.jsxs)(n.p,{children:["The code sample above shows pointing the ",(0,r.jsx)(n.code,{children:"Reader"})," object to a specific message (by ID), but you can also use ",(0,r.jsx)(n.code,{children:"MessageId.earliest"})," to point to the earliest available message on the topic of ",(0,r.jsx)(n.code,{children:"MessageId.latest"})," to point to the most recent available message."]}),"\n",(0,r.jsx)(n.h2,{id:"schemas",children:"Schemas"}),"\n",(0,r.jsxs)(n.p,{children:['In Pulsar, all message data consists of byte arrays "under the hood." ',(0,r.jsx)(n.a,{href:"/docs/2.3.1/concepts-schema-registry",children:"Message schemas"})," enable you to use other types of data when constructing and handling messages (from simple types like strings to more complex, application-specific types). If you construct, say, a ",(0,r.jsx)(n.a,{href:"#producers",children:"producer"})," without specifying a schema, then the producer can only produce messages of type ",(0,r.jsx)(n.code,{children:"byte[]"}),". Here's an example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"\nProducer<byte[]> producer = client.newProducer()\n        .topic(topic)\n        .create();\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The producer above is equivalent to a ",(0,r.jsx)(n.code,{children:"Producer<byte[]>"})," (in fact, you should ",(0,r.jsx)(n.em,{children:"always"})," explicitly specify the type). If you'd like to use a producer for a different type of data, you'll need to specify a ",(0,r.jsx)(n.strong,{children:"schema"})," that informs Pulsar which data type will be transmitted over the ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/reference-terminology#topic",children:"topic"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"schema-example",children:"Schema example"}),"\n",(0,r.jsxs)(n.p,{children:["Let's say that you have a ",(0,r.jsx)(n.code,{children:"SensorReading"})," class that you'd like to transmit over a Pulsar topic:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"\npublic class SensorReading {\n    public float temperature;\n\n    public SensorReading(float temperature) {\n        this.temperature = temperature;\n    }\n\n    // A no-arg constructor is required\n    public SensorReading() {\n    }\n\n    public float getTemperature() {\n        return temperature;\n    }\n\n    public void setTemperature(float temperature) {\n        this.temperature = temperature;\n    }\n}\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You could then create a ",(0,r.jsx)(n.code,{children:"Producer<SensorReading>"})," (or ",(0,r.jsx)(n.code,{children:"Consumer<SensorReading>"}),") like so:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nProducer<SensorReading> producer = client.newProducer(JSONSchema.of(SensorReading.class))\n        .topic("sensor-readings")\n        .create();\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"The following schema formats are currently available for Java:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["No schema or the byte array schema (which can be applied using ",(0,r.jsx)(n.code,{children:"Schema.BYTES"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nProducer<byte[]> bytesProducer = client.newProducer(Schema.BYTES)\n    .topic("some-raw-bytes-topic")\n    .create();\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"Or, equivalently:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nProducer<byte[]> bytesProducer = client.newProducer()\n    .topic("some-raw-bytes-topic")\n    .create();\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"String"})," for normal UTF-8-encoded string data. This schema can be applied using ",(0,r.jsx)(n.code,{children:"Schema.STRING"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nProducer<String> stringProducer = client.newProducer(Schema.STRING)\n    .topic("some-string-topic")\n    .create();\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["JSON schemas can be created for POJOs using the ",(0,r.jsx)(n.code,{children:"JSONSchema"})," class. Here's an example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nSchema<MyPojo> pojoSchema = JSONSchema.of(MyPojo.class);\nProducer<MyPojo> pojoProducer = client.newProducer(pojoSchema)\n    .topic("some-pojo-topic")\n    .create();\n\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,r.jsxs)(n.p,{children:["Pulsar currently supports two authentication schemes: ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/security-tls-authentication",children:"TLS"})," and ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/security-athenz",children:"Athenz"}),". The Pulsar Java client can be used with both."]}),"\n",(0,r.jsx)(n.h3,{id:"tls-authentication",children:"TLS Authentication"}),"\n",(0,r.jsxs)(n.p,{children:["To use ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/security-tls-authentication",children:"TLS"}),", ",(0,r.jsx)(n.code,{children:"enableTls"}),' method is deprecated and you need to use "pulsar+ssl://" in serviceUrl to enable, point your Pulsar client to a TLS cert path, and provide paths to cert and key files.']}),"\n",(0,r.jsx)(n.p,{children:"Here's an example configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nMap<String, String> authParams = new HashMap();\nauthParams.put("tlsCertFile", "/path/to/client-cert.pem");\nauthParams.put("tlsKeyFile", "/path/to/client-key.pem");\n\nAuthentication tlsAuth = AuthenticationFactory\n        .create(AuthenticationTls.class.getName(), authParams);\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar+ssl://my-broker.com:6651")\n        .tlsTrustCertsFilePath("/path/to/cacert.pem")\n        .authentication(tlsAuth)\n        .build();\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"athenz",children:"Athenz"}),"\n",(0,r.jsxs)(n.p,{children:["To use ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/security-athenz",children:"Athenz"})," as an authentication provider, you need to ",(0,r.jsx)(n.a,{href:"#tls-authentication",children:"use TLS"})," and provide values for four parameters in a hash:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"tenantDomain"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"tenantService"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"providerDomain"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"privateKey"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can also set an optional ",(0,r.jsx)(n.code,{children:"keyId"}),". Here's an example configuration:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nMap<String, String> authParams = new HashMap();\nauthParams.put("tenantDomain", "shopping"); // Tenant domain name\nauthParams.put("tenantService", "some_app"); // Tenant service name\nauthParams.put("providerDomain", "pulsar"); // Provider domain name\nauthParams.put("privateKey", "file:///path/to/private.pem"); // Tenant private key path\nauthParams.put("keyId", "v1"); // Key id for the tenant private key (optional, default: "0")\n\nAuthentication athenzAuth = AuthenticationFactory\n        .create(AuthenticationAthenz.class.getName(), authParams);\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar+ssl://my-broker.com:6651")\n        .tlsTrustCertsFilePath("/path/to/cacert.pem")\n        .authentication(athenzAuth)\n        .build();\n\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.h4,{id:"supported-pattern-formats",children:"Supported pattern formats"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"privateKey"})," parameter supports the following three pattern formats:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"file:///path/to/file"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"file:/path/to/file"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"data:application/x-pem-file;base64,<base64-encoded value>"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var a=s(96540);const r={},i=a.createContext(r);function t(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);