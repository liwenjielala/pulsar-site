"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[84165],{68418:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"io-influxdb-sink","title":"InfluxDB sink connector","description":"The InfluxDB sink connector pulls messages from Pulsar topics","source":"@site/versioned_docs/version-2.8.x/io-influxdb-sink.md","sourceDirName":".","slug":"/io-influxdb-sink","permalink":"/docs/2.8.x/io-influxdb-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/io-influxdb-sink.md","tags":[],"version":"2.8.x","frontMatter":{"id":"io-influxdb-sink","title":"InfluxDB sink connector","sidebar_label":"InfluxDB sink connector","original_id":"io-influxdb-sink"}}');var l=i(74848),t=i(28453);const d={id:"io-influxdb-sink",title:"InfluxDB sink connector",sidebar_label:"InfluxDB sink connector",original_id:"io-influxdb-sink"},r=void 0,c={},x=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"InfluxDBv2",id:"influxdbv2",level:4},{value:"InfluxDBv1",id:"influxdbv1",level:4},{value:"Example",id:"example",level:3},{value:"InfluxDBv2",id:"influxdbv2-1",level:4},{value:"InfluxDBv1",id:"influxdbv1-1",level:4}];function h(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"The InfluxDB sink connector pulls messages from Pulsar topics\nand persists the messages to InfluxDB."}),"\n",(0,l.jsx)(n.p,{children:"The InfluxDB sink provides different configurations for InfluxDBv1 and v2 respectively."}),"\n",(0,l.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,l.jsx)(n.p,{children:"The configuration of the InfluxDB sink connector has the following properties."}),"\n",(0,l.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,l.jsx)(n.h4,{id:"influxdbv2",children:"InfluxDBv2"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Required"}),(0,l.jsx)(n.th,{children:"Default"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"influxdbUrl"})}),(0,l.jsx)(n.td,{children:"String"}),(0,l.jsx)(n.td,{children:"true"}),(0,l.jsx)(n.td,{children:'" " (empty string)'}),(0,l.jsx)(n.td,{children:"The URL of the InfluxDB instance."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"token"})}),(0,l.jsx)(n.td,{children:"String"}),(0,l.jsx)(n.td,{children:"true"}),(0,l.jsx)(n.td,{children:'" " (empty string)'}),(0,l.jsx)(n.td,{children:"The authentication token used to authenticate to InfluxDB."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"organization"})}),(0,l.jsx)(n.td,{children:"String"}),(0,l.jsx)(n.td,{children:"true"}),(0,l.jsx)(n.td,{children:'" " (empty string)'}),(0,l.jsx)(n.td,{children:"The InfluxDB organization to write to."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"bucket"})}),(0,l.jsx)(n.td,{children:"String"}),(0,l.jsx)(n.td,{children:"true"}),(0,l.jsx)(n.td,{children:'" " (empty string)'}),(0,l.jsx)(n.td,{children:"The InfluxDB bucket to write to."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"precision"})}),(0,l.jsx)(n.td,{children:"String"}),(0,l.jsx)(n.td,{children:"false"}),(0,l.jsx)(n.td,{children:"ns"}),(0,l.jsxs)(n.td,{children:["The timestamp precision for writing data to InfluxDB. ",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"Below are the available options:",(0,l.jsxs)("li",{children:["ns",(0,l.jsx)("br",{})]}),(0,l.jsxs)("li",{children:["us",(0,l.jsx)("br",{})]}),(0,l.jsxs)("li",{children:["ms",(0,l.jsx)("br",{})]}),(0,l.jsx)("li",{children:"s"})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"logLevel"})}),(0,l.jsx)(n.td,{children:"String"}),(0,l.jsx)(n.td,{children:"false"}),(0,l.jsx)(n.td,{children:"NONE"}),(0,l.jsxs)(n.td,{children:["The log level for InfluxDB request and response. ",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"Below are the available options:",(0,l.jsxs)("li",{children:["NONE",(0,l.jsx)("br",{})]}),(0,l.jsxs)("li",{children:["BASIC",(0,l.jsx)("br",{})]}),(0,l.jsxs)("li",{children:["HEADERS",(0,l.jsx)("br",{})]}),(0,l.jsx)("li",{children:"FULL"})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"gzipEnable"})}),(0,l.jsx)(n.td,{children:"boolean"}),(0,l.jsx)(n.td,{children:"false"}),(0,l.jsx)(n.td,{children:"false"}),(0,l.jsx)(n.td,{children:"Whether to enable gzip or not."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"batchTimeMs"})}),(0,l.jsx)(n.td,{children:"long"}),(0,l.jsx)(n.td,{children:"false"}),(0,l.jsx)(n.td,{children:"1000L"}),(0,l.jsx)(n.td,{children:"The InfluxDB operation time in milliseconds."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"batchSize"})}),(0,l.jsx)(n.td,{children:"int"}),(0,l.jsx)(n.td,{children:"false"}),(0,l.jsx)(n.td,{children:"200"}),(0,l.jsx)(n.td,{children:"The batch size of writing to InfluxDB."})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"influxdbv1",children:"InfluxDBv1"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Required"}),(0,l.jsx)(n.th,{children:"Default"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"influxdbUrl"})}),(0,l.jsx)(n.td,{children:"String"}),(0,l.jsx)(n.td,{children:"true"}),(0,l.jsx)(n.td,{children:'" " (empty string)'}),(0,l.jsx)(n.td,{children:"The URL of the InfluxDB instance."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"username"})}),(0,l.jsx)(n.td,{children:"String"}),(0,l.jsx)(n.td,{children:"false"}),(0,l.jsx)(n.td,{children:'" " (empty string)'}),(0,l.jsx)(n.td,{children:"The username used to authenticate to InfluxDB."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"password"})}),(0,l.jsx)(n.td,{children:"String"}),(0,l.jsx)(n.td,{children:"false"}),(0,l.jsx)(n.td,{children:'" " (empty string)'}),(0,l.jsx)(n.td,{children:"The password used to authenticate to InfluxDB."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"database"})}),(0,l.jsx)(n.td,{children:"String"}),(0,l.jsx)(n.td,{children:"true"}),(0,l.jsx)(n.td,{children:'" " (empty string)'}),(0,l.jsx)(n.td,{children:"The InfluxDB to which write messages."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"consistencyLevel"})}),(0,l.jsx)(n.td,{children:"String"}),(0,l.jsx)(n.td,{children:"false"}),(0,l.jsx)(n.td,{children:"ONE"}),(0,l.jsxs)(n.td,{children:["The consistency level for writing data to InfluxDB. ",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"Below are the available options:",(0,l.jsxs)("li",{children:["ALL",(0,l.jsx)("br",{})]}),(0,l.jsxs)("li",{children:[" ANY",(0,l.jsx)("br",{})]}),(0,l.jsxs)("li",{children:["ONE",(0,l.jsx)("br",{})]}),(0,l.jsx)("li",{children:"QUORUM "})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"logLevel"})}),(0,l.jsx)(n.td,{children:"String"}),(0,l.jsx)(n.td,{children:"false"}),(0,l.jsx)(n.td,{children:"NONE"}),(0,l.jsxs)(n.td,{children:["The log level for InfluxDB request and response. ",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"Below are the available options:",(0,l.jsxs)("li",{children:["NONE",(0,l.jsx)("br",{})]}),(0,l.jsxs)("li",{children:["BASIC",(0,l.jsx)("br",{})]}),(0,l.jsxs)("li",{children:["HEADERS",(0,l.jsx)("br",{})]}),(0,l.jsx)("li",{children:"FULL"})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"retentionPolicy"})}),(0,l.jsx)(n.td,{children:"String"}),(0,l.jsx)(n.td,{children:"false"}),(0,l.jsx)(n.td,{children:"autogen"}),(0,l.jsx)(n.td,{children:"The retention policy for InfluxDB."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"gzipEnable"})}),(0,l.jsx)(n.td,{children:"boolean"}),(0,l.jsx)(n.td,{children:"false"}),(0,l.jsx)(n.td,{children:"false"}),(0,l.jsx)(n.td,{children:"Whether to enable gzip or not."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"batchTimeMs"})}),(0,l.jsx)(n.td,{children:"long"}),(0,l.jsx)(n.td,{children:"false"}),(0,l.jsx)(n.td,{children:"1000L"}),(0,l.jsx)(n.td,{children:"The InfluxDB operation time in milliseconds."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"batchSize"})}),(0,l.jsx)(n.td,{children:"int"}),(0,l.jsx)(n.td,{children:"false"}),(0,l.jsx)(n.td,{children:"200"}),(0,l.jsx)(n.td,{children:"The batch size of writing to InfluxDB."})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:"Before using the InfluxDB sink connector, you need to create a configuration file through one of the following methods."}),"\n",(0,l.jsx)(n.h4,{id:"influxdbv2-1",children:"InfluxDBv2"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"JSON"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'\n{\n    "influxdbUrl": "http://localhost:9999",\n    "organization": "example-org",\n    "bucket": "example-bucket",\n    "token": "xxxx",\n    "precision": "ns",\n    "logLevel": "NONE",\n    "gzipEnable": false,\n    "batchTimeMs": 1000,\n    "batchSize": 100\n}\n\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"YAML"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'\nconfigs:\n    influxdbUrl: "http://localhost:9999"\n    organization: "example-org"\n    bucket: "example-bucket"\n    token: "xxxx"\n    precision: "ns"\n    logLevel: "NONE"\n    gzipEnable: false\n    batchTimeMs: 1000\n    batchSize: 100\n\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"influxdbv1-1",children:"InfluxDBv1"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"JSON"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'\n{\n    "influxdbUrl": "http://localhost:8086",\n    "database": "test_db",\n    "consistencyLevel": "ONE",\n    "logLevel": "NONE",\n    "retentionPolicy": "autogen",\n    "gzipEnable": false,\n    "batchTimeMs": 1000,\n    "batchSize": 100\n}\n\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"YAML"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'\nconfigs:\n    influxdbUrl: "http://localhost:8086"\n    database: "test_db"\n    consistencyLevel: "ONE"\n    logLevel: "NONE"\n    retentionPolicy: "autogen"\n    gzipEnable: false\n    batchTimeMs: 1000\n    batchSize: 100\n\n'})}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>r});var s=i(96540);const l={},t=s.createContext(l);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);