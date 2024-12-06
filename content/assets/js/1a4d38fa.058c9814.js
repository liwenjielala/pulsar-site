"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[37943],{53986:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"performance-pulsar-perf","title":"Pulsar Perf","description":"This document describes how to use the Pulsar Perf for performance testing. For detailed information about performance tuning, see here.","source":"@site/versioned_docs/version-2.7.3/performance-pulsar-perf.md","sourceDirName":".","slug":"/performance-pulsar-perf","permalink":"/docs/2.7.3/performance-pulsar-perf","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.3/performance-pulsar-perf.md","tags":[],"version":"2.7.3","frontMatter":{"id":"performance-pulsar-perf","title":"Pulsar Perf","sidebar_label":"Pulsar Perf","original_id":"performance-pulsar-perf"},"sidebar":"docsSidebar","previous":{"title":"Bouncy Castle Providers","permalink":"/docs/2.7.3/security-bouncy-castle"},"next":{"title":"Overview","permalink":"/docs/2.7.3/client-libraries"}}');var n=s(74848),i=s(28453);const c={id:"performance-pulsar-perf",title:"Pulsar Perf",sidebar_label:"Pulsar Perf",original_id:"performance-pulsar-perf"},d=void 0,l={},o=[{value:"Pulsar Perf",id:"pulsar-perf",level:2},{value:"Produce messages",id:"produce-messages",level:3},{value:"Configuration options for <code>pulsar-perf produce</code>",id:"configuration-options-for-pulsar-perf-produce",level:4},{value:"Consume messages",id:"consume-messages",level:3},{value:"Configuration options for <code>pulsar-perf consume</code>",id:"configuration-options-for-pulsar-perf-consume",level:4},{value:"Configurations",id:"configurations",level:3},{value:"HdrHistogram Plotter",id:"hdrhistogram-plotter",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This document describes how to use the Pulsar Perf for performance testing. For detailed information about performance tuning, see ",(0,n.jsx)(t.a,{href:"https://streamnative.io/whitepaper/taking-a-deep-dive-into-apache-pulsar-architecture-for-performance-tuning/",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"pulsar-perf",children:"Pulsar Perf"}),"\n",(0,n.jsx)(t.p,{children:"The Pulsar Perf is a built-in performance test tool for Apache Pulsar. You can use the Pulsar Perf to test message writing or reading performance."}),"\n",(0,n.jsx)(t.h3,{id:"produce-messages",children:"Produce messages"}),"\n",(0,n.jsxs)(t.p,{children:["This example shows how the Pulsar Perf produces messages with default options. For all configuration options available for the ",(0,n.jsx)(t.code,{children:"pulsar-perf produce"})," command, see ",(0,n.jsx)(t.a,{href:"#configuration-options-for-pulsar-perf-produce",children:"configuration options"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\nbin/pulsar-perf produce my-topic\n\n"})}),"\n",(0,n.jsx)(t.p,{children:"After the command is executed, the test data is continuously output on the Console."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Output"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\n19:53:31.459 [pulsar-perf-producer-exec-1-1] INFO  org.apache.pulsar.testclient.PerformanceProducer - Created 1 producers\n19:53:31.482 [pulsar-timer-5-1] WARN  com.scurrilous.circe.checksum.Crc32cIntChecksum - Failed to load Circe JNI library. Falling back to Java based CRC32c provider\n19:53:40.861 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:     93.7  msg/s ---      0.7 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.575 ms - med:   3.460 - 95pct:   4.790 - 99pct:   5.308 - 99.9pct:   5.834 - 99.99pct:   6.609 - Max:   6.609\n19:53:50.909 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:    100.0  msg/s ---      0.8 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.437 ms - med:   3.328 - 95pct:   4.656 - 99pct:   5.071 - 99.9pct:   5.519 - 99.99pct:   5.588 - Max:   5.588\n19:54:00.926 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:    100.0  msg/s ---      0.8 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.376 ms - med:   3.276 - 95pct:   4.520 - 99pct:   4.939 - 99.9pct:   5.440 - 99.99pct:   5.490 - Max:   5.490\n19:54:10.940 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:    100.0  msg/s ---      0.8 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.298 ms - med:   3.220 - 95pct:   4.474 - 99pct:   4.926 - 99.9pct:   5.645 - 99.99pct:   5.654 - Max:   5.654\n19:54:20.956 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:    100.1  msg/s ---      0.8 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.308 ms - med:   3.199 - 95pct:   4.532 - 99pct:   4.871 - 99.9pct:   5.291 - 99.99pct:   5.323 - Max:   5.323\n19:54:30.972 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:    100.0  msg/s ---      0.8 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.249 ms - med:   3.144 - 95pct:   4.437 - 99pct:   4.970 - 99.9pct:   5.329 - 99.99pct:   5.414 - Max:   5.414\n19:54:40.987 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:    100.0  msg/s ---      0.8 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.435 ms - med:   3.361 - 95pct:   4.772 - 99pct:   5.150 - 99.9pct:   5.373 - 99.99pct:   5.837 - Max:   5.837\n^C19:54:44.325 [Thread-1] INFO  org.apache.pulsar.testclient.PerformanceProducer - Aggregated throughput stats --- 7286 records sent --- 99.140 msg/s --- 0.775 Mbit/s\n19:54:44.336 [Thread-1] INFO  org.apache.pulsar.testclient.PerformanceProducer - Aggregated latency stats --- Latency: mean:   3.383 ms - med:   3.293 - 95pct:   4.610 - 99pct:   5.059 - 99.9pct:   5.588 - 99.99pct:   5.837 - 99.999pct:   6.609 - Max:   6.609\n\n"})}),"\n",(0,n.jsxs)(t.p,{children:["From the above test data, you can get the throughput statistics and the write latency statistics. The aggregated statistics is printed when the Pulsar Perf is stopped. You can press ",(0,n.jsx)(t.strong,{children:"Ctrl"}),"+",(0,n.jsx)(t.strong,{children:"C"})," to stop the Pulsar Perf. After the Pulsar Perf is stopped, the ",(0,n.jsx)(t.a,{href:"http://hdrhistogram.github.io/HdrHistogram/",children:"HdrHistogram"})," formatted test result appears under your directory. The document looks like ",(0,n.jsx)(t.code,{children:"perf-producer-1589370810837.hgrm"}),". You can also check the test result through ",(0,n.jsx)(t.a,{href:"https://hdrhistogram.github.io/HdrHistogram/plotFiles.html",children:"HdrHistogram Plotter"}),". For details about how to check the test result through ",(0,n.jsx)(t.a,{href:"https://hdrhistogram.github.io/HdrHistogram/plotFiles.html",children:"HdrHistogram Plotter"}),", see ",(0,n.jsx)(t.a,{href:"#hdrhistogram-plotter",children:"HdrHistogram Plotter"}),"."]}),"\n",(0,n.jsxs)(t.h4,{id:"configuration-options-for-pulsar-perf-produce",children:["Configuration options for ",(0,n.jsx)(t.code,{children:"pulsar-perf produce"})]}),"\n",(0,n.jsxs)(t.p,{children:["You can get all options by executing the ",(0,n.jsx)(t.code,{children:"bin/pulsar-perf produce -h"})," command. Therefore, you can modify these options as required."]}),"\n",(0,n.jsxs)(t.p,{children:["The following table lists configuration options available for the ",(0,n.jsx)(t.code,{children:"pulsar-perf produce"})," command."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Option"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"auth-params"}),(0,n.jsxs)(t.td,{children:["Set the authentication parameters, whose format is determined by the implementation of the ",(0,n.jsx)(t.code,{children:"configure"}),' method in the authentication plugin class, such as "key1',":val1",",key2",":val2",'" or "{"key1":"val1","key2":"val2"}".']}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"auth_plugin"}),(0,n.jsx)(t.td,{children:"Set the authentication plugin class name."}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"batch-max-bytes"}),(0,n.jsx)(t.td,{children:"Set the maximum number of bytes for each batch."}),(0,n.jsx)(t.td,{children:"4194304"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"batch-max-messages"}),(0,n.jsx)(t.td,{children:"Set the maximum number of messages for each batch."}),(0,n.jsx)(t.td,{children:"1000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"batch-time-window"}),(0,n.jsx)(t.td,{children:"Set a window for a batch of messages."}),(0,n.jsx)(t.td,{children:"1 ms"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"batch-max-bytes"}),(0,n.jsx)(t.td,{children:"Set the maximum number of bytes for each batch."}),(0,n.jsx)(t.td,{children:"4194304"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"batch-max-messages"}),(0,n.jsx)(t.td,{children:"Set the maximum number of messages for each batch."}),(0,n.jsx)(t.td,{children:"1000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"chunking"}),(0,n.jsx)(t.td,{children:"Configure whether to split the message and publish in chunks if message size is larger than allowed max size."}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"compression"}),(0,n.jsx)(t.td,{children:"Compress the message payload."}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"conf-file"}),(0,n.jsx)(t.td,{children:"Set the configuration file."}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"delay"}),(0,n.jsx)(t.td,{children:"Mark messages with a given delay."}),(0,n.jsx)(t.td,{children:"0s"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"encryption-key-name"}),(0,n.jsx)(t.td,{children:"Set the name of the public key used to encrypt the payload."}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"encryption-key-value-file"}),(0,n.jsx)(t.td,{children:"Set the file which contains the public key used to encrypt the payload."}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exit-on-failure"}),(0,n.jsx)(t.td,{children:"Configure whether to exit from the process on publish failure."}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"help"}),(0,n.jsx)(t.td,{children:"Configure the help message."}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max-connections"}),(0,n.jsx)(t.td,{children:"Set the maximum number of TCP connections to a single broker."}),(0,n.jsx)(t.td,{children:"100"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max-outstanding"}),(0,n.jsx)(t.td,{children:"Set the maximum number of outstanding messages."}),(0,n.jsx)(t.td,{children:"1000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max-outstanding-across-partitions"}),(0,n.jsx)(t.td,{children:"Set the maximum number of outstanding messages across partitions."}),(0,n.jsx)(t.td,{children:"50000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"message-key-generation-mode"}),(0,n.jsxs)(t.td,{children:["Set the generation mode of message key. Valid options are ",(0,n.jsx)(t.code,{children:"autoIncrement"}),", ",(0,n.jsx)(t.code,{children:"random"}),"."]}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"num-io-threads"}),(0,n.jsx)(t.td,{children:"Set the number of threads to be used for handling connections to brokers."}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"num-messages"}),(0,n.jsx)(t.td,{children:"Set the number of messages to be published in total. If it is set to 0, it keeps publishing messages."}),(0,n.jsx)(t.td,{children:"0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"num-producers"}),(0,n.jsx)(t.td,{children:"Set the number of producers for each topic."}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"num-test-threads"}),(0,n.jsx)(t.td,{children:"Set the number of test threads."}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"num-topic"}),(0,n.jsx)(t.td,{children:"Set the number of topics."}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"payload-delimiter"}),(0,n.jsx)(t.td,{children:"Set the delimiter used to split lines when using payload from a file."}),(0,n.jsx)(t.td,{children:"\\n"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"payload-file"}),(0,n.jsx)(t.td,{children:"Use the payload from an UTF-8 encoded text file and a payload is randomly selected when messages are published."}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rate"}),(0,n.jsx)(t.td,{children:"Set the publish rate of messages across topics."}),(0,n.jsx)(t.td,{children:"100"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"service-url"}),(0,n.jsx)(t.td,{children:"Set the Pulsar service URL."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"size"}),(0,n.jsx)(t.td,{children:"Set the message size."}),(0,n.jsx)(t.td,{children:"1024 bytes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"stats-interval-seconds"}),(0,n.jsx)(t.td,{children:"Set the statistics interval. If it is set to 0, statistics is disabled."}),(0,n.jsx)(t.td,{children:"0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"test-duration"}),(0,n.jsx)(t.td,{children:"Set the test duration. If it is set to 0, it keeps publishing tests."}),(0,n.jsx)(t.td,{children:"0s"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"trust-cert-file"}),(0,n.jsx)(t.td,{children:"Set the path for the trusted TLS certificate file."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"warmup-time"}),(0,n.jsx)(t.td,{children:"Set the warm-up time."}),(0,n.jsx)(t.td,{children:"1s"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"consume-messages",children:"Consume messages"}),"\n",(0,n.jsx)(t.p,{children:"This example shows how the Pulsar Perf consumes messages with default options."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\nbin/pulsar-perf consume my-topic\n\n"})}),"\n",(0,n.jsx)(t.p,{children:"After the command is executed, the test data is continuously output on the Console."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Output"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\n20:35:37.071 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Start receiving from 1 consumers on 1 topics\n20:35:41.150 [pulsar-client-io-1-9] WARN  com.scurrilous.circe.checksum.Crc32cIntChecksum - Failed to load Circe JNI library. Falling back to Java based CRC32c provider\n20:35:47.092 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Throughput received: 59.572  msg/s -- 0.465 Mbit/s --- Latency: mean: 11.298 ms - med: 10 - 95pct: 15 - 99pct: 98 - 99.9pct: 137 - 99.99pct: 152 - Max: 152\n20:35:57.104 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Throughput received: 99.958  msg/s -- 0.781 Mbit/s --- Latency: mean: 9.176 ms - med: 9 - 95pct: 15 - 99pct: 16 - 99.9pct: 17 - 99.99pct: 18 - Max: 18\n20:36:07.115 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Throughput received: 100.006  msg/s -- 0.781 Mbit/s --- Latency: mean: 9.316 ms - med: 9 - 95pct: 15 - 99pct: 16 - 99.9pct: 17 - 99.99pct: 17 - Max: 17\n20:36:17.125 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Throughput received: 100.085  msg/s -- 0.782 Mbit/s --- Latency: mean: 9.327 ms - med: 9 - 95pct: 15 - 99pct: 16 - 99.9pct: 17 - 99.99pct: 17 - Max: 17\n20:36:27.136 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Throughput received: 99.900  msg/s -- 0.780 Mbit/s --- Latency: mean: 9.404 ms - med: 9 - 95pct: 15 - 99pct: 16 - 99.9pct: 17 - 99.99pct: 17 - Max: 17\n20:36:37.147 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Throughput received: 99.985  msg/s -- 0.781 Mbit/s --- Latency: mean: 8.998 ms - med: 9 - 95pct: 15 - 99pct: 16 - 99.9pct: 17 - 99.99pct: 17 - Max: 17\n^C20:36:42.755 [Thread-1] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Aggregated throughput stats --- 6051 records received --- 92.125 msg/s --- 0.720 Mbit/s\n20:36:42.759 [Thread-1] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Aggregated latency stats --- Latency: mean: 9.422 ms - med: 9 - 95pct: 15 - 99pct: 16 - 99.9pct: 98 - 99.99pct: 137 - 99.999pct: 152 - Max: 152\n\n"})}),"\n",(0,n.jsxs)(t.p,{children:["From the output test data, you can get the throughput statistics and the end-to-end latency statistics. The aggregated statistics is printed after the Pulsar Perf is stopped. You can press ",(0,n.jsx)(t.strong,{children:"Ctrl"}),"+",(0,n.jsx)(t.strong,{children:"C"})," to stop the Pulsar Perf."]}),"\n",(0,n.jsxs)(t.h4,{id:"configuration-options-for-pulsar-perf-consume",children:["Configuration options for ",(0,n.jsx)(t.code,{children:"pulsar-perf consume"})]}),"\n",(0,n.jsxs)(t.p,{children:["You can get all options by executing the ",(0,n.jsx)(t.code,{children:"bin/pulsar-perf consume -h"})," command. Therefore, you can modify these options as required."]}),"\n",(0,n.jsxs)(t.p,{children:["The following table lists configuration options available for the ",(0,n.jsx)(t.code,{children:"pulsar-perf consume"})," command."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Option"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"acks-delay-millis"}),(0,n.jsx)(t.td,{children:"Set the acknowledgment grouping delay in milliseconds."}),(0,n.jsx)(t.td,{children:"100 ms"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"auth-params"}),(0,n.jsxs)(t.td,{children:["Set the authentication parameters, whose format is determined by the implementation of the ",(0,n.jsx)(t.code,{children:"configure"}),' method in the authentication plugin class, such as "key1',":val1",",key2",":val2",'" or "{"key1":"val1","key2":"val2"}".']}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"auth_plugin"}),(0,n.jsx)(t.td,{children:"Set the authentication plugin class name."}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"auto_ack_chunk_q_full"}),(0,n.jsx)(t.td,{children:"Configure whether to automatically ack for the oldest message in receiver queue if the queue is full."}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"listener-name"}),(0,n.jsx)(t.td,{children:"Set the listener name for the broker."}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"batch-index-ack"}),(0,n.jsx)(t.td,{children:"Enable or disable the batch index acknowledgment."}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"conf-file"}),(0,n.jsx)(t.td,{children:"Set the configuration file."}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"encryption-key-value-file"}),(0,n.jsx)(t.td,{children:"Set the file which contains the public key used to encrypt the payload."}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"help"}),(0,n.jsx)(t.td,{children:"Configure the help message."}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"expire_time_incomplete_chunked_messages"}),(0,n.jsx)(t.td,{children:"Set the expiration time for incomplete chunk messages (in milliseconds)."}),(0,n.jsx)(t.td,{children:"0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max-connections"}),(0,n.jsx)(t.td,{children:"Set the maximum number of TCP connections to a single broker."}),(0,n.jsx)(t.td,{children:"100"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_chunked_msg"}),(0,n.jsx)(t.td,{children:"Set the max pending chunk messages."}),(0,n.jsx)(t.td,{children:"0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"num-consumers"}),(0,n.jsx)(t.td,{children:"Set the number of consumers for each topic."}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"num-io-threads"}),(0,n.jsx)(t.td,{children:"Set the number of threads to be used for handling connections to brokers."}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"num-subscriptions"}),(0,n.jsx)(t.td,{children:"Set the number of subscriptions (per topic)."}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"num-topic"}),(0,n.jsx)(t.td,{children:"Set the number of topics."}),(0,n.jsx)(t.td,{children:"1"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rate"}),(0,n.jsx)(t.td,{children:"Simulate a slow message consumer (rate in msg/s)."}),(0,n.jsx)(t.td,{children:"0.0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"receiver-queue-size"}),(0,n.jsx)(t.td,{children:"Set the size of the receiver queue."}),(0,n.jsx)(t.td,{children:"1000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"receiver-queue-size-across-partitions"}),(0,n.jsx)(t.td,{children:"Set the max total size of the receiver queue across partitions."}),(0,n.jsx)(t.td,{children:"50000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"replicated"}),(0,n.jsx)(t.td,{children:"Configure whether the subscription status should be replicated."}),(0,n.jsx)(t.td,{children:"false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"service-url"}),(0,n.jsx)(t.td,{children:"Set the Pulsar service URL."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"stats-interval-seconds"}),(0,n.jsx)(t.td,{children:"Set the statistics interval. If it is set to 0, statistics is disabled."}),(0,n.jsx)(t.td,{children:"0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"subscriber-name"}),(0,n.jsx)(t.td,{children:"Set the subscriber name prefix."}),(0,n.jsx)(t.td,{children:"sub"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"subscription-position"}),(0,n.jsxs)(t.td,{children:["Set the subscription position. Valid values are ",(0,n.jsx)(t.code,{children:"Latest"}),", ",(0,n.jsx)(t.code,{children:"Earliest"}),"."]}),(0,n.jsx)(t.td,{children:"Latest"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"subscription-type"}),(0,n.jsxs)(t.td,{children:["Set the subscription type. ",(0,n.jsx)("li",{children:" Exclusive "}),(0,n.jsx)("li",{children:" Shared "}),(0,n.jsx)("li",{children:" Failover "}),(0,n.jsx)("li",{children:" Key_Shared "})]}),(0,n.jsx)(t.td,{children:"Exclusive"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"test-duration"}),(0,n.jsx)(t.td,{children:"Set the test duration (in seconds). If the value is 0 or smaller than 0, it keeps consuming messages."}),(0,n.jsx)(t.td,{children:"0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tls-allow-insecure"}),(0,n.jsx)(t.td,{children:"Set the allowed insecure TLS connection."}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"trust-cert-file"}),(0,n.jsx)(t.td,{children:"Set the path for the trusted TLS certificate file."}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"configurations",children:"Configurations"}),"\n",(0,n.jsxs)(t.p,{children:["By default, the Pulsar Perf uses ",(0,n.jsx)(t.code,{children:"conf/client.conf"})," as the default configuration and uses ",(0,n.jsx)(t.code,{children:"conf/log4j2.yaml"})," as the default Log4j configuration. If you want to connect to other Pulsar clusters, you can update the ",(0,n.jsx)(t.code,{children:"brokerServiceUrl"})," in the client configuration."]}),"\n",(0,n.jsx)(t.p,{children:"You can use the following commands to change the configuration file and the Log4j configuration file."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\nexport PULSAR_CLIENT_CONF=<your-config-file>\nexport PULSAR_LOG_CONF=<your-log-config-file>\n\n"})}),"\n",(0,n.jsx)(t.p,{children:"In addition, you can use the following command to configure the JVM configuration through environment variables:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\nexport PULSAR_EXTRA_OPTS='-Xms4g -Xmx4g -XX:MaxDirectMemorySize=4g'\n\n"})}),"\n",(0,n.jsx)(t.h2,{id:"hdrhistogram-plotter",children:"HdrHistogram Plotter"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://hdrhistogram.github.io/HdrHistogram/plotFiles.html",children:"HdrHistogram Plotter"})," is a visualization tool for checking Pulsar Perf test results, which makes it easier to observe the test results."]}),"\n",(0,n.jsx)(t.p,{children:"To check test results through the HdrHistogram Plotter, follow these steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Clone the HdrHistogram repository from GitHub to the local."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\ngit clone https://github.com/HdrHistogram/HdrHistogram.git\n\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Switch to the HdrHistogram folder."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\ncd HdrHistogram\n\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Install the HdrHistogram Plotter."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\nmvn clean install -DskipTests\n\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Transform the file generated by the Pulsar Perf."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"\n./HistogramLogProcessor -i <hgrm file path that pulsar-perf generated> -o <output file>\n\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["You will get two output files. Upload the output file with the filename extension of .hgrm to the ",(0,n.jsx)(t.a,{href:"https://hdrhistogram.github.io/HdrHistogram/plotFiles.html",children:"HdrHistogram Plotter"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Check the test result through the Graphical User Interface of the HdrHistogram Plotter, as shown below."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(43385).A+"",width:"3356",height:"1328"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},43385:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/perf-produce-493b74d7a0a3ecb764cb21cabd8746b5.png"},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>d});var r=s(96540);const n={},i=r.createContext(n);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);