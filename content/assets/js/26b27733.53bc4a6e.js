"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[37447],{80868:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"client-libraries-dotnet-initialize","title":"Initialize C# client","description":"Learn how to initialize C# client in Pulsar.","source":"@site/docs/client-libraries-dotnet-initialize.md","sourceDirName":".","slug":"/client-libraries-dotnet-initialize","permalink":"/docs/next/client-libraries-dotnet-initialize","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/docs/client-libraries-dotnet-initialize.md","tags":[],"version":"current","frontMatter":{"id":"client-libraries-dotnet-initialize","title":"Initialize C# client","sidebar_label":"Initialize","description":"Learn how to initialize C# client in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"Set up","permalink":"/docs/next/client-libraries-dotnet-setup"},"next":{"title":"Use","permalink":"/docs/next/client-libraries-dotnet-use"}}');var r=i(74848),l=i(28453);const s={id:"client-libraries-dotnet-initialize",title:"Initialize C# client",sidebar_label:"Initialize",description:"Learn how to initialize C# client in Pulsar."},o=void 0,a={},c=[];function d(e){const t={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This section introduces some hands-on examples to initialize the Pulsar C# client."}),"\n",(0,r.jsx)(t.p,{children:"The following example shows how to create a Pulsar C# client connected to localhost."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"using DotPulsar;\n\nvar client = PulsarClient.Builder().Build();\n"})}),"\n",(0,r.jsx)(t.p,{children:"To create a Pulsar C# client by using the builder, you can specify the following options."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Option"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ServiceUrl"}),(0,r.jsx)(t.td,{children:"Set the service URL for the Pulsar cluster."}),(0,r.jsx)(t.td,{children:"pulsar://localhost:6650"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RetryInterval"}),(0,r.jsx)(t.td,{children:"Set the time to wait before retrying an operation or a reconnection."}),(0,r.jsx)(t.td,{children:"3s"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var n=i(96540);const r={},l=n.createContext(r);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);