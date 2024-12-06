"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[68032],{8311:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"helm-prepare","title":"Prepare Kubernetes resources","description":"Learn to create a Kubernetes cluster before deploying the Apache Pulsar Helm Chart.","source":"@site/versioned_docs/version-3.2.x/helm-prepare.md","sourceDirName":".","slug":"/helm-prepare","permalink":"/docs/3.2.x/helm-prepare","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/helm-prepare.md","tags":[],"version":"3.2.x","frontMatter":{"id":"helm-prepare","title":"Prepare Kubernetes resources","sidebar_label":"Prepare","description":"Learn to create a Kubernetes cluster before deploying the Apache Pulsar Helm Chart."},"sidebar":"docsSidebar","previous":{"title":"Kubernetes","permalink":"/docs/3.2.x/deploy-kubernetes"},"next":{"title":"Deploy","permalink":"/docs/3.2.x/helm-deploy"}}');var n=r(74848),l=r(28453);const o={id:"helm-prepare",title:"Prepare Kubernetes resources",sidebar_label:"Prepare",description:"Learn to create a Kubernetes cluster before deploying the Apache Pulsar Helm Chart."},i=void 0,a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install kubectl",id:"install-kubectl",level:3},{value:"Install Helm",id:"install-helm",level:3},{value:"Create Kubernetes cluster",id:"create-kubernetes-cluster",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"For a fully functional Pulsar cluster, you need a few resources before deploying the Apache Pulsar Helm Chart. This section provides the information about the preparations you need to do before deploying the Pulsar Helm Chart."}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(t.p,{children:"Set up your environment by installing the required tools."}),"\n",(0,n.jsx)(t.h3,{id:"install-kubectl",children:"Install kubectl"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"kubectl"})," 1.18 or higher is the required tool that talks to the Kubernetes API. It needs to be compatible with your cluster (",(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#before-you-begin",children:"+/- 1 minor release from your cluster"}),"). The server version of ",(0,n.jsx)(t.code,{children:"kubectl"})," cannot be obtained until you connect to a cluster."]}),"\n",(0,n.jsxs)(t.p,{children:["For the installation instructions, see the ",(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl",children:"Kubernetes documentation"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"install-helm",children:"Install Helm"}),"\n",(0,n.jsx)(t.p,{children:"Helm is the package manager for Kubernetes. The Apache Pulsar Helm Chart is supported with Helm v3 (3.0.2 or higher)."}),"\n",(0,n.jsxs)(t.p,{children:["You can get the Helm from the project's ",(0,n.jsx)(t.a,{href:"https://github.com/helm/helm/releases",children:"releases page"}),", or follow other options under the official documentation of ",(0,n.jsx)(t.a,{href:"https://helm.sh/docs/intro/install/",children:"installing Helm"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"create-kubernetes-cluster",children:"Create Kubernetes cluster"}),"\n",(0,n.jsxs)(t.p,{children:["A Kubernetes cluster version 1.18 or higher is required for continuing the deployment. For details about how to create a Kubernetes cluster, see ",(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/setup/production-environment/tools/",children:"Kubernetes documentation"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var s=r(96540);const n={},l=s.createContext(n);function o(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);