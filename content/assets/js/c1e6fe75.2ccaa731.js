"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[49285],{96991:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"client-libraries-cluster-level-failover","title":"Configure cluster-level failover","description":"Learn how to configure cluster-level failover in Pulsar.","source":"@site/versioned_docs/version-3.3.x/client-libraries-cluster-level-failover.md","sourceDirName":".","slug":"/client-libraries-cluster-level-failover","permalink":"/docs/3.3.x/client-libraries-cluster-level-failover","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/client-libraries-cluster-level-failover.md","tags":[],"version":"3.3.x","frontMatter":{"id":"client-libraries-cluster-level-failover","title":"Configure cluster-level failover","sidebar_label":"Configure cluster-level failover","description":"Learn how to configure cluster-level failover in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"Work with schema","permalink":"/docs/3.3.x/client-libraries-schema"},"next":{"title":"Overview","permalink":"/docs/3.3.x/admin-api-overview"}}');var l=t(74848),s=t(28453);t(89089),t(19365);const i={id:"client-libraries-cluster-level-failover",title:"Configure cluster-level failover",sidebar_label:"Configure cluster-level failover",description:"Learn how to configure cluster-level failover in Pulsar."},a=void 0,c={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure cluster-level failover",id:"configure-cluster-level-failover",level:2},{value:"Automatic failover",id:"automatic-failover",level:3},{value:"Controlled failover",id:"controlled-failover",level:3}];function u(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.p,{children:["For more information about cluster-level failover, including concepts, benefits, use cases, constraints, usage and working principles, see ",(0,l.jsx)(r.a,{href:"/docs/3.3.x/concepts-cluster-level-failover",children:"Cluster-level failover concepts"}),"."]}),"\n",(0,l.jsx)(r.admonition,{type:"tip",children:(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:"You should configure cluster-level failover only when the cluster contains sufficient resources to handle all possible consequences. Workload intensity on the backup cluster may increase significantly."}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsx)(r.p,{children:"Connect your clusters to an uninterruptible power supply (UPS) unit to reduce the risk of unexpected power loss."}),"\n"]}),"\n"]})}),"\n",(0,l.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"Pulsar Java client 2.10 or later versions."}),"\n",(0,l.jsxs)(r.li,{children:["For backup clusters:","\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"The number of BookKeeper nodes should be equal to or greater than the ensemble quorum."}),"\n",(0,l.jsx)(r.li,{children:"The number of ZooKeeper nodes should be equal to or greater than 3."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.strong,{children:"Turn on geo-replication"})," between the primary cluster and any dependent cluster (primary to backup or backup to backup) to prevent data loss."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"/docs/3.3.x/administration-geo#enable-replicated-subscription",children:"Enable replicated subscription"}),"."]}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"configure-cluster-level-failover",children:"Configure cluster-level failover"}),"\n",(0,l.jsx)(r.h3,{id:"automatic-failover",children:"Automatic failover"}),"\n",(0,l.jsx)(r.p,{children:"This is an example of how to construct a Java Pulsar client to use automatic cluster-level failover. The switchover is triggered automatically."}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-java",children:'private PulsarClient getAutoFailoverClient() throws PulsarClientException {\n    String primaryUrl = "pulsar+ssl://localhost:6651";\n    String secondaryUrl = "pulsar+ssl://localhost:6661";\n    String primaryTlsTrustCertsFilePath = "primary/path";\n    String secondaryTlsTrustCertsFilePath = "secondary/path";\n    Authentication primaryAuthentication = AuthenticationFactory.create(\n        "org.apache.pulsar.client.impl.auth.AuthenticationTls",\n        "tlsCertFile:/path/to/primary-my-role.cert.pem,"\n                + "tlsKeyFile:/path/to/primary-role.key-pk8.pem");\n    Authentication secondaryAuthentication = AuthenticationFactory.create(\n        "org.apache.pulsar.client.impl.auth.AuthenticationTls",\n        "tlsCertFile:/path/to/secondary-my-role.cert.pem,"\n                + "tlsKeyFile:/path/to/secondary-role.key-pk8.pem");\n\n    // You can put more failover cluster config in to map\n    Map<String, String> secondaryTlsTrustCertsFilePaths = new HashMap<>();\n    secondaryTlsTrustCertsFilePaths.put(secondaryUrl, secondaryTlsTrustCertsFilePath);\n    Map<String, Authentication> secondaryAuthentications = new HashMap<>();\n    secondaryAuthentications.put(secondaryUrl, secondaryAuthentication);\n    ServiceUrlProvider failover = AutoClusterFailover.builder()\n        .primary(primaryUrl)\n        .secondary(List.of(secondaryUrl))\n        .failoverDelay(30, TimeUnit.SECONDS)\n        .switchBackDelay(60, TimeUnit.SECONDS)\n        .checkInterval(1000, TimeUnit.MILLISECONDS)\n        .secondaryTlsTrustCertsFilePath(secondaryTlsTrustCertsFilePaths)\n        .secondaryAuthentication(secondaryAuthentications)\n        .build();\n\n    PulsarClient pulsarClient = PulsarClient.builder()\n        .serviceUrlProvider(failover)\n        .authentication(primaryAuthentication)\n        .tlsTrustCertsFilePath(primaryTlsTrustCertsFilePath)\n        .build();\n\n    failover.initialize(pulsarClient);\n    return pulsarClient;\n}\n'})}),"\n",(0,l.jsx)(r.p,{children:"Configure the following parameters:"}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"Parameter"}),(0,l.jsx)(r.th,{children:"Default value"}),(0,l.jsx)(r.th,{children:"Required?"}),(0,l.jsx)(r.th,{children:"Description"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"primary"})}),(0,l.jsx)(r.td,{children:"N/A"}),(0,l.jsx)(r.td,{children:"Yes"}),(0,l.jsx)(r.td,{children:"Service URL of the primary cluster."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"secondary"})}),(0,l.jsx)(r.td,{children:"N/A"}),(0,l.jsx)(r.td,{children:"Yes"}),(0,l.jsxs)(r.td,{children:["Service URL(s) of one or several backup clusters.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"You can specify several backup clusters using a comma-separated list.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{})," Note that:",(0,l.jsx)("br",{}),"- The backup cluster is chosen in the sequence shown in the list. ",(0,l.jsx)("br",{}),"- If all backup clusters are available, the Pulsar client chooses the first backup cluster."]})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"failoverDelay"})}),(0,l.jsx)(r.td,{children:"N/A"}),(0,l.jsx)(r.td,{children:"Yes"}),(0,l.jsxs)(r.td,{children:["The delay before the Pulsar client switches from the primary cluster to the backup cluster.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"Automatic failover is controlled by a probe task: ",(0,l.jsx)("br",{}),"1) The probe task first checks the health status of the primary cluster. ",(0,l.jsx)("br",{})," 2) If the probe task finds the continuous failure time of the primary cluster exceeds ",(0,l.jsx)(r.code,{children:"failoverDelayMs"}),", it switches the Pulsar client to the backup cluster."]})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"switchBackDelay"})}),(0,l.jsx)(r.td,{children:"N/A"}),(0,l.jsx)(r.td,{children:"Yes"}),(0,l.jsxs)(r.td,{children:["The delay before the Pulsar client switches from the backup cluster to the primary cluster.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"Automatic failover switchover is controlled by a probe task: ",(0,l.jsx)("br",{})," 1) After the Pulsar client switches from the primary cluster to the backup cluster, the probe task continues to check the status of the primary cluster. ",(0,l.jsx)("br",{})," 2) If the primary cluster functions well and continuously remains active longer than ",(0,l.jsx)(r.code,{children:"switchBackDelay"}),", the Pulsar client switches back to the primary cluster."]})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"checkInterval"})}),(0,l.jsx)(r.td,{children:"30s"}),(0,l.jsx)(r.td,{children:"No"}),(0,l.jsx)(r.td,{children:"Frequency of performing a probe task (in seconds)."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"secondaryTlsTrustCertsFilePath"})}),(0,l.jsx)(r.td,{children:"N/A"}),(0,l.jsx)(r.td,{children:"No"}),(0,l.jsx)(r.td,{children:"Path to the trusted TLS certificate file of the backup cluster."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"secondaryAuthentication"})}),(0,l.jsx)(r.td,{children:"N/A"}),(0,l.jsx)(r.td,{children:"No"}),(0,l.jsx)(r.td,{children:"Authentication of the backup cluster."})]})]})]}),"\n",(0,l.jsx)(r.h3,{id:"controlled-failover",children:"Controlled failover"}),"\n",(0,l.jsx)(r.p,{children:"This is an example of how to construct a Java Pulsar client to use controlled cluster-level failover. The switchover is triggered by administrators manually."}),"\n",(0,l.jsx)(r.admonition,{type:"note",children:(0,l.jsx)(r.p,{children:"You can have one or several backup clusters but can only specify one."})}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-java",children:'public PulsarClient getControlledFailoverClient() throws IOException {\n    Map<String, String> header = new HashMap();\n    header.put("service_user_id", "my-user");\n    header.put("service_password", "tiger");\n    header.put("clusterA", "tokenA");\n    header.put("clusterB", "tokenB");\n\n    ServiceUrlProvider provider =\n            ControlledClusterFailover.builder()\n                    .defaultServiceUrl("pulsar://localhost:6650")\n                    .checkInterval(1, TimeUnit.MINUTES)\n                    .urlProvider("http://localhost:8080/test")\n                    .urlProviderHeader(header)\n                    .build();\n\n    PulsarClient pulsarClient =\n            PulsarClient.builder()\n                    .serviceUrlProvider(provider)\n                    .build();\n\n    provider.initialize(pulsarClient);\n    return pulsarClient;\n}\n'})}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"Parameter"}),(0,l.jsx)(r.th,{children:"Default value"}),(0,l.jsx)(r.th,{children:"Required?"}),(0,l.jsx)(r.th,{children:"Description"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"defaultServiceUrl"})}),(0,l.jsx)(r.td,{children:"N/A"}),(0,l.jsx)(r.td,{children:"Yes"}),(0,l.jsx)(r.td,{children:"Pulsar service URL."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"checkInterval"})}),(0,l.jsx)(r.td,{children:"30s"}),(0,l.jsx)(r.td,{children:"No"}),(0,l.jsx)(r.td,{children:"Frequency of performing a probe task (in seconds)."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"urlProvider"})}),(0,l.jsx)(r.td,{children:"N/A"}),(0,l.jsx)(r.td,{children:"Yes"}),(0,l.jsx)(r.td,{children:"URL provider service."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:(0,l.jsx)(r.code,{children:"urlProviderHeader"})}),(0,l.jsx)(r.td,{children:"N/A"}),(0,l.jsx)(r.td,{children:"No"}),(0,l.jsxs)(r.td,{children:[(0,l.jsx)(r.code,{children:"urlProviderHeader"})," is a map containing tokens and credentials. ",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"If you enable authentication or authorization between Pulsar clients and primary and backup clusters, you need to provide ",(0,l.jsx)(r.code,{children:"urlProviderHeader"}),"."]})]})]})]}),"\n",(0,l.jsxs)(r.p,{children:["Here is an example of how ",(0,l.jsx)(r.code,{children:"urlProviderHeader"})," works."]}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.img,{alt:"Workflow of urlProviderHeader in Pulsar",src:t(5153).A+"",width:"1350",height:"680"})}),"\n",(0,l.jsx)(r.p,{children:"Assume that you want to connect Pulsar client 1 to cluster A."}),"\n",(0,l.jsxs)(r.ol,{children:["\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsxs)(r.p,{children:["Pulsar client 1 sends the token ",(0,l.jsx)(r.em,{children:"t1"})," to the URL provider service."]}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsxs)(r.p,{children:["The URL provider service returns the credential ",(0,l.jsx)(r.em,{children:"c1"})," and the cluster A URL to the Pulsar client."]}),"\n",(0,l.jsx)(r.p,{children:"The URL provider service manages all tokens and credentials. It returns different credentials based on different tokens and different target cluster URLs to different Pulsar clients."}),"\n",(0,l.jsx)(r.admonition,{type:"note",children:(0,l.jsx)(r.p,{children:"The credential must be in a JSON file and contain parameters as shown."})}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-java",children:'{\n"serviceUrl": "pulsar+ssl://target:6651",\n"tlsTrustCertsFilePath": "/security/ca.cert.pem",\n"authPluginClassName":"org.apache.pulsar.client.impl.auth.AuthenticationTls",\n"authParamsString": " \\"tlsCertFile\\": \\"/security/client.cert.pem\\"\n    \\"tlsKeyFile\\": \\"/security/client-pk8.pem\\" "\n}\n'})}),"\n"]}),"\n",(0,l.jsxs)(r.li,{children:["\n",(0,l.jsxs)(r.p,{children:["Pulsar client 1 connects to cluster A using credential ",(0,l.jsx)(r.em,{children:"c1"}),"."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(34164);const l={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,i),hidden:t,children:r})}},89089:(e,r,t)=>{t.d(r,{A:()=>k});var n=t(96540),l=t(34164),s=t(23104),i=t(56347),a=t(205),c=t(57485),o=t(31682),u=t(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:l}}=e;return{value:r,label:t,attributes:n,default:l}}))}(t);return function(e){const r=(0,o.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function v(e){let{queryString:r=!1,groupId:t}=e;const l=(0,i.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(l.location.search);r.set(s,e),l.replace({...l.location,search:r.toString()})}),[s,l])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:l}=e,s=h(e),[i,c]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[o,d]=v({queryString:t,groupId:l}),[f,x]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[l,s]=(0,u.Dv)(t);return[l,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:l}),j=(()=>{const e=o??f;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{j&&c(j)}),[j]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(74848);function b(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),u=e=>{const r=e.currentTarget,t=c.indexOf(r),l=a[t].value;l!==n&&(o(r),i(l))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},r),children:a.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,l.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function g(e){const r=f(e);return(0,m.jsxs)("div",{className:(0,l.A)("tabs-container",j.tabList),children:[(0,m.jsx)(b,{...r,...e}),(0,m.jsx)(y,{...r,...e})]})}function k(e){const r=(0,x.A)();return(0,m.jsx)(g,{...e,children:d(e.children)},String(r))}},5153:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/cluster-level-failover-3-e4c1f0e86f1652f300f2bc54d342b955.png"},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(96540);const l={},s=n.createContext(l);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);