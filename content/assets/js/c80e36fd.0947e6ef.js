"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[83538],{18073:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"io-aerospike-sink","title":"Aerospike sink connector","description":"You can download all the Pulsar connectors on download page.","source":"@site/versioned_docs/version-3.3.x/io-aerospike-sink.md","sourceDirName":".","slug":"/io-aerospike-sink","permalink":"/docs/3.3.x/io-aerospike-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/io-aerospike-sink.md","tags":[],"version":"3.3.x","frontMatter":{"id":"io-aerospike-sink","title":"Aerospike sink connector","sidebar_label":"Aerospike sink connector"}}');var t=s(74848),i=s(28453);const d={id:"io-aerospike-sink",title:"Aerospike sink connector",sidebar_label:"Aerospike sink connector"},o=void 0,c={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["You can download all the Pulsar connectors on ",(0,t.jsx)(n.a,{href:"pathname:///download",children:"download page"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"The Aerospike sink connector pulls messages from Pulsar topics to Aerospike clusters."}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"The configuration of the Aerospike sink connector has the following properties."}),"\n",(0,t.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"seedHosts"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:"No default value"}),(0,t.jsxs)(n.td,{children:["The comma-separated list of one or more Aerospike cluster hosts.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Each host can be specified as a valid IP address or hostname followed by an optional port number."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"keyspace"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:"No default value"}),(0,t.jsx)(n.td,{children:"The Aerospike namespace."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"columnName"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:"No default value"}),(0,t.jsx)(n.td,{children:"The Aerospike column name."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"userName"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"NULL"}),(0,t.jsx)(n.td,{children:"The Aerospike username."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"password"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"NULL"}),(0,t.jsx)(n.td,{children:"The Aerospike password."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"keySet"})}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"NULL"}),(0,t.jsx)(n.td,{children:"The Aerospike set name."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"maxConcurrentRequests"})}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"100"}),(0,t.jsx)(n.td,{children:"The maximum number of concurrent Aerospike transactions that a sink can open."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"timeoutMs"})}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"100"}),(0,t.jsxs)(n.td,{children:["This property controls ",(0,t.jsx)(n.code,{children:"socketTimeout"})," and ",(0,t.jsx)(n.code,{children:"totalTimeout"})," for Aerospike transactions."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"retries"})}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"The maximum number of retries before aborting a write transaction to Aerospike."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var r=s(96540);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);