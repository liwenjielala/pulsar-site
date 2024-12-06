"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[91192],{86907:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"administration-isolation","title":"Pulsar isolation","description":"In an organization, a Pulsar instance provides services to multiple teams. When organizing the resources across multiple teams, you want to make a suitable isolation plan to avoid resource competition between different teams and applications and provide high-quality messaging service. In this case, you need to consider resource isolation and weigh your intended actions against expected and unexpected consequences.","source":"@site/versioned_docs/version-2.11.x/administration-isolation.md","sourceDirName":".","slug":"/administration-isolation","permalink":"/docs/2.11.x/administration-isolation","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/administration-isolation.md","tags":[],"version":"2.11.x","frontMatter":{"id":"administration-isolation","title":"Pulsar isolation","sidebar_label":"Pulsar isolation"},"sidebar":"docsSidebar","previous":{"title":"Upgrade","permalink":"/docs/2.11.x/administration-upgrade"},"next":{"title":"Isolate brokers","permalink":"/docs/2.11.x/administration-isolation-broker"}}');var o=i(74848),a=i(28453);const n={id:"administration-isolation",title:"Pulsar isolation",sidebar_label:"Pulsar isolation"},r=void 0,l={},c=[{value:"Isolation levels",id:"isolation-levels",level:2},{value:"Deployments to achieve isolation within Pulsar",id:"deployments-to-achieve-isolation-within-pulsar",level:2},{value:"Separate Pulsar clusters",id:"separate-pulsar-clusters",level:3},{value:"Shared BookKeeper cluster",id:"shared-bookkeeper-cluster",level:3},{value:"Single Pulsar cluster",id:"single-pulsar-cluster",level:3}];function d(e){const s={a:"a",admonition:"admonition",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"In an organization, a Pulsar instance provides services to multiple teams. When organizing the resources across multiple teams, you want to make a suitable isolation plan to avoid resource competition between different teams and applications and provide high-quality messaging service. In this case, you need to consider resource isolation and weigh your intended actions against expected and unexpected consequences."}),"\n",(0,o.jsx)(s.p,{children:"The multi-layer and segment-centric architecture and hierarchical resource management of Pulsar provide a solid foundation for isolation, which allows you to isolate resources in your desired manner, prevent resource competition, and attain stability."}),"\n",(0,o.jsx)(s.h2,{id:"isolation-levels",children:"Isolation levels"}),"\n",(0,o.jsx)(s.p,{children:"Pulsar supports isolation at either of the following two levels or both."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/docs/2.11.x/administration-isolation-broker",children:"Broker-level isolation"})," divides brokers into different groups and assigns broker groups to different namespaces. In this way, you can bind topics in a namespace to a set of brokers that belong to specific groups."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/docs/2.11.x/administration-isolation-bookie",children:"Bookie-level isolation"})," divides bookies into different racks/regions and assigns data replicas to bookies based on a specified data placement policy for disaster tolerance."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Isolation levels",src:i(11770).A+"",width:"2011",height:"1490"})}),"\n",(0,o.jsx)(s.admonition,{type:"tip",children:(0,o.jsxs)(s.p,{children:["On top of ",(0,o.jsx)(s.a,{href:"/docs/2.11.x/administration-isolation-broker",children:"broker-level isolation"})," and ",(0,o.jsx)(s.a,{href:"/docs/2.11.x/administration-isolation-bookie",children:"bookie-level isolation"}),", if you want to guarantee all the data that belongs to a namespace is stored in desired bookies, you can define and configure ",(0,o.jsx)(s.a,{href:"/docs/2.11.x/administration-isolation-bookie#configure-bookie-affinity-groups",children:"bookie affinity groups"}),". See ",(0,o.jsx)(s.a,{href:"#shared-bookkeeper-cluster",children:"shared BookKeeper cluster deployment"})," for more details."]})}),"\n",(0,o.jsx)(s.h2,{id:"deployments-to-achieve-isolation-within-pulsar",children:"Deployments to achieve isolation within Pulsar"}),"\n",(0,o.jsx)(s.h3,{id:"separate-pulsar-clusters",children:"Separate Pulsar clusters"}),"\n",(0,o.jsx)(s.p,{children:"The following illustration demonstrates the deployment of separate Pulsar clusters to achieve the highest-level isolation."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Deployment of separate Pulsar clusters",src:i(57653).A+"",width:"974",height:"537"})}),"\n",(0,o.jsx)(s.p,{children:"Here are some key points for understanding how it works:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Separate Pulsar clusters use a shared ",(0,o.jsx)(s.a,{href:"/docs/2.11.x/concepts-architecture-overview#configuration-store",children:"configuration store"}),"."]}),"\n",(0,o.jsx)(s.li,{children:"Each cluster exposes its service through a DNS entry point and makes sure a client can access the cluster through the DNS entry point. Clients can use one or multiple Pulsar URLs that the Pulsar cluster exposes as the service URL."}),"\n",(0,o.jsx)(s.li,{children:"Each Pulsar cluster has one or multiple brokers and bookies."}),"\n",(0,o.jsxs)(s.li,{children:["Each Pulsar cluster has one metadata store, which can be separated into ",(0,o.jsx)(s.a,{href:"/docs/2.11.x/concepts-architecture-overview#metadata-store",children:"Pulsar metadata store"})," and ",(0,o.jsx)(s.a,{href:"https://bookkeeper.apache.org/docs/latest/getting-started/concepts/#metadata-storage",children:"BookKeeper metadata store"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsx)(s.p,{children:"When using this approach, if you want to achieve namespace isolation, you need to specify a cluster for a namespace. The cluster must be in the allowed cluster list of the tenant. Topics under the namespace are assigned to this cluster."})}),"\n",(0,o.jsx)(s.h3,{id:"shared-bookkeeper-cluster",children:"Shared BookKeeper cluster"}),"\n",(0,o.jsx)(s.p,{children:"The following illustration demonstrates the deployment of shared BookKeeper clusters to achieve isolation."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Deployment of shared BookKeeper cluster",src:i(71902).A+"",width:"974",height:"547"})}),"\n",(0,o.jsx)(s.p,{children:"Here are some key points for understanding how it works:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Separate Pulsar clusters share a BookKeeper cluster and a ",(0,o.jsx)(s.a,{href:"/docs/2.11.x/concepts-architecture-overview#configuration-store",children:"configuration store"}),"."]}),"\n",(0,o.jsx)(s.li,{children:"Each cluster exposes its service through a DNS entry point and makes sure a client can access the cluster through the DNS entry point. Clients can use one or multiple Pulsar URLs that the Pulsar cluster exposes as the service URL."}),"\n",(0,o.jsx)(s.li,{children:"Each Pulsar cluster has one or multiple brokers."}),"\n",(0,o.jsx)(s.li,{children:"Each Pulsar cluster has one metadata store."}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["As illustrated below, all bookie groups use a shared BookKeeper cluster and a metadata store, and each ",(0,o.jsx)(s.a,{href:"/docs/2.11.x/administration-isolation-bookie#configure-bookie-affinity-groups",children:"bookie affinity group"})," has one or several bookies. You can specify one or multiple primary/secondary groups for a namespace. Topics under the namespace are created on the bookies in the primary group first and then created on the bookies in the secondary group."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Storage isolation achieved by bookie affinity groups",src:i(24391).A+"",width:"974",height:"489"})}),"\n",(0,o.jsx)(s.h3,{id:"single-pulsar-cluster",children:"Single Pulsar cluster"}),"\n",(0,o.jsx)(s.p,{children:"The following illustration demonstrates how to achieve isolation inside a single Pulsar cluster."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Deployment of a single Pulsar cluster",src:i(44776).A+"",width:"974",height:"731"})}),"\n",(0,o.jsx)(s.p,{children:"Here are some key points for understanding how it works:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Each cluster exposes its service through a DNS entry point and makes sure a client can access the cluster through the DNS entry point. Clients can use one or multiple Pulsar URLs that the Pulsar cluster exposes as the service URL."}),"\n",(0,o.jsxs)(s.li,{children:["Broker isolation is achieved by setting a ",(0,o.jsx)(s.a,{href:"/docs/2.11.x/administration-isolation-broker",children:"namespace isolation policy"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11770:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/admin-isolation-7ed23da7d9e71606692ae3a737cdd26c.svg"},57653:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/isolation-1-67815ccbaa7aa9d6c95d9b53b6b8a2b9.png"},71902:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/isolation-2-1575075aa3f6c9087a5a8404c335b6e2.png"},24391:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/isolation-3-b5d76b67b80f949373ff98aba9aff4c7.png"},44776:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/isolation-4-16f47c4aad3422d4e4c88b575939adfa.png"},28453:(e,s,i)=>{i.d(s,{R:()=>n,x:()=>r});var t=i(96540);const o={},a=t.createContext(o);function n(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);