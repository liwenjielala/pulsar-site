"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[79687],{62556:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"transactions-guarantee","title":"Transactions Guarantee","description":"Pulsar transactions support the following guarantee.","source":"@site/versioned_docs/version-3.0.x/transaction-guarantee.md","sourceDirName":".","slug":"/transactions-guarantee","permalink":"/docs/3.0.x/transactions-guarantee","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/transaction-guarantee.md","tags":[],"version":"3.0.x","frontMatter":{"id":"transactions-guarantee","title":"Transactions Guarantee","sidebar_label":"Transactions Guarantee"}}');var s=t(74848),i=t(28453);const o={id:"transactions-guarantee",title:"Transactions Guarantee",sidebar_label:"Transactions Guarantee"},r=void 0,c={},l=[{value:"Atomic multi-partition writes and multi-subscription acknowledges",id:"atomic-multi-partition-writes-and-multi-subscription-acknowledges",level:2},{value:"Read transactional message",id:"read-transactional-message",level:2},{value:"Acknowledge transactional message",id:"acknowledge-transactional-message",level:2}];function d(e){const n={h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Pulsar transactions support the following guarantee."}),"\n",(0,s.jsx)(n.h2,{id:"atomic-multi-partition-writes-and-multi-subscription-acknowledges",children:"Atomic multi-partition writes and multi-subscription acknowledges"}),"\n",(0,s.jsx)(n.p,{children:"Transactions enable atomic writes to multiple topics and partitions. A batch of messages in a transaction can be received from, produced to, and acknowledged by many partitions. All the operations involved in a transaction succeed or fail as a single unit."}),"\n",(0,s.jsx)(n.h2,{id:"read-transactional-message",children:"Read transactional message"}),"\n",(0,s.jsx)(n.p,{children:"All the messages in a transaction are available only for consumers until the transaction is committed."}),"\n",(0,s.jsx)(n.h2,{id:"acknowledge-transactional-message",children:"Acknowledge transactional message"}),"\n",(0,s.jsx)(n.p,{children:"A message is acknowledged successfully only once by a consumer under the subscription when acknowledging the message with the transaction ID."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var a=t(96540);const s={},i=a.createContext(s);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);