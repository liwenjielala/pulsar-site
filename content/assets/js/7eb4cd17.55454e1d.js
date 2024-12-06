"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[27540],{70236:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"client-libraries-java-initialize","title":"Initialize a Java client","description":"You can instantiate a PulsarClient object using just a URL for the target Pulsar cluster like this:","source":"@site/versioned_docs/version-3.1.x/client-libraries-java-initialize.md","sourceDirName":".","slug":"/client-libraries-java-initialize","permalink":"/docs/3.1.x/client-libraries-java-initialize","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/client-libraries-java-initialize.md","tags":[],"version":"3.1.x","frontMatter":{"id":"client-libraries-java-initialize","title":"Initialize a Java client","sidebar_label":"Initialize"},"sidebar":"docsSidebar","previous":{"title":"Set up","permalink":"/docs/3.1.x/client-libraries-java-setup"},"next":{"title":"Use","permalink":"/docs/3.1.x/client-libraries-java-use"}}');var n=t(74848),l=t(28453);const r={id:"client-libraries-java-initialize",title:"Initialize a Java client",sidebar_label:"Initialize"},s=void 0,c={},o=[];function d(e){const i={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["You can instantiate a ",(0,n.jsx)(i.a,{href:"https://pulsar.apache.org/api/client/3.1.x/org/apache/pulsar/client/api/PulsarClient",children:"PulsarClient"})," object using just a URL for the target Pulsar ",(0,n.jsx)(i.a,{href:"/docs/3.1.x/reference-terminology#cluster",children:"cluster"})," like this:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:'PulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .build();\n'})}),"\n",(0,n.jsx)(i.p,{children:"If you have multiple brokers, you can initiate a PulsarClient like this:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:'PulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650,localhost:6651,localhost:6652")\n        .build();\n'})}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["If you run a cluster in ",(0,n.jsx)(i.a,{href:"/docs/3.1.x/getting-started-standalone",children:"standalone mode"}),", the broker is available at the ",(0,n.jsx)(i.code,{children:"pulsar://localhost:6650"})," URL by default."]})}),"\n",(0,n.jsxs)(i.p,{children:["For detailed client configurations, see the ",(0,n.jsx)(i.a,{href:"pathname:///reference/#/3.1.x/client/",children:"reference doc"}),"."]})]})}function u(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>s});var a=t(96540);const n={},l=a.createContext(n);function r(e){const i=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(l.Provider,{value:i},e.children)}}}]);