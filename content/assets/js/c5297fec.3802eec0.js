"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[59699],{11631:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"io-rabbitmq-sink","title":"RabbitMQ sink connector","description":"The RabbitMQ sink connector pulls messages from Pulsar topics","source":"@site/versioned_docs/version-2.7.5/io-rabbitmq-sink.md","sourceDirName":".","slug":"/io-rabbitmq-sink","permalink":"/docs/2.7.5/io-rabbitmq-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.5/io-rabbitmq-sink.md","tags":[],"version":"2.7.5","frontMatter":{"id":"io-rabbitmq-sink","title":"RabbitMQ sink connector","sidebar_label":"RabbitMQ sink connector","original_id":"io-rabbitmq-sink"}}');var i=t(74848),r=t(28453);const d={id:"io-rabbitmq-sink",title:"RabbitMQ sink connector",sidebar_label:"RabbitMQ sink connector",original_id:"io-rabbitmq-sink"},c=void 0,l={},o=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The RabbitMQ sink connector pulls messages from Pulsar topics\nand persist the messages to RabbitMQ queues."}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"The configuration of the RabbitMQ sink connector has the following properties."}),"\n",(0,i.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"connectionName"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:'" " (empty string)'}),(0,i.jsx)(n.td,{children:"The connection name."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"host"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:'" " (empty string)'}),(0,i.jsx)(n.td,{children:"The RabbitMQ host."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"port"})}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:"5672"}),(0,i.jsx)(n.td,{children:"The RabbitMQ port."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"virtualHost"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:"/"}),(0,i.jsx)(n.td,{children:"The virtual host used to connect to RabbitMQ."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"username"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"guest"}),(0,i.jsx)(n.td,{children:"The username used to authenticate to RabbitMQ."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"password"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"guest"}),(0,i.jsx)(n.td,{children:"The password used to authenticate to RabbitMQ."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"queueName"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:'" " (empty string)'}),(0,i.jsx)(n.td,{children:"The RabbitMQ queue name that messages should be read from or written to."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"requestedChannelMax"})}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsxs)(n.td,{children:["The initially requested maximum channel number. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"0 means unlimited."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"requestedFrameMax"})}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsxs)(n.td,{children:["The initially requested maximum frame size in octets. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"0 means unlimited."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"connectionTimeout"})}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"60000"}),(0,i.jsxs)(n.td,{children:["The timeout of TCP connection establishment in milliseconds. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"0 means infinite."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"handshakeTimeout"})}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"10000"}),(0,i.jsx)(n.td,{children:"The timeout of AMQP0-9-1 protocol handshake in milliseconds."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"requestedHeartbeat"})}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"60"}),(0,i.jsx)(n.td,{children:"The exchange to publish messages."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"exchangeName"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:'" " (empty string)'}),(0,i.jsxs)(n.td,{children:["The maximum number of messages that the server delivers.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})," 0 means unlimited."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"prefetchGlobal"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:'" " (empty string)'}),(0,i.jsx)(n.td,{children:"The routing key used to publish messages."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Before using the RabbitMQ sink connector, you need to create a configuration file through one of the following methods."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"JSON"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'\n{\n    "host": "localhost",\n    "port": "5672",\n    "virtualHost": "/",\n    "username": "guest",\n    "password": "guest",\n    "queueName": "test-queue",\n    "connectionName": "test-connection",\n    "requestedChannelMax": "0",\n    "requestedFrameMax": "0",\n    "connectionTimeout": "60000",\n    "handshakeTimeout": "10000",\n    "requestedHeartbeat": "60",\n    "exchangeName": "test-exchange",\n    "routingKey": "test-key"\n}\n\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"YAML"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'\nconfigs:\n    host: "localhost"\n    port: 5672\n    virtualHost: "/",\n    username: "guest"\n    password: "guest"\n    queueName: "test-queue"\n    connectionName: "test-connection"\n    requestedChannelMax: 0\n    requestedFrameMax: 0\n    connectionTimeout: 60000\n    handshakeTimeout: 10000\n    requestedHeartbeat: 60\n    exchangeName: "test-exchange"\n    routingKey: "test-key"\n\n'})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var s=t(96540);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);