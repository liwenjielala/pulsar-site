"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[90486],{80436:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"develop-load-manager","title":"Modular load manager","description":"The modular load manager, implemented in  ModularLoadManagerImpl, is a flexible alternative to the previously implemented load manager, SimpleLoadManagerImpl, which attempts to simplify how the load is managed while also providing abstractions so that complex load management strategies may be implemented.","source":"@site/versioned_docs/version-2.11.x/develop-load-manager.md","sourceDirName":".","slug":"/develop-load-manager","permalink":"/docs/2.11.x/develop-load-manager","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/develop-load-manager.md","tags":[],"version":"2.11.x","frontMatter":{"id":"develop-load-manager","title":"Modular load manager","sidebar_label":"Modular load manager"},"sidebar":"docsSidebar","previous":{"title":"Binary protocol","permalink":"/docs/2.11.x/developing-binary-protocol"},"next":{"title":"Plugin","permalink":"/docs/2.11.x/develop-plugin"}}');var t=r(74848),s=r(28453);const o={id:"develop-load-manager",title:"Modular load manager",sidebar_label:"Modular load manager"},i=void 0,l={},d=[{value:"Usage",id:"usage",level:2},{value:"Verification",id:"verification",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Data",id:"data",level:3},{value:"Broker",id:"broker",level:4},{value:"Local Broker Data",id:"local-broker-data",level:5},{value:"Historical Broker Data",id:"historical-broker-data",level:5},{value:"Bundle Data",id:"bundle-data",level:5},{value:"Traffic Distribution",id:"traffic-distribution",level:3},{value:"Least Long Term Message Rate Strategy",id:"least-long-term-message-rate-strategy",level:4}];function h(e){const a={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.em,{children:"modular load manager"}),", implemented in  ",(0,t.jsx)(a.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/loadbalance/impl/ModularLoadManagerImpl.java",children:(0,t.jsx)(a.code,{children:"ModularLoadManagerImpl"})}),", is a flexible alternative to the previously implemented load manager, ",(0,t.jsx)(a.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/loadbalance/impl/SimpleLoadManagerImpl.java",children:(0,t.jsx)(a.code,{children:"SimpleLoadManagerImpl"})}),", which attempts to simplify how the load is managed while also providing abstractions so that complex load management strategies may be implemented."]}),"\n",(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(a.p,{children:"There are two ways that you can enable the modular load manager:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Change the value of the ",(0,t.jsx)(a.code,{children:"loadManagerClassName"})," parameter in ",(0,t.jsx)(a.code,{children:"conf/broker.conf"})," from ",(0,t.jsx)(a.code,{children:"org.apache.pulsar.broker.loadbalance.impl.SimpleLoadManagerImpl"})," to ",(0,t.jsx)(a.code,{children:"org.apache.pulsar.broker.loadbalance.impl.ModularLoadManagerImpl"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Using the ",(0,t.jsx)(a.code,{children:"pulsar-admin"})," tool. Here's an example:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"pulsar-admin update-dynamic-config \\\n--config loadManagerClassName \\\n--value org.apache.pulsar.broker.loadbalance.impl.ModularLoadManagerImpl\n"})}),"\n",(0,t.jsxs)(a.p,{children:["You can use the same method to change back to the original value. In either case, any mistake in specifying the load manager will cause Pulsar to default to ",(0,t.jsx)(a.code,{children:"SimpleLoadManagerImpl"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"verification",children:"Verification"}),"\n",(0,t.jsx)(a.p,{children:"There are a few different ways to determine which load manager is being used:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"pulsar-admin"})," to examine the ",(0,t.jsx)(a.code,{children:"loadManagerClassName"})," element:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:'bin/pulsar-admin brokers get-all-dynamic-config\n{\n "loadManagerClassName" : "org.apache.pulsar.broker.loadbalance.impl.ModularLoadManagerImpl"\n}\n'})}),"\n",(0,t.jsxs)(a.p,{children:["If there is no ",(0,t.jsx)(a.code,{children:"loadManagerClassName"})," element, then the default load manager is used."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Consult a ZooKeeper load report. With the module load manager, the load report in ",(0,t.jsx)(a.code,{children:"/loadbalance/brokers/..."})," will have many differences. For example, the ",(0,t.jsx)(a.code,{children:"systemResourceUsage"})," sub-elements (",(0,t.jsx)(a.code,{children:"bandwidthIn"}),", ",(0,t.jsx)(a.code,{children:"bandwidthOut"}),", etc.) are now all at the top level. Here is an example load report from the module load manager:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n  "bandwidthIn": {\n    "limit": 10240000.0,\n    "usage": 4.256510416666667\n  },\n  "bandwidthOut": {\n    "limit": 10240000.0,\n    "usage": 5.287239583333333\n  },\n  "bundles": [],\n  "cpu": {\n    "limit": 2400.0,\n    "usage": 5.7353247655435915\n  },\n  "directMemory": {\n    "limit": 16384.0,\n    "usage": 1.0\n  }\n}\n'})}),"\n",(0,t.jsxs)(a.p,{children:["With the simple load manager, the load report in ",(0,t.jsx)(a.code,{children:"/loadbalance/brokers/..."})," looks like this:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n  "systemResourceUsage": {\n    "bandwidthIn": {\n      "limit": 10240000.0,\n      "usage": 0.0\n    },\n    "bandwidthOut": {\n      "limit": 10240000.0,\n      "usage": 0.0\n    },\n    "cpu": {\n      "limit": 2400.0,\n      "usage": 0.0\n    },\n    "directMemory": {\n      "limit": 16384.0,\n      "usage": 1.0\n    },\n    "memory": {\n      "limit": 8192.0,\n      "usage": 3903.0\n    }\n  }\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["The command-line ",(0,t.jsx)(a.a,{href:"/docs/2.11.x/reference-cli-tools",children:"broker monitor"})," will have a different output format depending on which load manager implementation is being used."]}),"\n",(0,t.jsx)(a.p,{children:"Here is an example from the modular load manager:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"\n===================================================================================================================\n||SYSTEM         |CPU %          |MEMORY %       |DIRECT %       |BW IN %        |BW OUT %       |MAX %          ||\n||               |0.00           |48.33          |0.01           |0.00           |0.00           |48.33          ||\n||COUNT          |TOPIC          |BUNDLE         |PRODUCER       |CONSUMER       |BUNDLE +       |BUNDLE -       ||\n||               |4              |4              |0              |2              |4              |0              ||\n||LATEST         |MSG/S IN       |MSG/S OUT      |TOTAL          |KB/S IN        |KB/S OUT       |TOTAL          ||\n||               |0.00           |0.00           |0.00           |0.00           |0.00           |0.00           ||\n||SHORT          |MSG/S IN       |MSG/S OUT      |TOTAL          |KB/S IN        |KB/S OUT       |TOTAL          ||\n||               |0.00           |0.00           |0.00           |0.00           |0.00           |0.00           ||\n||LONG           |MSG/S IN       |MSG/S OUT      |TOTAL          |KB/S IN        |KB/S OUT       |TOTAL          ||\n||               |0.00           |0.00           |0.00           |0.00           |0.00           |0.00           ||\n===================================================================================================================\n\n"})}),"\n",(0,t.jsx)(a.p,{children:"Here is an example from the simple load manager:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"\n===================================================================================================================\n||COUNT          |TOPIC          |BUNDLE         |PRODUCER       |CONSUMER       |BUNDLE +       |BUNDLE -       ||\n||               |4              |4              |0              |2              |0              |0              ||\n||RAW SYSTEM     |CPU %          |MEMORY %       |DIRECT %       |BW IN %        |BW OUT %       |MAX %          ||\n||               |0.25           |47.94          |0.01           |0.00           |0.00           |47.94          ||\n||ALLOC SYSTEM   |CPU %          |MEMORY %       |DIRECT %       |BW IN %        |BW OUT %       |MAX %          ||\n||               |0.20           |1.89           |               |1.27           |3.21           |3.21           ||\n||RAW MSG        |MSG/S IN       |MSG/S OUT      |TOTAL          |KB/S IN        |KB/S OUT       |TOTAL          ||\n||               |0.00           |0.00           |0.00           |0.01           |0.01           |0.01           ||\n||ALLOC MSG      |MSG/S IN       |MSG/S OUT      |TOTAL          |KB/S IN        |KB/S OUT       |TOTAL          ||\n||               |54.84          |134.48         |189.31         |126.54         |320.96         |447.50         ||\n===================================================================================================================\n\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["It is important to note that the module load manager is ",(0,t.jsx)(a.em,{children:"centralized"}),", meaning that all requests to assign a bundle---whether it's been seen before or whether this is the first time---only get handled by the ",(0,t.jsx)(a.em,{children:"lead"})," broker (which can change over time). To determine the current lead broker, examine the ",(0,t.jsx)(a.code,{children:"/loadbalance/leader"})," node in ZooKeeper."]}),"\n",(0,t.jsx)(a.h2,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsx)(a.h3,{id:"data",children:"Data"}),"\n",(0,t.jsxs)(a.p,{children:["The data monitored by the modular load manager is contained in the ",(0,t.jsx)(a.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/loadbalance/LoadData.java",children:(0,t.jsx)(a.code,{children:"LoadData"})})," class.\nHere, the available data is subdivided into the bundle data and the broker data."]}),"\n",(0,t.jsx)(a.h4,{id:"broker",children:"Broker"}),"\n",(0,t.jsxs)(a.p,{children:["The broker data is contained in the ",(0,t.jsx)(a.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/BrokerData.java",children:(0,t.jsx)(a.code,{children:"BrokerData"})})," class. It is further subdivided into two parts,\none being the local data that every broker individually writes to ZooKeeper, and the other being the historical broker data that is written to ZooKeeper by the leader broker."]}),"\n",(0,t.jsx)(a.h5,{id:"local-broker-data",children:"Local Broker Data"}),"\n",(0,t.jsxs)(a.p,{children:["The local broker data is contained in the class ",(0,t.jsx)(a.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-common/src/main/java/org/apache/pulsar/policies/data/loadbalancer/LocalBrokerData.java",children:(0,t.jsx)(a.code,{children:"LocalBrokerData"})})," and provides information about the following resources:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"CPU usage"}),"\n",(0,t.jsx)(a.li,{children:"JVM heap memory usage"}),"\n",(0,t.jsx)(a.li,{children:"Direct memory usage"}),"\n",(0,t.jsx)(a.li,{children:"Bandwidth in/out usage"}),"\n",(0,t.jsx)(a.li,{children:"Most recent total message rate in/out across all bundles"}),"\n",(0,t.jsx)(a.li,{children:"Total number of topics, bundles, producers, and consumers"}),"\n",(0,t.jsx)(a.li,{children:"Names of all bundles assigned to this broker"}),"\n",(0,t.jsx)(a.li,{children:"Most recent changes in bundle assignments for this broker"}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:['The local broker data is updated periodically according to the service configuration\n"loadBalancerReportUpdateMaxIntervalMinutes". After any broker updates their local broker data, the leader broker will\nreceive the update immediately via a ZooKeeper watch, where the local data is read from the ZooKeeper node\n',(0,t.jsx)(a.code,{children:"/loadbalance/brokers/<broker host/port>"})]}),"\n",(0,t.jsx)(a.h5,{id:"historical-broker-data",children:"Historical Broker Data"}),"\n",(0,t.jsxs)(a.p,{children:["The historical broker data is contained in the ",(0,t.jsx)(a.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/TimeAverageBrokerData.java",children:(0,t.jsx)(a.code,{children:"TimeAverageBrokerData"})})," class."]}),"\n",(0,t.jsx)(a.p,{children:"To reconcile the need to make good decisions in a steady-state scenario and make reactive decisions in a critical scenario, the historical data is split into two parts: the short-term data for reactive decisions, and the long-term data for steady-state decisions. Both time frames maintain the following information:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Message rate in/out for the entire broker"}),"\n",(0,t.jsx)(a.li,{children:"Message throughput in/out for the entire broker"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Unlike the bundle data, the broker data does not maintain samples for the global broker message rates and throughputs, which is not expected to remain steady as new bundles are removed or added. Instead, this data is aggregated over the short-term and long-term data for the bundles. See the section on bundle data to understand how that data is collected and maintained."}),"\n",(0,t.jsxs)(a.p,{children:["The historical broker data is updated for each broker in memory by the leader broker whenever any broker writes their local data to ZooKeeper. Then, the historical data is written to ZooKeeper by the leader broker periodically according to the configuration ",(0,t.jsx)(a.code,{children:"loadBalancerResourceQuotaUpdateIntervalMinutes"}),"."]}),"\n",(0,t.jsx)(a.h5,{id:"bundle-data",children:"Bundle Data"}),"\n",(0,t.jsxs)(a.p,{children:["The bundle data is contained in the ",(0,t.jsx)(a.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/BundleData.java",children:(0,t.jsx)(a.code,{children:"BundleData"})}),". Like the historical broker data, the bundle data is split into a short-term and long-term time frame. The information maintained in each time frame:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Message rate in/out for this bundle"}),"\n",(0,t.jsx)(a.li,{children:"Message Throughput In/Out for this bundle"}),"\n",(0,t.jsx)(a.li,{children:"Current number of samples for this bundle"}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["The time frames are implemented by maintaining the average of these values over a set, a limited number of samples, where the samples are obtained through the message rate and throughput values in the local data. Thus, if the update interval for the local data is 2 minutes, the number of short samples is 10 and the number of long samples is 1000, the short-term data is maintained over a period of ",(0,t.jsx)(a.code,{children:"10 samples * 2 minutes / sample = 20 minutes"}),", while the long-term data is similarly over a period of 2000 minutes. Whenever there are not enough samples to satisfy a given time frame, the average is taken only over the existing samples. When no samples are available, default values are assumed until they are overwritten by the first sample. Currently, the default values are"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Message rate in/out: 50 messages per second both ways"}),"\n",(0,t.jsx)(a.li,{children:"Message throughput in/out: 50KB per second both ways"}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["The bundle data is updated in memory on the leader broker whenever any broker writes their local data to ZooKeeper.\nThen, the bundle data is written to ZooKeeper by the leader broker periodically at the same time as the historical broker data, according to the configuration ",(0,t.jsx)(a.code,{children:"loadBalancerResourceQuotaUpdateIntervalMinutes"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"traffic-distribution",children:"Traffic Distribution"}),"\n",(0,t.jsxs)(a.p,{children:["The modular load manager uses the abstraction provided by ",(0,t.jsx)(a.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/loadbalance/ModularLoadManagerStrategy.java",children:(0,t.jsx)(a.code,{children:"ModularLoadManagerStrategy"})})," to make decisions about bundle assignments. The strategy makes a decision by considering the service configuration, the entire load data, and the bundle data for the bundle to be assigned. Currently, the only supported strategy is ",(0,t.jsx)(a.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/loadbalance/impl/LeastLongTermMessageRate.java",children:(0,t.jsx)(a.code,{children:"LeastLongTermMessageRate"})}),", though soon users will have the ability to inject their own strategies if desired."]}),"\n",(0,t.jsx)(a.h4,{id:"least-long-term-message-rate-strategy",children:"Least Long Term Message Rate Strategy"}),"\n",(0,t.jsxs)(a.p,{children:["As its name suggests, the least long-term message rate strategy attempts to distribute bundles across brokers so that\nthe message rate in the long-term time window for each broker is roughly the same. However, simply balancing load based\non message rate does not handle the issue of asymmetric resource burden per message on each broker. Thus, the system\nresource usages, which are CPU, memory, direct memory, bandwidth in, and bandwidth out, are also considered in the\nassignment process. This is done by weighting the final message rate according to\n",(0,t.jsx)(a.code,{children:"1 / (overload_threshold - max_usage)"}),", where ",(0,t.jsx)(a.code,{children:"overload_threshold"})," corresponds to the configuration\n",(0,t.jsx)(a.code,{children:"loadBalancerBrokerOverloadedThresholdPercentage"})," and ",(0,t.jsx)(a.code,{children:"max_usage"})," is the maximum proportion among the system resources that are being utilized by the candidate broker. This multiplier ensures that machines with are being more heavily taxed\nby the same message rates will receive less load. In particular, it tries to ensure that if one machine is overloaded,\nthen all machines are approximately overloaded. In the case in which a broker's max usage exceeds the overload\nthreshold, that broker is not considered for bundle assignment. If all brokers are overloaded, the bundle is randomly\nassigned."]})]})}function c(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>o,x:()=>i});var n=r(96540);const t={},s=n.createContext(t);function o(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);