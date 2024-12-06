"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[15280],{80844:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>a});const d=JSON.parse('{"id":"io-jdbc-sink","title":"JDBC sink connector","description":"You can download all the Pulsar connectors on download page.","source":"@site/docs/io-jdbc-sink.md","sourceDirName":".","slug":"/io-jdbc-sink","permalink":"/docs/next/io-jdbc-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/docs/io-jdbc-sink.md","tags":[],"version":"current","frontMatter":{"id":"io-jdbc-sink","title":"JDBC sink connector","sidebar_label":"JDBC sink connector"}}');var i=s(74848),l=s(28453);const t={id:"io-jdbc-sink",title:"JDBC sink connector",sidebar_label:"JDBC sink connector"},c=void 0,r={},a=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example of ClickHouse",id:"example-of-clickhouse",level:3},{value:"Example of MariaDB",id:"example-of-mariadb",level:3},{value:"Example of OpenMLDB",id:"example-of-openmldb",level:3},{value:"Example of PostgreSQL",id:"example-of-postgresql",level:3},{value:"Example of SQLite",id:"example-of-sqlite",level:3}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["You can download all the Pulsar connectors on ",(0,i.jsx)(n.a,{href:"pathname:///download",children:"download page"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"The JDBC sink connectors allow pulling messages from Pulsar topics and persist the messages to ClickHouse, MariaDB, PostgreSQL, and SQLite."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Currently, INSERT, DELETE and UPDATE operations are supported.\nSQLite, MariaDB and PostgreSQL also support UPSERT operations and idempotent writes."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"The configuration of all JDBC sink connectors has the following properties."}),"\n",(0,i.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"userName"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:'" " (empty string)'}),(0,i.jsxs)(n.td,{children:["The username used to connect to the database specified by ",(0,i.jsx)(n.code,{children:"jdbcUrl"}),".",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)(n.strong,{children:["Note: ",(0,i.jsx)(n.code,{children:"userName"})," is case-sensitive."]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"password"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:'" " (empty string)'}),(0,i.jsxs)(n.td,{children:["The password used to connect to the database specified by ",(0,i.jsx)(n.code,{children:"jdbcUrl"}),". ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)(n.strong,{children:["Note: ",(0,i.jsx)(n.code,{children:"password"})," is case-sensitive."]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jdbcUrl"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:'" " (empty string)'}),(0,i.jsx)(n.td,{children:"The JDBC URL of the database that the connector connects to."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"tableName"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:'" " (empty string)'}),(0,i.jsx)(n.td,{children:"The name of the table that the connector writes to."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"nonKey"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:'" " (empty string)'}),(0,i.jsx)(n.td,{children:"A comma-separated list containing the fields used in updating events."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"key"})}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:'" " (empty string)'}),(0,i.jsxs)(n.td,{children:["A comma-separated list containing the fields used in ",(0,i.jsx)(n.code,{children:"where"})," condition of updating and deleting events."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"timeoutMs"})}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"500"}),(0,i.jsx)(n.td,{children:"The JDBC operation timeout in milliseconds."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"batchSize"})}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"200"}),(0,i.jsx)(n.td,{children:"The batch size of updates made to the database."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"insertMode"})}),(0,i.jsx)(n.td,{children:"enum( INSERT,UPSERT,UPDATE)"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"INSERT"}),(0,i.jsx)(n.td,{children:"If it is configured as UPSERT, the sink uses upsert semantics rather than plain INSERT/UPDATE statements. Upsert semantics refer to atomically adding a new row or updating the existing row if there is a primary key constraint violation, which provides idempotence."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"nullValueAction"})}),(0,i.jsx)(n.td,{children:"enum(FAIL, DELETE)"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"FAIL"}),(0,i.jsxs)(n.td,{children:["How to handle records with NULL values. Possible options are ",(0,i.jsx)(n.code,{children:"DELETE"})," or ",(0,i.jsx)(n.code,{children:"FAIL"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"useTransactions"})}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{children:"Enable transactions of the database."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"excludeNonDeclaredFields"})}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsxs)(n.td,{children:["All the table fields are discovered automatically. ",(0,i.jsx)(n.code,{children:"excludeNonDeclaredFields"})," indicates if the table fields not explicitly listed in ",(0,i.jsx)(n.code,{children:"nonKey"})," and ",(0,i.jsx)(n.code,{children:"key"})," must be included in the query. By default all the table fields are included. To leverage of table fields defaults during insertion, it is suggested to set this value to ",(0,i.jsx)(n.code,{children:"false"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"useJdbcBatch"})}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"Use the JDBC batch API. This option is suggested to improve write performance."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"example-of-clickhouse",children:"Example of ClickHouse"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"JSON"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n   "configs": {\n      "userName": "clickhouse",\n      "password": "password",\n      "jdbcUrl": "jdbc:clickhouse://localhost:8123/pulsar_clickhouse_jdbc_sink",\n      "tableName": "pulsar_clickhouse_jdbc_sink"\n      "useTransactions": "false"\n   }\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"YAML"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'tenant: "public"\nnamespace: "default"\nname: "jdbc-clickhouse-sink"\ninputs: [ "persistent://public/default/jdbc-clickhouse-topic" ]\nsinkType: "jdbc-clickhouse"\nconfigs:\n    userName: "clickhouse"\n    password: "password"\n    jdbcUrl: "jdbc:clickhouse://localhost:8123/pulsar_clickhouse_jdbc_sink"\n    tableName: "pulsar_clickhouse_jdbc_sink"\n    useTransactions: "false"\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example-of-mariadb",children:"Example of MariaDB"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"JSON"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n   "configs": {\n      "userName": "mariadb",\n      "password": "password",\n      "jdbcUrl": "jdbc:mariadb://localhost:3306/pulsar_mariadb_jdbc_sink",\n      "tableName": "pulsar_mariadb_jdbc_sink"\n   }\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"YAML"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'tenant: "public"\nnamespace: "default"\nname: "jdbc-mariadb-sink"\ninputs: [ "persistent://public/default/jdbc-mariadb-topic" ]\nsinkType: "jdbc-mariadb"\nconfigs:\n    userName: "mariadb"\n    password: "password"\n    jdbcUrl: "jdbc:mariadb://localhost:3306/pulsar_mariadb_jdbc_sink"\n    tableName: "pulsar_mariadb_jdbc_sink"\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example-of-openmldb",children:"Example of OpenMLDB"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"OpenMLDB does not support DELETE and UPDATE operations"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"JSON"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n   "configs": {\n      "jdbcUrl": "jdbc:openmldb:///pulsar_openmldb_db?zk=localhost:6181&zkPath=/openmldb",\n      "tableName": "pulsar_openmldb_jdbc_sink"\n   }\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"YAML"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'tenant: "public"\nnamespace: "default"\nname: "jdbc-openmldb-sink"\ninputs: [ "persistent://public/default/jdbc-openmldb-topic" ]\nsinkType: "jdbc-openmldb"\nconfigs:\n    jdbcUrl: "jdbc:openmldb:///pulsar_openmldb_db?zk=localhost:6181&zkPath=/openmldb"\n    tableName: "pulsar_openmldb_jdbc_sink"\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example-of-postgresql",children:"Example of PostgreSQL"}),"\n",(0,i.jsx)(n.p,{children:"Before using the JDBC PostgreSQL sink connector, you need to create a configuration file through one of the following methods."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"JSON"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n   "configs": {\n      "userName": "postgres",\n      "password": "password",\n      "jdbcUrl": "jdbc:postgresql://localhost:5432/pulsar_postgres_jdbc_sink",\n      "tableName": "pulsar_postgres_jdbc_sink"\n   }\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"YAML"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'tenant: "public"\nnamespace: "default"\nname: "jdbc-postgres-sink"\ninputs: [ "persistent://public/default/jdbc-postgres-topic" ]\nsinkType: "jdbc-postgres"\nconfigs:\n    userName: "postgres"\n    password: "password"\n    jdbcUrl: "jdbc:postgresql://localhost:5432/pulsar_postgres_jdbc_sink"\n    tableName: "pulsar_postgres_jdbc_sink"\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more information on ",(0,i.jsx)(n.strong,{children:"how to use this JDBC sink connector"}),", see ",(0,i.jsx)(n.a,{href:"/docs/next/io-quickstart#connect-pulsar-to-postgresql",children:"connect Pulsar to PostgreSQL"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"example-of-sqlite",children:"Example of SQLite"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"JSON"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n   "configs": {\n      "jdbcUrl": "jdbc:sqlite:db.sqlite",\n      "tableName": "pulsar_sqlite_jdbc_sink"\n   }\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"YAML"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'tenant: "public"\nnamespace: "default"\nname: "jdbc-sqlite-sink"\ninputs: [ "persistent://public/default/jdbc-sqlite-topic" ]\nsinkType: "jdbc-sqlite"\nconfigs:\n    jdbcUrl: "jdbc:sqlite:db.sqlite"\n    tableName: "pulsar_sqlite_jdbc_sink"\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var d=s(96540);const i={},l=d.createContext(i);function t(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);