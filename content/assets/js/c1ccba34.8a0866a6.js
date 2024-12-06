"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[92599],{33281:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var r=n(56057),t=n(74848),i=n(28453);const o={author:"Xiaolong Ran",authorURL:"https://twitter.com/wolf4j1",title:"Apache Pulsar 2.6.2"},a=void 0,l={authorsImageUrls:[void 0]},c=[{value:"Broker",id:"broker",level:2},{value:"Catch <code>throwable</code> when starting Pulsar",id:"catch-throwable-when-starting-pulsar",level:3},{value:"Handle SubscriptionBusyException in resetCursor API",id:"handle-subscriptionbusyexception-in-resetcursor-api",level:3},{value:"Update Jersey to 2.31",id:"update-jersey-to-231",level:3},{value:"Stop to dispatch when consumers using the Key_Shared subscription stuck",id:"stop-to-dispatch-when-consumers-using-the-key_shared-subscription-stuck",level:3},{value:"Reestablish namespace bundle ownership from false negative releasing and false positive acquiring",id:"reestablish-namespace-bundle-ownership-from-false-negative-releasing-and-false-positive-acquiring",level:3},{value:"Enable users to configure the executor pool size",id:"enable-users-to-configure-the-executor-pool-size",level:3},{value:"Add replicated check for <code>checkInactiveSubscriptions</code>",id:"add-replicated-check-for-checkinactivesubscriptions",level:3},{value:"Upgrade jetty-util version to 9.4.31",id:"upgrade-jetty-util-version-to-9431",level:3},{value:"Add command to delete a cluster&#39;s metadata from ZooKeeper",id:"add-command-to-delete-a-clusters-metadata-from-zookeeper",level:3},{value:"Replace EventLoop with ThreadPoolExecutor to improve performance instead of EventLoop",id:"replace-eventloop-with-threadpoolexecutor-to-improve-performance-instead-of-eventloop",level:3},{value:"Fix deadlock that occurred during topic ownership check",id:"fix-deadlock-that-occurred-during-topic-ownership-check",level:3},{value:"Proxy",id:"proxy",level:2},{value:"Enable users to configure <code>advertisedAddress</code> in proxy",id:"enable-users-to-configure-advertisedaddress-in-proxy",level:3},{value:"Add proxy plugin interface to support user defined additional servlet",id:"add-proxy-plugin-interface-to-support-user-defined-additional-servlet",level:3},{value:"Fix the null exception when starting the proxy service",id:"fix-the-null-exception-when-starting-the-proxy-service",level:3},{value:"Java Client",id:"java-client",level:2},{value:"Support input-stream for trustStore cert",id:"support-input-stream-for-truststore-cert",level:3},{value:"Avoid subscribing the same topic",id:"avoid-subscribing-the-same-topic",level:3},{value:"CPP Client",id:"cpp-client",level:2},{value:"Wait for all seek operations complete",id:"wait-for-all-seek-operations-complete",level:3},{value:"Make <code>clear()</code> thread-safe",id:"make-clear-thread-safe",level:3},{value:"Add Snappy library to Docker images for building C++ packages",id:"add-snappy-library-to-docker-images-for-building-c-packages",level:3},{value:"Support key based batching",id:"support-key-based-batching",level:3},{value:"Functions",id:"functions",level:2},{value:"Enable Kubernetes runtime to customize function instance class path",id:"enable-kubernetes-runtime-to-customize-function-instance-class-path",level:3},{value:"Set <code>dryrun</code> of Kubernetes Runtime to null",id:"set-dryrun-of-kubernetes-runtime-to-null",level:3},{value:"Pulsar SQL",id:"pulsar-sql",level:2},{value:"Upgrade Presto version to 332",id:"upgrade-presto-version-to-332",level:3},{value:"pulsar-admin",id:"pulsar-admin",level:2},{value:"Add CLI command to get the last message ID",id:"add-cli-command-to-get-the-last-message-id",level:3},{value:"Support deleting schema ledgers when deleting topics",id:"support-deleting-schema-ledgers-when-deleting-topics",level:3},{value:"Support deleting all data associated with a cluster",id:"support-deleting-all-data-associated-with-a-cluster",level:3},{value:"Pulsar Perf",id:"pulsar-perf",level:2},{value:"Enable users to configure ioThread number in pulsar-perf",id:"enable-users-to-configure-iothread-number-in-pulsar-perf",level:3},{value:"More information",id:"more-information",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"We are excited to see that the Apache Pulsar community has successfully released the 2.6.2 version after a lot of hard work. It is a great milestone for this fast-growing project and the Pulsar community. 2.6.2 is the result of a big effort from the community, with over 154 commits and a long list of improvements and bug fixes."}),"\n",(0,t.jsx)(s.p,{children:"Here are some highlights and major features added in Pulsar 2.6.2."}),"\n",(0,t.jsx)(s.h2,{id:"broker",children:"Broker"}),"\n",(0,t.jsxs)(s.h3,{id:"catch-throwable-when-starting-pulsar",children:["Catch ",(0,t.jsx)(s.code,{children:"throwable"})," when starting Pulsar"]}),"\n",(0,t.jsxs)(s.p,{children:["Before 2.6.2, Pulsar catched exceptions only when ",(0,t.jsx)(s.code,{children:"BrokerStarter.start()"})," failed. Some errors such as ",(0,t.jsx)(s.code,{children:"NoSuchMethodError"})," or ",(0,t.jsx)(s.code,{children:"NoClassDefFoundError"})," could not be caught, and Pulsar was in abnormal status yet no error log was found in the log file."]}),"\n",(0,t.jsxs)(s.p,{children:["In 2.6.2, we modify exceptions to use ",(0,t.jsx)(s.code,{children:"throwable"})," to avoid this issue."]}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7221",children:"PR-7221"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"handle-subscriptionbusyexception-in-resetcursor-api",children:"Handle SubscriptionBusyException in resetCursor API"}),"\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(s.code,{children:"PersistentSubscription.resetCursor"})," method, ",(0,t.jsx)(s.code,{children:"SubscriptionFencedException"})," is thrown in several places, but it is not handled in ",(0,t.jsx)(s.code,{children:"PersistentTopicBase"}),", so error messages are not clear."]}),"\n",(0,t.jsxs)(s.p,{children:["In 2.6.2, we export ",(0,t.jsx)(s.code,{children:"SubscriptionBusyException"})," in ",(0,t.jsx)(s.code,{children:"PersistentTopicBase"})," for ",(0,t.jsx)(s.code,{children:"resetCursor"}),", so error messages in the REST API are clear."]}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7335",children:"PR-7335"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"update-jersey-to-231",children:"Update Jersey to 2.31"}),"\n",(0,t.jsx)(s.p,{children:"Before 2.6.1, Pulsar used the Jersey 2.27, which has security concerns. In Pulsar 2.6.2, we update the Jersey version to the latest stable version(2.31) to enhance security."}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7515",children:"PR-7515"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"stop-to-dispatch-when-consumers-using-the-key_shared-subscription-stuck",children:"Stop to dispatch when consumers using the Key_Shared subscription stuck"}),"\n",(0,t.jsxs)(s.p,{children:["Consumers using the ",(0,t.jsx)(s.code,{children:"Key_Shared"})," subscription would encounter disorder messages occasionally. The following are steps to reproduce the situation:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Connect Consumer1 to Key_Shared subscription ",(0,t.jsx)(s.code,{children:"sub"})," and stop to receive"]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"receiverQueueSize: 500"}),"\n"]}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsxs)(s.li,{children:["Connect Producer and publish 500 messages with key ",(0,t.jsx)(s.code,{children:"(i % 10)"})]}),"\n",(0,t.jsx)(s.li,{children:"Connect Consumer2 to same subscription and start to receive"}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"receiverQueueSize: 1"}),"\n",(0,t.jsxs)(s.li,{children:["since ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7106",children:"https://github.com/apache/pulsar/pull/7106"}),", Consumer2 can't receive (expected)"]}),"\n"]}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsx)(s.li,{children:"Producer publish more 500 messages with same key generation algorithm"}),"\n",(0,t.jsx)(s.li,{children:"After that, Consumer1 start to receive"}),"\n",(0,t.jsx)(s.li,{children:"Check Consumer2 message ordering"}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"sometimes message ordering was broken in same key"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"In 2.6.2, when consumers use the Key_Shared subscription, Pulsar stops dispatching messages to consumers that are stuck on delivery to guarantee message order."}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7553",children:"PR-7553"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"reestablish-namespace-bundle-ownership-from-false-negative-releasing-and-false-positive-acquiring",children:"Reestablish namespace bundle ownership from false negative releasing and false positive acquiring"}),"\n",(0,t.jsx)(s.p,{children:"In acquiring/releasing namespace bundle ownership, ZooKeeper might be disconnected before or after these operations are persisted in the ZooKeeper cluster. It leads to inconsistency between the local ownership cache and ZooKeeper cluster."}),"\n",(0,t.jsx)(s.p,{children:"In 2.6.2, we fix the issue with the following:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"In ownership releasing, do not retain ownership in failure."}),"\n",(0,t.jsx)(s.li,{children:"In ownership checking, querying and acquiring, reestablish the lost ownership in false negative releasing and false positive acquiring."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7773",children:"PR-7773"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"enable-users-to-configure-the-executor-pool-size",children:"Enable users to configure the executor pool size"}),"\n",(0,t.jsxs)(s.p,{children:["Before 2.6.2, the executor pool size in Pulsar was set to ",(0,t.jsx)(s.code,{children:"20"})," when starting Pulsar services. Users could not configure the executor pool size."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'\nprivate final ScheduledExecutorService executor = Executors.newScheduledThreadPool(20,\n           new DefaultThreadFactory("pulsar"));\n\n'})}),"\n",(0,t.jsxs)(s.p,{children:["In 2.6.2, users can configure the executor pool size in the ",(0,t.jsx)(s.code,{children:"broker.conf"})," file based on their needs."]}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7782",children:"PR-7782"}),"."]}),"\n",(0,t.jsxs)(s.h3,{id:"add-replicated-check-for-checkinactivesubscriptions",children:["Add replicated check for ",(0,t.jsx)(s.code,{children:"checkInactiveSubscriptions"})]}),"\n",(0,t.jsxs)(s.p,{children:["After the replicated subscription is deleted by ",(0,t.jsx)(s.code,{children:"checkInactiveSubscriptions"}),", replicated subscriptions are created with ",(0,t.jsx)(s.code,{children:"receiveSubscriptionUpdated"}),". In this case, the position becomes the latest position."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"\ntopic.createSubscription(update.getSubscriptionName(),\n        InitialPosition.Latest, true /* replicateSubscriptionState */);\n\n"})}),"\n",(0,t.jsxs)(s.p,{children:["In 2.6.2, the replicated subscription is excluded from automatic deletion by fixing the ",(0,t.jsx)(s.code,{children:"PersistentTopic"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/8066",children:"PR-8066"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"upgrade-jetty-util-version-to-9431",children:"Upgrade jetty-util version to 9.4.31"}),"\n",(0,t.jsx)(s.p,{children:"Pulsar client depends on jetty-util. Jetty-util versions earlier than 9.4.30 contain known vulnerabilities."}),"\n",(0,t.jsxs)(s.p,{children:["In 2.6.2, we upgrade the jetty-util version to ",(0,t.jsx)(s.code,{children:"9.4.31"})," to enhance security."]}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/8035",children:"PR-8035"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"add-command-to-delete-a-clusters-metadata-from-zookeeper",children:"Add command to delete a cluster's metadata from ZooKeeper"}),"\n",(0,t.jsx)(s.p,{children:"When we share the same ZooKeeper and BookKeeper cluster among multiple broker clusters, if a cluster was removed, its metadata in ZooKeeper were also removed."}),"\n",(0,t.jsx)(s.p,{children:"In 2.6.2, we fix the issue in the following ways:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Add a ",(0,t.jsx)(s.code,{children:"PulsarClusterMetadataTeardown"})," class to delete the relative nodes from ZooKeeper;"]}),"\n",(0,t.jsxs)(s.li,{children:["Wrap the class to ",(0,t.jsx)(s.code,{children:"bin/pulsar"})," script."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/8169",children:"PR-8169"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"replace-eventloop-with-threadpoolexecutor-to-improve-performance-instead-of-eventloop",children:"Replace EventLoop with ThreadPoolExecutor to improve performance instead of EventLoop"}),"\n",(0,t.jsx)(s.p,{children:"In 2.6.2, we replace EventLoop with a native JDK thread pool(ThreadPoolExecutor) to improve performance."}),"\n",(0,t.jsx)(s.p,{children:"The following is the test result with pulsar perf."}),"\n",(0,t.jsx)(s.p,{children:"Before 2.6.1:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"\nAggregated throughput stats --- 11715556 records received --- 68813.420 msg/s --- 537.605 Mbit/s\n\n"})}),"\n",(0,t.jsx)(s.p,{children:"In 2.6.2\uff1a"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"\nAggregated throughput stats --- 18392800 records received --- 133314.602 msg/s --- 1041.520 Mbit/s\n\n"})}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/8208",children:"PR-8208"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"fix-deadlock-that-occurred-during-topic-ownership-check",children:"Fix deadlock that occurred during topic ownership check"}),"\n",(0,t.jsxs)(s.p,{children:["Some broker servers had deadlocks while splitting namespace bundles. When checking the thread dump of the broker, some threads were blocked in ",(0,t.jsx)(s.code,{children:"NamespaceService#getBundle()"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'\n"pulsar-ordered-OrderedExecutor-7-0" #34 prio=5 os_prio=0 tid=0x00007eeeab05a800 nid=0x81a5 waiting on condition [0x00007eeeafbd2000]\n  java.lang.Thread.State: WAITING (parking)\n       at sun.misc.Unsafe.park(Native Method)\n       - parking to wait for  <0x00007f17fa965418> (a java.util.concurrent.CompletableFuture$Signaller)\n       at java.util.concurrent.locks.LockSupport.park(LockSupport.java:175)\n       at org.apache.pulsar.common.naming.NamespaceBundleFactory.getBundles(NamespaceBundleFactory.java:155)\n...\n\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The reason for the issue is that the ",(0,t.jsx)(s.code,{children:"getBundle()"})," method leads to deadlock in ",(0,t.jsx)(s.code,{children:"NamespaceService#isTopicOwned()"}),". To fix the issue, we remove the ",(0,t.jsx)(s.code,{children:"getBundle()"})," method. When ",(0,t.jsx)(s.code,{children:"isTopicOwned()"})," returns ",(0,t.jsx)(s.code,{children:"false"}),", the bundle metadata is cached and can be got asynchronously. When the client reconnects the next time, Pulsar returns the correct bundle metadata from the cache."]}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/8406",children:"PR-8406"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"proxy",children:"Proxy"}),"\n",(0,t.jsxs)(s.h3,{id:"enable-users-to-configure-advertisedaddress-in-proxy",children:["Enable users to configure ",(0,t.jsx)(s.code,{children:"advertisedAddress"})," in proxy"]}),"\n",(0,t.jsxs)(s.p,{children:["Before 2.6.2, users could not configure ",(0,t.jsx)(s.code,{children:"advertisedAddress"})," on the proxy side. In 2.6.2, users can configure ",(0,t.jsx)(s.code,{children:"advertisedAddress"})," in proxy just as they do in Pulsar broker."]}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7542",children:"PR-7542"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"add-proxy-plugin-interface-to-support-user-defined-additional-servlet",children:"Add proxy plugin interface to support user defined additional servlet"}),"\n",(0,t.jsx)(s.p,{children:"To enable users to access the broker flexibly, Pulsar provides plugins similar to broker protocol and broker interceptor. However, users could not access the proxy before 2.6.2."}),"\n",(0,t.jsx)(s.p,{children:"To enable users to customize data requests in proxy, we add the protocol plugin for proxy in 2.6.2."}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/8067",children:"PR-8067"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"fix-the-null-exception-when-starting-the-proxy-service",children:"Fix the null exception when starting the proxy service"}),"\n",(0,t.jsx)(s.p,{children:"When enabling the broker TLS and broker client authentication with OAuth2 plugin,\nthe proxy service exits with an unexpected null exception."}),"\n",(0,t.jsx)(s.p,{children:"The reason is that when initializing the flow, authentication is called, so the token client is not initialized before using."}),"\n",(0,t.jsx)(s.p,{children:"In 2.6.2, we fix the null exception when starting the proxy service."}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/8019",children:"PR-8019"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"java-client",children:"Java Client"}),"\n",(0,t.jsx)(s.h3,{id:"support-input-stream-for-truststore-cert",children:"Support input-stream for trustStore cert"}),"\n",(0,t.jsx)(s.p,{children:"In 2.6.1, Pulsar supports dynamic cert loading by using input stream for TLS cert and key file. The feature is mainly used by container. However, container also requires dynamic loading for truststore certs and users cannot store trust-store cert into file-system."}),"\n",(0,t.jsx)(s.p,{children:"In 2.6.2, Pulsar supports loading truststore cert dynamically using input stream."}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7442",children:"PR-7442"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"avoid-subscribing-the-same-topic",children:"Avoid subscribing the same topic"}),"\n",(0,t.jsxs)(s.p,{children:["The current key of ",(0,t.jsx)(s.code,{children:"MultiTopicsConsumerImpl.topics"})," is the topic name passed by the user. The ",(0,t.jsx)(s.code,{children:"topicNameValid"})," method checks if the name is valid and ",(0,t.jsx)(s.code,{children:"topics"})," doesn't contain the key."]}),"\n",(0,t.jsxs)(s.p,{children:["However, if a multi-topic consumer subscribes a partition of a subscribed partitioned topic,  ",(0,t.jsx)(s.code,{children:"subscribeAsync"})," succeeds and a new ",(0,t.jsx)(s.code,{children:"ConsumerImpl"})," of the same partition is created, which is redundant."]}),"\n",(0,t.jsxs)(s.p,{children:["Also, if a multi-topic consumer subscribes ",(0,t.jsx)(s.code,{children:"public/default/topic"})," or ",(0,t.jsx)(s.code,{children:"persistent://public/default/topic"}),", while the initial subscribed topic is ",(0,t.jsx)(s.code,{children:"topic"}),", the redundant consumers would be created."]}),"\n",(0,t.jsx)(s.p,{children:"In 2.6.2, we fix the issue in the following ways to avoid subscribing the same topic again:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Use the full topic name as key for ",(0,t.jsx)(s.code,{children:"MultiTopicsConsumerImpl.topics"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Check that both the full topic name and the full partitioned topic name do not exist in ",(0,t.jsx)(s.code,{children:"MultiTopicsConsumerImpl.topics"})," when ",(0,t.jsx)(s.code,{children:"subscribeAsync"})," is called."]}),"\n",(0,t.jsx)(s.li,{children:"Throw a different exception to a different topic is invalid and the topic is already subscribed"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7823",children:"PR-7823"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"cpp-client",children:"CPP Client"}),"\n",(0,t.jsx)(s.h3,{id:"wait-for-all-seek-operations-complete",children:"Wait for all seek operations complete"}),"\n",(0,t.jsxs)(s.p,{children:["When a partitioned consumer calls ",(0,t.jsx)(s.code,{children:"seek"}),", it waits for only one partition's seek operation completion because each internal consumer calls callback(result) to complete the same promise."]}),"\n",(0,t.jsx)(s.p,{children:"In 2.6.2, we use the following methods to avoid this problem:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Add a ",(0,t.jsx)(s.code,{children:"MultiResultCallback"})," implementation, the callback completes only when all N events complete successfully or one of N events fails."]}),"\n",(0,t.jsxs)(s.li,{children:["Use ",(0,t.jsx)(s.code,{children:"MultiResultCallback"})," to wrap callback from ",(0,t.jsx)(s.code,{children:"PartitionedConsumerImpl::seekAsync"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7216",children:"PR-7216"}),"."]}),"\n",(0,t.jsxs)(s.h3,{id:"make-clear-thread-safe",children:["Make ",(0,t.jsx)(s.code,{children:"clear()"})," thread-safe"]}),"\n",(0,t.jsxs)(s.p,{children:["Before 2.6.2, the ",(0,t.jsx)(s.code,{children:"clear()"})," methods of ",(0,t.jsx)(s.code,{children:"BatchAcknowledgementTracker"})," and ",(0,t.jsx)(s.code,{children:"UnAckedMessageTrackerEnabled"})," are not thread-safe."]}),"\n",(0,t.jsxs)(s.p,{children:["In 2.6.2, we acquire a mutex in these ",(0,t.jsx)(s.code,{children:"clear()"})," methods to make it thread-safe."]}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7862",children:"PR-7862"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"add-snappy-library-to-docker-images-for-building-c-packages",children:"Add Snappy library to Docker images for building C++ packages"}),"\n",(0,t.jsx)(s.p,{children:"The program crashes when Snappy compression is enabled on the C++ client packaged as RPM/DEB. This is because Snappy library is not included in the Docker image for building the RPM/DEB package."}),"\n",(0,t.jsx)(s.p,{children:"In 2.6.2, we add the Snappy library to the docker images to avoid the issue."}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/8086",children:"PR-8086"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"support-key-based-batching",children:"Support key based batching"}),"\n",(0,t.jsxs)(s.p,{children:["Support key based batching for the C++ client. In addition, currently, the implementation of ",(0,t.jsx)(s.code,{children:"BatchMessageContainer"})," is coupling to ",(0,t.jsx)(s.code,{children:"ProducerImpl"})," tightly. The batch message container registers a timer to the producer's executor and the timeout callback is also the producer's method. Even its ",(0,t.jsx)(s.code,{children:"add"})," method could call ",(0,t.jsx)(s.code,{children:"sendMessage"})," to send a batch to the producer's pending queue. These should be the producer's work."]}),"\n",(0,t.jsx)(s.p,{children:"In 2.6.2, we implement the feature in the following ways:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Add a ",(0,t.jsx)(s.code,{children:"MessageAndCallbackBatch"})," to store a ",(0,t.jsx)(s.code,{children:"MessageImpl"})," of serialized single messages and a callback list."]}),"\n",(0,t.jsxs)(s.li,{children:["Add a ",(0,t.jsx)(s.code,{children:"BatchMessageContainerBase"})," to provide interface methods and methods like update/clear message number/bytes, create ",(0,t.jsx)(s.code,{children:"OpSendMsg"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Let ",(0,t.jsx)(s.code,{children:"ProducerImpl"})," manage the batch timer and determine whether to create ",(0,t.jsx)(s.code,{children:"OpSendMsg"})," from ",(0,t.jsx)(s.code,{children:"BatchMessageContainerBase"})," and send it."]}),"\n",(0,t.jsxs)(s.li,{children:["Make ",(0,t.jsx)(s.code,{children:"BatchMessageContainer"})," inherit ",(0,t.jsx)(s.code,{children:"BatchMessageContainerBase"}),", it only manages a ",(0,t.jsx)(s.code,{children:"MessageAndCallbackBatch"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Add a ",(0,t.jsx)(s.code,{children:"BatchMessageKeyBasedContainer"})," that inherits ",(0,t.jsx)(s.code,{children:"BatchMessageContainerBase"}),", it manages a map of message key and ",(0,t.jsx)(s.code,{children:"MessageAndCallbackBatch"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"Add a producer config to change batching type."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7996",children:"PR-7996"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(s.h3,{id:"enable-kubernetes-runtime-to-customize-function-instance-class-path",children:"Enable Kubernetes runtime to customize function instance class path"}),"\n",(0,t.jsx)(s.p,{children:"Before 2.6.2, the function worker's classpath is used to configure the function instance (runner)'s classpath. When the broker (function worker) uses an image that is different from the function instance (runner) for Kubernetes runtime, the classpath is wrong and the function instance could not load the instance classes."}),"\n",(0,t.jsx)(s.p,{children:"In 2.6.2, we add a function instance classpath entry to the Kubernetes runtime config, and construct the function launch command accordingly."}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7844",children:"PR-7844"}),"."]}),"\n",(0,t.jsxs)(s.h3,{id:"set-dryrun-of-kubernetes-runtime-to-null",children:["Set ",(0,t.jsx)(s.code,{children:"dryrun"})," of Kubernetes Runtime to null"]}),"\n",(0,t.jsxs)(s.p,{children:["Before 2.6.2, we upgraded the ",(0,t.jsx)(s.code,{children:"client-java"})," of Kubernetes to ",(0,t.jsx)(s.code,{children:"0.9.2"})," to enhance security. However, during the creation of statefulsets, secrets, and services, the value of ",(0,t.jsx)(s.code,{children:"dryrun"})," was set to ",(0,t.jsx)(s.code,{children:"true"}),", which was not accepted by Kubernetes. Only ",(0,t.jsx)(s.code,{children:"All"})," is allowed in Kubernetes."]}),"\n",(0,t.jsxs)(s.p,{children:["In 2.6.2, we set the ",(0,t.jsx)(s.code,{children:"dryrun"})," of Kubernetes Runtime to null."]}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/8064",children:"PR-8064"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"pulsar-sql",children:"Pulsar SQL"}),"\n",(0,t.jsx)(s.h3,{id:"upgrade-presto-version-to-332",children:"Upgrade Presto version to 332"}),"\n",(0,t.jsx)(s.p,{children:"Upgrade Presto version to 332. Resolve different packages between prestosql and prestodb. Although the latest version is 334, versions higher than 333 require Java 11."}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/7194",children:"PR-7194"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"pulsar-admin",children:"pulsar-admin"}),"\n",(0,t.jsx)(s.h3,{id:"add-cli-command-to-get-the-last-message-id",children:"Add CLI command to get the last message ID"}),"\n",(0,t.jsxs)(s.p,{children:["Add ",(0,t.jsx)(s.code,{children:"last-message-id"})," command in CLI, so users can get the last message ID with this command."]}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/8082",children:"PR-8082"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"support-deleting-schema-ledgers-when-deleting-topics",children:"Support deleting schema ledgers when deleting topics"}),"\n",(0,t.jsxs)(s.p,{children:["Users could not delete schema of topics with the ",(0,t.jsx)(s.code,{children:"PersistentTopics#deleteTopic"})," and ",(0,t.jsx)(s.code,{children:"PersistentTopics#deletePartitionedTopic"})," in REST APIs. After topics were deleted, the schema ledgers still existed with adding an empty schema ledger."]}),"\n",(0,t.jsx)(s.p,{children:"In 2.6.2, we implement the feature in the following ways:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Add a ",(0,t.jsx)(s.code,{children:"deleteSchema"})," query param to REST APIs of deleting topics/partitioned topics;"]}),"\n",(0,t.jsxs)(s.li,{children:["Add a map to record the created ledgers in ",(0,t.jsx)(s.code,{children:"BookkeeperSchemaStorage"}),";"]}),"\n",(0,t.jsxs)(s.li,{children:["Expose ",(0,t.jsx)(s.code,{children:"deleteSchema"})," param in pulsar-admin APIs;"]}),"\n",(0,t.jsxs)(s.li,{children:["Delete schema ledgers when deleting the cluster with ",(0,t.jsx)(s.code,{children:"-a"})," option."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/8167",children:"PR-8167"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"support-deleting-all-data-associated-with-a-cluster",children:"Support deleting all data associated with a cluster"}),"\n",(0,t.jsx)(s.p,{children:"When multiple broker clusters shared the same bookie cluster, if users wanted to remove a broker cluster, the associated ledgers in bookies were not deleted as expected."}),"\n",(0,t.jsxs)(s.p,{children:["In 2.6.2, we add a ",(0,t.jsx)(s.code,{children:"cluster delete"})," command to enable users to delete all the data associated with the cluster."]}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/8133",children:"PR-8133"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"pulsar-perf",children:"Pulsar Perf"}),"\n",(0,t.jsx)(s.h3,{id:"enable-users-to-configure-iothread-number-in-pulsar-perf",children:"Enable users to configure ioThread number in pulsar-perf"}),"\n",(0,t.jsxs)(s.p,{children:["In pulsar-perf, the default Pulsar client ioThread number is ",(0,t.jsx)(s.code,{children:"Runtime.getRuntime().availableProcessors()"})," and users could not configure it in the command line. When running a pulsar-perf producer, it may cause messages to enqueue competition and lead to high latency."]}),"\n",(0,t.jsx)(s.p,{children:"In 2.6.2, we implement the feature in the following ways:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Enable users to configure the ioThread number in the command line;"}),"\n",(0,t.jsxs)(s.li,{children:["Change the default ioThead number from ",(0,t.jsx)(s.code,{children:"Runtime.getRuntime().availableProcessors()"})," to ",(0,t.jsx)(s.code,{children:"1"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["For more information about implementation, see ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/8090",children:"PR-8090"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"more-information",children:"More information"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["To download Apache Pulsar 2.6.2, click ",(0,t.jsx)(s.a,{href:"https://pulsar.apache.org/download/",children:"download"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["For more information about Apache Pulsar 2.6.2, see [2.6.2 release notes](",(0,t.jsx)(s.a,{href:"https://pulsar.apache.org/release-notes/#2.6.2",children:"https://pulsar.apache.org/release-notes/#2.6.2"})," and ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/pulls?q=is%3Apr+label%3Arelease%2F2.6.2+is%3Aclosed",children:"2.6.2 PR list"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"If you have any questions or suggestions, contact us with mailing lists or slack."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"mailto:users@pulsar.apache.org",children:"users@pulsar.apache.org"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"mailto:dev@pulsar.apache.org",children:"dev@pulsar.apache.org"})}),"\n",(0,t.jsxs)(s.li,{children:["Pulsar slack channel: ",(0,t.jsx)(s.a,{href:"https://apache-pulsar.slack.com/",children:"https://apache-pulsar.slack.com/"})]}),"\n",(0,t.jsxs)(s.li,{children:["Self-registration at ",(0,t.jsx)(s.a,{href:"https://apache-pulsar.herokuapp.com/",children:"https://apache-pulsar.herokuapp.com/"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Looking forward to your contributions to ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar",children:"Pulsar"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var r=n(96540);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}},56057:e=>{e.exports=JSON.parse('{"permalink":"/blog/2020/11/09/Apache-Pulsar-2-6-2","editUrl":"https://github.com/apache/pulsar-site/edit/main/blog/2020-11-09-Apache-Pulsar-2-6-2.md","source":"@site/blog/2020-11-09-Apache-Pulsar-2-6-2.md","title":"Apache Pulsar 2.6.2","description":"We are excited to see that the Apache Pulsar community has successfully released the 2.6.2 version after a lot of hard work. It is a great milestone for this fast-growing project and the Pulsar community. 2.6.2 is the result of a big effort from the community, with over 154 commits and a long list of improvements and bug fixes.","date":"2020-11-09T00:00:00.000Z","tags":[],"readingTime":10.915,"hasTruncateMarker":true,"authors":[{"name":"Xiaolong Ran","url":"https://twitter.com/wolf4j1","key":null,"page":null}],"frontMatter":{"author":"Xiaolong Ran","authorURL":"https://twitter.com/wolf4j1","title":"Apache Pulsar 2.6.2"},"unlisted":false,"prevItem":{"title":"Apache Pulsar 2.7.0","permalink":"/blog/2020/12/24/Apache-Pulsar-2-7-0"},"nextItem":{"title":"Pulsar Summit Asia 2020 Schedule is Now Online","permalink":"/blog/2020/11/04/pulsar-summit-asia-schedule"}}')}}]);