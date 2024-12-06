"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3046],{32104:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"concepts-overview","title":"Pulsar Overview","description":"Pulsar is a multi-tenant, high-performance solution for server-to-server messaging. Originally developed by Yahoo, Pulsar is under the stewardship of the Apache Software Foundation.","source":"@site/versioned_docs/version-2.6.3/concepts-overview.md","sourceDirName":".","slug":"/concepts-overview","permalink":"/docs/2.6.3/concepts-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.3/concepts-overview.md","tags":[],"version":"2.6.3","frontMatter":{"id":"concepts-overview","title":"Pulsar Overview","sidebar_label":"Overview","original_id":"concepts-overview"},"sidebar":"docsSidebar","previous":{"title":"Use Pulsar with client libraries","permalink":"/docs/2.6.3/client-libraries"},"next":{"title":"Messaging","permalink":"/docs/2.6.3/concepts-messaging"}}');var r=i(74848),t=i(28453);const o={id:"concepts-overview",title:"Pulsar Overview",sidebar_label:"Overview",original_id:"concepts-overview"},c=void 0,a={},l=[{value:"Contents",id:"contents",level:2}];function d(e){const s={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Pulsar is a multi-tenant, high-performance solution for server-to-server messaging. Originally developed by Yahoo, Pulsar is under the stewardship of the ",(0,r.jsx)(s.a,{href:"https://www.apache.org/",children:"Apache Software Foundation"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Key features of Pulsar are listed below:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Native support for multiple clusters in a Pulsar instance, with seamless ",(0,r.jsx)(s.a,{href:"/docs/2.6.3/administration-geo",children:"geo-replication"})," of messages across clusters."]}),"\n",(0,r.jsx)(s.li,{children:"Very low publish and end-to-end latency."}),"\n",(0,r.jsx)(s.li,{children:"Seamless scalability to over a million topics."}),"\n",(0,r.jsxs)(s.li,{children:["A simple ",(0,r.jsx)(s.a,{href:"/docs/2.6.3/concepts-clients",children:"client API"})," with bindings for ",(0,r.jsx)(s.a,{href:"/docs/2.6.3/client-libraries-java",children:"Java"}),", ",(0,r.jsx)(s.a,{href:"/docs/2.6.3/client-libraries-go",children:"Go"}),", ",(0,r.jsx)(s.a,{href:"/docs/2.6.3/client-libraries-python",children:"Python"})," and ",(0,r.jsx)(s.a,{href:"/docs/2.6.3/client-libraries-cpp",children:"C++"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Multiple ",(0,r.jsx)(s.a,{href:"/docs/2.6.3/concepts-messaging#subscription-types",children:"subscription types"})," (",(0,r.jsx)(s.a,{href:"/docs/2.6.3/concepts-messaging#exclusive",children:"exclusive"}),", ",(0,r.jsx)(s.a,{href:"/docs/2.6.3/concepts-messaging#shared",children:"shared"}),", and ",(0,r.jsx)(s.a,{href:"/docs/2.6.3/concepts-messaging#failover",children:"failover"}),") for topics."]}),"\n",(0,r.jsxs)(s.li,{children:["Guaranteed message delivery with ",(0,r.jsx)(s.a,{href:"/docs/2.6.3/concepts-architecture-overview#persistent-storage",children:"persistent message storage"})," provided by ",(0,r.jsx)(s.a,{href:"http://bookkeeper.apache.org/",children:"Apache BookKeeper"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["A serverless light-weight computing framework ",(0,r.jsx)(s.a,{href:"/docs/2.6.3/functions-overview",children:"Pulsar Functions"})," offers the capability for stream-native data processing."]}),"\n",(0,r.jsxs)(s.li,{children:["A serverless connector framework ",(0,r.jsx)(s.a,{href:"/docs/2.6.3/io-overview",children:"Pulsar IO"}),", which is built on Pulsar Functions, makes it easier to move data in and out of Apache Pulsar."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/docs/2.6.3/concepts-tiered-storage",children:"Tiered Storage"})," offloads data from hot/warm storage to cold/long-term storage (such as S3 and GCS) when the data is aging out."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"contents",children:"Contents"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/2.6.3/concepts-messaging",children:"Messaging Concepts"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/2.6.3/concepts-architecture-overview",children:"Architecture Overview"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/2.6.3/concepts-clients",children:"Pulsar Clients"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/2.6.3/concepts-replication",children:"Geo Replication"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/2.6.3/concepts-multi-tenancy",children:"Multi Tenancy"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/2.6.3/concepts-authentication",children:"Authentication and Authorization"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/2.6.3/concepts-topic-compaction",children:"Topic Compaction"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/2.6.3/concepts-tiered-storage",children:"Tiered Storage"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/2.6.3/concepts-proxy-sni-routing",children:"Proxy support with SNI routing"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/2.6.3/concepts-multiple-advertised-listeners",children:"Multiple advertised listeners"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>c});var n=i(96540);const r={},t=n.createContext(r);function o(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);