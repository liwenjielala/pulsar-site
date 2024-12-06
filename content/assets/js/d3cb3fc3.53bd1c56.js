"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[98970],{53347:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"concepts-architecture-overview","title":"Architecture Overview","description":"At the highest level, a Pulsar instance is composed of one or more Pulsar clusters. Clusters within an instance can replicate data amongst themselves.","source":"@site/versioned_docs/version-2.3.1/concepts-architecture-overview.md","sourceDirName":".","slug":"/concepts-architecture-overview","permalink":"/docs/2.3.1/concepts-architecture-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.1/concepts-architecture-overview.md","tags":[],"version":"2.3.1","frontMatter":{"id":"concepts-architecture-overview","title":"Architecture Overview","sidebar_label":"Architecture"},"sidebar":"docsSidebar","previous":{"title":"Messaging","permalink":"/docs/2.3.1/concepts-messaging"},"next":{"title":"Clients","permalink":"/docs/2.3.1/concepts-clients"}}');var t=r(74848),o=r(28453);const a={id:"concepts-architecture-overview",title:"Architecture Overview",sidebar_label:"Architecture"},i=void 0,l={},c=[{value:"Brokers",id:"brokers",level:2},{value:"Clusters",id:"clusters",level:2},{value:"Metadata store",id:"metadata-store",level:2},{value:"Configuration store",id:"configuration-store",level:2},{value:"Persistent storage",id:"persistent-storage",level:2},{value:"Apache BookKeeper",id:"apache-bookkeeper",level:3},{value:"Ledgers",id:"ledgers",level:3},{value:"Ledger read consistency",id:"ledger-read-consistency",level:4},{value:"Managed ledgers",id:"managed-ledgers",level:4},{value:"Journal storage",id:"journal-storage",level:3},{value:"Pulsar proxy",id:"pulsar-proxy",level:2},{value:"Pulsar proxy docs",id:"pulsar-proxy-docs",level:4},{value:"Service discovery",id:"service-discovery",level:2}];function d(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["At the highest level, a Pulsar instance is composed of one or more Pulsar clusters. Clusters within an instance can ",(0,t.jsx)(s.a,{href:"/docs/2.3.1/concepts-replication",children:"replicate"})," data amongst themselves."]}),"\n",(0,t.jsx)(s.p,{children:"In a Pulsar cluster:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"One or more brokers handles and load balances incoming messages from producers, dispatches messages to consumers, communicates with the Pulsar configuration store to handle various coordination tasks, stores messages in BookKeeper instances (aka bookies), relies on a cluster-specific ZooKeeper cluster for certain tasks, and more."}),"\n",(0,t.jsxs)(s.li,{children:["A BookKeeper cluster consisting of one or more bookies handles ",(0,t.jsx)(s.a,{href:"#persistent-storage",children:"persistent storage"})," of messages."]}),"\n",(0,t.jsx)(s.li,{children:"A ZooKeeper cluster specific to that cluster handles coordination tasks between Pulsar clusters."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The diagram below provides an illustration of a Pulsar cluster:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Pulsar architecture diagram",src:r(42702).A+"",width:"1181",height:"781"})}),"\n",(0,t.jsxs)(s.p,{children:["At the broader instance level, an instance-wide ZooKeeper cluster called the configuration store handles coordination tasks involving multiple clusters, for example ",(0,t.jsx)(s.a,{href:"/docs/2.3.1/concepts-replication",children:"geo-replication"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"brokers",children:"Brokers"}),"\n",(0,t.jsx)(s.p,{children:"The Pulsar message broker is a stateless component that's primarily responsible for running two other components:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["An HTTP server that exposes a ",(0,t.jsx)(s.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API for both administrative tasks and ",(0,t.jsx)(s.a,{href:"/docs/2.3.1/concepts-clients#client-setup-phase",children:"topic lookup"})," for producers and consumers. The producers connect to the brokers to publish messages and the consumers connect to the brokers to consume the messages."]}),"\n",(0,t.jsxs)(s.li,{children:["A dispatcher, which is an asynchronous TCP server over a custom ",(0,t.jsx)(s.a,{href:"/docs/2.3.1/developing-binary-protocol",children:"binary protocol"})," used for all data transfers"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Messages are typically dispatched out of a ",(0,t.jsx)(s.a,{href:"#managed-ledgers",children:"managed ledger"})," cache for the sake of performance, ",(0,t.jsx)(s.em,{children:"unless"})," the backlog exceeds the cache size. If the backlog grows too large for the cache, the broker will start reading entries from BookKeeper."]}),"\n",(0,t.jsxs)(s.p,{children:["Finally, to support geo-replication on global topics, the broker manages replicators that tail the entries published in the local region and republish them to the remote region using the Pulsar ",(0,t.jsx)(s.a,{href:"/docs/2.3.1/client-libraries-java",children:"Java client library"}),"."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["For a guide to managing Pulsar brokers, see the ",(0,t.jsx)(s.a,{href:"/docs/2.3.1/admin-api-brokers",children:"brokers"})," guide."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"clusters",children:"Clusters"}),"\n",(0,t.jsxs)(s.p,{children:["A Pulsar instance consists of one or more Pulsar ",(0,t.jsx)(s.em,{children:"clusters"}),". Clusters, in turn, consist of:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["One or more Pulsar ",(0,t.jsx)(s.a,{href:"#brokers",children:"brokers"})]}),"\n",(0,t.jsx)(s.li,{children:"A ZooKeeper quorum used for cluster-level configuration and coordination"}),"\n",(0,t.jsxs)(s.li,{children:["An ensemble of bookies used for ",(0,t.jsx)(s.a,{href:"#persistent-storage",children:"persistent storage"})," of messages"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Clusters can replicate amongst themselves using ",(0,t.jsx)(s.a,{href:"/docs/2.3.1/concepts-replication",children:"geo-replication"}),"."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["For a guide to managing Pulsar clusters, see the ",(0,t.jsx)(s.a,{href:"/docs/2.3.1/admin-api-clusters",children:"clusters"})," guide."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"metadata-store",children:"Metadata store"}),"\n",(0,t.jsxs)(s.p,{children:["The Pulsar metadata store maintains all the metadata of a Pulsar cluster, such as topic metadata, schema, broker load data, and so on. Pulsar uses ",(0,t.jsx)(s.a,{href:"https://zookeeper.apache.org/",children:"Apache ZooKeeper"})," for metadata storage, cluster configuration, and coordination. The Pulsar metadata store can be deployed on a separate ZooKeeper cluster or deployed on an existing ZooKeeper cluster. You can use one ZooKeeper cluster for both Pulsar metadata store and BookKeeper metadata store. If you want to deploy Pulsar brokers connected to an existing BookKeeper cluster, you need to deploy separate ZooKeeper clusters for Pulsar metadata store and BookKeeper metadata store respectively."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["Pulsar also supports more metadata backend services, including ",(0,t.jsx)(s.a,{href:"https://etcd.io/",children:"ETCD"})," and ",(0,t.jsx)(s.a,{href:"http://rocksdb.org/",children:"RocksDB"})," (for standalone Pulsar only)."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"In a Pulsar instance:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"A configuration store quorum stores configuration for tenants, namespaces, and other entities that need to be globally consistent."}),"\n",(0,t.jsx)(s.li,{children:"Each cluster has its own local ZooKeeper ensemble that stores cluster-specific configuration and coordination such as which brokers are responsible for which topics as well as ownership metadata, broker load reports, BookKeeper ledger metadata, and more."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"configuration-store",children:"Configuration store"}),"\n",(0,t.jsx)(s.p,{children:"The configuration store maintains all the configurations of a Pulsar instance, such as clusters, tenants, namespaces, partitioned topic related configurations, and so on. A Pulsar instance can have a single local cluster, multiple local clusters, or multiple cross-region clusters. Consequently, the configuration store can share the configurations across multiple clusters under a Pulsar instance. The configuration store can be deployed on a separate ZooKeeper cluster or deployed on an existing ZooKeeper cluster."}),"\n",(0,t.jsx)(s.h2,{id:"persistent-storage",children:"Persistent storage"}),"\n",(0,t.jsx)(s.p,{children:"Pulsar provides guaranteed message delivery for applications. If a message successfully reaches a Pulsar broker, it will be delivered to its intended target."}),"\n",(0,t.jsxs)(s.p,{children:["This guarantee requires that non-acknowledged messages are stored in a durable manner until they can be delivered to and acknowledged by consumers. This mode of messaging is commonly called ",(0,t.jsx)(s.em,{children:"persistent messaging"}),". In Pulsar, N copies of all messages are stored and synced on disk, for example 4 copies across two servers with mirrored ",(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/RAID",children:"RAID"})," volumes on each server."]}),"\n",(0,t.jsx)(s.h3,{id:"apache-bookkeeper",children:"Apache BookKeeper"}),"\n",(0,t.jsxs)(s.p,{children:["Pulsar uses a system called ",(0,t.jsx)(s.a,{href:"http://bookkeeper.apache.org/",children:"Apache BookKeeper"})," for persistent message storage. BookKeeper is a distributed ",(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Write-ahead_logging",children:"write-ahead log"})," (WAL) system that provides a number of crucial advantages for Pulsar:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["It enables Pulsar to utilize many independent logs, called ",(0,t.jsx)(s.a,{href:"#ledgers",children:"ledgers"}),". Multiple ledgers can be created for topics over time."]}),"\n",(0,t.jsx)(s.li,{children:"It offers very efficient storage for sequential data that handles entry replication."}),"\n",(0,t.jsx)(s.li,{children:"It guarantees read consistency of ledgers in the presence of various system failures."}),"\n",(0,t.jsx)(s.li,{children:"It offers even distribution of I/O across bookies."}),"\n",(0,t.jsx)(s.li,{children:"It's horizontally scalable in both capacity and throughput. Capacity can be immediately increased by adding more bookies to a cluster."}),"\n",(0,t.jsx)(s.li,{children:"Bookies are designed to handle thousands of ledgers with concurrent reads and writes. By using multiple disk devices---one for journal and another for general storage--bookies are able to isolate the effects of read operations from the latency of ongoing write operations."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["In addition to message data, ",(0,t.jsx)(s.em,{children:"cursors"})," are also persistently stored in BookKeeper. Cursors are ",(0,t.jsx)(s.a,{href:"/docs/2.3.1/reference-terminology#subscription",children:"subscription"})," positions for ",(0,t.jsx)(s.a,{href:"/docs/2.3.1/reference-terminology#consumer",children:"consumers"}),". BookKeeper enables Pulsar to store consumer position in a scalable fashion."]}),"\n",(0,t.jsxs)(s.p,{children:["At the moment, Pulsar supports persistent message storage. This accounts for the ",(0,t.jsx)(s.code,{children:"persistent"})," in all topic names. Here's an example:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-http",children:"\npersistent://my-tenant/my-namespace/my-topic\n\n"})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["Pulsar also supports ephemeral (",(0,t.jsx)(s.a,{href:"/docs/2.3.1/concepts-messaging#non-persistent-topics",children:"non-persistent"}),") message storage."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"You can see an illustration of how brokers and bookies interact in the diagram below:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Brokers and bookies",src:r(90798).A+"",width:"947",height:"560"})}),"\n",(0,t.jsx)(s.h3,{id:"ledgers",children:"Ledgers"}),"\n",(0,t.jsx)(s.p,{children:"A ledger is an append-only data structure with a single writer that is assigned to multiple BookKeeper storage nodes, or bookies. Ledger entries are replicated to multiple bookies. Ledgers themselves have very simple semantics:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"A Pulsar broker can create a ledger, append entries to the ledger, and close the ledger."}),"\n",(0,t.jsx)(s.li,{children:"After the ledger has been closed---either explicitly or because the writer process crashed---it can then be opened only in read-only mode."}),"\n",(0,t.jsx)(s.li,{children:"Finally, when entries in the ledger are no longer needed, the whole ledger can be deleted from the system (across all bookies)."}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"ledger-read-consistency",children:"Ledger read consistency"}),"\n",(0,t.jsx)(s.p,{children:"The main strength of Bookkeeper is that it guarantees read consistency in ledgers in the presence of failures. Since the ledger can only be written to by a single process, that process is free to append entries very efficiently, without need to obtain consensus. After a failure, the ledger will go through a recovery process that will finalize the state of the ledger and establish which entry was last committed to the log. After that point, all readers of the ledger are guaranteed to see the exact same content."}),"\n",(0,t.jsx)(s.h4,{id:"managed-ledgers",children:"Managed ledgers"}),"\n",(0,t.jsxs)(s.p,{children:["Given that Bookkeeper ledgers provide a single log abstraction, a library was developed on top of the ledger called the ",(0,t.jsx)(s.em,{children:"managed ledger"})," that represents the storage layer for a single topic. A managed ledger represents the abstraction of a stream of messages with a single writer that keeps appending at the end of the stream and multiple cursors that are consuming the stream, each with its own associated position."]}),"\n",(0,t.jsx)(s.p,{children:"Internally, a single managed ledger uses multiple BookKeeper ledgers to store the data. There are two reasons to have multiple ledgers:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"After a failure, a ledger is no longer writable and a new one needs to be created."}),"\n",(0,t.jsx)(s.li,{children:"A ledger can be deleted when all cursors have consumed the messages it contains. This allows for periodic rollover of ledgers."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"journal-storage",children:"Journal storage"}),"\n",(0,t.jsxs)(s.p,{children:["In BookKeeper, ",(0,t.jsx)(s.em,{children:"journal"})," files contain BookKeeper transaction logs. Before making an update to a ",(0,t.jsx)(s.a,{href:"#ledgers",children:"ledger"}),", a bookie needs to ensure that a transaction describing the update is written to persistent (non-volatile) storage. A new journal file is created once the bookie starts or the older journal file reaches the journal file size threshold (configured using the ",(0,t.jsx)(s.a,{href:"/docs/2.3.1/reference-configuration#bookkeeper-journalMaxSizeMB",children:(0,t.jsx)(s.code,{children:"journalMaxSizeMB"})})," parameter)."]}),"\n",(0,t.jsx)(s.h2,{id:"pulsar-proxy",children:"Pulsar proxy"}),"\n",(0,t.jsxs)(s.p,{children:["One way for Pulsar clients to interact with a Pulsar ",(0,t.jsx)(s.a,{href:"#clusters",children:"cluster"})," is by connecting to Pulsar message ",(0,t.jsx)(s.a,{href:"#brokers",children:"brokers"})," directly. In some cases, however, this kind of direct connection is either infeasible or undesirable because the client doesn't have direct access to broker addresses. If you're running Pulsar in a cloud environment or on ",(0,t.jsx)(s.a,{href:"https://kubernetes.io",children:"Kubernetes"})," or an analogous platform, for example, then direct client connections to brokers are likely not possible."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"Pulsar proxy"})," provides a solution to this problem by acting as a single gateway for all of the brokers in a cluster. If you run the Pulsar proxy (which, again, is optional), all client connections with the Pulsar cluster will flow through the proxy rather than communicating with brokers."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"For the sake of performance and fault tolerance, you can run as many instances of the Pulsar proxy as you'd like."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Architecturally, the Pulsar proxy gets all the information it requires from ZooKeeper. When starting the proxy on a machine, you only need to provide metadata store connection strings for the cluster-specific and instance-wide configuration store clusters. Here's an example:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"\n$ cd /path/to/pulsar/directory\n$ bin/pulsar proxy \\\n  --metadata-store zk:my-zk-1:2181,my-zk-2:2181,my-zk-3:2181 \\\n  --configuration-metadata-store zk:my-zk-1:2181,my-zk-2:2181,my-zk-3:2181\n\n"})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.h4,{id:"pulsar-proxy-docs",children:"Pulsar proxy docs"}),"\n",(0,t.jsxs)(s.p,{children:["For documentation on using the Pulsar proxy, see the ",(0,t.jsx)(s.a,{href:"/docs/2.3.1/administration-proxy",children:"Pulsar proxy admin documentation"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Some important things to know about the Pulsar proxy:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Connecting clients don't need to provide ",(0,t.jsx)(s.em,{children:"any"})," specific configuration to use the Pulsar proxy. You won't need to update the client configuration for existing applications beyond updating the IP used for the service URL (for example if you're running a load balancer over the Pulsar proxy)."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/docs/2.3.1/security-tls-transport",children:"TLS encryption"})," and ",(0,t.jsx)(s.a,{href:"/docs/2.3.1/security-tls-authentication",children:"authentication"})," is supported by the Pulsar proxy"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"service-discovery",children:"Service discovery"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/2.3.1/concepts-clients",children:"Clients"})," connecting to Pulsar brokers need to be able to communicate with an entire Pulsar instance using a single URL."]}),"\n",(0,t.jsxs)(s.p,{children:["You can use your own service discovery system if you'd like. If you use your own system, there is just one requirement: when a client performs an HTTP request to an endpoint, such as ",(0,t.jsx)(s.code,{children:"http://pulsar.us-west.example.com:8080"}),", the client needs to be redirected to ",(0,t.jsx)(s.em,{children:"some"})," active broker in the desired cluster, whether via DNS, an HTTP or IP redirect, or some other means."]}),"\n",(0,t.jsx)(s.p,{children:"The diagram below illustrates Pulsar service discovery:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"alt-text",src:r(14663).A+"",width:"1087",height:"1198"})}),"\n",(0,t.jsxs)(s.p,{children:["In this diagram, the Pulsar cluster is addressable via a single DNS name: ",(0,t.jsx)(s.code,{children:"pulsar-cluster.acme.com"}),". A ",(0,t.jsx)(s.a,{href:"/docs/2.3.1/client-libraries-python",children:"Python client"}),", for example, could access this Pulsar cluster like this:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"\nfrom pulsar import Client\n\nclient = Client('pulsar://pulsar-cluster.acme.com:6650')\n\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"In Pulsar, each topic is handled by only one broker. Initial requests from a client to read, update or delete a topic are sent to a broker that may not be the topic owner. If the broker cannot handle the request for this topic, it redirects the request to the appropriate broker."})})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},90798:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/broker-bookie-52b99fa950195b8ab89bff61089fd892.png"},14663:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/pulsar-service-discovery-82df27ebfa89540d04bf34dfa4fa1b8d.png"},42702:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/pulsar-system-architecture-6890df6b0c59a065a56492659ba87933.png"},28453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>i});var n=r(96540);const t={},o=n.createContext(t);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);