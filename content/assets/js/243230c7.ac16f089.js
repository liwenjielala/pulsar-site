"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[23109],{87017:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"admin-api-non-partitioned-topics","title":"Managing non-partitioned topics","description":"You can use Pulsar\'s admin API to create and manage non-partitioned topics.","source":"@site/versioned_docs/version-2.6.1/admin-api-non-partitioned-topics.md","sourceDirName":".","slug":"/admin-api-non-partitioned-topics","permalink":"/docs/2.6.1/admin-api-non-partitioned-topics","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.1/admin-api-non-partitioned-topics.md","tags":[],"version":"2.6.1","frontMatter":{"id":"admin-api-non-partitioned-topics","title":"Managing non-partitioned topics","sidebar_label":"Non-Partitioned topics","original_id":"admin-api-non-partitioned-topics"},"sidebar":"docsSidebar","previous":{"title":"Partitioned topics","permalink":"/docs/2.6.1/admin-api-partitioned-topics"},"next":{"title":"Functions","permalink":"/docs/2.6.1/admin-api-functions"}}');var s=i(74848),a=i(28453);const r={id:"admin-api-non-partitioned-topics",title:"Managing non-partitioned topics",sidebar_label:"Non-Partitioned topics",original_id:"admin-api-non-partitioned-topics"},d=void 0,c={},o=[{value:"Non-Partitioned topics resources",id:"non-partitioned-topics-resources",level:2},{value:"Create",id:"create",level:3},{value:"pulsar-admin",id:"pulsar-admin",level:4},{value:"REST API",id:"rest-api",level:4},{value:"Java",id:"java",level:4},{value:"Delete",id:"delete",level:3},{value:"pulsar-admin",id:"pulsar-admin-1",level:4},{value:"REST API",id:"rest-api-1",level:4},{value:"Java",id:"java-1",level:4},{value:"List",id:"list",level:3},{value:"pulsar-admin",id:"pulsar-admin-2",level:4},{value:"REST API",id:"rest-api-2",level:4},{value:"Java",id:"java-2",level:4},{value:"Stats",id:"stats",level:3},{value:"pulsar-admin",id:"pulsar-admin-3",level:4},{value:"REST API",id:"rest-api-3",level:4},{value:"Java",id:"java-3",level:4}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["You can use Pulsar's ",(0,s.jsx)(n.a,{href:"/docs/2.6.1/admin-api-overview",children:"admin API"})," to create and manage non-partitioned topics."]}),"\n",(0,s.jsx)(n.p,{children:"In all of the instructions and commands below, the topic name structure is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\npersistent://tenant/namespace/topic\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"non-partitioned-topics-resources",children:"Non-Partitioned topics resources"}),"\n",(0,s.jsx)(n.h3,{id:"create",children:"Create"}),"\n",(0,s.jsx)(n.p,{children:"Non-partitioned topics in Pulsar must be explicitly created. When creating a new non-partitioned topic you\nneed to provide a name for the topic."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["By default, after 60 seconds of creation, topics are considered inactive and deleted automatically to prevent from generating trash data.\nTo disable this feature, set ",(0,s.jsx)(n.code,{children:"brokerDeleteInactiveTopicsEnabled"}),"  to ",(0,s.jsx)(n.code,{children:"false"}),".\nTo change the frequency of checking inactive topics, set ",(0,s.jsx)(n.code,{children:"brokerDeleteInactiveTopicsFrequencySeconds"})," to your desired value.\nFor more information about these two parameters, see ",(0,s.jsx)(n.a,{href:"/docs/2.6.1/reference-configuration#broker",children:"here"}),"."]})}),"\n",(0,s.jsx)(n.h4,{id:"pulsar-admin",children:"pulsar-admin"}),"\n",(0,s.jsxs)(n.p,{children:["You can create non-partitioned topics using the ",(0,s.jsx)(n.a,{href:"/docs/2.6.1/reference-pulsar-admin#create-3",children:(0,s.jsx)(n.code,{children:"create"})}),"\ncommand and specifying the topic name as an argument.\nHere's an example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar-admin topics create \\\n  persistent://my-tenant/my-namespace/my-topic\n\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"It's only allowed to create non partitioned topic of name contains suffix '-partition-' followed by numeric value like\n'xyz-topic-partition-10', if there's already a partitioned topic with same name, in this case 'xyz-topic', and has\nnumber of partition larger then that numeric value in this case 11(partition index is start from 0). Else creation of such topic will fail."})}),"\n",(0,s.jsx)(n.h4,{id:"rest-api",children:"REST API"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.6.1&apiversion=v2#operation/createNonPartitionedTopic",children:["PUT /admin/v2/",":schema","/",":tenant","/",":namespace","/",":topic","/createNonPartitionedTopic"]})}),"\n",(0,s.jsx)(n.h4,{id:"java",children:"Java"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'\nString topicName = "persistent://my-tenant/my-namespace/my-topic";\nadmin.topics().createNonPartitionedTopic(topicName);\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"delete",children:"Delete"}),"\n",(0,s.jsx)(n.h4,{id:"pulsar-admin-1",children:"pulsar-admin"}),"\n",(0,s.jsxs)(n.p,{children:["Non-partitioned topics can be deleted using the ",(0,s.jsx)(n.a,{href:"/docs/2.6.1/reference-pulsar-admin#delete-4",children:(0,s.jsx)(n.code,{children:"delete"})})," command, specifying the topic by name:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar-admin topics delete \\\n  persistent://my-tenant/my-namespace/my-topic\n\n"})}),"\n",(0,s.jsx)(n.h4,{id:"rest-api-1",children:"REST API"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.6.1&apiversion=v2#operation/deleteTopic",children:["DELETE /admin/v2/",":schema","/",":tenant","/",":namespace","/",":topic","/deleteTopic"]})}),"\n",(0,s.jsx)(n.h4,{id:"java-1",children:"Java"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"\nadmin.topics().delete(persistentTopic);\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"list",children:"List"}),"\n",(0,s.jsx)(n.p,{children:"It provides a list of topics existing under a given namespace."}),"\n",(0,s.jsx)(n.h4,{id:"pulsar-admin-2",children:"pulsar-admin"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin topics list tenant/namespace\npersistent://tenant/namespace/topic1\npersistent://tenant/namespace/topic2\n\n"})}),"\n",(0,s.jsx)(n.h4,{id:"rest-api-2",children:"REST API"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.6.1&apiversion=v2#operation/getList",children:["GET /admin/v2/",":schema","/",":tenant","/",":namespace","/getList"]})}),"\n",(0,s.jsx)(n.h4,{id:"java-2",children:"Java"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"\nadmin.topics().getList(namespace);\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"stats",children:"Stats"}),"\n",(0,s.jsx)(n.p,{children:"It shows current statistics of a given topic. Here's an example payload:"}),"\n",(0,s.jsx)(n.p,{children:"The following stats are available:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Stat"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"msgRateIn"}),(0,s.jsx)(n.td,{children:"The sum of all local and replication publishers\u2019 publish rates in messages per second"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"msgThroughputIn"}),(0,s.jsx)(n.td,{children:"Same as msgRateIn but in bytes per second instead of messages per second"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"msgRateOut"}),(0,s.jsx)(n.td,{children:"The sum of all local and replication consumers\u2019 dispatch rates in messages per second"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"msgThroughputOut"}),(0,s.jsx)(n.td,{children:"Same as msgRateOut but in bytes per second instead of messages per second"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"averageMsgSize"}),(0,s.jsx)(n.td,{children:"Average message size, in bytes, from this publisher within the last interval"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"storageSize"}),(0,s.jsx)(n.td,{children:"The sum of the ledgers\u2019 storage size for this topic"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"publishers"}),(0,s.jsx)(n.td,{children:"The list of all local publishers into the topic. There can be anywhere from zero to thousands."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"producerId"}),(0,s.jsx)(n.td,{children:"Internal identifier for this producer on this topic"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"producerName"}),(0,s.jsx)(n.td,{children:"Internal identifier for this producer, generated by the client library"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"address"}),(0,s.jsx)(n.td,{children:"IP address and source port for the connection of this producer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"connectedSince"}),(0,s.jsx)(n.td,{children:"Timestamp this producer was created or last reconnected"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"subscriptions"}),(0,s.jsx)(n.td,{children:"The list of all local subscriptions to the topic"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"my-subscription"}),(0,s.jsx)(n.td,{children:"The name of this subscription (client defined)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"msgBacklog"}),(0,s.jsx)(n.td,{children:"The count of messages in backlog for this subscription"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"msgBacklogNoDelayed"}),(0,s.jsx)(n.td,{children:"The count of messages in backlog without delayed messages for this subscription"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"This subscription type"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"msgRateExpired"}),(0,s.jsx)(n.td,{children:"The rate at which messages were discarded instead of dispatched from this subscription due to TTL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"consumers"}),(0,s.jsx)(n.td,{children:"The list of connected consumers for this subscription"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"consumerName"}),(0,s.jsx)(n.td,{children:"Internal identifier for this consumer, generated by the client library"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"availablePermits"}),(0,s.jsx)(n.td,{children:"The number of messages this consumer has space for in the client library\u2019s listen queue. A value of 0 means the client library\u2019s queue is full and receive() isn\u2019t being called. A nonzero value means this consumer is ready to be dispatched messages."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"replication"}),(0,s.jsx)(n.td,{children:"This section gives the stats for cross-colo replication of this topic"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"replicationBacklog"}),(0,s.jsx)(n.td,{children:"The outbound replication backlog in messages"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"connected"}),(0,s.jsx)(n.td,{children:"Whether the outbound replicator is connected"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"replicationDelayInSeconds"}),(0,s.jsx)(n.td,{children:"How long the oldest message has been waiting to be sent through the connection, if connected is true"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"inboundConnection"}),(0,s.jsx)(n.td,{children:"The IP and port of the broker in the remote cluster\u2019s publisher connection to this broker"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"inboundConnectedSince"}),(0,s.jsx)(n.td,{children:"The TCP connection being used to publish messages to the remote cluster. If there are no local publishers connected, this connection is automatically closed after a minute."})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"pulsar-admin-3",children:"pulsar-admin"}),"\n",(0,s.jsxs)(n.p,{children:["The stats for the topic and its connected producers and consumers can be fetched by using the ",(0,s.jsx)(n.a,{href:"/docs/2.6.1/reference-pulsar-admin#stats",children:(0,s.jsx)(n.code,{children:"stats"})})," command, specifying the topic by name:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin topics stats \\\n  persistent://test-tenant/namespace/topic \\\n  --get-precise-backlog\n\n"})}),"\n",(0,s.jsx)(n.h4,{id:"rest-api-3",children:"REST API"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.6.1&apiversion=v2#operation/getStats",children:["GET /admin/v2/",":schema","/",":tenant","/",":namespace","/",":topic","/stats/getStats"]})}),"\n",(0,s.jsx)(n.h4,{id:"java-3",children:"Java"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"\nadmin.topics().getStats(persistentTopic, false /* is precise backlog */);\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var t=i(96540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);