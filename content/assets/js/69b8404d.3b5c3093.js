"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1466],{68292:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"security-athenz","title":"Authentication using Athenz","description":"Athenz is a role-based authentication/authorization system. In Pulsar, you can use Athenz role tokens (also known as z-tokens) to establish the identify of the client.","source":"@site/versioned_docs/version-2.7.0/security-athenz.md","sourceDirName":".","slug":"/security-athenz","permalink":"/docs/2.7.0/security-athenz","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.0/security-athenz.md","tags":[],"version":"2.7.0","frontMatter":{"id":"security-athenz","title":"Authentication using Athenz","sidebar_label":"Authentication using Athenz","original_id":"security-athenz"},"sidebar":"docsSidebar","previous":{"title":"Authentication using JWT","permalink":"/docs/2.7.0/security-jwt"},"next":{"title":"Authentication using Kerberos","permalink":"/docs/2.7.0/security-kerberos"}}');var r=t(74848),o=t(28453);const s={id:"security-athenz",title:"Authentication using Athenz",sidebar_label:"Authentication using Athenz",original_id:"security-athenz"},a=void 0,c={},h=[{value:"Athenz authentication settings",id:"athenz-authentication-settings",level:2},{value:"Create the tenant domain and service",id:"create-the-tenant-domain-and-service",level:3},{value:"Create the provider domain and add the tenant service to some role members",id:"create-the-provider-domain-and-add-the-tenant-service-to-some-role-members",level:3},{value:"Configure the broker for Athenz",id:"configure-the-broker-for-athenz",level:2},{value:"TLS encryption",id:"tls-encryption",level:3},{value:"Configure clients for Athenz",id:"configure-clients-for-athenz",level:2},{value:"Configure CLI tools for Athenz",id:"configure-cli-tools-for-athenz",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/AthenZ/athenz",children:"Athenz"})," is a role-based authentication/authorization system. In Pulsar, you can use Athenz role tokens (also known as ",(0,r.jsx)(n.em,{children:"z-tokens"}),") to establish the identify of the client."]}),"\n",(0,r.jsx)(n.h2,{id:"athenz-authentication-settings",children:"Athenz authentication settings"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"https://github.com/AthenZ/athenz/blob/master/docs/decent_authz_flow.md",children:"decentralized Athenz system"})," contains an ",(0,r.jsxs)(n.a,{href:"https://github.com/AthenZ/athenz/blob/master/docs/setup_zms.md",children:["authori",(0,r.jsx)(n.strong,{children:"Z"}),"ation ",(0,r.jsx)(n.strong,{children:"M"}),"anagement ",(0,r.jsx)(n.strong,{children:"S"}),"ystem"]})," (ZMS) server and an ",(0,r.jsxs)(n.a,{href:"https://github.com/AthenZ/athenz/blob/master/docs/setup_zts.md",children:["authori",(0,r.jsx)(n.strong,{children:"Z"}),"ation ",(0,r.jsx)(n.strong,{children:"T"}),"oken ",(0,r.jsx)(n.strong,{children:"S"}),"ystem"]})," (ZTS) server."]}),"\n",(0,r.jsxs)(n.p,{children:["To begin, you need to set up Athenz service access control. You need to create domains for the ",(0,r.jsx)(n.em,{children:"provider"})," (which provides some resources to other services with some authentication/authorization policies) and the ",(0,r.jsx)(n.em,{children:"tenant"})," (which is provisioned to access some resources in a provider). In this case, the provider corresponds to the Pulsar service itself and the tenant corresponds to each application using Pulsar (typically, a ",(0,r.jsx)(n.a,{href:"/docs/2.7.0/reference-terminology#tenant",children:"tenant"})," in Pulsar)."]}),"\n",(0,r.jsx)(n.h3,{id:"create-the-tenant-domain-and-service",children:"Create the tenant domain and service"}),"\n",(0,r.jsxs)(n.p,{children:["On the ",(0,r.jsx)(n.a,{href:"/docs/2.7.0/reference-terminology#tenant",children:"tenant"})," side, you need to do the following things:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a domain, such as ",(0,r.jsx)(n.code,{children:"shopping"})]}),"\n",(0,r.jsx)(n.li,{children:"Generate a private/public key pair"}),"\n",(0,r.jsxs)(n.li,{children:["Create a service, such as ",(0,r.jsx)(n.code,{children:"some_app"}),", on the domain with the public key"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Note that you need to specify the private key generated in step 2 when the Pulsar client connects to the ",(0,r.jsx)(n.a,{href:"/docs/2.7.0/reference-terminology#broker",children:"broker"})," (see client configuration examples for ",(0,r.jsx)(n.a,{href:"/docs/2.7.0/client-libraries-java#tls-authentication",children:"Java"})," and ",(0,r.jsx)(n.a,{href:"/docs/2.7.0/client-libraries-cpp#tls-authentication",children:"C++"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["For more specific steps involving the Athenz UI, refer to ",(0,r.jsx)(n.a,{href:"https://github.com/AthenZ/athenz/blob/master/docs/example_service_athenz_setup.md#client-tenant-domain",children:"Example Service Access Control Setup"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"create-the-provider-domain-and-add-the-tenant-service-to-some-role-members",children:"Create the provider domain and add the tenant service to some role members"}),"\n",(0,r.jsx)(n.p,{children:"On the provider side, you need to do the following things:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a domain, such as ",(0,r.jsx)(n.code,{children:"pulsar"})]}),"\n",(0,r.jsx)(n.li,{children:"Create a role"}),"\n",(0,r.jsx)(n.li,{children:"Add the tenant service to members of the role"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Note that you can specify any action and resource in step 2 since they are not used on Pulsar. In other words, Pulsar uses the Athenz role token only for authentication, ",(0,r.jsx)(n.em,{children:"not"})," for authorization."]}),"\n",(0,r.jsxs)(n.p,{children:["For more specific steps involving UI, refer to ",(0,r.jsx)(n.a,{href:"https://github.com/AthenZ/athenz/blob/master/docs/example_service_athenz_setup.md#server-provider-domain",children:"Example Service Access Control Setup"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"configure-the-broker-for-athenz",children:"Configure the broker for Athenz"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.h3,{id:"tls-encryption",children:"TLS encryption"}),"\n",(0,r.jsxs)(n.p,{children:["Note that when you are using Athenz as an authentication provider, you had better use TLS encryption\nas it can protect role tokens from being intercepted and reused. (for more details involving TLS encryption see ",(0,r.jsx)(n.a,{href:"https://github.com/AthenZ/athenz/blob/master/docs/data_model",children:"Architecture - Data Model"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"conf/broker.conf"})," configuration file in your Pulsar installation, you need to provide the class name of the Athenz authentication provider as well as a comma-separated list of provider domain names."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:'\n# Add the Athenz auth provider\nauthenticationEnabled=true\nauthorizationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderAthenz\nathenzDomainNames=pulsar\n\n# Enable TLS\ntlsEnabled=true\ntlsCertificateFilePath=/path/to/broker-cert.pem\ntlsKeyFilePath=/path/to/broker-key.pem\n\n# Authentication settings of the broker itself. Used when the broker connects to other brokers, either in same or other clusters\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationAthenz\nbrokerClientAuthenticationParameters={"tenantDomain":"shopping","tenantService":"some_app","providerDomain":"pulsar","privateKey":"file:///path/to/private.pem","keyId":"v1"}\n\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["A full listing of parameters is available in the ",(0,r.jsx)(n.code,{children:"conf/broker.conf"})," file, you can also find the default\nvalues for those parameters in ",(0,r.jsx)(n.a,{href:"/docs/2.7.0/reference-configuration#broker",children:"Broker Configuration"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configure-clients-for-athenz",children:"Configure clients for Athenz"}),"\n",(0,r.jsx)(n.p,{children:"For more information on Pulsar client authentication using Athenz, see the following language-specific docs:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/2.7.0/client-libraries-java#athenz",children:"Java client"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configure-cli-tools-for-athenz",children:"Configure CLI tools for Athenz"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/2.7.0/reference-cli-tools",children:"Command-line tools"})," like ",(0,r.jsx)(n.a,{href:"/docs/2.7.0/reference-pulsar-admin",children:(0,r.jsx)(n.code,{children:"pulsar-admin"})}),", ",(0,r.jsx)(n.a,{href:"/docs/2.7.0/reference-cli-tools#pulsar-perf",children:(0,r.jsx)(n.code,{children:"pulsar-perf"})}),", and ",(0,r.jsx)(n.a,{href:"/docs/2.7.0/reference-cli-tools#pulsar-client",children:(0,r.jsx)(n.code,{children:"pulsar-client"})})," use the ",(0,r.jsx)(n.code,{children:"conf/client.conf"})," config file in a Pulsar installation."]}),"\n",(0,r.jsxs)(n.p,{children:["You need to add the following authentication parameters to the ",(0,r.jsx)(n.code,{children:"conf/client.conf"})," config file to use Athenz with CLI tools of Pulsar:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:'\n# URL for the broker\nserviceUrl=https://broker.example.com:8443/\n\n# Set Athenz auth plugin and its parameters\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationAthenz\nauthParams={"tenantDomain":"shopping","tenantService":"some_app","providerDomain":"pulsar","privateKey":"file:///path/to/private.pem","keyId":"v1"}\n\n# Enable TLS\nuseTls=true\ntlsAllowInsecureConnection=false\ntlsTrustCertsFilePath=/path/to/cacert.pem\n\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);