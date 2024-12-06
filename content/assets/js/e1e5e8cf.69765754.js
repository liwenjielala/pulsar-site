"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[69663],{54830:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"admin-api-brokers","title":"Managing Brokers","description":"Pulsar brokers consist of two components:","source":"@site/versioned_docs/version-2.7.4/admin-api-brokers.md","sourceDirName":".","slug":"/admin-api-brokers","permalink":"/docs/2.7.4/admin-api-brokers","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.4/admin-api-brokers.md","tags":[],"version":"2.7.4","frontMatter":{"id":"admin-api-brokers","title":"Managing Brokers","sidebar_label":"Brokers","original_id":"admin-api-brokers"},"sidebar":"docsSidebar","previous":{"title":"Tenants","permalink":"/docs/2.7.4/admin-api-tenants"},"next":{"title":"Namespaces","permalink":"/docs/2.7.4/admin-api-namespaces"}}');var s=r(74848),i=r(28453),l=r(89089),o=r(19365);const t={id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers",original_id:"admin-api-brokers"},c=void 0,d={},u=[{value:"Brokers resources",id:"brokers-resources",level:2},{value:"List active brokers",id:"list-active-brokers",level:3},{value:"list of namespaces owned by a given broker",id:"list-of-namespaces-owned-by-a-given-broker",level:4},{value:"Dynamic broker configuration",id:"dynamic-broker-configuration",level:3},{value:"Update dynamic configuration",id:"update-dynamic-configuration",level:3},{value:"List updated values",id:"list-updated-values",level:3},{value:"List all",id:"list-all",level:3}];function h(e){const a={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"Pulsar brokers consist of two components:"}),"\n",(0,s.jsxs)(a.ol,{children:["\n",(0,s.jsxs)(a.li,{children:["An HTTP server exposing a ",(0,s.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," interface administration and ",(0,s.jsx)(a.a,{href:"/docs/2.7.4/reference-terminology#topic",children:"topic"})," lookup."]}),"\n",(0,s.jsxs)(a.li,{children:["A dispatcher that handles all Pulsar ",(0,s.jsx)(a.a,{href:"/docs/2.7.4/reference-terminology#message",children:"message"})," transfers."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/docs/2.7.4/reference-terminology#broker",children:"Brokers"})," can be managed via:"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["The ",(0,s.jsx)(a.a,{href:"/docs/2.7.4/reference-pulsar-admin#brokers",children:(0,s.jsx)(a.code,{children:"brokers"})})," command of the ",(0,s.jsx)(a.a,{href:"/docs/2.7.4/reference-pulsar-admin",children:(0,s.jsx)(a.code,{children:"pulsar-admin"})})," tool"]}),"\n",(0,s.jsxs)(a.li,{children:["The ",(0,s.jsx)(a.code,{children:"/admin/v2/brokers"})," endpoint of the admin ",(0,s.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API"]}),"\n",(0,s.jsxs)(a.li,{children:["The ",(0,s.jsx)(a.code,{children:"brokers"})," method of the ",(0,s.jsx)(a.a,{href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdmin.html",children:"PulsarAdmin"})," object in the ",(0,s.jsx)(a.a,{href:"/docs/2.7.4/client-libraries-java",children:"Java API"})]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["In addition to being configurable when you start them up, brokers can also be ",(0,s.jsx)(a.a,{href:"#dynamic-broker-configuration",children:"dynamically configured"}),"."]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsxs)(a.p,{children:["See the ",(0,s.jsx)(a.a,{href:"/docs/2.7.4/reference-configuration#broker",children:"Configuration"})," page for a full listing of broker-specific configuration parameters."]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"brokers-resources",children:"Brokers resources"}),"\n",(0,s.jsx)(a.h3,{id:"list-active-brokers",children:"List active brokers"}),"\n",(0,s.jsx)(a.p,{children:"Fetch all available active brokers that are serving traffic."}),"\n",(0,s.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,s.jsxs)(o.A,{value:"pulsar-admin",children:[(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"\n$ pulsar-admin brokers list use\n\n"})}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"\nbroker1.use.org.com:8080\n\n"})})]}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(a.p,{children:(0,s.jsxs)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.7.4&apiversion=v2#operation/getActiveBrokers",children:["GET /admin/v2/brokers/",":cluster","/getActiveBrokers"]})})}),(0,s.jsx)(o.A,{value:"JAVA",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:"\nadmin.brokers().getActiveBrokers(clusterName)\n\n"})})})]}),"\n",(0,s.jsx)(a.h4,{id:"list-of-namespaces-owned-by-a-given-broker",children:"list of namespaces owned by a given broker"}),"\n",(0,s.jsx)(a.p,{children:"It finds all namespaces which are owned and served by a given broker."}),"\n",(0,s.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,s.jsxs)(o.A,{value:"pulsar-admin",children:[(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"\n$ pulsar-admin brokers namespaces use \\\n  --url broker1.use.org.com:8080\n\n"})}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-json",children:'\n{\n  "my-property/use/my-ns/0x00000000_0xffffffff": {\n    "broker_assignment": "shared",\n    "is_controlled": false,\n    "is_active": true\n  }\n}\n\n'})})]}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(a.p,{children:(0,s.jsxs)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.7.4&apiversion=v2#operation/getOwnedNamespaes",children:["GET /admin/v2/brokers/",":cluster","/",":broker","/ownedNamespaces/getOwnedNamespaes"]})})}),(0,s.jsx)(o.A,{value:"JAVA",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:"\nadmin.brokers().getOwnedNamespaces(cluster,brokerUrl);\n\n"})})})]}),"\n",(0,s.jsx)(a.h3,{id:"dynamic-broker-configuration",children:"Dynamic broker configuration"}),"\n",(0,s.jsxs)(a.p,{children:["One way to configure a Pulsar ",(0,s.jsx)(a.a,{href:"/docs/2.7.4/reference-terminology#broker",children:"broker"})," is to supply a ",(0,s.jsx)(a.a,{href:"/docs/2.7.4/reference-configuration#broker",children:"configuration"})," when the broker is ",(0,s.jsx)(a.a,{href:"/docs/2.7.4/reference-cli-tools#pulsar-broker",children:"started up"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["But since all broker configuration in Pulsar is stored in ZooKeeper, configuration values can also be dynamically updated ",(0,s.jsx)(a.em,{children:"while the broker is running"}),". When you update broker configuration dynamically, ZooKeeper will notify the broker of the change and the broker will then override any existing configuration values."]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["The ",(0,s.jsx)(a.a,{href:"/docs/2.7.4/reference-pulsar-admin#brokers",children:(0,s.jsx)(a.code,{children:"brokers"})})," command for the ",(0,s.jsx)(a.a,{href:"/docs/2.7.4/reference-pulsar-admin",children:(0,s.jsx)(a.code,{children:"pulsar-admin"})})," tool has a variety of subcommands that enable you to manipulate a broker's configuration dynamically, enabling you to ",(0,s.jsx)(a.a,{href:"#update-dynamic-configuration",children:"update config values"})," and more."]}),"\n",(0,s.jsxs)(a.li,{children:["In the Pulsar admin ",(0,s.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API, dynamic configuration is managed through the ",(0,s.jsx)(a.code,{children:"/admin/v2/brokers/configuration"})," endpoint."]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"update-dynamic-configuration",children:"Update dynamic configuration"}),"\n",(0,s.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,s.jsxs)(o.A,{value:"pulsar-admin",children:[(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.a,{href:"/docs/2.7.4/reference-pulsar-admin#brokers-update-dynamic-config",children:(0,s.jsx)(a.code,{children:"update-dynamic-config"})})," subcommand will update existing configuration. It takes two arguments: the name of the parameter and the new value using the ",(0,s.jsx)(a.code,{children:"config"})," and ",(0,s.jsx)(a.code,{children:"value"})," flag respectively. Here's an example for the ",(0,s.jsx)(a.a,{href:"/docs/2.7.4/reference-configuration#broker-brokerShutdownTimeoutMs",children:(0,s.jsx)(a.code,{children:"brokerShutdownTimeoutMs"})})," parameter:"]}),(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"\n$ pulsar-admin brokers update-dynamic-config --config brokerShutdownTimeoutMs --value 100\n\n"})})]}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(a.p,{children:(0,s.jsxs)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.7.4&apiversion=v2#operation/updateDynamicConfiguration",children:["POST /admin/v2/brokers/configuration/",":configName","/",":configValue","/updateDynamicConfiguration"]})})}),(0,s.jsx)(o.A,{value:"JAVA",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:"\nadmin.brokers().updateDynamicConfiguration(configName, configValue);\n\n"})})})]}),"\n",(0,s.jsx)(a.h3,{id:"list-updated-values",children:"List updated values"}),"\n",(0,s.jsx)(a.p,{children:"Fetch a list of all potentially updatable configuration parameters."}),"\n",(0,s.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,s.jsx)(o.A,{value:"pulsar-admin",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"\n$ pulsar-admin brokers list-dynamic-config\nbrokerShutdownTimeoutMs\n\n"})})}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.7.4&apiversion=v2#operation/getDynamicConfigurationName",children:"GET /admin/v2/brokers/configuration/getDynamicConfigurationName"})})}),(0,s.jsx)(o.A,{value:"JAVA",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:"\nadmin.brokers().getDynamicConfigurationNames();\n\n"})})})]}),"\n",(0,s.jsx)(a.h3,{id:"list-all",children:"List all"}),"\n",(0,s.jsx)(a.p,{children:"Fetch a list of all parameters that have been dynamically updated."}),"\n",(0,s.jsxs)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],children:[(0,s.jsx)(o.A,{value:"pulsar-admin",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"\n$ pulsar-admin brokers get-all-dynamic-config\nbrokerShutdownTimeoutMs:100\n\n"})})}),(0,s.jsx)(o.A,{value:"REST API",children:(0,s.jsx)(a.p,{children:(0,s.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api?version=2.7.4&apiversion=v2#operation/getAllDynamicConfigurations",children:"GET /admin/v2/brokers/configuration/values/getAllDynamicConfigurations"})})}),(0,s.jsx)(o.A,{value:"JAVA",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-java",children:"\nadmin.brokers().getAllDynamicConfigurations();\n\n"})})})]})]})}function p(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,a,r)=>{r.d(a,{A:()=>l});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function l(e){let{children:a,hidden:r,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:a})}},89089:(e,a,r)=>{r.d(a,{A:()=>A});var n=r(96540),s=r(34164),i=r(23104),l=r(56347),o=r(205),t=r(57485),c=r(31682),d=r(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:r}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:r,attributes:n,default:s}}=e;return{value:a,label:r,attributes:n,default:s}}))}(r);return function(e){const a=(0,c.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,r])}function p(e){let{value:a,tabValues:r}=e;return r.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:r}=e;const s=(0,l.W6)(),i=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,t.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(s.location.search);a.set(i,e),s.replace({...s.location,search:a.toString()})}),[i,s])]}function f(e){const{defaultValue:a,queryString:r=!1,groupId:s}=e,i=h(e),[l,t]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:i}))),[c,u]=m({queryString:r,groupId:s}),[f,b]=function(e){let{groupId:a}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,i]=(0,d.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),g=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{g&&t(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);t(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function x(e){let{className:a,block:r,selectedValue:n,selectValue:l,tabValues:o}=e;const t=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const a=e.currentTarget,r=t.indexOf(a),s=o[r].value;s!==n&&(c(a),l(s))},u=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=t.indexOf(e.currentTarget)+1;a=t[r]??t[0];break}case"ArrowLeft":{const r=t.indexOf(e.currentTarget)-1;a=t[r]??t[t.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},a),children:o.map((e=>{let{value:a,label:r,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>t.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":n===a}),children:r??a},a)}))})}function j(e){let{lazy:a,children:r,selectedValue:i}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==i})))})}function k(e){const a=f(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...a,...e}),(0,v.jsx)(j,{...a,...e})]})}function A(e){const a=(0,b.A)();return(0,v.jsx)(k,{...e,children:u(e.children)},String(a))}},28453:(e,a,r)=>{r.d(a,{R:()=>l,x:()=>o});var n=r(96540);const s={},i=n.createContext(s);function l(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);