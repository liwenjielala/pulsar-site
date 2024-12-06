"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[53792],{33355:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"io-overview","title":"Pulsar connector overview","description":"Messaging systems are most powerful when you can easily use them with external systems like databases and other messaging systems.","source":"@site/versioned_docs/version-2.3.1/io-overview.md","sourceDirName":".","slug":"/io-overview","permalink":"/docs/2.3.1/io-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.1/io-overview.md","tags":[],"version":"2.3.1","frontMatter":{"id":"io-overview","title":"Pulsar connector overview","sidebar_label":"Overview"},"sidebar":"docsSidebar","previous":{"title":"Window Functions: Context","permalink":"/docs/2.3.1/window-functions-context"},"next":{"title":"Getting started","permalink":"/docs/2.3.1/io-quickstart"}}');var t=s(74848),o=s(28453),a=s(89089),i=s(19365);const c={id:"io-overview",title:"Pulsar connector overview",sidebar_label:"Overview"},l=void 0,d={},u=[{value:"Concept",id:"concept",level:2},{value:"Source",id:"source",level:3},{value:"Sink",id:"sink",level:3},{value:"Processing guarantee",id:"processing-guarantee",level:2},{value:"Set",id:"set",level:3},{value:"Update",id:"update",level:3},{value:"Work with connector",id:"work-with-connector",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Messaging systems are most powerful when you can easily use them with external systems like databases and other messaging systems."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Pulsar IO connectors"})," enable you to easily create, deploy, and manage connectors that interact with external systems, such as ",(0,t.jsx)(n.a,{href:"https://cassandra.apache.org",children:"Apache Cassandra"}),", ",(0,t.jsx)(n.a,{href:"https://www.aerospike.com",children:"Aerospike"}),", and many others."]}),"\n",(0,t.jsx)(n.h2,{id:"concept",children:"Concept"}),"\n",(0,t.jsxs)(n.p,{children:["Pulsar IO connectors come in two types: ",(0,t.jsx)(n.strong,{children:"source"})," and ",(0,t.jsx)(n.strong,{children:"sink"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This diagram illustrates the relationship between source, Pulsar, and sink:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Pulsar IO diagram",src:s(88999).A+"",title:"Pulsar IO connectors (sources and sinks)",width:"1758",height:"352"})}),"\n",(0,t.jsx)(n.h3,{id:"source",children:"Source"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Sources ",(0,t.jsx)(n.strong,{children:"feed data from external systems into Pulsar"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Common sources include other messaging systems and firehose-style data pipeline APIs."}),"\n",(0,t.jsxs)(n.p,{children:["For the complete list of Pulsar built-in source connectors, see ",(0,t.jsx)(n.a,{href:"/docs/2.3.1/io-connectors#source-connector",children:"source connector"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"sink",children:"Sink"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Sinks ",(0,t.jsx)(n.strong,{children:"feed data from Pulsar into external systems"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Common sinks include other messaging systems and SQL and NoSQL databases."}),"\n",(0,t.jsxs)(n.p,{children:["For the complete list of Pulsar built-in sink connectors, see ",(0,t.jsx)(n.a,{href:"/docs/2.3.1/io-connectors#sink-connector",children:"sink connector"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"processing-guarantee",children:"Processing guarantee"}),"\n",(0,t.jsx)(n.p,{children:"Processing guarantees are used to handle errors when writing messages to Pulsar topics."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Pulsar connectors and Functions use the ",(0,t.jsx)(n.strong,{children:"same"})," processing guarantees as below."]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Delivery semantic"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"at-most-once"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["Each message sent to a connector is to be ",(0,t.jsx)(n.strong,{children:"processed once"})," or ",(0,t.jsx)(n.strong,{children:"not to be processed"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"at-least-once"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["Each message sent to a connector is to be ",(0,t.jsx)(n.strong,{children:"processed once"})," or ",(0,t.jsx)(n.strong,{children:"more than once"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"effectively-once"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["Each message sent to a connector has ",(0,t.jsx)(n.strong,{children:"one output associated"})," with it."]})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Processing guarantees for connectors not just rely on Pulsar guarantee but also ",(0,t.jsx)(n.strong,{children:"relate to external systems"}),", that is, ",(0,t.jsx)(n.strong,{children:"the implementation of source and sink"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Source: Pulsar ensures that writing messages to Pulsar topics respects to the processing guarantees. It is within Pulsar's control."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Sink: the processing guarantees rely on the sink implementation. If the sink implementation does not handle retries in an idempotent way, the sink does not respect to the processing guarantees."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"set",children:"Set"}),"\n",(0,t.jsx)(n.p,{children:"When creating a connector, you can set the processing guarantee with the following semantics:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ATLEAST_ONCE"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ATMOST_ONCE"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"EFFECTIVELY_ONCE"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"--processing-guarantees"})," is not specified when creating a connector, the default semantic is ",(0,t.jsx)(n.code,{children:"ATLEAST_ONCE"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Here takes ",(0,t.jsx)(n.strong,{children:"Admin CLI"})," as an example. For more information about ",(0,t.jsx)(n.strong,{children:"REST API"})," or ",(0,t.jsx)(n.strong,{children:"JAVA Admin API"}),", see ",(0,t.jsx)(n.a,{href:"/docs/2.3.1/io-use#create",children:"here"}),"."]}),"\n",(0,t.jsxs)(a.A,{defaultValue:"Source",values:[{label:"Source",value:"Source"},{label:"Sink",value:"Sink"}],children:[(0,t.jsxs)(i.A,{value:"Source",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin sources create \\\n  --processing-guarantees ATMOST_ONCE \\\n  # Other source configs\n\n"})}),(0,t.jsxs)(n.p,{children:["For more information about the options of ",(0,t.jsx)(n.code,{children:"pulsar-admin sources create"}),", see ",(0,t.jsx)(n.a,{href:"/docs/2.3.1/reference-connector-admin#create",children:"here"}),"."]})]}),(0,t.jsxs)(i.A,{value:"Sink",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin sinks create \\\n  --processing-guarantees EFFECTIVELY_ONCE \\\n  # Other sink configs\n\n"})}),(0,t.jsxs)(n.p,{children:["For more information about the options of ",(0,t.jsx)(n.code,{children:"pulsar-admin sinks create"}),", see ",(0,t.jsx)(n.a,{href:"/docs/2.3.1/reference-connector-admin#create-1",children:"here"}),"."]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"update",children:"Update"}),"\n",(0,t.jsx)(n.p,{children:"After creating a connector, you can update the processing guarantee with the following semantics:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ATLEAST_ONCE"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ATMOST_ONCE"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"EFFECTIVELY_ONCE"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Here takes ",(0,t.jsx)(n.strong,{children:"Admin CLI"})," as an example. For more information about ",(0,t.jsx)(n.strong,{children:"REST API"})," or ",(0,t.jsx)(n.strong,{children:"JAVA Admin API"}),", see ",(0,t.jsx)(n.a,{href:"/docs/2.3.1/io-use#create",children:"here"}),"."]}),"\n",(0,t.jsxs)(a.A,{defaultValue:"Source",values:[{label:"Source",value:"Source"},{label:"Sink",value:"Sink"}],children:[(0,t.jsxs)(i.A,{value:"Source",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin sources update \\\n  --processing-guarantees EFFECTIVELY_ONCE \\\n  # Other source configs\n\n"})}),(0,t.jsxs)(n.p,{children:["For more information about the options of ",(0,t.jsx)(n.code,{children:"pulsar-admin sources update"}),", see ",(0,t.jsx)(n.a,{href:"/docs/2.3.1/reference-connector-admin#update",children:"here"}),"."]})]}),(0,t.jsxs)(i.A,{value:"Sink",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin sinks update \\\n  --processing-guarantees ATMOST_ONCE \\\n  # Other sink configs\n\n"})}),(0,t.jsxs)(n.p,{children:["For more information about the options of ",(0,t.jsx)(n.code,{children:"pulsar-admin sinks update"}),", see ",(0,t.jsx)(n.a,{href:"/docs/2.3.1/reference-connector-admin#update-1",children:"here"}),"."]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"work-with-connector",children:"Work with connector"}),"\n",(0,t.jsxs)(n.p,{children:["You can manage Pulsar connectors (for example, create, update, start, stop, restart, reload, delete and perform other operations on connectors) via the ",(0,t.jsx)(n.a,{href:"/docs/2.3.1/reference-connector-admin",children:"Connector Admin CLI"})," with ",(0,t.jsx)(n.a,{href:"/docs/2.3.1/io-cli#sources",children:"sources"})," and ",(0,t.jsx)(n.a,{href:"/docs/2.3.1/io-cli#sinks",children:"sinks"})," subcommands."]}),"\n",(0,t.jsxs)(n.p,{children:["Connectors (sources and sinks) and Functions are components of instances, and they all run on Functions workers. When managing a source, sink or function via ",(0,t.jsx)(n.a,{href:"/docs/2.3.1/reference-connector-admin",children:"Connector Admin CLI"})," or ",(0,t.jsx)(n.a,{href:"/docs/2.3.1/functions-cli",children:"Functions Admin CLI"}),", an instance is started on a worker. For more information, see ",(0,t.jsx)(n.a,{href:"/docs/2.3.1/functions-worker#run-functions-worker-separately",children:"Functions worker"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>a});s(96540);var r=s(34164);const t={tabItem:"tabItem_Ymn6"};var o=s(74848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,a),hidden:s,children:n})}},89089:(e,n,s)=>{s.d(n,{A:()=>k});var r=s(96540),t=s(34164),o=s(23104),a=s(56347),i=s(205),c=s(57485),l=s(31682),d=s(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}}))}(s);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const t=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,o=h(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[l,u]=x({queryString:s,groupId:t}),[m,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,d.Dv)(s);return[t,(0,r.useCallback)((e=>{s&&o.set(e)}),[s,o])]}({groupId:t}),g=(()=>{const e=l??m;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{g&&c(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=s(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=s(74848);function b(e){let{className:n,block:s,selectedValue:r,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),d=e=>{const n=e.currentTarget,s=c.indexOf(n),t=i[s].value;t!==r&&(l(n),a(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...o,className:(0,t.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:o}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function k(e){const n=(0,f.A)();return(0,j.jsx)(w,{...e,children:u(e.children)},String(n))}},88999:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/pulsar-io-8e834df5eaed9d5b0a7e0ffa162e850a.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var r=s(96540);const t={},o=r.createContext(t);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);