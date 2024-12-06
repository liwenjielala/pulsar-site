"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[87398],{4909:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"transactions","title":"Transactions","description":"Transactional semantics enable event streaming applications to consume, process, and produce messages in one atomic operation. In Pulsar, a producer or consumer can work with messages across multiple topics and partitions and ensure those messages are processed as a single unit.","source":"@site/versioned_docs/version-3.2.x/concepts-transactions.md","sourceDirName":".","slug":"/transactions","permalink":"/docs/3.2.x/transactions","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/concepts-transactions.md","tags":[],"version":"3.2.x","frontMatter":{"id":"transactions","title":"Transactions","sidebar_label":"Overview"}}');var s=t(74848),o=t(28453);const i={id:"transactions",title:"Transactions",sidebar_label:"Overview"},r=void 0,c={},d=[{value:"Transaction coordinator and transaction log",id:"transaction-coordinator-and-transaction-log",level:2},{value:"Transaction ID",id:"transaction-id",level:2},{value:"Transaction buffer",id:"transaction-buffer",level:2},{value:"Pending acknowledge state",id:"pending-acknowledge-state",level:2}];function l(n){const e={h2:"h2",p:"p",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Transactional semantics enable event streaming applications to consume, process, and produce messages in one atomic operation. In Pulsar, a producer or consumer can work with messages across multiple topics and partitions and ensure those messages are processed as a single unit."}),"\n",(0,s.jsx)(e.p,{children:"The following concepts help you understand Pulsar transactions."}),"\n",(0,s.jsx)(e.h2,{id:"transaction-coordinator-and-transaction-log",children:"Transaction coordinator and transaction log"}),"\n",(0,s.jsx)(e.p,{children:"The transaction coordinator maintains the topics and subscriptions that interact in a transaction. When a transaction is committed, the transaction coordinator interacts with the topic owner broker to complete the transaction."}),"\n",(0,s.jsx)(e.p,{children:"The transaction coordinator maintains the entire life cycle of transactions and prevents a transaction from incorrect status."}),"\n",(0,s.jsx)(e.p,{children:"The transaction coordinator handles transaction timeout and ensures that the transaction is aborted after a transaction timeout."}),"\n",(0,s.jsx)(e.p,{children:"All the transaction metadata is persisted in the transaction log. The transaction log is backed by a Pulsar topic. After the transaction coordinator crashes, it can restore the transaction metadata from the transaction log."}),"\n",(0,s.jsx)(e.h2,{id:"transaction-id",children:"Transaction ID"}),"\n",(0,s.jsx)(e.p,{children:"The transaction ID (TxnID) identifies a unique transaction in Pulsar. The transaction ID is 128-bit. The highest 16 bits are reserved for the ID of the transaction coordinator, and the remaining bits are used for monotonically increasing numbers in each transaction coordinator. It is easy to locate the transaction crash with the TxnID."}),"\n",(0,s.jsx)(e.h2,{id:"transaction-buffer",children:"Transaction buffer"}),"\n",(0,s.jsx)(e.p,{children:"Messages produced within a transaction are stored in the transaction buffer. The messages in transaction buffer are not materialized (visible) to consumers until the transactions are committed. The messages in the transaction buffer are discarded when the transactions are aborted."}),"\n",(0,s.jsx)(e.h2,{id:"pending-acknowledge-state",children:"Pending acknowledge state"}),"\n",(0,s.jsx)(e.p,{children:"Message acknowledges within a transaction are maintained by the pending acknowledge state before the transaction completes. If a message is in the pending acknowledge state, the message cannot be acknowledged by other transactions until the message is removed from the pending acknowledge state."}),"\n",(0,s.jsx)(e.p,{children:"The pending acknowledge state is persisted in the pending acknowledge log. The pending acknowledge log is backed by a Pulsar topic. A new broker can restore the state from the pending acknowledge log to ensure the acknowledgment is not lost."})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>r});var a=t(96540);const s={},o=a.createContext(s);function i(n){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),a.createElement(o.Provider,{value:e},n.children)}}}]);