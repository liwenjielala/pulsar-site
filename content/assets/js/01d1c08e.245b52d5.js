"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[13667],{45458:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"concepts-topic-compaction","title":"Topic Compaction","description":"Pulsar was built with highly scalable persistent storage of message data as a primary objective. Pulsar topics enable you to persistently store as many unacknowledged messages as you need while preserving message ordering. By default, Pulsar stores all unacknowledged/unprocessed messages produced on a topic. Accumulating many unacknowledged messages on a topic is necessary for many Pulsar use cases but it can also be very time intensive for Pulsar consumers to \\"rewind\\" through the entire log of messages.","source":"@site/versioned_docs/version-2.9.x/concepts-topic-compaction.md","sourceDirName":".","slug":"/concepts-topic-compaction","permalink":"/docs/2.9.x/concepts-topic-compaction","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.9.x/concepts-topic-compaction.md","tags":[],"version":"2.9.x","frontMatter":{"id":"concepts-topic-compaction","title":"Topic Compaction","sidebar_label":"Topic Compaction","original_id":"concepts-topic-compaction"},"sidebar":"docsSidebar","previous":{"title":"Authentication and Authorization","permalink":"/docs/2.9.x/concepts-authentication"},"next":{"title":"Message throttling","permalink":"/docs/2.9.x/concepts-throttling"}}');var c=t(74848),n=t(28453);const a={id:"concepts-topic-compaction",title:"Topic Compaction",sidebar_label:"Topic Compaction",original_id:"concepts-topic-compaction"},i=void 0,r={},l=[{value:"Topic compaction example: the stock ticker",id:"topic-compaction-example-the-stock-ticker",level:4},{value:"How topic compaction works",id:"how-topic-compaction-works",level:2}];function h(e){const o={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(o.p,{children:["Pulsar was built with highly scalable ",(0,c.jsx)(o.a,{href:"/docs/2.9.x/concepts-architecture-overview#persistent-storage",children:"persistent storage"})," of message data as a primary objective. Pulsar topics enable you to persistently store as many unacknowledged messages as you need while preserving message ordering. By default, Pulsar stores ",(0,c.jsx)(o.em,{children:"all"}),' unacknowledged/unprocessed messages produced on a topic. Accumulating many unacknowledged messages on a topic is necessary for many Pulsar use cases but it can also be very time intensive for Pulsar consumers to "rewind" through the entire log of messages.']}),"\n",(0,c.jsxs)(o.blockquote,{children:["\n",(0,c.jsxs)(o.p,{children:["For a more practical guide to topic compaction, see the ",(0,c.jsx)(o.a,{href:"/docs/2.9.x/cookbooks-compaction",children:"Topic compaction cookbook"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(o.p,{children:['For some use cases consumers don\'t need a complete "image" of the topic log. They may only need a few values to construct a more "shallow" image of the log, perhaps even just the most recent value. For these kinds of use cases Pulsar offers ',(0,c.jsx)(o.strong,{children:"topic compaction"}),". When you run compaction on a topic, Pulsar goes through a topic's backlog and removes messages that are ",(0,c.jsx)(o.em,{children:"obscured"})," by later messages, i.e. it goes through the topic on a per-key basis and leaves only the most recent message associated with that key."]}),"\n",(0,c.jsx)(o.p,{children:"Pulsar's topic compaction feature:"}),"\n",(0,c.jsxs)(o.ul,{children:["\n",(0,c.jsx)(o.li,{children:'Allows for faster "rewind" through topic logs'}),"\n",(0,c.jsxs)(o.li,{children:["Applies only to ",(0,c.jsx)(o.a,{href:"/docs/2.9.x/concepts-architecture-overview#persistent-storage",children:"persistent topics"})]}),"\n",(0,c.jsxs)(o.li,{children:["Triggered automatically when the backlog reaches a certain size or can be triggered manually via the command line. See the ",(0,c.jsx)(o.a,{href:"/docs/2.9.x/cookbooks-compaction",children:"Topic compaction cookbook"})]}),"\n",(0,c.jsxs)(o.li,{children:["Is conceptually and operationally distinct from ",(0,c.jsx)(o.a,{href:"/docs/2.9.x/concepts-messaging#message-retention-and-expiry",children:"retention and expiry"}),". Topic compaction ",(0,c.jsx)(o.em,{children:"does"}),", however, respect retention. If retention has removed a message from the message backlog of a topic, the message will also not be readable from the compacted topic ledger."]}),"\n"]}),"\n",(0,c.jsxs)(o.blockquote,{children:["\n",(0,c.jsx)(o.h4,{id:"topic-compaction-example-the-stock-ticker",children:"Topic compaction example: the stock ticker"}),"\n",(0,c.jsxs)(o.p,{children:["An example use case for a compacted Pulsar topic would be a stock ticker topic. On a stock ticker topic, each message bears a timestamped dollar value for stocks for purchase (with the message key holding the stock symbol, e.g. ",(0,c.jsx)(o.code,{children:"AAPL"})," or ",(0,c.jsx)(o.code,{children:"GOOG"}),"). With a stock ticker you may care only about the most recent value(s) of the stock and have no interest in historical data (i.e. you don't need to construct a complete image of the topic's sequence of messages per key). Compaction would be highly beneficial in this case because it would keep consumers from needing to rewind through obscured messages."]}),"\n"]}),"\n",(0,c.jsx)(o.h2,{id:"how-topic-compaction-works",children:"How topic compaction works"}),"\n",(0,c.jsxs)(o.p,{children:["When topic compaction is triggered ",(0,c.jsx)(o.a,{href:"/docs/2.9.x/cookbooks-compaction",children:"via the CLI"}),", Pulsar will iterate over the entire topic from beginning to end. For each key that it encounters the compaction routine will keep a record of the latest occurrence of that key."]}),"\n",(0,c.jsxs)(o.p,{children:["After that, the broker will create a new ",(0,c.jsx)(o.a,{href:"/docs/2.9.x/concepts-architecture-overview#ledgers",children:"BookKeeper ledger"})," and make a second iteration through each message on the topic. For each message, if the key matches the latest occurrence of that key, then the key's data payload, message ID, and metadata will be written to the newly created ledger. If the key doesn't match the latest then the message will be skipped and left alone. If any given message has an empty payload, it will be skipped and considered deleted (akin to the concept of ",(0,c.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/Tombstone_(data_store)",children:"tombstones"})," in key-value databases). At the end of this second iteration through the topic, the newly created BookKeeper ledger is closed and two things are written to the topic's metadata: the ID of the BookKeeper ledger and the message ID of the last compacted message (this is known as the ",(0,c.jsx)(o.strong,{children:"compaction horizon"})," of the topic). Once this metadata is written compaction is complete."]}),"\n",(0,c.jsxs)(o.p,{children:["After the initial compaction operation, the Pulsar ",(0,c.jsx)(o.a,{href:"/docs/2.9.x/reference-terminology#broker",children:"broker"})," that owns the topic is notified whenever any future changes are made to the compaction horizon and compacted backlog. When such changes occur:"]}),"\n",(0,c.jsxs)(o.ul,{children:["\n",(0,c.jsxs)(o.li,{children:["Clients (consumers and readers) that have read compacted enabled will attempt to read messages from a topic and either:","\n",(0,c.jsxs)(o.ul,{children:["\n",(0,c.jsx)(o.li,{children:"Read from the topic like normal (if the message ID is greater than or equal to the compaction horizon) or"}),"\n",(0,c.jsx)(o.li,{children:"Read beginning at the compaction horizon (if the message ID is lower than the compaction horizon)"}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,c.jsx)(o,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>i});var s=t(96540);const c={},n=s.createContext(c);function a(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);