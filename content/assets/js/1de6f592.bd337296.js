"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[62159],{8078:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>r});const a=JSON.parse('{"id":"concepts-multi-tenancy","title":"Multi Tenancy","description":"Pulsar was created from the ground up as a multi-tenant system. To support multi-tenancy, Pulsar has a concept of tenants. Tenants can be spread across clusters and can each have their own authentication and authorization scheme applied to them. They are also the administrative unit at which storage quotas, message TTL, and isolation policies can be managed.","source":"@site/versioned_docs/version-2.4.0/concepts-multi-tenancy.md","sourceDirName":".","slug":"/concepts-multi-tenancy","permalink":"/docs/2.4.0/concepts-multi-tenancy","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.0/concepts-multi-tenancy.md","tags":[],"version":"2.4.0","frontMatter":{"id":"concepts-multi-tenancy","title":"Multi Tenancy","sidebar_label":"Multi Tenancy"},"sidebar":"docsSidebar","previous":{"title":"Geo Replication","permalink":"/docs/2.4.0/concepts-replication"},"next":{"title":"Authentication and Authorization","permalink":"/docs/2.4.0/concepts-authentication"}}');var s=t(74848),i=t(28453);const c={id:"concepts-multi-tenancy",title:"Multi Tenancy",sidebar_label:"Multi Tenancy"},o=void 0,l={},r=[{value:"Tenants",id:"tenants",level:2},{value:"Namespaces",id:"namespaces",level:2},{value:"Namespace change events and topic-level policies",id:"namespace-change-events-and-topic-level-policies",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Pulsar was created from the ground up as a multi-tenant system. To support multi-tenancy, Pulsar has a concept of tenants. Tenants can be spread across clusters and can each have their own ",(0,s.jsx)(n.a,{href:"/docs/2.4.0/security-overview",children:"authentication and authorization"})," scheme applied to them. They are also the administrative unit at which storage quotas, ",(0,s.jsx)(n.a,{href:"/docs/2.4.0/cookbooks-retention-expiry#time-to-live-ttl",children:"message TTL"}),", and isolation policies can be managed."]}),"\n",(0,s.jsx)(n.p,{children:"The multi-tenant nature of Pulsar is reflected mostly visibly in topic URLs, which have this structure:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-http",children:"\npersistent://tenant/namespace/topic\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"As you can see, the tenant is the most basic unit of categorization for topics (more fundamental than the namespace and topic name)."}),"\n",(0,s.jsx)(n.h2,{id:"tenants",children:"Tenants"}),"\n",(0,s.jsx)(n.p,{children:"To each tenant in a Pulsar instance you can assign:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["An ",(0,s.jsx)(n.a,{href:"/docs/2.4.0/security-authorization",children:"authorization"})," scheme"]}),"\n",(0,s.jsxs)(n.li,{children:["The set of ",(0,s.jsx)(n.a,{href:"/docs/2.4.0/reference-terminology#cluster",children:"clusters"})," to which the tenant's configuration applies"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"namespaces",children:"Namespaces"}),"\n",(0,s.jsx)(n.p,{children:"Tenants and namespaces are two key concepts of Pulsar to support multi-tenancy."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Pulsar is provisioned for specified tenants with appropriate capacity allocated to the tenant."}),"\n",(0,s.jsxs)(n.li,{children:["A namespace is the administrative unit nomenclature within a tenant. The configuration policies set on a namespace apply to all the topics created in that namespace. A tenant may create multiple namespaces via self-administration using the REST API and the ",(0,s.jsx)(n.a,{href:"/docs/2.4.0/reference-ulsar-admin",children:(0,s.jsx)(n.code,{children:"pulsar-admin"})})," CLI tool. For instance, a tenant with different applications can create a separate namespace for each application."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Names for topics in the same namespace will look like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-http",children:"\npersistent://tenant/app1/topic-1\n\npersistent://tenant/app1/topic-2\n\npersistent://tenant/app1/topic-3\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"namespace-change-events-and-topic-level-policies",children:"Namespace change events and topic-level policies"}),"\n",(0,s.jsx)(n.p,{children:"Pulsar is a multi-tenant event streaming system. Administrators can manage the tenants and namespaces by setting policies at different levels. However, the policies, such as retention policy and storage quota policy, are only available at a namespace level. In many use cases, users need to set a policy at the topic level. The namespace change events approach is proposed for supporting topic-level policies in an efficient way. In this approach, Pulsar is used as an event log to store namespace change events (such as topic policy changes). This approach has a few benefits:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Avoid using ZooKeeper and introduce more loads to ZooKeeper."}),"\n",(0,s.jsx)(n.li,{children:"Use Pulsar as an event log for propagating the policy cache. It can scale efficiently."}),"\n",(0,s.jsx)(n.li,{children:"Use Pulsar SQL to query the namespace changes and audit the system."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Each namespace has a system topic ",(0,s.jsx)(n.code,{children:"__change_events"}),". This system topic is used for storing change events for a given namespace. The following figure illustrates how to use namespace change events to implement a topic-level policy."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Pulsar Admin clients communicate with the Admin Restful API to update topic level policies."}),"\n",(0,s.jsxs)(n.li,{children:["Any broker that receives the Admin HTTP request publishes a topic policy change event to the corresponding ",(0,s.jsx)(n.code,{children:"__change_events"})," topic of the namespace."]}),"\n",(0,s.jsxs)(n.li,{children:["Each broker that owns a namespace bundle(s) subscribes to the ",(0,s.jsx)(n.code,{children:"__change_events"})," topic to receive change events of the namespace. It then applies the change events to the policy cache."]}),"\n",(0,s.jsx)(n.li,{children:"Once the policy cache is updated, the broker sends the response back to the Pulsar Admin clients."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var a=t(96540);const s={},i=a.createContext(s);function c(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);