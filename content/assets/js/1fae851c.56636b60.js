"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[56801],{58013:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"develop-tools","title":"Simulation tools","description":"It is sometimes necessary create an test environment and incur artificial load to observe how well load managers","source":"@site/versioned_docs/version-2.3.2/develop-tools.md","sourceDirName":".","slug":"/develop-tools","permalink":"/docs/2.3.2/develop-tools","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.2/develop-tools.md","tags":[],"version":"2.3.2","frontMatter":{"id":"develop-tools","title":"Simulation tools","sidebar_label":"Simulation tools"},"sidebar":"docsSidebar","previous":{"title":"BookKeeper Ledger Metadata","permalink":"/docs/2.3.2/cookbooks-bookkeepermetadata"},"next":{"title":"Binary protocol","permalink":"/docs/2.3.2/developing-binary-protocol"}}');var s=t(74848),i=t(28453);const r={id:"develop-tools",title:"Simulation tools",sidebar_label:"Simulation tools"},a=void 0,l={},c=[{value:"Simulation Client",id:"simulation-client",level:2},{value:"Usage",id:"usage",level:3},{value:"Simulation Controller",id:"simulation-controller",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Difference Between Copy, Simulate, and Stream",id:"difference-between-copy-simulate-and-stream",level:3},{value:"Broker Monitor",id:"broker-monitor",level:2},{value:"Usage",id:"usage-2",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"It is sometimes necessary create an test environment and incur artificial load to observe how well load managers\nhandle the load. The load simulation controller, the load simulation client, and the broker monitor were created as an\neffort to make create this load and observe the effects on the managers more easily."}),"\n",(0,s.jsx)(n.h2,{id:"simulation-client",children:"Simulation Client"}),"\n",(0,s.jsxs)(n.p,{children:["The simulation client is a machine which will create and subscribe to topics with configurable message rates and sizes.\nBecause it is sometimes necessary in simulating large load to use multiple client machines, the user does not interact\nwith the simulation client directly, but instead delegates their requests to the simulation controller, which will then\nsend signals to clients to start incurring load. The client implementation is in the class\n",(0,s.jsx)(n.code,{children:"org.apache.pulsar.testclient.LoadSimulationClient"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["To Start a simulation client, use the ",(0,s.jsx)(n.code,{children:"pulsar-perf"})," script with the command ",(0,s.jsx)(n.code,{children:"simulation-client"})," as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\npulsar-perf simulation-client --port <listen port> --service-url <pulsar service url>\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"The client will then be ready to receive controller commands."}),"\n",(0,s.jsx)(n.h2,{id:"simulation-controller",children:"Simulation Controller"}),"\n",(0,s.jsxs)(n.p,{children:["The simulation controller send signals to the simulation clients, requesting them to create new topics, stop old\ntopics, change the load incurred by topics, as well as several other tasks. It is implemented in the class\n",(0,s.jsx)(n.code,{children:"org.apache.pulsar.testclient.LoadSimulationController"})," and presents a shell to the user as an interface to send\ncommand with."]}),"\n",(0,s.jsx)(n.h3,{id:"usage-1",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["To start a simulation controller, use the ",(0,s.jsx)(n.code,{children:"pulsar-perf"})," script with the command ",(0,s.jsx)(n.code,{children:"simulation-controller"})," as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\npulsar-perf simulation-controller --cluster <cluster to simulate on> --client-port <listen port for clients>\n--clients <comma-separated list of client host names>\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The clients should already be started before the controller is started. You will then be presented with a simple prompt,\nwhere you can issue commands to simulation clients. Arguments often refer to tenant names, namespace names, and topic\nnames. In all cases, the BASE name of the tenants, namespaces, and topics are used. For example, for the topic\n",(0,s.jsx)(n.code,{children:"persistent://my_tenant/my_cluster/my_namespace/my_topic"}),", the tenant name is ",(0,s.jsx)(n.code,{children:"my_tenant"}),", the namespace name is\n",(0,s.jsx)(n.code,{children:"my_namespace"}),", and the topic name is ",(0,s.jsx)(n.code,{children:"my_topic"}),". The controller can perform the following actions:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a topic with a producer and a consumer","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"trade <tenant> <namespace> <topic> [--rate <message rate per second>] [--rand-rate <lower bound>,<upper bound>] [--size <message size in bytes>]"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Create a group of topics with a producer and a consumer","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"trade_group <tenant> <group> <num_namespaces> [--rate <message rate per second>] [--rand-rate <lower bound>,<upper bound>] [--separation <separation between creating topics in ms>] [--size <message size in bytes>] [--topics-per-namespace <number of topics to create per namespace>]"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Change the configuration of an existing topic","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"change <tenant> <namespace> <topic> [--rate <message rate per second>] [--rand-rate <lower bound>,<upper bound>] [--size <message size in bytes>]"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Change the configuration of a group of topics","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"change_group <tenant> <group> [--rate <message rate per second>] [--rand-rate <lower bound>,<upper bound>] [--size <message size in bytes>] [--topics-per-namespace <number of topics to create per namespace>]"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Shutdown a previously created topic","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"stop <tenant> <namespace> <topic>"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Shutdown a previously created group of topics","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"stop_group <tenant> <group>"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Copy the historical data from one ZooKeeper to another and simulate based on the message rates and sizes in that history","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"copy <tenant> <source zookeeper> <target zookeeper> [--rate-multiplier value]"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Simulate the load of the historical data on the current ZooKeeper (should be same ZooKeeper being simulated on)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"simulate <tenant> <zookeeper> [--rate-multiplier value]"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Stream the latest data from the given active ZooKeeper to simulate the real-time load of that ZooKeeper.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"stream <tenant> <zookeeper> [--rate-multiplier value]"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:['The "group" arguments in these commands allow the user to create or affect multiple topics at once. Groups are created\nwhen calling the ',(0,s.jsx)(n.code,{children:"trade_group"})," command, and all topics from these groups may be subsequently modified or stopped\nwith the ",(0,s.jsx)(n.code,{children:"change_group"})," and ",(0,s.jsx)(n.code,{children:"stop_group"})," commands respectively. All ZooKeeper arguments are of the form\n",(0,s.jsx)(n.code,{children:"zookeeper_host:port"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"difference-between-copy-simulate-and-stream",children:"Difference Between Copy, Simulate, and Stream"}),"\n",(0,s.jsxs)(n.p,{children:["The commands ",(0,s.jsx)(n.code,{children:"copy"}),", ",(0,s.jsx)(n.code,{children:"simulate"}),", and ",(0,s.jsx)(n.code,{children:"stream"})," are very similar but have significant differences. ",(0,s.jsx)(n.code,{children:"copy"})," is used when\nyou want to simulate the load of a static, external ZooKeeper on the ZooKeeper you are simulating on. Thus,\n",(0,s.jsx)(n.code,{children:"source zookeeper"})," should be the ZooKeeper you want to copy and ",(0,s.jsx)(n.code,{children:"target zookeeper"})," should be the ZooKeeper you are\nsimulating on, and then it will get the full benefit of the historical data of the source in both load manager\nimplementations. ",(0,s.jsx)(n.code,{children:"simulate"})," on the other hand takes in only one ZooKeeper, the one you are simulating on. It assumes\nthat you are simulating on a ZooKeeper that has historical data for ",(0,s.jsx)(n.code,{children:"SimpleLoadManagerImpl"})," and creates equivalent\nhistorical data for ",(0,s.jsx)(n.code,{children:"ModularLoadManagerImpl"}),". Then, the load according to the historical data is simulated by the\nclients. Finally, ",(0,s.jsx)(n.code,{children:"stream"})," takes in an active ZooKeeper different than the ZooKeeper being simulated on and streams\nload data from it and simulates the real-time load. In all cases, the optional ",(0,s.jsx)(n.code,{children:"rate-multiplier"})," argument allows the\nuser to simulate some proportion of the load. For instance, using ",(0,s.jsx)(n.code,{children:"--rate-multiplier 0.05"})," will cause messages to\nbe sent at only ",(0,s.jsx)(n.code,{children:"5%"})," of the rate of the load that is being simulated."]}),"\n",(0,s.jsx)(n.h2,{id:"broker-monitor",children:"Broker Monitor"}),"\n",(0,s.jsxs)(n.p,{children:["To observe the behavior of the load manager in these simulations, one may utilize the broker monitor, which is\nimplemented in ",(0,s.jsx)(n.code,{children:"org.apache.pulsar.testclient.BrokerMonitor"}),". The broker monitor will print tabular load data to the\nconsole as it is updated using watchers."]}),"\n",(0,s.jsx)(n.h3,{id:"usage-2",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["To start a broker monitor, use the ",(0,s.jsx)(n.code,{children:"monitor-brokers"})," command in the ",(0,s.jsx)(n.code,{children:"pulsar-perf"})," script:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\npulsar-perf monitor-brokers --connect-string <zookeeper host:port>\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"The console will then continuously print load data until it is interrupted."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(96540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);