"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[61507],{66146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"cookbooks-deduplication","title":"Message deduplication","description":"Get a comprehensive understanding of working principle and configuration methods of message deduplication in Pulsar.","source":"@site/versioned_docs/version-4.0.x/cookbooks-deduplication.md","sourceDirName":".","slug":"/cookbooks-deduplication","permalink":"/docs/4.0.x/cookbooks-deduplication","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-4.0.x/cookbooks-deduplication.md","tags":[],"version":"4.0.x","frontMatter":{"id":"cookbooks-deduplication","title":"Message deduplication","sidebar_label":"Message deduplication ","description":"Get a comprehensive understanding of working principle and configuration methods of message deduplication in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"Topic compaction","permalink":"/docs/4.0.x/cookbooks-compaction"},"next":{"title":"Non-persistent messaging","permalink":"/docs/4.0.x/cookbooks-non-persistent"}}');var a=n(74848),s=n(28453),r=n(11470),l=n(19365);const o={id:"cookbooks-deduplication",title:"Message deduplication",sidebar_label:"Message deduplication ",description:"Get a comprehensive understanding of working principle and configuration methods of message deduplication in Pulsar."},c=void 0,d={},u=[{value:"How message deduplication works",id:"how-message-deduplication-works",level:2},{value:"Configure message deduplication",id:"configure-message-deduplication",level:2},{value:"Set default value at the broker-level",id:"set-default-value-at-the-broker-level",level:3},{value:"Enable message deduplication at namespace or topic level",id:"enable-message-deduplication-at-namespace-or-topic-level",level:3},{value:"Disable message deduplication at namespace or topic level",id:"disable-message-deduplication-at-namespace-or-topic-level",level:3},{value:"Pulsar clients",id:"pulsar-clients",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Message deduplication could affect the performance of the brokers during informational snapshots."}),"\n",(0,a.jsx)(t.p,{children:"To use message deduplication in Pulsar, you need to configure your Pulsar brokers, namespaces, or topics. It is recommended to modify the configuration in the clients, for example, setting send timeout to infinity."}),"\n",(0,a.jsx)(t.h2,{id:"how-message-deduplication-works",children:"How message deduplication works"}),"\n",(0,a.jsx)(t.p,{children:"You can enable or disable message deduplication at broker, namespace, or topic level. By default, it is disabled on all brokers, namespaces, or topics. You can enable it in the following ways:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Enable deduplication for all namespaces/topics at the broker level."}),"\n",(0,a.jsxs)(t.li,{children:["Enable deduplication for a specific namespace with the ",(0,a.jsx)(t.code,{children:"pulsar-admin namespaces"})," interface."]}),"\n",(0,a.jsxs)(t.li,{children:["Enable deduplication for a specific topic with the ",(0,a.jsx)(t.code,{children:"pulsar-admin topics"})," interface."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"configure-message-deduplication",children:"Configure message deduplication"}),"\n",(0,a.jsxs)(t.p,{children:["You can configure message deduplication in Pulsar using the ",(0,a.jsx)(t.a,{href:"/docs/4.0.x/reference-configuration#broker",children:(0,a.jsx)(t.code,{children:"broker.conf"})})," configuration file. The following deduplication-related parameters are available."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.code,{children:"brokerDeduplicationEnabled"})}),(0,a.jsxs)(t.td,{style:{textAlign:"left"},children:["Sets the default behavior for message deduplication in the Pulsar broker. If it is set to ",(0,a.jsx)(t.code,{children:"true"}),", message deduplication is enabled on all namespaces/topics. If it is set to ",(0,a.jsx)(t.code,{children:"false"}),", you have to enable or disable deduplication at the namespace level or the topic level."]}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.code,{children:"false"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.code,{children:"brokerDeduplicationMaxNumberOfProducers"})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"The maximum number of producers for which information is stored for deduplication purposes."}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.code,{children:"10000"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.code,{children:"brokerDeduplicationEntriesInterval"})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"The number of entries after which a deduplication informational snapshot is taken. A larger interval leads to fewer snapshots being taken, though this lengthens the topic recovery time (the time required for entries published after the snapshot to be replayed)."}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.code,{children:"1000"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.code,{children:"brokerDeduplicationSnapshotIntervalSeconds"})}),(0,a.jsxs)(t.td,{style:{textAlign:"left"},children:["The time period after which a deduplication informational snapshot is taken. It runs simultaneously with ",(0,a.jsx)(t.code,{children:"brokerDeduplicationEntriesInterval"}),"."]}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.code,{children:"120"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsx)(t.code,{children:"brokerDeduplicationProducerInactivityTimeoutMinutes"})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"The time of inactivity (in minutes) after which the broker discards deduplication information related to a disconnected producer."}),(0,a.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,a.jsx)(t.code,{children:"360"})," (6 hours)"]})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"set-default-value-at-the-broker-level",children:"Set default value at the broker-level"}),"\n",(0,a.jsxs)(t.p,{children:["By default, message deduplication is ",(0,a.jsx)(t.em,{children:"disabled"})," on all Pulsar namespaces/topics. To enable it on all namespaces/topics, set the ",(0,a.jsx)(t.code,{children:"brokerDeduplicationEnabled"})," parameter to ",(0,a.jsx)(t.code,{children:"true"})," and restart the broker."]}),"\n",(0,a.jsxs)(t.p,{children:["Even if you set the value for ",(0,a.jsx)(t.code,{children:"brokerDeduplicationEnabled"}),", enabling or disabling via Pulsar admin CLI overrides the default settings at the broker level."]}),"\n",(0,a.jsx)(t.h3,{id:"enable-message-deduplication-at-namespace-or-topic-level",children:"Enable message deduplication at namespace or topic level"}),"\n",(0,a.jsxs)(t.p,{children:["Though message deduplication is disabled by default at the broker level, you can enable message deduplication for a specific namespace or topic using the ",(0,a.jsx)(t.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/namespaces?id=set-deduplication",children:(0,a.jsx)(t.code,{children:"pulsar-admin namespaces set-deduplication"})})," or the ",(0,a.jsx)(t.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/topics?id=set-deduplication",children:(0,a.jsx)(t.code,{children:"pulsar-admin topics set-deduplication"})})," command. You can use the ",(0,a.jsx)(t.code,{children:"--enable"}),"/",(0,a.jsx)(t.code,{children:"-e"})," flag and specify the namespace/topic."]}),"\n",(0,a.jsx)(t.p,{children:"The following example shows how to enable message deduplication at the namespace level."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"bin/pulsar-admin namespaces set-deduplication \\\npublic/default \\\n--enable # or just -e\n"})}),"\n",(0,a.jsx)(t.h3,{id:"disable-message-deduplication-at-namespace-or-topic-level",children:"Disable message deduplication at namespace or topic level"}),"\n",(0,a.jsxs)(t.p,{children:["Even if you enable message deduplication at the broker level, you can disable message deduplication for a specific namespace or topic using the ",(0,a.jsx)(t.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/namespaces?id=set-deduplication",children:(0,a.jsx)(t.code,{children:"pulsar-admin namespace set-deduplication"})})," or the ",(0,a.jsx)(t.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/topics?id=set-deduplication",children:(0,a.jsx)(t.code,{children:"pulsar-admin topics set-deduplication"})})," command. Use the ",(0,a.jsx)(t.code,{children:"--disable"}),"/",(0,a.jsx)(t.code,{children:"-d"})," flag and specify the namespace/topic."]}),"\n",(0,a.jsx)(t.p,{children:"The following example shows how to disable message deduplication at the namespace level."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"bin/pulsar-admin namespaces set-deduplication \\\npublic/default \\\n--disable # or just -d\n"})}),"\n",(0,a.jsx)(t.h2,{id:"pulsar-clients",children:"Pulsar clients"}),"\n",(0,a.jsx)(t.p,{children:"If you enable message deduplication in Pulsar brokers, namespaces, or topics, it is recommended to make the client retry infinitely the messages until it succeeds, otherwise it is possible to break the ordering guarantee as some requests may time out and the application does not know whether the request is successfully added to the topic or not."}),"\n",(0,a.jsx)(t.p,{children:"So you need to complete the following tasks for your client producers:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Specify a name for the producer (this is a requirement, Pulsar will use the producer name to filter duplicated messages)."}),"\n",(0,a.jsxs)(t.li,{children:["Set the message timeout to ",(0,a.jsx)(t.code,{children:"0"})," (namely, no timeout)."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The instructions for Java, Python, and C++ clients are different."}),"\n",(0,a.jsxs)(r.A,{defaultValue:"Java clients",values:[{label:"Java clients",value:"Java clients"},{label:"Python clients",value:"Python clients"},{label:"C++ clients",value:"C++ clients"}],children:[(0,a.jsxs)(l.A,{value:"Java clients",children:[(0,a.jsxs)(t.p,{children:["To ensure the guarantee order on a ",(0,a.jsx)(t.a,{href:"client-libraries-java-use/#create-a-producer",children:"Java producer"})," sending to a topic with message deduplication enabled, set the producer name using the ",(0,a.jsx)(t.code,{children:"producerName"})," setter, and set the timeout to ",(0,a.jsx)(t.code,{children:"0"})," using the ",(0,a.jsx)(t.code,{children:"sendTimeout"})," setter."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'import org.apache.pulsar.client.api.Producer;\nimport org.apache.pulsar.client.api.PulsarClient;\nimport java.util.concurrent.TimeUnit;\n\nPulsarClient pulsarClient = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .build();\nProducer producer = pulsarClient.newProducer()\n        .producerName("producer-1")\n        .topic("persistent://public/default/topic-1")\n        .sendTimeout(0, TimeUnit.SECONDS)\n        .create();\n'})})]}),(0,a.jsxs)(l.A,{value:"Python clients",children:[(0,a.jsxs)(t.p,{children:["Not to break the guarantee order on a ",(0,a.jsx)(t.a,{href:"/docs/4.0.x/client-libraries-python-use#create-a-producer",children:"Python producer"})," sending to a topic with message deduplication active, set the producer name using ",(0,a.jsx)(t.code,{children:"producer_name"}),", and set the timeout to ",(0,a.jsx)(t.code,{children:"0"})," using ",(0,a.jsx)(t.code,{children:"send_timeout_millis"}),"."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'import pulsar\n\nclient = pulsar.Client("pulsar://localhost:6650")\nproducer = client.create_producer(\n    "persistent://public/default/topic-1",\n    producer_name="producer-1",\n    send_timeout_millis=0)\n'})})]}),(0,a.jsxs)(l.A,{value:"C++ clients",children:[(0,a.jsxs)(t.p,{children:["Not to break the guarantee order on a ",(0,a.jsx)(t.a,{href:"/docs/4.0.x/client-libraries-cpp-use#create-a-producer",children:"C++ producer"})," sending to a topic with message deduplication active, set the producer name using ",(0,a.jsx)(t.code,{children:"producer_name"}),", and set the timeout to ",(0,a.jsx)(t.code,{children:"0"})," using ",(0,a.jsx)(t.code,{children:"send_timeout_millis"}),"."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:'#include <pulsar/Client.h>\n\nstd::string serviceUrl = "pulsar://localhost:6650";\nstd::string topic = "persistent://some-tenant/ns1/topic-1";\nstd::string producerName = "producer-1";\n\nClient client(serviceUrl);\n\nProducerConfiguration producerConfig;\nproducerConfig.setSendTimeout(0);\nproducerConfig.setProducerName(producerName);\n\nProducer producer;\n\nResult result = client.createProducer(topic, producerConfig, producer);\n'})})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var i=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,r),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var i=n(96540),a=n(34164),s=n(23104),r=n(56347),l=n(205),o=n(57485),c=n(31682),d=n(70679);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:a}}=e;return{value:t,label:n,attributes:i,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,r.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[r,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:s}))),[c,u]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,d.Dv)(n);return[a,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),x=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function j(e){let{className:t,block:n,selectedValue:i,selectValue:r,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==i&&(c(t),r(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...t,...e}),(0,g.jsx)(v,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(96540);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);