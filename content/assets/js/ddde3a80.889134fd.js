"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[10106],{37086:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"getting-started-docker","title":"Run a standalone Pulsar cluster in Docker","description":"Get started with Apache Pulsar on your local machine using Docker.","source":"@site/versioned_docs/version-3.2.x/getting-started-docker.md","sourceDirName":".","slug":"/getting-started-docker","permalink":"/docs/3.2.x/getting-started-docker","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/getting-started-docker.md","tags":[],"version":"3.2.x","frontMatter":{"id":"getting-started-docker","title":"Run a standalone Pulsar cluster in Docker","sidebar_label":"Run Pulsar in Docker","description":"Get started with Apache Pulsar on your local machine using Docker."},"sidebar":"docsSidebar","previous":{"title":"Run Pulsar locally","permalink":"/docs/3.2.x/getting-started-standalone"},"next":{"title":"Run Pulsar in Kubernetes","permalink":"/docs/3.2.x/getting-started-helm"}}');var t=s(74848),r=s(28453),o=s(89089),l=s(19365);const i={id:"getting-started-docker",title:"Run a standalone Pulsar cluster in Docker",sidebar_label:"Run Pulsar in Docker",description:"Get started with Apache Pulsar on your local machine using Docker."},c=void 0,u={},d=[{value:"Step1: Start Pulsar in Docker",id:"step1-start-pulsar-in-docker",level:2},{value:"Step 2: Use Pulsar in Docker",id:"step-2-use-pulsar-in-docker",level:2},{value:"Consume a message",id:"consume-a-message",level:3},{value:"Produce a message",id:"produce-a-message",level:3},{value:"Step 3: Get the topic statistics",id:"step-3-get-the-topic-statistics",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"For local development and testing, you can run Pulsar in standalone mode on your own machine within a Docker container."}),"\n",(0,t.jsxs)(n.p,{children:["If you have not installed Docker, download it following ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"the instructions"})," for your OS."]}),"\n",(0,t.jsx)(n.p,{children:"To run Pulsar in Docker, follow the steps below."}),"\n",(0,t.jsx)(n.h2,{id:"step1-start-pulsar-in-docker",children:"Step1: Start Pulsar in Docker"}),"\n",(0,t.jsx)(n.p,{children:"For macOS, Linux, and Windows, run the following command to start Pulsar within a Docker container."}),"\n",(0,t.jsxs)(o.A,{groupId:"os-choice",defaultValue:"macOS & Linux",values:[{label:"macOS & Linux",value:"macOS & Linux"},{label:"Windows",value:"Windows"}],children:[(0,t.jsx)(l.A,{value:"macOS & Linux",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker run -it \\\n-p 6650:6650 \\\n-p 8080:8080 \\\n--mount source=pulsardata,target=/pulsar/data \\\n--mount source=pulsarconf,target=/pulsar/conf \\\napachepulsar/pulsar:3.2.4 \\\nbin/pulsar standalone\n"})})}),(0,t.jsx)(l.A,{value:"Windows",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker run -it ^\n-p 6650:6650 ^\n-p 8080:8080 ^\n--mount source=pulsardata,target=/pulsar/data ^\n--mount source=pulsarconf,target=/pulsar/conf ^\napachepulsar/pulsar:3.2.4 ^\nbin/pulsar standalone\n"})})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"You may encounter issues with the default RocksDB metadata store."}),(0,t.jsx)(n.p,{children:"We recommend you consider using the following environment variable to use ZooKeeper as the metadata store:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"...\n-e PULSAR_STANDALONE_USE_ZOOKEEPER=1 \\\n...\n"})}),(0,t.jsx)(n.p,{children:"Don't apply this fix for existing Pulsar standalone instances if you don't want to loose your data."})]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to change Pulsar configurations and start Pulsar, run the following command by passing environment variables with the ",(0,t.jsx)(n.code,{children:"PULSAR_PREFIX_"})," prefix. See ",(0,t.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/e6b12c64b043903eb5ff2dc5186fe8030f157cfc/conf/standalone.conf",children:"default configuration file"})," for more details."]}),"\n",(0,t.jsxs)(o.A,{groupId:"os-choice",defaultValue:"macOS & Linux",values:[{label:"macOS & Linux",value:"macOS & Linux"},{label:"Windows",value:"Windows"}],children:[(0,t.jsx)(l.A,{value:"macOS & Linux",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'docker run -it \\\n-e PULSAR_PREFIX_xxx=yyy \\\n-p 6650:6650  \\\n-p 8080:8080 \\\n--mount source=pulsardata,target=/pulsar/data \\\n--mount source=pulsarconf,target=/pulsar/conf \\\napachepulsar/pulsar:3.2.4 sh \\\n-c "bin/apply-config-from-env.py \\\nconf/standalone.conf && \\\nbin/pulsar standalone"\n'})})}),(0,t.jsx)(l.A,{value:"Windows",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'docker run -it ^\n-e PULSAR_PREFIX_xxx=yyy ^\n-p 6650:6650  ^\n-p 8080:8080 ^\n--mount source=pulsardata,target=/pulsar/data ^\n--mount source=pulsarconf,target=/pulsar/conf ^\napachepulsar/pulsar:3.2.4 sh ^\n-c "bin/apply-config-from-env.py ^\nconf/standalone.conf && ^\nbin/pulsar standalone"\n'})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The docker container runs as UID 10000 and GID 0 by default. You need to ensure the mounted volumes give write permission to either UID 10000 or GID 0. Note that UID 10000 is arbitrary, so it is recommended to make these mounts writable for the root group (GID 0)."}),"\n",(0,t.jsxs)(n.li,{children:['The data, metadata, and configuration are persisted on Docker volumes to not start "fresh" every time the container is restarted. For details on the volumes, you can use ',(0,t.jsx)(n.code,{children:"docker volume inspect <sourcename>"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"For Docker on Windows, make sure to configure it to use Linux containers."}),"\n"]})}),"\n",(0,t.jsxs)(n.p,{children:["After starting Pulsar successfully, you can see ",(0,t.jsx)(n.code,{children:"INFO"}),"-level log messages like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"08:18:30.970 [main] INFO  org.apache.pulsar.broker.web.WebService - HTTP Service started at http://0.0.0.0:8080\n...\n07:53:37.322 [main] INFO  org.apache.pulsar.broker.PulsarService - messaging service is ready, bootstrap service port = 8080, broker url= pulsar://localhost:6650, cluster=standalone, configs=org.apache.pulsar.broker.ServiceConfiguration@98b63c1\n...\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["To perform a health check, you can use the ",(0,t.jsx)(n.code,{children:"bin/pulsar-admin brokers healthcheck"})," command. For more information, see ",(0,t.jsx)(n.a,{href:"pathname:///reference/#/3.2.x/pulsar-admin/",children:"Pulsar admin docs"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["When you start a local standalone cluster, a ",(0,t.jsx)(n.code,{children:"public/default"})," namespace is created automatically. The namespace is used for development purposes. All Pulsar topics are managed within namespaces. For more information, see ",(0,t.jsx)(n.a,{href:"/docs/3.2.x/concepts-messaging#topics",children:"Topics"}),"."]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"step-2-use-pulsar-in-docker",children:"Step 2: Use Pulsar in Docker"}),"\n",(0,t.jsxs)(n.p,{children:["Pulsar offers a variety of ",(0,t.jsx)(n.a,{href:"/docs/3.2.x/client-libraries",children:"client libraries"}),", such as ",(0,t.jsx)(n.a,{href:"/docs/3.2.x/client-libraries-java",children:"Java"}),", ",(0,t.jsx)(n.a,{href:"/docs/3.2.x/client-libraries-go",children:"Go"}),", ",(0,t.jsx)(n.a,{href:"/docs/3.2.x/client-libraries-python",children:"Python"}),", ",(0,t.jsx)(n.a,{href:"/docs/3.2.x/client-libraries-cpp",children:"C++"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"If you're running a local standalone cluster, you can use one of these root URLs to interact with your cluster:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"pulsar://localhost:6650"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"http://localhost:8080"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The following example guides you to get started with Pulsar by using the ",(0,t.jsx)(n.a,{href:"https://pulsar.apache.org/api/python/3.5.x",children:"Python client API"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Install the Pulsar Python client library directly from ",(0,t.jsx)(n.a,{href:"https://pypi.org/project/pulsar-client/",children:"PyPI"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pip install pulsar-client\n"})}),"\n",(0,t.jsx)(n.h3,{id:"consume-a-message",children:"Consume a message"}),"\n",(0,t.jsx)(n.p,{children:"Create a consumer and subscribe to the topic:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic', subscription_name='my-sub')\n\nwhile True:\n    msg = consumer.receive()\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n"})}),"\n",(0,t.jsx)(n.h3,{id:"produce-a-message",children:"Produce a message"}),"\n",(0,t.jsx)(n.p,{children:"Start a producer to send some test messages:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nproducer = client.create_producer('my-topic')\n\nfor i in range(10):\n    producer.send(('hello-pulsar-%d' % i).encode('utf-8'))\n\nclient.close()\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-3-get-the-topic-statistics",children:"Step 3: Get the topic statistics"}),"\n",(0,t.jsxs)(n.p,{children:["In Pulsar, you can use REST API, Java, or command-line tools to control every aspect of the system. For details on APIs, refer to ",(0,t.jsx)(n.a,{href:"/docs/3.2.x/admin-api-overview",children:"Admin API Overview"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"In the simplest example, you can use curl to probe the stats for a particular topic:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"curl http://localhost:8080/admin/v2/persistent/public/default/my-topic/stats | python -m json.tool\n"})}),"\n",(0,t.jsx)(n.p,{children:"The output is something like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "msgRateIn": 0.0,\n    "msgThroughputIn": 0.0,\n    "msgRateOut": 1.8332950480217471,\n    "msgThroughputOut": 91.33142602871978,\n    "bytesInCounter": 7097,\n    "msgInCounter": 143,\n    "bytesOutCounter": 6607,\n    "msgOutCounter": 133,\n    "averageMsgSize": 0.0,\n    "msgChunkPublished": false,\n    "storageSize": 7097,\n    "backlogSize": 0,\n    "offloadedStorageSize": 0,\n    "publishers": [\n        {\n            "accessMode": "Shared",\n            "msgRateIn": 0.0,\n            "msgThroughputIn": 0.0,\n            "averageMsgSize": 0.0,\n            "chunkedMessageRate": 0.0,\n            "producerId": 0,\n            "metadata": {},\n            "address": "/127.0.0.1:35604",\n            "connectedSince": "2021-07-04T09:05:43.04788Z",\n            "clientVersion": "2.8.0",\n            "producerName": "standalone-2-5"\n        }\n    ],\n    "waitingPublishers": 0,\n    "subscriptions": {\n        "my-sub": {\n            "msgRateOut": 1.8332950480217471,\n            "msgThroughputOut": 91.33142602871978,\n            "bytesOutCounter": 6607,\n            "msgOutCounter": 133,\n            "msgRateRedeliver": 0.0,\n            "chunkedMessageRate": 0,\n            "msgBacklog": 0,\n            "backlogSize": 0,\n            "msgBacklogNoDelayed": 0,\n            "blockedSubscriptionOnUnackedMsgs": false,\n            "msgDelayed": 0,\n            "unackedMessages": 0,\n            "type": "Exclusive",\n            "activeConsumerName": "3c544f1daa",\n            "msgRateExpired": 0.0,\n            "totalMsgExpired": 0,\n            "lastExpireTimestamp": 0,\n            "lastConsumedFlowTimestamp": 1625389101290,\n            "lastConsumedTimestamp": 1625389546070,\n            "lastAckedTimestamp": 1625389546162,\n            "lastMarkDeleteAdvancedTimestamp": 1625389546163,\n            "consumers": [\n                {\n                    "msgRateOut": 1.8332950480217471,\n                    "msgThroughputOut": 91.33142602871978,\n                    "bytesOutCounter": 6607,\n                    "msgOutCounter": 133,\n                    "msgRateRedeliver": 0.0,\n                    "chunkedMessageRate": 0.0,\n                    "consumerName": "3c544f1daa",\n                    "availablePermits": 867,\n                    "unackedMessages": 0,\n                    "avgMessagesPerEntry": 6,\n                    "blockedConsumerOnUnackedMsgs": false,\n                    "lastAckedTimestamp": 1625389546162,\n                    "lastConsumedTimestamp": 1625389546070,\n                    "metadata": {},\n                    "address": "/127.0.0.1:35472",\n                    "connectedSince": "2021-07-04T08:58:21.287682Z",\n                    "clientVersion": "2.8.0"\n                }\n            ],\n            "isDurable": true,\n            "isReplicated": false,\n            "allowOutOfOrderDelivery": false,\n            "consumersAfterMarkDeletePosition": {},\n            "nonContiguousDeletedMessagesRanges": 0,\n            "nonContiguousDeletedMessagesRangesSerializedSize": 0,\n            "durable": true,\n            "replicated": false\n        }\n    },\n    "replication": {},\n    "deduplicationStatus": "Disabled",\n    "nonContiguousDeletedMessagesRanges": 0,\n    "nonContiguousDeletedMessagesRangesSerializedSize": 0\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>o});s(96540);var a=s(34164);const t={tabItem:"tabItem_Ymn6"};var r=s(74848);function o(e){let{children:n,hidden:s,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,o),hidden:s,children:n})}},89089:(e,n,s)=>{s.d(n,{A:()=>k});var a=s(96540),t=s(34164),r=s(23104),o=s(56347),l=s(205),i=s(57485),c=s(31682),u=s(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:t}}=e;return{value:n,label:s,attributes:a,default:t}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const t=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,i.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function g(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,r=p(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=m({queryString:s,groupId:t}),[g,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,u.Dv)(s);return[t,(0,a.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:t}),x=(()=>{const e=c??g;return h({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{x&&i(x)}),[x]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=s(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(74848);function v(e){let{className:n,block:s,selectedValue:a,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,s=i.indexOf(n),t=l[s].value;t!==a&&(c(n),o(t))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;n=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;n=i[s]??i[i.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...r,className:(0,t.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function j(e){let{lazy:n,children:s,selectedValue:r}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(j,{...n,...e})]})}function k(e){const n=(0,f.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var a=s(96540);const t={},r=a.createContext(t);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);