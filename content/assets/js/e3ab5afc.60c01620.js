"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[42761],{31331:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"develop-schema","title":"Custom schema storage","description":"By default, Pulsar stores data type schemas in Apache BookKeeper (which is deployed alongside Pulsar). You can, however, use another storage system if you wish. This doc walks you through creating your own schema storage implementation.","source":"@site/versioned_docs/version-2.8.x/develop-schema.md","sourceDirName":".","slug":"/develop-schema","permalink":"/docs/2.8.x/develop-schema","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/develop-schema.md","tags":[],"version":"2.8.x","frontMatter":{"id":"develop-schema","title":"Custom schema storage","sidebar_label":"Custom schema storage","original_id":"develop-schema"},"sidebar":"docsSidebar","previous":{"title":"Binary protocol","permalink":"/docs/2.8.x/developing-binary-protocol"},"next":{"title":"Modular load manager","permalink":"/docs/2.8.x/develop-load-manager"}}');var t=o(74848),s=o(28453);const n={id:"develop-schema",title:"Custom schema storage",sidebar_label:"Custom schema storage",original_id:"develop-schema"},c=void 0,i={},l=[{value:"SchemaStorage interface",id:"schemastorage-interface",level:2},{value:"SchemaStorageFactory interface",id:"schemastoragefactory-interface",level:2},{value:"Deployment",id:"deployment",level:2}];function h(e){const a={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["By default, Pulsar stores data type ",(0,t.jsx)(a.a,{href:"/docs/2.8.x/schema-understand",children:"schemas"})," in ",(0,t.jsx)(a.a,{href:"https://bookkeeper.apache.org",children:"Apache BookKeeper"})," (which is deployed alongside Pulsar). You can, however, use another storage system if you wish. This doc walks you through creating your own schema storage implementation."]}),"\n",(0,t.jsxs)(a.p,{children:["In order to use a non-default (i.e. non-BookKeeper) storage system for Pulsar schemas, you need to implement two Java interfaces: ",(0,t.jsx)(a.a,{href:"#schemastorage-interface",children:(0,t.jsx)(a.code,{children:"SchemaStorage"})})," and ",(0,t.jsx)(a.a,{href:"#schemastoragefactory-interface",children:(0,t.jsx)(a.code,{children:"SchemaStorageFactory"})}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"schemastorage-interface",children:"SchemaStorage interface"}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"SchemaStorage"})," interface has the following methods:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"\npublic interface SchemaStorage {\n    // How schemas are updated\n    CompletableFuture<SchemaVersion> put(String key, byte[] value, byte[] hash);\n\n    // How schemas are fetched from storage\n    CompletableFuture<StoredSchema> get(String key, SchemaVersion version);\n\n    // How schemas are deleted\n    CompletableFuture<SchemaVersion> delete(String key);\n\n    // Utility method for converting a schema version byte array to a SchemaVersion object\n    SchemaVersion versionFromBytes(byte[] version);\n\n    // Startup behavior for the schema storage client\n    void start() throws Exception;\n\n    // Shutdown behavior for the schema storage client\n    void close() throws Exception;\n}\n\n"})}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:["For a full-fledged example schema storage implementation, see the ",(0,t.jsx)(a.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/service/schema/BookkeeperSchemaStorage.java",children:(0,t.jsx)(a.code,{children:"BookKeeperSchemaStorage"})})," class."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"schemastoragefactory-interface",children:"SchemaStorageFactory interface"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"\npublic interface SchemaStorageFactory {\n    @NotNull\n    SchemaStorage create(PulsarService pulsar) throws Exception;\n}\n\n"})}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:["For a full-fledged example schema storage factory implementation, see the ",(0,t.jsx)(a.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/service/schema/BookkeeperSchemaStorageFactory.java",children:(0,t.jsx)(a.code,{children:"BookKeeperSchemaStorageFactory"})})," class."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"deployment",children:"Deployment"}),"\n",(0,t.jsx)(a.p,{children:"In order to use your custom schema storage implementation, you'll need to:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["Package the implementation in a ",(0,t.jsx)(a.a,{href:"https://docs.oracle.com/javase/tutorial/deployment/jar/basicsindex.html",children:"JAR"})," file."]}),"\n",(0,t.jsxs)(a.li,{children:["Add that jar to the ",(0,t.jsx)(a.code,{children:"lib"})," folder in your Pulsar ",(0,t.jsx)(a.a,{href:"/docs/2.8.x/getting-started-standalone#installing-pulsar",children:"binary or source distribution"}),"."]}),"\n",(0,t.jsxs)(a.li,{children:["Change the ",(0,t.jsx)(a.code,{children:"schemaRegistryStorageClassName"})," configuration in ",(0,t.jsx)(a.a,{href:"/docs/2.8.x/reference-configuration#broker",children:(0,t.jsx)(a.code,{children:"broker.conf"})})," to your custom factory class (i.e. the ",(0,t.jsx)(a.code,{children:"SchemaStorageFactory"})," implementation, not the ",(0,t.jsx)(a.code,{children:"SchemaStorage"})," implementation)."]}),"\n",(0,t.jsx)(a.li,{children:"Start up Pulsar."}),"\n"]})]})}function d(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,a,o)=>{o.d(a,{R:()=>n,x:()=>c});var r=o(96540);const t={},s=r.createContext(t);function n(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);