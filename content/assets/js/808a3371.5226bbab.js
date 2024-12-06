"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[31236],{77390:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"cookbooks-retention-expiry","title":"Message retention and expiry","description":"Pulsar brokers are responsible for handling messages that pass through Pulsar, including persistent storage of messages. By default, brokers:","source":"@site/versioned_docs/version-2.3.0/cookbooks-retention-expiry.md","sourceDirName":".","slug":"/cookbooks-retention-expiry","permalink":"/docs/2.3.0/cookbooks-retention-expiry","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.0/cookbooks-retention-expiry.md","tags":[],"version":"2.3.0","frontMatter":{"id":"cookbooks-retention-expiry","title":"Message retention and expiry","sidebar_label":"Message retention and expiry","original_id":"cookbooks-retention-expiry"},"sidebar":"docsSidebar","previous":{"title":"Partitioned Topics","permalink":"/docs/2.3.0/cookbooks-partitioned"},"next":{"title":"Encryption ","permalink":"/docs/2.3.0/cookbooks-encryption"}}');var i=a(74848),t=a(28453);const l={id:"cookbooks-retention-expiry",title:"Message retention and expiry",sidebar_label:"Message retention and expiry",original_id:"cookbooks-retention-expiry"},r=void 0,o={},c=[{value:"Retention and TTL are solving two different problems",id:"retention-and-ttl-are-solving-two-different-problems",level:4},{value:"Retention policies",id:"retention-policies",level:2},{value:"Defaults",id:"defaults",level:3},{value:"Set retention policy",id:"set-retention-policy",level:3},{value:"pulsar-admin",id:"pulsar-admin",level:4},{value:"Examples",id:"examples",level:5},{value:"REST API",id:"rest-api",level:4},{value:"Java",id:"java",level:4},{value:"Get retention policy",id:"get-retention-policy",level:3},{value:"pulsar-admin",id:"pulsar-admin-1",level:4},{value:"Example",id:"example",level:5},{value:"REST API",id:"rest-api-1",level:4},{value:"Java",id:"java-1",level:4},{value:"Backlog quotas",id:"backlog-quotas",level:2},{value:"Beware the distinction between retention policy types",id:"beware-the-distinction-between-retention-policy-types",level:4},{value:"Set size thresholds and backlog retention policies",id:"set-size-thresholds-and-backlog-retention-policies",level:3},{value:"pulsar-admin",id:"pulsar-admin-2",level:4},{value:"Example",id:"example-1",level:5},{value:"REST API",id:"rest-api-2",level:4},{value:"Java",id:"java-2",level:4},{value:"Get backlog threshold and backlog retention policy",id:"get-backlog-threshold-and-backlog-retention-policy",level:3},{value:"pulsar-admin",id:"pulsar-admin-3",level:4},{value:"REST API",id:"rest-api-3",level:4},{value:"Java",id:"java-3",level:4},{value:"Remove backlog quotas",id:"remove-backlog-quotas",level:3},{value:"pulsar-admin",id:"pulsar-admin-4",level:4},{value:"REST API",id:"rest-api-4",level:4},{value:"Java",id:"java-4",level:4},{value:"Clear backlog",id:"clear-backlog",level:3},{value:"pulsar-admin",id:"pulsar-admin-5",level:4},{value:"Example",id:"example-2",level:5},{value:"Time to live (TTL)",id:"time-to-live-ttl",level:2},{value:"Set the TTL for a namespace",id:"set-the-ttl-for-a-namespace",level:3},{value:"pulsar-admin",id:"pulsar-admin-6",level:4},{value:"Example",id:"example-3",level:5},{value:"REST API",id:"rest-api-5",level:4},{value:"Java",id:"java-5",level:4},{value:"Get the TTL configuration for a namespace",id:"get-the-ttl-configuration-for-a-namespace",level:3},{value:"pulsar-admin",id:"pulsar-admin-7",level:4},{value:"Example",id:"example-4",level:5},{value:"REST API",id:"rest-api-6",level:4},{value:"Java",id:"java-6",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Pulsar brokers are responsible for handling messages that pass through Pulsar, including ",(0,i.jsx)(n.a,{href:"/docs/2.3.0/concepts-architecture-overview#persistent-storage",children:"persistent storage"})," of messages. By default, brokers:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"immediately delete all messages that have been acknowledged on every subscription, and"}),"\n",(0,i.jsxs)(n.li,{children:["persistently store all unacknowledged messages in a ",(0,i.jsx)(n.a,{href:"#backlog-quotas",children:"backlog"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In Pulsar, you can override both of these default behaviors, at the namespace level, in two ways:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can persistently store messages that have already been consumed and acknowledged for a minimum time by setting ",(0,i.jsx)(n.a,{href:"#retention-policies",children:"retention policies"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Messages that are not acknowledged within a specified timeframe, can be automatically marked as consumed, by specifying the ",(0,i.jsx)(n.a,{href:"#time-to-live-ttl",children:"time to live"})," (TTL)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Pulsar's ",(0,i.jsx)(n.a,{href:"/docs/2.3.0/admin-api-overview",children:"admin interface"})," enables you to manage both retention policies and TTL at the namespace level (and thus within a specific tenant and either on a specific cluster or in the ",(0,i.jsx)(n.a,{href:"/docs/2.3.0/concepts-architecture-overview#global-cluster",children:(0,i.jsx)(n.code,{children:"global"})})," cluster)."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.h4,{id:"retention-and-ttl-are-solving-two-different-problems",children:"Retention and TTL are solving two different problems"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Message retention: Keep the data for at least X hours (even if acknowledged)"}),"\n",(0,i.jsx)(n.li,{children:"Time-to-live: Discard data after some time (by automatically acknowledging)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In most cases, applications will want to use either one or the other (or none)."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"retention-policies",children:"Retention policies"}),"\n",(0,i.jsxs)(n.p,{children:["By default, when a Pulsar message arrives at a broker it will be stored until it has been acknowledged by a consumer, at which point it will be deleted. You can override this behavior and retain even messages that have already been acknowledged by setting a ",(0,i.jsx)(n.em,{children:"retention policy"})," on all the topics in a given namespace. When you set a retention policy you can set either a ",(0,i.jsx)(n.em,{children:"size limit"})," or a ",(0,i.jsx)(n.em,{children:"time limit"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["When you set a size limit of, say, 10 gigabytes, then messages in all topics in the namespace, ",(0,i.jsx)(n.em,{children:"even acknowledged messages"}),", will be retained until the size limit for the topic is reached; if you set a time limit of, say, 1 day, then messages for all topics in the namespace will be retained for 24 hours."]}),"\n",(0,i.jsxs)(n.p,{children:["It is also possible to set ",(0,i.jsx)(n.em,{children:"infinite"})," retention time or size, by setting ",(0,i.jsx)(n.code,{children:"-1"})," for either time or\nsize retention."]}),"\n",(0,i.jsx)(n.h3,{id:"defaults",children:"Defaults"}),"\n",(0,i.jsxs)(n.p,{children:["There are two configuration parameters that you can use to set ",(0,i.jsx)(n.a,{href:"/docs/2.3.0/reference-terminology#instance",children:"instance"}),"-wide defaults for message retention: ",(0,i.jsx)(n.a,{href:"/docs/2.3.0/reference-configuration#broker-defaultRetentionTimeInMinutes",children:(0,i.jsx)(n.code,{children:"defaultRetentionTimeInMinutes=0"})})," and ",(0,i.jsx)(n.a,{href:"/docs/2.3.0/reference-configuration#broker-defaultRetentionSizeInMB",children:(0,i.jsx)(n.code,{children:"defaultRetentionSizeInMB=0"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Both of these parameters are in the ",(0,i.jsx)(n.a,{href:"/docs/2.3.0/reference-configuration#broker",children:(0,i.jsx)(n.code,{children:"broker.conf"})})," configuration file."]}),"\n",(0,i.jsx)(n.h3,{id:"set-retention-policy",children:"Set retention policy"}),"\n",(0,i.jsxs)(n.p,{children:["You can set a retention policy for a namespace by specifying the namespace as well as both a size limit ",(0,i.jsx)(n.em,{children:"and"})," a time limit."]}),"\n",(0,i.jsx)(n.h4,{id:"pulsar-admin",children:"pulsar-admin"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"/docs/2.3.0/reference-pulsar-admin#namespaces-set-retention",children:(0,i.jsx)(n.code,{children:"set-retention"})})," subcommand and specify a namespace, a size limit using the ",(0,i.jsx)(n.code,{children:"-s"}),"/",(0,i.jsx)(n.code,{children:"--size"})," flag, and a time limit using the ",(0,i.jsx)(n.code,{children:"-t"}),"/",(0,i.jsx)(n.code,{children:"--time"})," flag."]}),"\n",(0,i.jsx)(n.h5,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["To set a size limit of 10 gigabytes and a time limit of 3 hours for the ",(0,i.jsx)(n.code,{children:"my-tenant/my-ns"})," namespace:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size 10G \\\n  --time 3h\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"To set retention with infinite time and a size limit:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size 1T \\\n  --time -1\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Similarly, even the size can be to unlimited:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size -1 \\\n  --time -1\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rest-api",children:"REST API"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.3.0&apiversion=v2#operation/setRetention",children:["POST /admin/v2/namespaces/",":tenant","/",":namespace","/retention/setRetention"]})}),"\n",(0,i.jsx)(n.h4,{id:"java",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nint retentionTime = 10; // 10 minutes\nint retentionSize = 500; // 500 megabytes\nRetentionPolicies policies = new RetentionPolicies(retentionTime, retentionSize);\nadmin.namespaces().setRetention(namespace, policies);\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"get-retention-policy",children:"Get retention policy"}),"\n",(0,i.jsxs)(n.p,{children:["You can fetch the retention policy for a namespace by specifying the namespace. The output will be a JSON object with two keys: ",(0,i.jsx)(n.code,{children:"retentionTimeInMinutes"})," and ",(0,i.jsx)(n.code,{children:"retentionSizeInMB"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"pulsar-admin-1",children:"pulsar-admin"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"/docs/2.3.0/reference-pulsar-admin#namespaces",children:(0,i.jsx)(n.code,{children:"get-retention"})})," subcommand and specify the namespace."]}),"\n",(0,i.jsx)(n.h5,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'\n$ pulsar-admin namespaces get-retention my-tenant/my-ns\n{\n  "retentionTimeInMinutes": 10,\n  "retentionSizeInMB": 0\n}\n\n'})}),"\n",(0,i.jsx)(n.h4,{id:"rest-api-1",children:"REST API"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.3.0&apiversion=v2#operation/getRetention",children:["GET /admin/v2/namespaces/",":tenant","/",":namespace","/retention/getRetention"]})}),"\n",(0,i.jsx)(n.h4,{id:"java-1",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().getRetention(namespace);\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"backlog-quotas",children:"Backlog quotas"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Backlogs"})," are sets of unacknowledged messages for a topic that have been stored by bookies. Pulsar stores all unacknowledged messages in backlogs until they are processed and acknowledged."]}),"\n",(0,i.jsxs)(n.p,{children:["You can control the allowable size of backlogs, at the namespace level, using ",(0,i.jsx)(n.em,{children:"backlog quotas"}),". Setting a backlog quota involves setting:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["an allowable ",(0,i.jsx)(n.em,{children:"size threshold"})," for each topic in the namespace"]}),"\n",(0,i.jsxs)(n.li,{children:["a ",(0,i.jsx)(n.em,{children:"retention policy"})," that determines which action the ",(0,i.jsx)(n.a,{href:"/docs/2.3.0/reference-terminology#broker",children:"broker"})," takes if the threshold is exceeded."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The following retention policies are available:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Policy"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Action"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"producer_request_hold"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The broker will hold and not persist produce request payload"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"producer_exception"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The broker will disconnect from the client by throwing an exception"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"consumer_backlog_eviction"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The broker will begin discarding backlog messages"})]})]})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.h4,{id:"beware-the-distinction-between-retention-policy-types",children:"Beware the distinction between retention policy types"}),"\n",(0,i.jsx)(n.p,{children:'As you may have noticed, there are two definitions of the term "retention policy" in Pulsar, one that applies to persistent storage of already-acknowledged messages and one that applies to backlogs.'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Backlog quotas are handled at the namespace level. They can be managed via:"}),"\n",(0,i.jsx)(n.h3,{id:"set-size-thresholds-and-backlog-retention-policies",children:"Set size thresholds and backlog retention policies"}),"\n",(0,i.jsxs)(n.p,{children:["You can set a size threshold and backlog retention policy for all of the topics in a ",(0,i.jsx)(n.a,{href:"/docs/2.3.0/reference-terminology#namespace",children:"namespace"})," by specifying the namespace, a size limit, and a policy by name."]}),"\n",(0,i.jsx)(n.h4,{id:"pulsar-admin-2",children:"pulsar-admin"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"/docs/2.3.0/reference-pulsar-admin#namespaces",children:(0,i.jsx)(n.code,{children:"set-backlog-quota"})})," subcommand and specify a namespace, a size limit using the ",(0,i.jsx)(n.code,{children:"-l"}),"/",(0,i.jsx)(n.code,{children:"--limit"})," flag, and a retention policy using the ",(0,i.jsx)(n.code,{children:"-p"}),"/",(0,i.jsx)(n.code,{children:"--policy"})," flag."]}),"\n",(0,i.jsx)(n.h5,{id:"example-1",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces set-backlog-quota my-tenant/my-ns \\\n  --limit 2G \\\n  --policy producer_request_hold\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rest-api-2",children:"REST API"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.3.0&apiversion=v2#operation/getBacklogQuotaMap",children:["POST /admin/v2/namespaces/",":tenant","/",":namespace","/backlogQuota/getBacklogQuotaMap"]})}),"\n",(0,i.jsx)(n.h4,{id:"java-2",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().setBacklogQuota(namespace, BacklogQuota.builder()\n        .retentionPolicy(RetentionPolicy.producer_request_hold)\n        .limitSize(2147483648L)\n        .limitTime(60 * 60)\n        .build());\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"get-backlog-threshold-and-backlog-retention-policy",children:"Get backlog threshold and backlog retention policy"}),"\n",(0,i.jsx)(n.p,{children:"You can see which size threshold and backlog retention policy has been applied to a namespace."}),"\n",(0,i.jsx)(n.h4,{id:"pulsar-admin-3",children:"pulsar-admin"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"/docs/2.3.0/reference-pulsar-admin#pulsar-admin-namespaces-get-backlog-quotas",children:(0,i.jsx)(n.code,{children:"get-backlog-quotas"})})," subcommand and specify a namespace. Here's an example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'\n$ pulsar-admin namespaces get-backlog-quotas my-tenant/my-ns\n{\n  "destination_storage": {\n    "limit" : 2147483648,\n    "policy" : "producer_request_hold"\n  }\n}\n\n'})}),"\n",(0,i.jsx)(n.h4,{id:"rest-api-3",children:"REST API"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.3.0&apiversion=v2#operation/getBacklogQuotaMap",children:["GET /admin/v2/namespaces/",":tenant","/",":namespace","/backlogQuotaMap/getBacklogQuotaMap"]})}),"\n",(0,i.jsx)(n.h4,{id:"java-3",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nMap<BacklogQuota.BacklogQuotaType,BacklogQuota> quotas =\n  admin.namespaces().getBacklogQuotas(namespace);\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"remove-backlog-quotas",children:"Remove backlog quotas"}),"\n",(0,i.jsx)(n.h4,{id:"pulsar-admin-4",children:"pulsar-admin"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"/docs/2.3.0/reference-pulsar-admin#pulsar-admin-namespaces-remove-backlog-quota",children:(0,i.jsx)(n.code,{children:"remove-backlog-quota"})})," subcommand and specify a namespace. Here's an example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces remove-backlog-quota my-tenant/my-ns\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rest-api-4",children:"REST API"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.3.0&apiversion=v2#operation/removeBacklogQuota",children:["DELETE /admin/v2/namespaces/",":tenant","/",":namespace","/backlogQuota/removeBacklogQuota"]})}),"\n",(0,i.jsx)(n.h4,{id:"java-4",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().removeBacklogQuota(namespace);\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"clear-backlog",children:"Clear backlog"}),"\n",(0,i.jsx)(n.h4,{id:"pulsar-admin-5",children:"pulsar-admin"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"/docs/2.3.0/reference-pulsar-admin#pulsar-admin-namespaces-clear-backlog",children:(0,i.jsx)(n.code,{children:"clear-backlog"})})," subcommand."]}),"\n",(0,i.jsx)(n.h5,{id:"example-2",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces clear-backlog my-tenant/my-ns\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["By default, you will be prompted to ensure that you really want to clear the backlog for the namespace. You can override the prompt using the ",(0,i.jsx)(n.code,{children:"-f"}),"/",(0,i.jsx)(n.code,{children:"--force"})," flag."]}),"\n",(0,i.jsx)(n.h2,{id:"time-to-live-ttl",children:"Time to live (TTL)"}),"\n",(0,i.jsx)(n.p,{children:"By default, Pulsar stores all unacknowledged messages forever. This can lead to heavy disk space usage in cases where a lot of messages are going unacknowledged. If disk space is a concern, you can set a time to live (TTL) that determines how long unacknowledged messages will be retained."}),"\n",(0,i.jsx)(n.h3,{id:"set-the-ttl-for-a-namespace",children:"Set the TTL for a namespace"}),"\n",(0,i.jsx)(n.h4,{id:"pulsar-admin-6",children:"pulsar-admin"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"/docs/2.3.0/reference-pulsar-admin#pulsar-admin-namespaces-set-message-ttl",children:(0,i.jsx)(n.code,{children:"set-message-ttl"})})," subcommand and specify a namespace and a TTL (in seconds) using the ",(0,i.jsx)(n.code,{children:"-ttl"}),"/",(0,i.jsx)(n.code,{children:"--messageTTL"})," flag."]}),"\n",(0,i.jsx)(n.h5,{id:"example-3",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces set-message-ttl my-tenant/my-ns \\\n  --messageTTL 120 # TTL of 2 minutes\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rest-api-5",children:"REST API"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.3.0&apiversion=v2#operation/setNamespaceMessageTTL",children:["POST /admin/v2/namespaces/",":tenant","/",":namespace","/messageTTL/setNamespaceMessageTTL"]})}),"\n",(0,i.jsx)(n.h4,{id:"java-5",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().setNamespaceMessageTTL(namespace, ttlInSeconds);\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"get-the-ttl-configuration-for-a-namespace",children:"Get the TTL configuration for a namespace"}),"\n",(0,i.jsx)(n.h4,{id:"pulsar-admin-7",children:"pulsar-admin"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"/docs/2.3.0/reference-pulsar-admin#pulsar-admin-namespaces-get-message-ttl",children:(0,i.jsx)(n.code,{children:"get-message-ttl"})})," subcommand and specify a namespace."]}),"\n",(0,i.jsx)(n.h5,{id:"example-4",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces get-message-ttl my-tenant/my-ns\n60\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rest-api-6",children:"REST API"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.3.0&apiversion=v2#operation/getNamespaceMessageTTL",children:["GET /admin/v2/namespaces/",":tenant","/",":namespace","/messageTTL/getNamespaceMessageTTL"]})}),"\n",(0,i.jsx)(n.h4,{id:"java-6",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().getNamespaceMessageTTL(namespace)\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>r});var s=a(96540);const i={},t=s.createContext(i);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);