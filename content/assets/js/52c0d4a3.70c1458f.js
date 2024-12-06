"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[19279],{53972:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"administration-upgrade","title":"Upgrade Guide","description":"Upgrade guidelines","source":"@site/versioned_docs/version-3.0.x/administration-upgrade.md","sourceDirName":".","slug":"/administration-upgrade","permalink":"/docs/3.0.x/administration-upgrade","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/administration-upgrade.md","tags":[],"version":"3.0.x","frontMatter":{"id":"administration-upgrade","title":"Upgrade Guide","sidebar_label":"Upgrade"},"sidebar":"docsSidebar","previous":{"title":"Pulsar proxy","permalink":"/docs/3.0.x/administration-proxy"},"next":{"title":"Pulsar isolation","permalink":"/docs/3.0.x/administration-isolation"}}');var a=n(74848),s=n(28453),t=n(11470),i=n(19365);const l={id:"administration-upgrade",title:"Upgrade Guide",sidebar_label:"Upgrade"},d=void 0,u={},c=[{value:"Upgrade guidelines",id:"upgrade-guidelines",level:2},{value:"Upgrade sequence",id:"upgrade-sequence",level:2},{value:"Upgrade ZooKeeper (optional)",id:"upgrade-zookeeper-optional",level:2},{value:"Canary test",id:"canary-test",level:3},{value:"Upgrade all ZooKeeper servers",id:"upgrade-all-zookeeper-servers",level:3},{value:"Upgrade bookies",id:"upgrade-bookies",level:2},{value:"Canary test",id:"canary-test-1",level:3},{value:"Upgrade all bookies",id:"upgrade-all-bookies",level:3},{value:"Upgrade brokers and proxies",id:"upgrade-brokers-and-proxies",level:2},{value:"Canary test",id:"canary-test-2",level:3},{value:"Upgrade all brokers or proxies",id:"upgrade-all-brokers-or-proxies",level:3}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"upgrade-guidelines",children:"Upgrade guidelines"}),"\n",(0,a.jsx)(r.p,{children:"Apache Pulsar is comprised of multiple components, ZooKeeper, bookies, and brokers. These components are either stateful or stateless. You do not have to upgrade ZooKeeper nodes unless you have special requirements. While you upgrade, you need to pay attention to bookies (stateful), brokers, and proxies (stateless)."}),"\n",(0,a.jsx)(r.p,{children:"Read the following guidelines before upgrading a Pulsar cluster."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Back up all your configuration files before upgrading."}),"\n",(0,a.jsx)(r.li,{children:"Read the guide entirely, make a plan, and then execute the plan. When you make an upgrade plan, you need to take your specific requirements and environment into consideration."}),"\n",(0,a.jsxs)(r.li,{children:["Pay attention to the ",(0,a.jsx)(r.a,{href:"#upgrade-sequence",children:"upgrade sequence of components"}),". In general, you do not need to upgrade your ZooKeeper or configuration store cluster (the global ZooKeeper cluster). You need to upgrade bookies first, and then upgrade brokers, proxies, and your clients."]}),"\n",(0,a.jsxs)(r.li,{children:["If ",(0,a.jsx)(r.code,{children:"autorecovery"})," is enabled, you need to disable ",(0,a.jsx)(r.code,{children:"autorecovery"})," in the upgrade process, and re-enable it after completing the process."]}),"\n",(0,a.jsx)(r.li,{children:"Read the release notes carefully for each release. Release notes contain features and configuration changes that might impact your upgrade."}),"\n",(0,a.jsx)(r.li,{children:"Upgrade a small subset of nodes of each type to canary test the new version before upgrading all nodes of that type in the cluster. When you have upgraded the canary nodes, run for a while to ensure that they work correctly."}),"\n",(0,a.jsx)(r.li,{children:"Upgrade one data center to verify the new version before upgrading all data centers if your cluster runs in multi-cluster replicated mode."}),"\n"]}),"\n",(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsx)(r.p,{children:"Currently, Apache Pulsar is compatible between versions."})}),"\n",(0,a.jsx)(r.h2,{id:"upgrade-sequence",children:"Upgrade sequence"}),"\n",(0,a.jsx)(r.p,{children:"To upgrade an Apache Pulsar cluster, follow the upgrade sequence."}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Upgrade ZooKeeper (optional)."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Canary test: test an upgraded version in one or a small set of ZooKeeper nodes."}),"\n",(0,a.jsx)(r.li,{children:"Rolling upgrade: roll out the upgraded version to all ZooKeeper servers incrementally, one at a time. Monitor your dashboard during the whole rolling upgrade process."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Upgrade bookies."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Canary test: test an upgraded version in one or a small set of bookies."}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Rolling upgrade:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["a. Disable ",(0,a.jsx)(r.code,{children:"autorecovery"})," with the following command."]}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"bin/bookkeeper shell autorecovery -disable\n"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"b. Roll out the upgraded version to all bookies in the cluster after you determine that a version is safe after canary."}),"\n",(0,a.jsxs)(r.li,{children:["c. After you upgrade all bookies, re-enable ",(0,a.jsx)(r.code,{children:"autorecovery"})," with the following command."]}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"bin/bookkeeper shell autorecovery -enable\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Upgrade brokers."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Canary test: test an upgraded version in one or a small set of brokers."}),"\n",(0,a.jsx)(r.li,{children:"Rolling upgrade: roll out the upgraded version to all brokers in the cluster after you determine that a version is safe after canary."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Upgrade proxies."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Canary test: test an upgraded version in one or a small set of proxies."}),"\n",(0,a.jsx)(r.li,{children:"Rolling upgrade: roll out the upgraded version to all proxies in the cluster after you determine that a version is safe after canary."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"upgrade-zookeeper-optional",children:"Upgrade ZooKeeper (optional)"}),"\n",(0,a.jsx)(r.p,{children:"While you upgrade ZooKeeper servers, you can do a canary test first, and then upgrade all ZooKeeper servers in the cluster."}),"\n",(0,a.jsx)(r.h3,{id:"canary-test",children:"Canary test"}),"\n",(0,a.jsx)(r.p,{children:"You can test an upgraded version in one of ZooKeeper servers before upgrading all ZooKeeper servers in your cluster."}),"\n",(0,a.jsx)(r.p,{children:"To upgrade a ZooKeeper server to a new version, complete the following steps:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"Stop the ZooKeeper server."}),"\n",(0,a.jsx)(r.li,{children:"Upgrade the binary and configuration files."}),"\n",(0,a.jsx)(r.li,{children:"Start the ZooKeeper server with the new binary files."}),"\n",(0,a.jsxs)(r.li,{children:["Use ",(0,a.jsx)(r.code,{children:"pulsar zookeeper-shell"})," to connect to the newly upgraded ZooKeeper server and run a few commands to verify if it works as expected."]}),"\n",(0,a.jsx)(r.li,{children:"Run the ZooKeeper server for a few days, observe and make sure the ZooKeeper cluster runs well."}),"\n"]}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsx)(r.p,{children:"If issues occur during the canary test, you can shut down the problematic ZooKeeper node, revert the binary and configuration, and restart the ZooKeeper with the reverted binary."})}),"\n",(0,a.jsx)(r.h3,{id:"upgrade-all-zookeeper-servers",children:"Upgrade all ZooKeeper servers"}),"\n",(0,a.jsx)(r.p,{children:"After the canary test to upgrade one ZooKeeper in your cluster, you can upgrade all ZooKeeper servers in your cluster."}),"\n",(0,a.jsx)(r.p,{children:"You can upgrade all ZooKeeper servers one by one by following the steps in the canary test."}),"\n",(0,a.jsx)(r.h2,{id:"upgrade-bookies",children:"Upgrade bookies"}),"\n",(0,a.jsxs)(r.p,{children:["While you upgrade bookies, you can do a canary test first, and then upgrade all bookies in the cluster.\nFor more details, you can read Apache BookKeeper ",(0,a.jsx)(r.a,{href:"https://bookkeeper.apache.org/docs/next/admin/upgrade",children:"Upgrade guide"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"canary-test-1",children:"Canary test"}),"\n",(0,a.jsx)(r.p,{children:"You can test an upgraded version in one or a small set of bookies before upgrading all bookies in your cluster."}),"\n",(0,a.jsx)(r.p,{children:"To upgrade a bookie to a new version, complete the following steps:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Stop the bookie."}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Upgrade the binary and configuration files."}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Start the bookie in ",(0,a.jsx)(r.code,{children:"ReadOnly"})," mode to verify if the bookie of this new version runs well for reading workload."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"bin/pulsar bookie --readOnly\n"})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["When the bookie runs successfully in ",(0,a.jsx)(r.code,{children:"ReadOnly"})," mode, stop the bookie and restart it in ",(0,a.jsx)(r.code,{children:"Write/Read"})," mode."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"bin/pulsar bookie\n"})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Observe and make sure the cluster serves both write and read traffic."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsx)(r.p,{children:"If issues occur during the canary test, you can shut down the problematic bookie node. Other bookies in the cluster replace this problematic bookie node with auto-recovery."})}),"\n",(0,a.jsx)(r.h3,{id:"upgrade-all-bookies",children:"Upgrade all bookies"}),"\n",(0,a.jsx)(r.p,{children:"After the canary test to upgrade some bookies in your cluster, you can upgrade all bookies in your cluster."}),"\n",(0,a.jsx)(r.p,{children:"Before upgrading, you have to decide whether to upgrade the whole cluster at once, including downtime and rolling upgrade scenarios."}),"\n",(0,a.jsx)(r.p,{children:"In a rolling upgrade scenario, upgrade one bookie at a time. In a downtime upgrade scenario, shut down the entire cluster, upgrade each bookie, and then start the cluster."}),"\n",(0,a.jsx)(r.p,{children:"While you upgrade in both scenarios, the procedure is the same for each bookie."}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"Stop the bookie."}),"\n",(0,a.jsx)(r.li,{children:"Upgrade the software (either new binary or new configuration files)."}),"\n",(0,a.jsx)(r.li,{children:"Start the bookie."}),"\n"]}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsx)(r.p,{children:"When you upgrade a large BookKeeper cluster in a rolling upgrade scenario, upgrading one bookie at a time is slow. If you configure a rack-aware or region-aware placement policy, you can upgrade bookies rack by rack or region by region, which speeds up the whole upgrade process."})}),"\n",(0,a.jsx)(r.h2,{id:"upgrade-brokers-and-proxies",children:"Upgrade brokers and proxies"}),"\n",(0,a.jsxs)(r.p,{children:["The upgrade procedure for brokers and proxies is the same. Brokers and proxies are ",(0,a.jsx)(r.code,{children:"stateless"}),", so upgrading the two services is easy."]}),"\n",(0,a.jsx)(r.h3,{id:"canary-test-2",children:"Canary test"}),"\n",(0,a.jsx)(r.p,{children:"You can test an upgraded version in one or a small set of nodes before upgrading all nodes in your cluster."}),"\n",(0,a.jsx)(r.p,{children:"To upgrade a broker (or proxy) to a new version, complete the following steps:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"Stop a broker (or proxy)."}),"\n",(0,a.jsx)(r.li,{children:"Upgrade the binary and configuration file."}),"\n",(0,a.jsx)(r.li,{children:"Start a broker (or proxy)."}),"\n"]}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsx)(r.p,{children:"If issues occur during the canary test, you can shut down the problematic broker (or proxy) node. Revert to the old version and restart the broker (or proxy)."})}),"\n",(0,a.jsx)(r.h3,{id:"upgrade-all-brokers-or-proxies",children:"Upgrade all brokers or proxies"}),"\n",(0,a.jsx)(r.p,{children:"After the canary test to upgrade some brokers or proxies in your cluster, you can upgrade all brokers or proxies in your cluster."}),"\n",(0,a.jsx)(r.p,{children:"Before upgrading, you have to decide whether to upgrade the whole cluster at once, including downtime and rolling upgrade scenarios."}),"\n",(0,a.jsx)(r.p,{children:"In a rolling upgrade scenario, you can upgrade one broker or one proxy at a time if the size of the cluster is small. If your cluster is large, you can upgrade brokers or proxies in batches. When you upgrade a batch of brokers or proxies, make sure the remaining brokers and proxies in the cluster have enough capacity to handle the traffic during the upgrade."}),"\n",(0,a.jsx)(r.p,{children:"In a downtime upgrade scenario, shut down the entire cluster, upgrade each broker or proxy, and then start the cluster."}),"\n",(0,a.jsx)(r.p,{children:"While you upgrade in both scenarios, the procedure is the same for each broker or proxy."}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"Stop the broker (or proxy)."}),"\n",(0,a.jsx)(r.li,{children:"Upgrade the software (either new binary or new configuration files)."}),"\n",(0,a.jsx)(r.li,{children:"Start the broker (or proxy)."}),"\n"]}),"\n",(0,a.jsxs)(r.admonition,{type:"tip",children:[(0,a.jsx)(r.p,{children:"To check the health of the broker, you can use the following command or API."}),(0,a.jsxs)(t.A,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"}],children:[(0,a.jsx)(i.A,{value:"Admin CLI",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"pulsar-admin brokers healthcheck\n"})})}),(0,a.jsx)(i.A,{value:"REST API",children:(0,a.jsxs)(r.p,{children:["Send a ",(0,a.jsx)(r.code,{children:"GET"})," request to this endpoint: ",(0,a.jsx)(r.a,{href:"https://pulsar.apache.org/admin-rest-api?version=3.0.8&apiVersion=v2#operation/BrokersBase_healthCheck",children:"GET /admin/v2/brokers/health"})]})})]})]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>t});n(96540);var o=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function t(e){let{children:r,hidden:n,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,t),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>k});var o=n(96540),a=n(34164),s=n(23104),t=n(56347),i=n(205),l=n(57485),d=n(31682),u=n(70679);function c(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:n}=e;return(0,o.useMemo)((()=>{const e=r??function(e){return c(e).map((e=>{let{props:{value:r,label:n,attributes:o,default:a}}=e;return{value:r,label:n,attributes:o,default:a}}))}(n);return function(e){const r=(0,d.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function h(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function g(e){let{queryString:r=!1,groupId:n}=e;const a=(0,t.W6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function x(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,s=p(e),[t,l]=(0,o.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:r,tabValues:s}))),[d,c]=g({queryString:n,groupId:a}),[x,b]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,u.Dv)(n);return[a,(0,o.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),f=(()=>{const e=d??x;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:t,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,s]),tabValues:s}}var b=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function m(e){let{className:r,block:n,selectedValue:o,selectValue:t,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),u=e=>{const r=e.currentTarget,n=l.indexOf(r),a=i[n].value;a!==o&&(d(r),t(a))},c=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:o===r?0:-1,"aria-selected":o===r,ref:e=>l.push(e),onKeyDown:c,onClick:u,...s,className:(0,a.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":o===r}),children:n??r},r)}))})}function j(e){let{lazy:r,children:n,selectedValue:s}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=t.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function v(e){const r=x(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,y.jsx)(m,{...r,...e}),(0,y.jsx)(j,{...r,...e})]})}function k(e){const r=(0,b.A)();return(0,y.jsx)(v,{...e,children:c(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>i});var o=n(96540);const a={},s=o.createContext(a);function t(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);