"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[45242],{90051:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"txn-use","title":"How to use transactions?","description":"Transaction API","source":"@site/versioned_docs/version-2.8.x/txn-use.md","sourceDirName":".","slug":"/txn-use","permalink":"/docs/2.8.x/txn-use","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/txn-use.md","tags":[],"version":"2.8.x","frontMatter":{"id":"txn-use","title":"How to use transactions?","sidebar_label":"How to use transactions?","original_id":"txn-use"},"sidebar":"docsSidebar","previous":{"title":"How transactions work?","permalink":"/docs/2.8.x/txn-how"},"next":{"title":"How to monitor transactions?","permalink":"/docs/2.8.x/txn-monitor"}}');var i=t(74848),a=t(28453);const r={id:"txn-use",title:"How to use transactions?",sidebar_label:"How to use transactions?",original_id:"txn-use"},o=void 0,c={},l=[{value:"Transaction API",id:"transaction-api",level:2},{value:"Quick start",id:"quick-start",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"transaction-api",children:"Transaction API"}),"\n",(0,i.jsxs)(n.p,{children:["The transaction feature is primarily a server-side and protocol-level feature. You can use the transaction feature via the ",(0,i.jsx)(n.a,{href:"https://pulsar.apache.org/api/admin/2.8.x/",children:"transaction API"}),", which is available in ",(0,i.jsx)(n.strong,{children:"Pulsar 2.8.0 or later"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To use the transaction API, you do not need any additional settings in the Pulsar client. ",(0,i.jsx)(n.strong,{children:"By default"}),", transactions is ",(0,i.jsx)(n.strong,{children:"disabled"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Currently, transaction API is only available for ",(0,i.jsx)(n.strong,{children:"Java"})," clients. Support for other language clients will be added in the future releases."]}),"\n",(0,i.jsx)(n.h2,{id:"quick-start",children:"Quick start"}),"\n",(0,i.jsx)(n.p,{children:"This section provides an example of how to use the transaction API to send and receive messages in a Java client."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Start Pulsar 2.8.0 or later."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Enable transaction."}),"\n",(0,i.jsxs)(n.p,{children:["Change the configuration in the ",(0,i.jsx)(n.code,{children:"broker.conf"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\ntransactionCoordinatorEnabled=true\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you want to enable batch messages in transactions, follow the steps below."}),"\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:"acknowledgmentAtBatchIndexLevelEnabled"})," to ",(0,i.jsx)(n.code,{children:"true"})," in the ",(0,i.jsx)(n.code,{children:"broker.conf"})," or ",(0,i.jsx)(n.code,{children:"standalone.conf"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nacknowledgmentAtBatchIndexLevelEnabled=true\n\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Initialize transaction coordinator metadata."}),"\n",(0,i.jsx)(n.p,{children:"The transaction coordinator can leverage the advantages of partitioned topics (such as load balance)."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Input"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nbin/pulsar initialize-transaction-coordinator-metadata -cs 127.0.0.1:2181 -c standalone\n\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nTransaction coordinator metadata setup success\n\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Initialize a Pulsar client."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'\nPulsarClient client = PulsarClient.builder()\n\n.serviceUrl("pulsar://localhost:6650")\n\n.enableTransaction(true)\n\n.build();\n\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Now you can start using the transaction API to send and receive messages. Below is an example of a ",(0,i.jsx)(n.code,{children:"consume-process-produce"})," application written in Java."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(91163).A+"",width:"1844",height:"1100"})}),"\n",(0,i.jsx)(n.p,{children:"Let\u2019s walk through this example step by step."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Step"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1. Start a transaction."}),(0,i.jsx)(n.td,{children:"The application opens a new transaction by calling PulsarClient.newTransaction. It specifics the transaction timeout as 1 minute. If the transaction is not committed within 1 minute, the transaction is automatically aborted."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2. Receive messages from topics."}),(0,i.jsx)(n.td,{children:"The application creates two normal consumers to receive messages from topic input-topic-1 and input-topic-2 respectively."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3. Publish messages to topics with the transaction."}),(0,i.jsxs)(n.td,{children:["The application creates two producers to produce the resulting messages to the output topic ",(0,i.jsx)(n.em,{children:"output-topic-1"})," and output-topic-2 respectively. The application applies the processing logic and generates two output messages. The application sends those two output messages as part of the transaction opened in the first step via Producer.newMessage(Transaction)."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4. Acknowledge the messages with the transaction."}),(0,i.jsx)(n.td,{children:"In the same transaction, the application acknowledges the two input messages."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"5. Commit the transaction."}),(0,i.jsx)(n.td,{children:"The application commits the transaction by calling Transaction.commit() on the open transaction. The commit operation ensures the two input messages are marked as acknowledged and the two output messages are written successfully to the output topics."})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"[1] Example of enabling batch messages ack in transactions in the consumer builder."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'\nConsumer<byte[]> sinkConsumer = pulsarClient\n    .newConsumer()\n    .topic(transferTopic)\n    .subscriptionName("sink-topic")\n\n.subscriptionInitialPosition(SubscriptionInitialPosition.Earliest)\n    .subscriptionType(SubscriptionType.Shared)\n    .enableBatchIndexAcknowledgment(true) // enable batch index acknowledgement\n    .subscribe();\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},91163:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/txn-9-65da8c1f05f7575701ca8614637c112a.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);