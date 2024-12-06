"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[69719],{21717:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"io-flume-source","title":"Flume source connector","description":"The Flume source connector pulls messages from logs to Pulsar topics.","source":"@site/versioned_docs/version-2.7.2/io-flume-source.md","sourceDirName":".","slug":"/io-flume-source","permalink":"/docs/2.7.2/io-flume-source","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.2/io-flume-source.md","tags":[],"version":"2.7.2","frontMatter":{"id":"io-flume-source","title":"Flume source connector","sidebar_label":"Flume source connector","original_id":"io-flume-source"}}');var t=r(74848),s=r(28453);const i={id:"io-flume-source",title:"Flume source connector",sidebar_label:"Flume source connector",original_id:"io-flume-source"},c=void 0,l={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The Flume source connector pulls messages from logs to Pulsar topics."}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"The configuration of the Flume source connector has the following properties."}),"\n",(0,t.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"name"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:'"" (empty string)'}),(0,t.jsx)(n.td,{children:"The name of the agent."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"confFile"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:'"" (empty string)'}),(0,t.jsx)(n.td,{children:"The configuration file."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"noReloadConf"})}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"Whether to reload configuration file if changed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"zkConnString"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:'"" (empty string)'}),(0,t.jsx)(n.td,{children:"The ZooKeeper connection."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"zkBasePath"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:'"" (empty string)'}),(0,t.jsx)(n.td,{children:"The base path in ZooKeeper for agent configuration."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Before using the Flume source connector, you need to create a configuration file through one of the following methods."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["For more information about the ",(0,t.jsx)(n.code,{children:"source.conf"})," in the example below, see ",(0,t.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/flume/src/main/resources/flume/source.conf",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"JSON"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'\n{\n    "name": "a1",\n    "confFile": "source.conf",\n    "noReloadConf": "false",\n    "zkConnString": "",\n    "zkBasePath": ""\n}\n\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"YAML"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'\nconfigs:\n    name: a1\n    confFile: source.conf\n    noReloadConf: false\n    zkConnString: ""\n    zkBasePath: ""\n\n'})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var o=r(96540);const t={},s=o.createContext(t);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);