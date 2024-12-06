"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[76427],{4635:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"security-basic-auth","title":"Authentication using HTTP basic","description":"Basic authentication is a simple authentication scheme built into the HTTP protocol, which uses base64-encoded username and password pairs as credentials.","source":"@site/versioned_docs/version-2.10.x/security-basic-auth.md","sourceDirName":".","slug":"/security-basic-auth","permalink":"/docs/2.10.x/security-basic-auth","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/security-basic-auth.md","tags":[],"version":"2.10.x","frontMatter":{"id":"security-basic-auth","title":"Authentication using HTTP basic","sidebar_label":"Authentication using HTTP basic"},"sidebar":"docsSidebar","previous":{"title":"Authentication using OAuth 2.0 access tokens","permalink":"/docs/2.10.x/security-oauth2"},"next":{"title":"Authorization and ACLs","permalink":"/docs/2.10.x/security-authorization"}}');var i=t(74848),r=t(28453),s=t(11470),o=t(19365);const c={id:"security-basic-auth",title:"Authentication using HTTP basic",sidebar_label:"Authentication using HTTP basic"},l=void 0,u={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create your authentication file",id:"create-your-authentication-file",level:2},{value:"Enable basic authentication on brokers",id:"enable-basic-authentication-on-brokers",level:2},{value:"Enable basic authentication on proxies",id:"enable-basic-authentication-on-proxies",level:2},{value:"Configure basic authentication in CLI tools",id:"configure-basic-authentication-in-cli-tools",level:2},{value:"Configure basic authentication in Pulsar clients",id:"configure-basic-authentication-in-pulsar-clients",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Basic_access_authentication",children:"Basic authentication"})," is a simple authentication scheme built into the HTTP protocol, which uses base64-encoded username and password pairs as credentials."]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.p,{children:["Install ",(0,i.jsx)(n.a,{href:"https://httpd.apache.org/docs/2.4/programs/htpasswd.html",children:(0,i.jsx)(n.code,{children:"htpasswd"})})," in your environment to create a password file for storing username-password pairs."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For Ubuntu/Debian, run the following command to install ",(0,i.jsx)(n.code,{children:"htpasswd"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apt install apache2-utils\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For CentOS/RHEL, run the following command to install ",(0,i.jsx)(n.code,{children:"htpasswd"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"yum install httpd-tools\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"create-your-authentication-file",children:"Create your authentication file"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Currently, you can use MD5 (recommended) and CRYPT encryption to authenticate your password."})}),"\n",(0,i.jsxs)(n.p,{children:["Create a password file named ",(0,i.jsx)(n.code,{children:".htpasswd"})," with a user account ",(0,i.jsx)(n.code,{children:"superuser/admin"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Use MD5 encryption (recommended):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"htpasswd -cmb /path/to/.htpasswd superuser admin\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Use CRYPT encryption:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"htpasswd -cdb /path/to/.htpasswd superuser admin\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You can preview the content of your password file by running the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cat path/to/.htpasswd\nsuperuser:$apr1$GBIYZYFZ$MzLcPrvoUky16mLcK6UtX/\n"})}),"\n",(0,i.jsx)(n.h2,{id:"enable-basic-authentication-on-brokers",children:"Enable basic authentication on brokers"}),"\n",(0,i.jsxs)(n.p,{children:["To configure brokers to authenticate clients, add the following parameters to the ",(0,i.jsx)(n.code,{children:"conf/broker.conf"})," file. If you use a standalone Pulsar, you need to add these parameters to the ",(0,i.jsx)(n.code,{children:"conf/standalone.conf"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-conf",children:'# Configuration to enable Basic authentication\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderBasic\nbasicAuthConf=file:///path/to/.htpasswd\n# basicAuthConf=/path/to/.htpasswd\n# When use the base64 format, you need to encode the .htpaswd content to bas64\n# basicAuthConf=data:;base64,YOUR-BASE64\n# basicAuthConf=YOUR-BASE64\n# Authentication settings of the broker itself. Used when the broker connects to other brokers, either in same or other clusters\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationBasic\nbrokerClientAuthenticationParameters={"userId":"superuser","password":"admin"}\n# If this flag is set then the broker authenticates the original Auth data\n# else it just accepts the originalPrincipal and authorizes it (if required).\nauthenticateOriginalAuthData=true\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["You can also set an environment variable named ",(0,i.jsx)(n.code,{children:"PULSAR_EXTRA_OPTS"})," and the value is ",(0,i.jsx)(n.code,{children:"-Dpulsar.auth.basic.conf=/path/to/.htpasswd"}),". Pulsar reads this environment variable to implement HTTP basic authentication."]})}),"\n",(0,i.jsx)(n.h2,{id:"enable-basic-authentication-on-proxies",children:"Enable basic authentication on proxies"}),"\n",(0,i.jsxs)(n.p,{children:["To configure proxies to authenticate clients, add the following parameters to the ",(0,i.jsx)(n.code,{children:"conf/proxy.conf"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-conf",children:'# For clients connecting to the proxy\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderBasic\nbasicAuthConf=file:///path/to/.htpasswd\n# basicAuthConf=/path/to/.htpasswd\n# When use the base64 format, you need to encode the .htpaswd content to bas64\n# basicAuthConf=data:;base64,YOUR-BASE64\n# basicAuthConf=YOUR-BASE64\n# For the proxy to connect to brokers\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationBasic\nbrokerClientAuthenticationParameters={"userId":"superuser","password":"admin"}\n# Whether client authorization credentials are forwarded to the broker for re-authorization.\n# Authentication must be enabled via authenticationEnabled=true for this to take effect.\nforwardAuthorizationCredentials=true\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["You can also set an environment variable named ",(0,i.jsx)(n.code,{children:"PULSAR_EXTRA_OPTS"})," and the value is ",(0,i.jsx)(n.code,{children:"-Dpulsar.auth.basic.conf=/path/to/.htpasswd"}),". Pulsar reads this environment variable to implement HTTP basic authentication."]})}),"\n",(0,i.jsx)(n.h2,{id:"configure-basic-authentication-in-cli-tools",children:"Configure basic authentication in CLI tools"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/2.10.x/reference-cli-tools",children:"Command-line tools"}),", such as ",(0,i.jsx)(n.a,{href:"pathname:///reference/#/2.10.x/pulsar-admin/",children:"Pulsar-admin"}),", ",(0,i.jsx)(n.a,{href:"pathname:///reference/#/2.10.x/pulsar-perf/",children:"Pulsar-perf"})," and ",(0,i.jsx)(n.a,{href:"pathname:///reference/#/2.10.x/pulsar-client/",children:"Pulsar-client"}),", use the ",(0,i.jsx)(n.code,{children:"conf/client.conf"})," file in your Pulsar installation. To configure basic authentication in Pulsar CLI tools, you need to add the following parameters to the ",(0,i.jsx)(n.code,{children:"conf/client.conf"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-conf",children:'authPlugin=org.apache.pulsar.client.impl.auth.AuthenticationBasic\nauthParams={"userId":"superuser","password":"admin"}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"configure-basic-authentication-in-pulsar-clients",children:"Configure basic authentication in Pulsar clients"}),"\n",(0,i.jsx)(n.p,{children:"The following example shows how to configure basic authentication when using Pulsar clients."}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(o.A,{value:"Java",label:"Java",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'AuthenticationBasic auth = new AuthenticationBasic();\nauth.configure("{\\"userId\\":\\"superuser\\",\\"password\\":\\"admin\\"}");\nPulsarClient client = PulsarClient.builder()\n   .serviceUrl("pulsar://broker.example.com:6650")\n   .authentication(auth)\n   .build();\n'})})}),(0,i.jsx)(o.A,{value:"C++",label:"C++",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:'#include <pulsar/Client.h>\n\nint main() {\n    pulsar::ClientConfiguration config;\n    AuthenticationPtr auth = pulsar::AuthBasic::create("admin", "123456")\n    config.setAuth(auth);\n    pulsar::Client client("pulsar://broker.example.com:6650/", config);\n\n    return 0;\n}\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(34164);const i={tabItem:"tabItem_Ymn6"};var r=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(96540),i=t(34164),r=t(23104),s=t(56347),o=t(205),c=t(57485),l=t(31682),u=t(70679);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=d(e),[s,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[l,h]=b({queryString:t,groupId:i}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,u.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),x=(()=>{const e=l??f;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{x&&c(x)}),[x]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),m(e)}),[h,m,r]),tabValues:r}}var m=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function j(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),i=o[t].value;i!==a&&(l(n),s(i))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...r,className:(0,i.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,g.jsx)(w,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(96540);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);