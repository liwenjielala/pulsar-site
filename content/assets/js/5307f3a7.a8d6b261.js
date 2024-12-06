"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[40805],{67415:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"concepts-schema-registry","title":"Schema Registry","description":"Type safety is extremely important in any application built around a message bus like Pulsar. Producers and consumers need some kind of mechanism for coordinating types at the topic level lest a wide variety of potential problems arise (for example serialization and deserialization issues). Applications typically adopt one of two basic approaches to type safety in messaging:","source":"@site/versioned_docs/version-2.6.1/concepts-schema-registry.md","sourceDirName":".","slug":"/concepts-schema-registry","permalink":"/docs/2.6.1/concepts-schema-registry","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.1/concepts-schema-registry.md","tags":[],"version":"2.6.1","frontMatter":{"id":"concepts-schema-registry","title":"Schema Registry","sidebar_label":"Schema Registry","original_id":"concepts-schema-registry"}}');var n=r(74848),a=r(28453);const i={id:"concepts-schema-registry",title:"Schema Registry",sidebar_label:"Schema Registry",original_id:"concepts-schema-registry"},c=void 0,o={},l=[{value:"Note",id:"note",level:4},{value:"Basic architecture",id:"basic-architecture",level:2},{value:"Other schema registry backends",id:"other-schema-registry-backends",level:4},{value:"How schemas work",id:"how-schemas-work",level:2},{value:"Schema versions",id:"schema-versions",level:2},{value:"Supported schema formats",id:"supported-schema-formats",level:2},{value:"Managing Schemas",id:"managing-schemas",level:2}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Type safety is extremely important in any application built around a message bus like Pulsar. Producers and consumers need some kind of mechanism for coordinating types at the topic level lest a wide variety of potential problems arise (for example serialization and deserialization issues). Applications typically adopt one of two basic approaches to type safety in messaging:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:['A "client-side" approach in which message producers and consumers are responsible for not only serializing and deserializing messages (which consist of raw bytes) but also "knowing" which types are being transmitted via which topics. If a producer is sending temperature sensor data on the topic ',(0,n.jsx)(s.code,{children:"topic-1"}),", consumers of that topic will run into trouble if they attempt to parse that data as, say, moisture sensor readings."]}),"\n",(0,n.jsx)(s.li,{children:'A "server-side" approach in which producers and consumers inform the system which data types can be transmitted via the topic. With this approach, the messaging system enforces type safety and ensures that producers and consumers remain synced.'}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Both approaches are available in Pulsar, and you're free to adopt one or the other or to mix and match on a per-topic basis."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:'For the "client-side" approach, producers and consumers can send and receive messages consisting of raw byte arrays and leave all type safety enforcement to the application on an "out-of-band" basis.'}),"\n",(0,n.jsxs)(s.li,{children:['For the "server-side" approach, Pulsar has a built-in ',(0,n.jsx)(s.strong,{children:"schema registry"})," that enables clients to upload data schemas on a per-topic basis. Those schemas dictate which data types are recognized as valid for that topic."]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"note",children:"Note"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Currently, the Pulsar schema registry is only available for the ",(0,n.jsx)(s.a,{href:"/docs/2.6.1/client-libraries-java",children:"Java client"}),", ",(0,n.jsx)(s.a,{href:"/docs/2.6.1/client-libraries-go",children:"CGo client"}),", ",(0,n.jsx)(s.a,{href:"/docs/2.6.1/client-libraries-python",children:"Python client"}),", and ",(0,n.jsx)(s.a,{href:"/docs/2.6.1/client-libraries-cpp",children:"C++ client"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"basic-architecture",children:"Basic architecture"}),"\n",(0,n.jsxs)(s.p,{children:["Schemas are automatically uploaded when you create a typed Producer with a Schema. Additionally, Schemas can be manually uploaded to, fetched from, and updated via Pulsar's ",(0,n.jsx)(s.a,{href:"https://pulsar.apache.org/admin-rest-api#tag/schemas",children:"REST"})," API."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.h4,{id:"other-schema-registry-backends",children:"Other schema registry backends"}),"\n",(0,n.jsxs)(s.p,{children:["Out of the box, Pulsar uses the ",(0,n.jsx)(s.a,{href:"concepts-architecture-overview#persistent-storage",children:"Apache BookKeeper"})," log storage system for schema storage. You can, however, use different backends if you wish. Documentation for custom schema storage logic is coming soon."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-schemas-work",children:"How schemas work"}),"\n",(0,n.jsxs)(s.p,{children:["Pulsar schemas are applied and enforced ",(0,n.jsx)(s.em,{children:"at the topic level"})," (schemas cannot be applied at the namespace or tenant level). Producers and consumers upload schemas to Pulsar brokers."]}),"\n",(0,n.jsx)(s.p,{children:"Pulsar schemas are fairly simple data structures that consist of:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["A ",(0,n.jsx)(s.strong,{children:"name"}),". In Pulsar, a schema's name is the topic to which the schema is applied."]}),"\n",(0,n.jsxs)(s.li,{children:["A ",(0,n.jsx)(s.strong,{children:"payload"}),", which is a binary representation of the schema"]}),"\n",(0,n.jsxs)(s.li,{children:["A schema ",(0,n.jsx)(s.a,{href:"#supported-schema-formats",children:(0,n.jsx)(s.strong,{children:"type"})})]}),"\n",(0,n.jsxs)(s.li,{children:["User-defined ",(0,n.jsx)(s.strong,{children:"properties"})," as a string/string map. Usage of properties is wholly application specific. Possible properties might be the Git hash associated with a schema, an environment like ",(0,n.jsx)(s.code,{children:"dev"})," or ",(0,n.jsx)(s.code,{children:"prod"}),", etc."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"schema-versions",children:"Schema versions"}),"\n",(0,n.jsxs)(s.p,{children:["In order to illustrate how schema versioning works, let's walk through an example. Imagine that the Pulsar ",(0,n.jsx)(s.a,{href:"/docs/2.6.1/client-libraries-java",children:"Java client"})," created using the code below attempts to connect to Pulsar and begin sending messages:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:'\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .build();\n\nProducer<SensorReading> producer = client.newProducer(JSONSchema.of(SensorReading.class))\n        .topic("sensor-data")\n        .sendTimeout(3, TimeUnit.SECONDS)\n        .create();\n\n'})}),"\n",(0,n.jsx)(s.p,{children:"The table below lists the possible scenarios when this connection attempt occurs and what will happen in light of each scenario:"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Scenario"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"What happens"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"No schema exists for the topic"}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:['The producer is created using the given schema. The schema is transmitted to the broker and stored (since no existing schema is "compatible" with the ',(0,n.jsx)(s.code,{children:"SensorReading"})," schema). Any consumer created using the same schema/topic can consume messages from the ",(0,n.jsx)(s.code,{children:"sensor-data"})," topic."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"A schema already exists; the producer connects using the same schema that's already stored"}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:["The schema is transmitted to the Pulsar broker. The broker determines that the schema is compatible. The broker attempts to store the schema in ",(0,n.jsx)(s.a,{href:"/docs/2.6.1/concepts-architecture-overview#persistent-storage",children:"BookKeeper"})," but then determines that it's already stored, so it's then used to tag produced messages."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"A schema already exists; the producer connects using a new schema that is compatible"}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"The producer transmits the schema to the broker. The broker determines that the schema is compatible and stores the new schema as the current version (with a new version number)."})]})]})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Schemas are versioned in succession. Schema storage happens in the broker that handles the associated topic so that version assignments can be made. Once a version is assigned/fetched to/for a schema, all subsequent messages produced by that producer are tagged with the appropriate version."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"supported-schema-formats",children:"Supported schema formats"}),"\n",(0,n.jsx)(s.p,{children:"The following formats are supported by the Pulsar schema registry:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"None. If no schema is specified for a topic, producers and consumers will handle raw bytes."}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"String"})," (used for UTF-8-encoded strings)"]}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://www.json.org/",children:"JSON"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developers.google.com/protocol-buffers/",children:"Protobuf"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://avro.apache.org/",children:"Avro"})}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"For usage instructions, see the documentation for your preferred client library:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/2.6.1/client-libraries-java#schemas",children:"Java"})}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Support for other schema formats will be added in future releases of Pulsar."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The following example shows how to define an Avro schema using the ",(0,n.jsx)(s.code,{children:"GenericSchemaBuilder"}),", generate a generic Avro schema using ",(0,n.jsx)(s.code,{children:"GenericRecordBuilder"}),", and consume messages into ",(0,n.jsx)(s.code,{children:"GenericRecord"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Example"})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Use the ",(0,n.jsx)(s.code,{children:"RecordSchemaBuilder"})," to build a schema."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:'\nRecordSchemaBuilder recordSchemaBuilder = SchemaBuilder.record("schemaName");\nrecordSchemaBuilder.field("intField").type(SchemaType.INT32);\nSchemaInfo schemaInfo = recordSchemaBuilder.build(SchemaType.AVRO);\n\nProducer<GenericRecord> producer = client.newProducer(Schema.generic(schemaInfo)).create();\n\n'})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Use ",(0,n.jsx)(s.code,{children:"RecordBuilder"})," to build the generic records."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:'\nproducer.newMessage().value(schema.newRecordBuilder()\n            .set("intField", 32)\n            .build()).send();\n\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"managing-schemas",children:"Managing Schemas"}),"\n",(0,n.jsx)(s.p,{children:"You can use Pulsar admin tools to manage schemas for topics."})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>c});var t=r(96540);const n={},a=t.createContext(n);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);