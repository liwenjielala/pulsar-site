"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[20456],{52879:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tiered-storage-aliyun","title":"Use Aliyun OSS offloader with Pulsar","description":"This chapter guides you through every step of installing and configuring the Aliyun Object Storage Service (OSS) offloader and using it with Pulsar.","source":"@site/versioned_docs/version-2.11.x/tiered-storage-aliyun.md","sourceDirName":".","slug":"/tiered-storage-aliyun","permalink":"/docs/2.11.x/tiered-storage-aliyun","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/tiered-storage-aliyun.md","tags":[],"version":"2.11.x","frontMatter":{"id":"tiered-storage-aliyun","title":"Use Aliyun OSS offloader with Pulsar","sidebar_label":"Aliyun OSS offloader"},"sidebar":"docsSidebar","previous":{"title":"Azure BlobStore offloader","permalink":"/docs/2.11.x/tiered-storage-azure"},"next":{"title":"S3 offloader","permalink":"/docs/2.11.x/tiered-storage-s3"}}');var r=i(74848),a=i(28453);const o={id:"tiered-storage-aliyun",title:"Use Aliyun OSS offloader with Pulsar",sidebar_label:"Aliyun OSS offloader"},l=void 0,t={},d=[{value:"Installation",id:"installation",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Steps",id:"steps",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Configure Aliyun OSS offloader driver",id:"configure-aliyun-oss-offloader-driver",level:3},{value:"Bucket (required)",id:"bucket-required",level:4},{value:"Example",id:"example",level:5},{value:"Endpoint (required)",id:"endpoint-required",level:4},{value:"Example",id:"example-1",level:5},{value:"Authentication (required)",id:"authentication-required",level:4},{value:"Run Aliyun OSS offloader automatically",id:"run-aliyun-oss-offloader-automatically",level:3},{value:"Example",id:"example-2",level:4},{value:"Run Aliyun OSS offloader manually",id:"run-aliyun-oss-offloader-manually",level:3},{value:"Example",id:"example-3",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This chapter guides you through every step of installing and configuring the Aliyun Object Storage Service (OSS) offloader and using it with Pulsar."}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.p,{children:"Follow the steps below to install the Aliyun OSS offloader."}),"\n",(0,r.jsx)(n.h3,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Pulsar: 2.8.0 or later versions"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"steps",children:"Steps"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/2.11.x/getting-started-standalone#download-pulsar-distribution",children:"Download the Pulsar tarball"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Download and untar the Pulsar offloaders package, then copy the Pulsar offloaders as ",(0,r.jsx)(n.code,{children:"offloaders"})," in the Pulsar directory. See ",(0,r.jsx)(n.a,{href:"/docs/2.11.x/tiered-storage-overview#how-to-install-tiered-storage-offloaders",children:"Install tiered storage offloaders"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Before offloading data from BookKeeper to Aliyun OSS, you need to configure some properties of the Aliyun OSS offload driver. Besides, you can also configure the Aliyun OSS offloader to run it automatically or trigger it manually."})}),"\n",(0,r.jsx)(n.h3,{id:"configure-aliyun-oss-offloader-driver",children:"Configure Aliyun OSS offloader driver"}),"\n",(0,r.jsxs)(n.p,{children:["You can configure the Aliyun OSS offloader driver in the configuration file ",(0,r.jsx)(n.code,{children:"broker.conf"})," or ",(0,r.jsx)(n.code,{children:"standalone.conf"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Required"})," configurations are as below."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Required configuration"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Example value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"managedLedgerOffloadDriver"})}),(0,r.jsx)(n.td,{children:"Offloader driver name, which is case-insensitive."}),(0,r.jsx)(n.td,{children:"aliyun-oss"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"offloadersDirectory"})}),(0,r.jsx)(n.td,{children:"Offloader directory"}),(0,r.jsx)(n.td,{children:"offloaders"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"managedLedgerOffloadBucket"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#bucket-required",children:"Bucket"})}),(0,r.jsx)(n.td,{children:"pulsar-topic-offload"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"managedLedgerOffloadServiceEndpoint"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#endpoint-required",children:"Endpoint"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"http://oss-cn-hongkong.aliyuncs.com",children:"http://oss-cn-hongkong.aliyuncs.com"})})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Optional"})," configurations are as below."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Optional"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"managedLedgerOffloadReadBufferSizeInBytes"})}),(0,r.jsx)(n.td,{children:"Block size for each individual read when reading back data from S3-compatible storage."}),(0,r.jsx)(n.td,{children:"1 MB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"managedLedgerOffloadMaxBlockSizeInBytes"})}),(0,r.jsxs)(n.td,{children:["Maximum block size sent during a multi-part upload to S3-compatible storage. It ",(0,r.jsx)(n.strong,{children:"cannot"})," be smaller than 5 MB."]}),(0,r.jsx)(n.td,{children:"64 MB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"managedLedgerMinLedgerRolloverTimeMinutes"})}),(0,r.jsxs)(n.td,{children:["Minimum time between ledger rollover for a topic.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"It's ",(0,r.jsx)(n.strong,{children:"not"})," recommended to change the default value in a production environment."]}),(0,r.jsx)(n.td,{children:"10"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"managedLedgerMaxEntriesPerLedger"})}),(0,r.jsxs)(n.td,{children:["Maximum number of entries to append to a ledger before triggering a rollover.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(n.strong,{children:"Note"}),": It's ",(0,r.jsx)(n.strong,{children:"not"})," recommended to change the default value in a production environment."]}),(0,r.jsx)(n.td,{children:"50000"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"bucket-required",children:"Bucket (required)"}),"\n",(0,r.jsx)(n.p,{children:"A bucket is a basic container that holds your data. Everything you store in Aliyun OSS must be contained in a bucket. You can use a bucket to organize your data and control access to your data, but unlike a directory and folder, you cannot nest a bucket."}),"\n",(0,r.jsx)(n.h5,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["This example names the bucket ",(0,r.jsx)(n.code,{children:"pulsar-topic-offload"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-conf",children:"managedLedgerOffloadBucket=pulsar-topic-offload\n"})}),"\n",(0,r.jsx)(n.h4,{id:"endpoint-required",children:"Endpoint (required)"}),"\n",(0,r.jsx)(n.p,{children:"The endpoint is the region where a bucket is located."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["For more information about Aliyun OSS regions and endpoints,  see ",(0,r.jsx)(n.a,{href:"https://www.alibabacloud.com/help/doc-detail/31837.htm",children:"International website"})," or ",(0,r.jsx)(n.a,{href:"https://help.aliyun.com/document_detail/31837.html",children:"Chinese website"}),"."]})}),"\n",(0,r.jsx)(n.h5,{id:"example-1",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["This example sets the endpoint as ",(0,r.jsx)(n.code,{children:"oss-us-west-1-internal"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-conf",children:"managedLedgerOffloadServiceEndpoint=http://oss-us-west-1-internal.aliyuncs.com\n"})}),"\n",(0,r.jsx)(n.h4,{id:"authentication-required",children:"Authentication (required)"}),"\n",(0,r.jsx)(n.p,{children:"To be able to access Aliyun OSS, you need to authenticate with Aliyun OSS."}),"\n",(0,r.jsxs)(n.p,{children:["Set the environment variables ",(0,r.jsx)(n.code,{children:"ALIYUN_OSS_ACCESS_KEY_ID"})," and ",(0,r.jsx)(n.code,{children:"ALIYUN_OSS_ACCESS_KEY_SECRET"})," in ",(0,r.jsx)(n.code,{children:"conf/pulsar_env.sh"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export ALIYUN_OSS_ACCESS_KEY_ID=ABC123456789\nexport ALIYUN_OSS_ACCESS_KEY_SECRET=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Exporting these environment variables makes them available in the environment of spawned processes."})}),"\n",(0,r.jsx)(n.h3,{id:"run-aliyun-oss-offloader-automatically",children:"Run Aliyun OSS offloader automatically"}),"\n",(0,r.jsx)(n.p,{children:"Namespace policy can be configured to offload data automatically once a threshold is reached. The threshold is based on the size of data that a topic has stored in a Pulsar cluster. Once the topic reaches the threshold, an offloading operation is triggered automatically."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Threshold value"}),(0,r.jsx)(n.th,{children:"Action"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"> 0"}),(0,r.jsx)(n.td,{children:"It triggers the offloading operation if the topic storage reaches its threshold."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"= 0"}),(0,r.jsx)(n.td,{children:"It causes a broker to offload data as soon as possible."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"< 0"}),(0,r.jsx)(n.td,{children:"It disables automatic offloading operation."})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Automatic offloading runs when a new segment is added to a topic log. If you set the threshold on a namespace, but few messages are being produced to the topic, the offloader does not work until the current segment is full."}),"\n",(0,r.jsxs)(n.p,{children:["You can configure the threshold size using CLI tools, such as ",(0,r.jsx)(n.a,{href:"pathname:///reference/#/2.11.x/pulsar-admin/",children:(0,r.jsx)(n.code,{children:"pulsar-admin"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The offload configurations in ",(0,r.jsx)(n.code,{children:"broker.conf"})," and ",(0,r.jsx)(n.code,{children:"standalone.conf"})," are used for the namespaces that do not have namespace-level offload policies. Each namespace can have its offload policy. If you want to set an offload policy for a specific namespace, use the command ",(0,r.jsx)(n.a,{href:"pathname:///reference/#/2.11.x/pulsar-admin/namespaces?id=set-offload-policies",children:(0,r.jsx)(n.code,{children:"pulsar-admin namespaces set-offload-policies options"})})," command."]}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["This example sets the Aliyun OSS offloader threshold size to 10 MB using ",(0,r.jsx)(n.code,{children:"pulsar-admin"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["For more information about the ",(0,r.jsx)(n.code,{children:"pulsar-admin namespaces set-offload-threshold options"})," command, including flags, descriptions, and default values, see ",(0,r.jsx)(n.a,{href:"pathname:///reference/#/2.11.x/pulsar-admin/",children:"Pulsar admin docs"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"run-aliyun-oss-offloader-manually",children:"Run Aliyun OSS offloader manually"}),"\n",(0,r.jsx)(n.p,{children:"For individual topics, you can trigger the Aliyun OSS offloader manually using one of the following methods:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Use REST endpoint."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Use CLI tools, such as ",(0,r.jsx)(n.a,{href:"pathname:///reference/#/2.11.x/pulsar-admin/",children:(0,r.jsx)(n.code,{children:"pulsar-admin"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"To trigger it via CLI tools, you need to specify the maximum amount of data (threshold) that should be retained in a Pulsar cluster for a topic. If the size of the topic data on the Pulsar cluster exceeds this threshold, segments from the topic are moved to Aliyun OSS until the threshold is no longer exceeded. Older segments are moved first."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["This example triggers the Aliyun OSS offloader to run manually using ",(0,r.jsx)(n.code,{children:"pulsar-admin"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin topics offload --size-threshold 10M my-tenant/my-namespace/topic1\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Output"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Offload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["For more information about the ",(0,r.jsx)(n.code,{children:"pulsar-admin topics offload options"})," command, including flags, descriptions, and default values, see ",(0,r.jsx)(n.a,{href:"pathname:///reference/#/2.11.x/pulsar-admin/",children:"Pulsar admin docs"}),"."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["This example checks the Aliyun OSS offloader status using ",(0,r.jsx)(n.code,{children:"pulsar-admin"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Output"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Offload is currently running\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To wait for the Aliyun OSS offloader to complete the job, add the ",(0,r.jsx)(n.code,{children:"-w"})," flag."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin topics offload-status -w persistent://my-tenant/my-namespace/topic1\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Output"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Offload was a success\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If there is an error in offloading, the error is propagated to the ",(0,r.jsx)(n.code,{children:"pulsar-admin topics offload-status"})," command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Output"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Error in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException: java.util.concurrent.CompletionException: com.amazonaws.services.s3.model.AmazonS3Exception: Anonymous users cannot initiate multipart uploads.  Please authenticate. (Service: Amazon S3; Status Code: 403; Error Code: AccessDenied; Request ID: 798758DE3F1776DF; S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=), S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["For more information about the ",(0,r.jsx)(n.code,{children:"pulsar-admin topics offload-status options"})," command, including flags, descriptions, and default values, see ",(0,r.jsx)(n.a,{href:"pathname:///reference/#/2.11.x/pulsar-admin/",children:"Pulsar admin docs"}),"."]})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(96540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);