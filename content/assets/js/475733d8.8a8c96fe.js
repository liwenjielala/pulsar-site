"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5386],{26780:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>a,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tiered-storage-filesystem","title":"Use filesystem offloader with Pulsar","description":"This chapter guides you through every step of installing and configuring the filesystem offloader and using it with Pulsar.","source":"@site/versioned_docs/version-2.8.x/tiered-storage-filesystem.md","sourceDirName":".","slug":"/tiered-storage-filesystem","permalink":"/docs/2.8.x/tiered-storage-filesystem","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/tiered-storage-filesystem.md","tags":[],"version":"2.8.x","frontMatter":{"id":"tiered-storage-filesystem","title":"Use filesystem offloader with Pulsar","sidebar_label":"Filesystem offloader","original_id":"tiered-storage-filesystem"},"sidebar":"docsSidebar","previous":{"title":"GCS offloader","permalink":"/docs/2.8.x/tiered-storage-gcs"},"next":{"title":"Azure BlobStore offloader","permalink":"/docs/2.8.x/tiered-storage-azure"}}');var t=s(74848),l=s(28453),i=s(11470),o=s(19365);const a={id:"tiered-storage-filesystem",title:"Use filesystem offloader with Pulsar",sidebar_label:"Filesystem offloader",original_id:"tiered-storage-filesystem"},d=void 0,c={},h=[{value:"Installation",id:"installation",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Step",id:"step",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Configure filesystem offloader driver",id:"configure-filesystem-offloader-driver",level:3},{value:"Run filesystem offloader automatically",id:"run-filesystem-offloader-automatically",level:3},{value:"Example",id:"example",level:4},{value:"Run filesystem offloader manually",id:"run-filesystem-offloader-manually",level:3},{value:"Example",id:"example-1",level:4},{value:"Tutorial",id:"tutorial",level:2},{value:"Step 1: Prepare the HDFS environment",id:"step-1-prepare-the-hdfs-environment",level:3},{value:"Step 2: Install the filesystem offloader",id:"step-2-install-the-filesystem-offloader",level:3},{value:"Step 3: Configure the filesystem offloader",id:"step-3-configure-the-filesystem-offloader",level:3},{value:"Step 1: Install the filesystem offloader",id:"step-1-install-the-filesystem-offloader",level:3},{value:"Step 2: Mont your NFS to your local filesystem",id:"step-2-mont-your-nfs-to-your-local-filesystem",level:3},{value:"Step 3: Configure the filesystem offloader driver",id:"step-3-configure-the-filesystem-offloader-driver",level:3},{value:"Step 4: Offload data from BookKeeper to filesystem",id:"step-4-offload-data-from-bookkeeper-to-filesystem",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This chapter guides you through every step of installing and configuring the filesystem offloader and using it with Pulsar."}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"This section describes how to install the filesystem offloader."}),"\n",(0,t.jsx)(n.h3,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Pulsar: 2.4.2 or higher versions"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"step",children:"Step"}),"\n",(0,t.jsx)(n.p,{children:"This example uses Pulsar 2.5.1."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Download the Pulsar tarball using one of the following ways:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Download the Pulsar tarball from the ",(0,t.jsx)(n.a,{href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.1/apache-pulsar-2.5.1-bin.tar.gz",children:"Apache mirror"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Download the Pulsar tarball from the Pulsar ",(0,t.jsx)(n.a,{href:"pathname:///download",children:"download page"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.a,{href:"https://www.gnu.org/software/wget",children:"wget"})," command to dowload the Pulsar tarball."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\nwget https://archive.apache.org/dist/pulsar/pulsar-2.5.1/apache-pulsar-2.5.1-bin.tar.gz\n\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Download and untar the Pulsar offloaders package."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\nwget https://downloads.apache.org/pulsar/pulsar-2.5.1/apache-pulsar-offloaders-2.5.1-bin.tar.gz\n\ntar xvfz apache-pulsar-offloaders-2.5.1-bin.tar.gz\n\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you run Pulsar in a bare metal cluster, ensure that the ",(0,t.jsx)(n.code,{children:"offloaders"})," tarball is unzipped in every broker's Pulsar directory."]}),"\n",(0,t.jsxs)(n.li,{children:["If you run Pulsar in Docker or deploying Pulsar using a Docker image (such as K8S and DCOS), you can use the ",(0,t.jsx)(n.code,{children:"apachepulsar/pulsar-all"})," image. The ",(0,t.jsx)(n.code,{children:"apachepulsar/pulsar-all"})," image has already bundled tiered storage offloaders."]}),"\n"]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy the Pulsar offloaders as ",(0,t.jsx)(n.code,{children:"offloaders"})," in the Pulsar directory."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\nmv apache-pulsar-offloaders-2.5.1/offloaders apache-pulsar-2.5.1/offloaders\n\nls offloaders\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Output"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\ntiered-storage-file-system-2.5.1.nar\ntiered-storage-jcloud-2.5.1.nar\n\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you run Pulsar in a bare metal cluster, ensure that ",(0,t.jsx)(n.code,{children:"offloaders"})," tarball is unzipped in every broker's Pulsar directory."]}),"\n",(0,t.jsxs)(n.li,{children:["If you run Pulsar in Docker or deploying Pulsar using a Docker image (such as K8s and DCOS), you can use the ",(0,t.jsx)(n.code,{children:"apachepulsar/pulsar-all"})," image. The ",(0,t.jsx)(n.code,{children:"apachepulsar/pulsar-all"})," image has already bundled tiered storage offloaders."]}),"\n"]})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Before offloading data from BookKeeper to filesystem, you need to configure some properties of the filesystem offloader driver."})}),"\n",(0,t.jsx)(n.p,{children:"Besides, you can also configure the filesystem offloader to run it automatically or trigger it manually."}),"\n",(0,t.jsx)(n.h3,{id:"configure-filesystem-offloader-driver",children:"Configure filesystem offloader driver"}),"\n",(0,t.jsxs)(n.p,{children:["You can configure the filesystem offloader driver in the ",(0,t.jsx)(n.code,{children:"broker.conf"})," or ",(0,t.jsx)(n.code,{children:"standalone.conf"})," configuration file."]}),"\n",(0,t.jsxs)(i.A,{defaultValue:"HDFS",values:[{label:"HDFS",value:"HDFS"},{label:"NFS",value:"NFS"}],children:[(0,t.jsx)(o.A,{value:"HDFS",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Required"})," configurations are as below."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Example value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"managedLedgerOffloadDriver"})}),(0,t.jsx)(n.td,{children:"Offloader driver name, which is case-insensitive."}),(0,t.jsx)(n.td,{children:"filesystem"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"fileSystemURI"})}),(0,t.jsx)(n.td,{children:"Connection address, which is the URI to access the default Hadoop distributed file system."}),(0,t.jsx)(n.td,{children:"hdfs://127.0.0.1:9000"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"offloadersDirectory"})}),(0,t.jsx)(n.td,{children:"Offloader directory"}),(0,t.jsx)(n.td,{children:"offloaders"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"fileSystemProfilePath"})}),(0,t.jsx)(n.td,{children:"Hadoop profile path. The configuration file is stored in the Hadoop profile path. It contains various settings for Hadoop performance tuning."}),(0,t.jsx)(n.td,{children:"conf/filesystem_offload_core_site.xml"})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Optional"})," configurations are as below."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Example value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"managedLedgerMinLedgerRolloverTimeMinutes"})}),(0,t.jsxs)(n.td,{children:["Minimum time between ledger rollover for a topic. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.strong,{children:"Note"}),": it is not recommended to set this parameter in the production environment."]}),(0,t.jsx)(n.td,{children:"10"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"managedLedgerMaxEntriesPerLedger"})}),(0,t.jsxs)(n.td,{children:["Maximum number of entries to append to a ledger before triggering a rollover.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.strong,{children:"Note"}),": it is not recommended to set this parameter in the production environment."]}),(0,t.jsx)(n.td,{children:"50000"})]})]})]}),"\n"]}),"\n"]})}),(0,t.jsx)(o.A,{value:"NFS",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Required"})," configurations are as below."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Example value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"managedLedgerOffloadDriver"})}),(0,t.jsx)(n.td,{children:"Offloader driver name, which is case-insensitive."}),(0,t.jsx)(n.td,{children:"filesystem"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"offloadersDirectory"})}),(0,t.jsx)(n.td,{children:"Offloader directory"}),(0,t.jsx)(n.td,{children:"offloaders"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"fileSystemProfilePath"})}),(0,t.jsx)(n.td,{children:"NFS profile path. The configuration file is stored in the NFS profile path. It contains various settings for performance tuning."}),(0,t.jsx)(n.td,{children:"conf/filesystem_offload_core_site.xml"})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Optional"})," configurations are as below."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Example value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"managedLedgerMinLedgerRolloverTimeMinutes"})}),(0,t.jsxs)(n.td,{children:["Minimum time between ledger rollover for a topic. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.strong,{children:"Note"}),": it is not recommended to set this parameter in the production environment."]}),(0,t.jsx)(n.td,{children:"10"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"managedLedgerMaxEntriesPerLedger"})}),(0,t.jsxs)(n.td,{children:["Maximum number of entries to append to a ledger before triggering a rollover.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.strong,{children:"Note"}),": it is not recommended to set this parameter in the production environment."]}),(0,t.jsx)(n.td,{children:"50000"})]})]})]}),"\n"]}),"\n"]})})]}),"\n",(0,t.jsx)(n.h3,{id:"run-filesystem-offloader-automatically",children:"Run filesystem offloader automatically"}),"\n",(0,t.jsx)(n.p,{children:"You can configure the namespace policy to offload data automatically once a threshold is reached. The threshold is based on the size of data that a topic has stored on a Pulsar cluster. Once the topic storage reaches the threshold, an offload operation is triggered automatically."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Threshold value"}),(0,t.jsx)(n.th,{children:"Action"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"> 0"}),(0,t.jsx)(n.td,{children:"It triggers the offloading operation if the topic storage reaches its threshold."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"= 0"}),(0,t.jsx)(n.td,{children:"It causes a broker to offload data as soon as possible."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"< 0"}),(0,t.jsx)(n.td,{children:"It disables automatic offloading operation."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Automatic offload runs when a new segment is added to a topic log. If you set the threshold on a namespace, but few messages are being produced to the topic, the filesystem offloader does not work until the current segment is full."}),"\n",(0,t.jsx)(n.p,{children:"You can configure the threshold using CLI tools, such as pulsar-admin."}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"This example sets the filesystem offloader threshold to 10 MB using pulsar-admin."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\npulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For more information about the ",(0,t.jsx)(n.code,{children:"pulsar-admin namespaces set-offload-threshold options"})," command, including flags, descriptions, default values, and shorthands, see ",(0,t.jsx)(n.a,{href:"/docs/2.8.x/reference-pulsar-admin#set-offload-threshold",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"run-filesystem-offloader-manually",children:"Run filesystem offloader manually"}),"\n",(0,t.jsx)(n.p,{children:"For individual topics, you can trigger the filesystem offloader manually using one of the following methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the REST endpoint."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use CLI tools (such as pulsar-admin)."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To manually trigger the filesystem offloader via CLI tools, you need to specify the maximum amount of data (threshold) that should be retained on a Pulsar cluster for a topic. If the size of the topic data on the Pulsar cluster exceeds this threshold, segments from the topic are offloaded to the filesystem until the threshold is no longer exceeded. Older segments are offloaded first."}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"This example manually run the filesystem offloader using pulsar-admin."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\npulsar-admin topics offload --size-threshold 10M persistent://my-tenant/my-namespace/topic1\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Output"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\nOffload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For more information about the ",(0,t.jsx)(n.code,{children:"pulsar-admin topics offload options"})," command, including flags, descriptions, default values, and shorthands, see ",(0,t.jsx)(n.a,{href:"/docs/2.8.x/reference-pulsar-admin#offload",children:"here"}),"."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"This example checks filesystem offloader status using pulsar-admin."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\npulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Output"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\nOffload is currently running\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To wait for the filesystem to complete the job, add the ",(0,t.jsx)(n.code,{children:"-w"})," flag."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\npulsar-admin topics offload-status -w persistent://my-tenant/my-namespace/topic1\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Output"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\nOffload was a success\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If there is an error in the offloading operation, the error is propagated to the ",(0,t.jsx)(n.code,{children:"pulsar-admin topics offload-status"})," command."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\npulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Output"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\nError in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException: java.util.concurrent.CompletionException: com.amazonaws.services.s3.model.AmazonS3Exception: Anonymous users cannot initiate multipart uploads.  Please authenticate. (Service: Amazon S3; Status Code: 403; Error Code: AccessDenied; Request ID: 798758DE3F1776DF; S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=), S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=\n\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For more information about the ",(0,t.jsx)(n.code,{children:"pulsar-admin topics offload-status options"})," command, including flags, descriptions, default values, and shorthands, see ",(0,t.jsx)(n.a,{href:"/docs/2.8.x/reference-pulsar-admin#offload-status",children:"here"}),"."]})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,t.jsx)(n.p,{children:"This section provides step-by-step instructions on how to use the filesystem offloader to move data from Pulsar to Hadoop Distributed File System (HDFS) or Network File system (NFS)."}),"\n",(0,t.jsxs)(i.A,{defaultValue:"HDFS",values:[{label:"HDFS",value:"HDFS"},{label:"NFS",value:"NFS"}],children:[(0,t.jsxs)(o.A,{value:"HDFS",children:[(0,t.jsx)(n.p,{children:"To move data from Pulsar to HDFS, follow these steps."}),(0,t.jsx)(n.h3,{id:"step-1-prepare-the-hdfs-environment",children:"Step 1: Prepare the HDFS environment"}),(0,t.jsx)(n.p,{children:"This tutorial sets up a Hadoop single node cluster and uses Hadoop 3.2.1."}),(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For details about how to set up a Hadoop single node cluster, see ",(0,t.jsx)(n.a,{href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/SingleCluster.html",children:"here"}),"."]})}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Download and uncompress Hadoop 3.2.1."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\nwget https://mirrors.bfsu.edu.cn/apache/hadoop/common/hadoop-3.2.1/hadoop-3.2.1.tar.gz\n\ntar -zxvf hadoop-3.2.1.tar.gz -C $HADOOP_HOME\n\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Configure Hadoop."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\n# $HADOOP_HOME/etc/hadoop/core-site.xml\n<configuration>\n    <property>\n        <name>fs.defaultFS</name>\n        <value>hdfs://localhost:9000</value>\n    </property>\n</configuration>\n\n# $HADOOP_HOME/etc/hadoop/hdfs-site.xml\n<configuration>\n    <property>\n        <name>dfs.replication</name>\n        <value>1</value>\n    </property>\n</configuration>\n\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set passphraseless ssh."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\n# Now check that you can ssh to the localhost without a passphrase:\n$ ssh localhost\n# If you cannot ssh to localhost without a passphrase, execute the following commands\n$ ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa\n$ cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys\n$ chmod 0600 ~/.ssh/authorized_keys\n\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start HDFS."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\n# don't execute this command repeatedly, repeat execute will cauld the clusterId of the datanode is not consistent with namenode\n$HADOOP_HOME/bin/hadoop namenode -format\n$HADOOP_HOME/sbin/start-dfs.sh\n\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Navigate to the ",(0,t.jsx)(n.a,{href:"http://localhost:9870/",children:"HDFS website"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You can see the ",(0,t.jsx)(n.strong,{children:"Overview"})," page."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(66023).A+"",width:"2396",height:"1668"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["At the top navigation bar, click ",(0,t.jsx)(n.strong,{children:"Datanodes"})," to check DataNode information."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(9871).A+"",width:"2452",height:"1638"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"HTTP Address"})," to get more detailed information about localhost:9866."]}),"\n",(0,t.jsxs)(n.p,{children:["As can be seen below, the size of ",(0,t.jsx)(n.strong,{children:"Capacity Used"})," is 4 KB, which is the initial value."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(28326).A+"",width:"2392",height:"1504"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),(0,t.jsx)(n.h3,{id:"step-2-install-the-filesystem-offloader",children:"Step 2: Install the filesystem offloader"}),(0,t.jsxs)(n.p,{children:["For details, see ",(0,t.jsx)(n.a,{href:"#installation",children:"installation"}),"."]}),(0,t.jsx)(n.h3,{id:"step-3-configure-the-filesystem-offloader",children:"Step 3: Configure the filesystem offloader"}),(0,t.jsxs)(n.p,{children:["As indicated in the ",(0,t.jsx)(n.a,{href:"#configuration",children:"configuration"})," section, you need to configure some properties for the filesystem offloader driver before using it. This tutorial assumes that you have configured the filesystem offloader driver as below and run Pulsar in ",(0,t.jsx)(n.strong,{children:"standalone"})," mode."]}),(0,t.jsxs)(n.p,{children:["Set the following configurations in the ",(0,t.jsx)(n.code,{children:"conf/standalone.conf"})," file."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",children:"\nmanagedLedgerOffloadDriver=filesystem\nfileSystemURI=hdfs://127.0.0.1:9000\nfileSystemProfilePath=conf/filesystem_offload_core_site.xml\n\n"})}),(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"For testing purposes, you can set the following two configurations to speed up ledger rollover, but it is not recommended that you set them in the production environment."})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\nmanagedLedgerMinLedgerRolloverTimeMinutes=1\nmanagedLedgerMaxEntriesPerLedger=100\n\n"})})]}),(0,t.jsxs)(o.A,{value:"NFS",children:[(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["In this section, it is assumed that you have enabled NFS service and set the shared path of your NFS service. In this section, ",(0,t.jsx)(n.code,{children:"/Users/test"})," is used as the shared path of NFS service."]})}),(0,t.jsx)(n.p,{children:"To offload data to NFS, follow these steps."}),(0,t.jsx)(n.h3,{id:"step-1-install-the-filesystem-offloader",children:"Step 1: Install the filesystem offloader"}),(0,t.jsxs)(n.p,{children:["For details, see ",(0,t.jsx)(n.a,{href:"#installation",children:"installation"}),"."]}),(0,t.jsx)(n.h3,{id:"step-2-mont-your-nfs-to-your-local-filesystem",children:"Step 2: Mont your NFS to your local filesystem"}),(0,t.jsxs)(n.p,{children:["This example mounts mounts ",(0,t.jsx)(n.em,{children:"/Users/pulsar_nfs"})," to ",(0,t.jsx)(n.em,{children:"/Users/test"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\nmount -e 192.168.0.103:/Users/test/Users/pulsar_nfs\n\n"})}),(0,t.jsx)(n.h3,{id:"step-3-configure-the-filesystem-offloader-driver",children:"Step 3: Configure the filesystem offloader driver"}),(0,t.jsxs)(n.p,{children:["As indicated in the ",(0,t.jsx)(n.a,{href:"#configuration",children:"configuration"})," section, you need to configure some properties for the filesystem offloader driver before using it. This tutorial assumes that you have configured the filesystem offloader driver as below and run Pulsar in ",(0,t.jsx)(n.strong,{children:"standalone"})," mode."]}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set the following configurations in the ",(0,t.jsx)(n.code,{children:"conf/standalone.conf"})," file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",children:"\nmanagedLedgerOffloadDriver=filesystem\nfileSystemProfilePath=conf/filesystem_offload_core_site.xml\n\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Modify the ",(0,t.jsx)(n.em,{children:"filesystem_offload_core_site.xml"})," as follows."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\n<property>\n    <name>fs.defaultFS</name>\n    <value>file:///</value>\n</property>\n\n<property>\n    <name>hadoop.tmp.dir</name>\n    <value>file:///Users/pulsar_nfs</value>\n</property>\n\n<property>\n    <name>io.file.buffer.size</name>\n    <value>4096</value>\n</property>\n\n<property>\n    <name>io.seqfile.compress.blocksize</name>\n    <value>1000000</value>\n</property>\n<property>\n\n    <name>io.seqfile.compression.type</name>\n    <value>BLOCK</value>\n</property>\n\n<property>\n    <name>io.map.index.interval</name>\n    <value>128</value>\n</property>\n\n"})}),"\n"]}),"\n"]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"step-4-offload-data-from-bookkeeper-to-filesystem",children:"Step 4: Offload data from BookKeeper to filesystem"}),"\n",(0,t.jsxs)(n.p,{children:["Execute the following commands in the repository where you download Pulsar tarball. For example, ",(0,t.jsx)(n.code,{children:"~/path/to/apache-pulsar-2.5.1"}),"."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start Pulsar standalone."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\nbin/pulsar standalone -a 127.0.0.1\n\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To ensure the data generated is not deleted immediately, it is recommended to set the ",(0,t.jsx)(n.a,{href:"/docs/2.8.x/cookbooks-retention-expiry#retention-policies",children:"retention policy"}),", which can be either a ",(0,t.jsx)(n.strong,{children:"size"})," limit or a ",(0,t.jsx)(n.strong,{children:"time"})," limit. The larger value you set for the retention policy, the longer the data can be retained."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\nbin/pulsar-admin namespaces set-retention public/default --size 100M --time 2d\n\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For more information about the ",(0,t.jsx)(n.code,{children:"pulsarctl namespaces set-retention options"})," command, including flags, descriptions, default values, and shorthands, see ",(0,t.jsx)(n.a,{href:"https://docs.streamnative.io/pulsarctl/v2.7.0.6/#-em-set-retention-em-",children:"here"}),"."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Produce data using pulsar-client."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'\nbin/pulsar-client produce -m "Hello FileSystem Offloader" -n 1000 public/default/fs-test\n\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The offloading operation starts after a ledger rollover is triggered. To ensure offload data successfully, it is recommended that you wait until several ledger rollovers are triggered. In this case, you might need to wait for a second. You can check the ledger status using pulsarctl."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\nbin/pulsar-admin topics stats-internal public/default/fs-test\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Output"})}),"\n",(0,t.jsx)(n.p,{children:"The data of the ledger 696 is not offloaded."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'\n{\n"version": 1,\n"creationDate": "2020-06-16T21:46:25.807+08:00",\n"modificationDate": "2020-06-16T21:46:25.821+08:00",\n"ledgers": [\n{\n    "ledgerId": 696,\n    "isOffloaded": false\n}\n],\n"cursors": {}\n}\n\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Wait a second and send more messages to the topic."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'\nbin/pulsar-client produce -m "Hello FileSystem Offloader" -n 1000 public/default/fs-test\n\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Check the ledger status using pulsarctl."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\nbin/pulsar-admin topics stats-internal public/default/fs-test\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Output"})}),"\n",(0,t.jsx)(n.p,{children:"The ledger 696 is rolled over."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'\n{\n"version": 2,\n"creationDate": "2020-06-16T21:46:25.807+08:00",\n"modificationDate": "2020-06-16T21:48:52.288+08:00",\n"ledgers": [\n{\n    "ledgerId": 696,\n    "entries": 1001,\n    "size": 81695,\n    "isOffloaded": false\n},\n{\n    "ledgerId": 697,\n    "isOffloaded": false\n}\n],\n"cursors": {}\n}\n\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Trigger the offloading operation manually using pulsarctl."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\nbin/pulsar-admin topics offload -s 0 public/default/fs-test\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Output"})}),"\n",(0,t.jsx)(n.p,{children:"Data in ledgers before the ledge 697 is offloaded."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\n# offload info, the ledgers before 697 will be offloaded\nOffload triggered for persistent://public/default/fs-test3 for messages before 697:0:-1\n\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Check the ledger status using pulsarctl."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\nbin/pulsar-admin topics stats-internal public/default/fs-test\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Output"})}),"\n",(0,t.jsx)(n.p,{children:"The data of the ledger 696 is offloaded."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'\n{\n"version": 4,\n"creationDate": "2020-06-16T21:46:25.807+08:00",\n"modificationDate": "2020-06-16T21:52:13.25+08:00",\n"ledgers": [\n{\n    "ledgerId": 696,\n    "entries": 1001,\n    "size": 81695,\n    "isOffloaded": true\n},\n{\n    "ledgerId": 697,\n    "isOffloaded": false\n}\n],\n"cursors": {}\n}\n\n'})}),"\n",(0,t.jsxs)(n.p,{children:["And the ",(0,t.jsx)(n.strong,{children:"Capacity Used"})," is changed from 4 KB to 116.46 KB."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(69189).A+"",width:"2422",height:"1498"})})]})}function f(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var r=s(34164);const t={tabItem:"tabItem_Ymn6"};var l=s(74848);function i(e){let{children:n,hidden:s,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,i),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>w});var r=s(96540),t=s(34164),l=s(23104),i=s(56347),o=s(205),a=s(57485),d=s(31682),c=s(70679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}}))}(s);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function f(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const t=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,a.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,l=u(e),[i,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[d,h]=p({queryString:s,groupId:t}),[x,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,c.Dv)(s);return[t,(0,r.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:t}),j=(()=>{const e=d??x;return f({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{j&&a(j)}),[j]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),m(e)}),[h,m,l]),tabValues:l}}var m=s(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function y(e){let{className:n,block:s,selectedValue:r,selectValue:i,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),c=e=>{const n=e.currentTarget,s=a.indexOf(n),t=o[s].value;t!==r&&(d(n),i(t))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=a.indexOf(e.currentTarget)+1;n=a[s]??a[0];break}case"ArrowLeft":{const s=a.indexOf(e.currentTarget)-1;n=a[s]??a[a.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:h,onClick:c,...l,className:(0,t.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:l}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function v(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,g.jsx)(y,{...n,...e}),(0,g.jsx)(b,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(n))}},66023:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/FileSystem-1-8fba41a03bedc3e2d89a0fccf0b80f0f.png"},9871:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/FileSystem-2-e35ac7fd0ad15579667dde0f831eaa02.png"},28326:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/FileSystem-3-0c94a33a238a8753b06d8e9e99fc31fc.png"},69189:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/FileSystem-8-679ffa9ebb34e9242170e98af24d67d6.png"},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var r=s(96540);const t={},l=r.createContext(t);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);