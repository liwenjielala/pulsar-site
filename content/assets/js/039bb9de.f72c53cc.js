"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[759],{81531:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"schema-overview","title":"Overview","description":"Get a comprehensive understanding of Pulsar schema.","source":"@site/versioned_docs/version-3.3.x/schema-overview.md","sourceDirName":".","slug":"/schema-overview","permalink":"/docs/3.3.x/schema-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/schema-overview.md","tags":[],"version":"3.3.x","frontMatter":{"id":"schema-overview","title":"Overview","sidebar_label":"Overview","description":"Get a comprehensive understanding of Pulsar schema."},"sidebar":"docsSidebar","previous":{"title":"Multiple advertised listeners","permalink":"/docs/3.3.x/concepts-multiple-advertised-listeners"},"next":{"title":"Understand schema","permalink":"/docs/3.3.x/schema-understand"}}');var t=n(74848),i=n(28453);const a={id:"schema-overview",title:"Overview",sidebar_label:"Overview",description:"Get a comprehensive understanding of Pulsar schema."},c=void 0,o={},h=[{value:"Definitions",id:"definitions",level:2},{value:"Benefits",id:"benefits",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Producer side",id:"producer-side",level:3},{value:"Consumer side",id:"consumer-side",level:3},{value:"Use case",id:"use-case",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"definitions",children:"Definitions"}),"\n",(0,t.jsx)(s.p,{children:"Pulsar messages are stored as unstructured byte arrays and the data structure (as known as schema) is applied to this data only when it's read. So both the producer and consumer need to agree upon the data structure of the messages, including the fields and their associated types."}),"\n",(0,t.jsx)(s.p,{children:"Pulsar schema is the metadata that defines how to translate the raw message bytes into a more formal structure type, serving as a protocol between the applications that generate messages and the applications that consume them. It serializes data into raw bytes before they are published to a topic and deserializes the raw bytes before they are delivered to consumers."}),"\n",(0,t.jsx)(s.p,{children:"Pulsar uses a schema registry as a central repository to store the registered schema information, which enables producers/consumers to coordinate the schema of a topic's messages through brokers."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Pulsar schema",src:n(62557).A+"",width:"1954",height:"1014"})}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["Currently, Pulsar schema is available for ",(0,t.jsx)(s.a,{href:"/docs/3.3.x/client-libraries-java",children:"Java clients"}),", ",(0,t.jsx)(s.a,{href:"/docs/3.3.x/client-libraries-go",children:"Go clients"}),", ",(0,t.jsx)(s.a,{href:"/docs/3.3.x/client-libraries-python",children:"Python clients"}),", ",(0,t.jsx)(s.a,{href:"/docs/3.3.x/client-libraries-node",children:"Node.js clients"}),", ",(0,t.jsx)(s.a,{href:"/docs/3.3.x/client-libraries-cpp",children:"C++ clients"}),", and ",(0,t.jsx)(s.a,{href:"/docs/3.3.x/client-libraries-dotnet",children:"C# clients"}),"."]})}),"\n",(0,t.jsx)(s.h2,{id:"benefits",children:"Benefits"}),"\n",(0,t.jsx)(s.p,{children:"Type safety is extremely important in any application built around a messaging and streaming system. Raw bytes are flexible for data transfer, but the flexibility and neutrality come with a cost: you have to overlay data type checking and serialization/deserialization to ensure that the bytes fed into the system can be read and successfully consumed. In other words, you need to make sure the data is intelligible and usable to applications."}),"\n",(0,t.jsx)(s.p,{children:"Pulsar schema resolves the pain points with the following capabilities:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'enforces the data type safety when a topic has a schema defined. As a result, producers/consumers are only allowed to connect if they are using a "compatible" schema.'}),"\n",(0,t.jsx)(s.li,{children:"provides a central location for storing information about the schemas used within your organization, in turn greatly simplifies the sharing of this information across application teams."}),"\n",(0,t.jsx)(s.li,{children:"serves as a single source of truth for all the message schemas used across all your services and development teams, which makes it easier for them to collaborate."}),"\n",(0,t.jsx)(s.li,{children:"keeps data compatibility on-track between schema versions. When new schemas are uploaded, the new versions can be read by old consumers."}),"\n",(0,t.jsx)(s.li,{children:"stored in the existing storage layer BookKeeper, without additional system required."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"workflow",children:"Workflow"}),"\n",(0,t.jsxs)(s.p,{children:["Pulsar schemas are applied and enforced at the ",(0,t.jsx)(s.strong,{children:"topic"})," level. Producers and consumers can upload schemas to brokers, so Pulsar schemas work on both sides."]}),"\n",(0,t.jsx)(s.h3,{id:"producer-side",children:"Producer side"}),"\n",(0,t.jsx)(s.p,{children:"This diagram illustrates how Pulsar schema works on the producer side."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Workflow of Pulsar schema on the producer side",src:n(30328).A+"",width:"1592",height:"915"})}),"\n",(0,t.jsx)(s.p,{children:"Below are explanations for each step."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The application uses a schema instance to construct a producer instance.\nThe schema instance defines the schema for the data being produced using the producer instance. Take Avro as an example, Pulsar extracts the schema definition from the POJO class and constructs the ",(0,t.jsx)(s.code,{children:"SchemaInfo"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The producer requests to connect to the broker with the ",(0,t.jsx)(s.code,{children:"SchemaInfo"})," extracted from the passed-in schema instance."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"The broker looks up the schema registry to check if it is a registered schema."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"If the schema is registered, the broker returns the schema version to the producer."}),"\n",(0,t.jsx)(s.li,{children:"Otherwise, go to step 4."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"The broker checks whether the schema can be auto-updated."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"If it's not allowed to be auto-updated, then the schema cannot be registered, and the broker rejects the producer."}),"\n",(0,t.jsx)(s.li,{children:"Otherwise, go to step 5."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The broker performs the ",(0,t.jsx)(s.a,{href:"/docs/3.3.x/schema-understand#schema-compatibility-check",children:"schema compatibility check"})," defined for the topic."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"If the schema passes the compatibility check, the broker stores it in the schema registry and returns the schema version to the producer. All the messages produced by this producer are tagged with the schema version."}),"\n",(0,t.jsx)(s.li,{children:"Otherwise, the broker rejects the producer."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"consumer-side",children:"Consumer side"}),"\n",(0,t.jsx)(s.p,{children:"This diagram illustrates how schema works on the consumer side."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Workflow of Pulsar schema on the consumer side",src:n(24258).A+"",width:"1548",height:"908"})}),"\n",(0,t.jsx)(s.p,{children:"Below are explanations for each step."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"The application uses a schema instance to construct a consumer instance."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The consumer connects to the broker with the ",(0,t.jsx)(s.code,{children:"SchemaInfo"})," extracted from the passed-in schema instance."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"The broker checks if the topic is in use (has at least one of the objects: schema, data, active producer or consumer)."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"If a topic has at least one of the above objects, go to step 5."}),"\n",(0,t.jsx)(s.li,{children:"Otherwise, go to step 4."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"The broker checks whether the schema can be auto-updated."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"If the schema can be auto-updated, the broker registers the schema and connects the consumer."}),"\n",(0,t.jsx)(s.li,{children:"Otherwise, the broker rejects the consumer."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The broker performs the ",(0,t.jsx)(s.a,{href:"/docs/3.3.x/schema-understand#schema-compatibility-check",children:"schema compatibility check"}),"."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"If the schema passes the compatibility check, the broker connects the consumer."}),"\n",(0,t.jsx)(s.li,{children:"Otherwise, the broker rejects the consumer."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"use-case",children:"Use case"}),"\n",(0,t.jsxs)(s.p,{children:["You can use language-specific types of data when constructing and handling messages from simple data types like ",(0,t.jsx)(s.code,{children:"string"})," to more complex application-specific types."]}),"\n",(0,t.jsxs)(s.p,{children:["For example, you are using the ",(0,t.jsx)(s.em,{children:"User"})," class to define the messages sent to Pulsar topics."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:"public class User {\n   public String name;\n   public int age;\n\n   User() {}\n\n   User(String name, int age) {\n      this.name = name;\n      this.age = age;\n   }\n}\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Without a schema"})}),"\n",(0,t.jsxs)(s.p,{children:["If you construct a producer without specifying a schema, then the producer can only produce messages of type ",(0,t.jsx)(s.code,{children:"byte[]"}),". If you have a POJO class, you need to serialize the POJO into bytes before sending messages."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:'Producer<byte[]> producer = client.newProducer()\n        .topic(topic)\n        .create();\nUser user = new User("Tom", 28);\nbyte[] message = \u2026 // serialize the `user` by yourself;\nproducer.send(message);\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"With a schema"})}),"\n",(0,t.jsxs)(s.p,{children:["This example constructs a producer with the ",(0,t.jsx)(s.em,{children:"JSONSchema"}),", and you can send the ",(0,t.jsx)(s.em,{children:"User"})," class to topics directly without worrying about how to serialize POJOs into bytes."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:'// send with json schema\nProducer<User> producer = client.newProducer(JSONSchema.of(User.class))\n        .topic(topic)\n        .create();\nUser user = new User("Tom", 28);\nproducer.send(user);\n\n// receive with json schema\nConsumer<User> consumer = client.newConsumer(JSONSchema.of(User.class))\n   .topic(schemaTopic)\n   .subscriptionInitialPosition(SubscriptionInitialPosition.Earliest)\n   .subscriptionName("schema-sub")\n   .subscribe();\nMessage<User> message = consumer.receive();\nUser user = message.getValue();\nassert user.age == 28 && user.name.equals("Tom");\n'})}),"\n",(0,t.jsx)(s.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/3.3.x/schema-understand",children:"Understand schema concepts"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/3.3.x/schema-get-started",children:"Get started with schema"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/3.3.x/admin-api-schemas",children:"Manage schema"})}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},24258:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/schema-consumer-67cb670626412e11b3a683b2523cc1e8.svg"},30328:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/schema-producer-be1ab7ded68e21097ff3f0a61af747db.svg"},62557:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/schema-7934d91a412bb38af633d76079ccaa58.svg"},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>c});var r=n(96540);const t={},i=r.createContext(t);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);