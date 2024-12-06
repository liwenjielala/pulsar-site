"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[54855],{50204:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"io-netty-source","title":"Netty source connector","description":"You can download all the Pulsar connectors on download page.","source":"@site/versioned_docs/version-3.0.x/io-netty-source.md","sourceDirName":".","slug":"/io-netty-source","permalink":"/docs/3.0.x/io-netty-source","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/io-netty-source.md","tags":[],"version":"3.0.x","frontMatter":{"id":"io-netty-source","title":"Netty source connector","sidebar_label":"Netty source connector"}}');var r=s(74848),l=s(28453);const c={id:"io-netty-source",title:"Netty source connector",sidebar_label:"Netty source connector"},o=void 0,a={},i=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2},{value:"TCP",id:"tcp",level:3},{value:"HTTP",id:"http",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["You can download all the Pulsar connectors on ",(0,r.jsx)(n.a,{href:"pathname:///download",children:"download page"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"The Netty source connector opens a port that accepts incoming data via the configured network protocol and publishes it to user-defined Pulsar topics."}),"\n",(0,r.jsx)(n.p,{children:"This connector can be used in a containerized (for example, k8s) deployment. Otherwise, if the connector is running in process or thread mode, the instance may be conflicting on listening to ports."}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"The configuration of the Netty source connector has the following properties."}),"\n",(0,r.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"type"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"tcp"}),(0,r.jsxs)(n.td,{children:["The network protocol over which data is transmitted to netty. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Below are the available options:",(0,r.jsx)("br",{}),(0,r.jsx)("li",{children:"tcp"}),(0,r.jsx)("li",{children:"http"}),(0,r.jsx)("li",{children:"udp "})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"host"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"127.0.0.1"}),(0,r.jsx)(n.td,{children:"The host name or address on which the source instance listen."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"port"})}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"10999"}),(0,r.jsx)(n.td,{children:"The port on which the source instance listen."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"numberOfThreads"})}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"The number of threads of Netty TCP server to accept incoming connections and handle the traffic of accepted connections."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Before using the Netty source connector, you need to create a configuration file through one of the following methods."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"JSON"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n   "configs": {\n      "type": "tcp",\n      "host": "127.0.0.1",\n      "port": "10911",\n      "numberOfThreads": "1"\n   }\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"YAML"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'configs:\n    type: "tcp"\n    host: "127.0.0.1"\n    port: 10999\n    numberOfThreads: 1\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.p,{children:"The following examples show how to use the Netty source connector with TCP and HTTP."}),"\n",(0,r.jsx)(n.h3,{id:"tcp",children:"TCP"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start Pulsar standalone."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker pull apachepulsar/pulsar:{version}\n\ndocker run -d -it -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-netty-standalone apachepulsar/pulsar:{version} bin/pulsar standalone\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a configuration file ",(0,r.jsx)(n.em,{children:"netty-source-config.yaml"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'configs:\n    type: "tcp"\n    host: "127.0.0.1"\n    port: 10999\n    numberOfThreads: 1\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Copy the configuration file ",(0,r.jsx)(n.em,{children:"netty-source-config.yaml"})," to Pulsar server."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker cp netty-source-config.yaml pulsar-netty-standalone:/pulsar/conf/\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Download the Netty source connector."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker exec -it pulsar-netty-standalone /bin/bash\ncurl -O http://mirror-hk.koddos.net/apache/pulsar/pulsar-{version}/connectors/pulsar-io-netty-{version}.nar\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start the Netty source connector."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./bin/pulsar-admin sources localrun \\\n--archive $PWD/pulsar-io-3.0.8.nar \\\n--tenant public \\\n--namespace default \\\n--name netty \\\n--destination-topic-name netty-topic \\\n--source-config-file $PWD/netty-source-config.yaml \\\n--parallelism 1\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Consume data."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker exec -it pulsar-netty-standalone /bin/bash\n./bin/pulsar-client consume -t Exclusive -s netty-sub netty-topic -n 0\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Open another terminal window to send data to the Netty source."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker exec -it pulsar-netty-standalone /bin/bash\napt-get update\napt-get -y install telnet\nroot@1d19327b2c67:/pulsar# telnet 127.0.0.1 10999\nTrying 127.0.0.1...\nConnected to 127.0.0.1.\nEscape character is '^]'.\nhello\nworld\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The following information appears on the consumer terminal window."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"----- got message -----\nhello\n\n----- got message -----\nworld\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"http",children:"HTTP"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start Pulsar standalone."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker pull apachepulsar/pulsar:{version}\ndocker run -d -it -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-netty-standalone apachepulsar/pulsar:{version} bin/pulsar standalone\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a configuration file ",(0,r.jsx)(n.em,{children:"netty-source-config.yaml"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'configs:\n    type: "http"\n    host: "127.0.0.1"\n    port: 10999\n    numberOfThreads: 1\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Copy the configuration file ",(0,r.jsx)(n.em,{children:"netty-source-config.yaml"})," to Pulsar server."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker cp netty-source-config.yaml pulsar-netty-standalone:/pulsar/conf/\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Download the Netty source connector."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker exec -it pulsar-netty-standalone /bin/bash\ncurl -O http://mirror-hk.koddos.net/apache/pulsar/pulsar-{version}/connectors/pulsar-io-netty-{version}.nar\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start the Netty source connector."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./bin/pulsar-admin sources localrun \\\n--archive $PWD/pulsar-io-3.0.8.nar \\\n--tenant public \\\n--namespace default \\\n--name netty \\\n--destination-topic-name netty-topic \\\n--source-config-file $PWD/netty-source-config.yaml \\\n--parallelism 1\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Consume data."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker exec -it pulsar-netty-standalone /bin/bash\n./bin/pulsar-client consume -t Exclusive -s netty-sub netty-topic -n 0\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Open another terminal window to send data to the Netty source."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker exec -it pulsar-netty-standalone /bin/bash\ncurl -X POST --data 'hello, world!' http://127.0.0.1:10999/\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The following information appears on the consumer terminal window."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"----- got message -----\nhello, world!\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var t=s(96540);const r={},l=t.createContext(r);function c(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);