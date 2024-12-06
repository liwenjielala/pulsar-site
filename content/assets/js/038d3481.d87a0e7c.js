"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[31756],{7746:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"io-cdc-debezium","title":"CDC Debezium Connector","description":"Source Configuration Options","source":"@site/versioned_docs/version-2.3.1/io-cdc-debezium.md","sourceDirName":".","slug":"/io-cdc-debezium","permalink":"/docs/2.3.1/io-cdc-debezium","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.1/io-cdc-debezium.md","tags":[],"version":"2.3.1","frontMatter":{"id":"io-cdc-debezium","title":"CDC Debezium Connector","sidebar_label":"CDC Debezium Connector","original_id":"io-cdc-debezium"}}');var r=a(74848),t=a(28453);const c={id:"io-cdc-debezium",title:"CDC Debezium Connector",sidebar_label:"CDC Debezium Connector",original_id:"io-cdc-debezium"},o=void 0,i={},d=[{value:"Source Configuration Options",id:"source-configuration-options",level:3},{value:"Configuration Example",id:"configuration-example",level:3},{value:"Usage example",id:"usage-example",level:3},{value:"FAQ",id:"faq",level:2},{value:"Debezium postgres connector will hang when create snap",id:"debezium-postgres-connector-will-hang-when-create-snap",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"source-configuration-options",children:"Source Configuration Options"}),"\n",(0,r.jsx)(n.p,{children:"The Configuration is mostly related to Debezium task config, besides this we should provides the service URL of Pulsar cluster, and topic names that used to store offset and history."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"task.class"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"null"})}),(0,r.jsx)(n.td,{children:"A source task class that implemented in Debezium."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"database.hostname"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"null"})}),(0,r.jsx)(n.td,{children:"The address of the Database server."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"database.port"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"null"})}),(0,r.jsx)(n.td,{children:"The port number of the Database server.."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"database.user"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"null"})}),(0,r.jsx)(n.td,{children:"The name of the Database user that has the required privileges."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"database.password"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"null"})}),(0,r.jsx)(n.td,{children:"The password for the Database user that has the required privileges."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"database.server.id"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"null"})}),(0,r.jsx)(n.td,{children:"The connector\u2019s identifier that must be unique within the Database cluster and similar to Database\u2019s server-id configuration property."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"database.server.name"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"null"})}),(0,r.jsx)(n.td,{children:"The logical name of the Database server/cluster, which forms a namespace and is used in all the names of the Kafka topics to which the connector writes, the Kafka Connect schema names, and the namespaces of the corresponding Avro schema when the Avro Connector is used."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"database.whitelist"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"null"})}),(0,r.jsx)(n.td,{children:"A list of all databases hosted by this server that this connector will monitor. This is optional, and there are other properties for listing the databases and tables to include or exclude from monitoring."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"key.converter"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"null"})}),(0,r.jsx)(n.td,{children:"The converter provided by Kafka Connect to convert record key."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"value.converter"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"null"})}),(0,r.jsx)(n.td,{children:"The converter provided by Kafka Connect to convert record value."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"database.history"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"null"})}),(0,r.jsx)(n.td,{children:"The name of the database history class name."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"database.history.pulsar.topic"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"null"})}),(0,r.jsx)(n.td,{children:"The name of the database history topic where the connector will write and recover DDL statements. This topic is for internal use only and should not be used by consumers."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"database.history.pulsar.service.url"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"null"})}),(0,r.jsx)(n.td,{children:"Pulsar cluster service url for history topic."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pulsar.service.url"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"null"})}),(0,r.jsxs)(n.td,{children:["Pulsar cluster service URL for the offset topic used in Debezium. You can use the ",(0,r.jsx)(n.code,{children:"bin/pulsar-admin --admin-url http://pulsar:8080 sources localrun --source-config-file configs/pg-pulsar-config.yaml"})," command to point to the target Pulsar cluster."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"offset.storage.topic"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"null"})}),(0,r.jsx)(n.td,{children:"Record the last committed offsets that the connector successfully completed."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"configuration-example",children:"Configuration Example"}),"\n",(0,r.jsx)(n.p,{children:"Here is a configuration Json example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-$json",children:'\n{\n    "tenant": "public",\n    "namespace": "default",\n    "name": "debezium-kafka-source",\n    "className": "org.apache.pulsar.io.kafka.connect.KafkaConnectSource" ,\n    "topicName": "kafka-connect-topic",\n    "configs":\n    {\n        "task.class": "io.debezium.connector.mysql.MySqlConnectorTask",\n        "database.hostname": "localhost",\n        "database.port": "3306",\n        "database.user": "debezium",\n        "database.password": "dbz",\n        "database.server.id": "184054",\n        "database.server.name": "dbserver1",\n        "database.whitelist": "inventory",\n        "database.history": "org.apache.pulsar.io.debezium.PulsarDatabaseHistory",\n        "database.history.pulsar.topic": "history-topic",\n        "database.history.pulsar.service.url": "pulsar://127.0.0.1:6650",\n        "key.converter": "org.apache.kafka.connect.json.JsonConverter",\n        "value.converter": "org.apache.kafka.connect.json.JsonConverter",\n        "pulsar.service.url": "pulsar://127.0.0.1:6650",\n        "offset.storage.topic": "offset-topic"\n    },\n    "archive": "connectors/pulsar-io-kafka-connect-adaptor-2.3.1-SNAPSHOT.nar"\n}\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You could also find the yaml example in this ",(0,r.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kafka-connect-adaptor/src/main/resources/debezium-mysql-source-config.yaml",children:"file"}),", which has similar content below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-$yaml",children:'\ntenant: "public"\nnamespace: "default"\nname: "debezium-kafka-source"\ntopicName: "kafka-connect-topic"\narchive: "connectors/pulsar-io-kafka-connect-adaptor-2.3.1-SNAPSHOT.nar"\n\n##autoAck: true\nparallelism: 1\n\nconfigs:\n  ## sourceTask\n  task.class: "io.debezium.connector.mysql.MySqlConnectorTask"\n\n  ## config for mysql, docker image: debezium/example-mysql:0.8\n  database.hostname: "localhost"\n  database.port: "3306"\n  database.user: "debezium"\n  database.password: "dbz"\n  database.server.id: "184054"\n  database.server.name: "dbserver1"\n  database.whitelist: "inventory"\n\n  database.history: "org.apache.pulsar.io.debezium.PulsarDatabaseHistory"\n  database.history.pulsar.topic: "history-topic"\n  database.history.pulsar.service.url: "pulsar://127.0.0.1:6650"\n  ## KEY_CONVERTER_CLASS_CONFIG, VALUE_CONVERTER_CLASS_CONFIG\n  key.converter: "org.apache.kafka.connect.json.JsonConverter"\n  value.converter: "org.apache.kafka.connect.json.JsonConverter"\n  ## PULSAR_SERVICE_URL_CONFIG\n  pulsar.service.url: "pulsar://127.0.0.1:6650"\n  ## OFFSET_STORAGE_TOPIC_CONFIG\n  offset.storage.topic: "offset-topic"\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"usage-example",children:"Usage example"}),"\n",(0,r.jsx)(n.p,{children:"Here is a simple example to store MySQL change data using above example config."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Start a MySQL server with an example database, from which Debezium can capture changes."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-$bash",children:"\n docker run -it --rm --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=debezium -e MYSQL_USER=mysqluser -e MYSQL_PASSWORD=mysqlpw debezium/example-mysql:0.8\n\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Start a Pulsar service locally in standalone mode."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-$bash",children:"\n bin/pulsar standalone\n\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Start pulsar debezium connector, with local run mode, and using above yaml config file. Please make sure that the nar file is available as configured in path ",(0,r.jsx)(n.code,{children:"connectors/pulsar-io-kafka-connect-adaptor-2.3.1-SNAPSHOT.nar"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-$bash",children:"\n bin/pulsar-admin source localrun  --sourceConfigFile debezium-mysql-source-config.yaml\n\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Subscribe the topic for table ",(0,r.jsx)(n.code,{children:"inventory.products"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'\n bin/pulsar-client consume -s "sub-products" public/default/dbserver1.inventory.products -n 0\n\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["start a MySQL cli docker connector, and use it we could change to the table ",(0,r.jsx)(n.code,{children:"products"})," in MySQL server."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-$bash",children:'\n$docker run -it --rm --name mysqlterm --link mysql --rm mysql:5.7 sh -c \'exec mysql -h"$MYSQL_PORT_3306_TCP_ADDR" -P"$MYSQL_PORT_3306_TCP_PORT" -uroot -p"$MYSQL_ENV_MYSQL_ROOT_PASSWORD"\'\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"This command will pop out MySQL cli, in this cli, we could do a change in table products, use commands below to change the name of 2 items in table products:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\nmysql> use inventory;\nmysql> show tables;\nmysql> SELECT * FROM  products ;\nmysql> UPDATE products SET name='1111111111' WHERE id=101;\nmysql> UPDATE products SET name='1111111111' WHERE id=107;\n\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"In above subscribe topic terminal tab, we could find that 2 changes has been kept into products topic."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(n.h3,{id:"debezium-postgres-connector-will-hang-when-create-snap",children:"Debezium postgres connector will hang when create snap"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-$xslt",children:"\n#18 prio=5 os_prio=31 tid=0x00007fd83096f800 nid=0xa403 waiting on condition [0x000070000f534000]\n    java.lang.Thread.State: WAITING (parking)\n     at sun.misc.Unsafe.park(Native Method)\n     - parking to wait for  <0x00000007ab025a58> (a java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject)\n     at java.util.concurrent.locks.LockSupport.park(LockSupport.java:175)\n     at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(AbstractQueuedSynchronizer.java:2039)\n     at java.util.concurrent.LinkedBlockingDeque.putLast(LinkedBlockingDeque.java:396)\n     at java.util.concurrent.LinkedBlockingDeque.put(LinkedBlockingDeque.java:649)\n     at io.debezium.connector.base.ChangeEventQueue.enqueue(ChangeEventQueue.java:132)\n     at io.debezium.connector.postgresql.PostgresConnectorTask$Lambda$203/385424085.accept(Unknown Source)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer.sendCurrentRecord(RecordsSnapshotProducer.java:402)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer.readTable(RecordsSnapshotProducer.java:321)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer.lambda$takeSnapshot$6(RecordsSnapshotProducer.java:226)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer$Lambda$240/1347039967.accept(Unknown Source)\n     at io.debezium.jdbc.JdbcConnection.queryWithBlockingConsumer(JdbcConnection.java:535)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer.takeSnapshot(RecordsSnapshotProducer.java:224)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer.lambda$start$0(RecordsSnapshotProducer.java:87)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer$Lambda$206/589332928.run(Unknown Source)\n     at java.util.concurrent.CompletableFuture.uniRun(CompletableFuture.java:705)\n     at java.util.concurrent.CompletableFuture.uniRunStage(CompletableFuture.java:717)\n     at java.util.concurrent.CompletableFuture.thenRun(CompletableFuture.java:2010)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer.start(RecordsSnapshotProducer.java:87)\n     at io.debezium.connector.postgresql.PostgresConnectorTask.start(PostgresConnectorTask.java:126)\n     at io.debezium.connector.common.BaseSourceTask.start(BaseSourceTask.java:47)\n     at org.apache.pulsar.io.kafka.connect.KafkaConnectSource.open(KafkaConnectSource.java:127)\n     at org.apache.pulsar.io.debezium.DebeziumSource.open(DebeziumSource.java:100)\n     at org.apache.pulsar.functions.instance.JavaInstanceRunnable.setupInput(JavaInstanceRunnable.java:690)\n     at org.apache.pulsar.functions.instance.JavaInstanceRunnable.setupJavaInstance(JavaInstanceRunnable.java:200)\n     at org.apache.pulsar.functions.instance.JavaInstanceRunnable.run(JavaInstanceRunnable.java:230)\n     at java.lang.Thread.run(Thread.java:748)\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you encounter the above problems in synchronizing data, please refer to ",(0,r.jsx)(n.a,{href:"https://github.com/apache/pulsar/issues/4075",children:"this"})," and add the following configuration to the configuration file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-$xslt",children:"\nmax.queue.size=\n\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>o});var s=a(96540);const r={},t=s.createContext(r);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);