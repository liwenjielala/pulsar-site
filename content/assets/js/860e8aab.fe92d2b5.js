"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[90584],{56252:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"txn-why","title":"Why transactions?","description":"Pulsar transactions (txn) enable event streaming applications to consume, process, and produce messages in one atomic operation. The reason for developing this feature can be summarized as below.","source":"@site/versioned_docs/version-2.8.x/txn-why.md","sourceDirName":".","slug":"/txn-why","permalink":"/docs/2.8.x/txn-why","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/txn-why.md","tags":[],"version":"2.8.x","frontMatter":{"id":"txn-why","title":"Why transactions?","sidebar_label":"Why transactions?","original_id":"txn-why"},"sidebar":"docsSidebar","previous":{"title":"Aliyun OSS offloader","permalink":"/docs/2.8.x/tiered-storage-aliyun"},"next":{"title":"What are transactions?","permalink":"/docs/2.8.x/txn-what"}}');var i=n(74848),o=n(28453);const a={id:"txn-why",title:"Why transactions?",sidebar_label:"Why transactions?",original_id:"txn-why"},r=void 0,c={},d=[{value:"Demand of stream processing",id:"demand-of-stream-processing",level:2},{value:"Limitation of idempotent producer",id:"limitation-of-idempotent-producer",level:2}];function l(e){const s={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Pulsar transactions (txn) enable event streaming applications to consume, process, and produce messages in one atomic operation. The reason for developing this feature can be summarized as below."}),"\n",(0,i.jsx)(s.h2,{id:"demand-of-stream-processing",children:"Demand of stream processing"}),"\n",(0,i.jsx)(s.p,{children:"The demand for stream processing applications with stronger processing guarantees has grown along with the rise of stream processing. For example, in the financial industry, financial institutions use stream processing engines to process debits and credits for users. This type of use case requires that every message is processed exactly once, without exception."}),"\n",(0,i.jsx)(s.p,{children:"In other words, if a stream processing application consumes message A and\nproduces the result as a message B (B = f(A)), then exactly-once processing\nguarantee means that A can only be marked as consumed if and only if B is\nsuccessfully produced, and vice versa."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(67171).A+"",width:"1638",height:"812"})}),"\n",(0,i.jsx)(s.p,{children:"The Pulsar transactions API strengthens the message delivery semantics and the processing guarantees for stream processing. It enables stream processing applications to consume, process, and produce messages in one atomic operation. That means, a batch of messages in a transaction can be received from, produced to and acknowledged by many topic partitions. All the operations involved in a transaction succeed or fail as one single until."}),"\n",(0,i.jsx)(s.h2,{id:"limitation-of-idempotent-producer",children:"Limitation of idempotent producer"}),"\n",(0,i.jsx)(s.p,{children:"Avoiding data loss or duplication can be achieved by using the Pulsar idempotent producer, but it does not provide guarantees for writes across multiple partitions."}),"\n",(0,i.jsxs)(s.p,{children:["In Pulsar, the highest level of message delivery guarantee is using an ",(0,i.jsx)(s.a,{href:"/docs/2.8.x/concepts-messaging#producer-idempotency",children:"idempotent producer"})," with the exactly once semantic at one single partition, that is, each message is persisted exactly once without data loss and duplication. However, there are some limitations in this solution:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Due to the monotonic increasing sequence ID, this solution only works on a single partition and within a single producer session (that is, for producing one message), so there is no atomicity when producing multiple messages to one or multiple partitions."}),"\n",(0,i.jsx)(s.p,{children:"In this case, if there are some failures  (for example, client / broker / bookie crashes, network failure, and more) in the process of producing and receiving messages, messages are re-processed and re-delivered, which may cause data loss or data duplication:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"For the producer: if the producer retry sending messages, some messages are persisted multiple times; if the producer does not retry sending messages, some messages are persisted once and other messages are lost."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"For the consumer: since the consumer does not know whether the broker has received messages or not, the consumer may not retry sending acks, which causes it to receive duplicate messages."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Similarly, for Pulsar Function, it only guarantees exactly once semantics for an idempotent function on a single event rather than processing multiple events or producing multiple results that can happen exactly."}),"\n",(0,i.jsx)(s.p,{children:"For example, if a function accepts multiple events and produces one result (for example, window function), the function may fail between producing the result and acknowledging the incoming messages, or even between acknowledging individual events, which causes all (or some) incoming messages to be re-delivered and reprocessed, and a new result is generated."}),"\n",(0,i.jsx)(s.p,{children:"However, many scenarios need atomic guarantees across multiple partitions and sessions."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Consumers need to rely on more mechanisms to acknowledge (ack) messages once."}),"\n",(0,i.jsx)(s.p,{children:"For example, consumers are required to store the MessageID along with its acked state. After the topic is unloaded, the subscription can recover the acked state of this MessageID in memory when the topic is loaded again."}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},67171:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/txn-1-26fb642d38d5603bf6f7e0c5811d52c7.png"},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>r});var t=n(96540);const i={},o=t.createContext(i);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);