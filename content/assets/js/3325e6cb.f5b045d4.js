"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[70028],{250:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"administration-zk-bk","title":"ZooKeeper and BookKeeper administration","description":"Pulsar relies on two external systems for essential tasks:","source":"@site/versioned_docs/version-2.10.x/administration-zk-bk.md","sourceDirName":".","slug":"/administration-zk-bk","permalink":"/docs/2.10.x/administration-zk-bk","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/administration-zk-bk.md","tags":[],"version":"2.10.x","frontMatter":{"id":"administration-zk-bk","title":"ZooKeeper and BookKeeper administration","sidebar_label":"ZooKeeper and BookKeeper","original_id":"administration-zk-bk"},"sidebar":"docsSidebar","previous":{"title":"Monitor","permalink":"/docs/2.10.x/deploy-monitoring"},"next":{"title":"Configure metadata store","permalink":"/docs/2.10.x/administration-metadata-store"}}');var r=n(74848),i=n(28453);const t={id:"administration-zk-bk",title:"ZooKeeper and BookKeeper administration",sidebar_label:"ZooKeeper and BookKeeper",original_id:"administration-zk-bk"},a=void 0,l={},c=[{value:"ZooKeeper",id:"zookeeper",level:2},{value:"Deploy local ZooKeeper",id:"deploy-local-zookeeper",level:3},{value:"Deploy configuration store",id:"deploy-configuration-store",level:3},{value:"Single-cluster Pulsar instance",id:"single-cluster-pulsar-instance",level:4},{value:"Multi-cluster Pulsar instance",id:"multi-cluster-pulsar-instance",level:4},{value:"Start the service",id:"start-the-service",level:5},{value:"ZooKeeper configuration",id:"zookeeper-configuration",level:3},{value:"Configure batching operations",id:"configure-batching-operations",level:4},{value:"BookKeeper",id:"bookkeeper",level:2},{value:"Hardware requirements",id:"hardware-requirements",level:3},{value:"Configure BookKeeper",id:"configure-bookkeeper",level:3},{value:"Deploy BookKeeper",id:"deploy-bookkeeper",level:3},{value:"Start bookies manually",id:"start-bookies-manually",level:3},{value:"Decommission bookies cleanly",id:"decommission-bookies-cleanly",level:3},{value:"BookKeeper persistence policies",id:"bookkeeper-persistence-policies",level:2},{value:"Set persistence policies",id:"set-persistence-policies",level:3},{value:"Pulsar-admin",id:"pulsar-admin",level:4},{value:"REST API",id:"rest-api",level:4},{value:"Java",id:"java",level:4},{value:"List persistence policies",id:"list-persistence-policies",level:3},{value:"Pulsar-admin",id:"pulsar-admin-1",level:4},{value:"REST API",id:"rest-api-1",level:4},{value:"Java",id:"java-1",level:4},{value:"How Pulsar uses ZooKeeper and BookKeeper",id:"how-pulsar-uses-zookeeper-and-bookkeeper",level:2}];function d(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:"Pulsar relies on two external systems for essential tasks:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"https://zookeeper.apache.org/",children:"ZooKeeper"})," is responsible for a wide variety of configuration-related and coordination-related tasks."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"http://bookkeeper.apache.org/",children:"BookKeeper"})," is responsible for ",(0,r.jsx)(o.a,{href:"/docs/2.10.x/concepts-architecture-overview#persistent-storage",children:"persistent storage"})," of message data."]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["ZooKeeper and BookKeeper are both open-source ",(0,r.jsx)(o.a,{href:"https://www.apache.org/",children:"Apache"})," projects."]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["Skip to the ",(0,r.jsx)(o.a,{href:"#how-pulsar-uses-zookeeper-and-bookkeeper",children:"How Pulsar uses ZooKeeper and BookKeeper"})," section below for a more schematic explanation of the role of these two systems in Pulsar."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"zookeeper",children:"ZooKeeper"}),"\n",(0,r.jsx)(o.p,{children:"Each Pulsar instance relies on two separate ZooKeeper quorums."}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"#deploy-local-zookeeper",children:"Local ZooKeeper"})," operates at the cluster level and provides cluster-specific configuration management and coordination. Each Pulsar cluster needs to have a dedicated ZooKeeper cluster."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"#deploy-configuration-store",children:"Configuration Store"})," operates at the instance level and provides configuration management for the entire system (and thus across clusters). An independent cluster of machines or the same machines that local ZooKeeper uses can provide the configuration store quorum."]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"deploy-local-zookeeper",children:"Deploy local ZooKeeper"}),"\n",(0,r.jsx)(o.p,{children:"ZooKeeper manages a variety of essential coordination-related and configuration-related tasks for Pulsar."}),"\n",(0,r.jsxs)(o.p,{children:["To deploy a Pulsar instance, you need to stand up one local ZooKeeper cluster ",(0,r.jsx)(o.em,{children:"per Pulsar cluster"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["To begin, add all ZooKeeper servers to the quorum configuration specified in the ",(0,r.jsx)(o.a,{href:"/docs/2.10.x/reference-configuration#zookeeper",children:(0,r.jsx)(o.code,{children:"conf/zookeeper.conf"})})," file. Add a ",(0,r.jsx)(o.code,{children:"server.N"})," line for each node in the cluster to the configuration, where ",(0,r.jsx)(o.code,{children:"N"})," is the number of the ZooKeeper node. The following is an example for a three-node cluster:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-properties",children:"\nserver.1=zk1.us-west.example.com:2888:3888\nserver.2=zk2.us-west.example.com:2888:3888\nserver.3=zk3.us-west.example.com:2888:3888\n\n"})}),"\n",(0,r.jsxs)(o.p,{children:["On each host, you need to specify the node ID in ",(0,r.jsx)(o.code,{children:"myid"})," file of each node, which is in ",(0,r.jsx)(o.code,{children:"data/zookeeper"})," folder of each server by default (you can change the file location via the ",(0,r.jsx)(o.a,{href:"/docs/2.10.x/reference-configuration#zookeeper-dataDir",children:(0,r.jsx)(o.code,{children:"dataDir"})})," parameter)."]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["See the ",(0,r.jsx)(o.a,{href:"https://zookeeper.apache.org/doc/r3.4.10/zookeeperAdmin.html#sc_zkMulitServerSetup",children:"Multi-server setup guide"})," in the ZooKeeper documentation for detailed information on ",(0,r.jsx)(o.code,{children:"myid"})," and more."]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["On a ZooKeeper server at ",(0,r.jsx)(o.code,{children:"zk1.us-west.example.com"}),", for example, you can set the ",(0,r.jsx)(o.code,{children:"myid"})," value like this:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-shell",children:"\n$ mkdir -p data/zookeeper\n$ echo 1 > data/zookeeper/myid\n\n"})}),"\n",(0,r.jsxs)(o.p,{children:["On ",(0,r.jsx)(o.code,{children:"zk2.us-west.example.com"})," the command is ",(0,r.jsx)(o.code,{children:"echo 2 > data/zookeeper/myid"})," and so on."]}),"\n",(0,r.jsxs)(o.p,{children:["Once you add each server to the ",(0,r.jsx)(o.code,{children:"zookeeper.conf"})," configuration and each server has the appropriate ",(0,r.jsx)(o.code,{children:"myid"})," entry, you can start ZooKeeper on all hosts (in the background, using nohup) with the ",(0,r.jsx)(o.a,{href:"/docs/2.10.x/reference-cli-tools#pulsar-daemon",children:(0,r.jsx)(o.code,{children:"pulsar-daemon"})})," CLI tool:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-shell",children:"\n$ bin/pulsar-daemon start zookeeper\n\n"})}),"\n",(0,r.jsx)(o.h3,{id:"deploy-configuration-store",children:"Deploy configuration store"}),"\n",(0,r.jsxs)(o.p,{children:["The ZooKeeper cluster configured and started up in the section above is a ",(0,r.jsx)(o.em,{children:"local"})," ZooKeeper cluster that you can use to manage a single Pulsar cluster. In addition to a local cluster, however, a full Pulsar instance also requires a configuration store for handling some instance-level configuration and coordination tasks."]}),"\n",(0,r.jsxs)(o.p,{children:["If you deploy a ",(0,r.jsx)(o.a,{href:"#single-cluster-pulsar-instance",children:"single-cluster"})," instance, you do not need a separate cluster for the configuration store. If, however, you deploy a ",(0,r.jsx)(o.a,{href:"#multi-cluster-pulsar-instance",children:"multi-cluster"})," instance, you need to stand up a separate ZooKeeper cluster for configuration tasks."]}),"\n",(0,r.jsx)(o.h4,{id:"single-cluster-pulsar-instance",children:"Single-cluster Pulsar instance"}),"\n",(0,r.jsx)(o.p,{children:"If your Pulsar instance consists of just one cluster, then you can deploy a configuration store on the same machines as the local ZooKeeper quorum but run on different TCP ports."}),"\n",(0,r.jsxs)(o.p,{children:["To deploy a ZooKeeper configuration store in a single-cluster instance, add the same ZooKeeper servers that the local quorum uses to the configuration file in ",(0,r.jsx)(o.a,{href:"/docs/2.10.x/reference-configuration#configuration-store",children:(0,r.jsx)(o.code,{children:"conf/global_zookeeper.conf"})})," using the same method for ",(0,r.jsx)(o.a,{href:"#local-zookeeper",children:"local ZooKeeper"}),", but make sure to use a different port (2181 is the default for ZooKeeper). The following is an example that uses port 2184 for a three-node ZooKeeper cluster:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-properties",children:"\nclientPort=2184\nserver.1=zk1.us-west.example.com:2185:2186\nserver.2=zk2.us-west.example.com:2185:2186\nserver.3=zk3.us-west.example.com:2185:2186\n\n"})}),"\n",(0,r.jsxs)(o.p,{children:["As before, create the ",(0,r.jsx)(o.code,{children:"myid"})," files for each server on ",(0,r.jsx)(o.code,{children:"data/global-zookeeper/myid"}),"."]}),"\n",(0,r.jsx)(o.h4,{id:"multi-cluster-pulsar-instance",children:"Multi-cluster Pulsar instance"}),"\n",(0,r.jsx)(o.p,{children:"When you deploy a global Pulsar instance, with clusters distributed across different geographical regions, the configuration store serves as a highly available and strongly consistent metadata store that can tolerate failures and partitions spanning whole regions."}),"\n",(0,r.jsx)(o.p,{children:"The key here is to make sure the ZK quorum members are spread across at least 3 regions and that other regions run as observers."}),"\n",(0,r.jsx)(o.p,{children:"Again, given the very low expected load on the configuration store servers, you can share the same hosts used for the local ZooKeeper quorum."}),"\n",(0,r.jsxs)(o.p,{children:["For example, you can assume a Pulsar instance with the following clusters ",(0,r.jsx)(o.code,{children:"us-west"}),", ",(0,r.jsx)(o.code,{children:"us-east"}),", ",(0,r.jsx)(o.code,{children:"us-central"}),", ",(0,r.jsx)(o.code,{children:"eu-central"}),", ",(0,r.jsx)(o.code,{children:"ap-south"}),". Also you can assume, each cluster has its own local ZK servers named such as"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"\nzk[1-3].${CLUSTER}.example.com\n\n"})}),"\n",(0,r.jsxs)(o.p,{children:["In this scenario you want to pick the quorum participants from few clusters and let all the others be ZK observers. For example, to form a 7 servers quorum, you can pick 3 servers from ",(0,r.jsx)(o.code,{children:"us-west"}),", 2 from ",(0,r.jsx)(o.code,{children:"us-central"})," and 2 from ",(0,r.jsx)(o.code,{children:"us-east"}),"."]}),"\n",(0,r.jsx)(o.p,{children:"This guarantees that writes to configuration store is possible even if one of these regions is unreachable."}),"\n",(0,r.jsx)(o.p,{children:"The ZK configuration in all the servers looks like:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-properties",children:"\nclientPort=2184\nserver.1=zk1.us-west.example.com:2185:2186\nserver.2=zk2.us-west.example.com:2185:2186\nserver.3=zk3.us-west.example.com:2185:2186\nserver.4=zk1.us-central.example.com:2185:2186\nserver.5=zk2.us-central.example.com:2185:2186\nserver.6=zk3.us-central.example.com:2185:2186:observer\nserver.7=zk1.us-east.example.com:2185:2186\nserver.8=zk2.us-east.example.com:2185:2186\nserver.9=zk3.us-east.example.com:2185:2186:observer\nserver.10=zk1.eu-central.example.com:2185:2186:observer\nserver.11=zk2.eu-central.example.com:2185:2186:observer\nserver.12=zk3.eu-central.example.com:2185:2186:observer\nserver.13=zk1.ap-south.example.com:2185:2186:observer\nserver.14=zk2.ap-south.example.com:2185:2186:observer\nserver.15=zk3.ap-south.example.com:2185:2186:observer\n\n"})}),"\n",(0,r.jsx)(o.p,{children:"Additionally, ZK observers need to have:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-properties",children:"\npeerType=observer\n\n"})}),"\n",(0,r.jsx)(o.h5,{id:"start-the-service",children:"Start the service"}),"\n",(0,r.jsxs)(o.p,{children:["Once your configuration store configuration is in place, you can start up the service using ",(0,r.jsx)(o.a,{href:"/docs/2.10.x/reference-cli-tools#pulsar-daemon",children:(0,r.jsx)(o.code,{children:"pulsar-daemon"})})]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-shell",children:"\n$ bin/pulsar-daemon start configuration-store\n\n"})}),"\n",(0,r.jsx)(o.h3,{id:"zookeeper-configuration",children:"ZooKeeper configuration"}),"\n",(0,r.jsxs)(o.p,{children:["In Pulsar, ZooKeeper configuration is handled by two separate configuration files in the ",(0,r.jsx)(o.code,{children:"conf"})," directory of your Pulsar installation:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["The ",(0,r.jsx)(o.code,{children:"conf/zookeeper.conf"})," file handles the configuration for local ZooKeeper."]}),"\n",(0,r.jsxs)(o.li,{children:["The ",(0,r.jsx)(o.code,{children:"conf/global-zookeeper.conf"})," file handles the configuration for configuration store.\nSee ",(0,r.jsx)(o.a,{href:"/docs/2.10.x/reference-configuration#zookeeper",children:"parameters"})," for more details."]}),"\n"]}),"\n",(0,r.jsx)(o.h4,{id:"configure-batching-operations",children:"Configure batching operations"}),"\n",(0,r.jsx)(o.p,{children:"Using the batching operations reduces the remote procedure call (RPC) traffic between ZooKeeper client and servers. It also reduces the number of write transactions, because each batching operation corresponds to a single ZooKeeper transaction, containing multiple read and write operations."}),"\n",(0,r.jsx)(o.p,{children:"The following figure demonstrates a basic benchmark of batching read/write operations that can be requested to ZooKeeper in one second:"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Zookeeper batching benchmark",src:n(92680).A+"",width:"2364",height:"728"})}),"\n",(0,r.jsxs)(o.p,{children:["To enable batching operations, set the ",(0,r.jsx)(o.a,{href:"/docs/2.10.x/reference-configuration#broker",children:(0,r.jsx)(o.code,{children:"metadataStoreBatchingEnabled"})})," parameter to ",(0,r.jsx)(o.code,{children:"true"})," on the broker side."]}),"\n",(0,r.jsx)(o.h2,{id:"bookkeeper",children:"BookKeeper"}),"\n",(0,r.jsxs)(o.p,{children:["BookKeeper stores all durable messages in Pulsar. BookKeeper is a distributed ",(0,r.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/Write-ahead_logging",children:"write-ahead log"})," WAL system that guarantees read consistency of independent message logs calls ledgers. Individual BookKeeper servers are also called ",(0,r.jsx)(o.em,{children:"bookies"}),"."]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["To manage message persistence, retention, and expiry in Pulsar, refer to ",(0,r.jsx)(o.a,{href:"/docs/2.10.x/cookbooks-retention-expiry",children:"cookbook"}),"."]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"hardware-requirements",children:"Hardware requirements"}),"\n",(0,r.jsx)(o.p,{children:"Bookie hosts store message data on disk. To provide optimal performance, ensure that the bookies have a suitable hardware configuration. The following are two key dimensions of bookie hardware capacity:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Disk I/O capacity read/write"}),"\n",(0,r.jsx)(o.li,{children:"Storage capacity"}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Message entries written to bookies are always synced to disk before returning an acknowledgement to the Pulsar broker by default. To ensure low write latency, BookKeeper is designed to use multiple devices:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["A ",(0,r.jsx)(o.strong,{children:"journal"})," to ensure durability. For sequential writes, it is critical to have fast ",(0,r.jsx)(o.a,{href:"https://linux.die.net/man/2/fsync",children:"fsync"})," operations on bookie hosts. Typically, small and fast ",(0,r.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/Solid-state_drive",children:"solid-state drives"})," (SSDs) should suffice, or ",(0,r.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/Hard_disk_drive",children:"hard disk drives"})," (HDDs) with a ",(0,r.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/RAID",children:"RAID"})," controller and a battery-backed write cache. Both solutions can reach fsync latency of ~0.4 ms."]}),"\n",(0,r.jsxs)(o.li,{children:["A ",(0,r.jsx)(o.strong,{children:"ledger storage device"})," stores data. Writes happen in the background, so write I/O is not a big concern. Reads happen sequentially most of the time and the backlog is drained only in case of consumer drain. To store large amounts of data, a typical configuration involves multiple HDDs with a RAID controller."]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"configure-bookkeeper",children:"Configure BookKeeper"}),"\n",(0,r.jsxs)(o.p,{children:["You can configure BookKeeper bookies using the ",(0,r.jsx)(o.a,{href:"/docs/2.10.x/reference-configuration#bookkeeper",children:(0,r.jsx)(o.code,{children:"conf/bookkeeper.conf"})})," configuration file. When you configure each bookie, ensure that the ",(0,r.jsx)(o.a,{href:"/docs/2.10.x/reference-configuration#bookkeeper-zkServers",children:(0,r.jsx)(o.code,{children:"zkServers"})})," parameter is set to the connection string for local ZooKeeper of the Pulsar cluster."]}),"\n",(0,r.jsxs)(o.p,{children:["The minimum configuration changes required in ",(0,r.jsx)(o.code,{children:"conf/bookkeeper.conf"})," are as follows:"]}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsxs)(o.p,{children:["Set ",(0,r.jsx)(o.code,{children:"journalDirectory"})," and ",(0,r.jsx)(o.code,{children:"ledgerDirectories"})," carefully. It is difficult to change them later."]})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-properties",children:"\n# Change to point to journal disk mount point\njournalDirectory=data/bookkeeper/journal\n\n# Point to ledger storage disk mount point\nledgerDirectories=data/bookkeeper/ledgers\n\n# Point to local ZK quorum\nzkServers=zk1.example.com:2181,zk2.example.com:2181,zk3.example.com:2181\n\n#It is recommended to set this parameter. Otherwise, BookKeeper can't start normally in certain environments (for example, Huawei Cloud).\nadvertisedAddress=\n\n"})}),"\n",(0,r.jsxs)(o.p,{children:["To change the ZooKeeper root path that BookKeeper uses, use ",(0,r.jsx)(o.code,{children:"zkLedgersRootPath=/MY-PREFIX/ledgers"})," instead of ",(0,r.jsx)(o.code,{children:"zkServers=localhost:2181/MY-PREFIX"}),"."]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["For more information about BookKeeper, refer to the official ",(0,r.jsx)(o.a,{href:"http://bookkeeper.apache.org",children:"BookKeeper docs"}),"."]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"deploy-bookkeeper",children:"Deploy BookKeeper"}),"\n",(0,r.jsxs)(o.p,{children:["BookKeeper provides ",(0,r.jsx)(o.a,{href:"/docs/2.10.x/concepts-architecture-overview#persistent-storage",children:"persistent message storage"})," for Pulsar. Each Pulsar broker has its own cluster of bookies. The BookKeeper cluster shares a local ZooKeeper quorum with the Pulsar cluster."]}),"\n",(0,r.jsx)(o.h3,{id:"start-bookies-manually",children:"Start bookies manually"}),"\n",(0,r.jsx)(o.p,{children:"You can start a bookie in the foreground or as a background daemon."}),"\n",(0,r.jsxs)(o.p,{children:["To start a bookie in the foreground, use the ",(0,r.jsx)(o.a,{href:"/docs/2.10.x/reference-cli-tools#bookkeeper",children:(0,r.jsx)(o.code,{children:"bookkeeper"})})," CLI tool:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"\n$ bin/bookkeeper bookie\n\n"})}),"\n",(0,r.jsxs)(o.p,{children:["To start a bookie in the background, use the ",(0,r.jsx)(o.a,{href:"/docs/2.10.x/reference-cli-tools#pulsar-daemon",children:(0,r.jsx)(o.code,{children:"pulsar-daemon"})})," CLI tool:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"\n$ bin/pulsar-daemon start bookie\n\n"})}),"\n",(0,r.jsxs)(o.p,{children:["You can verify whether the bookie works properly with the ",(0,r.jsx)(o.code,{children:"bookiesanity"})," command for the ",(0,r.jsx)(o.a,{href:"/docs/2.10.x/reference-cli-tools#bookkeeper-shell",children:"BookKeeper shell"}),":"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-shell",children:"\n$ bin/bookkeeper shell bookiesanity\n\n"})}),"\n",(0,r.jsx)(o.p,{children:"When you use this command, you create a new ledger on the local bookie, write a few entries, read them back and finally delete the ledger."}),"\n",(0,r.jsx)(o.h3,{id:"decommission-bookies-cleanly",children:"Decommission bookies cleanly"}),"\n",(0,r.jsx)(o.p,{children:"Before you decommission a bookie, you need to check your environment and meet the following requirements."}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Ensure the state of your cluster supports decommissioning the target bookie. Check if ",(0,r.jsx)(o.code,{children:"EnsembleSize &gt;= Write Quorum &gt;= Ack Quorum"})," is ",(0,r.jsx)(o.code,{children:"true"})," with one less bookie."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Ensure the target bookie is listed after using the ",(0,r.jsx)(o.code,{children:"listbookies"})," command."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Ensure that no other process is ongoing (upgrade etc)."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"And then you can decommission bookies safely. To decommission bookies, complete the following steps."}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Log in to the bookie node, check if there are underreplicated ledgers. The decommission command force to replicate the underreplicated ledgers.\n",(0,r.jsx)(o.code,{children:"$ bin/bookkeeper shell listunderreplicated"})]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Stop the bookie by killing the bookie process. Make sure that no liveness/readiness probes setup for the bookies to spin them back up if you deploy it in a Kubernetes environment."}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Run the decommission command."}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["If you have logged in to the node to be decommissioned, you do not need to provide ",(0,r.jsx)(o.code,{children:"-bookieid"}),"."]}),"\n",(0,r.jsxs)(o.li,{children:["If you are running the decommission command for the target bookie node from another bookie node, you should mention the target bookie ID in the arguments for ",(0,r.jsx)(o.code,{children:"-bookieid"}),"\n",(0,r.jsx)(o.code,{children:"$ bin/bookkeeper shell decommissionbookie"}),"\nor\n",(0,r.jsx)(o.code,{children:"$ bin/bookkeeper shell decommissionbookie -bookieid <target bookieid>"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Validate that no ledgers are on the decommissioned bookie.\n",(0,r.jsx)(o.code,{children:"$ bin/bookkeeper shell listledgers -bookieid <target bookieid>"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"You can run the following command to check if the bookie you have decommissioned is listed in the bookies list:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"\n./bookkeeper shell listbookies -rw -h\n./bookkeeper shell listbookies -ro -h\n\n"})}),"\n",(0,r.jsx)(o.h2,{id:"bookkeeper-persistence-policies",children:"BookKeeper persistence policies"}),"\n",(0,r.jsxs)(o.p,{children:["In Pulsar, you can set ",(0,r.jsx)(o.em,{children:"persistence policies"})," at the namespace level, which determines how BookKeeper handles persistent storage of messages. Policies determine four things:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"The number of acks (guaranteed copies) to wait for each ledger entry."}),"\n",(0,r.jsx)(o.li,{children:"The number of bookies to use for a topic."}),"\n",(0,r.jsx)(o.li,{children:"The number of writes to make for each ledger entry."}),"\n",(0,r.jsx)(o.li,{children:"The throttling rate for mark-delete operations."}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"set-persistence-policies",children:"Set persistence policies"}),"\n",(0,r.jsxs)(o.p,{children:["You can set persistence policies for BookKeeper at the ",(0,r.jsx)(o.a,{href:"/docs/2.10.x/reference-terminology#namespace",children:"namespace"})," level."]}),"\n",(0,r.jsx)(o.h4,{id:"pulsar-admin",children:"Pulsar-admin"}),"\n",(0,r.jsxs)(o.p,{children:["Use the ",(0,r.jsx)(o.a,{href:"/docs/2.10.x/pulsar-admin#namespaces-set-persistence",children:(0,r.jsx)(o.code,{children:"set-persistence"})})," subcommand and specify a namespace as well as any policies that you want to apply. The available flags are:"]}),"\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{style:{textAlign:"left"},children:"Flag"}),(0,r.jsx)(o.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(o.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsxs)(o.td,{style:{textAlign:"left"},children:[(0,r.jsx)(o.code,{children:"-a"}),", ",(0,r.jsx)(o.code,{children:"--bookkeeper-ack-quorum"})]}),(0,r.jsx)(o.td,{style:{textAlign:"left"},children:"The number of acks (guaranteed copies) to wait on for each entry"}),(0,r.jsx)(o.td,{style:{textAlign:"left"},children:"0"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsxs)(o.td,{style:{textAlign:"left"},children:[(0,r.jsx)(o.code,{children:"-e"}),", ",(0,r.jsx)(o.code,{children:"--bookkeeper-ensemble"})]}),(0,r.jsxs)(o.td,{style:{textAlign:"left"},children:["The number of ",(0,r.jsx)(o.a,{href:"/docs/2.10.x/reference-terminology#bookie",children:"bookies"})," to use for topics in the namespace"]}),(0,r.jsx)(o.td,{style:{textAlign:"left"},children:"0"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsxs)(o.td,{style:{textAlign:"left"},children:[(0,r.jsx)(o.code,{children:"-w"}),", ",(0,r.jsx)(o.code,{children:"--bookkeeper-write-quorum"})]}),(0,r.jsx)(o.td,{style:{textAlign:"left"},children:"The number of writes to make for each entry"}),(0,r.jsx)(o.td,{style:{textAlign:"left"},children:"0"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsxs)(o.td,{style:{textAlign:"left"},children:[(0,r.jsx)(o.code,{children:"-r"}),", ",(0,r.jsx)(o.code,{children:"--ml-mark-delete-max-rate"})]}),(0,r.jsx)(o.td,{style:{textAlign:"left"},children:"Throttling rate for mark-delete operations (0 means no throttle)"}),(0,r.jsx)(o.td,{style:{textAlign:"left"},children:"0"})]})]})]}),"\n",(0,r.jsx)(o.p,{children:"The following is an example:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces set-persistence my-tenant/my-ns \\\n  --bookkeeper-ack-quorum 3 \\\n  --bookkeeper-ensemble 2\n\n"})}),"\n",(0,r.jsx)(o.h4,{id:"rest-api",children:"REST API"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsxs)(o.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.10.6&apiversion=v2#operation/setPersistence",children:["POST /admin/v2/namespaces/",":tenant","/",":namespace","/persistence/setPersistence"]})}),"\n",(0,r.jsx)(o.h4,{id:"java",children:"Java"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-java",children:"\nint bkEnsemble = 2;\nint bkQuorum = 3;\nint bkAckQuorum = 2;\ndouble markDeleteRate = 0.7;\nPersistencePolicies policies =\n  new PersistencePolicies(ensemble, quorum, ackQuorum, markDeleteRate);\nadmin.namespaces().setPersistence(namespace, policies);\n\n"})}),"\n",(0,r.jsx)(o.h3,{id:"list-persistence-policies",children:"List persistence policies"}),"\n",(0,r.jsx)(o.p,{children:"You can see which persistence policy currently applies to a namespace."}),"\n",(0,r.jsx)(o.h4,{id:"pulsar-admin-1",children:"Pulsar-admin"}),"\n",(0,r.jsxs)(o.p,{children:["Use the ",(0,r.jsx)(o.a,{href:"/docs/2.10.x/pulsar-admin#namespaces-get-persistence",children:(0,r.jsx)(o.code,{children:"get-persistence"})})," subcommand and specify the namespace."]}),"\n",(0,r.jsx)(o.p,{children:"The following is an example:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-shell",children:'\n$ pulsar-admin namespaces get-persistence my-tenant/my-ns\n{\n  "bookkeeperEnsemble": 1,\n  "bookkeeperWriteQuorum": 1,\n  "bookkeeperAckQuorum", 1,\n  "managedLedgerMaxMarkDeleteRate": 0\n}\n\n'})}),"\n",(0,r.jsx)(o.h4,{id:"rest-api-1",children:"REST API"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsxs)(o.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.10.6&apiversion=v2#operation/getPersistence",children:["GET /admin/v2/namespaces/",":tenant","/",":namespace","/persistence/getPersistence"]})}),"\n",(0,r.jsx)(o.h4,{id:"java-1",children:"Java"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-java",children:"\nPersistencePolicies policies = admin.namespaces().getPersistence(namespace);\n\n"})}),"\n",(0,r.jsx)(o.h2,{id:"how-pulsar-uses-zookeeper-and-bookkeeper",children:"How Pulsar uses ZooKeeper and BookKeeper"}),"\n",(0,r.jsx)(o.p,{children:"This diagram illustrates the role of ZooKeeper and BookKeeper in a Pulsar cluster:"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"ZooKeeper and BookKeeper",src:n(42702).A+"",width:"1181",height:"781"})}),"\n",(0,r.jsx)(o.p,{children:"Each Pulsar cluster consists of one or more message brokers. Each broker relies on an ensemble of bookies."})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},42702:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/pulsar-system-architecture-6890df6b0c59a065a56492659ba87933.png"},92680:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/zookeeper-batching-de05ac49b05431155d275bd026b18c0a.png"},28453:(e,o,n)=>{n.d(o,{R:()=>t,x:()=>a});var s=n(96540);const r={},i=s.createContext(r);function t(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);