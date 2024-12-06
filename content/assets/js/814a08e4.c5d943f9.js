"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[27328],{38873:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"administration-geo","title":"Pulsar geo-replication","description":"Geo-replication is the replication of persistently stored message data across multiple clusters of a Pulsar instance.","source":"@site/versioned_docs/version-2.8.x/administration-geo.md","sourceDirName":".","slug":"/administration-geo","permalink":"/docs/2.8.x/administration-geo","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/administration-geo.md","tags":[],"version":"2.8.x","frontMatter":{"id":"administration-geo","title":"Pulsar geo-replication","sidebar_label":"Geo-replication","original_id":"administration-geo"},"sidebar":"docsSidebar","previous":{"title":"ZooKeeper and BookKeeper","permalink":"/docs/2.8.x/administration-zk-bk"},"next":{"title":"Pulsar Manager","permalink":"/docs/2.8.x/administration-pulsar-manager"}}');var t=s(74848),r=s(28453);const a={id:"administration-geo",title:"Pulsar geo-replication",sidebar_label:"Geo-replication",original_id:"administration-geo"},o=void 0,c={},l=[{value:"How geo-replication works",id:"how-geo-replication-works",level:2},{value:"Geo-replication and Pulsar properties",id:"geo-replication-and-pulsar-properties",level:2},{value:"Local persistence and forwarding",id:"local-persistence-and-forwarding",level:2},{value:"Configure replication",id:"configure-replication",level:2},{value:"Connect replication clusters",id:"connect-replication-clusters",level:3},{value:"Grant permissions to properties",id:"grant-permissions-to-properties",level:3},{value:"Enable geo-replication namespaces",id:"enable-geo-replication-namespaces",level:3},{value:"Use topics with geo-replication",id:"use-topics-with-geo-replication",level:3},{value:"Selective replication",id:"selective-replication",level:4},{value:"Topic stats",id:"topic-stats",level:4},{value:"Delete a geo-replication topic",id:"delete-a-geo-replication-topic",level:4},{value:"Replicated subscriptions",id:"replicated-subscriptions",level:2},{value:"Enable replicated subscription",id:"enable-replicated-subscription",level:3},{value:"Advantages",id:"advantages",level:3},{value:"Limitations",id:"limitations",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Geo-replication"})," is the replication of persistently stored message data across multiple clusters of a Pulsar instance."]}),"\n",(0,t.jsx)(n.h2,{id:"how-geo-replication-works",children:"How geo-replication works"}),"\n",(0,t.jsx)(n.p,{children:"The diagram below illustrates the process of geo-replication across Pulsar clusters:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Replication Diagram",src:s(89353).A+"",width:"709",height:"349"})}),"\n",(0,t.jsxs)(n.p,{children:["In this diagram, whenever ",(0,t.jsx)(n.strong,{children:"P1"}),", ",(0,t.jsx)(n.strong,{children:"P2"}),", and ",(0,t.jsx)(n.strong,{children:"P3"})," producers publish messages to the ",(0,t.jsx)(n.strong,{children:"T1"})," topic on ",(0,t.jsx)(n.strong,{children:"Cluster-A"}),", ",(0,t.jsx)(n.strong,{children:"Cluster-B"}),", and ",(0,t.jsx)(n.strong,{children:"Cluster-C"})," clusters respectively, those messages are instantly replicated across clusters. Once the messages are replicated, ",(0,t.jsx)(n.strong,{children:"C1"})," and ",(0,t.jsx)(n.strong,{children:"C2"})," consumers can consume those messages from their respective clusters."]}),"\n",(0,t.jsxs)(n.p,{children:["Without geo-replication, ",(0,t.jsx)(n.strong,{children:"C1"})," and ",(0,t.jsx)(n.strong,{children:"C2"})," consumers are not able to consume messages that ",(0,t.jsx)(n.strong,{children:"P3"})," producer publishes."]}),"\n",(0,t.jsx)(n.h2,{id:"geo-replication-and-pulsar-properties",children:"Geo-replication and Pulsar properties"}),"\n",(0,t.jsx)(n.p,{children:"You must enable geo-replication on a per-tenant basis in Pulsar. You can enable geo-replication between clusters only when a tenant is created that allows access to both clusters."}),"\n",(0,t.jsx)(n.p,{children:"Although geo-replication must be enabled between two clusters, actually geo-replication is managed at the namespace level. You must complete the following tasks to enable geo-replication for a namespace:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#enable-geo-replication-namespaces",children:"Enable geo-replication namespaces"})}),"\n",(0,t.jsx)(n.li,{children:"Configure that namespace to replicate across two or more provisioned clusters"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Any message published on ",(0,t.jsx)(n.em,{children:"any"})," topic in that namespace is replicated to all clusters in the specified set."]}),"\n",(0,t.jsx)(n.h2,{id:"local-persistence-and-forwarding",children:"Local persistence and forwarding"}),"\n",(0,t.jsx)(n.p,{children:"When messages are produced on a Pulsar topic, messages are first persisted in the local cluster, and then forwarded asynchronously to the remote clusters."}),"\n",(0,t.jsxs)(n.p,{children:["In normal cases, when connectivity issues are none, messages are replicated immediately, at the same time as they are dispatched to local consumers. Typically, the network ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Round-trip_delay_time",children:"round-trip time"})," (RTT) between the remote regions defines end-to-end delivery latency."]}),"\n",(0,t.jsx)(n.p,{children:"Applications can create producers and consumers in any of the clusters, even when the remote clusters are not reachable (like during a network partition)."}),"\n",(0,t.jsx)(n.p,{children:"Producers and consumers can publish messages to and consume messages from any cluster in a Pulsar instance. However, subscriptions cannot only be local to the cluster where the subscriptions are created but also can be transferred between clusters after replicated subscription is enabled. Once replicated subscription is enabled, you can keep subscription state in synchronization. Therefore, a topic can be asynchronously replicated across multiple geographical regions. In case of failover, a consumer can restart consuming messages from the failure point in a different cluster."}),"\n",(0,t.jsxs)(n.p,{children:["In the aforementioned example, the ",(0,t.jsx)(n.strong,{children:"T1"})," topic is replicated among three clusters, ",(0,t.jsx)(n.strong,{children:"Cluster-A"}),", ",(0,t.jsx)(n.strong,{children:"Cluster-B"}),", and ",(0,t.jsx)(n.strong,{children:"Cluster-C"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["All messages produced in any of the three clusters are delivered to all subscriptions in other clusters. In this case, ",(0,t.jsx)(n.strong,{children:"C1"})," and ",(0,t.jsx)(n.strong,{children:"C2"})," consumers receive all messages that ",(0,t.jsx)(n.strong,{children:"P1"}),", ",(0,t.jsx)(n.strong,{children:"P2"}),", and ",(0,t.jsx)(n.strong,{children:"P3"})," producers publish. Ordering is still guaranteed on a per-producer basis."]}),"\n",(0,t.jsx)(n.h2,{id:"configure-replication",children:"Configure replication"}),"\n",(0,t.jsxs)(n.p,{children:["As stated in ",(0,t.jsx)(n.a,{href:"#geo-replication-and-pulsar-properties",children:"Geo-replication and Pulsar properties"})," section, geo-replication in Pulsar is managed at the ",(0,t.jsx)(n.a,{href:"/docs/2.8.x/reference-terminology#tenant",children:"tenant"})," level."]}),"\n",(0,t.jsxs)(n.p,{children:["The following example connects three clusters: ",(0,t.jsx)(n.strong,{children:"us-east"}),", ",(0,t.jsx)(n.strong,{children:"us-west"}),", and ",(0,t.jsx)(n.strong,{children:"us-cent"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"connect-replication-clusters",children:"Connect replication clusters"}),"\n",(0,t.jsxs)(n.p,{children:["To replicate data among clusters, you need to configure each cluster to connect to the other. You can use the ",(0,t.jsx)(n.a,{href:"pathname:///reference/#/2.8.x/pulsar-admin/",children:(0,t.jsx)(n.code,{children:"pulsar-admin"})})," tool to create a connection."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsxs)(n.p,{children:["Suppose that you have 3 replication clusters: ",(0,t.jsx)(n.code,{children:"us-west"}),", ",(0,t.jsx)(n.code,{children:"us-cent"}),", and ",(0,t.jsx)(n.code,{children:"us-east"}),"."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure the connection from ",(0,t.jsx)(n.code,{children:"us-west"})," to ",(0,t.jsx)(n.code,{children:"us-east"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Run the following command on ",(0,t.jsx)(n.code,{children:"us-west"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar-admin clusters create \\\n --broker-url pulsar://<DNS-OF-US-EAST>:<PORT>\t\\\n --url http://<DNS-OF-US-EAST>:<PORT> \\\n us-east\n\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you want to use a secure connection for a cluster, you can use the flags ",(0,t.jsx)(n.code,{children:"--broker-url-secure"})," and ",(0,t.jsx)(n.code,{children:"--url-secure"}),". For more information, see ",(0,t.jsx)(n.a,{href:"pathname:///reference/#/2.8.x/pulsar-admin/clusters?id=create",children:"pulsar-admin clusters create"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Different clusters may have different authentications. You can use the authentication flag ",(0,t.jsx)(n.code,{children:"--auth-plugin"})," and ",(0,t.jsx)(n.code,{children:"--auth-parameters"})," together to set cluster authentication, which overrides ",(0,t.jsx)(n.code,{children:"brokerClientAuthenticationPlugin"})," and ",(0,t.jsx)(n.code,{children:"brokerClientAuthenticationParameters"})," if ",(0,t.jsx)(n.code,{children:"authenticationEnabled"})," sets to ",(0,t.jsx)(n.code,{children:"true"})," in ",(0,t.jsx)(n.code,{children:"broker.conf"})," and ",(0,t.jsx)(n.code,{children:"standalone.conf"}),". For more information, see ",(0,t.jsx)(n.a,{href:"/docs/2.8.x/concepts-authentication",children:"authentication and authorization"}),"."]}),"\n"]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure the connection from ",(0,t.jsx)(n.code,{children:"us-west"})," to ",(0,t.jsx)(n.code,{children:"us-cent"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Run the following command on ",(0,t.jsx)(n.code,{children:"us-west"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar-admin clusters create \\\n --broker-url pulsar://<DNS-OF-US-CENT>:<PORT>\t\\\n --url http://<DNS-OF-US-CENT>:<PORT> \\\n us-cent\n\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run similar commands on ",(0,t.jsx)(n.code,{children:"us-east"})," and ",(0,t.jsx)(n.code,{children:"us-cent"})," to create connections among clusters."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"grant-permissions-to-properties",children:"Grant permissions to properties"}),"\n",(0,t.jsx)(n.p,{children:"To replicate to a cluster, the tenant needs permission to use that cluster. You can grant permission to the tenant when you create the tenant or grant later."}),"\n",(0,t.jsx)(n.p,{children:"Specify all the intended clusters when you create a tenant:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar-admin tenants create my-tenant \\\n  --admin-roles my-admin-role \\\n  --allowed-clusters us-west,us-east,us-cent\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To update permissions of an existing tenant, use ",(0,t.jsx)(n.code,{children:"update"})," instead of ",(0,t.jsx)(n.code,{children:"create"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"enable-geo-replication-namespaces",children:"Enable geo-replication namespaces"}),"\n",(0,t.jsx)(n.p,{children:"You can create a namespace with the following command sample."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar-admin namespaces create my-tenant/my-namespace\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Initially, the namespace is not assigned to any cluster. You can assign the namespace to clusters using the ",(0,t.jsx)(n.code,{children:"set-clusters"})," subcommand:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar-admin namespaces set-clusters my-tenant/my-namespace \\\n  --clusters us-west,us-east,us-cent\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can change the replication clusters for a namespace at any time, without disruption to ongoing traffic. Replication channels are immediately set up or stopped in all clusters as soon as the configuration changes."}),"\n",(0,t.jsx)(n.h3,{id:"use-topics-with-geo-replication",children:"Use topics with geo-replication"}),"\n",(0,t.jsxs)(n.p,{children:["Once you create a geo-replication namespace, any topics that producers or consumers create within that namespace is replicated across clusters. Typically, each application uses the ",(0,t.jsx)(n.code,{children:"serviceUrl"})," for the local cluster."]}),"\n",(0,t.jsx)(n.h4,{id:"selective-replication",children:"Selective replication"}),"\n",(0,t.jsx)(n.p,{children:"By default, messages are replicated to all clusters configured for the namespace. You can restrict replication selectively by specifying a replication list for a message, and then that message is replicated only to the subset in the replication list."}),"\n",(0,t.jsxs)(n.p,{children:["The following is an example for the ",(0,t.jsx)(n.a,{href:"/docs/2.8.x/client-libraries-java",children:"Java API"}),". Note the use of the ",(0,t.jsx)(n.code,{children:"replicationClusters"})," method when you construct the ",(0,t.jsx)(n.a,{href:"https://pulsar.apache.org/api/client/2.8.x/org/apache/pulsar/client/api/Message",children:"Message"})," object:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'\nList<String> restrictReplicationTo = Arrays.asList(\n        "us-west",\n        "us-east"\n);\n\nProducer producer = client.newProducer()\n        .topic("some-topic")\n        .create();\n\nproducer.newMessage()\n        .value("my-payload".getBytes())\n        .replicationClusters(restrictReplicationTo)\n        .send();\n\n'})}),"\n",(0,t.jsx)(n.h4,{id:"topic-stats",children:"Topic stats"}),"\n",(0,t.jsxs)(n.p,{children:["Topic-specific statistics for geo-replication topics are available via the ",(0,t.jsx)(n.a,{href:"/docs/2.8.x/reference-pulsar-admin",children:(0,t.jsx)(n.code,{children:"pulsar-admin"})})," tool and ",(0,t.jsx)(n.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar-admin persistent stats persistent://my-tenant/my-namespace/my-topic\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"Each cluster reports its own local stats, including the incoming and outgoing replication rates and backlogs."}),"\n",(0,t.jsx)(n.h4,{id:"delete-a-geo-replication-topic",children:"Delete a geo-replication topic"}),"\n",(0,t.jsx)(n.p,{children:"Given that geo-replication topics exist in multiple regions, directly deleting a geo-replication topic is not possible. Instead, you should rely on automatic topic garbage collection."}),"\n",(0,t.jsx)(n.p,{children:"In Pulsar, a topic is automatically deleted when the topic meets the following three conditions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"no producers or consumers are connected to it;"}),"\n",(0,t.jsx)(n.li,{children:"no subscriptions to it;"}),"\n",(0,t.jsx)(n.li,{children:"no more messages are kept for retention.\nFor geo-replication topics, each region uses a fault-tolerant mechanism to decide when deleting the topic locally is safe."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can explicitly disable topic garbage collection by setting ",(0,t.jsx)(n.code,{children:"brokerDeleteInactiveTopicsEnabled"})," to ",(0,t.jsx)(n.code,{children:"false"})," in your ",(0,t.jsx)(n.a,{href:"/docs/2.8.x/reference-configuration#broker",children:"broker configuration"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"To delete a geo-replication topic, close all producers and consumers on the topic, and delete all of its local subscriptions in every replication cluster. When Pulsar determines that no valid subscription for the topic remains across the system, it will garbage collect the topic."}),"\n",(0,t.jsx)(n.h2,{id:"replicated-subscriptions",children:"Replicated subscriptions"}),"\n",(0,t.jsx)(n.p,{children:"Pulsar supports replicated subscriptions, so you can keep subscription state in sync, within a sub-second timeframe, in the context of a topic that is being asynchronously replicated across multiple geographical regions."}),"\n",(0,t.jsx)(n.p,{children:"In case of failover, a consumer can restart consuming from the failure point in a different cluster."}),"\n",(0,t.jsx)(n.h3,{id:"enable-replicated-subscription",children:"Enable replicated subscription"}),"\n",(0,t.jsx)(n.p,{children:"Replicated subscription is disabled by default. You can enable replicated subscription when creating a consumer."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'\nConsumer<String> consumer = client.newConsumer(Schema.STRING)\n            .topic("my-topic")\n            .subscriptionName("my-subscription")\n            .replicateSubscriptionState(true)\n            .subscribe();\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"advantages",children:"Advantages"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"It is easy to implement the logic."}),"\n",(0,t.jsx)(n.li,{children:"You can choose to enable or disable replicated subscription."}),"\n",(0,t.jsx)(n.li,{children:"When you enable it, the overhead is low, and it is easy to configure."}),"\n",(0,t.jsx)(n.li,{children:"When you disable it, the overhead is zero."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"limitations",children:"Limitations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When you enable replicated subscription, you're creating a consistent distributed snapshot to establish an association between message ids from different clusters. The snapshots are taken periodically. The default value is ",(0,t.jsx)(n.code,{children:"1 second"}),". It means that a consumer failing over to a different cluster can potentially receive 1 second of duplicates. You can also configure the frequency of the snapshot in the ",(0,t.jsx)(n.code,{children:"broker.conf"})," file."]}),"\n",(0,t.jsx)(n.li,{children:"Only the base line cursor position is synced in replicated subscriptions while the individual acknowledgments are not synced. This means the messages acknowledged out-of-order could end up getting delivered again, in the case of a cluster failover."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},89353:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/geo-replication-34036a887215513a9173d150f92e093e.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(96540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);