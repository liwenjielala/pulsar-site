"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[61603],{2582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"security-overview","title":"Pulsar security overview","description":"As the central message bus for a business, Apache Pulsar is frequently used for storing mission-critical data. Therefore, enabling security features in Pulsar is crucial. This chapter describes the main security controls that Pulsar uses to help protect your data.","source":"@site/versioned_docs/version-2.11.x/security-overview.md","sourceDirName":".","slug":"/security-overview","permalink":"/docs/2.11.x/security-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/security-overview.md","tags":[],"version":"2.11.x","frontMatter":{"id":"security-overview","title":"Pulsar security overview","sidebar_label":"Overview"},"sidebar":"docsSidebar","previous":{"title":"Isolate bookies","permalink":"/docs/2.11.x/administration-isolation-bookie"},"next":{"title":"End-to-End Encryption","permalink":"/docs/2.11.x/security-encryption"}}');var s=n(74848),r=n(28453);const o={id:"security-overview",title:"Pulsar security overview",sidebar_label:"Overview"},a=void 0,c={},h=[{value:"Encryption",id:"encryption",level:2},{value:"Authentication",id:"authentication",level:2},{value:"How it works in Pulsar",id:"how-it-works-in-pulsar",level:3},{value:"Authentication data limitations on the proxies",id:"authentication-data-limitations-on-the-proxies",level:3},{value:"Authorization",id:"authorization",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"As the central message bus for a business, Apache Pulsar is frequently used for storing mission-critical data. Therefore, enabling security features in Pulsar is crucial. This chapter describes the main security controls that Pulsar uses to help protect your data."}),"\n",(0,s.jsx)(t.p,{children:"Pulsar security is based on the following core pillars."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#encryption",children:"Encryption"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#authentication",children:"Authentication"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#authorization",children:"Authorization"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"By default, Pulsar configures no encryption, authentication, or authorization. Any clients can communicate to Pulsar via plain text service URLs. So you must ensure that Pulsar accessing via these plain text service URLs is restricted to trusted clients only. In such cases, you can use network segmentation and/or authorization ACLs to restrict access to trusted IPs. If you use neither, the state of the cluster is wide open and anyone can access the cluster."}),"\n",(0,s.jsxs)(t.p,{children:["Apache Pulsar uses an ",(0,s.jsx)(t.a,{href:"#authentication",children:"Authentication Provider"})," or an ",(0,s.jsx)(t.a,{href:"/docs/2.11.x/security-extending#proxybroker-authentication-plugin",children:"Authentication Provider Chain"})," to establish the identity of a client and then assign a ",(0,s.jsx)(t.em,{children:"role token"})," (a string like ",(0,s.jsx)(t.code,{children:"admin"})," or ",(0,s.jsx)(t.code,{children:"app1"}),") to that client. This role token can represent a single client or multiple clients and is then used for ",(0,s.jsx)(t.a,{href:"/docs/2.11.x/security-authorization",children:"Authorization"})," to determine what the client is authorized to do. You can use roles to control permission for clients to produce or consume from certain topics, administer the configuration for tenants, and so on."]}),"\n",(0,s.jsx)(t.h2,{id:"encryption",children:"Encryption"}),"\n",(0,s.jsx)(t.p,{children:"Encryption ensures that if an attacker gets access to your data, the attacker cannot read the data without also having access to the encryption keys. Encryption provides an important mechanism for protecting your data in-transit to meet your security requirements for cryptographic algorithms and key management."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"What's next?"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["To configure end-to-end encryption, see ",(0,s.jsx)(t.a,{href:"/docs/2.11.x/security-encryption",children:"End-to-end encryption"})," for more details."]}),"\n",(0,s.jsxs)(t.li,{children:["To configure transport layer encryption, see ",(0,s.jsx)(t.a,{href:"/docs/2.11.x/security-tls-transport",children:"TLS encryption"})," for more details."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsx)(t.p,{children:"Authentication is the process of verifying the identity of clients. In Pulsar, the authentication provider is responsible for properly identifying clients and associating them with role tokens. Note that if you only enable authentication, an authenticated role token can access all resources in the cluster."}),"\n",(0,s.jsx)(t.h3,{id:"how-it-works-in-pulsar",children:"How it works in Pulsar"}),"\n",(0,s.jsx)(t.p,{children:"Pulsar provides a pluggable authentication framework, and Pulsar brokers/proxies use this mechanism to authenticate clients."}),"\n",(0,s.jsx)(t.p,{children:"The way how each client passes its authentication data to brokers varies depending on the protocols it uses. Brokers validate the authentication credentials when a connection is established and check whether the authentication data is expired."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"When using HTTP/HTTPS protocol for cluster management, each client passes the authentication data based on the HTTP/HTTPS request header, and brokers check the data upon request."}),"\n",(0,s.jsxs)(t.li,{children:["When using ",(0,s.jsx)(t.a,{href:"/docs/2.11.x/developing-binary-protocol",children:"Pulsar protocol"})," for productions/consumptions, each client passes the authentication data by sending the ",(0,s.jsx)(t.code,{children:"CommandConnect"})," command when connecting to brokers. Brokers cache the data and periodically check whether the data has expired and learn whether the client supports authentication refreshing. By default, the ",(0,s.jsx)(t.code,{children:"authenticationRefreshCheckSeconds"})," is set to 60s.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If a client supports authentication refreshing and the credential is expired, brokers send the ",(0,s.jsx)(t.code,{children:"CommandAuthChallenge"})," command to exchange the authentication data with the client. If the next check finds that the previous authentication exchange has not been returned, brokers disconnect the client."]}),"\n",(0,s.jsx)(t.li,{children:"If a client does not support authentication refreshing and the credential is expired, brokers disconnect the client."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"authentication-data-limitations-on-the-proxies",children:"Authentication data limitations on the proxies"}),"\n",(0,s.jsx)(t.p,{children:"When you use proxies between clients and brokers, there are two authentication data:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["authentication data from proxies that brokers default to authenticate - known as ",(0,s.jsx)(t.strong,{children:"self-authentication"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["authentication data from clients that proxies forward to brokers for authenticating - known as ",(0,s.jsx)(t.strong,{children:"original authentication"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Important:"})," If your authentication data contains an expiration time, or your authorization provider depends on the authentication data, you must:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Ensure your authentication data of proxies has no expiration time since brokers don't support refreshing this authentication data."}),"\n",(0,s.jsxs)(t.li,{children:["Set ",(0,s.jsx)(t.code,{children:"forwardAuthorizationCredentials"})," to ",(0,s.jsx)(t.code,{children:"true"})," in the ",(0,s.jsx)(t.code,{children:"conf/proxy.conf"})," file."]}),"\n",(0,s.jsxs)(t.li,{children:["Set ",(0,s.jsx)(t.code,{children:"authenticateOriginalAuthData"})," to ",(0,s.jsx)(t.code,{children:"true"})," in the ",(0,s.jsx)(t.code,{children:"conf/broker.conf"})," file, which ensures that brokers recheck the client authentication."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"What's next?"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["To configure built-in authentication plugins, read:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/2.11.x/security-tls-authentication",children:"mTLS authentication"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/2.11.x/security-athenz",children:"Athenz authentication"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/2.11.x/security-kerberos",children:"Kerberos authentication"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/2.11.x/security-jwt",children:"JSON Web Token (JWT) authentication"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/2.11.x/security-oauth2",children:"OAuth 2.0 authentication"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/2.11.x/security-basic-auth",children:"HTTP basic authentication"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["To customize an authentication plugin, read ",(0,s.jsx)(t.a,{href:"/docs/2.11.x/security-extending",children:"extended authentication"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Starting from 2.11.0, you can configure ",(0,s.jsx)(t.a,{href:"/docs/2.11.x/security-tls-transport",children:"TLS encryption"})," with any one of the above authentication providers."]})}),"\n",(0,s.jsx)(t.h2,{id:"authorization",children:"Authorization"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/2.11.x/security-authorization",children:"Authorization"})," is the process of giving permissions to clients and determining what clients can do."]}),"\n",(0,s.jsx)(t.p,{children:"The role tokens with the most permissions are the superusers who can create and delete tenants, along with full access to all tenant resources. When a superuser creates a tenant, that tenant is assigned an admin role token. A client with the admin role token can then create, modify and destroy namespaces, and grant and revoke permissions to other role tokens on those namespaces."})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);