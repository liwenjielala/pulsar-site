"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[16567],{68456:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>d,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"io-aerospike-sink","title":"Aerospike sink connector","description":"The Aerospike sink connector pulls messages from Pulsar topics to Aerospike clusters.","source":"@site/versioned_docs/version-2.7.3/io-aerospike-sink.md","sourceDirName":".","slug":"/io-aerospike-sink","permalink":"/docs/2.7.3/io-aerospike-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.3/io-aerospike-sink.md","tags":[],"version":"2.7.3","frontMatter":{"id":"io-aerospike-sink","title":"Aerospike sink connector","sidebar_label":"Aerospike sink connector","original_id":"io-aerospike-sink"}}');var t=r(74848),i=r(28453);const d={id:"io-aerospike-sink",title:"Aerospike sink connector",sidebar_label:"Aerospike sink connector",original_id:"io-aerospike-sink"},o=void 0,c={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3}];function h(e){const s={code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"The Aerospike sink connector pulls messages from Pulsar topics to Aerospike clusters."}),"\n",(0,t.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(s.p,{children:"The configuration of the Aerospike sink connector has the following properties."}),"\n",(0,t.jsx)(s.h3,{id:"property",children:"Property"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Default"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"seedHosts"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"true"}),(0,t.jsx)(s.td,{children:"No default value"}),(0,t.jsxs)(s.td,{children:["The comma-separated list of one or more Aerospike cluster hosts.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Each host can be specified as a valid IP address or hostname followed by an optional port number."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"keyspace"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"true"}),(0,t.jsx)(s.td,{children:"No default value"}),(0,t.jsx)(s.td,{children:"The Aerospike namespace."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"columnName"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"true"}),(0,t.jsx)(s.td,{children:"No default value"}),(0,t.jsx)(s.td,{children:"The Aerospike column name."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"userName"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"NULL"}),(0,t.jsx)(s.td,{children:"The Aerospike username."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"password"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"NULL"}),(0,t.jsx)(s.td,{children:"The Aerospike password."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"keySet"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"NULL"}),(0,t.jsx)(s.td,{children:"The Aerospike set name."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"maxConcurrentRequests"})}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"100"}),(0,t.jsx)(s.td,{children:"The maximum number of concurrent Aerospike transactions that a sink can open."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"timeoutMs"})}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"100"}),(0,t.jsxs)(s.td,{children:["This property controls ",(0,t.jsx)(s.code,{children:"socketTimeout"})," and ",(0,t.jsx)(s.code,{children:"totalTimeout"})," for Aerospike transactions."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"retries"})}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"1"}),(0,t.jsx)(s.td,{children:"The maximum number of retries before aborting a write transaction to Aerospike."})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>o});var n=r(96540);const t={},i=n.createContext(t);function d(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);