"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[88836],{79495:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"admin-api-brokers","title":"Managing Brokers","description":"Important","source":"@site/versioned_docs/version-2.10.x/admin-api-brokers.md","sourceDirName":".","slug":"/admin-api-brokers","permalink":"/docs/2.10.x/admin-api-brokers","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/admin-api-brokers.md","tags":[],"version":"2.10.x","frontMatter":{"id":"admin-api-brokers","title":"Managing Brokers","sidebar_label":"Brokers","original_id":"admin-api-brokers"},"sidebar":"docsSidebar","previous":{"title":"Tenants","permalink":"/docs/2.10.x/admin-api-tenants"},"next":{"title":"Namespaces","permalink":"/docs/2.10.x/admin-api-namespaces"}}');var s=a(74848),i=a(28453),l=a(11470),o=a(19365);const t={id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers",original_id:"admin-api-brokers"},c=void 0,d={},u=[{value:"Brokers resources",id:"brokers-resources",level:2},{value:"List active brokers",id:"list-active-brokers",level:3},{value:"Get the information of the leader broker",id:"get-the-information-of-the-leader-broker",level:3},{value:"list of namespaces owned by a given broker",id:"list-of-namespaces-owned-by-a-given-broker",level:4},{value:"Dynamic broker configuration",id:"dynamic-broker-configuration",level:3},{value:"Update dynamic configuration",id:"update-dynamic-configuration",level:3},{value:"List updated values",id:"list-updated-values",level:3},{value:"List all",id:"list-all",level:3}];function h(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Important"})}),"\n",(0,s.jsxs)(r.p,{children:["This page only shows ",(0,s.jsx)(r.strong,{children:"some frequently used operations"}),"."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["For the latest and complete information about ",(0,s.jsx)(r.code,{children:"Pulsar admin"}),", including commands, flags, descriptions, and more information, see ",(0,s.jsx)(r.a,{href:"pathname:///reference/#/2.10.x/pulsar-admin/",children:"Pulsar admin doc"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["For the latest and complete information about ",(0,s.jsx)(r.code,{children:"REST API"}),", including parameters, responses, samples, and more, see ",(0,s.jsx)(r.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API doc."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["For the latest and complete information about ",(0,s.jsx)(r.code,{children:"Java admin API"}),", including classes, methods, descriptions, and more, see ",(0,s.jsx)(r.a,{href:"https://pulsar.apache.org/api/admin/2.10.x/",children:"Java admin API doc"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Pulsar brokers consist of two components:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["An HTTP server exposing a ",(0,s.jsx)(r.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," interface administration and ",(0,s.jsx)(r.a,{href:"/docs/2.10.x/reference-terminology#topic",children:"topic"})," lookup."]}),"\n",(0,s.jsxs)(r.li,{children:["A dispatcher that handles all Pulsar ",(0,s.jsx)(r.a,{href:"/docs/2.10.x/reference-terminology#message",children:"message"})," transfers."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/2.10.x/reference-terminology#broker",children:"Brokers"})," can be managed via:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["The ",(0,s.jsx)(r.code,{children:"brokers"})," command of the ",(0,s.jsx)(r.a,{href:"pathname:///reference/#/2.10.x/pulsar-admin/",children:(0,s.jsx)(r.code,{children:"pulsar-admin"})})," tool"]}),"\n",(0,s.jsxs)(r.li,{children:["The ",(0,s.jsx)(r.code,{children:"/admin/v2/brokers"})," endpoint of the admin ",(0,s.jsx)(r.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API"]}),"\n",(0,s.jsxs)(r.li,{children:["The ",(0,s.jsx)(r.code,{children:"brokers"})," method of the ",(0,s.jsx)(r.code,{children:"PulsarAdmin"})," object in the ",(0,s.jsx)(r.a,{href:"/docs/2.10.x/client-libraries-java",children:"Java API"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["In addition to being configurable when you start them up, brokers can also be ",(0,s.jsx)(r.a,{href:"#dynamic-broker-configuration",children:"dynamically configured"}),"."]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["See the ",(0,s.jsx)(r.a,{href:"/docs/2.10.x/reference-configuration#broker",children:"Configuration"})," page for a full listing of broker-specific configuration parameters."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"brokers-resources",children:"Brokers resources"}),"\n",(0,s.jsx)(r.h3,{id:"list-active-brokers",children:"List active brokers"}),"\n",(0,s.jsx)(r.p,{children:"Fetch all available active brokers that are serving traffic with cluster name."}),"\n",(0,s.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,s.jsxs)(o.A,{value:"pulsar-admin",children:[(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"\n$ pulsar-admin brokers list use\n\n"})}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"\nbroker1.use.org.com:8080\n\n"})})]}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.10.6&apiversion=v2#operation/getActiveBrokers",children:["GET /admin/v2/brokers/",":cluster","/getActiveBrokers"]})})}),(0,s.jsx)(o.A,{value:"JAVA",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-java",children:"\nadmin.brokers().getActiveBrokers(clusterName)\n\n"})})})]}),"\n",(0,s.jsx)(r.h3,{id:"get-the-information-of-the-leader-broker",children:"Get the information of the leader broker"}),"\n",(0,s.jsx)(r.p,{children:"Fetch the information of the leader broker, for example, the service url."}),"\n",(0,s.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,s.jsxs)(o.A,{value:"pulsar-admin",children:[(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"\n$ pulsar-admin brokers leader-broker\n\n"})}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"\nBrokerInfo(serviceUrl=broker1.use.org.com:8080)\n\n"})})]}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.10.6&apiversion=v2#operation/getLeaderBroker",children:"GET /admin/v2/brokers/leaderBroker/getLeaderBroker"})})}),(0,s.jsxs)(o.A,{value:"JAVA",children:[(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-java",children:"\nadmin.brokers().getLeaderBroker()\n\n"})}),(0,s.jsxs)(r.p,{children:["For the detail of the code above, see ",(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/BrokersImpl.java#L80",children:"here"})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"list-of-namespaces-owned-by-a-given-broker",children:"list of namespaces owned by a given broker"}),"\n",(0,s.jsx)(r.p,{children:"It finds all namespaces which are owned and served by a given broker."}),"\n",(0,s.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,s.jsxs)(o.A,{value:"pulsar-admin",children:[(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"\n$ pulsar-admin brokers namespaces use \\\n  --url broker1.use.org.com:8080\n\n"})}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'\n{\n  "my-property/use/my-ns/0x00000000_0xffffffff": {\n    "broker_assignment": "shared",\n    "is_controlled": false,\n    "is_active": true\n  }\n}\n\n'})})]}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.10.6&apiversion=v2#operation/getOwnedNamespaes",children:["GET /admin/v2/brokers/",":cluster","/",":broker","/ownedNamespaces/getOwnedNamespaes"]})})}),(0,s.jsx)(o.A,{value:"JAVA",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-java",children:"\nadmin.brokers().getOwnedNamespaces(cluster,brokerUrl);\n\n"})})})]}),"\n",(0,s.jsx)(r.h3,{id:"dynamic-broker-configuration",children:"Dynamic broker configuration"}),"\n",(0,s.jsxs)(r.p,{children:["One way to configure a Pulsar ",(0,s.jsx)(r.a,{href:"/docs/2.10.x/reference-terminology#broker",children:"broker"})," is to supply a ",(0,s.jsx)(r.a,{href:"/docs/2.10.x/reference-configuration#broker",children:"configuration"})," when the broker is ",(0,s.jsx)(r.a,{href:"/docs/2.10.x/reference-cli-tools#pulsar-broker",children:"started up"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["But since all broker configuration in Pulsar is stored in ZooKeeper, configuration values can also be dynamically updated ",(0,s.jsx)(r.em,{children:"while the broker is running"}),". When you update broker configuration dynamically, ZooKeeper will notify the broker of the change and the broker will then override any existing configuration values."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["The ",(0,s.jsx)(r.a,{href:"/docs/2.10.x/pulsar-admin#brokers",children:(0,s.jsx)(r.code,{children:"brokers"})})," command for the ",(0,s.jsx)(r.a,{href:"/docs/2.10.x/pulsar-admin",children:(0,s.jsx)(r.code,{children:"pulsar-admin"})})," tool has a variety of subcommands that enable you to manipulate a broker's configuration dynamically, enabling you to ",(0,s.jsx)(r.a,{href:"#update-dynamic-configuration",children:"update config values"})," and more."]}),"\n",(0,s.jsxs)(r.li,{children:["In the Pulsar admin ",(0,s.jsx)(r.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API, dynamic configuration is managed through the ",(0,s.jsx)(r.code,{children:"/admin/v2/brokers/configuration"})," endpoint."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"update-dynamic-configuration",children:"Update dynamic configuration"}),"\n",(0,s.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,s.jsxs)(o.A,{value:"pulsar-admin",children:[(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.a,{href:"/docs/2.10.x/pulsar-admin#brokers-update-dynamic-config",children:(0,s.jsx)(r.code,{children:"update-dynamic-config"})})," subcommand will update existing configuration. It takes two arguments: the name of the parameter and the new value using the ",(0,s.jsx)(r.code,{children:"config"})," and ",(0,s.jsx)(r.code,{children:"value"})," flag respectively. Here's an example for the ",(0,s.jsx)(r.a,{href:"/docs/2.10.x/reference-configuration#broker-brokerShutdownTimeoutMs",children:(0,s.jsx)(r.code,{children:"brokerShutdownTimeoutMs"})})," parameter:"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"\n$ pulsar-admin brokers update-dynamic-config --config brokerShutdownTimeoutMs --value 100\n\n"})})]}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.10.6&apiversion=v2#operation/updateDynamicConfiguration",children:["POST /admin/v2/brokers/configuration/",":configName","/",":configValue","/updateDynamicConfiguration"]})})}),(0,s.jsx)(o.A,{value:"JAVA",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-java",children:"\nadmin.brokers().updateDynamicConfiguration(configName, configValue);\n\n"})})})]}),"\n",(0,s.jsx)(r.h3,{id:"list-updated-values",children:"List updated values"}),"\n",(0,s.jsx)(r.p,{children:"Fetch a list of all potentially updatable configuration parameters."}),"\n",(0,s.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,s.jsx)(o.A,{value:"pulsar-admin",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"\n$ pulsar-admin brokers list-dynamic-config\nbrokerShutdownTimeoutMs\n\n"})})}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.10.6&apiversion=v2#operation/getDynamicConfigurationName",children:"GET /admin/v2/brokers/configuration/getDynamicConfigurationName"})})}),(0,s.jsx)(o.A,{value:"JAVA",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-java",children:"\nadmin.brokers().getDynamicConfigurationNames();\n\n"})})})]}),"\n",(0,s.jsx)(r.h3,{id:"list-all",children:"List all"}),"\n",(0,s.jsx)(r.p,{children:"Fetch a list of all parameters that have been dynamically updated."}),"\n",(0,s.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,s.jsx)(o.A,{value:"pulsar-admin",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"\n$ pulsar-admin brokers get-all-dynamic-config\nbrokerShutdownTimeoutMs:100\n\n"})})}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.10.6&apiversion=v2#operation/getAllDynamicConfigurations",children:"GET /admin/v2/brokers/configuration/values/getAllDynamicConfigurations"})})}),(0,s.jsx)(o.A,{value:"JAVA",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-java",children:"\nadmin.brokers().getAllDynamicConfigurations();\n\n"})})})]})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,r,a)=>{a.d(r,{A:()=>l});a(96540);var n=a(34164);const s={tabItem:"tabItem_Ymn6"};var i=a(74848);function l(e){let{children:r,hidden:a,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:a,children:r})}},11470:(e,r,a)=>{a.d(r,{A:()=>A});var n=a(96540),s=a(34164),i=a(23104),l=a(56347),o=a(205),t=a(57485),c=a(31682),d=a(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:a}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:a,attributes:n,default:s}}=e;return{value:r,label:a,attributes:n,default:s}}))}(a);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,a])}function p(e){let{value:r,tabValues:a}=e;return a.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:a}=e;const s=(0,l.W6)(),i=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,t.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(s.location.search);r.set(i,e),s.replace({...s.location,search:r.toString()})}),[i,s])]}function f(e){const{defaultValue:r,queryString:a=!1,groupId:s}=e,i=h(e),[l,t]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:i}))),[c,u]=m({queryString:a,groupId:s}),[f,b]=function(e){let{groupId:r}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,i]=(0,d.Dv)(a);return[s,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:s}),x=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&t(x)}),[x]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);t(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=a(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function v(e){let{className:r,block:a,selectedValue:n,selectValue:l,tabValues:o}=e;const t=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const r=e.currentTarget,a=t.indexOf(r),s=o[a].value;s!==n&&(c(r),l(s))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=t.indexOf(e.currentTarget)+1;r=t[a]??t[0];break}case"ArrowLeft":{const a=t.indexOf(e.currentTarget)-1;r=t[a]??t[t.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},r),children:o.map((e=>{let{value:r,label:a,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>t.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":n===r}),children:a??r},r)}))})}function j(e){let{lazy:r,children:a,selectedValue:i}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==i})))})}function k(e){const r=f(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...r,...e}),(0,g.jsx)(j,{...r,...e})]})}function A(e){const r=(0,b.A)();return(0,g.jsx)(k,{...e,children:u(e.children)},String(r))}},28453:(e,r,a)=>{a.d(r,{R:()=>l,x:()=>o});var n=a(96540);const s={},i=n.createContext(s);function l(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);