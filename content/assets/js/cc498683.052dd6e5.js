"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[86721],{70064:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"concepts-broker-load-balancing-benefits","title":"Benefits","description":"The broker load balancer plays a key role in preventing downtime and lost productivity. It not only ensures efficient use of all resources, but it also optimizes cluster performance, reliability, and capacity with lower latency. It delivers a number of benefits, including but not limited to the following.","source":"@site/versioned_docs/version-3.1.x/concepts-broker-load-balancing-benefits.md","sourceDirName":".","slug":"/concepts-broker-load-balancing-benefits","permalink":"/docs/3.1.x/concepts-broker-load-balancing-benefits","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/concepts-broker-load-balancing-benefits.md","tags":[],"version":"3.1.x","frontMatter":{"id":"concepts-broker-load-balancing-benefits","title":"Benefits","sidebar_label":"Benefits"},"sidebar":"docsSidebar","previous":{"title":"Features","permalink":"/docs/3.1.x/concepts-broker-load-balancing-features"},"next":{"title":"Concepts","permalink":"/docs/3.1.x/concepts-broker-load-balancing-concepts"}}');var l=i(74848),r=i(28453);const a={id:"concepts-broker-load-balancing-benefits",title:"Benefits",sidebar_label:"Benefits"},t=void 0,o={},c=[{value:"Efficiency",id:"efficiency",level:2},{value:"Performance",id:"performance",level:2},{value:"Availability",id:"availability",level:2},{value:"Scalability",id:"scalability",level:2},{value:"Related topics",id:"related-topics",level:2}];function d(e){const n={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"The broker load balancer plays a key role in preventing downtime and lost productivity. It not only ensures efficient use of all resources, but it also optimizes cluster performance, reliability, and capacity with lower latency. It delivers a number of benefits, including but not limited to the following."}),"\n",(0,l.jsx)(n.h2,{id:"efficiency",children:"Efficiency"}),"\n",(0,l.jsx)(n.p,{children:"It efficiently distributes the load to maximize broker resources since it allows you to:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Reduce idle brokers and save cluster resources."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Distribute data loads evenly and efficiently."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"performance",children:"Performance"}),"\n",(0,l.jsx)(n.p,{children:"It improves performance since it allows you to:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Reduce hot spots and maintain message pub/sub latency."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Minimize the likelihood of Pulsar cluster downtime, scale clusters to meet constantly data-changing needs, and ensure that no broker is overworked. Without it, Pulsar clusters would likely have performance degradation (e.g., slow down, drop requests, or even fail) when topics are suddenly overloaded."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"availability",children:"Availability"}),"\n",(0,l.jsx)(n.p,{children:"It increases the availability and fault tolerance since it allows you to:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Minimize topic unavailable time by shifting pub/sub sessions from unavailable brokers to available brokers."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Perform cluster maintenance without causing service disruption since pub/sub connections get rerouted to other brokers during maintenance."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"scalability",children:"Scalability"}),"\n",(0,l.jsx)(n.p,{children:"It helps seamlessly scale up or down broker clusters since it allows you to:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Unload topic loads automatically to new brokers when scaling up."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Detect orphan topics and automatically and reassign them to available brokers when scaling down."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-topics",children:"Related topics"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["To get a comprehensive understanding and discover the key insights, see ",(0,l.jsx)(n.a,{href:"/docs/3.1.x/concepts-broker-load-balancing-overview",children:"Broker load balancing | Overview"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["To discover different usage scenarios, see ",(0,l.jsx)(n.a,{href:"/docs/3.1.x/concepts-broker-load-balancing-use-cases",children:"Broker load balancing | Use cases"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["To explore functionalities, see ",(0,l.jsx)(n.a,{href:"/docs/3.1.x/concepts-broker-load-balancing-features",children:"Broker load balancing | Features"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["To learn essential fundamentals, see ",(0,l.jsx)(n.a,{href:"/docs/3.1.x/concepts-broker-load-balancing-concepts",children:"Broker load balancing | Concepts"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["To review various versions of broker load balancers, see ",(0,l.jsx)(n.a,{href:"/docs/3.1.x/concepts-broker-load-balancing-types",children:"Broker load balancing | Types"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["To get up quickly, see ",(0,l.jsx)(n.a,{href:"/docs/3.1.x/concepts-broker-load-balancing-quick-start",children:"Broker load balancing | Quick start"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["To migrate one broker load balancer type to another, see ",(0,l.jsx)(n.a,{href:"/docs/3.1.x/concepts-broker-load-balancing-migration",children:"Broker load balancing | Migration"}),"."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>t});var s=i(96540);const l={},r=s.createContext(l);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);