"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[24790],{29592:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"io-redis-sink","title":"Redis sink connector","description":"The  Redis sink connector pulls messages from Pulsar topics","source":"@site/versioned_docs/version-2.6.3/io-redis-sink.md","sourceDirName":".","slug":"/io-redis-sink","permalink":"/docs/2.6.3/io-redis-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.3/io-redis-sink.md","tags":[],"version":"2.6.3","frontMatter":{"id":"io-redis-sink","title":"Redis sink connector","sidebar_label":"Redis sink connector","original_id":"io-redis-sink"}}');var t=s(74848),d=s(28453);const r={id:"io-redis-sink",title:"Redis sink connector",sidebar_label:"Redis sink connector",original_id:"io-redis-sink"},c=void 0,l={},o=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The  Redis sink connector pulls messages from Pulsar topics\nand persists the messages to a Redis database."}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"The configuration of the Redis sink connector has the following properties."}),"\n",(0,t.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"redisHosts"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:'" " (empty string)'}),(0,t.jsx)(n.td,{children:"A comma-separated list of Redis hosts to connect to."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"redisPassword"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:'" " (empty string)'}),(0,t.jsx)(n.td,{children:"The password used to connect to Redis."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"redisDatabase"})}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"The Redis database to connect to."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"clientMode"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"Standalone"}),(0,t.jsxs)(n.td,{children:["The client mode when interacting with Redis cluster. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Below are the available options: ",(0,t.jsx)("br",{}),(0,t.jsxs)("li",{children:["Standalone",(0,t.jsx)("br",{})]}),(0,t.jsx)("li",{children:"Cluster "})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"autoReconnect"})}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:"Whether the Redis client automatically reconnect or not."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"requestQueue"})}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"2147483647"}),(0,t.jsx)(n.td,{children:"The maximum number of queued requests to Redis."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"tcpNoDelay"})}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"Whether to enable TCP with no delay or not."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"keepAlive"})}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"Whether to enable a keepalive to Redis or not."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"connectTimeout"})}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"10000"}),(0,t.jsx)(n.td,{children:"The time to wait before timing out when connecting in milliseconds."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"operationTimeout"})}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"10000"}),(0,t.jsx)(n.td,{children:"The time before an operation is marked as timed out in milliseconds ."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"batchTimeMs"})}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"1000"}),(0,t.jsx)(n.td,{children:"The Redis operation time in milliseconds."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"batchSize"})}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"200"}),(0,t.jsx)(n.td,{children:"The batch size of writing to Redis database."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Before using the Redis sink connector, you need to create a configuration file through one of the following methods."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"JSON"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'\n{\n    "redisHosts": "localhost:6379",\n    "redisPassword": "fake@123",\n    "redisDatabase": "1",\n    "clientMode": "Standalone",\n    "operationTimeout": "2000",\n    "batchSize": "100",\n    "batchTimeMs": "1000",\n    "connectTimeout": "3000"\n}\n\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"YAML"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'\n{\n    redisHosts: "localhost:6379"\n    redisPassword: "fake@123"\n    redisDatabase: 1\n    clientMode: "Standalone"\n    operationTimeout: 2000\n    batchSize: 100\n    batchTimeMs: 1000\n    connectTimeout: 3000\n}\n\n'})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(96540);const t={},d=i.createContext(t);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);