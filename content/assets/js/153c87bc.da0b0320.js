"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[59641],{94529:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"schema-get-started","title":"Get started","description":"This chapter introduces Pulsar schemas and explains why they are important.","source":"@site/versioned_docs/version-2.6.3/schema-get-started.md","sourceDirName":".","slug":"/schema-get-started","permalink":"/docs/2.6.3/schema-get-started","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.3/schema-get-started.md","tags":[],"version":"2.6.3","frontMatter":{"id":"schema-get-started","title":"Get started","sidebar_label":"Get started","original_id":"schema-get-started"},"sidebar":"docsSidebar","previous":{"title":"Multiple advertised listeners","permalink":"/docs/2.6.3/concepts-multiple-advertised-listeners"},"next":{"title":"Understand schema","permalink":"/docs/2.6.3/schema-understand"}}');var a=t(74848),r=t(28453);const i={id:"schema-get-started",title:"Get started",sidebar_label:"Get started",original_id:"schema-get-started"},o=void 0,c={},d=[{value:"Schema Registry",id:"schema-registry",level:2},{value:"Client-side approach",id:"client-side-approach",level:3},{value:"Server-side approach",id:"server-side-approach",level:3},{value:"Why use schema",id:"why-use-schema",level:2},{value:"Without schema",id:"without-schema",level:3},{value:"With schema",id:"with-schema",level:3},{value:"Summary",id:"summary",level:3}];function h(e){const s={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"This chapter introduces Pulsar schemas and explains why they are important."}),"\n",(0,a.jsx)(s.h2,{id:"schema-registry",children:"Schema Registry"}),"\n",(0,a.jsx)(s.p,{children:"Type safety is extremely important in any application built around a message bus like Pulsar."}),"\n",(0,a.jsx)(s.p,{children:"Producers and consumers need some kind of mechanism for coordinating types at the topic level to avoid various potential problems arise. For example, serialization and deserialization issues."}),"\n",(0,a.jsx)(s.p,{children:"Applications typically adopt one of the following approaches to guarantee type safety in messaging. Both approaches are available in Pulsar, and you're free to adopt one or the other or to mix and match on a per-topic basis."}),"\n",(0,a.jsx)(s.h3,{id:"client-side-approach",children:"Client-side approach"}),"\n",(0,a.jsx)(s.p,{children:'Producers and consumers are responsible for not only serializing and deserializing messages (which consist of raw bytes) but also "knowing" which types are being transmitted via which topics.'}),"\n",(0,a.jsxs)(s.p,{children:["If a producer is sending temperature sensor data on the topic ",(0,a.jsx)(s.code,{children:"topic-1"}),", consumers of that topic will run into trouble if they attempt to parse that data as moisture sensor readings."]}),"\n",(0,a.jsx)(s.p,{children:'Producers and consumers can send and receive messages consisting of raw byte arrays and leave all type safety enforcement to the application on an "out-of-band" basis.'}),"\n",(0,a.jsx)(s.h3,{id:"server-side-approach",children:"Server-side approach"}),"\n",(0,a.jsx)(s.p,{children:"Producers and consumers inform the system which data types can be transmitted via the topic."}),"\n",(0,a.jsx)(s.p,{children:"With this approach, the messaging system enforces type safety and ensures that producers and consumers remain synced."}),"\n",(0,a.jsxs)(s.p,{children:["Pulsar has a built-in ",(0,a.jsx)(s.strong,{children:"schema registry"})," that enables clients to upload data schemas on a per-topic basis. Those schemas dictate which data types are recognized as valid for that topic."]}),"\n",(0,a.jsx)(s.h2,{id:"why-use-schema",children:"Why use schema"}),"\n",(0,a.jsx)(s.p,{children:"When a schema is enabled, Pulsar does parse data, it takes bytes as inputs and sends bytes as outputs. While data has meaning beyond bytes, you need to parse data and might encounter parse exceptions which mainly occur in the following situations:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"The field does not exist"}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["The field type has changed (for example, ",(0,a.jsx)(s.code,{children:"string"})," is changed to ",(0,a.jsx)(s.code,{children:"int"}),")"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"There are a few methods to prevent and overcome these exceptions, for example, you can catch exceptions when parsing errors, which makes code hard to maintain; or you can adopt a schema management system to perform schema evolution, not to break downstream applications, and enforces type safety to max extend in the language you are using, the solution is Pulsar Schema."}),"\n",(0,a.jsxs)(s.p,{children:["Pulsar schema enables you to use language-specific types of data when constructing and handling messages from simple types like ",(0,a.jsx)(s.code,{children:"string"})," to more complex application-specific types."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example"})}),"\n",(0,a.jsxs)(s.p,{children:["You can use the ",(0,a.jsx)(s.em,{children:"User"})," class to define the messages sent to Pulsar topics."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"\npublic class User {\n    String name;\n    int age;\n}\n\n"})}),"\n",(0,a.jsxs)(s.p,{children:["When constructing a producer with the ",(0,a.jsx)(s.em,{children:"User"})," class, you can specify a schema or not as below."]}),"\n",(0,a.jsx)(s.h3,{id:"without-schema",children:"Without schema"}),"\n",(0,a.jsxs)(s.p,{children:["If you construct a producer without specifying a schema, then the producer can only produce messages of type ",(0,a.jsx)(s.code,{children:"byte[]"}),". If you have a POJO class, you need to serialize the POJO into bytes before sending messages."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'\nProducer<byte[]> producer = client.newProducer()\n        .topic(topic)\n        .create();\nUser user = new User("Tom", 28);\nbyte[] message = \u2026 // serialize the `user` by yourself;\nproducer.send(message);\n\n'})}),"\n",(0,a.jsx)(s.h3,{id:"with-schema",children:"With schema"}),"\n",(0,a.jsx)(s.p,{children:"If you construct a producer with specifying a schema, then you can send a class to a topic directly without worrying about how to serialize POJOs into bytes."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example"})}),"\n",(0,a.jsxs)(s.p,{children:["This example constructs a producer with the ",(0,a.jsx)(s.em,{children:"JSONSchema"}),", and you can send the ",(0,a.jsx)(s.em,{children:"User"})," class to topics directly without worrying about how to serialize it into bytes."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'\nProducer<User> producer = client.newProducer(JSONSchema.of(User.class))\n        .topic(topic)\n        .create();\nUser user = new User("Tom", 28);\nproducer.send(user);\n\n'})}),"\n",(0,a.jsx)(s.h3,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(s.p,{children:"When constructing a producer with a schema, you do not need to serialize messages into bytes, instead Pulsar schema does this job in the background."})]})}function l(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>o});var n=t(96540);const a={},r=n.createContext(a);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);