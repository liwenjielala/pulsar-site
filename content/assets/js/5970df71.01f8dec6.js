"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[67622],{65258:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"functions-worker-temp-file-path","title":"Configure temporary file path","description":"Configure temporary file path for function workers in Pulsar.","source":"@site/versioned_docs/version-3.3.x/functions-worker-temp-file-path.md","sourceDirName":".","slug":"/functions-worker-temp-file-path","permalink":"/docs/3.3.x/functions-worker-temp-file-path","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/functions-worker-temp-file-path.md","tags":[],"version":"3.3.x","frontMatter":{"id":"functions-worker-temp-file-path","title":"Configure temporary file path","sidebar_label":"Configure temporary file path","description":"Configure temporary file path for function workers in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"Run function workers separately","permalink":"/docs/3.3.x/functions-worker-run-separately"},"next":{"title":"Enable stateful functions","permalink":"/docs/3.3.x/functions-worker-stateful"}}');var i=r(74848),o=r(28453);const s={id:"functions-worker-temp-file-path",title:"Configure temporary file path",sidebar_label:"Configure temporary file path",description:"Configure temporary file path for function workers in Pulsar."},a=void 0,c={},l=[];function d(e){const t={a:"a",code:"code",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Function workers use ",(0,i.jsx)(t.code,{children:"java.io.tmpdir"})," in the JVM as the default temporary file path, which is also used as the default extraction file path for each NAR package. NAR packages require a local file path to extract and load to the Java class loader."]}),"\n",(0,i.jsxs)(t.p,{children:["If you want to change the default extraction file path for NAR packages to another directory, you can add the following parameter with the desired directory in the ",(0,i.jsx)(t.code,{children:"functions_worker.yml"})," file. The configuration varies depending on the ",(0,i.jsx)(t.a,{href:"/docs/3.3.x/functions-concepts#function-runtime",children:"function runtime"})," you are using."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Function runtime"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Configuration for temporary file path"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.a,{href:"/docs/3.3.x/functions-runtime-thread",children:"Thread runtime"}),(0,i.jsx)("br",{})," ",(0,i.jsx)(t.a,{href:"/docs/3.3.x/functions-runtime-process",children:"Process runtime"})]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"narExtractionDirectory"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"/docs/3.3.x/functions-runtime-kubernetes",children:"Kubernetes runtime"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"functionRuntimeFactoryConfigs.narExtractionDirectory"})})]})]})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(96540);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);