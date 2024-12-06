"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[27703],{89749:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"admin-api-namespaces","title":"Managing Namespaces","description":"Pulsar namespaces are logical groupings of topics.","source":"@site/versioned_docs/version-2.6.0/admin-api-namespaces.md","sourceDirName":".","slug":"/admin-api-namespaces","permalink":"/docs/2.6.0/admin-api-namespaces","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.0/admin-api-namespaces.md","tags":[],"version":"2.6.0","frontMatter":{"id":"admin-api-namespaces","title":"Managing Namespaces","sidebar_label":"Namespaces","original_id":"admin-api-namespaces"},"sidebar":"docsSidebar","previous":{"title":"Brokers","permalink":"/docs/2.6.0/admin-api-brokers"},"next":{"title":"Permissions","permalink":"/docs/2.6.0/admin-api-permissions"}}');var i=a(74848),c=a(28453);const l={id:"admin-api-namespaces",title:"Managing Namespaces",sidebar_label:"Namespaces",original_id:"admin-api-namespaces"},r=void 0,t={},d=[{value:"Namespaces resources",id:"namespaces-resources",level:2},{value:"Create",id:"create",level:3},{value:"pulsar-admin",id:"pulsar-admin",level:4},{value:"REST API",id:"rest-api",level:4},{value:"Java",id:"java",level:4},{value:"Get policies",id:"get-policies",level:3},{value:"pulsar-admin",id:"pulsar-admin-1",level:4},{value:"REST API",id:"rest-api-1",level:4},{value:"Java",id:"java-1",level:4},{value:"List namespaces within a tenant",id:"list-namespaces-within-a-tenant",level:3},{value:"pulsar-admin",id:"pulsar-admin-2",level:4},{value:"REST API",id:"rest-api-2",level:4},{value:"Java",id:"java-2",level:4},{value:"Delete",id:"delete",level:3},{value:"pulsar-admin",id:"pulsar-admin-3",level:4},{value:"REST",id:"rest",level:4},{value:"Java",id:"java-3",level:4},{value:"set replication cluster",id:"set-replication-cluster",level:4},{value:"CLI",id:"cli",level:6},{value:"REST",id:"rest-1",level:6},{value:"Java",id:"java-4",level:6},{value:"get replication cluster",id:"get-replication-cluster",level:4},{value:"CLI",id:"cli-1",level:6},{value:"REST",id:"rest-2",level:6},{value:"Java",id:"java-5",level:6},{value:"set backlog quota policies",id:"set-backlog-quota-policies",level:4},{value:"CLI",id:"cli-2",level:6},{value:"REST",id:"rest-3",level:6},{value:"Java",id:"java-6",level:6},{value:"get backlog quota policies",id:"get-backlog-quota-policies",level:4},{value:"CLI",id:"cli-3",level:6},{value:"REST",id:"rest-4",level:6},{value:"Java",id:"java-7",level:6},{value:"remove backlog quota policies",id:"remove-backlog-quota-policies",level:4},{value:"CLI",id:"cli-4",level:6},{value:"REST",id:"rest-5",level:6},{value:"Java",id:"java-8",level:6},{value:"set persistence policies",id:"set-persistence-policies",level:4},{value:"CLI",id:"cli-5",level:6},{value:"REST",id:"rest-6",level:6},{value:"Java",id:"java-9",level:6},{value:"get persistence policies",id:"get-persistence-policies",level:4},{value:"CLI",id:"cli-6",level:6},{value:"REST",id:"rest-7",level:6},{value:"Java",id:"java-10",level:6},{value:"unload namespace bundle",id:"unload-namespace-bundle",level:4},{value:"CLI",id:"cli-7",level:6},{value:"REST",id:"rest-8",level:6},{value:"Java",id:"java-11",level:6},{value:"set message-ttl",id:"set-message-ttl",level:4},{value:"CLI",id:"cli-8",level:6},{value:"REST",id:"rest-9",level:6},{value:"Java",id:"java-12",level:6},{value:"get message-ttl",id:"get-message-ttl",level:4},{value:"CLI",id:"cli-9",level:6},{value:"REST",id:"rest-10",level:6},{value:"Java",id:"java-13",level:6},{value:"split bundle",id:"split-bundle",level:4},{value:"CLI",id:"cli-10",level:6},{value:"REST",id:"rest-11",level:6},{value:"Java",id:"java-14",level:6},{value:"clear backlog",id:"clear-backlog",level:4},{value:"CLI",id:"cli-11",level:6},{value:"REST",id:"rest-12",level:6},{value:"Java",id:"java-15",level:6},{value:"clear bundle backlog",id:"clear-bundle-backlog",level:4},{value:"CLI",id:"cli-12",level:6},{value:"REST",id:"rest-13",level:6},{value:"Java",id:"java-16",level:6},{value:"set retention",id:"set-retention",level:4},{value:"CLI",id:"cli-13",level:6},{value:"REST",id:"rest-14",level:6},{value:"Java",id:"java-17",level:6},{value:"get retention",id:"get-retention",level:4},{value:"CLI",id:"cli-14",level:6},{value:"REST",id:"rest-15",level:6},{value:"Java",id:"java-18",level:6},{value:"set dispatch throttling",id:"set-dispatch-throttling",level:4},{value:"CLI",id:"cli-15",level:6},{value:"REST",id:"rest-16",level:6},{value:"Java",id:"java-19",level:6},{value:"get configured message-rate",id:"get-configured-message-rate",level:4},{value:"CLI",id:"cli-16",level:6},{value:"REST",id:"rest-17",level:6},{value:"Java",id:"java-20",level:6},{value:"set dispatch throttling for subscription",id:"set-dispatch-throttling-for-subscription",level:4},{value:"CLI",id:"cli-17",level:6},{value:"REST",id:"rest-18",level:6},{value:"Java",id:"java-21",level:6},{value:"get configured message-rate",id:"get-configured-message-rate-1",level:4},{value:"CLI",id:"cli-18",level:6},{value:"REST",id:"rest-19",level:6},{value:"Java",id:"java-22",level:6},{value:"set dispatch throttling for subscription",id:"set-dispatch-throttling-for-subscription-1",level:4},{value:"CLI",id:"cli-19",level:6},{value:"REST",id:"rest-20",level:6},{value:"Java",id:"java-23",level:6},{value:"get configured message-rate",id:"get-configured-message-rate-2",level:4},{value:"CLI",id:"cli-20",level:6},{value:"REST",id:"rest-21",level:6},{value:"Java",id:"java-24",level:6},{value:"Unloading from a broker",id:"unloading-from-a-broker",level:3},{value:"pulsar-admin",id:"pulsar-admin-4",level:4},{value:"CLI",id:"cli-21",level:6},{value:"REST",id:"rest-22",level:6},{value:"Java",id:"java-25",level:6}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h6:"h6",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Pulsar ",(0,i.jsx)(n.a,{href:"/docs/2.6.0/reference-terminology#namespace",children:"namespaces"})," are logical groupings of ",(0,i.jsx)(n.a,{href:"/docs/2.6.0/reference-terminology#topic",children:"topics"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Namespaces can be managed via:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.a,{href:"/docs/2.6.0/reference-pulsar-admin#clusters",children:(0,i.jsx)(n.code,{children:"namespaces"})})," command of the ",(0,i.jsx)(n.a,{href:"/docs/2.6.0/reference-pulsar-admin",children:(0,i.jsx)(n.code,{children:"pulsar-admin"})})," tool"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"/admin/v2/namespaces"})," endpoint of the admin ",(0,i.jsx)(n.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"namespaces"})," method of the ",(0,i.jsx)(n.a,{href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdmin",children:"PulsarAdmin"})," object in the ",(0,i.jsx)(n.a,{href:"/docs/2.6.0/client-libraries-java",children:"Java API"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"namespaces-resources",children:"Namespaces resources"}),"\n",(0,i.jsx)(n.h3,{id:"create",children:"Create"}),"\n",(0,i.jsxs)(n.p,{children:["You can create new namespaces under a given ",(0,i.jsx)(n.a,{href:"/docs/2.6.0/reference-terminology#tenant",children:"tenant"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"pulsar-admin",children:"pulsar-admin"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"/docs/2.6.0/reference-pulsar-admin#namespaces-create",children:(0,i.jsx)(n.code,{children:"create"})})," subcommand and specify the namespace by name:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces create test-tenant/test-namespace\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rest-api",children:"REST API"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/createNamespace",children:["PUT /admin/v2/namespaces/",":tenant","/",":namespace","/createNamespace"]})}),"\n",(0,i.jsx)(n.h4,{id:"java",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().createNamespace(namespace);\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"get-policies",children:"Get policies"}),"\n",(0,i.jsx)(n.p,{children:"You can fetch the current policies associated with a namespace at any time."}),"\n",(0,i.jsx)(n.h4,{id:"pulsar-admin-1",children:"pulsar-admin"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"/docs/2.6.0/reference-pulsar-admin#namespaces-policies",children:(0,i.jsx)(n.code,{children:"policies"})})," subcommand and specify the namespace:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'\n$ pulsar-admin namespaces policies test-tenant/test-namespace\n{\n  "auth_policies": {\n    "namespace_auth": {},\n    "destination_auth": {}\n  },\n  "replication_clusters": [],\n  "bundles_activated": true,\n  "bundles": {\n    "boundaries": [\n      "0x00000000",\n      "0xffffffff"\n    ],\n    "numBundles": 1\n  },\n  "backlog_quota_map": {},\n  "persistence": null,\n  "latency_stats_sample_rate": {},\n  "message_ttl_in_seconds": 0,\n  "retention_policies": null,\n  "deleted": false\n}\n\n'})}),"\n",(0,i.jsx)(n.h4,{id:"rest-api-1",children:"REST API"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/getPolicies",children:["GET /admin/v2/namespaces/",":tenant","/",":namespace","/getPolicies"]})}),"\n",(0,i.jsx)(n.h4,{id:"java-1",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().getPolicies(namespace);\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"list-namespaces-within-a-tenant",children:"List namespaces within a tenant"}),"\n",(0,i.jsxs)(n.p,{children:["You can list all namespaces within a given Pulsar ",(0,i.jsx)(n.a,{href:"/docs/2.6.0/reference-terminology#tenant",children:"tenant"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"pulsar-admin-2",children:"pulsar-admin"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"/docs/2.6.0/reference-pulsar-admin#namespaces-list",children:(0,i.jsx)(n.code,{children:"list"})})," subcommand and specify the tenant:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces list test-tenant\ntest-tenant/ns1\ntest-tenant/ns2\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rest-api-2",children:"REST API"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/getTenantNamespaces",children:["GET /admin/v2/namespaces/",":tenant","/getTenantNamespaces"]})}),"\n",(0,i.jsx)(n.h4,{id:"java-2",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().getNamespaces(tenant);\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"delete",children:"Delete"}),"\n",(0,i.jsx)(n.p,{children:"You can delete existing namespaces from a tenant."}),"\n",(0,i.jsx)(n.h4,{id:"pulsar-admin-3",children:"pulsar-admin"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"/docs/2.6.0/reference-pulsar-admin#namespaces-delete",children:(0,i.jsx)(n.code,{children:"delete"})})," subcommand and specify the namespace:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces delete test-tenant/ns1\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"rest",children:"REST"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/deleteNamespace",children:["DELETE /admin/v2/namespaces/",":tenant","/",":namespace","/deleteNamespace"]})}),"\n",(0,i.jsx)(n.h4,{id:"java-3",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().deleteNamespace(namespace);\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"set-replication-cluster",children:"set replication cluster"}),"\n",(0,i.jsx)(n.p,{children:"It sets replication clusters for a namespace, so Pulsar can internally replicate publish message from one colo to another colo."}),"\n",(0,i.jsx)(n.h6,{id:"cli",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin namespaces set-clusters test-tenant/ns1 \\\n  --clusters cl1\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"rest-1",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[POST /admin/v2/namespaces/:tenant/:namespace/replication/setNamespaceReplicationClusters](https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/setNamespaceReplicationClusters)\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-4",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().setNamespaceReplicationClusters(namespace, clusters);\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"get-replication-cluster",children:"get replication cluster"}),"\n",(0,i.jsx)(n.p,{children:"It gives a list of replication clusters for a given namespace."}),"\n",(0,i.jsx)(n.h6,{id:"cli-1",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin namespaces get-clusters test-tenant/cl1/ns1\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\ncl2\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"rest-2",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[GET /admin/v2/namespaces/:tenant/:namespace/replication/getNamespaceReplicationClusters](https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/getNamespaceReplicationClusters)\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-5",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().getNamespaceReplicationClusters(namespace)\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"set-backlog-quota-policies",children:"set backlog quota policies"}),"\n",(0,i.jsx)(n.p,{children:"Backlog quota helps broker to restrict bandwidth/storage of a namespace once it reach certain threshold limit . Admin can set this limit and one of the following action after the limit is reached."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"producer_request_hold: broker will hold and not persist produce request payload"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"producer_exception: broker will disconnects with client by giving exception"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"consumer_backlog_eviction: broker will start discarding backlog messages"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Backlog quota restriction can be taken care by defining restriction of backlog-quota-type: destination_storage"}),"\n",(0,i.jsx)(n.h6,{id:"cli-2",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin namespaces set-backlog-quota --limit 10 --policy producer_request_hold test-tenant/ns1\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nN/A\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"rest-3",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[POST /admin/v2/namespaces/:tenant/:namespace/backlogQuota/setBacklogQuota](https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/setBacklogQuota)\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-6",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().setBacklogQuota(namespace, new BacklogQuota(limit, policy))\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"get-backlog-quota-policies",children:"get backlog quota policies"}),"\n",(0,i.jsx)(n.p,{children:"It shows a configured backlog quota for a given namespace."}),"\n",(0,i.jsx)(n.h6,{id:"cli-3",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin namespaces get-backlog-quotas test-tenant/ns1\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'\n{\n  "destination_storage": {\n    "limit": 10,\n    "policy": "producer_request_hold"\n  }\n}\n\n'})}),"\n",(0,i.jsx)(n.h6,{id:"rest-4",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[GET /admin/v2/namespaces/:tenant/:namespace/backlogQuotaMap/getBacklogQuotaMap](https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/getBacklogQuotaMap)\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-7",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().getBacklogQuotaMap(namespace);\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"remove-backlog-quota-policies",children:"remove backlog quota policies"}),"\n",(0,i.jsx)(n.p,{children:"It removes backlog quota policies for a given namespace"}),"\n",(0,i.jsx)(n.h6,{id:"cli-4",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin namespaces remove-backlog-quota test-tenant/ns1\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nN/A\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"rest-5",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[DELETE /admin/v2/namespaces/:tenant/:namespace/backlogQuota/removeBacklogQuota](https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/removeBacklogQuota)\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-8",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().removeBacklogQuota(namespace, backlogQuotaType)\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"set-persistence-policies",children:"set persistence policies"}),"\n",(0,i.jsx)(n.p,{children:"Persistence policies allow to configure persistency-level for all topic messages under a given namespace."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Bookkeeper-ack-quorum: Number of acks (guaranteed copies) to wait for each entry, default: 0"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Bookkeeper-ensemble: Number of bookies to use for a topic, default: 0"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Bookkeeper-write-quorum: How many writes to make of each entry, default: 0"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Ml-mark-delete-max-rate: Throttling rate of mark-delete operation (0 means no throttle), default: 0.0"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h6,{id:"cli-5",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin namespaces set-persistence --bookkeeper-ack-quorum 2 --bookkeeper-ensemble 3 --bookkeeper-write-quorum 2 --ml-mark-delete-max-rate 0 test-tenant/ns1\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nN/A\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"rest-6",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[POST /admin/v2/namespaces/:tenant/:namespace/persistence/setPersistence](https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/setPersistence)\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-9",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().setPersistence(namespace,new PersistencePolicies(bookkeeperEnsemble, bookkeeperWriteQuorum,bookkeeperAckQuorum,managedLedgerMaxMarkDeleteRate))\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"get-persistence-policies",children:"get persistence policies"}),"\n",(0,i.jsx)(n.p,{children:"It shows configured persistence policies of a given namespace."}),"\n",(0,i.jsx)(n.h6,{id:"cli-6",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin namespaces get-persistence test-tenant/ns1\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'\n{\n  "bookkeeperEnsemble": 3,\n  "bookkeeperWriteQuorum": 2,\n  "bookkeeperAckQuorum": 2,\n  "managedLedgerMaxMarkDeleteRate": 0\n}\n\n'})}),"\n",(0,i.jsx)(n.h6,{id:"rest-7",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[GET /admin/v2/namespaces/:tenant/:namespace/persistence/getPersistence](https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/getPersistence)\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-10",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().getPersistence(namespace)\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"unload-namespace-bundle",children:"unload namespace bundle"}),"\n",(0,i.jsx)(n.p,{children:"Namespace bundle is a virtual group of topics which belong to same namespace. If broker gets overloaded with number of bundles then this command can help to unload heavy bundle from that broker, so it can be served by some other less loaded broker. Namespace bundle is defined with it\u2019s start and end range such as 0x00000000 and 0xffffffff."}),"\n",(0,i.jsx)(n.h6,{id:"cli-7",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin namespaces unload --bundle 0x00000000_0xffffffff test-tenant/ns1\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nN/A\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"rest-8",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[PUT /admin/v2/namespaces/:tenant/:namespace/{bundle](https://pulsar.apache.org/admin-rest-api?version=master&apiversion=v2#)/unload|operation/unloadNamespaceBundle?version=2.6.0}\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-11",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().unloadNamespaceBundle(namespace, bundle)\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"set-message-ttl",children:"set message-ttl"}),"\n",(0,i.jsx)(n.p,{children:"It configures message\u2019s time to live (in seconds) duration."}),"\n",(0,i.jsx)(n.h6,{id:"cli-8",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin namespaces set-message-ttl --messageTTL 100 test-tenant/ns1\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nN/A\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"rest-9",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[POST /admin/v2/namespaces/:tenant/:namespace/messageTTL/setNamespaceMessageTTL](https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/setNamespaceMessageTTL)\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-12",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().setNamespaceMessageTTL(namespace, messageTTL)\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"get-message-ttl",children:"get message-ttl"}),"\n",(0,i.jsx)(n.p,{children:"It gives a message ttl of configured namespace."}),"\n",(0,i.jsx)(n.h6,{id:"cli-9",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin namespaces get-message-ttl test-tenant/ns1\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n100\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"rest-10",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[GET /admin/v2/namespaces/:tenant/:namespace/messageTTL/getNamespaceMessageTTL](https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/getNamespaceMessageTTL)\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-13",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().getNamespaceMessageTTL(namespace)\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"split-bundle",children:"split bundle"}),"\n",(0,i.jsx)(n.p,{children:"Each namespace bundle can contain multiple topics and each bundle can be served by only one broker. If bundle gets heavy with multiple live topics in it then it creates load on that broker and in order to resolve this issue, admin can split bundle using this command."}),"\n",(0,i.jsx)(n.h6,{id:"cli-10",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin namespaces split-bundle --bundle 0x00000000_0xffffffff test-tenant/ns1\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nN/A\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"rest-11",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[PUT /admin/v2/namespaces/:tenant/:namespace/{bundle](https://pulsar.apache.org/admin-rest-api?version=master&apiversion=v2#)/split|operation/splitNamespaceBundle?version=2.6.0}\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-14",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().splitNamespaceBundle(namespace, bundle, unloadSplitBundles, splitAlgorithmName)\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"clear-backlog",children:"clear backlog"}),"\n",(0,i.jsx)(n.p,{children:"It clears all message backlog for all the topics those belong to specific namespace. You can also clear backlog for a specific subscription as well."}),"\n",(0,i.jsx)(n.h6,{id:"cli-11",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin namespaces clear-backlog --sub my-subscription test-tenant/ns1\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nN/A\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"rest-12",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[POST /admin/v2/namespaces/:tenant/:namespace/clearBacklog/clearNamespaceBacklogForSubscription](https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/clearNamespaceBacklogForSubscription)\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-15",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().clearNamespaceBacklogForSubscription(namespace, subscription)\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"clear-bundle-backlog",children:"clear bundle backlog"}),"\n",(0,i.jsx)(n.p,{children:"It clears all message backlog for all the topics those belong to specific NamespaceBundle. You can also clear backlog for a specific subscription as well."}),"\n",(0,i.jsx)(n.h6,{id:"cli-12",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin namespaces clear-backlog  --bundle 0x00000000_0xffffffff  --sub my-subscription test-tenant/ns1\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nN/A\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"rest-13",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[POST /admin/v2/namespaces/:tenant/:namespace/{bundle](https://pulsar.apache.org/admin-rest-api?version=master&apiversion=v2#)/clearBacklog|operation/clearNamespaceBundleBacklogForSubscription?version=2.6.0}\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-16",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().clearNamespaceBundleBacklogForSubscription(namespace, bundle, subscription)\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"set-retention",children:"set retention"}),"\n",(0,i.jsx)(n.p,{children:"Each namespace contains multiple topics and each topic\u2019s retention size (storage size) should not exceed to a specific threshold or it should be stored till certain time duration. This command helps to configure retention size and time of topics in a given namespace."}),"\n",(0,i.jsx)(n.h6,{id:"cli-13",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin set-retention --size 10 --time 100 test-tenant/ns1\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nN/A\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"rest-14",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[POST /admin/v2/namespaces/:tenant/:namespace/retention/setRetention](https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/setRetention)\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-17",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().setRetention(namespace, new RetentionPolicies(retentionTimeInMin, retentionSizeInMB))\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"get-retention",children:"get retention"}),"\n",(0,i.jsx)(n.p,{children:"It shows retention information of a given namespace."}),"\n",(0,i.jsx)(n.h6,{id:"cli-14",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin namespaces get-retention test-tenant/ns1\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'\n{\n  "retentionTimeInMinutes": 10,\n  "retentionSizeInMB": 100\n}\n\n'})}),"\n",(0,i.jsx)(n.h6,{id:"rest-15",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[GET /admin/v2/namespaces/:tenant/:namespace/retention/getRetention](https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/getRetention)\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-18",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().getRetention(namespace)\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"set-dispatch-throttling",children:"set dispatch throttling"}),"\n",(0,i.jsxs)(n.p,{children:["It sets message dispatch rate for all the topics under a given namespace.\nDispatch rate can be restricted by number of message per X seconds (",(0,i.jsx)(n.code,{children:"msg-dispatch-rate"}),") or by number of message-bytes per X second (",(0,i.jsx)(n.code,{children:"byte-dispatch-rate"}),").\ndispatch rate is in second and it can be configured with ",(0,i.jsx)(n.code,{children:"dispatch-rate-period"}),". Default value of ",(0,i.jsx)(n.code,{children:"msg-dispatch-rate"})," and ",(0,i.jsx)(n.code,{children:"byte-dispatch-rate"})," is -1 which\ndisables the throttling."]}),"\n",(0,i.jsx)(n.h6,{id:"cli-15",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin namespaces set-dispatch-rate test-tenant/ns1 \\\n  --msg-dispatch-rate 1000 \\\n  --byte-dispatch-rate 1048576 \\\n  --dispatch-rate-period 1\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"rest-16",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[POST /admin/v2/namespaces/:tenant/:namespace/dispatchRate/setDispatchRate](https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/setDispatchRate)\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-19",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().setDispatchRate(namespace, new DispatchRate(1000, 1048576, 1))\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"get-configured-message-rate",children:"get configured message-rate"}),"\n",(0,i.jsx)(n.p,{children:"It shows configured message-rate for the namespace (topics under this namespace can dispatch this many messages per second)"}),"\n",(0,i.jsx)(n.h6,{id:"cli-16",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin namespaces get-dispatch-rate test-tenant/ns1\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'\n{\n  "dispatchThrottlingRatePerTopicInMsg" : 1000,\n  "dispatchThrottlingRatePerTopicInByte" : 1048576,\n  "ratePeriodInSecond" : 1\n}\n\n'})}),"\n",(0,i.jsx)(n.h6,{id:"rest-17",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[GET /admin/v2/namespaces/:tenant/:namespace/dispatchRate/getDispatchRate](https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/getDispatchRate)\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-20",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().getDispatchRate(namespace)\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"set-dispatch-throttling-for-subscription",children:"set dispatch throttling for subscription"}),"\n",(0,i.jsxs)(n.p,{children:["It sets message dispatch rate for all the subscription of topics under a given namespace.\nDispatch rate can be restricted by number of message per X seconds (",(0,i.jsx)(n.code,{children:"msg-dispatch-rate"}),") or by number of message-bytes per X second (",(0,i.jsx)(n.code,{children:"byte-dispatch-rate"}),").\ndispatch rate is in second and it can be configured with ",(0,i.jsx)(n.code,{children:"dispatch-rate-period"}),". Default value of ",(0,i.jsx)(n.code,{children:"msg-dispatch-rate"})," and ",(0,i.jsx)(n.code,{children:"byte-dispatch-rate"})," is -1 which\ndisables the throttling."]}),"\n",(0,i.jsx)(n.h6,{id:"cli-17",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin namespaces set-subscription-dispatch-rate test-tenant/ns1 \\\n  --msg-dispatch-rate 1000 \\\n  --byte-dispatch-rate 1048576 \\\n  --dispatch-rate-period 1\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"rest-18",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[POST /admin/v2/namespaces/:tenant/:namespace/subscriptionDispatchRate/setDispatchRate](https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/setDispatchRate)\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-21",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().setSubscriptionDispatchRate(namespace, new DispatchRate(1000, 1048576, 1))\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"get-configured-message-rate-1",children:"get configured message-rate"}),"\n",(0,i.jsx)(n.p,{children:"It shows configured message-rate for the namespace (topics under this namespace can dispatch this many messages per second)"}),"\n",(0,i.jsx)(n.h6,{id:"cli-18",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin namespaces get-subscription-dispatch-rate test-tenant/ns1\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'\n{\n  "dispatchThrottlingRatePerTopicInMsg" : 1000,\n  "dispatchThrottlingRatePerTopicInByte" : 1048576,\n  "ratePeriodInSecond" : 1\n}\n\n'})}),"\n",(0,i.jsx)(n.h6,{id:"rest-19",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[GET /admin/v2/namespaces/:tenant/:namespace/subscriptionDispatchRate/getDispatchRate](https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/getDispatchRate)\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-22",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().getSubscriptionDispatchRate(namespace)\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"set-dispatch-throttling-for-subscription-1",children:"set dispatch throttling for subscription"}),"\n",(0,i.jsxs)(n.p,{children:["It sets message dispatch rate for all the replicator between replication clusters under a given namespace.\nDispatch rate can be restricted by number of message per X seconds (",(0,i.jsx)(n.code,{children:"msg-dispatch-rate"}),") or by number of message-bytes per X second (",(0,i.jsx)(n.code,{children:"byte-dispatch-rate"}),").\ndispatch rate is in second and it can be configured with ",(0,i.jsx)(n.code,{children:"dispatch-rate-period"}),". Default value of ",(0,i.jsx)(n.code,{children:"msg-dispatch-rate"})," and ",(0,i.jsx)(n.code,{children:"byte-dispatch-rate"})," is -1 which\ndisables the throttling."]}),"\n",(0,i.jsx)(n.h6,{id:"cli-19",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin namespaces set-replicator-dispatch-rate test-tenant/ns1 \\\n  --msg-dispatch-rate 1000 \\\n  --byte-dispatch-rate 1048576 \\\n  --dispatch-rate-period 1\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"rest-20",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[POST /admin/v2/namespaces/:tenant/:namespace/replicatorDispatchRate/setDispatchRate](https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/setDispatchRate)\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-23",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().setReplicatorDispatchRate(namespace, new DispatchRate(1000, 1048576, 1))\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"get-configured-message-rate-2",children:"get configured message-rate"}),"\n",(0,i.jsx)(n.p,{children:"It shows configured message-rate for the namespace (topics under this namespace can dispatch this many messages per second)"}),"\n",(0,i.jsx)(n.h6,{id:"cli-20",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n$ pulsar-admin namespaces get-replicator-dispatch-rate test-tenant/ns1\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'\n{\n  "dispatchThrottlingRatePerTopicInMsg" : 1000,\n  "dispatchThrottlingRatePerTopicInByte" : 1048576,\n  "ratePeriodInSecond" : 1\n}\n\n'})}),"\n",(0,i.jsx)(n.h6,{id:"rest-21",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[GET /admin/v2/namespaces/:tenant/:namespace/replicatorDispatchRate/getDispatchRate](https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/getDispatchRate)\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-24",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().getReplicatorDispatchRate(namespace)\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"unloading-from-a-broker",children:"Unloading from a broker"}),"\n",(0,i.jsxs)(n.p,{children:["You can unload a namespace, or a ",(0,i.jsx)(n.a,{href:"/docs/2.6.0/reference-terminology#namespace-bundle",children:"namespace bundle"}),", from the Pulsar ",(0,i.jsx)(n.a,{href:"/docs/2.6.0/reference-terminology#broker",children:"broker"})," that is currently responsible for it."]}),"\n",(0,i.jsx)(n.h4,{id:"pulsar-admin-4",children:"pulsar-admin"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"/docs/2.6.0/reference-pulsar-admin#unload",children:(0,i.jsx)(n.code,{children:"unload"})})," subcommand of the ",(0,i.jsx)(n.a,{href:"/docs/2.6.0/reference-pulsar-admin#namespaces",children:(0,i.jsx)(n.code,{children:"namespaces"})})," command."]}),"\n",(0,i.jsx)(n.h6,{id:"cli-21",children:"CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\n$ pulsar-admin namespaces unload my-tenant/my-ns\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"rest-22",children:"REST"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n[PUT /admin/v2/namespaces/:tenant/:namespace/unload/unloadNamespace](https://pulsar.apache.org/admin-rest-api?version=2.6.0&apiversion=v2#operation/unloadNamespace)\n\n"})}),"\n",(0,i.jsx)(n.h6,{id:"java-25",children:"Java"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"\nadmin.namespaces().unload(namespace)\n\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>r});var s=a(96540);const i={},c=s.createContext(i);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);