"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[95141],{43851:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"io-hdfs3-sink","title":"HDFS3 sink connector","description":"You can download all the Pulsar connectors on download page.","source":"@site/versioned_docs/version-3.2.x/io-hdfs3-sink.md","sourceDirName":".","slug":"/io-hdfs3-sink","permalink":"/docs/3.2.x/io-hdfs3-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/io-hdfs3-sink.md","tags":[],"version":"3.2.x","frontMatter":{"id":"io-hdfs3-sink","title":"HDFS3 sink connector","sidebar_label":"HDFS3 sink connector"}}');var i=s(74848),t=s(28453);const d={id:"io-hdfs3-sink",title:"HDFS3 sink connector",sidebar_label:"HDFS3 sink connector"},o=void 0,c={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["You can download all the Pulsar connectors on ",(0,i.jsx)(n.a,{href:"pathname:///download",children:"download page"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"The HDFS3 sink connector pulls the messages from Pulsar topics and persists the messages to HDFS files."}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"The configuration of the HDFS3 sink connector has the following properties."}),"\n",(0,i.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"hdfsConfigResources"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:"None"}),(0,i.jsxs)(n.td,{children:["A file or a comma-separated list containing the Hadoop file system configuration.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Example"}),(0,i.jsx)("br",{}),"'core-site.xml'",(0,i.jsx)("br",{}),"'hdfs-site.xml'"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"directory"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:"None"}),(0,i.jsx)(n.td,{children:"The HDFS directory where files read from or written to."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"encoding"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"None"}),(0,i.jsxs)(n.td,{children:["The character encoding for the files.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Example"}),(0,i.jsx)("br",{}),"UTF-8",(0,i.jsx)("br",{}),"ASCII"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"compression"})}),(0,i.jsx)(n.td,{children:"Compression"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"None"}),(0,i.jsxs)(n.td,{children:["The compression code used to compress or de-compress the files on HDFS. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Below are the available options:",(0,i.jsx)("br",{}),(0,i.jsxs)("li",{children:["BZIP2",(0,i.jsx)("br",{})]}),(0,i.jsxs)("li",{children:["DEFLATE",(0,i.jsx)("br",{})]}),(0,i.jsxs)("li",{children:["GZIP",(0,i.jsx)("br",{})]}),(0,i.jsxs)("li",{children:["LZ4",(0,i.jsx)("br",{})]}),(0,i.jsxs)("li",{children:["SNAPPY",(0,i.jsx)("br",{})]}),(0,i.jsx)("li",{children:"ZSTANDARD"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"kerberosUserPrincipal"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"None"}),(0,i.jsx)(n.td,{children:"The principal account of Kerberos user used for authentication."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"keytab"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"None"}),(0,i.jsx)(n.td,{children:"The full pathname of the Kerberos keytab file used for authentication."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"filenamePrefix"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:"None"}),(0,i.jsxs)(n.td,{children:["The prefix of the files created inside the HDFS directory.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Example"}),(0,i.jsx)("br",{})," The value of topicA result in files named topicA-."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"fileExtension"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsxs)(n.td,{children:["true, if ",(0,i.jsx)(n.code,{children:"compression"})," is set to ",(0,i.jsx)(n.code,{children:"None"}),"."]}),(0,i.jsx)(n.td,{children:"None"}),(0,i.jsxs)(n.td,{children:["The extension added to the files written to HDFS.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Example"}),(0,i.jsx)("br",{}),"'.txt'",(0,i.jsx)("br",{})," '.seq'"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"separator"})}),(0,i.jsx)(n.td,{children:"char"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"None"}),(0,i.jsxs)(n.td,{children:["The character used to separate records in a text file. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"If no value is provided, the contents from all records are concatenated together in one continuous byte array."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"syncInterval"})}),(0,i.jsx)(n.td,{children:"long"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"The interval between calls to flush data to HDFS disk in milliseconds."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"maxPendingRecords"})}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"Integer.MAX_VALUE"}),(0,i.jsxs)(n.td,{children:["The maximum number of records that hold in memory before acking. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Setting this property to 1 makes every record send to disk before the record is acked.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Setting this property to a higher value allows buffering records before flushing them to disk."]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Before using the HDFS3 sink connector, you need to create a configuration file through one of the following methods."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"JSON"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n   "configs": {\n      "hdfsConfigResources": "core-site.xml",\n      "directory": "/foo/bar",\n      "filenamePrefix": "prefix",\n      "compression": "SNAPPY"\n   }\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"YAML"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'configs:\n    hdfsConfigResources: "core-site.xml"\n    directory: "/foo/bar"\n    filenamePrefix: "prefix"\n    compression: "SNAPPY"\n'})}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var r=s(96540);const i={},t=r.createContext(i);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);