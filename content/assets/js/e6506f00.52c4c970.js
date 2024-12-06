"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[95437],{46271:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"reference-terminology","title":"Pulsar Terminology","description":"Here is a glossary of terms related to Apache Pulsar:","source":"@site/versioned_docs/version-2.3.1/reference-terminology.md","sourceDirName":".","slug":"/reference-terminology","permalink":"/docs/2.3.1/reference-terminology","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.1/reference-terminology.md","tags":[],"version":"2.3.1","frontMatter":{"id":"reference-terminology","title":"Pulsar Terminology","sidebar_label":"Terminology","original_id":"reference-terminology"},"sidebar":"docsSidebar","previous":{"title":"Building Pulsar C++ client","permalink":"/docs/2.3.1/develop-cpp"},"next":{"title":"Pulsar CLI tools","permalink":"/docs/2.3.1/reference-cli-tools"}}');var i=n(74848),a=n(28453);const o={id:"reference-terminology",title:"Pulsar Terminology",sidebar_label:"Terminology",original_id:"reference-terminology"},t=void 0,l={},c=[{value:"Concepts",id:"concepts",level:3},{value:"Pulsar",id:"pulsar",level:4},{value:"Message",id:"message",level:4},{value:"Topic",id:"topic",level:4},{value:"Partitioned Topic",id:"partitioned-topic",level:4},{value:"Namespace",id:"namespace",level:4},{value:"Namespace Bundle",id:"namespace-bundle",level:4},{value:"Tenant",id:"tenant",level:4},{value:"Subscription",id:"subscription",level:4},{value:"Pub-Sub",id:"pub-sub",level:4},{value:"Producer",id:"producer",level:4},{value:"Consumer",id:"consumer",level:4},{value:"Reader",id:"reader",level:4},{value:"Cursor",id:"cursor",level:4},{value:"Acknowledgment (ack)",id:"acknowledgment-ack",level:4},{value:"Negative Acknowledgment (nack)",id:"negative-acknowledgment-nack",level:4},{value:"Unacknowledged",id:"unacknowledged",level:4},{value:"Retention Policy",id:"retention-policy",level:4},{value:"Multi-Tenancy",id:"multi-tenancy",level:4},{value:"Architecture",id:"architecture",level:3},{value:"Standalone",id:"standalone",level:4},{value:"Cluster",id:"cluster",level:4},{value:"Instance",id:"instance",level:4},{value:"Geo-Replication",id:"geo-replication",level:4},{value:"Configuration Store",id:"configuration-store",level:4},{value:"Topic Lookup",id:"topic-lookup",level:4},{value:"Service Discovery",id:"service-discovery",level:4},{value:"Broker",id:"broker",level:4},{value:"Dispatcher",id:"dispatcher",level:4},{value:"Storage",id:"storage",level:3},{value:"BookKeeper",id:"bookkeeper",level:4},{value:"Bookie",id:"bookie",level:4},{value:"Ledger",id:"ledger",level:4},{value:"Functions",id:"functions",level:3}];function d(e){const s={a:"a",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Here is a glossary of terms related to Apache Pulsar:"}),"\n",(0,i.jsx)(s.h3,{id:"concepts",children:"Concepts"}),"\n",(0,i.jsx)(s.h4,{id:"pulsar",children:"Pulsar"}),"\n",(0,i.jsx)(s.p,{children:"Pulsar is a distributed messaging system originally created by Yahoo but now under the stewardship of the Apache Software Foundation."}),"\n",(0,i.jsx)(s.h4,{id:"message",children:"Message"}),"\n",(0,i.jsxs)(s.p,{children:["Messages are the basic unit of Pulsar. They're what ",(0,i.jsx)(s.a,{href:"#producer",children:"producers"})," publish to ",(0,i.jsx)(s.a,{href:"#topic",children:"topics"}),"\nand what ",(0,i.jsx)(s.a,{href:"#consumer",children:"consumers"})," then consume from topics."]}),"\n",(0,i.jsx)(s.h4,{id:"topic",children:"Topic"}),"\n",(0,i.jsxs)(s.p,{children:["A named channel used to pass messages published by ",(0,i.jsx)(s.a,{href:"#producer",children:"producers"})," to ",(0,i.jsx)(s.a,{href:"#consumer",children:"consumers"})," who\nprocess those ",(0,i.jsx)(s.a,{href:"#message",children:"messages"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"partitioned-topic",children:"Partitioned Topic"}),"\n",(0,i.jsxs)(s.p,{children:["A topic that is served by multiple Pulsar ",(0,i.jsx)(s.a,{href:"#broker",children:"brokers"}),", which enables higher throughput."]}),"\n",(0,i.jsx)(s.h4,{id:"namespace",children:"Namespace"}),"\n",(0,i.jsxs)(s.p,{children:["A grouping mechanism for related ",(0,i.jsx)(s.a,{href:"#topic",children:"topics"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"namespace-bundle",children:"Namespace Bundle"}),"\n",(0,i.jsxs)(s.p,{children:["A virtual group of ",(0,i.jsx)(s.a,{href:"#topic",children:"topics"})," that belong to the same ",(0,i.jsx)(s.a,{href:"#namespace",children:"namespace"}),". A namespace bundle\nis defined as a range between two 32-bit hashes, such as 0x00000000 and 0xffffffff."]}),"\n",(0,i.jsx)(s.h4,{id:"tenant",children:"Tenant"}),"\n",(0,i.jsx)(s.p,{children:"An administrative unit for allocating capacity and enforcing an authentication/authorization scheme."}),"\n",(0,i.jsx)(s.h4,{id:"subscription",children:"Subscription"}),"\n",(0,i.jsxs)(s.p,{children:["A lease on a ",(0,i.jsx)(s.a,{href:"#topic",children:"topic"})," established by a group of ",(0,i.jsx)(s.a,{href:"#consumer",children:"consumers"}),". Pulsar has three subscription\nmodes (exclusive, shared, and failover)."]}),"\n",(0,i.jsx)(s.h4,{id:"pub-sub",children:"Pub-Sub"}),"\n",(0,i.jsxs)(s.p,{children:["A messaging pattern in which ",(0,i.jsx)(s.a,{href:"#producer",children:"producer"})," processes publish messages on ",(0,i.jsx)(s.a,{href:"#topic",children:"topics"})," that\nare then consumed (processed) by ",(0,i.jsx)(s.a,{href:"#consumer",children:"consumer"})," processes."]}),"\n",(0,i.jsx)(s.h4,{id:"producer",children:"Producer"}),"\n",(0,i.jsxs)(s.p,{children:["A process that publishes ",(0,i.jsx)(s.a,{href:"#message",children:"messages"})," to a Pulsar ",(0,i.jsx)(s.a,{href:"#topic",children:"topic"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"consumer",children:"Consumer"}),"\n",(0,i.jsxs)(s.p,{children:["A process that establishes a subscription to a Pulsar ",(0,i.jsx)(s.a,{href:"#topic",children:"topic"})," and processes messages published\nto that topic by ",(0,i.jsx)(s.a,{href:"#producer",children:"producers"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"reader",children:"Reader"}),"\n",(0,i.jsxs)(s.p,{children:["Pulsar readers are message processors much like Pulsar ",(0,i.jsx)(s.a,{href:"#consumer",children:"consumers"})," but with two crucial differences:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["you can specify ",(0,i.jsx)(s.em,{children:"where"})," on a topic readers begin processing messages (consumers always begin with the latest\navailable unacked message);"]}),"\n",(0,i.jsx)(s.li,{children:"readers don't retain data or acknowledge messages."}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"cursor",children:"Cursor"}),"\n",(0,i.jsxs)(s.p,{children:["The subscription position for a ",(0,i.jsx)(s.a,{href:"#consumer",children:"consumer"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"acknowledgment-ack",children:"Acknowledgment (ack)"}),"\n",(0,i.jsxs)(s.p,{children:["A message sent to a Pulsar broker by a ",(0,i.jsx)(s.a,{href:"#consumer",children:"consumer"})," that a message has been successfully processed.\nAn acknowledgement (ack) is Pulsar's way of knowing that the message can be deleted from the system;\nif no acknowledgement, then the message will be retained until it's processed."]}),"\n",(0,i.jsx)(s.h4,{id:"negative-acknowledgment-nack",children:"Negative Acknowledgment (nack)"}),"\n",(0,i.jsx)(s.p,{children:'When an application fails to process a particular message, it can send a "negative ack" to Pulsar\nto signal that the message should be replayed at a later timer. (By default, failed messages are\nreplayed after a 1 minute delay)'}),"\n",(0,i.jsx)(s.h4,{id:"unacknowledged",children:"Unacknowledged"}),"\n",(0,i.jsx)(s.p,{children:"A message that has been delivered to a consumer for processing but not yet confirmed as processed by the consumer."}),"\n",(0,i.jsx)(s.h4,{id:"retention-policy",children:"Retention Policy"}),"\n",(0,i.jsxs)(s.p,{children:["Size and/or time limits that you can set on a ",(0,i.jsx)(s.a,{href:"#namespace",children:"namespace"})," to configure retention of ",(0,i.jsx)(s.a,{href:"#message",children:"messages"}),"\nthat have already been ",(0,i.jsx)(s.a,{href:"#acknowledgement-ack",children:"acknowledged"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"multi-tenancy",children:"Multi-Tenancy"}),"\n",(0,i.jsxs)(s.p,{children:["The ability to isolate ",(0,i.jsx)(s.a,{href:"#namespace",children:"namespaces"}),", specify quotas, and configure authentication and authorization\non a per-",(0,i.jsx)(s.a,{href:"#tenant",children:"tenant"})," basis."]}),"\n",(0,i.jsx)(s.h3,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(s.h4,{id:"standalone",children:"Standalone"}),"\n",(0,i.jsx)(s.p,{children:"A lightweight Pulsar broker in which all components run in a single Java Virtual Machine (JVM) process. Standalone\nclusters can be run on a single machine and are useful for development purposes."}),"\n",(0,i.jsx)(s.h4,{id:"cluster",children:"Cluster"}),"\n",(0,i.jsxs)(s.p,{children:["A set of Pulsar ",(0,i.jsx)(s.a,{href:"#broker",children:"brokers"})," and ",(0,i.jsx)(s.a,{href:"#bookkeeper",children:"BookKeeper"})," servers (aka ",(0,i.jsx)(s.a,{href:"#bookie",children:"bookies"}),").\nClusters can reside in different geographical regions and replicate messages to one another\nin a process called ",(0,i.jsx)(s.a,{href:"#geo-replication",children:"geo-replication"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"instance",children:"Instance"}),"\n",(0,i.jsxs)(s.p,{children:["A group of Pulsar ",(0,i.jsx)(s.a,{href:"#cluster",children:"clusters"})," that act together as a single unit."]}),"\n",(0,i.jsx)(s.h4,{id:"geo-replication",children:"Geo-Replication"}),"\n",(0,i.jsxs)(s.p,{children:["Replication of messages across Pulsar ",(0,i.jsx)(s.a,{href:"#cluster",children:"clusters"}),", potentially in different datacenters\nor geographical regions."]}),"\n",(0,i.jsx)(s.h4,{id:"configuration-store",children:"Configuration Store"}),"\n",(0,i.jsxs)(s.p,{children:["Pulsar's configuration store (previously known as configuration store) is a ZooKeeper quorum that\nis used for configuration-specific tasks. A multi-cluster Pulsar installation requires just one\nconfiguration store across all ",(0,i.jsx)(s.a,{href:"#cluster",children:"clusters"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"topic-lookup",children:"Topic Lookup"}),"\n",(0,i.jsxs)(s.p,{children:["A service provided by Pulsar ",(0,i.jsx)(s.a,{href:"#broker",children:"brokers"})," that enables connecting clients to automatically determine\nwhich Pulsar ",(0,i.jsx)(s.a,{href:"#cluster",children:"cluster"})," is responsible for a ",(0,i.jsx)(s.a,{href:"#topic",children:"topic"})," (and thus where message traffic for\nthe topic needs to be routed)."]}),"\n",(0,i.jsx)(s.h4,{id:"service-discovery",children:"Service Discovery"}),"\n",(0,i.jsxs)(s.p,{children:["A mechanism provided by Pulsar that enables connecting clients to use just a single URL to interact\nwith all the ",(0,i.jsx)(s.a,{href:"#broker",children:"brokers"})," in a ",(0,i.jsx)(s.a,{href:"#cluster",children:"cluster"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"broker",children:"Broker"}),"\n",(0,i.jsxs)(s.p,{children:["A stateless component of Pulsar ",(0,i.jsx)(s.a,{href:"#cluster",children:"clusters"})," that runs two other components: an HTTP server\nexposing a REST interface for administration and topic lookup and a ",(0,i.jsx)(s.a,{href:"#dispatcher",children:"dispatcher"})," that\nhandles all message transfers. Pulsar clusters typically consist of multiple brokers."]}),"\n",(0,i.jsx)(s.h4,{id:"dispatcher",children:"Dispatcher"}),"\n",(0,i.jsxs)(s.p,{children:["An asynchronous TCP server used for all data transfers in-and-out a Pulsar ",(0,i.jsx)(s.a,{href:"#broker",children:"broker"}),". The Pulsar\ndispatcher uses a custom binary protocol for all communications."]}),"\n",(0,i.jsx)(s.h3,{id:"storage",children:"Storage"}),"\n",(0,i.jsx)(s.h4,{id:"bookkeeper",children:"BookKeeper"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"http://bookkeeper.apache.org/",children:"Apache BookKeeper"})," is a scalable, low-latency persistent log storage\nservice that Pulsar uses to store data."]}),"\n",(0,i.jsx)(s.h4,{id:"bookie",children:"Bookie"}),"\n",(0,i.jsx)(s.p,{children:"Bookie is the name of an individual BookKeeper server. It is effectively the storage server of Pulsar."}),"\n",(0,i.jsx)(s.h4,{id:"ledger",children:"Ledger"}),"\n",(0,i.jsxs)(s.p,{children:["An append-only data structure in ",(0,i.jsx)(s.a,{href:"#bookkeeper",children:"BookKeeper"})," that is used to persistently store messages in Pulsar ",(0,i.jsx)(s.a,{href:"#topic",children:"topics"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(s.p,{children:"Pulsar Functions are lightweight functions that can consume messages from Pulsar topics, apply custom processing logic, and, if desired, publish results to topics."})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>t});var r=n(96540);const i={},a=r.createContext(i);function o(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);