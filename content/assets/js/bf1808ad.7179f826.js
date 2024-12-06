"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5191],{45722:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"admin-api-non-persistent-topics","title":"Managing non-persistent topics","description":"Non-persistent can be used in applications that only want to consume real time published messages and","source":"@site/versioned_docs/version-2.6.4/admin-api-non-persistent-topics.md","sourceDirName":".","slug":"/admin-api-non-persistent-topics","permalink":"/docs/2.6.4/admin-api-non-persistent-topics","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.4/admin-api-non-persistent-topics.md","tags":[],"version":"2.6.4","frontMatter":{"id":"admin-api-non-persistent-topics","title":"Managing non-persistent topics","sidebar_label":"Non-Persistent topics","original_id":"admin-api-non-persistent-topics"},"sidebar":"docsSidebar","previous":{"title":"Persistent topics","permalink":"/docs/2.6.4/admin-api-persistent-topics"},"next":{"title":"Partitioned topics","permalink":"/docs/2.6.4/admin-api-partitioned-topics"}}');var i=s(74848),a=s(28453);const r={id:"admin-api-non-persistent-topics",title:"Managing non-persistent topics",sidebar_label:"Non-Persistent topics",original_id:"admin-api-non-persistent-topics"},o=void 0,l={},c=[{value:"Non-persistent topics resources",id:"non-persistent-topics-resources",level:2},{value:"Get stats",id:"get-stats",level:3},{value:"pulsar-admin",id:"pulsar-admin",level:4},{value:"REST API",id:"rest-api",level:4},{value:"Java",id:"java",level:4},{value:"Get internal stats",id:"get-internal-stats",level:3},{value:"pulsar-admin",id:"pulsar-admin-1",level:4},{value:"REST API",id:"rest-api-1",level:4},{value:"Java",id:"java-1",level:4},{value:"Create partitioned topic",id:"create-partitioned-topic",level:3},{value:"pulsar-admin",id:"pulsar-admin-2",level:4},{value:"REST API",id:"rest-api-2",level:4},{value:"Java",id:"java-2",level:4},{value:"Get metadata",id:"get-metadata",level:3},{value:"pulsar-admin",id:"pulsar-admin-3",level:4},{value:"REST API",id:"rest-api-3",level:4},{value:"Java",id:"java-3",level:4},{value:"Unload topic",id:"unload-topic",level:3},{value:"pulsar-admin",id:"pulsar-admin-4",level:4},{value:"REST API",id:"rest-api-4",level:4},{value:"Java",id:"java-4",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Non-persistent can be used in applications that only want to consume real time published messages and\ndo not need persistent guarantee that can also reduce message-publish latency by removing overhead of\npersisting messages."}),"\n",(0,i.jsx)(n.p,{children:"In all of the instructions and commands below, the topic name structure is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\nnon-persistent://tenant/namespace/topic\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"non-persistent-topics-resources",children:"Non-persistent topics resources"}),"\n",(0,i.jsx)(n.h3,{id:"get-stats",children:"Get stats"}),"\n",(0,i.jsx)(n.p,{children:"It shows current statistics of a given non-partitioned topic."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"msgRateIn"}),": The sum of all local and replication publishers' publish rates in messages per second"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"msgThroughputIn"}),": Same as above, but in bytes per second instead of messages per second"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"msgRateOut"}),": The sum of all local and replication consumers' dispatch rates in messages per second"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"msgThroughputOut"}),": Same as above, but in bytes per second instead of messages per second"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"averageMsgSize"}),": The average size in bytes of messages published within the last interval"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"publishers"}),": The list of all local publishers into the topic. There can be zero or thousands"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"averageMsgSize"}),": Average message size in bytes from this publisher within the last interval"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"producerId"}),": Internal identifier for this producer on this topic"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"producerName"}),": Internal identifier for this producer, generated by the client library"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"address"}),": IP address and source port for the connection of this producer"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"connectedSince"}),": Timestamp this producer was created or last reconnected"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"subscriptions"}),": The list of all local subscriptions to the topic"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"my-subscription"}),": The name of this subscription (client defined)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"type"}),": This subscription type"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"consumers"}),": The list of connected consumers for this subscription"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"consumerName"}),": Internal identifier for this consumer, generated by the client library"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"availablePermits"}),": The number of messages this consumer has space for in the client library's listen queue. A value less than 1 means the client library's queue is full and receive() isn't being called. A non-negative value means this consumer is ready to be dispatched messages."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"replication"}),": This section gives the stats for cross-colo replication of this topic"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"connected"}),": Whether the outbound replicator is connected"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"inboundConnection"}),": The IP and port of the broker in the remote cluster's publisher connection to this broker"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"inboundConnectedSince"}),": The TCP connection being used to publish messages to the remote cluster. If there are no local publishers connected, this connection is automatically closed after a minute."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"msgDropRate"}),": for publisher: publish: broker only allows configured number of in flight per connection, and drops all other published messages above the threshold. Broker also drops messages for subscriptions in case of unavailable limit and connection is not writable."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'\n{\n  "msgRateIn": 4641.528542257553,\n  "msgThroughputIn": 44663039.74947473,\n  "msgRateOut": 0,\n  "msgThroughputOut": 0,\n  "averageMsgSize": 1232439.816728665,\n  "storageSize": 135532389160,\n  "msgDropRate" : 0.0,\n  "publishers": [\n    {\n      "msgRateIn": 57.855383881403576,\n      "msgThroughputIn": 558994.7078932219,\n      "averageMsgSize": 613135,\n      "producerId": 0,\n      "producerName": null,\n      "address": null,\n      "connectedSince": null,\n      "msgDropRate" : 0.0\n    }\n  ],\n  "subscriptions": {\n    "my-topic_subscription": {\n      "msgRateOut": 0,\n      "msgThroughputOut": 0,\n      "msgBacklog": 116632,\n      "type": null,\n      "msgRateExpired": 36.98245516804671,\n       "consumers" : [ {\n        "msgRateOut" : 20343.506296021893,\n        "msgThroughputOut" : 2.0979855364233278E7,\n        "msgRateRedeliver" : 0.0,\n        "consumerName" : "fe3c0",\n        "availablePermits" : 950,\n        "unackedMessages" : 0,\n        "blockedConsumerOnUnackedMsgs" : false,\n        "address" : "/10.73.210.249:60578",\n        "connectedSince" : "2017-07-26 15:13:48.026-0700",\n        "clientVersion" : "1.19-incubating-SNAPSHOT"\n      } ],\n      "msgDropRate" : 432.2390921571593\n\n    }\n  },\n  "replication": {}\n}\n\n'})}),"\n",(0,i.jsx)(n.h4,{id:"pulsar-admin",children:"pulsar-admin"}),"\n",(0,i.jsxs)(n.p,{children:["Topic stats can be fetched using ",(0,i.jsx)(n.a,{href:"/docs/2.6.4/reference-pulsar-admin#stats",children:(0,i.jsx)(n.code,{children:"stats"})})," command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin non-persistent stats \\\n  non-persistent://test-tenant/ns1/tp1 \\\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rest-api",children:"REST API"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.6.4&apiversion=v2#operation/getStats",children:["GET /admin/v2/non-persistent/",":tenant","/",":namespace","/",":topic","/stats/getStats"]})}),"\n",(0,i.jsx)(n.h4,{id:"java",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'\nString topic = "non-persistent://my-tenant/my-namespace/my-topic";\nadmin.nonPersistentTopics().getStats(topic);\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"get-internal-stats",children:"Get internal stats"}),"\n",(0,i.jsx)(n.p,{children:"It shows detailed statistics of a topic."}),"\n",(0,i.jsx)(n.h4,{id:"pulsar-admin-1",children:"pulsar-admin"}),"\n",(0,i.jsxs)(n.p,{children:["Topic internal-stats can be fetched using ",(0,i.jsx)(n.a,{href:"/docs/2.6.4/reference-pulsar-admin#stats-internal",children:(0,i.jsx)(n.code,{children:"stats-internal"})})," command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'\n$ pulsar-admin non-persistent stats-internal \\\n  non-persistent://test-tenant/ns1/tp1 \\\n\n{\n  "entriesAddedCounter" : 48834,\n  "numberOfEntries" : 0,\n  "totalSize" : 0,\n  "cursors" : {\n    "s1" : {\n      "waitingReadOp" : false,\n      "pendingReadOps" : 0,\n      "messagesConsumedCounter" : 0,\n      "cursorLedger" : 0,\n      "cursorLedgerLastEntry" : 0\n    }\n  }\n}\n\n'})}),"\n",(0,i.jsx)(n.h4,{id:"rest-api-1",children:"REST API"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.6.4&apiversion=v2#operation/getInternalStats",children:["GET /admin/v2/non-persistent/",":tenant","/",":namespace","/",":topic","/internalStats/getInternalStats"]})}),"\n",(0,i.jsx)(n.h4,{id:"java-1",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'\nString topic = "non-persistent://my-tenant/my-namespace/my-topic";\nadmin.nonPersistentTopics().getInternalStats(topic);\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"create-partitioned-topic",children:"Create partitioned topic"}),"\n",(0,i.jsx)(n.p,{children:"Partitioned topics in Pulsar must be explicitly created. When creating a new partitioned topic you need to provide a name for the topic as well as the desired number of partitions."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["By default, after 60 seconds of creation, topics are considered inactive and deleted automatically to prevent from generating trash data.\nTo disable this feature, set ",(0,i.jsx)(n.code,{children:"brokerDeleteInactiveTopicsEnabled"})," to ",(0,i.jsx)(n.code,{children:"false"}),".\nTo change the frequency of checking inactive topics, set ",(0,i.jsx)(n.code,{children:"brokerDeleteInactiveTopicsFrequencySeconds"})," to your desired value.\nFor more information about these two parameters, see ",(0,i.jsx)(n.a,{href:"/docs/2.6.4/reference-configuration#broker",children:"here"}),"."]})}),"\n",(0,i.jsx)(n.h4,{id:"pulsar-admin-2",children:"pulsar-admin"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar-admin non-persistent create-partitioned-topic \\\n  non-persistent://my-tenant/my-namespace/my-topic \\\n  --partitions 4\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rest-api-2",children:"REST API"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.6.4&apiversion=v2#operation/createPartitionedTopic",children:["PUT /admin/v2/non-persistent/",":tenant","/",":namespace","/",":topic","/partitions/createPartitionedTopic"]})}),"\n",(0,i.jsx)(n.h4,{id:"java-2",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'\nString topicName = "non-persistent://my-tenant/my-namespace/my-topic";\nint numPartitions = 4;\nadmin.nonPersistentTopics().createPartitionedTopic(topicName, numPartitions);\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"get-metadata",children:"Get metadata"}),"\n",(0,i.jsx)(n.p,{children:"Partitioned topics have metadata associated with them that you can fetch as a JSON object. The following metadata fields are currently available:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Field"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Meaning"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"partitions"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The number of partitions into which the topic is divided"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"pulsar-admin-3",children:"pulsar-admin"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'\n$ pulsar-admin non-persistent get-partitioned-topic-metadata \\\n  non-persistent://my-tenant/my-namespace/my-topic\n{\n  "partitions": 4\n}\n\n'})}),"\n",(0,i.jsx)(n.h4,{id:"rest-api-3",children:"REST API"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.6.4&apiversion=v2#operation/getPartitionedMetadata",children:["GET /admin/v2/non-persistent/",":tenant","/",":namespace","/",":topic","/partitions/getPartitionedMetadata"]})}),"\n",(0,i.jsx)(n.h4,{id:"java-3",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'\nString topicName = "non-persistent://my-tenant/my-namespace/my-topic";\nadmin.nonPersistentTopics().getPartitionedTopicMetadata(topicName);\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"unload-topic",children:"Unload topic"}),"\n",(0,i.jsx)(n.p,{children:"It unloads a topic."}),"\n",(0,i.jsx)(n.h4,{id:"pulsar-admin-4",children:"pulsar-admin"}),"\n",(0,i.jsxs)(n.p,{children:["Topic can be unloaded using ",(0,i.jsx)(n.a,{href:"/docs/2.6.4/reference-pulsar-admin#unload",children:(0,i.jsx)(n.code,{children:"unload"})})," command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin non-persistent unload \\\n  non-persistent://test-tenant/ns1/tp1 \\\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rest-api-4",children:"REST API"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.6.4&apiversion=v2#operation/unloadTopic",children:["PUT /admin/v2/non-persistent/",":tenant","/",":namespace","/",":topic","/unload/unloadTopic"]})}),"\n",(0,i.jsx)(n.h4,{id:"java-4",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'\nString topic = "non-persistent://my-tenantmy-namespace/my-topic";\nadmin.nonPersistentTopics().unload(topic);\n\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(96540);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);