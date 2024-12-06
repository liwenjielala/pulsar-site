"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[50754],{96334:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"helm-install","title":"Install Apache Pulsar using Helm","description":"Install Apache Pulsar on Kubernetes with the official Pulsar Helm chart.","source":"@site/versioned_docs/version-2.2.0/helm-install.md","sourceDirName":".","slug":"/helm-install","permalink":"/docs/2.2.0/helm-install","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.0/helm-install.md","tags":[],"version":"2.2.0","frontMatter":{"id":"helm-install","title":"Install Apache Pulsar using Helm","sidebar_label":"Install ","original_id":"helm-install"}}');var t=l(74848),s=l(28453);const o={id:"helm-install",title:"Install Apache Pulsar using Helm",sidebar_label:"Install ",original_id:"helm-install"},i=void 0,a={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Environment setup",id:"environment-setup",level:2},{value:"Tools",id:"tools",level:3},{value:"Cloud cluster preparation",id:"cloud-cluster-preparation",level:2},{value:"Deploy Pulsar",id:"deploy-pulsar",level:2},{value:"Upgrade Pulsar",id:"upgrade-pulsar",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Install Apache Pulsar on Kubernetes with the official Pulsar Helm chart."}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(n.p,{children:"In order to deploy Apache Pulsar on Kubernetes, the following are required."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["kubectl 1.14 or higher, compatible with your cluster (",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#before-you-begin",children:"+/- 1 minor release from your cluster"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"Helm v3 (3.0.2 or higher)"}),"\n",(0,t.jsx)(n.li,{children:"A Kubernetes cluster, version 1.14 or higher."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"environment-setup",children:"Environment setup"}),"\n",(0,t.jsx)(n.p,{children:"Before proceeding to deploying Pulsar, you need to prepare your environment."}),"\n",(0,t.jsx)(n.h3,{id:"tools",children:"Tools"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"helm"})," and ",(0,t.jsx)(n.code,{children:"kubectl"})," need to be ",(0,t.jsx)(n.a,{href:"/docs/2.2.0/helm-tools",children:"installed on your computer"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"cloud-cluster-preparation",children:"Cloud cluster preparation"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"NOTE: Kubernetes 1.14 or higher is required, due to the usage of certain Kubernetes features."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Follow the instructions to create and connect to the Kubernetes cluster of your choice:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/2.2.0/helm-prepare#google-kubernetes-engine",children:"Google Kubernetes Engine"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"deploy-pulsar",children:"Deploy Pulsar"}),"\n",(0,t.jsxs)(n.p,{children:["With the environment set up and configuration generated, you can now proceed to the ",(0,t.jsx)(n.a,{href:"/docs/2.2.0/helm-deploy",children:"deployment of Pulsar"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"upgrade-pulsar",children:"Upgrade Pulsar"}),"\n",(0,t.jsxs)(n.p,{children:["If you are upgrading an existing Kubernetes installation, follow the ",(0,t.jsx)(n.a,{href:"/docs/2.2.0/helm-upgrade",children:"upgrade documentation"})," instead."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>o,x:()=>i});var r=l(96540);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);