"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[57348],{87567:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"helm-tools","title":"Required tools for deploying Pulsar Helm Chart","description":"Before deploying Pulsar to your Kubernetes cluster, there are some tools you must have installed locally.","source":"@site/versioned_docs/version-2.5.1/helm-tools.md","sourceDirName":".","slug":"/helm-tools","permalink":"/docs/2.5.1/helm-tools","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.1/helm-tools.md","tags":[],"version":"2.5.1","frontMatter":{"id":"helm-tools","title":"Required tools for deploying Pulsar Helm Chart","sidebar_label":"Required Tools"},"sidebar":"docsSidebar","previous":{"title":"Upgrade","permalink":"/docs/2.5.1/helm-upgrade"},"next":{"title":"Amazon Web Services","permalink":"/docs/2.5.1/deploy-aws"}}');var n=l(74848),o=l(28453);const i={id:"helm-tools",title:"Required tools for deploying Pulsar Helm Chart",sidebar_label:"Required Tools"},r=void 0,a={},d=[{value:"kubectl",id:"kubectl",level:2},{value:"Helm",id:"helm",level:2},{value:"Get Helm",id:"get-helm",level:3},{value:"Next steps",id:"next-steps",level:3},{value:"Additional information",id:"additional-information",level:2},{value:"Templates",id:"templates",level:3},{value:"Tips and tricks",id:"tips-and-tricks",level:3}];function c(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Before deploying Pulsar to your Kubernetes cluster, there are some tools you must have installed locally."}),"\n",(0,n.jsx)(t.h2,{id:"kubectl",children:"kubectl"}),"\n",(0,n.jsxs)(t.p,{children:["kubectl is the tool that talks to the Kubernetes API. kubectl 1.14 or higher is required and it needs to be compatible with your cluster (",(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#before-you-begin",children:"+/- 1 minor release from your cluster"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["To Install kubectl locally, follow the ",(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl",children:"Kubernetes documentation"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The server version of kubectl cannot be obtained until we connect to a cluster."}),"\n",(0,n.jsx)(t.h2,{id:"helm",children:"Helm"}),"\n",(0,n.jsx)(t.p,{children:"Helm is the package manager for Kubernetes. The Apache Pulsar Helm Chart is tested and supported with Helm v3."}),"\n",(0,n.jsx)(t.h3,{id:"get-helm",children:"Get Helm"}),"\n",(0,n.jsxs)(t.p,{children:["You can get Helm from the project's ",(0,n.jsx)(t.a,{href:"https://github.com/helm/helm/releases",children:"releases page"}),", or follow other options under the official documentation of ",(0,n.jsx)(t.a,{href:"https://helm.sh/docs/intro/install/",children:"installing Helm"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"next-steps",children:"Next steps"}),"\n",(0,n.jsxs)(t.p,{children:["Once kubectl and Helm are configured, you can configure your ",(0,n.jsx)(t.a,{href:"/docs/2.5.1/helm-prepare",children:"Kubernetes cluster"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"additional-information",children:"Additional information"}),"\n",(0,n.jsx)(t.h3,{id:"templates",children:"Templates"}),"\n",(0,n.jsxs)(t.p,{children:["Templating in Helm is done through Golang's ",(0,n.jsx)(t.a,{href:"https://golang.org/pkg/text/template/",children:"text/template"})," and ",(0,n.jsx)(t.a,{href:"https://godoc.org/github.com/Masterminds/sprig",children:"sprig"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"For more information about how all the inner workings behave, check these documents:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://helm.sh/docs/chart_template_guide/functions_and_pipelines/",children:"Functions and Pipelines"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://helm.sh/docs/chart_template_guide/subcharts_and_globals/",children:"Subcharts and Globals"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"tips-and-tricks",children:"Tips and tricks"}),"\n",(0,n.jsxs)(t.p,{children:["For additional information on developing with Helm, check ",(0,n.jsx)(t.a,{href:"https://helm.sh/docs/howto/charts_tips_and_tricks/",children:"tips and tricks section"})," in the Helm repository."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>i,x:()=>r});var s=l(96540);const n={},o=s.createContext(n);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);