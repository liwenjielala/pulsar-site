"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[68167],{23595:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"io-http-sink","title":"HTTP sink connector","description":"You can download all the Pulsar connectors on download page.","source":"@site/versioned_docs/version-3.3.x/io-http-sink.md","sourceDirName":".","slug":"/io-http-sink","permalink":"/docs/3.3.x/io-http-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/io-http-sink.md","tags":[],"version":"3.3.x","frontMatter":{"id":"io-http-sink","title":"HTTP sink connector","sidebar_label":"HTTP sink connector"}}');var s=t(74848),i=t(28453);const o={id:"io-http-sink",title:"HTTP sink connector",sidebar_label:"HTTP sink connector"},d=void 0,c={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["You can download all the Pulsar connectors on ",(0,s.jsx)(n.a,{href:"pathname:///download",children:"download page"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"The HTTP sink connector pulls the records from Pulsar topics and makes a POST request to a configurable HTTP URL (webhook)."}),"\n",(0,s.jsxs)(n.p,{children:["The body of the HTTP request is the JSON representation of the record value. The header ",(0,s.jsx)(n.code,{children:"Content-Type: application/json"})," is added to the HTTP request."]}),"\n",(0,s.jsx)(n.p,{children:"Some other HTTP headers are added to the HTTP request:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PulsarTopic"}),": the topic of the record"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PulsarKey"}),": the key of the record"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PulsarEventTime"}),": the event time of the record"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PulsarPublishTime"}),": the publish time of the record"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PulsarMessageId"}),": the ID of the message contained in the record"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PulsarProperties-*"}),": each record property is passed with the property name prefixed by ",(0,s.jsx)(n.code,{children:"PulsarProperties-"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"The configuration of the HTTP sink connector has the following properties."}),"\n",(0,s.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"url"})}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://localhost",children:"http://localhost"})}),(0,s.jsx)(n.td,{children:"The URL of the HTTP server"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"headers"})}),(0,s.jsx)(n.td,{children:"Map"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"empty map"}),(0,s.jsx)(n.td,{children:"The list of default headers added to each request"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Before using the HTTP sink connector, you need to create a configuration file through one of the following methods."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"JSON"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n   "configs": {\n      "url": "http://my-endpoint.acme.com/api/ingest",\n      "headers": {\n         "Authentication": "xxxxx"\n      }\n   }\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"YAML"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'configs:\n    url: "http://my-endpoint.acme.com/api/ingest"\n    headers:\n        Authentication: xxxxx\n'})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);