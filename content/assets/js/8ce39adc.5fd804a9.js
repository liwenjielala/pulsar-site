"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[38493],{20693:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"client-libraries-java","title":"Pulsar Java client","description":"You can use a Pulsar Java client to create Pulsar producers, consumers, and readers in Java and perform administrative tasks. All the methods in Java clients are thread-safe. The current Java client version is 3.1.3.","source":"@site/versioned_docs/version-3.1.x/client-libraries-java.md","sourceDirName":".","slug":"/client-libraries-java","permalink":"/docs/3.1.x/client-libraries-java","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/client-libraries-java.md","tags":[],"version":"3.1.x","frontMatter":{"id":"client-libraries-java","title":"Pulsar Java client","sidebar_label":"Java"},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/docs/3.1.x/client-libraries"},"next":{"title":"Set up","permalink":"/docs/3.1.x/client-libraries-java-setup"}}');var l=i(74848),a=i(28453);const s={id:"client-libraries-java",title:"Pulsar Java client",sidebar_label:"Java"},t=void 0,c={},d=[{value:"Get started",id:"get-started",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Reference doc",id:"reference-doc",level:2},{value:"API reference",id:"api-reference",level:4},{value:"More reference",id:"more-reference",level:4}];function o(e){const r={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.p,{children:["You can use a Pulsar Java client to create Pulsar ",(0,l.jsx)(r.a,{href:"/docs/3.1.x/concepts-clients#producer",children:"producers"}),", ",(0,l.jsx)(r.a,{href:"/docs/3.1.x/concepts-clients#consumer",children:"consumers"}),", and ",(0,l.jsx)(r.a,{href:"/docs/3.1.x/concepts-clients#reader",children:"readers"})," in Java and perform ",(0,l.jsx)(r.a,{href:"/docs/3.1.x/admin-api-overview",children:"administrative tasks"}),". All the methods in Java clients are thread-safe. The current Java client version is ",(0,l.jsx)(r.strong,{children:"3.1.3"}),"."]}),"\n",(0,l.jsx)(r.h2,{id:"get-started",children:"Get started"}),"\n",(0,l.jsxs)(r.ol,{children:["\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/docs/3.1.x/client-libraries-java-setup",children:"Set up Java client library"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/docs/3.1.x/client-libraries-java-initialize",children:"Initialize a Java client"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/docs/3.1.x/client-libraries-java-use",children:"Use a Java client"})}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/docs/3.1.x/client-libraries-clients",children:"Work with clients"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/docs/3.1.x/client-libraries-producers",children:"Work with producers"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/docs/3.1.x/client-libraries-consumers",children:"Work with consumers"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/docs/3.1.x/client-libraries-readers",children:"Work with readers"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/docs/3.1.x/client-libraries-tableviews",children:"Work with TableView"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/docs/3.1.x/client-libraries-cluster-level-failover",children:"Configure cluster-level failover"})}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"reference-doc",children:"Reference doc"}),"\n",(0,l.jsx)(r.h4,{id:"api-reference",children:"API reference"}),"\n",(0,l.jsx)(r.p,{children:"The following table outlines the API packages and reference docs for Pulsar Java clients."}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{style:{textAlign:"left"},children:"Package"}),(0,l.jsx)(r.th,{style:{textAlign:"left"},children:"Description"}),(0,l.jsx)(r.th,{style:{textAlign:"left"},children:"Maven Artifact"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{style:{textAlign:"left"},children:(0,l.jsx)(r.a,{href:"https://pulsar.apache.org/api/client/3.1.x",children:(0,l.jsx)(r.code,{children:"org.apache.pulsar.client.api"})})}),(0,l.jsxs)(r.td,{style:{textAlign:"left"},children:["Java client API. ",(0,l.jsx)("br",{})," See ",(0,l.jsx)(r.a,{href:"/docs/3.1.x/pulsar-api-overview#pulsar-client-apis",children:"Client API overview"})," for more reference."]}),(0,l.jsx)(r.td,{style:{textAlign:"left"},children:(0,l.jsx)(r.a,{href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client%7C3.1.3%7Cjar",children:"org.apache.pulsar:pulsar-client:3.1.3"})})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{style:{textAlign:"left"},children:(0,l.jsx)(r.a,{href:"https://pulsar.apache.org/api/admin/3.1.x",children:(0,l.jsx)(r.code,{children:"org.apache.pulsar.client.admin"})})}),(0,l.jsxs)(r.td,{style:{textAlign:"left"},children:["Java admin API. ",(0,l.jsx)("br",{})," See ",(0,l.jsx)(r.a,{href:"/docs/3.1.x/admin-api-overview",children:"Admin API overview"})," for more reference."]}),(0,l.jsx)(r.td,{style:{textAlign:"left"},children:(0,l.jsx)(r.a,{href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client-admin%7C3.1.3%7Cjar",children:"org.apache.pulsar:pulsar-client-admin:3.1.3"})})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{style:{textAlign:"left"},children:(0,l.jsx)(r.code,{children:"org.apache.pulsar.client.all"})}),(0,l.jsxs)(r.td,{style:{textAlign:"left"},children:["Include both ",(0,l.jsx)(r.code,{children:"pulsar-client"})," and ",(0,l.jsx)(r.code,{children:"pulsar-client-admin"}),".",(0,l.jsx)("br",{})," Both ",(0,l.jsx)(r.code,{children:"pulsar-client"})," and ",(0,l.jsx)(r.code,{children:"pulsar-client-admin"})," are independently shaded packages. Consequently, the applications using both ",(0,l.jsx)(r.code,{children:"pulsar-client"})," and ",(0,l.jsx)(r.code,{children:"pulsar-client-admin"})," have redundant shaded classes. It would be troublesome if you introduce new dependencies but forget to update shading rules. ",(0,l.jsx)("br",{})," In this case, you can use ",(0,l.jsx)(r.code,{children:"pulsar-client-all"}),", which shades dependencies only one time and reduces the size of dependencies."]}),(0,l.jsx)(r.td,{style:{textAlign:"left"},children:(0,l.jsx)(r.a,{href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client-all%7C3.1.3%7Cjar",children:"org.apache.pulsar:pulsar-client-all:3.1.3"})})]})]})]}),"\n",(0,l.jsx)(r.h4,{id:"more-reference",children:"More reference"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"pathname:///reference/#/3.1.x/client/",children:"Java client configurations"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/release-notes/client-java",children:"Release notes"})}),"\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"/client-feature-matrix/",children:"Client feature matrix"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>s,x:()=>t});var n=i(96540);const l={},a=n.createContext(l);function s(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);