"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[61957],{98161:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"deploy-bare-metal-multi-cluster","title":"Deploying a multi-cluster on bare metal","description":"Learn to deploy a multi-cluster Pulsar instance on bare metal.","source":"@site/versioned_docs/version-4.0.x/deploy-bare-metal-multi-cluster.md","sourceDirName":".","slug":"/deploy-bare-metal-multi-cluster","permalink":"/docs/4.0.x/deploy-bare-metal-multi-cluster","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-4.0.x/deploy-bare-metal-multi-cluster.md","tags":[],"version":"4.0.x","frontMatter":{"id":"deploy-bare-metal-multi-cluster","title":"Deploying a multi-cluster on bare metal","sidebar_label":"Bare metal multi-cluster","description":"Learn to deploy a multi-cluster Pulsar instance on bare metal."},"sidebar":"docsSidebar","previous":{"title":"Bare metal","permalink":"/docs/4.0.x/deploy-bare-metal"},"next":{"title":"Docker","permalink":"/docs/4.0.x/deploy-docker"}}');var o=n(74848),t=n(28453);const i={id:"deploy-bare-metal-multi-cluster",title:"Deploying a multi-cluster on bare metal",sidebar_label:"Bare metal multi-cluster",description:"Learn to deploy a multi-cluster Pulsar instance on bare metal."},a=void 0,l={},c=[{value:"Run Pulsar locally or on Kubernetes?",id:"run-pulsar-locally-or-on-kubernetes",level:4},{value:"System requirement",id:"system-requirement",level:2},{value:"Install Pulsar",id:"install-pulsar",level:2},{value:"Step 1: Deploy ZooKeeper",id:"step-1-deploy-zookeeper",level:2},{value:"Deploy local ZooKeeper",id:"deploy-local-zookeeper",level:3},{value:"Deploy the configuration store",id:"deploy-the-configuration-store",level:3},{value:"Single-cluster Pulsar instance",id:"single-cluster-pulsar-instance",level:4},{value:"Multi-cluster Pulsar instance",id:"multi-cluster-pulsar-instance",level:4},{value:"Start the service",id:"start-the-service",level:5},{value:"Step 2: Cluster metadata initialization",id:"step-2-cluster-metadata-initialization",level:2},{value:"Step 3: Deploy BookKeeper",id:"step-3-deploy-bookkeeper",level:2},{value:"Configure bookies",id:"configure-bookies",level:3},{value:"Start bookies",id:"start-bookies",level:3},{value:"Step 4: Deploy brokers",id:"step-4-deploy-brokers",level:2},{value:"Broker configuration",id:"broker-configuration",level:3},{value:"Broker hardware",id:"broker-hardware",level:3},{value:"Start the broker service",id:"start-the-broker-service",level:3},{value:"Service discovery",id:"service-discovery",level:2},{value:"Admin client and verification",id:"admin-client-and-verification",level:2},{value:"Provision new tenants",id:"provision-new-tenants",level:2},{value:"Test producer and consumer",id:"test-producer-and-consumer",level:5}];function d(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.admonition,{type:"tip",children:(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["You can use single-cluster Pulsar installation in most use cases, such as experimenting with Pulsar or using Pulsar in a startup or a single team. If you need to run a multi-cluster Pulsar instance, see the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/deploy-bare-metal-multi-cluster",children:"guide"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:["If you want to use all built-in ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/io-overview",children:"Pulsar IO"})," connectors, you need to download ",(0,o.jsx)(r.code,{children:"apache-pulsar-io-connectors"})," package and install ",(0,o.jsx)(r.code,{children:"apache-pulsar-io-connectors"})," under ",(0,o.jsx)(r.code,{children:"connectors"})," directory in the pulsar directory on every broker node or every function-worker node if you have run a separate cluster of function workers for ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/functions-overview",children:"Pulsar Functions"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:["If you want to use ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/concepts-tiered-storage",children:"Tiered Storage"})," feature in your Pulsar deployment, you need to download ",(0,o.jsx)(r.code,{children:"apache-pulsar-offloaders"})," package and install ",(0,o.jsx)(r.code,{children:"apache-pulsar-offloaders"})," under ",(0,o.jsx)(r.code,{children:"offloaders"})," directory in the Pulsar directory on every broker node. For more details on how to configure this feature, you can refer to the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/cookbooks-tiered-storage",children:"Tiered storage cookbook"}),"."]}),"\n"]})}),"\n",(0,o.jsxs)(r.p,{children:["A Pulsar instance consists of multiple Pulsar clusters working in unison. You can distribute clusters across data centers or geographical regions and replicate the clusters amongst themselves using ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/administration-geo",children:"geo-replication"}),"."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.h4,{id:"run-pulsar-locally-or-on-kubernetes",children:"Run Pulsar locally or on Kubernetes?"}),"\n",(0,o.jsxs)(r.p,{children:["This guide shows you how to deploy Pulsar in production in a non-Kubernetes environment. If you want to run a standalone Pulsar cluster on a single machine for development purposes, see the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/getting-started-standalone",children:"Setting up a local cluster"})," guide. If you want to run Pulsar on ",(0,o.jsx)(r.a,{href:"https://kubernetes.io",children:"Kubernetes"}),", see the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/deploy-kubernetes",children:"Pulsar on Kubernetes"})," guide, which includes sections on running Pulsar on Kubernetes, on Google Kubernetes Engine and on Amazon Web Services."]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Deploying a multi-cluster Pulsar instance on bare metal consists of the following steps."}),"\n",(0,o.jsx)(r.h2,{id:"system-requirement",children:"System requirement"}),"\n",(0,o.jsxs)(r.p,{children:["Currently, Pulsar is available for 64-bit ",(0,o.jsx)(r.strong,{children:"macOS"})," and ",(0,o.jsx)(r.strong,{children:"Linux"}),". See ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/getting-started-docker",children:"Run Pulsar In Docker"})," if you want to run Pulsar on ",(0,o.jsx)(r.strong,{children:"Windows"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Also, you need the proper 64-bit JRE/JDK version installed. Please refer to ",(0,o.jsx)(r.a,{href:"https://github.com/apache/pulsar/blob/master/README.md#pulsar-runtime-java-version-recommendation",children:"Pulsar Runtime Java Version Recommendation"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"install-pulsar",children:"Install Pulsar"}),"\n",(0,o.jsx)(r.p,{children:"To get started running Pulsar, download a binary tarball release in one of the following ways:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"by clicking the link below and downloading the release from an Apache mirror:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-4.0.1/apache-pulsar-4.0.1-bin.tar.gz",download:!0,children:"Pulsar 4.0.1 binary release"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["from the Pulsar ",(0,o.jsx)(r.a,{href:"/download",children:"downloads page"})]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["from the Pulsar ",(0,o.jsx)(r.a,{href:"https://github.com/apache/pulsar/releases/latest",children:"releases page"})]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["using ",(0,o.jsx)(r.a,{href:"https://www.gnu.org/software/wget",children:"wget"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"wget 'https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=pulsar/pulsar-4.0.1/apache-pulsar-4.0.1-bin.tar.gz' -O apache-pulsar-4.0.1-bin.tar.gz\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Once you download the tarball, untar it and ",(0,o.jsx)(r.code,{children:"cd"})," into the resulting directory:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"tar xvfz apache-pulsar-4.0.1-bin.tar.gz\ncd apache-pulsar-4.0.1\n"})}),"\n",(0,o.jsx)(r.p,{children:"The Pulsar binary package initially contains the following directories:"}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{style:{textAlign:"left"},children:"Directory"}),(0,o.jsx)(r.th,{style:{textAlign:"left"},children:"Contains"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{style:{textAlign:"left"},children:(0,o.jsx)(r.code,{children:"bin"})}),(0,o.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-cli-tools",children:"Command-line tools"})," of Pulsar, such as ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-cli-tools",children:(0,o.jsx)(r.code,{children:"pulsar"})})," and ",(0,o.jsx)(r.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/",children:(0,o.jsx)(r.code,{children:"pulsar-admin"})})]})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{style:{textAlign:"left"},children:(0,o.jsx)(r.code,{children:"conf"})}),(0,o.jsxs)(r.td,{style:{textAlign:"left"},children:["Configuration files for Pulsar, including for ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-configuration#broker",children:"broker configuration"}),", ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-configuration#zookeeper",children:"ZooKeeper configuration"}),", and more"]})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{style:{textAlign:"left"},children:(0,o.jsx)(r.code,{children:"examples"})}),(0,o.jsxs)(r.td,{style:{textAlign:"left"},children:["A Java JAR file containing example ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/functions-overview",children:"Pulsar Functions"})]})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{style:{textAlign:"left"},children:(0,o.jsx)(r.code,{children:"lib"})}),(0,o.jsxs)(r.td,{style:{textAlign:"left"},children:["The ",(0,o.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/JAR_(file_format)",children:"JAR"})," files that Pulsar uses"]})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{style:{textAlign:"left"},children:(0,o.jsx)(r.code,{children:"licenses"})}),(0,o.jsxs)(r.td,{style:{textAlign:"left"},children:["License files, in ",(0,o.jsx)(r.code,{children:".txt"})," form, for various components of the Pulsar codebase"]})]})]})]}),"\n",(0,o.jsx)(r.p,{children:"The following directories are created once you begin running Pulsar:"}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{style:{textAlign:"left"},children:"Directory"}),(0,o.jsx)(r.th,{style:{textAlign:"left"},children:"Contains"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{style:{textAlign:"left"},children:(0,o.jsx)(r.code,{children:"data"})}),(0,o.jsx)(r.td,{style:{textAlign:"left"},children:"The data storage directory that ZooKeeper and BookKeeper use"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{style:{textAlign:"left"},children:(0,o.jsx)(r.code,{children:"instances"})}),(0,o.jsxs)(r.td,{style:{textAlign:"left"},children:["Artifacts created for ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/functions-overview",children:"Pulsar Functions"})]})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{style:{textAlign:"left"},children:(0,o.jsx)(r.code,{children:"logs"})}),(0,o.jsx)(r.td,{style:{textAlign:"left"},children:"Logs that the installation creates"})]})]})]}),"\n",(0,o.jsx)(r.h2,{id:"step-1-deploy-zookeeper",children:"Step 1: Deploy ZooKeeper"}),"\n",(0,o.jsx)(r.p,{children:"Each Pulsar instance relies on two separate ZooKeeper quorums."}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Local ZooKeeper operates at the cluster level and provides cluster-specific configuration management and coordination. Each Pulsar cluster needs a dedicated ZooKeeper cluster."}),"\n",(0,o.jsx)(r.li,{children:"Configuration Store operates at the instance level and provides configuration management for the entire system (and thus across clusters). An independent cluster of machines or the same machines that local ZooKeeper uses can provide the configuration store quorum."}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"You can use an independent cluster of machines or the same machines used by local ZooKeeper to provide the configuration store quorum."}),"\n",(0,o.jsx)(r.h3,{id:"deploy-local-zookeeper",children:"Deploy local ZooKeeper"}),"\n",(0,o.jsx)(r.p,{children:"ZooKeeper manages a variety of essential coordination-related and configuration-related tasks for Pulsar."}),"\n",(0,o.jsx)(r.p,{children:"You need to stand up one local ZooKeeper cluster per Pulsar cluster for deploying a Pulsar instance."}),"\n",(0,o.jsxs)(r.p,{children:["To begin, add all ZooKeeper servers to the quorum configuration specified in the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-configuration#zookeeper",children:(0,o.jsx)(r.code,{children:"conf/zookeeper.conf"})})," file. Add a ",(0,o.jsx)(r.code,{children:"server.N"})," line for each node in the cluster to the configuration, where ",(0,o.jsx)(r.code,{children:"N"})," is the number of the ZooKeeper node. The following is an example of a three-node cluster:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-properties",children:"server.1=zk1.us-west.example.com:2888:3888\nserver.2=zk2.us-west.example.com:2888:3888\nserver.3=zk3.us-west.example.com:2888:3888\n"})}),"\n",(0,o.jsxs)(r.p,{children:["On each host, you need to specify the ID of the node in the ",(0,o.jsx)(r.code,{children:"myid"})," file of each node, which is in ",(0,o.jsx)(r.code,{children:"data/zookeeper"})," folder of each server by default (you can change the file location via the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-configuration#zookeeper-dataDir",children:(0,o.jsx)(r.code,{children:"dataDir"})})," parameter)."]}),"\n",(0,o.jsx)(r.admonition,{type:"tip",children:(0,o.jsxs)(r.p,{children:["See the ",(0,o.jsx)(r.a,{href:"https://zookeeper.apache.org/doc/r3.4.10/zookeeperAdmin.html#sc_zkMulitServerSetup",children:"Multi-server setup guide"})," in the ZooKeeper documentation for detailed information on ",(0,o.jsx)(r.code,{children:"myid"})," and more."]})}),"\n",(0,o.jsxs)(r.p,{children:["On a ZooKeeper server at ",(0,o.jsx)(r.code,{children:"zk1.us-west.example.com"}),", for example, you could set the ",(0,o.jsx)(r.code,{children:"myid"})," value like this:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"mkdir -p data/zookeeper\necho 1 > data/zookeeper/myid\n"})}),"\n",(0,o.jsxs)(r.p,{children:["On ",(0,o.jsx)(r.code,{children:"zk2.us-west.example.com"})," the command looks like ",(0,o.jsx)(r.code,{children:"echo 2 > data/zookeeper/myid"})," and so on."]}),"\n",(0,o.jsxs)(r.p,{children:["Once you add each server to the ",(0,o.jsx)(r.code,{children:"zookeeper.conf"})," configuration and each server has the appropriate ",(0,o.jsx)(r.code,{children:"myid"})," entry, you can start ZooKeeper on all hosts (in the background, using nohup) with the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-cli-tools",children:(0,o.jsx)(r.code,{children:"pulsar-daemon"})})," CLI tool:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"bin/pulsar-daemon start zookeeper\n"})}),"\n",(0,o.jsx)(r.h3,{id:"deploy-the-configuration-store",children:"Deploy the configuration store"}),"\n",(0,o.jsx)(r.p,{children:"The ZooKeeper cluster configured and started up in the section above is a local ZooKeeper cluster that you can use to manage a single Pulsar cluster. In addition to a local cluster, however, a full Pulsar instance also requires a configuration store for handling some instance-level configuration and coordination tasks."}),"\n",(0,o.jsx)(r.p,{children:"If you deploy a single-cluster instance, you do not need a separate cluster for the configuration store. If, however, you deploy a multi-cluster instance, you should stand up a separate ZooKeeper cluster for configuration tasks."}),"\n",(0,o.jsx)(r.h4,{id:"single-cluster-pulsar-instance",children:"Single-cluster Pulsar instance"}),"\n",(0,o.jsx)(r.p,{children:"If your Pulsar instance consists of just one cluster, then you can deploy a configuration store on the same machines as the local ZooKeeper quorum but run on different TCP ports."}),"\n",(0,o.jsxs)(r.p,{children:["To deploy a ZooKeeper configuration store in a single-cluster instance, add the same ZooKeeper servers to the local quorum. You need to use the configuration file in ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-configuration#configuration-store",children:(0,o.jsx)(r.code,{children:"conf/global_zookeeper.conf"})})," using the same method for ",(0,o.jsx)(r.a,{href:"#deploy-local-zookeeper",children:"local ZooKeeper"}),", but make sure to use a different port (2181 is the default for ZooKeeper). The following is an example that uses port 2184 for a three-node ZooKeeper cluster:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-properties",children:"clientPort=2184\nserver.1=zk1.us-west.example.com:2185:2186\nserver.2=zk2.us-west.example.com:2185:2186\nserver.3=zk3.us-west.example.com:2185:2186\n"})}),"\n",(0,o.jsxs)(r.p,{children:["As before, create the ",(0,o.jsx)(r.code,{children:"myid"})," files for each server on ",(0,o.jsx)(r.code,{children:"data/global-zookeeper/myid"}),"."]}),"\n",(0,o.jsx)(r.h4,{id:"multi-cluster-pulsar-instance",children:"Multi-cluster Pulsar instance"}),"\n",(0,o.jsx)(r.p,{children:"When you deploy a global Pulsar instance, with clusters distributed across different geographical regions, the configuration store serves as a highly available and strongly consistent metadata store that can tolerate failures and partitions spanning whole regions."}),"\n",(0,o.jsx)(r.p,{children:"The key here is to make sure the ZK quorum members are spread across at least 3 regions, and other regions run as observers."}),"\n",(0,o.jsx)(r.p,{children:"Again, given the very low expected load on the configuration store servers, you can share the same hosts used for the local ZooKeeper quorum."}),"\n",(0,o.jsxs)(r.p,{children:["For example, assume a Pulsar instance with the following clusters ",(0,o.jsx)(r.code,{children:"us-west"}),", ",(0,o.jsx)(r.code,{children:"us-east"}),", ",(0,o.jsx)(r.code,{children:"us-central"}),", ",(0,o.jsx)(r.code,{children:"eu-central"}),", ",(0,o.jsx)(r.code,{children:"ap-south"}),". Also assume, each cluster has its own local ZK servers named such as the following:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"zk[1-3].${CLUSTER}.example.com\n"})}),"\n",(0,o.jsxs)(r.p,{children:["In this scenario, if you want to pick the quorum participants from a few clusters and let all the others be ZK observers. For example, to form a 7 servers quorum, you can pick 3 servers from ",(0,o.jsx)(r.code,{children:"us-west"}),", 2 from ",(0,o.jsx)(r.code,{children:"us-central"})," and 2 from ",(0,o.jsx)(r.code,{children:"us-east"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"This method guarantees that writing to the configuration store is possible even if one of these regions is unreachable."}),"\n",(0,o.jsx)(r.p,{children:"The ZK configuration in all the servers looks like this:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-properties",children:"clientPort=2184\nserver.1=zk1.us-west.example.com:2185:2186\nserver.2=zk2.us-west.example.com:2185:2186\nserver.3=zk3.us-west.example.com:2185:2186\nserver.4=zk1.us-central.example.com:2185:2186\nserver.5=zk2.us-central.example.com:2185:2186\nserver.6=zk3.us-central.example.com:2185:2186:observer\nserver.7=zk1.us-east.example.com:2185:2186\nserver.8=zk2.us-east.example.com:2185:2186\nserver.9=zk3.us-east.example.com:2185:2186:observer\nserver.10=zk1.eu-central.example.com:2185:2186:observer\nserver.11=zk2.eu-central.example.com:2185:2186:observer\nserver.12=zk3.eu-central.example.com:2185:2186:observer\nserver.13=zk1.ap-south.example.com:2185:2186:observer\nserver.14=zk2.ap-south.example.com:2185:2186:observer\nserver.15=zk3.ap-south.example.com:2185:2186:observer\n"})}),"\n",(0,o.jsx)(r.p,{children:"Additionally, ZK observers need to have the following parameters:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-properties",children:"peerType=observer\n"})}),"\n",(0,o.jsx)(r.h5,{id:"start-the-service",children:"Start the service"}),"\n",(0,o.jsxs)(r.p,{children:["Once your configuration store configuration is in place, you can start up the service using ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-cli-tools",children:(0,o.jsx)(r.code,{children:"pulsar-daemon"})})]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"bin/pulsar-daemon start configuration-store\n"})}),"\n",(0,o.jsx)(r.h2,{id:"step-2-cluster-metadata-initialization",children:"Step 2: Cluster metadata initialization"}),"\n",(0,o.jsxs)(r.p,{children:["Once you set up the cluster-specific ZooKeeper and configuration store quorums for your instance, you need to write some metadata to ZooKeeper for each cluster in your instance. ",(0,o.jsx)(r.strong,{children:"you only need to write these metadata once"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["You can initialize this metadata using the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-cli-tools",children:(0,o.jsx)(r.code,{children:"initialize-cluster-metadata"})})," command of the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-cli-tools",children:(0,o.jsx)(r.code,{children:"pulsar"})})," CLI tool. The following is an example:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"bin/pulsar initialize-cluster-metadata \\\n    --cluster us-west \\\n    --metadata-store zk:zk1.us-west.example.com:2181,zk2.us-west.example.com:2181/my-chroot-path \\\n    --configuration-metadata-store zk:zk1.us-west.example.com:2181,zk2.us-west.example.com:2181/my-chroot-path \\\n    --web-service-url http://pulsar.us-west.example.com:8080/ \\\n    --web-service-url-tls https://pulsar.us-west.example.com:8443/ \\\n    --broker-service-url pulsar://pulsar.us-west.example.com:6650/ \\\n    --broker-service-url-tls pulsar+ssl://pulsar.us-west.example.com:6651/\n"})}),"\n",(0,o.jsx)(r.p,{children:"As you can see from the example above, you need to specify the following:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"The name of the cluster"}),"\n",(0,o.jsx)(r.li,{children:"The local metadata store connection string for the cluster"}),"\n",(0,o.jsx)(r.li,{children:"The configuration store connection string for the entire instance"}),"\n",(0,o.jsx)(r.li,{children:"The web service URL for the cluster"}),"\n",(0,o.jsxs)(r.li,{children:["A broker service URL enabling interaction with the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-terminology#broker",children:"brokers"})," in the cluster"]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["If you use ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/security-tls-transport",children:"TLS"}),", you also need to specify a TLS web service URL for the cluster as well as a TLS broker service URL for the brokers in the cluster."]}),"\n",(0,o.jsxs)(r.p,{children:["Make sure to run ",(0,o.jsx)(r.code,{children:"initialize-cluster-metadata"})," for each cluster in your instance."]}),"\n",(0,o.jsx)(r.h2,{id:"step-3-deploy-bookkeeper",children:"Step 3: Deploy BookKeeper"}),"\n",(0,o.jsxs)(r.p,{children:["BookKeeper provides ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/concepts-architecture-overview#persistent-storage",children:"persistent message storage"})," for Pulsar."]}),"\n",(0,o.jsx)(r.p,{children:"Each Pulsar broker needs its own cluster of bookies. The BookKeeper cluster shares a local ZooKeeper quorum with the Pulsar cluster."}),"\n",(0,o.jsx)(r.h3,{id:"configure-bookies",children:"Configure bookies"}),"\n",(0,o.jsxs)(r.p,{children:["You can configure BookKeeper bookies using the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-configuration#bookkeeper",children:(0,o.jsx)(r.code,{children:"conf/bookkeeper.conf"})})," configuration file. The most important aspect of configuring each bookie is ensuring that the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-configuration#bookkeeper-zkServers",children:(0,o.jsx)(r.code,{children:"zkServers"})})," parameter is set to the connection string for the local ZooKeeper of Pulsar cluster."]}),"\n",(0,o.jsx)(r.h3,{id:"start-bookies",children:"Start bookies"}),"\n",(0,o.jsx)(r.p,{children:"You can start a bookie in two ways: in the foreground or as a background daemon."}),"\n",(0,o.jsxs)(r.p,{children:["To start a bookie in the background, use the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-cli-tools",children:(0,o.jsx)(r.code,{children:"pulsar-daemon"})})," CLI tool:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"bin/pulsar-daemon start bookie\n"})}),"\n",(0,o.jsxs)(r.p,{children:["You can verify that the bookie works properly using the ",(0,o.jsx)(r.code,{children:"bookiesanity"})," command for the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-cli-tools",children:"BookKeeper shell"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"bin/bookkeeper shell bookiesanity\n"})}),"\n",(0,o.jsx)(r.p,{children:"This command creates a new ledger on the local bookie, writes a few entries, reads them back and finally deletes the ledger."}),"\n",(0,o.jsxs)(r.p,{children:["After you have started all bookies, you can use the ",(0,o.jsx)(r.code,{children:"simpletest"})," command for ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-cli-tools",children:"BookKeeper shell"})," on any bookie node, to verify that all bookies in the cluster are running."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"bin/bookkeeper shell simpletest --ensemble <num-bookies> --writeQuorum <num-bookies> --ackQuorum <num-bookies> --numEntries <num-entries>\n"})}),"\n",(0,o.jsx)(r.p,{children:"Bookie hosts are responsible for storing message data on disk. In order for bookies to provide optimal performance, having a suitable hardware configuration is essential for the bookies. The following are key dimensions for bookie hardware capacity."}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Disk I/O capacity read/write"}),"\n",(0,o.jsx)(r.li,{children:"Storage capacity"}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Message entries written to bookies are always synced to disk before returning an acknowledgment to the Pulsar broker. To ensure low write latency, BookKeeper is\ndesigned to use multiple devices:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["A ",(0,o.jsx)(r.strong,{children:"journal"})," to ensure durability. For sequential writes, having fast ",(0,o.jsx)(r.a,{href:"https://linux.die.net/man/2/fsync",children:"fsync"})," operations on bookie hosts is critical. Typically, small and fast ",(0,o.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Solid-state_drive",children:"solid-state drives"})," (SSDs) should suffice, or ",(0,o.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Hard_disk_drive",children:"hard disk drives"})," (HDDs) with a ",(0,o.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/RAID",children:"RAID"})," controller and a battery-backed write cache. Both solutions can reach fsync latency of ~0.4 ms."]}),"\n",(0,o.jsxs)(r.li,{children:["A ",(0,o.jsx)(r.strong,{children:"ledger storage device"})," is where data is stored until all consumers acknowledge the message. Writes happen in the background, so writing I/O is not a big concern. Reads happen sequentially most of the time and the backlog is drained only in case of consumer drain. To store large amounts of data, a typical configuration involves multiple HDDs with a RAID controller."]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"step-4-deploy-brokers",children:"Step 4: Deploy brokers"}),"\n",(0,o.jsx)(r.p,{children:"Once you set up ZooKeeper, initialize cluster metadata, and spin up BookKeeper bookies, you can deploy brokers."}),"\n",(0,o.jsx)(r.h3,{id:"broker-configuration",children:"Broker configuration"}),"\n",(0,o.jsxs)(r.p,{children:["You can configure brokers using the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-configuration#broker",children:(0,o.jsx)(r.code,{children:"conf/broker.conf"})})," configuration file."]}),"\n",(0,o.jsxs)(r.p,{children:["The most important element of broker configuration is ensuring that each broker is aware of its local ZooKeeper quorum as well as the configuration store quorum. Make sure that you set the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-configuration#broker",children:(0,o.jsx)(r.code,{children:"metadataStoreUrl"})})," parameter to reflect the local quorum and the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-configuration#broker",children:(0,o.jsx)(r.code,{children:"configurationMetadataStoreUrl"})})," parameter to reflect the configuration store quorum (although you need to specify only those ZooKeeper servers located in the same cluster)."]}),"\n",(0,o.jsxs)(r.p,{children:["You also need to specify the name of the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-terminology#cluster",children:"cluster"})," to which the broker belongs using the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-configuration#broker-clusterName",children:(0,o.jsx)(r.code,{children:"clusterName"})})," parameter. In addition, you need to match the broker and web service ports provided when you initialize the metadata (especially when you use a different port from default) of the cluster."]}),"\n",(0,o.jsx)(r.p,{children:"The following is an example configuration:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-properties",children:"# Local ZooKeeper servers\nmetadataStoreUrl=zk1.us-west.example.com:2181,zk2.us-west.example.com:2181,zk3.us-west.example.com:2181\n\n# Configuration store quorum connection string.\nconfigurationMetadataStoreUrl=zk1.us-west.example.com:2184,zk2.us-west.example.com:2184,zk3.us-west.example.com:2184\n\nclusterName=us-west\n\n# Broker data port\nbrokerServicePort=6650\n\n# Broker data port for TLS\nbrokerServicePortTls=6651\n\n# Port to use to server HTTP request\nwebServicePort=8080\n\n# Port to use to server HTTPS request\nwebServicePortTls=8443\n"})}),"\n",(0,o.jsx)(r.h3,{id:"broker-hardware",children:"Broker hardware"}),"\n",(0,o.jsxs)(r.p,{children:["Pulsar brokers do not require any special hardware since they do not use the local disk. You had better choose fast CPUs and 10Gbps ",(0,o.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Network_interface_controller",children:"NIC"})," so that the software can take full advantage of that."]}),"\n",(0,o.jsx)(r.h3,{id:"start-the-broker-service",children:"Start the broker service"}),"\n",(0,o.jsxs)(r.p,{children:["You can start a broker in the background by using ",(0,o.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Nohup",children:"nohup"})," with the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-cli-tools",children:(0,o.jsx)(r.code,{children:"pulsar-daemon"})})," CLI tool:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"bin/pulsar-daemon start broker\n"})}),"\n",(0,o.jsxs)(r.p,{children:["You can also start brokers in the foreground by using ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-cli-tools",children:(0,o.jsx)(r.code,{children:"pulsar broker"})}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"bin/pulsar broker\n"})}),"\n",(0,o.jsx)(r.h2,{id:"service-discovery",children:"Service discovery"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/4.0.x/client-libraries",children:"Clients"})," connecting to Pulsar brokers need to communicate with an entire Pulsar instance using a single URL."]}),"\n",(0,o.jsxs)(r.p,{children:["You can use your own service discovery system, and you only need to satisfy just one requirement: when a client performs an HTTP request to an ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-configuration",children:"endpoint"})," for a Pulsar cluster, such as ",(0,o.jsx)(r.code,{children:"http://pulsar.us-west.example.com:8080"}),", the client needs to be redirected to some active brokers in the desired cluster, whether via DNS, an HTTP or IP redirect, or some other means."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Service discovery already provided by many scheduling systems"}),"\nMany large-scale deployment systems, such as ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/deploy-kubernetes",children:"Kubernetes"}),", have service discovery systems built in. If you run Pulsar on such a system, you may not need to provide your own service discovery mechanism."]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"admin-client-and-verification",children:"Admin client and verification"}),"\n",(0,o.jsxs)(r.p,{children:["At this point, your Pulsar instance should be ready to use. You can now configure client machines that can serve as ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/admin-api-overview",children:"administrative clients"})," for each cluster. You can use the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-configuration#client",children:(0,o.jsx)(r.code,{children:"conf/client.conf"})})," configuration file to configure admin clients."]}),"\n",(0,o.jsxs)(r.p,{children:["The most important thing is that you point the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-configuration#client-serviceUrl",children:(0,o.jsx)(r.code,{children:"serviceUrl"})})," parameter to the correct service URL for the cluster:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-properties",children:"serviceUrl=http://pulsar.us-west.example.com:8080/\n"})}),"\n",(0,o.jsx)(r.h2,{id:"provision-new-tenants",children:"Provision new tenants"}),"\n",(0,o.jsx)(r.p,{children:"Pulsar is built as a fundamentally multi-tenant system."}),"\n",(0,o.jsxs)(r.p,{children:["If a new tenant wants to use the system, you need to create a new one. You can create a new tenant by using the ",(0,o.jsx)(r.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/",children:(0,o.jsx)(r.code,{children:"pulsar-admin"})})," CLI tool:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"bin/pulsar-admin tenants create test-tenant \\\n--allowed-clusters us-west \\\n--admin-roles test-admin-role\n"})}),"\n",(0,o.jsxs)(r.p,{children:["In this command, users who identify with ",(0,o.jsx)(r.code,{children:"test-admin-role"})," role can administer the configuration for the ",(0,o.jsx)(r.code,{children:"test-tenant"})," tenant. The ",(0,o.jsx)(r.code,{children:"test-tenant"})," tenant can only use the ",(0,o.jsx)(r.code,{children:"us-west"})," cluster. From now on, this tenant can manage its resources."]}),"\n",(0,o.jsxs)(r.p,{children:["Once you create a tenant, you need to create ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-terminology#namespace",children:"namespaces"})," for topics within that tenant."]}),"\n",(0,o.jsx)(r.p,{children:"The first step is to create a namespace. A namespace is an administrative unit that can contain many topics. A common practice is to create a namespace for each different use case from a single tenant."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"bin/pulsar-admin namespaces create test-tenant/ns1\n"})}),"\n",(0,o.jsx)(r.h5,{id:"test-producer-and-consumer",children:"Test producer and consumer"}),"\n",(0,o.jsxs)(r.p,{children:["Everything is now ready to send and receive messages. The quickest way to test the system is through the ",(0,o.jsx)(r.a,{href:"/docs/4.0.x/reference-cli-tools",children:(0,o.jsx)(r.code,{children:"pulsar-perf"})})," client tool."]}),"\n",(0,o.jsx)(r.p,{children:"You can use a topic in the namespace that you have just created. Topics are automatically created the first time when a producer or a consumer tries to use them."}),"\n",(0,o.jsx)(r.p,{children:"The topic name, in this case, can be:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-http",children:"persistent://test-tenant/ns1/my-topic\n"})}),"\n",(0,o.jsx)(r.p,{children:"Start a consumer that creates a subscription on the topic and waits for messages:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"bin/pulsar-perf consume persistent://test-tenant/ns1/my-topic\n"})}),"\n",(0,o.jsx)(r.p,{children:"Start a producer that publishes messages at a fixed rate and reports stats every 10 seconds:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"bin/pulsar-perf produce persistent://test-tenant/ns1/my-topic\n"})}),"\n",(0,o.jsx)(r.p,{children:"To report the topic stats:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"bin/pulsar-admin topics stats persistent://test-tenant/ns1/my-topic\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var s=n(96540);const o={},t=s.createContext(o);function i(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);