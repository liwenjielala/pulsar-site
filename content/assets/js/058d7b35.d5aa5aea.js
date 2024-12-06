"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[90177],{99302:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>t,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"client-libraries-schema","title":"Work with schema","description":"Learn how to work with Pyhton schema in Pulsar.","source":"@site/versioned_docs/version-3.2.x/client-libraries-schema.md","sourceDirName":".","slug":"/client-libraries-schema","permalink":"/docs/3.2.x/client-libraries-schema","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/client-libraries-schema.md","tags":[],"version":"3.2.x","frontMatter":{"id":"client-libraries-schema","title":"Work with schema","sidebar_label":"Work with schema","description":"Learn how to work with Pyhton schema in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"Work with TableView","permalink":"/docs/3.2.x/client-libraries-tableviews"},"next":{"title":"Configure cluster-level failover","permalink":"/docs/3.2.x/client-libraries-cluster-level-failover"}}');var r=n(74848),c=n(28453);const t={id:"client-libraries-schema",title:"Work with schema",sidebar_label:"Work with schema",description:"Learn how to work with Pyhton schema in Pulsar."},d=void 0,a={},l=[{value:"Get started with schema",id:"get-started-with-schema",level:2},{value:"Work with Python schema",id:"work-with-python-schema",level:2},{value:"Supported schema types",id:"supported-schema-types",level:3},{value:"Schema definition reference",id:"schema-definition-reference",level:3},{value:"Fields parameters",id:"fields-parameters",level:4},{value:"Schema definition examples",id:"schema-definition-examples",level:4},{value:"Simple definition",id:"simple-definition",level:5},{value:"Using enums",id:"using-enums",level:5},{value:"Complex types",id:"complex-types",level:5},{value:"Set namespace for Avro schema",id:"set-namespace-for-avro-schema",level:5},{value:"Declare and validate schema",id:"declare-and-validate-schema",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"get-started-with-schema",children:"Get started with schema"}),"\n",(0,r.jsxs)(s.p,{children:["For an overview of Pulsar schema and language-specific code examples, see ",(0,r.jsx)(s.a,{href:"/docs/3.2.x/schema-overview",children:"Schema - Overview"})," and ",(0,r.jsx)(s.a,{href:"/docs/3.2.x/schema-get-started",children:"Schema - Get Started"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"work-with-python-schema",children:"Work with Python schema"}),"\n",(0,r.jsx)(s.p,{children:"Working with Python schema has slight differences from using other languages. This section introduces the specific reference and examples for using Python clients to work with schema."}),"\n",(0,r.jsx)(s.h3,{id:"supported-schema-types",children:"Supported schema types"}),"\n",(0,r.jsxs)(s.p,{children:["You can use different built-in schema types in Pulsar. All the definitions are in the ",(0,r.jsx)(s.code,{children:"pulsar.schema"})," package."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Schema"}),(0,r.jsx)(s.th,{children:"Notes"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"BytesSchema"})}),(0,r.jsxs)(s.td,{children:["Get the raw payload as a ",(0,r.jsx)(s.code,{children:"bytes"})," object. No serialization/deserialization are performed. This is the default schema mode"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"StringSchema"})}),(0,r.jsxs)(s.td,{children:["Encode/decode payload as a UTF-8 string. Uses ",(0,r.jsx)(s.code,{children:"str"})," objects"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"JsonSchema"})}),(0,r.jsx)(s.td,{children:"Require record definition. Serializes the record into standard JSON payload"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"AvroSchema"})}),(0,r.jsx)(s.td,{children:"Require record definition. Serializes in AVRO format"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"schema-definition-reference",children:"Schema definition reference"}),"\n",(0,r.jsxs)(s.p,{children:["The schema definition is done through a class that inherits from ",(0,r.jsx)(s.code,{children:"pulsar.schema.Record"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["This class has a number of fields that can be of either ",(0,r.jsx)(s.code,{children:"pulsar.schema.Field"})," type or another nested ",(0,r.jsx)(s.code,{children:"Record"}),". All the fields are specified in the ",(0,r.jsx)(s.code,{children:"pulsar.schema"})," package. The fields are matching the AVRO field types."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field Type"}),(0,r.jsx)(s.th,{children:"Python Type"}),(0,r.jsx)(s.th,{children:"Notes"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Boolean"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"bool"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Integer"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"int"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Long"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"int"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Float"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"float"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Double"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"float"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Bytes"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"bytes"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"String"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"str"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Array"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"list"})}),(0,r.jsx)(s.td,{children:"Need to specify record type for items."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Map"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"dict"})}),(0,r.jsxs)(s.td,{children:["Key is always ",(0,r.jsx)(s.code,{children:"String"}),". Need to specify value type."]})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["Additionally, any Python ",(0,r.jsx)(s.code,{children:"Enum"})," type can be used as a valid field type."]}),"\n",(0,r.jsx)(s.h4,{id:"fields-parameters",children:"Fields parameters"}),"\n",(0,r.jsx)(s.p,{children:"When adding a field, you can use these parameters in the constructor."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Argument"}),(0,r.jsx)(s.th,{children:"Default"}),(0,r.jsx)(s.th,{children:"Notes"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"default"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"None"})}),(0,r.jsxs)(s.td,{children:["Set a default value for the field, such as ",(0,r.jsx)(s.code,{children:"a = Integer(default=5)"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"required"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"False"})}),(0,r.jsx)(s.td,{children:'Mark the field as "required". It is set in the schema accordingly.'})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"schema-definition-examples",children:"Schema definition examples"}),"\n",(0,r.jsx)(s.h5,{id:"simple-definition",children:"Simple definition"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"class Example(Record):\n    a = String()\n    b = Integer()\n    c = Array(String())\n    i = Map(String())\n"})}),"\n",(0,r.jsx)(s.h5,{id:"using-enums",children:"Using enums"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"from enum import Enum\n\nclass Color(Enum):\n    red = 1\n    green = 2\n    blue = 3\n\nclass Example(Record):\n    name = String()\n    color = Color\n"})}),"\n",(0,r.jsx)(s.h5,{id:"complex-types",children:"Complex types"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"class MySubRecord(Record):\n    x = Integer()\n    y = Long()\n    z = String()\n\nclass Example(Record):\n    a = String()\n    sub = MySubRecord()\n"})}),"\n",(0,r.jsx)(s.h5,{id:"set-namespace-for-avro-schema",children:"Set namespace for Avro schema"}),"\n",(0,r.jsxs)(s.p,{children:["Set the namespace for the Avro Record schema using the special field ",(0,r.jsx)(s.code,{children:"_avro_namespace"}),"."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"class NamespaceDemo(Record):\n   _avro_namespace = 'xxx.xxx.xxx'\n   x = String()\n   y = Integer()\n"})}),"\n",(0,r.jsx)(s.p,{children:"The schema definition is like this."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "name": "NamespaceDemo", "namespace": "xxx.xxx.xxx", "type": "record", "fields": [\n    {"name": "x", "type": ["null", "string"]},\n    {"name": "y", "type": ["null", "int"]}\n  ]\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"declare-and-validate-schema",children:"Declare and validate schema"}),"\n",(0,r.jsx)(s.p,{children:"Before the producer is created, the Pulsar broker validates that the existing topic schema is the correct type and that the format is compatible with the schema definition of a class. If the format of the topic schema is incompatible with the schema definition, an exception occurs in the producer creation."}),"\n",(0,r.jsx)(s.p,{children:"Once a producer is created with a certain schema definition, it only accepts objects that are instances of the declared schema class."}),"\n",(0,r.jsx)(s.p,{children:"Similarly, for a consumer or reader, the consumer returns an object (which is an instance of the schema record class) rather than raw bytes."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"consumer = client.subscribe(\n                  topic='my-topic',\n                  subscription_name='my-subscription',\n                  schema=AvroSchema(Example) )\n\nwhile True:\n    msg = consumer.receive()\n    ex = msg.value()\n    try:\n        print(\"Received message a={} b={} c={}\".format(ex.a, ex.b, ex.c))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except Exception:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\n"})})]})}function o(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>d});var i=n(96540);const r={},c=i.createContext(r);function t(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);