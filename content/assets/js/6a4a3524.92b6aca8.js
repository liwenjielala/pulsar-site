"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[22175],{75556:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"io-quickstart","title":"Tutorial: Connecting Pulsar with Apache Cassandra","description":"This tutorial provides a hands-on look at how you can move data out of Pulsar without writing a single line of code.","source":"@site/versioned_docs/version-2.3.1/io-quickstart.md","sourceDirName":".","slug":"/io-quickstart","permalink":"/docs/2.3.1/io-quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.1/io-quickstart.md","tags":[],"version":"2.3.1","frontMatter":{"id":"io-quickstart","title":"Tutorial: Connecting Pulsar with Apache Cassandra","sidebar_label":"Getting started","original_id":"io-quickstart"},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/docs/2.3.1/io-overview"},"next":{"title":"Managing Connectors","permalink":"/docs/2.3.1/io-managing"}}');var r=s(74848),t=s(28453);const l={id:"io-quickstart",title:"Tutorial: Connecting Pulsar with Apache Cassandra",sidebar_label:"Getting started",original_id:"io-quickstart"},i=void 0,c={},o=[{value:"Installing Pulsar",id:"installing-pulsar",level:2},{value:"Installing Builtin Connectors",id:"installing-builtin-connectors",level:2},{value:"Start Pulsar Service",id:"start-pulsar-service",level:2},{value:"Connect Pulsar to Apache Cassandra",id:"connect-pulsar-to-apache-cassandra",level:2},{value:"Setup the Cassandra Cluster",id:"setup-the-cassandra-cluster",level:3},{value:"Start a Cassandra Cluster",id:"start-a-cassandra-cluster",level:4},{value:"Create keyspace and table",id:"create-keyspace-and-table",level:4},{value:"Create keyspace <code>pulsar_test_keyspace</code>",id:"create-keyspace-pulsar_test_keyspace",level:5},{value:"Create table <code>pulsar_test_table</code>",id:"create-table-pulsar_test_table",level:4},{value:"Configure a Cassandra Sink",id:"configure-a-cassandra-sink",level:3},{value:"Submit a Cassandra Sink",id:"submit-a-cassandra-sink",level:3},{value:"Note",id:"note",level:4},{value:"Inspect the Cassandra Sink",id:"inspect-the-cassandra-sink",level:3},{value:"Retrieve Sink Info",id:"retrieve-sink-info",level:4},{value:"Check Sink Running Status",id:"check-sink-running-status",level:4},{value:"Verify the Cassandra Sink",id:"verify-the-cassandra-sink",level:3},{value:"Delete the Cassandra Sink",id:"delete-the-cassandra-sink",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This tutorial provides a hands-on look at how you can move data out of Pulsar without writing a single line of code.\nIt is helpful to review the ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/io-overview",children:"concepts"})," for Pulsar I/O in tandem with running the steps in this guide\nto gain a deeper understanding. At the end of this tutorial, you will be able to:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Connect your Pulsar cluster with your Cassandra cluster"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["These instructions assume you are running Pulsar in ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/getting-started-standalone",children:"standalone mode"}),". However all\nthe commands used in this tutorial should be able to be used in a multi-nodes Pulsar cluster without any changes."]}),"\n",(0,r.jsx)(n.li,{children:"All the instructions are assumed to run at the root directory of a Pulsar binary distribution."}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"installing-pulsar",children:"Installing Pulsar"}),"\n",(0,r.jsx)(n.p,{children:"To get started running Pulsar, download a binary tarball release in one of the following ways:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"by clicking the link below and downloading the release from an Apache mirror:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.3.1/apache-pulsar-2.3.1-bin.tar.gz",download:!0,children:"Pulsar 2.3.1 binary release"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["from the Pulsar ",(0,r.jsx)(n.a,{href:"/download",children:"downloads page"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["from the Pulsar ",(0,r.jsx)(n.a,{href:"https://github.com/apache/pulsar/releases/latest",children:"releases page"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["using ",(0,r.jsx)(n.a,{href:"https://www.gnu.org/software/wget",children:"wget"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.3.1/apache-pulsar-2.3.1-bin.tar.gz\n\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Once the tarball is downloaded, untar it and ",(0,r.jsx)(n.code,{children:"cd"})," into the resulting directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n$ tar xvfz apache-pulsar-2.3.1-bin.tar.gz\n$ cd apache-pulsar-2.3.1\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"installing-builtin-connectors",children:"Installing Builtin Connectors"}),"\n",(0,r.jsxs)(n.p,{children:["Since release ",(0,r.jsx)(n.code,{children:"2.3.0"}),", Pulsar releases all the ",(0,r.jsx)(n.code,{children:"builtin"})," connectors as individual archives.\nIf you would like to enable those ",(0,r.jsx)(n.code,{children:"builtin"}),' connectors, you can download the connectors "NAR"\narchives and from the Pulsar ',(0,r.jsx)(n.a,{href:"/download",children:"downloads page"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["After downloading the desired builtin connectors, these archives should be places under\nthe ",(0,r.jsx)(n.code,{children:"connectors"})," directory where you have unpacked the Pulsar distribution."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n# Unpack regular Pulsar tarball and copy connectors NAR archives\n$ tar xvfz /path/to/apache-pulsar-2.3.1-bin.tar.gz\n$ cd apache-pulsar-2.3.1\n$ mkdir connectors\n$ cp -r /path/to/downloaded/connectors/*.nar ./connectors\n\n$ ls connectors\npulsar-io-aerospike-2.3.1.nar\npulsar-io-cassandra-2.3.1.nar\npulsar-io-kafka-2.3.1.nar\npulsar-io-kinesis-2.3.1.nar\npulsar-io-rabbitmq-2.3.1.nar\npulsar-io-twitter-2.3.1.nar\n...\n\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["You can also use the Docker image ",(0,r.jsx)(n.code,{children:"apachepulsar/pulsar-all:2.3.1"})," which already\ncomes with all the available builtin connectors."]})}),"\n",(0,r.jsx)(n.h2,{id:"start-pulsar-service",children:"Start Pulsar Service"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar standalone\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"All the components of a Pulsar service will start in order. You can curl those pulsar service endpoints to make sure Pulsar service is up running correctly."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Check pulsar binary protocol port."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ntelnet localhost 6650\n\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Check pulsar function cluster"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ncurl -s http://localhost:8080/admin/v2/worker/cluster\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'\n[{"workerId":"c-standalone-fw-localhost-6750","workerHostname":"localhost","port":6750}]\n\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Make sure public tenant and default namespace exist"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ncurl -s http://localhost:8080/admin/v2/namespaces/public\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example outoupt:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'\n["public/default","public/functions"]\n\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"All builtin connectors should be listed as available."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ncurl -s http://localhost:8080/admin/v2/functions/connectors\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'\n[{"name":"aerospike","description":"Aerospike database sink","sinkClass":"org.apache.pulsar.io.aerospike.AerospikeStringSink"},{"name":"cassandra","description":"Writes data into Cassandra","sinkClass":"org.apache.pulsar.io.cassandra.CassandraStringSink"},{"name":"kafka","description":"Kafka source and sink connector","sourceClass":"org.apache.pulsar.io.kafka.KafkaStringSource","sinkClass":"org.apache.pulsar.io.kafka.KafkaBytesSink"},{"name":"kinesis","description":"Kinesis sink connector","sinkClass":"org.apache.pulsar.io.kinesis.KinesisSink"},{"name":"rabbitmq","description":"RabbitMQ source connector","sourceClass":"org.apache.pulsar.io.rabbitmq.RabbitMQSource"},{"name":"twitter","description":"Ingest data from Twitter firehose","sourceClass":"org.apache.pulsar.io.twitter.TwitterFireHose"}]\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If an error occurred while starting Pulsar service, you may be able to seen exception at the terminal you are running ",(0,r.jsx)(n.code,{children:"pulsar/standalone"}),",\nor you can navigate the ",(0,r.jsx)(n.code,{children:"logs"})," directory under the Pulsar directory to view the logs."]}),"\n",(0,r.jsx)(n.h2,{id:"connect-pulsar-to-apache-cassandra",children:"Connect Pulsar to Apache Cassandra"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Make sure you have docker available at your laptop. If you don't have docker installed, you can follow the ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/docker-for-mac/install/",children:"instructions"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["We are using ",(0,r.jsx)(n.code,{children:"cassandra"})," docker image to start a single-node cassandra cluster in Docker."]}),"\n",(0,r.jsx)(n.h3,{id:"setup-the-cassandra-cluster",children:"Setup the Cassandra Cluster"}),"\n",(0,r.jsx)(n.h4,{id:"start-a-cassandra-cluster",children:"Start a Cassandra Cluster"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ndocker run -d --rm --name=cassandra -p 9042:9042 cassandra:3.11\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Before moving to next steps, make sure the cassandra cluster is up running."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Make sure the docker process is running."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ndocker ps\n\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Check the cassandra logs to make sure cassandra process is running as expected."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ndocker logs cassandra\n\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Check the cluster status"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ndocker exec cassandra nodetool status\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\nDatacenter: datacenter1\n=======================\nStatus=Up/Down\n|/ State=Normal/Leaving/Joining/Moving\n--  Address     Load       Tokens       Owns (effective)  Host ID                               Rack\nUN  172.17.0.2  103.67 KiB  256          100.0%            af0e4b2f-84e0-4f0b-bb14-bd5f9070ff26  rack1\n\n"})}),"\n",(0,r.jsx)(n.h4,{id:"create-keyspace-and-table",children:"Create keyspace and table"}),"\n",(0,r.jsxs)(n.p,{children:["We are using ",(0,r.jsx)(n.code,{children:"cqlsh"})," to connect to the cassandra cluster to create keyspace and table."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n$ docker exec -ti cassandra cqlsh localhost\nConnected to Test Cluster at localhost:9042.\n[cqlsh 5.0.1 | Cassandra 3.11.2 | CQL spec 3.4.4 | Native protocol v4]\nUse HELP for help.\ncqlsh>\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["All the following commands are executed in ",(0,r.jsx)(n.code,{children:"cqlsh"}),"."]}),"\n",(0,r.jsxs)(n.h5,{id:"create-keyspace-pulsar_test_keyspace",children:["Create keyspace ",(0,r.jsx)(n.code,{children:"pulsar_test_keyspace"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ncqlsh> CREATE KEYSPACE pulsar_test_keyspace WITH replication = {'class':'SimpleStrategy', 'replication_factor':1};\n\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"create-table-pulsar_test_table",children:["Create table ",(0,r.jsx)(n.code,{children:"pulsar_test_table"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ncqlsh> USE pulsar_test_keyspace;\ncqlsh:pulsar_test_keyspace> CREATE TABLE pulsar_test_table (key text PRIMARY KEY, col text);\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"configure-a-cassandra-sink",children:"Configure a Cassandra Sink"}),"\n",(0,r.jsx)(n.p,{children:"Now that we have a Cassandra cluster running locally. In this section, we will configure a Cassandra sink connector.\nThe Cassandra sink connector will read messages from a Pulsar topic and write the messages into a Cassandra table."}),"\n",(0,r.jsx)(n.p,{children:"In order to run a Cassandra sink connector, you need to prepare a yaml config file including informations that Pulsar IO\nruntime needs to know. For example, how Pulsar IO can find the cassandra cluster, what is the keyspace and table that\nPulsar IO will be using for writing Pulsar messages to."}),"\n",(0,r.jsxs)(n.p,{children:["Create a file ",(0,r.jsx)(n.code,{children:"examples/cassandra-sink.yml"})," and edit it to fill in following content:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'\nconfigs:\n    roots: "localhost:9042"\n    keyspace: "pulsar_test_keyspace"\n    columnFamily: "pulsar_test_table"\n    keyname: "key"\n    columnName: "col"\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["To learn more about Cassandra Connector, see ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/io-cassandra",children:"Cassandra Connector"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"submit-a-cassandra-sink",children:"Submit a Cassandra Sink"}),"\n",(0,r.jsxs)(n.p,{children:["Pulsar provides the ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/reference-cli-tools",children:"CLI"})," for running and managing Pulsar I/O connectors."]}),"\n",(0,r.jsxs)(n.p,{children:["We can run following command to sink a sink connector with type ",(0,r.jsx)(n.code,{children:"cassandra"})," and config file ",(0,r.jsx)(n.code,{children:"examples/cassandra-sink.yml"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"note",children:"Note"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"sink-type"})," parameter of the currently built-in connectors is determined by the setting of the ",(0,r.jsx)(n.code,{children:"name"})," parameter specified in the pulsar-io.yaml file."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\nbin/pulsar-admin sink create \\\n    --tenant public \\\n    --namespace default \\\n    --name cassandra-test-sink \\\n    --sink-type cassandra \\\n    --sink-config-file examples/cassandra-sink.yml \\\n    --inputs test_cassandra\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Once the command is executed, Pulsar will create a sink connector named ",(0,r.jsx)(n.code,{children:"cassandra-test-sink"})," and the sink connector will be running\nas a Pulsar Function and write the messages produced in topic ",(0,r.jsx)(n.code,{children:"test_cassandra"})," to Cassandra table ",(0,r.jsx)(n.code,{children:"pulsar_test_table"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"inspect-the-cassandra-sink",children:"Inspect the Cassandra Sink"}),"\n",(0,r.jsxs)(n.p,{children:["You can use ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/reference-pulsar-admin#sink",children:"sink CLI"})," and ",(0,r.jsx)(n.a,{href:"/docs/2.3.1/reference-pulsar-admin#source",children:"source CLI"}),"\nfor inspecting and managing the IO connectors."]}),"\n",(0,r.jsx)(n.h4,{id:"retrieve-sink-info",children:"Retrieve Sink Info"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar-admin sink get \\\n    --tenant public \\\n    --namespace default \\\n    --name cassandra-test-sink\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'\n{\n  "tenant": "public",\n  "namespace": "default",\n  "name": "cassandra-test-sink",\n  "className": "org.apache.pulsar.io.cassandra.CassandraStringSink",\n  "inputSpecs": {\n    "test_cassandra": {\n      "isRegexPattern": false\n    }\n  },\n  "configs": {\n    "roots": "localhost:9042",\n    "keyspace": "pulsar_test_keyspace",\n    "columnFamily": "pulsar_test_table",\n    "keyname": "key",\n    "columnName": "col"\n  },\n  "parallelism": 1,\n  "processingGuarantees": "ATLEAST_ONCE",\n  "retainOrdering": false,\n  "autoAck": true,\n  "archive": "builtin://cassandra"\n}\n\n'})}),"\n",(0,r.jsx)(n.h4,{id:"check-sink-running-status",children:"Check Sink Running Status"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar-admin sink status \\\n    --tenant public \\\n    --namespace default \\\n    --name cassandra-test-sink\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'\n{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReadFromPulsar" : 0,\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "numSinkExceptions" : 0,\n      "latestSinkExceptions" : [ ],\n      "numWrittenToSink" : 0,\n      "lastReceivedTime" : 0,\n      "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"verify-the-cassandra-sink",children:"Verify the Cassandra Sink"}),"\n",(0,r.jsxs)(n.p,{children:["Now lets produce some messages to the input topic of the Cassandra sink ",(0,r.jsx)(n.code,{children:"test_cassandra"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'\nfor i in {0..9}; do bin/pulsar-client produce -m "key-$i" -n 1 test_cassandra; done\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"Inspect the sink running status again. You should be able to see 10 messages are processed by the Cassandra sink."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar-admin sink status \\\n    --tenant public \\\n    --namespace default \\\n    --name cassandra-test-sink\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'\n{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReadFromPulsar" : 10,\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "numSinkExceptions" : 0,\n      "latestSinkExceptions" : [ ],\n      "numWrittenToSink" : 10,\n      "lastReceivedTime" : 1551685489136,\n      "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Finally, lets inspect the results in Cassandra using ",(0,r.jsx)(n.code,{children:"cqlsh"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ndocker exec -ti cassandra cqlsh localhost\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Select the rows from the Cassandra table ",(0,r.jsx)(n.code,{children:"pulsar_test_table"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ncqlsh> use pulsar_test_keyspace;\ncqlsh:pulsar_test_keyspace> select * from pulsar_test_table;\n\n key    | col\n--------+--------\n  key-5 |  key-5\n  key-0 |  key-0\n  key-9 |  key-9\n  key-2 |  key-2\n  key-1 |  key-1\n  key-3 |  key-3\n  key-6 |  key-6\n  key-7 |  key-7\n  key-4 |  key-4\n  key-8 |  key-8\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"delete-the-cassandra-sink",children:"Delete the Cassandra Sink"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\nbin/pulsar-admin sink delete \\\n    --tenant public \\\n    --namespace default \\\n    --name cassandra-test-sink\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var a=s(96540);const r={},t=a.createContext(r);function l(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);