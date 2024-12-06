"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[84648],{13317:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"io-kafka-source","title":"Kafka source connector","description":"The Kafka source connector pulls messages from Kafka topics and persists the messages","source":"@site/versioned_docs/version-2.7.4/io-kafka-source.md","sourceDirName":".","slug":"/io-kafka-source","permalink":"/docs/2.7.4/io-kafka-source","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.4/io-kafka-source.md","tags":[],"version":"2.7.4","frontMatter":{"id":"io-kafka-source","title":"Kafka source connector","sidebar_label":"Kafka source connector","original_id":"io-kafka-source"}}');var a=s(74848),i=s(28453);const t={id:"io-kafka-source",title:"Kafka source connector",sidebar_label:"Kafka source connector",original_id:"io-kafka-source"},l=void 0,c={},o=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"The Kafka source connector pulls messages from Kafka topics and persists the messages\nto Pulsar topics."}),"\n",(0,a.jsx)(n.p,{children:"This guide explains how to configure and use the Kafka source connector."}),"\n",(0,a.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(n.p,{children:"The configuration of the Kafka source connector has the following properties."}),"\n",(0,a.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Required"}),(0,a.jsx)(n.th,{children:"Default"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"bootstrapServers"})}),(0,a.jsx)(n.td,{children:"String"}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:'" " (empty string)'}),(0,a.jsx)(n.td,{children:"A comma-separated list of host and port pairs for establishing the initial connection to the Kafka cluster."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"groupId"})}),(0,a.jsx)(n.td,{children:"String"}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:'" " (empty string)'}),(0,a.jsx)(n.td,{children:"A unique string that identifies the group of consumer processes to which this consumer belongs."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"fetchMinBytes"})}),(0,a.jsx)(n.td,{children:"long"}),(0,a.jsx)(n.td,{children:"false"}),(0,a.jsx)(n.td,{children:"1"}),(0,a.jsx)(n.td,{children:"The minimum byte expected for each fetch response."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"autoCommitEnabled"})}),(0,a.jsx)(n.td,{children:"boolean"}),(0,a.jsx)(n.td,{children:"false"}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsxs)(n.td,{children:["If set to true, the consumer's offset is periodically committed in the background.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{})," This committed offset is used when the process fails as the position from which a new consumer begins."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"autoCommitIntervalMs"})}),(0,a.jsx)(n.td,{children:"long"}),(0,a.jsx)(n.td,{children:"false"}),(0,a.jsx)(n.td,{children:"5000"}),(0,a.jsxs)(n.td,{children:["The frequency in milliseconds that the consumer offsets are auto-committed to Kafka if ",(0,a.jsx)(n.code,{children:"autoCommitEnabled"})," is set to true."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"heartbeatIntervalMs"})}),(0,a.jsx)(n.td,{children:"long"}),(0,a.jsx)(n.td,{children:"false"}),(0,a.jsx)(n.td,{children:"3000"}),(0,a.jsxs)(n.td,{children:["The interval between heartbeats to the consumer when using Kafka's group management facilities. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsxs)(n.strong,{children:["Note: ",(0,a.jsx)(n.code,{children:"heartbeatIntervalMs"})," must be smaller than ",(0,a.jsx)(n.code,{children:"sessionTimeoutMs"})]}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"sessionTimeoutMs"})}),(0,a.jsx)(n.td,{children:"long"}),(0,a.jsx)(n.td,{children:"false"}),(0,a.jsx)(n.td,{children:"30000"}),(0,a.jsx)(n.td,{children:"The timeout used to detect consumer failures when using Kafka's group management facility."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"topic"})}),(0,a.jsx)(n.td,{children:"String"}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:'" " (empty string)'}),(0,a.jsx)(n.td,{children:"The Kafka topic which sends messages to Pulsar."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"consumerConfigProperties"})}),(0,a.jsx)(n.td,{children:"Map"}),(0,a.jsx)(n.td,{children:"false"}),(0,a.jsx)(n.td,{children:'" " (empty string)'}),(0,a.jsxs)(n.td,{children:["The consumer configuration properties to be passed to consumers. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(n.strong,{children:"Note: other properties specified in the connector configuration file take precedence over this configuration"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"keyDeserializationClass"})}),(0,a.jsx)(n.td,{children:"String"}),(0,a.jsx)(n.td,{children:"false"}),(0,a.jsx)(n.td,{children:"org.apache.kafka.common.serialization.StringDeserializer"}),(0,a.jsxs)(n.td,{children:["The deserializer class for Kafka consumers to deserialize keys.",(0,a.jsx)("br",{})," The deserializer is set by a specific implementation of ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaAbstractSource.java",children:(0,a.jsx)(n.code,{children:"KafkaAbstractSource"})}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"valueDeserializationClass"})}),(0,a.jsx)(n.td,{children:"String"}),(0,a.jsx)(n.td,{children:"false"}),(0,a.jsx)(n.td,{children:"org.apache.kafka.common.serialization.ByteArrayDeserializer"}),(0,a.jsx)(n.td,{children:"The deserializer class for Kafka consumers to deserialize values."})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"Before using the Kafka source connector, you need to create a configuration file through one of the following methods."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"JSON"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'\n{\n    "bootstrapServers": "pulsar-kafka:9092",\n    "groupId": "test-pulsar-io",\n    "topic": "my-topic",\n    "sessionTimeoutMs": "10000",\n    "autoCommitEnabled": false\n}\n\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"YAML"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'\nconfigs:\n    bootstrapServers: "pulsar-kafka:9092"\n    groupId: "test-pulsar-io"\n    topic: "my-topic"\n    sessionTimeoutMs: "10000"\n    autoCommitEnabled: false\n\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.p,{children:"Here is an example of using the Kafka source connecter with the configuration file as shown previously."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Download a Kafka client and a Kafka connector."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ wget https://repo1.maven.org/maven2/org/apache/kafka/kafka-clients/0.10.2.1/kafka-clients-0.10.2.1.jar\n\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.4.0/connectors/pulsar-io-kafka-2.4.0.nar\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a network."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker network create kafka-pulsar\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Pull a ZooKeeper image and start ZooKeeper."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker pull wurstmeister/zookeeper\n\n$ docker run -d -it -p 2181:2181 --name pulsar-kafka-zookeeper --network kafka-pulsar wurstmeister/zookeeper\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Pull a Kafka image and start Kafka."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker pull wurstmeister/kafka:2.11-1.0.2\n\n$ docker run -d -it --network kafka-pulsar -p 6667:6667 -p 9092:9092 -e KAFKA_ADVERTISED_HOST_NAME=pulsar-kafka -e KAFKA_ZOOKEEPER_CONNECT=pulsar-kafka-zookeeper:2181 --name pulsar-kafka wurstmeister/kafka:2.11-1.0.2\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Pull a Pulsar image and start Pulsar standalone."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker pull apachepulsar/pulsar:2.4.0\n\n$ docker run -d -it --network kafka-pulsar -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-kafka-standalone apachepulsar/pulsar:2.4.0 bin/pulsar standalone\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Create a producer file ",(0,a.jsx)(n.em,{children:"kafka-producer.py"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"\nfrom kafka import KafkaProducer\nproducer = KafkaProducer(bootstrap_servers='pulsar-kafka:9092')\nfuture = producer.send('my-topic', b'hello world')\nfuture.get()\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Create a consumer file ",(0,a.jsx)(n.em,{children:"pulsar-client.py"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic', subscription_name='my-aa')\n\nwhile True:\n    msg = consumer.receive()\n    print msg\n    print dir(msg)\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Copy the following files to Pulsar."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker cp pulsar-io-kafka-2.4.0.nar pulsar-kafka-standalone:/pulsar\n$ docker cp kafkaSourceConfig.yaml pulsar-kafka-standalone:/pulsar/conf\n$ docker cp kafka-clients-0.10.2.1.jar pulsar-kafka-standalone:/pulsar/lib\n$ docker cp pulsar-client.py pulsar-kafka-standalone:/pulsar/\n$ docker cp kafka-producer.py pulsar-kafka-standalone:/pulsar/\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Open a new terminal window and start the Kafka source connector in local run mode."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker exec -it pulsar-kafka-standalone /bin/bash\n\n$ ./bin/pulsar-admin source localrun \\\n--archive ./pulsar-io-kafka-2.4.0.nar \\\n--classname org.apache.pulsar.io.kafka.KafkaBytesSource \\\n--tenant public \\\n--namespace default \\\n--name kafka \\\n--destination-topic-name my-topic \\\n--source-config-file ./conf/kafkaSourceConfig.yaml \\\n--parallelism 1\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Open a new terminal window and run the consumer."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker exec -it pulsar-kafka-standalone /bin/bash\n\n$ pip install kafka-python\n\n$ python3 kafka-producer.py\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"The following information appears on the consumer terminal window."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\nReceived message: 'hello world'\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var r=s(96540);const a={},i=r.createContext(a);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);