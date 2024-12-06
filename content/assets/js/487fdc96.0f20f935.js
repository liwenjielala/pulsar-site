"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[39326],{73961:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"tutorials-produce-consume","title":"Produce and consume messages","description":"In this tutorial, we will:","source":"@site/versioned_docs/version-2.9.x/tutorials-produce-consume.md","sourceDirName":".","slug":"/tutorials-produce-consume","permalink":"/docs/2.9.x/tutorials-produce-consume","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.9.x/tutorials-produce-consume.md","tags":[],"version":"2.9.x","frontMatter":{"Id":"tutorials-produce-consume","title":"Produce and consume messages","sidebar_label":"Produce and consume messages"},"sidebar":"docsSidebar","previous":{"title":"Create a topic","permalink":"/docs/2.9.x/tutorials-topic"},"next":{"title":"Topic compaction","permalink":"/docs/2.9.x/cookbooks-compaction"}}');var c=n(74848),a=n(28453);const l={Id:"tutorials-produce-consume",title:"Produce and consume messages",sidebar_label:"Produce and consume messages"},t=void 0,o={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Produce and consume messages",id:"produce-and-consume-messages",level:2},{value:"Related Topics",id:"related-topics",level:4}];function d(e){const s={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.p,{children:"In this tutorial, we will:"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"Configure the Pulsar client"}),"\n",(0,c.jsx)(s.li,{children:"Create a subscription"}),"\n",(0,c.jsx)(s.li,{children:"Create a producer"}),"\n",(0,c.jsx)(s.li,{children:"Send test messages"}),"\n",(0,c.jsx)(s.li,{children:"Verify the results"}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/2.9.x/tutorials-tenant",children:"Set up a tenant"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/2.9.x/tutorials-namespace",children:"Create a namespace"})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/2.9.x/tutorials-topic",children:"Create a topic"})}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"produce-and-consume-messages",children:"Produce and consume messages"}),"\n",(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["In the ",(0,c.jsx)(s.code,{children:"${PULSAR_HOME}/conf/client.conf"})," file, replace ",(0,c.jsx)(s.code,{children:"webServiceUrl"})," and ",(0,c.jsx)(s.code,{children:"brokerServiceUrl"})," with your service URL."]}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsxs)(s.p,{children:["Create a subscription to consume messages from ",(0,c.jsx)(s.code,{children:"apache/pulsar/test-topic"}),"."]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"bin/pulsar-client consume -s sub apache/pulsar/test-topic  -n 0\n"})}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"In a new terminal, create a producer and send 10 messages to test-topic."}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:'bin/pulsar-client produce apache/pulsar/test-topic  -m "---------hello apache pulsar-------" -n 10\n'})}),"\n"]}),"\n",(0,c.jsxs)(s.li,{children:["\n",(0,c.jsx)(s.p,{children:"Verify the results."}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{children:"----- got message -----\r\n---------hello apache pulsar-------\r\n----- got message -----\r\n---------hello apache pulsar-------\r\n----- got message -----\r\n---------hello apache pulsar-------\r\n----- got message -----\r\n---------hello apache pulsar-------\r\n----- got message -----\r\n---------hello apache pulsar-------\r\n----- got message -----\r\n---------hello apache pulsar-------\r\n----- got message -----\r\n---------hello apache pulsar-------\r\n----- got message -----\r\n---------hello apache pulsar-------\r\n----- got message -----\r\n---------hello apache pulsar-------\r\n----- got message -----\r\n---------hello apache pulsar-------\r\n\r\nOutput from the producer side shows the messages have been produced successfully:\r\n18:15:15.489 [main] INFO  org.apache.pulsar.client.cli.PulsarClientTool - 10 messages successfully produced.\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(s.h4,{id:"related-topics",children:"Related Topics"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/docs/2.9.x/admin-api-clusters",children:"Manage clusters"})}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>t});var r=n(96540);const c={},a=r.createContext(c);function l(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);