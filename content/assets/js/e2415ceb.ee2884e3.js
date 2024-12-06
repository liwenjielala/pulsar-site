"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[41334],{87206:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"concepts-broker-load-balancing-overview","title":"Overview","description":"Challenges of load balancing in distributed streaming systems","source":"@site/versioned_docs/version-4.0.x/concepts-broker-load-balancing-overview.md","sourceDirName":".","slug":"/concepts-broker-load-balancing-overview","permalink":"/docs/4.0.x/concepts-broker-load-balancing-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-4.0.x/concepts-broker-load-balancing-overview.md","tags":[],"version":"4.0.x","frontMatter":{"id":"concepts-broker-load-balancing-overview","title":"Overview","sidebar_label":"Overview"},"sidebar":"docsSidebar","previous":{"title":"Clients","permalink":"/docs/4.0.x/concepts-clients"},"next":{"title":"Use cases","permalink":"/docs/4.0.x/concepts-broker-load-balancing-use-cases"}}');var a=n(74848),o=n(28453);const i={id:"concepts-broker-load-balancing-overview",title:"Overview",sidebar_label:"Overview"},t=void 0,c={},l=[{value:"Challenges of load balancing in distributed streaming systems",id:"challenges-of-load-balancing-in-distributed-streaming-systems",level:2},{value:"Broker load balancing in Pulsar",id:"broker-load-balancing-in-pulsar",level:2},{value:"Related topics",id:"related-topics",level:2}];function d(e){const s={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h2,{id:"challenges-of-load-balancing-in-distributed-streaming-systems",children:"Challenges of load balancing in distributed streaming systems"}),"\n",(0,a.jsx)(s.p,{children:"Like other distributed systems, load balancing is important in messaging and streaming systems. Without it, load imbalance can cause hot-spot brokers, resulting in performance degradation, cluster unavailability, and wasted broker resources."}),"\n",(0,a.jsx)(s.p,{children:"Due to the unpredictable topic volume and physical distance among distributed brokers, it is not easy to dynamically distribute message loads among brokers. It requires the system to continuously monitor and route message loads based on changing conditions without compromising system performance. For example:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"When topics receive high traffic, exhausting CPU or memory resources on particular brokers, the cluster offloads the overloaded brokers and redistributes the load to other brokers."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"When brokers experience low traffic, become idle, or are added or removed, the cluster rebalances the load to avoid wasting resources."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["When topics are redistributed to other brokers, the cluster ensures the topics are instantaneously available to clients. The topics continue to guarantee the system performance, such as persistence, ",(0,a.jsx)(s.a,{href:"/docs/4.0.x/concepts-messaging#ordering-guarantee",children:"ordering"}),", ",(0,a.jsx)(s.a,{href:"/docs/4.0.x/concepts-messaging#message-deduplication",children:"deduplication"}),", ",(0,a.jsx)(s.a,{href:"/docs/4.0.x/concepts-messaging#subscription-types",children:"subscription type"}),", etc."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"broker-load-balancing-in-pulsar",children:"Broker load balancing in Pulsar"}),"\n",(0,a.jsxs)(s.p,{children:["Because Pulsar uses a ",(0,a.jsx)(s.a,{href:"/docs/4.0.x/concepts-architecture-overview",children:"segment-centric architecture"})," and separates the message serving and storage layer, it is designed to benefit load balancing."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["At the persistence layer (",(0,a.jsx)(s.a,{href:"https://bookkeeper.apache.org/",children:"BookKeeper"}),"), message segments in topics are balanced across all the bookies in the cluster. When an individual bookie runs out of storage capacity, the rest segments are loaded into the available bookies."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["At the serving layer (",(0,a.jsx)(s.a,{href:"/docs/4.0.x/concepts-architecture-overview#brokers",children:"broker"}),"), topic rearrangement (balance) is seamless. Brokers do not need to copy messages from one broker to another when rebalancing topics among brokers. Instead, the current owner broker temporarily closes the topic and client sessions and transfers the ownership to the selected broker. Then, the selected broker takes ownership of the topic and opens the topic sessions to the clients."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Pulsar uses automatic broker load balancing to monitor the brokers' load internally and then dynamically balances topic sessions according to the load across all available brokers as evenly, dynamically, and flexibly as possible. Consequently, it improves performance, availability, and usage of resources."}),"\n",(0,a.jsx)(s.h2,{id:"related-topics",children:"Related topics"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["To discover different usage scenarios, see ",(0,a.jsx)(s.a,{href:"/docs/4.0.x/concepts-broker-load-balancing-use-cases",children:"Broker load balancing | Use cases"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["To explore functionalities, see ",(0,a.jsx)(s.a,{href:"/docs/4.0.x/concepts-broker-load-balancing-features",children:"Broker load balancing | Features"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["To understand advantages, see ",(0,a.jsx)(s.a,{href:"/docs/4.0.x/concepts-broker-load-balancing-benefits",children:"Broker load balancing | Benefits"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["To learn essential fundamentals, see ",(0,a.jsx)(s.a,{href:"/docs/4.0.x/concepts-broker-load-balancing-concepts",children:"Broker load balancing | Concepts"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["To review various versions of broker load balancers, see ",(0,a.jsx)(s.a,{href:"/docs/4.0.x/concepts-broker-load-balancing-types",children:"Broker load balancing | Types"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["To get up quickly, see ",(0,a.jsx)(s.a,{href:"/docs/4.0.x/concepts-broker-load-balancing-quick-start",children:"Broker load balancing | Quick start"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["To migrate one broker load balancer type to another, see ",(0,a.jsx)(s.a,{href:"/docs/4.0.x/concepts-broker-load-balancing-migration",children:"Broker load balancing | Migration"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>t});var r=n(96540);const a={},o=r.createContext(a);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);