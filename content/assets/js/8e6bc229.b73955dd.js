"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[23574],{13122:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"admin-api-overview","title":"The Pulsar admin interface","description":"The Pulsar admin interface enables you to manage all of the important entities in a Pulsar instance, such as tenants, topics, and namespaces.","source":"@site/versioned_docs/version-2.7.1/admin-api-overview.md","sourceDirName":".","slug":"/admin-api-overview","permalink":"/docs/2.7.1/admin-api-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.1/admin-api-overview.md","tags":[],"version":"2.7.1","frontMatter":{"id":"admin-api-overview","title":"The Pulsar admin interface","sidebar_label":"Overview","original_id":"admin-api-overview"},"sidebar":"docsSidebar","previous":{"title":"C#","permalink":"/docs/2.7.1/client-libraries-dotnet"},"next":{"title":"Clusters","permalink":"/docs/2.7.1/admin-api-clusters"}}');var t=r(74848),s=r(28453),i=r(89089),l=r(19365);const o={id:"admin-api-overview",title:"The Pulsar admin interface",sidebar_label:"Overview",original_id:"admin-api-overview"},c=void 0,u={},d=[{value:"The REST API is the admin interface",id:"the-rest-api-is-the-admin-interface",level:4},{value:"Admin setup",id:"admin-setup",level:2},{value:"How to define Pulsar resource names when running Pulsar in Kubernetes",id:"how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The Pulsar admin interface enables you to manage all of the important entities in a Pulsar ",(0,t.jsx)(n.a,{href:"/docs/2.7.1/reference-terminology#instance",children:"instance"}),", such as ",(0,t.jsx)(n.a,{href:"/docs/2.7.1/reference-terminology#tenant",children:"tenants"}),", ",(0,t.jsx)(n.a,{href:"/docs/2.7.1/reference-terminology#topic",children:"topics"}),", and ",(0,t.jsx)(n.a,{href:"/docs/2.7.1/reference-terminology#namespace",children:"namespaces"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"You can currently interact with the admin interface via:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Making HTTP calls against the admin ",(0,t.jsx)(n.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API provided by Pulsar ",(0,t.jsx)(n.a,{href:"/docs/2.7.1/reference-terminology#broker",children:"brokers"}),". For some restful apis, they might be redirected to topic owner brokers for serving\nwith ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307",children:(0,t.jsx)(n.code,{children:"307 Temporary Redirect"})}),", hence the HTTP callers should handle ",(0,t.jsx)(n.code,{children:"307 Temporary Redirect"}),". If you are using ",(0,t.jsx)(n.code,{children:"curl"}),", you should specify ",(0,t.jsx)(n.code,{children:"-L"}),"\nto handle redirections."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"pulsar-admin"})," CLI tool, which is available in the ",(0,t.jsx)(n.code,{children:"bin"})," folder of your ",(0,t.jsx)(n.a,{href:"/docs/2.7.1/getting-started-standalone",children:"Pulsar installation"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar-admin\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For the complete commands and descriptions of ",(0,t.jsx)(n.code,{children:"pulsar-admin"}),", see here."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A Java client interface."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.h4,{id:"the-rest-api-is-the-admin-interface",children:"The REST API is the admin interface"}),"\n",(0,t.jsxs)(n.p,{children:["Under the hood, both the ",(0,t.jsx)(n.code,{children:"pulsar-admin"})," CLI tool and the Java client both use the REST API. If you\u2019d like to implement your own admin interface client, you should use the REST API as well. Full documentation can be found here."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In this document, examples from each of the three available interfaces will be shown."}),"\n",(0,t.jsx)(n.h2,{id:"admin-setup",children:"Admin setup"}),"\n",(0,t.jsxs)(n.p,{children:["Each of Pulsar's three admin interfaces---the ",(0,t.jsx)(n.a,{href:"/docs/2.7.1/reference-pulsar-admin",children:(0,t.jsx)(n.code,{children:"pulsar-admin"})})," CLI tool, the ",(0,t.jsx)(n.a,{href:"https://pulsar.apache.org/api/admin/2.7.1",children:"Java admin API"}),", and the ",(0,t.jsx)(n.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API ---requires some special setup if you have ",(0,t.jsx)(n.a,{href:"/docs/2.7.1/security-overview#authentication-providers",children:"authentication"})," enabled in your Pulsar ",(0,t.jsx)(n.a,{href:"/docs/2.7.1/reference-terminology#instance",children:"instance"}),"."]}),"\n",(0,t.jsxs)(i.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],children:[(0,t.jsxs)(l.A,{value:"pulsar-admin",children:[(0,t.jsxs)(n.p,{children:["If you have ",(0,t.jsx)(n.a,{href:"/docs/2.7.1/security-overview#authentication-providers",children:"authentication"})," enabled, you will need to provide an auth configuration to use the ",(0,t.jsx)(n.a,{href:"/docs/2.7.1/reference-pulsar-admin",children:(0,t.jsx)(n.code,{children:"pulsar-admin"})})," tool. By default, the configuration for the ",(0,t.jsx)(n.code,{children:"pulsar-admin"})," tool is found in the ",(0,t.jsx)(n.a,{href:"/docs/2.7.1/reference-configuration#client",children:(0,t.jsx)(n.code,{children:"conf/client.conf"})})," file. Here are the available parameters:"]}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"webServiceUrl"}),(0,t.jsx)(n.td,{children:"The web URL for the cluster."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"http://localhost:8080/",children:"http://localhost:8080/"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"brokerServiceUrl"}),(0,t.jsx)(n.td,{children:"The Pulsar protocol URL for the cluster."}),(0,t.jsx)(n.td,{children:"pulsar://localhost:6650/"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"authPlugin"}),(0,t.jsx)(n.td,{children:"The authentication plugin."}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"authParams"}),(0,t.jsx)(n.td,{children:"The authentication parameters for the cluster, as a comma-separated string."}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"useTls"}),(0,t.jsx)(n.td,{children:"Whether or not TLS authentication will be enforced in the cluster."}),(0,t.jsx)(n.td,{children:"false"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tlsAllowInsecureConnection"}),(0,t.jsx)(n.td,{children:"Accept untrusted TLS certificate from client."}),(0,t.jsx)(n.td,{children:"false"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tlsTrustCertsFilePath"}),(0,t.jsx)(n.td,{children:"Path for the trusted TLS certificate file."}),(0,t.jsx)(n.td,{})]})]})]})]}),(0,t.jsx)(l.A,{value:"REST API",children:(0,t.jsxs)(n.p,{children:["You can find documentation for the REST API exposed by Pulsar ",(0,t.jsx)(n.a,{href:"/docs/2.7.1/reference-terminology#broker",children:"brokers"})," in this reference ",(0,t.jsx)(n.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"document"}),"."]})}),(0,t.jsxs)(l.A,{value:"Java",children:[(0,t.jsxs)(n.p,{children:["To use the Java admin API, instantiate a ",(0,t.jsx)(n.a,{href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdmin",children:"PulsarAdmin"})," object, specifying a URL for a Pulsar ",(0,t.jsx)(n.a,{href:"/docs/2.7.1/reference-terminology#broker",children:"broker"})," and a ",(0,t.jsx)(n.a,{href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdminBuilder",children:"PulsarAdminBuilder"}),". Here's a minimal example using ",(0,t.jsx)(n.code,{children:"localhost"}),":"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'\nString url = "http://localhost:8080";\n// Pass auth-plugin class fully-qualified name if Pulsar-security enabled\nString authPluginClassName = "com.org.MyAuthPluginClass";\n// Pass auth-param if auth-plugin class requires it\nString authParams = "param1=value1";\nboolean useTls = false;\nboolean tlsAllowInsecureConnection = false;\nString tlsTrustCertsFilePath = null;\nPulsarAdmin admin = PulsarAdmin.builder()\n.authentication(authPluginClassName,authParams)\n.serviceHttpUrl(url)\n.tlsTrustCertsFilePath(tlsTrustCertsFilePath)\n.allowTlsInsecureConnection(tlsAllowInsecureConnection)\n.build();\n\n'})}),(0,t.jsx)(n.p,{children:"If you have multiple brokers to use, you can use multi-host like Pulsar service. For example,"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'\nString url = "http://localhost:8080,localhost:8081,localhost:8082";\n// Pass auth-plugin class fully-qualified name if Pulsar-security enabled\nString authPluginClassName = "com.org.MyAuthPluginClass";\n// Pass auth-param if auth-plugin class requires it\nString authParams = "param1=value1";\nboolean useTls = false;\nboolean tlsAllowInsecureConnection = false;\nString tlsTrustCertsFilePath = null;\nPulsarAdmin admin = PulsarAdmin.builder()\n.authentication(authPluginClassName,authParams)\n.serviceHttpUrl(url)\n.tlsTrustCertsFilePath(tlsTrustCertsFilePath)\n.allowTlsInsecureConnection(tlsAllowInsecureConnection)\n.build();\n\n'})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes",children:"How to define Pulsar resource names when running Pulsar in Kubernetes"}),"\n",(0,t.jsx)(n.p,{children:"If you run Pulsar Functions or connectors on Kubernetes, you need to follow Kubernetes naming convention to define the names of your Pulsar resources, whichever admin interface you use."}),"\n",(0,t.jsxs)(n.p,{children:["Kubernetes requires a name that can be used as a DNS subdomain name as defined in ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names",children:"RFC 1123"}),". Pulsar supports more legal characters than Kubernetes naming convention. If you create a Pulsar resource name with special characters that are not supported by Kubernetes (for example, including colons in a Pulsar namespace name), Kubernetes runtime translates the Pulsar object names into Kubernetes resource labels which are in RFC 1123-compliant forms. Consequently, you can run functions or connectors using Kubernetes runtime. The rules for translating Pulsar object names into Kubernetes resource labels are as below:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Truncate to 63 characters"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Replace the following characters with dashes (-):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Non-alphanumeric characters"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Underscores (_)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Dots (.)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Replace beginning and ending non-alphanumeric characters with 0"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you get an error in translating Pulsar object names into Kubernetes resource labels (for example, you may have a naming collision if your Pulsar object name is too long) or want to customize the translating rules, see ",(0,t.jsx)(n.a,{href:"https://pulsar.apache.org/docs/en/next/functions-runtime/#customize-kubernetes-runtime",children:"customize Kubernetes runtime"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For how to configure Kubernetes runtime, see ",(0,t.jsx)(n.a,{href:"https://pulsar.apache.org/docs/en/next/functions-runtime/#configure-kubernetes-runtime",children:"here"}),"."]}),"\n"]})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var a=r(34164);const t={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,i),hidden:r,children:n})}},89089:(e,n,r)=>{r.d(n,{A:()=>y});var a=r(96540),t=r(34164),s=r(23104),i=r(56347),l=r(205),o=r(57485),c=r(31682),u=r(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,s=h(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,d]=m({queryString:r,groupId:t}),[f,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,u.Dv)(r);return[t,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:t}),x=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(74848);function v(e){let{className:n,block:r,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),t=l[r].value;t!==a&&(c(n),i(t))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,t.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function P(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,j.jsx)(P,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var a=r(96540);const t={},s=a.createContext(t);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);