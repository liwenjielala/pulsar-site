"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[18512],{52722:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"getting-started-docker","title":"Set up a standalone Pulsar in Docker","description":"For local development and testing, you can run Pulsar in standalone","source":"@site/versioned_docs/version-2.6.4/getting-started-docker.md","sourceDirName":".","slug":"/getting-started-docker","permalink":"/docs/2.6.4/getting-started-docker","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.4/getting-started-docker.md","tags":[],"version":"2.6.4","frontMatter":{"id":"getting-started-docker","title":"Set up a standalone Pulsar in Docker","sidebar_label":"Run Pulsar in Docker","original_id":"getting-started-docker"},"sidebar":"docsSidebar","previous":{"title":"Run Pulsar locally","permalink":"/docs/2.6.4/getting-started-standalone"},"next":{"title":"Run Pulsar in Kubernetes","permalink":"/docs/2.6.4/getting-started-helm"}}');var r=s(74848),a=s(28453);const i={id:"getting-started-docker",title:"Set up a standalone Pulsar in Docker",sidebar_label:"Run Pulsar in Docker",original_id:"getting-started-docker"},o=void 0,l={},c=[{value:"Start Pulsar in Docker",id:"start-pulsar-in-docker",level:2},{value:"Use Pulsar in Docker",id:"use-pulsar-in-docker",level:2},{value:"Consume a message",id:"consume-a-message",level:3},{value:"Produce a message",id:"produce-a-message",level:3},{value:"Get the topic statistics",id:"get-the-topic-statistics",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"For local development and testing, you can run Pulsar in standalone\nmode on your own machine within a Docker container."}),"\n",(0,r.jsxs)(n.p,{children:["If you have not installed Docker, download it following ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"the instructions"})," for your OS."]}),"\n",(0,r.jsx)(n.h2,{id:"start-pulsar-in-docker",children:"Start Pulsar in Docker"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"For MacOS, Linux, and Windows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ docker run -it \\\n-p 6650:6650 \\\n-p 8080:8080 \\\n--mount source=pulsardata,target=/pulsar/data \\\n--mount source=pulsarconf,target=/pulsar/conf \\\napachepulsar/pulsar:2.6.4 \\\nbin/pulsar standalone\n\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"A few things to note about this command:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['The data, metadata, and configuration are persisted on Docker volumes in order to not start "fresh" every\ntime the container is restarted. For details on the volumes you can use ',(0,r.jsx)(n.code,{children:"docker volume inspect <sourcename>"})]}),"\n",(0,r.jsx)(n.li,{children:"For Docker on Windows make sure to configure it to use Linux containers"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you start Pulsar successfully, you will see ",(0,r.jsx)(n.code,{children:"INFO"}),"-level log messages like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\n2017-08-09 22:34:04,030 - INFO  - [main:WebService@213] - Web Service started at http://127.0.0.1:8080\n2017-08-09 22:34:04,038 - INFO  - [main:PulsarService@335] - messaging service is ready, bootstrap service on port=8080, broker url=pulsar://127.0.0.1:6650, cluster=standalone, configs=org.apache.pulsar.broker.ServiceConfiguration@4db60246\n...\n\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["When you start a local standalone cluster, a ",(0,r.jsx)(n.code,{children:"public/default"})," namespace is created automatically. The namespace is used for development purposes. All Pulsar topics are managed within namespaces. For more information, see ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/concepts-messaging#topics",children:"Topics"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"use-pulsar-in-docker",children:"Use Pulsar in Docker"}),"\n",(0,r.jsxs)(n.p,{children:["Pulsar offers client libraries for ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/client-libraries-java",children:"Java"}),", ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/client-libraries-go",children:"Go"}),", ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/client-libraries-python",children:"Python"}),"\nand ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/client-libraries-cpp",children:"C++"}),". If you're running a local standalone cluster, you can\nuse one of these root URLs to interact with your cluster:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"pulsar://localhost:6650"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"http://localhost:8080"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The following example will guide you get started with Pulsar quickly by using the ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/client-libraries-python",children:"Python"}),"\nclient API."]}),"\n",(0,r.jsxs)(n.p,{children:["Install the Pulsar Python client library directly from ",(0,r.jsx)(n.a,{href:"https://pypi.org/project/pulsar-client/",children:"PyPI"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ pip install pulsar-client\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"consume-a-message",children:"Consume a message"}),"\n",(0,r.jsx)(n.p,{children:"Create a consumer and subscribe to the topic:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic',\n                            subscription_name='my-sub')\n\nwhile True:\n    msg = consumer.receive()\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"produce-a-message",children:"Produce a message"}),"\n",(0,r.jsx)(n.p,{children:"Now start a producer to send some test messages:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nproducer = client.create_producer('my-topic')\n\nfor i in range(10):\n    producer.send(('hello-pulsar-%d' % i).encode('utf-8'))\n\nclient.close()\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"get-the-topic-statistics",children:"Get the topic statistics"}),"\n",(0,r.jsxs)(n.p,{children:["In Pulsar, you can use REST, Java, or command-line tools to control every aspect of the system.\nFor details on APIs, refer to ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/admin-api-overview",children:"Admin API Overview"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"In the simplest example, you can use curl to probe the stats for a particular topic:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ curl http://localhost:8080/admin/v2/persistent/public/default/my-topic/stats | python -m json.tool\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"The output is something like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'\n{\n  "averageMsgSize": 0.0,\n  "msgRateIn": 0.0,\n  "msgRateOut": 0.0,\n  "msgThroughputIn": 0.0,\n  "msgThroughputOut": 0.0,\n  "publishers": [\n    {\n      "address": "/172.17.0.1:35048",\n      "averageMsgSize": 0.0,\n      "clientVersion": "1.19.0-incubating",\n      "connectedSince": "2017-08-09 20:59:34.621+0000",\n      "msgRateIn": 0.0,\n      "msgThroughputIn": 0.0,\n      "producerId": 0,\n      "producerName": "standalone-0-1"\n    }\n  ],\n  "replication": {},\n  "storageSize": 16,\n  "subscriptions": {\n    "my-sub": {\n      "blockedSubscriptionOnUnackedMsgs": false,\n      "consumers": [\n        {\n          "address": "/172.17.0.1:35064",\n          "availablePermits": 996,\n          "blockedConsumerOnUnackedMsgs": false,\n          "clientVersion": "1.19.0-incubating",\n          "connectedSince": "2017-08-09 21:05:39.222+0000",\n          "consumerName": "166111",\n          "msgRateOut": 0.0,\n          "msgRateRedeliver": 0.0,\n          "msgThroughputOut": 0.0,\n          "unackedMessages": 0\n        }\n      ],\n      "msgBacklog": 0,\n      "msgRateExpired": 0.0,\n      "msgRateOut": 0.0,\n      "msgRateRedeliver": 0.0,\n      "msgThroughputOut": 0.0,\n      "type": "Exclusive",\n      "unackedMessages": 0\n    }\n  }\n}\n\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(96540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);