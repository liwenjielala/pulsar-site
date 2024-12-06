"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[56619],{30101:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"io-jdbc-sink","title":"JDBC sink connector","description":"The JDBC sink connectors allow pulling messages from Pulsar topics","source":"@site/versioned_docs/version-2.7.3/io-jdbc-sink.md","sourceDirName":".","slug":"/io-jdbc-sink","permalink":"/docs/2.7.3/io-jdbc-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.3/io-jdbc-sink.md","tags":[],"version":"2.7.3","frontMatter":{"id":"io-jdbc-sink","title":"JDBC sink connector","sidebar_label":"JDBC sink connector","original_id":"io-jdbc-sink"}}');var r=s(74848),c=s(28453);const d={id:"io-jdbc-sink",title:"JDBC sink connector",sidebar_label:"JDBC sink connector",original_id:"io-jdbc-sink"},l=void 0,t={},o=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example for ClickHouse",id:"example-for-clickhouse",level:3},{value:"Example for MariaDB",id:"example-for-mariadb",level:3},{value:"Example for PostgreSQL",id:"example-for-postgresql",level:3},{value:"Example for SQLite",id:"example-for-sqlite",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The JDBC sink connectors allow pulling messages from Pulsar topics\nand persists the messages to ClickHouse, MariaDB, PostgreSQL, and SQLite."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Currently, INSERT, DELETE and UPDATE operations are supported."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"The configuration of all JDBC sink connectors has the following properties."}),"\n",(0,r.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"userName"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:'" " (empty string)'}),(0,r.jsxs)(n.td,{children:["The username used to connect to the database specified by ",(0,r.jsx)(n.code,{children:"jdbcUrl"}),".",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)(n.strong,{children:["Note: ",(0,r.jsx)(n.code,{children:"userName"})," is case-sensitive."]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"password"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:'" " (empty string)'}),(0,r.jsxs)(n.td,{children:["The password used to connect to the database specified by ",(0,r.jsx)(n.code,{children:"jdbcUrl"}),". ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)(n.strong,{children:["Note: ",(0,r.jsx)(n.code,{children:"password"})," is case-sensitive."]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"jdbcUrl"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:'" " (empty string)'}),(0,r.jsx)(n.td,{children:"The JDBC URL of the database to which the connector connects."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"tableName"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:'" " (empty string)'}),(0,r.jsx)(n.td,{children:"The name of the table to which the connector writes."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"nonKey"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:'" " (empty string)'}),(0,r.jsx)(n.td,{children:"A comma-separated list contains the fields used in updating events."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"key"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:'" " (empty string)'}),(0,r.jsxs)(n.td,{children:["A comma-separated list contains the fields used in ",(0,r.jsx)(n.code,{children:"where"})," condition of updating and deleting events."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"timeoutMs"})}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"The JDBC operation timeout in milliseconds."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"batchSize"})}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"200"}),(0,r.jsx)(n.td,{children:"The batch size of updates made to the database."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"example-for-clickhouse",children:"Example for ClickHouse"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"JSON"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'\n{\n    "userName": "clickhouse",\n    "password": "password",\n    "jdbcUrl": "jdbc:clickhouse://localhost:8123/pulsar_clickhouse_jdbc_sink",\n    "tableName": "pulsar_clickhouse_jdbc_sink"\n}\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"YAML"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'\ntenant: "public"\nnamespace: "default"\nname: "jdbc-clickhouse-sink"\ntopicName: "persistent://public/default/jdbc-clickhouse-topic"\nsinkType: "jdbc-clickhouse"\nconfigs:\n    userName: "clickhouse"\n    password: "password"\n    jdbcUrl: "jdbc:clickhouse://localhost:8123/pulsar_clickhouse_jdbc_sink"\n    tableName: "pulsar_clickhouse_jdbc_sink"\n\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"example-for-mariadb",children:"Example for MariaDB"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"JSON"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'\n{\n    "userName": "mariadb",\n    "password": "password",\n    "jdbcUrl": "jdbc:mariadb://localhost:3306/pulsar_mariadb_jdbc_sink",\n    "tableName": "pulsar_mariadb_jdbc_sink"\n}\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"YAML"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'\ntenant: "public"\nnamespace: "default"\nname: "jdbc-mariadb-sink"\ntopicName: "persistent://public/default/jdbc-mariadb-topic"\nsinkType: "jdbc-mariadb"\nconfigs:\n    userName: "mariadb"\n    password: "password"\n    jdbcUrl: "jdbc:mariadb://localhost:3306/pulsar_mariadb_jdbc_sink"\n    tableName: "pulsar_mariadb_jdbc_sink"\n\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"example-for-postgresql",children:"Example for PostgreSQL"}),"\n",(0,r.jsx)(n.p,{children:"Before using the JDBC PostgreSQL sink connector, you need to create a configuration file through one of the following methods."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"JSON"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'\n{\n    "userName": "postgres",\n    "password": "password",\n    "jdbcUrl": "jdbc:postgresql://localhost:5432/pulsar_postgres_jdbc_sink",\n    "tableName": "pulsar_postgres_jdbc_sink"\n}\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"YAML"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'\ntenant: "public"\nnamespace: "default"\nname: "jdbc-postgres-sink"\ntopicName: "persistent://public/default/jdbc-postgres-topic"\nsinkType: "jdbc-postgres"\nconfigs:\n    userName: "postgres"\n    password: "password"\n    jdbcUrl: "jdbc:postgresql://localhost:5432/pulsar_postgres_jdbc_sink"\n    tableName: "pulsar_postgres_jdbc_sink"\n\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For more information on ",(0,r.jsx)(n.strong,{children:"how to use this JDBC sink connector"}),", see ",(0,r.jsx)(n.a,{href:"/docs/2.7.3/io-quickstart#connect-pulsar-to-postgresql",children:"connect Pulsar to PostgreSQL"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"example-for-sqlite",children:"Example for SQLite"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"JSON"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'\n{\n    "jdbcUrl": "jdbc:sqlite:db.sqlite",\n    "tableName": "pulsar_sqlite_jdbc_sink"\n}\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"YAML"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'\ntenant: "public"\nnamespace: "default"\nname: "jdbc-sqlite-sink"\ntopicName: "persistent://public/default/jdbc-sqlite-topic"\nsinkType: "jdbc-sqlite"\nconfigs:\n    jdbcUrl: "jdbc:sqlite:db.sqlite"\n    tableName: "pulsar_sqlite_jdbc_sink"\n\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var i=s(96540);const r={},c=i.createContext(r);function d(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);