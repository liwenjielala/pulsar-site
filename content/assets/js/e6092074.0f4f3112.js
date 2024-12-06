"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[96196],{17783:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});const i=JSON.parse('{"id":"security-extending","title":"Extend Authentication and Authorization in Pulsar","description":"Learn how to use custom authentication and authorization mechanisms.","source":"@site/docs/security-extending.md","sourceDirName":".","slug":"/security-extending","permalink":"/docs/next/security-extending","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/docs/security-extending.md","tags":[],"version":"current","frontMatter":{"id":"security-extending","title":"Extend Authentication and Authorization in Pulsar","sidebar_label":"Extend Authentication and Authorization","description":"Learn how to use custom authentication and authorization mechanisms."},"sidebar":"docsSidebar","previous":{"title":"Authorization and ACLs","permalink":"/docs/next/security-authorization"},"next":{"title":"Pulsar Perf","permalink":"/docs/next/performance-pulsar-perf"}}');var n=a(74848),r=a(28453);const o={id:"security-extending",title:"Extend Authentication and Authorization in Pulsar",sidebar_label:"Extend Authentication and Authorization",description:"Learn how to use custom authentication and authorization mechanisms."},c=void 0,h={},s=[{value:"Authentication",id:"authentication",level:2},{value:"Client authentication plugin",id:"client-authentication-plugin",level:3},{value:"Broker/Proxy authentication plugin",id:"brokerproxy-authentication-plugin",level:3},{value:"Authorization",id:"authorization",level:2},{value:"Broker authorization plugin",id:"broker-authorization-plugin",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Pulsar provides a way to use custom authentication and authorization mechanisms."}),"\n",(0,n.jsx)(t.h2,{id:"authentication",children:"Authentication"}),"\n",(0,n.jsx)(t.p,{children:"You can use a custom authentication mechanism by providing the implementation in the form of two plugins."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Client authentication plugin ",(0,n.jsx)(t.code,{children:"org.apache.pulsar.client.api.AuthenticationDataProvider"})," provides the authentication data for broker/proxy."]}),"\n",(0,n.jsxs)(t.li,{children:["Broker/Proxy authentication plugin ",(0,n.jsx)(t.code,{children:"org.apache.pulsar.broker.authentication.AuthenticationProvider"})," authenticates the authentication data from clients."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"client-authentication-plugin",children:"Client authentication plugin"}),"\n",(0,n.jsxs)(t.p,{children:["For the client library, you need to implement ",(0,n.jsx)(t.code,{children:"org.apache.pulsar.client.api.Authentication"}),". By entering the command below, you can pass this class when you create a Pulsar client."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'PulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://localhost:6650")\n    .authentication(new MyAuthentication())\n    .build();\n'})}),"\n",(0,n.jsx)(t.p,{children:"You can implement 2 interfaces on the client side:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://pulsar.apache.org/api/client/4.0.x/org/apache/pulsar/client/api/Authentication.html",children:(0,n.jsx)(t.code,{children:"Authentication"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://pulsar.apache.org/api/client/4.0.x/org/apache/pulsar/client/api/AuthenticationDataProvider.html",children:(0,n.jsx)(t.code,{children:"AuthenticationDataProvider"})})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["This in turn requires you to provide the client credentials in the form of ",(0,n.jsx)(t.code,{children:"org.apache.pulsar.client.api.AuthenticationDataProvider"})," and also leaves the chance to return different kinds of authentication tokens for different types of connections or by passing a certificate chain to use for TLS."]}),"\n",(0,n.jsx)(t.p,{children:"You can find the following examples for different client authentication plugins:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationTls.java",children:"Mutual TLS"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client-auth-athenz/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationAthenz.java",children:"Athenz"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client-auth-sasl/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationSasl.java",children:"Kerberos"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationToken.java",children:"JSON Web Token (JWT)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/oauth2/AuthenticationOAuth2.java",children:"OAuth 2.0"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationBasic.java",children:"Basic auth"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"brokerproxy-authentication-plugin",children:"Broker/Proxy authentication plugin"}),"\n",(0,n.jsx)(t.p,{children:"On the broker/proxy side, you need to configure the corresponding plugin to validate the credentials that the client sends. The proxy and broker can support multiple authentication providers at the same time."}),"\n",(0,n.jsxs)(t.p,{children:["In ",(0,n.jsx)(t.code,{children:"conf/broker.conf"}),", you can choose to specify a list of valid providers:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-properties",children:"# Authentication provider name list, which is comma separated list of class names\nauthenticationProviders=\n"})}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsx)(t.p,{children:"Pulsar supports an authentication provider chain that contains multiple authentication providers with the same authentication method name."}),(0,n.jsxs)(t.p,{children:["For example, your Pulsar cluster uses JSON Web Token (JWT) authentication (with an authentication method named ",(0,n.jsx)(t.code,{children:"token"}),") and you want to upgrade it to use OAuth2.0 authentication with the same authentication name. In this case, you can implement your own authentication provider ",(0,n.jsx)(t.code,{children:"AuthenticationProviderOAuth2"})," and configure ",(0,n.jsx)(t.code,{children:"authenticationProviders"})," as follows."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-properties",children:"authenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderToken,org.apache.pulsar.broker.authentication.AuthenticationProviderOAuth2\n"})}),(0,n.jsxs)(t.p,{children:["As a result, brokers look up the authentication providers with the ",(0,n.jsx)(t.code,{children:"token"})," authentication method (JWT and OAuth2.0 authentication) when receiving requests to use the ",(0,n.jsx)(t.code,{children:"token"})," authentication method. If a client cannot be authenticated via JWT authentication, OAuth2.0 authentication is used."]})]}),"\n",(0,n.jsxs)(t.p,{children:["For the implementation of the ",(0,n.jsx)(t.code,{children:"org.apache.pulsar.broker.authentication.AuthenticationProvider"})," interface, refer to ",(0,n.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProvider.java",children:"code"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"You can find the following examples for different broker authentication plugins:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderTls.java",children:"Mutual TLS"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-auth-athenz/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderAthenz.java",children:"Athenz"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-auth-sasl/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderSasl.java",children:"Kerberos"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderToken.java",children:"JSON Web Token (JWT)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderToken.java",children:"Basic auth"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"authorization",children:"Authorization"}),"\n",(0,n.jsx)(t.p,{children:'Authorization is the operation that checks whether a particular "role" or "principal" has permission to perform a certain operation.'}),"\n",(0,n.jsx)(t.p,{children:"By default, you can use the embedded authorization provider provided by Pulsar. You can also configure a different authorization provider through a plugin. Note that although the Authentication plugin is designed for use in both the proxy and broker, the Authorization plugin is designed only for use on the broker."}),"\n",(0,n.jsx)(t.h3,{id:"broker-authorization-plugin",children:"Broker authorization plugin"}),"\n",(0,n.jsxs)(t.p,{children:["To provide a custom authorization provider, you need to implement the ",(0,n.jsx)(t.code,{children:"org.apache.pulsar.broker.authorization.AuthorizationProvider"})," interface, put this class in the Pulsar broker classpath and configure the class in ",(0,n.jsx)(t.code,{children:"conf/broker.conf"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-properties",children:"# Authorization provider fully qualified class-name\nauthorizationProvider=org.apache.pulsar.broker.authorization.PulsarAuthorizationProvider\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For the implementation of the ",(0,n.jsx)(t.code,{children:"org.apache.pulsar.broker.authorization.AuthorizationProvider"})," interface, refer to ",(0,n.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authorization/AuthorizationProvider.java",children:"code"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>c});var i=a(96540);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);