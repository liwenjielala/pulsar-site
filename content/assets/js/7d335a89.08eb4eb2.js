"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5419],{16977:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"get-started-pulsar-admin","title":"Get started with pulsar-admin CLI tool","description":"This tutorial guides you through every step of using pulsar-admin CLI to manage topics. It includes the following steps:","source":"@site/versioned_docs/version-3.2.x/get-started-pulsar-admin.md","sourceDirName":".","slug":"/get-started-pulsar-admin","permalink":"/docs/3.2.x/get-started-pulsar-admin","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/get-started-pulsar-admin.md","tags":[],"version":"3.2.x","frontMatter":{"id":"get-started-pulsar-admin","title":"Get started with pulsar-admin CLI tool","sidebar_label":"Get started with pulsar-admin"}}');var i=t(74848),r=t(28453);const a={id:"get-started-pulsar-admin",title:"Get started with pulsar-admin CLI tool",sidebar_label:"Get started with pulsar-admin"},l=void 0,d={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Related topics",id:"related-topics",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This tutorial guides you through every step of using pulsar-admin CLI to manage topics. It includes the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Set the service URL."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a partitioned topic."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Update the number of a partition."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Produce messages to the topic."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check the stats of the topic."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Delete the topic."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/3.2.x/getting-started-standalone",children:"Install and start Pulsar standalone"}),". This tutorial runs Pulsar 2.11 as an example."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Set the service URLs to point to the broker service in ",(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/conf/client.conf",children:"client.conf"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"webServiceUrl=http://localhost:8080/\nbrokerServiceUrl=pulsar://localhost:6650/\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a persistent topic named test-topic-1 with 6 partitions."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Input"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin topics create-partitioned-topic \\\npersistent://public/default/test-topic-1 \\\n--partitions 6\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output"})}),"\n",(0,i.jsx)(n.p,{children:"There is no output. You can check the status of the topic in Step 5."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Update the number of the partition to 8."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Input"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin topics update-partitioned-topic \\\npersistent://public/default/test-topic-1 \\\n--partitions 8\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output"})}),"\n",(0,i.jsx)(n.p,{children:"There is no output. You can check the number of partitions in Step 5."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Produce some messages to the partitioned topic test-topic-1."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Input"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-perf produce -u pulsar://localhost:6650 -r 1000 -i 1000 persistent://public/default/test-topic-1\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'2023-03-07T15:33:56,832+0800 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Starting Pulsar perf producer with config: {\n  "confFile" : "/Users/yu/apache-pulsar-2.11.0/conf/client.conf",\n  "serviceURL" : "pulsar://localhost:6650",\n  "authPluginClassName" : "",\n  "authParams" : "",\n  "tlsTrustCertsFilePath" : "",\n  "tlsAllowInsecureConnection" : false,\n  "tlsHostnameVerificationEnable" : false,\n  "maxConnections" : 1,\n  "statsIntervalSeconds" : 1000,\n  "ioThreads" : 1,\n  "enableBusyWait" : false,\n  "listenerName" : null,\n  "listenerThreads" : 1,\n  "maxLookupRequest" : 50000,\n  "topics" : [ "persistent://public/default/test-topic-1" ],\n  "numTestThreads" : 1,\n  "msgRate" : 1000,\n  "msgSize" : 1024,\n  "numTopics" : 1,\n"numProducers" : 1,\n  "separator" : "-",\n  "sendTimeout" : 0,\n  "producerName" : null,\n  "adminURL" : "http://localhost:8080/",\n\n...\n\n2023-03-07T15:35:03,769+0800 [Thread-0] INFO  org.apache.pulsar.testclient.PerformanceProducer - Aggregated latency stats --- Latency: mean:   8.931 ms - med:   3.775 - 95pct:  32.144 - 99pct:  98.432 - 99.9pct: 216.088 - 99.99pct: 304.807 - 99.999pct: 349.391 - Max: 351.235\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Check the internal stats of the partitioned topic ",(0,i.jsx)(n.em,{children:"test-topic-1"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Input"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin topics partitioned-stats-internal \\\npersistent://public/default/test-topic-1\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output"})}),"\n",(0,i.jsxs)(n.p,{children:["Below is a part of the output. For detailed explanations of topic stats, see ",(0,i.jsx)(n.a,{href:"/docs/3.2.x/administration-stats",children:"Pulsar statistics"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'{\n  "metadata" : {\n    "partitions" : 8\n  },\n  "partitions" : {\n    "persistent://public/default/test-topic-1-partition-1" : {\n      "entriesAddedCounter" : 4213,\n      "numberOfEntries" : 4213,\n      "totalSize" : 8817693,\n      "currentLedgerEntries" : 4212,\n      "currentLedgerSize" : 8806289,\n      "lastLedgerCreatedTimestamp" : "2023-03-07T15:33:59.367+08:00",\n      "waitingCursorsCount" : 0,\n      "pendingAddEntriesCount" : 0,\n      "lastConfirmedEntry" : "65:4211",\n      "state" : "LedgerOpened",\n      "ledgers" : [ {\n        "ledgerId" : 49,\n        "entries" : 1,\n        "size" : 11404,\n        "offloaded" : false,\n        "underReplicated" : false\n      }, {\n        "ledgerId" : 65,\n        "entries" : 0,\n        "size" : 0,\n        "offloaded" : false,\n        "underReplicated" : false\n      } ],\n      "cursors" : {\n        "test-subscriptio-1" : {\n          "markDeletePosition" : "49:-1",\n          "readPosition" : "49:0",\n          "waitingReadOp" : false,\n          "pendingReadOps" : 0,\n          "messagesConsumedCounter" : 0,\n          "cursorLedger" : -1,\n          "cursorLedgerLastEntry" : -1,\n  "individuallyDeletedMessages" : "[]",\n          "lastLedgerSwitchTimestamp" : "2023-03-06T16:41:32.801+08:00",\n          "state" : "NoLedger",\n          "numberOfEntriesSinceFirstNotAckedMessage" : 1,\n          "totalNonContiguousDeletedMessagesRange" : 0,\n          "subscriptionHavePendingRead" : false,\n          "subscriptionHavePendingReplayRead" : false,\n          "properties" : { }\n        },\n        "test-subscription-1" : {\n          "markDeletePosition" : "49:-1",\n          "readPosition" : "49:0",\n          "waitingReadOp" : false,\n          "pendingReadOps" : 0,\n          "messagesConsumedCounter" : 0,\n          "cursorLedger" : -1,\n          "cursorLedgerLastEntry" : -1,\n          "individuallyDeletedMessages" : "[]",\n          "lastLedgerSwitchTimestamp" : "2023-03-06T16:41:32.801+08:00",\n          "state" : "NoLedger",\n          "numberOfEntriesSinceFirstNotAckedMessage" : 1,\n          "totalNonContiguousDeletedMessagesRange" : 0,\n          "subscriptionHavePendingRead" : false,\n          "subscriptionHavePendingReplayRead" : false,\n          "properties" : { }\n        }\n      },\n      "schemaLedgers" : [ ],\n      "compactedLedger" : {\n        "ledgerId" : -1,\n        "entries" : -1,\n        "size" : -1,\n        "offloaded" : false,\n        "underReplicated" : false\n      }\n    },\n...\n\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Delete the topic ",(0,i.jsx)(n.em,{children:"test-topic-1"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Input"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin topics delete-partitioned-topic persistent://public/default/test-topic-1\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output"})}),"\n",(0,i.jsxs)(n.p,{children:["There is no output. You can verify whether the ",(0,i.jsx)(n.em,{children:"test-topic-1"})," exists or not using the following command."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Input"})}),"\n",(0,i.jsxs)(n.p,{children:["List topics in ",(0,i.jsx)(n.code,{children:"public/default"})," namespace."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin topics list public/default\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-topics",children:"Related topics"}),"\n",(0,i.jsxs)(n.p,{children:["To check the detailed usage of pulsar-admin CLI, see ",(0,i.jsx)(n.a,{href:"pathname:///reference/#/3.2.x/",children:"pulsar-admin CLI reference"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);