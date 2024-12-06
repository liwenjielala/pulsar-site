"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[423],{54291:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"security-overview","title":"Pulsar security overview","description":"As the central message bus for a business, Apache Pulsar is frequently used for storing mission-critical data. Therefore, enabling security features in Pulsar is crucial.","source":"@site/versioned_docs/version-2.7.5/security-overview.md","sourceDirName":".","slug":"/security-overview","permalink":"/docs/2.7.5/security-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.5/security-overview.md","tags":[],"version":"2.7.5","frontMatter":{"id":"security-overview","title":"Pulsar security overview","sidebar_label":"Overview","original_id":"security-overview"},"sidebar":"docsSidebar","previous":{"title":"Pulsar isolation","permalink":"/docs/2.7.5/administration-isolation"},"next":{"title":"Transport Encryption using TLS","permalink":"/docs/2.7.5/security-tls-transport"}}');var s=i(74848),r=i(28453);const o={id:"security-overview",title:"Pulsar security overview",sidebar_label:"Overview",original_id:"security-overview"},a=void 0,c={},l=[{value:"Role tokens",id:"role-tokens",level:2},{value:"Authentication providers",id:"authentication-providers",level:2}];function u(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"As the central message bus for a business, Apache Pulsar is frequently used for storing mission-critical data. Therefore, enabling security features in Pulsar is crucial."}),"\n",(0,s.jsx)(t.p,{children:"By default, Pulsar configures no encryption, authentication, or authorization. Any client can communicate to Apache Pulsar via plain text service URLs. So we must ensure that Pulsar accessing via these plain text service URLs is restricted to trusted clients only. In such cases, you can use Network segmentation and/or authorization ACLs to restrict access to trusted IPs. If you use neither, the state of cluster is wide open and anyone can access the cluster."}),"\n",(0,s.jsx)(t.p,{children:"Pulsar supports a pluggable authentication mechanism. And Pulsar clients use this mechanism to authenticate with brokers and proxies. You can also configure Pulsar to support multiple authentication sources."}),"\n",(0,s.jsxs)(t.p,{children:['The Pulsar broker validates the authentication credentials when a connection is established. After the initial connection is authenticated, the "principal" token is stored for authorization though the connection is not re-authenticated. The broker periodically checks the expiration status of every ',(0,s.jsx)(t.code,{children:"ServerCnx"})," object. You can set the ",(0,s.jsx)(t.code,{children:"authenticationRefreshCheckSeconds"})," on the broker to control the frequency to check the expiration status. By default, the ",(0,s.jsx)(t.code,{children:"authenticationRefreshCheckSeconds"})," is set to 60s. When the authentication is expired, the broker forces to re-authenticate the connection. If the re-authentication fails, the broker disconnects the client."]}),"\n",(0,s.jsxs)(t.p,{children:["The broker supports learning whether a particular client supports authentication refreshing. If a client supports authentication refreshing and the credential is expired, the authentication provider calls the ",(0,s.jsx)(t.code,{children:"refreshAuthentication"})," method to initiate the refreshing process. If a client does not support authentication refreshing and the credential is expired, the broker disconnects the client."]}),"\n",(0,s.jsx)(t.p,{children:"You had better secure the service components in your Apache Pulsar deployment."}),"\n",(0,s.jsx)(t.h2,{id:"role-tokens",children:"Role tokens"}),"\n",(0,s.jsxs)(t.p,{children:["In Pulsar, a ",(0,s.jsx)(t.em,{children:"role"})," is a string, like ",(0,s.jsx)(t.code,{children:"admin"})," or ",(0,s.jsx)(t.code,{children:"app1"}),", which can represent a single client or multiple clients. You can use roles to control permission for clients to produce or consume from certain topics, administer the configuration for tenants, and so on."]}),"\n",(0,s.jsxs)(t.p,{children:["Apache Pulsar uses an ",(0,s.jsx)(t.a,{href:"#authentication-providers",children:"Authentication Provider"})," to establish the identity of a client and then assign a ",(0,s.jsx)(t.em,{children:"role token"})," to that client. This role token is then used for ",(0,s.jsx)(t.a,{href:"/docs/2.7.5/security-authorization",children:"Authorization and ACLs"})," to determine what the client is authorized to do."]}),"\n",(0,s.jsx)(t.h2,{id:"authentication-providers",children:"Authentication providers"}),"\n",(0,s.jsx)(t.p,{children:"Currently Pulsar supports the following authentication providers:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/2.7.5/security-tls-authentication",children:"TLS Authentication"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/2.7.5/security-athenz",children:"Athenz"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/2.7.5/security-kerberos",children:"Kerberos"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/2.7.5/security-jwt",children:"JSON Web Token Authentication"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(96540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);