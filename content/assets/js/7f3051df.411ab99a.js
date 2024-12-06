"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[16705],{84920:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"io-flume-sink","title":"Flume sink connector","description":"You can download all the Pulsar connectors on download page.","source":"@site/versioned_docs/version-2.11.x/io-flume-sink.md","sourceDirName":".","slug":"/io-flume-sink","permalink":"/docs/2.11.x/io-flume-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/io-flume-sink.md","tags":[],"version":"2.11.x","frontMatter":{"id":"io-flume-sink","title":"Flume sink connector","sidebar_label":"Flume sink connector"}}');var o=t(74848),s=t(28453);const r={id:"io-flume-sink",title:"Flume sink connector",sidebar_label:"Flume sink connector"},l=void 0,c={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["You can download all the Pulsar connectors on ",(0,o.jsx)(n.a,{href:"pathname:///download",children:"download page"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:"The Flume sink connector pulls messages from Pulsar topics to logs."}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(n.p,{children:"The configuration of the Flume sink connector has the following properties."}),"\n",(0,o.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Required"}),(0,o.jsx)(n.th,{children:"Default"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"name"})}),(0,o.jsx)(n.td,{children:"String"}),(0,o.jsx)(n.td,{children:"true"}),(0,o.jsx)(n.td,{children:'"" (empty string)'}),(0,o.jsx)(n.td,{children:"The name of the agent."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"confFile"})}),(0,o.jsx)(n.td,{children:"String"}),(0,o.jsx)(n.td,{children:"true"}),(0,o.jsx)(n.td,{children:'"" (empty string)'}),(0,o.jsx)(n.td,{children:"The configuration file."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"noReloadConf"})}),(0,o.jsx)(n.td,{children:"Boolean"}),(0,o.jsx)(n.td,{children:"false"}),(0,o.jsx)(n.td,{children:"false"}),(0,o.jsx)(n.td,{children:"Whether to reload configuration file if changed."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"zkConnString"})}),(0,o.jsx)(n.td,{children:"String"}),(0,o.jsx)(n.td,{children:"true"}),(0,o.jsx)(n.td,{children:'"" (empty string)'}),(0,o.jsx)(n.td,{children:"The ZooKeeper connection."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"zkBasePath"})}),(0,o.jsx)(n.td,{children:"String"}),(0,o.jsx)(n.td,{children:"true"}),(0,o.jsx)(n.td,{children:'"" (empty string)'}),(0,o.jsx)(n.td,{children:"The base path in ZooKeeper for agent configuration."})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"Before using the Flume sink connector, you need to create a configuration file through one of the following methods."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["For more information about the ",(0,o.jsx)(n.code,{children:"sink.conf"})," in the example below, see ",(0,o.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/flume/src/main/resources/flume/sink.conf",children:"here"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"JSON"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n   "configs": {\n      "name": "a1",\n      "confFile": "sink.conf",\n      "noReloadConf": "false",\n      "zkConnString": "",\n      "zkBasePath": ""\n   }\n}\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"YAML"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'configs:\n    name: a1\n    confFile: sink.conf\n    noReloadConf: false\n    zkConnString: ""\n    zkBasePath: ""\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);