"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[57390],{80941:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"functions-worker-for-geo-replication","title":"Configure function workers for geo-replicated clusters","description":"Configure function workers for geo-replicated clusters in Pulsar.","source":"@site/versioned_docs/version-4.0.x/functions-worker-for-geo-replication.md","sourceDirName":".","slug":"/functions-worker-for-geo-replication","permalink":"/docs/4.0.x/functions-worker-for-geo-replication","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-4.0.x/functions-worker-for-geo-replication.md","tags":[],"version":"4.0.x","frontMatter":{"id":"functions-worker-for-geo-replication","title":"Configure function workers for geo-replicated clusters","sidebar_label":"Configure function workers for geo-replicated clusters","description":"Configure function workers for geo-replicated clusters in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"Enable stateful functions","permalink":"/docs/4.0.x/functions-worker-stateful"},"next":{"title":"Troubleshooting","permalink":"/docs/4.0.x/functions-worker-troubleshooting"}}');var t=o(74848),s=o(28453);const i={id:"functions-worker-for-geo-replication",title:"Configure function workers for geo-replicated clusters",sidebar_label:"Configure function workers for geo-replicated clusters",description:"Configure function workers for geo-replicated clusters in Pulsar."},c=void 0,a={},l=[];function u(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["When running multiple clusters tied together with ",(0,t.jsx)(n.a,{href:"/docs/4.0.x/concepts-replication",children:"geo replication"}),", you need to use a different function namespace for each cluster. Otherwise, all functions share one namespace and potentially schedule assignments across clusters."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, if you have two clusters: ",(0,t.jsx)(n.code,{children:"east-1"})," and ",(0,t.jsx)(n.code,{children:"west-1"}),", you can configure the function workers for ",(0,t.jsx)(n.code,{children:"east-1"})," and ",(0,t.jsx)(n.code,{children:"west-1"})," respectively in the ",(0,t.jsx)(n.code,{children:"conf/functions_worker.yml"})," file. This ensures the two different function workers use distinct sets of topics for their internal coordination."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"pulsarFunctionsCluster: east-1\npulsarFunctionsNamespace: public/functions-east-1\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"pulsarFunctionsCluster: west-1\npulsarFunctionsNamespace: public/functions-west-1\n"})})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var r=o(96540);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);