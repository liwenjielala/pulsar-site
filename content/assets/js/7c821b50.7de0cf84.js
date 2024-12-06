"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5669],{81393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"security-athenz","title":"Authentication using Athenz","description":"Athenz is a role-based authentication/authorization system. In Pulsar, you can use Athenz role tokens (also known as z-tokens) to establish the identity of the client.","source":"@site/versioned_docs/version-3.0.x/security-athenz.md","sourceDirName":".","slug":"/security-athenz","permalink":"/docs/3.0.x/security-athenz","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/security-athenz.md","tags":[],"version":"3.0.x","frontMatter":{"id":"security-athenz","title":"Authentication using Athenz","sidebar_label":"Authentication using Athenz"},"sidebar":"docsSidebar","previous":{"title":"Authentication using JWT","permalink":"/docs/3.0.x/security-jwt"},"next":{"title":"Authentication using Kerberos","permalink":"/docs/3.0.x/security-kerberos"}}');var r=t(74848),i=t(28453),s=t(11470),o=t(19365);const l={id:"security-athenz",title:"Authentication using Athenz",sidebar_label:"Authentication using Athenz"},c=void 0,h={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a tenant domain and service",id:"create-a-tenant-domain-and-service",level:3},{value:"Create a provider domain and add the tenant service to role members",id:"create-a-provider-domain-and-add-the-tenant-service-to-role-members",level:3},{value:"Enable Athenz authentication on brokers/proxies",id:"enable-athenz-authentication-on-brokersproxies",level:2},{value:"Configure Athenz authentication in Pulsar clients",id:"configure-athenz-authentication-in-pulsar-clients",level:2},{value:"Use Copper Argos",id:"use-copper-argos",level:3},{value:"Configure Athenz authentication in CLI tools",id:"configure-athenz-authentication-in-cli-tools",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/AthenZ/athenz",children:"Athenz"})," is a role-based authentication/authorization system. In Pulsar, you can use Athenz role tokens (also known as ",(0,r.jsx)(n.em,{children:"z-tokens"}),") to establish the identity of the client."]}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"https://github.com/AthenZ/athenz/blob/master/docs/decent_authz_flow.md",children:"decentralized Athenz system"})," contains an ",(0,r.jsxs)(n.a,{href:"https://github.com/AthenZ/athenz/blob/master/docs/setup_zms.md",children:["authori",(0,r.jsx)(n.strong,{children:"Z"}),"ation ",(0,r.jsx)(n.strong,{children:"M"}),"anagement ",(0,r.jsx)(n.strong,{children:"S"}),"ystem"]})," (ZMS) server and an ",(0,r.jsxs)(n.a,{href:"https://github.com/AthenZ/athenz/blob/master/docs/setup_zts.md",children:["authori",(0,r.jsx)(n.strong,{children:"Z"}),"ation ",(0,r.jsx)(n.strong,{children:"T"}),"oken ",(0,r.jsx)(n.strong,{children:"S"}),"ystem"]})," (ZTS) server."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.p,{children:["To begin, you need to set up Athenz service access control by creating domains for the ",(0,r.jsx)(n.em,{children:"provider"})," (which provides some resources to other services with some authentication/authorization policies) and the ",(0,r.jsx)(n.em,{children:"tenant"})," (which is provisioned to access some resources in a provider). In this case, the provider corresponds to the Pulsar service itself and the tenant corresponds to each application using Pulsar (typically, a ",(0,r.jsx)(n.a,{href:"/docs/3.0.x/reference-terminology#tenant",children:"tenant"})," in Pulsar)."]}),"\n",(0,r.jsx)(n.h3,{id:"create-a-tenant-domain-and-service",children:"Create a tenant domain and service"}),"\n",(0,r.jsx)(n.p,{children:"On the tenant side, do the followings:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a domain, such as ",(0,r.jsx)(n.code,{children:"shopping"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Generate a private/public key pair."}),"\n",(0,r.jsxs)(n.li,{children:["Create a service, such as ",(0,r.jsx)(n.code,{children:"some_app"}),", on the domain with the public key."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Note that you need to specify the private key generated in step 2 when the Pulsar client connects to the broker."}),"\n",(0,r.jsxs)(n.p,{children:["For more specific steps involving the Athenz UI, refer to ",(0,r.jsx)(n.a,{href:"https://github.com/AthenZ/athenz/blob/master/docs/example_service_athenz_setup.md#client-tenant-domain",children:"Example Service Access Control Setup"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"create-a-provider-domain-and-add-the-tenant-service-to-role-members",children:"Create a provider domain and add the tenant service to role members"}),"\n",(0,r.jsx)(n.p,{children:"On the provider side, you need to do the following things:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a domain, such as ",(0,r.jsx)(n.code,{children:"pulsar"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Create a role."}),"\n",(0,r.jsx)(n.li,{children:"Add the tenant service to the members of the role."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Note that you can specify any action and resource in step 2 since they are not used on Pulsar. In other words, Pulsar uses the Athenz role token only for authentication, ",(0,r.jsx)(n.em,{children:"not"})," for authorization."]}),"\n",(0,r.jsxs)(n.p,{children:["For more specific steps involving the Athenz UI, refer to ",(0,r.jsx)(n.a,{href:"https://github.com/AthenZ/athenz/blob/master/docs/example_service_athenz_setup.md#server-provider-domain",children:"Example Service Access Control Setup"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"enable-athenz-authentication-on-brokersproxies",children:"Enable Athenz authentication on brokers/proxies"}),"\n",(0,r.jsxs)(n.p,{children:["To configure brokers/proxies to authenticate clients using Authenz, add the following parameters to the ",(0,r.jsx)(n.code,{children:"conf/broker.conf"})," and the ",(0,r.jsx)(n.code,{children:"conf/proxy.conf"})," files and provide the class name of the Athenz authentication provider as well as a comma-separated list of provider domain names. If you use a standalone Pulsar, you need to add these parameters to the ",(0,r.jsx)(n.code,{children:"conf/standalone.conf"})," file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:'# Add the Athenz auth provider\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderAthenz\nathenzDomainNames=pulsar\n\n# Authentication settings of the broker itself. Used when the broker connects to other brokers, or when the proxy connects to brokers, either in same or other clusters\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationAthenz\nbrokerClientAuthenticationParameters={"tenantDomain":"shopping","tenantService":"some_app","providerDomain":"pulsar","privateKey":"file:///path/to/private.pem","keyId":"v1"}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"configure-athenz-authentication-in-pulsar-clients",children:"Configure Athenz authentication in Pulsar clients"}),"\n",(0,r.jsx)(n.p,{children:"To use Athenz as an authentication provider, you need to provide values for four parameters in a hash:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"tenantDomain"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"tenantService"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"providerDomain"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"privateKey"})}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"privateKey"})," parameter supports the following three pattern formats:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"file:///path/to/file"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"file:/path/to/file"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"data:application/x-pem-file;base64,<base64-encoded value>"})}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["You can also set an optional ",(0,r.jsx)(n.code,{children:"keyId"}),". The following is an example."]}),"\n",(0,r.jsxs)(s.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"C++",value:"C++"},{label:"Node.js",value:"Node.js"},{label:"Go",value:"Go"}],children:[(0,r.jsx)(o.A,{value:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'Map<String, String> authParams = new HashMap();\nauthParams.put("ztsUrl", "http://localhost:9998");\nauthParams.put("tenantDomain", "shopping"); // Tenant domain name\nauthParams.put("tenantService", "some_app"); // Tenant service name\nauthParams.put("providerDomain", "pulsar"); // Provider domain name\nauthParams.put("privateKey", "file:///path/to/private.pem"); // Tenant private key path\nauthParams.put("keyId", "v1"); // Key id for the tenant private key (optional, default: "0")\n\nAuthentication athenzAuth = AuthenticationFactory\n        .create(AuthenticationAthenz.class.getName(), authParams);\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://my-broker.com:6650")\n        .authentication(athenzAuth)\n        .build();\n'})})}),(0,r.jsx)(o.A,{value:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'authPlugin = "athenz"\nauthParams = """\n{\n"tenantDomain": "shopping",\n"tenantService": "some_app",\n"providerDomain": "pulsar",\n"privateKey": "file:///path/to/private.pem",\n"ztsUrl": "http://localhost:9998"\n}\n"""\n\nclient = Client(\n    "pulsar://my-broker.com:6650",\n    authentication=Authentication(authPlugin, authParams),\n)\n'})})}),(0,r.jsx)(o.A,{value:"C++",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'std::string params = R"({\n        "tenantDomain": "shopping",\n        "tenantService": "some_app",\n        "providerDomain": "pulsar",\n        "privateKey": "file:///path/to/private.pem",\n        "ztsUrl": "http://localhost:9998"\n    })";\npulsar::AuthenticationPtr auth = pulsar::AuthAthenz::create(params);\nClientConfiguration config = ClientConfiguration();\nconfig.setAuth(auth);\nClient client("pulsar://my-broker.com:6650", config);\n'})})}),(0,r.jsx)(o.A,{value:"Node.js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'const auth = new Pulsar.AuthenticationAthenz({\n    tenantDomain: "shopping",\n    tenantService: "some_app",\n    providerDomain: "pulsar",\n    privateKey: "file:///path/to/private.pem",\n    ztsUrl: "http://localhost:9998"\n});\n\nconst client = new Pulsar.Client({\n    serviceUrl: \'pulsar://my-broker.com:6650\',\n    authentication: auth\n});\n'})})}),(0,r.jsx)(o.A,{value:"Go",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'provider := pulsar.NewAuthenticationAthenz(map[string]string{\n\t"ztsUrl":         "http://localhost:9998",\n\t"providerDomain": "pulsar",\n\t"tenantDomain":   "shopping",\n\t"tenantService":  "some_app",\n\t"privateKey":     "file:///path/to/private.pem",\n\t"keyId":          "v1",\n})\n\nclient, err := pulsar.NewClient(pulsar.ClientOptions{\n\tURL:            "pulsar://my-broker.com:6650",\n\tAuthentication: provider,\n})\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"use-copper-argos",children:"Use Copper Argos"}),"\n",(0,r.jsxs)(n.p,{children:["Athenz has a mechanism called ",(0,r.jsx)(n.a,{href:"https://github.com/AthenZ/athenz/blob/master/docs/copper_argos.md",children:"Copper Argos"}),". This means that ZTS distributes an X.509 certificate and private key pair to each service, which it can use to identify itself to other services within the organization."]}),"\n",(0,r.jsx)(n.p,{children:"Pulsar currently supports Copper Argos only in Java and Go. When using Copper Argos, you need to provide at least the following four parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"providerDomain"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"x509CertChain"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"privateKey"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"caCert"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In this case, ",(0,r.jsx)(n.code,{children:"tenantDomain"}),", ",(0,r.jsx)(n.code,{children:"tenantService"})," and ",(0,r.jsx)(n.code,{children:"keyId"})," are ignored."]}),"\n",(0,r.jsxs)(s.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Go",value:"Go"}],children:[(0,r.jsx)(o.A,{value:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'Map<String, String> authParams = new HashMap();\nauthParams.put("ztsUrl", "http://localhost:9998");\nauthParams.put("providerDomain", "pulsar"); // Provider domain name\nauthParams.put("x509CertChain", "file:///path/to/x509cert.pem"); // Distributed X.509 certificate path\nauthParams.put("privateKey", "file:///path/to/private.pem"); // Distributed private key path\nauthParams.put("caCert", "file:///path/to/cacert.pem"); // CA certificate path\n\nAuthentication athenzAuth = AuthenticationFactory\n        .create(AuthenticationAthenz.class.getName(), authParams);\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://my-broker.com:6650")\n        .authentication(athenzAuth)\n        .build();\n'})})}),(0,r.jsx)(o.A,{value:"Go",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'provider := pulsar.NewAuthenticationAthenz(map[string]string{\n\t"ztsUrl":         "http://localhost:9998",\n\t"providerDomain": "pulsar",\n\t"x509CertChain":  "file:///path/to/x509cert.pem",\n\t"privateKey":     "file:///path/to/private.pem",\n\t"caCert":         "file:///path/to/cacert.pem",\n})\n\nclient, err := pulsar.NewClient(pulsar.ClientOptions{\n\tURL:            "pulsar://my-broker.com:6650",\n\tAuthentication: provider,\n})\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"configure-athenz-authentication-in-cli-tools",children:"Configure Athenz authentication in CLI tools"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/3.0.x/reference-cli-tools",children:"Command-line tools"})," like ",(0,r.jsx)(n.a,{href:"pathname:///reference/#/3.0.x/pulsar-admin/",children:(0,r.jsx)(n.code,{children:"pulsar-admin"})}),", ",(0,r.jsx)(n.a,{href:"pathname:///reference/#/3.0.x/pulsar-perf/",children:(0,r.jsx)(n.code,{children:"pulsar-perf"})}),", and ",(0,r.jsx)(n.a,{href:"pathname:///reference/#/3.0.x/pulsar-client/",children:(0,r.jsx)(n.code,{children:"pulsar-client"})})," use the ",(0,r.jsx)(n.code,{children:"conf/client.conf"})," config file in a Pulsar installation."]}),"\n",(0,r.jsxs)(n.p,{children:["You need to add the following authentication parameters to the ",(0,r.jsx)(n.code,{children:"conf/client.conf"})," config file to use Athenz with CLI tools of Pulsar:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:'# URL for the broker\nserviceUrl=http://broker.example.com:8080\n\n# Set Athenz auth plugin and its parameters\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationAthenz\nauthParams={"tenantDomain":"shopping","tenantService":"some_app","providerDomain":"pulsar","privateKey":"file:///path/to/private.pem","keyId":"v1"}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(96540),r=t(34164),i=t(23104),s=t(56347),o=t(205),l=t(57485),c=t(31682),h=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=d(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:t,groupId:r}),[v,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,h.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),x=(()=>{const e=c??v;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function b(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),h=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(c(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:h,...i,className:(0,r.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function A(e){const n=v(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,g.jsx)(A,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(96540);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);