"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[35946],{862:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"cookbooks-non-persistent","title":"Non-persistent messaging","description":"Non-persistent topics are Pulsar topics in which message data is never persistently stored and kept only in memory. This cookbook provides:","source":"@site/versioned_docs/version-2.11.x/cookbooks-non-persistent.md","sourceDirName":".","slug":"/cookbooks-non-persistent","permalink":"/docs/2.11.x/cookbooks-non-persistent","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/cookbooks-non-persistent.md","tags":[],"version":"2.11.x","frontMatter":{"id":"cookbooks-non-persistent","title":"Non-persistent messaging","sidebar_label":"Non-persistent messaging"},"sidebar":"docsSidebar","previous":{"title":"Message deduplication ","permalink":"/docs/2.11.x/cookbooks-deduplication"},"next":{"title":"Message retention and expiry","permalink":"/docs/2.11.x/cookbooks-retention-expiry"}}');var i=s(74848),o=s(28453);const r={id:"cookbooks-non-persistent",title:"Non-persistent messaging",sidebar_label:"Non-persistent messaging"},a=void 0,c={},l=[{value:"Overview",id:"overview",level:2},{value:"Use",id:"use",level:2},{value:"Enable",id:"enable",level:2},{value:"Configuration for standalone mode",id:"configuration-for-standalone-mode",level:4},{value:"Manage with cli",id:"manage-with-cli",level:2},{value:"Use with Pulsar clients",id:"use-with-pulsar-clients",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Non-persistent topics"})," are Pulsar topics in which message data is ",(0,i.jsx)(n.em,{children:"never"})," ",(0,i.jsx)(n.a,{href:"/docs/2.11.x/concepts-architecture-overview#persistent-storage",children:"persistently stored"})," and kept only in memory. This cookbook provides:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A basic ",(0,i.jsx)(n.a,{href:"#overview",children:"conceptual overview"})," of non-persistent topics"]}),"\n",(0,i.jsxs)(n.li,{children:["Information about ",(0,i.jsx)(n.a,{href:"#configuration-for-standalone-mode",children:"configurable parameters"})," related to non-persistent topics"]}),"\n",(0,i.jsxs)(n.li,{children:["A guide to the ",(0,i.jsx)(n.a,{href:"#manage-with-cli",children:"CLI interface"})," for managing non-persistent topics"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["By default, Pulsar persistently stores ",(0,i.jsx)(n.em,{children:"all"})," unacknowledged messages on multiple bookies (storage nodes). Data for messages on persistent topics can thus survive broker restarts and subscriber failover."]}),"\n",(0,i.jsxs)(n.p,{children:["Pulsar also, however, supports ",(0,i.jsx)(n.strong,{children:"non-persistent topics"}),", which are topics on which messages are ",(0,i.jsx)(n.em,{children:"never"})," persisted to disk and live only in memory. When using non-persistent delivery, killing a Pulsar ",(0,i.jsx)(n.a,{href:"/docs/2.11.x/reference-terminology#broker",children:"broker"})," or disconnecting a subscriber to a topic means that all in-transit messages are lost on that (non-persistent) topic, meaning that clients may see message loss."]}),"\n",(0,i.jsxs)(n.p,{children:["Non-persistent topics have names of this form (note the ",(0,i.jsx)(n.code,{children:"non-persistent"})," in the name):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:"non-persistent://tenant/namespace/topic\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["For more high-level information about non-persistent topics, see the ",(0,i.jsx)(n.a,{href:"/docs/2.11.x/concepts-messaging#non-persistent-topics",children:"Concepts and Architecture"})," documentation."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"use",children:"Use"}),"\n",(0,i.jsxs)(n.p,{children:["To use non-persistent topics, you need to ",(0,i.jsx)(n.a,{href:"#enable",children:"enable"})," them in your Pulsar broker configuration and differentiate them by name when interacting with them. This ",(0,i.jsx)(n.a,{href:"/docs/2.11.x/reference-cli-tools",children:(0,i.jsx)(n.code,{children:"pulsar-client produce"})})," command, for example, would produce one message on a non-persistent topic in a standalone cluster:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'bin/pulsar-client produce non-persistent://public/default/example-np-topic \\\n  --num-produce 1 \\\n  --messages "This message will be stored only in memory"\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["For a more thorough guide to non-persistent topics from an administrative perspective, see the ",(0,i.jsx)(n.a,{href:"/docs/2.11.x/admin-api-topics",children:"Non-persistent topics"})," guide."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"enable",children:"Enable"}),"\n",(0,i.jsxs)(n.p,{children:["To enable non-persistent topics in a Pulsar broker, the ",(0,i.jsx)(n.a,{href:"/docs/2.11.x/reference-configuration#broker-enableNonPersistentTopics",children:(0,i.jsx)(n.code,{children:"enableNonPersistentTopics"})})," must be set to ",(0,i.jsx)(n.code,{children:"true"}),". This is the default, so you won't need to take any action to enable non-persistent messaging."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.h4,{id:"configuration-for-standalone-mode",children:"Configuration for standalone mode"}),"\n",(0,i.jsxs)(n.p,{children:["If you're running Pulsar in standalone mode, the same configurable parameters are available but in the ",(0,i.jsx)(n.a,{href:"/docs/2.11.x/reference-configuration#standalone",children:(0,i.jsx)(n.code,{children:"standalone.conf"})})," configuration file."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you'd like to enable ",(0,i.jsx)(n.em,{children:"only"})," non-persistent topics in a broker, you can set the ",(0,i.jsx)(n.a,{href:"/docs/2.11.x/reference-configuration#broker-enablePersistentTopics",children:(0,i.jsx)(n.code,{children:"enablePersistentTopics"})})," parameter to ",(0,i.jsx)(n.code,{children:"false"})," and the ",(0,i.jsx)(n.code,{children:"enableNonPersistentTopics"})," parameter to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"manage-with-cli",children:"Manage with cli"}),"\n",(0,i.jsxs)(n.p,{children:["Non-persistent topics can be managed using the ",(0,i.jsx)(n.a,{href:"pathname:///reference/#/2.11.x/pulsar-admin/topics?id=topics",children:(0,i.jsx)(n.code,{children:"pulsar-admin non-persistent"})})," command-line interface. With that interface, you can perform actions like ",(0,i.jsx)(n.a,{href:"pathname:///reference/#/2.11.x/pulsar-admin/topics?id=create-partitioned-topic",children:"create a partitioned non-persistent topic"}),", ",(0,i.jsx)(n.a,{href:"pathname:///reference/#/2.11.x/pulsar-admin/topics?id=stats",children:"get stats"})," for a non-persistent topic, ",(0,i.jsx)(n.a,{href:"pathname:///reference/#/2.11.x/pulsar-admin/topics?id=list",children:"list"})," non-persistent topics under a namespace, and more."]}),"\n",(0,i.jsx)(n.h2,{id:"use-with-pulsar-clients",children:"Use with Pulsar clients"}),"\n",(0,i.jsxs)(n.p,{children:["You shouldn't need to make any changes to your Pulsar clients to use non-persistent messaging beyond making sure that you use proper ",(0,i.jsx)(n.a,{href:"#use",children:"topic names"})," with ",(0,i.jsx)(n.code,{children:"non-persistent"})," as the topic type."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(96540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);