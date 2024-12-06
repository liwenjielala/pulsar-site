"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[31541],{22461:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"sql-rest-api","title":"Pulsar SQL REST APIs","description":"This section lists resources that make up the Presto REST API v1.","source":"@site/versioned_docs/version-2.6.3/sql-rest-api.md","sourceDirName":".","slug":"/sql-rest-api","permalink":"/docs/2.6.3/sql-rest-api","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.3/sql-rest-api.md","tags":[],"version":"2.6.3","frontMatter":{"id":"sql-rest-api","title":"Pulsar SQL REST APIs","sidebar_label":"REST APIs","original_id":"sql-rest-api"},"sidebar":"docsSidebar","previous":{"title":"Configuration and deployment","permalink":"/docs/2.6.3/sql-deployment-configurations"},"next":{"title":"Overview","permalink":"/docs/2.6.3/helm-overview"}}');var i=n(74848),r=n(28453);const o={id:"sql-rest-api",title:"Pulsar SQL REST APIs",sidebar_label:"REST APIs",original_id:"sql-rest-api"},l=void 0,a={},d=[{value:"Request for Presto services",id:"request-for-presto-services",level:2},{value:"Schema",id:"schema",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"This section lists resources that make up the Presto REST API v1."}),"\n",(0,i.jsx)(s.h2,{id:"request-for-presto-services",children:"Request for Presto services"}),"\n",(0,i.jsx)(s.p,{children:"All requests for Presto services should use Presto REST API v1 version."}),"\n",(0,i.jsxs)(s.p,{children:["To request services, use explicit URL ",(0,i.jsx)(s.code,{children:"http://presto.service:8081/v1"}),". You need to update ",(0,i.jsx)(s.code,{children:"presto.service:8081"})," with your real Presto address before sending requests."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"POST"})," requests require the ",(0,i.jsx)(s.code,{children:"X-Presto-User"})," header. If you use authentication, you must use the same ",(0,i.jsx)(s.code,{children:"username"})," that is specified in the authentication configuration. If you do not use authentication, you can specify anything for ",(0,i.jsx)(s.code,{children:"username"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-properties",children:"\nX-Presto-User: username\n\n"})}),"\n",(0,i.jsxs)(s.p,{children:["For more information about headers, refer to ",(0,i.jsx)(s.a,{href:"https://github.com/trinodb/trino",children:"PrestoHeaders"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"schema",children:"Schema"}),"\n",(0,i.jsxs)(s.p,{children:["You can use statement in the HTTP body. All data is received as JSON document that might contain a ",(0,i.jsx)(s.code,{children:"nextUri"})," link. If the received JSON document contains a ",(0,i.jsx)(s.code,{children:"nextUri"})," link, the request continues with the ",(0,i.jsx)(s.code,{children:"nextUri"})," link until the received data does not contain a ",(0,i.jsx)(s.code,{children:"nextUri"})," link. If no error is returned, the query completes successfully. If an ",(0,i.jsx)(s.code,{children:"error"})," field is displayed in ",(0,i.jsx)(s.code,{children:"stats"}),", it means the query fails."]}),"\n",(0,i.jsxs)(s.p,{children:["The following is an example of ",(0,i.jsx)(s.code,{children:"show catalogs"}),". The query continues until the received JSON document does not contain a ",(0,i.jsx)(s.code,{children:"nextUri"})," link. Since no ",(0,i.jsx)(s.code,{children:"error"})," is displayed in ",(0,i.jsx)(s.code,{children:"stats"}),", it means that the query completes successfully."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-powershell",children:'\n\u279c  ~ curl --header "X-Presto-User: test-user" --request POST --data \'show catalogs\' http://localhost:8081/v1/statement\n{\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "stats" : {\n      "queued" : true,\n      "nodes" : 0,\n      "userTimeMillis" : 0,\n      "cpuTimeMillis" : 0,\n      "wallTimeMillis" : 0,\n      "processedBytes" : 0,\n      "processedRows" : 0,\n      "runningSplits" : 0,\n      "queuedTimeMillis" : 0,\n      "queuedSplits" : 0,\n      "completedSplits" : 0,\n      "totalSplits" : 0,\n      "scheduled" : false,\n      "peakMemoryBytes" : 0,\n      "state" : "QUEUED",\n      "elapsedTimeMillis" : 0\n   },\n   "id" : "20191113_033653_00006_dg6hb",\n   "nextUri" : "http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/1"\n}\n\n\u279c  ~ curl http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/1\n{\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "nextUri" : "http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/2",\n   "id" : "20191113_033653_00006_dg6hb",\n   "stats" : {\n      "state" : "PLANNING",\n      "totalSplits" : 0,\n      "queued" : false,\n      "userTimeMillis" : 0,\n      "completedSplits" : 0,\n      "scheduled" : false,\n      "wallTimeMillis" : 0,\n      "runningSplits" : 0,\n      "queuedSplits" : 0,\n      "cpuTimeMillis" : 0,\n      "processedRows" : 0,\n      "processedBytes" : 0,\n      "nodes" : 0,\n      "queuedTimeMillis" : 1,\n      "elapsedTimeMillis" : 2,\n      "peakMemoryBytes" : 0\n   }\n}\n\n\u279c  ~ curl http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/2\n{\n   "id" : "20191113_033653_00006_dg6hb",\n   "data" : [\n      [\n         "pulsar"\n      ],\n      [\n         "system"\n      ]\n   ],\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "columns" : [\n      {\n         "typeSignature" : {\n            "rawType" : "varchar",\n            "arguments" : [\n               {\n                  "kind" : "LONG_LITERAL",\n                  "value" : 6\n               }\n            ],\n            "literalArguments" : [],\n            "typeArguments" : []\n         },\n         "name" : "Catalog",\n         "type" : "varchar(6)"\n      }\n   ],\n   "stats" : {\n      "wallTimeMillis" : 104,\n      "scheduled" : true,\n      "userTimeMillis" : 14,\n      "progressPercentage" : 100,\n      "totalSplits" : 19,\n      "nodes" : 1,\n      "cpuTimeMillis" : 16,\n      "queued" : false,\n      "queuedTimeMillis" : 1,\n      "state" : "FINISHED",\n      "peakMemoryBytes" : 0,\n      "elapsedTimeMillis" : 111,\n      "processedBytes" : 0,\n      "processedRows" : 0,\n      "queuedSplits" : 0,\n      "rootStage" : {\n         "cpuTimeMillis" : 1,\n         "runningSplits" : 0,\n         "state" : "FINISHED",\n         "completedSplits" : 1,\n         "subStages" : [\n            {\n               "cpuTimeMillis" : 14,\n               "runningSplits" : 0,\n               "state" : "FINISHED",\n               "completedSplits" : 17,\n               "subStages" : [\n                  {\n                     "wallTimeMillis" : 7,\n                     "subStages" : [],\n                     "stageId" : "2",\n                     "done" : true,\n                     "nodes" : 1,\n                     "totalSplits" : 1,\n                     "processedBytes" : 22,\n                     "processedRows" : 2,\n                     "queuedSplits" : 0,\n                     "userTimeMillis" : 1,\n                     "cpuTimeMillis" : 1,\n                     "runningSplits" : 0,\n                     "state" : "FINISHED",\n                     "completedSplits" : 1\n                  }\n               ],\n               "wallTimeMillis" : 92,\n               "nodes" : 1,\n               "done" : true,\n               "stageId" : "1",\n               "userTimeMillis" : 12,\n               "processedRows" : 2,\n               "processedBytes" : 51,\n               "queuedSplits" : 0,\n               "totalSplits" : 17\n            }\n         ],\n         "wallTimeMillis" : 5,\n         "done" : true,\n         "nodes" : 1,\n         "stageId" : "0",\n         "userTimeMillis" : 1,\n         "processedRows" : 2,\n         "processedBytes" : 22,\n         "totalSplits" : 1,\n         "queuedSplits" : 0\n      },\n      "runningSplits" : 0,\n      "completedSplits" : 19\n   }\n}\n\n'})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"Since the response data is not in sync with the query state from the perspective of clients, you cannot rely on the response data to determine whether the query completes."})}),"\n",(0,i.jsxs)(s.p,{children:["For more information about Presto REST API, refer to ",(0,i.jsx)(s.a,{href:"https://github.com/prestosql/presto/wiki/HTTP-Protocol",children:"Presto HTTP Protocol"}),"."]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var t=n(96540);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);