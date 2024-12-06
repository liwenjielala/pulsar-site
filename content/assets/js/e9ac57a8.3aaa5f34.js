"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[30686],{78042:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"client-libraries-node-setup","title":"Set up Pulsar Node.js client","description":"Learn how to set up Node.js client library in Pulsar.","source":"@site/docs/client-libraries-node-setup.md","sourceDirName":".","slug":"/client-libraries-node-setup","permalink":"/docs/next/client-libraries-node-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/docs/client-libraries-node-setup.md","tags":[],"version":"current","frontMatter":{"id":"client-libraries-node-setup","title":"Set up Pulsar Node.js client","sidebar_label":"Set up","description":"Learn how to set up Node.js client library in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"Node.js client","permalink":"/docs/next/client-libraries-node"},"next":{"title":"Initialize","permalink":"/docs/next/client-libraries-node-initialize"}}');var l=s(74848),i=s(28453);const r={id:"client-libraries-node-setup",title:"Set up Pulsar Node.js client",sidebar_label:"Set up",description:"Learn how to set up Node.js client library in Pulsar."},o=void 0,c={},a=[{value:"Step 1: Install Node.js client library",id:"step-1-install-nodejs-client-library",level:2},{value:"Step 2: Connect to Pulsar cluster",id:"step-2-connect-to-pulsar-cluster",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"To set up Java client library in Pulsar, complete the following steps."}),"\n",(0,l.jsx)(n.h2,{id:"step-1-install-nodejs-client-library",children:"Step 1: Install Node.js client library"}),"\n",(0,l.jsxs)(n.p,{children:["Install the ",(0,l.jsx)(n.a,{href:"https://www.npmjs.com/package/pulsar-client",children:(0,l.jsx)(n.code,{children:"pulsar-client"})})," library via ",(0,l.jsx)(n.a,{href:"https://www.npmjs.com/",children:"npm"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"npm install pulsar-client\n"})}),"\n",(0,l.jsxs)(n.p,{children:["For more information, see ",(0,l.jsx)(n.a,{href:"https://github.com/apache/pulsar-client-node/blob/master/README.md",children:"README"}),"."]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["This library only works in Node.js 10.x or later versions because it uses the ",(0,l.jsx)(n.a,{href:"https://github.com/nodejs/node-addon-api",children:(0,l.jsx)(n.code,{children:"node-addon-api"})})," module."]})}),"\n",(0,l.jsx)(n.h2,{id:"step-2-connect-to-pulsar-cluster",children:"Step 2: Connect to Pulsar cluster"}),"\n",(0,l.jsxs)(n.p,{children:["To connect to Pulsar using client libraries, you need to specify a ",(0,l.jsx)(n.a,{href:"/docs/next/developing-binary-protocol",children:"Pulsar protocol"})," URL."]}),"\n",(0,l.jsxs)(n.p,{children:["You can assign Pulsar protocol URLs to specific clusters and use the ",(0,l.jsx)(n.code,{children:"pulsar"})," scheme. The following is an example of ",(0,l.jsx)(n.code,{children:"localhost"})," with the default port ",(0,l.jsx)(n.code,{children:"6650"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-http",children:"pulsar://localhost:6650\n"})}),"\n",(0,l.jsxs)(n.p,{children:["If you have multiple brokers, separate ",(0,l.jsx)(n.code,{children:"IP:port"})," by commas:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-http",children:"pulsar://localhost:6550,localhost:6651,localhost:6652\n"})}),"\n",(0,l.jsxs)(n.p,{children:["If you use ",(0,l.jsx)(n.a,{href:"/docs/next/security-tls-authentication",children:"mTLS"})," authentication, add ",(0,l.jsx)(n.code,{children:"+ssl"})," in the scheme:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-http",children:"pulsar+ssl://pulsar.us-west.example.com:6651\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(96540);const l={},i=t.createContext(l);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);