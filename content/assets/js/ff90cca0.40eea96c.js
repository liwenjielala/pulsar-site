"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[60401],{34135:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"functions-runtime-process","title":"Configure process runtime","description":"You can use the default configurations of process runtime in the conf/functions_worker.yml file.","source":"@site/versioned_docs/version-3.0.x/functions-runtime-process.md","sourceDirName":".","slug":"/functions-runtime-process","permalink":"/docs/3.0.x/functions-runtime-process","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/functions-runtime-process.md","tags":[],"version":"3.0.x","frontMatter":{"id":"functions-runtime-process","title":"Configure process runtime","sidebar_label":"Configure process runtime"},"sidebar":"docsSidebar","previous":{"title":"Configure thread runtime","permalink":"/docs/3.0.x/functions-runtime-thread"},"next":{"title":"Configure Kubernetes runtime","permalink":"/docs/3.0.x/functions-runtime-kubernetes"}}');var r=t(74848),s=t(28453);const i={id:"functions-runtime-process",title:"Configure process runtime",sidebar_label:"Configure process runtime"},c=void 0,a={},u=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["You can use the default configurations of process runtime in the ",(0,r.jsx)(n.code,{children:"conf/functions_worker.yml"})," file."]}),"\n",(0,r.jsx)(n.p,{children:"If you want to customize more parameters, refer to the following example."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"functionRuntimeFactoryClassName: org.apache.pulsar.functions.runtime.process.ProcessRuntimeFactory\nfunctionRuntimeFactoryConfigs:\n  # the directory for storing the function logs\n  logDirectory:\n  # change the jar location only when you put the java instance jar in a different location\n  javaInstanceJarLocation:\n  # change the python instance location only when you put the python instance jar in a different location\n  pythonInstanceLocation:\n  # change the extra dependencies location:\n  extraFunctionDependenciesDir:\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For more details, see ",(0,r.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/runtime/src/main/java/org/apache/pulsar/functions/runtime/process/ProcessRuntimeFactoryConfig.java",children:"code"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(96540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);