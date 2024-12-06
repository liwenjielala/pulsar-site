"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[28928],{79006:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"client-libraries-cpp-setup","title":"Set up Pulsar C++ client","description":"Learn how to set up C++ client library in Pulsar.","source":"@site/versioned_docs/version-3.3.x/client-libraries-cpp-setup.md","sourceDirName":".","slug":"/client-libraries-cpp-setup","permalink":"/docs/3.3.x/client-libraries-cpp-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/client-libraries-cpp-setup.md","tags":[],"version":"3.3.x","frontMatter":{"id":"client-libraries-cpp-setup","title":"Set up Pulsar C++ client","sidebar_label":"Set up","description":"Learn how to set up C++ client library in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"C++ client","permalink":"/docs/3.3.x/client-libraries-cpp"},"next":{"title":"Initialize","permalink":"/docs/3.3.x/client-libraries-cpp-initialize"}}');var a=l(74848),s=l(28453),t=l(89089),i=l(19365);const c={id:"client-libraries-cpp-setup",title:"Set up Pulsar C++ client",sidebar_label:"Set up",description:"Learn how to set up C++ client library in Pulsar."},o=void 0,u={},d=[{value:"Step 1: Install C++ client library",id:"step-1-install-c-client-library",level:2},{value:"Brew",id:"brew",level:3},{value:"Deb",id:"deb",level:3},{value:"RPM",id:"rpm",level:3},{value:"APK",id:"apk",level:3},{value:"Step 2: Connect to Pulsar cluster",id:"step-2-connect-to-pulsar-cluster",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"To set up C++ client library in Pulsar, complete the following steps."}),"\n",(0,a.jsx)(n.h2,{id:"step-1-install-c-client-library",children:"Step 1: Install C++ client library"}),"\n",(0,a.jsx)(n.p,{children:"Use one of the following methods to install a Pulsar C++ client."}),"\n",(0,a.jsx)(n.h3,{id:"brew",children:"Brew"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.a,{href:"http://brew.sh/",children:"Homebrew"})," to install the latest tagged version with the library and headers:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"brew install libpulsar\n"})}),"\n",(0,a.jsx)(n.h3,{id:"deb",children:"Deb"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Download any one of the Deb packages:"}),"\n",(0,a.jsxs)(t.A,{children:[(0,a.jsxs)(i.A,{value:"client",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget https://archive.apache.org/dist/pulsar/pulsar-client-cpp-3.6.0/deb-x86_64/apache-pulsar-client.deb\n"})}),(0,a.jsxs)(n.p,{children:["This package contains shared library ",(0,a.jsx)(n.code,{children:"libpulsar.so"}),"."]})]}),(0,a.jsxs)(i.A,{value:"client-devel",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget https://archive.apache.org/dist/pulsar/pulsar-client-cpp-3.6.0/deb-x86_64/apache-pulsar-client-dev.deb\n"})}),(0,a.jsxs)(n.p,{children:["This package contains static libraries: ",(0,a.jsx)(n.code,{children:"libpulsar.a"}),", ",(0,a.jsx)(n.code,{children:"libpulsarwithdeps.a"}),", and C/C++ headers."]})]})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Install the package using the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"apt install ./apache-pulsar-client*.deb\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Now, you can see Pulsar C++ client libraries installed under the ",(0,a.jsx)(n.code,{children:"/usr/lib"})," directory."]}),"\n",(0,a.jsx)(n.h3,{id:"rpm",children:"RPM"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Download any one of the RPM packages:"}),"\n",(0,a.jsxs)(t.A,{children:[(0,a.jsxs)(i.A,{value:"client",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget https://archive.apache.org/dist/pulsar/pulsar-client-cpp-3.6.0/rpm-x86_64/x86_64/apache-pulsar-client-3.6.0-1.x86_64.rpm\n"})}),(0,a.jsxs)(n.p,{children:["This package contains shared library ",(0,a.jsx)(n.code,{children:"libpulsar.so"}),"."]})]}),(0,a.jsxs)(i.A,{value:"client-debuginfo",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget https://archive.apache.org/dist/pulsar/pulsar-client-cpp-3.6.0/rpm-x86_64/x86_64/apache-pulsar-client-debuginfo-3.6.0-1.x86_64.rpm\n"})}),(0,a.jsxs)(n.p,{children:["This package contains debug symbols for ",(0,a.jsx)(n.code,{children:"libpulsar.so"}),"."]})]}),(0,a.jsxs)(i.A,{value:"client-devel",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget https://archive.apache.org/dist/pulsar/pulsar-client-cpp-3.6.0/rpm-x86_64/x86_64/apache-pulsar-client-devel-3.6.0-1.x86_64.rpm\n"})}),(0,a.jsxs)(n.p,{children:["This package contains static libraries: ",(0,a.jsx)(n.code,{children:"libpulsar.a"}),", ",(0,a.jsx)(n.code,{children:"libpulsarwithdeps.a"})," and C/C++ headers."]})]})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Install the package using the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"rpm -ivh apache-pulsar-client*.rpm\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Now, you can see Pulsar C++ client libraries installed under the ",(0,a.jsx)(n.code,{children:"/usr/lib"})," directory."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:['If you get an error like "libpulsar.so: cannot open shared object file: No such file or directory" when starting a Pulsar client, you need to run ',(0,a.jsx)(n.code,{children:"ldconfig"})," first."]})}),"\n",(0,a.jsx)(n.h3,{id:"apk",children:"APK"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"apk add --allow-untrusted ./apache-pulsar-client-*.apk\n"})}),"\n",(0,a.jsx)(n.h2,{id:"step-2-connect-to-pulsar-cluster",children:"Step 2: Connect to Pulsar cluster"}),"\n",(0,a.jsxs)(n.p,{children:["To connect to Pulsar using client libraries, you need to specify a ",(0,a.jsx)(n.a,{href:"/docs/3.3.x/developing-binary-protocol",children:"Pulsar protocol"})," URL."]}),"\n",(0,a.jsxs)(n.p,{children:["You can assign Pulsar protocol URLs to specific clusters and use the ",(0,a.jsx)(n.code,{children:"pulsar"})," scheme. The following is an example of ",(0,a.jsx)(n.code,{children:"localhost"})," with the default port ",(0,a.jsx)(n.code,{children:"6650"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:"pulsar://localhost:6650\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you have multiple brokers, separate ",(0,a.jsx)(n.code,{children:"IP:port"})," by commas:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:"pulsar://localhost:6550,localhost:6651,localhost:6652\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you use ",(0,a.jsx)(n.a,{href:"/docs/3.3.x/security-tls-authentication",children:"mTLS"})," authentication, add ",(0,a.jsx)(n.code,{children:"+ssl"})," in the scheme:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:"pulsar+ssl://pulsar.us-west.example.com:6651\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,l)=>{l.d(n,{A:()=>t});l(96540);var r=l(34164);const a={tabItem:"tabItem_Ymn6"};var s=l(74848);function t(e){let{children:n,hidden:l,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,t),hidden:l,children:n})}},89089:(e,n,l)=>{l.d(n,{A:()=>y});var r=l(96540),a=l(34164),s=l(23104),t=l(56347),i=l(205),c=l(57485),o=l(31682),u=l(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:l}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:l,attributes:r,default:a}}=e;return{value:n,label:l,attributes:r,default:a}}))}(l);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function h(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:l}=e;const a=(0,t.W6)(),s=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function x(e){const{defaultValue:n,queryString:l=!1,groupId:a}=e,s=p(e),[t,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=l.find((e=>e.default))??l[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[o,d]=b({queryString:l,groupId:a}),[x,m]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(l);return[a,(0,r.useCallback)((e=>{l&&s.set(e)}),[l,s])]}({groupId:a}),f=(()=>{const e=o??x;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&c(f)}),[f]);return{selectedValue:t,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=l(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=l(74848);function g(e){let{className:n,block:l,selectedValue:r,selectValue:t,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),u=e=>{const n=e.currentTarget,l=c.indexOf(n),a=i[l].value;a!==r&&(o(n),t(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const l=c.indexOf(e.currentTarget)+1;n=c[l]??c[0];break}case"ArrowLeft":{const l=c.indexOf(e.currentTarget)-1;n=c[l]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":l},n),children:i.map((e=>{let{value:n,label:l,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),children:l??n},n)}))})}function v(e){let{lazy:n,children:l,selectedValue:s}=e;const t=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,j.jsx)(g,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,j.jsx)(w,{...e,children:d(e.children)},String(n))}},28453:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>i});var r=l(96540);const a={},s=r.createContext(a);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);