"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[14828],{86239:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"io-cdc-debezium","title":"Debezium source connector","description":"The Debezium source connector pulls messages from MySQL or PostgreSQL","source":"@site/versioned_docs/version-2.6.2/io-cdc-debezium.md","sourceDirName":".","slug":"/io-cdc-debezium","permalink":"/docs/2.6.2/io-cdc-debezium","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.2/io-cdc-debezium.md","tags":[],"version":"2.6.2","frontMatter":{"id":"io-cdc-debezium","title":"Debezium source connector","sidebar_label":"Debezium source connector","original_id":"io-cdc-debezium"}}');var a=s(74848),o=s(28453);const t={id:"io-cdc-debezium",title:"Debezium source connector",sidebar_label:"Debezium source connector",original_id:"io-cdc-debezium"},i=void 0,l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Example of MySQL",id:"example-of-mysql",level:2},{value:"Configuration",id:"configuration-1",level:3},{value:"Usage",id:"usage",level:3},{value:"Example of PostgreSQL",id:"example-of-postgresql",level:2},{value:"Configuration",id:"configuration-2",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Example of MongoDB",id:"example-of-mongodb",level:2},{value:"Usage",id:"usage-2",level:3},{value:"FAQ",id:"faq",level:2},{value:"Debezium postgres connector will hang when create snap",id:"debezium-postgres-connector-will-hang-when-create-snap",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"The Debezium source connector pulls messages from MySQL or PostgreSQL\nand persists the messages to Pulsar topics."}),"\n",(0,a.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(n.p,{children:"The configuration of Debezium source connector has the following properties."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Required"}),(0,a.jsx)(n.th,{children:"Default"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"task.class"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsx)(n.td,{children:"A source task class that implemented in Debezium."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"database.hostname"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsx)(n.td,{children:"The address of a database server."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"database.port"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsx)(n.td,{children:"The port number of a database server."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"database.user"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsx)(n.td,{children:"The name of a database user that has the required privileges."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"database.password"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsx)(n.td,{children:"The password for a database user that has the required privileges."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"database.server.id"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsx)(n.td,{children:"The connector\u2019s identifier that must be unique within a database cluster and similar to the database\u2019s server-id configuration property."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"database.server.name"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsx)(n.td,{children:"The logical name of a database server/cluster, which forms a namespace and it is used in all the names of Kafka topics to which the connector writes, the Kafka Connect schema names, and the namespaces of the corresponding Avro schema when the Avro Connector is used."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"database.whitelist"})}),(0,a.jsx)(n.td,{children:"false"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsxs)(n.td,{children:["A list of all databases hosted by this server which is monitored by the  connector.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{})," This is optional, and there are other properties for listing databases and tables to include or exclude from monitoring."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"key.converter"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsx)(n.td,{children:"The converter provided by Kafka Connect to convert record key."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"value.converter"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsx)(n.td,{children:"The converter provided by Kafka Connect to convert record value."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"database.history"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsx)(n.td,{children:"The name of the database history class."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"database.history.pulsar.topic"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsxs)(n.td,{children:["The name of the database history topic where the connector writes and recovers DDL statements. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(n.strong,{children:"Note: this topic is for internal use only and should not be used by consumers."})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"database.history.pulsar.service.url"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsx)(n.td,{children:"Pulsar cluster service URL for history topic."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"pulsar.service.url"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsx)(n.td,{children:"Pulsar cluster service URL."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"offset.storage.topic"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsx)(n.td,{children:"Record the last committed offsets that the connector successfully completes."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"mongodb.hosts"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsxs)(n.td,{children:["The comma-separated list of hostname and port pairs (in the form 'host' or 'host",":port","') of the MongoDB servers in the replica set. The list contains a single hostname and a port pair. If mongodb.members.auto.discover is set to false, the host and port pair are prefixed with the replica set name (e.g., rs0/localhost:27017)."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"mongodb.name"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsx)(n.td,{children:"A unique name that identifies the connector and/or MongoDB replica set or shared cluster that this connector monitors. Each server should be monitored by at most one Debezium connector, since this server name prefixes all persisted Kafka topics emanating from the MongoDB replica set or cluster."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"mongodb.user"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsx)(n.td,{children:"Name of the database user to be used when connecting to MongoDB. This is required only when MongoDB is configured to use authentication."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"mongodb.password"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsx)(n.td,{children:"Password to be used when connecting to MongoDB. This is required only when MongoDB is configured to use authentication."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"mongodb.task.id"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"null"}),(0,a.jsx)(n.td,{children:"The taskId of the MongoDB connector that attempts to use a separate task for each replica set."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"example-of-mysql",children:"Example of MySQL"}),"\n",(0,a.jsx)(n.p,{children:"You need to create a configuration file before using the Pulsar Debezium connector."}),"\n",(0,a.jsx)(n.h3,{id:"configuration-1",children:"Configuration"}),"\n",(0,a.jsx)(n.p,{children:"You can use one of the following methods to create a configuration file."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"JSON"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'\n{\n    "database.hostname": "localhost",\n    "database.port": "3306",\n    "database.user": "debezium",\n    "database.password": "dbz",\n    "database.server.id": "184054",\n    "database.server.name": "dbserver1",\n    "database.whitelist": "inventory",\n    "database.history": "org.apache.pulsar.io.debezium.PulsarDatabaseHistory",\n    "database.history.pulsar.topic": "history-topic",\n    "database.history.pulsar.service.url": "pulsar://127.0.0.1:6650",\n    "key.converter": "org.apache.kafka.connect.json.JsonConverter",\n    "value.converter": "org.apache.kafka.connect.json.JsonConverter",\n    "pulsar.service.url": "pulsar://127.0.0.1:6650",\n    "offset.storage.topic": "offset-topic"\n}\n\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"YAML"}),"\n",(0,a.jsxs)(n.p,{children:["You can create a ",(0,a.jsx)(n.code,{children:"debezium-mysql-source-config.yaml"})," file and copy the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/mysql/src/main/resources/debezium-mysql-source-config.yaml",children:"contents"})," below to the ",(0,a.jsx)(n.code,{children:"debezium-mysql-source-config.yaml"})," file."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'\ntenant: "public"\nnamespace: "default"\nname: "debezium-mysql-source"\ntopicName: "debezium-mysql-topic"\narchive: "connectors/pulsar-io-debezium-mysql-2.6.2.nar"\nparallelism: 1\n\nconfigs:\n\n    ## config for mysql, docker image: debezium/example-mysql:0.8\n    database.hostname: "localhost"\n    database.port: "3306"\n    database.user: "debezium"\n    database.password: "dbz"\n    database.server.id: "184054"\n    database.server.name: "dbserver1"\n    database.whitelist: "inventory"\n    database.history: "org.apache.pulsar.io.debezium.PulsarDatabaseHistory"\n    database.history.pulsar.topic: "history-topic"\n    database.history.pulsar.service.url: "pulsar://127.0.0.1:6650"\n\n    ## KEY_CONVERTER_CLASS_CONFIG, VALUE_CONVERTER_CLASS_CONFIG\n    key.converter: "org.apache.kafka.connect.json.JsonConverter"\n    value.converter: "org.apache.kafka.connect.json.JsonConverter"\n\n    ## PULSAR_SERVICE_URL_CONFIG\n    pulsar.service.url: "pulsar://127.0.0.1:6650"\n\n    ## OFFSET_STORAGE_TOPIC_CONFIG\n    offset.storage.topic: "offset-topic"\n\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.p,{children:"This example shows how to change the data of a MySQL table using the Pulsar Debezium connector."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start a MySQL server with a database from which Debezium can capture changes."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker run -it --rm \\\n--name mysql \\\n-p 3306:3306 \\\n-e MYSQL_ROOT_PASSWORD=debezium \\\n-e MYSQL_USER=mysqluser \\\n-e MYSQL_PASSWORD=mysqlpw debezium/example-mysql:0.8\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start a Pulsar service locally in standalone mode."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar standalone\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start the Pulsar Debezium connector in local run mode using one of the following methods."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.strong,{children:"JSON"})," configuration file as shown previously."]}),"\n",(0,a.jsxs)(n.p,{children:["Make sure the nar file is available at ",(0,a.jsx)(n.code,{children:"connectors/pulsar-io-debezium-mysql-2.6.2.nar"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'\n$ bin/pulsar-admin source localrun \\\n--archive connectors/pulsar-io-debezium-mysql-2.6.2.nar \\\n--name debezium-mysql-source --destination-topic-name debezium-mysql-topic \\\n--tenant public \\\n--namespace default \\\n--source-config \'{"database.hostname": "localhost","database.port": "3306","database.user": "debezium","database.password": "dbz","database.server.id": "184054","database.server.name": "dbserver1","database.whitelist": "inventory","database.history": "org.apache.pulsar.io.debezium.PulsarDatabaseHistory","database.history.pulsar.topic": "history-topic","database.history.pulsar.service.url": "pulsar://127.0.0.1:6650","key.converter": "org.apache.kafka.connect.json.JsonConverter","value.converter": "org.apache.kafka.connect.json.JsonConverter","pulsar.service.url": "pulsar://127.0.0.1:6650","offset.storage.topic": "offset-topic"}\'\n\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.strong,{children:"YAML"})," configuration file as shown previously."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin source localrun \\\n--source-config-file debezium-mysql-source-config.yaml\n\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Subscribe the topic ",(0,a.jsx)(n.em,{children:"sub-products"})," for the table ",(0,a.jsx)(n.em,{children:"inventory.products"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'\n$ bin/pulsar-client consume -s "sub-products" public/default/dbserver1.inventory.products -n 0\n\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start a MySQL client in docker."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'\n$ docker run -it --rm \\\n--name mysqlterm \\\n--link mysql \\\n--rm mysql:5.7 sh \\\n-c \'exec mysql -h"$MYSQL_PORT_3306_TCP_ADDR" -P"$MYSQL_PORT_3306_TCP_PORT" -uroot -p"$MYSQL_ENV_MYSQL_ROOT_PASSWORD"\'\n\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"A MySQL client pops out."}),"\n",(0,a.jsxs)(n.p,{children:["Change the connection mode to ",(0,a.jsx)(n.code,{children:"mysql_native_password"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'mysql> show variables like "caching_sha2_password_auto_generate_rsa_keys";\n+----------------------------------------------+-------+\n| Variable_name                                | Value |\n+----------------------------------------------+-------+\n| caching_sha2_password_auto_generate_rsa_keys | ON    |\n+----------------------------------------------+-------+\n\n# If the value of "caching_sha2_password_auto_generate_rsa_keys" is ON, ensure the plugin of mysql.user is "mysql_native_password".\nmysql> SELECT Host, User, plugin from mysql.user where user={user};\n+-----------+------+-----------------------+\n| Host      | User | plugin                |\n+-----------+------+-----------------------+\n| localhost | root | caching_sha2_password |\n+-----------+------+-----------------------+\n\n# If the plugin of mysql.user is is "caching_sha2_password", set it to "mysql_native_password".\nalter user \'{user}\'@\'{host}\' identified with mysql_native_password by {password};\n\n# Check the plugin of mysql.user.\nmysql> SELECT Host, User, plugin from mysql.user where user={user};\n+-----------+------+-----------------------+\n| Host      | User | plugin                |\n+-----------+------+-----------------------+\n| localhost | root | mysql_native_password |\n+-----------+------+-----------------------+\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Use the following commands to change the data of the table ",(0,a.jsx)(n.em,{children:"products"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\nmysql> use inventory;\nmysql> show tables;\nmysql> SELECT * FROM  products;\nmysql> UPDATE products SET name='1111111111' WHERE id=101;\nmysql> UPDATE products SET name='1111111111' WHERE id=107;\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In the terminal window of subscribing topic, you can find the data changes have been kept in the ",(0,a.jsx)(n.em,{children:"sub-products"})," topic."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example-of-postgresql",children:"Example of PostgreSQL"}),"\n",(0,a.jsx)(n.p,{children:"You need to create a configuration file before using the Pulsar Debezium connector."}),"\n",(0,a.jsx)(n.h3,{id:"configuration-2",children:"Configuration"}),"\n",(0,a.jsx)(n.p,{children:"You can use one of the following methods to create a configuration file."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"JSON"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'\n{\n    "database.hostname": "localhost",\n    "database.port": "5432",\n    "database.user": "postgres",\n    "database.password": "postgres",\n    "database.dbname": "postgres",\n    "database.server.name": "dbserver1",\n    "schema.whitelist": "inventory",\n    "pulsar.service.url": "pulsar://127.0.0.1:6650"\n}\n\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"YAML"}),"\n",(0,a.jsxs)(n.p,{children:["You can create a ",(0,a.jsx)(n.code,{children:"debezium-postgres-source-config.yaml"})," file and copy the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/postgres/src/main/resources/debezium-postgres-source-config.yaml",children:"contents"})," below to the ",(0,a.jsx)(n.code,{children:"debezium-postgres-source-config.yaml"})," file."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'\ntenant: "public"\nnamespace: "default"\nname: "debezium-postgres-source"\ntopicName: "debezium-postgres-topic"\narchive: "connectors/pulsar-io-debezium-postgres-2.6.2.nar"\nparallelism: 1\n\nconfigs:\n\n    ## config for pg, docker image: debezium/example-postgress:0.8\n    database.hostname: "localhost"\n    database.port: "5432"\n    database.user: "postgres"\n    database.password: "postgres"\n    database.dbname: "postgres"\n    database.server.name: "dbserver1"\n    schema.whitelist: "inventory"\n\n    ## PULSAR_SERVICE_URL_CONFIG\n    pulsar.service.url: "pulsar://127.0.0.1:6650"\n\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"usage-1",children:"Usage"}),"\n",(0,a.jsx)(n.p,{children:"This example shows how to change the data of a PostgreSQL table using the Pulsar Debezium connector."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start a PostgreSQL server with a database from which Debezium can capture changes."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker pull debezium/example-postgres:0.8\n$ docker run -d -it --rm --name pulsar-postgresql -p 5432:5432  debezium/example-postgres:0.8\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start a Pulsar service locally in standalone mode."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar standalone\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start the Pulsar Debezium connector in local run mode using one of the following methods."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Use the ",(0,a.jsx)(n.strong,{children:"JSON"})," configuration file as shown previously."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Make sure the nar file is available at ",(0,a.jsx)(n.code,{children:"connectors/pulsar-io-debezium-postgres-2.6.2.nar"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'\n$ bin/pulsar-admin source localrun \\\n--archive connectors/pulsar-io-debezium-postgres-2.6.2.nar \\\n--name debezium-postgres-source \\\n--destination-topic-name debezium-postgres-topic \\\n--tenant public \\\n--namespace default \\\n--source-config \'{"database.hostname": "localhost","database.port": "5432","database.user": "postgres","database.password": "postgres","database.dbname": "postgres","database.server.name": "dbserver1","plugin.name": "pgoutput","schema.whitelist": "inventory","pulsar.service.url": "pulsar://127.0.0.1:6650"}\'\n\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.strong,{children:"YAML"})," configuration file as shown previously."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin source localrun  \\\n--source-config-file debezium-postgres-source-config.yaml\n\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Subscribe the topic ",(0,a.jsx)(n.em,{children:"sub-products"})," for the ",(0,a.jsx)(n.em,{children:"inventory.products"})," table."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'\n$ bin/pulsar-client consume -s "sub-products" public/default/dbserver1.inventory.products -n 0\n\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start a PostgreSQL client in docker."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker exec -it pulsar-postgresql /bin/bash\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"A PostgreSQL client pops out."}),"\n",(0,a.jsxs)(n.p,{children:["Use the following commands to change the data of the table ",(0,a.jsx)(n.em,{children:"products"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\npsql -U postgres postgres\npostgres=# \\c postgres;\nYou are now connected to database \"postgres\" as user \"postgres\".\npostgres=# SET search_path TO inventory;\nSET\npostgres=# select * from products;\n id  |        name        |                       description                       | weight\n-----+--------------------+---------------------------------------------------------+--------\n 102 | car battery        | 12V car battery                                         |    8.1\n 103 | 12-pack drill bits | 12-pack of drill bits with sizes ranging from #40 to #3 |    0.8\n 104 | hammer             | 12oz carpenter's hammer                                 |   0.75\n 105 | hammer             | 14oz carpenter's hammer                                 |  0.875\n 106 | hammer             | 16oz carpenter's hammer                                 |      1\n 107 | rocks              | box of assorted rocks                                   |    5.3\n 108 | jacket             | water resistent black wind breaker                      |    0.1\n 109 | spare tire         | 24 inch spare tire                                      |   22.2\n 101 | 1111111111         | Small 2-wheel scooter                                   |   3.14\n(9 rows)\n\npostgres=# UPDATE products SET name='1111111111' WHERE id=107;\nUPDATE 1\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"In the terminal window of subscribing topic, you can receive the following messages."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'\n----- got message -----\n{"schema":{"type":"struct","fields":[{"type":"int32","optional":false,"field":"id"}],"optional":false,"name":"dbserver1.inventory.products.Key"},"payload":{"id":107}}\ufffd{"schema":{"type":"struct","fields":[{"type":"struct","fields":[{"type":"int32","optional":false,"field":"id"},{"type":"string","optional":false,"field":"name"},{"type":"string","optional":true,"field":"description"},{"type":"double","optional":true,"field":"weight"}],"optional":true,"name":"dbserver1.inventory.products.Value","field":"before"},{"type":"struct","fields":[{"type":"int32","optional":false,"field":"id"},{"type":"string","optional":false,"field":"name"},{"type":"string","optional":true,"field":"description"},{"type":"double","optional":true,"field":"weight"}],"optional":true,"name":"dbserver1.inventory.products.Value","field":"after"},{"type":"struct","fields":[{"type":"string","optional":true,"field":"version"},{"type":"string","optional":true,"field":"connector"},{"type":"string","optional":false,"field":"name"},{"type":"string","optional":false,"field":"db"},{"type":"int64","optional":true,"field":"ts_usec"},{"type":"int64","optional":true,"field":"txId"},{"type":"int64","optional":true,"field":"lsn"},{"type":"string","optional":true,"field":"schema"},{"type":"string","optional":true,"field":"table"},{"type":"boolean","optional":true,"default":false,"field":"snapshot"},{"type":"boolean","optional":true,"field":"last_snapshot_record"}],"optional":false,"name":"io.debezium.connector.postgresql.Source","field":"source"},{"type":"string","optional":false,"field":"op"},{"type":"int64","optional":true,"field":"ts_ms"}],"optional":false,"name":"dbserver1.inventory.products.Envelope"},"payload":{"before":{"id":107,"name":"rocks","description":"box of assorted rocks","weight":5.3},"after":{"id":107,"name":"1111111111","description":"box of assorted rocks","weight":5.3},"source":{"version":"0.9.2.Final","connector":"postgresql","name":"dbserver1","db":"postgres","ts_usec":1559208957661080,"txId":577,"lsn":23862872,"schema":"inventory","table":"products","snapshot":false,"last_snapshot_record":null},"op":"u","ts_ms":1559208957692}}\n\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example-of-mongodb",children:"Example of MongoDB"}),"\n",(0,a.jsx)(n.p,{children:"You need to create a configuration file before using the Pulsar Debezium connector."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"JSON"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'\n{\n    "mongodb.hosts": "rs0/mongodb:27017",\n    "mongodb.name": "dbserver1",\n    "mongodb.user": "debezium",\n    "mongodb.password": "dbz",\n    "mongodb.task.id": "1",\n    "database.whitelist": "inventory",\n    "pulsar.service.url": "pulsar://127.0.0.1:6650"\n}\n\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"YAML"}),"\n",(0,a.jsxs)(n.p,{children:["You can create a ",(0,a.jsx)(n.code,{children:"debezium-mongodb-source-config.yaml"})," file and copy the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/debezium/mongodb/src/main/resources/debezium-mongodb-source-config.yaml",children:"contents"})," below to the ",(0,a.jsx)(n.code,{children:"debezium-mongodb-source-config.yaml"})," file."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'\ntenant: "public"\nnamespace: "default"\nname: "debezium-mongodb-source"\ntopicName: "debezium-mongodb-topic"\narchive: "connectors/pulsar-io-debezium-mongodb-2.6.2.nar"\nparallelism: 1\n\nconfigs:\n\n    ## config for pg, docker image: debezium/example-postgress:0.10\n    mongodb.hosts: "rs0/mongodb:27017",\n    mongodb.name: "dbserver1",\n    mongodb.user: "debezium",\n    mongodb.password: "dbz",\n    mongodb.task.id: "1",\n    database.whitelist: "inventory",\n\n    ## PULSAR_SERVICE_URL_CONFIG\n    pulsar.service.url: "pulsar://127.0.0.1:6650"\n\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"usage-2",children:"Usage"}),"\n",(0,a.jsx)(n.p,{children:"This example shows how to change the data of a MongoDB table using the Pulsar Debezium connector."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start a MongoDB server with a database from which Debezium can capture changes."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker pull debezium/example-mongodb:0.10\n$ docker run -d -it --rm --name pulsar-mongodb -e MONGODB_USER=mongodb -e MONGODB_PASSWORD=mongodb -p 27017:27017  debezium/example-mongodb:0.10\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"Use the following commands to initialize the data."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n./usr/local/bin/init-inventory.sh\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If the local host cannot access the container network, you can update the file ",(0,a.jsx)(n.code,{children:"/etc/hosts"})," and add a rule ",(0,a.jsx)(n.code,{children:"127.0.0.1 6 f114527a95f"}),". f114527a95f is container id, you can try to get by ",(0,a.jsx)(n.code,{children:"docker ps -a"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start a Pulsar service locally in standalone mode."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar standalone\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start the Pulsar Debezium connector in local run mode using one of the following methods."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Use the ",(0,a.jsx)(n.strong,{children:"JSON"})," configuration file as shown previously."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Make sure the nar file is available at ",(0,a.jsx)(n.code,{children:"connectors/pulsar-io-mongodb-2.6.2.nar"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'\n$ bin/pulsar-admin source localrun \\\n--archive connectors/pulsar-io-debezium-mongodb-2.6.2.nar \\\n--name debezium-mongodb-source \\\n--destination-topic-name debezium-mongodb-topic \\\n--tenant public \\\n--namespace default \\\n--source-config \'{"mongodb.hosts": "rs0/mongodb:27017","mongodb.name": "dbserver1","mongodb.user": "debezium","mongodb.password": "dbz","mongodb.task.id": "1","database.whitelist": "inventory","pulsar.service.url": "pulsar://127.0.0.1:6650"}\'\n\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.strong,{children:"YAML"})," configuration file as shown previously."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin source localrun  \\\n--source-config-file debezium-mongodb-source-config.yaml\n\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Subscribe the topic ",(0,a.jsx)(n.em,{children:"sub-products"})," for the ",(0,a.jsx)(n.em,{children:"inventory.products"})," table."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'\n$ bin/pulsar-client consume -s "sub-products" public/default/dbserver1.inventory.products -n 0\n\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start a MongoDB client in docker."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker exec -it pulsar-mongodb /bin/bash\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"A MongoDB client pops out."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'\nmongo -u debezium -p dbz --authenticationDatabase admin localhost:27017/inventory\ndb.products.update({"_id":NumberLong(104)},{$set:{weight:1.25}})\n\n'})}),"\n",(0,a.jsx)(n.p,{children:"In the terminal window of subscribing topic, you can receive the following messages."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'\n----- got message -----\n{"schema":{"type":"struct","fields":[{"type":"string","optional":false,"field":"id"}],"optional":false,"name":"dbserver1.inventory.products.Key"},"payload":{"id":"104"}}, value = {"schema":{"type":"struct","fields":[{"type":"string","optional":true,"name":"io.debezium.data.Json","version":1,"field":"after"},{"type":"string","optional":true,"name":"io.debezium.data.Json","version":1,"field":"patch"},{"type":"struct","fields":[{"type":"string","optional":false,"field":"version"},{"type":"string","optional":false,"field":"connector"},{"type":"string","optional":false,"field":"name"},{"type":"int64","optional":false,"field":"ts_ms"},{"type":"string","optional":true,"name":"io.debezium.data.Enum","version":1,"parameters":{"allowed":"true,last,false"},"default":"false","field":"snapshot"},{"type":"string","optional":false,"field":"db"},{"type":"string","optional":false,"field":"rs"},{"type":"string","optional":false,"field":"collection"},{"type":"int32","optional":false,"field":"ord"},{"type":"int64","optional":true,"field":"h"}],"optional":false,"name":"io.debezium.connector.mongo.Source","field":"source"},{"type":"string","optional":true,"field":"op"},{"type":"int64","optional":true,"field":"ts_ms"}],"optional":false,"name":"dbserver1.inventory.products.Envelope"},"payload":{"after":"{\\"_id\\": {\\"$numberLong\\": \\"104\\"},\\"name\\": \\"hammer\\",\\"description\\": \\"12oz carpenter\'s hammer\\",\\"weight\\": 1.25,\\"quantity\\": 4}","patch":null,"source":{"version":"0.10.0.Final","connector":"mongodb","name":"dbserver1","ts_ms":1573541905000,"snapshot":"true","db":"inventory","rs":"rs0","collection":"products","ord":1,"h":4983083486544392763},"op":"r","ts_ms":1573541909761}}.\n\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,a.jsx)(n.h3,{id:"debezium-postgres-connector-will-hang-when-create-snap",children:"Debezium postgres connector will hang when create snap"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-$xslt",children:"\n#18 prio=5 os_prio=31 tid=0x00007fd83096f800 nid=0xa403 waiting on condition [0x000070000f534000]\n    java.lang.Thread.State: WAITING (parking)\n     at sun.misc.Unsafe.park(Native Method)\n     - parking to wait for  <0x00000007ab025a58> (a java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject)\n     at java.util.concurrent.locks.LockSupport.park(LockSupport.java:175)\n     at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(AbstractQueuedSynchronizer.java:2039)\n     at java.util.concurrent.LinkedBlockingDeque.putLast(LinkedBlockingDeque.java:396)\n     at java.util.concurrent.LinkedBlockingDeque.put(LinkedBlockingDeque.java:649)\n     at io.debezium.connector.base.ChangeEventQueue.enqueue(ChangeEventQueue.java:132)\n     at io.debezium.connector.postgresql.PostgresConnectorTask$Lambda$203/385424085.accept(Unknown Source)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer.sendCurrentRecord(RecordsSnapshotProducer.java:402)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer.readTable(RecordsSnapshotProducer.java:321)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer.lambda$takeSnapshot$6(RecordsSnapshotProducer.java:226)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer$Lambda$240/1347039967.accept(Unknown Source)\n     at io.debezium.jdbc.JdbcConnection.queryWithBlockingConsumer(JdbcConnection.java:535)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer.takeSnapshot(RecordsSnapshotProducer.java:224)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer.lambda$start$0(RecordsSnapshotProducer.java:87)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer$Lambda$206/589332928.run(Unknown Source)\n     at java.util.concurrent.CompletableFuture.uniRun(CompletableFuture.java:705)\n     at java.util.concurrent.CompletableFuture.uniRunStage(CompletableFuture.java:717)\n     at java.util.concurrent.CompletableFuture.thenRun(CompletableFuture.java:2010)\n     at io.debezium.connector.postgresql.RecordsSnapshotProducer.start(RecordsSnapshotProducer.java:87)\n     at io.debezium.connector.postgresql.PostgresConnectorTask.start(PostgresConnectorTask.java:126)\n     at io.debezium.connector.common.BaseSourceTask.start(BaseSourceTask.java:47)\n     at org.apache.pulsar.io.kafka.connect.KafkaConnectSource.open(KafkaConnectSource.java:127)\n     at org.apache.pulsar.io.debezium.DebeziumSource.open(DebeziumSource.java:100)\n     at org.apache.pulsar.functions.instance.JavaInstanceRunnable.setupInput(JavaInstanceRunnable.java:690)\n     at org.apache.pulsar.functions.instance.JavaInstanceRunnable.setupJavaInstance(JavaInstanceRunnable.java:200)\n     at org.apache.pulsar.functions.instance.JavaInstanceRunnable.run(JavaInstanceRunnable.java:230)\n     at java.lang.Thread.run(Thread.java:748)\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you encounter the above problems in synchronizing data, please refer to ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/issues/4075",children:"this"})," and add the following configuration to the configuration file:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-$xslt",children:"\nmax.queue.size=\n\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>i});var r=s(96540);const a={},o=r.createContext(a);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);