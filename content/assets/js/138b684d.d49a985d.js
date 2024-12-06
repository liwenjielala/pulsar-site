"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[69107],{94163:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>i});const o=JSON.parse('{"id":"deploy-docker","title":"Deploy a cluster on Docker","description":"You can use two kinds of methods to deploy a Pulsar cluster on Docker.","source":"@site/versioned_docs/version-2.11.x/deploy-docker.md","sourceDirName":".","slug":"/deploy-docker","permalink":"/docs/2.11.x/deploy-docker","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/deploy-docker.md","tags":[],"version":"2.11.x","frontMatter":{"id":"deploy-docker","title":"Deploy a cluster on Docker","sidebar_label":"Docker"},"sidebar":"docsSidebar","previous":{"title":"Bare metal multi-cluster","permalink":"/docs/2.11.x/deploy-bare-metal-multi-cluster"},"next":{"title":"Monitor","permalink":"/docs/2.11.x/deploy-monitoring"}}');var a=r(74848),t=r(28453);const s={id:"deploy-docker",title:"Deploy a cluster on Docker",sidebar_label:"Docker"},l=void 0,c={},i=[{value:"Deploy a cluster using Docker commands",id:"deploy-a-cluster-using-docker-commands",level:2},{value:"Pull a Pulsar image",id:"pull-a-pulsar-image",level:3},{value:"Create a network",id:"create-a-network",level:3},{value:"Create and start containers",id:"create-and-start-containers",level:3},{value:"Create a ZooKeeper container",id:"create-a-zookeeper-container",level:4},{value:"Initialize the cluster metadata",id:"initialize-the-cluster-metadata",level:4},{value:"Create a bookie container",id:"create-a-bookie-container",level:4},{value:"Create a broker container",id:"create-a-broker-container",level:4},{value:"Deploy a cluster by using <code>compose.yml</code>",id:"deploy-a-cluster-by-using-composeyml",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["You can use two kinds of methods to deploy a Pulsar cluster on Docker.\nThe first uses Docker commands, while the second uses a ",(0,a.jsx)(n.code,{children:"compose.yml"})," file."]}),"\n",(0,a.jsx)(n.h2,{id:"deploy-a-cluster-using-docker-commands",children:"Deploy a cluster using Docker commands"}),"\n",(0,a.jsx)(n.p,{children:"To deploy a Pulsar cluster on Docker, you need to complete the following steps:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Pull a Pulsar Docker image."}),"\n",(0,a.jsx)(n.li,{children:"Create a network."}),"\n",(0,a.jsx)(n.li,{children:"Create and start the ZooKeeper, bookie, and broker containers."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"pull-a-pulsar-image",children:"Pull a Pulsar image"}),"\n",(0,a.jsxs)(n.p,{children:["To run Pulsar on Docker, you need to create a container for each Pulsar component: ZooKeeper, bookie, and the broker. You can pull the images of ZooKeeper and bookie separately on Docker Hub, and pull the Pulsar image for the broker. You can also pull only one Pulsar image and create three containers with this image. This tutorial takes the second option as an example.\nYou can pull a Pulsar image from Docker Hub with the following command. If you do not want to use some connectors, you can use ",(0,a.jsx)(n.code,{children:"apachepulsar/pulsar:latest"})," there."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"docker pull apachepulsar/pulsar-all:latest\n"})}),"\n",(0,a.jsx)(n.h3,{id:"create-a-network",children:"Create a network"}),"\n",(0,a.jsxs)(n.p,{children:["To deploy a Pulsar cluster on Docker, you need to create a network and connect the containers of ZooKeeper, bookie, and broker to this network.\nUse the following command to create the network ",(0,a.jsx)(n.code,{children:"pulsar"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker network create pulsar\n"})}),"\n",(0,a.jsx)(n.h3,{id:"create-and-start-containers",children:"Create and start containers"}),"\n",(0,a.jsx)(n.h4,{id:"create-a-zookeeper-container",children:"Create a ZooKeeper container"}),"\n",(0,a.jsx)(n.p,{children:"Create a ZooKeeper container and start the ZooKeeper service."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'docker run -d -p 2181:2181 --net=pulsar \\\n    -e metadataStoreUrl=zk:zookeeper:2181 \\\n    -e cluster-name=cluster-a -e managedLedgerDefaultEnsembleSize=1 \\\n    -e managedLedgerDefaultWriteQuorum=1 \\\n    -e managedLedgerDefaultAckQuorum=1 \\\n    -v $(pwd)/data/zookeeper:/pulsar/data/zookeeper \\\n    --name zookeeper --hostname zookeeper \\\n    apachepulsar/pulsar-all:latest \\\n    bash -c "bin/apply-config-from-env.py conf/zookeeper.conf && bin/generate-zookeeper-config.sh conf/zookeeper.conf && exec bin/pulsar zookeeper"\n'})}),"\n",(0,a.jsx)(n.h4,{id:"initialize-the-cluster-metadata",children:"Initialize the cluster metadata"}),"\n",(0,a.jsx)(n.p,{children:"After creating the ZooKeeper container successfully, you can use the following command to initialize the cluster metadata."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'docker run --net=pulsar \\\n    --name initialize-pulsar-cluster-metadata \\\n    apachepulsar/pulsar-all:latest bash -c "bin/pulsar initialize-cluster-metadata \\\n--cluster cluster-a \\\n--zookeeper zookeeper:2181 \\\n--configuration-store zookeeper:2181 \\\n--web-service-url http://broker:8080 \\\n--broker-service-url pulsar://broker:6650"\n'})}),"\n",(0,a.jsx)(n.h4,{id:"create-a-bookie-container",children:"Create a bookie container"}),"\n",(0,a.jsx)(n.p,{children:"Create a bookie container and start the bookie service."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'docker run -d -e clusterName=cluster-a \\\n    -e zkServers=zookeeper:2181 --net=pulsar \\\n    -e metadataServiceUri=metadata-store:zk:zookeeper:2181 \\\n    -v $(pwd)/data/bookkeeper:/pulsar/data/bookkeeper \\\n    --name bookie --hostname bookie \\\n    apachepulsar/pulsar-all:latest \\\n    bash -c "bin/apply-config-from-env.py conf/bookkeeper.conf && exec bin/pulsar bookie"\n'})}),"\n",(0,a.jsx)(n.h4,{id:"create-a-broker-container",children:"Create a broker container"}),"\n",(0,a.jsx)(n.p,{children:"Create a broker container and start the broker service."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'docker run -d -p 6650:6650 -p 8080:8080 --net=pulsar  -e metadataStoreUrl=zk:zookeeper:2181  -e zookeeperServers=zookeeper:2181 -e clusterName=cluster-a  -e managedLedgerDefaultEnsembleSize=1 -e managedLedgerDefaultWriteQuorum=1   -e managedLedgerDefaultAckQuorum=1 --name broker --hostname broker apachepulsar/pulsar-all:latest bash -c "bin/apply-config-from-env.py conf/broker.conf && exec bin/pulsar broker"\n'})}),"\n",(0,a.jsxs)(n.h2,{id:"deploy-a-cluster-by-using-composeyml",children:["Deploy a cluster by using ",(0,a.jsx)(n.code,{children:"compose.yml"})]}),"\n",(0,a.jsxs)(n.p,{children:["Use the following template to create a ",(0,a.jsx)(n.code,{children:"compose.yml"})," file to deploy a Pulsar cluster quickly. And you can modify or add the configurations in the ",(0,a.jsx)(n.code,{children:"environment"})," section."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'version: \'3\'\nnetworks:\n  pulsar:\n    driver: bridge\nservices:\n# Start zookeeper\n  zookeeper:\n    image: apachepulsar/pulsar:latest\n    container_name: zookeeper\n    restart: on-failure\n    networks:\n      - pulsar\n    volumes:\n      - ./data/zookeeper:/pulsar/data/zookeeper\n    environment:\n      - metadataStoreUrl=zk:zookeeper:2181\n    command: >\n      bash -c "bin/apply-config-from-env.py conf/zookeeper.conf && \\\n             bin/generate-zookeeper-config.sh conf/zookeeper.conf && \\\n             exec bin/pulsar zookeeper"\n    healthcheck:\n      test: ["CMD", "bin/pulsar-zookeeper-ruok.sh"]\n      interval: 10s\n      timeout: 5s\n      retries: 30\n\n# Init cluster metadata\n  pulsar-init:\n    container_name: pulsar-init\n    hostname: pulsar-init\n    image: apachepulsar/pulsar:latest\n    networks:\n      - pulsar\n    command: >\n      bin/pulsar initialize-cluster-metadata \\\n               --cluster cluster-a \\\n               --zookeeper zookeeper:2181 \\\n               --configuration-store zookeeper:2181 \\\n               --web-service-url http://broker:8080 \\\n               --broker-service-url pulsar://broker:6650\n    depends_on:\n      zookeeper:\n        condition: service_healthy\n\n# Start bookie\n  bookie:\n    image: apachepulsar/pulsar:latest\n    container_name: bookie\n    restart: on-failure\n    networks:\n      - pulsar\n    environment:\n      - clusterName=cluster-a\n      - zkServers=zookeeper:2181\n      - metadataServiceUri=metadata-store:zk:zookeeper:2181\n    depends_on:\n      zookeeper:\n        condition: service_healthy\n      pulsar-init:\n        condition: service_completed_successfully\n  # Map the local directory to the container to avoid bookie startup failure due to insufficient container disks.\n    volumes:\n      - ./data/bookkeeper:/pulsar/data/bookkeeper\n    command: bash -c "bin/apply-config-from-env.py conf/bookkeeper.conf\n      && exec bin/pulsar bookie"\n\n# Start broker\n  broker:\n    image: apachepulsar/pulsar:latest\n    container_name: broker\n    hostname: broker\n    restart: on-failure\n    networks:\n      - pulsar\n    environment:\n      - metadataStoreUrl=zk:zookeeper:2181\n      - zookeeperServers=zookeeper:2181\n      - clusterName=cluster-a\n      - managedLedgerDefaultEnsembleSize=1\n      - managedLedgerDefaultWriteQuorum=1\n      - managedLedgerDefaultAckQuorum=1\n      - advertisedAddress=broker\n      - advertisedListeners=external:pulsar://127.0.0.1:6650\n    depends_on:\n      zookeeper:\n        condition: service_healthy\n      bookie:\n        condition: service_started\n    ports:\n      - "6650:6650"\n      - "8080:8080"\n    command: bash -c "bin/apply-config-from-env.py conf/broker.conf\n      &&  exec bin/pulsar broker"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["To create a Pulsar cluster by using the ",(0,a.jsx)(n.code,{children:"compose.yml"})," file, run the following command."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker compose up -d\n"})}),"\n",(0,a.jsx)(n.p,{children:"If you want to destroy the Pulsar cluster with all the containers, run the following command. It will also delete the network that the containers are connected to."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker compose down\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var o=r(96540);const a={},t=o.createContext(a);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);