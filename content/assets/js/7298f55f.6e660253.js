"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[57293],{36521:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"io-kafka-source","title":"Kafka source connector","description":"You can download all the Pulsar connectors on download page.","source":"@site/versioned_docs/version-3.2.x/io-kafka-source.md","sourceDirName":".","slug":"/io-kafka-source","permalink":"/docs/3.2.x/io-kafka-source","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/io-kafka-source.md","tags":[],"version":"3.2.x","frontMatter":{"id":"io-kafka-source","title":"Kafka source connector","sidebar_label":"Kafka source connector"}}');var a=n(74848),t=n(28453);const i={id:"io-kafka-source",title:"Kafka source connector",sidebar_label:"Kafka source connector"},c=void 0,l={},o=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Schema Management",id:"schema-management",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2},{value:"Standalone cluster",id:"standalone-cluster",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Steps",id:"steps",level:4},{value:"On-premises cluster",id:"on-premises-cluster",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsxs)(s.p,{children:["You can download all the Pulsar connectors on ",(0,a.jsx)(s.a,{href:"pathname:///download",children:"download page"}),"."]})}),"\n",(0,a.jsx)(s.p,{children:"The Kafka source connector pulls messages from Kafka topics and persists the messages to Pulsar topics."}),"\n",(0,a.jsx)(s.p,{children:"This guide explains how to configure and use the Kafka source connector."}),"\n",(0,a.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(s.p,{children:"The configuration of the Kafka source connector has the following properties."}),"\n",(0,a.jsx)(s.h3,{id:"property",children:"Property"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Name"}),(0,a.jsx)(s.th,{children:"Type"}),(0,a.jsx)(s.th,{children:"Required"}),(0,a.jsx)(s.th,{children:"Default"}),(0,a.jsx)(s.th,{children:"Description"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"bootstrapServers"})}),(0,a.jsx)(s.td,{children:"String"}),(0,a.jsx)(s.td,{children:"true"}),(0,a.jsx)(s.td,{children:'" " (empty string)'}),(0,a.jsx)(s.td,{children:"A comma-separated list of host and port pairs for establishing the initial connection to the Kafka cluster."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"securityProtocol"})}),(0,a.jsx)(s.td,{children:"String"}),(0,a.jsx)(s.td,{children:"false"}),(0,a.jsx)(s.td,{children:'" " (empty string)'}),(0,a.jsx)(s.td,{children:"The protocol used to communicate with Kafka brokers."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"saslMechanism"})}),(0,a.jsx)(s.td,{children:"String"}),(0,a.jsx)(s.td,{children:"false"}),(0,a.jsx)(s.td,{children:'" " (empty string)'}),(0,a.jsx)(s.td,{children:"The SASL mechanism used for Kafka client connections."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"saslJaasConfig"})}),(0,a.jsx)(s.td,{children:"String"}),(0,a.jsx)(s.td,{children:"false"}),(0,a.jsx)(s.td,{children:'" " (empty string)'}),(0,a.jsx)(s.td,{children:"The JAAS login context parameters for SASL connections in the format used by JAAS configuration files."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"sslEnabledProtocols"})}),(0,a.jsx)(s.td,{children:"String"}),(0,a.jsx)(s.td,{children:"false"}),(0,a.jsx)(s.td,{children:'" " (empty string)'}),(0,a.jsx)(s.td,{children:"The list of protocols enabled for SSL connections."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"sslEndpointIdentificationAlgorithm"})}),(0,a.jsx)(s.td,{children:"String"}),(0,a.jsx)(s.td,{children:"false"}),(0,a.jsx)(s.td,{children:'" " (empty string)'}),(0,a.jsx)(s.td,{children:"The endpoint identification algorithm to validate server hostnames using a server certificate."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"sslTruststoreLocation"})}),(0,a.jsx)(s.td,{children:"String"}),(0,a.jsx)(s.td,{children:"false"}),(0,a.jsx)(s.td,{children:'" " (empty string)'}),(0,a.jsx)(s.td,{children:"The location of the trust store file."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"sslTruststorePassword"})}),(0,a.jsx)(s.td,{children:"String"}),(0,a.jsx)(s.td,{children:"false"}),(0,a.jsx)(s.td,{children:'" " (empty string)'}),(0,a.jsx)(s.td,{children:"The password of the trust store file."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"groupId"})}),(0,a.jsx)(s.td,{children:"String"}),(0,a.jsx)(s.td,{children:"true"}),(0,a.jsx)(s.td,{children:'" " (empty string)'}),(0,a.jsx)(s.td,{children:"A unique string that identifies the group of consumer processes to which this consumer belongs."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"fetchMinBytes"})}),(0,a.jsx)(s.td,{children:"long"}),(0,a.jsx)(s.td,{children:"false"}),(0,a.jsx)(s.td,{children:"1"}),(0,a.jsx)(s.td,{children:"The minimum byte expected for each fetch response."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"autoCommitEnabled"})}),(0,a.jsx)(s.td,{children:"boolean"}),(0,a.jsx)(s.td,{children:"false"}),(0,a.jsx)(s.td,{children:"true"}),(0,a.jsxs)(s.td,{children:["If set to true, the consumer's offset is periodically committed in the background.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{})," This committed offset is used when the process fails as the position from which a new consumer begins."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"autoCommitIntervalMs"})}),(0,a.jsx)(s.td,{children:"long"}),(0,a.jsx)(s.td,{children:"false"}),(0,a.jsx)(s.td,{children:"5000"}),(0,a.jsxs)(s.td,{children:["The frequency in milliseconds that the consumer offsets are auto-committed to Kafka if ",(0,a.jsx)(s.code,{children:"autoCommitEnabled"})," is set to true."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"heartbeatIntervalMs"})}),(0,a.jsx)(s.td,{children:"long"}),(0,a.jsx)(s.td,{children:"false"}),(0,a.jsx)(s.td,{children:"3000"}),(0,a.jsxs)(s.td,{children:["The interval between heartbeats to the consumer when using Kafka's group management facilities. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsxs)(s.strong,{children:["Note: ",(0,a.jsx)(s.code,{children:"heartbeatIntervalMs"})," must be smaller than ",(0,a.jsx)(s.code,{children:"sessionTimeoutMs"})]}),"."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"sessionTimeoutMs"})}),(0,a.jsx)(s.td,{children:"long"}),(0,a.jsx)(s.td,{children:"false"}),(0,a.jsx)(s.td,{children:"30000"}),(0,a.jsx)(s.td,{children:"The timeout used to detect consumer failures when using Kafka's group management facility."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"topic"})}),(0,a.jsx)(s.td,{children:"String"}),(0,a.jsx)(s.td,{children:"true"}),(0,a.jsx)(s.td,{children:'" " (empty string)'}),(0,a.jsx)(s.td,{children:"The Kafka topic that sends messages to Pulsar."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"consumerConfigProperties"})}),(0,a.jsx)(s.td,{children:"Map"}),(0,a.jsx)(s.td,{children:"false"}),(0,a.jsx)(s.td,{children:'" " (empty string)'}),(0,a.jsxs)(s.td,{children:["The consumer configuration properties to be passed to consumers. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(s.strong,{children:"Note: other properties specified in the connector configuration file take precedence over this configuration"}),"."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"keyDeserializationClass"})}),(0,a.jsx)(s.td,{children:"String"}),(0,a.jsx)(s.td,{children:"false"}),(0,a.jsx)(s.td,{children:"org.apache.kafka.common.serialization.StringDeserializer"}),(0,a.jsxs)(s.td,{children:["The deserializer class for Kafka consumers to deserialize keys.",(0,a.jsx)("br",{})," The deserializer is set by a specific implementation of ",(0,a.jsx)(s.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaAbstractSource.java",children:(0,a.jsx)(s.code,{children:"KafkaAbstractSource"})}),"."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"valueDeserializationClass"})}),(0,a.jsx)(s.td,{children:"String"}),(0,a.jsx)(s.td,{children:"false"}),(0,a.jsx)(s.td,{children:"org.apache.kafka.common.serialization.ByteArrayDeserializer"}),(0,a.jsx)(s.td,{children:"The deserializer class for Kafka consumers to deserialize values."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"autoOffsetReset"})}),(0,a.jsx)(s.td,{children:"String"}),(0,a.jsx)(s.td,{children:"false"}),(0,a.jsx)(s.td,{children:"earliest"}),(0,a.jsx)(s.td,{children:"The default offset reset policy."})]})]})]}),"\n",(0,a.jsx)(s.h3,{id:"schema-management",children:"Schema Management"}),"\n",(0,a.jsxs)(s.p,{children:["This Kafka source connector applies the schema to the topic depending on the data type that is present on the Kafka topic.\nYou can detect the data type from the ",(0,a.jsx)(s.code,{children:"keyDeserializationClass"})," and ",(0,a.jsx)(s.code,{children:"valueDeserializationClass"})," configuration parameters."]}),"\n",(0,a.jsxs)(s.p,{children:["If the ",(0,a.jsx)(s.code,{children:"valueDeserializationClass"})," is ",(0,a.jsx)(s.code,{children:"org.apache.kafka.common.serialization.StringDeserializer"}),", you can set Schema.STRING() as schema type on the Pulsar topic."]}),"\n",(0,a.jsxs)(s.p,{children:["If ",(0,a.jsx)(s.code,{children:"valueDeserializationClass"})," is ",(0,a.jsx)(s.code,{children:"io.confluent.kafka.serializers.KafkaAvroDeserializer"}),", Pulsar downloads the AVRO schema from the Confluent Schema Registry\xae\nand sets it properly on the Pulsar topic."]}),"\n",(0,a.jsxs)(s.p,{children:["In this case, you need to set ",(0,a.jsx)(s.code,{children:"schema.registry.url"})," inside of the ",(0,a.jsx)(s.code,{children:"consumerConfigProperties"})," configuration entry\nof the source."]}),"\n",(0,a.jsxs)(s.p,{children:["If ",(0,a.jsx)(s.code,{children:"keyDeserializationClass"})," is not ",(0,a.jsx)(s.code,{children:"org.apache.kafka.common.serialization.StringDeserializer"}),", it means\nthat you do not have a string as a key and the Kafka Source uses the KeyValue schema type with the SEPARATED encoding."]}),"\n",(0,a.jsx)(s.p,{children:"Pulsar supports the AVRO format for keys."}),"\n",(0,a.jsx)(s.p,{children:"In this case, you can have a Pulsar topic with the following properties:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Schema: KeyValue schema with SEPARATED encoding"}),"\n",(0,a.jsx)(s.li,{children:"Key: the key content of the Kafka message (base64-encoded)"}),"\n",(0,a.jsx)(s.li,{children:"Value: the value content of the Kafka message"}),"\n",(0,a.jsxs)(s.li,{children:["KeySchema: the schema detected from ",(0,a.jsx)(s.code,{children:"keyDeserializationClass"})]}),"\n",(0,a.jsxs)(s.li,{children:["ValueSchema: the schema detected from ",(0,a.jsx)(s.code,{children:"valueDeserializationClass"})]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Topic compaction and partition routing use the Pulsar key, which contains the Kafka key, and so they are driven by the same value that you have on Kafka."}),"\n",(0,a.jsxs)(s.p,{children:["When you consume data from Pulsar topics, you can use the ",(0,a.jsx)(s.code,{children:"KeyValue"})," schema. In this way, you can decode the data properly.\nIf you want to access the raw key, you can use the ",(0,a.jsx)(s.code,{children:"Message#getKeyBytes()"})," API."]}),"\n",(0,a.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(s.p,{children:"Before using the Kafka source connector, you need to create a configuration file through one of the following methods."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"JSON"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",children:'  {\n    "bootstrapServers": "pulsar-kafka:9092",\n    "groupId": "test-pulsar-io",\n    "topic": "my-topic",\n    "sessionTimeoutMs": "10000",\n    "autoCommitEnabled": false\n  }\n'})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"YAML"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-yaml",children:'configs:\n   bootstrapServers: "pulsar-kafka:9092"\n   groupId: "test-pulsar-io"\n   topic: "my-topic"\n   sessionTimeoutMs: "10000"\n   autoCommitEnabled: false\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(s.p,{children:"You can make the Kafka source connector as a Pulsar built-in connector and use it on a standalone cluster or an on-premises cluster."}),"\n",(0,a.jsx)(s.h3,{id:"standalone-cluster",children:"Standalone cluster"}),"\n",(0,a.jsx)(s.p,{children:"This example describes how to use the Kafka source connector to feed data from Kafka and write data to Pulsar topics in the standalone mode."}),"\n",(0,a.jsx)(s.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Install ",(0,a.jsx)(s.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"}),"(Community Edition)."]}),"\n"]}),"\n",(0,a.jsx)(s.h4,{id:"steps",children:"Steps"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Download and start the Confluent Platform.\nFor details, see the ",(0,a.jsx)(s.a,{href:"https://docs.confluent.io/platform/current/quickstart/ce-docker-quickstart.html#step-1-download-and-start-cp",children:"documentation"})," to install the Kafka service locally."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Pull a Pulsar image and start Pulsar in standalone mode."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"docker pull apachepulsar/pulsar:latest\n\ndocker run -d -it -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-kafka-standalone apachepulsar/pulsar:latest bin/pulsar standalone\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Create a producer file ",(0,a.jsx)(s.em,{children:"kafka-producer.py"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"from kafka import KafkaProducer\nproducer = KafkaProducer(bootstrap_servers='localhost:9092')\nfuture = producer.send('my-topic', b'hello world')\nfuture.get()\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Create a consumer file ",(0,a.jsx)(s.em,{children:"pulsar-client.py"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"import pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic', subscription_name='my-aa')\n\nwhile True:\n    msg = consumer.receive()\n    print msg\n    print dir(msg)\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Copy the following files to Pulsar."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"docker cp pulsar-io-kafka.nar pulsar-kafka-standalone:/pulsar\ndocker cp kafkaSourceConfig.yaml pulsar-kafka-standalone:/pulsar/conf\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Open a new terminal window and start the Kafka source connector in local run mode."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"docker exec -it pulsar-kafka-standalone /bin/bash\n\n./bin/pulsar-admin source localrun \\\n   --archive $PWD/pulsar-io-kafka.nar \\\n   --tenant public \\\n   --namespace default \\\n   --name kafka \\\n   --destination-topic-name my-topic \\\n   --source-config-file $PWD/conf/kafkaSourceConfig.yaml \\\n   --parallelism 1\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Open a new terminal window and run the Kafka producer locally."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"python3 kafka-producer.py\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Open a new terminal window and run the Pulsar consumer locally."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"python3 pulsar-client.py\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"The following information appears on the consumer terminal window."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"Received message: 'hello world'\n"})}),"\n",(0,a.jsx)(s.h3,{id:"on-premises-cluster",children:"On-premises cluster"}),"\n",(0,a.jsx)(s.p,{children:"This example explains how to create a Kafka source connector in an on-premises cluster."}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Copy the NAR package of the Kafka connector to the Pulsar connectors directory."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"cp pulsar-io-kafka-{{connector:version}}.nar $PULSAR_HOME/connectors/pulsar-io-kafka-{{connector:version}}.nar\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Reload all ",(0,a.jsx)(s.a,{href:"/docs/3.2.x/io-connectors",children:"built-in connectors"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"PULSAR_HOME/bin/pulsar-admin sources reload\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Check whether the Kafka source connector is available on the list or not."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"PULSAR_HOME/bin/pulsar-admin sources available-sources\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Create a Kafka source connector on a Pulsar cluster using the ",(0,a.jsx)(s.a,{href:"pathname:///reference/#/3.2.x/pulsar-admin/sources?id=create",children:(0,a.jsx)(s.code,{children:"pulsar-admin sources create"})})," command."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"PULSAR_HOME/bin/pulsar-admin sources create \\\n--source-config-file <absolute path to kafka-source-config.yaml>\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var r=n(96540);const a={},t=r.createContext(a);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);