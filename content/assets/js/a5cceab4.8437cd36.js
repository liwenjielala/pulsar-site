"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[76691],{37205:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"io-hdfs2-sink","title":"HDFS2 sink connector","description":"The HDFS2 sink connector pulls the messages from Pulsar topics","source":"@site/versioned_docs/version-2.5.1/io-hdfs2-sink.md","sourceDirName":".","slug":"/io-hdfs2-sink","permalink":"/docs/2.5.1/io-hdfs2-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.1/io-hdfs2-sink.md","tags":[],"version":"2.5.1","frontMatter":{"id":"io-hdfs2-sink","title":"HDFS2 sink connector","sidebar_label":"HDFS2 sink connector","original_id":"io-hdfs2-sink"}}');var i=n(74848),t=n(28453);const d={id:"io-hdfs2-sink",title:"HDFS2 sink connector",sidebar_label:"HDFS2 sink connector",original_id:"io-hdfs2-sink"},o=void 0,c={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}];function h(e){const s={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"The HDFS2 sink connector pulls the messages from Pulsar topics\nand persists the messages to HDFS files."}),"\n",(0,i.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(s.p,{children:"The configuration of the HDFS2 sink connector has the following properties."}),"\n",(0,i.jsx)(s.h3,{id:"property",children:"Property"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Required"}),(0,i.jsx)(s.th,{children:"Default"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"hdfsConfigResources"})}),(0,i.jsx)(s.td,{children:"String"}),(0,i.jsx)(s.td,{children:"true"}),(0,i.jsx)(s.td,{children:"None"}),(0,i.jsxs)(s.td,{children:["A file or a comma-separated list containing the Hadoop file system configuration.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Example"}),(0,i.jsx)("br",{}),"'core-site.xml'",(0,i.jsx)("br",{}),"'hdfs-site.xml'"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"directory"})}),(0,i.jsx)(s.td,{children:"String"}),(0,i.jsx)(s.td,{children:"true"}),(0,i.jsx)(s.td,{children:"None"}),(0,i.jsx)(s.td,{children:"The HDFS directory where files read from or written to."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"encoding"})}),(0,i.jsx)(s.td,{children:"String"}),(0,i.jsx)(s.td,{children:"false"}),(0,i.jsx)(s.td,{children:"None"}),(0,i.jsxs)(s.td,{children:["The character encoding for the files.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Example"}),(0,i.jsx)("br",{}),"UTF-8",(0,i.jsx)("br",{}),"ASCII"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"compression"})}),(0,i.jsx)(s.td,{children:"Compression"}),(0,i.jsx)(s.td,{children:"false"}),(0,i.jsx)(s.td,{children:"None"}),(0,i.jsxs)(s.td,{children:["The compression code used to compress or de-compress the files on HDFS. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Below are the available options:",(0,i.jsx)("br",{}),(0,i.jsxs)("li",{children:["BZIP2",(0,i.jsx)("br",{})]}),(0,i.jsxs)("li",{children:["DEFLATE",(0,i.jsx)("br",{})]}),(0,i.jsxs)("li",{children:["GZIP",(0,i.jsx)("br",{})]}),(0,i.jsxs)("li",{children:["LZ4",(0,i.jsx)("br",{})]}),(0,i.jsx)("li",{children:"SNAPPY"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"kerberosUserPrincipal"})}),(0,i.jsx)(s.td,{children:"String"}),(0,i.jsx)(s.td,{children:"false"}),(0,i.jsx)(s.td,{children:"None"}),(0,i.jsx)(s.td,{children:"The principal account of Kerberos user used for authentication."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"keytab"})}),(0,i.jsx)(s.td,{children:"String"}),(0,i.jsx)(s.td,{children:"false"}),(0,i.jsx)(s.td,{children:"None"}),(0,i.jsx)(s.td,{children:"The full pathname of the Kerberos keytab file used for authentication."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"filenamePrefix"})}),(0,i.jsx)(s.td,{children:"String"}),(0,i.jsx)(s.td,{children:"false"}),(0,i.jsx)(s.td,{children:"None"}),(0,i.jsxs)(s.td,{children:["The prefix of the files created inside the HDFS directory.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Example"}),(0,i.jsx)("br",{})," The value of topicA result in files named topicA-."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"fileExtension"})}),(0,i.jsx)(s.td,{children:"String"}),(0,i.jsx)(s.td,{children:"false"}),(0,i.jsx)(s.td,{children:"None"}),(0,i.jsxs)(s.td,{children:["The extension added to the files written to HDFS.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Example"}),(0,i.jsx)("br",{}),"'.txt'",(0,i.jsx)("br",{})," '.seq'"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"separator"})}),(0,i.jsx)(s.td,{children:"char"}),(0,i.jsx)(s.td,{children:"false"}),(0,i.jsx)(s.td,{children:"None"}),(0,i.jsxs)(s.td,{children:["The character used to separate records in a text file. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"If no value is provided, the contents from all records are concatenated together in one continuous byte array."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"syncInterval"})}),(0,i.jsx)(s.td,{children:"long"}),(0,i.jsx)(s.td,{children:"false"}),(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:"The interval between calls to flush data to HDFS disk in milliseconds."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"maxPendingRecords"})}),(0,i.jsx)(s.td,{children:"int"}),(0,i.jsx)(s.td,{children:"false"}),(0,i.jsx)(s.td,{children:"Integer.MAX_VALUE"}),(0,i.jsxs)(s.td,{children:["The maximum number of records that hold in memory before acking. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Setting this property to 1 makes every record send to disk before the record is acked.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Setting this property to a higher value allows buffering records before flushing them to disk."]})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(s.p,{children:"Before using the HDFS2 sink connector, you need to create a configuration file through one of the following methods."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"JSON"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'\n{\n    "hdfsConfigResources": "core-site.xml",\n    "directory": "/foo/bar",\n    "filenamePrefix": "prefix",\n    "compression": "SNAPPY"\n}\n\n'})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"YAML"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:'\nconfigs:\n    hdfsConfigResources: "core-site.xml"\n    directory: "/foo/bar"\n    filenamePrefix: "prefix"\n    compression: "SNAPPY"\n\n'})}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>o});var r=n(96540);const i={},t=r.createContext(i);function d(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);