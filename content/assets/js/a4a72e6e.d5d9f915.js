"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[17484],{2475:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>t,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"io-connectors","title":"Built-in connector","description":"Learn configuration, examples, and Java classes of Pulsar IO connectors.","source":"@site/docs/io-connectors.md","sourceDirName":".","slug":"/io-connectors","permalink":"/docs/next/io-connectors","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/docs/io-connectors.md","tags":[],"version":"current","frontMatter":{"id":"io-connectors","title":"Built-in connector","sidebar_label":"Built-in connector","description":"Learn configuration, examples, and Java classes of Pulsar IO connectors."},"sidebar":"docsSidebar","previous":{"title":"Debug","permalink":"/docs/next/io-debug"},"next":{"title":"CDC connector","permalink":"/docs/next/io-cdc"}}');var a=i(74848),r=i(28453);const l={id:"io-connectors",title:"Built-in connector",sidebar_label:"Built-in connector",description:"Learn configuration, examples, and Java classes of Pulsar IO connectors."},c=void 0,o={},h=[{value:"Source connector",id:"source-connector",level:2},{value:"Canal",id:"canal",level:3},{value:"Debezium MySQL",id:"debezium-mysql",level:3},{value:"Debezium PostgreSQL",id:"debezium-postgresql",level:3},{value:"Debezium MongoDB",id:"debezium-mongodb",level:3},{value:"Debezium Oracle",id:"debezium-oracle",level:3},{value:"Debezium Microsoft SQL Server",id:"debezium-microsoft-sql-server",level:3},{value:"DynamoDB",id:"dynamodb",level:3},{value:"File",id:"file",level:3},{value:"Flume",id:"flume",level:3},{value:"Twitter firehose",id:"twitter-firehose",level:3},{value:"Kafka",id:"kafka",level:3},{value:"Kinesis",id:"kinesis",level:3},{value:"MongoDB",id:"mongodb",level:3},{value:"Netty",id:"netty",level:3},{value:"NSQ",id:"nsq",level:3},{value:"RabbitMQ",id:"rabbitmq",level:3},{value:"Sink connector",id:"sink-connector",level:2},{value:"Aerospike",id:"aerospike",level:3},{value:"Alluxio",id:"alluxio",level:3},{value:"Azure Data Explorer",id:"azure-data-explorer",level:3},{value:"Cassandra",id:"cassandra",level:3},{value:"ElasticSearch",id:"elasticsearch",level:3},{value:"Flume",id:"flume-1",level:3},{value:"HBase",id:"hbase",level:3},{value:"HDFS2",id:"hdfs2",level:3},{value:"HDFS3",id:"hdfs3",level:3},{value:"HTTP",id:"http",level:3},{value:"InfluxDB",id:"influxdb",level:3},{value:"JDBC ClickHouse",id:"jdbc-clickhouse",level:3},{value:"JDBC MariaDB",id:"jdbc-mariadb",level:3},{value:"JDBC OpenMLDB",id:"jdbc-openmldb",level:3},{value:"JDBC PostgreSQL",id:"jdbc-postgresql",level:3},{value:"JDBC SQLite",id:"jdbc-sqlite",level:3},{value:"Kafka",id:"kafka-1",level:3},{value:"Kinesis",id:"kinesis-1",level:3},{value:"MongoDB",id:"mongodb-1",level:3},{value:"RabbitMQ",id:"rabbitmq-1",level:3},{value:"Redis",id:"redis",level:3},{value:"Solr",id:"solr",level:3}];function d(n){const e={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"Pulsar distribution includes a set of common connectors that have been packaged and tested with the rest of Apache Pulsar. These built-in connectors import and export data from some of the most commonly used data systems."}),"\n",(0,a.jsx)(e.p,{children:"Using any of these built-in connectors is as easy as writing a simple connector and running the connector locally or submitting the connector to a Pulsar Functions cluster."}),"\n",(0,a.jsx)(e.h2,{id:"source-connector",children:"Source connector"}),"\n",(0,a.jsx)(e.p,{children:"Pulsar has various source connectors, which are sorted alphabetically as below."}),"\n",(0,a.jsx)(e.h3,{id:"canal",children:"Canal"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-canal-source#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-canal-source#usage",children:"Example"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/canal/src/main/java/org/apache/pulsar/io/canal/CanalStringSource.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"debezium-mysql",children:"Debezium MySQL"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-debezium-source#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-debezium-source#example-of-mysql",children:"Example"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/mysql/src/main/java/org/apache/pulsar/io/debezium/mysql/DebeziumMysqlSource.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"debezium-postgresql",children:"Debezium PostgreSQL"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-debezium-source#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-debezium-source#example-of-postgresql",children:"Example"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/postgres/src/main/java/org/apache/pulsar/io/debezium/postgres/DebeziumPostgresSource.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"debezium-mongodb",children:"Debezium MongoDB"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-debezium-source#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-debezium-source#example-of-mongodb",children:"Example"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/mongodb/src/main/java/org/apache/pulsar/io/debezium/mongodb/DebeziumMongoDbSource.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"debezium-oracle",children:"Debezium Oracle"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-debezium-source#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-debezium-source#example-of-oracle",children:"Example"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/oracle/src/main/java/org/apache/pulsar/io/debezium/oracle/DebeziumOracleSource.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"debezium-microsoft-sql-server",children:"Debezium Microsoft SQL Server"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-debezium-source#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-debezium-source#example-of-microsoft-sql",children:"Example"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/mssql/src/main/java/org/apache/pulsar/io/debezium/mssql/DebeziumMsSqlSource.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"dynamodb",children:"DynamoDB"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-dynamodb-source#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/dynamodb/src/main/java/org/apache/pulsar/io/dynamodb/DynamoDBSource.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"file",children:"File"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-file-source#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-file-source#usage",children:"Example"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/file/src/main/java/org/apache/pulsar/io/file/FileSource.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"flume",children:"Flume"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-flume-source#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/flume/src/main/java/org/apache/pulsar/io/flume/FlumeConnector.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"twitter-firehose",children:"Twitter firehose"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-twitter-source#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/twitter/src/main/java/org/apache/pulsar/io/twitter/TwitterFireHose.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"kafka",children:"Kafka"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-kafka-source#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-kafka-source#usage",children:"Example"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaAbstractSource.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"kinesis",children:"Kinesis"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-kinesis-source#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kinesis/src/main/java/org/apache/pulsar/io/kinesis/KinesisSource.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"mongodb",children:"MongoDB"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-mongo-source#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/mongo/src/main/java/org/apache/pulsar/io/mongodb/MongoSource.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"netty",children:"Netty"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-netty-source#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-netty-source#tcp",children:"Example of TCP"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-netty-source#http",children:"Example of HTTP"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/netty/src/main/java/org/apache/pulsar/io/netty/NettySource.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"nsq",children:"NSQ"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-nsq-source#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/nsq/src/main/java/org/apache/pulsar/io/nsq/NSQSource.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"rabbitmq",children:"RabbitMQ"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-rabbitmq-source#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/rabbitmq/src/main/java/org/apache/pulsar/io/rabbitmq/RabbitMQSource.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"sink-connector",children:"Sink connector"}),"\n",(0,a.jsx)(e.p,{children:"Pulsar has various sink connectors, which are sorted alphabetically as below."}),"\n",(0,a.jsx)(e.h3,{id:"aerospike",children:"Aerospike"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-aerospike-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/aerospike/src/main/java/org/apache/pulsar/io/aerospike/AerospikeStringSink.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"alluxio",children:"Alluxio"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-alluxio#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/alluxio/src/main/java/org/apache/pulsar/io/alluxio/sink/AlluxioSink.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"azure-data-explorer",children:"Azure Data Explorer"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-azuredataexplorer-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-azuredataexplorer-sink#example",children:"Example"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/azure-data-explorer/src/main/java/org/apache/pulsar/io/azuredataexplorer/ADXSink.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"cassandra",children:"Cassandra"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-cassandra-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-cassandra-sink#usage",children:"Example"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/cassandra/src/main/java/org/apache/pulsar/io/cassandra/CassandraStringSink.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"elasticsearch",children:"ElasticSearch"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-elasticsearch-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/elastic-search/src/main/java/org/apache/pulsar/io/elasticsearch/ElasticSearchSink.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"flume-1",children:"Flume"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-flume-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/flume/src/main/java/org/apache/pulsar/io/flume/sink/StringSink.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"hbase",children:"HBase"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-hbase-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/hbase/src/main/java/org/apache/pulsar/io/hbase/HbaseAbstractConfig.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"hdfs2",children:"HDFS2"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-hdfs2-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/hdfs2/src/main/java/org/apache/pulsar/io/hdfs2/AbstractHdfsConnector.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"hdfs3",children:"HDFS3"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-hdfs3-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/hdfs3/src/main/java/org/apache/pulsar/io/hdfs3/AbstractHdfsConnector.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"http",children:"HTTP"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-http-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/http/src/main/java/org/apache/pulsar/io/http/HttpSink.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"influxdb",children:"InfluxDB"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-influxdb-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/influxdb/src/main/java/org/apache/pulsar/io/influxdb/InfluxDBGenericRecordSink.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"jdbc-clickhouse",children:"JDBC ClickHouse"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-jdbc-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-jdbc-sink#example-of-clickhouse",children:"Example"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/jdbc/clickhouse/src/main/java/org/apache/pulsar/io/jdbc/ClickHouseJdbcAutoSchemaSink.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"jdbc-mariadb",children:"JDBC MariaDB"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-jdbc-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-jdbc-sink#example-of-mariadb",children:"Example"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/jdbc/mariadb/src/main/java/org/apache/pulsar/io/jdbc/MariadbJdbcAutoSchemaSink.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"jdbc-openmldb",children:"JDBC OpenMLDB"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-jdbc-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-jdbc-sink#example-of-openmldb",children:"Example"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/jdbc/openmldb/src/main/java/org/apache/pulsar/io/jdbc/OpenMLDBJdbcAutoSchemaSink.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"jdbc-postgresql",children:"JDBC PostgreSQL"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-jdbc-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-jdbc-sink#example-of-postgresql",children:"Example"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/jdbc/postgres/src/main/java/org/apache/pulsar/io/jdbc/PostgresJdbcAutoSchemaSink.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"jdbc-sqlite",children:"JDBC SQLite"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-jdbc-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-jdbc-sink#example-of-sqlite",children:"Example"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/jdbc/sqlite/src/main/java/org/apache/pulsar/io/jdbc/SqliteJdbcAutoSchemaSink.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"kafka-1",children:"Kafka"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-kafka-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaAbstractSink.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"kinesis-1",children:"Kinesis"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-kinesis-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kinesis/src/main/java/org/apache/pulsar/io/kinesis/KinesisSink.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"mongodb-1",children:"MongoDB"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-mongo-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/mongo/src/main/java/org/apache/pulsar/io/mongodb/MongoSink.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"rabbitmq-1",children:"RabbitMQ"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-rabbitmq-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/rabbitmq/src/main/java/org/apache/pulsar/io/rabbitmq/RabbitMQSink.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"redis",children:"Redis"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-redis-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/redis/src/main/java/org/apache/pulsar/io/redis/RedisAbstractConfig.java",children:"Java class"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"solr",children:"Solr"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"/docs/next/io-solr-sink#configuration",children:"Configuration"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/solr/src/main/java/org/apache/pulsar/io/solr/SolrSinkConfig.java",children:"Java class"})}),"\n"]}),"\n"]})]})}function t(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var s=i(96540);const a={},r=s.createContext(a);function l(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);