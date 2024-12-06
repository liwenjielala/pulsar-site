"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[61608],{31566:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"io-rabbitmq","title":"RabbitMQ Connector","description":"Source","source":"@site/versioned_docs/version-2.3.2/io-rabbitmq.md","sourceDirName":".","slug":"/io-rabbitmq","permalink":"/docs/2.3.2/io-rabbitmq","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.2/io-rabbitmq.md","tags":[],"version":"2.3.2","frontMatter":{"id":"io-rabbitmq","title":"RabbitMQ Connector","sidebar_label":"RabbitMQ Connector","original_id":"io-rabbitmq"}}');var s=n(74848),t=n(28453);const r={id:"io-rabbitmq",title:"RabbitMQ Connector",sidebar_label:"RabbitMQ Connector",original_id:"io-rabbitmq"},c=void 0,l={},h=[{value:"Source",id:"source",level:2},{value:"Source Configuration Options",id:"source-configuration-options",level:3},{value:"Sink",id:"sink",level:2},{value:"Sink Configuration Options",id:"sink-configuration-options",level:3}];function o(e){const d={code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.h2,{id:"source",children:"Source"}),"\n",(0,s.jsx)(d.p,{children:"The RabbitMQ Source connector is used for receiving messages from a RabbitMQ cluster and writing\nmessages to Pulsar topics."}),"\n",(0,s.jsx)(d.h3,{id:"source-configuration-options",children:"Source Configuration Options"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Required"}),(0,s.jsx)(d.th,{children:"Default"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"connectionName"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"true"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"null"})}),(0,s.jsx)(d.td,{children:"The connection name used for connecting to RabbitMQ."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"host"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"true"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"null"})}),(0,s.jsx)(d.td,{children:"The RabbitMQ host to connect to."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"port"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"true"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"5672"})}),(0,s.jsx)(d.td,{children:"The RabbitMQ port to connect to."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"virtualHost"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"true"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"/"})}),(0,s.jsx)(d.td,{children:"The virtual host used for connecting to RabbitMQ."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"username"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"guest"})}),(0,s.jsx)(d.td,{children:"The username used to authenticate to RabbitMQ."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"password"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"guest"})}),(0,s.jsx)(d.td,{children:"The password used to authenticate to RabbitMQ."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"queueName"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"true"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"null"})}),(0,s.jsx)(d.td,{children:"The RabbitMQ queue name from which messages should be read from or written to."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"requestedChannelMax"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"0"})}),(0,s.jsx)(d.td,{children:"Initially requested maximum channel number. 0 for unlimited."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"requestedFrameMax"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"0"})}),(0,s.jsx)(d.td,{children:"Initially requested maximum frame size, in octets. 0 for unlimited."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"connectionTimeout"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"60000"})}),(0,s.jsx)(d.td,{children:"Connection TCP establishment timeout in milliseconds. 0 for infinite."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"handshakeTimeout"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"10000"})}),(0,s.jsx)(d.td,{children:"The AMQP0-9-1 protocol handshake timeout in milliseconds."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"requestedHeartbeat"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"60"})}),(0,s.jsx)(d.td,{children:"The requested heartbeat timeout in seconds."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"prefetchCount"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"0"})}),(0,s.jsx)(d.td,{children:"Maximum number of messages that the server will deliver, 0 for unlimited."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"prefetchGlobal"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsx)(d.td,{children:"Set true if the settings should be applied to the entire channel rather than each consumer."})]})]})]}),"\n",(0,s.jsx)(d.h2,{id:"sink",children:"Sink"}),"\n",(0,s.jsx)(d.p,{children:"The RabbitMQ Sink connector is used to pull messages from Pulsar topics and persist the messages\nto a RabbitMQ queue."}),"\n",(0,s.jsx)(d.h3,{id:"sink-configuration-options",children:"Sink Configuration Options"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Required"}),(0,s.jsx)(d.th,{children:"Default"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"connectionName"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"true"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"null"})}),(0,s.jsx)(d.td,{children:"The connection name used for connecting to RabbitMQ."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"host"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"true"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"null"})}),(0,s.jsx)(d.td,{children:"The RabbitMQ host to connect to."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"port"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"true"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"5672"})}),(0,s.jsx)(d.td,{children:"The RabbitMQ port to connect to."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"virtualHost"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"true"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"/"})}),(0,s.jsx)(d.td,{children:"The virtual host used for connecting to RabbitMQ."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"username"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"guest"})}),(0,s.jsx)(d.td,{children:"The username used to authenticate to RabbitMQ."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"password"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"guest"})}),(0,s.jsx)(d.td,{children:"The password used to authenticate to RabbitMQ."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"queueName"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"true"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"null"})}),(0,s.jsx)(d.td,{children:"The RabbitMQ queue name from which messages should be read from or written to."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"requestedChannelMax"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"0"})}),(0,s.jsx)(d.td,{children:"Initially requested maximum channel number. 0 for unlimited."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"requestedFrameMax"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"0"})}),(0,s.jsx)(d.td,{children:"Initially requested maximum frame size, in octets. 0 for unlimited."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"connectionTimeout"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"60000"})}),(0,s.jsx)(d.td,{children:"Connection TCP establishment timeout in milliseconds. 0 for infinite."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"handshakeTimeout"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"10000"})}),(0,s.jsx)(d.td,{children:"The AMQP0-9-1 protocol handshake timeout in milliseconds."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"requestedHeartbeat"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"60"})}),(0,s.jsx)(d.td,{children:"The requested heartbeat timeout in seconds."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"exchangeName"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"true"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"null"})}),(0,s.jsx)(d.td,{children:"The exchange to publish the messages on."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"routingKey"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"true"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"null"})}),(0,s.jsx)(d.td,{children:"The routing key used for publishing the messages."})]})]})]})]})}function x(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,d,n)=>{n.d(d,{R:()=>r,x:()=>c});var i=n(96540);const s={},t=i.createContext(s);function r(e){const d=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(t.Provider,{value:d},e.children)}}}]);