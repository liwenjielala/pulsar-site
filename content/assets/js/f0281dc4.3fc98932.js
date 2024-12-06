"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[97081],{97283:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});const c=JSON.parse('{"id":"cookbooks-compaction","title":"Topic compaction","description":"Pulsar\'s topic compaction feature enables you to create compacted topics in which older, \\"obscured\\" entries are pruned from the topic, allowing for faster reads through the topic\'s history (which messages are deemed obscured/outdated/irrelevant will depend on your use case).","source":"@site/versioned_docs/version-2.6.2/cookbooks-compaction.md","sourceDirName":".","slug":"/cookbooks-compaction","permalink":"/docs/2.6.2/cookbooks-compaction","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.2/cookbooks-compaction.md","tags":[],"version":"2.6.2","frontMatter":{"id":"cookbooks-compaction","title":"Topic compaction","sidebar_label":"Topic compaction","original_id":"cookbooks-compaction"},"sidebar":"docsSidebar","previous":{"title":"Tiered Storage","permalink":"/docs/2.6.2/cookbooks-tiered-storage"},"next":{"title":"Message deduplication","permalink":"/docs/2.6.2/cookbooks-deduplication"}}');var t=n(74848),s=n(28453);const a={id:"cookbooks-compaction",title:"Topic compaction",sidebar_label:"Topic compaction",original_id:"cookbooks-compaction"},i=void 0,r={},l=[{value:"When should I use compacted topics?",id:"when-should-i-use-compacted-topics",level:2},{value:"Configuring compaction to run automatically",id:"configuring-compaction-to-run-automatically",level:2},{value:"Triggering compaction manually",id:"triggering-compaction-manually",level:2},{value:"When should I trigger compaction?",id:"when-should-i-trigger-compaction",level:4},{value:"Consumer configuration",id:"consumer-configuration",level:2},{value:"Java",id:"java",level:3}];function p(e){const o={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:["Pulsar's ",(0,t.jsx)(o.a,{href:"/docs/2.6.2/concepts-topic-compaction#compaction",children:"topic compaction"})," feature enables you to create ",(0,t.jsx)(o.strong,{children:"compacted"}),' topics in which older, "obscured" entries are pruned from the topic, allowing for faster reads through the topic\'s history (which messages are deemed obscured/outdated/irrelevant will depend on your use case).']}),"\n",(0,t.jsx)(o.p,{children:"To use compaction:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["You need to give messages keys, as topic compaction in Pulsar takes place on a ",(0,t.jsx)(o.em,{children:"per-key basis"})," (i.e. messages are compacted based on their key). For a stock ticker use case, the stock symbol---e.g. ",(0,t.jsx)(o.code,{children:"AAPL"})," or ",(0,t.jsx)(o.code,{children:"GOOG"}),"---could serve as the key (more on this ",(0,t.jsx)(o.a,{href:"#when-should-i-use-compacted-topics",children:"below"}),"). Messages without keys will be left alone by the compaction process."]}),"\n",(0,t.jsxs)(o.li,{children:["Compaction can be configured to run ",(0,t.jsx)(o.a,{href:"#configuring-compaction-to-run-automatically",children:"automatically"}),", or you can manually ",(0,t.jsx)(o.a,{href:"#trigger",children:"trigger"})," compaction using the Pulsar administrative API."]}),"\n",(0,t.jsxs)(o.li,{children:["Your consumers must be ",(0,t.jsx)(o.a,{href:"#consumer-configuration",children:"configured"})," to read from compacted topics (",(0,t.jsx)(o.a,{href:"#java",children:"Java consumers"}),", for example, have a ",(0,t.jsx)(o.code,{children:"readCompacted"})," setting that must be set to ",(0,t.jsx)(o.code,{children:"true"}),"). If this configuration is not set, consumers will still be able to read from the non-compacted topic."]}),"\n"]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"Compaction only works on messages that have keys (as in the stock ticker example the stock symbol serves as the key for each message). Keys can thus be thought of as the axis along which compaction is applied. Messages that don't have keys are simply ignored by compaction."}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"when-should-i-use-compacted-topics",children:"When should I use compacted topics?"}),"\n",(0,t.jsxs)(o.p,{children:["The classic example of a topic that could benefit from compaction would be a stock ticker topic through which consumers can access up-to-date values for specific stocks. Imagine a scenario in which messages carrying stock value data use the stock symbol as the key (",(0,t.jsx)(o.code,{children:"GOOG"}),", ",(0,t.jsx)(o.code,{children:"AAPL"}),", ",(0,t.jsx)(o.code,{children:"TWTR"}),", etc.). Compacting this topic would give consumers on the topic two options:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:'They can read from the "original," non-compacted topic in case they need access to "historical" values, i.e. the entirety of the topic\'s messages.'}),"\n",(0,t.jsx)(o.li,{children:"They can read from the compacted topic if they only want to see the most up-to-date messages."}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["Thus, if you're using a Pulsar topic called ",(0,t.jsx)(o.code,{children:"stock-values"}),", some consumers could have access to all messages in the topic (perhaps because they're performing some kind of number crunching of all values in the last hour) while the consumers used to power the real-time stock ticker only see the compacted topic (and thus aren't forced to process outdated messages). Which variant of the topic any given consumer pulls messages from is determined by the consumer's ",(0,t.jsx)(o.a,{href:"#consumer-configuration",children:"configuration"}),"."]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"One of the benefits of compaction in Pulsar is that you aren't forced to choose between compacted and non-compacted topics, as the compaction process leaves the original topic as-is and essentially adds an alternate topic. In other words, you can run compaction on a topic and consumers that need access to the non-compacted version of the topic will not be adversely affected."}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"configuring-compaction-to-run-automatically",children:"Configuring compaction to run automatically"}),"\n",(0,t.jsx)(o.p,{children:"Tenant administrators can configure a policy for compaction at the namespace level. The policy specifies how large the topic backlog can grow before compaction is triggered."}),"\n",(0,t.jsx)(o.p,{children:"For example, to trigger compaction when the backlog reaches 100MB:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"\n$ bin/pulsar-admin namespaces set-compaction-threshold \\\n  --threshold 100M my-tenant/my-namespace\n\n"})}),"\n",(0,t.jsx)(o.p,{children:"Configuring the compaction threshold on a namespace will apply to all topics within that namespace."}),"\n",(0,t.jsx)(o.h2,{id:"triggering-compaction-manually",children:"Triggering compaction manually"}),"\n",(0,t.jsxs)(o.p,{children:["In order to run compaction on a topic, you need to use the ",(0,t.jsx)(o.a,{href:"/docs/2.6.2/reference-pulsar-admin#topics-compact",children:(0,t.jsx)(o.code,{children:"topics compact"})})," command for the ",(0,t.jsx)(o.a,{href:"/docs/2.6.2/reference-pulsar-admin",children:(0,t.jsx)(o.code,{children:"pulsar-admin"})})," CLI tool. Here's an example:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"\n$ bin/pulsar-admin topics compact \\\n  persistent://my-tenant/my-namespace/my-topic\n\n"})}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"pulsar-admin"})," tool runs compaction via the Pulsar ",(0,t.jsx)(o.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API. To run compaction in its own dedicated process, i.e. ",(0,t.jsx)(o.em,{children:"not"})," through the REST API, you can use the ",(0,t.jsx)(o.a,{href:"/docs/2.6.2/reference-cli-tools#pulsar-compact-topic",children:(0,t.jsx)(o.code,{children:"pulsar compact-topic"})})," command. Here's an example:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"\n$ bin/pulsar compact-topic \\\n  --topic persistent://my-tenant-namespace/my-topic\n\n"})}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsxs)(o.p,{children:["Running compaction in its own process is recommended when you want to avoid interfering with the broker's performance. Broker performance should only be affected, however, when running compaction on topics with a large keyspace (i.e when there are many keys on the topic). The first phase of the compaction process keeps a copy of each key in the topic, which can create memory pressure as the number of keys grows. Using the ",(0,t.jsx)(o.code,{children:"pulsar-admin topics compact"})," command to run compaction through the REST API should present no issues in the overwhelming majority of cases; using ",(0,t.jsx)(o.code,{children:"pulsar compact-topic"})," should correspondingly be considered an edge case."]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"pulsar compact-topic"})," command communicates with ",(0,t.jsx)(o.a,{href:"https://zookeeper.apache.org",children:"ZooKeeper"})," directly. In order to establish communication with ZooKeeper, though, the ",(0,t.jsx)(o.code,{children:"pulsar"})," CLI tool will need to have a valid ",(0,t.jsx)(o.a,{href:"/docs/2.6.2/reference-configuration#broker",children:"broker configuration"}),". You can either supply a proper configuration in ",(0,t.jsx)(o.code,{children:"conf/broker.conf"})," or specify a non-default location for the configuration:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"\n$ bin/pulsar compact-topic \\\n  --broker-conf /path/to/broker.conf \\\n  --topic persistent://my-tenant/my-namespace/my-topic\n\n# If the configuration is in conf/broker.conf\n$ bin/pulsar compact-topic \\\n  --topic persistent://my-tenant/my-namespace/my-topic\n\n"})}),"\n",(0,t.jsx)(o.h4,{id:"when-should-i-trigger-compaction",children:"When should I trigger compaction?"}),"\n",(0,t.jsxs)(o.p,{children:["How often you ",(0,t.jsx)(o.a,{href:"#triggering-compaction-manually",children:"trigger compaction"})," will vary widely based on the use case. If you want a compacted topic to be extremely speedy on read, then you should run compaction fairly frequently."]}),"\n",(0,t.jsx)(o.h2,{id:"consumer-configuration",children:"Consumer configuration"}),"\n",(0,t.jsx)(o.p,{children:"Pulsar consumers and readers need to be configured to read from compacted topics. The sections below show you how to enable compacted topic reads for Pulsar's language clients."}),"\n",(0,t.jsx)(o.h3,{id:"java",children:"Java"}),"\n",(0,t.jsxs)(o.p,{children:["In order to read from a compacted topic using a Java consumer, the ",(0,t.jsx)(o.code,{children:"readCompacted"})," parameter must be set to ",(0,t.jsx)(o.code,{children:"true"}),". Here's an example consumer for a compacted topic:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-java",children:'\nConsumer<byte[]> compactedTopicConsumer = client.newConsumer()\n        .topic("some-compacted-topic")\n        .readCompacted(true)\n        .subscribe();\n\n'})}),"\n",(0,t.jsxs)(o.p,{children:["As mentioned above, topic compaction in Pulsar works on a ",(0,t.jsx)(o.em,{children:"per-key basis"}),". That means that messages that you produce on compacted topics need to have keys (the content of the key will depend on your use case). Messages that don't have keys will be ignored by the compaction process. Here's an example Pulsar message with a key:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-java",children:'\nimport org.apache.pulsar.client.api.Message;\nimport org.apache.pulsar.client.api.MessageBuilder;\n\nMessage<byte[]> msg = MessageBuilder.create()\n        .setContent(someByteArray)\n        .setKey("some-key")\n        .build();\n\n'})}),"\n",(0,t.jsx)(o.p,{children:"The example below shows a message with a key being produced on a compacted Pulsar topic:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-java",children:'\nimport org.apache.pulsar.client.api.Message;\nimport org.apache.pulsar.client.api.MessageBuilder;\nimport org.apache.pulsar.client.api.Producer;\nimport org.apache.pulsar.client.api.PulsarClient;\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .build();\n\nProducer<byte[]> compactedTopicProducer = client.newProducer()\n        .topic("some-compacted-topic")\n        .create();\n\nMessage<byte[]> msg = MessageBuilder.create()\n        .setContent(someByteArray)\n        .setKey("some-key")\n        .build();\n\ncompactedTopicProducer.send(msg);\n\n'})})]})}function d(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>i});var c=n(96540);const t={},s=c.createContext(t);function a(e){const o=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),c.createElement(s.Provider,{value:o},e.children)}}}]);