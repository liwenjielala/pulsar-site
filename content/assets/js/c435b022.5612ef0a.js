"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7572],{94940:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>h,contentTitle:()=>n,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"versioned/pulsar-2.6.0","title":"Apache Pulsar 2.6.0","description":"2020-06-17","source":"@site/release-notes/versioned/pulsar-2.6.0.md","sourceDirName":"versioned","slug":"/versioned/pulsar-2.6.0","permalink":"/release-notes/versioned/pulsar-2.6.0","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-2.6.0.md","tags":[],"version":"current","frontMatter":{"id":"pulsar-2.6.0","title":"Apache Pulsar 2.6.0","sidebar_label":"Apache Pulsar 2.6.0"}}');var i=r(74848),a=r(28453);const t={id:"pulsar-2.6.0",title:"Apache Pulsar 2.6.0",sidebar_label:"Apache Pulsar 2.6.0"},n=void 0,h={},c=[{value:"2020-06-17",id:"2020-06-17",level:4},{value:"Features",id:"features",level:4},{value:"PIPs",id:"pips",level:5},{value:"Broker",id:"broker",level:5},{value:"Function",id:"function",level:5},{value:"Pulsar SQL",id:"pulsar-sql",level:5},{value:"Pulsar IO",id:"pulsar-io",level:5},{value:"Pulsar Proxy",id:"pulsar-proxy",level:5},{value:"Admin",id:"admin",level:5},{value:"Fixes",id:"fixes",level:4}];function p(e){const s={a:"a",h4:"h4",h5:"h5",li:"li",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h4,{id:"2020-06-17",children:"2020-06-17"}),"\n",(0,i.jsx)(s.h4,{id:"features",children:"Features"}),"\n",(0,i.jsx)(s.h5,{id:"pips",children:"PIPs"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["[PIP-37] Large message size support ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/4400",children:"#4400"})]}),"\n",(0,i.jsxs)(s.li,{children:["[PIP-39] Namespace change events (System Topic) ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/4955",children:"#4955"})]}),"\n",(0,i.jsxs)(s.li,{children:["[PIP-45] Switch ManagedLedger to use MetadataStore interface ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/5358",children:"#5358"})]}),"\n",(0,i.jsxs)(s.li,{children:["[PIP 53] Contribute ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar-dotpulsar",children:"DotPulsar"})," to Apache Pulsar"]}),"\n",(0,i.jsxs)(s.li,{children:["[PIP-54] Support acknowledgment at batch index level ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6052",children:"#6052"})]}),"\n",(0,i.jsxs)(s.li,{children:["[PIP-58] Support consumers set custom message retry delay ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6449",children:"#6449"})]}),"\n",(0,i.jsxs)(s.li,{children:["[PIP-60] Support SNI routing to support various proxy-server ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6566",children:"#6566"})]}),"\n",(0,i.jsxs)(s.li,{children:["[PIP-61] Advertise multiple addresses ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6903",children:"#6903"})]}),"\n",(0,i.jsxs)(s.li,{children:["[PIP-65] Adapting Pulsar IO Sources to support Batch Sources ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7090",children:"#7090"})]}),"\n"]}),"\n",(0,i.jsx)(s.h5,{id:"broker",children:"Broker"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["[Broker] Add threshold shedder strategy and metrics exporter for loadbalancer ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6772",children:"#6772"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Add consistent hashing in the Key_Shared distribution ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6791",children:"#6791"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Fixed ordering issue in KeyShared subscription dispatcher when adding consumer ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7106",children:"#7106"})," ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7108",children:"#7108"})," ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7188",children:"#7188"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Add support for key hash range reading in Key_Shared subscription ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/5928",children:"#5928"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Allow for schema reader and writer registration on SchemaDefinition ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6905",children:"#6905"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Support use null key and null value in KeyValue Schema ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7139",children:"#7139"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Support multiple pulsar clusters to use the same bk cluster ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/5985",children:"#5985"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Add a flag to skip broker shutdown on transient OOM ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6634",children:"#6634"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Make zookeeper cache expiry time configurable ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6668",children:"#6668"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Check replicator periodically to avoid issue due to zookeeper missing watch ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6674",children:"#6674"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Expose managedLedgerCache, managedLedger, loadBalance metrics to Prometheus ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6705",children:"#6705"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Optimize consumer fetch messages in case of batch message ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6719",children:"#6719"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Add configuration to limit max partitions for a partitioned topic ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6794",children:"#6794"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Change default FlushEntryLogBytes to 256MB to improve bookie io throughput ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6915",children:"#6915"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Introduce precise topic publish rate limiting ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7078",children:"#7078"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Expose new entries check delay in the broker.conf ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7154",children:"7154"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Add broker interceptor for intercepting all Pulsar command and REST API requests ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7143",children:"#7143"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Only close active consumer for Failover subscription when seek() ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7141",children:"#7141"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Allow to delete topics that are failing to recover ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7131",children:"#7131"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Support set netty max frame size in bookkeeper.conf ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7116",children:"#7116"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Trigger rollover when meeting maxLedgerRolloverTimeMinutes ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7111",children:"#7111"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Cap the dispatcher batch size in bytes to fixed max ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7097",children:"#7097"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Support specify managedLedgerMaxSizePerLedgerMbytes in broker.conf ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7085",children:"#7085"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Allow to grant permissions when the authorization is disabled ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7074",children:"#7074"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Add messages and bytes counter stats to broker-stats/topics ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7045",children:"#7045"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Expose new entries check delay in the broker.conf ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7154",children:"#7154"})]}),"\n"]}),"\n",(0,i.jsx)(s.h5,{id:"function",children:"Function"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["[Function] Built-in functions support ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6895",children:"#6895"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Function] Add Go Function heartbeat (and gRPC service) for production usage ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6031",children:"#6031"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Function] Add custom property option to functions ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6348",children:"#6348"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Function] Separate TLS configuration of function worker and broker ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6602",children:"#6602"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Function] Added ability to build consumers in functions and sources ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6954",children:"#6954"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Function] Support DLQ on sources and sinks ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7032",children:"#7032"})]}),"\n"]}),"\n",(0,i.jsx)(s.h5,{id:"pulsar-sql",children:"Pulsar SQL"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["[SQL] KeyValue schema support ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6325",children:"#6325"})]}),"\n",(0,i.jsxs)(s.li,{children:["[SQL] Multiple version schema support ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/4847",children:"#4847"})]}),"\n",(0,i.jsxs)(s.li,{children:["[SQL] Fix presto SQL does not start metrics service before queue execute ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7030",children:"#7030"})]}),"\n"]}),"\n",(0,i.jsx)(s.h5,{id:"pulsar-io",children:"Pulsar IO"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Added ability for sources to publish messages on their own ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6941",children:"#6941"})]}),"\n",(0,i.jsxs)(s.li,{children:["[RabbitMQ] Allow routing key per message to RabbitMQ sink connector ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/5890",children:"#5890"})]}),"\n",(0,i.jsxs)(s.li,{children:["[RabbitMQ] Add passive config options ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6679",children:"#6679"})]}),"\n",(0,i.jsxs)(s.li,{children:["[debezium] Upgrade from v0.10.0-Final to v1.0.0-Final ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/5972",children:"#5972"})]}),"\n",(0,i.jsxs)(s.li,{children:["[debezium] Support avro schema for debezium connector ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6034",children:"#6034"})]}),"\n",(0,i.jsxs)(s.li,{children:["[influxdb2]  Add support for influxdb2 in pulsar-influxdb-sink ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6601",children:"#6601"})]}),"\n",(0,i.jsxs)(s.li,{children:["[jdbc] Add jdbc sinks: postgres, mariadb, clickhouse ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6835",children:"#6835"})]}),"\n"]}),"\n",(0,i.jsx)(s.h5,{id:"pulsar-proxy",children:"Pulsar Proxy"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["[Proxy] Add REST API to get connection and topic stats ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6473",children:"#6473"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Proxy] Add advertised address option ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6942",children:"#6942"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Proxy] Add proxyLogLevel into config ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6948",children:"#6948"})]}),"\n"]}),"\n",(0,i.jsx)(s.h5,{id:"admin",children:"Admin"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["[Admin] Support delete inactive topic when subscriptions caught up ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6077",children:"#6077"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Admin] Add configuration to disable auto-creation of subscriptions ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6456",children:"#6456"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Admin] Add maxUnackedMessagesPerSubscription and maxUnackedMessagesPerConsumer on namespaces policies ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/5936",children:"#5936"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Admin] Support get a message by message ID in pulsar-admin ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6331",children:"#6331"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Admin] Support delete subscription forcefully ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6383",children:"#6383"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Admin] Add subscribe initial position for consumer CLI ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6442",children:"#6442"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Admin] Support to get managed ledger info of a partitioned topic ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6532",children:"#6532"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Admin] Support compact all partitions of a partitioned topic ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6537",children:"#6537"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Admin] Support multi-hosts in PulsarAdmin ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6547",children:"#6547"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Admin] Support to get internal stats for a partitioned topic ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6624",children:"#6624"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Admin] Support enable or disable subscription auto-creation at namespace level ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6637",children:"#6637"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Admin] Enable to set the subscription expiration time for each namespace ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6851",children:"#6851"})]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"fixes",children:"Fixes"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["[Broker] Fixed increasing number of partitions with attached readers ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7077",children:"#7077"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Make ZkBookieRackAffinityMapping work as expected ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6917",children:"#6917"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Broker] Fix backlog and backlog size stats keeps growing ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7082",children:"#7082"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Java Client] Fix connection leak ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6524",children:"#6524"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Java Client] Fix message id compare between MessageId and BatchMessageId ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6621",children:"#6621"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Java Client] Fix memory leak when create producer with not exsits topic ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7120",children:"#7120"})," ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7124",children:"#7124"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Java Client] Fix duplicated messages sent to dead letter topic ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7021",children:"#7021"})]}),"\n",(0,i.jsxs)(s.li,{children:["[CPP Client] Fix deadlock of consumer for topics auto discovery ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7206",children:"#7206"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Managed Ledger] Fix NPE on opening non-durable cursors on an empty managed ledger ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7133",children:"#7133"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Websocket] Fix incorrect topic URL parse ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6630",children:"#6630"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Pulsar SQL] Fix problem with multiple zookeeper address ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6947",children:"#6947"})]}),"\n",(0,i.jsxs)(s.li,{children:["[Docker] Do not apply env values to pulsar_env.sh and bkenv.sh implicitly ",(0,i.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/6579",children:"6579"})]}),"\n"]})]})}function o(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>n});var l=r(96540);const i={},a=l.createContext(i);function t(e){const s=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(a.Provider,{value:s},e.children)}}}]);