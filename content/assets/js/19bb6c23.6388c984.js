"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[35845],{45595:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"concepts-replication","title":"Geo Replication","description":"Get a comprehensive understanding of geo-replication mechanisms and patterns in Pulsar.","source":"@site/docs/concepts-replication.md","sourceDirName":".","slug":"/concepts-replication","permalink":"/docs/next/concepts-replication","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/docs/concepts-replication.md","tags":[],"version":"current","frontMatter":{"id":"concepts-replication","title":"Geo Replication","sidebar_label":"Geo Replication","description":"Get a comprehensive understanding of geo-replication mechanisms and patterns in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"Migration","permalink":"/docs/next/concepts-broker-load-balancing-migration"},"next":{"title":"Cluster-level failover","permalink":"/docs/next/concepts-cluster-level-failover"}}');var i=a(74848),s=a(28453);const r={id:"concepts-replication",title:"Geo Replication",sidebar_label:"Geo Replication",description:"Get a comprehensive understanding of geo-replication mechanisms and patterns in Pulsar."},o=void 0,c={},l=[{value:"Replication mechanisms",id:"replication-mechanisms",level:2},{value:"Asynchronous geo-replication in Pulsar",id:"asynchronous-geo-replication-in-pulsar",level:3},{value:"Synchronous geo-replication via BookKeeper",id:"synchronous-geo-replication-via-bookkeeper",level:3},{value:"Replication patterns",id:"replication-patterns",level:2},{value:"Full-mesh replication",id:"full-mesh-replication",level:3},{value:"Active-active replication",id:"active-active-replication",level:3},{value:"Aggregation replication",id:"aggregation-replication",level:3}];function p(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Regardless of industries, when an unforeseen event occurs and brings day-to-day operations to a halt, an organization needs a well-prepared disaster recovery plan to quickly restore service to clients. However, a disaster recovery plan usually requires a multi-datacenter deployment with geographically dispersed data centers. Such a multi-datacenter deployment requires a geo-replication mechanism to provide additional redundancy in case a data center fails."}),"\n",(0,i.jsx)(t.p,{children:"Pulsar's geo-replication mechanism is typically used for disaster recovery, enabling the replication of persistently stored message data across multiple data centers. For instance, your application is publishing data in one region and you would like to process it for consumption in other regions. With Pulsar's geo-replication mechanism, messages can be produced and consumed in different geo-locations."}),"\n",(0,i.jsxs)(t.p,{children:["The diagram below illustrates the process of ",(0,i.jsx)(t.a,{href:"/docs/next/administration-geo",children:"geo-replication"}),". Whenever three producers (P1, P2 and P3) respectively publish messages to the T1 topic in three clusters, those messages are instantly replicated across clusters. Once the messages are replicated, two consumers (C1 and C2) can consume those messages from their clusters."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Geo-replication example with full-mesh pattern in Pulsar",src:a(57742).A+"",width:"1260",height:"614"})}),"\n",(0,i.jsx)(t.h2,{id:"replication-mechanisms",children:"Replication mechanisms"}),"\n",(0,i.jsx)(t.p,{children:"The geo-replication mechanism can be categorized into synchronous geo-replication and asynchronous geo-replication strategies. Pulsar supports both replication mechanisms."}),"\n",(0,i.jsx)(t.h3,{id:"asynchronous-geo-replication-in-pulsar",children:"Asynchronous geo-replication in Pulsar"}),"\n",(0,i.jsx)(t.p,{children:"An asynchronous geo-replicated cluster is composed of multiple physical clusters set up in different data centers. Messages produced on a Pulsar topic are first persisted to the local cluster and then replicated asynchronously to the remote clusters by brokers."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Example of asynchronous geo-replication mechanism in Pulsar",src:a(41573).A+"",width:"1100",height:"830"})}),"\n",(0,i.jsx)(t.p,{children:"In normal cases, when there are no connectivity issues, messages are replicated immediately, at the same time as they are dispatched to local consumers. Typically, end-to-end delivery latency is defined by the network round-trip time (RTT) between the data centers. Applications can create producers and consumers in any of the clusters, even when the remote clusters are not reachable (for example, during a network partition)."}),"\n",(0,i.jsx)(t.p,{children:"Asynchronous geo-replication provides lower latency but may result in weaker consistency guarantees due to the potential replication lag that some data hasn't been replicated."}),"\n",(0,i.jsx)(t.h3,{id:"synchronous-geo-replication-via-bookkeeper",children:"Synchronous geo-replication via BookKeeper"}),"\n",(0,i.jsx)(t.p,{children:"In synchronous geo-replication, data is synchronously replicated to multiple data centers and the client has to wait for an acknowledgment from the other data centers. As illustrated below, when the client issues a write request to one cluster, the written data will be replicated to the other two data centers. The write request is only acknowledged to the client when the majority of data centers (in this example, at least 2 data centers) have acknowledged that the write has been persisted."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Example of synchronous geo-replication mechanism in Pulsar",src:a(49838).A+"",width:"980",height:"830"})}),"\n",(0,i.jsx)(t.p,{children:"Synchronous geo-replication in Pulsar is achieved by BookKeeper. A synchronous geo-replicated cluster consists of a cluster of bookies and a cluster of brokers that run in multiple data centers, and a global Zookeeper installation (a ZooKeeper ensemble is running across multiple data centers). You need to configure a BookKeeper region-aware placement policy to store data across multiple data centers and guarantee availability constraints on writes."}),"\n",(0,i.jsx)(t.p,{children:"Synchronous geo-replication provides the highest availability and also guarantees stronger data consistency between different data centers. However, your applications have to pay an extra latency penalty across data centers."}),"\n",(0,i.jsx)(t.h2,{id:"replication-patterns",children:"Replication patterns"}),"\n",(0,i.jsx)(t.p,{children:"Pulsar provides a great degree of flexibility for customizing your replication strategy. You can set up different replication patterns to serve your replication strategy for an application between multiple data centers."}),"\n",(0,i.jsx)(t.p,{children:"Pulsar supports the following replication patterns:"}),"\n",(0,i.jsx)(t.h3,{id:"full-mesh-replication",children:"Full-mesh replication"}),"\n",(0,i.jsxs)(t.p,{children:["Using full-mesh replication and applying the ",(0,i.jsx)(t.a,{href:"/docs/next/administration-geo#selective-replication",children:"selective message replication"}),", you can customize your replication strategies and topologies between any number of data centers."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Example of full-mesh replication pattern in Pulsar",src:a(57742).A+"",width:"1260",height:"614"})}),"\n",(0,i.jsx)(t.h3,{id:"active-active-replication",children:"Active-active replication"}),"\n",(0,i.jsx)(t.p,{children:"Active-active replication is a variation of full-mesh replication, with only two data centers. Producers can run at any data center to produce messages, and consumers can consume all messages from all data centers."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Example of active-active replication pattern in Pulsar",src:a(1236).A+"",width:"1042",height:"643"})}),"\n",(0,i.jsxs)(t.p,{children:["For how to use active-active replication to migrate data between clusters, refer to ",(0,i.jsx)(t.a,{href:"/docs/next/administration-geo#migrate-data-between-clusters-using-geo-replication",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"aggregation-replication",children:"Aggregation replication"}),"\n",(0,i.jsx)(t.p,{children:"The aggregation replication pattern is typically used when replicating messages from the edge to the cloud. For example, assume you have 3 clusters in 3 fronting data centers and one aggregated cluster in a central data center, and you want to replicate messages from multiple fronting data centers to the central data center for aggregation purposes. You can then create an individual namespace for the topics used by each fronting data center and assign the aggregated data center to those namespaces."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Example of aggregation replication pattern in Pulsar",src:a(41551).A+"",width:"1020",height:"528"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},1236:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/active-active-replication-793ab74d71125d28d47a15d3f48d6f48.svg"},41551:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/aggregation-replication-f0f1bb40b2515b97a150d944e99b4cfe.svg"},57742:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/full-mesh-replication-6fd4bcbb7413ea942b9eb338cd8b050a.svg"},41573:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/geo-replication-async-782b820f9a56bedf610ed91885714780.svg"},49838:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/geo-replication-sync-569a3c1ef3dd2e0d73adfdb91b1e6c48.svg"},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var n=a(96540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);