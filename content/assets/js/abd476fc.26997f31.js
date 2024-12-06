"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[55100],{84659:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"standalone-docker","title":"Set up a standalone Pulsar in Docker","description":"For local development and testing, you can run Pulsar in standalone mode on your own machine within a Docker container.","source":"@site/versioned_docs/version-2.4.1/standalone-docker.md","sourceDirName":".","slug":"/standalone-docker","permalink":"/docs/2.4.1/standalone-docker","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.1/standalone-docker.md","tags":[],"version":"2.4.1","frontMatter":{"id":"standalone-docker","title":"Set up a standalone Pulsar in Docker","sidebar_label":"Run Pulsar in Docker","original_id":"standalone-docker"}}');var t=s(74848),r=s(28453);const o={id:"standalone-docker",title:"Set up a standalone Pulsar in Docker",sidebar_label:"Run Pulsar in Docker",original_id:"standalone-docker"},i=void 0,l={},c=[{value:"Start Pulsar in Docker",id:"start-pulsar-in-docker",level:2},{value:"Use Pulsar in Docker",id:"use-pulsar-in-docker",level:2},{value:"Consume a message",id:"consume-a-message",level:3},{value:"Produce a message",id:"produce-a-message",level:3},{value:"Get the topic statistics",id:"get-the-topic-statistics",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"For local development and testing, you can run Pulsar in standalone mode on your own machine within a Docker container."}),"\n",(0,t.jsxs)(n.p,{children:["If you have not installed Docker, download it following ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"the instructions"})," for your OS."]}),"\n",(0,t.jsx)(n.h2,{id:"start-pulsar-in-docker",children:"Start Pulsar in Docker"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"For MacOS, Linux, and Windows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\n$ docker run -it -p 6650:6650  -p 8080:8080 --mount source=pulsardata,target=/pulsar/data --mount source=pulsarconf,target=/pulsar/conf apachepulsar/pulsar:2.4.1 bin/pulsar standalone\n\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A few things to note about this command:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['The data, metadata, and configuration are persisted on Docker volumes in order to not start "fresh" every\ntime the container is restarted. For details on the volumes you can use ',(0,t.jsx)(n.code,{children:"docker volume inspect <sourcename>"})]}),"\n",(0,t.jsx)(n.li,{children:"For Docker on Windows make sure to configure it to use Linux containers"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If you start Pulsar successfully, you will see ",(0,t.jsx)(n.code,{children:"INFO"}),"-level log messages like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\n08:18:30.970 [main] INFO  org.apache.pulsar.broker.web.WebService - HTTP Service started at http://0.0.0.0:8080\n...\n07:53:37.322 [main] INFO  org.apache.pulsar.broker.PulsarService - messaging service is ready, bootstrap service port = 8080, broker url= pulsar://localhost:6650, cluster=standalone, configs=org.apache.pulsar.broker.ServiceConfiguration@98b63c1\n...\n\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["When you start a local standalone cluster, a ",(0,t.jsx)(n.code,{children:"public/default"})]})}),"\n",(0,t.jsxs)(n.p,{children:["namespace is created automatically. The namespace is used for development purposes. All Pulsar topics are managed within namespaces.\nFor more information, see ",(0,t.jsx)(n.a,{href:"/docs/2.4.1/concepts-messaging#topics",children:"Topics"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"use-pulsar-in-docker",children:"Use Pulsar in Docker"}),"\n",(0,t.jsxs)(n.p,{children:["Pulsar offers client libraries for ",(0,t.jsx)(n.a,{href:"/docs/2.4.1/client-libraries-java",children:"Java"}),", ",(0,t.jsx)(n.a,{href:"/docs/2.4.1/client-libraries-go",children:"Go"}),", ",(0,t.jsx)(n.a,{href:"/docs/2.4.1/client-libraries-python",children:"Python"}),"\nand ",(0,t.jsx)(n.a,{href:"/docs/2.4.1/client-libraries-cpp",children:"C++"}),". If you're running a local standalone cluster, you can\nuse one of these root URLs to interact with your cluster:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"pulsar://localhost:6650"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"http://localhost:8080"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The following example will guide you get started with Pulsar quickly by using the ",(0,t.jsx)(n.a,{href:"/docs/2.4.1/client-libraries-python",children:"Python client API"}),"\nclient API."]}),"\n",(0,t.jsxs)(n.p,{children:["Install the Pulsar Python client library directly from ",(0,t.jsx)(n.a,{href:"https://pypi.org/project/pulsar-client/",children:"PyPI"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\n$ pip install pulsar-client\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"consume-a-message",children:"Consume a message"}),"\n",(0,t.jsx)(n.p,{children:"Create a consumer and subscribe to the topic:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic',\n                            subscription_name='my-sub')\n\nwhile True:\n    msg = consumer.receive()\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"produce-a-message",children:"Produce a message"}),"\n",(0,t.jsx)(n.p,{children:"Now start a producer to send some test messages:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nproducer = client.create_producer('my-topic')\n\nfor i in range(10):\n    producer.send(('hello-pulsar-%d' % i).encode('utf-8'))\n\nclient.close()\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"get-the-topic-statistics",children:"Get the topic statistics"}),"\n",(0,t.jsxs)(n.p,{children:["In Pulsar, you can use REST, Java, or command-line tools to control every aspect of the system.\nFor details on APIs, refer to ",(0,t.jsx)(n.a,{href:"/docs/2.4.1/admin-api-overview",children:"Admin API Overview"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"In the simplest example, you can use curl to probe the stats for a particular topic:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\n$ curl http://localhost:8080/admin/v2/persistent/public/default/my-topic/stats | python -m json.tool\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"The output is something like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'\n{\n    "msgRateIn": 0.0,\n    "msgThroughputIn": 0.0,\n    "msgRateOut": 1.8332950480217471,\n    "msgThroughputOut": 91.33142602871978,\n    "bytesInCounter": 7097,\n    "msgInCounter": 143,\n    "bytesOutCounter": 6607,\n    "msgOutCounter": 133,\n    "averageMsgSize": 0.0,\n    "msgChunkPublished": false,\n    "storageSize": 7097,\n    "backlogSize": 0,\n    "offloadedStorageSize": 0,\n    "publishers": [\n        {\n            "accessMode": "Shared",\n            "msgRateIn": 0.0,\n            "msgThroughputIn": 0.0,\n            "averageMsgSize": 0.0,\n            "chunkedMessageRate": 0.0,\n            "producerId": 0,\n            "metadata": {},\n            "address": "/127.0.0.1:35604",\n            "connectedSince": "2021-07-04T09:05:43.04788Z",\n            "clientVersion": "2.8.0",\n            "producerName": "standalone-2-5"\n        }\n    ],\n    "waitingPublishers": 0,\n    "subscriptions": {\n        "my-sub": {\n            "msgRateOut": 1.8332950480217471,\n            "msgThroughputOut": 91.33142602871978,\n            "bytesOutCounter": 6607,\n            "msgOutCounter": 133,\n            "msgRateRedeliver": 0.0,\n            "chunkedMessageRate": 0,\n            "msgBacklog": 0,\n            "backlogSize": 0,\n            "msgBacklogNoDelayed": 0,\n            "blockedSubscriptionOnUnackedMsgs": false,\n            "msgDelayed": 0,\n            "unackedMessages": 0,\n            "type": "Exclusive",\n            "activeConsumerName": "3c544f1daa",\n            "msgRateExpired": 0.0,\n            "totalMsgExpired": 0,\n            "lastExpireTimestamp": 0,\n            "lastConsumedFlowTimestamp": 1625389101290,\n            "lastConsumedTimestamp": 1625389546070,\n            "lastAckedTimestamp": 1625389546162,\n            "lastMarkDeleteAdvancedTimestamp": 1625389546163,\n            "consumers": [\n                {\n                    "msgRateOut": 1.8332950480217471,\n                    "msgThroughputOut": 91.33142602871978,\n                    "bytesOutCounter": 6607,\n                    "msgOutCounter": 133,\n                    "msgRateRedeliver": 0.0,\n                    "chunkedMessageRate": 0.0,\n                    "consumerName": "3c544f1daa",\n                    "availablePermits": 867,\n                    "unackedMessages": 0,\n                    "avgMessagesPerEntry": 6,\n                    "blockedConsumerOnUnackedMsgs": false,\n                    "lastAckedTimestamp": 1625389546162,\n                    "lastConsumedTimestamp": 1625389546070,\n                    "metadata": {},\n                    "address": "/127.0.0.1:35472",\n                    "connectedSince": "2021-07-04T08:58:21.287682Z",\n                    "clientVersion": "2.8.0"\n                }\n            ],\n            "isDurable": true,\n            "isReplicated": false,\n            "allowOutOfOrderDelivery": false,\n            "consumersAfterMarkDeletePosition": {},\n            "nonContiguousDeletedMessagesRanges": 0,\n            "nonContiguousDeletedMessagesRangesSerializedSize": 0,\n            "durable": true,\n            "replicated": false\n        }\n    },\n    "replication": {},\n    "deduplicationStatus": "Disabled",\n    "nonContiguousDeletedMessagesRanges": 0,\n    "nonContiguousDeletedMessagesRangesSerializedSize": 0\n}\n\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var a=s(96540);const t={},r=a.createContext(t);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);