"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[76057],{25438:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"schema-evolution-compatibility","title":"Schema evolution and compatibility","description":"Normally, schemas do not stay the same over a long period of time. Instead, they undergo evolutions to satisfy new needs.","source":"@site/versioned_docs/version-2.6.4/schema-evolution-compatibility.md","sourceDirName":".","slug":"/schema-evolution-compatibility","permalink":"/docs/2.6.4/schema-evolution-compatibility","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.4/schema-evolution-compatibility.md","tags":[],"version":"2.6.4","frontMatter":{"id":"schema-evolution-compatibility","title":"Schema evolution and compatibility","sidebar_label":"Schema evolution and compatibility","original_id":"schema-evolution-compatibility"},"sidebar":"docsSidebar","previous":{"title":"Understand schema","permalink":"/docs/2.6.4/schema-understand"},"next":{"title":"Manage schema","permalink":"/docs/2.6.4/schema-manage"}}');var t=n(74848),c=n(28453);const r={id:"schema-evolution-compatibility",title:"Schema evolution and compatibility",sidebar_label:"Schema evolution and compatibility",original_id:"schema-evolution-compatibility"},d=void 0,a={},h=[{value:"Schema evolution",id:"schema-evolution",level:2},{value:"What is schema evolution?",id:"what-is-schema-evolution",level:3},{value:"How Pulsar schema should evolve?",id:"how-pulsar-schema-should-evolve",level:3},{value:"How does Pulsar support schema evolution?",id:"how-does-pulsar-support-schema-evolution",level:3},{value:"Schema compatibility check strategy",id:"schema-compatibility-check-strategy",level:2},{value:"ALWAYS_COMPATIBLE and ALWAYS_INCOMPATIBLE",id:"always_compatible-and-always_incompatible",level:3},{value:"Example",id:"example",level:4},{value:"BACKWARD and BACKWARD_TRANSITIVE",id:"backward-and-backward_transitive",level:3},{value:"Example",id:"example-1",level:4},{value:"FORWARD and FORWARD_TRANSITIVE",id:"forward-and-forward_transitive",level:3},{value:"Example",id:"example-2",level:4},{value:"FULL and FULL_TRANSITIVE",id:"full-and-full_transitive",level:3},{value:"Example",id:"example-3",level:4},{value:"Schema verification",id:"schema-verification",level:2},{value:"Producer",id:"producer",level:3},{value:"Consumer",id:"consumer",level:3},{value:"Order of upgrading clients",id:"order-of-upgrading-clients",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Normally, schemas do not stay the same over a long period of time. Instead, they undergo evolutions to satisfy new needs."}),"\n",(0,t.jsx)(s.p,{children:"This chapter examines how Pulsar schema evolves and what Pulsar schema compatibility check strategies are."}),"\n",(0,t.jsx)(s.h2,{id:"schema-evolution",children:"Schema evolution"}),"\n",(0,t.jsxs)(s.p,{children:["Pulsar schema is defined in a data structure called ",(0,t.jsx)(s.code,{children:"SchemaInfo"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Each ",(0,t.jsx)(s.code,{children:"SchemaInfo"})," stored with a topic has a version. The version is used to manage the schema changes happening within a topic."]}),"\n",(0,t.jsxs)(s.p,{children:["The message produced with ",(0,t.jsx)(s.code,{children:"SchemaInfo"})," is tagged with a schema version. When a message is consumed by a Pulsar client, the Pulsar client can use the schema version to retrieve the corresponding ",(0,t.jsx)(s.code,{children:"SchemaInfo"})," and use the correct schema information to deserialize data."]}),"\n",(0,t.jsx)(s.h3,{id:"what-is-schema-evolution",children:"What is schema evolution?"}),"\n",(0,t.jsxs)(s.p,{children:["Schemas store the details of attributes and types. To satisfy new business requirements,  you need to update schemas inevitably over time, which is called ",(0,t.jsx)(s.strong,{children:"schema evolution"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Any schema changes affect downstream consumers. Schema evolution ensures that the downstream consumers can seamlessly handle data encoded with both old schemas and new schemas."}),"\n",(0,t.jsx)(s.h3,{id:"how-pulsar-schema-should-evolve",children:"How Pulsar schema should evolve?"}),"\n",(0,t.jsx)(s.p,{children:"The answer is Pulsar schema compatibility check strategy. It determines how schema compares old schemas with new schemas in topics."}),"\n",(0,t.jsxs)(s.p,{children:["For more information, see ",(0,t.jsx)(s.a,{href:"#schema-compatibility-check-strategy",children:"Schema compatibility check strategy"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"how-does-pulsar-support-schema-evolution",children:"How does Pulsar support schema evolution?"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["When a producer/consumer/reader connects to a broker, the broker deploys the schema compatibility checker configured by ",(0,t.jsx)(s.code,{children:"schemaRegistryCompatibilityCheckers"})," to enforce schema compatibility check."]}),"\n",(0,t.jsx)(s.p,{children:"The schema compatibility checker is one instance per schema type."}),"\n",(0,t.jsx)(s.p,{children:"Currently, Avro and JSON have their own compatibility checkers, while all the other schema types share the default compatibility checker which disables schema evolution."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The producer/consumer/reader sends its client ",(0,t.jsx)(s.code,{children:"SchemaInfo"})," to the broker."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"The broker knows the schema type and locates the schema compatibility checker for that type."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The broker uses the checker to check if the ",(0,t.jsx)(s.code,{children:"SchemaInfo"})," is compatible with the latest schema of the topic by applying its compatibility check strategy."]}),"\n",(0,t.jsx)(s.p,{children:"Currently, the compatibility check strategy is configured at the namespace level and applied to all the topics within that namespace."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"schema-compatibility-check-strategy",children:"Schema compatibility check strategy"}),"\n",(0,t.jsx)(s.p,{children:"Pulsar has 8 schema compatibility check strategies, which are summarized in the following table."}),"\n",(0,t.jsx)(s.p,{children:"Suppose that you have a topic containing three schemas (V1, V2, and V3), V1 is the oldest and V3 is the latest:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Compatibility check strategy"}),(0,t.jsx)(s.th,{children:"Definition"}),(0,t.jsx)(s.th,{children:"Changes allowed"}),(0,t.jsx)(s.th,{children:"Check against which schema"}),(0,t.jsx)(s.th,{children:"Upgrade first"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"ALWAYS_COMPATIBLE"})}),(0,t.jsx)(s.td,{children:"Disable schema compatibility check."}),(0,t.jsx)(s.td,{children:"All changes are allowed"}),(0,t.jsx)(s.td,{children:"All previous versions"}),(0,t.jsx)(s.td,{children:"Any order"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"ALWAYS_INCOMPATIBLE"})}),(0,t.jsx)(s.td,{children:"Disable schema evolution."}),(0,t.jsx)(s.td,{children:"All changes are disabled"}),(0,t.jsx)(s.td,{children:"None"}),(0,t.jsx)(s.td,{children:"None"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"BACKWARD"})}),(0,t.jsx)(s.td,{children:"Consumers using the schema V3 can process data written by producers using the schema V3 or V2."}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)("li",{children:"Add optional fields "}),(0,t.jsx)("li",{children:"Delete fields "})]}),(0,t.jsx)(s.td,{children:"Latest version"}),(0,t.jsx)(s.td,{children:"Consumers"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"BACKWARD_TRANSITIVE"})}),(0,t.jsx)(s.td,{children:"Consumers using the schema V3 can process data written by producers using the schema V3, V2 or V1."}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)("li",{children:"Add optional fields "}),(0,t.jsx)("li",{children:"Delete fields "})]}),(0,t.jsx)(s.td,{children:"All previous versions"}),(0,t.jsx)(s.td,{children:"Consumers"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"FORWARD"})}),(0,t.jsx)(s.td,{children:"Consumers using the schema V3 or V2 can process data written by producers using the schema V3."}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)("li",{children:"Add fields "}),(0,t.jsx)("li",{children:"Delete optional fields "})]}),(0,t.jsx)(s.td,{children:"Latest version"}),(0,t.jsx)(s.td,{children:"Producers"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"FORWARD_TRANSITIVE"})}),(0,t.jsx)(s.td,{children:"Consumers using the schema V3, V2 or V1 can process data written by producers using the schema V3."}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)("li",{children:"Add fields "}),(0,t.jsx)("li",{children:"Delete optional fields "})]}),(0,t.jsx)(s.td,{children:"All previous versions"}),(0,t.jsx)(s.td,{children:"Producers"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"FULL"})}),(0,t.jsx)(s.td,{children:"Backward and forward compatible between the schema V3 and V2."}),(0,t.jsx)(s.td,{children:(0,t.jsx)("li",{children:"Modify optional fields "})}),(0,t.jsx)(s.td,{children:"Latest version"}),(0,t.jsx)(s.td,{children:"Any order"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"FULL_TRANSITIVE"})}),(0,t.jsx)(s.td,{children:"Backward and forward compatible among the schema V3, V2, and V1."}),(0,t.jsx)(s.td,{children:(0,t.jsx)("li",{children:"Modify optional fields "})}),(0,t.jsx)(s.td,{children:"All previous versions"}),(0,t.jsx)(s.td,{children:"Any order"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"always_compatible-and-always_incompatible",children:"ALWAYS_COMPATIBLE and ALWAYS_INCOMPATIBLE"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Compatibility check strategy"}),(0,t.jsx)(s.th,{children:"Definition"}),(0,t.jsx)(s.th,{children:"Note"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"ALWAYS_COMPATIBLE"})}),(0,t.jsx)(s.td,{children:"Disable schema compatibility check."}),(0,t.jsx)(s.td,{children:"None"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"ALWAYS_INCOMPATIBLE"})}),(0,t.jsx)(s.td,{children:"Disable schema evolution, that is, any schema change is rejected."}),(0,t.jsxs)(s.td,{children:[(0,t.jsxs)("li",{children:["For all schema types except Avro and JSON, the default schema compatibility check strategy is ",(0,t.jsx)(s.code,{children:"ALWAYS_INCOMPATIBLE"}),". "]}),(0,t.jsxs)("li",{children:["For Avro and JSON, the default schema compatibility check strategy is ",(0,t.jsx)(s.code,{children:"FULL"}),". "]})]})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Example  1"}),"\n",(0,t.jsx)(s.p,{children:"In some situations, an application needs to store events of several different types in the same Pulsar topic."}),"\n",(0,t.jsxs)(s.p,{children:["In particular, when developing a data model in an ",(0,t.jsx)(s.code,{children:"Event Sourcing"})," style, you might have several kinds of events that affect the state of an entity."]}),"\n",(0,t.jsxs)(s.p,{children:["For example, for a user entity, there are ",(0,t.jsx)(s.code,{children:"userCreated"}),", ",(0,t.jsx)(s.code,{children:"userAddressChanged"})," and ",(0,t.jsx)(s.code,{children:"userEnquiryReceived"})," events. The application requires that those events are always read in the same order."]}),"\n",(0,t.jsxs)(s.p,{children:["Consequently, those events need to go in the same Pulsar partition to maintain order. This application can use ",(0,t.jsx)(s.code,{children:"ALWAYS_COMPATIBLE"})," to allow different kinds of events co-exist in the same topic."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Example 2"}),"\n",(0,t.jsx)(s.p,{children:"Sometimes we also make incompatible changes."}),"\n",(0,t.jsxs)(s.p,{children:["For example, you are modifying a field type from ",(0,t.jsx)(s.code,{children:"string"})," to ",(0,t.jsx)(s.code,{children:"int"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"In this case, you need to:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Upgrade all producers and consumers to the new schema versions at the same time."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Optionally, create a new topic and start migrating applications to use the new topic and the new schema, avoiding the need to handle two incompatible versions in the same topic."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"backward-and-backward_transitive",children:"BACKWARD and BACKWARD_TRANSITIVE"}),"\n",(0,t.jsx)(s.p,{children:"Suppose that you have a topic containing three schemas (V1, V2, and V3), V1 is the oldest and V3 is the latest:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Compatibility check strategy"}),(0,t.jsx)(s.th,{children:"Definition"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"BACKWARD"})}),(0,t.jsxs)(s.td,{children:["Consumers using the new schema can process data written by producers using the ",(0,t.jsx)(s.strong,{children:"last schema"}),"."]}),(0,t.jsx)(s.td,{children:"The consumers using the schema V3 can process data written by producers using the schema V3 or V2."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"BACKWARD_TRANSITIVE"})}),(0,t.jsxs)(s.td,{children:["Consumers using the new schema can process data written by producers using ",(0,t.jsx)(s.strong,{children:"all previous schemas"}),"."]}),(0,t.jsx)(s.td,{children:"The consumers using the schema V3 can process data written by producers using the schema V3, V2, or V1."})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"example-1",children:"Example"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Example 1"}),"\n",(0,t.jsx)(s.p,{children:"Remove a field."}),"\n",(0,t.jsx)(s.p,{children:"A consumer constructed to process events without one field can process events written with the old schema containing the field, and the consumer will ignore that field."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Example 2"}),"\n",(0,t.jsx)(s.p,{children:"You want to load all Pulsar data into a Hive data warehouse and run SQL queries against the data."}),"\n",(0,t.jsxs)(s.p,{children:["Same SQL queries must continue to work even the data is changed. To support it, you can evolve the schemas using the ",(0,t.jsx)(s.code,{children:"BACKWARD"})," strategy."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"forward-and-forward_transitive",children:"FORWARD and FORWARD_TRANSITIVE"}),"\n",(0,t.jsx)(s.p,{children:"Suppose that you have a topic containing three schemas (V1, V2, and V3), V1 is the oldest and V3 is the latest:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Compatibility check strategy"}),(0,t.jsx)(s.th,{children:"Definition"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"FORWARD"})}),(0,t.jsxs)(s.td,{children:["Consumers using the ",(0,t.jsx)(s.strong,{children:"last schema"})," can process data written by producers using a new schema, even though they may not be able to use the full capabilities of the new schema."]}),(0,t.jsx)(s.td,{children:"The consumers using the schema V3 or V2 can process data written by producers using the schema V3."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"FORWARD_TRANSITIVE"})}),(0,t.jsxs)(s.td,{children:["Consumers using ",(0,t.jsx)(s.strong,{children:"all previous schemas"})," can process data written by producers using a new schema."]}),(0,t.jsx)(s.td,{children:"The consumers using the schema V3, V2, or V1 can process data written by producers using the schema V3."})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"example-2",children:"Example"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Example 1"}),"\n",(0,t.jsx)(s.p,{children:"Add a field."}),"\n",(0,t.jsx)(s.p,{children:"In most data formats, consumers written to process events without new fields can continue doing so even when they receive new events containing new fields."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Example 2"}),"\n",(0,t.jsx)(s.p,{children:"If a consumer has an application logic tied to a full version of a schema, the application logic may not be updated instantly when the schema evolves."}),"\n",(0,t.jsx)(s.p,{children:"In this case, you need to project data with a new schema onto an old schema that the application understands."}),"\n",(0,t.jsxs)(s.p,{children:["Consequently, you can evolve the schemas using the ",(0,t.jsx)(s.code,{children:"FORWARD"})," strategy to ensure that the old schema can process data encoded with the new schema."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"full-and-full_transitive",children:"FULL and FULL_TRANSITIVE"}),"\n",(0,t.jsx)(s.p,{children:"Suppose that you have a topic containing three schemas (V1, V2, and V3), V1 is the oldest and V3 is the latest:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Compatibility check strategy"}),(0,t.jsx)(s.th,{children:"Definition"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Note"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"FULL"})}),(0,t.jsx)(s.td,{children:"Schemas are both backward and forward compatible, which means: Consumers using the last schema can process data written by producers using the new schema. AND Consumers using the new schema can process data written by producers using the last schema."}),(0,t.jsx)(s.td,{children:"Consumers using the schema V3 can process data written by producers using the schema V3 or V2. AND Consumers using the schema V3 or V2 can process data written by producers using the schema V3."}),(0,t.jsxs)(s.td,{children:[(0,t.jsxs)("li",{children:["For Avro and JSON, the default schema compatibility check strategy is ",(0,t.jsx)(s.code,{children:"FULL"}),". "]}),(0,t.jsxs)("li",{children:["For all schema types except Avro and JSON, the default schema compatibility check strategy is ",(0,t.jsx)(s.code,{children:"ALWAYS_INCOMPATIBLE"}),". "]})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"FULL_TRANSITIVE"})}),(0,t.jsx)(s.td,{children:"The new schema is backward and forward compatible with all previously registered schemas."}),(0,t.jsx)(s.td,{children:"Consumers using the schema V3 can process data written by producers using the schema V3, V2 or V1. AND Consumers using the schema V3, V2 or V1 can process data written by producers using the schema V3."}),(0,t.jsx)(s.td,{children:"None"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"example-3",children:"Example"}),"\n",(0,t.jsx)(s.p,{children:"In some data formats, for example, Avro, you can define fields with default values. Consequently, adding or removing a field with a default value is a fully compatible change."}),"\n",(0,t.jsx)(s.h2,{id:"schema-verification",children:"Schema verification"}),"\n",(0,t.jsx)(s.p,{children:"When a producer or a consumer tries to connect to a topic, a broker performs some checks to verify a schema."}),"\n",(0,t.jsx)(s.h3,{id:"producer",children:"Producer"}),"\n",(0,t.jsx)(s.p,{children:"When a producer tries to connect to a topic (suppose ignore the schema auto creation), a broker does the following checks:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Check if the schema carried by the producer exists in the schema registry or not."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"If the schema is already registered, then the producer is connected to a broker and produce messages with that schema."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"If the schema is not registered, then Pulsar verifies if the schema is allowed to be registered based on the configured compatibility check strategy."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"consumer",children:"Consumer"}),"\n",(0,t.jsx)(s.p,{children:"When a consumer tries to connect to a topic, a broker checks if a carried schema is compatible with a registered schema based on the configured schema compatibility check strategy."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Compatibility check strategy"}),(0,t.jsx)(s.th,{children:"Check logic"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"ALWAYS_COMPATIBLE"})}),(0,t.jsx)(s.td,{children:"All pass"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"ALWAYS_INCOMPATIBLE"})}),(0,t.jsx)(s.td,{children:"No pass"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"BACKWARD"})}),(0,t.jsx)(s.td,{children:"Can read the last schema"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"BACKWARD_TRANSITIVE"})}),(0,t.jsx)(s.td,{children:"Can read all schemas"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"FORWARD"})}),(0,t.jsx)(s.td,{children:"Can read the last schema"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"FORWARD_TRANSITIVE"})}),(0,t.jsx)(s.td,{children:"Can read the last schema"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"FULL"})}),(0,t.jsx)(s.td,{children:"Can read the last schema"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"FULL_TRANSITIVE"})}),(0,t.jsx)(s.td,{children:"Can read all schemas"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"order-of-upgrading-clients",children:"Order of upgrading clients"}),"\n",(0,t.jsx)(s.p,{children:"The order of upgrading client applications is determined by the compatibility check strategy."}),"\n",(0,t.jsx)(s.p,{children:"For example, the producers using schemas to write data to Pulsar and the consumers using schemas to read data from Pulsar."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Compatibility check strategy"}),(0,t.jsx)(s.th,{children:"Upgrade first"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"ALWAYS_COMPATIBLE"})}),(0,t.jsx)(s.td,{children:"Any order"}),(0,t.jsxs)(s.td,{children:["The compatibility check is disabled. Consequently, you can upgrade the producers and consumers in ",(0,t.jsx)(s.strong,{children:"any order"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"ALWAYS_INCOMPATIBLE"})}),(0,t.jsx)(s.td,{children:"None"}),(0,t.jsx)(s.td,{children:"The schema evolution is disabled."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"BACKWARD"})," "]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"BACKWARD_TRANSITIVE"})," "]})]}),(0,t.jsx)(s.td,{children:"Consumers"}),(0,t.jsxs)(s.td,{children:["There is no guarantee that consumers using the old schema can read data produced using the new schema. Consequently, ",(0,t.jsx)(s.strong,{children:"upgrade all consumers first"}),", and then start producing new data."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"FORWARD"})," "]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"FORWARD_TRANSITIVE"})," "]})]}),(0,t.jsx)(s.td,{children:"Producers"}),(0,t.jsxs)(s.td,{children:["There is no guarantee that consumers using the new schema can read data produced using the old schema. Consequently, ",(0,t.jsx)(s.strong,{children:"upgrade all producers first"}),(0,t.jsx)("li",{children:"to use the new schema and ensure that the data already produced using the old schemas are not available to consumers, and then upgrade the consumers. "})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"FULL"})," "]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"FULL_TRANSITIVE"})," "]})]}),(0,t.jsx)(s.td,{children:"Any order"}),(0,t.jsxs)(s.td,{children:["There is no guarantee that consumers using the old schema can read data produced using the new schema and consumers using the new schema can read data produced using the old schema. Consequently, you can upgrade the producers and consumers in ",(0,t.jsx)(s.strong,{children:"any order"}),"."]})]})]})]})]})}function o(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>d});var i=n(96540);const t={},c=i.createContext(t);function r(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);