"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[27990],{87243:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>i});const o=JSON.parse('{"id":"deploy-docker","title":"Deploy a cluster on Docker","description":"To deploy a Pulsar cluster on Docker using Docker commands, you need to complete the following steps:","source":"@site/versioned_docs/version-3.1.x/deploy-docker.md","sourceDirName":".","slug":"/deploy-docker","permalink":"/docs/3.1.x/deploy-docker","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/deploy-docker.md","tags":[],"version":"3.1.x","frontMatter":{"id":"deploy-docker","title":"Deploy a cluster on Docker","sidebar_label":"Docker"},"sidebar":"docsSidebar","previous":{"title":"Bare metal multi-cluster","permalink":"/docs/3.1.x/deploy-bare-metal-multi-cluster"},"next":{"title":"ZooKeeper and BookKeeper","permalink":"/docs/3.1.x/administration-zk-bk"}}');var n=r(74848),t=r(28453);const l={id:"deploy-docker",title:"Deploy a cluster on Docker",sidebar_label:"Docker"},s=void 0,c={},i=[{value:"Pull a Pulsar image",id:"pull-a-pulsar-image",level:2},{value:"Create a network",id:"create-a-network",level:2},{value:"Create and start containers",id:"create-and-start-containers",level:2},{value:"Create a ZooKeeper container",id:"create-a-zookeeper-container",level:3},{value:"Initialize the cluster metadata",id:"initialize-the-cluster-metadata",level:3},{value:"Create a bookie container",id:"create-a-bookie-container",level:3},{value:"Create a broker container",id:"create-a-broker-container",level:3}];function d(e){const a={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"To deploy a Pulsar cluster on Docker using Docker commands, you need to complete the following steps:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"Pull a Pulsar Docker image."}),"\n",(0,n.jsx)(a.li,{children:"Create a network."}),"\n",(0,n.jsx)(a.li,{children:"Create and start the ZooKeeper, bookie, and broker containers."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"pull-a-pulsar-image",children:"Pull a Pulsar image"}),"\n",(0,n.jsx)(a.p,{children:"To run Pulsar on Docker, you need to create a container for each Pulsar component: ZooKeeper, bookie, and the broker. You can pull the images of ZooKeeper and bookie separately on Docker Hub, and pull the Pulsar image for the broker. You can also pull only one Pulsar image and create three containers with this image. This tutorial takes the second option as an example."}),"\n",(0,n.jsxs)(a.p,{children:["You can pull a Pulsar image from Docker Hub with the following command. If you do not want to use some connectors, you can use ",(0,n.jsx)(a.code,{children:"apachepulsar/pulsar:latest"})," there."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"docker pull apachepulsar/pulsar-all:latest\n"})}),"\n",(0,n.jsx)(a.h2,{id:"create-a-network",children:"Create a network"}),"\n",(0,n.jsxs)(a.p,{children:["To deploy a Pulsar cluster on Docker, you need to create a network and connect the containers of ZooKeeper, bookie, and broker to this network.\nUse the following command to create the network ",(0,n.jsx)(a.code,{children:"pulsar"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"docker network create pulsar\n"})}),"\n",(0,n.jsx)(a.h2,{id:"create-and-start-containers",children:"Create and start containers"}),"\n",(0,n.jsx)(a.h3,{id:"create-a-zookeeper-container",children:"Create a ZooKeeper container"}),"\n",(0,n.jsx)(a.p,{children:"Create a ZooKeeper container and start the ZooKeeper service."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'docker run -d -p 2181:2181 --net=pulsar \\\n    -e metadataStoreUrl=zk:zookeeper:2181 \\\n    -e cluster-name=cluster-a -e managedLedgerDefaultEnsembleSize=1 \\\n    -e managedLedgerDefaultWriteQuorum=1 \\\n    -e managedLedgerDefaultAckQuorum=1 \\\n    -v $(pwd)/data/zookeeper:/pulsar/data/zookeeper \\\n    --name zookeeper --hostname zookeeper \\\n    apachepulsar/pulsar-all:latest \\\n    bash -c "bin/apply-config-from-env.py conf/zookeeper.conf && bin/generate-zookeeper-config.sh conf/zookeeper.conf && exec bin/pulsar zookeeper"\n'})}),"\n",(0,n.jsx)(a.h3,{id:"initialize-the-cluster-metadata",children:"Initialize the cluster metadata"}),"\n",(0,n.jsx)(a.p,{children:"After creating the ZooKeeper container successfully, you can use the following command to initialize the cluster metadata."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'docker run --net=pulsar \\\n    --name initialize-pulsar-cluster-metadata \\\n    apachepulsar/pulsar-all:latest bash -c "bin/pulsar initialize-cluster-metadata \\\n--cluster cluster-a \\\n--zookeeper zookeeper:2181 \\\n--configuration-store zookeeper:2181 \\\n--web-service-url http://broker:8080 \\\n--broker-service-url pulsar://broker:6650"\n'})}),"\n",(0,n.jsx)(a.h3,{id:"create-a-bookie-container",children:"Create a bookie container"}),"\n",(0,n.jsx)(a.p,{children:"Create a bookie container and start the bookie service."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'docker run -d -e clusterName=cluster-a \\\n    -e zkServers=zookeeper:2181 --net=pulsar \\\n    -e metadataServiceUri=metadata-store:zk:zookeeper:2181 \\\n    -v $(pwd)/data/bookkeeper:/pulsar/data/bookkeeper \\\n    --name bookie --hostname bookie \\\n    apachepulsar/pulsar-all:latest \\\n    bash -c "bin/apply-config-from-env.py conf/bookkeeper.conf && exec bin/pulsar bookie"\n'})}),"\n",(0,n.jsx)(a.h3,{id:"create-a-broker-container",children:"Create a broker container"}),"\n",(0,n.jsx)(a.p,{children:"Create a broker container and start the broker service."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'docker run -d -p 6650:6650 -p 8080:8080 --net=pulsar \\\n    -e metadataStoreUrl=zk:zookeeper:2181 \\\n    -e zookeeperServers=zookeeper:2181 \\\n    -e clusterName=cluster-a \\\n    -e managedLedgerDefaultEnsembleSize=1 \\\n    -e managedLedgerDefaultWriteQuorum=1 \\\n    -e managedLedgerDefaultAckQuorum=1 \\\n    --name broker --hostname broker \\\n    apachepulsar/pulsar-all:latest \\\n    bash -c "bin/apply-config-from-env.py conf/broker.conf && exec bin/pulsar broker"\n'})})]})}function u(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>l,x:()=>s});var o=r(96540);const n={},t=o.createContext(n);function l(e){const a=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),o.createElement(t.Provider,{value:a},e.children)}}}]);