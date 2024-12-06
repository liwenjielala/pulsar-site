"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[30484],{77360:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"txn-how","title":"How transactions work?","description":"Learn the working principles of transactions in Pulsar.","source":"@site/versioned_docs/version-3.2.x/txn-how.md","sourceDirName":".","slug":"/txn-how","permalink":"/docs/3.2.x/txn-how","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/txn-how.md","tags":[],"version":"3.2.x","frontMatter":{"id":"txn-how","title":"How transactions work?","sidebar_label":"Working principles","description":"Learn the working principles of transactions in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"Monitoring","permalink":"/docs/3.2.x/txn-monitor"},"next":{"title":"Tutorials","permalink":"/docs/3.2.x/install-deploy-upgrade-landing"}}');var a=n(74848),i=n(28453);const r={id:"txn-how",title:"How transactions work?",sidebar_label:"Working principles",description:"Learn the working principles of transactions in Pulsar."},o=void 0,c={},d=[{value:"Key concept",id:"key-concept",level:2},{value:"Transaction coordinator",id:"transaction-coordinator",level:3},{value:"Transaction log",id:"transaction-log",level:3},{value:"Transaction buffer",id:"transaction-buffer",level:3},{value:"Transaction ID",id:"transaction-id",level:3},{value:"Pending acknowledge state",id:"pending-acknowledge-state",level:3},{value:"Data flow",id:"data-flow",level:2},{value:"1. Begin a transaction",id:"1-begin-a-transaction",level:3},{value:"2. Publish messages with a transaction",id:"2-publish-messages-with-a-transaction",level:3},{value:"3. Acknowledge messages with a transaction",id:"3-acknowledge-messages-with-a-transaction",level:3},{value:"4. End a transaction",id:"4-end-a-transaction",level:3},{value:"4.1 End transaction request",id:"41-end-transaction-request",level:4},{value:"4.2 Finalize a transaction",id:"42-finalize-a-transaction",level:4},{value:"4.3 Mark a transaction as COMMITTED or ABORTED",id:"43-mark-a-transaction-as-committed-or-aborted",level:4}];function h(t){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["This section describes transaction components and how the components work together. For the complete design details, see ",(0,a.jsx)(e.a,{href:"https://docs.google.com/document/d/145VYp09JKTw9jAT-7yNyFU255FptB2_B2Fye100ZXDI/edit#heading=h.bm5ainqxosrx",children:"PIP-31: Transactional Streaming"}),"."]}),"\n",(0,a.jsx)(e.h2,{id:"key-concept",children:"Key concept"}),"\n",(0,a.jsx)(e.p,{children:"It is important to know the following key concepts, which is a prerequisite for understanding how transactions work."}),"\n",(0,a.jsx)(e.h3,{id:"transaction-coordinator",children:"Transaction coordinator"}),"\n",(0,a.jsx)(e.p,{children:"The transaction coordinator (TC) is a module running inside a Pulsar broker."}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"It maintains the entire life cycle of transactions and prevents a transaction from getting into an incorrect status."}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"It handles transaction timeout, and ensures that the transaction is aborted after a transaction timeout."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"transaction-log",children:"Transaction log"}),"\n",(0,a.jsx)(e.p,{children:"All the transaction metadata persists in the transaction log. The transaction log is backed by a Pulsar topic. If the transaction coordinator crashes, it can restore the transaction metadata from the transaction log."}),"\n",(0,a.jsx)(e.p,{children:"The transaction log stores the transaction status rather than actual messages in the transaction (the actual messages are stored in the actual topic partitions)."}),"\n",(0,a.jsx)(e.h3,{id:"transaction-buffer",children:"Transaction buffer"}),"\n",(0,a.jsx)(e.p,{children:"Messages produced to a topic partition within a transaction are stored in the transaction buffer (TB) of that topic partition. The messages in the transaction buffer are not visible to consumers until the transactions are committed. The messages in the transaction buffer are discarded when the transactions are aborted."}),"\n",(0,a.jsx)(e.p,{children:"Transaction buffer stores all ongoing and aborted transactions in memory. All messages are sent to the actual partitioned Pulsar topics.  After transactions are committed, the messages in the transaction buffer are materialized (visible) to consumers. When the transactions are aborted, the messages in the transaction buffer are discarded."}),"\n",(0,a.jsx)(e.h3,{id:"transaction-id",children:"Transaction ID"}),"\n",(0,a.jsx)(e.p,{children:"Transaction ID (TxnID) identifies a unique transaction in Pulsar. The transaction ID is 128-bit. The highest 16 bits are reserved for the ID of the transaction coordinator, and the remaining bits are used for monotonically increasing numbers in each transaction coordinator. It is easy to locate the transaction crash with the TxnID."}),"\n",(0,a.jsx)(e.h3,{id:"pending-acknowledge-state",children:"Pending acknowledge state"}),"\n",(0,a.jsx)(e.p,{children:"Pending acknowledge state maintains message acknowledgments within a transaction before a transaction completes. If a message is in the pending acknowledge state, the message cannot be acknowledged by other transactions until the message is removed from the pending acknowledge state."}),"\n",(0,a.jsx)(e.p,{children:"The pending acknowledge state is persisted in the pending acknowledge log (cursor ledger). A new broker can restore the state from the pending acknowledge log to ensure the acknowledgment is not lost."}),"\n",(0,a.jsx)(e.h2,{id:"data-flow",children:"Data flow"}),"\n",(0,a.jsx)(e.p,{children:"To help you debug or tune the transaction for better performance, review the following diagrams and descriptions."}),"\n",(0,a.jsx)(e.p,{children:"The data flow of a transaction can be split into several steps."}),"\n",(0,a.jsx)(e.h3,{id:"1-begin-a-transaction",children:"1. Begin a transaction"}),"\n",(0,a.jsx)(e.p,{children:"Before introducing the transaction in Pulsar, a producer is created and then messages are sent to brokers and stored in data logs."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:n(96113).A+"",width:"1564",height:"856"})}),"\n",(0,a.jsxs)(e.p,{children:["Let's walk through the steps for ",(0,a.jsx)(e.em,{children:"beginning a transaction"}),"."]}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Step"}),(0,a.jsx)(e.th,{children:"Description"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"1.1"}),(0,a.jsx)(e.td,{children:"The first step is that the Pulsar client finds the transaction coordinator."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"1.2"}),(0,a.jsx)(e.td,{children:"The transaction coordinator allocates a transaction ID for the transaction. In the transaction log, the transaction is logged with its transaction ID and status (OPEN), which ensures the transaction status is persisted regardless of transaction coordinator crashes."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"1.3"}),(0,a.jsx)(e.td,{children:"The transaction log sends the result of persisting the transaction ID to the transaction coordinator."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"1.4"}),(0,a.jsx)(e.td,{children:"After the transaction status entry is logged, the transaction coordinator brings the transaction ID back to the Pulsar client."})]})]})]}),"\n",(0,a.jsx)(e.h3,{id:"2-publish-messages-with-a-transaction",children:"2. Publish messages with a transaction"}),"\n",(0,a.jsxs)(e.p,{children:["In this stage, the Pulsar client enters a transaction loop, repeating the ",(0,a.jsx)(e.code,{children:"consume-process-produce"})," operation for all the messages that comprise the transaction. This is a long phase and is potentially composed of multiple produce and acknowledgment requests."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Workflow of publishing messages with a transaction in Pulsar",src:n(55102).A+"",width:"1338",height:"694"})}),"\n",(0,a.jsxs)(e.p,{children:["Let's walk through the steps for ",(0,a.jsx)(e.em,{children:"publishing messages with a transaction"}),"."]}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Step"}),(0,a.jsx)(e.th,{children:"Description"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"2.1.1"}),(0,a.jsx)(e.td,{children:"Before the Pulsar client produces messages to a new topic partition, it sends a request to the transaction coordinator to add the partition to the transaction."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"2.1.2"}),(0,a.jsx)(e.td,{children:"The transaction coordinator logs the partition changes of the transaction into the transaction log for durability, which ensures the transaction coordinator knows all the partitions that a transaction is handling. The transaction coordinator can commit or abort changes on each partition at the end-partition phase."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"2.1.3"}),(0,a.jsx)(e.td,{children:"The transaction log sends the result of logging the new partition (used for producing messages) to the transaction coordinator."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"2.1.4"}),(0,a.jsx)(e.td,{children:"The transaction coordinator sends the result of adding a new produced partition to the transaction."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"2.2.1"}),(0,a.jsx)(e.td,{children:"The Pulsar client starts producing messages to partitions. The flow of this part is the same as the normal flow of producing messages except that the batch of messages produced by a transaction contains transaction IDs."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"2.2.2"}),(0,a.jsx)(e.td,{children:"The broker writes messages to a partition."})]})]})]}),"\n",(0,a.jsx)(e.h3,{id:"3-acknowledge-messages-with-a-transaction",children:"3. Acknowledge messages with a transaction"}),"\n",(0,a.jsx)(e.p,{children:"In this phase, the Pulsar client sends a request to the transaction coordinator and a new subscription is acknowledged as a part of a transaction."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Workflow of acknowledging messages with a transaction in Pulsar",src:n(73415).A+"",width:"1292",height:"694"})}),"\n",(0,a.jsxs)(e.p,{children:["Let's walk through the steps for ",(0,a.jsx)(e.em,{children:"acknowledging messages with a transaction"}),"."]}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Step"}),(0,a.jsx)(e.th,{children:"Description"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"3.1.1"}),(0,a.jsx)(e.td,{children:"The Pulsar client sends a request to add an acknowledged subscription to the transaction coordinator."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"3.1.2"}),(0,a.jsx)(e.td,{children:"The transaction coordinator logs the addition of subscription, which ensures that it knows all subscriptions handled by a transaction and can commit or abort changes on each subscription at the end phase."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"3.1.3"}),(0,a.jsx)(e.td,{children:"The transaction log sends the result of logging the new partition (used for acknowledging messages) to the transaction coordinator."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"3.1.4"}),(0,a.jsx)(e.td,{children:"The transaction coordinator sends the result of adding the new acknowledged partition to the transaction."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"3.2"}),(0,a.jsx)(e.td,{children:"The Pulsar client acknowledges messages on the subscription. The flow of this part is the same as the normal flow of acknowledging messages except that the acknowledged request carries a transaction ID."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"3.3"}),(0,a.jsx)(e.td,{children:"The broker receiving the acknowledgment request checks if the acknowledgment belongs to a transaction or not."})]})]})]}),"\n",(0,a.jsx)(e.h3,{id:"4-end-a-transaction",children:"4. End a transaction"}),"\n",(0,a.jsx)(e.p,{children:"At the end of a transaction, the Pulsar client decides to commit or abort the transaction. The transaction can be aborted when a conflict is detected in acknowledging messages."}),"\n",(0,a.jsx)(e.h4,{id:"41-end-transaction-request",children:"4.1 End transaction request"}),"\n",(0,a.jsx)(e.p,{children:"When the Pulsar client finishes a transaction, it issues an end transaction request."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Workflow of ending a transaction request in Pulsar",src:n(37004).A+"",width:"1284",height:"694"})}),"\n",(0,a.jsxs)(e.p,{children:["Let's walk through the steps for ",(0,a.jsx)(e.em,{children:"ending the transaction"}),"."]}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Step"}),(0,a.jsx)(e.th,{children:"Description"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"4.1.1"}),(0,a.jsx)(e.td,{children:"The Pulsar client issues an end transaction request (with a field indicating whether the transaction is to be committed or aborted) to the transaction coordinator."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"4.1.2"}),(0,a.jsx)(e.td,{children:"The transaction coordinator writes a COMMITTING or ABORTING message to its transaction log."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"4.1.3"}),(0,a.jsx)(e.td,{children:"The transaction log sends the result of logging the committing or aborting status."})]})]})]}),"\n",(0,a.jsx)(e.h4,{id:"42-finalize-a-transaction",children:"4.2 Finalize a transaction"}),"\n",(0,a.jsx)(e.p,{children:"The transaction coordinator starts the process of committing or aborting messages to all the partitions involved in this transaction."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Workflow of finalizing a transaction in Pulsar",src:n(22453).A+"",width:"1354",height:"690"})}),"\n",(0,a.jsxs)(e.p,{children:["Let's walk through the steps for ",(0,a.jsx)(e.em,{children:"finalizing a transaction"}),"."]}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Step"}),(0,a.jsx)(e.th,{children:"Description"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"4.2.1"}),(0,a.jsx)(e.td,{children:"The transaction coordinator commits transactions on subscriptions and commits transactions on partitions at the same time."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"4.2.2"}),(0,a.jsx)(e.td,{children:"The broker (produce) writes produced committed markers to the actual partitions. At the same time, the broker (ack) writes acked committed marks to the subscription pending ack partitions."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"4.2.3"}),(0,a.jsx)(e.td,{children:"The data log sends the result of writing produced committed marks to the broker. At the same time, pending ack data log sends the result of writing acked committed marks to the broker. The cursor moves to the next position."})]})]})]}),"\n",(0,a.jsx)(e.h4,{id:"43-mark-a-transaction-as-committed-or-aborted",children:"4.3 Mark a transaction as COMMITTED or ABORTED"}),"\n",(0,a.jsx)(e.p,{children:"The transaction coordinator writes the final transaction status to the transaction log to complete the transaction."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Workflow of marking a transaction request in Pulsar",src:n(93298).A+"",width:"1262",height:"692"})}),"\n",(0,a.jsxs)(e.p,{children:["Let's walk through the steps for ",(0,a.jsx)(e.em,{children:"marking a transaction as COMMITTED or ABORTED"}),"."]}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Step"}),(0,a.jsx)(e.th,{children:"Description"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"4.3.1"}),(0,a.jsx)(e.td,{children:"After all produced messages and acknowledgments to all partitions involved in this transaction have been successfully committed or aborted, the transaction coordinator writes the final COMMITTED or ABORTED transaction status messages to its transaction log, indicating that the transaction is complete. All the messages associated with the transaction in its transaction log can be safely removed."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"4.3.2"}),(0,a.jsx)(e.td,{children:"The transaction log sends the result of the committed transaction to the transaction coordinator."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"4.3.3"}),(0,a.jsx)(e.td,{children:"The transaction coordinator sends the result of the committed transaction to the Pulsar client."})]})]})]})]})}function l(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(h,{...t})}):h(t)}},96113:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/txn-3-751a2bc51f91299f6c546b647c2f632c.png"},55102:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/txn-4-f7adc6fb4ff184199a981fc32dd2311e.png"},73415:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/txn-5-66e33b5b6ba3d900a1635cb268a38b35.png"},37004:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/txn-6-ac44126d5410be548e44717d2cc056fa.png"},22453:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/txn-7-229fdd1904b8c411e77d48fe1c3fee65.png"},93298:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/txn-8-d49405f853142c9762c4caaa8f862b4e.png"},28453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>o});var s=n(96540);const a={},i=s.createContext(a);function r(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:r(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);