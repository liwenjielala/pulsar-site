"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[93373],{21007:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"io-managing","title":"Managing Connectors","description":"This section describes how to manage Pulsar IO connectors in a Pulsar cluster. You will learn how to:","source":"@site/versioned_docs/version-2.2.0/io-managing.md","sourceDirName":".","slug":"/io-managing","permalink":"/docs/2.2.0/io-managing","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.0/io-managing.md","tags":[],"version":"2.2.0","frontMatter":{"id":"io-managing","title":"Managing Connectors","sidebar_label":"Managing Connectors","original_id":"io-managing"},"sidebar":"docsSidebar","previous":{"title":"Getting started","permalink":"/docs/2.2.0/io-quickstart"},"next":{"title":"Builtin Connectors","permalink":"/docs/2.2.0/io-connectors"}}');var i=s(74848),t=s(28453);const c={id:"io-managing",title:"Managing Connectors",sidebar_label:"Managing Connectors",original_id:"io-managing"},o=void 0,r={},l=[{value:"Using Builtin Connectors",id:"using-builtin-connectors",level:2},{value:"Configuring Connectors",id:"configuring-connectors",level:2},{value:"Running Connectors",id:"running-connectors",level:2},{value:"Running sources",id:"running-sources",level:3},{value:"Running Sinks",id:"running-sinks",level:3},{value:"Note",id:"note",level:4},{value:"Monitoring Connectors",id:"monitoring-connectors",level:2},{value:"Retrieve Connector Metadata",id:"retrieve-connector-metadata",level:3},{value:"Retrieve Connector Running Status",id:"retrieve-connector-running-status",level:3}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"This section describes how to manage Pulsar IO connectors in a Pulsar cluster. You will learn how to:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Deploy builtin connectors"}),"\n",(0,i.jsx)(e.li,{children:"Monitor and update running connectors with Pulsar Admin CLI"}),"\n",(0,i.jsx)(e.li,{children:"Deploy customized connectors"}),"\n",(0,i.jsx)(e.li,{children:"Upgrade a connector"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"using-builtin-connectors",children:"Using Builtin Connectors"}),"\n",(0,i.jsxs)(e.p,{children:["Pulsar bundles several ",(0,i.jsx)(e.a,{href:"/docs/2.2.0/io-overview#working-with-connectors",children:"builtin connectors"})," that should be used for moving data in and out\nof commonly used systems such as databases, messaging systems. Getting set up to use these builtin connectors is simple. You can follow\nthe ",(0,i.jsx)(e.a,{href:"/docs/2.2.0/getting-started-standalone#installing-builtin-connectors",children:"instructions"})," on installing builtin connectors. After setup, all\nthe builtin connectors will be automatically discovered by Pulsar brokers (or function-workers), so no additional installation steps are\nrequired."]}),"\n",(0,i.jsx)(e.h2,{id:"configuring-connectors",children:"Configuring Connectors"}),"\n",(0,i.jsxs)(e.p,{children:["Configuring Pulsar IO connectors is straightforward. What you need to do is to provide a yaml configuration file when your ",(0,i.jsx)(e.a,{href:"#running-connectors",children:"run connectors"}),".\nThe yaml configuration file basically tells Pulsar where to locate the sources and sinks and how to connect those sources and sinks with Pulsar topics."]}),"\n",(0,i.jsx)(e.p,{children:"Below is an example yaml configuration file for Cassandra Sink:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:'\ntenant: public\nnamespace: default\nname: cassandra-test-sink\n...\n# cassandra specific config\nconfigs:\n    roots: "localhost:9042"\n    keyspace: "pulsar_test_keyspace"\n    columnFamily: "pulsar_test_table"\n    keyname: "key"\n    columnName: "col"\n\n'})}),"\n",(0,i.jsxs)(e.p,{children:["The example yaml basically tells Pulsar which Cassandra cluster to connect, what is the ",(0,i.jsx)(e.code,{children:"keyspace"})," and ",(0,i.jsx)(e.code,{children:"columnFamily"})," to be used in Cassandra for collecting data,\nand how to map a Pulsar message into Cassandra table key and columns."]}),"\n",(0,i.jsxs)(e.p,{children:["For details, consult the documentation for ",(0,i.jsx)(e.a,{href:"/docs/2.2.0/io-overview#working-with-connectors",children:"individual connectors"}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"running-connectors",children:"Running Connectors"}),"\n",(0,i.jsxs)(e.p,{children:["Pulsar connectors can be managed using the ",(0,i.jsx)(e.a,{href:"/docs/2.2.0/reference-pulsar-admin#source",children:(0,i.jsx)(e.code,{children:"source"})})," and ",(0,i.jsx)(e.a,{href:"/docs/2.2.0/reference-pulsar-admin#sink",children:(0,i.jsx)(e.code,{children:"sink"})})," commands of the ",(0,i.jsx)(e.a,{href:"/docs/2.2.0/reference-pulsar-admin",children:(0,i.jsx)(e.code,{children:"pulsar-admin"})})," CLI tool."]}),"\n",(0,i.jsx)(e.h3,{id:"running-sources",children:"Running sources"}),"\n",(0,i.jsx)(e.p,{children:"You can submit a source to be run in an existing Pulsar cluster using a command of this form:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"\n$ ./bin/pulsar-admin source create --classname  <classname> --archive <jar-location> --tenant <tenant> --namespace <namespace> --name <source-name> --destination-topic-name <output-topic>\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"Here\u2019s an example command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"\nbin/pulsar-admin source create --classname org.apache.pulsar.io.twitter.TwitterFireHose --archive ~/application.jar --tenant test --namespace ns1 --name twitter-source --destination-topic-name twitter_data\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"Instead of submitting a source to run on an existing Pulsar cluster, you alternatively can run a source as a process on your local machine:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"\nbin/pulsar-admin source localrun --classname  org.apache.pulsar.io.twitter.TwitterFireHose --archive ~/application.jar --tenant test --namespace ns1 --name twitter-source --destination-topic-name twitter_data\n\n"})}),"\n",(0,i.jsxs)(e.p,{children:["If you are submitting a built-in source, you don't need to specify ",(0,i.jsx)(e.code,{children:"--classname"})," and ",(0,i.jsx)(e.code,{children:"--archive"}),".\nYou can simply specify the source type ",(0,i.jsx)(e.code,{children:"--source-type"}),". The command to submit a built-in source is\nin following form:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"\n./bin/pulsar-admin source create \\\n    --tenant <tenant> \\\n    --namespace <namespace> \\\n    --name <source-name> \\\n    --destination-topic-name <input-topics> \\\n    --source-type <source-type>\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"Here's an example to submit a Kafka source:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"\n./bin/pulsar-admin source create \\\n    --tenant test-tenant \\\n    --namespace test-namespace \\\n    --name test-kafka-source \\\n    --destination-topic-name pulsar_sink_topic \\\n    --source-type kafka\n\n"})}),"\n",(0,i.jsx)(e.h3,{id:"running-sinks",children:"Running Sinks"}),"\n",(0,i.jsx)(e.p,{children:"You can submit a sink to be run in an existing Pulsar cluster using a command of this form:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"\n./bin/pulsar-admin sink create --classname  <classname> --archive <jar-location> --tenant test --namespace <namespace> --name <sink-name> --inputs <input-topics>\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"Here\u2019s an example command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"\n./bin/pulsar-admin sink create --classname  org.apache.pulsar.io.cassandra --archive ~/application.jar --tenant test --namespace ns1 --name cassandra-sink --inputs test_topic\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"Instead of submitting a sink to run on an existing Pulsar cluster, you alternatively can run a sink as a process on your local machine:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"\n./bin/pulsar-admin sink localrun --classname  org.apache.pulsar.io.cassandra --archive ~/application.jar --tenant test --namespace ns1 --name cassandra-sink --inputs test_topic\n\n"})}),"\n",(0,i.jsxs)(e.p,{children:["If you are submitting a built-in sink, you don't need to specify ",(0,i.jsx)(e.code,{children:"--classname"})," and ",(0,i.jsx)(e.code,{children:"--archive"}),".\nYou can simply specify the sink type ",(0,i.jsx)(e.code,{children:"--sink-type"}),". The command to submit a built-in sink is\nin following form:"]}),"\n",(0,i.jsx)(e.h4,{id:"note",children:"Note"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"sink-type"})," parameter of the currently built-in connectors is determined by the setting of the ",(0,i.jsx)(e.code,{children:"name"})," parameter specified in the pulsar-io.yaml file."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"\n./bin/pulsar-admin sink create \\\n    --tenant <tenant> \\\n    --namespace <namespace> \\\n    --name <sink-name> \\\n    --inputs <input-topics> \\\n    --sink-type <sink-type>\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"Here's an example to submit a Cassandra sink:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"\n./bin/pulsar-admin sink create \\\n    --tenant test-tenant \\\n    --namespace test-namespace \\\n    --name test-cassandra-sink \\\n    --inputs pulsar_input_topic \\\n    --sink-type cassandra\n\n"})}),"\n",(0,i.jsx)(e.h2,{id:"monitoring-connectors",children:"Monitoring Connectors"}),"\n",(0,i.jsxs)(e.p,{children:["Since Pulsar IO connectors are running as ",(0,i.jsx)(e.a,{href:"/docs/2.2.0/functions-overview",children:"Pulsar Functions"}),", so you can use ",(0,i.jsx)(e.a,{href:"/docs/2.2.0/reference-pulsar-admin#source",children:(0,i.jsx)(e.code,{children:"functions"})})," commands\navailable in the ",(0,i.jsx)(e.a,{href:"/docs/2.2.0/reference-pulsar-admin",children:(0,i.jsx)(e.code,{children:"pulsar-admin"})})," CLI tool."]}),"\n",(0,i.jsx)(e.h3,{id:"retrieve-connector-metadata",children:"Retrieve Connector Metadata"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"\nbin/pulsar-admin functions get \\\n    --tenant <tenant> \\\n    --namespace <namespace> \\\n    --name <connector-name>\n\n"})}),"\n",(0,i.jsx)(e.h3,{id:"retrieve-connector-running-status",children:"Retrieve Connector Running Status"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"\nbin/pulsar-admin functions getstatus \\\n    --tenant <tenant> \\\n    --namespace <namespace> \\\n    --name <connector-name>\n\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>o});var a=s(96540);const i={},t=a.createContext(i);function c(n){const e=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),a.createElement(t.Provider,{value:e},n.children)}}}]);