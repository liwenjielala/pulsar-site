"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[60744],{98927:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"io-quickstart","title":"Tutorial: Connect Pulsar with Database","description":"This tutorial provides a hands-on look at how you can move data out of Pulsar without writing a single line of code.","source":"@site/versioned_docs/version-2.4.2/io-quickstart.md","sourceDirName":".","slug":"/io-quickstart","permalink":"/docs/2.4.2/io-quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.2/io-quickstart.md","tags":[],"version":"2.4.2","frontMatter":{"id":"io-quickstart","title":"Tutorial: Connect Pulsar with Database","sidebar_label":"Get started","original_id":"io-quickstart"},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/docs/2.4.2/io-overview"},"next":{"title":"Use","permalink":"/docs/2.4.2/io-use"}}');var i=s(74848),l=s(28453);const r={id:"io-quickstart",title:"Tutorial: Connect Pulsar with Database",sidebar_label:"Get started",original_id:"io-quickstart"},t=void 0,c={},d=[{value:"Install Pulsar and builtin connector",id:"install-pulsar-and-builtin-connector",level:2},{value:"Start a standalone Pulsar",id:"start-a-standalone-pulsar",level:2},{value:"Connect Pulsar to Apache Cassandra",id:"connect-pulsar-to-apache-cassandra",level:2},{value:"Setup the Cassandra cluster",id:"setup-the-cassandra-cluster",level:3},{value:"Start a Cassandra cluster",id:"start-a-cassandra-cluster",level:4},{value:"Create keyspace and table",id:"create-keyspace-and-table",level:4},{value:"Create keyspace <code>pulsar_test_keyspace</code>",id:"create-keyspace-pulsar_test_keyspace",level:4},{value:"Create table <code>pulsar_test_table</code>",id:"create-table-pulsar_test_table",level:4},{value:"Configure a Cassandra sink",id:"configure-a-cassandra-sink",level:3},{value:"Submit a Cassandra sink",id:"submit-a-cassandra-sink",level:3},{value:"Note",id:"note",level:4},{value:"Inspect the Cassandra sink",id:"inspect-the-cassandra-sink",level:3},{value:"Retrieve Sink Info",id:"retrieve-sink-info",level:4},{value:"Check Sink running status",id:"check-sink-running-status",level:4},{value:"Verify the Cassandra sink",id:"verify-the-cassandra-sink",level:3},{value:"Delete the Cassandra Sink",id:"delete-the-cassandra-sink",level:3},{value:"Connect Pulsar to MySQL",id:"connect-pulsar-to-mysql",level:2},{value:"Setup a MySQL cluster",id:"setup-a-mysql-cluster",level:3},{value:"Configure a JDBC sink",id:"configure-a-jdbc-sink",level:3},{value:"Submit a JDBC sink",id:"submit-a-jdbc-sink",level:3},{value:"Inspect a JDBC sink",id:"inspect-a-jdbc-sink",level:3},{value:"List all running JDBC sink(s)",id:"list-all-running-jdbc-sinks",level:4},{value:"Get information of a JDBC sink",id:"get-information-of-a-jdbc-sink",level:4},{value:"Get status of a JDBC sink",id:"get-status-of-a-jdbc-sink",level:4},{value:"Stop a JDBC sink",id:"stop-a-jdbc-sink",level:3},{value:"Restart a JDBC sink",id:"restart-a-jdbc-sink",level:3},{value:"Update a JDBC sink",id:"update-a-jdbc-sink",level:3},{value:"Delete a JDBC sink",id:"delete-a-jdbc-sink",level:3}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This tutorial provides a hands-on look at how you can move data out of Pulsar without writing a single line of code."}),"\n",(0,i.jsxs)(n.p,{children:["It is helpful to review the ",(0,i.jsx)(n.a,{href:"/docs/2.4.2/io-overview",children:"concepts"})," for Pulsar I/O with running the steps in this guide to gain a deeper understanding."]}),"\n",(0,i.jsx)(n.p,{children:"At the end of this tutorial, you will be able to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#Connect-Pulsar-to-Apache-Cassandra",children:"Connect Pulsar to Apache Cassandra"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#Connect-Pulsar-to-MySQL",children:"Connect Pulsar to MySQL"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["These instructions assume you are running Pulsar in ",(0,i.jsx)(n.a,{href:"/docs/2.4.2/getting-started-standalone",children:"standalone mode"}),". However all\nthe commands used in this tutorial should be able to be used in a multi-nodes Pulsar cluster without any changes."]}),"\n",(0,i.jsx)(n.li,{children:"All the instructions are assumed to run at the root directory of a Pulsar binary distribution."}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"install-pulsar-and-builtin-connector",children:"Install Pulsar and builtin connector"}),"\n",(0,i.jsx)(n.p,{children:"Before connecting Pulsar to a database, we need to install Pulsar and the desired builtin connector."}),"\n",(0,i.jsxs)(n.p,{children:["For more information about how to install a standalone Pulsar and builtin connectors, see ",(0,i.jsx)(n.a,{href:"getting-started-standalone.md/#installing-pulsar",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"start-a-standalone-pulsar",children:"Start a standalone Pulsar"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Start Pulsar locally."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar standalone\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"All the components of a Pulsar service will start in order. You can curl those pulsar service endpoints to make sure Pulsar service is up running correctly."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check Pulsar binary protocol port."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\ntelnet localhost 6650\n\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check Pulsar Function cluster."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\ncurl -s http://localhost:8080/admin/v2/worker/cluster\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'\n[{"workerId":"c-standalone-fw-localhost-6750","workerHostname":"localhost","port":6750}]\n\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Make sure public tenant and default namespace exist."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\ncurl -s http://localhost:8080/admin/v2/namespaces/public\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example outoupt:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'\n["public/default","public/functions"]\n\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"All builtin connectors should be listed as available."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\ncurl -s http://localhost:8080/admin/v2/functions/connectors\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'\n[{"name":"aerospike","description":"Aerospike database sink","sinkClass":"org.apache.pulsar.io.aerospike.AerospikeStringSink"},{"name":"cassandra","description":"Writes data into Cassandra","sinkClass":"org.apache.pulsar.io.cassandra.CassandraStringSink"},{"name":"kafka","description":"Kafka source and sink connector","sourceClass":"org.apache.pulsar.io.kafka.KafkaStringSource","sinkClass":"org.apache.pulsar.io.kafka.KafkaBytesSink"},{"name":"kinesis","description":"Kinesis sink connector","sinkClass":"org.apache.pulsar.io.kinesis.KinesisSink"},{"name":"rabbitmq","description":"RabbitMQ source connector","sourceClass":"org.apache.pulsar.io.rabbitmq.RabbitMQSource"},{"name":"twitter","description":"Ingest data from Twitter firehose","sourceClass":"org.apache.pulsar.io.twitter.TwitterFireHose"}]\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If an error occurred while starting Pulsar service, you may be able to seen exception at the terminal you are running ",(0,i.jsx)(n.code,{children:"pulsar/standalone"}),",\nor you can navigate the ",(0,i.jsx)(n.code,{children:"logs"})," directory under the Pulsar directory to view the logs."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"connect-pulsar-to-apache-cassandra",children:"Connect Pulsar to Apache Cassandra"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Make sure you have docker available at your computer. If you don't have docker installed, follow the instructions ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/docker-for-mac/install/",children:"here"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["We are using ",(0,i.jsx)(n.code,{children:"cassandra"})," docker image to start a single-node cassandra cluster in Docker."]}),"\n",(0,i.jsx)(n.h3,{id:"setup-the-cassandra-cluster",children:"Setup the Cassandra cluster"}),"\n",(0,i.jsx)(n.h4,{id:"start-a-cassandra-cluster",children:"Start a Cassandra cluster"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\ndocker run -d --rm --name=cassandra -p 9042:9042 cassandra:3.11\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Before moving to next steps, make sure the cassandra cluster is up running."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Make sure the docker process is running."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\ndocker ps\n\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Check the cassandra logs to make sure cassandra process is running as expected."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\ndocker logs cassandra\n\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Check the cluster status"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\ndocker exec cassandra nodetool status\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nDatacenter: datacenter1\n=======================\nStatus=Up/Down\n|/ State=Normal/Leaving/Joining/Moving\n--  Address     Load       Tokens       Owns (effective)  Host ID                               Rack\nUN  172.17.0.2  103.67 KiB  256          100.0%            af0e4b2f-84e0-4f0b-bb14-bd5f9070ff26  rack1\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"create-keyspace-and-table",children:"Create keyspace and table"}),"\n",(0,i.jsxs)(n.p,{children:["We are using ",(0,i.jsx)(n.code,{children:"cqlsh"})," to connect to the cassandra cluster to create keyspace and table."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\n$ docker exec -ti cassandra cqlsh localhost\nConnected to Test Cluster at localhost:9042.\n[cqlsh 5.0.1 | Cassandra 3.11.2 | CQL spec 3.4.4 | Native protocol v4]\nUse HELP for help.\ncqlsh>\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["All the following commands are executed in ",(0,i.jsx)(n.code,{children:"cqlsh"}),"."]}),"\n",(0,i.jsxs)(n.h4,{id:"create-keyspace-pulsar_test_keyspace",children:["Create keyspace ",(0,i.jsx)(n.code,{children:"pulsar_test_keyspace"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\ncqlsh> CREATE KEYSPACE pulsar_test_keyspace WITH replication = {'class':'SimpleStrategy', 'replication_factor':1};\n\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"create-table-pulsar_test_table",children:["Create table ",(0,i.jsx)(n.code,{children:"pulsar_test_table"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\ncqlsh> USE pulsar_test_keyspace;\ncqlsh:pulsar_test_keyspace> CREATE TABLE pulsar_test_table (key text PRIMARY KEY, col text);\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"configure-a-cassandra-sink",children:"Configure a Cassandra sink"}),"\n",(0,i.jsx)(n.p,{children:"Now that we have a Cassandra cluster running locally. In this section, we will configure a Cassandra sink connector.\nThe Cassandra sink connector will read messages from a Pulsar topic and write the messages into a Cassandra table."}),"\n",(0,i.jsx)(n.p,{children:"In order to run a Cassandra sink connector, you need to prepare a yaml config file including information that Pulsar IO\nruntime needs to know. For example, how Pulsar IO can find the cassandra cluster, what is the keyspace and table that\nPulsar IO will be using for writing Pulsar messages to."}),"\n",(0,i.jsxs)(n.p,{children:["Create a file ",(0,i.jsx)(n.code,{children:"examples/cassandra-sink.yml"})," and edit it to fill in following content:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'\nconfigs:\n    roots: "localhost:9042"\n    keyspace: "pulsar_test_keyspace"\n    columnFamily: "pulsar_test_table"\n    keyname: "key"\n    columnName: "col"\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about Cassandra Connector, see ",(0,i.jsx)(n.a,{href:"/docs/2.4.2/io-cassandra",children:"Cassandra Connector"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"submit-a-cassandra-sink",children:"Submit a Cassandra sink"}),"\n",(0,i.jsxs)(n.p,{children:["Pulsar provides the ",(0,i.jsx)(n.a,{href:"/docs/2.4.2/reference-cli-tools",children:"CLI"})," for running and managing Pulsar I/O connectors."]}),"\n",(0,i.jsxs)(n.p,{children:["We can run following command to sink a sink connector with type ",(0,i.jsx)(n.code,{children:"cassandra"})," and config file ",(0,i.jsx)(n.code,{children:"examples/cassandra-sink.yml"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"note",children:"Note"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"sink-type"})," parameter of the currently built-in connectors is determined by the setting of the ",(0,i.jsx)(n.code,{children:"name"})," parameter specified in the pulsar-io.yaml file."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\nbin/pulsar-admin sinks create \\\n    --tenant public \\\n    --namespace default \\\n    --name cassandra-test-sink \\\n    --sink-type cassandra \\\n    --sink-config-file examples/cassandra-sink.yml \\\n    --inputs test_cassandra\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once the command is executed, Pulsar will create a sink connector named ",(0,i.jsx)(n.code,{children:"cassandra-test-sink"})," and the sink connector will be running\nas a Pulsar Function and write the messages produced in topic ",(0,i.jsx)(n.code,{children:"test_cassandra"})," to Cassandra table ",(0,i.jsx)(n.code,{children:"pulsar_test_table"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"inspect-the-cassandra-sink",children:"Inspect the Cassandra sink"}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.a,{href:"/docs/2.4.2/reference-pulsar-admin#sink",children:"sink CLI"})," and ",(0,i.jsx)(n.a,{href:"/docs/2.4.2/reference-pulsar-admin#source",children:"source CLI"}),"\nfor inspecting and managing the IO connectors."]}),"\n",(0,i.jsx)(n.h4,{id:"retrieve-sink-info",children:"Retrieve Sink Info"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar-admin sinks get \\\n    --tenant public \\\n    --namespace default \\\n    --name cassandra-test-sink\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'\n{\n  "tenant": "public",\n  "namespace": "default",\n  "name": "cassandra-test-sink",\n  "className": "org.apache.pulsar.io.cassandra.CassandraStringSink",\n  "inputSpecs": {\n    "test_cassandra": {\n      "isRegexPattern": false\n    }\n  },\n  "configs": {\n    "roots": "localhost:9042",\n    "keyspace": "pulsar_test_keyspace",\n    "columnFamily": "pulsar_test_table",\n    "keyname": "key",\n    "columnName": "col"\n  },\n  "parallelism": 1,\n  "processingGuarantees": "ATLEAST_ONCE",\n  "retainOrdering": false,\n  "autoAck": true,\n  "archive": "builtin://cassandra"\n}\n\n'})}),"\n",(0,i.jsx)(n.h4,{id:"check-sink-running-status",children:"Check Sink running status"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar-admin sinks status \\\n    --tenant public \\\n    --namespace default \\\n    --name cassandra-test-sink\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'\n{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReadFromPulsar" : 0,\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "numSinkExceptions" : 0,\n      "latestSinkExceptions" : [ ],\n      "numWrittenToSink" : 0,\n      "lastReceivedTime" : 0,\n      "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"verify-the-cassandra-sink",children:"Verify the Cassandra sink"}),"\n",(0,i.jsxs)(n.p,{children:["Now lets produce some messages to the input topic of the Cassandra sink ",(0,i.jsx)(n.code,{children:"test_cassandra"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'\nfor i in {0..9}; do bin/pulsar-client produce -m "key-$i" -n 1 test_cassandra; done\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"Inspect the sink running status again. You should be able to see 10 messages are processed by the Cassandra sink."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar-admin sinks status \\\n    --tenant public \\\n    --namespace default \\\n    --name cassandra-test-sink\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Example output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'\n{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReadFromPulsar" : 10,\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "numSinkExceptions" : 0,\n      "latestSinkExceptions" : [ ],\n      "numWrittenToSink" : 10,\n      "lastReceivedTime" : 1551685489136,\n      "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, lets inspect the results in Cassandra using ",(0,i.jsx)(n.code,{children:"cqlsh"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\ndocker exec -ti cassandra cqlsh localhost\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Select the rows from the Cassandra table ",(0,i.jsx)(n.code,{children:"pulsar_test_table"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\ncqlsh> use pulsar_test_keyspace;\ncqlsh:pulsar_test_keyspace> select * from pulsar_test_table;\n\n key    | col\n--------+--------\n  key-5 |  key-5\n  key-0 |  key-0\n  key-9 |  key-9\n  key-2 |  key-2\n  key-1 |  key-1\n  key-3 |  key-3\n  key-6 |  key-6\n  key-7 |  key-7\n  key-4 |  key-4\n  key-8 |  key-8\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"delete-the-cassandra-sink",children:"Delete the Cassandra Sink"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\nbin/pulsar-admin sinks delete \\\n    --tenant public \\\n    --namespace default \\\n    --name cassandra-test-sink\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"connect-pulsar-to-mysql",children:"Connect Pulsar to MySQL"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Make sure you have Docker available at your computer. If you don't have Docker installed, follow the instructions ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/docker-for-mac/install/",children:"here"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"setup-a-mysql-cluster",children:"Setup a MySQL cluster"}),"\n",(0,i.jsx)(n.p,{children:"Use the MySQL 5.7 docker image to start a single-node MySQL cluster in Docker."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Pull the MySQL 5.7 image from Docker Hub."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\n$ docker pull mysql:5.7\n\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Start MySQL."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\n$ docker run -d -it --rm \\\n--name pulsar-mysql \\\n-p 3306:3306 \\\n-e MYSQL_ROOT_PASSWORD=jdbc \\\n-e MYSQL_USER=mysqluser \\\n-e MYSQL_PASSWORD=mysqlpw \\\nmysql:5.7\n\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"Flag | Description | This example"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["| - | -\n",(0,i.jsx)(n.code,{children:"-d"})," | To start a container in detached mode. | /\n",(0,i.jsx)(n.code,{children:"-it"})," | Keep STDIN open even if not attached and allocate a terminal. | /\n",(0,i.jsx)(n.code,{children:"--rm"})," | Remove the container automatically when it exits. | /\n",(0,i.jsx)(n.code,{children:"-name"})," | Assign a name to the container. | This example specifies ",(0,i.jsx)(n.em,{children:"pulsar-mysql"})," for the container.\n",(0,i.jsx)(n.code,{children:"-p"})," | Publish the port of the container to the host. | This example publishes the port ",(0,i.jsx)(n.em,{children:"3306"})," of the container to the host.\n",(0,i.jsx)(n.code,{children:"-e"})," | Set environment variables. | This example sets the following variables:",(0,i.jsx)("br",{}),"- The password for the root user is ",(0,i.jsx)(n.em,{children:"jdbc"}),". ",(0,i.jsx)("br",{}),"- The name for the normal user is ",(0,i.jsx)(n.em,{children:"mysqluser"}),". ",(0,i.jsx)("br",{}),"- The password for the normal user is ",(0,i.jsx)(n.em,{children:"mysqlpw"}),".\nFor more information about Docker command, see ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/commandline/run/",children:"here"}),"."]}),"\n"]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check if MySQL has been started successfully."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\n$ docker logs -f pulsar-mysql\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"MySQL has been started successfully if the following message appears."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\n2019-05-11T10:40:58.709964Z 0 [Note] Found ca.pem, server-cert.pem and server-key.pem in data directory. Trying to enable SSL support using them.\n2019-05-11T10:40:58.710155Z 0 [Warning] CA certificate ca.pem is self signed.\n2019-05-11T10:40:58.711921Z 0 [Note] Server hostname (bind-address): '*'; port: 3306\n2019-05-11T10:40:58.711985Z 0 [Note] IPv6 is available.\n2019-05-11T10:40:58.712695Z 0 [Note]   - '::' resolves to '::';\n2019-05-11T10:40:58.712742Z 0 [Note] Server socket created on IP: '::'.\n2019-05-11T10:40:58.714334Z 0 [Warning] Insecure configuration for --pid-file: Location '/var/run/mysqld' in the path is accessible to all OS users. Consider choosing a different directory.\n2019-05-11T10:40:58.723802Z 0 [Note] Event Scheduler: Loaded 0 events\n2019-05-11T10:40:58.724200Z 0 [Note] mysqld: ready for connections.\nVersion: '5.7.26'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server (GPL)\n\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Access to MySQL."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\n$ docker exec -it pulsar-mysql /bin/bash\nmysql -h localhost -uroot -pjdbc\n\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.em,{children:"pulsar_mysql_jdbc_sink"})," table."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\n$ create database pulsar_mysql_jdbc_sink;\n\n$ use pulsar_mysql_jdbc_sink;\n\n$ create table if not exists pulsar_mysql_jdbc_sink\n(\nid INT AUTO_INCREMENT,\nname VARCHAR(255) NOT NULL,\nprimary key (id)\n)\nengine=innodb;\n\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configure-a-jdbc-sink",children:"Configure a JDBC sink"}),"\n",(0,i.jsx)(n.p,{children:"Now that we have a MySQL running locally. In this section, we will configure a JDBC sink connector. The JDBC sink connector will read messages from a Pulsar topic and write messages into a MySQL table."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add a configuration file."}),"\n",(0,i.jsx)(n.p,{children:"To run a JDBC sink connector, you need to prepare a yaml config file including the information that Pulsar IO runtime needs to know. For example, how Pulsar IO can find the MySQL cluster, what is the JDBCURL and the table that Pulsar IO will use for writing messages to."}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.em,{children:"pulsar-mysql-jdbc-sink.yaml"})," file , copy the following contents to this file, and place the file in the ",(0,i.jsx)(n.code,{children:"pulsar/connectors"})," folder."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'\nconfigs:\n  userName: "root"\n  password: "jdbc"\n  jdbcUrl: "jdbc:mysql://127.0.0.1:3306/pulsar_mysql_jdbc_sink"\n  tableName: "pulsar_mysql_jdbc_sink"\n\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a schema."}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.em,{children:"avro-schema"})," file, copy the following contents to this file, and place the file in the ",(0,i.jsx)(n.code,{children:"pulsar/connectors"})," folder."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'\n{\n  "type": "AVRO",\n  "schema": "{\\"type\\":\\"record\\",\\"name\\":\\"Test\\",\\"fields\\":[{\\"name\\":\\"id\\",\\"type\\":[\\"null\\",\\"int\\"]},{\\"name\\":\\"name\\",\\"type\\":[\\"null\\",\\"string\\"]}]}",\n  "properties": {}\n}\n\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["For more information about AVRO, see ",(0,i.jsx)(n.a,{href:"https://avro.apache.org/docs/1.8.2/",children:"Apache Avro Documentation"}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Upload a schema to a topic."}),"\n",(0,i.jsxs)(n.p,{children:["This example uploads the ",(0,i.jsx)(n.em,{children:"avro-schema"})," schema to the ",(0,i.jsx)(n.em,{children:"pulsar-mysql-jdbc-sink-topic"})," topic."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\n$ bin/pulsar-admin schemas upload pulsar-mysql-jdbc-sink-topic -f ./connectors/avro-schema\n\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check if the schema has been uploaded successfully."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\n$ bin/pulsar-admin schemas get pulsar-mysql-jdbc-sink-topic\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"The schema has been uploaded successfully if the following message appears."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'\n{"name":"pulsar-mysql-jdbc-sink-topic","schema":"{\\"type\\":\\"record\\",\\"name\\":\\"Test\\",\\"fields\\":[{\\"name\\":\\"id\\",\\"type\\":[\\"null\\",\\"int\\"]},{\\"name\\":\\"name\\",\\"type\\":[\\"null\\",\\"string\\"]}]}","type":"AVRO","properties":{}}\n\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"submit-a-jdbc-sink",children:"Submit a JDBC sink"}),"\n",(0,i.jsxs)(n.p,{children:["Pulsar provides the ",(0,i.jsx)(n.a,{href:"/docs/2.4.2/admin-api-overview",children:"CLI"})," for running and managing Pulsar I/O connectors."]}),"\n",(0,i.jsx)(n.p,{children:"This example creates a sink connector and specifies the desired information."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\n$ bin/pulsar-admin sinks create \\\n--archive ./connectors/pulsar-io-jdbc-2.4.2.nar \\\n--inputs pulsar-mysql-jdbc-sink-topic \\\n--name pulsar-mysql-jdbc-sink \\\n--sink-config-file ./connectors/pulsar-mysql-jdbc-sink.yaml \\\n--parallelism 1\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once the command is executed, Pulsar will create a sink connector named ",(0,i.jsx)(n.em,{children:"pulsar-mysql-jdbc-sink"}),", and the sink connector will be running as a Pulsar Function and write the messages produced in the  ",(0,i.jsx)(n.em,{children:"pulsar-mysql-jdbc-sink-topic"})," topic to the MySQL ",(0,i.jsx)(n.em,{children:"pulsar_mysql_jdbc_sink"})," table."]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"Flag | Description | This example"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["| - | - |\n",(0,i.jsx)(n.code,{children:"--archive"})," | Path to the archive file for the sink. | ",(0,i.jsx)(n.em,{children:"pulsar-io-jdbc-2.4.2.nar"}),"\n",(0,i.jsx)(n.code,{children:"--inputs"})," | The input topic or topics of the sink. ",(0,i.jsx)("br",{})," (Multiple topics can be specified as a comma-separated list.)\n",(0,i.jsx)(n.code,{children:"--name"})," | The name of the sink. | ",(0,i.jsx)(n.em,{children:"pulsar-mysql-jdbc-sink"}),"\n",(0,i.jsx)(n.code,{children:"--sink-config-file"})," | The path to a YAML config file specifying the configuration of the sink. | ",(0,i.jsx)(n.em,{children:"pulsar-mysql-jdbc-sink.yaml"}),"\n",(0,i.jsx)(n.code,{children:"--parallelism"})," | The parallelism factor of the sink. ",(0,i.jsx)("br",{})," For example, the number of sink instances to run. |  ",(0,i.jsx)(n.em,{children:"1"}),"\nFor more information about ",(0,i.jsx)(n.code,{children:"pulsar-admin sinks create options"}),", see ",(0,i.jsx)(n.a,{href:"/docs/2.4.2/reference-pulsar-admin#create-3",children:"here"}),"."]}),"\n"]})]}),"\n",(0,i.jsx)(n.p,{children:"The sink has been created successfully if the following message appears."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'\n"Created successfully"\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"inspect-a-jdbc-sink",children:"Inspect a JDBC sink"}),"\n",(0,i.jsx)(n.h4,{id:"list-all-running-jdbc-sinks",children:"List all running JDBC sink(s)"}),"\n",(0,i.jsx)(n.p,{children:"This example lists all running sink connectors."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\n$ bin/pulsar-admin sinks list \\\n--tenant public \\\n--namespace default\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The result shows that only the ",(0,i.jsx)(n.em,{children:"mysql-jdbc-sink"})," sink is running."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'\n[\n "pulsar-mysql-jdbc-sink"\n]\n\n'})}),"\n",(0,i.jsx)(n.h4,{id:"get-information-of-a-jdbc-sink",children:"Get information of a JDBC sink"}),"\n",(0,i.jsxs)(n.p,{children:["This example gets the information about the ",(0,i.jsx)(n.em,{children:"pulsar-mysql-jdbc-sink"})," sink connector."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\n$ bin/pulsar-admin sinks get \\\n--tenant public \\\n--namespace default \\\n--name pulsar-mysql-jdbc-sink\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"The result show the information of the sink connector, including tenant, namespace, topic and so on."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'\n{\n  "tenant": "public",\n  "namespace": "default",\n  "name": "pulsar-mysql-jdbc-sink",\n  "className": "org.apache.pulsar.io.jdbc.JdbcAutoSchemaSink",\n  "inputSpecs": {\n    "pulsar-mysql-jdbc-sink-topic": {\n      "isRegexPattern": false\n    }\n  },\n  "configs": {\n    "password": "jdbc",\n    "jdbcUrl": "jdbc:mysql://127.0.0.1:3306/pulsar_mysql_jdbc_sink",\n    "userName": "root",\n    "tableName": "pulsar_mysql_jdbc_sink"\n  },\n  "parallelism": 1,\n  "processingGuarantees": "ATLEAST_ONCE",\n  "retainOrdering": false,\n  "autoAck": true\n}\n\n'})}),"\n",(0,i.jsx)(n.h4,{id:"get-status-of-a-jdbc-sink",children:"Get status of a JDBC sink"}),"\n",(0,i.jsxs)(n.p,{children:["This example checks the current status of the ",(0,i.jsx)(n.em,{children:"pulsar-mysql-jdbc-sink"})," sink connector."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\n$ bin/pulsar-admin sinks status \\\n--tenant public \\\n--namespace default \\\n--name pulsar-mysql-jdbc-sink\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"The result shows the current status of sink connector, including the number of instance, running status, worker ID and so on."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'\n{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReadFromPulsar" : 0,\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "numSinkExceptions" : 0,\n      "latestSinkExceptions" : [ ],\n      "numWrittenToSink" : 0,\n      "lastReceivedTime" : 0,\n      "workerId" : "c-standalone-fw-192.168.2.52-8080"\n    }\n  } ]\n}\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"stop-a-jdbc-sink",children:"Stop a JDBC sink"}),"\n",(0,i.jsxs)(n.p,{children:["This example stops the ",(0,i.jsx)(n.em,{children:"pulsar-mysql-jdbc-sink"})," sink instance."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\n$ bin/pulsar-admin sinks stop \\\n--tenant public \\\n--namespace default \\\n--name pulsar-mysql-jdbc-sink \\\n--instance-id 0\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"The sink instance has been stopped successfully if the following message disappears."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'\n"Stopped successfully"\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"restart-a-jdbc-sink",children:"Restart a JDBC sink"}),"\n",(0,i.jsxs)(n.p,{children:["This example starts the ",(0,i.jsx)(n.em,{children:"pulsar-mysql-jdbc-sink"})," sink instance."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\n$ bin/pulsar-admin sinks start \\\n--tenant public \\\n--namespace default \\\n--name pulsar-mysql-jdbc-sink \\\n--instance-id 0\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"The sink instance has been started successfully if the following message disappears."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'\n"Started successfully"\n\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Optionally, you can run a standalone sink connector using ",(0,i.jsx)(n.code,{children:"pulsar-admin sinks localrun options"}),".\nNote that ",(0,i.jsx)(n.code,{children:"pulsar-admin sinks localrun options"})," runs a sink connector locally, while ",(0,i.jsx)(n.code,{children:"pulsar-admin sinks start options"})," starts a sink connector in a cluster.\nFor more information about ",(0,i.jsx)(n.code,{children:"pulsar-admin sinks localrun options"}),", see ",(0,i.jsx)(n.a,{href:"/docs/2.4.2/reference-pulsar-admin#localrun-1",children:"here"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"update-a-jdbc-sink",children:"Update a JDBC sink"}),"\n",(0,i.jsxs)(n.p,{children:["This example updates the parallelism of the ",(0,i.jsx)(n.em,{children:"pulsar-mysql-jdbc-sink"})," sink connector to 2."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\n$ bin/pulsar-admin sinks update \\\n--name pulsar-mysql-jdbc-sink \\\n--parallelism 2\n\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["For more information about ",(0,i.jsx)(n.code,{children:"pulsar-admin sinks update options"}),", see ",(0,i.jsx)(n.a,{href:"/docs/2.4.2/reference-pulsar-admin#update-2",children:"here"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"The sink connector has been updated successfully if the following message disappears."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'\n"Updated successfully"\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"This example double-checks the information."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\n$ bin/pulsar-admin sinks get \\\n--tenant public \\\n--namespace default \\\n--name pulsar-mysql-jdbc-sink\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"The result shows that the parallelism is 2."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'\n{\n  "tenant": "public",\n  "namespace": "default",\n  "name": "pulsar-mysql-jdbc-sink",\n  "className": "org.apache.pulsar.io.jdbc.JdbcAutoSchemaSink",\n  "inputSpecs": {\n    "pulsar-mysql-jdbc-sink-topic": {\n      "isRegexPattern": false\n    }\n  },\n  "configs": {\n    "password": "jdbc",\n    "jdbcUrl": "jdbc:mysql://127.0.0.1:3306/pulsar_mysql_jdbc_sink",\n    "userName": "root",\n    "tableName": "pulsar_mysql_jdbc_sink"\n  },\n  "parallelism": 2,\n  "processingGuarantees": "ATLEAST_ONCE",\n  "retainOrdering": false,\n  "autoAck": true\n}\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"delete-a-jdbc-sink",children:"Delete a JDBC sink"}),"\n",(0,i.jsxs)(n.p,{children:["This example deletes the ",(0,i.jsx)(n.em,{children:"pulsar-mysql-jdbc-sink"})," sink connector."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\n$ bin/pulsar-admin sinks delete \\\n--tenant public \\\n--namespace default \\\n--name pulsar-mysql-jdbc-sink\n\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["For more information about ",(0,i.jsx)(n.code,{children:"pulsar-admin sinks delete options"}),", see ",(0,i.jsx)(n.a,{href:"/docs/2.4.2/reference-pulsar-admin#delete-4",children:"here"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"The sink connector has been deleted successfully if the following message appears."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'\n"Deleted successfully"\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"This example double-checks the existence of the sink connector."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\n$ bin/pulsar-admin sinks get \\\n--tenant public \\\n--namespace default \\\n--name pulsar-mysql-jdbc-sink\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"The results shows that the sink connector does not exist."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\nHTTP 404 Not Found\n\nReason: Sink pulsar-mysql-jdbc-sink doesn't exist\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>t});var a=s(96540);const i={},l=a.createContext(i);function r(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);