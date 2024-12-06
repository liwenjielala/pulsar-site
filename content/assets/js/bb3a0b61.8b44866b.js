"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[86134],{46599:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"txn-what","title":"What are transactions?","description":"Transactions strengthen the message delivery semantics of Apache Pulsar and processing guarantees of Pulsar Functions. The Pulsar Transaction API supports atomic writes and acknowledgments across multiple topics.","source":"@site/versioned_docs/version-2.10.x/txn-what.md","sourceDirName":".","slug":"/txn-what","permalink":"/docs/2.10.x/txn-what","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/txn-what.md","tags":[],"version":"2.10.x","frontMatter":{"id":"txn-what","title":"What are transactions?","sidebar_label":"What are transactions?","original_id":"txn-what"},"sidebar":"docsSidebar","previous":{"title":"Why transactions?","permalink":"/docs/2.10.x/txn-why"},"next":{"title":"How transactions work?","permalink":"/docs/2.10.x/txn-how"}}');var a=n(74848),r=n(28453);const i={id:"txn-what",title:"What are transactions?",sidebar_label:"What are transactions?",original_id:"txn-what"},o=void 0,c={},l=[{value:"Transaction semantics",id:"transaction-semantics",level:2},{value:"Transactions and stream processing",id:"transactions-and-stream-processing",level:2},{value:"Use case",id:"use-case",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["Transactions strengthen the message delivery semantics of Apache Pulsar and ",(0,a.jsx)(s.a,{href:"/docs/2.10.x/functions-overview#processing-guarantees",children:"processing guarantees of Pulsar Functions"}),". The Pulsar Transaction API supports atomic writes and acknowledgments across multiple topics."]}),"\n",(0,a.jsx)(s.p,{children:"Transactions allow:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"A producer to send a batch of messages to multiple topics where all messages in the batch are eventually visible to any consumer, or none are ever visible to consumers."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["End-to-end exactly-once semantics (execute a ",(0,a.jsx)(s.code,{children:"consume-process-produce"})," operation exactly once)."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"transaction-semantics",children:"Transaction semantics"}),"\n",(0,a.jsx)(s.p,{children:"Pulsar transactions have the following semantics:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"All operations within a transaction are committed as a single unit."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Either all messages are committed, or none of them are."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Each message is written or processed exactly once, without data loss or duplicates (even in the event of failures)."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"If a transaction is aborted, all the writes and acknowledgments in this transaction rollback."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"A group of messages in a transaction can be received from, produced to, and acknowledged by multiple partitions."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Consumers are only allowed to read committed (acked) messages. In other words, the broker does not deliver transactional messages which are part of an open transaction or messages which are part of an aborted transaction."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Message writes across multiple partitions are atomic."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Message acks across multiple subscriptions are atomic. A message is acked successfully only once by a consumer under the subscription when acknowledging the message with the transaction ID."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"transactions-and-stream-processing",children:"Transactions and stream processing"}),"\n",(0,a.jsxs)(s.p,{children:["Stream processing on Pulsar is a ",(0,a.jsx)(s.code,{children:"consume-process-produce"})," operation on Pulsar topics:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"Consume"}),": a source operator that runs a Pulsar consumer reads messages from one or multiple Pulsar topics."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"Process"}),": a processing operator transforms the messages."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"Produce"}),": a sink operator that runs a Pulsar producer writes the resulting messages to one or multiple Pulsar topics."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(81896).A+"",width:"1678",height:"556"})}),"\n",(0,a.jsx)(s.p,{children:"Pulsar transactions support end-to-end exactly-once stream processing, which means messages are not lost from a source operator and messages are not duplicated to a sink operator."}),"\n",(0,a.jsx)(s.h2,{id:"use-case",children:"Use case"}),"\n",(0,a.jsx)(s.p,{children:"Prior to Pulsar 2.8.0, there was no easy way to build stream processing applications with Pulsar to achieve exactly-once processing guarantees. With the transaction introduced in Pulsar 2.8.0, the following services support exactly-once semantics:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://flink.apache.org/2021/01/07/pulsar-flink-connector-270.html",children:"Pulsar Flink connector"})}),"\n",(0,a.jsx)(s.p,{children:"Prior to Pulsar 2.8.0, if you want to build stream applications using Pulsar and Flink, the Pulsar Flink connector only supported exactly-once source connector and at-least-once sink connector, which means the highest processing guarantee for end-to-end was at-least-once, there was possibility that the resulting messages from streaming applications produce duplicated messages to the resulting topics in Pulsar."}),"\n",(0,a.jsxs)(s.p,{children:["With the transaction introduced in Pulsar 2.8.0, the Pulsar Flink sink connector can support exactly-once semantics by implementing the designated ",(0,a.jsx)(s.code,{children:"TwoPhaseCommitSinkFunction"})," and hooking up the Flink sink message lifecycle with Pulsar transaction API."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Support for Pulsar Functions and other connectors will be added in the future releases."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},81896:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/txn-2-9ebd4a2461e88dd74ab6e4440228fc4b.png"},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var t=n(96540);const a={},r=t.createContext(a);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);