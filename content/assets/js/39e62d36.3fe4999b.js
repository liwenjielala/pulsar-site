"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[58295],{80496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"io-rabbitmq-source","title":"RabbitMQ source connector","description":"The RabbitMQ source connector receives messages from RabbitMQ clusters","source":"@site/versioned_docs/version-2.6.1/io-rabbitmq-source.md","sourceDirName":".","slug":"/io-rabbitmq-source","permalink":"/docs/2.6.1/io-rabbitmq-source","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.1/io-rabbitmq-source.md","tags":[],"version":"2.6.1","frontMatter":{"id":"io-rabbitmq-source","title":"RabbitMQ source connector","sidebar_label":"RabbitMQ source connector","original_id":"io-rabbitmq-source"}}');var r=n(74848),i=n(28453);const d={id:"io-rabbitmq-source",title:"RabbitMQ source connector",sidebar_label:"RabbitMQ source connector",original_id:"io-rabbitmq-source"},c=void 0,l={},o=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}];function h(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The RabbitMQ source connector receives messages from RabbitMQ clusters\nand writes messages to Pulsar topics."}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(t.p,{children:"The configuration of the RabbitMQ source connector has the following properties."}),"\n",(0,r.jsx)(t.h3,{id:"property",children:"Property"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"connectionName"})}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:'" " (empty string)'}),(0,r.jsx)(t.td,{children:"The connection name."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"host"})}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:'" " (empty string)'}),(0,r.jsx)(t.td,{children:"The RabbitMQ host."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"port"})}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:"5672"}),(0,r.jsx)(t.td,{children:"The RabbitMQ port."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"virtualHost"})}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:"/"}),(0,r.jsx)(t.td,{children:"The virtual host used to connect to RabbitMQ."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"username"})}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"guest"}),(0,r.jsx)(t.td,{children:"The username used to authenticate to RabbitMQ."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"password"})}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"guest"}),(0,r.jsx)(t.td,{children:"The password used to authenticate to RabbitMQ."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"queueName"})}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"true"}),(0,r.jsx)(t.td,{children:'" " (empty string)'}),(0,r.jsx)(t.td,{children:"The RabbitMQ queue name that messages should be read from or written to."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"requestedChannelMax"})}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsxs)(t.td,{children:["The initially requested maximum channel number. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"0 means unlimited."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"requestedFrameMax"})}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsxs)(t.td,{children:["The initially requested maximum frame size in octets. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"0 means unlimited."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"connectionTimeout"})}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"60000"}),(0,r.jsxs)(t.td,{children:["The timeout of TCP connection establishment in milliseconds. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"0 means infinite."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"handshakeTimeout"})}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"10000"}),(0,r.jsx)(t.td,{children:"The timeout of AMQP0-9-1 protocol handshake in milliseconds."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"requestedHeartbeat"})}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"60"}),(0,r.jsx)(t.td,{children:"The requested heartbeat timeout in seconds."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"prefetchCount"})}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsxs)(t.td,{children:["The maximum number of messages that the server delivers.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})," 0 means unlimited."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"prefetchGlobal"})}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"Whether the setting should be applied to the entire channel rather than each consumer."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"Before using the RabbitMQ source connector, you need to create a configuration file through one of the following methods."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"JSON"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'\n{\n    "host": "localhost",\n    "port": "5672",\n    "virtualHost": "/",\n    "username": "guest",\n    "password": "guest",\n    "queueName": "test-queue",\n    "connectionName": "test-connection",\n    "requestedChannelMax": "0",\n    "requestedFrameMax": "0",\n    "connectionTimeout": "60000",\n    "handshakeTimeout": "10000",\n    "requestedHeartbeat": "60",\n    "prefetchCount": "0",\n    "prefetchGlobal": "false"\n}\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"YAML"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'\nconfigs:\n    host: "localhost"\n    port: 5672\n    virtualHost: "/"\n    username: "guest"\n    password: "guest"\n    queueName: "test-queue"\n    connectionName: "test-connection"\n    requestedChannelMax: 0\n    requestedFrameMax: 0\n    connectionTimeout: 60000\n    handshakeTimeout: 10000\n    requestedHeartbeat: 60\n    prefetchCount: 0\n    prefetchGlobal: "false"\n\n'})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var s=n(96540);const r={},i=s.createContext(r);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);