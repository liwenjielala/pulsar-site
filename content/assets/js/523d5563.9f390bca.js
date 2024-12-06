"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[17524],{59925:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"io-rabbitmq-source","title":"RabbitMQ source connector","description":"You can download all the Pulsar connectors on download page.","source":"@site/versioned_docs/version-3.2.x/io-rabbitmq-source.md","sourceDirName":".","slug":"/io-rabbitmq-source","permalink":"/docs/3.2.x/io-rabbitmq-source","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/io-rabbitmq-source.md","tags":[],"version":"3.2.x","frontMatter":{"id":"io-rabbitmq-source","title":"RabbitMQ source connector","sidebar_label":"RabbitMQ source connector"}}');var r=s(74848),i=s(28453);const a={id:"io-rabbitmq-source",title:"RabbitMQ source connector",sidebar_label:"RabbitMQ source connector"},l=void 0,d={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2},{value:"Standalone mode",id:"standalone-mode",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Steps",id:"steps",level:4}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["You can download all the Pulsar connectors on ",(0,r.jsx)(n.a,{href:"pathname:///download",children:"download page"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"The RabbitMQ source connector receives messages from RabbitMQ clusters and writes messages to Pulsar topics."}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"The configuration of the RabbitMQ source connector has the following properties."}),"\n",(0,r.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"connectionName"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"(empty string)"}),(0,r.jsx)(n.td,{children:"The connection name."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"host"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"(empty string)"}),(0,r.jsx)(n.td,{children:"The RabbitMQ host."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"port"})}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"5672"}),(0,r.jsx)(n.td,{children:"The RabbitMQ port."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"virtualHost"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"/"}),(0,r.jsx)(n.td,{children:"The virtual host used to connect to RabbitMQ."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"username"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"guest"}),(0,r.jsx)(n.td,{children:"The username used to authenticate to RabbitMQ."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"password"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"guest"}),(0,r.jsx)(n.td,{children:"The password used to authenticate to RabbitMQ."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"queueName"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"(empty string)"}),(0,r.jsx)(n.td,{children:"The RabbitMQ queue name that messages should be read from or written to."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"requestedChannelMax"})}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsxs)(n.td,{children:["The initially requested maximum channel number. ",(0,r.jsx)("br",{})," 0 means unlimited."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"requestedFrameMax"})}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsxs)(n.td,{children:["The initially requested maximum frame size in octets. ",(0,r.jsx)("br",{})," 0 means unlimited."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"connectionTimeout"})}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"60000"}),(0,r.jsxs)(n.td,{children:["The timeout of TCP connection establishment in milliseconds. ",(0,r.jsx)("br",{})," 0 means infinite."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"handshakeTimeout"})}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"10000"}),(0,r.jsx)(n.td,{children:"The timeout of AMQP0-9-1 protocol handshake in milliseconds."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"requestedHeartbeat"})}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"60"}),(0,r.jsx)(n.td,{children:"The requested heartbeat timeout in seconds."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"prefetchCount"})}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsxs)(n.td,{children:["The maximum number of messages that the server delivers.",(0,r.jsx)("br",{})," 0 means unlimited."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"prefetchGlobal"})}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"Whether the setting should be applied to the entire channel rather than each consumer."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"passive"})}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"Whether the rabbitmq consumer should create its own queue or bind to an existing one."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Before using the RabbitMQ source connector, you need to create a configuration file through one of the following methods."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"JSON"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n   "configs": {\n      "host": "localhost",\n      "port": "5672",\n      "virtualHost": "/",\n      "username": "guest",\n      "password": "guest",\n      "queueName": "test-queue",\n      "connectionName": "test-connection",\n      "requestedChannelMax": "0",\n      "requestedFrameMax": "0",\n      "connectionTimeout": "60000",\n      "handshakeTimeout": "10000",\n      "requestedHeartbeat": "60",\n      "prefetchCount": "0",\n      "prefetchGlobal": "false",\n      "passive": "false"\n   }\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"YAML"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'configs:\n    host: "localhost"\n    port: 5672\n    virtualHost: "/"\n    username: "guest"\n    password: "guest"\n    queueName: "test-queue"\n    connectionName: "test-connection"\n    requestedChannelMax: 0\n    requestedFrameMax: 0\n    connectionTimeout: 60000\n    handshakeTimeout: 10000\n    requestedHeartbeat: 60\n    prefetchCount: 0\n    prefetchGlobal: "false"\n    passive: "false"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.h3,{id:"standalone-mode",children:"Standalone mode"}),"\n",(0,r.jsx)(n.p,{children:"This example describes how to use the RabbitMQ source connector to feed data from RabbitMQ and write data to Pulsar topics in the standalone mode."}),"\n",(0,r.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"There is a RabbitMQ server with some history messages in the queue."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"steps",children:"Steps"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Get a Pulsar package and start Pulsar in standalone mode."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"wget https://archive.apache.org/dist/pulsar/pulsar-3.2.4/apache-pulsar-3.2.4-bin.tar.gz\ntar xvfz apache-pulsar-3.2.4-bin.tar.gz\ncd apache-pulsar-3.2.4\nbin/pulsar standalone\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Download the ",(0,r.jsx)(n.a,{href:"https://archive.apache.org/dist/pulsar/",children:"nar package"})," corresponding to Pulsar's version and copy the following file to Pulsar's directory."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"wget https://archive.apache.org/dist/pulsar/pulsar-3.2.4/connectors/pulsar-io-rabbitmq-3.2.4.nar\ncp pulsar-io-rabbitmq-3.2.4.nar ./connectors\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Messages published to a topic lacking at least one durable subscription are automatically marked as ready for deletion by default. We can set a retention policy at the namespace level to prevent this."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./bin/pulsar-admin namespaces set-retention -s 100M -t 3d public/default\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Prepare a configuration file with name is ",(0,r.jsx)(n.em,{children:"rabbitmq-source-queue-name.yaml"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:' configs:\n   host: "localhost"\n   port: 5672\n   virtualHost: "/"\n   username: "guest"\n   password: "guest"\n   queueName: "test-queue"\n   connectionName: "test-connection"\n   requestedChannelMax: 0\n   requestedFrameMax: 0\n   connectionTimeout: 60000\n   handshakeTimeout: 10000\n   requestedHeartbeat: 60\n   prefetchCount: 0\n   prefetchGlobal: "false"\n   passive: "false"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Copy the configuration file to Pulsar\u2018s conf directory."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cp rabbitmq-source-queue-name.yaml ./conf\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Open a new terminal window and start the connector in local run mode."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./bin/pulsar-admin source localrun \\\n --source-config-file $PWD/conf/rabbitmq-source-queue-name.yaml \\\n --archive $PWD/connectors/pulsar-io-rabbitmq-3.2.4.nar \\\n --name rabbitmq-source \\\n --destination-topic-name pulsar-rabbitmq-test-topic \\\n --broker-service-url pulsar://{ip}:{port}\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Open a new terminal window and check the topic is created automatically."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./bin/pulsar-admin topics list public/default \\\n"})}),"\n",(0,r.jsx)(n.p,{children:"This topic is created automatically as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"persistent://public/default/pulsar-rabbitmq-test-topic-partition-0\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Consume this topic."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./bin/pulsar-client consume persistent://public/default/pulsar-rabbitmq-test-topic-partition-0 -s s1 -n 0 -p Earliest\n"})}),"\n",(0,r.jsx)(n.p,{children:"The following information appears on the consumer terminal window."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"   ----- got message -----\n   key:[quick.orange.pulsar], properties:[], content:message-topic-O(range) 0\n   ----- got message -----\n   key:[quick.orange.pulsar], properties:[], content:message-topic-O(range) 1\n\n   ... ...\n\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(96540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);