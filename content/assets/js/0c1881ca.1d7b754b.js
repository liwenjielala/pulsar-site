"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[41090],{86748:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"administration-upgrade","title":"Upgrade Guide","description":"Upgrade guidelines","source":"@site/versioned_docs/version-2.7.3/administration-upgrade.md","sourceDirName":".","slug":"/administration-upgrade","permalink":"/docs/2.7.3/administration-upgrade","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.3/administration-upgrade.md","tags":[],"version":"2.7.3","frontMatter":{"id":"administration-upgrade","title":"Upgrade Guide","sidebar_label":"Upgrade","original_id":"administration-upgrade"},"sidebar":"docsSidebar","previous":{"title":"Pulsar proxy","permalink":"/docs/2.7.3/administration-proxy"},"next":{"title":"Pulsar isolation","permalink":"/docs/2.7.3/administration-isolation"}}');var a=n(74848),s=n(28453);const i={id:"administration-upgrade",title:"Upgrade Guide",sidebar_label:"Upgrade",original_id:"administration-upgrade"},l=void 0,t={},d=[{value:"Upgrade guidelines",id:"upgrade-guidelines",level:2},{value:"Upgrade sequence",id:"upgrade-sequence",level:2},{value:"Upgrade ZooKeeper (optional)",id:"upgrade-zookeeper-optional",level:2},{value:"Canary test",id:"canary-test",level:3},{value:"Canary rollback",id:"canary-rollback",level:4},{value:"Upgrade all ZooKeeper servers",id:"upgrade-all-zookeeper-servers",level:3},{value:"Upgrade bookies",id:"upgrade-bookies",level:2},{value:"Canary test",id:"canary-test-1",level:3},{value:"Canary rollback",id:"canary-rollback-1",level:4},{value:"Upgrade all bookies",id:"upgrade-all-bookies",level:3},{value:"Upgrade brokers and proxies",id:"upgrade-brokers-and-proxies",level:2},{value:"Canary test",id:"canary-test-2",level:3},{value:"Canary rollback",id:"canary-rollback-2",level:4},{value:"Upgrade all brokers or proxies",id:"upgrade-all-brokers-or-proxies",level:3}];function c(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"upgrade-guidelines",children:"Upgrade guidelines"}),"\n",(0,a.jsx)(r.p,{children:"Apache Pulsar is comprised of multiple components, ZooKeeper, bookies, and brokers. These components are either stateful or stateless. You do not have to upgrade ZooKeeper nodes unless you have special requirement. While you upgrade, you need to pay attention to bookies (stateful), brokers and proxies (stateless)."}),"\n",(0,a.jsx)(r.p,{children:"The following are some guidelines on upgrading a Pulsar cluster. Read the guidelines before upgrading."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Backup all your configuration files before upgrading."}),"\n",(0,a.jsx)(r.li,{children:"Read guide entirely, make a plan, and then execute the plan. When you make upgrade plan, you need to take your specific requirements and environment into consideration."}),"\n",(0,a.jsx)(r.li,{children:"Pay attention to the upgrading order of components. In general, you do not need to upgrade your ZooKeeper or configuration store cluster (the global ZooKeeper cluster). You need to upgrade bookies first, and then upgrade brokers, proxies, and your clients."}),"\n",(0,a.jsxs)(r.li,{children:["If ",(0,a.jsx)(r.code,{children:"autorecovery"})," is enabled, you need to disable ",(0,a.jsx)(r.code,{children:"autorecovery"})," in the upgrade process, and re-enable it after completing the process."]}),"\n",(0,a.jsx)(r.li,{children:"Read the release notes carefully for each release. Release notes contain features, configuration changes that might impact your upgrade."}),"\n",(0,a.jsx)(r.li,{children:"Upgrade a small subset of nodes of each type to canary test the new version before upgrading all nodes of that type in the cluster. When you have upgraded the canary nodes, run for a while to ensure that they work correctly."}),"\n",(0,a.jsx)(r.li,{children:"Upgrade one data center to verify new version before upgrading all data centers if your cluster runs in multi-cluster replicated mode."}),"\n"]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"Note: Currently, Apache Pulsar is compatible between versions."}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"upgrade-sequence",children:"Upgrade sequence"}),"\n",(0,a.jsx)(r.p,{children:"To upgrade an Apache Pulsar cluster, follow the upgrade sequence."}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"Upgrade ZooKeeper (optional)"}),"\n"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Canary test: test an upgraded version in one or a small set of ZooKeeper nodes."}),"\n",(0,a.jsx)(r.li,{children:"Rolling upgrade: rollout the upgraded version to all ZooKeeper servers incrementally, one at a time. Monitor your dashboard during the whole rolling upgrade process."}),"\n"]}),"\n",(0,a.jsxs)(r.ol,{start:"2",children:["\n",(0,a.jsx)(r.li,{children:"Upgrade bookies"}),"\n"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Canary test: test an upgraded version in one or a small set of bookies."}),"\n",(0,a.jsxs)(r.li,{children:["Rolling upgrade:","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["a. Disable ",(0,a.jsx)(r.code,{children:"autorecovery"})," with the following command."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"\nbin/bookkeeper shell autorecovery -disable\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"b. Rollout the upgraded version to all bookies in the cluster after you determine that a version is safe after canary."}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["c. After you upgrade all bookies, re-enable ",(0,a.jsx)(r.code,{children:"autorecovery"})," with the following command."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"\nbin/bookkeeper shell autorecovery -enable\n\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.ol,{start:"3",children:["\n",(0,a.jsx)(r.li,{children:"Upgrade brokers"}),"\n"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Canary test: test an upgraded version in one or a small set of brokers."}),"\n",(0,a.jsx)(r.li,{children:"Rolling upgrade: rollout the upgraded version to all brokers in the cluster after you determine that a version is safe after canary."}),"\n"]}),"\n",(0,a.jsxs)(r.ol,{start:"4",children:["\n",(0,a.jsx)(r.li,{children:"Upgrade proxies"}),"\n"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Canary test: test an upgraded version in one or a small set of proxies."}),"\n",(0,a.jsx)(r.li,{children:"Rolling upgrade: rollout the upgraded version to all proxies in the cluster after you determine that a version is safe after canary."}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"upgrade-zookeeper-optional",children:"Upgrade ZooKeeper (optional)"}),"\n",(0,a.jsx)(r.p,{children:"While you upgrade ZooKeeper servers, you can do canary test first, and then upgrade all ZooKeeper servers in the cluster."}),"\n",(0,a.jsx)(r.h3,{id:"canary-test",children:"Canary test"}),"\n",(0,a.jsx)(r.p,{children:"You can test an upgraded version in one of ZooKeeper servers before upgrading all ZooKeeper servers in your cluster."}),"\n",(0,a.jsx)(r.p,{children:"To upgrade ZooKeeper server to a new version, complete the following steps:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"Stop a ZooKeeper server."}),"\n",(0,a.jsx)(r.li,{children:"Upgrade the binary and configuration files."}),"\n",(0,a.jsx)(r.li,{children:"Start the ZooKeeper server with the new binary files."}),"\n",(0,a.jsxs)(r.li,{children:["Use ",(0,a.jsx)(r.code,{children:"pulsar zookeeper-shell"})," to connect to the newly upgraded ZooKeeper server and run a few commands to verify if it works as expected."]}),"\n",(0,a.jsx)(r.li,{children:"Run the ZooKeeper server for a few days, observe and make sure the ZooKeeper cluster runs well."}),"\n"]}),"\n",(0,a.jsx)(r.h4,{id:"canary-rollback",children:"Canary rollback"}),"\n",(0,a.jsx)(r.p,{children:"If issues occur during canary test, you can shut down the problematic ZooKeeper node, revert the binary and configuration, and restart the ZooKeeper with the reverted binary."}),"\n",(0,a.jsx)(r.h3,{id:"upgrade-all-zookeeper-servers",children:"Upgrade all ZooKeeper servers"}),"\n",(0,a.jsx)(r.p,{children:"After canary test to upgrade one ZooKeeper in your cluster, you can upgrade all ZooKeeper servers in your cluster."}),"\n",(0,a.jsx)(r.p,{children:"You can upgrade all ZooKeeper servers one by one by following steps in canary test."}),"\n",(0,a.jsx)(r.h2,{id:"upgrade-bookies",children:"Upgrade bookies"}),"\n",(0,a.jsxs)(r.p,{children:["While you upgrade bookies, you can do canary test first, and then upgrade all bookies in the cluster.\nFor more details, you can read Apache BookKeeper ",(0,a.jsx)(r.a,{href:"http://bookkeeper.apache.org/docs/latest/admin/upgrade",children:"Upgrade guide"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"canary-test-1",children:"Canary test"}),"\n",(0,a.jsx)(r.p,{children:"You can test an upgraded version in one or a small set of bookies before upgrading all bookies in your cluster."}),"\n",(0,a.jsx)(r.p,{children:"To upgrade bookie to a new version, complete the following steps:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Stop a bookie."}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Upgrade the binary and configuration files."}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Start the bookie in ",(0,a.jsx)(r.code,{children:"ReadOnly"})," mode to verify if the bookie of this new version runs well for read workload."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"\nbin/pulsar bookie --readOnly\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["When the bookie runs successfully in ",(0,a.jsx)(r.code,{children:"ReadOnly"})," mode, stop the bookie and restart it in ",(0,a.jsx)(r.code,{children:"Write/Read"})," mode."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"\nbin/pulsar bookie\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Observe and make sure the cluster serves both write and read traffic."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h4,{id:"canary-rollback-1",children:"Canary rollback"}),"\n",(0,a.jsx)(r.p,{children:"If issues occur during the canary test, you can shut down the problematic bookie node. Other bookies in the cluster replaces this problematic bookie node with autorecovery."}),"\n",(0,a.jsx)(r.h3,{id:"upgrade-all-bookies",children:"Upgrade all bookies"}),"\n",(0,a.jsx)(r.p,{children:"After canary test to upgrade some bookies in your cluster, you can upgrade all bookies in your cluster."}),"\n",(0,a.jsx)(r.p,{children:"Before upgrading, you have to decide whether to upgrade the whole cluster at once, including downtime and rolling upgrade scenarios."}),"\n",(0,a.jsx)(r.p,{children:"In a rolling upgrade scenario, upgrade one bookie at a time. In a downtime upgrade scenario, shut down the entire cluster, upgrade each bookie, and then start the cluster."}),"\n",(0,a.jsx)(r.p,{children:"While you upgrade in both scenarios, the procedure is the same for each bookie."}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"Stop the bookie."}),"\n",(0,a.jsx)(r.li,{children:"Upgrade the software (either new binary or new configuration files)."}),"\n",(0,a.jsx)(r.li,{children:"Start the bookie."}),"\n"]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Advanced operations"}),"\nWhen you upgrade a large BookKeeper cluster in a rolling upgrade scenario, upgrading one bookie at a time is slow. If you configure rack-aware or region-aware placement policy, you can upgrade bookies rack by rack or region by region, which speeds up the whole upgrade process."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"upgrade-brokers-and-proxies",children:"Upgrade brokers and proxies"}),"\n",(0,a.jsxs)(r.p,{children:["The upgrade procedure for brokers and proxies is the same. Brokers and proxies are ",(0,a.jsx)(r.code,{children:"stateless"}),", so upgrading the two services is easy."]}),"\n",(0,a.jsx)(r.h3,{id:"canary-test-2",children:"Canary test"}),"\n",(0,a.jsx)(r.p,{children:"You can test an upgraded version in one or a small set of nodes before upgrading all nodes in your cluster."}),"\n",(0,a.jsx)(r.p,{children:"To upgrade to a new version, complete the following steps:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"Stop a broker (or proxy)."}),"\n",(0,a.jsx)(r.li,{children:"Upgrade the binary and configuration file."}),"\n",(0,a.jsx)(r.li,{children:"Start a broker (or proxy)."}),"\n"]}),"\n",(0,a.jsx)(r.h4,{id:"canary-rollback-2",children:"Canary rollback"}),"\n",(0,a.jsx)(r.p,{children:"If issues occur during canary test, you can shut down the problematic broker (or proxy) node. Revert to the old version and restart the broker (or proxy)."}),"\n",(0,a.jsx)(r.h3,{id:"upgrade-all-brokers-or-proxies",children:"Upgrade all brokers or proxies"}),"\n",(0,a.jsx)(r.p,{children:"After canary test to upgrade some brokers or proxies in your cluster, you can upgrade all brokers or proxies in your cluster."}),"\n",(0,a.jsx)(r.p,{children:"Before upgrading, you have to decide whether to upgrade the whole cluster at once, including downtime and rolling upgrade scenarios."}),"\n",(0,a.jsx)(r.p,{children:"In a rolling upgrade scenario, you can upgrade one broker or one proxy at a time if the size of the cluster is small. If your cluster is large, you can upgrade brokers or proxies in batches. When you upgrade a batch of brokers or proxies, make sure the remaining brokers and proxies in the cluster have enough capacity to handle the traffic during upgrade."}),"\n",(0,a.jsx)(r.p,{children:"In a downtime upgrade scenario, shut down the entire cluster, upgrade each broker or proxy, and then start the cluster."}),"\n",(0,a.jsx)(r.p,{children:"While you upgrade in both scenarios, the procedure is the same for each broker or proxy."}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"Stop the broker or proxy."}),"\n",(0,a.jsx)(r.li,{children:"Upgrade the software (either new binary or new configuration files)."}),"\n",(0,a.jsx)(r.li,{children:"Start the broker or proxy."}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>l});var o=n(96540);const a={},s=o.createContext(a);function i(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);