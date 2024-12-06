"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[94798],{18057:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"standalone","title":"Set up a standalone Pulsar locally","description":"For local development and testing, you can run Pulsar in standalone mode on your machine. The standalone mode includes a Pulsar broker, the necessary ZooKeeper and BookKeeper components running inside of a single Java Virtual Machine (JVM) process.","source":"@site/versioned_docs/version-2.7.1/standalone.md","sourceDirName":".","slug":"/standalone","permalink":"/docs/2.7.1/standalone","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.1/standalone.md","tags":[],"version":"2.7.1","frontMatter":{"id":"standalone","title":"Set up a standalone Pulsar locally","sidebar_label":"Run Pulsar locally","original_id":"standalone"}}');var r=s(74848),a=s(28453);const o={id:"standalone",title:"Set up a standalone Pulsar locally",sidebar_label:"Run Pulsar locally",original_id:"standalone"},t=void 0,i={},c=[{value:"Pulsar in production?",id:"pulsar-in-production",level:4},{value:"Install Pulsar standalone",id:"install-pulsar-standalone",level:2},{value:"System requirements",id:"system-requirements",level:3},{value:"Install Pulsar using binary release",id:"install-pulsar-using-binary-release",level:3},{value:"What your package contains",id:"what-your-package-contains",level:4},{value:"Install builtin connectors (optional)",id:"install-builtin-connectors-optional",level:3},{value:"Install tiered storage offloaders (optional)",id:"install-tiered-storage-offloaders-optional",level:3},{value:"Start Pulsar standalone",id:"start-pulsar-standalone",level:2},{value:"Use Pulsar standalone",id:"use-pulsar-standalone",level:2},{value:"Consume a message",id:"consume-a-message",level:3},{value:"Produce a message",id:"produce-a-message",level:3},{value:"Stop Pulsar standalone",id:"stop-pulsar-standalone",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"For local development and testing, you can run Pulsar in standalone mode on your machine. The standalone mode includes a Pulsar broker, the necessary ZooKeeper and BookKeeper components running inside of a single Java Virtual Machine (JVM) process."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.h4,{id:"pulsar-in-production",children:"Pulsar in production?"}),"\n",(0,r.jsxs)(n.p,{children:["If you're looking to run a full production Pulsar installation, see the ",(0,r.jsx)(n.a,{href:"/docs/2.7.1/deploy-bare-metal",children:"Deploying a Pulsar instance"})," guide."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"install-pulsar-standalone",children:"Install Pulsar standalone"}),"\n",(0,r.jsx)(n.p,{children:"This tutorial guides you through every step of the installation process."}),"\n",(0,r.jsx)(n.h3,{id:"system-requirements",children:"System requirements"}),"\n",(0,r.jsxs)(n.p,{children:["Currently, Pulsar is available for 64-bit ",(0,r.jsx)(n.strong,{children:"macOS"}),", ",(0,r.jsx)(n.strong,{children:"Linux"}),", and ",(0,r.jsx)(n.strong,{children:"Windows"}),". To use Pulsar, you need to install 64-bit JRE/JDK 8 or later versions."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["By default, Pulsar allocates 2G JVM heap memory to start. It can be changed in ",(0,r.jsx)(n.code,{children:"conf/pulsar_env.sh"})," file under ",(0,r.jsx)(n.code,{children:"PULSAR_MEM"}),". This is extra options passed into JVM."]})}),"\n",(0,r.jsx)(n.h3,{id:"install-pulsar-using-binary-release",children:"Install Pulsar using binary release"}),"\n",(0,r.jsx)(n.p,{children:"To get started with Pulsar, download a binary tarball release in one of the following ways:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["download from the Apache mirror (",(0,r.jsx)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.7.1/apache-pulsar-2.7.1-bin.tar.gz",download:!0,children:"Pulsar 2.7.1 binary release"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["download from the Pulsar ",(0,r.jsx)(n.a,{href:"/download",children:"downloads page"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["download from the Pulsar ",(0,r.jsx)(n.a,{href:"https://github.com/apache/pulsar/releases/latest",children:"releases page"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["use ",(0,r.jsx)(n.a,{href:"https://www.gnu.org/software/wget",children:"wget"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.7.1/apache-pulsar-2.7.1-bin.tar.gz\n\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["After you download the tarball, untar it and use the ",(0,r.jsx)(n.code,{children:"cd"})," command to navigate to the resulting directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n$ tar xvfz apache-pulsar-2.7.1-bin.tar.gz\n$ cd apache-pulsar-2.7.1\n\n"})}),"\n",(0,r.jsx)(n.h4,{id:"what-your-package-contains",children:"What your package contains"}),"\n",(0,r.jsx)(n.p,{children:"The Pulsar binary package initially contains the following directories:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Directory"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Contains"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"bin"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["Pulsar's command-line tools, such as ",(0,r.jsx)(n.code,{children:"pulsar"}),"](reference-cli-tools.md#pulsar) and [",(0,r.jsx)(n.code,{children:"pulsar-admin"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"conf"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["Configuration files for Pulsar, including ",(0,r.jsx)(n.a,{href:"/docs/2.7.1/reference-configuration#broker",children:"broker configuration"}),", ",(0,r.jsx)(n.a,{href:"/docs/2.7.1/reference-configuration#zookeeper",children:"ZooKeeper configuration"}),", and more."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"examples"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["A Java JAR file containing ",(0,r.jsx)(n.a,{href:"/docs/2.7.1/functions-overview",children:"Pulsar Functions"})," example."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"lib"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["The ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/JAR_(file_format)",children:"JAR"})," files used by Pulsar."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"licenses"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["License files, in the",(0,r.jsx)(n.code,{children:".txt"})," form, for various components of the Pulsar ",(0,r.jsx)(n.a,{href:"https://github.com/apache/pulsar",children:"codebase"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"These directories are created once you begin running Pulsar."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Directory"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Contains"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"data"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The data storage directory used by ZooKeeper and BookKeeper."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"instances"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["Artifacts created for ",(0,r.jsx)(n.a,{href:"/docs/2.7.1/functions-overview",children:"Pulsar Functions"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"logs"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Logs created by the installation."})]})]})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"If you want to use builtin connectors and tiered storage offloaders, you can install them according to the following instructions\uff1a"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#install-builtin-connectors-optional",children:"Install builtin connectors (optional)"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#install-tiered-storage-offloaders-optional",children:"Install tiered storage offloaders (optional)"}),"\nOtherwise, skip this step and perform the next step ",(0,r.jsx)(n.a,{href:"#start-pulsar-standalone",children:"Start Pulsar standalone"}),". Pulsar can be successfully installed without installing bulitin connectors and tiered storage offloaders."]}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"install-builtin-connectors-optional",children:"Install builtin connectors (optional)"}),"\n",(0,r.jsxs)(n.p,{children:["Since ",(0,r.jsx)(n.code,{children:"2.1.0-incubating"})," release, Pulsar releases a separate binary distribution, containing all the ",(0,r.jsx)(n.code,{children:"builtin"})," connectors.\nTo enable those ",(0,r.jsx)(n.code,{children:"builtin"})," connectors, you can download the connectors tarball release in one of the following ways:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["download from the Apache mirror ",(0,r.jsx)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.7.1/connectors",download:!0,children:"Pulsar IO Connectors 2.7.1 release"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["download from the Pulsar ",(0,r.jsx)(n.a,{href:"/download",children:"downloads page"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["download from the Pulsar ",(0,r.jsx)(n.a,{href:"https://github.com/apache/pulsar/releases/latest",children:"releases page"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["use ",(0,r.jsx)(n.a,{href:"https://www.gnu.org/software/wget",children:"wget"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.7.1/connectors/{connector}-2.7.1.nar\n\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["After you download the nar file, copy the file to the ",(0,r.jsx)(n.code,{children:"connectors"})," directory in the pulsar directory.\nFor example, if you download the ",(0,r.jsx)(n.code,{children:"pulsar-io-aerospike-2.7.1.nar"})," connector file, enter the following commands:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n$ mkdir connectors\n$ mv pulsar-io-aerospike-2.7.1.nar connectors\n\n$ ls connectors\npulsar-io-aerospike-2.7.1.nar\n...\n\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you are running Pulsar in a bare metal cluster, make sure ",(0,r.jsx)(n.code,{children:"connectors"})," tarball is unzipped in every pulsar directory of the broker\n(or in every pulsar directory of function-worker if you are running a separate worker cluster for Pulsar Functions)."]}),"\n",(0,r.jsxs)(n.li,{children:["If you are ",(0,r.jsx)(n.a,{href:"/docs/2.7.1/getting-started-docker",children:"running Pulsar in Docker"})," or deploying Pulsar using a docker image (e.g. ",(0,r.jsx)(n.a,{href:"/docs/2.7.1/deploy-kubernetes",children:"K8S"})," or ",(0,r.jsx)(n.a,{href:"https://dcos.io/",children:"DC/OS"}),"),\nyou can use the ",(0,r.jsx)(n.code,{children:"apachepulsar/pulsar-all"})," image instead of the ",(0,r.jsx)(n.code,{children:"apachepulsar/pulsar"})," image. ",(0,r.jsx)(n.code,{children:"apachepulsar/pulsar-all"})," image has already bundled ",(0,r.jsx)(n.a,{href:"/docs/2.7.1/io-overview#working-with-connectors",children:"all builtin connectors"}),"."]}),"\n"]})}),"\n",(0,r.jsx)(n.h3,{id:"install-tiered-storage-offloaders-optional",children:"Install tiered storage offloaders (optional)"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Since ",(0,r.jsx)(n.code,{children:"2.2.0"})," release, Pulsar releases a separate binary distribution, containing the tiered storage offloaders.\nTo enable tiered storage feature, follow the instructions below; otherwise skip this section."]})}),"\n",(0,r.jsxs)(n.p,{children:["To get started with ",(0,r.jsx)(n.a,{href:"/docs/2.7.1/concepts-tiered-storage",children:"tiered storage offloaders"}),", you need to download the offloaders tarball release on every broker node in one of the following ways:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["download from the Apache mirror ",(0,r.jsx)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.7.1/apache-pulsar-offloaders-2.7.1-bin.tar.gz",download:!0,children:"Pulsar Tiered Storage Offloaders 2.7.1 release"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["download from the Pulsar ",(0,r.jsx)(n.a,{href:"/download",children:"downloads page"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["download from the Pulsar ",(0,r.jsx)(n.a,{href:"https://github.com/apache/pulsar/releases/latest",children:"releases page"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["use ",(0,r.jsx)(n.a,{href:"https://www.gnu.org/software/wget",children:"wget"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.7.1/apache-pulsar-offloaders-2.7.1-bin.tar.gz\n\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["After you download the tarball, untar the offloaders package and copy the offloaders as ",(0,r.jsx)(n.code,{children:"offloaders"}),"\nin the pulsar directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n$ tar xvfz apache-pulsar-offloaders-2.7.1-bin.tar.gz\n\n// you will find a directory named `apache-pulsar-offloaders-2.7.1` in the pulsar directory\n// then copy the offloaders\n\n$ mv apache-pulsar-offloaders-2.7.1/offloaders offloaders\n\n$ ls offloaders\ntiered-storage-jcloud-2.7.1.nar\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For more information on how to configure tiered storage, see ",(0,r.jsx)(n.a,{href:"/docs/2.7.1/cookbooks-tiered-storage",children:"Tiered storage cookbook"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you are running Pulsar in a bare metal cluster, make sure that ",(0,r.jsx)(n.code,{children:"offloaders"})," tarball is unzipped in every broker's pulsar directory."]}),"\n",(0,r.jsxs)(n.li,{children:["If you are ",(0,r.jsx)(n.a,{href:"/docs/2.7.1/getting-started-docker",children:"running Pulsar in Docker"})," or deploying Pulsar using a docker image (e.g. ",(0,r.jsx)(n.a,{href:"/docs/2.7.1/deploy-kubernetes",children:"K8S"})," or ",(0,r.jsx)(n.a,{href:"https://dcos.io/",children:"DC/OS"}),"),\nyou can use the ",(0,r.jsx)(n.code,{children:"apachepulsar/pulsar-all"})," image instead of the ",(0,r.jsx)(n.code,{children:"apachepulsar/pulsar"})," image. ",(0,r.jsx)(n.code,{children:"apachepulsar/pulsar-all"})," image has already bundled tiered storage offloaders."]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"start-pulsar-standalone",children:"Start Pulsar standalone"}),"\n",(0,r.jsxs)(n.p,{children:["Once you have an up-to-date local copy of the release, you can start a local cluster using the ",(0,r.jsx)(n.a,{href:"/docs/2.7.1/reference-cli-tools#pulsar",children:(0,r.jsx)(n.code,{children:"pulsar"})})," command, which is stored in the ",(0,r.jsx)(n.code,{children:"bin"})," directory, and specifying that you want to start Pulsar in standalone mode."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar standalone\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you have started Pulsar successfully, you will see ",(0,r.jsx)(n.code,{children:"INFO"}),"-level log messages like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n2017-06-01 14:46:29,192 - INFO  - [main:WebSocketService@95] - Configuration Store cache started\n2017-06-01 14:46:29,192 - INFO  - [main:AuthenticationService@61] - Authentication is disabled\n2017-06-01 14:46:29,192 - INFO  - [main:WebSocketService@108] - Pulsar WebSocket Service started\n\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The service is running on your terminal, which is under your direct control. If you need to run other commands, open a new terminal window."}),"\n"]})}),"\n",(0,r.jsxs)(n.p,{children:["You can also run the service as a background process using the ",(0,r.jsx)(n.code,{children:"pulsar-daemon start standalone"})," command. For more information, see ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/docs/en/reference-cli-tools/#pulsar-daemon",children:"pulsar-daemon"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["By default, there is no encryption, authentication, or authorization configured. Apache Pulsar can be accessed from remote server without any authorization. Please do check ",(0,r.jsx)(n.a,{href:"/docs/2.7.1/security-overview",children:"Security Overview"})," document to secure your deployment."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When you start a local standalone cluster, a ",(0,r.jsx)(n.code,{children:"public/default"})," ",(0,r.jsx)(n.a,{href:"/docs/2.7.1/concepts-messaging#namespaces",children:"namespace"})," is created automatically. The namespace is used for development purposes. All Pulsar topics are managed within namespaces. For more information, see ",(0,r.jsx)(n.a,{href:"/docs/2.7.1/concepts-messaging#topics",children:"Topics"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"use-pulsar-standalone",children:"Use Pulsar standalone"}),"\n",(0,r.jsxs)(n.p,{children:["Pulsar provides a CLI tool called ",(0,r.jsx)(n.a,{href:"/docs/2.7.1/reference-cli-tools#pulsar-client",children:(0,r.jsx)(n.code,{children:"pulsar-client"})}),". The pulsar-client tool enables you to consume and produce messages to a Pulsar topic in a running cluster."]}),"\n",(0,r.jsx)(n.h3,{id:"consume-a-message",children:"Consume a message"}),"\n",(0,r.jsxs)(n.p,{children:["The following command consumes a message with the subscription name ",(0,r.jsx)(n.code,{children:"first-subscription"})," to the ",(0,r.jsx)(n.code,{children:"my-topic"})," topic:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'\n$ bin/pulsar-client consume my-topic -s "first-subscription"\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If the message has been successfully consumed, you will see a confirmation like the following in the ",(0,r.jsx)(n.code,{children:"pulsar-client"})," logs:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\n09:56:55.566 [pulsar-client-io-1-1] INFO  org.apache.pulsar.client.impl.MultiTopicsConsumerImpl - [TopicsConsumerFakeTopicNamee2df9] [first-subscription] Success subscribe new topic my-topic in topics consumer, partitions: 4, allTopicPartitionsNumber: 4\n\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["As you have noticed that we do not explicitly create the ",(0,r.jsx)(n.code,{children:"my-topic"})," topic, from which we consume the message. When you consume a message from a topic that does not yet exist, Pulsar creates that topic for you automatically. Producing a message to a topic that does not exist will automatically create that topic for you as well."]})}),"\n",(0,r.jsx)(n.h3,{id:"produce-a-message",children:"Produce a message"}),"\n",(0,r.jsxs)(n.p,{children:["The following command produces a message saying ",(0,r.jsx)(n.code,{children:"hello-pulsar"})," to the ",(0,r.jsx)(n.code,{children:"my-topic"})," topic:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'\n$ bin/pulsar-client produce my-topic --messages "hello-pulsar"\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If the message has been successfully published to the topic, you will see a confirmation like the following in the ",(0,r.jsx)(n.code,{children:"pulsar-client"})," logs:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\n13:09:39.356 [main] INFO  org.apache.pulsar.client.cli.PulsarClientTool - 1 messages successfully produced\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"stop-pulsar-standalone",children:"Stop Pulsar standalone"}),"\n",(0,r.jsxs)(n.p,{children:["Press ",(0,r.jsx)(n.code,{children:"Ctrl+C"})," to stop a local standalone Pulsar."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If the service runs as a background process using the ",(0,r.jsx)(n.code,{children:"pulsar-daemon start standalone"})," command, then use the ",(0,r.jsx)(n.code,{children:"pulsar-daemon stop standalone"}),"  command to stop the service.\nFor more information, see ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/docs/en/reference-cli-tools/#pulsar-daemon",children:"pulsar-daemon"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>t});var l=s(96540);const r={},a=l.createContext(r);function o(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);