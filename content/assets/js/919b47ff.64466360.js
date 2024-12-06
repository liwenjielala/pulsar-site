"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[58411],{34079:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"cookbooks-retention-expiry","title":"Message retention and expiry","description":"Pulsar brokers are responsible for handling messages that pass through Pulsar, including persistent storage of messages. By default, for each topic, brokers only retain messages that are in at least one backlog. A backlog is the set of unacknowledged messages for a particular subscription. As a topic can have multiple subscriptions, a topic can have multiple backlogs.","source":"@site/versioned_docs/version-2.2.1/cookbooks-retention-expiry.md","sourceDirName":".","slug":"/cookbooks-retention-expiry","permalink":"/docs/2.2.1/cookbooks-retention-expiry","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.1/cookbooks-retention-expiry.md","tags":[],"version":"2.2.1","frontMatter":{"id":"cookbooks-retention-expiry","title":"Message retention and expiry","sidebar_label":"Message retention and expiry"},"sidebar":"docsSidebar","previous":{"title":"Partitioned Topics","permalink":"/docs/2.2.1/cookbooks-partitioned"},"next":{"title":"Encryption ","permalink":"/docs/2.2.1/cookbooks-encryption"}}');var t=n(74848),i=n(28453),l=n(89089),r=n(19365);const o={id:"cookbooks-retention-expiry",title:"Message retention and expiry",sidebar_label:"Message retention and expiry"},c=void 0,d={},h=[{value:"Retention and TTL solve two different problems",id:"retention-and-ttl-solve-two-different-problems",level:4},{value:"Retention policies",id:"retention-policies",level:2},{value:"Defaults",id:"defaults",level:3},{value:"Set retention policy",id:"set-retention-policy",level:3},{value:"Get retention policy",id:"get-retention-policy",level:3},{value:"Example",id:"example",level:5},{value:"Backlog quotas",id:"backlog-quotas",level:2},{value:"Beware the distinction between retention policy types",id:"beware-the-distinction-between-retention-policy-types",level:4},{value:"Set size/time thresholds and backlog retention policies",id:"set-sizetime-thresholds-and-backlog-retention-policies",level:3},{value:"Example",id:"example-1",level:5},{value:"Get backlog threshold and backlog retention policy",id:"get-backlog-threshold-and-backlog-retention-policy",level:3},{value:"Remove backlog quotas",id:"remove-backlog-quotas",level:3},{value:"Clear backlog",id:"clear-backlog",level:3},{value:"pulsar-admin",id:"pulsar-admin",level:4},{value:"Example",id:"example-2",level:5},{value:"Time to live (TTL)",id:"time-to-live-ttl",level:2},{value:"Set the TTL for a namespace",id:"set-the-ttl-for-a-namespace",level:3},{value:"Example",id:"example-3",level:5},{value:"Get the TTL configuration for a namespace",id:"get-the-ttl-configuration-for-a-namespace",level:3},{value:"Example",id:"example-4",level:5},{value:"Remove the TTL configuration for a namespace",id:"remove-the-ttl-configuration-for-a-namespace",level:3},{value:"Example",id:"example-5",level:5},{value:"Delete messages from namespaces",id:"delete-messages-from-namespaces",level:2}];function u(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["Pulsar brokers are responsible for handling messages that pass through Pulsar, including ",(0,t.jsx)(a.a,{href:"/docs/2.2.1/concepts-architecture-overview#persistent-storage",children:"persistent storage"})," of messages. By default, for each topic, brokers only retain messages that are in at least one backlog. A backlog is the set of unacknowledged messages for a particular subscription. As a topic can have multiple subscriptions, a topic can have multiple backlogs."]}),"\n",(0,t.jsx)(a.p,{children:"As a consequence, no messages are retained (by default) on a topic that has not had any subscriptions created for it."}),"\n",(0,t.jsx)(a.p,{children:"(Note that messages that are no longer being stored are not necessarily immediately deleted, and may in fact still be accessible until the next ledger rollover. Because clients cannot predict when rollovers may happen, it is not wise to rely on a rollover not happening at an inconvenient point in time.)"}),"\n",(0,t.jsx)(a.p,{children:"In Pulsar, you can modify this behavior, with namespace granularity, in two ways:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["You can persistently store messages that are not within a backlog (because they've been acknowledged by on every existing subscription, or because there are no subscriptions) by setting ",(0,t.jsx)(a.a,{href:"#retention-policies",children:"retention policies"}),"."]}),"\n",(0,t.jsxs)(a.li,{children:["Messages that are not acknowledged within a specified timeframe can be automatically acknowledged, by specifying the ",(0,t.jsx)(a.a,{href:"#time-to-live-ttl",children:"time to live"})," (TTL)."]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["Pulsar's ",(0,t.jsx)(a.a,{href:"/docs/2.2.1/admin-api-overview",children:"admin interface"})," enables you to manage both retention policies and TTL with namespace granularity (and thus within a specific tenant and either on a specific cluster or in the ",(0,t.jsx)(a.a,{href:"/docs/2.2.1/concepts-architecture-overview#global-cluster",children:(0,t.jsx)(a.code,{children:"global"})})," cluster)."]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.h4,{id:"retention-and-ttl-solve-two-different-problems",children:"Retention and TTL solve two different problems"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Message retention: Keep the data for at least X hours (even if acknowledged)"}),"\n",(0,t.jsx)(a.li,{children:"Time-to-live: Discard data after some time (by automatically acknowledging)"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Most applications will want to use at most one of these."}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"retention-policies",children:"Retention policies"}),"\n",(0,t.jsxs)(a.p,{children:["By default, when a Pulsar message arrives at a broker, the message is stored until it has been acknowledged on all subscriptions, at which point it is marked for deletion. You can override this behavior and retain messages that have already been acknowledged on all subscriptions by setting a ",(0,t.jsx)(a.em,{children:"retention policy"})," for all topics in a given namespace. Retention is based on both a ",(0,t.jsx)(a.em,{children:"size limit"})," and a ",(0,t.jsx)(a.em,{children:"time limit"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["The diagram below illustrates the concept of message retention.\n",(0,t.jsx)(a.img,{src:n(5874).A+"",width:"920",height:"581"})]}),"\n",(0,t.jsx)(a.p,{children:"Retention policies are useful when you use the Reader interface. The Reader interface does not use acknowledgements, and messages do not exist within backlogs. It is required to configure retention for Reader-only use cases."}),"\n",(0,t.jsxs)(a.p,{children:["When you set a retention policy on topics in a namespace, you must set ",(0,t.jsx)(a.strong,{children:"both"})," a ",(0,t.jsx)(a.em,{children:"size limit"})," (via ",(0,t.jsx)(a.code,{children:"defaultRetentionSizeInMB"}),") and a ",(0,t.jsx)(a.em,{children:"time limit"})," (via ",(0,t.jsx)(a.code,{children:"defaultRetentionTimeInMinutes"}),") . You can refer to the following table to set retention policies in ",(0,t.jsx)(a.code,{children:"pulsar-admin"})," and Java."]}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Time limit"}),(0,t.jsx)(a.th,{children:"Size limit"}),(0,t.jsx)(a.th,{children:"Message retention"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"-1"}),(0,t.jsx)(a.td,{children:"-1"}),(0,t.jsx)(a.td,{children:"Infinite retention"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"-1"}),(0,t.jsx)(a.td,{children:">0"}),(0,t.jsx)(a.td,{children:"Based on the size limit"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:">0"}),(0,t.jsx)(a.td,{children:"-1"}),(0,t.jsx)(a.td,{children:"Based on the time limit"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"0"}),(0,t.jsx)(a.td,{children:"0"}),(0,t.jsx)(a.td,{children:"Disable message retention, which means messages are not reserved (by default)"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"0"}),(0,t.jsx)(a.td,{children:">0"}),(0,t.jsx)(a.td,{children:"Invalid"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:">0"}),(0,t.jsx)(a.td,{children:"0"}),(0,t.jsx)(a.td,{children:"Invalid"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:">0"}),(0,t.jsx)(a.td,{children:">0"}),(0,t.jsx)(a.td,{children:"Acknowledged messages or messages with no active subscription will not be retained when either time or size reaches the limit."})]})]})]}),"\n",(0,t.jsx)(a.p,{children:"The retention settings apply to all messages on topics that do not have any subscriptions, or to messages that have been acknowledged by all subscriptions. The retention policy settings do not affect unacknowledged messages on topics with subscriptions. The unacknowledged messages are controlled by the backlog quota."}),"\n",(0,t.jsx)(a.p,{children:"When a retention limit on a topic is exceeded, the oldest message is marked for deletion until the set of retained messages falls within the specified limits again."}),"\n",(0,t.jsx)(a.h3,{id:"defaults",children:"Defaults"}),"\n",(0,t.jsxs)(a.p,{children:["You can set message retention at instance level with the following two parameters: ",(0,t.jsx)(a.code,{children:"defaultRetentionTimeInMinutes"})," and ",(0,t.jsx)(a.code,{children:"defaultRetentionSizeInMB"}),". Both parameters are set to ",(0,t.jsx)(a.code,{children:"0"})," by default."]}),"\n",(0,t.jsxs)(a.p,{children:["For more information of the two parameters, refer to the ",(0,t.jsx)(a.a,{href:"/docs/2.2.1/reference-configuration#broker",children:(0,t.jsx)(a.code,{children:"broker.conf"})})," configuration file."]}),"\n",(0,t.jsx)(a.h3,{id:"set-retention-policy",children:"Set retention policy"}),"\n",(0,t.jsxs)(a.p,{children:["You can set a retention policy for a namespace by specifying the namespace, a size limit and a time limit in ",(0,t.jsx)(a.code,{children:"pulsar-admin"}),", REST API and Java."]}),"\n",(0,t.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(r.A,{value:"pulsar-admin",children:[(0,t.jsxs)(a.p,{children:["You can use the ",(0,t.jsx)(a.a,{href:"/docs/2.2.1/reference-pulsar-admin#namespaces-set-retention",children:(0,t.jsx)(a.code,{children:"set-retention"})})," subcommand and specify a namespace, a size limit using the ",(0,t.jsx)(a.code,{children:"-s"}),"/",(0,t.jsx)(a.code,{children:"--size"})," flag, and a time limit using the ",(0,t.jsx)(a.code,{children:"-t"}),"/",(0,t.jsx)(a.code,{children:"--time"})," flag."]}),(0,t.jsxs)(a.p,{children:["In the following example, the size limit is set to 10 GB and the time limit is set to 3 hours for each topic within the ",(0,t.jsx)(a.code,{children:"my-tenant/my-ns"})," namespace."]}),(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"When the size of messages reaches 10 GB on a topic within 3 hours, the acknowledged messages will not be retained."}),"\n",(0,t.jsx)(a.li,{children:"After 3 hours, even if the message size is less than 10 GB, the acknowledged messages will not be retained."}),"\n"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size 10G \\\n  --time 3h\n\n"})}),(0,t.jsx)(a.p,{children:"In the following example, the time is not limited and the size limit is set to 1 TB. The size limit determines the retention."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size 1T \\\n  --time -1\n\n"})}),(0,t.jsx)(a.p,{children:"In the following example, the size is not limited and the time limit is set to 3 hours. The time limit determines the retention."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size -1 \\\n  --time 3h\n\n"})}),(0,t.jsxs)(a.p,{children:["To achieve infinite retention, set both values to ",(0,t.jsx)(a.code,{children:"-1"}),"."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size -1 \\\n  --time -1\n\n"})}),(0,t.jsxs)(a.p,{children:["To disable the retention policy, set both values to ",(0,t.jsx)(a.code,{children:"0"}),"."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size 0 \\\n  --time 0\n\n"})})]}),(0,t.jsxs)(r.A,{value:"REST API",children:[(0,t.jsx)(a.p,{children:(0,t.jsxs)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.2.1&apiversion=v2#operation/setRetention",children:["POST /admin/v2/namespaces/",":tenant","/",":namespace","/retention/setRetention"]})}),(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["To disable the retention policy, you need to set both the size and time limit to ",(0,t.jsx)(a.code,{children:"0"}),". Set either size or time limit to ",(0,t.jsx)(a.code,{children:"0"})," is invalid."]})})]}),(0,t.jsx)(r.A,{value:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"\nint retentionTime = 10; // 10 minutes\nint retentionSize = 500; // 500 megabytes\nRetentionPolicies policies = new RetentionPolicies(retentionTime, retentionSize);\nadmin.namespaces().setRetention(namespace, policies);\n\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"get-retention-policy",children:"Get retention policy"}),"\n",(0,t.jsxs)(a.p,{children:["You can fetch the retention policy for a namespace by specifying the namespace. The output will be a JSON object with two keys: ",(0,t.jsx)(a.code,{children:"retentionTimeInMinutes"})," and ",(0,t.jsx)(a.code,{children:"retentionSizeInMB"}),"."]}),"\n",(0,t.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(r.A,{value:"pulsar-admin",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.a,{href:"/docs/2.2.1/reference-pulsar-admin#namespaces",children:(0,t.jsx)(a.code,{children:"get-retention"})})," subcommand and specify the namespace."]}),(0,t.jsx)(a.h5,{id:"example",children:"Example"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'\n$ pulsar-admin namespaces get-retention my-tenant/my-ns\n{\n  "retentionTimeInMinutes": 10,\n  "retentionSizeInMB": 500\n}\n\n'})})]}),(0,t.jsx)(r.A,{value:"REST API",children:(0,t.jsx)(a.p,{children:(0,t.jsxs)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.2.1&apiversion=v2#operation/getRetention",children:["GET /admin/v2/namespaces/",":tenant","/",":namespace","/retention/getRetention"]})})}),(0,t.jsx)(r.A,{value:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"\nadmin.namespaces().getRetention(namespace);\n\n"})})})]}),"\n",(0,t.jsx)(a.h2,{id:"backlog-quotas",children:"Backlog quotas"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:"Backlogs"})," are sets of unacknowledged messages for a topic that have been stored by bookies. Pulsar stores all unacknowledged messages in backlogs until they are processed and acknowledged."]}),"\n",(0,t.jsxs)(a.p,{children:["You can control the allowable size and/or time of backlogs, at the namespace level, using ",(0,t.jsx)(a.em,{children:"backlog quotas"}),". Pulsar uses a quota to enforce a hard limit on the logical size of the backlogs in a topic. Backlog quota triggers an alert policy (for example, producer exception) once the quota limit is reached."]}),"\n",(0,t.jsxs)(a.p,{children:["The diagram below illustrates the concept of backlog quota.\n",(0,t.jsx)(a.img,{src:n(66970).A+"",width:"1465",height:"907"})]}),"\n",(0,t.jsx)(a.p,{children:"Setting a backlog quota involves setting:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["an allowable ",(0,t.jsx)(a.em,{children:"size and/or time threshold"})," for each topic in the namespace"]}),"\n",(0,t.jsxs)(a.li,{children:["a ",(0,t.jsx)(a.em,{children:"retention policy"})," that determines which action the ",(0,t.jsx)(a.a,{href:"/docs/2.2.1/reference-terminology#broker",children:"broker"})," takes if the threshold is exceeded."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"The following retention policies are available:"}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{style:{textAlign:"left"},children:"Policy"}),(0,t.jsx)(a.th,{style:{textAlign:"left"},children:"Action"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{style:{textAlign:"left"},children:(0,t.jsx)(a.code,{children:"producer_request_hold"})}),(0,t.jsx)(a.td,{style:{textAlign:"left"},children:"The broker will hold and not persist produce request payload"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{style:{textAlign:"left"},children:(0,t.jsx)(a.code,{children:"producer_exception"})}),(0,t.jsx)(a.td,{style:{textAlign:"left"},children:"The broker will disconnect from the client by throwing an exception"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{style:{textAlign:"left"},children:(0,t.jsx)(a.code,{children:"consumer_backlog_eviction"})}),(0,t.jsx)(a.td,{style:{textAlign:"left"},children:"The broker will begin discarding backlog messages"})]})]})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.h4,{id:"beware-the-distinction-between-retention-policy-types",children:"Beware the distinction between retention policy types"}),"\n",(0,t.jsx)(a.p,{children:'As you may have noticed, there are two definitions of the term "retention policy" in Pulsar, one that applies to persistent storage of messages not in backlogs, and one that applies to messages within backlogs.'}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Backlog quotas are handled at the namespace level. They can be managed via:"}),"\n",(0,t.jsx)(a.h3,{id:"set-sizetime-thresholds-and-backlog-retention-policies",children:"Set size/time thresholds and backlog retention policies"}),"\n",(0,t.jsxs)(a.p,{children:["You can set a size and/or time threshold and backlog retention policy for all of the topics in a ",(0,t.jsx)(a.a,{href:"/docs/2.2.1/reference-terminology#namespace",children:"namespace"})," by specifying the namespace, a size limit and/or a time limit in second, and a policy by name."]}),"\n",(0,t.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(r.A,{value:"pulsar-admin",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.a,{href:"/docs/2.2.1/reference-pulsar-admin#namespaces",children:(0,t.jsx)(a.code,{children:"set-backlog-quota"})})," subcommand and specify a namespace, a size limit using the ",(0,t.jsx)(a.code,{children:"-l"}),"/",(0,t.jsx)(a.code,{children:"--limit"})," , ",(0,t.jsx)(a.code,{children:"-lt"}),"/",(0,t.jsx)(a.code,{children:"--limitTime"})," flag to limit backlog, a retention policy using the ",(0,t.jsx)(a.code,{children:"-p"}),"/",(0,t.jsx)(a.code,{children:"--policy"})," flag and a policy type using ",(0,t.jsx)(a.code,{children:"-t"}),"/",(0,t.jsx)(a.code,{children:"--type"})," (default is destination_storage)."]}),(0,t.jsx)(a.h5,{id:"example-1",children:"Example"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces set-backlog-quota my-tenant/my-ns \\\n  --limit 2G \\\n  --policy producer_request_hold\n\n"})}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces set-backlog-quota my-tenant/my-ns/my-topic \\\n--limitTime 3600 \\\n--policy producer_request_hold \\\n--type message_age\n\n"})})]}),(0,t.jsx)(r.A,{value:"REST API",children:(0,t.jsx)(a.p,{children:(0,t.jsxs)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.2.1&apiversion=v2#operation/getBacklogQuotaMap",children:["POST /admin/v2/namespaces/",":tenant","/",":namespace","/backlogQuota/getBacklogQuotaMap"]})})}),(0,t.jsx)(r.A,{value:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"\nadmin.namespaces().setBacklogQuota(namespace, BacklogQuota.builder()\n        .retentionPolicy(RetentionPolicy.producer_request_hold)\n        .limitSize(2147483648L)\n        .limitTime(60 * 60)\n        .build());\n\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"get-backlog-threshold-and-backlog-retention-policy",children:"Get backlog threshold and backlog retention policy"}),"\n",(0,t.jsx)(a.p,{children:"You can see which size threshold and backlog retention policy has been applied to a namespace."}),"\n",(0,t.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(r.A,{value:"pulsar-admin",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.a,{href:"/docs/2.2.1/reference-pulsar-admin#pulsar-admin-namespaces-get-backlog-quotas",children:(0,t.jsx)(a.code,{children:"get-backlog-quotas"})})," subcommand and specify a namespace. Here's an example:"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'\n$ pulsar-admin namespaces get-backlog-quotas my-tenant/my-ns\n{\n  "destination_storage": {\n    "limit" : 2147483648,\n    "policy" : "producer_request_hold"\n  }\n}\n\n'})})]}),(0,t.jsx)(r.A,{value:"REST API",children:(0,t.jsx)(a.p,{children:(0,t.jsxs)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.2.1&apiversion=v2#operation/getBacklogQuotaMap",children:["GET /admin/v2/namespaces/",":tenant","/",":namespace","/backlogQuotaMap/getBacklogQuotaMap"]})})}),(0,t.jsx)(r.A,{value:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"\nMap<BacklogQuota.BacklogQuotaType,BacklogQuota> quotas =\n  admin.namespaces().getBacklogQuotas(namespace);\n\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"remove-backlog-quotas",children:"Remove backlog quotas"}),"\n",(0,t.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(r.A,{value:"pulsar-admin",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.a,{href:"/docs/2.2.1/reference-pulsar-admin#pulsar-admin-namespaces-remove-backlog-quota",children:(0,t.jsx)(a.code,{children:"remove-backlog-quota"})})," subcommand and specify a namespace, use ",(0,t.jsx)(a.code,{children:"t"}),"/",(0,t.jsx)(a.code,{children:"--type"})," to specify backlog type to remove(default is destination_storage). Here's an example:"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces remove-backlog-quota my-tenant/my-ns\n\n"})})]}),(0,t.jsx)(r.A,{value:"REST API",children:(0,t.jsx)(a.p,{children:(0,t.jsxs)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.2.1&apiversion=v2#operation/removeBacklogQuota",children:["DELETE /admin/v2/namespaces/",":tenant","/",":namespace","/backlogQuota/removeBacklogQuota"]})})}),(0,t.jsx)(r.A,{value:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"\nadmin.namespaces().removeBacklogQuota(namespace);\n\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"clear-backlog",children:"Clear backlog"}),"\n",(0,t.jsx)(a.h4,{id:"pulsar-admin",children:"pulsar-admin"}),"\n",(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.a,{href:"/docs/2.2.1/reference-pulsar-admin#pulsar-admin-namespaces-clear-backlog",children:(0,t.jsx)(a.code,{children:"clear-backlog"})})," subcommand."]}),"\n",(0,t.jsx)(a.h5,{id:"example-2",children:"Example"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces clear-backlog my-tenant/my-ns\n\n"})}),"\n",(0,t.jsxs)(a.p,{children:["By default, you will be prompted to ensure that you really want to clear the backlog for the namespace. You can override the prompt using the ",(0,t.jsx)(a.code,{children:"-f"}),"/",(0,t.jsx)(a.code,{children:"--force"})," flag."]}),"\n",(0,t.jsx)(a.h2,{id:"time-to-live-ttl",children:"Time to live (TTL)"}),"\n",(0,t.jsx)(a.p,{children:"By default, Pulsar stores all unacknowledged messages forever. This can lead to heavy disk space usage in cases where a lot of messages are going unacknowledged. If disk space is a concern, you can set a time to live (TTL) that determines how long unacknowledged messages will be retained."}),"\n",(0,t.jsx)(a.p,{children:"The TTL parameter is like a stopwatch attached to each message that defines the amount of time a message is allowed to stay in the unacknowledged state. When the TTL expires, Pulsar automatically moves the message to the acknowledged state (and thus makes it ready for deletion)."}),"\n",(0,t.jsxs)(a.p,{children:["The diagram below illustrates the concept of TTL.\n",(0,t.jsx)(a.img,{src:n(98512).A+"",width:"1100",height:"581"})]}),"\n",(0,t.jsx)(a.h3,{id:"set-the-ttl-for-a-namespace",children:"Set the TTL for a namespace"}),"\n",(0,t.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(r.A,{value:"pulsar-admin",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.a,{href:"/docs/2.2.1/reference-pulsar-admin#pulsar-admin-namespaces-set-message-ttl",children:(0,t.jsx)(a.code,{children:"set-message-ttl"})})," subcommand and specify a namespace and a TTL (in seconds) using the ",(0,t.jsx)(a.code,{children:"-ttl"}),"/",(0,t.jsx)(a.code,{children:"--messageTTL"})," flag."]}),(0,t.jsx)(a.h5,{id:"example-3",children:"Example"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces set-message-ttl my-tenant/my-ns \\\n  --messageTTL 120 # TTL of 2 minutes\n\n"})})]}),(0,t.jsx)(r.A,{value:"REST API",children:(0,t.jsx)(a.p,{children:(0,t.jsxs)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.2.1&apiversion=v2#operation/setNamespaceMessageTTL",children:["POST /admin/v2/namespaces/",":tenant","/",":namespace","/messageTTL/setNamespaceMessageTTL"]})})}),(0,t.jsx)(r.A,{value:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"\nadmin.namespaces().setNamespaceMessageTTL(namespace, ttlInSeconds);\n\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"get-the-ttl-configuration-for-a-namespace",children:"Get the TTL configuration for a namespace"}),"\n",(0,t.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(r.A,{value:"pulsar-admin",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.a,{href:"/docs/2.2.1/reference-pulsar-admin#pulsar-admin-namespaces-get-message-ttl",children:(0,t.jsx)(a.code,{children:"get-message-ttl"})})," subcommand and specify a namespace."]}),(0,t.jsx)(a.h5,{id:"example-4",children:"Example"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces get-message-ttl my-tenant/my-ns\n60\n\n"})})]}),(0,t.jsx)(r.A,{value:"REST API",children:(0,t.jsx)(a.p,{children:(0,t.jsxs)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.2.1&apiversion=v2#operation/getNamespaceMessageTTL",children:["GET /admin/v2/namespaces/",":tenant","/",":namespace","/messageTTL/getNamespaceMessageTTL"]})})}),(0,t.jsx)(r.A,{value:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"\nadmin.namespaces().getNamespaceMessageTTL(namespace)\n\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"remove-the-ttl-configuration-for-a-namespace",children:"Remove the TTL configuration for a namespace"}),"\n",(0,t.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(r.A,{value:"pulsar-admin",children:[(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.a,{href:"/docs/2.2.1/reference-pulsar-admin#pulsar-admin-namespaces-remove-message-ttl",children:(0,t.jsx)(a.code,{children:"remove-message-ttl"})})," subcommand and specify a namespace."]}),(0,t.jsx)(a.h5,{id:"example-5",children:"Example"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces remove-message-ttl my-tenant/my-ns\n\n"})})]}),(0,t.jsx)(r.A,{value:"REST API",children:(0,t.jsx)(a.p,{children:(0,t.jsxs)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.2.1&apiversion=v2#operation/removeNamespaceMessageTTL",children:["DELETE /admin/v2/namespaces/",":tenant","/",":namespace","/messageTTL/removeNamespaceMessageTTL"]})})}),(0,t.jsx)(r.A,{value:"Java",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"\nadmin.namespaces().removeNamespaceMessageTTL(namespace)\n\n"})})})]}),"\n",(0,t.jsx)(a.h2,{id:"delete-messages-from-namespaces",children:"Delete messages from namespaces"}),"\n",(0,t.jsx)(a.p,{children:"When it comes to the physical storage size, message expiry and retention are just like two sides of the same coin."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"The backlog quota and TTL parameters prevent disk size from growing indefinitely, as Pulsar\u2019s default behaviour is to persist unacknowledged messages."}),"\n",(0,t.jsx)(a.li,{children:"The retention policy allocates storage space to accommodate the messages that are supposed to be deleted by Pulsar by default."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"As a conclusion, the size of your physical storage should accommodate the sum of the backlog quota and the retention size."}),"\n",(0,t.jsx)(a.p,{children:"The message deletion rate (releasing rate of disk space) can be determined by multiple factors."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Segment rollover period"}),": basically, the segment rollover period is how often a new segment is created. Once a new segment is created, the old segment will be deleted. By default, this happens either when you have written 50,000 entries (messages) or have waited 240 minutes. You can tune this in your broker."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Entry log rollover period"}),": multiple ledgers in BookKeeper are interleaved into an ",(0,t.jsx)(a.a,{href:"https://bookkeeper.apache.org/docs/4.11.1/getting-started/concepts/#entry-logs",children:"entry log"}),". In order for a ledger that has been deleted, the entry log must all be rolled over.\nThe entry log rollover period is configurable, but is purely based on the entry log size. For details, see ",(0,t.jsx)(a.a,{href:"https://bookkeeper.apache.org/docs/4.11.1/reference/config/#entry-log-settings",children:"here"}),". Once the entry log is rolled over, the entry log can be garbage collected."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Garbage collection interval"}),": because entry logs have interleaved ledgers, to free up space, the entry logs need to be rewritten. The garbage collection interval is how often BookKeeper performs garbage collection. which is related to minor compaction and major compaction of entry logs. For details, see ",(0,t.jsx)(a.a,{href:"https://bookkeeper.apache.org/docs/4.11.1/reference/config/#entry-log-compaction-settings",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["The diagram below illustrates one of the cases that the consumed storage size is larger than the given limits for backlog and retention. Messages over the retention limit are kept because other messages in the same segment are still within retention period.\n",(0,t.jsx)(a.img,{src:n(65916).A+"",width:"1159",height:"614"})]}),"\n",(0,t.jsx)(a.p,{children:"If you do not have any retention period and that you never have much of a backlog, the upper limit for retained messages, which are acknowledged, equals to the Pulsar segment rollover period + entry log rollover period + (garbage collection interval * garbage collection ratios)."})]})}function p(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,a,n)=>{n.d(a,{A:()=>l});n(96540);var s=n(34164);const t={tabItem:"tabItem_Ymn6"};var i=n(74848);function l(e){let{children:a,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,l),hidden:n,children:a})}},89089:(e,a,n)=>{n.d(a,{A:()=>k});var s=n(96540),t=n(34164),i=n(23104),l=n(56347),r=n(205),o=n(57485),c=n(31682),d=n(70679);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:a,children:n}=e;return(0,s.useMemo)((()=>{const e=a??function(e){return h(e).map((e=>{let{props:{value:a,label:n,attributes:s,default:t}}=e;return{value:a,label:n,attributes:s,default:t}}))}(n);return function(e){const a=(0,c.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function p(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:n}=e;const t=(0,l.W6)(),i=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,o.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(t.location.search);a.set(i,e),t.replace({...t.location,search:a.toString()})}),[i,t])]}function g(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,i=u(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:i}))),[c,h]=m({queryString:n,groupId:t}),[g,x]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,i]=(0,d.Dv)(n);return[t,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:t}),j=(()=>{const e=c??g;return p({value:e,tabValues:i})?e:null})();(0,r.A)((()=>{j&&o(j)}),[j]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),x(e)}),[h,x,i]),tabValues:i}}var x=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function b(e){let{className:a,block:n,selectedValue:s,selectValue:l,tabValues:r}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const a=e.currentTarget,n=o.indexOf(a),t=r[n].value;t!==s&&(c(a),l(t))},h=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;a=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;a=o[n]??o[o.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},a),children:r.map((e=>{let{value:a,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,ref:e=>o.push(e),onKeyDown:h,onClick:d,...i,className:(0,t.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":s===a}),children:n??a},a)}))})}function f(e){let{lazy:a,children:n,selectedValue:i}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==i})))})}function y(e){const a=g(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,v.jsx)(b,{...a,...e}),(0,v.jsx)(f,{...a,...e})]})}function k(e){const a=(0,x.A)();return(0,v.jsx)(y,{...e,children:h(e.children)},String(a))}},66970:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/backlog-quota-8b858faef29b4f2a73479d396ec5b59f.svg"},65916:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/retention-storage-size-4c7f0e9aa49ebd431dae787dd13b60ba.svg"},5874:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/retention-1dfff1bb477b98049ae06fcd16a51fda.svg"},98512:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/ttl-7605af453040d419a432d79d41b23830.svg"},28453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>r});var s=n(96540);const t={},i=s.createContext(t);function l(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);