"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[32796],{46871:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"io-develop","title":"How to develop Pulsar connectors","description":"This guide describes how to develop Pulsar connectors to move data","source":"@site/versioned_docs/version-2.9.x/io-develop.md","sourceDirName":".","slug":"/io-develop","permalink":"/docs/2.9.x/io-develop","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.9.x/io-develop.md","tags":[],"version":"2.9.x","frontMatter":{"id":"io-develop","title":"How to develop Pulsar connectors","sidebar_label":"Develop","original_id":"io-develop"},"sidebar":"docsSidebar","previous":{"title":"CDC connector","permalink":"/docs/2.9.x/io-cdc"},"next":{"title":"CLI","permalink":"/docs/2.9.x/io-cli"}}');var a=r(74848),s=r(28453),i=r(89089),o=r(19365);const c={id:"io-develop",title:"How to develop Pulsar connectors",sidebar_label:"Develop",original_id:"io-develop"},l=void 0,d={},h=[{value:"Develop",id:"develop",level:2},{value:"Source",id:"source",level:3},{value:"Handle schema information",id:"handle-schema-information",level:2},{value:"Sink",id:"sink",level:3},{value:"Handling Schema information",id:"handling-schema-information",level:2},{value:"Test",id:"test",level:2},{value:"Unit test",id:"unit-test",level:3},{value:"Integration test",id:"integration-test",level:3},{value:"Package",id:"package",level:2},{value:"NAR",id:"nar",level:3},{value:"Uber JAR",id:"uber-jar",level:3},{value:"Monitor",id:"monitor",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This guide describes how to develop Pulsar connectors to move data\nbetween Pulsar and other systems."}),"\n",(0,a.jsxs)(n.p,{children:["Pulsar connectors are special ",(0,a.jsx)(n.a,{href:"/docs/2.9.x/functions-overview",children:"Pulsar Functions"}),", so creating a Pulsar connector is similar to creating a Pulsar function."]}),"\n",(0,a.jsx)(n.p,{children:"Pulsar connectors come in two types:"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Description"}),(0,a.jsx)(n.th,{children:"Example"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java",children:"Source"})}),(0,a.jsx)(n.td,{children:"Import data from another system to Pulsar."}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.a,{href:"/docs/2.9.x/io-rabbitmq-source",children:"RabbitMQ source connector"})," imports the messages of a RabbitMQ queue to a Pulsar topic."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java",children:"Sink"})}),(0,a.jsx)(n.td,{children:"Export data from Pulsar to another system."}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.a,{href:"/docs/2.9.x/io-kinesis-sink",children:"Kinesis sink connector"})," exports the messages of a Pulsar topic to a Kinesis stream."]})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"develop",children:"Develop"}),"\n",(0,a.jsx)(n.p,{children:"You can develop Pulsar source connectors and sink connectors."}),"\n",(0,a.jsx)(n.h3,{id:"source",children:"Source"}),"\n",(0,a.jsxs)(n.p,{children:["Developing a source connector is to implement the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java",children:"Source"}),"\ninterface, which means you need to implement the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java",children:"open"})," method and the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java",children:"read"})," method."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Implement the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java",children:"open"})," method."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"\n/**\n* Open connector with configuration\n*\n* @param config initialization config\n* @param sourceContext\n* @throws Exception IO type exceptions when opening a connector\n*/\nvoid open(final Map<String, Object> config, SourceContext sourceContext) throws Exception;\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"This method is called when the source connector is initialized."}),"\n",(0,a.jsxs)(n.p,{children:["In this method, you can retrieve all connector specific settings through the passed-in ",(0,a.jsx)(n.code,{children:"config"})," parameter and initialize all necessary resources."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, a Kafka connector can create a Kafka client in this ",(0,a.jsx)(n.code,{children:"open"})," method."]}),"\n",(0,a.jsxs)(n.p,{children:["Besides, Pulsar runtime also provides a ",(0,a.jsx)(n.code,{children:"SourceContext"})," for the\nconnector to access runtime resources for tasks like collecting metrics. The implementation can save the ",(0,a.jsx)(n.code,{children:"SourceContext"})," for future use."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Implement the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java",children:"read"})," method."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"\n    /**\n    * Reads the next message from source.\n    * If source does not have any new messages, this call should block.\n    * @return next message from source.  The return result should never be null\n    * @throws Exception\n    */\n    Record<T> read() throws Exception;\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If nothing to return, the implementation should be blocking rather than returning ",(0,a.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The returned ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/Record.java",children:"Record"})," should encapsulate the following information, which is needed by Pulsar IO runtime."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/Record.java",children:"Record"})," should provide the following variables:"]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Variable"}),(0,a.jsx)(n.th,{children:"Required"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"TopicName"})}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"Pulsar topic name from which the record is originated from."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Key"})}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsxs)(n.td,{children:["Messages can optionally be tagged with keys.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"For more information, see ",(0,a.jsx)(n.a,{href:"/docs/2.9.x/concepts-messaging#routing-modes",children:"Routing modes"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Value"})}),(0,a.jsx)(n.td,{children:"Yes"}),(0,a.jsx)(n.td,{children:"Actual data of the record."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"EventTime"})}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"Event time of the record from the source."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"PartitionId"})}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsxs)(n.td,{children:["If the record is originated from a partitioned source, it returns its ",(0,a.jsx)(n.code,{children:"PartitionId"}),". ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(n.code,{children:"PartitionId"})," is used as a part of the unique identifier by Pulsar IO runtime to deduplicate messages and achieve exactly-once processing guarantee."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"RecordSequence"})}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsxs)(n.td,{children:["If the record is originated from a sequential source, it returns its ",(0,a.jsx)(n.code,{children:"RecordSequence"}),".",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(n.code,{children:"RecordSequence"})," is used as a part of the unique identifier by Pulsar IO runtime to deduplicate messages and achieve exactly-once processing guarantee."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Properties"})}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"If the record carries user-defined properties, it returns those properties."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"DestinationTopic"})}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"Topic to which message should be written."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Message"})}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsxs)(n.td,{children:["A class which carries data sent by users.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"For more information, see ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client-api/src/main/java/org/apache/pulsar/client/api/Message.java",children:"Message.java"}),"."]})]})]})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/Record.java",children:"Record"})," should provide the following methods:"]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Method"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"ack"})}),(0,a.jsx)(n.td,{children:"Acknowledge that the record is fully processed."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"fail"})}),(0,a.jsx)(n.td,{children:"Indicate that the record fails to be processed."})]})]})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"handle-schema-information",children:"Handle schema information"}),"\n",(0,a.jsx)(n.p,{children:"Pulsar IO automatically handles the schema and provides a strongly typed API based on Java generics.\nIf you know the schema type that you are producing, you can declare the Java class relative to that type in your sink declaration."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\npublic class MySource implements Source<String> {\n    public Record<String> read() {}\n}\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you want to implement a source that works with any schema, you can go with ",(0,a.jsx)(n.code,{children:"byte[]"})," (of ",(0,a.jsx)(n.code,{children:"ByteBuffer"}),") and use Schema.AUTO_PRODUCE_BYTES()."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\npublic class MySource implements Source<byte[]> {\n    public Record<byte[]> read() {\n\n        Schema wantedSchema = ....\n        Record<byte[]> myRecord = new MyRecordImplementation();\n        ....\n    }\n    class MyRecordImplementation implements Record<byte[]> {\n         public byte[] getValue() {\n            return ....encoded byte[]...that represents the value\n         }\n         public Schema<byte[]> getSchema() {\n             return Schema.AUTO_PRODUCE_BYTES(wantedSchema);\n         }\n    }\n}\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To handle the ",(0,a.jsx)(n.code,{children:"KeyValue"})," type properly, follow the guidelines for your record implementation:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["It must implement ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/KVRecord.java",children:"Record"})," interface and implement ",(0,a.jsx)(n.code,{children:"getKeySchema"}),",",(0,a.jsx)(n.code,{children:"getValueSchema"}),", and ",(0,a.jsx)(n.code,{children:"getKeyValueEncodingType"})]}),"\n",(0,a.jsxs)(n.li,{children:["It must return a ",(0,a.jsx)(n.code,{children:"KeyValue"})," object as ",(0,a.jsx)(n.code,{children:"Record.getValue()"})]}),"\n",(0,a.jsxs)(n.li,{children:["It may return null in ",(0,a.jsx)(n.code,{children:"Record.getSchema()"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["When Pulsar IO runtime encounters a ",(0,a.jsx)(n.code,{children:"KVRecord"}),", it brings the following changes automatically:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Set properly the ",(0,a.jsx)(n.code,{children:"KeyValueSchema"})]}),"\n",(0,a.jsxs)(n.li,{children:["Encode the Message Key and the Message Value according to the ",(0,a.jsx)(n.code,{children:"KeyValueEncoding"})," (SEPARATED or INLINE)"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["For more information about ",(0,a.jsx)(n.strong,{children:"how to create a source connector"}),", see ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaAbstractSource.java",children:"KafkaSource"}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"sink",children:"Sink"}),"\n",(0,a.jsxs)(n.p,{children:["Developing a sink connector ",(0,a.jsx)(n.strong,{children:"is similar to"})," developing a source connector, that is, you need to implement the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java",children:"Sink"})," interface, which means implementing the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java",children:"open"})," method and the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java",children:"write"})," method."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Implement the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java",children:"open"})," method."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"\n    /**\n    * Open connector with configuration\n    *\n    * @param config initialization config\n    * @param sinkContext\n    * @throws Exception IO type exceptions when opening a connector\n    */\n    void open(final Map<String, Object> config, SinkContext sinkContext) throws Exception;\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Implement the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java",children:"write"})," method."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"\n    /**\n    * Write a message to Sink\n    * @param record record to write to sink\n    * @throws Exception\n    */\n    void write(Record<T> record) throws Exception;\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["During the implementation, you can decide how to write the ",(0,a.jsx)(n.code,{children:"Value"})," and\nthe ",(0,a.jsx)(n.code,{children:"Key"})," to the actual source, and leverage all the provided information such as\n",(0,a.jsx)(n.code,{children:"PartitionId"})," and ",(0,a.jsx)(n.code,{children:"RecordSequence"})," to achieve different processing guarantees."]}),"\n",(0,a.jsx)(n.p,{children:"You also need to ack records (if messages are sent successfully) or fail records (if messages fail to send)."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"handling-schema-information",children:"Handling Schema information"}),"\n",(0,a.jsx)(n.p,{children:"Pulsar IO handles automatically the Schema and provides a strongly typed API based on Java generics.\nIf you know the Schema type that you are consuming from you can declare the Java class relative to that type in your Sink declaration."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\npublic class MySink implements Sink<String> {\n    public void write(Record<String> record) {}\n}\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"If you want to implement a sink that works with any schema, you can you go with the special GenericObject interface."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\npublic class MySink implements Sink<GenericObject> {\n    public void write(Record<GenericObject> record) {\n        Schema schema = record.getSchema();\n        GenericObject genericObject = record.getValue();\n        if (genericObject != null) {\n            SchemaType type = genericObject.getSchemaType();\n            Object nativeObject = genericObject.getNativeObject();\n            ...\n        }\n        ....\n    }\n}\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In the case of AVRO, JSON, and Protobuf records (schemaType=AVRO,JSON,PROTOBUF_NATIVE), you can cast the\n",(0,a.jsx)(n.code,{children:"genericObject"})," variable to ",(0,a.jsx)(n.code,{children:"GenericRecord"})," and use ",(0,a.jsx)(n.code,{children:"getFields()"})," and ",(0,a.jsx)(n.code,{children:"getField()"})," API.\nYou are able to access the native AVRO record using  ",(0,a.jsx)(n.code,{children:"genericObject.getNativeObject()"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"In the case of KeyValue type, you can access both the schema for the key and the schema for the value using this code."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\npublic class MySink implements Sink<GenericObject> {\n    public void write(Record<GenericObject> record) {\n        Schema schema = record.getSchema();\n        GenericObject genericObject = record.getValue();\n        SchemaType type = genericObject.getSchemaType();\n        Object nativeObject = genericObject.getNativeObject();\n        if (type == SchemaType.KEY_VALUE) {\n            KeyValue keyValue = (KeyValue) nativeObject;\n            Object key = keyValue.getKey();\n            Object value = keyValue.getValue();\n\n            KeyValueSchema keyValueSchema = (KeyValueSchema) schema;\n            Schema keySchema = keyValueSchema.getKeySchema();\n            Schema valueSchema = keyValueSchema.getValueSchema();\n        }\n        ....\n    }\n}\n\n"})}),"\n",(0,a.jsx)(n.h2,{id:"test",children:"Test"}),"\n",(0,a.jsx)(n.p,{children:"Testing connectors can be challenging because Pulsar IO connectors interact with two systems\nthat may be difficult to mock\u2014Pulsar and the system to which the connector is connecting."}),"\n",(0,a.jsx)(n.p,{children:"It is\nrecommended writing special tests to test the connector functionalities as below\nwhile mocking the external service."}),"\n",(0,a.jsx)(n.h3,{id:"unit-test",children:"Unit test"}),"\n",(0,a.jsx)(n.p,{children:"You can create unit tests for your connector."}),"\n",(0,a.jsx)(n.h3,{id:"integration-test",children:"Integration test"}),"\n",(0,a.jsx)(n.p,{children:"Once you have written sufficient unit tests, you can add\nseparate integration tests to verify end-to-end functionality."}),"\n",(0,a.jsxs)(n.p,{children:["Pulsar uses ",(0,a.jsx)(n.a,{href:"https://www.testcontainers.org/",children:"testcontainers"})," ",(0,a.jsx)(n.strong,{children:"for all integration tests"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["For more information about ",(0,a.jsx)(n.strong,{children:"how to create integration tests for Pulsar connectors"}),", see ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//tests/integration/src/test/java/org/apache/pulsar/tests/integration/io",children:"IntegrationTests"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"package",children:"Package"}),"\n",(0,a.jsxs)(n.p,{children:["Once you've developed and tested your connector, you need to package it so that it can be submitted\nto a ",(0,a.jsx)(n.a,{href:"/docs/2.9.x/functions-overview",children:"Pulsar Functions"})," cluster."]}),"\n",(0,a.jsxs)(n.p,{children:["There are two methods to\nwork with Pulsar Functions' runtime, that is, ",(0,a.jsx)(n.a,{href:"#nar",children:"NAR"})," and ",(0,a.jsx)(n.a,{href:"#uber-jar",children:"uber JAR"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"If you plan to package and distribute your connector for others to use, you are obligated to"})}),"\n",(0,a.jsx)(n.p,{children:"license and copyright your own code properly. Remember to add the license and copyright to\nall libraries your code uses and to your distribution."}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["If you use the ",(0,a.jsx)(n.a,{href:"#nar",children:"NAR"})," method, the NAR plugin\nautomatically creates a ",(0,a.jsx)(n.code,{children:"DEPENDENCIES"})," file in the generated NAR package, including the proper\nlicensing and copyrights of all libraries of your connector."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"nar",children:"NAR"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"NAR"})," stands for NiFi Archive, which is a custom packaging mechanism used by Apache NiFi, to provide\na bit of Java ClassLoader isolation."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["For more information about ",(0,a.jsx)(n.strong,{children:"how NAR works"}),", see ",(0,a.jsx)(n.a,{href:"https://medium.com/hashmapinc/nifi-nar-files-explained-14113f7796fd",children:"here"}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:["Pulsar uses the same mechanism for packaging ",(0,a.jsx)(n.strong,{children:"all"})," ",(0,a.jsx)(n.a,{href:"/docs/2.9.x/io-connectors",children:"built-in connectors"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The easiest approach to package a Pulsar connector is to create a NAR package using ",(0,a.jsx)(n.a,{href:"https://mvnrepository.com/artifact/org.apache.nifi/nifi-nar-maven-plugin",children:"nifi-nar-maven-plugin"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Include this ",(0,a.jsx)(n.a,{href:"https://mvnrepository.com/artifact/org.apache.nifi/nifi-nar-maven-plugin",children:"nifi-nar-maven-plugin"})," in your maven project for your connector as below."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"\n<plugins>\n  <plugin>\n    <groupId>org.apache.nifi</groupId>\n    <artifactId>nifi-nar-maven-plugin</artifactId>\n    <version>1.5.0</version>\n  </plugin>\n</plugins>\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You must also create a ",(0,a.jsx)(n.code,{children:"resources/META-INF/services/pulsar-io.yaml"})," file with the following contents:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"\nname: connector name\ndescription: connector description\nsourceClass: fully qualified class name (only if source connector)\nsinkClass: fully qualified class name (only if sink connector)\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For Gradle users, there is a ",(0,a.jsx)(n.a,{href:"https://plugins.gradle.org/plugin/io.github.lhotari.gradle-nar-plugin",children:"Gradle Nar plugin available on the Gradle Plugin Portal"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["For more information about an ",(0,a.jsx)(n.strong,{children:"how to use NAR for Pulsar connectors"}),", see ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/twitter/pom.xml",children:"TwitterFirehose"}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"uber-jar",children:"Uber JAR"}),"\n",(0,a.jsxs)(n.p,{children:["An alternative approach is to create an ",(0,a.jsx)(n.strong,{children:"uber JAR"})," that contains all of the connector's JAR files\nand other resource files. No directory internal structure is necessary."]}),"\n",(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.a,{href:"https://maven.apache.org/plugins/maven-shade-plugin/examples/includes-excludes.html",children:"maven-shade-plugin"})," to create a uber JAR as below:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"\n<plugin>\n  <groupId>org.apache.maven.plugins</groupId>\n  <artifactId>maven-shade-plugin</artifactId>\n  <version>3.1.1</version>\n  <executions>\n    <execution>\n      <phase>package</phase>\n      <goals>\n        <goal>shade</goal>\n      </goals>\n      <configuration>\n        <filters>\n          <filter>\n            <artifact>*:*</artifact>\n          </filter>\n        </filters>\n      </configuration>\n    </execution>\n  </executions>\n</plugin>\n\n"})}),"\n",(0,a.jsx)(n.h2,{id:"monitor",children:"Monitor"}),"\n",(0,a.jsx)(n.p,{children:"Pulsar connectors enable you to move data in and out of Pulsar easily. It is important to ensure that the running connectors are healthy at any time. You can monitor Pulsar connectors that have been deployed with the following methods:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Check the metrics provided by Pulsar."}),"\n",(0,a.jsxs)(n.p,{children:["Pulsar connectors expose the metrics that can be collected and used for monitoring the health of ",(0,a.jsx)(n.strong,{children:"Java"})," connectors. You can check the metrics by following the ",(0,a.jsx)(n.a,{href:"/docs/2.9.x/deploy-monitoring",children:"monitoring"})," guide."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Set and check your customized metrics."}),"\n",(0,a.jsxs)(n.p,{children:["In addition to the metrics provided by Pulsar, Pulsar allows you to customize metrics for ",(0,a.jsx)(n.strong,{children:"Java"})," connectors. Function workers collect user-defined metrics to Prometheus automatically and you can check them in Grafana."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Here is an example of how to customize metrics for a Java connector."}),"\n",(0,a.jsx)(i.A,{defaultValue:"Java",values:[{label:"Java",value:"Java"}],children:(0,a.jsx)(o.A,{value:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'\npublic class TestMetricSink implements Sink<String> {\n\n        @Override\n        public void open(Map<String, Object> config, SinkContext sinkContext) throws Exception {\n            sinkContext.recordMetric("foo", 1);\n        }\n\n        @Override\n        public void write(Record<String> record) throws Exception {\n\n        }\n\n        @Override\n        public void close() throws Exception {\n\n        }\n    }\n\n'})})})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var t=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:r,children:n})}},89089:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(96540),a=r(34164),s=r(23104),i=r(56347),o=r(205),c=r(57485),l=r(31682),d=r(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=u(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[l,h]=m({queryString:r,groupId:a}),[j,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),g=(()=>{const e=l??j;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&c(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),x(e)}),[h,x,s]),tabValues:s}}var x=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),a=o[r].value;a!==t&&(l(n),i(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(96540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);