"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[12407],{44111:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"administration-load-balance","title":"Pulsar load balance","description":"Load balance across Pulsar brokers","source":"@site/versioned_docs/version-2.6.3/administration-load-balance.md","sourceDirName":".","slug":"/administration-load-balance","permalink":"/docs/2.6.3/administration-load-balance","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.3/administration-load-balance.md","tags":[],"version":"2.6.3","frontMatter":{"id":"administration-load-balance","title":"Pulsar load balance","sidebar_label":"Load balance","original_id":"administration-load-balance"},"sidebar":"docsSidebar","previous":{"title":"Pulsar statistics","permalink":"/docs/2.6.3/administration-stats"},"next":{"title":"Pulsar proxy","permalink":"/docs/2.6.3/administration-proxy"}}');var t=n(74848),i=n(28453);const o={id:"administration-load-balance",title:"Pulsar load balance",sidebar_label:"Load balance",original_id:"administration-load-balance"},r=void 0,l={},d=[{value:"Load balance across Pulsar brokers",id:"load-balance-across-pulsar-brokers",level:2},{value:"Pulsar load manager architecture",id:"pulsar-load-manager-architecture",level:2},{value:"Assign topics to brokers dynamically",id:"assign-topics-to-brokers-dynamically",level:3},{value:"Assignment granularity",id:"assignment-granularity",level:4},{value:"Create namespaces and bundles",id:"create-namespaces-and-bundles",level:3},{value:"Unload topics and bundles",id:"unload-topics-and-bundles",level:3},{value:"Split namespace bundles",id:"split-namespace-bundles",level:3},{value:"Shed load automatically",id:"shed-load-automatically",level:3},{value:"Broker overload thresholds",id:"broker-overload-thresholds",level:4}];function c(e){const a={code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"load-balance-across-pulsar-brokers",children:"Load balance across Pulsar brokers"}),"\n",(0,t.jsx)(a.p,{children:"Pulsar is an horizontally scalable messaging system, so the traffic\nin a logical cluster must be spread across all the available Pulsar brokers as evenly as possible, which is a core requirement."}),"\n",(0,t.jsx)(a.p,{children:"You can use multiple settings and tools to control the traffic distribution which require a bit of context to understand how the traffic is managed in Pulsar. Though, in most cases, the core requirement mentioned above is true out of the box and you should not worry about it."}),"\n",(0,t.jsx)(a.h2,{id:"pulsar-load-manager-architecture",children:"Pulsar load manager architecture"}),"\n",(0,t.jsx)(a.p,{children:"The following part introduces the basic architecture of the Pulsar load manager."}),"\n",(0,t.jsx)(a.h3,{id:"assign-topics-to-brokers-dynamically",children:"Assign topics to brokers dynamically"}),"\n",(0,t.jsx)(a.p,{children:"Topics are dynamically assigned to brokers based on the load conditions of all brokers in the cluster."}),"\n",(0,t.jsx)(a.p,{children:"When a client starts using new topics that are not assigned to any broker, a process is triggered to choose the best suited broker to acquire ownership of these topics according to the load conditions."}),"\n",(0,t.jsx)(a.p,{children:'In case of partitioned topics, different partitions are assigned to different brokers. Here "topic" means either a non-partitioned topic or one partition of a topic.'}),"\n",(0,t.jsx)(a.p,{children:'The assignment is "dynamic" because the assignment changes quickly. For example, if the broker owning the topic crashes, the topic is reassigned immediately to another broker. Another scenario is that the broker owning the topic becomes overloaded. In this case, the topic is reassigned to a less loaded broker.'}),"\n",(0,t.jsx)(a.p,{children:"The stateless nature of brokers makes the dynamic assignment possible, so you can quickly expand or shrink the cluster based on usage."}),"\n",(0,t.jsx)(a.h4,{id:"assignment-granularity",children:"Assignment granularity"}),"\n",(0,t.jsx)(a.p,{children:"The assignment of topics or partitions to brokers is not done at the topics or partitions level, but done at the Bundle level (a higher level). The reason is to amortize the amount of information that you need to keep track. Based on CPU, memory, traffic load and other indexes, topics are assigned to a particular broker dynamically."}),"\n",(0,t.jsxs)(a.p,{children:['Instead of individual topic or partition assignment, each broker takes ownership of a subset of the topics for a namespace. This subset is called a "',(0,t.jsx)(a.em,{children:"bundle"}),'" and effectively this subset is a sharding mechanism.']}),"\n",(0,t.jsx)(a.p,{children:'The namespace is the "administrative" unit: many config knobs or operations are done at the namespace level.'}),"\n",(0,t.jsx)(a.p,{children:'For assignment, a namespaces is sharded into a list of "bundles", with each bundle comprising\na portion of overall hash range of the namespace.'}),"\n",(0,t.jsx)(a.p,{children:"Topics are assigned to a particular bundle by taking the hash of the topic name and checking in which\nbundle the hash falls into."}),"\n",(0,t.jsx)(a.p,{children:"Each bundle is independent of the others and thus is independently assigned to different brokers."}),"\n",(0,t.jsx)(a.h3,{id:"create-namespaces-and-bundles",children:"Create namespaces and bundles"}),"\n",(0,t.jsxs)(a.p,{children:["When you create a new namespace, the new namespace sets to use the default number of bundles. You can set this in ",(0,t.jsx)(a.code,{children:"conf/broker.conf"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-properties",children:"\n# When a namespace is created without specifying the number of bundle, this\n# value will be used as the default\ndefaultNumberOfNamespaceBundles=4\n\n"})}),"\n",(0,t.jsx)(a.p,{children:"You can either change the system default, or override it when you create a new namespace:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"\n$ bin/pulsar-admin namespaces create my-tenant/my-namespace --clusters us-west --bundles 16\n\n"})}),"\n",(0,t.jsx)(a.p,{children:"With this command, you create a namespace with 16 initial bundles. Therefore the topics for this namespaces can immediately be spread across up to 16 brokers."}),"\n",(0,t.jsx)(a.p,{children:"In general, if you know the expected traffic and number of topics in advance, you had better start with a reasonable number of bundles instead of waiting for the system to auto-correct the distribution."}),"\n",(0,t.jsx)(a.p,{children:"On the same note, it is beneficial to start with more bundles than the number of brokers, because of the hashing nature of the distribution of topics into bundles. For example, for a namespace with 1000 topics, using something like 64 bundles achieves a good distribution of traffic across 16 brokers."}),"\n",(0,t.jsx)(a.h3,{id:"unload-topics-and-bundles",children:"Unload topics and bundles"}),"\n",(0,t.jsx)(a.p,{children:'You can "unload" a topic in Pulsar with admin operation. Unloading means to close the topics,\nrelease ownership and reassign the topics to a new broker, based on current load.'}),"\n",(0,t.jsx)(a.p,{children:"When unloading happens, the client experiences a small latency blip, typically in the order of tens of milliseconds, while the topic is reassigned."}),"\n",(0,t.jsx)(a.p,{children:"Unloading is the mechanism that the load-manager uses to perform the load shedding, but you can also trigger the unloading manually, for example to correct the assignments and redistribute traffic even before having any broker overloaded."}),"\n",(0,t.jsx)(a.p,{children:"Unloading a topic has no effect on the assignment, but just closes and reopens the particular topic:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"\npulsar-admin topics unload persistent://tenant/namespace/topic\n\n"})}),"\n",(0,t.jsx)(a.p,{children:"To unload all topics for a namespace and trigger reassignments:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"\npulsar-admin namespaces unload tenant/namespace\n\n"})}),"\n",(0,t.jsx)(a.h3,{id:"split-namespace-bundles",children:"Split namespace bundles"}),"\n",(0,t.jsx)(a.p,{children:"Since the load for the topics in a bundle might change over time, or predicting upfront might just be hard, brokers can split bundles into two. The new smaller bundles can be reassigned to different brokers."}),"\n",(0,t.jsx)(a.p,{children:"The splitting happens based on some tunable thresholds. Any existing bundle that exceeds any of the threshold is a candidate to be split. By default the newly split bundles are also immediately offloaded to other brokers, to facilitate the traffic distribution."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-properties",children:"\n# enable/disable namespace bundle auto split\nloadBalancerAutoBundleSplitEnabled=true\n\n# enable/disable automatic unloading of split bundles\nloadBalancerAutoUnloadSplitBundlesEnabled=true\n\n# maximum topics in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxTopics=1000\n\n# maximum sessions (producers + consumers) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxSessions=1000\n\n# maximum msgRate (in + out) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxMsgRate=30000\n\n# maximum bandwidth (in + out) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxBandwidthMbytes=100\n\n# maximum number of bundles in a namespace (for auto-split)\nloadBalancerNamespaceMaximumBundles=128\n\n"})}),"\n",(0,t.jsx)(a.h3,{id:"shed-load-automatically",children:"Shed load automatically"}),"\n",(0,t.jsx)(a.p,{children:"The support for automatic load shedding is available in the load manager of Pulsar. This means that whenever the system recognizes a particular broker is overloaded, the system forces some traffic to be reassigned to less loaded brokers."}),"\n",(0,t.jsx)(a.p,{children:'When a broker is identified as overloaded, the broker forces to "unload" a subset of the bundles, the\nones with higher traffic, that make up for the overload percentage.'}),"\n",(0,t.jsxs)(a.p,{children:["For example, the default threshold is 85% and if a broker is over quota at 95% CPU usage, then the broker unloads the percent difference plus a 5% margin: ",(0,t.jsx)(a.code,{children:"(95% - 85%) + 5% = 15%"}),"."]}),"\n",(0,t.jsx)(a.p,{children:"Given the selection of bundles to offload is based on traffic (as a proxy measure for cpu, network\nand memory), broker unloads bundles for at least 15% of traffic."}),"\n",(0,t.jsx)(a.p,{children:"The automatic load shedding is enabled by default and you can disable the automatic load shedding with this setting:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-properties",children:"\n# Enable/disable automatic bundle unloading for load-shedding\nloadBalancerSheddingEnabled=true\n\n"})}),"\n",(0,t.jsx)(a.p,{children:"Additional settings that apply to shedding:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-properties",children:"\n# Load shedding interval. Broker periodically checks whether some traffic should be offload from\n# some over-loaded broker to other under-loaded brokers\nloadBalancerSheddingIntervalMinutes=1\n\n# Prevent the same topics to be shed and moved to other brokers more that once within this timeframe\nloadBalancerSheddingGracePeriodMinutes=30\n\n"})}),"\n",(0,t.jsx)(a.h4,{id:"broker-overload-thresholds",children:"Broker overload thresholds"}),"\n",(0,t.jsx)(a.p,{children:"The determinations of when a broker is overloaded is based on threshold of CPU, network and memory usage. Whenever either of those metrics reaches the threshold, the system triggers the shedding (if enabled)."}),"\n",(0,t.jsx)(a.p,{children:"By default, overload threshold is set at 85%:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-properties",children:"\n# Usage threshold to determine a broker as over-loaded\nloadBalancerBrokerOverloadedThresholdPercentage=85\n\n"})}),"\n",(0,t.jsx)(a.p,{children:"Pulsar gathers the usage stats from the system metrics."}),"\n",(0,t.jsx)(a.p,{children:"In case of network utilization, in some cases the network interface speed that Linux reports is\nnot correct and needs to be manually overridden. This is the case in AWS EC2 instances with 1Gbps\nNIC speed for which the OS reports 10Gbps speed."}),"\n",(0,t.jsx)(a.p,{children:"Because of the incorrect max speed, the Pulsar load manager might think the broker has not reached the NIC capacity, while in fact the broker already uses all the bandwidth and the traffic is slowed down."}),"\n",(0,t.jsx)(a.p,{children:"You can use the following setting to correct the max NIC speed:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-properties",children:"\n# Override the auto-detection of the network interfaces max speed.\n# This option is useful in some environments (eg: EC2 VMs) where the max speed\n# reported by Linux is not reflecting the real bandwidth available to the broker.\n# Since the network usage is employed by the load manager to decide when a broker\n# is overloaded, it is important to make sure the info is correct or override it\n# with the right value here. The configured value can be a double (eg: 0.8) and that\n# can be used to trigger load-shedding even before hitting on NIC limits.\nloadBalancerOverrideBrokerNicSpeedGbps=\n\n"})}),"\n",(0,t.jsx)(a.p,{children:"When the value is empty, Pulsar uses the value that the OS reports."})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>r});var s=n(96540);const t={},i=s.createContext(t);function o(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);