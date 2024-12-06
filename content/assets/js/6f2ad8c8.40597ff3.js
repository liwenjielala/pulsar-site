"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[337],{95468:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"io-develop","title":"How to develop Pulsar connectors","description":"This guide describes how to develop Pulsar connectors to move data","source":"@site/versioned_docs/version-2.7.5/io-develop.md","sourceDirName":".","slug":"/io-develop","permalink":"/docs/2.7.5/io-develop","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.5/io-develop.md","tags":[],"version":"2.7.5","frontMatter":{"id":"io-develop","title":"How to develop Pulsar connectors","sidebar_label":"Develop","original_id":"io-develop"},"sidebar":"docsSidebar","previous":{"title":"CDC connector","permalink":"/docs/2.7.5/io-cdc"},"next":{"title":"CLI","permalink":"/docs/2.7.5/io-cli"}}');var i=r(74848),t=r(28453);const a={id:"io-develop",title:"How to develop Pulsar connectors",sidebar_label:"Develop",original_id:"io-develop"},o=void 0,c={},l=[{value:"Develop",id:"develop",level:2},{value:"Source",id:"source",level:3},{value:"Sink",id:"sink",level:3},{value:"Test",id:"test",level:2},{value:"Unit test",id:"unit-test",level:3},{value:"Integration test",id:"integration-test",level:3},{value:"Package",id:"package",level:2},{value:"NAR",id:"nar",level:3},{value:"Uber JAR",id:"uber-jar",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This guide describes how to develop Pulsar connectors to move data\nbetween Pulsar and other systems."}),"\n",(0,i.jsxs)(n.p,{children:["Pulsar connectors are special ",(0,i.jsx)(n.a,{href:"/docs/2.7.5/functions-overview",children:"Pulsar Functions"}),", so creating\na Pulsar connector is similar to creating a Pulsar function."]}),"\n",(0,i.jsx)(n.p,{children:"Pulsar connectors come in two types:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Example"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java",children:"Source"})}),(0,i.jsx)(n.td,{children:"Import data from another system to Pulsar."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/docs/2.7.5/io-rabbitmq-source",children:"RabbitMQ source connector"})," imports the messages of a RabbitMQ queue to a Pulsar topic."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java",children:"Sink"})}),(0,i.jsx)(n.td,{children:"Export data from Pulsar to another system."}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"/docs/2.7.5/io-kinesis-sink",children:"Kinesis sink connector"})," exports the messages of a Pulsar topic to a Kinesis stream."]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"develop",children:"Develop"}),"\n",(0,i.jsx)(n.p,{children:"You can develop Pulsar source connectors and sink connectors."}),"\n",(0,i.jsx)(n.h3,{id:"source",children:"Source"}),"\n",(0,i.jsxs)(n.p,{children:["Developing a source connector is to implement the ",(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java",children:"Source"}),"\ninterface, which means you need to implement the ",(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java",children:"open"})," method and the ",(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java",children:"read"})," method."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Implement the ",(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java",children:"open"})," method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\n/**\n* Open connector with configuration\n*\n* @param config initialization config\n* @param sourceContext\n* @throws Exception IO type exceptions when opening a connector\n*/\nvoid open(final Map<String, Object> config, SourceContext sourceContext) throws Exception;\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"This method is called when the source connector is initialized."}),"\n",(0,i.jsxs)(n.p,{children:["In this method, you can retrieve all connector specific settings through the passed-in ",(0,i.jsx)(n.code,{children:"config"})," parameter and initialize all necessary resources."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, a Kafka connector can create a Kafka client in this ",(0,i.jsx)(n.code,{children:"open"})," method."]}),"\n",(0,i.jsxs)(n.p,{children:["Besides, Pulsar runtime also provides a ",(0,i.jsx)(n.code,{children:"SourceContext"})," for the\nconnector to access runtime resources for tasks like collecting metrics. The implementation can save the ",(0,i.jsx)(n.code,{children:"SourceContext"})," for future use."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Implement the ",(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java",children:"read"})," method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\n    /**\n    * Reads the next message from source.\n    * If source does not have any new messages, this call should block.\n    * @return next message from source.  The return result should never be null\n    * @throws Exception\n    */\n    Record<T> read() throws Exception;\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If nothing to return, the implementation should be blocking rather than returning ",(0,i.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The returned ",(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/Record.java",children:"Record"})," should encapsulate the following information, which is needed by Pulsar IO runtime."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/Record.java",children:"Record"})," should provide the following variables:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Variable"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"TopicName"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Pulsar topic name from which the record is originated from."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Key"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsxs)(n.td,{children:["Messages can optionally be tagged with keys.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"For more information, see ",(0,i.jsx)(n.a,{href:"/docs/2.7.5/concepts-messaging#routing-modes",children:"Routing modes"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Value"})}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Actual data of the record."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"EventTime"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Event time of the record from the source."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"PartitionId"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsxs)(n.td,{children:["If the record is originated from a partitioned source, it returns its ",(0,i.jsx)(n.code,{children:"PartitionId"}),". ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(n.code,{children:"PartitionId"})," is used as a part of the unique identifier by Pulsar IO runtime to deduplicate messages and achieve exactly-once processing guarantee."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"RecordSequence"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsxs)(n.td,{children:["If the record is originated from a sequential source, it returns its ",(0,i.jsx)(n.code,{children:"RecordSequence"}),".",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(n.code,{children:"RecordSequence"})," is used as a part of the unique identifier by Pulsar IO runtime to deduplicate messages and achieve exactly-once processing guarantee."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Properties"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"If the record carries user-defined properties, it returns those properties."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DestinationTopic"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Topic to which message should be written."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Message"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsxs)(n.td,{children:["A class which carries data sent by users.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"For more information, see ",(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client-api/src/main/java/org/apache/pulsar/client/api/Message.java",children:"Message.java"}),"."]})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/Record.java",children:"Record"})," should provide the following methods:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Method"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ack"})}),(0,i.jsx)(n.td,{children:"Acknowledge that the record is fully processed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"fail"})}),(0,i.jsx)(n.td,{children:"Indicate that the record fails to be processed."})]})]})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["For more information about ",(0,i.jsx)(n.strong,{children:"how to create a source connector"}),", see ",(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaAbstractSource.java",children:"KafkaSource"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"sink",children:"Sink"}),"\n",(0,i.jsxs)(n.p,{children:["Developing a sink connector ",(0,i.jsx)(n.strong,{children:"is similar to"})," developing a source connector, that is, you need to implement the ",(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java",children:"Sink"})," interface, which means implementing the ",(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java",children:"open"})," method and the ",(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java",children:"write"})," method."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Implement the ",(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java",children:"open"})," method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\n    /**\n    * Open connector with configuration\n    *\n    * @param config initialization config\n    * @param sinkContext\n    * @throws Exception IO type exceptions when opening a connector\n    */\n    void open(final Map<String, Object> config, SinkContext sinkContext) throws Exception;\n\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Implement the ",(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java",children:"write"})," method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\n    /**\n    * Write a message to Sink\n    * @param record record to write to sink\n    * @throws Exception\n    */\n    void write(Record<T> record) throws Exception;\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["During the implementation, you can decide how to write the ",(0,i.jsx)(n.code,{children:"Value"})," and\nthe ",(0,i.jsx)(n.code,{children:"Key"})," to the actual source, and leverage all the provided information such as\n",(0,i.jsx)(n.code,{children:"PartitionId"})," and ",(0,i.jsx)(n.code,{children:"RecordSequence"})," to achieve different processing guarantees."]}),"\n",(0,i.jsx)(n.p,{children:"You also need to ack records (if messages are sent successfully) or fail records (if messages fail to send)."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"test",children:"Test"}),"\n",(0,i.jsx)(n.p,{children:"Testing connectors can be challenging because Pulsar IO connectors interact with two systems\nthat may be difficult to mock\u2014Pulsar and the system to which the connector is connecting."}),"\n",(0,i.jsx)(n.p,{children:"It is\nrecommended writing special tests to test the connector functionalities as below\nwhile mocking the external service."}),"\n",(0,i.jsx)(n.h3,{id:"unit-test",children:"Unit test"}),"\n",(0,i.jsx)(n.p,{children:"You can create unit tests for your connector."}),"\n",(0,i.jsx)(n.h3,{id:"integration-test",children:"Integration test"}),"\n",(0,i.jsx)(n.p,{children:"Once you have written sufficient unit tests, you can add\nseparate integration tests to verify end-to-end functionality."}),"\n",(0,i.jsxs)(n.p,{children:["Pulsar uses ",(0,i.jsx)(n.a,{href:"https://www.testcontainers.org/",children:"testcontainers"})," ",(0,i.jsx)(n.strong,{children:"for all integration tests"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["For more information about ",(0,i.jsx)(n.strong,{children:"how to create integration tests for Pulsar connectors"}),", see ",(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//tests/integration/src/test/java/org/apache/pulsar/tests/integration/io",children:"IntegrationTests"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"package",children:"Package"}),"\n",(0,i.jsxs)(n.p,{children:["Once you've developed and tested your connector, you need to package it so that it can be submitted\nto a ",(0,i.jsx)(n.a,{href:"/docs/2.7.5/functions-overview",children:"Pulsar Functions"})," cluster."]}),"\n",(0,i.jsxs)(n.p,{children:["There are two methods to\nwork with Pulsar Functions' runtime, that is, ",(0,i.jsx)(n.a,{href:"#nar",children:"NAR"})," and ",(0,i.jsx)(n.a,{href:"#uber-jar",children:"uber JAR"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If you plan to package and distribute your connector for others to use, you are obligated to"})}),"\n",(0,i.jsx)(n.p,{children:"license and copyright your own code properly. Remember to add the license and copyright to\nall libraries your code uses and to your distribution."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["If you use the ",(0,i.jsx)(n.a,{href:"#nar",children:"NAR"})," method, the NAR plugin\nautomatically creates a ",(0,i.jsx)(n.code,{children:"DEPENDENCIES"})," file in the generated NAR package, including the proper\nlicensing and copyrights of all libraries of your connector."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"nar",children:"NAR"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NAR"})," stands for NiFi Archive, which is a custom packaging mechanism used by Apache NiFi, to provide\na bit of Java ClassLoader isolation."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["For more information about ",(0,i.jsx)(n.strong,{children:"how NAR works"}),", see ",(0,i.jsx)(n.a,{href:"https://medium.com/hashmapinc/nifi-nar-files-explained-14113f7796fd",children:"here"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["Pulsar uses the same mechanism for packaging ",(0,i.jsx)(n.strong,{children:"all"})," ",(0,i.jsx)(n.a,{href:"/docs/2.7.5/io-connectors",children:"built-in connectors"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The easiest approach to package a Pulsar connector is to create a NAR package using ",(0,i.jsx)(n.a,{href:"https://mvnrepository.com/artifact/org.apache.nifi/nifi-nar-maven-plugin",children:"nifi-nar-maven-plugin"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Include this ",(0,i.jsx)(n.a,{href:"https://mvnrepository.com/artifact/org.apache.nifi/nifi-nar-maven-plugin",children:"nifi-nar-maven-plugin"})," in your maven project for your connector as below."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"\n<plugins>\n  <plugin>\n    <groupId>org.apache.nifi</groupId>\n    <artifactId>nifi-nar-maven-plugin</artifactId>\n    <version>1.2.0</version>\n  </plugin>\n</plugins>\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You must also create a ",(0,i.jsx)(n.code,{children:"resources/META-INF/services/pulsar-io.yaml"})," file with the following contents:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"\nname: connector name\ndescription: connector description\nsourceClass: fully qualified class name (only if source connector)\nsinkClass: fully qualified class name (only if sink connector)\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For Gradle users, there is a ",(0,i.jsx)(n.a,{href:"https://plugins.gradle.org/plugin/io.github.lhotari.gradle-nar-plugin",children:"Gradle Nar plugin available on the Gradle Plugin Portal"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["For more information about an ",(0,i.jsx)(n.strong,{children:"how to use NAR for Pulsar connectors"}),", see ",(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/twitter/pom.xml",children:"TwitterFirehose"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"uber-jar",children:"Uber JAR"}),"\n",(0,i.jsxs)(n.p,{children:["An alternative approach is to create an ",(0,i.jsx)(n.strong,{children:"uber JAR"})," that contains all of the connector's JAR files\nand other resource files. No directory internal structure is necessary."]}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.a,{href:"https://maven.apache.org/plugins/maven-shade-plugin/examples/includes-excludes.html",children:"maven-shade-plugin"})," to create a uber JAR as below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"\n<plugin>\n  <groupId>org.apache.maven.plugins</groupId>\n  <artifactId>maven-shade-plugin</artifactId>\n  <version>3.1.1</version>\n  <executions>\n    <execution>\n      <phase>package</phase>\n      <goals>\n        <goal>shade</goal>\n      </goals>\n      <configuration>\n        <filters>\n          <filter>\n            <artifact>*:*</artifact>\n          </filter>\n        </filters>\n      </configuration>\n    </execution>\n  </executions>\n</plugin>\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var s=r(96540);const i={},t=s.createContext(i);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);