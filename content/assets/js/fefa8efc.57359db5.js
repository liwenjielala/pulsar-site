"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[57147],{40147:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>o,frontMatter:()=>c,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"versioned/client-cpp-2.8.4","title":"Client CPP 2.8.4","description":"- improve Expose getLastMessageId in the Reader API 11723","source":"@site/release-notes/versioned/client-cpp-2.8.4.md","sourceDirName":"versioned","slug":"/versioned/client-cpp-2.8.4","permalink":"/release-notes/versioned/client-cpp-2.8.4","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-cpp-2.8.4.md","tags":[],"version":"current","frontMatter":{"id":"client-cpp-2.8.4","title":"Client CPP 2.8.4","sidebar_label":"Client CPP 2.8.4"}}');var s=t(74848),l=t(28453);const c={id:"client-cpp-2.8.4",title:"Client CPP 2.8.4",sidebar_label:"Client CPP 2.8.4"},r=void 0,a={},p=[];function h(e){const i={a:"a",code:"code",li:"li",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["[improve][cpp] Expose getLastMessageId in the Reader API ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/11723",children:"11723"})]}),"\n",(0,s.jsxs)(i.li,{children:["[fix][cpp] Fix hasMessageAvailable returns wrong value for last message ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/13883",children:"13883"})]}),"\n",(0,s.jsxs)(i.li,{children:["[fix][cpp] Fix thread safety issue for multi topic consumer  ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/14380",children:"14380"})]}),"\n",(0,s.jsxs)(i.li,{children:["[fix][cpp] Fix wrong unit of Access Token Response's ",(0,s.jsx)(i.code,{children:"expires_in"})," field ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/14554",children:"14554"})]}),"\n",(0,s.jsxs)(i.li,{children:["[fix][cpp] Handle exception in creating socket when fd limit is reached ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/14587",children:"14587"})]}),"\n",(0,s.jsxs)(i.li,{children:["[cleanup][cpp] Add braces around initialization of subobject ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/14735",children:"14735"})]}),"\n",(0,s.jsxs)(i.li,{children:["[fix][cpp] Fix producer is never destructed until client is closed ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/14797",children:"14797"})]}),"\n",(0,s.jsxs)(i.li,{children:["[fix][cpp] Fix flaky tests about reference count ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/14854",children:"14854"})]}),"\n",(0,s.jsxs)(i.li,{children:["[fix][cpp] Fix segmentation fault when creating socket failed ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/14834",children:"14834"})]}),"\n",(0,s.jsxs)(i.li,{children:["[fix][cpp] Fix the race condition of connect timeout task ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/14823",children:"14823"})]}),"\n",(0,s.jsxs)(i.li,{children:["[fix][cpp] Fix send callback might not be invoked in key-based batching ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/14898",children:"14898"})]}),"\n",(0,s.jsxs)(i.li,{children:["[fix][cpp] Fix connection is not closed when broker closes the connection to proxy ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/15009",children:"15009"})]}),"\n",(0,s.jsxs)(i.li,{children:["[fix][cpp] Fix single message metadata not set correctly ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/15072",children:"15072"})]}),"\n",(0,s.jsxs)(i.li,{children:["[fix][cpp] Fix UnknownError might be returned for a partitioned producer ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/15161",children:"15161"})]}),"\n",(0,s.jsxs)(i.li,{children:["[improve][cpp] Remove the flaky and meaningless tests ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/15271",children:"15271"})]}),"\n",(0,s.jsxs)(i.li,{children:["[improve][cpp] Wait until event loop terminates when closing the Client ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/15316",children:"15316"})]}),"\n",(0,s.jsxs)(i.li,{children:["[fix][cpp] Avoid race condition causing double callback on close ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/15508",children:"15508"})]}),"\n",(0,s.jsxs)(i.li,{children:["[fix][cpp] Generate correct well-known OpenID configuration URL ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/15928",children:"15928"})]}),"\n",(0,s.jsxs)(i.li,{children:["[fix][cpp] Rename function name: pulsar_producer_configuration_set_crypto_failure_action ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/16031",children:"16031"})]}),"\n",(0,s.jsxs)(i.li,{children:["[cleanup][cpp] Clean up C++ client curl configuration ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/16064",children:"16064"})]}),"\n",(0,s.jsxs)(i.li,{children:["[fix][cpp] Fix the close of Client might stuck or return a wrong result ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/16285",children:"16285"})]}),"\n",(0,s.jsxs)(i.li,{children:["[improve][cpp] Fix flaky C++ ClientTest.testWrongListener ",(0,s.jsx)(i.a,{href:"https://github.com/apache/pulsar/pull/16510",children:"16510"})]}),"\n"]})}function o(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>c,x:()=>r});var n=t(96540);const s={},l=n.createContext(s);function c(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);