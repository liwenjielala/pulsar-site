"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[28033],{6960:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"helm-install","title":"Install Apache Pulsar using Helm","description":"Install Apache Pulsar on Kubernetes with the official Pulsar Helm chart.","source":"@site/versioned_docs/version-2.7.1/helm-install.md","sourceDirName":".","slug":"/helm-install","permalink":"/docs/2.7.1/helm-install","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.1/helm-install.md","tags":[],"version":"2.7.1","frontMatter":{"id":"helm-install","title":"Install Apache Pulsar using Helm","sidebar_label":"Install","original_id":"helm-install"},"sidebar":"docsSidebar","previous":{"title":"Prepare","permalink":"/docs/2.7.1/helm-prepare"},"next":{"title":"Deployment","permalink":"/docs/2.7.1/helm-deploy"}}');var t=l(74848),s=l(28453);const i={id:"helm-install",title:"Install Apache Pulsar using Helm",sidebar_label:"Install",original_id:"helm-install"},o=void 0,a={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Environment setup",id:"environment-setup",level:2},{value:"Tools",id:"tools",level:3},{value:"Cloud cluster preparation",id:"cloud-cluster-preparation",level:2},{value:"Pulsar deployment",id:"pulsar-deployment",level:2},{value:"Pulsar upgrade",id:"pulsar-upgrade",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Install Apache Pulsar on Kubernetes with the official Pulsar Helm chart."}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(n.p,{children:"To deploy Apache Pulsar on Kubernetes, the followings are required."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["kubectl 1.14 or higher, compatible with your cluster (",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#before-you-begin",children:"+/- 1 minor release from your cluster"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"Helm v3 (3.0.2 or higher)"}),"\n",(0,t.jsx)(n.li,{children:"A Kubernetes cluster, version 1.14 or higher"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"environment-setup",children:"Environment setup"}),"\n",(0,t.jsx)(n.p,{children:"Before deploying Pulsar, you need to prepare your environment."}),"\n",(0,t.jsx)(n.h3,{id:"tools",children:"Tools"}),"\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.a,{href:"/docs/2.7.1/helm-tools",children:(0,t.jsx)(n.code,{children:"helm"})})," and ",(0,t.jsx)(n.a,{href:"/docs/2.7.1/helm-tools",children:(0,t.jsx)(n.code,{children:"kubectl"})})," on your computer."]}),"\n",(0,t.jsx)(n.h2,{id:"cloud-cluster-preparation",children:"Cloud cluster preparation"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Kubernetes 1.14 or higher is required."})}),"\n",(0,t.jsx)(n.p,{children:"To create and connect to the Kubernetes cluster, follow the instructions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/2.7.1/helm-prepare#google-kubernetes-engine",children:"Google Kubernetes Engine"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"pulsar-deployment",children:"Pulsar deployment"}),"\n",(0,t.jsxs)(n.p,{children:["Once the environment is set up and configuration is generated, you can now proceed to the ",(0,t.jsx)(n.a,{href:"/docs/2.7.1/helm-deploy",children:"deployment of Pulsar"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"pulsar-upgrade",children:"Pulsar upgrade"}),"\n",(0,t.jsxs)(n.p,{children:["To upgrade an existing Kubernetes installation, follow the ",(0,t.jsx)(n.a,{href:"/docs/2.7.1/helm-upgrade",children:"upgrade documentation"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>o});var r=l(96540);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);