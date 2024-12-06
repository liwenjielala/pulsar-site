"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[18520],{74167:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>o,frontMatter:()=>d,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"schema-understand","title":"Understand schema","description":"This chapter explains the basic concepts of Pulsar schema, focuses on the topics of particular importance, and provides additional background.","source":"@site/versioned_docs/version-2.7.0/schema-understand.md","sourceDirName":".","slug":"/schema-understand","permalink":"/docs/2.7.0/schema-understand","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.0/schema-understand.md","tags":[],"version":"2.7.0","frontMatter":{"id":"schema-understand","title":"Understand schema","sidebar_label":"Understand schema","original_id":"schema-understand"},"sidebar":"docsSidebar","previous":{"title":"Get started","permalink":"/docs/2.7.0/schema-get-started"},"next":{"title":"Schema evolution and compatibility","permalink":"/docs/2.7.0/schema-evolution-compatibility"}}');var c=n(74848),i=n(28453);const d={id:"schema-understand",title:"Understand schema",sidebar_label:"Understand schema",original_id:"schema-understand"},t=void 0,a={},h=[{value:"SchemaInfo",id:"schemainfo",level:2},{value:"Schema type",id:"schema-type",level:2},{value:"Primitive type",id:"primitive-type",level:3},{value:"Complex type",id:"complex-type",level:3},{value:"keyvalue",id:"keyvalue",level:4},{value:"INLINE",id:"inline",level:5},{value:"SEPARATED",id:"separated",level:5},{value:"struct",id:"struct",level:4},{value:"static",id:"static",level:5},{value:"generic",id:"generic",level:5},{value:"Auto Schema",id:"auto-schema",level:3},{value:"AUTO_PRODUCE",id:"auto_produce",level:4},{value:"AUTO_CONSUME",id:"auto_consume",level:4},{value:"Schema version",id:"schema-version",level:2},{value:"How does schema work",id:"how-does-schema-work",level:2},{value:"Producer side",id:"producer-side",level:3},{value:"Consumer side",id:"consumer-side",level:3}];function l(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.p,{children:"This chapter explains the basic concepts of Pulsar schema, focuses on the topics of particular importance, and provides additional background."}),"\n",(0,c.jsx)(s.h2,{id:"schemainfo",children:"SchemaInfo"}),"\n",(0,c.jsxs)(s.p,{children:["Pulsar schema is defined in a data structure called ",(0,c.jsx)(s.code,{children:"SchemaInfo"}),"."]}),"\n",(0,c.jsxs)(s.p,{children:["The ",(0,c.jsx)(s.code,{children:"SchemaInfo"})," is stored and enforced on a per-topic basis and cannot be stored at the namespace or tenant level."]}),"\n",(0,c.jsxs)(s.p,{children:["A ",(0,c.jsx)(s.code,{children:"SchemaInfo"})," consists of the following fields:"]}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"Field"}),(0,c.jsx)(s.th,{children:"Description"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"name"})}),(0,c.jsx)(s.td,{children:"Schema name (a string)."})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"type"})}),(0,c.jsxs)(s.td,{children:["Schema type, which determines how to interpret the schema data. ",(0,c.jsxs)("li",{children:["Predefined schema: see ",(0,c.jsx)(s.a,{href:"/docs/2.7.0/schema-understand#schema-type",children:"here"}),". "]}),(0,c.jsx)("li",{children:"Customized schema: it is left as an empty string. "})]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsxs)(s.td,{children:[(0,c.jsx)(s.code,{children:"schema"}),"\uff08",(0,c.jsx)(s.code,{children:"payload"}),")"]}),(0,c.jsx)(s.td,{children:"Schema data, which is a sequence of 8-bit unsigned bytes and schema-type specific."})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"properties"})}),(0,c.jsxs)(s.td,{children:["It is a user defined properties as a string/string map. Applications can use this bag for carrying any application specific logics. Possible properties might be the Git hash associated with the schema, an environment string like ",(0,c.jsx)(s.code,{children:"dev"})," or ",(0,c.jsx)(s.code,{children:"prod"}),"."]})]})]})]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"Example"})}),"\n",(0,c.jsxs)(s.p,{children:["This is the ",(0,c.jsx)(s.code,{children:"SchemaInfo"})," of a string."]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-json",children:'\n{\n    "name": "test-string-schema",\n    "type": "STRING",\n    "schema": "",\n    "properties": {}\n}\n\n'})}),"\n",(0,c.jsx)(s.h2,{id:"schema-type",children:"Schema type"}),"\n",(0,c.jsx)(s.p,{children:"Pulsar supports various schema types, which are mainly divided into two categories:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"Primitive type"}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"Complex type"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"primitive-type",children:"Primitive type"}),"\n",(0,c.jsx)(s.p,{children:"Currently, Pulsar supports the following primitive types:"}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"Primitive Type"}),(0,c.jsx)(s.th,{children:"Description"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"BOOLEAN"})}),(0,c.jsx)(s.td,{children:"A binary value"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"INT8"})}),(0,c.jsx)(s.td,{children:"A 8-bit signed integer"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"INT16"})}),(0,c.jsx)(s.td,{children:"A 16-bit signed integer"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"INT32"})}),(0,c.jsx)(s.td,{children:"A 32-bit signed integer"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"INT64"})}),(0,c.jsx)(s.td,{children:"A 64-bit signed integer"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"FLOAT"})}),(0,c.jsx)(s.td,{children:"A single precision (32-bit) IEEE 754 floating-point number"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"DOUBLE"})}),(0,c.jsx)(s.td,{children:"A double-precision (64-bit) IEEE 754 floating-point number"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"BYTES"})}),(0,c.jsx)(s.td,{children:"A sequence of 8-bit unsigned bytes"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"STRING"})}),(0,c.jsx)(s.td,{children:"A Unicode character sequence"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsxs)(s.td,{children:[(0,c.jsx)(s.code,{children:"TIMESTAMP"})," (",(0,c.jsx)(s.code,{children:"DATE"}),", ",(0,c.jsx)(s.code,{children:"TIME"}),")"]}),(0,c.jsxs)(s.td,{children:["A logic type represents a specific instant in time with millisecond precision. ",(0,c.jsx)("br",{}),"It stores the number of milliseconds since ",(0,c.jsx)(s.code,{children:"January 1, 1970, 00:00:00 GMT"})," as an ",(0,c.jsx)(s.code,{children:"INT64"})," value"]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"INSTANT"}),(0,c.jsx)(s.td,{children:"A single instantaneous point on the time-line with nanoseconds precision"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"LOCAL_DATE"}),(0,c.jsx)(s.td,{children:"An immutable date-time object that represents a date, often viewed as year-month-day"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"LOCAL_TIME"}),(0,c.jsx)(s.td,{children:"An immutable date-time object that represents a time, often viewed as hour-minute-second. Time is represented to nanosecond precision."})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"LOCAL_DATE_TIME"}),(0,c.jsx)(s.td,{children:"An immutable date-time object that represents a date-time, often viewed as year-month-day-hour-minute-second"})]})]})]}),"\n",(0,c.jsxs)(s.p,{children:["For primitive types, Pulsar does not store any schema data in ",(0,c.jsx)(s.code,{children:"SchemaInfo"}),". The ",(0,c.jsx)(s.code,{children:"type"})," in ",(0,c.jsx)(s.code,{children:"SchemaInfo"})," is used to determine how to serialize and deserialize the data."]}),"\n",(0,c.jsxs)(s.p,{children:["Some of the primitive schema implementations can use ",(0,c.jsx)(s.code,{children:"properties"})," to store implementation-specific tunable settings. For example, a ",(0,c.jsx)(s.code,{children:"string"})," schema can use ",(0,c.jsx)(s.code,{children:"properties"})," to store the encoding charset to serialize and deserialize strings."]}),"\n",(0,c.jsxs)(s.p,{children:["The conversions between ",(0,c.jsx)(s.strong,{children:"Pulsar schema types"})," and ",(0,c.jsx)(s.strong,{children:"language-specific primitive types"})," are as below."]}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"Schema Type"}),(0,c.jsx)(s.th,{children:"Java Type"}),(0,c.jsx)(s.th,{children:"Python Type"}),(0,c.jsx)(s.th,{children:"Go Type"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"BOOLEAN"}),(0,c.jsx)(s.td,{children:"boolean"}),(0,c.jsx)(s.td,{children:"bool"}),(0,c.jsx)(s.td,{children:"bool"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"INT8"}),(0,c.jsx)(s.td,{children:"byte"}),(0,c.jsx)(s.td,{}),(0,c.jsx)(s.td,{children:"int8"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"INT16"}),(0,c.jsx)(s.td,{children:"short"}),(0,c.jsx)(s.td,{}),(0,c.jsx)(s.td,{children:"int16"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"INT32"}),(0,c.jsx)(s.td,{children:"int"}),(0,c.jsx)(s.td,{}),(0,c.jsx)(s.td,{children:"int32"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"INT64"}),(0,c.jsx)(s.td,{children:"long"}),(0,c.jsx)(s.td,{}),(0,c.jsx)(s.td,{children:"int64"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"FLOAT"}),(0,c.jsx)(s.td,{children:"float"}),(0,c.jsx)(s.td,{children:"float"}),(0,c.jsx)(s.td,{children:"float32"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"DOUBLE"}),(0,c.jsx)(s.td,{children:"double"}),(0,c.jsx)(s.td,{children:"float"}),(0,c.jsx)(s.td,{children:"float64"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"BYTES"}),(0,c.jsx)(s.td,{children:"byte[], ByteBuffer, ByteBuf"}),(0,c.jsx)(s.td,{children:"bytes"}),(0,c.jsx)(s.td,{children:"[]byte"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"STRING"}),(0,c.jsx)(s.td,{children:"string"}),(0,c.jsx)(s.td,{children:"str"}),(0,c.jsx)(s.td,{children:"string"})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"TIMESTAMP"}),(0,c.jsx)(s.td,{children:"java.sql.Timestamp"}),(0,c.jsx)(s.td,{}),(0,c.jsx)(s.td,{})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"TIME"}),(0,c.jsx)(s.td,{children:"java.sql.Time"}),(0,c.jsx)(s.td,{}),(0,c.jsx)(s.td,{})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"DATE"}),(0,c.jsx)(s.td,{children:"java.util.Date"}),(0,c.jsx)(s.td,{}),(0,c.jsx)(s.td,{})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"INSTANT"}),(0,c.jsx)(s.td,{children:"java.time.Instant"}),(0,c.jsx)(s.td,{}),(0,c.jsx)(s.td,{})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"LOCAL_DATE"}),(0,c.jsx)(s.td,{children:"java.time.LocalDate"}),(0,c.jsx)(s.td,{}),(0,c.jsx)(s.td,{})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"LOCAL_TIME"}),(0,c.jsx)(s.td,{children:"java.time.LocalTime"}),(0,c.jsx)(s.td,{}),(0,c.jsx)(s.td,{})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:"LOCAL_DATE_TIME"}),(0,c.jsx)(s.td,{children:"java.time.LocalDateTime"}),(0,c.jsx)(s.td,{}),(0,c.jsx)(s.td,{})]})]})]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"Example"})}),"\n",(0,c.jsx)(s.p,{children:"This example demonstrates how to use a string schema."}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"Create a producer with a string schema and send messages."}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-java",children:'\nProducer<String> producer = client.newProducer(Schema.STRING).create();\nproducer.newMessage().value("Hello Pulsar!").send();\n\n'})}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"Create a consumer with a string schema and receive messages."}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-java",children:"\nConsumer<String> consumer = client.newConsumer(Schema.STRING).subscribe();\nconsumer.receive();\n\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"complex-type",children:"Complex type"}),"\n",(0,c.jsx)(s.p,{children:"Currently, Pulsar supports the following complex types:"}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"Complex Type"}),(0,c.jsx)(s.th,{children:"Description"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"keyvalue"})}),(0,c.jsx)(s.td,{children:"Represents a complex type of a key/value pair."})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"struct"})}),(0,c.jsxs)(s.td,{children:["Supports ",(0,c.jsx)(s.strong,{children:"AVRO"}),", ",(0,c.jsx)(s.strong,{children:"JSON"}),", and ",(0,c.jsx)(s.strong,{children:"Protobuf"}),"."]})]})]})]}),"\n",(0,c.jsx)(s.h4,{id:"keyvalue",children:"keyvalue"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"Keyvalue"})," schema helps applications define schemas for both key and value."]}),"\n",(0,c.jsxs)(s.p,{children:["For ",(0,c.jsx)(s.code,{children:"SchemaInfo"})," of ",(0,c.jsx)(s.code,{children:"keyvalue"})," schema, Pulsar stores the ",(0,c.jsx)(s.code,{children:"SchemaInfo"})," of key schema and the ",(0,c.jsx)(s.code,{children:"SchemaInfo"})," of value schema together."]}),"\n",(0,c.jsx)(s.p,{children:"Pulsar provides two methods to encode a key/value pair in messages\uff1a"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.code,{children:"INLINE"})}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.code,{children:"SEPARATED"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"Users can choose the encoding type when constructing the key/value schema."}),"\n",(0,c.jsx)(s.h5,{id:"inline",children:"INLINE"}),"\n",(0,c.jsx)(s.p,{children:"Key/value pairs will be encoded together in the message payload."}),"\n",(0,c.jsx)(s.h5,{id:"separated",children:"SEPARATED"}),"\n",(0,c.jsx)(s.p,{children:"Key will be encoded in the message key and the value will be encoded in the message payload."}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"Example"})}),"\n",(0,c.jsx)(s.p,{children:"This example shows how to construct a key/value schema and then use it to produce and consume messages."}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["Construct a key/value schema with ",(0,c.jsx)(s.code,{children:"INLINE"})," encoding type."]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-java",children:"\nSchema<KeyValue<Integer, String>> kvSchema = Schema.KeyValue(\nSchema.INT32,\nSchema.STRING,\nKeyValueEncodingType.INLINE\n);\n\n"})}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["Optionally, construct a key/value schema with ",(0,c.jsx)(s.code,{children:"SEPARATED"})," encoding type."]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-java",children:"\nSchema<KeyValue<Integer, String>> kvSchema = Schema.KeyValue(\nSchema.INT32,\nSchema.STRING,\nKeyValueEncodingType.SEPARATED\n);\n\n"})}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"Produce messages using a key/value schema."}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-java",children:'\nSchema<KeyValue<Integer, String>> kvSchema = Schema.KeyValue(\nSchema.INT32,\nSchema.STRING,\nKeyValueEncodingType.SEPARATED\n);\n\nProducer<KeyValue<Integer, String>> producer = client.newProducer(kvSchema)\n    .topic(TOPIC)\n    .create();\n\nfinal int key = 100;\nfinal String value = "value-100";\n\n// send the key/value message\nproducer.newMessage()\n.value(new KeyValue(key, value))\n.send();\n\n'})}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"Consume messages using a key/value schema."}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-java",children:"\nSchema<KeyValue<Integer, String>> kvSchema = Schema.KeyValue(\nSchema.INT32,\nSchema.STRING,\nKeyValueEncodingType.SEPARATED\n);\n\nConsumer<KeyValue<Integer, String>> consumer = client.newConsumer(kvSchema)\n    ...\n    .topic(TOPIC)\n    .subscriptionName(SubscriptionName).subscribe();\n\n// receive key/value pair\nMessage<KeyValue<Integer, String>> msg = consumer.receive();\nKeyValue<Integer, String> kv = msg.getValue();\n\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h4,{id:"struct",children:"struct"}),"\n",(0,c.jsxs)(s.p,{children:["Pulsar uses ",(0,c.jsx)(s.a,{href:"http://avro.apache.org/docs/current/spec.html",children:"Avro Specification"})," to declare the schema definition for ",(0,c.jsx)(s.code,{children:"struct"})," schema."]}),"\n",(0,c.jsx)(s.p,{children:"This allows Pulsar:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"to use same tools to manage schema definitions"}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"to use different serialization/deserialization methods to handle data"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["There are two methods to use ",(0,c.jsx)(s.code,{children:"struct"})," schema\uff1a"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.code,{children:"static"})}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.code,{children:"generic"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h5,{id:"static",children:"static"}),"\n",(0,c.jsxs)(s.p,{children:["You can predefine the ",(0,c.jsx)(s.code,{children:"struct"})," schema, and it can be a POJO in Java, a ",(0,c.jsx)(s.code,{children:"struct"})," in Go, or classes generated by Avro or Protobuf tools."]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"Example"})}),"\n",(0,c.jsxs)(s.p,{children:["Pulsar gets the schema definition from the predefined ",(0,c.jsx)(s.code,{children:"struct"})," using an Avro library. The schema definition is the schema data stored as a part of the ",(0,c.jsx)(s.code,{children:"SchemaInfo"}),"."]}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["Create the ",(0,c.jsx)(s.em,{children:"User"})," class to define the messages sent to Pulsar topics."]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-java",children:"\npublic class User {\n    String name;\n    int age;\n}\n\n"})}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["Create a producer with a ",(0,c.jsx)(s.code,{children:"struct"})," schema and send messages."]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-java",children:'\nProducer<User> producer = client.newProducer(Schema.AVRO(User.class)).create();\nproducer.newMessage().value(User.builder().userName("pulsar-user").userId(1L).build()).send();\n\n'})}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["Create a consumer with a ",(0,c.jsx)(s.code,{children:"struct"})," schema and receive messages"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-java",children:"\nConsumer<User> consumer = client.newConsumer(Schema.AVRO(User.class)).subscribe();\nUser user = consumer.receive();\n\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h5,{id:"generic",children:"generic"}),"\n",(0,c.jsx)(s.p,{children:"Sometimes applications do not have pre-defined structs, and you can use this method to define schema and access data."}),"\n",(0,c.jsxs)(s.p,{children:["You can define the ",(0,c.jsx)(s.code,{children:"struct"})," schema using the ",(0,c.jsx)(s.code,{children:"GenericSchemaBuilder"}),", generate a generic struct using ",(0,c.jsx)(s.code,{children:"GenericRecordBuilder"})," and consume messages into ",(0,c.jsx)(s.code,{children:"GenericRecord"}),"."]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"Example"})}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["Use ",(0,c.jsx)(s.code,{children:"RecordSchemaBuilder"})," to build a schema."]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-java",children:'\nRecordSchemaBuilder recordSchemaBuilder = SchemaBuilder.record("schemaName");\nrecordSchemaBuilder.field("intField").type(SchemaType.INT32);\nSchemaInfo schemaInfo = recordSchemaBuilder.build(SchemaType.AVRO);\n\nProducer<GenericRecord> producer = client.newProducer(Schema.generic(schemaInfo)).create();\n\n'})}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["Use ",(0,c.jsx)(s.code,{children:"RecordBuilder"})," to build the struct records."]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-java",children:'\nproducer.newMessage().value(schema.newRecordBuilder()\n            .set("intField", 32)\n            .build()).send();\n\n'})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"auto-schema",children:"Auto Schema"}),"\n",(0,c.jsx)(s.p,{children:"If you don't know the schema type of a Pulsar topic in advance, you can use AUTO schema to produce or consume generic records to or from brokers."}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"Auto Schema Type"}),(0,c.jsx)(s.th,{children:"Description"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"AUTO_PRODUCE"})}),(0,c.jsxs)(s.td,{children:["This is useful for transferring data ",(0,c.jsx)(s.strong,{children:"from a producer to a Pulsar topic that has a schema"}),"."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"AUTO_CONSUME"})}),(0,c.jsxs)(s.td,{children:["This is useful for transferring data ",(0,c.jsx)(s.strong,{children:"from a Pulsar topic that has a schema to a consumer"}),"."]})]})]})]}),"\n",(0,c.jsx)(s.h4,{id:"auto_produce",children:"AUTO_PRODUCE"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"AUTO_PRODUCE"})," schema helps a producer validate whether the bytes sent by the producer is compatible with the schema of a topic."]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"Example"})}),"\n",(0,c.jsx)(s.p,{children:"Suppose that:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["You have a producer processing messages from a Kafka topic ",(0,c.jsx)(s.em,{children:"K"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["You have a Pulsar topic ",(0,c.jsx)(s.em,{children:"P"}),", and you do not know its schema type."]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["Your application reads the messages from ",(0,c.jsx)(s.em,{children:"K"})," and writes the messages to ",(0,c.jsx)(s.em,{children:"P"}),"."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["In this case, you can use ",(0,c.jsx)(s.code,{children:"AUTO_PRODUCE"})," to verify whether the bytes produced by ",(0,c.jsx)(s.em,{children:"K"})," can be sent to ",(0,c.jsx)(s.em,{children:"P"})," or not."]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-java",children:"\nProduce<byte[]> pulsarProducer = client.newProducer(Schema.AUTO_PRODUCE())\n    \u2026\n    .create();\n\nbyte[] kafkaMessageBytes = \u2026 ;\n\npulsarProducer.produce(kafkaMessageBytes);\n\n"})}),"\n",(0,c.jsx)(s.h4,{id:"auto_consume",children:"AUTO_CONSUME"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"AUTO_CONSUME"})," schema helps a Pulsar topic validate whether the bytes sent by a Pulsar topic is compatible with a consumer, that is, the Pulsar topic deserializes messages into language-specific objects using the ",(0,c.jsx)(s.code,{children:"SchemaInfo"})," retrieved from broker-side."]}),"\n",(0,c.jsxs)(s.p,{children:["Currently, ",(0,c.jsx)(s.code,{children:"AUTO_CONSUME"})," only supports ",(0,c.jsx)(s.strong,{children:"AVRO"})," and ",(0,c.jsx)(s.strong,{children:"JSON"})," schemas. It deserializes messages into ",(0,c.jsx)(s.code,{children:"GenericRecord"}),"."]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"Example"})}),"\n",(0,c.jsx)(s.p,{children:"Suppose that:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["You have a Pulsar topic ",(0,c.jsx)(s.em,{children:"P"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["You have a consumer (for example, MySQL) receiving messages from the topic ",(0,c.jsx)(s.em,{children:"P"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["Your application reads the messages from ",(0,c.jsx)(s.em,{children:"P"})," and writes the messages to MySQL."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["In this case, you can use ",(0,c.jsx)(s.code,{children:"AUTO_CONSUME"})," to verify whether the bytes produced by ",(0,c.jsx)(s.em,{children:"P"})," can be sent to MySQL or not."]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-java",children:"\nConsumer<GenericRecord> pulsarConsumer = client.newConsumer(Schema.AUTO_CONSUME())\n    \u2026\n    .subscribe();\n\nMessage<GenericRecord> msg = consumer.receive() ;\nGenericRecord record = msg.getValue();\n\n"})}),"\n",(0,c.jsx)(s.h2,{id:"schema-version",children:"Schema version"}),"\n",(0,c.jsxs)(s.p,{children:["Each ",(0,c.jsx)(s.code,{children:"SchemaInfo"})," stored with a topic has a version. Schema version manages schema changes happening within a topic."]}),"\n",(0,c.jsxs)(s.p,{children:["Messages produced with a given ",(0,c.jsx)(s.code,{children:"SchemaInfo"})," is tagged with a schema version, so when a message is consumed by a Pulsar client, the Pulsar client can use the schema version to retrieve the corresponding ",(0,c.jsx)(s.code,{children:"SchemaInfo"})," and then use the ",(0,c.jsx)(s.code,{children:"SchemaInfo"})," to deserialize data."]}),"\n",(0,c.jsx)(s.p,{children:"Schemas are versioned in succession. Schema storage happens in a broker that handles the associated topics so that version assignments can be made."}),"\n",(0,c.jsx)(s.p,{children:"Once a version is assigned/fetched to/for a schema, all subsequent messages produced by that producer are tagged with the appropriate version."}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"Example"})}),"\n",(0,c.jsx)(s.p,{children:"The following example illustrates how the schema version works."}),"\n",(0,c.jsxs)(s.p,{children:["Suppose that a Pulsar ",(0,c.jsx)(s.a,{href:"/docs/2.7.0/client-libraries-java",children:"Java client"})," created using the code below attempts to connect to Pulsar and begins to send messages:"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-java",children:'\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .build();\n\nProducer<SensorReading> producer = client.newProducer(JSONSchema.of(SensorReading.class))\n        .topic("sensor-data")\n        .sendTimeout(3, TimeUnit.SECONDS)\n        .create();\n\n'})}),"\n",(0,c.jsx)(s.p,{children:"The table below lists the possible scenarios when this connection attempt occurs and what happens in each scenario:"}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"Scenario"}),(0,c.jsx)(s.th,{children:"What happens"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)("li",{children:"No schema exists for the topic. "})}),(0,c.jsxs)(s.td,{children:["(1) The producer is created using the given schema. (2) Since no existing schema is compatible with the ",(0,c.jsx)(s.code,{children:"SensorReading"})," schema, the schema is transmitted to the broker and stored. (3) Any consumer created using the same schema or topic can consume messages from the ",(0,c.jsx)(s.code,{children:"sensor-data"})," topic."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsxs)(s.td,{children:[(0,c.jsx)("li",{children:"A schema already exists. "}),(0,c.jsx)("li",{children:"The producer connects using the same schema that is already stored. "})]}),(0,c.jsxs)(s.td,{children:["(1) The schema is transmitted to the broker. (2) The broker determines that the schema is compatible. (3) The broker attempts to store the schema in ",(0,c.jsx)(s.a,{href:"/docs/2.7.0/concepts-architecture-overview#persistent-storage",children:"BookKeeper"})," but then determines that it's already stored, so it is used to tag produced messages."]})]})]})]}),"\n",(0,c.jsx)(s.h2,{id:"how-does-schema-work",children:"How does schema work"}),"\n",(0,c.jsxs)(s.p,{children:["Pulsar schemas are applied and enforced at the ",(0,c.jsx)(s.strong,{children:"topic"})," level (schemas cannot be applied at the namespace or tenant level)."]}),"\n",(0,c.jsx)(s.p,{children:"Producers and consumers upload schemas to brokers, so Pulsar schemas work on the producer side and the consumer side."}),"\n",(0,c.jsx)(s.h3,{id:"producer-side",children:"Producer side"}),"\n",(0,c.jsx)(s.p,{children:"This diagram illustrates how does schema work on the Producer side."}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{alt:"Schema works at the producer side",src:n(17431).A+"",width:"1278",height:"1228"})}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"The application uses a schema instance to construct a producer instance."}),"\n",(0,c.jsx)(s.p,{children:"The schema instance defines the schema for the data being produced using the producer instance."}),"\n",(0,c.jsxs)(s.p,{children:["Take AVRO as an example, Pulsar extracts schema definition from the POJO class and constructs the ",(0,c.jsx)(s.code,{children:"SchemaInfo"})," that the producer needs to pass to a broker when it connects."]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["The producer connects to the broker with the ",(0,c.jsx)(s.code,{children:"SchemaInfo"})," extracted from the passed-in schema instance."]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"The broker looks up the schema in the schema storage to check if it is already a registered schema."}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"If yes, the broker skips the schema validation since it is a known schema, and returns the schema version to the producer."}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"If no, the broker verifies whether a schema can be automatically created in this namespace:"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["If ",(0,c.jsx)(s.code,{children:"isAllowAutoUpdateSchema"})," sets to ",(0,c.jsx)(s.strong,{children:"true"}),", then a schema can be created, and the broker validates the schema based on the schema compatibility check strategy defined for the topic."]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["If ",(0,c.jsx)(s.code,{children:"isAllowAutoUpdateSchema"})," sets to ",(0,c.jsx)(s.strong,{children:"false"}),", then a schema can not be created, and the producer is rejected to connect to the broker."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"Tip"}),":"]}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"isAllowAutoUpdateSchema"})," can be set via ",(0,c.jsx)(s.strong,{children:"Pulsar admin API"})," or ",(0,c.jsx)(s.strong,{children:"REST API."})]}),"\n",(0,c.jsxs)(s.p,{children:["For how to set ",(0,c.jsx)(s.code,{children:"isAllowAutoUpdateSchema"})," via Pulsar admin API, see ",(0,c.jsx)(s.a,{href:"schema-manage.md/#manage-autoupdate-strategy",children:"Manage AutoUpdate Strategy"}),"."]}),"\n",(0,c.jsxs)(s.ol,{start:"6",children:["\n",(0,c.jsx)(s.li,{children:"If the schema is allowed to be updated, then the compatible strategy check is performed."}),"\n"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"If the schema is compatible, the broker stores it and returns the schema version to the producer."}),"\n"]}),"\n",(0,c.jsx)(s.p,{children:"All the messages produced by this producer are tagged with the schema version."}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"If the schema is incompatible, the broker rejects it."}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"consumer-side",children:"Consumer side"}),"\n",(0,c.jsx)(s.p,{children:"This diagram illustrates how does Schema work on the consumer side."}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{alt:"Schema works at the consumer side",src:n(95837).A+"",width:"1404",height:"1298"})}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"The application uses a schema instance to construct a consumer instance."}),"\n",(0,c.jsx)(s.p,{children:"The schema instance defines the schema that the consumer uses for decoding messages received from a broker."}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["The consumer connects to the broker with the ",(0,c.jsx)(s.code,{children:"SchemaInfo"})," extracted from the passed-in schema instance."]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"The broker determines whether the topic has one of them (a schema/data/a local consumer and a local producer)."}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"If a topic does not have all of them (a schema/data/a local consumer and a local producer):"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["If ",(0,c.jsx)(s.code,{children:"isAllowAutoUpdateSchema"})," sets to ",(0,c.jsx)(s.strong,{children:"true"}),", then the consumer registers a schema and it is connected to a broker."]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["If ",(0,c.jsx)(s.code,{children:"isAllowAutoUpdateSchema"})," sets to ",(0,c.jsx)(s.strong,{children:"false"}),", then the consumer is rejected to connect to a broker."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"If a topic has one of them (a schema/data/a local consumer and a local producer), then the schema compatibility check is performed."}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"If the schema passes the compatibility check, then the consumer is connected to the broker."}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"If the schema does not pass the compatibility check, then the consumer is rejected to connect to the broker."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"The consumer receives messages from the broker."}),"\n",(0,c.jsxs)(s.p,{children:["If the schema used by the consumer supports schema versioning (for example, AVRO schema), the consumer fetches the ",(0,c.jsx)(s.code,{children:"SchemaInfo"})," of the version tagged in messages and uses the passed-in schema and the schema tagged in messages to decode the messages."]}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},95837:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/schema-consumer-436361129cf2d37ee3764960fb377789.png"},17431:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/schema-producer-2682d94503cecdc1dd96dd54bbca105d.png"},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>t});var r=n(96540);const c={},i=r.createContext(c);function d(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);