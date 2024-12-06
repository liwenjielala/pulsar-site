"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[20075],{34168:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"concepts-multiple-advertised-listeners","title":"Multiple advertised listeners","description":"When a Pulsar cluster is deployed in the production environment, it may require to expose multiple advertised addresses for the broker. For example, when you deploy a Pulsar cluster in Kubernetes and want other clients, which are not in the same Kubernetes cluster, to connect to the Pulsar cluster, you need to assign a broker URL to external clients. But clients in the same Kubernetes cluster can still connect to the Pulsar cluster through the internal network of Kubernetes.","source":"@site/versioned_docs/version-2.6.2/concepts-multiple-advertised-listeners.md","sourceDirName":".","slug":"/concepts-multiple-advertised-listeners","permalink":"/docs/2.6.2/concepts-multiple-advertised-listeners","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.2/concepts-multiple-advertised-listeners.md","tags":[],"version":"2.6.2","frontMatter":{"id":"concepts-multiple-advertised-listeners","title":"Multiple advertised listeners","sidebar_label":"Multiple advertised listeners","original_id":"concepts-multiple-advertised-listeners"},"sidebar":"docsSidebar","previous":{"title":"Proxy support with SNI routing","permalink":"/docs/2.6.2/concepts-proxy-sni-routing"},"next":{"title":"Get started","permalink":"/docs/2.6.2/schema-get-started"}}');var r=s(74848),i=s(28453);const l={id:"concepts-multiple-advertised-listeners",title:"Multiple advertised listeners",sidebar_label:"Multiple advertised listeners",original_id:"concepts-multiple-advertised-listeners"},o=void 0,a={},d=[{value:"Advertised listeners",id:"advertised-listeners",level:2},{value:"Use multiple advertised listeners",id:"use-multiple-advertised-listeners",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"When a Pulsar cluster is deployed in the production environment, it may require to expose multiple advertised addresses for the broker. For example, when you deploy a Pulsar cluster in Kubernetes and want other clients, which are not in the same Kubernetes cluster, to connect to the Pulsar cluster, you need to assign a broker URL to external clients. But clients in the same Kubernetes cluster can still connect to the Pulsar cluster through the internal network of Kubernetes."}),"\n",(0,r.jsx)(t.h2,{id:"advertised-listeners",children:"Advertised listeners"}),"\n",(0,r.jsxs)(t.p,{children:["To ensure clients in both internal and external networks can connect to a Pulsar cluster, Pulsar introduces ",(0,r.jsx)(t.code,{children:"advertisedListeners"})," and ",(0,r.jsx)(t.code,{children:"internalListenerName"})," configuration options into the ",(0,r.jsx)(t.a,{href:"/docs/2.6.2/reference-configuration#broker",children:"broker configuration file"})," to ensure that the broker supports exposing multiple advertised listeners and support the separation of internal and external network traffic."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"advertisedListeners"})," is used to specify multiple advertised listeners. The broker uses the listener as the broker identifier in the load manager and the bundle owner data. The ",(0,r.jsx)(t.code,{children:"advertisedListeners"})," is formatted as ",(0,r.jsx)(t.code,{children:"<listener_name>:pulsar://<host>:<port>, <listener_name>:pulsar+ssl://<host>:<port>"}),". You can set up the ",(0,r.jsx)(t.code,{children:"advertisedListeners"})," like\n",(0,r.jsx)(t.code,{children:"advertisedListeners=internal:pulsar://192.168.1.11:6660,internal:pulsar+ssl://192.168.1.11:6651"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"internalListenerName"})," is used to specify the internal service URL that the broker uses. You can specify the ",(0,r.jsx)(t.code,{children:"internalListenerName"})," by choosing one of the ",(0,r.jsx)(t.code,{children:"advertisedListeners"}),". The broker uses the listener name of the first advertised listener as the ",(0,r.jsx)(t.code,{children:"internalListenerName"})," if the ",(0,r.jsx)(t.code,{children:"internalListenerName"})," is absent."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["After setting up the ",(0,r.jsx)(t.code,{children:"advertisedListeners"}),", clients can choose one of the listeners as the service URL to create a connection to the broker as long as the network is accessible. However, if the client creates producers or consumer on a topic, the client must send a lookup requests to the broker for getting the owner broker, then connect to the owner broker to publish messages or consume messages. Therefore, You must allow the client to get the corresponding service URL with the same advertised listener name as the one used by the client. This helps keep client-side simple and secure."]}),"\n",(0,r.jsx)(t.h2,{id:"use-multiple-advertised-listeners",children:"Use multiple advertised listeners"}),"\n",(0,r.jsx)(t.p,{children:"This example shows how a Pulsar client uses multiple advertised listeners."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Configure multiple advertised listeners in the broker configuration file."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"\nadvertisedListeners={listenerName}:pulsar://xxxx:6650,\n{listenerName}:pulsar+ssl://xxxx:6651\n\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"Specify the listener name for the client."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://xxxx:6650")\n    .listenerName("external")\n    .build();\n\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>o});var n=s(96540);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);