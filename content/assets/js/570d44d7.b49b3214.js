"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3432],{58204:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"administration-isolation","title":"Pulsar isolation","description":"In an organization, a Pulsar instance provides services to multiple teams. When organizing the resources across multiple teams, you want to make a suitable isolation plan to avoid the resource competition between different teams and applications and provide high-quality messaging service. In this case, you need to take resource isolation into consideration and weigh your intended actions against expected and unexpected consequences.","source":"@site/versioned_docs/version-2.7.4/administration-isolation.md","sourceDirName":".","slug":"/administration-isolation","permalink":"/docs/2.7.4/administration-isolation","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.4/administration-isolation.md","tags":[],"version":"2.7.4","frontMatter":{"id":"administration-isolation","title":"Pulsar isolation","sidebar_label":"Pulsar isolation","original_id":"administration-isolation"},"sidebar":"docsSidebar","previous":{"title":"Upgrade","permalink":"/docs/2.7.4/administration-upgrade"},"next":{"title":"Overview","permalink":"/docs/2.7.4/security-overview"}}');var i=n(74848),s=n(28453),o=n(89089),r=n(19365);const l={id:"administration-isolation",title:"Pulsar isolation",sidebar_label:"Pulsar isolation",original_id:"administration-isolation"},c=void 0,u={},d=[{value:"Broker isolation",id:"broker-isolation",level:2},{value:"Bookie isolation",id:"bookie-isolation",level:2}];function p(e){const a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"In an organization, a Pulsar instance provides services to multiple teams. When organizing the resources across multiple teams, you want to make a suitable isolation plan to avoid the resource competition between different teams and applications and provide high-quality messaging service. In this case, you need to take resource isolation into consideration and weigh your intended actions against expected and unexpected consequences."}),"\n",(0,i.jsxs)(a.p,{children:["To enforce resource isolation, you can use the Pulsar isolation policy, which allows you to allocate resources (",(0,i.jsx)(a.strong,{children:"broker"})," and ",(0,i.jsx)(a.strong,{children:"bookie"}),") for the namespace."]}),"\n",(0,i.jsx)(a.h2,{id:"broker-isolation",children:"Broker isolation"}),"\n",(0,i.jsx)(a.p,{children:"In Pulsar, when namespaces (more specifically, namespace bundles) are assigned dynamically to brokers, the namespace isolation policy limits the set of brokers that can be used for assignment. Before topics are assigned to brokers, you can set the namespace isolation policy with a primary or a secondary regex to select desired brokers."}),"\n",(0,i.jsx)(a.p,{children:"You can set a namespace isolation policy for a cluster using one of the following methods."}),"\n",(0,i.jsxs)(o.A,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java admin API",value:"Java admin API"}],children:[(0,i.jsxs)(r.A,{value:"Admin CLI",children:[(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"\npulsar-admin ns-isolation-policy set options\n\n"})}),(0,i.jsxs)(a.p,{children:["For more information about the command ",(0,i.jsx)(a.code,{children:"pulsar-admin ns-isolation-policy set options"}),", see here."]}),(0,i.jsx)(a.p,{children:(0,i.jsx)(a.strong,{children:"Example"})}),(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-shell",children:"\nbin/pulsar-admin ns-isolation-policy set \\\n--auto-failover-policy-type min_available \\\n--auto-failover-policy-params min_limit=1,usage_threshold=80 \\\n--namespaces my-tenant/my-namespace \\\n--primary 10.193.216.*  my-cluster policy-name\n\n"})})]}),(0,i.jsx)(r.A,{value:"REST API",children:(0,i.jsx)(a.p,{children:(0,i.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api/?version=2.7.0&apiversion=v2#operation/createNamespace",children:"PUT /admin/v2/namespaces/{tenant}/{namespace}"})})}),(0,i.jsx)(r.A,{value:"Java admin API",children:(0,i.jsxs)(a.p,{children:["For how to set namespace isolation policy using Java admin API, see ",(0,i.jsx)(a.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/NamespacesImpl.java#L251",children:"here"}),"."]})})]}),"\n",(0,i.jsx)(a.h2,{id:"bookie-isolation",children:"Bookie isolation"}),"\n",(0,i.jsxs)(a.p,{children:["A namespace can be isolated into user-defined groups of bookies, which guarantees all the data that belongs to the namespace is stored in desired bookies. The bookie affinity group uses the BookKeeper ",(0,i.jsx)(a.a,{href:"https://bookkeeper.apache.org/docs/latest/api/javadoc/org/apache/bookkeeper/client/EnsemblePlacementPolicy.html",children:"rack-aware placement policy"})," and it is a way to feed rack information which is stored as JSON format in znode."]}),"\n",(0,i.jsx)(a.p,{children:"You can set a bookie affinity group using one of the following methods."}),"\n",(0,i.jsxs)(o.A,{defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java admin API",value:"Java admin API"}],children:[(0,i.jsxs)(r.A,{value:"Admin CLI",children:[(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"\npulsar-admin namespaces set-bookie-affinity-group options\n\n"})}),(0,i.jsxs)(a.p,{children:["For more information about the command ",(0,i.jsx)(a.code,{children:"pulsar-admin namespaces set-bookie-affinity-group options"}),", see here."]}),(0,i.jsx)(a.p,{children:(0,i.jsx)(a.strong,{children:"Example"})}),(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-shell",children:"\nbin/pulsar-admin namespaces set-bookie-affinity-group public/default \\\n--primary-group group-bookie1\n\n"})})]}),(0,i.jsx)(r.A,{value:"REST API",children:(0,i.jsx)(a.p,{children:(0,i.jsx)(a.a,{href:"https://pulsar.apache.org/admin-rest-api/?version=2.7.0&apiversion=v2#operation/setBookieAffinityGroup",children:"POST /admin/v2/namespaces/{tenant}/{namespace}/persistence/bookieAffinity"})})}),(0,i.jsx)(r.A,{value:"Java admin API",children:(0,i.jsxs)(a.p,{children:["For how to set bookie affinity group for a namespace using Java admin API, see ",(0,i.jsx)(a.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/NamespacesImpl.java#L1164",children:"here"}),"."]})})]})]})}function m(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},19365:(e,a,n)=>{n.d(a,{A:()=>o});n(96540);var t=n(34164);const i={tabItem:"tabItem_Ymn6"};var s=n(74848);function o(e){let{children:a,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,o),hidden:n,children:a})}},89089:(e,a,n)=>{n.d(a,{A:()=>k});var t=n(96540),i=n(34164),s=n(23104),o=n(56347),r=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:i}}=e;return{value:a,label:n,attributes:t,default:i}}))}(n);return function(e){const a=(0,c.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function m(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:n}=e;const i=(0,o.W6)(),s=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(i.location.search);a.set(s,e),i.replace({...i.location,search:a.toString()})}),[s,i])]}function f(e){const{defaultValue:a,queryString:n=!1,groupId:i}=e,s=p(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:s}))),[c,d]=h({queryString:n,groupId:i}),[f,b]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[i,s]=(0,u.Dv)(n);return[i,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),v=(()=>{const e=c??f;return m({value:e,tabValues:s})?e:null})();(0,r.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function x(e){let{className:a,block:n,selectedValue:t,selectValue:o,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const a=e.currentTarget,n=l.indexOf(a),i=r[n].value;i!==t&&(c(a),o(i))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;a=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;a=l[n]??l[l.length-1];break}}a?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},a),children:r.map((e=>{let{value:a,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,i.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function y(e){let{lazy:a,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function j(e){const a=f(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...a,...e}),(0,g.jsx)(y,{...a,...e})]})}function k(e){const a=(0,b.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(a))}},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>r});var t=n(96540);const i={},s=t.createContext(i);function o(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);