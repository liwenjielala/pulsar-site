"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[54373],{12893:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"io-solr-sink","title":"Solr sink connector","description":"The Solr sink connector pulls messages from Pulsar topics","source":"@site/versioned_docs/version-2.6.1/io-solr-sink.md","sourceDirName":".","slug":"/io-solr-sink","permalink":"/docs/2.6.1/io-solr-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.1/io-solr-sink.md","tags":[],"version":"2.6.1","frontMatter":{"id":"io-solr-sink","title":"Solr sink connector","sidebar_label":"Solr sink connector","original_id":"io-solr-sink"}}');var o=n(74848),t=n(28453);const i={id:"io-solr-sink",title:"Solr sink connector",sidebar_label:"Solr sink connector",original_id:"io-solr-sink"},l=void 0,d={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}];function h(e){const s={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"The Solr sink connector pulls messages from Pulsar topics\nand persists the messages to Solr collections."}),"\n",(0,o.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(s.p,{children:"The configuration of the Solr sink connector has the following properties."}),"\n",(0,o.jsx)(s.h3,{id:"property",children:"Property"}),"\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Name"}),(0,o.jsx)(s.th,{children:"Type"}),(0,o.jsx)(s.th,{children:"Required"}),(0,o.jsx)(s.th,{children:"Default"}),(0,o.jsx)(s.th,{children:"Description"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"solrUrl"})}),(0,o.jsx)(s.td,{children:"String"}),(0,o.jsx)(s.td,{children:"true"}),(0,o.jsx)(s.td,{children:'" " (empty string)'}),(0,o.jsxs)(s.td,{children:[(0,o.jsxs)("li",{children:["Comma-separated zookeeper hosts with chroot used in the SolrCloud mode. ",(0,o.jsx)("br",{}),(0,o.jsx)(s.strong,{children:"Example"}),(0,o.jsx)("br",{}),(0,o.jsx)(s.code,{children:"localhost:2181,localhost:2182/chroot"})," ",(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]}),(0,o.jsxs)("li",{children:["URL to connect to Solr used in standalone mode. ",(0,o.jsx)("br",{}),(0,o.jsx)(s.strong,{children:"Example"}),(0,o.jsx)("br",{}),(0,o.jsx)(s.code,{children:"localhost:8983/solr"})," "]})]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"solrMode"})}),(0,o.jsx)(s.td,{children:"String"}),(0,o.jsx)(s.td,{children:"true"}),(0,o.jsx)(s.td,{children:"SolrCloud"}),(0,o.jsxs)(s.td,{children:["The client mode when interacting with the Solr cluster. ",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"Below are the available options:",(0,o.jsx)("br",{}),(0,o.jsxs)("li",{children:["Standalone",(0,o.jsx)("br",{})]}),(0,o.jsx)("li",{children:" SolrCloud"})]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"solrCollection"})}),(0,o.jsx)(s.td,{children:"String"}),(0,o.jsx)(s.td,{children:"true"}),(0,o.jsx)(s.td,{children:'" " (empty string)'}),(0,o.jsx)(s.td,{children:"Solr collection name to which records need to be written."})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"solrCommitWithinMs"})}),(0,o.jsx)(s.td,{children:"int"}),(0,o.jsx)(s.td,{children:"false"}),(0,o.jsx)(s.td,{children:"10"}),(0,o.jsx)(s.td,{children:"The time within million seconds for Solr updating commits."})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"username"})}),(0,o.jsx)(s.td,{children:"String"}),(0,o.jsx)(s.td,{children:"false"}),(0,o.jsx)(s.td,{children:'" " (empty string)'}),(0,o.jsxs)(s.td,{children:["The username for basic authentication.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsxs)(s.strong,{children:["Note: ",(0,o.jsx)(s.code,{children:"usename"})," is case-sensitive."]})]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"password"})}),(0,o.jsx)(s.td,{children:"String"}),(0,o.jsx)(s.td,{children:"false"}),(0,o.jsx)(s.td,{children:'" " (empty string)'}),(0,o.jsxs)(s.td,{children:["The password for basic authentication. ",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsxs)(s.strong,{children:["Note: ",(0,o.jsx)(s.code,{children:"password"})," is case-sensitive."]})]})]})]})]}),"\n",(0,o.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,o.jsx)(s.p,{children:"Before using the Solr sink connector, you need to create a configuration file through one of the following methods."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"JSON"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'\n{\n    "solrUrl": "localhost:2181,localhost:2182/chroot",\n    "solrMode": "SolrCloud",\n    "solrCollection": "techproducts",\n    "solrCommitWithinMs": 100,\n    "username": "fakeuser",\n    "password": "fake@123"\n}\n\n'})}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"YAML"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-yaml",children:'\n{\n    solrUrl: "localhost:2181,localhost:2182/chroot"\n    solrMode: "SolrCloud"\n    solrCollection: "techproducts"\n    solrCommitWithinMs: 100\n    username: "fakeuser"\n    password: "fake@123"\n}\n\n'})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var r=n(96540);const o={},t=r.createContext(o);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);