"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[96100],{4353:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>u,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"admin-api-clusters","title":"Managing Clusters","description":"Important","source":"@site/versioned_docs/version-2.4.0/admin-api-clusters.md","sourceDirName":".","slug":"/admin-api-clusters","permalink":"/docs/2.4.0/admin-api-clusters","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.0/admin-api-clusters.md","tags":[],"version":"2.4.0","frontMatter":{"id":"admin-api-clusters","title":"Managing Clusters","sidebar_label":"Clusters"},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/docs/2.4.0/admin-api-overview"},"next":{"title":"Tenants","permalink":"/docs/2.4.0/admin-api-tenants"}}');var n=s(74848),l=s(28453),t=s(89089),i=s(19365);const c={id:"admin-api-clusters",title:"Managing Clusters",sidebar_label:"Clusters"},u=void 0,o={},d=[{value:"Clusters resources",id:"clusters-resources",level:2},{value:"Provision",id:"provision",level:3},{value:"Initialize cluster metadata",id:"initialize-cluster-metadata",level:3},{value:"Get configuration",id:"get-configuration",level:3},{value:"Update",id:"update",level:3},{value:"Delete",id:"delete",level:3},{value:"List",id:"list",level:3},{value:"Update peer-cluster data",id:"update-peer-cluster-data",level:3}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Important"})}),"\n",(0,n.jsxs)(r.p,{children:["This page only shows ",(0,n.jsx)(r.strong,{children:"some frequently used operations"}),"."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["For the latest and complete information about ",(0,n.jsx)(r.code,{children:"Pulsar admin"}),", including commands, flags, descriptions, and more, see Pulsar admin doc"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["For the latest and complete information about ",(0,n.jsx)(r.code,{children:"REST API"}),", including parameters, responses, samples, and more, see ",(0,n.jsx)(r.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API doc."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["For the latest and complete information about ",(0,n.jsx)(r.code,{children:"Java admin API"}),", including classes, methods, descriptions, and more, see ",(0,n.jsx)(r.a,{href:"https://pulsar.apache.org/api/admin/",children:"Java admin API doc"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Pulsar clusters consist of one or more Pulsar ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/reference-terminology#broker",children:"brokers"}),", one or more ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/reference-terminology#bookkeeper",children:"BookKeeper"}),"\nservers (aka ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/reference-terminology#bookie",children:"bookies"}),"), and a ",(0,n.jsx)(r.a,{href:"https://zookeeper.apache.org",children:"ZooKeeper"})," cluster that provides configuration and coordination management."]}),"\n",(0,n.jsx)(r.p,{children:"Clusters can be managed via:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.code,{children:"clusters"})," command of the ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/reference-ulsar-admin",children:(0,n.jsx)(r.code,{children:"pulsar-admin"})})," tool"]}),"\n",(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.code,{children:"/admin/v2/clusters"})," endpoint of the admin ",(0,n.jsx)(r.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API"]}),"\n",(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.code,{children:"clusters"})," method of the ",(0,n.jsx)(r.code,{children:"PulsarAdmin"})," object in the ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/client-libraries-java",children:"Java API"})]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"clusters-resources",children:"Clusters resources"}),"\n",(0,n.jsx)(r.h3,{id:"provision",children:"Provision"}),"\n",(0,n.jsx)(r.p,{children:"New clusters can be provisioned using the admin interface."}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Please note that this operation requires superuser privileges."}),"\n"]}),"\n",(0,n.jsxs)(t.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,n.jsxs)(i.A,{value:"pulsar-admin",children:[(0,n.jsxs)(r.p,{children:["You can provision a new cluster using the ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/reference-ulsar-admin#clusters-create",children:(0,n.jsx)(r.code,{children:"create"})})," subcommand. Here's an example:"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"\n$ pulsar-admin clusters create cluster-1 \\\n  --url http://my-cluster.org.com:8080 \\\n  --broker-url pulsar://my-cluster.org.com:6650\n\n"})})]}),(0,n.jsx)(i.A,{value:"REST API",children:(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.4.0&apiversion=v2#operation/createCluster",children:["PUT /admin/v2/clusters/",":cluster","/createCluster"]})})}),(0,n.jsx)(i.A,{value:"JAVA",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"\nClusterData clusterData = new ClusterData(\n        serviceUrl,\n        serviceUrlTls,\n        brokerServiceUrl,\n        brokerServiceUrlTls\n);\nadmin.clusters().createCluster(clusterName, clusterData);\n\n"})})})]}),"\n",(0,n.jsx)(r.h3,{id:"initialize-cluster-metadata",children:"Initialize cluster metadata"}),"\n",(0,n.jsxs)(r.p,{children:["When provision a new cluster, you need to initialize that cluster's ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/concepts-architecture-overview#metadata-store",children:"metadata"}),". When initializing cluster metadata, you need to specify all of the following:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"The name of the cluster"}),"\n",(0,n.jsx)(r.li,{children:"The local metadata store connection string for the cluster"}),"\n",(0,n.jsx)(r.li,{children:"The configuration store connection string for the entire instance"}),"\n",(0,n.jsx)(r.li,{children:"The web service URL for the cluster"}),"\n",(0,n.jsxs)(r.li,{children:["A broker service URL enabling interaction with the ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/reference-terminology#broker",children:"brokers"})," in the cluster"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["You must initialize cluster metadata ",(0,n.jsx)(r.em,{children:"before"})," starting up any ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/admin-api-brokers",children:"brokers"})," that will belong to the cluster."]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"No cluster metadata initialization through the REST API or the Java admin API"})}),"\n",(0,n.jsxs)(r.p,{children:["Unlike most other admin functions in Pulsar, cluster metadata initialization cannot be performed via the admin REST API\nor the admin Java client, as metadata initialization involves communicating with ZooKeeper directly.\nInstead, you can use the ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/reference-cli-tools#pulsar",children:(0,n.jsx)(r.code,{children:"pulsar"})})," CLI tool, in particular\nthe ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/reference-cli-tools#pulsar-initialize-cluster-metadata",children:(0,n.jsx)(r.code,{children:"initialize-cluster-metadata"})})," command."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Here's an example cluster metadata initialization command:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"\nbin/pulsar initialize-cluster-metadata \\\n  --cluster us-west \\\n  --metadata-store zk:zk1.us-west.example.com:2181,zk2.us-west.example.com:2181/my-chroot-path \\\n  --configuration-metadata-store zk:zk1.us-west.example.com:2181,zk2.us-west.example.com:2181/my-chroot-path \\\n  --web-service-url http://pulsar.us-west.example.com:8080/ \\\n  --web-service-url-tls https://pulsar.us-west.example.com:8443/ \\\n  --broker-service-url pulsar://pulsar.us-west.example.com:6650/ \\\n  --broker-service-url-tls pulsar+ssl://pulsar.us-west.example.com:6651/\n\n"})}),"\n",(0,n.jsxs)(r.p,{children:["You'll need to use ",(0,n.jsx)(r.code,{children:"--*-tls"})," flags only if you're using ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/security-tls-authentication",children:"TLS authentication"})," in your instance."]}),"\n",(0,n.jsx)(r.h3,{id:"get-configuration",children:"Get configuration"}),"\n",(0,n.jsxs)(r.p,{children:["You can fetch the ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/reference-configuration",children:"configuration"})," for an existing cluster at any time."]}),"\n",(0,n.jsxs)(t.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,n.jsxs)(i.A,{value:"pulsar-admin",children:[(0,n.jsxs)(r.p,{children:["Use the ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/reference-ulsar-admin#clusters-get",children:(0,n.jsx)(r.code,{children:"get"})})," subcommand and specify the name of the cluster. Here's an example:"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:'\n$ pulsar-admin clusters get cluster-1\n{\n    "serviceUrl": "http://my-cluster.org.com:8080/",\n    "serviceUrlTls": null,\n    "brokerServiceUrl": "pulsar://my-cluster.org.com:6650/",\n    "brokerServiceUrlTls": null\n    "peerClusterNames": null\n}\n\n'})})]}),(0,n.jsx)(i.A,{value:"REST API",children:(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.4.0&apiversion=v2#operation/getCluster",children:["GET /admin/v2/clusters/",":cluster","/getCluster"]})})}),(0,n.jsx)(i.A,{value:"JAVA",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"\nadmin.clusters().getCluster(clusterName);\n\n"})})})]}),"\n",(0,n.jsx)(r.h3,{id:"update",children:"Update"}),"\n",(0,n.jsx)(r.p,{children:"You can update the configuration for an existing cluster at any time."}),"\n",(0,n.jsxs)(t.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,n.jsxs)(i.A,{value:"pulsar-admin",children:[(0,n.jsxs)(r.p,{children:["Use the ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/reference-ulsar-admin#clusters-update",children:(0,n.jsx)(r.code,{children:"update"})})," subcommand and specify new configuration values using flags."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"\n$ pulsar-admin clusters update cluster-1 \\\n  --url http://my-cluster.org.com:4081 \\\n  --broker-url pulsar://my-cluster.org.com:3350\n\n"})})]}),(0,n.jsx)(i.A,{value:"REST API",children:(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.4.0&apiversion=v2#operation/updateCluster",children:["POST /admin/v2/clusters/",":cluster","/updateCluster"]})})}),(0,n.jsx)(i.A,{value:"JAVA",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"\nClusterData clusterData = new ClusterData(\n        serviceUrl,\n        serviceUrlTls,\n        brokerServiceUrl,\n        brokerServiceUrlTls\n);\nadmin.clusters().updateCluster(clusterName, clusterData);\n\n"})})})]}),"\n",(0,n.jsx)(r.h3,{id:"delete",children:"Delete"}),"\n",(0,n.jsxs)(r.p,{children:["Clusters can be deleted from a Pulsar ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/reference-terminology#instance",children:"instance"}),"."]}),"\n",(0,n.jsxs)(t.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,n.jsxs)(i.A,{value:"pulsar-admin",children:[(0,n.jsxs)(r.p,{children:["Use the ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/reference-ulsar-admin#clusters-delete",children:(0,n.jsx)(r.code,{children:"delete"})})," subcommand and specify the name of the cluster."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"\n$ pulsar-admin clusters delete cluster-1\n\n"})})]}),(0,n.jsx)(i.A,{value:"REST API",children:(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.4.0&apiversion=v2#operation/deleteCluster",children:["DELETE /admin/v2/clusters/",":cluster","/deleteCluster"]})})}),(0,n.jsx)(i.A,{value:"JAVA",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"\nadmin.clusters().deleteCluster(clusterName);\n\n"})})})]}),"\n",(0,n.jsx)(r.h3,{id:"list",children:"List"}),"\n",(0,n.jsxs)(r.p,{children:["You can fetch a list of all clusters in a Pulsar ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/reference-terminology#instance",children:"instance"}),"."]}),"\n",(0,n.jsxs)(t.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,n.jsxs)(i.A,{value:"pulsar-admin",children:[(0,n.jsxs)(r.p,{children:["Use the ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/reference-ulsar-admin#clusters-list",children:(0,n.jsx)(r.code,{children:"list"})})," subcommand."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"\n$ pulsar-admin clusters list\ncluster-1\ncluster-2\n\n"})})]}),(0,n.jsx)(i.A,{value:"REST API",children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.4.0&apiversion=v2#operation/getClusters",children:"GET /admin/v2/clusters/getClusters"})})}),(0,n.jsx)(i.A,{value:"JAVA",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"\nadmin.clusters().getClusters();\n\n"})})})]}),"\n",(0,n.jsx)(r.h3,{id:"update-peer-cluster-data",children:"Update peer-cluster data"}),"\n",(0,n.jsxs)(r.p,{children:["Peer clusters can be configured for a given cluster in a Pulsar ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/reference-terminology#instance",children:"instance"}),"."]}),"\n",(0,n.jsxs)(t.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,n.jsxs)(i.A,{value:"pulsar-admin",children:[(0,n.jsxs)(r.p,{children:["Use the ",(0,n.jsx)(r.a,{href:"/docs/2.4.0/reference-ulsar-admin#clusters-update-peer-clusters",children:(0,n.jsx)(r.code,{children:"update-peer-clusters"})})," subcommand and specify the list of peer-cluster names."]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"\n$ pulsar-admin update-peer-clusters cluster-1 --peer-clusters cluster-2\n\n"})})]}),(0,n.jsx)(i.A,{value:"REST API",children:(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.4.0&apiversion=v2#operation/setPeerClusterNames",children:["POST /admin/v2/clusters/",":cluster","/peers/setPeerClusterNames"]})})}),(0,n.jsx)(i.A,{value:"JAVA",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"\nadmin.clusters().updatePeerClusterNames(clusterName, peerClusterList);\n\n"})})})]})]})}function p(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,r,s)=>{s.d(r,{A:()=>t});s(96540);var a=s(34164);const n={tabItem:"tabItem_Ymn6"};var l=s(74848);function t(e){let{children:r,hidden:s,className:t}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,t),hidden:s,children:r})}},89089:(e,r,s)=>{s.d(r,{A:()=>T});var a=s(96540),n=s(34164),l=s(23104),t=s(56347),i=s(205),c=s(57485),u=s(31682),o=s(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:s}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:s,attributes:a,default:n}}=e;return{value:r,label:s,attributes:a,default:n}}))}(s);return function(e){const r=(0,u.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,s])}function p(e){let{value:r,tabValues:s}=e;return s.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:s}=e;const n=(0,t.W6)(),l=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,c.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(n.location.search);r.set(l,e),n.replace({...n.location,search:r.toString()})}),[l,n])]}function x(e){const{defaultValue:r,queryString:s=!1,groupId:n}=e,l=h(e),[t,c]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:l}))),[u,d]=m({queryString:s,groupId:n}),[x,v]=function(e){let{groupId:r}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,l]=(0,o.Dv)(s);return[n,(0,a.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:n}),j=(()=>{const e=u??x;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{j&&c(j)}),[j]);return{selectedValue:t,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=s(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function b(e){let{className:r,block:s,selectedValue:a,selectValue:t,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),o=e=>{const r=e.currentTarget,s=c.indexOf(r),n=i[s].value;n!==a&&(u(r),t(n))},d=e=>{let r=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;r=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;r=c[s]??c[c.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},r),children:i.map((e=>{let{value:r,label:s,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>c.push(e),onKeyDown:d,onClick:o,...l,className:(0,n.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":a===r}),children:s??r},r)}))})}function g(e){let{lazy:r,children:s,selectedValue:l}=e;const t=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){const e=t.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==l})))})}function A(e){const r=x(e);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...r,...e}),(0,f.jsx)(g,{...r,...e})]})}function T(e){const r=(0,v.A)();return(0,f.jsx)(A,{...e,children:d(e.children)},String(r))}},28453:(e,r,s)=>{s.d(r,{R:()=>t,x:()=>i});var a=s(96540);const n={},l=a.createContext(n);function t(e){const r=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),a.createElement(l.Provider,{value:r},e.children)}}}]);