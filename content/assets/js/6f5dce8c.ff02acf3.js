"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[39587],{44897:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"standalone","title":"Setting up a local standalone cluster","description":"For the purposes of local development and testing, you can run Pulsar in standalone mode on your own machine. Standalone mode includes a Pulsar broker as well as the necessary ZooKeeper and BookKeeper components running inside of a single Java Virtual Machine (JVM) process.","source":"@site/versioned_docs/version-2.3.0/standalone.md","sourceDirName":".","slug":"/standalone","permalink":"/docs/2.3.0/standalone","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.0/standalone.md","tags":[],"version":"2.3.0","frontMatter":{"id":"standalone","title":"Setting up a local standalone cluster","sidebar_label":"Run Pulsar locally","original_id":"standalone"}}');var r=s(74848),a=s(28453);const i={id:"standalone",title:"Setting up a local standalone cluster",sidebar_label:"Run Pulsar locally",original_id:"standalone"},t=void 0,o={},c=[{value:"Pulsar in production?",id:"pulsar-in-production",level:4},{value:"Run Pulsar Standalone Manually",id:"run-pulsar-standalone-manually",level:2},{value:"System requirements",id:"system-requirements",level:3},{value:"Installing Pulsar",id:"installing-pulsar",level:3},{value:"What your package contains",id:"what-your-package-contains",level:3},{value:"Installing Builtin Connectors (optional)",id:"installing-builtin-connectors-optional",level:3},{value:"NOTES",id:"notes",level:4},{value:"Installing Tiered Storage Offloaders (optional)",id:"installing-tiered-storage-offloaders-optional",level:2},{value:"NOTES",id:"notes-1",level:4},{value:"Starting the cluster",id:"starting-the-cluster",level:3},{value:"Automatically created namespace",id:"automatically-created-namespace",level:4},{value:"Run Pulsar Standalone in Docker",id:"run-pulsar-standalone-in-docker",level:2},{value:"Testing your cluster setup",id:"testing-your-cluster-setup",level:2},{value:"No need to explicitly create new topics",id:"no-need-to-explicitly-create-new-topics",level:4},{value:"Using CLI pulsar clients",id:"using-cli-pulsar-clients",level:2},{value:"Using Pulsar clients locally",id:"using-pulsar-clients-locally",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"For the purposes of local development and testing, you can run Pulsar in standalone mode on your own machine. Standalone mode includes a Pulsar broker as well as the necessary ZooKeeper and BookKeeper components running inside of a single Java Virtual Machine (JVM) process."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.h4,{id:"pulsar-in-production",children:"Pulsar in production?"}),"\n",(0,r.jsxs)(n.p,{children:["If you're looking to run a full production Pulsar installation, see the ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/deploy-bare-metal",children:"Deploying a Pulsar instance"})," guide."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"run-pulsar-standalone-manually",children:"Run Pulsar Standalone Manually"}),"\n",(0,r.jsx)(n.h3,{id:"system-requirements",children:"System requirements"}),"\n",(0,r.jsxs)(n.p,{children:["Currently, Pulsar is available for 64-bit ",(0,r.jsx)(n.strong,{children:"macOS"}),", ",(0,r.jsx)(n.strong,{children:"Linux"}),", and ",(0,r.jsx)(n.strong,{children:"Windows"}),". To use Pulsar, you need to install 64-bit JRE/JDK 8 or later versions."]}),"\n",(0,r.jsx)(n.h3,{id:"installing-pulsar",children:"Installing Pulsar"}),"\n",(0,r.jsx)(n.p,{children:"To get started running Pulsar, download a binary tarball release in one of the following ways:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"by clicking the link below and downloading the release from an Apache mirror:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.0/apache-pulsar-2.3.0-bin.tar.gz",download:!0,children:"Pulsar 2.3.0 binary release"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["from the Pulsar ",(0,r.jsx)(n.a,{href:"/download",children:"downloads page"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["from the Pulsar ",(0,r.jsx)(n.a,{href:"https://github.com/apache/pulsar/releases/latest",children:"releases page"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["using ",(0,r.jsx)(n.a,{href:"https://www.gnu.org/software/wget",children:"wget"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.3.0/apache-pulsar-2.3.0-bin.tar.gz\n\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Once the tarball is downloaded, untar it and ",(0,r.jsx)(n.code,{children:"cd"})," into the resulting directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n$ tar xvfz apache-pulsar-2.3.0-bin.tar.gz\n$ cd apache-pulsar-2.3.0\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"what-your-package-contains",children:"What your package contains"}),"\n",(0,r.jsx)(n.p,{children:"The Pulsar binary package initially contains the following directories:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Directory"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Contains"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"bin"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["Pulsar's command-line tools, such as ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/reference-cli-tools#pulsar",children:(0,r.jsx)(n.code,{children:"pulsar"})})," and ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/reference-pulsar-admin",children:(0,r.jsx)(n.code,{children:"pulsar-admin"})})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"conf"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["Configuration files for Pulsar, including for ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/reference-configuration#broker",children:"broker configuration"}),", ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/reference-configuration#zookeeper",children:"ZooKeeper configuration"}),", and more"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"examples"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["A Java JAR file containing example ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/functions-overview",children:"Pulsar Functions"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"lib"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["The ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/JAR_(file_format)",children:"JAR"})," files used by Pulsar"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"licenses"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["License files, in ",(0,r.jsx)(n.code,{children:".txt"})," form, for various components of the Pulsar ",(0,r.jsx)(n.a,{href:"https://github.com/apache/pulsar",children:"codebase"})]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"These directories will be created once you begin running Pulsar:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Directory"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Contains"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"data"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The data storage directory used by ZooKeeper and BookKeeper"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"instances"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["Artifacts created for ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/functions-overview",children:"Pulsar Functions"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"logs"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Logs created by the installation"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"installing-builtin-connectors-optional",children:"Installing Builtin Connectors (optional)"}),"\n",(0,r.jsxs)(n.p,{children:["Since release ",(0,r.jsx)(n.code,{children:"2.1.0-incubating"}),", Pulsar releases a separate binary distribution, containing all the ",(0,r.jsx)(n.code,{children:"builtin"})," connectors.\nIf you would like to enable those ",(0,r.jsx)(n.code,{children:"builtin"})," connectors, you can download the connectors tarball release in one of the following ways:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"by clicking the link below and downloading the release from an Apache mirror:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.0/connectors",download:!0,children:"Pulsar IO Connectors 2.3.0 release"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["from the Pulsar ",(0,r.jsx)(n.a,{href:"/download",children:"downloads page"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["from the Pulsar ",(0,r.jsx)(n.a,{href:"https://github.com/apache/pulsar/releases/latest",children:"releases page"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["using ",(0,r.jsx)(n.a,{href:"https://www.gnu.org/software/wget",children:"wget"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.3.0/connectors/{connector}-2.3.0.nar\n\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Once the nar file is downloaded, copy the file to directory ",(0,r.jsx)(n.code,{children:"connectors"})," in the pulsar directory,\nfor example, if the connector file ",(0,r.jsx)(n.code,{children:"pulsar-io-aerospike-2.3.0.nar"})," is downloaded:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n$ mkdir connectors\n$ mv pulsar-io-aerospike-2.3.0.nar connectors\n\n$ ls connectors\npulsar-io-aerospike-2.3.0.nar\n...\n\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.h4,{id:"notes",children:"NOTES"}),"\n",(0,r.jsxs)(n.p,{children:["If you are running Pulsar in a bare metal cluster, you need to make sure ",(0,r.jsx)(n.code,{children:"connectors"})," tarball is unzipped in every broker's pulsar directory\n(or in every function-worker's pulsar directory if you are running a separate worker cluster for Pulsar functions)."]}),"\n",(0,r.jsxs)(n.p,{children:["If you are ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/getting-started-docker",children:"running Pulsar in Docker"})," or deploying Pulsar using a docker image (e.g. ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/deploy-kubernetes",children:"K8S"})," or ",(0,r.jsx)(n.a,{href:"https://dcos.io/",children:"DC/OS"}),"),\nyou can use ",(0,r.jsx)(n.code,{children:"apachepulsar/pulsar-all"})," image instead of ",(0,r.jsx)(n.code,{children:"apachepulsar/pulsar"})," image. ",(0,r.jsx)(n.code,{children:"apachepulsar/pulsar-all"})," image has already bundled ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/io-overview#working-with-connectors",children:"all builtin connectors"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installing-tiered-storage-offloaders-optional",children:"Installing Tiered Storage Offloaders (optional)"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Since release ",(0,r.jsx)(n.code,{children:"2.2.0"}),", Pulsar releases a separate binary distribution, containing the tiered storage offloaders.\nIf you would like to enable tiered storage feature, you can follow the instructions as below; otherwise you can\nskip this section for now."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["To get started using ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/concepts-tiered-storage",children:"tiered storage offloaders"}),", you'll need to download the offloaders tarball release on every broker node in\none of the following ways:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"by clicking the link below and downloading the release from an Apache mirror:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.0/apache-pulsar-offloaders-2.3.0-bin.tar.gz",download:!0,children:"Pulsar Tiered Storage Offloaders 2.3.0 release"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["from the Pulsar ",(0,r.jsx)(n.a,{href:"/download",children:"downloads page"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["from the Pulsar ",(0,r.jsx)(n.a,{href:"https://github.com/apache/pulsar/releases/latest",children:"releases page"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["using ",(0,r.jsx)(n.a,{href:"https://www.gnu.org/software/wget",children:"wget"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.3.0/apache-pulsar-offloaders-2.3.0-bin.tar.gz\n\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Once the tarball is downloaded, in the pulsar directory, untar the offloaders package and copy the offloaders as ",(0,r.jsx)(n.code,{children:"offloaders"}),"\nin the pulsar directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n$ tar xvfz apache-pulsar-offloaders-2.3.0-bin.tar.gz\n\n// you will find a directory named `apache-pulsar-offloaders-2.3.0` in the pulsar directory\n// then copy the offloaders\n\n$ mv apache-pulsar-offloaders-2.3.0/offloaders offloaders\n\n$ ls offloaders\ntiered-storage-jcloud-2.3.0.nar\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For more details of how to configure tiered storage feature, you could reference this ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/cookbooks-tiered-storage",children:"Tiered storage cookbook"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.h4,{id:"notes-1",children:"NOTES"}),"\n",(0,r.jsxs)(n.p,{children:["If you are running Pulsar in a bare metal cluster, you need to make sure ",(0,r.jsx)(n.code,{children:"offloaders"})," tarball is unzipped in every broker's pulsar directory"]}),"\n",(0,r.jsxs)(n.p,{children:["If you are ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/getting-started-docker",children:"running Pulsar in Docker"})," or deploying Pulsar using a docker image (e.g. ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/deploy-kubernetes",children:"K8S"})," or ",(0,r.jsx)(n.a,{href:"https://dcos.io/",children:"DC/OS"}),"),\nyou can use ",(0,r.jsx)(n.code,{children:"apachepulsar/pulsar-all"})," image instead of ",(0,r.jsx)(n.code,{children:"apachepulsar/pulsar"})," image. ",(0,r.jsx)(n.code,{children:"apachepulsar/pulsar-all"})," image has already bundled tiered storage offloaders."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"starting-the-cluster",children:"Starting the cluster"}),"\n",(0,r.jsxs)(n.p,{children:["Once you have an up-to-date local copy of the release, you can start up a local cluster using the ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/reference-cli-tools#pulsar",children:(0,r.jsx)(n.code,{children:"pulsar"})})," command, which is stored in the ",(0,r.jsx)(n.code,{children:"bin"})," directory, and specifying that you want to start up Pulsar in standalone mode:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar standalone\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If Pulsar has been successfully started, you should see ",(0,r.jsx)(n.code,{children:"INFO"}),"-level log messages like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n2017-06-01 14:46:29,192 - INFO  - [main:WebSocketService@95] - Configuration Store cache started\n2017-06-01 14:46:29,192 - INFO  - [main:AuthenticationService@61] - Authentication is disabled\n2017-06-01 14:46:29,192 - INFO  - [main:WebSocketService@108] - Pulsar WebSocket Service started\n\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.h4,{id:"automatically-created-namespace",children:"Automatically created namespace"}),"\n",(0,r.jsxs)(n.p,{children:["When you start a local standalone cluster, Pulsar will automatically create a ",(0,r.jsx)(n.code,{children:"public/default"})," ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/concepts-messaging#namespaces",children:"namespace"})," that you can use for development purposes. All Pulsar topics are managed within namespaces. For more info, see ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/concepts-messaging#topics",children:"Topics"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"run-pulsar-standalone-in-docker",children:"Run Pulsar Standalone in Docker"}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, you can run pulsar standalone locally in docker."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ndocker run -it -p 80:80 -p 8080:8080 -p 6650:6650 apachepulsar/pulsar-standalone\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"The command forwards following port to localhost:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"80: the port for pulsar dashboard"}),"\n",(0,r.jsx)(n.li,{children:"8080: the http service url for pulsar service"}),"\n",(0,r.jsx)(n.li,{children:"6650: the binary protocol service url for pulsar service"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["After the docker container is running, you can access the dashboard under ",(0,r.jsx)(n.a,{href:"http://localhost",children:"http://localhost"})," ."]}),"\n",(0,r.jsx)(n.h2,{id:"testing-your-cluster-setup",children:"Testing your cluster setup"}),"\n",(0,r.jsxs)(n.p,{children:["Pulsar provides a CLI tool called ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/reference-cli-tools#pulsar-client",children:(0,r.jsx)(n.code,{children:"pulsar-client"})})," that enables you to do things like send messages to a Pulsar topic in a running cluster. This command will send a simple message saying ",(0,r.jsx)(n.code,{children:"hello-pulsar"})," to the ",(0,r.jsx)(n.code,{children:"my-topic"})," topic:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'\n$ bin/pulsar-client produce my-topic --messages "hello-pulsar"\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If the message has been successfully published to the topic, you should see a confirmation like this in the ",(0,r.jsx)(n.code,{children:"pulsar-client"})," logs:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\n13:09:39.356 [main] INFO  org.apache.pulsar.client.cli.PulsarClientTool - 1 messages successfully produced\n\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.h4,{id:"no-need-to-explicitly-create-new-topics",children:"No need to explicitly create new topics"}),"\n",(0,r.jsxs)(n.p,{children:["You may have noticed that we did not explicitly create the ",(0,r.jsx)(n.code,{children:"my-topic"})," topic to which we sent the ",(0,r.jsx)(n.code,{children:"hello-pulsar"})," message. If you attempt to write a message to a topic that does not yet exist, Pulsar will automatically create that topic for you."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"using-cli-pulsar-clients",children:"Using CLI pulsar clients"}),"\n",(0,r.jsxs)(n.p,{children:["Pulsar provides a CLI tool called ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/reference-cli-tools#pulsar-client",children:(0,r.jsx)(n.code,{children:"pulsar-client"})})," that enables you to do things like receive messages from a Pulsar topic in a running cluster. This command will receive a simple message saying ",(0,r.jsx)(n.code,{children:"hello-pulsar"})," to the ",(0,r.jsx)(n.code,{children:"my-topic"})," topic:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-client consume my-topic -t Shared -s demo-sub -n 0\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If the message has been successfully published to the topic as above, you should see a confirmation like this in the ",(0,r.jsx)(n.code,{children:"pulsar-client"})," logs:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\n----- got message -----\nhello-pulsar\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"using-pulsar-clients-locally",children:"Using Pulsar clients locally"}),"\n",(0,r.jsxs)(n.p,{children:["Pulsar currently offers client libraries for ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/client-libraries-java",children:"Java"}),",  ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/client-libraries-go",children:"Go"}),", ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/client-libraries-python",children:"Python"})," and ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/client-libraries-cpp",children:"C++"}),". If you're running a local standalone cluster, you can use one of these root URLs for interacting with your cluster:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"http://localhost:8080"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"pulsar://localhost:6650"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Here's an example producer for a Pulsar topic using the ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/client-libraries-java",children:"Java"})," client:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nString localClusterUrl = "pulsar://localhost:6650";\n\nPulsarClient client = PulsarClient.builder().serviceUrl(localClusterUrl).build();\nProducer<byte[]> producer = client.newProducer().topic("my-topic").create();\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Here's an example ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/client-libraries-python",children:"Python"})," producer:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nproducer = client.create_producer('my-topic')\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Finally, here's an example ",(0,r.jsx)(n.a,{href:"/docs/2.3.0/client-libraries-cpp",children:"C++"})," producer:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'\nClient client("pulsar://localhost:6650");\nProducer producer;\nResult result = client.createProducer("my-topic", producer);\nif (result != ResultOk) {\n    LOG_ERROR("Error creating producer: " << result);\n    return -1;\n}\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>t});var l=s(96540);const r={},a=l.createContext(r);function i(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);