"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[72881],{68616:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"administration-geo","title":"Pulsar geo-replication","description":"Enable geo-replication for a namespace","source":"@site/versioned_docs/version-3.1.x/administration-geo.md","sourceDirName":".","slug":"/administration-geo","permalink":"/docs/3.1.x/administration-geo","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/administration-geo.md","tags":[],"version":"3.1.x","frontMatter":{"id":"administration-geo","title":"Pulsar geo-replication","sidebar_label":"Geo-replication"},"sidebar":"docsSidebar","previous":{"title":"Configure metadata store","permalink":"/docs/3.1.x/administration-metadata-store"},"next":{"title":"Pulsar Manager","permalink":"/docs/3.1.x/administration-pulsar-manager"}}');var i=s(74848),a=s(28453),r=s(11470),l=s(19365);const c={id:"administration-geo",title:"Pulsar geo-replication",sidebar_label:"Geo-replication"},o=void 0,d={},u=[{value:"Enable geo-replication for a namespace",id:"enable-geo-replication-for-a-namespace",level:2},{value:"Local persistence and forwarding",id:"local-persistence-and-forwarding",level:2},{value:"Configure replication",id:"configure-replication",level:2},{value:"Connect replication clusters",id:"connect-replication-clusters",level:3},{value:"Grant permissions to properties",id:"grant-permissions-to-properties",level:3},{value:"Enable geo-replication",id:"enable-geo-replication",level:3},{value:"Enable geo-replication at namespace level",id:"enable-geo-replication-at-namespace-level",level:4},{value:"Enable geo-replication at topic level",id:"enable-geo-replication-at-topic-level",level:4},{value:"Use topics with geo-replication",id:"use-topics-with-geo-replication",level:3},{value:"Selective replication",id:"selective-replication",level:4},{value:"Topic stats",id:"topic-stats",level:4},{value:"Delete a geo-replication topic",id:"delete-a-geo-replication-topic",level:4},{value:"Replicated subscriptions",id:"replicated-subscriptions",level:2},{value:"Enable replicated subscription",id:"enable-replicated-subscription",level:3},{value:"Advantages",id:"advantages",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Migrate data between clusters using geo-replication",id:"migrate-data-between-clusters-using-geo-replication",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"enable-geo-replication-for-a-namespace",children:"Enable geo-replication for a namespace"}),"\n",(0,i.jsxs)(n.p,{children:["You must enable geo-replication on a ",(0,i.jsx)(n.a,{href:"#concepts-multi-tenancy",children:"per-tenant basis"})," in Pulsar. For example, you can enable geo-replication between two specific clusters only when a tenant has access to both clusters."]}),"\n",(0,i.jsx)(n.p,{children:"Geo-replication is managed at the namespace level, which means you only need to create and configure a namespace to replicate messages between two or more provisioned clusters that a tenant can access."}),"\n",(0,i.jsx)(n.p,{children:"Complete the following tasks to enable geo-replication for a namespace:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#enable-geo-replication-at-namespace-level",children:"Enable a geo-replication namespace"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/3.1.x/admin-api-namespaces#configure-replication-clusters",children:"Configure that namespace to replicate across two or more provisioned clusters"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Any message published on ",(0,i.jsx)(n.em,{children:"any"})," topic in that namespace is replicated to all clusters in the specified set."]}),"\n",(0,i.jsx)(n.h2,{id:"local-persistence-and-forwarding",children:"Local persistence and forwarding"}),"\n",(0,i.jsx)(n.p,{children:"When messages are produced on a Pulsar topic, messages are first persisted in the local cluster, and then forwarded asynchronously to the remote clusters."}),"\n",(0,i.jsxs)(n.p,{children:["In normal cases, when connectivity issues are none, messages are replicated immediately, at the same time as they are dispatched to local consumers. Typically, the network ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Round-trip_delay_time",children:"round-trip time"})," (RTT) between the remote regions defines end-to-end delivery latency."]}),"\n",(0,i.jsx)(n.p,{children:"Applications can create producers and consumers in any of the clusters, even when the remote clusters are not reachable (like during a network partition)."}),"\n",(0,i.jsx)(n.p,{children:"Producers and consumers can publish messages to and consume messages from any cluster in a Pulsar instance. However, subscriptions cannot only be local to the cluster where the subscriptions are created but also can be transferred between clusters after the replicated subscription is enabled. Once the replicated subscription is enabled, you can keep the subscription state in synchronization. Therefore, a topic can be asynchronously replicated across multiple geographical regions. In case of failover, a consumer can restart consuming messages from the failure point in a different cluster."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"A typical geo-replication example with a full-mesh pattern",src:s(89353).A+"",width:"709",height:"349"})}),"\n",(0,i.jsxs)(n.p,{children:["In the aforementioned example, the ",(0,i.jsx)(n.strong,{children:"T1"})," topic is replicated among three clusters, ",(0,i.jsx)(n.strong,{children:"Cluster-A"}),", ",(0,i.jsx)(n.strong,{children:"Cluster-B"}),", and ",(0,i.jsx)(n.strong,{children:"Cluster-C"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["All messages produced in any of the three clusters are delivered to all subscriptions in other clusters. In this case, ",(0,i.jsx)(n.strong,{children:"C1"})," and ",(0,i.jsx)(n.strong,{children:"C2"})," consumers receive all messages that ",(0,i.jsx)(n.strong,{children:"P1"}),", ",(0,i.jsx)(n.strong,{children:"P2"}),", and ",(0,i.jsx)(n.strong,{children:"P3"})," producers publish. Ordering is still guaranteed on a per-producer basis."]}),"\n",(0,i.jsx)(n.h2,{id:"configure-replication",children:"Configure replication"}),"\n",(0,i.jsx)(n.p,{children:"This section guides you through the steps to configure geo-replicated clusters."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#connect-replication-clusters",children:"Connect replication clusters"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#grant-permissions-to-properties",children:"Grant permissions to properties"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#enable-geo-replication",children:"Enable geo-replication"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#use-topics-with-geo-replication",children:"Use topics with geo-replication"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"connect-replication-clusters",children:"Connect replication clusters"}),"\n",(0,i.jsxs)(n.p,{children:["To replicate data among clusters, you need to configure each cluster to connect to the other. You can use the ",(0,i.jsx)(n.a,{href:"pathname:///reference/#/3.1.x/pulsar-admin/",children:(0,i.jsx)(n.code,{children:"pulsar-admin"})})," tool to create a connection."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsxs)(n.p,{children:["Suppose that you have 3 replication clusters: ",(0,i.jsx)(n.code,{children:"us-west"}),", ",(0,i.jsx)(n.code,{children:"us-cent"}),", and ",(0,i.jsx)(n.code,{children:"us-east"}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure the connection from ",(0,i.jsx)(n.code,{children:"us-west"})," to ",(0,i.jsx)(n.code,{children:"us-east"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Run the following command on ",(0,i.jsx)(n.code,{children:"us-west"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin clusters create \\\n--broker-url pulsar://<DNS-OF-US-EAST>:<PORT> \\\n--url http://<DNS-OF-US-EAST>:<PORT> \\\nus-east\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you want to use a secure connection for a cluster, you can use the flags ",(0,i.jsx)(n.code,{children:"--broker-url-secure"})," and ",(0,i.jsx)(n.code,{children:"--url-secure"}),". For more information, see ",(0,i.jsx)(n.a,{href:"pathname:///reference/#/3.1.x/pulsar-admin/clusters?id=create",children:"pulsar-admin clusters create"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Different clusters may have different authentications. You can use the authentication flag ",(0,i.jsx)(n.code,{children:"--auth-plugin"})," and ",(0,i.jsx)(n.code,{children:"--auth-parameters"})," together to set cluster authentication, which overrides ",(0,i.jsx)(n.code,{children:"brokerClientAuthenticationPlugin"})," and ",(0,i.jsx)(n.code,{children:"brokerClientAuthenticationParameters"})," if ",(0,i.jsx)(n.code,{children:"authenticationEnabled"})," sets to ",(0,i.jsx)(n.code,{children:"true"})," in ",(0,i.jsx)(n.code,{children:"broker.conf"})," and ",(0,i.jsx)(n.code,{children:"standalone.conf"}),". For more information, see ",(0,i.jsx)(n.a,{href:"/docs/3.1.x/concepts-authentication",children:"authentication and authorization"}),"."]}),"\n"]})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure the connection from ",(0,i.jsx)(n.code,{children:"us-west"})," to ",(0,i.jsx)(n.code,{children:"us-cent"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Run the following command on ",(0,i.jsx)(n.code,{children:"us-west"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin clusters create \\\n--broker-url pulsar://<DNS-OF-US-CENT>:<PORT>\t\\\n--url http://<DNS-OF-US-CENT>:<PORT> \\\nus-cent\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Run similar commands on ",(0,i.jsx)(n.code,{children:"us-east"})," and ",(0,i.jsx)(n.code,{children:"us-cent"})," to create connections among clusters."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"grant-permissions-to-properties",children:"Grant permissions to properties"}),"\n",(0,i.jsx)(n.p,{children:"To replicate to a cluster, the tenant needs permission to use that cluster. You can grant permission to the tenant when you create the tenant or grant it later."}),"\n",(0,i.jsx)(n.p,{children:"Specify all the intended clusters when you create a tenant:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin tenants create my-tenant \\\n--admin-roles my-admin-role \\\n--allowed-clusters us-west,us-east,us-cent\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To update permissions of an existing tenant, use ",(0,i.jsx)(n.code,{children:"update"})," instead of ",(0,i.jsx)(n.code,{children:"create"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"enable-geo-replication",children:"Enable geo-replication"}),"\n",(0,i.jsxs)(n.p,{children:["You can enable geo-replication at ",(0,i.jsx)(n.strong,{children:"namespace"})," or ",(0,i.jsx)(n.strong,{children:"topic"})," level."]}),"\n",(0,i.jsx)(n.h4,{id:"enable-geo-replication-at-namespace-level",children:"Enable geo-replication at namespace level"}),"\n",(0,i.jsx)(n.p,{children:"You can create a namespace with the following command sample."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin namespaces create my-tenant/my-namespace\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Initially, the namespace is not assigned to any cluster. You can assign the namespace to clusters using the ",(0,i.jsx)(n.code,{children:"set-clusters"})," subcommand:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin namespaces set-clusters my-tenant/my-namespace \\\n--clusters us-west,us-east,us-cent\n"})}),"\n",(0,i.jsx)(n.h4,{id:"enable-geo-replication-at-topic-level",children:"Enable geo-replication at topic level"}),"\n",(0,i.jsxs)(n.p,{children:["You can set geo-replication at topic level using the command ",(0,i.jsx)(n.code,{children:"pulsar-admin topics set-replication-clusters"}),". For the latest and complete information about ",(0,i.jsx)(n.code,{children:"Pulsar admin"}),", including commands, flags, descriptions, and more information, see ",(0,i.jsx)(n.a,{href:"pathname:///reference/#/3.1.x/pulsar-admin/",children:"Pulsar admin docs"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin topics set-replication-clusters --clusters us-west,us-east,us-cent my-tenant/my-namespace/my-topic\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can change the replication clusters for a namespace at any time, without disruption to ongoing traffic. Replication channels are immediately set up or stopped in all clusters as soon as the configuration changes."}),"\n",(0,i.jsxs)(n.li,{children:["Once you create a geo-replication namespace, any topics that producers or consumers create within that namespace are replicated across clusters. Typically, each application uses the ",(0,i.jsx)(n.code,{children:"serviceUrl"})," for the local cluster."]}),"\n",(0,i.jsxs)(n.li,{children:["If you are using Pulsar version ",(0,i.jsx)(n.code,{children:"2.10.x"}),", to enable geo-replication at topic level, you need to change the following configurations in the ",(0,i.jsx)(n.code,{children:"conf/broker.conf"})," or ",(0,i.jsx)(n.code,{children:"conf/standalone.conf"})," file to enable topic policies service."]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-conf",children:"systemTopicEnabled=true\ntopicLevelPoliciesEnabled=true\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"use-topics-with-geo-replication",children:"Use topics with geo-replication"}),"\n",(0,i.jsx)(n.h4,{id:"selective-replication",children:"Selective replication"}),"\n",(0,i.jsx)(n.p,{children:"By default, messages are replicated to all clusters configured for the namespace. You can restrict replication selectively by specifying a replication list for a message, and then that message is replicated only to the subset in the replication list."}),"\n",(0,i.jsxs)(n.p,{children:["The following is an example of the ",(0,i.jsx)(n.a,{href:"/docs/3.1.x/client-libraries-java",children:"Java API"}),". Note the use of the ",(0,i.jsx)(n.code,{children:"replicationClusters"})," method when you construct the ",(0,i.jsx)(n.a,{href:"https://pulsar.apache.org/api/client/3.1.x/org/apache/pulsar/client/api/Message",children:"Message"})," object:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'List<String> restrictReplicationTo = Arrays.asList(\n        "us-west",\n        "us-east"\n);\n\nProducer producer = client.newProducer()\n        .topic("some-topic")\n        .create();\n\nproducer.newMessage()\n        .value("my-payload".getBytes())\n        .replicationClusters(restrictReplicationTo)\n        .send();\n'})}),"\n",(0,i.jsx)(n.h4,{id:"topic-stats",children:"Topic stats"}),"\n",(0,i.jsx)(n.p,{children:"You can check topic-specific statistics for geo-replication topics using one of the following methods."}),"\n",(0,i.jsxs)(r.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"}],children:[(0,i.jsxs)(l.A,{value:"pulsar-admin",children:[(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"pathname:///reference/#/3.1.x/pulsar-admin/topics?id=stats",children:(0,i.jsx)(n.code,{children:"pulsar-admin topics stats"})})," command."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin topics stats persistent://my-tenant/my-namespace/my-topic\n"})})]}),(0,i.jsx)(l.A,{value:"REST API",children:(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=3.1.3&apiversion=v2#operation/getStats",children:["GET /admin/v2/",":schema","/",":tenant","/",":namespace","/",":topic","/stats/getStats"]})})})]}),"\n",(0,i.jsx)(n.p,{children:"Each cluster reports its own local stats, including the incoming and outgoing replication rates and backlogs."}),"\n",(0,i.jsx)(n.h4,{id:"delete-a-geo-replication-topic",children:"Delete a geo-replication topic"}),"\n",(0,i.jsx)(n.p,{children:"Given that geo-replication topics exist in multiple regions, directly deleting a geo-replication topic is not possible. Instead, you should rely on automatic topic garbage collection."}),"\n",(0,i.jsx)(n.p,{children:"In Pulsar, a topic is automatically deleted when the topic meets the following three conditions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"no producers or consumers are connected to it;"}),"\n",(0,i.jsx)(n.li,{children:"no subscriptions to it;"}),"\n",(0,i.jsx)(n.li,{children:"no more messages are kept for retention.\nFor geo-replication topics, each region uses a fault-tolerant mechanism to decide when deleting the topic locally is safe."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can explicitly disable topic garbage collection by setting ",(0,i.jsx)(n.code,{children:"brokerDeleteInactiveTopicsEnabled"})," to ",(0,i.jsx)(n.code,{children:"false"})," in your ",(0,i.jsx)(n.a,{href:"/docs/3.1.x/reference-configuration#broker",children:"broker configuration"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"To delete a geo-replication topic, close all producers and consumers on the topic, and delete all of its local subscriptions in every replication cluster. When Pulsar determines that no valid subscription for the topic remains across the system, it will garbage collect the topic."}),"\n",(0,i.jsx)(n.h2,{id:"replicated-subscriptions",children:"Replicated subscriptions"}),"\n",(0,i.jsx)(n.p,{children:"Pulsar supports replicated subscriptions, so you can keep the subscription state in sync, within a sub-second timeframe, in the context of a topic that is being asynchronously replicated across multiple geographical regions."}),"\n",(0,i.jsx)(n.p,{children:"In case of failover, a consumer can restart consuming from the failure point in a different cluster."}),"\n",(0,i.jsx)(n.h3,{id:"enable-replicated-subscription",children:"Enable replicated subscription"}),"\n",(0,i.jsx)(n.p,{children:"If you want to use replicated subscriptions in Pulsar:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For broker side: set ",(0,i.jsx)(n.code,{children:"enableReplicatedSubscriptions"})," to ",(0,i.jsx)(n.code,{children:"true"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/470b674016c8718f2dfd0a0f93cf02d49af0fead/conf/broker.conf#L592",children:(0,i.jsx)(n.code,{children:"broker.conf"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For consumer side: replicated subscription is disabled by default. You can enable replicated subscriptions when creating a consumer."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'Consumer<String> consumer = client.newConsumer(Schema.STRING)\n            .topic("my-topic")\n            .subscriptionName("my-subscription")\n            .replicateSubscriptionState(true)\n            .subscribe();\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"advantages",children:"Advantages"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It is easy to implement the logic."}),"\n",(0,i.jsx)(n.li,{children:"You can choose to enable or disable replicated subscription."}),"\n",(0,i.jsx)(n.li,{children:"When you enable it, the overhead is low, and it is easy to configure."}),"\n",(0,i.jsx)(n.li,{children:"When you disable it, the overhead is zero."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["When you enable replicated subscriptions, you're creating a consistent distributed snapshot to establish an association between message ids from different clusters. The snapshots are taken periodically. The default value is ",(0,i.jsx)(n.code,{children:"1 second"}),". It means that a consumer failing over to a different cluster can potentially receive 1 second of duplicates. You can also configure the frequency of the snapshot in the ",(0,i.jsx)(n.code,{children:"broker.conf"})," file."]}),"\n",(0,i.jsx)(n.li,{children:"Only the base line cursor position is synced in replicated subscriptions while the individual acknowledgments are not synced. This means the messages acknowledged out-of-order could end up getting delivered again, in the case of a cluster failover."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"migrate-data-between-clusters-using-geo-replication",children:"Migrate data between clusters using geo-replication"}),"\n",(0,i.jsxs)(n.p,{children:["Using geo-replication to migrate data between clusters is a special use case of the ",(0,i.jsx)(n.a,{href:"/docs/3.1.x/concepts-replication#active-active-replication",children:"active-active replication pattern"})," when you don't have a large amount of data."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create your new cluster."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add the new cluster to your old cluster."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin clusters create new-cluster\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add the new cluster to your tenant."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin tenants update my-tenant --cluster old-cluster,new-cluster\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Set the clusters on your namespace."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin namespaces set-clusters my-tenant/my-ns --cluster old-cluster,new-cluster\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Update your applications using ",(0,i.jsx)(n.a,{href:"#replicated-subscriptions",children:"replicated subscriptions"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Validate subscription replication is active."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"bin/pulsar-admin topics stats-internal public/default/t1\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Move your consumers and producers to the new cluster by modifying the values of ",(0,i.jsx)(n.code,{children:"serviceURL"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The replication starts from step 4, which means existing messages in your old cluster are not replicated."}),"\n",(0,i.jsxs)(n.li,{children:["If you have some older messages to migrate, you can pre-create the replication subscriptions for each topic and set it at the earliest position by using ",(0,i.jsx)(n.code,{children:"pulsar-admin topics create-subscription -s pulsar.repl.new-cluster -m earliest <topic>"}),". Then you will need to unload the topic to start georeplication."]}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>r});s(96540);var t=s(34164);const i={tabItem:"tabItem_Ymn6"};var a=s(74848);function r(e){let{children:n,hidden:s,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,r),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>w});var t=s(96540),i=s(34164),a=s(23104),r=s(56347),l=s(205),c=s(57485),o=s(31682),d=s(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:i}}=e;return{value:n,label:s,attributes:t,default:i}}))}(s);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const i=(0,r.W6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function g(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,a=p(e),[r,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[o,u]=m({queryString:s,groupId:i}),[g,x]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,d.Dv)(s);return[i,(0,t.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:i}),f=(()=>{const e=o??g;return h({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&c(f)}),[f]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=s(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=s(74848);function b(e){let{className:n,block:s,selectedValue:t,selectValue:r,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),d=e=>{const n=e.currentTarget,s=c.indexOf(n),i=l[s].value;i!==t&&(o(n),r(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,i.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:a}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},89353:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/geo-replication-34036a887215513a9173d150f92e093e.png"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var t=s(96540);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);