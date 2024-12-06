"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[21332],{50571:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"administration-stats","title":"Pulsar stats","description":"Partitioned topics","source":"@site/versioned_docs/version-2.2.0/administration-stats.md","sourceDirName":".","slug":"/administration-stats","permalink":"/docs/2.2.0/administration-stats","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.0/administration-stats.md","tags":[],"version":"2.2.0","frontMatter":{"id":"administration-stats","title":"Pulsar stats","sidebar_label":"Pulsar statistics"},"sidebar":"docsSidebar","previous":{"title":"Dashboard","permalink":"/docs/2.2.0/administration-dashboard"},"next":{"title":"Load distribution","permalink":"/docs/2.2.0/administration-load-distribution"}}');var i=t(74848),n=t(28453);const d={id:"administration-stats",title:"Pulsar stats",sidebar_label:"Pulsar statistics"},o=void 0,c={},l=[{value:"Partitioned topics",id:"partitioned-topics",level:2},{value:"Topics",id:"topics",level:2}];function h(e){const s={h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"partitioned-topics",children:"Partitioned topics"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Stat"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgRateIn"}),(0,i.jsx)(s.td,{children:"The sum of publish rates of all local and replication publishers in messages per second."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgThroughputIn"}),(0,i.jsx)(s.td,{children:"Same as msgRateIn but in bytes per second instead of messages per second."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgRateOut"}),(0,i.jsx)(s.td,{children:"The sum of dispatch rates of all local and replication consumers in messages per second."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgThroughputOut"}),(0,i.jsx)(s.td,{children:"Same as msgRateOut but in bytes per second instead of messages per second."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"averageMsgSize"}),(0,i.jsx)(s.td,{children:"Average message size, in bytes, from this publisher within the last interval."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"storageSize"}),(0,i.jsx)(s.td,{children:"The sum of storage size of the ledgers for this topic."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"publishers"}),(0,i.jsx)(s.td,{children:"The list of all local publishers into the topic. Publishers can be anywhere from zero to thousands."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"producerId"}),(0,i.jsx)(s.td,{children:"Internal identifier for this producer on this topic."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"producerName"}),(0,i.jsx)(s.td,{children:"Internal identifier for this producer, generated by the client library."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"address"}),(0,i.jsx)(s.td,{children:"IP address and source port for the connection of this producer."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"connectedSince"}),(0,i.jsx)(s.td,{children:"Timestamp this producer is created or last reconnected."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"subscriptions"}),(0,i.jsx)(s.td,{children:"The list of all local subscriptions to the topic."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"my-subscription"}),(0,i.jsx)(s.td,{children:"The name of this subscription (client defined)."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgBacklog"}),(0,i.jsx)(s.td,{children:"The count of messages in backlog for this subscription."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"type"}),(0,i.jsx)(s.td,{children:"This subscription type."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgRateExpired"}),(0,i.jsx)(s.td,{children:"The rate at which messages are discarded instead of dispatched from this subscription due to TTL."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"consumers"}),(0,i.jsx)(s.td,{children:"The list of connected consumers for this subscription."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"consumerName"}),(0,i.jsx)(s.td,{children:"Internal identifier for this consumer, generated by the client library."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"availablePermits"}),(0,i.jsx)(s.td,{children:"The number of messages this consumer has space for in the listen queue of client library. A value of 0 means the queue of client library is full and receive() is not being called. A nonzero value means this consumer is ready to be dispatched messages."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"replication"}),(0,i.jsx)(s.td,{children:"This section gives the stats for cross-colo replication of this topic."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"replicationBacklog"}),(0,i.jsx)(s.td,{children:"The outbound replication backlog in messages."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"connected"}),(0,i.jsx)(s.td,{children:"Whether the outbound replicator is connected."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"replicationDelayInSeconds"}),(0,i.jsx)(s.td,{children:"How long the oldest message has been waiting to be sent through the connection, if connected is true."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"inboundConnection"}),(0,i.jsx)(s.td,{children:"The IP and port of the broker in the publisher connection of remote cluster to this broker."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"inboundConnectedSince"}),(0,i.jsx)(s.td,{children:"The TCP connection being used to publish messages to the remote cluster. If no local publishers are connected, this connection is automatically closed after a minute."})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"topics",children:"Topics"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Stat"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"entriesAddedCounter"}),(0,i.jsx)(s.td,{children:"Messages published since this broker loads this topic."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"numberOfEntries"}),(0,i.jsx)(s.td,{children:"Total number of messages being tracked."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"totalSize"}),(0,i.jsx)(s.td,{children:"Total storage size in bytes of all messages."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"currentLedgerEntries"}),(0,i.jsx)(s.td,{children:"Count of messages written to the ledger currently open for writing."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"currentLedgerSize"}),(0,i.jsx)(s.td,{children:"Size in bytes of messages written to ledger currently open for writing."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lastLedgerCreatedTimestamp"}),(0,i.jsx)(s.td,{children:"Time when last ledger is created."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lastLedgerCreationFailureTimestamp"}),(0,i.jsx)(s.td,{children:"Time when last ledger is failed."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"waitingCursorsCount"}),(0,i.jsx)(s.td,{children:"How many cursors are caught up and waiting for a new message to be published."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"pendingAddEntriesCount"}),(0,i.jsx)(s.td,{children:"How many messages have (asynchronous) write requests you are waiting on completion."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lastConfirmedEntry"}),(0,i.jsxs)(s.td,{children:["The ledgerid",":entryid"," of the last message successfully written. If the entryid is -1, then the ledger is opened or is being currently opened but has no entries written yet."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"state"}),(0,i.jsx)(s.td,{children:"The state of the cursor ledger. Open means you have a cursor ledger for saving updates of the markDeletePosition."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ledgers"}),(0,i.jsx)(s.td,{children:"The ordered list of all ledgers for this topic holding its messages."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"cursors"}),(0,i.jsx)(s.td,{children:"The list of all cursors on this topic. Every subscription you saw in the topic stats has one."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"markDeletePosition"}),(0,i.jsx)(s.td,{children:"The ack position: the last message the subscriber acknowledges receiving."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"readPosition"}),(0,i.jsx)(s.td,{children:"The latest position of subscriber for reading message."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"waitingReadOp"}),(0,i.jsx)(s.td,{children:"This is true when the subscription reads the latest message that is published to the topic and waits on new messages to be published."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"pendingReadOps"}),(0,i.jsx)(s.td,{children:"The counter for how many outstanding read requests to the BookKeepers you have in progress."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"messagesConsumedCounter"}),(0,i.jsx)(s.td,{children:"Number of messages this cursor acks since this broker loads this topic."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"cursorLedger"}),(0,i.jsx)(s.td,{children:"The ledger used to persistently store the current markDeletePosition."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"cursorLedgerLastEntry"}),(0,i.jsx)(s.td,{children:"The last entryid used to persistently store the current markDeletePosition."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"individuallyDeletedMessages"}),(0,i.jsx)(s.td,{children:"If Acks are done out of order, shows the ranges of messages Acked between the markDeletePosition and the read-position."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lastLedgerSwitchTimestamp"}),(0,i.jsx)(s.td,{children:"The last time the cursor ledger is rolled over."})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>o});var r=t(96540);const i={},n=r.createContext(i);function d(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);