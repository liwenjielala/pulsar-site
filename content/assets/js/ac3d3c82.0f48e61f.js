"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[19554],{28901:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"administration-load-balance","title":"Load balance across brokers","description":"Pulsar is a horizontally scalable messaging system, so the traffic in a logical cluster must be balanced across all the available Pulsar brokers as evenly as possible, which is a core requirement.","source":"@site/versioned_docs/version-3.1.x/administration-load-balance.md","sourceDirName":".","slug":"/administration-load-balance","permalink":"/docs/3.1.x/administration-load-balance","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/administration-load-balance.md","tags":[],"version":"3.1.x","frontMatter":{"id":"administration-load-balance","title":"Load balance across brokers","sidebar_label":"Load balance"},"sidebar":"docsSidebar","previous":{"title":"Pulsar Shell","permalink":"/docs/3.1.x/administration-pulsar-shell"},"next":{"title":"Pulsar proxy","permalink":"/docs/3.1.x/administration-proxy"}}');var r=n(74848),t=n(28453);const i={id:"administration-load-balance",title:"Load balance across brokers",sidebar_label:"Load balance"},o=void 0,d={},l=[{value:"Dynamic assignments",id:"dynamic-assignments",level:2},{value:"Create namespaces with assigned bundles",id:"create-namespaces-with-assigned-bundles",level:2},{value:"Split namespace bundles",id:"split-namespace-bundles",level:2},{value:"Shed load automatically",id:"shed-load-automatically",level:2},{value:"ThresholdShedder",id:"thresholdshedder",level:3},{value:"OverloadShedder",id:"overloadshedder",level:3},{value:"Broker overload thresholds",id:"broker-overload-thresholds",level:4},{value:"UniformLoadShedder",id:"uniformloadshedder",level:3},{value:"Unload topics and bundles",id:"unload-topics-and-bundles",level:2},{value:"Distribute anti-affinity namespaces across failure domains",id:"distribute-anti-affinity-namespaces-across-failure-domains",level:2},{value:"Create a failure domain and register brokers",id:"create-a-failure-domain-and-register-brokers",level:3},{value:"Create an anti-affinity namespace group",id:"create-an-anti-affinity-namespace-group",level:3}];function h(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"Pulsar is a horizontally scalable messaging system, so the traffic in a logical cluster must be balanced across all the available Pulsar brokers as evenly as possible, which is a core requirement."}),"\n",(0,r.jsx)(a.p,{children:"You can use multiple settings and tools to control the traffic distribution which requires a bit of context to understand how the traffic is managed in Pulsar. Though in most cases, the core requirement mentioned above is true out of the box and you should not worry about it."}),"\n",(0,r.jsx)(a.p,{children:"The following sections introduce how load-balanced assignments work across Pulsar brokers and how you can leverage the framework to adjust."}),"\n",(0,r.jsx)(a.h2,{id:"dynamic-assignments",children:"Dynamic assignments"}),"\n",(0,r.jsxs)(a.p,{children:["Topics are dynamically assigned to brokers based on the load conditions of all brokers in the cluster. The assignment of topics to brokers is not done at the topic level but the ",(0,r.jsx)(a.strong,{children:"bundle"})," level (a higher level). Instead of individual topic assignments, each broker takes ownership of a subset of the topics for a namespace. This subset is called a bundle and effectively this subset is a sharding mechanism."]}),"\n",(0,r.jsx)(a.p,{children:'In other words, each namespace is an "administrative" unit and sharded into a list of bundles, with each bundle comprising a portion of the overall hash range of the namespace. Topics are assigned to a particular bundle by taking the hash of the topic name and checking in which bundle the hash falls. Each bundle is independent of the others and thus is independently assigned to different brokers.'}),"\n",(0,r.jsx)(a.p,{children:"The benefit of the assignment granularity is to amortize the amount of information that you need to keep track of. Based on CPU, memory, traffic load, and other indexes, topics are assigned to a particular broker dynamically. For example:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"When a client starts using new topics that are not assigned to any broker, a process is triggered to choose the best-suited broker to acquire ownership of these topics according to the load conditions."}),"\n",(0,r.jsx)(a.li,{children:"If the broker owning a topic becomes overloaded, the topic is reassigned to a less-loaded broker."}),"\n",(0,r.jsx)(a.li,{children:"If the broker owning a topic crashes, the topic is reassigned to another active broker."}),"\n"]}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsx)(a.p,{children:'For partitioned topics, different partitions are assigned to different brokers. Here "topic" means either a non-partitioned topic or one partition of a topic.'})}),"\n",(0,r.jsx)(a.h2,{id:"create-namespaces-with-assigned-bundles",children:"Create namespaces with assigned bundles"}),"\n",(0,r.jsxs)(a.p,{children:["When you create a new namespace, a number of bundles are assigned to the namespace. You can set this number in the ",(0,r.jsx)(a.code,{children:"conf/broker.conf"})," file:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-conf",children:"# When a namespace is created without specifying the number of bundles, this\n# value will be used as the default\ndefaultNumberOfNamespaceBundles=4\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Alternatively, you can override the value when you create a new namespace using ",(0,r.jsx)(a.a,{href:"pathname:///reference/#/3.1.x/pulsar-admin/",children:"Pulsar admin"}),":"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-shell",children:"bin/pulsar-admin namespaces create my-tenant/my-namespace --clusters us-west --bundles 16\n"})}),"\n",(0,r.jsx)(a.p,{children:"With the above command, you create a namespace with 16 initial bundles. Therefore the topics for this namespace can immediately be spread across up to 16 brokers."}),"\n",(0,r.jsx)(a.p,{children:"In general, if you know the expected traffic and number of topics in advance, you had better start with a reasonable number of bundles instead of waiting for the system to auto-correct the distribution."}),"\n",(0,r.jsx)(a.p,{children:"On the same note, it is beneficial to start with more bundles than the number of brokers, due to the hashing nature of the distribution of topics into bundles. For example, for a namespace with 1000 topics, using something like 64 bundles achieves a good distribution of traffic across 16 brokers."}),"\n",(0,r.jsx)(a.h2,{id:"split-namespace-bundles",children:"Split namespace bundles"}),"\n",(0,r.jsx)(a.p,{children:"Since the load for the topics in a bundle might change over time and predicting the load might be hard, bundle split is designed to resolve these challenges. The broker splits a bundle into two and the new smaller bundles can be reassigned to different brokers."}),"\n",(0,r.jsx)(a.p,{children:"Pulsar supports the following two bundle split algorithms:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"range_equally_divide"}),": split the bundle into two parts with the same hash range size."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"topic_count_equally_divide"}),": split the bundle into two parts with the same number of topics."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"specified_positions_divide"}),": split the bundle into several parts by the specified positions."]}),"\n"]}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["The ",(0,r.jsx)(a.code,{children:"specified_positions_divide"})," algorithms only support use by admin API and do not support set into ",(0,r.jsx)(a.code,{children:"defaultNamespaceBundleSplitAlgorithm"}),"."]}),"\n"]})}),"\n",(0,r.jsxs)(a.p,{children:["To enable bundle split, you need to configure the following settings in the ",(0,r.jsx)(a.code,{children:"broker.conf"})," file, and set ",(0,r.jsx)(a.code,{children:"defaultNamespaceBundleSplitAlgorithm"})," based on your needs."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-conf",children:"loadBalancerAutoBundleSplitEnabled=true\nloadBalancerAutoUnloadSplitBundlesEnabled=true\ndefaultNamespaceBundleSplitAlgorithm=range_equally_divide\n"})}),"\n",(0,r.jsx)(a.p,{children:"You can configure more parameters for splitting thresholds. Any existing bundle that exceeds any of the thresholds is a candidate to be split. By default, the newly split bundles are immediately reassigned to other brokers, to facilitate the traffic distribution."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-conf",children:"# maximum topics in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxTopics=1000\n\n# maximum sessions (producers + consumers) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxSessions=1000\n\n# maximum msgRate (in + out) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxMsgRate=30000\n\n# maximum bandwidth (in + out) in a bundle, otherwise bundle split will be triggered\nloadBalancerNamespaceBundleMaxBandwidthMbytes=100\n\n# maximum number of bundles in a namespace (for auto-split)\nloadBalancerNamespaceMaximumBundles=128\n"})}),"\n",(0,r.jsx)(a.h2,{id:"shed-load-automatically",children:"Shed load automatically"}),"\n",(0,r.jsx)(a.p,{children:"The support for automatic load shedding is available in the load manager of Pulsar. This means that whenever the system recognizes a particular broker is overloaded, the system forces some traffic to be reassigned to less-loaded brokers."}),"\n",(0,r.jsx)(a.p,{children:'When a broker is identified as overloaded, the broker forces to "unload" a subset of the bundles, the ones with higher traffic, that make up for the overload percentage.'}),"\n",(0,r.jsxs)(a.p,{children:["For example, the default threshold is 85% and if a broker is over quota at 95% CPU usage, then the broker unloads the percent difference plus a 5% margin: ",(0,r.jsx)(a.code,{children:"(95% - 85%) + 5% = 15%"}),". Given the selection of bundles to unload is based on traffic (as a proxy measure for CPU, network, and memory), the broker unloads bundles for at least 15% of traffic."]}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["The automatic load shedding is enabled by default. To disable it, you can set ",(0,r.jsx)(a.code,{children:"loadBalancerSheddingEnabled"})," to ",(0,r.jsx)(a.code,{children:"false"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["Besides the automatic load shedding, you can ",(0,r.jsx)(a.a,{href:"#unload-topics-and-bundles",children:"manually unload bundles"}),"."]}),"\n"]})}),"\n",(0,r.jsx)(a.p,{children:"Additional settings that apply to shedding:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-conf",children:"# Load shedding interval. Broker periodically checks whether some traffic should be offload from\n# some over-loaded broker to other under-loaded brokers\nloadBalancerSheddingIntervalMinutes=1\n\n# Prevent the same topics to be shed and moved to other brokers more than once within this timeframe\nloadBalancerSheddingGracePeriodMinutes=30\n"})}),"\n",(0,r.jsx)(a.p,{children:"Pulsar supports the following types of automatic load shedding strategies."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"#thresholdshedder",children:"ThresholdShedder"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"#overloadshedder",children:"OverloadShedder"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"#uniformloadshedder",children:"UniformLoadShedder"})}),"\n"]}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["From Pulsar 2.10, the ",(0,r.jsx)(a.strong,{children:"default"})," shedding strategy is ",(0,r.jsx)(a.code,{children:"ThresholdShedder"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["You need to restart brokers if the shedding strategy is ",(0,r.jsx)(a.a,{href:"/docs/3.1.x/admin-api-brokers#dynamic-broker-configuration",children:"dynamically updated"}),"."]}),"\n"]})}),"\n",(0,r.jsx)(a.h3,{id:"thresholdshedder",children:"ThresholdShedder"}),"\n",(0,r.jsxs)(a.p,{children:["This strategy tends to shed the bundles if any broker's usage is above the configured threshold. It does this by first computing the average resource usage per broker for the whole cluster. The resource usage for each broker is calculated using the following method ",(0,r.jsx)(a.code,{children:"LocalBrokerData#getMaxResourceUsageWithWeight"}),". Historical observations are included in the running average based on the broker's setting for ",(0,r.jsx)(a.code,{children:"loadBalancerHistoryResourcePercentage"}),". Once the average resource usage is calculated, a broker's current/historical usage is compared to the average broker usage. If a broker's usage is greater than the average usage per broker plus the ",(0,r.jsx)(a.code,{children:"loadBalancerBrokerThresholdShedderPercentage"}),", this load shedder proposes removing enough bundles to bring the unloaded broker 5% below the current average broker usage. Note that recently unloaded bundles are not unloaded again."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Shedding strategy - ThresholdShedder",src:n(81037).A+"",width:"1776",height:"683"})}),"\n",(0,r.jsxs)(a.p,{children:["For example, assume you have three brokers, the average broker usage of broker1 is 40%, the average broker usage of broker2 and broker3 is 10%, then the cluster average usage is 20% ((40% + 10% + 10%) / 3). If you set ",(0,r.jsx)(a.code,{children:"loadBalancerBrokerThresholdShedderPercentage"})," to ",(0,r.jsx)(a.code,{children:"10"}),", then only broker1's certain bundles get unloaded, because the average usage of broker1 is greater than the sum of the cluster average usage (20%) plus ",(0,r.jsx)(a.code,{children:"loadBalancerBrokerThresholdShedderPercentage"}),"(10%)."]}),"\n",(0,r.jsx)(a.p,{children:"However, in some special cases, the above default strategy cannot leverage the resources of low-load or idle machines."}),"\n",(0,r.jsx)(a.p,{children:"For example:"}),"\n",(0,r.jsx)(a.p,{children:"There are 11 brokers, of which 10 are loaded at 80% and 1 is loaded at 0%.\nThe average load is 80% * 10 / 11 = 72.73%, and the threshold to unload is 72.73% + 10% = 82.73%.\nSince 80% < 82.73%, unload will not be triggered, and there is one idle Broker with load of 0%."}),"\n",(0,r.jsxs)(a.p,{children:["To leverage the resources of low-load or idle machines, you can configure the ",(0,r.jsx)(a.code,{children:"lowerBoundarySheddingEnabled"})," parameter on top of ",(0,r.jsx)(a.code,{children:"ThresholdShedder"}),".\nWhen ",(0,r.jsx)(a.code,{children:"lowerBoundarySheddingEnabled"})," is set to ",(0,r.jsx)(a.code,{children:"true"}),", a leader decides the lower boundary of the load.\nIf ",(0,r.jsx)(a.code,{children:"current usage"})," is less than ",(0,r.jsx)(a.code,{children:"average usage - lower boundary load"}),", e.g., 0% < (82.73% - 10%), the broker with the highest load will be triggered to unload."]}),"\n",(0,r.jsxs)(a.p,{children:["To use the ",(0,r.jsx)(a.code,{children:"ThresholdShedder"})," strategy, configure brokers with this value.\n",(0,r.jsx)(a.code,{children:"loadBalancerLoadSheddingStrategy=org.apache.pulsar.broker.loadbalance.impl.ThresholdShedder"})]}),"\n",(0,r.jsxs)(a.p,{children:["You can configure the weights for each resource per broker in the ",(0,r.jsx)(a.code,{children:"conf/broker.conf"})," file."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-conf",children:"# The BandWithIn usage weight when calculating new resource usage. The range is between 0 and 1.0.\nloadBalancerBandwithInResourceWeight=1.0\n\n# The BandWithOut usage weight when calculating new resource usage. The range is between 0 and 1.0.\nloadBalancerBandwithOutResourceWeight=1.0\n\n# The CPU usage weight when calculating new resource usage. The range is between 0 and 1.0.\nloadBalancerCPUResourceWeight=1.0\n\n# The heap memory usage weight when calculating new resource usage. The range is between 0 and 1.0.\nloadBalancerMemoryResourceWeight=1.0\n\n# The direct memory usage weight when calculating new resource usage. The range is between 0 and 1.0.\nloadBalancerDirectMemoryResourceWeight=1.0\n"})}),"\n",(0,r.jsx)(a.h3,{id:"overloadshedder",children:"OverloadShedder"}),"\n",(0,r.jsxs)(a.p,{children:["This strategy attempts to shed exactly one bundle on brokers which are overloaded, that is, whose maximum system resource usage exceeds ",(0,r.jsx)(a.a,{href:"#broker-overload-thresholds",children:(0,r.jsx)(a.code,{children:"loadBalancerBrokerOverloadedThresholdPercentage"})}),". To see which resources are considered when determining the maximum system resource. A bundle is recommended for unloading off that broker if and only if the following conditions hold: The broker has at least two bundles assigned and the broker has at least one bundle that has not been unloaded recently according to ",(0,r.jsx)(a.code,{children:"LoadBalancerSheddingGracePeriodMinutes"}),'. The unloaded bundle will be the most expensive bundle in terms of message rate that has not been recently unloaded. Note that this strategy does not take into account "underloaded" brokers when determining which bundles to unload. If you are looking for a strategy that spreads load evenly across all brokers, see ',(0,r.jsx)(a.a,{href:"#thresholdshedder",children:"ThresholdShedder"}),"."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Shedding strategy - OverloadShedder",src:n(91606).A+"",width:"1790",height:"625"})}),"\n",(0,r.jsxs)(a.p,{children:["To use the ",(0,r.jsx)(a.code,{children:"OverloadShedder"})," strategy, configure brokers with this value.\n",(0,r.jsx)(a.code,{children:"loadBalancerLoadSheddingStrategy=org.apache.pulsar.broker.loadbalance.impl.OverloadShedder"})]}),"\n",(0,r.jsx)(a.h4,{id:"broker-overload-thresholds",children:"Broker overload thresholds"}),"\n",(0,r.jsx)(a.p,{children:"The determination of when a broker is overloaded is based on the threshold of CPU, network, and memory usage. Whenever either of those metrics reaches the threshold, the system triggers the shedding (if enabled)."}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsxs)(a.p,{children:["The overload threshold ",(0,r.jsx)(a.code,{children:"loadBalancerBrokerOverloadedThresholdPercentage"})," only applies to the ",(0,r.jsx)(a.a,{href:"#overloadshedder",children:(0,r.jsx)(a.code,{children:"OverloadShedder"})})," shedding strategy. By default, it is set to 85%."]})}),"\n",(0,r.jsx)(a.p,{children:"Pulsar gathers the CPU, network, and memory usage stats from the system metrics. In some cases of network utilization, the network interface speed that Linux reports is not correct and needs to be manually overridden. This is the case in AWS EC2 instances with 1Gbps NIC speed for which the OS reports 10Gbps speed."}),"\n",(0,r.jsx)(a.p,{children:"Because of the incorrect max speed, the load manager might think the broker has not reached the NIC capacity, while in fact the broker already uses all the bandwidth and the traffic is slowed down."}),"\n",(0,r.jsxs)(a.p,{children:["You can set ",(0,r.jsx)(a.code,{children:"loadBalancerOverrideBrokerNicSpeedGbps"})," in the ",(0,r.jsx)(a.code,{children:"conf/broker.conf"})," file to correct the max NIC speed. When the value is empty, Pulsar uses the value that the OS reports."]}),"\n",(0,r.jsx)(a.h3,{id:"uniformloadshedder",children:"UniformLoadShedder"}),"\n",(0,r.jsxs)(a.p,{children:["This strategy tends to distribute load uniformly across all brokers. This strategy checks the load difference between the broker with the highest load and the broker with the lowest load. If the difference is higher than configured thresholds ",(0,r.jsx)(a.code,{children:"loadBalancerMsgRateDifferenceShedderThreshold"})," and ",(0,r.jsx)(a.code,{children:"loadBalancerMsgThroughputMultiplierDifferenceShedderThreshold"})," then it finds out bundles that can be unloaded to distribute traffic evenly across all brokers."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Shedding strategy - UniformLoadShedder",src:n(84818).A+"",width:"1786",height:"635"})}),"\n",(0,r.jsxs)(a.p,{children:["To use the ",(0,r.jsx)(a.code,{children:"UniformLoadShedder"})," strategy, configure brokers with this value.\n",(0,r.jsx)(a.code,{children:"loadBalancerLoadSheddingStrategy=org.apache.pulsar.broker.loadbalance.impl.UniformLoadShedder"})]}),"\n",(0,r.jsx)(a.h2,{id:"unload-topics-and-bundles",children:"Unload topics and bundles"}),"\n",(0,r.jsx)(a.p,{children:'You can "unload" a topic in Pulsar manual admin operations. Unloading means closing topics, releasing ownership, and reassigning topics to a new broker, based on the current load.'}),"\n",(0,r.jsx)(a.p,{children:"When unloading happens, the client experiences a small latency blip, typically in the order of tens of milliseconds, while the topic is reassigned."}),"\n",(0,r.jsx)(a.p,{children:"Unloading is the mechanism that the load manager uses to perform the load shedding, but you can also trigger the unloading manually, for example, to correct the assignments and redistribute traffic even before having any broker overloaded."}),"\n",(0,r.jsx)(a.p,{children:"Unloading a topic has no effect on the assignment, but just closes and reopens the particular topic:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-shell",children:"pulsar-admin topics unload persistent://tenant/namespace/topic\n"})}),"\n",(0,r.jsx)(a.p,{children:"To unload all topics for a namespace and trigger reassignments:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-shell",children:"pulsar-admin namespaces unload tenant/namespace\n"})}),"\n",(0,r.jsx)(a.h2,{id:"distribute-anti-affinity-namespaces-across-failure-domains",children:"Distribute anti-affinity namespaces across failure domains"}),"\n",(0,r.jsxs)(a.p,{children:["When your application has multiple namespaces and you want one of them available all the time to avoid any downtime, you can group these namespaces and distribute them across different ",(0,r.jsx)(a.a,{href:"/docs/3.1.x/reference-terminology#failure-domain",children:"failure domains"})," and different brokers. Thus, if one of the failure domains is down (due to release rollout or brokers restart), it only disrupts namespaces owned by that specific failure domain and the rest of the namespaces owned by other domains remain available without any impact."]}),"\n",(0,r.jsxs)(a.p,{children:["Such a group of namespaces has anti-affinity to each other, that is, all the namespaces in this group are ",(0,r.jsx)(a.a,{href:"/docs/3.1.x/reference-terminology#anti-affinity-namespaces",children:"anti-affinity namespaces"})," and are distributed to different failure domains in a load-balanced manner."]}),"\n",(0,r.jsx)(a.p,{children:"As illustrated in the following figure, Pulsar has 2 failure domains (Domain1 and Domain2) and each domain has 2 brokers in it. You can create an anti-affinity namespace group that has 4 namespaces in it, and all the 4 namespaces have anti-affinity to each other. The load manager tries to distribute namespaces evenly across all the brokers in the same domain. Since each domain has 2 brokers, every broker owns one namespace from this anti-affinity namespace group, and you can see each domain owns 2 namespaces, and each broker owns 1 namespace."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Distribute anti-affinity namespaces across failure domains",src:n(78457).A+"",width:"1546",height:"741"})}),"\n",(0,r.jsx)(a.p,{children:"The load manager follows an even distribution policy across failure domains to assign anti-affinity namespaces. The following table outlines the even-distributed assignment sequence illustrated in the above figure."}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{style:{textAlign:"left"},children:"Assignment sequence"}),(0,r.jsx)(a.th,{style:{textAlign:"left"},children:"Namespace"}),(0,r.jsx)(a.th,{style:{textAlign:"left"},children:"Failure domain candidates"}),(0,r.jsx)(a.th,{style:{textAlign:"left"},children:"Broker candidates"}),(0,r.jsx)(a.th,{style:{textAlign:"left"},children:"Selected broker"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"1"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"Namespace1"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"Domain1, Domain2"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"Broker1, Broker2, Broker3, Broker4"}),(0,r.jsxs)(a.td,{style:{textAlign:"left"},children:["Domain1",":Broker1"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"2"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"Namespace2"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"Domain2"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"Broker3, Broker4"}),(0,r.jsxs)(a.td,{style:{textAlign:"left"},children:["Domain2",":Broker3"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"3"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"Namespace3"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"Domain1, Domain2"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"Broker2, Broker4"}),(0,r.jsxs)(a.td,{style:{textAlign:"left"},children:["Domain1",":Broker2"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"4"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"Namespace4"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"Domain2"}),(0,r.jsx)(a.td,{style:{textAlign:"left"},children:"Broker4"}),(0,r.jsxs)(a.td,{style:{textAlign:"left"},children:["Domain2",":Broker4"]})]})]})]}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Each namespace belongs to only one anti-affinity group. If a namespace with an existing anti-affinity assignment is assigned to another anti-affinity group, the original assignment is dropped."}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"If there are more anti-affinity namespaces than failure domains, the load manager distributes namespaces evenly across all the domains, and also every domain distributes namespaces evenly across all the brokers under that domain."}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(a.h3,{id:"create-a-failure-domain-and-register-brokers",children:"Create a failure domain and register brokers"}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsx)(a.p,{children:"One broker can only be registered to a single failure domain."})}),"\n",(0,r.jsx)(a.p,{children:"To create a domain under a specific cluster and register brokers, run the following command:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"pulsar-admin clusters create-failure-domain <cluster-name> --domain-name <domain-name> --broker-list <broker-list-comma-separated>\n"})}),"\n",(0,r.jsxs)(a.p,{children:["You can also view, update, and delete domains under a specific cluster. For more information, refer to ",(0,r.jsx)(a.a,{href:"pathname:///reference/#/3.1.x/pulsar-admin/",children:"Pulsar admin docs"}),"."]}),"\n",(0,r.jsx)(a.h3,{id:"create-an-anti-affinity-namespace-group",children:"Create an anti-affinity namespace group"}),"\n",(0,r.jsx)(a.p,{children:"An anti-affinity group is created automatically when the first namespace is assigned to the group. To assign a namespace to an anti-affinity group, run the following command. It sets an anti-affinity group name for a namespace."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"pulsar-admin namespaces set-anti-affinity-group <namespace> --group <group-name>\n"})}),"\n",(0,r.jsxs)(a.p,{children:["For more information about ",(0,r.jsx)(a.code,{children:"anti-affinity-group"})," related commands, refer to ",(0,r.jsx)(a.a,{href:"pathname:///reference/#/3.1.x/pulsar-admin/",children:"Pulsar admin docs"}),"."]})]})}function c(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},78457:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/anti-affinity-namespaces-across-failure-domains-49c34611c66243659ac8382597e04281.svg"},91606:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/shedding-strategy-overloadshedder-82646099fbc5728e78d7d4d3eb151e18.svg"},81037:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/shedding-strategy-thresholdshedder-69bc0835a1752056e0cc058d6c7c72f1.svg"},84818:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/shedding-strategy-uniformLoadshedder-a521b90620882e7ce650d4ee6d0561bc.svg"},28453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>o});var s=n(96540);const r={},t=s.createContext(r);function i(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);