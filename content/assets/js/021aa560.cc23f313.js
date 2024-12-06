"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[78843],{77356:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"tutorials-topic","title":"How to create a topic","description":"Apache Pulsar is a distributed messaging system that supports high performance and low latency. Topics are the primary way to structure data in Apache Pulsar. A Pulsar topic is a unit of storage that organizes messages into a stream. Each message in a topic has an offset, which uniquely identifies the message within the topic.","source":"@site/versioned_docs/version-3.0.x/tutorials-topic.md","sourceDirName":".","slug":"/tutorials-topic","permalink":"/docs/3.0.x/tutorials-topic","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/tutorials-topic.md","tags":[],"version":"3.0.x","frontMatter":{"Id":"tutorials-topic","title":"How to create a topic","sidebar_label":"Create a topic"},"sidebar":"docsSidebar","previous":{"title":"Create a namespace","permalink":"/docs/3.0.x/tutorials-namespace"},"next":{"title":"Produce and consume messages","permalink":"/docs/3.0.x/tutorials-produce-consume"}}');var a=s(74848),n=s(28453);const r={Id:"tutorials-topic",title:"How to create a topic",sidebar_label:"Create a topic"},o=void 0,c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a topic",id:"create-a-topic",level:2},{value:"Related Topics",id:"related-topics",level:4}];function p(e){const t={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Apache Pulsar is a distributed messaging system that supports high performance and low latency. Topics are the primary way to structure data in Apache Pulsar. A Pulsar topic is a unit of storage that organizes messages into a stream. Each message in a topic has an offset, which uniquely identifies the message within the topic."}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/docs/3.0.x/admin-api-topics#publish-to-partitioned-topics",children:"Publish to partitioned topics"})}),"\n",(0,a.jsx)(t.h2,{id:"create-a-topic",children:"Create a topic"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Create ",(0,a.jsx)(t.code,{children:"test-topic"})," with 4 partitions in the namespace ",(0,a.jsx)(t.code,{children:"apache/pulsar"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"bin/pulsar-admin topics create-partitioned-topic apache/pulsar/test-topic -p 4\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["List all the partitioned topics in the namespace ",(0,a.jsx)(t.code,{children:"apache/pulsar"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"bin/pulsar-admin topics list-partitioned-topics apache/pulsar\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"related-topics",children:"Related Topics"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/3.0.x/tutorials-tenant",children:"Set up a tenant"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/3.0.x/tutorials-namespace",children:"Create a namespace"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/docs/3.0.x/tutorials-produce-consume",children:"Produce and consume messages"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var i=s(96540);const a={},n=i.createContext(a);function r(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);