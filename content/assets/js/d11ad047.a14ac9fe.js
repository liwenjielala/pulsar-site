"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[57163],{80557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"security-extending","title":"Extend Authentication and Authorization in Pulsar","description":"Pulsar provides a way to use custom authentication and authorization mechanisms.","source":"@site/versioned_docs/version-2.4.0/security-extending.md","sourceDirName":".","slug":"/security-extending","permalink":"/docs/2.4.0/security-extending","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.0/security-extending.md","tags":[],"version":"2.4.0","frontMatter":{"id":"security-extending","title":"Extend Authentication and Authorization in Pulsar","sidebar_label":"Extend Authentication and Authorization"},"sidebar":"docsSidebar","previous":{"title":"End-to-End Encryption","permalink":"/docs/2.4.0/security-encryption"},"next":{"title":"Java","permalink":"/docs/2.4.0/client-libraries-java"}}');var i=n(74848),r=n(28453);const o={id:"security-extending",title:"Extend Authentication and Authorization in Pulsar",sidebar_label:"Extend Authentication and Authorization"},c=void 0,s={},h=[{value:"Authentication",id:"authentication",level:2},{value:"Client authentication plugin",id:"client-authentication-plugin",level:3},{value:"Proxy/Broker authentication plugin",id:"proxybroker-authentication-plugin",level:3},{value:"Authorization",id:"authorization",level:2},{value:"Broker authorization plugin",id:"broker-authorization-plugin",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Pulsar provides a way to use custom authentication and authorization mechanisms."}),"\n",(0,i.jsx)(t.h2,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsx)(t.p,{children:"You can use a custom authentication mechanism by providing the implementation in the form of two plugins."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Client authentication plugin"}),"\n",(0,i.jsx)(t.li,{children:"Proxy/Broker authentication plugin"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"client-authentication-plugin",children:"Client authentication plugin"}),"\n",(0,i.jsxs)(t.p,{children:["For the client library, you need to implement ",(0,i.jsx)(t.code,{children:"org.apache.pulsar.client.api.Authentication"}),". By entering the command below, you can pass this class when you create a Pulsar client."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://localhost:6650")\n    .authentication(new MyAuthentication())\n    .build();\n\n'})}),"\n",(0,i.jsx)(t.p,{children:"You can implement 2 interfaces on the client side:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"http://pulsar.apache.org/api/client/org/apache/pulsar/client/api/Authentication.html",children:(0,i.jsx)(t.code,{children:"Authentication"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"http://pulsar.apache.org/api/client/org/apache/pulsar/client/api/AuthenticationDataProvider.html",children:(0,i.jsx)(t.code,{children:"AuthenticationDataProvider"})})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["This in turn requires you to provide the client credentials in the form of ",(0,i.jsx)(t.code,{children:"org.apache.pulsar.client.api.AuthenticationDataProvider"})," and also leaves the chance to return different kinds of authentication token for different types of connection or by passing a certificate chain to use for TLS."]}),"\n",(0,i.jsx)(t.p,{children:"You can find the following examples for different client authentication plugins:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationTls.java",children:"Mutual TLS"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client-auth-athenz/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationAthenz.java",children:"Athenz"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client-auth-sasl/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationSasl.java",children:"Kerberos"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationToken.java",children:"JSON Web Token (JWT)"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/oauth2/AuthenticationOAuth2.java",children:"OAuth 2.0"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationBasic.java",children:"Basic auth"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"proxybroker-authentication-plugin",children:"Proxy/Broker authentication plugin"}),"\n",(0,i.jsx)(t.p,{children:"On the proxy/broker side, you need to configure the corresponding plugin to validate the credentials that the client sends. The proxy and broker can support multiple authentication providers at the same time."}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.code,{children:"conf/broker.conf"}),", you can choose to specify a list of valid providers:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-properties",children:"\n# Authentication provider name list, which is comma separated list of class names\nauthenticationProviders=\n\n"})}),"\n",(0,i.jsxs)(t.p,{children:["For the implementation of the ",(0,i.jsx)(t.code,{children:"org.apache.pulsar.broker.authentication.AuthenticationProvider"})," interface, refer to ",(0,i.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProvider.java",children:"here"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"You can find the following examples for different broker authentication plugins:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderTls.java",children:"Mutual TLS"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-auth-athenz/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderAthenz.java",children:"Athenz"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-auth-sasl/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderSasl.java",children:"Kerberos"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderToken.java",children:"JSON Web Token (JWT)"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderToken.java",children:"Basic auth"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"authorization",children:"Authorization"}),"\n",(0,i.jsx)(t.p,{children:'Authorization is the operation that checks whether a particular "role" or "principal" has permission to perform a certain operation.'}),"\n",(0,i.jsx)(t.p,{children:"By default, you can use the embedded authorization provider provided by Pulsar. You can also configure a different authorization provider through a plugin. Note that although the Authentication plugin is designed for use in both the proxy and broker, the Authorization plugin is designed only for use on the broker."}),"\n",(0,i.jsx)(t.h3,{id:"broker-authorization-plugin",children:"Broker authorization plugin"}),"\n",(0,i.jsxs)(t.p,{children:["To provide a custom authorization provider, you need to implement the ",(0,i.jsx)(t.code,{children:"org.apache.pulsar.broker.authorization.AuthorizationProvider"})," interface, put this class in the Pulsar broker classpath and configure the class in ",(0,i.jsx)(t.code,{children:"conf/broker.conf"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-properties",children:"\n# Authorization provider fully qualified class-name\nauthorizationProvider=org.apache.pulsar.broker.authorization.PulsarAuthorizationProvider\n\n"})}),"\n",(0,i.jsxs)(t.p,{children:["For the implementation of the ",(0,i.jsx)(t.code,{children:"org.apache.pulsar.broker.authorization.AuthorizationProvider"})," interface, refer to ",(0,i.jsx)(t.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authorization/AuthorizationProvider.java",children:"here"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var a=n(96540);const i={},r=a.createContext(i);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);