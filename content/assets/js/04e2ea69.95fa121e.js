"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[26007],{83154:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tiered-storage-gcs","title":"Use GCS offloader with Pulsar","description":"Learn to install and configure GCS offloader with Pulsar.","source":"@site/versioned_docs/version-3.3.x/tiered-storage-gcs.md","sourceDirName":".","slug":"/tiered-storage-gcs","permalink":"/docs/3.3.x/tiered-storage-gcs","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/tiered-storage-gcs.md","tags":[],"version":"3.3.x","frontMatter":{"id":"tiered-storage-gcs","title":"Use GCS offloader with Pulsar","sidebar_label":"GCS offloader","description":"Learn to install and configure GCS offloader with Pulsar."},"sidebar":"docsSidebar","previous":{"title":"AWS S3 offloader","permalink":"/docs/3.3.x/tiered-storage-aws"},"next":{"title":"Filesystem offloader","permalink":"/docs/3.3.x/tiered-storage-filesystem"}}');var o=s(74848),i=s(28453);const t={id:"tiered-storage-gcs",title:"Use GCS offloader with Pulsar",sidebar_label:"GCS offloader",description:"Learn to install and configure GCS offloader with Pulsar."},a=void 0,l={},d=[{value:"Installation",id:"installation",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Steps",id:"steps",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Configure GCS offloader driver",id:"configure-gcs-offloader-driver",level:3},{value:"Bucket (required)",id:"bucket-required",level:4},{value:"Example",id:"example",level:5},{value:"Bucket region (required)",id:"bucket-region-required",level:4},{value:"Example",id:"example-1",level:5},{value:"Authentication (required)",id:"authentication-required",level:4},{value:"Example",id:"example-2",level:5},{value:"Size of block read/write",id:"size-of-block-readwrite",level:4},{value:"Configure GCS offloader to run automatically",id:"configure-gcs-offloader-to-run-automatically",level:3},{value:"Example",id:"example-3",level:4},{value:"Configure GCS offloader to run manually",id:"configure-gcs-offloader-to-run-manually",level:3},{value:"Example",id:"example-4",level:4},{value:"Tutorial",id:"tutorial",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This chapter guides you through every step of installing and configuring the GCS offloader and using it with Pulsar."}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.h3,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Pulsar: 2.4.2 or later versions"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"steps",children:"Steps"}),"\n",(0,o.jsx)(n.p,{children:"Follow the steps below to install the GCS offloader."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/3.3.x/getting-started-standalone#download-pulsar-distribution",children:"Download the Pulsar tarball"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Download and untar the Pulsar offloaders package, then copy the Pulsar offloaders as ",(0,o.jsx)(n.code,{children:"offloaders"})," in the Pulsar directory. See ",(0,o.jsx)(n.a,{href:"/docs/3.3.x/tiered-storage-overview#how-to-install-tiered-storage-offloaders",children:"Install tiered storage offloaders"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Before offloading data from BookKeeper to GCS, you need to configure some properties of the GCS offloader driver."})}),"\n",(0,o.jsx)(n.p,{children:"Besides, you can also configure the GCS offloader to run it automatically or trigger it manually."}),"\n",(0,o.jsx)(n.h3,{id:"configure-gcs-offloader-driver",children:"Configure GCS offloader driver"}),"\n",(0,o.jsxs)(n.p,{children:["You can configure GCS offloader driver in the configuration file ",(0,o.jsx)(n.code,{children:"broker.conf"})," or ",(0,o.jsx)(n.code,{children:"standalone.conf"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Required"})," configurations are as below."]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.th,{children:[(0,o.jsx)(n.strong,{children:"Required"})," configuration"]}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Example value"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"managedLedgerOffloadDriver"})}),(0,o.jsx)(n.td,{children:"Offloader driver name, which is case-insensitive."}),(0,o.jsx)(n.td,{children:"google-cloud-storage"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"offloadersDirectory"})}),(0,o.jsx)(n.td,{children:"Offloader directory"}),(0,o.jsx)(n.td,{children:"offloaders"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"gcsManagedLedgerOffloadBucket"})}),(0,o.jsx)(n.td,{children:"Bucket"}),(0,o.jsx)(n.td,{children:"pulsar-topic-offload"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"gcsManagedLedgerOffloadRegion"})}),(0,o.jsx)(n.td,{children:"Bucket region"}),(0,o.jsx)(n.td,{children:"europe-west3"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"gcsManagedLedgerOffloadServiceAccountKeyFile"})}),(0,o.jsx)(n.td,{children:"Authentication"}),(0,o.jsx)(n.td,{children:"/Users/user-name/Downloads/project-804d5e6a6f33.json"})]})]})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Optional"})," configurations are as below."]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Optional configuration"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Example value"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"gcsManagedLedgerOffloadReadBufferSizeInBytes"})}),(0,o.jsx)(n.td,{children:"Size of block read"}),(0,o.jsx)(n.td,{children:"1 MB"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"gcsManagedLedgerOffloadMaxBlockSizeInBytes"})}),(0,o.jsx)(n.td,{children:"Size of block write"}),(0,o.jsx)(n.td,{children:"64 MB"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"managedLedgerMinLedgerRolloverTimeMinutes"})}),(0,o.jsx)(n.td,{children:"Minimum time between ledger rollover for a topic."}),(0,o.jsx)(n.td,{children:"10"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"managedLedgerMaxEntriesPerLedger"})}),(0,o.jsx)(n.td,{children:"The max number of entries to append to a ledger before triggering a rollover."}),(0,o.jsx)(n.td,{children:"50000"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"bucket-required",children:"Bucket (required)"}),"\n",(0,o.jsxs)(n.p,{children:["A bucket is a basic container that holds your data. Everything you store in GCS ",(0,o.jsx)(n.strong,{children:"must"})," be contained in a bucket. You can use a bucket to organize your data and control access to your data, but unlike directory and folder, you can not nest a bucket."]}),"\n",(0,o.jsx)(n.h5,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(n.p,{children:["This example names the bucket as ",(0,o.jsx)(n.em,{children:"pulsar-topic-offload"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-conf",children:"gcsManagedLedgerOffloadBucket=pulsar-topic-offload\n"})}),"\n",(0,o.jsx)(n.h4,{id:"bucket-region-required",children:"Bucket region (required)"}),"\n",(0,o.jsxs)(n.p,{children:["Bucket region is the region where a bucket is located. If a bucket region is not specified, the ",(0,o.jsx)(n.strong,{children:"default"})," region (",(0,o.jsx)(n.code,{children:"us multi-regional location"}),") is used."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["For more information about bucket location, see ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/storage/docs/bucket-locations",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h5,{id:"example-1",children:"Example"}),"\n",(0,o.jsxs)(n.p,{children:["This example sets the bucket region as ",(0,o.jsx)(n.em,{children:"europe-west3"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"gcsManagedLedgerOffloadRegion=europe-west3\n"})}),"\n",(0,o.jsx)(n.h4,{id:"authentication-required",children:"Authentication (required)"}),"\n",(0,o.jsxs)(n.p,{children:["To enable a broker to access GCS, you need to configure ",(0,o.jsx)(n.code,{children:"gcsManagedLedgerOffloadServiceAccountKeyFile"})," in the configuration file ",(0,o.jsx)(n.code,{children:"broker.conf"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"gcsManagedLedgerOffloadServiceAccountKeyFile"})," is a JSON file, containing GCS credentials of a service account."]}),"\n",(0,o.jsx)(n.h5,{id:"example-2",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"To generate service account credentials or view the public credentials that you've already generated, follow the following steps."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Navigate to the ",(0,o.jsx)(n.a,{href:"https://console.developers.google.com/iam-admin/serviceaccounts",children:"Service accounts page"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Select a project or create a new one."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Click ",(0,o.jsx)(n.strong,{children:"Create service account"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.strong,{children:"Create service account"})," window, type a name for the service account and select ",(0,o.jsx)(n.strong,{children:"Furnish a new private key"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If you want to ",(0,o.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority",children:"grant G Suite domain-wide authority"})," to the service account, select ",(0,o.jsx)(n.strong,{children:"Enable G Suite Domain-wide Delegation"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Click ",(0,o.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Make sure the service account you create has permission to operate GCS, you need to assign ",(0,o.jsx)(n.strong,{children:"Storage Admin"})," permission to your service account ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/storage/docs/access-control/iam",children:"here"}),"."]})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["You can get the following information and set this in ",(0,o.jsx)(n.code,{children:"broker.conf"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-conf",children:'gcsManagedLedgerOffloadServiceAccountKeyFile="/Users/user-name/Downloads/project-804d5e6a6f33.json"\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["For more information about how to create ",(0,o.jsx)(n.code,{children:"gcsManagedLedgerOffloadServiceAccountKeyFile"}),", see ",(0,o.jsx)(n.a,{href:"https://support.google.com/googleapi/answer/6158849",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["For more information about Google Cloud IAM, see ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/storage/docs/access-control/iam",children:"here"}),"."]}),"\n"]})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"size-of-block-readwrite",children:"Size of block read/write"}),"\n",(0,o.jsxs)(n.p,{children:["You can configure the size of a request sent to or read from GCS in the configuration file ",(0,o.jsx)(n.code,{children:"broker.conf"}),"."]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Configuration"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"gcsManagedLedgerOffloadReadBufferSizeInBytes"})}),(0,o.jsxs)(n.td,{children:["Block size for each individual read when reading back data from GCS.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"The ",(0,o.jsx)(n.strong,{children:"default"})," value is 1 MB."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"gcsManagedLedgerOffloadMaxBlockSizeInBytes"})}),(0,o.jsxs)(n.td,{children:['Maximum size of a "part" sent during a multipart upload to GCS. ',(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"It ",(0,o.jsx)(n.strong,{children:"can not"})," be smaller than 5 MB. ",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"The ",(0,o.jsx)(n.strong,{children:"default"})," value is 64 MB."]})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"configure-gcs-offloader-to-run-automatically",children:"Configure GCS offloader to run automatically"}),"\n",(0,o.jsx)(n.p,{children:"Namespace policy can be configured to offload data automatically once a threshold is reached. The threshold is based on the size of data that a topic has stored on a Pulsar cluster. Once the topic reaches the threshold, an offload operation is triggered automatically."}),"\n",(0,o.jsx)(n.table,{children:(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Threshold value"}),(0,o.jsx)(n.th,{children:"Action"})]})})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"0 | It triggers the offloading operation if the topic storage reaches its threshold.\n= 0|It causes a broker to offload data as soon as possible.\n< 0 |It disables automatic offloading operation."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Automatic offloading runs when a new segment is added to a topic log. If you set the threshold on a namespace, but few messages are being produced to the topic, offloader does not work until the current segment is full."}),"\n",(0,o.jsx)(n.p,{children:"You can configure the threshold size using CLI tools, such as pulsar-admin."}),"\n",(0,o.jsxs)(n.p,{children:["The offload configurations in ",(0,o.jsx)(n.code,{children:"broker.conf"})," and ",(0,o.jsx)(n.code,{children:"standalone.conf"})," are used for the namespaces that do not have namespace level offload policies. Each namespace can have its own offload policy. If you want to set offload policy for each namespace, use the command ",(0,o.jsx)(n.a,{href:"pathname:///reference/#/3.3.x/pulsar-admin/namespaces?id=set-offload-policies",children:(0,o.jsx)(n.code,{children:"pulsar-admin namespaces set-offload-policies options"})})," command."]}),"\n",(0,o.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"This example sets the GCS offloader threshold size to 10 MB using pulsar-admin."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["For more information about the ",(0,o.jsx)(n.code,{children:"pulsar-admin namespaces set-offload-threshold options"})," command, including flags, descriptions, default values, and shorthands, see ",(0,o.jsx)(n.a,{href:"pathname:///reference/#/3.3.x/pulsar-admin/",children:"Pulsar admin docs"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"configure-gcs-offloader-to-run-manually",children:"Configure GCS offloader to run manually"}),"\n",(0,o.jsx)(n.p,{children:"For individual topics, you can trigger GCS offloader manually using one of the following methods:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Use REST endpoint."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Use CLI tools (such as pulsar-admin)."}),"\n",(0,o.jsx)(n.p,{children:"To trigger the GCS via CLI tools, you need to specify the maximum amount of data (threshold) that should be retained on a Pulsar cluster for a topic. If the size of the topic data on the Pulsar cluster exceeds this threshold, segments from the topic are moved to GCS until the threshold is no longer exceeded. Older segments are moved first."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["This example triggers the GCS offloader to run manually using pulsar-admin with the command ",(0,o.jsx)(n.code,{children:"pulsar-admin topics offload (topic-name) (threshold)"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pulsar-admin topics offload persistent://my-tenant/my-namespace/topic1 10M\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Output"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Offload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["For more information about the ",(0,o.jsx)(n.code,{children:"pulsar-admin topics offload options"})," command, including flags, descriptions, default values, and shorthands, see ",(0,o.jsx)(n.a,{href:"pathname:///reference/#/3.3.x/pulsar-admin/",children:"Pulsar admin docs"}),"."]})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["This example checks the GCS offloader status using pulsar-admin with the command ",(0,o.jsx)(n.code,{children:"pulsar-admin topics offload-status options"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Output"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"Offload is currently running\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To wait for GCS to complete the job, add the ",(0,o.jsx)(n.code,{children:"-w"})," flag."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pulsar-admin topics offload-status -w persistent://my-tenant/my-namespace/topic1\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Output"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Offload was a success\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If there is an error in offloading, the error is propagated to the ",(0,o.jsx)(n.code,{children:"pulsar-admin topics offload-status"})," command."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Output"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Error in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException: java.util.concurrent.CompletionException: com.amazonaws.services.s3.model.AmazonS3Exception: Anonymous users cannot initiate multipart uploads.  Please authenticate. (Service: Amazon S3; Status Code: 403; Error Code: AccessDenied; Request ID: 798758DE3F1776DF; S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=), S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["For more information about the ",(0,o.jsx)(n.code,{children:"pulsar-admin topics offload-status options"})," command, including flags, descriptions, default values, and shorthands, see ",(0,o.jsx)(n.a,{href:"pathname:///reference/#/3.3.x/pulsar-admin/",children:"Pulsar admin docs"}),"."]})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,o.jsxs)(n.p,{children:["For the complete and step-by-step instructions on how to use the GCS offloader with Pulsar, see ",(0,o.jsx)(n.a,{href:"https://hub.streamnative.io/offloaders/gcs/2.5.1#usage",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var r=s(96540);const o={},i=r.createContext(o);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);