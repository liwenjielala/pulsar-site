"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[74666],{92354:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"admin-api-schemas","title":"Manage Schemas","description":"Learn how to manage schemas using Pulsar CLI and admin APIs.","source":"@site/docs/admin-api-schemas.md","sourceDirName":".","slug":"/admin-api-schemas","permalink":"/docs/next/admin-api-schemas","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/docs/admin-api-schemas.md","tags":[],"version":"current","frontMatter":{"id":"admin-api-schemas","title":"Manage Schemas","sidebar_label":"Schemas","description":"Learn how to manage schemas using Pulsar CLI and admin APIs."},"sidebar":"docsSidebar","previous":{"title":"Permissions","permalink":"/docs/next/admin-api-permissions"},"next":{"title":"Tenants","permalink":"/docs/next/admin-api-tenants"}}');var t=s(74848),i=s(28453),l=s(11470),c=s(19365);const r={id:"admin-api-schemas",title:"Manage Schemas",sidebar_label:"Schemas",description:"Learn how to manage schemas using Pulsar CLI and admin APIs."},o=void 0,d={},h=[{value:"Manage schema",id:"manage-schema",level:2},{value:"Upload a schema",id:"upload-a-schema",level:3},{value:"Get the latest schema",id:"get-the-latest-schema",level:3},{value:"Get a specific schema",id:"get-a-specific-schema",level:3},{value:"Extract a schema",id:"extract-a-schema",level:3},{value:"Delete a schema",id:"delete-a-schema",level:3},{value:"Manage schema AutoUpdate",id:"manage-schema-autoupdate",level:2},{value:"Enable schema AutoUpdate",id:"enable-schema-autoupdate",level:3},{value:"Disable schema AutoUpdate",id:"disable-schema-autoupdate",level:3},{value:"Manage schema validation enforcement",id:"manage-schema-validation-enforcement",level:2},{value:"Enable schema validation enforcement",id:"enable-schema-validation-enforcement",level:3},{value:"Disable schema validation enforcement",id:"disable-schema-validation-enforcement",level:3},{value:"Manage schema compatibility strategy",id:"manage-schema-compatibility-strategy",level:2},{value:"Set schema compatibility strategy",id:"set-schema-compatibility-strategy",level:3},{value:"Set topic-level schema compatibility strategy",id:"set-topic-level-schema-compatibility-strategy",level:4},{value:"Set namespace-level schema compatibility strategy",id:"set-namespace-level-schema-compatibility-strategy",level:4},{value:"Set cluster-level schema compatibility strategy",id:"set-cluster-level-schema-compatibility-strategy",level:4},{value:"Get schema compatibility strategy",id:"get-schema-compatibility-strategy",level:3},{value:"Get topic-level schema compatibility strategy",id:"get-topic-level-schema-compatibility-strategy",level:4},{value:"Get namespace-level schema compatibility strategy",id:"get-namespace-level-schema-compatibility-strategy",level:4}];function m(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.admonition,{type:"tip",children:[(0,t.jsxs)(a.p,{children:["This page only shows ",(0,t.jsx)(a.strong,{children:"some frequently used operations"}),"."]}),(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["For the latest and complete information about ",(0,t.jsx)(a.code,{children:"Pulsar admin"}),", including commands, flags, descriptions, and more, see ",(0,t.jsx)(a.a,{href:"pathname:///reference/#/next/pulsar-admin/",children:"Pulsar admin docs"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["For the latest and complete information about ",(0,t.jsx)(a.code,{children:"REST API"}),", including parameters, responses, samples, and more, see ",(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API doc."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["For the latest and complete information about ",(0,t.jsx)(a.code,{children:"Java admin API"}),", including classes, methods, descriptions, and more, see ",(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/api/admin/4.0.x/",children:"Java admin API doc"}),"."]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(a.h2,{id:"manage-schema",children:"Manage schema"}),"\n",(0,t.jsx)(a.h3,{id:"upload-a-schema",children:"Upload a schema"}),"\n",(0,t.jsx)(a.p,{children:"To upload (register) a new schema for a topic, you can use one of the following methods."}),"\n",(0,t.jsxs)(l.A,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(c.A,{value:"Admin CLI",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"upload"})," subcommand."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"pulsar-admin schemas upload --filename <schema-definition-file> <topic-name>\n"})}),(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"schema-definition-file"})," is in JSON format."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n    "type": "<schema-type>",\n    "schema": "<an-utf8-encoded-string-of-schema-definition-data>",\n    "properties": {} // the properties associated with the schema\n}\n'})})]}),(0,t.jsxs)(c.A,{value:"REST API",children:[(0,t.jsxs)(a.p,{children:["Send a ",(0,t.jsx)(a.code,{children:"POST"})," request to the endpoint documented here: ",(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=master&apiVersion=v2#operation/SchemasResource_postSchema",children:"POST /admin/v2/schemas/{tenant}/{namespace}/{topic}/schema"})]}),(0,t.jsxs)(a.p,{children:["Below is an example with CURL with a payload stored on the ",(0,t.jsx)(a.code,{children:"schema.json"})," file, Pulsar broker running on ",(0,t.jsx)(a.code,{children:"localhost"})," and the topic ",(0,t.jsx)(a.code,{children:"my-tenant/my-ns/my-topic"}),":"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"curl -X POST -H 'Content-Type: application/json' -d @schema.json http://localhost:8080/admin/v2/schemas/my-tenant/my-ns/my-topic/schema\n"})}),(0,t.jsx)(a.p,{children:"The post payload is in JSON format."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n    "type": "<schema-type>",\n    "schema": "<an-utf8-encoded-string-of-schema-definition-data>",\n    "properties": {} // the properties associated with the schema\n}\n'})})]}),(0,t.jsxs)(c.A,{value:"Java",children:[(0,t.jsxs)(a.p,{children:["The method on ",(0,t.jsx)(a.code,{children:"PulsarAdmin"})," client is:"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"void createSchema(String topic, PostSchemaPayload schemaPayload)\n"})}),(0,t.jsxs)(a.p,{children:["Here is an example of ",(0,t.jsx)(a.code,{children:"PostSchemaPayload"}),":"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'PulsarAdmin admin = \u2026;\n\nPostSchemaPayload payload = new PostSchemaPayload();\npayload.setType("INT8");\npayload.setSchema("");\n\nadmin.createSchema("my-tenant/my-ns/my-topic", payload);\n'})}),(0,t.jsxs)(a.p,{children:["If the schema is a ",(0,t.jsx)(a.strong,{children:"primitive"})," schema, the ",(0,t.jsx)(a.code,{children:"schema"})," field must be blank.\nIf the schema is a ",(0,t.jsx)(a.strong,{children:"struct"})," schema, this field must be a JSON string of the Avro schema definition."]})]})]}),"\n",(0,t.jsx)(a.p,{children:"The payload includes the following fields:"}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Field"}),(0,t.jsx)(a.th,{children:"Description"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"type"})}),(0,t.jsxs)(a.td,{children:[(0,t.jsxs)("li",{children:["Allowed values for primitive-type schemas are listed on the following page: ",(0,t.jsx)(a.a,{href:"/docs/next/schema-understand#primitive-type",children:"Primitive types"})]}),(0,t.jsxs)("li",{children:["Allowed values for struct-type schemas are ",(0,t.jsx)(a.strong,{children:"AVRO"}),", ",(0,t.jsx)(a.strong,{children:"PROTOBUF"}),", ",(0,t.jsx)(a.strong,{children:"PROTOBUF_NATIVE"})," and ",(0,t.jsx)(a.strong,{children:"JSON"}),"."]})]})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"schema"})}),(0,t.jsxs)(a.td,{children:["The schema definition data, which is encoded in UTF 8 charset. ",(0,t.jsxs)("li",{children:["If the schema type is ",(0,t.jsx)(a.strong,{children:"AVRO"}),", ",(0,t.jsx)(a.strong,{children:"PROTOBUF"})," or ",(0,t.jsx)(a.strong,{children:"JSON"})," schema, this field should be an ",(0,t.jsx)("a",{href:"https://avro.apache.org/docs/1.11.1/specification/",target:"blank",children:"Avro schema definition"})," in JSON format."]}),(0,t.jsxs)("li",{children:["If the schema type is ",(0,t.jsx)(a.strong,{children:"PROTOBUF_NATIVE"})," schema, this field should contain a Protobuf descriptor. "]}),(0,t.jsx)("li",{children:"Otherwise, this field should be blank."})]})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"properties"})}),(0,t.jsx)(a.td,{children:"The additional properties associated with the schema."})]})]})]}),"\n",(0,t.jsx)(a.p,{children:"The following is an example for a JSON schema."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Example"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n    "type": "JSON",\n    "schema": "{\\"type\\":\\"record\\",\\"name\\":\\"User\\",\\"namespace\\":\\"com.foo\\",\\"fields\\":[{\\"name\\":\\"file1\\",\\"type\\":[\\"null\\",\\"string\\"],\\"default\\":null},{\\"name\\":\\"file2\\",\\"type\\":[\\"null\\",\\"string\\"],\\"default\\":null},{\\"name\\":\\"file3\\",\\"type\\":[\\"string\\",\\"null\\"],\\"default\\":\\"dfdf\\"}]}",\n    "properties": {}\n}\n'})}),"\n",(0,t.jsx)(a.h3,{id:"get-the-latest-schema",children:"Get the latest schema"}),"\n",(0,t.jsx)(a.p,{children:"To get the latest schema for a topic, you can use one of the following methods."}),"\n",(0,t.jsxs)(l.A,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(c.A,{value:"Admin CLI",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"get"})," subcommand."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"pulsar-admin schemas get <topic-name>\n"})}),(0,t.jsx)(a.p,{children:"Example output:"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n    "version": 0,\n    "type": "String",\n    "timestamp": 0,\n    "data": "string",\n    "properties": {\n        "property1": "string",\n        "property2": "string"\n    }\n}\n'})})]}),(0,t.jsxs)(c.A,{value:"REST API",children:[(0,t.jsxs)(a.p,{children:["Send a ",(0,t.jsx)(a.code,{children:"GET"})," request to this endpoint: ",(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=master&apiVersion=v2#operation/SchemasResource_getSchema",children:"GET /admin/v2/schemas/{tenant}/{namespace}/{topic}/schema"})]}),(0,t.jsx)(a.p,{children:"Here is an example of a response, which is returned in JSON format."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n    "version": "<the-version-number-of-the-schema>",\n    "type": "<the-schema-type>",\n    "timestamp": "<the-creation-timestamp-of-the-version-of-the-schema>",\n    "data": "<an-utf8-encoded-string-of-schema-definition-data>",\n    "properties": {} // the properties associated with the schema\n}\n'})})]}),(0,t.jsxs)(c.A,{value:"Java",children:[(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"SchemaInfo createSchema(String topic)\n"})}),(0,t.jsxs)(a.p,{children:["Here is an example of ",(0,t.jsx)(a.code,{children:"SchemaInfo"}),":"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'PulsarAdmin admin = \u2026;\n\nSchemaInfo si = admin.getSchema("my-tenant/my-ns/my-topic");\n'})})]})]}),"\n",(0,t.jsx)(a.h3,{id:"get-a-specific-schema",children:"Get a specific schema"}),"\n",(0,t.jsx)(a.p,{children:"To get a specific version of a schema, you can use one of the following methods."}),"\n",(0,t.jsxs)(l.A,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(c.A,{value:"Admin CLI",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"get"})," subcommand."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"pulsar-admin schemas get <topic-name> --version <version>\n"})})]}),(0,t.jsxs)(c.A,{value:"REST API",children:[(0,t.jsxs)(a.p,{children:["Send a ",(0,t.jsx)(a.code,{children:"GET"})," request to a schema endpoint: ",(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=master&apiVersion=v2#operation/SchemasResource_getSchema",children:"GET /admin/v2/schemas/{tenant}/{namespace}/{topic}/schema/{version}"})]}),(0,t.jsx)(a.p,{children:"Here is an example of a response, which is returned in JSON format."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n    "version": "<the-version-number-of-the-schema>",\n    "type": "<the-schema-type>",\n    "timestamp": "<the-creation-timestamp-of-the-version-of-the-schema>",\n    "data": "<an-utf8-encoded-string-of-schema-definition-data>",\n    "properties": {} // the properties associated with the schema\n}\n'})})]}),(0,t.jsxs)(c.A,{value:"Java",children:[(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"SchemaInfo createSchema(String topic, long version)\n"})}),(0,t.jsxs)(a.p,{children:["Here is an example of ",(0,t.jsx)(a.code,{children:"SchemaInfo"}),":"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'PulsarAdmin admin = \u2026;\n\nSchemaInfo si = admin.getSchema("my-tenant/my-ns/my-topic", 1L);\n'})})]})]}),"\n",(0,t.jsx)(a.h3,{id:"extract-a-schema",children:"Extract a schema"}),"\n",(0,t.jsx)(a.p,{children:"To extract (provide) a schema via a topic, use the following method."}),"\n",(0,t.jsx)(l.A,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"}],children:(0,t.jsxs)(c.A,{value:"Admin CLI",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"extract"})," subcommand."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"pulsar-admin schemas extract --classname <class-name> --jar <absolute-jar-path> --type <type-name>\n"})})]})}),"\n",(0,t.jsx)(a.h3,{id:"delete-a-schema",children:"Delete a schema"}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["In any case, the ",(0,t.jsx)(a.code,{children:"delete"})," action deletes ",(0,t.jsx)(a.strong,{children:"all versions"})," of a schema registered for a topic."]})}),"\n",(0,t.jsx)(a.p,{children:"To delete a schema for a topic, you can use one of the following methods."}),"\n",(0,t.jsxs)(l.A,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(c.A,{value:"Admin CLI",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"delete"})," subcommand."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"pulsar-admin schemas delete <topic-name>\n"})})]}),(0,t.jsxs)(c.A,{value:"REST API",children:[(0,t.jsxs)(a.p,{children:["Send a ",(0,t.jsx)(a.code,{children:"DELETE"})," request to a schema endpoint: ",(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=master&apiVersion=v2#operation/SchemasResource_deleteSchema",children:"DELETE /admin/v2/schemas/{tenant}/{namespace}/{topic}/schema"})]}),(0,t.jsx)(a.p,{children:"Here is an example of a response returned in JSON format."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n    "version": "<the-latest-version-number-of-the-schema>",\n}\n'})})]}),(0,t.jsxs)(c.A,{value:"Java",children:[(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"void deleteSchema(String topic)\n"})}),(0,t.jsx)(a.p,{children:"Here is an example of deleting a schema."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'PulsarAdmin admin = \u2026;\n\nadmin.deleteSchema("my-tenant/my-ns/my-topic");\n'})})]})]}),"\n",(0,t.jsx)(a.h2,{id:"manage-schema-autoupdate",children:"Manage schema AutoUpdate"}),"\n",(0,t.jsx)(a.h3,{id:"enable-schema-autoupdate",children:"Enable schema AutoUpdate"}),"\n",(0,t.jsx)(a.p,{children:"To enable/enforce schema auto-update at the namespace level, you can use one of the following methods."}),"\n",(0,t.jsxs)(l.A,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(c.A,{value:"Admin CLI",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"set-is-allow-auto-update-schema"})," subcommand."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"bin/pulsar-admin namespaces set-is-allow-auto-update-schema --enable tenant/namespace\n"})})]}),(0,t.jsxs)(c.A,{value:"REST API",children:[(0,t.jsxs)(a.p,{children:["Send a ",(0,t.jsx)(a.code,{children:"POST"})," request to a namespace endpoint: ",(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=master&apiVersion=v2#operation/Namespaces_setIsAllowAutoUpdateSchema",children:"POST /admin/v2/namespaces/{tenant}/{namespace}/isAllowAutoUpdateSchema"})]}),(0,t.jsx)(a.p,{children:"The post payload is in JSON format."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n"isAllowAutoUpdateSchema": "true"\n}\n'})})]}),(0,t.jsxs)(c.A,{value:"Java",children:[(0,t.jsx)(a.p,{children:"Here is an example to enable schema auto-update for a tenant/namespace."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'admin.namespaces().setIsAllowAutoUpdateSchema("my-namspace", true);\n'})})]})]}),"\n",(0,t.jsx)(a.h3,{id:"disable-schema-autoupdate",children:"Disable schema AutoUpdate"}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["When schema auto-update is disabled, you can only ",(0,t.jsx)(a.a,{href:"#upload-a-schema",children:"register a new schema"}),"."]})}),"\n",(0,t.jsxs)(a.p,{children:["To disable schema auto-update at the ",(0,t.jsx)(a.strong,{children:"namespace"})," level, you can use one of the following commands."]}),"\n",(0,t.jsxs)(l.A,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(c.A,{value:"Admin CLI",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"set-is-allow-auto-update-schema"})," subcommand."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"bin/pulsar-admin namespaces set-is-allow-auto-update-schema --disable tenant/namespace\n"})})]}),(0,t.jsxs)(c.A,{value:"REST API",children:[(0,t.jsxs)(a.p,{children:["Send a ",(0,t.jsx)(a.code,{children:"POST"})," request to a namespace endpoint: ",(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=master&apiVersion=v2#operation/Namespaces_setIsAllowAutoUpdateSchema",children:"POST /admin/v2/namespaces/{tenant}/{namespace}/isAllowAutoUpdateSchema"})]}),(0,t.jsx)(a.p,{children:"The post payload is in JSON format."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n"isAllowAutoUpdateSchema": "false"\n}\n'})})]}),(0,t.jsxs)(c.A,{value:"Java",children:[(0,t.jsx)(a.p,{children:"Here is an example to enable schema auto-unpdate of a tenant/namespace."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'admin.namespaces().setIsAllowAutoUpdateSchema("my-namspace", false);\n'})})]})]}),"\n",(0,t.jsx)(a.h2,{id:"manage-schema-validation-enforcement",children:"Manage schema validation enforcement"}),"\n",(0,t.jsx)(a.h3,{id:"enable-schema-validation-enforcement",children:"Enable schema validation enforcement"}),"\n",(0,t.jsxs)(a.p,{children:["To enforce schema validation enforcement at the ",(0,t.jsx)(a.strong,{children:"cluster"})," level, you can configure ",(0,t.jsx)(a.code,{children:"isSchemaValidationEnforced"})," to ",(0,t.jsx)(a.code,{children:"true"})," in the ",(0,t.jsx)(a.code,{children:"conf/broker.conf"})," file."]}),"\n",(0,t.jsxs)(a.p,{children:["To enable schema validation enforcement at the ",(0,t.jsx)(a.strong,{children:"namespace"})," level, you can use one of the following commands."]}),"\n",(0,t.jsxs)(l.A,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(c.A,{value:"Admin CLI",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"set-schema-validation-enforce"})," subcommand."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"bin/pulsar-admin namespaces set-schema-validation-enforce --enable tenant/namespace\n"})})]}),(0,t.jsxs)(c.A,{value:"REST API",children:[(0,t.jsxs)(a.p,{children:["Send a ",(0,t.jsx)(a.code,{children:"POST"})," request to a namespace endpoint: ",(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=master&apiVersion=v2#operation/Namespaces_setSchemaValidationEnforced",children:"POST /admin/v2/namespaces/{tenant}/{namespace}/schemaValidationEnforced"})]}),(0,t.jsx)(a.p,{children:"The post payload is in JSON format."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n"schemaValidationEnforced": "true"\n}\n'})})]}),(0,t.jsxs)(c.A,{value:"Java",children:[(0,t.jsx)(a.p,{children:"Here is an example to enable schema validation enforcement for a tenant/namespace."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'admin.namespaces().setSchemaValidationEnforced("my-namspace", true);\n'})})]})]}),"\n",(0,t.jsx)(a.h3,{id:"disable-schema-validation-enforcement",children:"Disable schema validation enforcement"}),"\n",(0,t.jsxs)(a.p,{children:["To disable schema validation enforcement at the ",(0,t.jsx)(a.strong,{children:"namespace"})," level, you can use one of the following commands."]}),"\n",(0,t.jsxs)(l.A,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(c.A,{value:"Admin CLI",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"set-schema-validation-enforce"})," subcommand."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"bin/pulsar-admin namespaces set-schema-validation-enforce --disable tenant/namespace\n"})})]}),(0,t.jsxs)(c.A,{value:"REST API",children:[(0,t.jsxs)(a.p,{children:["Send a ",(0,t.jsx)(a.code,{children:"POST"})," request to a namespace endpoint: ",(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=master&apiVersion=v2#operation/Namespaces_setSchemaValidationEnforced",children:"POST /admin/v2/namespaces/{tenant}/{namespace}/schemaValidationEnforced"})]}),(0,t.jsx)(a.p,{children:"The post payload is in JSON format."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n"schemaValidationEnforced": "false"\n}\n'})})]}),(0,t.jsxs)(c.A,{value:"Java",children:[(0,t.jsx)(a.p,{children:"Here is an example to enable schema validation enforcement for a tenant/namespace."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'admin.namespaces().setSchemaValidationEnforced("my-namspace", false);\n'})})]})]}),"\n",(0,t.jsx)(a.h2,{id:"manage-schema-compatibility-strategy",children:"Manage schema compatibility strategy"}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.a,{href:"/docs/next/schema-understand#schema-compatibility-check-strategy",children:"schema compatibility check strategy"})," configured at different levels has priority: topic level > namespace level > cluster level. In other words:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"If you set the strategy at both topic and namespace levels, the topic-level strategy is used."}),"\n",(0,t.jsx)(a.li,{children:"If you set the strategy at both namespace and cluster levels, the namespace-level strategy is used."}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"set-schema-compatibility-strategy",children:"Set schema compatibility strategy"}),"\n",(0,t.jsx)(a.h4,{id:"set-topic-level-schema-compatibility-strategy",children:"Set topic-level schema compatibility strategy"}),"\n",(0,t.jsx)(a.p,{children:"To set a schema compatibility check strategy at the topic level, you can use one of the following methods."}),"\n",(0,t.jsxs)(l.A,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(c.A,{value:"Admin CLI",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.a,{href:"pathname:///reference/#/next/pulsar-admin/topicPolicies?id=set-schema-compatibility-strategy",children:(0,t.jsx)(a.code,{children:"pulsar-admin topicPolicies set-schema-compatibility-strategy"})})," command."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"pulsar-admin topicPolicies set-schema-compatibility-strategy <strategy> <topicName>\n"})})]}),(0,t.jsx)(c.A,{value:"REST API",children:(0,t.jsxs)(a.p,{children:["Send a ",(0,t.jsx)(a.code,{children:"PUT"})," request to this endpoint: ",(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=master&apiVersion=v2#operation/PersistentTopics_setSchemaCompatibilityStrategy",children:"PUT /admin/v2/persistent/{tenant}/{namespace}/{topic}/schemaCompatibilityStrategy"})]})}),(0,t.jsxs)(c.A,{value:"Java",children:[(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"void setSchemaCompatibilityStrategy(String topic, SchemaCompatibilityStrategy strategy)\n"})}),(0,t.jsx)(a.p,{children:"Here is an example of setting a schema compatibility check strategy at the topic level."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'PulsarAdmin admin = \u2026;\n\nadmin.topicPolicies().setSchemaCompatibilityStrategy("my-tenant/my-ns/my-topic", SchemaCompatibilityStrategy.ALWAYS_INCOMPATIBLE);\n'})})]})]}),"\n",(0,t.jsx)(a.h4,{id:"set-namespace-level-schema-compatibility-strategy",children:"Set namespace-level schema compatibility strategy"}),"\n",(0,t.jsx)(a.p,{children:"To set schema compatibility check strategy at the namespace level, you can use one of the following methods."}),"\n",(0,t.jsxs)(l.A,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(c.A,{value:"Admin CLI",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.a,{href:"pathname:///reference/#/next/pulsar-admin/namespaces?id=set-schema-compatibility-strategy",children:(0,t.jsx)(a.code,{children:"pulsar-admin namespaces set-schema-compatibility-strategy"})})," command."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"pulsar-admin namespaces set-schema-compatibility-strategy options\n"})})]}),(0,t.jsx)(c.A,{value:"REST API",children:(0,t.jsxs)(a.p,{children:["Send a ",(0,t.jsx)(a.code,{children:"PUT"})," request to this endpoint: ",(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=master&apiVersion=v2#operation/Namespaces_setSchemaCompatibilityStrategy",children:"PUT /admin/v2/namespaces/{tenant}/{namespace}/schemaCompatibilityStrategy"})]})}),(0,t.jsxs)(c.A,{value:"Java",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/api/admin/4.0.x/",children:(0,t.jsx)(a.code,{children:"setSchemaCompatibilityStrategy"})})," method."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'admin.namespaces().setSchemaCompatibilityStrategy("test", SchemaCompatibilityStrategy.FULL);\n'})})]})]}),"\n",(0,t.jsx)(a.h4,{id:"set-cluster-level-schema-compatibility-strategy",children:"Set cluster-level schema compatibility strategy"}),"\n",(0,t.jsxs)(a.p,{children:["To set schema compatibility check strategy at the ",(0,t.jsx)(a.strong,{children:"cluster"})," level, set ",(0,t.jsx)(a.code,{children:"schemaCompatibilityStrategy"})," in the ",(0,t.jsx)(a.code,{children:"conf/broker.conf"})," file."]}),"\n",(0,t.jsx)(a.p,{children:"The following is an example:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-conf",children:"schemaCompatibilityStrategy=ALWAYS_INCOMPATIBLE\n"})}),"\n",(0,t.jsx)(a.h3,{id:"get-schema-compatibility-strategy",children:"Get schema compatibility strategy"}),"\n",(0,t.jsx)(a.h4,{id:"get-topic-level-schema-compatibility-strategy",children:"Get topic-level schema compatibility strategy"}),"\n",(0,t.jsx)(a.p,{children:"To get the topic-level schema compatibility check strategy, you can use one of the following methods."}),"\n",(0,t.jsxs)(l.A,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(c.A,{value:"Admin CLI",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.a,{href:"pathname:///reference/#/next/pulsar-admin/topicPolicies?id=get-schema-compatibility-strategy",children:(0,t.jsx)(a.code,{children:"pulsar-admin topicPolicies get-schema-compatibility-strategy"})})," command."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"pulsar-admin topicPolicies get-schema-compatibility-strategy <topicName>\n"})})]}),(0,t.jsx)(c.A,{value:"REST API",children:(0,t.jsxs)(a.p,{children:["Send a ",(0,t.jsx)(a.code,{children:"GET"})," request to this endpoint: ",(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=master&apiVersion=v2#operation/PersistentTopics_getSchemaCompatibilityStrategy",children:"GET /admin/v2/persistent/{tenant}/{namespace}/{topic}/schemaCompatibilityStrategy"})]})}),(0,t.jsxs)(c.A,{value:"Java",children:[(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"SchemaCompatibilityStrategy getSchemaCompatibilityStrategy(String topic, boolean applied)\n"})}),(0,t.jsx)(a.p,{children:"Here is an example of getting the topic-level schema compatibility check strategy."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'PulsarAdmin admin = \u2026;\n\n// get the current applied schema compatibility strategy\nadmin.topicPolicies().getSchemaCompatibilityStrategy("my-tenant/my-ns/my-topic", true);\n\n// only get the schema compatibility strategy from topic policies\nadmin.topicPolicies().getSchemaCompatibilityStrategy("my-tenant/my-ns/my-topic", false);\n'})})]})]}),"\n",(0,t.jsx)(a.h4,{id:"get-namespace-level-schema-compatibility-strategy",children:"Get namespace-level schema compatibility strategy"}),"\n",(0,t.jsx)(a.p,{children:"You can get schema compatibility check strategy at namespace level using one of the following methods."}),"\n",(0,t.jsxs)(l.A,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(c.A,{value:"Admin CLI",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.a,{href:"pathname:///reference/#/next/pulsar-admin/namespaces?id=get-schema-compatibility-strategy",children:(0,t.jsx)(a.code,{children:"pulsar-admin namespaces get-schema-compatibility-strategy"})})," command."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"pulsar-admin namespaces get-schema-compatibility-strategy options\n"})})]}),(0,t.jsx)(c.A,{value:"REST API",children:(0,t.jsxs)(a.p,{children:["Send a ",(0,t.jsx)(a.code,{children:"GET"})," request to this endpoint: ",(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=master&apiVersion=v2#operation/Namespaces_getSchemaCompatibilityStrategy",children:"GET /admin/v2/namespaces/{tenant}/{namespace}/schemaCompatibilityStrategy"})]})}),(0,t.jsxs)(c.A,{value:"Java",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.a,{href:"https://pulsar.apache.org/api/admin/4.0.x/",children:(0,t.jsx)(a.code,{children:"getSchemaCompatibilityStrategy"})})," method."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:'admin.namespaces().getSchemaCompatibilityStrategy("test", SchemaCompatibilityStrategy.FULL);\n'})})]})]})]})}function p(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},19365:(e,a,s)=>{s.d(a,{A:()=>l});s(96540);var n=s(34164);const t={tabItem:"tabItem_Ymn6"};var i=s(74848);function l(e){let{children:a,hidden:s,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(t.tabItem,l),hidden:s,children:a})}},11470:(e,a,s)=>{s.d(a,{A:()=>A});var n=s(96540),t=s(34164),i=s(23104),l=s(56347),c=s(205),r=s(57485),o=s(31682),d=s(70679);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:a,children:s}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return h(e).map((e=>{let{props:{value:a,label:s,attributes:n,default:t}}=e;return{value:a,label:s,attributes:n,default:t}}))}(s);return function(e){const a=(0,o.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,s])}function p(e){let{value:a,tabValues:s}=e;return s.some((e=>e.value===a))}function u(e){let{queryString:a=!1,groupId:s}=e;const t=(0,l.W6)(),i=function(e){let{queryString:a=!1,groupId:s}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:a,groupId:s});return[(0,r.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(t.location.search);a.set(i,e),t.replace({...t.location,search:a.toString()})}),[i,t])]}function x(e){const{defaultValue:a,queryString:s=!1,groupId:t}=e,i=m(e),[l,r]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:i}))),[o,h]=u({queryString:s,groupId:t}),[x,j]=function(e){let{groupId:a}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,i]=(0,d.Dv)(s);return[t,(0,n.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:t}),g=(()=>{const e=o??x;return p({value:e,tabValues:i})?e:null})();(0,c.A)((()=>{g&&r(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);r(e),h(e),j(e)}),[h,j,i]),tabValues:i}}var j=s(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=s(74848);function f(e){let{className:a,block:s,selectedValue:n,selectValue:l,tabValues:c}=e;const r=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),d=e=>{const a=e.currentTarget,s=r.indexOf(a),t=c[s].value;t!==n&&(o(a),l(t))},h=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=r.indexOf(e.currentTarget)+1;a=r[s]??r[0];break}case"ArrowLeft":{const s=r.indexOf(e.currentTarget)-1;a=r[s]??r[r.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},a),children:c.map((e=>{let{value:a,label:s,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>r.push(e),onKeyDown:h,onClick:d,...i,className:(0,t.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":n===a}),children:s??a},a)}))})}function y(e){let{lazy:a,children:s,selectedValue:i}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==i})))})}function b(e){const a=x(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,v.jsx)(f,{...a,...e}),(0,v.jsx)(y,{...a,...e})]})}function A(e){const a=(0,j.A)();return(0,v.jsx)(b,{...e,children:h(e.children)},String(a))}},28453:(e,a,s)=>{s.d(a,{R:()=>l,x:()=>c});var n=s(96540);const t={},i=n.createContext(t);function l(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);