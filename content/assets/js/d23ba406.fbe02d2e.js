"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2951],{21903:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"io-netty-source","title":"Netty source connector","description":"The Netty source connector opens a port that accepts incoming data via the configured network protocol","source":"@site/versioned_docs/version-2.6.3/io-netty-source.md","sourceDirName":".","slug":"/io-netty-source","permalink":"/docs/2.6.3/io-netty-source","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.3/io-netty-source.md","tags":[],"version":"2.6.3","frontMatter":{"id":"io-netty-source","title":"Netty source connector","sidebar_label":"Netty source connector","original_id":"io-netty-source"}}');var r=t(74848),c=t(28453);const l={id:"io-netty-source",title:"Netty source connector",sidebar_label:"Netty source connector",original_id:"io-netty-source"},i=void 0,o={},a=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2},{value:"TCP",id:"tcp",level:3},{value:"HTTP",id:"http",level:3}];function d(n){const e={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"The Netty source connector opens a port that accepts incoming data via the configured network protocol\nand publish it to user-defined Pulsar topics."}),"\n",(0,r.jsx)(e.p,{children:"This connector can be used in a containerized (for example, k8s) deployment. Otherwise, if the connector is running in process or thread mode, the instance may be conflicting on listening to ports."}),"\n",(0,r.jsx)(e.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(e.p,{children:"The configuration of the Netty source connector has the following properties."}),"\n",(0,r.jsx)(e.h3,{id:"property",children:"Property"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Name"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Required"}),(0,r.jsx)(e.th,{children:"Default"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"type"})}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"tcp"}),(0,r.jsxs)(e.td,{children:["The network protocol over which data is transmitted to netty. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Below are the available options:",(0,r.jsx)("br",{}),(0,r.jsx)("li",{children:"tcp"}),(0,r.jsx)("li",{children:"http"}),(0,r.jsx)("li",{children:"udp "})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"host"})}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"127.0.0.1"}),(0,r.jsx)(e.td,{children:"The host name or address on which the source instance listen."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"port"})}),(0,r.jsx)(e.td,{children:"int"}),(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"10999"}),(0,r.jsx)(e.td,{children:"The port on which the source instance listen."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"numberOfThreads"})}),(0,r.jsx)(e.td,{children:"int"}),(0,r.jsx)(e.td,{children:"true"}),(0,r.jsx)(e.td,{children:"1"}),(0,r.jsx)(e.td,{children:"The number of threads of Netty TCP server to accept incoming connections and handle the traffic of accepted connections."})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(e.p,{children:"Before using the Netty source connector, you need to create a configuration file through one of the following methods."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"JSON"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'\n{\n    "type": "tcp",\n    "host": "127.0.0.1",\n    "port": "10911",\n    "numberOfThreads": "1"\n}\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"YAML"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:'\nconfigs:\n    type: "tcp"\n    host: "127.0.0.1"\n    port: 10999\n    numberOfThreads: 1\n\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(e.p,{children:"The following examples show how to use the Netty source connector with TCP and HTTP."}),"\n",(0,r.jsx)(e.h3,{id:"tcp",children:"TCP"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Start Pulsar standalone."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"\n$ docker pull apachepulsar/pulsar:{version}\n\n$ docker run -d -it -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-netty-standalone apachepulsar/pulsar:{version} bin/pulsar standalone\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Create a configuration file ",(0,r.jsx)(e.em,{children:"netty-source-config.yaml"}),"."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:'\nconfigs:\n    type: "tcp"\n    host: "127.0.0.1"\n    port: 10999\n    numberOfThreads: 1\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Copy the configuration file ",(0,r.jsx)(e.em,{children:"netty-source-config.yaml"})," to Pulsar server."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"\n$ docker cp netty-source-config.yaml pulsar-netty-standalone:/pulsar/conf/\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Download the Netty source connector."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"\n$ docker exec -it pulsar-netty-standalone /bin/bash\ncurl -O http://mirror-hk.koddos.net/apache/pulsar/pulsar-{version}/connectors/pulsar-io-netty-{version}.nar\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Start the Netty source connector."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"\n$ ./bin/pulsar-admin sources localrun \\\n--archive pulsar-io-2.6.3.nar \\\n--tenant public \\\n--namespace default \\\n--name netty \\\n--destination-topic-name netty-topic \\\n--source-config-file netty-source-config.yaml \\\n--parallelism 1\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Consume data."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"\n$ docker exec -it pulsar-netty-standalone /bin/bash\n\n$ ./bin/pulsar-client consume -t Exclusive -s netty-sub netty-topic -n 0\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Open another terminal window to send data to the Netty source."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"\n$ docker exec -it pulsar-netty-standalone /bin/bash\n\n$ apt-get update\n\n$ apt-get -y install telnet\n\n$ root@1d19327b2c67:/pulsar# telnet 127.0.0.1 10999\nTrying 127.0.0.1...\nConnected to 127.0.0.1.\nEscape character is '^]'.\nhello\nworld\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"The following information appears on the consumer terminal window."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"\n----- got message -----\nhello\n\n----- got message -----\nworld\n\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"http",children:"HTTP"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Start Pulsar standalone."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"\n$ docker pull apachepulsar/pulsar:{version}\n\n$ docker run -d -it -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-netty-standalone apachepulsar/pulsar:{version} bin/pulsar standalone\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Create a configuration file ",(0,r.jsx)(e.em,{children:"netty-source-config.yaml"}),"."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:'\nconfigs:\n    type: "http"\n    host: "127.0.0.1"\n    port: 10999\n    numberOfThreads: 1\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Copy the configuration file ",(0,r.jsx)(e.em,{children:"netty-source-config.yaml"})," to Pulsar server."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"\n$ docker cp netty-source-config.yaml pulsar-netty-standalone:/pulsar/conf/\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Download the Netty source connector."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"\n$ docker exec -it pulsar-netty-standalone /bin/bash\ncurl -O http://mirror-hk.koddos.net/apache/pulsar/pulsar-{version}/connectors/pulsar-io-netty-{version}.nar\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Start the Netty source connector."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"\n$ ./bin/pulsar-admin sources localrun \\\n--archive pulsar-io-2.6.3.nar \\\n--tenant public \\\n--namespace default \\\n--name netty \\\n--destination-topic-name netty-topic \\\n--source-config-file netty-source-config.yaml \\\n--parallelism 1\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Consume data."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"\n$ docker exec -it pulsar-netty-standalone /bin/bash\n\n$ ./bin/pulsar-client consume -t Exclusive -s netty-sub netty-topic -n 0\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Open another terminal window to send data to the Netty source."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"\n$ docker exec -it pulsar-netty-standalone /bin/bash\n\n$ curl -X POST --data 'hello, world!' http://127.0.0.1:10999/\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"The following information appears on the consumer terminal window."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"\n----- got message -----\nhello, world!\n\n"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>i});var s=t(96540);const r={},c=s.createContext(r);function l(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);