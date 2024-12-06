"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[52545],{7001:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"adaptors-spark","title":"Pulsar adaptor for Apache Spark","description":"Spark Streaming receiver","source":"@site/versioned_docs/version-2.8.x/adaptors-spark.md","sourceDirName":".","slug":"/adaptors-spark","permalink":"/docs/2.8.x/adaptors-spark","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/adaptors-spark.md","tags":[],"version":"2.8.x","frontMatter":{"id":"adaptors-spark","title":"Pulsar adaptor for Apache Spark","sidebar_label":"Apache Spark","original_id":"adaptors-spark"},"sidebar":"docsSidebar","previous":{"title":"Kafka client wrapper","permalink":"/docs/2.8.x/adaptors-kafka"},"next":{"title":"Apache Storm","permalink":"/docs/2.8.x/adaptors-storm"}}');var s=a(74848),t=a(28453);const i={id:"adaptors-spark",title:"Pulsar adaptor for Apache Spark",sidebar_label:"Apache Spark",original_id:"adaptors-spark"},o=void 0,c={},p=[{value:"Spark Streaming receiver",id:"spark-streaming-receiver",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Maven",id:"maven",level:4},{value:"Gradle",id:"gradle",level:4},{value:"Usage",id:"usage",level:3}];function l(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"spark-streaming-receiver",children:"Spark Streaming receiver"}),"\n",(0,s.jsxs)(r.p,{children:["The Spark Streaming receiver for Pulsar is a custom receiver that enables Apache ",(0,s.jsx)(r.a,{href:"https://spark.apache.org/streaming/",children:"Spark Streaming"})," to receive raw data from Pulsar."]}),"\n",(0,s.jsxs)(r.p,{children:["An application can receive data in ",(0,s.jsx)(r.a,{href:"https://spark.apache.org/docs/latest/programming-guide.html#resilient-distributed-datasets-rdds",children:"Resilient Distributed Dataset"})," (RDD) format via the Spark Streaming receiver and can process it in a variety of ways."]}),"\n",(0,s.jsx)(r.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(r.p,{children:["To use the receiver, include a dependency for the ",(0,s.jsx)(r.code,{children:"pulsar-spark"})," library in your Java configuration."]}),"\n",(0,s.jsx)(r.h4,{id:"maven",children:"Maven"}),"\n",(0,s.jsxs)(r.p,{children:["If you're using Maven, add this to your ",(0,s.jsx)(r.code,{children:"pom.xml"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-xml",children:"\n\x3c!-- in your <properties> block --\x3e\n<pulsar.version>2.8.4</pulsar.version>\n\n\x3c!-- in your <dependencies> block --\x3e\n<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>pulsar-spark</artifactId>\n  <version>${pulsar.version}</version>\n</dependency>\n\n"})}),"\n",(0,s.jsx)(r.h4,{id:"gradle",children:"Gradle"}),"\n",(0,s.jsxs)(r.p,{children:["If you're using Gradle, add this to your ",(0,s.jsx)(r.code,{children:"build.gradle"})," file:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-groovy",children:"\ndef pulsarVersion = \"2.8.4\"\n\ndependencies {\n    compile group: 'org.apache.pulsar', name: 'pulsar-spark', version: pulsarVersion\n}\n\n"})}),"\n",(0,s.jsx)(r.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(r.p,{children:["Pass an instance of ",(0,s.jsx)(r.code,{children:"SparkStreamingPulsarReceiver"})," to the ",(0,s.jsx)(r.code,{children:"receiverStream"})," method in ",(0,s.jsx)(r.code,{children:"JavaStreamingContext"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-java",children:'\n    String serviceUrl = "pulsar://localhost:6650/";\n    String topic = "persistent://public/default/test_src";\n    String subs = "test_sub";\n\n    SparkConf sparkConf = new SparkConf().setMaster("local[*]").setAppName("Pulsar Spark Example");\n\n    JavaStreamingContext jsc = new JavaStreamingContext(sparkConf, Durations.seconds(60));\n\n    ConsumerConfigurationData<byte[]> pulsarConf = new ConsumerConfigurationData();\n\n    Set<String> set = new HashSet();\n    set.add(topic);\n    pulsarConf.setTopicNames(set);\n    pulsarConf.setSubscriptionName(subs);\n\n    SparkStreamingPulsarReceiver pulsarReceiver = new SparkStreamingPulsarReceiver(\n        serviceUrl,\n        pulsarConf,\n        new AuthenticationDisabled());\n\n    JavaReceiverInputDStream<byte[]> lineDStream = jsc.receiverStream(pulsarReceiver);\n\n'})}),"\n",(0,s.jsxs)(r.p,{children:["For a complete example, click ",(0,s.jsx)(r.a,{href:"https://github.com/apache/pulsar-adapters/blob/master/examples/spark/src/main/java/org/apache/spark/streaming/receiver/example/SparkStreamingPulsarReceiverExample.java",children:"here"}),'. In this example, the number of messages that contain the string "Pulsar" in received messages is counted.']}),"\n",(0,s.jsxs)(r.p,{children:["Note that if needed, other Pulsar authentication classes can be used. For example, in order to use a token during authentication the following parameters for the ",(0,s.jsx)(r.code,{children:"SparkStreamingPulsarReceiver"})," constructor can be set:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-java",children:'\nSparkStreamingPulsarReceiver pulsarReceiver = new SparkStreamingPulsarReceiver(\n        serviceUrl,\n        pulsarConf,\n        new AuthenticationToken("token:<secret-JWT-token>"));\n\n'})})]})}function d(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>i,x:()=>o});var n=a(96540);const s={},t=n.createContext(s);function i(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);