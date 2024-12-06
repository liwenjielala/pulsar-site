"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[46509],{81566:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"transactions-api","title":"Transactions API","description":"All messages in a transaction are available only to consumers after the transaction has been committed. If a transaction has been aborted, all the writes and acknowledgments in this transaction roll back.","source":"@site/versioned_docs/version-3.2.x/transaction-api.md","sourceDirName":".","slug":"/transactions-api","permalink":"/docs/3.2.x/transactions-api","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/transaction-api.md","tags":[],"version":"3.2.x","frontMatter":{"id":"transactions-api","title":"Transactions API","sidebar_label":"Transactions API"}}');var s=a(74848),i=a(28453);const r={id:"transactions-api",title:"Transactions API",sidebar_label:"Transactions API"},c=void 0,o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initialize Pulsar client",id:"initialize-pulsar-client",level:2},{value:"Start transactions",id:"start-transactions",level:2},{value:"Produce transaction messages",id:"produce-transaction-messages",level:2},{value:"Acknowledge the messages with the transaction",id:"acknowledge-the-messages-with-the-transaction",level:2},{value:"Commit transactions",id:"commit-transactions",level:2},{value:"Abort transaction",id:"abort-transaction",level:2},{value:"Example",id:"example",level:3},{value:"Enable batch messages in transactions",id:"enable-batch-messages-in-transactions",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"All messages in a transaction are available only to consumers after the transaction has been committed. If a transaction has been aborted, all the writes and acknowledgments in this transaction roll back."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["To enable transactions in Pulsar, you need to configure the parameter in ",(0,s.jsx)(n.code,{children:"broker.conf"})," file or ",(0,s.jsx)(n.code,{children:"standalone.conf"})," file."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-conf",children:"transactionCoordinatorEnabled=true\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Initialize transaction coordinator metadata, so the transaction coordinators can leverage advantages of the partitioned topic, such as load balance."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"bin/pulsar initialize-transaction-coordinator-metadata -cs 127.0.0.1:2181 -c standalone\n"})}),"\n",(0,s.jsx)(n.p,{children:"After initializing transaction coordinator metadata, you can use the transactions API. The following APIs are available."}),"\n",(0,s.jsx)(n.h2,{id:"initialize-pulsar-client",children:"Initialize Pulsar client"}),"\n",(0,s.jsx)(n.p,{children:"You can enable transactions for transaction clients and initialize transaction coordinator clients."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'PulsarClient pulsarClient = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .enableTransaction(true)\n        .build();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"start-transactions",children:"Start transactions"}),"\n",(0,s.jsx)(n.p,{children:"You can start transactions in the following way."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"Transaction txn = pulsarClient\n        .newTransaction()\n        .withTransactionTimeout(5, TimeUnit.MINUTES)\n        .build()\n        .get();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"produce-transaction-messages",children:"Produce transaction messages"}),"\n",(0,s.jsxs)(n.p,{children:["A transaction parameter is required when producing new transaction messages. The semantic of the transaction messages in Pulsar is ",(0,s.jsx)(n.code,{children:"read-committed"}),", so the consumer cannot receive the ongoing transaction messages before the transaction is committed."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'producer.newMessage(txn).value("Hello Pulsar Transaction".getBytes()).sendAsync();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"acknowledge-the-messages-with-the-transaction",children:"Acknowledge the messages with the transaction"}),"\n",(0,s.jsx)(n.p,{children:"The transaction acknowledgment requires a transaction parameter. The transaction acknowledgment marks the messages state to pending-ack state. When the transaction is committed, the pending-ack state becomes ack state. If the transaction is aborted, the pending-ack state becomes unacknowledged state."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Message<byte[]> message = consumer.receive();\nconsumer.acknowledgeAsync(message.getMessageId(), txn);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"commit-transactions",children:"Commit transactions"}),"\n",(0,s.jsx)(n.p,{children:"When the transaction is committed, consumers receive the transaction messages and the pending-ack state becomes ack state."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"txn.commit().get();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"abort-transaction",children:"Abort transaction"}),"\n",(0,s.jsx)(n.p,{children:"When the transaction is aborted, the transaction acknowledgment is canceled and the pending-ack messages are redelivered."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"txn.abort().get();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"The following example shows how messages are processed in transactions."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'PulsarClient pulsarClient = PulsarClient.builder()\n        .serviceUrl(getPulsarServiceList().get(0).getBrokerServiceUrl())\n        .statsInterval(0, TimeUnit.SECONDS)\n        .enableTransaction(true)\n        .build();\n\nString sourceTopic = "public/default/source-topic";\nString sinkTopic = "public/default/sink-topic";\n\nProducer<String> sourceProducer = pulsarClient\n        .newProducer(Schema.STRING)\n        .topic(sourceTopic)\n        .create();\nsourceProducer.newMessage().value("hello pulsar transaction").sendAsync();\n\nConsumer<String> sourceConsumer = pulsarClient\n        .newConsumer(Schema.STRING)\n        .topic(sourceTopic)\n        .subscriptionName("test")\n        .subscriptionType(SubscriptionType.Shared)\n        .subscriptionInitialPosition(SubscriptionInitialPosition.Earliest)\n        .subscribe();\n\nProducer<String> sinkProducer = pulsarClient\n        .newProducer(Schema.STRING)\n        .topic(sinkTopic)\n        .sendTimeout(0, TimeUnit.MILLISECONDS)\n        .create();\n\nTransaction txn = pulsarClient\n        .newTransaction()\n        .withTransactionTimeout(5, TimeUnit.MINUTES)\n        .build()\n        .get();\n\n// source message acknowledgment and sink message produce belong to one transaction,\n// they are combined into an atomic operation.\nMessage<String> message = sourceConsumer.receive();\nsourceConsumer.acknowledgeAsync(message.getMessageId(), txn);\nsinkProducer.newMessage(txn).value("sink data").sendAsync();\n\ntxn.commit().get();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"enable-batch-messages-in-transactions",children:"Enable batch messages in transactions"}),"\n",(0,s.jsx)(n.p,{children:"To enable batch messages in transactions, you need to enable the batch index acknowledgment feature. The transaction acks check whether the batch index acknowledgment conflicts."}),"\n",(0,s.jsxs)(n.p,{children:["To enable batch index acknowledgment, you need to set ",(0,s.jsx)(n.code,{children:"acknowledgmentAtBatchIndexLevelEnabled"})," to ",(0,s.jsx)(n.code,{children:"true"})," in the ",(0,s.jsx)(n.code,{children:"broker.conf"})," or ",(0,s.jsx)(n.code,{children:"standalone.conf"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-conf",children:"acknowledgmentAtBatchIndexLevelEnabled=true\n"})}),"\n",(0,s.jsxs)(n.p,{children:["And then you need to call the ",(0,s.jsx)(n.code,{children:"enableBatchIndexAcknowledgment(true)"})," method in the consumer builder."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'Consumer<byte[]> sinkConsumer = pulsarClient\n        .newConsumer()\n        .topic(transferTopic)\n        .subscriptionName("sink-topic")\n        .subscriptionInitialPosition(SubscriptionInitialPosition.Earliest)\n        .subscriptionType(SubscriptionType.Shared)\n        .enableBatchIndexAcknowledgment(true) // enable batch index acknowledgment\n        .subscribe();\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>c});var t=a(96540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);