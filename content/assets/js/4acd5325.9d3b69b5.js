"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[69368],{14498:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"tiered-storage-azure","title":"Use Azure BlobStore offloader with Pulsar","description":"Learn to install and configure Azure BlobStore offloader with Pulsar.","source":"@site/docs/tiered-storage-azure.md","sourceDirName":".","slug":"/tiered-storage-azure","permalink":"/docs/next/tiered-storage-azure","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/docs/tiered-storage-azure.md","tags":[],"version":"current","frontMatter":{"id":"tiered-storage-azure","title":"Use Azure BlobStore offloader with Pulsar","sidebar_label":"Azure BlobStore offloader","description":"Learn to install and configure Azure BlobStore offloader with Pulsar."},"sidebar":"docsSidebar","previous":{"title":"Filesystem offloader","permalink":"/docs/next/tiered-storage-filesystem"},"next":{"title":"Aliyun OSS offloader","permalink":"/docs/next/tiered-storage-aliyun"}}');var t=n(74848),s=n(28453);const i={id:"tiered-storage-azure",title:"Use Azure BlobStore offloader with Pulsar",sidebar_label:"Azure BlobStore offloader",description:"Learn to install and configure Azure BlobStore offloader with Pulsar."},a=void 0,l={},d=[{value:"Installation",id:"installation",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Steps",id:"steps",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Configure Azure BlobStore offloader driver",id:"configure-azure-blobstore-offloader-driver",level:3},{value:"Bucket (required)",id:"bucket-required",level:4},{value:"Example",id:"example",level:5},{value:"Authentication (required)",id:"authentication-required",level:4},{value:"Size of block read/write",id:"size-of-block-readwrite",level:4},{value:"Configure Azure BlobStore offloader to run automatically",id:"configure-azure-blobstore-offloader-to-run-automatically",level:3},{value:"Example",id:"example-1",level:4},{value:"Configure Azure BlobStore offloader to run manually",id:"configure-azure-blobstore-offloader-to-run-manually",level:3},{value:"Example",id:"example-2",level:4}];function c(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"This chapter guides you through every step of installing and configuring the Azure BlobStore offloader and using it with Pulsar."}),"\n",(0,t.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(r.h3,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Pulsar: 2.6.2 or later versions"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(r.p,{children:"Follow the steps below to install the Azure BlobStore offloader."}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/next/getting-started-standalone#download-pulsar-distribution",children:"Download the Pulsar tarball"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Download and untar the Pulsar offloaders package, then copy the Pulsar offloaders as ",(0,t.jsx)(r.code,{children:"offloaders"})," in the Pulsar directory. See ",(0,t.jsx)(r.a,{href:"/docs/next/tiered-storage-overview#how-to-install-tiered-storage-offloaders",children:"Install tiered storage offloaders"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsx)(r.p,{children:"Before offloading data from BookKeeper to Azure BlobStore, you need to configure some properties of the Azure BlobStore offload driver."})}),"\n",(0,t.jsx)(r.p,{children:"Besides, you can also configure the Azure BlobStore offloader to run it automatically or trigger it manually."}),"\n",(0,t.jsx)(r.h3,{id:"configure-azure-blobstore-offloader-driver",children:"Configure Azure BlobStore offloader driver"}),"\n",(0,t.jsxs)(r.p,{children:["You can configure the Azure BlobStore offloader driver in the configuration file ",(0,t.jsx)(r.code,{children:"broker.conf"})," or ",(0,t.jsx)(r.code,{children:"standalone.conf"}),"."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Required"})," configurations are as below."]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Required configuration"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Example value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"managedLedgerOffloadDriver"})}),(0,t.jsx)(r.td,{children:"Offloader driver name"}),(0,t.jsx)(r.td,{children:"azureblob"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"offloadersDirectory"})}),(0,t.jsx)(r.td,{children:"Offloader directory"}),(0,t.jsx)(r.td,{children:"offloaders"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"managedLedgerOffloadBucket"})}),(0,t.jsx)(r.td,{children:"Bucket"}),(0,t.jsx)(r.td,{children:"pulsar-topic-offload"})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Optional"})," configurations are as below."]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Optional"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Example value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"managedLedgerOffloadReadBufferSizeInBytes"})}),(0,t.jsx)(r.td,{children:"Size of block read"}),(0,t.jsx)(r.td,{children:"1 MB"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"managedLedgerOffloadMaxBlockSizeInBytes"})}),(0,t.jsx)(r.td,{children:"Size of block write"}),(0,t.jsx)(r.td,{children:"64 MB"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"managedLedgerMinLedgerRolloverTimeMinutes"})}),(0,t.jsxs)(r.td,{children:["Minimum time between ledger rollover for a topic",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(r.strong,{children:"Note"}),": it is not recommended that you set this configuration in the production environment."]}),(0,t.jsx)(r.td,{children:"10"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"managedLedgerMaxEntriesPerLedger"})}),(0,t.jsxs)(r.td,{children:["Maximum number of entries to append to a ledger before triggering a rollover.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(r.strong,{children:"Note"}),": it is not recommended that you set this configuration in the production environment."]}),(0,t.jsx)(r.td,{children:"50000"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"bucket-required",children:"Bucket (required)"}),"\n",(0,t.jsx)(r.p,{children:"A bucket is a basic container that holds your data. Everything you store in Azure BlobStore must be contained in a bucket. You can use a bucket to organize your data and control access to your data, but unlike directory and folder, you cannot nest a bucket."}),"\n",(0,t.jsx)(r.h5,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(r.p,{children:["This example names the bucket as ",(0,t.jsx)(r.em,{children:"pulsar-topic-offload"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-conf",children:"managedLedgerOffloadBucket=pulsar-topic-offload\n"})}),"\n",(0,t.jsx)(r.h4,{id:"authentication-required",children:"Authentication (required)"}),"\n",(0,t.jsx)(r.p,{children:"To be able to access Azure BlobStore, you need to authenticate with Azure BlobStore."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Set the environment variables ",(0,t.jsx)(r.code,{children:"AZURE_STORAGE_ACCOUNT"})," and ",(0,t.jsx)(r.code,{children:"AZURE_STORAGE_ACCESS_KEY"})," in ",(0,t.jsx)(r.code,{children:"conf/pulsar_env.sh"}),"."]}),"\n",(0,t.jsx)(r.p,{children:'"export" is important so that the variables are made available in the environment of spawned processes.'}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"export AZURE_STORAGE_ACCOUNT=ABC123456789\nexport AZURE_STORAGE_ACCESS_KEY=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"size-of-block-readwrite",children:"Size of block read/write"}),"\n",(0,t.jsxs)(r.p,{children:["You can configure the size of a request sent to or read from Azure BlobStore in the configuration file ",(0,t.jsx)(r.code,{children:"broker.conf"})," or ",(0,t.jsx)(r.code,{children:"standalone.conf"}),"."]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Configuration"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Default value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"managedLedgerOffloadReadBufferSizeInBytes"})}),(0,t.jsx)(r.td,{children:"Block size for each individual read when reading back data from Azure BlobStore store."}),(0,t.jsx)(r.td,{children:"1 MB"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"managedLedgerOffloadMaxBlockSizeInBytes"})}),(0,t.jsxs)(r.td,{children:['Maximum size of a "part" sent during a multipart upload to Azure BlobStore store. It ',(0,t.jsx)(r.strong,{children:"cannot"})," be smaller than 5 MB."]}),(0,t.jsx)(r.td,{children:"64 MB"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"configure-azure-blobstore-offloader-to-run-automatically",children:"Configure Azure BlobStore offloader to run automatically"}),"\n",(0,t.jsx)(r.p,{children:"Namespace policy can be configured to offload data automatically once a threshold is reached. The threshold is based on the size of data that a topic has stored on a Pulsar cluster. Once the topic reaches the threshold, an offloading operation is triggered automatically."}),"\n",(0,t.jsx)(r.table,{children:(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Threshold value"}),(0,t.jsx)(r.th,{children:"Action"})]})})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"0 | It triggers the offloading operation if the topic storage reaches its threshold.\n= 0|It causes a broker to offload data as soon as possible.\n< 0 |It disables automatic offloading operation."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Automatic offloading runs when a new segment is added to a topic log. If you set the threshold on a namespace, but few messages are being produced to the topic, offloader does not work until the current segment is full."}),"\n",(0,t.jsx)(r.p,{children:"You can configure the threshold size using CLI tools, such as pulsar-admin."}),"\n",(0,t.jsxs)(r.p,{children:["The offload configurations in ",(0,t.jsx)(r.code,{children:"broker.conf"})," and ",(0,t.jsx)(r.code,{children:"standalone.conf"})," are used for the namespaces that do not have namespace level offload policies. Each namespace can have its own offload policy. If you want to set offload policy for each namespace, use the command ",(0,t.jsx)(r.a,{href:"pathname:///reference/#/next/pulsar-admin/namespaces?id=set-offload-policies",children:(0,t.jsx)(r.code,{children:"pulsar-admin namespaces set-offload-policies options"})})," command."]}),"\n",(0,t.jsx)(r.h4,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(r.p,{children:"This example sets the Azure BlobStore offloader threshold size to 10 MB using pulsar-admin."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"bin/pulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n"})}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["For more information about the ",(0,t.jsx)(r.code,{children:"pulsar-admin namespaces set-offload-threshold options"})," command, including flags, descriptions, and default values, see ",(0,t.jsx)(r.a,{href:"pathname:///reference/#/next/pulsar-admin/",children:"Pulsar admin docs"}),"."]})}),"\n",(0,t.jsx)(r.h3,{id:"configure-azure-blobstore-offloader-to-run-manually",children:"Configure Azure BlobStore offloader to run manually"}),"\n",(0,t.jsx)(r.p,{children:"For individual topics, you can trigger Azure BlobStore offloader manually using one of the following methods:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Use REST endpoint."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Use CLI tools (such as pulsar-admin)."}),"\n",(0,t.jsx)(r.p,{children:"To trigger it via CLI tools, you need to specify the maximum amount of data (threshold) that should be retained on a Pulsar cluster for a topic. If the size of the topic data on the Pulsar cluster exceeds this threshold, segments from the topic are moved to Azure BlobStore until the threshold is no longer exceeded. Older segments are moved first."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"example-2",children:"Example"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"This example triggers the Azure BlobStore offloader to run manually using pulsar-admin."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"bin/pulsar-admin topics offload --size-threshold 10M my-tenant/my-namespace/topic1\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Output"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"Offload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n"})}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["For more information about the ",(0,t.jsx)(r.code,{children:"pulsar-admin topics offload options"})," command, including flags, descriptions, and default values, see ",(0,t.jsx)(r.a,{href:"pathname:///reference/#/next/pulsar-admin/",children:"Pulsar admin docs"}),"."]})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"This example checks the Azure BlobStore offloader status using pulsar-admin."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"bin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Output"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"Offload is currently running\n"})}),"\n",(0,t.jsxs)(r.p,{children:["To wait for the Azure BlobStore offloader to complete the job, add the ",(0,t.jsx)(r.code,{children:"-w"})," flag."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"bin/pulsar-admin topics offload-status -w persistent://my-tenant/my-namespace/topic1\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Output"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Offload was a success\n"})}),"\n",(0,t.jsxs)(r.p,{children:["If there is an error in offloading, the error is propagated to the ",(0,t.jsx)(r.code,{children:"pulsar-admin topics offload-status"})," command."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"bin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Output"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Error in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException:\n"})}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["For more information about the ",(0,t.jsx)(r.code,{children:"pulsar-admin topics offload-status options"})," command, including flags, descriptions, and default values, see ",(0,t.jsx)(r.a,{href:"pathname:///reference/#/next/pulsar-admin/",children:"Pulsar admin docs"}),"."]})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var o=n(96540);const t={},s=o.createContext(t);function i(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);