"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[78838],{31891:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"security-authorization","title":"Authentication and authorization in Pulsar","description":"In Pulsar, the authentication provider is responsible for properly identifying clients and associating the clients with role tokens. If you only enable authentication, an authenticated role token has the ability to access all resources in the cluster. Authorization is the process that determines what clients are able to do.","source":"@site/versioned_docs/version-2.7.0/security-authorization.md","sourceDirName":".","slug":"/security-authorization","permalink":"/docs/2.7.0/security-authorization","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.0/security-authorization.md","tags":[],"version":"2.7.0","frontMatter":{"id":"security-authorization","title":"Authentication and authorization in Pulsar","sidebar_label":"Authorization and ACLs","original_id":"security-authorization"},"sidebar":"docsSidebar","previous":{"title":"Authentication using HTTP basic","permalink":"/docs/2.7.0/security-basic-auth"},"next":{"title":"End-to-End Encryption","permalink":"/docs/2.7.0/security-encryption"}}');var s=t(74848),a=t(28453);const i={id:"security-authorization",title:"Authentication and authorization in Pulsar",sidebar_label:"Authorization and ACLs",original_id:"security-authorization"},o=void 0,c={},l=[{value:"Broker and Proxy Setup",id:"broker-and-proxy-setup",level:2},{value:"Enable authorization and assign superusers",id:"enable-authorization-and-assign-superusers",level:3},{value:"Proxy Roles",id:"proxy-roles",level:3},{value:"Administer tenants",id:"administer-tenants",level:2},{value:"Create a new tenant",id:"create-a-new-tenant",level:3},{value:"Manage permissions",id:"manage-permissions",level:3},{value:"Pulsar admin authentication",id:"pulsar-admin-authentication",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["In Pulsar, the ",(0,s.jsx)(n.a,{href:"/docs/2.7.0/security-overview#authentication-providers",children:"authentication provider"})," is responsible for properly identifying clients and associating the clients with ",(0,s.jsx)(n.a,{href:"/docs/2.7.0/security-overview#role-tokens",children:"role tokens"}),". If you only enable authentication, an authenticated role token has the ability to access all resources in the cluster. ",(0,s.jsx)(n.em,{children:"Authorization"})," is the process that determines ",(0,s.jsx)(n.em,{children:"what"})," clients are able to do."]}),"\n",(0,s.jsxs)(n.p,{children:["The role tokens with the most privileges are the ",(0,s.jsx)(n.em,{children:"superusers"}),". The ",(0,s.jsx)(n.em,{children:"superusers"})," can create and destroy tenants, along with having full access to all tenant resources."]}),"\n",(0,s.jsxs)(n.p,{children:["When a superuser creates a ",(0,s.jsx)(n.a,{href:"/docs/2.7.0/reference-terminology#tenant",children:"tenant"}),", that tenant is assigned an admin role. A client with the admin role token can then create, modify and destroy namespaces, and grant and revoke permissions to ",(0,s.jsx)(n.em,{children:"other role tokens"})," on those namespaces."]}),"\n",(0,s.jsx)(n.h2,{id:"broker-and-proxy-setup",children:"Broker and Proxy Setup"}),"\n",(0,s.jsx)(n.h3,{id:"enable-authorization-and-assign-superusers",children:"Enable authorization and assign superusers"}),"\n",(0,s.jsxs)(n.p,{children:["You can enable the authorization and assign the superusers in the broker (",(0,s.jsx)(n.a,{href:"/docs/2.7.0/reference-configuration#broker",children:(0,s.jsx)(n.code,{children:"conf/broker.conf"})}),") configuration files."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-properties",children:"\nauthorizationEnabled=true\nsuperUserRoles=my-super-user-1,my-super-user-2\n\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["A full list of parameters is available in the ",(0,s.jsx)(n.code,{children:"conf/broker.conf"})," file.\nYou can also find the default values for those parameters in ",(0,s.jsx)(n.a,{href:"/docs/2.7.0/reference-configuration#broker",children:"Broker Configuration"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Typically, you use superuser roles for administrators, clients as well as broker-to-broker authorization. When you use ",(0,s.jsx)(n.a,{href:"/docs/2.7.0/concepts-replication",children:"geo-replication"}),", every broker needs to be able to publish to all the other topics of clusters."]}),"\n",(0,s.jsxs)(n.p,{children:["You can also enable the authorization for the proxy in the proxy configuration file (",(0,s.jsx)(n.code,{children:"conf/proxy.conf"}),"). Once you enable the authorization on the proxy, the proxy does an additional authorization check before forwarding the request to a broker.\nIf you enable authorization on the broker, the broker checks the authorization of the request when the broker receives the forwarded request."]}),"\n",(0,s.jsx)(n.h3,{id:"proxy-roles",children:"Proxy Roles"}),"\n",(0,s.jsxs)(n.p,{children:["By default, the broker treats the connection between a proxy and the broker as a normal user connection. The broker authenticates the user as the role configured in ",(0,s.jsx)(n.code,{children:"proxy.conf"}),"(see ",(0,s.jsx)(n.a,{href:"/docs/2.7.0/security-tls-authentication#enable-tls-authentication-on-proxies",children:'"Enable TLS Authentication on Proxies"'}),"). However, when the user connects to the cluster through a proxy, the user rarely requires the authentication. The user expects to be able to interact with the cluster as the role for which they have authenticated with the proxy."]}),"\n",(0,s.jsxs)(n.p,{children:["Pulsar uses ",(0,s.jsx)(n.em,{children:"Proxy roles"})," to enable the authentication. Proxy roles are specified in the broker configuration file, ",(0,s.jsx)(n.a,{href:"/docs/2.7.0/reference-configuration#broker",children:(0,s.jsx)(n.code,{children:"conf/broker.conf"})}),". If a client that is authenticated with a broker is one of its ",(0,s.jsx)(n.code,{children:"proxyRoles"}),", all requests from that client must also carry information about the role of the client that is authenticated with the proxy. This information is called the ",(0,s.jsx)(n.em,{children:"original principal"}),". If the ",(0,s.jsx)(n.em,{children:"original principal"})," is absent, the client is not able to access anything."]}),"\n",(0,s.jsxs)(n.p,{children:["You must authorize both the ",(0,s.jsx)(n.em,{children:"proxy role"})," and the ",(0,s.jsx)(n.em,{children:"original principal"})," to access a resource to ensure that the resource is accessible via the proxy. Administrators can take two approaches to authorize the ",(0,s.jsx)(n.em,{children:"proxy role"})," and the ",(0,s.jsx)(n.em,{children:"original principal"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The more secure approach is to grant access to the proxy roles each time you grant access to a resource. For example, if you have a proxy role named ",(0,s.jsx)(n.code,{children:"proxy1"}),", when the superuser creates a tenant, you should specify ",(0,s.jsx)(n.code,{children:"proxy1"})," as one of the admin roles. When a role is granted permissions to produce or consume from a namespace, if that client wants to produce or consume through a proxy, you should also grant ",(0,s.jsx)(n.code,{children:"proxy1"})," the same permissions."]}),"\n",(0,s.jsxs)(n.p,{children:["Another approach is to make the proxy role a superuser. This allows the proxy to access all resources. The client still needs to authenticate with the proxy, and all requests made through the proxy have their role downgraded to the ",(0,s.jsx)(n.em,{children:"original principal"})," of the authenticated client. However, if the proxy is compromised, a bad actor could get full access to your cluster."]}),"\n",(0,s.jsxs)(n.p,{children:["You can specify the roles as proxy roles in ",(0,s.jsx)(n.a,{href:"/docs/2.7.0/reference-configuration#broker",children:(0,s.jsx)(n.code,{children:"conf/broker.conf"})}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-properties",children:"\nproxyRoles=my-proxy-role\n\n# if you want to allow superusers to use the proxy (see above)\nsuperUserRoles=my-super-user-1,my-super-user-2,my-proxy-role\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"administer-tenants",children:"Administer tenants"}),"\n",(0,s.jsxs)(n.p,{children:["Pulsar ",(0,s.jsx)(n.a,{href:"/docs/2.7.0/reference-terminology#instance",children:"instance"})," administrators or some kind of self-service portal typically provisions a Pulsar ",(0,s.jsx)(n.a,{href:"/docs/2.7.0/reference-terminology#tenant",children:"tenant"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can manage tenants using the ",(0,s.jsx)(n.a,{href:"/docs/2.7.0/reference-pulsar-admin",children:(0,s.jsx)(n.code,{children:"pulsar-admin"})})," tool."]}),"\n",(0,s.jsx)(n.h3,{id:"create-a-new-tenant",children:"Create a new tenant"}),"\n",(0,s.jsx)(n.p,{children:"The following is an example tenant creation command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar-admin tenants create my-tenant \\\n  --admin-roles my-admin-role \\\n  --allowed-clusters us-west,us-east\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This command creates a new tenant ",(0,s.jsx)(n.code,{children:"my-tenant"})," that is allowed to use the clusters ",(0,s.jsx)(n.code,{children:"us-west"})," and ",(0,s.jsx)(n.code,{children:"us-east"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["A client that successfully identifies itself as having the role ",(0,s.jsx)(n.code,{children:"my-admin-role"})," is allowed to perform all administrative tasks on this tenant."]}),"\n",(0,s.jsx)(n.p,{children:"The structure of topic names in Pulsar reflects the hierarchy between tenants, clusters, and namespaces:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\npersistent://tenant/namespace/topic\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"manage-permissions",children:"Manage permissions"}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.a,{href:"/docs/2.7.0/admin-api-permissions",children:"Pulsar Admin Tools"})," for managing permission in Pulsar."]}),"\n",(0,s.jsx)(n.h3,{id:"pulsar-admin-authentication",children:"Pulsar admin authentication"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'\nPulsarAdmin admin = PulsarAdmin.builder()\n                    .serviceHttpUrl("http://broker:8080")\n                    .authentication("com.org.MyAuthPluginClass", "param1:value1")\n                    .build();\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"To use TLS:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'\nPulsarAdmin admin = PulsarAdmin.builder()\n                    .serviceHttpUrl("https://broker:8080")\n                    .authentication("com.org.MyAuthPluginClass", "param1:value1")\n                    .tlsTrustCertsFilePath("/path/to/trust/cert")\n                    .build();\n\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);