"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[32679],{6249:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"sql-getting-started","title":"Query data with Pulsar SQL","description":"Before querying data in Pulsar, you need to install Pulsar and built-in connectors.","source":"@site/versioned_docs/version-2.5.1/sql-getting-started.md","sourceDirName":".","slug":"/sql-getting-started","permalink":"/docs/2.5.1/sql-getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.1/sql-getting-started.md","tags":[],"version":"2.5.1","frontMatter":{"id":"sql-getting-started","title":"Query data with Pulsar SQL","sidebar_label":"Query data"},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/docs/2.5.1/sql-overview"},"next":{"title":"Configuration and deployment","permalink":"/docs/2.5.1/sql-deployment-configurations"}}');var a=s(74848),r=s(28453);const i={id:"sql-getting-started",title:"Query data with Pulsar SQL",sidebar_label:"Query data"},l=void 0,o={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Query data in Pulsar",id:"query-data-in-pulsar",level:2},{value:"Query your own data",id:"query-your-own-data",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Before querying data in Pulsar, you need to install Pulsar and built-in connectors."}),"\n",(0,a.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Install ",(0,a.jsx)(n.a,{href:"/docs/2.5.1/getting-started-standalone#install-pulsar-standalone",children:"Pulsar"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Install Pulsar ",(0,a.jsx)(n.a,{href:"/docs/2.5.1/getting-started-standalone#install-builtin-connectors-optional",children:"built-in connectors"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"query-data-in-pulsar",children:"Query data in Pulsar"}),"\n",(0,a.jsx)(n.p,{children:"To query data in Pulsar with Pulsar SQL, complete the following steps."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Start a Pulsar standalone cluster."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n./bin/pulsar standalone\n\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Start a Pulsar SQL worker."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n./bin/pulsar sql-worker run\n\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"After initializing Pulsar standalone cluster and the SQL worker, run SQL CLI."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n./bin/pulsar sql\n\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Test with SQL commands."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'\npresto> show catalogs;\n Catalog\n---------\n pulsar\n system\n(2 rows)\n\nQuery 20180829_211752_00004_7qpwh, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:00 [0 rows, 0B] [0 rows/s, 0B/s]\n\n\npresto> show schemas in pulsar;\n        Schema\n-----------------------\n information_schema\n public/default\n public/functions\n(3 rows)\n\nQuery 20180829_211818_00005_7qpwh, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:00 [4 rows, 89B] [21 rows/s, 471B/s]\n\n\npresto> show tables in pulsar."public/default";\n Table\n-------\n(0 rows)\n\nQuery 20180829_211839_00006_7qpwh, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:00 [0 rows, 0B] [0 rows/s, 0B/s]\n\n'})}),"\n",(0,a.jsx)(n.p,{children:"Since there is no data in Pulsar, no records is returned."}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsxs)(n.li,{children:["Start the built-in connector ",(0,a.jsx)(n.em,{children:"DataGeneratorSource"})," and ingest some mock data."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n./bin/pulsar-admin sources create --name generator --destinationTopicName generator_test --source-type data-generator\n\n"})}),"\n",(0,a.jsx)(n.p,{children:'And then you can query a topic in the namespace "public/default".'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'\npresto> show tables in pulsar."public/default";\n     Table\n----------------\n generator_test\n(1 row)\n\nQuery 20180829_213202_00000_csyeu, FINISHED, 1 node\nSplits: 19 total, 19 done (100.00%)\n0:02 [1 rows, 38B] [0 rows/s, 17B/s]\n\n'})}),"\n",(0,a.jsx)(n.p,{children:'You can now query the data within the topic "generator_test".'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'\npresto> select * from pulsar."public/default".generator_test;\n\n  firstname  | middlename  |  lastname   |              email               |   username   | password | telephonenumber | age |                 companyemail                  | nationalidentitycardnumber |\n-------------+-------------+-------------+----------------------------------+--------------+----------+-----------------+-----+-----------------------------------------------+----------------------------+\n Genesis     | Katherine   | Wiley       | genesis.wiley@gmail.com          | genesisw     | y9D2dtU3 | 959-197-1860    |  71 | genesis.wiley@interdemconsulting.eu           | 880-58-9247                |\n Brayden     |             | Stanton     | brayden.stanton@yahoo.com        | braydens     | ZnjmhXik | 220-027-867     |  81 | brayden.stanton@supermemo.eu                  | 604-60-7069                |\n Benjamin    | Julian      | Velasquez   | benjamin.velasquez@yahoo.com     | benjaminv    | 8Bc7m3eb | 298-377-0062    |  21 | benjamin.velasquez@hostesltd.biz              | 213-32-5882                |\n Michael     | Thomas      | Donovan     | donovan@mail.com                 | michaeld     | OqBm9MLs | 078-134-4685    |  55 | michael.donovan@memortech.eu                  | 443-30-3442                |\n Brooklyn    | Avery       | Roach       | brooklynroach@yahoo.com          | broach       | IxtBLafO | 387-786-2998    |  68 | brooklyn.roach@warst.biz                      | 085-88-3973                |\n Skylar      |             | Bradshaw    | skylarbradshaw@yahoo.com         | skylarb      | p6eC6cKy | 210-872-608     |  96 | skylar.bradshaw@flyhigh.eu                    | 453-46-0334                |\n.\n.\n.\n\n'})}),"\n",(0,a.jsx)(n.p,{children:"You can query the mock data."}),"\n",(0,a.jsx)(n.h2,{id:"query-your-own-data",children:"Query your own data"}),"\n",(0,a.jsx)(n.p,{children:"If you want to query your own data, you need to ingest your own data first. You can write a simple producer and write custom defined data to Pulsar. The following is an example."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'\npublic class TestProducer {\n\n    public static class Foo {\n        private int field1 = 1;\n        private String field2;\n        private long field3;\n\n        public Foo() {\n        }\n\n        public int getField1() {\n            return field1;\n        }\n\n        public void setField1(int field1) {\n            this.field1 = field1;\n        }\n\n        public String getField2() {\n            return field2;\n        }\n\n        public void setField2(String field2) {\n            this.field2 = field2;\n        }\n\n        public long getField3() {\n            return field3;\n        }\n\n        public void setField3(long field3) {\n            this.field3 = field3;\n        }\n    }\n\n    public static void main(String[] args) throws Exception {\n        PulsarClient pulsarClient = PulsarClient.builder().serviceUrl("pulsar://localhost:6650").build();\n        Producer<Foo> producer = pulsarClient.newProducer(AvroSchema.of(Foo.class)).topic("test_topic").create();\n\n        for (int i = 0; i < 1000; i++) {\n            Foo foo = new Foo();\n            foo.setField1(i);\n            foo.setField2("foo" + i);\n            foo.setField3(System.currentTimeMillis());\n            producer.newMessage().value(foo).send();\n        }\n        producer.close();\n        pulsarClient.close();\n    }\n}\n\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(96540);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);