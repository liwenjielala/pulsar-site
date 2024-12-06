"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[11369],{11949:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>h,default:()=>a,frontMatter:()=>n,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"administration-stats","title":"Pulsar stats","description":"Topic stats","source":"@site/versioned_docs/version-3.3.x/administration-stats.md","sourceDirName":".","slug":"/administration-stats","permalink":"/docs/3.3.x/administration-stats","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/administration-stats.md","tags":[],"version":"3.3.x","frontMatter":{"id":"administration-stats","title":"Pulsar stats","sidebar_label":"Statistics"},"sidebar":"docsSidebar","previous":{"title":"Isolate bookies","permalink":"/docs/3.3.x/administration-isolation-bookie"},"next":{"title":"Metrics","permalink":"/docs/3.3.x/reference-metrics"}}');var i=t(74848),d=t(28453);const n={id:"administration-stats",title:"Pulsar stats",sidebar_label:"Statistics"},h=void 0,c={},l=[{value:"Topic stats",id:"topic-stats",level:2},{value:"Producer stats",id:"producer-stats",level:3},{value:"Subscription stats",id:"subscription-stats",level:3},{value:"Consumer stats",id:"consumer-stats",level:3},{value:"Replication stats",id:"replication-stats",level:3},{value:"Topic internal stats",id:"topic-internal-stats",level:2}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"topic-stats",children:"Topic stats"}),"\n",(0,i.jsxs)(s.p,{children:["The following table outlines the stats of a topic. For more details about how to get these stats, see ",(0,i.jsx)(s.a,{href:"/docs/3.3.x/admin-api-topics#get-stats",children:"Get stats"}),"."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["All stats below are ",(0,i.jsx)(s.strong,{children:"reset"})," to 0 upon broker restart or topic unloading, ",(0,i.jsx)(s.strong,{children:"except"})," the stats marked with asterisks * (the values of them ",(0,i.jsx)(s.strong,{children:"keep unchanged"}),")."]})}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Stat"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgRateIn"}),(0,i.jsx)(s.td,{children:"The sum of all local and replication publishers' publish rates (message per second)."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgThroughputIn"}),(0,i.jsx)(s.td,{children:"The sum of all local and replication publishers' publish rates (byte per second)."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgRateOut"}),(0,i.jsx)(s.td,{children:"The sum of all local and replication consumers' dispatch rates (message per second)."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgThroughputOut"}),(0,i.jsx)(s.td,{children:"The sum of all local and replication consumers' dispatch rates (byte per second)."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"averageMsgSize"}),(0,i.jsx)(s.td,{children:"The average size (bytes) of messages published within the last interval."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"storageSize*"}),(0,i.jsxs)(s.td,{children:["The sum of the ledgers' storage size ",(0,i.jsx)(s.strong,{children:"in BookKeeper"})," and ",(0,i.jsx)(s.strong,{children:"in tiered storage"})," for a topic (in bytes)."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"offloadedStorageSize*"}),(0,i.jsxs)(s.td,{children:["The sum of the storage size ",(0,i.jsx)(s.strong,{children:"in tiered storage"})," for a topic (in bytes).",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Note"}),": the ",(0,i.jsx)(s.code,{children:"total storage size of a topic"})," = ",(0,i.jsx)(s.code,{children:"storageSize"}),", includes ",(0,i.jsx)(s.code,{children:"offloadedStorageSize"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"earliestMsgPublishTimeInBacklogs*"}),(0,i.jsx)(s.td,{children:"The publish time of the earliest message in the backlog (in milliseconds)."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"bytesInCounter"}),(0,i.jsx)(s.td,{children:"The total bytes published to the topic."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgInCounter"}),(0,i.jsx)(s.td,{children:"The total messages published to the topic."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"bytesOutCounter"}),(0,i.jsx)(s.td,{children:"The total bytes delivered to consumers."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgOutCounter"}),(0,i.jsx)(s.td,{children:"The total messages delivered to consumers."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgChunkPublished"}),(0,i.jsx)(s.td,{children:"The topics that have chunked messages published on it."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"backlogSize*"}),(0,i.jsx)(s.td,{children:"The estimated total unconsumed or backlog size (in bytes)."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"oldestBacklogMessageAgeSeconds"}),(0,i.jsx)(s.td,{children:"The age of the oldest unacknowledged (i.e. backlog) message, measured by the time elapsed from its published time, in seconds. This value is recorded every backlog quota check interval, hence it represents the value seen in the last check."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"oldestBacklogMessageSubscriptionName"}),(0,i.jsx)(s.td,{children:"The name of the subscription containing the oldest unacknowledged message. This value is recorded every backlog quota check interval, hence it represents the value seen in the last check."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"backlogQuotaLimitSize"}),(0,i.jsxs)(s.td,{children:["the size in bytes of the ",(0,i.jsx)(s.a,{href:"/docs/3.3.x/cookbooks-retention-expiry#backlog-quotas",children:"topic backlog quota"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"backlogQuotaLimitTime"}),(0,i.jsxs)(s.td,{children:["the ",(0,i.jsx)(s.a,{href:"/docs/3.3.x/cookbooks-retention-expiry#backlog-quotas",children:"topic backlog age (time) quota"}),", in seconds."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"waitingPublishers"}),(0,i.jsx)(s.td,{children:"The number of publishers waiting in a queue in exclusive access mode."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"deduplicationStatus"}),(0,i.jsx)(s.td,{children:"The status of message deduplication for the topic."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"topicEpoch"}),(0,i.jsx)(s.td,{children:"The topic epoch or empty if not set."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"filteredEntriesCount"}),(0,i.jsx)(s.td,{children:"The count of skipped entries for the topic."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"nonContiguousDeletedMessagesRanges"}),(0,i.jsx)(s.td,{children:"The number of non-contiguous deleted messages ranges."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"nonContiguousDeletedMessagesRangesSerializedSize"}),(0,i.jsx)(s.td,{children:"The serialized size of non-contiguous deleted messages ranges."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ownerBroker"}),(0,i.jsx)(s.td,{children:"The broker that owns this topic."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"#producer-stats",children:"publishers"})}),(0,i.jsx)(s.td,{children:"The list of all local publishers on the topic, ranging from zero to thousands."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"#subscription-stats",children:"subscriptions"})}),(0,i.jsx)(s.td,{children:"The list of all local subscriptions to the topic."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"#replication-stats",children:"replication"})}),(0,i.jsx)(s.td,{children:"This section gives the stats for cross-colo replication of this topic."})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"producer-stats",children:"Producer stats"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Stat"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"producerId"}),(0,i.jsx)(s.td,{children:"The internal identifier for this producer on this topic."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"producerName"}),(0,i.jsx)(s.td,{children:"The internal identifier for this producer, generated by the client library."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"address"}),(0,i.jsx)(s.td,{children:"IP address and source port for the connection of this producer."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"connectedSince"}),(0,i.jsx)(s.td,{children:"The timestamp when this producer is created or reconnected last time."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"accessMode"}),(0,i.jsx)(s.td,{children:"The type of access to the topic that the producer requires."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgRateIn"}),(0,i.jsx)(s.td,{children:"The total rate of messages (message per second) published by this publisher."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgThroughputIn"}),(0,i.jsx)(s.td,{children:"The total throughput (byte per second) of the messages published by this publisher."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"averageMsgSize"}),(0,i.jsx)(s.td,{children:"The average message size in bytes from this publisher within the last interval."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"chunkedMessageRate"}),(0,i.jsx)(s.td,{children:"The total rate of chunked messages published by this publisher."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"clientVersion"}),(0,i.jsx)(s.td,{children:"The client library version of this producer."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"metadata"}),(0,i.jsx)(s.td,{children:"The metadata (key/value strings) associated with this publisher."})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"subscription-stats",children:"Subscription stats"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Stat"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"my-subscription"}),(0,i.jsx)(s.td,{children:"The name of this subscription. It is defined by the client."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgRateOut"}),(0,i.jsx)(s.td,{children:"The total rate of messages (message per second) delivered on this subscription."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgThroughputOut"}),(0,i.jsx)(s.td,{children:"The total throughput (byte per second) delivered on this subscription."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgBacklog"}),(0,i.jsx)(s.td,{children:"The number of messages in the subscription backlog."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"type"}),(0,i.jsx)(s.td,{children:"This subscription type."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgRateExpired"}),(0,i.jsx)(s.td,{children:"The rate at which messages are discarded instead of dispatched from this subscription due to TTL."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lastExpireTimestamp"}),(0,i.jsx)(s.td,{children:"The timestamp of the last message expiration."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lastConsumedFlowTimestamp"}),(0,i.jsx)(s.td,{children:"The timestamp of the last flow command received."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lastConsumedTimestamp"}),(0,i.jsx)(s.td,{children:"The latest timestamp of all the consumed timestamps of the consumers."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lastAckedTimestamp"}),(0,i.jsx)(s.td,{children:"The latest timestamp of all the acknowledged timestamps of the consumers."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgRateRedeliver"}),(0,i.jsx)(s.td,{children:"The total rate of messages redelivered on this subscription (message per second)."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"chunkedMessageRate"}),(0,i.jsx)(s.td,{children:"The chunked message dispatch rate."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"earliestMsgPublishTimeInBacklog*"}),(0,i.jsx)(s.td,{children:"The publish time of the earliest message in the backlog for the subscription (in milliseconds)."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgBacklogNoDelayed"}),(0,i.jsx)(s.td,{children:"The number of messages in the subscription backlog that do not contain the delay messages."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"blockedSubscriptionOnUnackedMsgs"}),(0,i.jsx)(s.td,{children:"The flag to verify if a subscription is blocked due to reaching the threshold of unacked messages."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgDelayed"}),(0,i.jsx)(s.td,{children:"The number of delayed messages that are currently tracked."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"unackedMessages"}),(0,i.jsx)(s.td,{children:"The number of unacknowledged messages for the subscription, where an unacknowledged message is one that has been sent to a consumer but not yet acknowledged. This field is only meaningful when using a subscription that tracks individual message acknowledgment."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"activeConsumerName"}),(0,i.jsx)(s.td,{children:"The name of the consumer that is active for single active consumer subscriptions (such as failover or exclusive)."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"totalMsgExpired"}),(0,i.jsx)(s.td,{children:"The total messages expired on this subscription."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lastMarkDeleteAdvancedTimestamp"}),(0,i.jsxs)(s.td,{children:["The last ",(0,i.jsx)(s.code,{children:"MarkDelete"})," position advanced timestamp."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"durable"}),(0,i.jsx)(s.td,{children:"Whether the subscription is durable or ephemeral (for example, from a reader)."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"replicated"}),(0,i.jsx)(s.td,{children:"Mark that the subscription state is kept in sync across different regions."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"allowOutOfOrderDelivery"}),(0,i.jsx)(s.td,{children:"Whether out-of-order delivery is allowed on the Key_Shared subscription."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"keySharedMode"}),(0,i.jsxs)(s.td,{children:["The options of the Key_Shared subscription mode include ",(0,i.jsx)(s.code,{children:"AUTO_SPLIT"})," or ",(0,i.jsx)(s.code,{children:"STICKY"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"consumersAfterMarkDeletePosition"}),(0,i.jsxs)(s.td,{children:["Get ",(0,i.jsx)(s.code,{children:"recentJoinedConsumers"})," for the Key_Shared subscription."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"filterProcessedMsgCount"}),(0,i.jsxs)(s.td,{children:["The number of messages processed by ",(0,i.jsx)(s.code,{children:"EntryFilter"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"filterAcceptedMsgCount"}),(0,i.jsxs)(s.td,{children:["The number of messages accepted by ",(0,i.jsx)(s.code,{children:"EntryFilter"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"filterRejectedMsgCount"}),(0,i.jsxs)(s.td,{children:["The number of messages rejected by ",(0,i.jsx)(s.code,{children:"EntryFilter"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"filterRescheduledMsgCount"}),(0,i.jsxs)(s.td,{children:["The number of messages rescheduled by ",(0,i.jsx)(s.code,{children:"EntryFilter"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"bytesOutCounter"}),(0,i.jsx)(s.td,{children:"The total bytes delivered to a consumer."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgOutCounter"}),(0,i.jsx)(s.td,{children:"The total messages delivered to a consumer."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"backlogSize*"}),(0,i.jsx)(s.td,{children:"The size of backlog for this subscription (in bytes)."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"nonContiguousDeletedMessagesRanges"}),(0,i.jsx)(s.td,{children:"The number of non-contiguous deleted messages ranges."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"nonContiguousDeletedMessagesRangesSerializedSize"}),(0,i.jsx)(s.td,{children:"The serialized size of non-contiguous deleted messages ranges."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"#consumer-stats",children:"consumers"})}),(0,i.jsx)(s.td,{children:"The list of connected consumers for this subscription."})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"consumer-stats",children:"Consumer stats"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Stat"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"consumerName"}),(0,i.jsx)(s.td,{children:"Internal identifier for this consumer, generated by the client library."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgRateOut"}),(0,i.jsx)(s.td,{children:"The total rate of messages (message per second) delivered to the consumer."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgThroughputOut"}),(0,i.jsx)(s.td,{children:"The total throughput (byte per second) delivered to the consumer."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"availablePermits"}),(0,i.jsxs)(s.td,{children:["The number of messages that the consumer has space for in the client library's listening queue. ",(0,i.jsx)(s.code,{children:"0"})," means the client library's queue is full and ",(0,i.jsx)(s.code,{children:"receive()"})," isn't called. A non-zero value means this consumer is ready for dispatched messages."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"unackedMessages"}),(0,i.jsx)(s.td,{children:"The number of unacknowledged messages for the consumer, where an unacknowledged message has been sent to the consumer but not yet acknowledged. This field is only meaningful when using a subscription that tracks individual message acknowledgment."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"blockedConsumerOnUnackedMsgs"}),(0,i.jsx)(s.td,{children:"The flag used to verify if the consumer is blocked due to reaching the threshold of the unacknowledged messages."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lastConsumedTimestamp (Deprecated)"}),(0,i.jsx)(s.td,{children:"The timestamp when the consumer reads a message the last time."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lastConsumedTime"}),(0,i.jsx)(s.td,{children:"The time when the consumer reads a message the last time."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lastAckedTimestamp (Deprecated)"}),(0,i.jsx)(s.td,{children:"The timestamp when the consumer acknowledges a message the last time."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lastAckedTime"}),(0,i.jsx)(s.td,{children:"The time when the consumer acknowledges a message the last time."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"address"}),(0,i.jsx)(s.td,{children:"The IP address and source port for the connection of this consumer."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"connectedSince"}),(0,i.jsx)(s.td,{children:"The timestamp when this consumer is created or reconnected last time."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"clientVersion"}),(0,i.jsx)(s.td,{children:"The client library version of this consumer."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"bytesOutCounter"}),(0,i.jsx)(s.td,{children:"The total bytes delivered to a consumer."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgOutCounter"}),(0,i.jsx)(s.td,{children:"The total messages delivered to a consumer."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgRateRedeliver"}),(0,i.jsx)(s.td,{children:"The total rate of messages redelivered by this consumer (message per second)."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"chunkedMessageRate"}),(0,i.jsx)(s.td,{children:"The total rate of chunked messages delivered to this consumer."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"avgMessagesPerEntry"}),(0,i.jsx)(s.td,{children:"The number of average messages per entry for the consumer consumed."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"readPositionWhenJoining"}),(0,i.jsx)(s.td,{children:"The read position of the cursor when the consumer joins."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"keyHashRanges"}),(0,i.jsx)(s.td,{children:"The hash ranges assigned to this consumer if it uses Key_Shared sub mode."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"metadata"}),(0,i.jsx)(s.td,{children:"The metadata (key/value strings) associated with this consumer."})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"replication-stats",children:"Replication stats"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Stat"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgRateIn"}),(0,i.jsx)(s.td,{children:"The total rate (message per second) of messages received from the remote cluster."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgThroughputIn"}),(0,i.jsx)(s.td,{children:"The total throughput (byte per second) received from the remote cluster."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgRateOut"}),(0,i.jsx)(s.td,{children:"The total rate of messages (message per second) delivered to the replication-subscriber."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgThroughputOut"}),(0,i.jsx)(s.td,{children:"The total throughput (byte per second) delivered to the replication-subscriber."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"msgRateExpired"}),(0,i.jsx)(s.td,{children:"The total rate of messages (message per second) expired."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"replicationBacklog"}),(0,i.jsx)(s.td,{children:"The number of messages pending to be replicated to remote cluster."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"connected"}),(0,i.jsx)(s.td,{children:"Whether the outbound replicator is connected."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"replicationDelayInSeconds"}),(0,i.jsx)(s.td,{children:"How long the oldest message has been waiting to be sent through the connection when connected."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"inboundConnection"}),(0,i.jsx)(s.td,{children:"The IP and port of the broker in the remote cluster's publisher connection to this broker."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"inboundConnectedSince"}),(0,i.jsx)(s.td,{children:"The TCP connection used to publish messages to the remote cluster. If no local publishers are connected, this connection is automatically closed after a minute."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"outboundConnection"}),(0,i.jsx)(s.td,{children:"The address of the outbound replication connection."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"outboundConnectedSince"}),(0,i.jsx)(s.td,{children:"The timestamp of establishing an outbound connection."})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"topic-internal-stats",children:"Topic internal stats"}),"\n",(0,i.jsxs)(s.p,{children:["The following table outlines the internal stats inside a topic. For more details about how to get these stats, see ",(0,i.jsx)(s.a,{href:"/docs/3.3.x/admin-api-topics#get-internal-stats",children:"Get stats"}),"."]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Stat"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"entriesAddedCounter"}),(0,i.jsx)(s.td,{children:"Messages published since this broker loads this topic."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"numberOfEntries"}),(0,i.jsx)(s.td,{children:"The total number of messages tracked."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"totalSize"}),(0,i.jsx)(s.td,{children:"The total storage size in bytes of all messages."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"currentLedgerEntries"}),(0,i.jsx)(s.td,{children:"The count of messages written to the ledger that is currently open for writing."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"currentLedgerSize"}),(0,i.jsx)(s.td,{children:"The size in bytes of messages written to the ledger that is currently open for writing."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lastLedgerCreatedTimestamp"}),(0,i.jsx)(s.td,{children:"The time when the last ledger is created."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lastLedgerCreationFailureTimestamp"}),(0,i.jsx)(s.td,{children:"The time when the last ledger is failed."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"waitingCursorsCount"}),(0,i.jsx)(s.td,{children:"The number of cursors that are caught up and waiting for a new message to be published."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"pendingAddEntriesCount"}),(0,i.jsx)(s.td,{children:"The number of messages that have write requests (asynchronous) waiting on completion."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lastConfirmedEntry"}),(0,i.jsxs)(s.td,{children:["The ",(0,i.jsx)(s.code,{children:"ledgerid:entryid"})," of the last message that is written successfully. If the ",(0,i.jsx)(s.code,{children:"entryid"})," is ",(0,i.jsx)(s.code,{children:"-1"}),", then the ledger is opened or is currently opened but has no entries written yet."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"state"}),(0,i.jsxs)(s.td,{children:["The state of the cursor ledger. The state ",(0,i.jsx)(s.code,{children:"LedgerOpened"})," means that a ledger is open for saving published messages."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ledgers"}),(0,i.jsx)(s.td,{children:"The ordered list of all ledgers for this topic that holds its messages."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"cursors"}),(0,i.jsx)(s.td,{children:"The list of all cursors on this topic. Each subscription in the topic stats has a cursor."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"markDeletePosition"}),(0,i.jsx)(s.td,{children:"The ack position: the last message that the subscriber acknowledges. All messages before this position are acknowledged by the subscriber."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"readPosition"}),(0,i.jsx)(s.td,{children:"The latest position of the subscriber for reading messages."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"waitingReadOp"}),(0,i.jsx)(s.td,{children:"This is true when the subscription reads the latest message that is published to the topic and waits for new messages to be published."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"pendingReadOps"}),(0,i.jsx)(s.td,{children:"The count of outstanding read requests to the BookKeepers in progress."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"messagesConsumedCounter"}),(0,i.jsx)(s.td,{children:"The number of messages this cursor has acknowledged since this broker loads this topic."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"cursorLedger"}),(0,i.jsxs)(s.td,{children:["The ledger used to persistently store the current ",(0,i.jsx)(s.code,{children:"markDeletePosition"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"cursorLedgerLastEntry"}),(0,i.jsxs)(s.td,{children:["The last ",(0,i.jsx)(s.code,{children:"entryid"})," used to persistently store the current ",(0,i.jsx)(s.code,{children:"markDeletePosition"}),"."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"individuallyDeletedMessages"}),(0,i.jsxs)(s.td,{children:["The range of messages acknowledged between ",(0,i.jsx)(s.code,{children:"markDeletePosition"})," and the ",(0,i.jsx)(s.code,{children:"readPosition"})," when acknowledges are done out of order."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"lastLedgerSwitchTimestamp"}),(0,i.jsx)(s.td,{children:"The last time when the cursor ledger is rolled over."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"schemaLedgers"}),(0,i.jsx)(s.td,{children:"The ordered list of all ledgers for this topic schema."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"compactedLedger"}),(0,i.jsx)(s.td,{children:"The ledgers holding un-acked messages after topic compaction."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ledgerId"}),(0,i.jsx)(s.td,{children:"The ID of this ledger."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"entries"}),(0,i.jsx)(s.td,{children:"The total number of entries that belong to this ledger."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"size"}),(0,i.jsx)(s.td,{children:"The size of messages written to this ledger (in bytes)."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"offloaded"}),(0,i.jsxs)(s.td,{children:["Whether this ledger is offloaded. The value is ",(0,i.jsx)(s.code,{children:"false"})," for the compacted topic ledger."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"metadata"}),(0,i.jsx)(s.td,{children:"The ledger metadata."})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>n,x:()=>h});var r=t(96540);const i={},d=r.createContext(i);function n(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);