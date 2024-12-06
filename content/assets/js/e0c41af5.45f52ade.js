"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[31560],{3691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"cookbooks-deduplication","title":"Message deduplication","description":"When Message deduplication is enabled, it ensures that each message produced on Pulsar topics is persisted to disk only once, even if the message is produced more than once. Message deduplication is handled automatically on the server side.","source":"@site/versioned_docs/version-2.5.2/cookbooks-deduplication.md","sourceDirName":".","slug":"/cookbooks-deduplication","permalink":"/docs/2.5.2/cookbooks-deduplication","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.2/cookbooks-deduplication.md","tags":[],"version":"2.5.2","frontMatter":{"id":"cookbooks-deduplication","title":"Message deduplication","sidebar_label":"Message deduplication "},"sidebar":"docsSidebar","previous":{"title":"Topic compaction","permalink":"/docs/2.5.2/cookbooks-compaction"},"next":{"title":"Non-persistent messaging","permalink":"/docs/2.5.2/cookbooks-non-persistent"}}');var i=n(74848),l=n(28453),a=n(11470),r=n(19365);const o={id:"cookbooks-deduplication",title:"Message deduplication",sidebar_label:"Message deduplication "},c=void 0,d={},u=[{value:"How it works",id:"how-it-works",level:2},{value:"Configure message deduplication",id:"configure-message-deduplication",level:2},{value:"Set default value at the broker-level",id:"set-default-value-at-the-broker-level",level:3},{value:"Enable message deduplication",id:"enable-message-deduplication",level:3},{value:"Disable message deduplication",id:"disable-message-deduplication",level:3},{value:"Pulsar clients",id:"pulsar-clients",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["When ",(0,i.jsx)(t.strong,{children:"Message deduplication"})," is enabled, it ensures that each message produced on Pulsar topics is persisted to disk ",(0,i.jsx)(t.em,{children:"only once"}),", even if the message is produced more than once. Message deduplication is handled automatically on the server side."]}),"\n",(0,i.jsx)(t.p,{children:"To use message deduplication in Pulsar, you need to configure your Pulsar brokers and clients."}),"\n",(0,i.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,i.jsx)(t.p,{children:"You can enable or disable message deduplication at the namespace level or the topic level. By default, it is disabled on all namespaces or topics. You can enable it in the following ways:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Enable deduplication for all namespaces/topics at the broker-level."}),"\n",(0,i.jsxs)(t.li,{children:["Enable deduplication for a specific namespace with the ",(0,i.jsx)(t.code,{children:"pulsar-admin namespaces"})," interface."]}),"\n",(0,i.jsxs)(t.li,{children:["Enable deduplication for a specific topic with the ",(0,i.jsx)(t.code,{children:"pulsar-admin topics"})," interface."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"configure-message-deduplication",children:"Configure message deduplication"}),"\n",(0,i.jsxs)(t.p,{children:["You can configure message deduplication in Pulsar using the ",(0,i.jsx)(t.a,{href:"/docs/2.5.2/reference-configuration#broker",children:(0,i.jsx)(t.code,{children:"broker.conf"})})," configuration file. The following deduplication-related parameters are available."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"brokerDeduplicationEnabled"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Sets the default behavior for message deduplication in the Pulsar broker. If it is set to ",(0,i.jsx)(t.code,{children:"true"}),", message deduplication is enabled on all namespaces/topics. If it is set to ",(0,i.jsx)(t.code,{children:"false"}),", you have to enable or disable deduplication at the namespace level or the topic level."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"brokerDeduplicationMaxNumberOfProducers"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The maximum number of producers for which information is stored for deduplication purposes."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"10000"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"brokerDeduplicationEntriesInterval"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The number of entries after which a deduplication informational snapshot is taken. A larger interval leads to fewer snapshots being taken, though this lengthens the topic recovery time (the time required for entries published after the snapshot to be replayed)."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"1000"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"brokerDeduplicationSnapshotIntervalSeconds"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["The time period after which a deduplication informational snapshot is taken. It runs simultaneously with ",(0,i.jsx)(t.code,{children:"brokerDeduplicationEntriesInterval"}),"."]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"120"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"brokerDeduplicationProducerInactivityTimeoutMinutes"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The time of inactivity (in minutes) after which the broker discards deduplication information related to a disconnected producer."}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"360"})," (6 hours)"]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"set-default-value-at-the-broker-level",children:"Set default value at the broker-level"}),"\n",(0,i.jsxs)(t.p,{children:["By default, message deduplication is ",(0,i.jsx)(t.em,{children:"disabled"})," on all Pulsar namespaces/topics. To enable it on all namespaces/topics, set the ",(0,i.jsx)(t.code,{children:"brokerDeduplicationEnabled"})," parameter to ",(0,i.jsx)(t.code,{children:"true"})," and re-start the broker."]}),"\n",(0,i.jsxs)(t.p,{children:["Even if you set the value for ",(0,i.jsx)(t.code,{children:"brokerDeduplicationEnabled"}),", enabling or disabling via Pulsar admin CLI overrides the default settings at the broker-level."]}),"\n",(0,i.jsx)(t.h3,{id:"enable-message-deduplication",children:"Enable message deduplication"}),"\n",(0,i.jsxs)(t.p,{children:["Though message deduplication is disabled by default at the broker level, you can enable message deduplication for a specific namespace or topic using the ",(0,i.jsx)(t.a,{href:"/docs/2.5.2/reference-pulsar-admin#namespace-set-deduplication",children:(0,i.jsx)(t.code,{children:"pulsar-admin namespaces set-deduplication"})})," or the ",(0,i.jsx)(t.a,{href:"/docs/2.5.2/reference-pulsar-admin#topic-set-deduplication",children:(0,i.jsx)(t.code,{children:"pulsar-admin topics set-deduplication"})})," command. You can use the ",(0,i.jsx)(t.code,{children:"--enable"}),"/",(0,i.jsx)(t.code,{children:"-e"})," flag and specify the namespace/topic."]}),"\n",(0,i.jsx)(t.p,{children:"The following example shows how to enable message deduplication at the namespace level."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"\n$ bin/pulsar-admin namespaces set-deduplication \\\n  public/default \\\n  --enable # or just -e\n\n"})}),"\n",(0,i.jsx)(t.h3,{id:"disable-message-deduplication",children:"Disable message deduplication"}),"\n",(0,i.jsxs)(t.p,{children:["Even if you enable message deduplication at the broker level, you can disable message deduplication for a specific namespace or topic using the ",(0,i.jsx)(t.a,{href:"/docs/2.5.2/reference-pulsar-admin#namespace-set-deduplication",children:(0,i.jsx)(t.code,{children:"pulsar-admin namespace set-deduplication"})})," or the ",(0,i.jsx)(t.a,{href:"/docs/2.5.2/reference-pulsar-admin#topic-set-deduplication",children:(0,i.jsx)(t.code,{children:"pulsar-admin topics set-deduplication"})})," command. Use the ",(0,i.jsx)(t.code,{children:"--disable"}),"/",(0,i.jsx)(t.code,{children:"-d"})," flag and specify the namespace/topic."]}),"\n",(0,i.jsx)(t.p,{children:"The following example shows how to disable message deduplication at the namespace level."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"\n$ bin/pulsar-admin namespaces set-deduplication \\\n  public/default \\\n  --disable # or just -d\n\n"})}),"\n",(0,i.jsx)(t.h2,{id:"pulsar-clients",children:"Pulsar clients"}),"\n",(0,i.jsx)(t.p,{children:"If you enable message deduplication in Pulsar brokers, you need complete the following tasks for your client producers:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Specify a name for the producer."}),"\n",(0,i.jsxs)(t.li,{children:["Set the message timeout to ",(0,i.jsx)(t.code,{children:"0"})," (namely, no timeout)."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The instructions for Java, Python, and C++ clients are different."}),"\n",(0,i.jsxs)(a.A,{defaultValue:"Java clients",values:[{label:"Java clients",value:"Java clients"},{label:"Python clients",value:"Python clients"},{label:"C++ clients",value:"C++ clients"}],children:[(0,i.jsxs)(r.A,{value:"Java clients",children:[(0,i.jsxs)(t.p,{children:["To enable message deduplication on a ",(0,i.jsx)(t.a,{href:"/docs/2.5.2/client-libraries-java#producers",children:"Java producer"}),", set the producer name using the ",(0,i.jsx)(t.code,{children:"producerName"})," setter, and set the timeout to ",(0,i.jsx)(t.code,{children:"0"})," using the ",(0,i.jsx)(t.code,{children:"sendTimeout"})," setter."]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'\nimport org.apache.pulsar.client.api.Producer;\nimport org.apache.pulsar.client.api.PulsarClient;\nimport java.util.concurrent.TimeUnit;\n\nPulsarClient pulsarClient = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .build();\nProducer producer = pulsarClient.newProducer()\n        .producerName("producer-1")\n        .topic("persistent://public/default/topic-1")\n        .sendTimeout(0, TimeUnit.SECONDS)\n        .create();\n\n'})})]}),(0,i.jsxs)(r.A,{value:"Python clients",children:[(0,i.jsxs)(t.p,{children:["To enable message deduplication on a ",(0,i.jsx)(t.a,{href:"/docs/2.5.2/client-libraries-python#producers",children:"Python producer"}),", set the producer name using ",(0,i.jsx)(t.code,{children:"producer_name"}),", and set the timeout to ",(0,i.jsx)(t.code,{children:"0"})," using ",(0,i.jsx)(t.code,{children:"send_timeout_millis"}),"."]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'\nimport pulsar\n\nclient = pulsar.Client("pulsar://localhost:6650")\nproducer = client.create_producer(\n    "persistent://public/default/topic-1",\n    producer_name="producer-1",\n    send_timeout_millis=0)\n\n'})})]}),(0,i.jsxs)(r.A,{value:"C++ clients",children:[(0,i.jsxs)(t.p,{children:["To enable message deduplication on a ",(0,i.jsx)(t.a,{href:"/docs/2.5.2/client-libraries-cpp#producer",children:"C++ producer"}),", set the producer name using ",(0,i.jsx)(t.code,{children:"producer_name"}),", and set the timeout to ",(0,i.jsx)(t.code,{children:"0"})," using ",(0,i.jsx)(t.code,{children:"send_timeout_millis"}),"."]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:'\n#include <pulsar/Client.h>\n\nstd::string serviceUrl = "pulsar://localhost:6650";\nstd::string topic = "persistent://some-tenant/ns1/topic-1";\nstd::string producerName = "producer-1";\n\nClient client(serviceUrl);\n\nProducerConfiguration producerConfig;\nproducerConfig.setSendTimeout(0);\nproducerConfig.setProducerName(producerName);\n\nProducer producer;\n\nResult result = client.createProducer(topic, producerConfig, producer);\n\n'})})]})]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(34164);const i={tabItem:"tabItem_Ymn6"};var l=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var s=n(96540),i=n(34164),l=n(23104),a=n(56347),r=n(205),o=n(57485),c=n(31682),d=n(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:i}}=e;return{value:t,label:n,attributes:s,default:i}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(i.location.search);t.set(l,e),i.replace({...i.location,search:t.toString()})}),[l,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,l=p(e),[a,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:l}))),[c,u]=m({queryString:n,groupId:i}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,l]=(0,d.Dv)(n);return[i,(0,s.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:i}),x=(()=>{const e=c??f;return h({value:e,tabValues:l})?e:null})();(0,r.A)((()=>{x&&o(x)}),[x]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var b=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function j(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:r}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),i=r[n].value;i!==s&&(c(t),a(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:r.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...l,className:(0,i.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:l}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function y(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...t,...e}),(0,g.jsx)(v,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(96540);const i={},l=s.createContext(i);function a(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);