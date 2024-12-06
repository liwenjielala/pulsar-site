"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[32638],{52004:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"functions-deploy-cluster-parallelism","title":"Enable parallel processing","description":"In cluster mode, you can specify the parallelism (the number of instances to run) to enable parallel processing for a function.","source":"@site/versioned_docs/version-2.11.x/functions-deploy-cluster-parallelism.md","sourceDirName":".","slug":"/functions-deploy-cluster-parallelism","permalink":"/docs/2.11.x/functions-deploy-cluster-parallelism","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/functions-deploy-cluster-parallelism.md","tags":[],"version":"2.11.x","frontMatter":{"id":"functions-deploy-cluster-parallelism","title":"Enable parallel processing","sidebar_label":"Enable parallel processing"},"sidebar":"docsSidebar","previous":{"title":"Allocate resources to function instance","permalink":"/docs/2.11.x/functions-deploy-cluster-resource"},"next":{"title":"Enable end-to-end-encryption","permalink":"/docs/2.11.x/functions-deploy-cluster-encryption"}}');var l=s(74848),i=s(28453);const o={id:"functions-deploy-cluster-parallelism",title:"Enable parallel processing",sidebar_label:"Enable parallel processing"},r=void 0,a={},c=[];function p(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["In cluster mode, you can specify the ",(0,l.jsx)(n.strong,{children:"parallelism"})," (the number of instances to run) to enable parallel processing for a function."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example1"})}),"\n",(0,l.jsxs)(n.p,{children:["Specify the ",(0,l.jsx)(n.code,{children:"--parallelism"})," flag of the ",(0,l.jsx)(n.code,{children:"create"})," command when deploying a function."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin functions create \\\n  --parallelism 3 \\\n  # Other function info\n"})}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["For an existing function, you can adjust the parallelism by using the ",(0,l.jsx)(n.code,{children:"update"})," command."]})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Example2"})}),"\n",(0,l.jsxs)(n.p,{children:["Specify the ",(0,l.jsx)(n.code,{children:"parallelism"})," parameter when deploying a function configuration through YAML."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"# function-config.yaml\nparallelism: 3\ninputs:\n  - persistent://public/default/input-1\noutput: persistent://public/default/output-1\n# other parameters\n"})}),"\n",(0,l.jsxs)(n.p,{children:["For an existing function, you can adjust the parallelism by using the ",(0,l.jsx)(n.code,{children:"update"})," command as follows."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin functions update \\\n  --function-config-file function-config.yaml\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var t=s(96540);const l={},i=t.createContext(l);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);