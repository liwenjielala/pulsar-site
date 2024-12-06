"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[28061],{26110:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"concepts-tiered-storage","title":"Tiered Storage","description":"Pulsar\'s segment oriented architecture allows for topic backlogs to grow very large, effectively without limit. However, this can become expensive over time.","source":"@site/versioned_docs/version-2.4.0/concepts-tiered-storage.md","sourceDirName":".","slug":"/concepts-tiered-storage","permalink":"/docs/2.4.0/concepts-tiered-storage","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.0/concepts-tiered-storage.md","tags":[],"version":"2.4.0","frontMatter":{"id":"concepts-tiered-storage","title":"Tiered Storage","sidebar_label":"Tiered Storage","original_id":"concepts-tiered-storage"},"sidebar":"docsSidebar","previous":{"title":"Topic Compaction","permalink":"/docs/2.4.0/concepts-topic-compaction"},"next":{"title":"Schema Registry","permalink":"/docs/2.4.0/concepts-schema-registry"}}');var s=o(74848),i=o(28453);const a={id:"concepts-tiered-storage",title:"Tiered Storage",sidebar_label:"Tiered Storage",original_id:"concepts-tiered-storage"},n=void 0,c={},d=[];function l(e){const t={a:"a",blockquote:"blockquote",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Pulsar's segment oriented architecture allows for topic backlogs to grow very large, effectively without limit. However, this can become expensive over time."}),"\n",(0,s.jsx)(t.p,{children:"One way to alleviate this cost is to use Tiered Storage. With tiered storage, older messages in the backlog can be moved from bookkeeper to a cheaper storage mechanism, while still allowing clients to access the backlog as if nothing had changed."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Tiered Storage",src:o(70976).A+"",width:"1110",height:"697"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Data written to bookkeeper is replicated to 3 physical machines by default. However, once a segment is sealed in bookkeeper is becomes immutable and can be copied to long term storage. Long term storage can achieve cost savings by using mechanisms such as ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction",children:"Reed-Solomon error correction"})," to require fewer physical copies of data."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Pulsar currently supports S3 and Google Cloud Storage (GCS) for ",(0,s.jsx)(t.a,{href:"https://pulsar.apache.org/docs/en/cookbooks-tiered-storage/",children:"long term store"}),". Offloading to long term storage triggered via a Rest API or command line interface. The user passes in the amount of topic data they wish to retain on bookkeeper, and the broker will copy the backlog data to long term storage. The original data will then be deleted from bookkeeper after a configured delay (4 hours by default)."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["For a guide for setting up tiered storage, see the ",(0,s.jsx)(t.a,{href:"/docs/2.4.0/cookbooks-tiered-storage",children:"Tiered storage cookbook"}),"."]}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},70976:(e,t,o)=>{o.d(t,{A:()=>r});const r=o.p+"assets/images/pulsar-tiered-storage-72d8b53762992cfeaa58ae3b48dd2522.png"},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>n});var r=o(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);