"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[96420],{69524:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"io-flume-sink","title":"Flume sink connector","description":"The Flume sink connector pulls messages from Pulsar topics to logs.","source":"@site/versioned_docs/version-2.7.3/io-flume-sink.md","sourceDirName":".","slug":"/io-flume-sink","permalink":"/docs/2.7.3/io-flume-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.3/io-flume-sink.md","tags":[],"version":"2.7.3","frontMatter":{"id":"io-flume-sink","title":"Flume sink connector","sidebar_label":"Flume sink connector","original_id":"io-flume-sink"}}');var s=i(74848),r=i(28453);const o={id:"io-flume-sink",title:"Flume sink connector",sidebar_label:"Flume sink connector",original_id:"io-flume-sink"},l=void 0,c={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The Flume sink connector pulls messages from Pulsar topics to logs."}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"The configuration of the Flume sink connector has the following properties."}),"\n",(0,s.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"name"})}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:'"" (empty string)'}),(0,s.jsx)(n.td,{children:"The name of the agent."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"confFile"})}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:'"" (empty string)'}),(0,s.jsx)(n.td,{children:"The configuration file."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"noReloadConf"})}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"Whether to reload configuration file if changed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"zkConnString"})}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:'"" (empty string)'}),(0,s.jsx)(n.td,{children:"The ZooKeeper connection."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"zkBasePath"})}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:'"" (empty string)'}),(0,s.jsx)(n.td,{children:"The base path in ZooKeeper for agent configuration."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Before using the Flume sink connector, you need to create a configuration file through one of the following methods."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["For more information about the ",(0,s.jsx)(n.code,{children:"sink.conf"})," in the example below, see ",(0,s.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/flume/src/main/resources/flume/sink.conf",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"JSON"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'\n{\n    "name": "a1",\n    "confFile": "sink.conf",\n    "noReloadConf": "false",\n    "zkConnString": "",\n    "zkBasePath": ""\n}\n\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"YAML"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'\nconfigs:\n    name: a1\n    confFile: sink.conf\n    noReloadConf: false\n    zkConnString: ""\n    zkBasePath: ""\n\n'})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);