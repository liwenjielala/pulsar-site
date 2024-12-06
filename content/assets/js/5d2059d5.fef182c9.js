"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[86313],{3306:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"cookbooks-tiered-storage","title":"Tiered Storage","description":"Pulsar\'s Tiered Storage feature allows older backlog data to be offloaded to long term storage, thereby freeing up space in BookKeeper and reducing storage costs. This cookbook walks you through using tiered storage in your Pulsar cluster.","source":"@site/versioned_docs/version-3.3.x/cookbooks-tiered-storage.md","sourceDirName":".","slug":"/cookbooks-tiered-storage","permalink":"/docs/3.3.x/cookbooks-tiered-storage","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/cookbooks-tiered-storage.md","tags":[],"version":"3.3.x","frontMatter":{"id":"cookbooks-tiered-storage","title":"Tiered Storage","sidebar_label":"Tiered Storage"}}');var i=n(74848),s=n(28453);const t={id:"cookbooks-tiered-storage",title:"Tiered Storage",sidebar_label:"Tiered Storage"},r=void 0,l={},c=[{value:"When should I use Tiered Storage?",id:"when-should-i-use-tiered-storage",level:2},{value:"The offloading mechanism",id:"the-offloading-mechanism",level:2},{value:"Configuring the offload driver",id:"configuring-the-offload-driver",level:2},{value:"&quot;aws-s3&quot; Driver configuration",id:"aws-s3-driver-configuration",level:3},{value:"Bucket and Region",id:"bucket-and-region",level:4},{value:"Authentication with AWS",id:"authentication-with-aws",level:4},{value:"Configuring the size of block read/write",id:"configuring-the-size-of-block-readwrite",level:4},{value:"&quot;google-cloud-storage&quot; Driver configuration",id:"google-cloud-storage-driver-configuration",level:3},{value:"Authentication with GCS",id:"authentication-with-gcs",level:4},{value:"Configuring the size of block read/write",id:"configuring-the-size-of-block-readwrite-1",level:4},{value:"&quot;filesystem&quot; Driver configuration",id:"filesystem-driver-configuration",level:3},{value:"Configure connection address",id:"configure-connection-address",level:4},{value:"Configure Hadoop profile path",id:"configure-hadoop-profile-path",level:4},{value:"Configuring offload to run automatically",id:"configuring-offload-to-run-automatically",level:2},{value:"Configuring read priority for offloaded messages",id:"configuring-read-priority-for-offloaded-messages",level:2},{value:"Triggering offload manually",id:"triggering-offload-manually",level:2}];function d(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.p,{children:["Pulsar's ",(0,i.jsx)(o.strong,{children:"Tiered Storage"})," feature allows older backlog data to be offloaded to long term storage, thereby freeing up space in BookKeeper and reducing storage costs. This cookbook walks you through using tiered storage in your Pulsar cluster."]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["Tiered storage uses ",(0,i.jsx)(o.a,{href:"https://jclouds.apache.org",children:"Apache jclouds"})," to support ",(0,i.jsx)(o.a,{href:"https://aws.amazon.com/s3/",children:"Amazon S3"})," and ",(0,i.jsx)(o.a,{href:"https://cloud.google.com/storage/",children:"Google Cloud Storage"}),"(GCS for short)\nfor long term storage. With Jclouds, it is easy to add support for more ",(0,i.jsx)(o.a,{href:"https://jclouds.apache.org/reference/providers/#blobstore-providers",children:"cloud storage providers"})," in the future."]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["Tiered storage uses ",(0,i.jsx)(o.a,{href:"http://hadoop.apache.org/",children:"Apache Hadoop"})," to support filesystem for long term storage.\nWith Hadoop, it is easy to add support for more filesystem in the future."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"when-should-i-use-tiered-storage",children:"When should I use Tiered Storage?"}),"\n",(0,i.jsx)(o.p,{children:"Tiered storage should be used when you have a topic for which you want to keep a very long backlog for a long time. For example, if you have a topic containing user actions which you use to train your recommendation systems, you may want to keep that data for a long time, so that if you change your recommendation algorithm you can rerun it against your full user history."}),"\n",(0,i.jsx)(o.h2,{id:"the-offloading-mechanism",children:"The offloading mechanism"}),"\n",(0,i.jsx)(o.p,{children:"A topic in Pulsar is backed by a log, known as a managed ledger. This log is composed of an ordered list of segments. Pulsar only every writes to the final segment of the log. All previous segments are sealed. The data within the segment is immutable. This is known as a segment oriented architecture."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"Tiered storage",src:n(70976).A+"",title:"Tiered Storage",width:"1110",height:"697"})}),"\n",(0,i.jsx)(o.p,{children:"The Tiered Storage offloading mechanism takes advantage of this segment oriented architecture. When offloading is requested, the segments of the log are copied, one-by-one, to tiered storage. All segments of the log, apart from the segment currently being written to can be offloaded."}),"\n",(0,i.jsx)(o.p,{children:"On the broker, the administrator must configure the bucket and credentials for the cloud storage service.\nThe configured bucket must exist before attempting to offload. If it does not exist, the offload operation will fail."}),"\n",(0,i.jsx)(o.p,{children:"Pulsar uses multi-part objects to upload the segment data. It is possible that a broker could crash while uploading the data.\nWe recommend you add a life cycle rule your bucket to expire incomplete multi-part upload after a day or two to avoid\ngetting charged for incomplete uploads."}),"\n",(0,i.jsx)(o.h2,{id:"configuring-the-offload-driver",children:"Configuring the offload driver"}),"\n",(0,i.jsxs)(o.p,{children:["Offloading is configured in ",(0,i.jsx)(o.code,{children:"broker.conf"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"At a minimum, the administrator must configure the driver, the bucket and the authenticating credentials.\nThere is also some other knobs to configure, like the bucket region, the max block size in backed storage, etc."}),"\n",(0,i.jsx)(o.p,{children:"Currently we support driver of types:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"aws-s3"}),": ",(0,i.jsx)(o.a,{href:"https://aws.amazon.com/s3/",children:"Simple Cloud Storage Service"})]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"google-cloud-storage"}),": ",(0,i.jsx)(o.a,{href:"https://cloud.google.com/storage/",children:"Google Cloud Storage"})]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"filesystem"}),": ",(0,i.jsx)(o.a,{href:"http://hadoop.apache.org/",children:"Filesystem Storage"})]}),"\n"]}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsxs)(o.p,{children:["Driver names are case-insensitive for driver's name. There is a third driver type, ",(0,i.jsx)(o.code,{children:"s3"}),", which is identical to ",(0,i.jsx)(o.code,{children:"aws-s3"}),",\nthough it requires that you specify an endpoint url using ",(0,i.jsx)(o.code,{children:"s3ManagedLedgerOffloadServiceEndpoint"}),". This is useful if\nusing a S3 compatible data store, other than AWS."]}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-conf",children:"managedLedgerOffloadDriver=aws-s3\n"})}),"\n",(0,i.jsx)(o.h3,{id:"aws-s3-driver-configuration",children:'"aws-s3" Driver configuration'}),"\n",(0,i.jsx)(o.h4,{id:"bucket-and-region",children:"Bucket and Region"}),"\n",(0,i.jsx)(o.p,{children:"Buckets are the basic containers that hold your data.\nEverything that you store in Cloud Storage must be contained in a bucket.\nYou can use buckets to organize your data and control access to your data,\nbut unlike directories and folders, you cannot nest buckets."}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-conf",children:"s3ManagedLedgerOffloadBucket=pulsar-topic-offload\n"})}),"\n",(0,i.jsx)(o.p,{children:"Bucket Region is the region where bucket located. Bucket Region is not a required\nbut a recommended configuration. If it is not configured, It will use the default region."}),"\n",(0,i.jsxs)(o.p,{children:["With AWS S3, the default region is ",(0,i.jsx)(o.code,{children:"US East (N. Virginia)"}),". Page ",(0,i.jsx)(o.a,{href:"https://docs.aws.amazon.com/general/latest/gr/rande.html",children:"AWS Regions and Endpoints"})," contains more information."]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-conf",children:"s3ManagedLedgerOffloadRegion=eu-west-3\n"})}),"\n",(0,i.jsx)(o.h4,{id:"authentication-with-aws",children:"Authentication with AWS"}),"\n",(0,i.jsxs)(o.p,{children:["To be able to access AWS S3, you need to authenticate with AWS S3.\nPulsar does not provide any direct means of configuring authentication for AWS S3,\nbut relies on the mechanisms supported by the ",(0,i.jsx)(o.a,{href:"https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/auth/DefaultAWSCredentialsProviderChain.html",children:"DefaultAWSCredentialsProviderChain"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"Once you have created a set of credentials in the AWS IAM console, they can be configured in a number of ways."}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsx)(o.li,{children:"Using ec2 instance metadata credentials"}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"If you are on AWS instance with an instance profile that provides credentials, Pulsar will use these credentials\nif no other mechanism is provided"}),"\n",(0,i.jsxs)(o.ol,{start:"2",children:["\n",(0,i.jsxs)(o.li,{children:["Set the environment variables ",(0,i.jsx)(o.strong,{children:"AWS_ACCESS_KEY_ID"})," and ",(0,i.jsx)(o.strong,{children:"AWS_SECRET_ACCESS_KEY"})," in ",(0,i.jsx)(o.code,{children:"conf/pulsar_env.sh"}),"."]}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"export AWS_ACCESS_KEY_ID=ABC123456789\nexport AWS_SECRET_ACCESS_KEY=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c\n"})}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:'"export" is important so that the variables are made available in the environment of spawned processes.'}),"\n"]}),"\n",(0,i.jsxs)(o.ol,{start:"3",children:["\n",(0,i.jsxs)(o.li,{children:["Add the Java system properties ",(0,i.jsx)(o.em,{children:"aws.accessKeyId"})," and ",(0,i.jsx)(o.em,{children:"aws.secretKey"})," to ",(0,i.jsx)(o.strong,{children:"PULSAR_EXTRA_OPTS"})," in ",(0,i.jsx)(o.code,{children:"conf/pulsar_env.sh"}),"."]}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:'PULSAR_EXTRA_OPTS="${PULSAR_EXTRA_OPTS} ${PULSAR_MEM} ${PULSAR_GC} -Daws.accessKeyId=ABC123456789 -Daws.secretKey=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c -Dio.netty.leakDetectionLevel=disabled -Dio.netty.recycler.maxCapacityPerThread=4096"\n'})}),"\n",(0,i.jsxs)(o.ol,{start:"4",children:["\n",(0,i.jsxs)(o.li,{children:["Set the access credentials in ",(0,i.jsx)(o.code,{children:"~/.aws/credentials"}),"."]}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-conf",children:"[default]\naws_access_key_id=ABC123456789\naws_secret_access_key=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c\n"})}),"\n",(0,i.jsxs)(o.ol,{start:"5",children:["\n",(0,i.jsx)(o.li,{children:"Assuming an IAM role"}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"If you want to assume an IAM role, this can be done via specifying the following:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-conf",children:"s3ManagedLedgerOffloadRole=<aws role arn>\ns3ManagedLedgerOffloadRoleSessionName=pulsar-s3-offload\n"})}),"\n",(0,i.jsxs)(o.p,{children:["This will use the ",(0,i.jsx)(o.code,{children:"DefaultAWSCredentialsProviderChain"})," for assuming this role."]}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:"The broker must be rebooted for credentials specified in pulsar_env to take effect."}),"\n"]}),"\n",(0,i.jsx)(o.h4,{id:"configuring-the-size-of-block-readwrite",children:"Configuring the size of block read/write"}),"\n",(0,i.jsx)(o.p,{children:"Pulsar also provides some knobs to configure the size of requests sent to AWS S3."}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"s3ManagedLedgerOffloadMaxBlockSizeInBytes"}),'  configures the maximum size of\na "part" sent during a multipart upload. This cannot be smaller than 5MB. Default is 64MB.']}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"s3ManagedLedgerOffloadReadBufferSizeInBytes"})," configures the block size for\neach individual read when reading back data from AWS S3. Default is 1MB."]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"In both cases, these should not be touched unless you know what you are doing."}),"\n",(0,i.jsx)(o.h3,{id:"google-cloud-storage-driver-configuration",children:'"google-cloud-storage" Driver configuration'}),"\n",(0,i.jsx)(o.p,{children:"Buckets are the basic containers that hold your data. Everything that you store in\nCloud Storage must be contained in a bucket. You can use buckets to organize your data and\ncontrol access to your data, but unlike directories and folders, you cannot nest buckets."}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-conf",children:"gcsManagedLedgerOffloadBucket=pulsar-topic-offload\n"})}),"\n",(0,i.jsx)(o.p,{children:"Bucket Region is the region where bucket located. Bucket Region is not a required but\na recommended configuration. If it is not configured, It will use the default region."}),"\n",(0,i.jsxs)(o.p,{children:["Regarding GCS, buckets are default created in the ",(0,i.jsx)(o.code,{children:"us multi-regional location"}),",\npage ",(0,i.jsx)(o.a,{href:"https://cloud.google.com/storage/docs/bucket-locations",children:"Bucket Locations"})," contains more information."]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-conf",children:"gcsManagedLedgerOffloadRegion=europe-west3\n"})}),"\n",(0,i.jsx)(o.h4,{id:"authentication-with-gcs",children:"Authentication with GCS"}),"\n",(0,i.jsxs)(o.p,{children:["The administrator needs to configure ",(0,i.jsx)(o.code,{children:"gcsManagedLedgerOffloadServiceAccountKeyFile"})," in ",(0,i.jsx)(o.code,{children:"broker.conf"}),"\nfor the broker to be able to access the GCS service. ",(0,i.jsx)(o.code,{children:"gcsManagedLedgerOffloadServiceAccountKeyFile"})," is\na Json file, containing the GCS credentials of a service account.\n",(0,i.jsx)(o.a,{href:"https://support.google.com/googleapi/answer/6158849",children:"Service Accounts section of this page"})," contains\nmore information of how to create this key file for authentication. More information about google cloud IAM\nis available ",(0,i.jsx)(o.a,{href:"https://cloud.google.com/storage/docs/access-control/iam",children:"here"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"To generate service account credentials or view the public credentials that you've already generated, follow the following steps:"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["Open the ",(0,i.jsx)(o.a,{href:"https://console.developers.google.com/iam-admin/serviceaccounts",children:"Service accounts page"}),"."]}),"\n",(0,i.jsx)(o.li,{children:"Select a project or create a new one."}),"\n",(0,i.jsxs)(o.li,{children:["Click ",(0,i.jsx)(o.strong,{children:"Create service account"}),"."]}),"\n",(0,i.jsxs)(o.li,{children:["In the ",(0,i.jsx)(o.strong,{children:"Create service account"})," window, type a name for the service account, and select ",(0,i.jsx)(o.strong,{children:"Furnish a new private key"}),". If you want to ",(0,i.jsx)(o.a,{href:"https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority",children:"grant G Suite domain-wide authority"})," to the service account, also select ",(0,i.jsx)(o.strong,{children:"Enable G Suite Domain-wide Delegation"}),"."]}),"\n",(0,i.jsxs)(o.li,{children:["Click ",(0,i.jsx)(o.strong,{children:"Create"}),"."]}),"\n"]}),"\n",(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsxs)(o.p,{children:["Make ensure that the service account you create has permission to operate GCS, you need to assign ",(0,i.jsx)(o.strong,{children:"Storage Admin"})," permission to your service account in ",(0,i.jsx)(o.a,{href:"https://cloud.google.com/storage/docs/access-control/iam",children:"here"}),"."]})}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-conf",children:'gcsManagedLedgerOffloadServiceAccountKeyFile="/Users/hello/Downloads/project-804d5e6a6f33.json"\n'})}),"\n",(0,i.jsx)(o.h4,{id:"configuring-the-size-of-block-readwrite-1",children:"Configuring the size of block read/write"}),"\n",(0,i.jsx)(o.p,{children:"Pulsar also provides some knobs to configure the size of requests sent to GCS."}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"gcsManagedLedgerOffloadMaxBlockSizeInBytes"}),' configures the maximum size of a "part" sent\nduring a multipart upload. This cannot be smaller than 5MB. Default is 64MB.']}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"gcsManagedLedgerOffloadReadBufferSizeInBytes"})," configures the block size for each individual\nread when reading back data from GCS. Default is 1MB."]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"In both cases, these should not be touched unless you know what you are doing."}),"\n",(0,i.jsx)(o.h3,{id:"filesystem-driver-configuration",children:'"filesystem" Driver configuration'}),"\n",(0,i.jsx)(o.h4,{id:"configure-connection-address",children:"Configure connection address"}),"\n",(0,i.jsxs)(o.p,{children:["You can configure the connection address in the ",(0,i.jsx)(o.code,{children:"broker.conf"})," file."]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-conf",children:'fileSystemURI="hdfs://127.0.0.1:9000"\n'})}),"\n",(0,i.jsx)(o.h4,{id:"configure-hadoop-profile-path",children:"Configure Hadoop profile path"}),"\n",(0,i.jsx)(o.p,{children:"The configuration file is stored in the Hadoop profile path. It contains various settings, such as base path, authentication, and so on."}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-conf",children:'fileSystemProfilePath="../conf/filesystem_offload_core_site.xml"\n'})}),"\n",(0,i.jsxs)(o.p,{children:["The model for storing topic data uses ",(0,i.jsx)(o.code,{children:"org.apache.hadoop.io.MapFile"}),". You can use all of the configurations in ",(0,i.jsx)(o.code,{children:"org.apache.hadoop.io.MapFile"})," for Hadoop."]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"Example"})}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-xml",children:"    <property>\n        <name>fs.defaultFS</name>\n        <value></value>\n    </property>\n\n    <property>\n        <name>hadoop.tmp.dir</name>\n        <value>pulsar</value>\n    </property>\n\n    <property>\n        <name>io.file.buffer.size</name>\n        <value>4096</value>\n    </property>\n\n    <property>\n        <name>io.seqfile.compress.blocksize</name>\n        <value>1000000</value>\n    </property>\n    <property>\n\n        <name>io.seqfile.compression.type</name>\n        <value>BLOCK</value>\n    </property>\n\n    <property>\n        <name>io.map.index.interval</name>\n        <value>128</value>\n    </property>\n"})}),"\n",(0,i.jsxs)(o.p,{children:["For more information about the configurations in ",(0,i.jsx)(o.code,{children:"org.apache.hadoop.io.MapFile"}),", see ",(0,i.jsx)(o.a,{href:"http://hadoop.apache.org/",children:"Filesystem Storage"}),"."]}),"\n",(0,i.jsx)(o.h2,{id:"configuring-offload-to-run-automatically",children:"Configuring offload to run automatically"}),"\n",(0,i.jsx)(o.p,{children:"Namespace policies can be configured to offload data automatically once a threshold is reached. The threshold is based on the size of data that the topic has stored on the pulsar cluster. Once the topic reaches the threshold, an offload operation will be triggered. Setting a negative value to the threshold will disable automatic offloading. Setting the threshold to 0 will cause the broker to offload data as soon as it possiby can."}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"bin/pulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n"})}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:"Automatic offload runs when a new segment is added to a topic log. If you set the threshold on a namespace, but few messages are being produced to the topic, offload will not until the current segment is full."}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"configuring-read-priority-for-offloaded-messages",children:"Configuring read priority for offloaded messages"}),"\n",(0,i.jsx)(o.p,{children:"By default, once messages were offloaded to long term storage, brokers will read them from long term storage, but messages still exists in bookkeeper for a period depends on the administrator's configuration. For\nmessages exists in both bookkeeper and long term storage, if they are preferred to read from bookkeeper, you can use command to change this configuration."}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"# default value for -orp is tiered-storage-first\nbin/pulsar-admin namespaces set-offload-policies my-tenant/my-namespace -orp bookkeeper-first\nbin/pulsar-admin topics set-offload-policies my-tenant/my-namespace/topic1 -orp bookkeeper-first\n"})}),"\n",(0,i.jsx)(o.h2,{id:"triggering-offload-manually",children:"Triggering offload manually"}),"\n",(0,i.jsx)(o.p,{children:"Offloading can manually triggered through a REST endpoint on the Pulsar broker. We provide a CLI which will call this rest endpoint for you."}),"\n",(0,i.jsx)(o.p,{children:"When triggering offload, you must specify the maximum size, in bytes, of backlog which will be retained locally on the bookkeeper. The offload mechanism will offload segments from the start of the topic backlog until this condition is met."}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"bin/pulsar-admin topics offload --size-threshold 10M my-tenant/my-namespace/topic1\nOffload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n"})}),"\n",(0,i.jsx)(o.p,{children:"The command to triggers an offload will not wait until the offload operation has completed. To check the status of the offload, use offload-status."}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"bin/pulsar-admin topics offload-status my-tenant/my-namespace/topic1\nOffload is currently running\n"})}),"\n",(0,i.jsx)(o.p,{children:"To wait for offload to complete, add the -w flag."}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"bin/pulsar-admin topics offload-status -w my-tenant/my-namespace/topic1\nOffload was a success\n"})}),"\n",(0,i.jsx)(o.p,{children:"If there is an error offloading, the error will be propagated to the offload-status command."}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"bin/pulsar-admin topics offload-status persistent://public/default/topic1\nError in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException: java.util.concurrent.CompletionException: com.amazonaws.services.s3.model.AmazonS3Exception: Anonymous users cannot initiate multipart uploads.  Please authenticate. (Service: Amazon S3; Status Code: 403; Error Code: AccessDenied; Request ID: 798758DE3F1776DF; S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=), S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=\n"})})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},70976:(e,o,n)=>{n.d(o,{A:()=>a});const a=n.p+"assets/images/pulsar-tiered-storage-72d8b53762992cfeaa58ae3b48dd2522.png"},28453:(e,o,n)=>{n.d(o,{R:()=>t,x:()=>r});var a=n(96540);const i={},s=a.createContext(i);function t(e){const o=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(s.Provider,{value:o},e.children)}}}]);