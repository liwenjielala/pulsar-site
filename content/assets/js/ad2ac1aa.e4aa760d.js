"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[35929],{32817:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"tiered-storage-aws","title":"Use AWS S3 offloader with Pulsar","description":"This chapter guides you through every step of installing and configuring the AWS S3 offloader and using it with Pulsar.","source":"@site/versioned_docs/version-2.7.1/tiered-storage-aws.md","sourceDirName":".","slug":"/tiered-storage-aws","permalink":"/docs/2.7.1/tiered-storage-aws","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.1/tiered-storage-aws.md","tags":[],"version":"2.7.1","frontMatter":{"id":"tiered-storage-aws","title":"Use AWS S3 offloader with Pulsar","sidebar_label":"AWS S3 offloader","original_id":"tiered-storage-aws"},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/docs/2.7.1/tiered-storage-overview"},"next":{"title":"GCS offloader","permalink":"/docs/2.7.1/tiered-storage-gcs"}}');var a=s(74848),i=s(28453);const o={id:"tiered-storage-aws",title:"Use AWS S3 offloader with Pulsar",sidebar_label:"AWS S3 offloader",original_id:"tiered-storage-aws"},t=void 0,d={},l=[{value:"Installation",id:"installation",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Step",id:"step",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Configure AWS S3 offloader driver",id:"configure-aws-s3-offloader-driver",level:3},{value:"Bucket (required)",id:"bucket-required",level:4},{value:"Example",id:"example",level:5},{value:"Bucket region",id:"bucket-region",level:4},{value:"Example",id:"example-1",level:5},{value:"Authentication (required)",id:"authentication-required",level:4},{value:"Size of block read/write",id:"size-of-block-readwrite",level:4},{value:"Configure AWS S3 offloader to run automatically",id:"configure-aws-s3-offloader-to-run-automatically",level:3},{value:"Example",id:"example-2",level:4},{value:"Configure AWS S3 offloader to run manually",id:"configure-aws-s3-offloader-to-run-manually",level:3},{value:"Example",id:"example-3",level:4},{value:"Tutorial",id:"tutorial",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This chapter guides you through every step of installing and configuring the AWS S3 offloader and using it with Pulsar."}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(n.p,{children:"Follow the steps below to install the AWS S3 offloader."}),"\n",(0,a.jsx)(n.h3,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Pulsar: 2.4.2 or later versions"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"step",children:"Step"}),"\n",(0,a.jsx)(n.p,{children:"This example uses Pulsar 2.5.1."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Download the Pulsar tarball using one of the following ways:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Download from the ",(0,a.jsx)(n.a,{href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.1/apache-pulsar-2.5.1-bin.tar.gz",children:"Apache mirror"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Download from the Pulsar ",(0,a.jsx)(n.a,{href:"https://pulsar.apache.org/download",children:"downloads page"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.a,{href:"https://www.gnu.org/software/wget",children:"wget"}),":"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"\nwget https://archive.apache.org/dist/pulsar/pulsar-2.5.1/apache-pulsar-2.5.1-bin.tar.gz\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Download and untar the Pulsar offloaders package."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\nwget https://downloads.apache.org/pulsar/pulsar-2.5.1/apache-pulsar-offloaders-2.5.1-bin.tar.gz\ntar xvfz apache-pulsar-offloaders-2.5.1-bin.tar.gz\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Copy the Pulsar offloaders as ",(0,a.jsx)(n.code,{children:"offloaders"})," in the Pulsar directory."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\nmv apache-pulsar-offloaders-2.5.1/offloaders apache-pulsar-2.5.1/offloaders\n\nls offloaders\n\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsxs)(n.p,{children:["As shown from the output, Pulsar uses ",(0,a.jsx)(n.a,{href:"https://jclouds.apache.org",children:"Apache jclouds"})," to support ",(0,a.jsx)(n.a,{href:"https://aws.amazon.com/s3/",children:"AWS S3"})," and ",(0,a.jsx)(n.a,{href:"https://cloud.google.com/storage/",children:"GCS"})," for long term storage."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\ntiered-storage-file-system-2.5.1.nar\ntiered-storage-jcloud-2.5.1.nar\n\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If you are running Pulsar in a bare metal cluster, make sure that ",(0,a.jsx)(n.code,{children:"offloaders"})," tarball is unzipped in every broker's Pulsar directory."]}),"\n",(0,a.jsxs)(n.li,{children:["If you are running Pulsar in Docker or deploying Pulsar using a Docker image (such as K8s and DCOS), you can use the ",(0,a.jsx)(n.code,{children:"apachepulsar/pulsar-all"})," image instead of the ",(0,a.jsx)(n.code,{children:"apachepulsar/pulsar"})," image. ",(0,a.jsx)(n.code,{children:"apachepulsar/pulsar-all"})," image has already bundled tiered storage offloaders."]}),"\n"]})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Before offloading data from BookKeeper to AWS S3, you need to configure some properties of the AWS S3 offload driver."})}),"\n",(0,a.jsx)(n.p,{children:"Besides, you can also configure the AWS S3 offloader to run it automatically or trigger it manually."}),"\n",(0,a.jsx)(n.h3,{id:"configure-aws-s3-offloader-driver",children:"Configure AWS S3 offloader driver"}),"\n",(0,a.jsxs)(n.p,{children:["You can configure the AWS S3 offloader driver in the configuration file ",(0,a.jsx)(n.code,{children:"broker.conf"})," or ",(0,a.jsx)(n.code,{children:"standalone.conf"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Required"})," configurations are as below."]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Required configuration"}),(0,a.jsx)(n.th,{children:"Description"}),(0,a.jsx)(n.th,{children:"Example value"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"managedLedgerOffloadDriver"})}),(0,a.jsxs)(n.td,{children:["Offloader driver name, which is case-insensitive. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(n.strong,{children:"Note"}),": there is a third driver type, S3, which is identical to AWS S3, though S3 requires that you specify an endpoint URL using ",(0,a.jsx)(n.code,{children:"s3ManagedLedgerOffloadServiceEndpoint"}),". This is useful if using an S3 compatible data store other than AWS S3."]}),(0,a.jsx)(n.td,{children:"aws-s3"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"offloadersDirectory"})}),(0,a.jsx)(n.td,{children:"Offloader directory"}),(0,a.jsx)(n.td,{children:"offloaders"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"s3ManagedLedgerOffloadBucket"})}),(0,a.jsx)(n.td,{children:"Bucket"}),(0,a.jsx)(n.td,{children:"pulsar-topic-offload"})]})]})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Optional"})," configurations are as below."]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Optional"}),(0,a.jsx)(n.th,{children:"Description"}),(0,a.jsx)(n.th,{children:"Example value"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"s3ManagedLedgerOffloadRegion"})}),(0,a.jsxs)(n.td,{children:["Bucket region ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(n.strong,{children:"Note"}),": before specifying a value for this parameter, you need to set the following configurations. Otherwise, you might get an error.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"- Set ",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/general/latest/gr/s3.html",children:(0,a.jsx)(n.code,{children:"s3ManagedLedgerOffloadServiceEndpoint"})}),".",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Example",(0,a.jsx)("br",{}),(0,a.jsx)(n.code,{children:"s3ManagedLedgerOffloadServiceEndpoint=https://s3.YOUR_REGION.amazonaws.com"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"- Grant ",(0,a.jsx)(n.code,{children:"GetBucketLocation"})," permission to a user.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"For how to grant ",(0,a.jsx)(n.code,{children:"GetBucketLocation"})," permission to a user, see ",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-buckets",children:"here"}),"."]}),(0,a.jsx)(n.td,{children:"eu-west-3"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"s3ManagedLedgerOffloadReadBufferSizeInBytes"})}),(0,a.jsx)(n.td,{children:"Size of block read"}),(0,a.jsx)(n.td,{children:"1 MB"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"s3ManagedLedgerOffloadMaxBlockSizeInBytes"})}),(0,a.jsx)(n.td,{children:"Size of block write"}),(0,a.jsx)(n.td,{children:"64 MB"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"managedLedgerMinLedgerRolloverTimeMinutes"})}),(0,a.jsxs)(n.td,{children:["Minimum time between ledger rollover for a topic",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(n.strong,{children:"Note"}),": it is not recommended that you set this configuration in the production environment."]}),(0,a.jsx)(n.td,{children:"2"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"managedLedgerMaxEntriesPerLedger"})}),(0,a.jsxs)(n.td,{children:["Maximum number of entries to append to a ledger before triggering a rollover.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(n.strong,{children:"Note"}),": it is not recommended that you set this configuration in the production environment."]}),(0,a.jsx)(n.td,{children:"5000"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"bucket-required",children:"Bucket (required)"}),"\n",(0,a.jsx)(n.p,{children:"A bucket is a basic container that holds your data. Everything you store in AWS S3 must be contained in a bucket. You can use a bucket to organize your data and control access to your data, but unlike directory and folder, you cannot nest a bucket."}),"\n",(0,a.jsx)(n.h5,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.p,{children:["This example names the bucket as ",(0,a.jsx)(n.em,{children:"pulsar-topic-offload"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-conf",children:"\ns3ManagedLedgerOffloadBucket=pulsar-topic-offload\n\n"})}),"\n",(0,a.jsx)(n.h4,{id:"bucket-region",children:"Bucket region"}),"\n",(0,a.jsxs)(n.p,{children:["A bucket region is a region where a bucket is located. If a bucket region is not specified, the ",(0,a.jsx)(n.strong,{children:"default"})," region (",(0,a.jsx)(n.code,{children:"US East (N. Virginia)"}),") is used."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["For more information about AWS regions and endpoints, see ",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/general/latest/gr/rande.html",children:"here"}),"."]})}),"\n",(0,a.jsx)(n.h5,{id:"example-1",children:"Example"}),"\n",(0,a.jsxs)(n.p,{children:["This example sets the bucket region as ",(0,a.jsx)(n.em,{children:"europe-west-3"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\ns3ManagedLedgerOffloadRegion=eu-west-3\n\n"})}),"\n",(0,a.jsx)(n.h4,{id:"authentication-required",children:"Authentication (required)"}),"\n",(0,a.jsx)(n.p,{children:"To be able to access AWS S3, you need to authenticate with AWS S3."}),"\n",(0,a.jsxs)(n.p,{children:["Pulsar does not provide any direct methods of configuring authentication for AWS S3,\nbut relies on the mechanisms supported by the ",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/auth/DefaultAWSCredentialsProviderChain.html",children:"DefaultAWSCredentialsProviderChain"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Once you have created a set of credentials in the AWS IAM console, you can configure credentials using one of the following methods."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Use EC2 instance metadata credentials."}),"\n",(0,a.jsx)(n.p,{children:"If you are on AWS instance with an instance profile that provides credentials, Pulsar uses these credentials if no other mechanism is provided."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Set the environment variables ",(0,a.jsx)(n.code,{children:"AWS_ACCESS_KEY_ID"})," and ",(0,a.jsx)(n.code,{children:"AWS_SECRET_ACCESS_KEY"})," in ",(0,a.jsx)(n.code,{children:"conf/pulsar_env.sh"}),"."]}),"\n",(0,a.jsx)(n.p,{children:'"export" is important so that the variables are made available in the environment of spawned processes.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\nexport AWS_ACCESS_KEY_ID=ABC123456789\nexport AWS_SECRET_ACCESS_KEY=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Add the Java system properties ",(0,a.jsx)(n.code,{children:"aws.accessKeyId"})," and ",(0,a.jsx)(n.code,{children:"aws.secretKey"})," to ",(0,a.jsx)(n.code,{children:"PULSAR_EXTRA_OPTS"})," in ",(0,a.jsx)(n.code,{children:"conf/pulsar_env.sh"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'\nPULSAR_EXTRA_OPTS="${PULSAR_EXTRA_OPTS} ${PULSAR_MEM} ${PULSAR_GC} -Daws.accessKeyId=ABC123456789 -Daws.secretKey=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c -Dio.netty.leakDetectionLevel=disabled -Dio.netty.recycler.maxCapacityPerThread=4096"\n\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Set the access credentials in ",(0,a.jsx)(n.code,{children:"~/.aws/credentials"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-conf",children:"\n[default]\naws_access_key_id=ABC123456789\naws_secret_access_key=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Assume an IAM role."}),"\n",(0,a.jsxs)(n.p,{children:["This example uses the ",(0,a.jsx)(n.code,{children:"DefaultAWSCredentialsProviderChain"})," for assuming this role."]}),"\n",(0,a.jsxs)(n.p,{children:["The broker must be rebooted for credentials specified in ",(0,a.jsx)(n.code,{children:"pulsar_env"})," to take effect."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-conf",children:"\ns3ManagedLedgerOffloadRole=<aws role arn>\ns3ManagedLedgerOffloadRoleSessionName=pulsar-s3-offload\n\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"size-of-block-readwrite",children:"Size of block read/write"}),"\n",(0,a.jsxs)(n.p,{children:["You can configure the size of a request sent to or read from AWS S3 in the configuration file ",(0,a.jsx)(n.code,{children:"broker.conf"})," or ",(0,a.jsx)(n.code,{children:"standalone.conf"}),"."]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Configuration"}),(0,a.jsx)(n.th,{children:"Description"}),(0,a.jsx)(n.th,{children:"Default value"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"s3ManagedLedgerOffloadReadBufferSizeInBytes"})}),(0,a.jsx)(n.td,{children:"Block size for each individual read when reading back data from AWS S3."}),(0,a.jsx)(n.td,{children:"1 MB"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"s3ManagedLedgerOffloadMaxBlockSizeInBytes"})}),(0,a.jsxs)(n.td,{children:['Maximum size of a "part" sent during a multipart upload to AWS S3. It ',(0,a.jsx)(n.strong,{children:"cannot"})," be smaller than 5 MB."]}),(0,a.jsx)(n.td,{children:"64 MB"})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"configure-aws-s3-offloader-to-run-automatically",children:"Configure AWS S3 offloader to run automatically"}),"\n",(0,a.jsx)(n.p,{children:"Namespace policy can be configured to offload data automatically once a threshold is reached. The threshold is based on the size of data that a topic has stored on a Pulsar cluster. Once the topic reaches the threshold, an offloading operation is triggered automatically."}),"\n",(0,a.jsx)(n.table,{children:(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Threshold value"}),(0,a.jsx)(n.th,{children:"Action"})]})})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"0 | It triggers the offloading operation if the topic storage reaches its threshold.\n= 0|It causes a broker to offload data as soon as possible.\n< 0 |It disables automatic offloading operation."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Automatic offloading runs when a new segment is added to a topic log. If you set the threshold on a namespace, but few messages are being produced to the topic, offloader does not work until the current segment is full."}),"\n",(0,a.jsx)(n.p,{children:"You can configure the threshold size using CLI tools, such as pulsar-admin."}),"\n",(0,a.jsxs)(n.p,{children:["The offload configurations in ",(0,a.jsx)(n.code,{children:"broker.conf"})," and ",(0,a.jsx)(n.code,{children:"standalone.conf"})," are used for the namespaces that do not have namespace level offload policies. Each namespace can have its own offload policy. If you want to set offload policy for each namespace, use the command ",(0,a.jsx)(n.code,{children:"pulsar-admin namespaces set-offload-policies options"})," command."]}),"\n",(0,a.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"This example sets the AWS S3 offloader threshold size to 10 MB using pulsar-admin."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["For more information about the ",(0,a.jsx)(n.code,{children:"pulsar-admin namespaces set-offload-threshold options"})," command, including flags, descriptions, and default values, see here."]})}),"\n",(0,a.jsx)(n.h3,{id:"configure-aws-s3-offloader-to-run-manually",children:"Configure AWS S3 offloader to run manually"}),"\n",(0,a.jsx)(n.p,{children:"For individual topics, you can trigger AWS S3 offloader manually using one of the following methods:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Use REST endpoint."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Use CLI tools (such as pulsar-admin)."}),"\n",(0,a.jsx)(n.p,{children:"To trigger it via CLI tools, you need to specify the maximum amount of data (threshold) that should be retained on a Pulsar cluster for a topic. If the size of the topic data on the Pulsar cluster exceeds this threshold, segments from the topic are moved to AWS S3 until the threshold is no longer exceeded. Older segments are moved first."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"This example triggers the AWS S3 offloader to run manually using pulsar-admin."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar-admin topics offload --size-threshold 10M my-tenant/my-namespace/topic1\n\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\nOffload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["For more information about the ",(0,a.jsx)(n.code,{children:"pulsar-admin topics offload options"})," command, including flags, descriptions, and default values, see here."]})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"This example checks the AWS S3 offloader status using pulsar-admin."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\nOffload is currently running\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To wait for the AWS S3 offloader to complete the job, add the ",(0,a.jsx)(n.code,{children:"-w"})," flag."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar-admin topics offload-status -w persistent://my-tenant/my-namespace/topic1\n\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\nOffload was a success\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If there is an error in offloading, the error is propagated to the ",(0,a.jsx)(n.code,{children:"pulsar-admin topics offload-status"})," command."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\nError in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException: java.util.concurrent.CompletionException: com.amazonaws.services.s3.model.AmazonS3Exception: Anonymous users cannot initiate multipart uploads.  Please authenticate. (Service: Amazon S3; Status Code: 403; Error Code: AccessDenied; Request ID: 798758DE3F1776DF; S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=), S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=\n\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["For more information about the ",(0,a.jsx)(n.code,{children:"pulsar-admin topics offload-status options"})," command, including flags, descriptions, and default values, see here."]})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"tutorial",children:"Tutorial"}),"\n",(0,a.jsxs)(n.p,{children:["For the complete and step-by-step instructions on how to use the AWS S3 offloader with Pulsar, see ",(0,a.jsx)(n.a,{href:"https://hub.streamnative.io/offloaders/aws-s3/2.5.1#usage",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>t});var r=s(96540);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);