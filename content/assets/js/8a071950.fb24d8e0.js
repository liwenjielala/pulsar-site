"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[92888],{58196:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"io-jdbc-sink","title":"JDBC sink connector","description":"The JDBC sink connector pulls messages from Pulsar topics","source":"@site/versioned_docs/version-2.5.1/io-jdbc-sink.md","sourceDirName":".","slug":"/io-jdbc-sink","permalink":"/docs/2.5.1/io-jdbc-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.1/io-jdbc-sink.md","tags":[],"version":"2.5.1","frontMatter":{"id":"io-jdbc-sink","title":"JDBC sink connector","sidebar_label":"JDBC sink connector","original_id":"io-jdbc-sink"}}');var i=s(74848),r=s(28453);const d={id:"io-jdbc-sink",title:"JDBC sink connector",sidebar_label:"JDBC sink connector",original_id:"io-jdbc-sink"},c=void 0,o={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The JDBC sink connector pulls messages from Pulsar topics\nand persists the messages to MySQL or SQlite."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Currently, INSERT, DELETE and UPDATE operations are supported."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"The configuration of the JDBC sink connector has the following properties."}),"\n",(0,i.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"userName"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:'" " (empty string)'}),(0,i.jsxs)(n.td,{children:["The username used to connect to the database specified by ",(0,i.jsx)(n.code,{children:"jdbcUrl"}),".",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)(n.strong,{children:["Note: ",(0,i.jsx)(n.code,{children:"userName"})," is case-sensitive."]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"password"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:'" " (empty string)'}),(0,i.jsxs)(n.td,{children:["The password used to connect to the database specified by ",(0,i.jsx)(n.code,{children:"jdbcUrl"}),". ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)(n.strong,{children:["Note: ",(0,i.jsx)(n.code,{children:"password"})," is case-sensitive."]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jdbcUrl"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:'" " (empty string)'}),(0,i.jsx)(n.td,{children:"The JDBC URL of the database to which the connector connects."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"tableName"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:'" " (empty string)'}),(0,i.jsx)(n.td,{children:"The name of the table to which the connector writes."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"nonKey"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:'" " (empty string)'}),(0,i.jsx)(n.td,{children:"A comma-separated list contains the fields used in updating events."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"key"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:'" " (empty string)'}),(0,i.jsxs)(n.td,{children:["A comma-separated list contains the fields used in ",(0,i.jsx)(n.code,{children:"where"})," condition of updating and deleting events."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"timeoutMs"})}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"500"}),(0,i.jsx)(n.td,{children:"The JDBC operation timeout in milliseconds."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"batchSize"})}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"200"}),(0,i.jsx)(n.td,{children:"The batch size of updates made to the database."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Before using the JDBC sink connector, you need to create a configuration file through one of the following methods."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"JSON"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'\n{\n    "userName": "root",\n    "password": "jdbc",\n    "jdbcUrl": "jdbc:mysql://127.0.0.1:3306/pulsar_mysql_jdbc_sink",\n    "tableName": "pulsar_mysql_jdbc_sink"\n}\n\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"YAML"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'\nconfigs:\n    userName: "root"\n    password: "jdbc"\n    jdbcUrl: "jdbc:mysql://127.0.0.1:3306/pulsar_mysql_jdbc_sink"\n    tableName: "pulsar_mysql_jdbc_sink"\n\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:["For more information about ",(0,i.jsx)(n.strong,{children:"how to use a JDBC sink connector"}),", see ",(0,i.jsx)(n.a,{href:"/docs/2.5.1/io-quickstart#connect-pulsar-to-mysql",children:"connect Pulsar to MySQL"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var t=s(96540);const i={},r=t.createContext(i);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);