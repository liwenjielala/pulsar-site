"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[88339],{23294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"security-tls-authentication","title":"Authentication using mTLS","description":"mTLS authentication overview","source":"@site/versioned_docs/version-3.0.x/security-tls-authentication.md","sourceDirName":".","slug":"/security-tls-authentication","permalink":"/docs/3.0.x/security-tls-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/security-tls-authentication.md","tags":[],"version":"3.0.x","frontMatter":{"id":"security-tls-authentication","title":"Authentication using mTLS","sidebar_label":"Authentication using mTLS"},"sidebar":"docsSidebar","previous":{"title":"Bouncy Castle Providers","permalink":"/docs/3.0.x/security-bouncy-castle"},"next":{"title":"Authentication using JWT","permalink":"/docs/3.0.x/security-jwt"}}');var a=n(74848),i=n(28453),s=n(11470),l=n(19365);const o={id:"security-tls-authentication",title:"Authentication using mTLS",sidebar_label:"Authentication using mTLS"},c=void 0,u={},h=[{value:"mTLS authentication overview",id:"mtls-authentication-overview",level:2},{value:"Enable mTLS authentication on brokers",id:"enable-mtls-authentication-on-brokers",level:2},{value:"Enable mTLS authentication on proxies",id:"enable-mtls-authentication-on-proxies",level:2},{value:"Configure mTLS authentication in Pulsar clients",id:"configure-mtls-authentication-in-pulsar-clients",level:2},{value:"Configure mTLS authentication in CLI tools",id:"configure-mtls-authentication-in-cli-tools",level:2},{value:"Configure mTLS authentication with KeyStore",id:"configure-mtls-authentication-with-keystore",level:2},{value:"Configure brokers",id:"configure-brokers",level:3},{value:"Configure clients",id:"configure-clients",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"mtls-authentication-overview",children:"mTLS authentication overview"}),"\n",(0,a.jsx)(t.p,{children:"Mutual TLS (mTLS) is a mutual authentication mechanism. Not only servers have keys and certs that the client uses to verify the identity of servers, clients also have keys and certs that the server uses to verify the identity of clients."}),"\n",(0,a.jsx)(t.p,{children:"The following figure illustrates how Pulsar processes mTLS authentication between clients and servers."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Pulsar mTLS authentication process",src:n(57961).A+"",width:"1504",height:"327"})}),"\n",(0,a.jsx)(t.h2,{id:"enable-mtls-authentication-on-brokers",children:"Enable mTLS authentication on brokers"}),"\n",(0,a.jsxs)(t.p,{children:["To configure brokers to authenticate clients using mTLS, add the following parameters to the ",(0,a.jsx)(t.code,{children:"conf/broker.conf"}),". If you use a standalone Pulsar, you need to add these parameters to the ",(0,a.jsx)(t.code,{children:"conf/standalone.conf"})," file:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-properties",children:'# enable authentication\nauthenticationEnabled=true\n# set mTLS authentication provider\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderTls\n\n# configure TLS for client to connect brokers\nbrokerClientTlsEnabled=true\nbrokerClientTrustCertsFilePath=/path/to/ca.cert.pem\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationTls\nbrokerClientAuthenticationParameters={"tlsCertFile":"/path/to/admin.cert.pem","tlsKeyFile":"/path/to/admin.key-pk8.pem"}\n\n# configure TLS ports\nbrokerServicePortTls=6651\nwebServicePortTls=8081\n\n# configure CA certificate\ntlsTrustCertsFilePath=/path/to/ca.cert.pem\n# configure server certificate\ntlsCertificateFilePath=/path/to/broker.cert.pem\n# configure server\'s private key\ntlsKeyFilePath=/path/to/broker.key-pk8.pem\n\n# enable mTLS\ntlsRequireTrustedClientCertOnConnect=true\ntlsAllowInsecureConnection=false\n\n# Tls cert refresh duration in seconds (set 0 to check on every new connection)\ntlsCertRefreshCheckDurationSec=300\n'})}),"\n",(0,a.jsx)(t.h2,{id:"enable-mtls-authentication-on-proxies",children:"Enable mTLS authentication on proxies"}),"\n",(0,a.jsxs)(t.p,{children:["To configure proxies to authenticate clients using mTLS, add the following parameters to the ",(0,a.jsx)(t.code,{children:"conf/proxy.conf"})," file."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-properties",children:'# enable authentication\nauthenticationEnabled=true\n# set mTLS authentication provider\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderTls\n\n# configure TLS for client to connect proxies\ntlsEnabledWithBroker=true\nbrokerClientTrustCertsFilePath=/path/to/ca.cert.pem\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationTls\nbrokerClientAuthenticationParameters={"tlsCertFile":"/path/to/admin.cert.pem","tlsKeyFile":"/path/to/admin.key-pk8.pem"}\n\n# configure TLS ports\nbrokerServicePortTls=6651\nwebServicePortTls=8081\n\n# configure CA certificate\ntlsTrustCertsFilePath=/path/to/ca.cert.pem\n# configure server certificate\ntlsCertificateFilePath=/path/to/proxy.cert.pem\n# configure server\'s private key\ntlsKeyFilePath=/path/to/proxy.key-pk8.pem\n\n# enable mTLS\ntlsRequireTrustedClientCertOnConnect=true\ntlsAllowInsecureConnection=false\n'})}),"\n",(0,a.jsx)(t.h2,{id:"configure-mtls-authentication-in-pulsar-clients",children:"Configure mTLS authentication in Pulsar clients"}),"\n",(0,a.jsxs)(t.p,{children:["When using mTLS authentication, clients connect via TLS transport. You need to configure clients to use ",(0,a.jsx)(t.code,{children:"https://"})," and the ",(0,a.jsx)(t.code,{children:"8443"})," port for the web service URL, use ",(0,a.jsx)(t.code,{children:"pulsar+ssl://"})," and the ",(0,a.jsx)(t.code,{children:"6651"})," port for the broker service URL."]}),"\n",(0,a.jsxs)(s.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"C++",value:"C++"},{label:"Node.js",value:"Node.js"},{label:"Go",value:"Go"},{label:"C#",value:"C#"}],children:[(0,a.jsx)(l.A,{value:"Java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'import org.apache.pulsar.client.api.PulsarClient;\n\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar+ssl://broker.example.com:6651/")\n    .tlsTrustCertsFilePath("/path/to/ca.cert.pem")\n    .authentication("org.apache.pulsar.client.impl.auth.AuthenticationTls",\n                    "tlsCertFile:/path/to/my-role.cert.pem,tlsKeyFile:/path/to/my-role.key-pk8.pem")\n    .build();\n'})})}),(0,a.jsx)(l.A,{value:"Python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'from pulsar import Client, AuthenticationTLS\n\nauth = AuthenticationTLS("/path/to/my-role.cert.pem", "/path/to/my-role.key-pk8.pem")\nclient = Client("pulsar+ssl://broker.example.com:6651/",\n                tls_trust_certs_file_path="/path/to/ca.cert.pem",\n                tls_allow_insecure_connection=False,\n\t\t\t\tauthentication=auth)\n'})})}),(0,a.jsx)(l.A,{value:"C++",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:'#include <pulsar/Client.h>\n\npulsar::ClientConfiguration config;\nconfig.setUseTls(true);\nconfig.setTlsTrustCertsFilePath("/path/to/ca.cert.pem");\nconfig.setTlsAllowInsecureConnection(false);\n\npulsar::AuthenticationPtr auth = pulsar::AuthTls::create("/path/to/my-role.cert.pem",\n                                                         "/path/to/my-role.key-pk8.pem")\nconfig.setAuth(auth);\n\npulsar::Client client("pulsar+ssl://broker.example.com:6651/", config);\n'})})}),(0,a.jsx)(l.A,{value:"Node.js",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const Pulsar = require('pulsar-client');\n\n(async () => {\n  const auth = new Pulsar.AuthenticationTls({\n    certificatePath: '/path/to/my-role.cert.pem',\n    privateKeyPath: '/path/to/my-role.key-pk8.pem',\n  });\n\n  const client = new Pulsar.Client({\n    serviceUrl: 'pulsar+ssl://broker.example.com:6651/',\n    authentication: auth,\n    tlsTrustCertsFilePath: '/path/to/ca.cert.pem',\n  });\n})();\n"})})}),(0,a.jsx)(l.A,{value:"Go",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'client, err := pulsar.NewClient(ClientOptions{\n\t\tURL:                   "pulsar+ssl://broker.example.com:6651/",\n\t\tTLSTrustCertsFilePath: "/path/to/ca.cert.pem",\n\t\tAuthentication:        pulsar.NewAuthenticationTLS("/path/to/my-role.cert.pem", "/path/to/my-role.key-pk8.pem"),\n\t})\n'})})}),(0,a.jsx)(l.A,{value:"C#",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:'var clientCertificate = new X509Certificate2("admin.pfx");\nvar client = PulsarClient.Builder()\n                         .AuthenticateUsingClientCertificate(clientCertificate)\n                         .Build();\n'})})})]}),"\n",(0,a.jsx)(t.h2,{id:"configure-mtls-authentication-in-cli-tools",children:"Configure mTLS authentication in CLI tools"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/3.0.x/reference-cli-tools",children:"Command-line tools"})," like ",(0,a.jsx)(t.a,{href:"pathname:///reference/#/3.0.x/pulsar-admin/",children:(0,a.jsx)(t.code,{children:"pulsar-admin"})}),", ",(0,a.jsx)(t.a,{href:"pathname:///reference/#/3.0.x/pulsar-perf/",children:(0,a.jsx)(t.code,{children:"pulsar-perf"})}),", and ",(0,a.jsx)(t.a,{href:"pathname:///reference/#/3.0.x/pulsar-client/",children:(0,a.jsx)(t.code,{children:"pulsar-client"})})," use the ",(0,a.jsx)(t.code,{children:"conf/client.conf"})," config file in a Pulsar installation."]}),"\n",(0,a.jsxs)(t.p,{children:["To use mTLS authentication with the CLI tools of Pulsar, you need to add the following parameters to the ",(0,a.jsx)(t.code,{children:"conf/client.conf"})," file, alongside ",(0,a.jsx)(t.a,{href:"/docs/3.0.x/security-tls-transport#configure-mtls-encryption-in-cli-tools",children:"the configurations to enable mTLS encryption"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-properties",children:"authPlugin=org.apache.pulsar.client.impl.auth.AuthenticationTls\nauthParams=tlsCertFile:/path/to/my-role.cert.pem,tlsKeyFile:/path/to/my-role.key-pk8.pem\n"})}),"\n",(0,a.jsx)(t.h2,{id:"configure-mtls-authentication-with-keystore",children:"Configure mTLS authentication with KeyStore"}),"\n",(0,a.jsxs)(t.p,{children:["Apache Pulsar supports ",(0,a.jsx)(t.a,{href:"/docs/3.0.x/security-tls-transport",children:"TLS encryption"})," and ",(0,a.jsx)(t.a,{href:"/docs/3.0.x/security-tls-authentication",children:"mTLS authentication"})," between clients and Apache Pulsar service. By default, it uses PEM format file configuration. This section describes how to use the ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Java_KeyStore",children:"KeyStore"})," type to configure mTLS authentication."]}),"\n",(0,a.jsx)(t.h3,{id:"configure-brokers",children:"Configure brokers"}),"\n",(0,a.jsxs)(t.p,{children:["Configure the ",(0,a.jsx)(t.code,{children:"broker.conf"})," file as follows."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-properties",children:'# Configuration to enable authentication\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderTls\n\n# Enable KeyStore type\ntlsEnabledWithKeyStore=true\n\n# key store\ntlsKeyStoreType=JKS\ntlsKeyStore=/var/private/tls/broker.keystore.jks\ntlsKeyStorePassword=brokerpw\n\n# trust store\ntlsTrustStoreType=JKS\ntlsTrustStore=/var/private/tls/broker.truststore.jks\ntlsTrustStorePassword=brokerpw\n\n# internal client/admin-client config\nbrokerClientTlsEnabled=true\nbrokerClientTlsEnabledWithKeyStore=true\nbrokerClientTlsTrustStoreType=JKS\nbrokerClientTlsTrustStore=/var/private/tls/client.truststore.jks\nbrokerClientTlsTrustStorePassword=clientpw\n# internal auth config\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls\nbrokerClientAuthenticationParameters={"keyStoreType":"JKS","keyStorePath":"/var/private/tls/client.keystore.jks","keyStorePassword":"clientpw"}\n\ntlsRequireTrustedClientCertOnConnect=true\ntlsAllowInsecureConnection=false\n'})}),"\n",(0,a.jsx)(t.h3,{id:"configure-clients",children:"Configure clients"}),"\n",(0,a.jsxs)(t.p,{children:["Besides configuring ",(0,a.jsx)(t.a,{href:"/docs/3.0.x/security-tls-transport",children:"TLS encryption"}),", you need to configure the KeyStore, which contains a valid CN as client role, for clients."]}),"\n",(0,a.jsx)(t.p,{children:"For example:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["for ",(0,a.jsx)(t.a,{href:"/docs/3.0.x/reference-cli-tools",children:"Command-line tools"})," like ",(0,a.jsx)(t.a,{href:"pathname:///reference/#/3.0.x/pulsar-admin/",children:(0,a.jsx)(t.code,{children:"pulsar-admin"})}),", ",(0,a.jsx)(t.a,{href:"pathname:///reference/#/3.0.x/pulsar-perf/",children:(0,a.jsx)(t.code,{children:"pulsar-perf"})}),", and ",(0,a.jsx)(t.a,{href:"pathname:///reference/#/3.0.x/pulsar-client/",children:(0,a.jsx)(t.code,{children:"pulsar-client"})}),", set the ",(0,a.jsx)(t.code,{children:"conf/client.conf"})," file in a Pulsar installation."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-properties",children:'webServiceUrl=https://broker.example.com:8443/\nbrokerServiceUrl=pulsar+ssl://broker.example.com:6651/\nuseKeyStoreTls=true\ntlsTrustStoreType=JKS\ntlsTrustStorePath=/var/private/tls/client.truststore.jks\ntlsTrustStorePassword=clientpw\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls\nauthParams={"keyStoreType":"JKS","keyStorePath":"/var/private/tls/client.keystore.jks","keyStorePassword":"clientpw"}\n'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"for Java client"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'import org.apache.pulsar.client.api.PulsarClient;\n\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar+ssl://broker.example.com:6651/")\n    .useKeyStoreTls(true)\n    .tlsTrustStorePath("/var/private/tls/client.truststore.jks")\n    .tlsTrustStorePassword("clientpw")\n    .allowTlsInsecureConnection(false)\n    .enableTlsHostnameVerification(false)\n    .authentication(\n            "org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls",\n            "keyStoreType:JKS,keyStorePath:/var/private/tls/client.keystore.jks,keyStorePassword:clientpw")\n    .build();\n'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"for Java admin client"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'    PulsarAdmin amdin = PulsarAdmin.builder().serviceHttpUrl("https://broker.example.com:8443")\n        .useKeyStoreTls(true)\n        .tlsTrustStorePath("/var/private/tls/client.truststore.jks")\n        .tlsTrustStorePassword("clientpw")\n        .allowTlsInsecureConnection(false)\n        .enableTlsHostnameVerification(false)\n        .authentication(\n               "org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls",\n               "keyStoreType:JKS,keyStorePath:/var/private/tls/client.keystore.jks,keyStorePassword:clientpw")\n        .build();\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["Configure ",(0,a.jsx)(t.code,{children:"tlsTrustStorePath"})," when you set ",(0,a.jsx)(t.code,{children:"useKeyStoreTls"})," to ",(0,a.jsx)(t.code,{children:"true"}),"."]})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(96540),a=n(34164),i=n(23104),s=n(56347),l=n(205),o=n(57485),c=n(31682),u=n(70679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,h]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),v=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),b(e)}),[h,b,i]),tabValues:i}}var b=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(c(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:h,onClick:u,...i,className:(0,a.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function T(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(y,{...t,...e})]})}function j(e){const t=(0,b.A)();return(0,x.jsx)(T,{...e,children:h(e.children)},String(t))}},57961:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/mTLS-authentication-09425e733cb0c7886c30d04008cf6d85.svg"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);