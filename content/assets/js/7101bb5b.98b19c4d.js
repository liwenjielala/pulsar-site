"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[55451],{3512:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"concepts-proxy-sni-routing","title":"Proxy support with SNI routing","description":"Get a comprehensive understanding of ATS-SNI Routing in Pulsar. You can also implement geo-replication with SNI routing.","source":"@site/versioned_docs/version-3.3.x/concepts-proxy-sni-routing.md","sourceDirName":".","slug":"/concepts-proxy-sni-routing","permalink":"/docs/3.3.x/concepts-proxy-sni-routing","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/concepts-proxy-sni-routing.md","tags":[],"version":"3.3.x","frontMatter":{"id":"concepts-proxy-sni-routing","title":"Proxy support with SNI routing","sidebar_label":"Proxy support with SNI routing","description":"Get a comprehensive understanding of ATS-SNI Routing in Pulsar. You can also implement geo-replication with SNI routing."},"sidebar":"docsSidebar","previous":{"title":"Message throttling","permalink":"/docs/3.3.x/concepts-throttling"},"next":{"title":"Multiple advertised listeners","permalink":"/docs/3.3.x/concepts-multiple-advertised-listeners"}}');var o=n(74848),s=n(28453),i=n(89089),a=n(19365);const l={id:"concepts-proxy-sni-routing",title:"Proxy support with SNI routing",sidebar_label:"Proxy support with SNI routing",description:"Get a comprehensive understanding of ATS-SNI Routing in Pulsar. You can also implement geo-replication with SNI routing."},c=void 0,u={},d=[{value:"ATS-SNI Routing in Pulsar",id:"ats-sni-routing-in-pulsar",level:2},{value:"Set up ATS Proxy for layer-4 SNI routing",id:"set-up-ats-proxy-for-layer-4-sni-routing",level:3},{value:"Configure Pulsar-client with SNI routing",id:"configure-pulsar-client-with-sni-routing",level:3},{value:"Pulsar geo-replication with SNI routing",id:"pulsar-geo-replication-with-sni-routing",level:3}];function h(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:'A proxy server is an intermediary server that forwards requests from multiple clients to different servers across the Internet. The proxy server acts as a "traffic cop" in both forward and reverse proxy scenarios, and benefits your system such as load balancing, performance, security, auto-scaling, and so on.'}),"\n",(0,o.jsxs)(r.p,{children:["The proxy in Pulsar acts as a reverse proxy, and creates a gateway in front of brokers. Proxies such as Apache Traffic Server (ATS), HAProxy, Nginx, and Envoy are not supported in Pulsar. These proxy-servers support ",(0,o.jsx)(r.strong,{children:"SNI routing"}),". SNI routing is used to route traffic to a destination without terminating the SSL connection. Layer 4 routing provides greater transparency because the outbound connection is determined by examining the destination address in the client TCP packets."]}),"\n",(0,o.jsxs)(r.p,{children:["Pulsar clients (Java, C++, Python) support ",(0,o.jsx)(r.a,{href:"https://github.com/apache/pulsar/wiki/PIP-60:-Support-Proxy-server-with-SNI-routing",children:"SNI routing protocol"}),", so you can connect to brokers through the proxy. This document walks you through how to set up the ATS proxy, enable SNI routing, and connect Pulsar client to the broker through the ATS proxy."]}),"\n",(0,o.jsx)(r.h2,{id:"ats-sni-routing-in-pulsar",children:"ATS-SNI Routing in Pulsar"}),"\n",(0,o.jsxs)(r.p,{children:["To support ",(0,o.jsx)(r.a,{href:"https://docs.trafficserver.apache.org/en/latest/admin-guide/layer-4-routing.en.html",children:"layer-4 SNI routing"})," with ATS, the inbound connection must be a TLS connection. Pulsar client supports SNI routing protocol on TLS connection, so when Pulsar clients connect to broker through ATS proxy, Pulsar uses ATS as a reverse proxy."]}),"\n",(0,o.jsx)(r.p,{children:"Pulsar supports SNI routing for geo-replication, so brokers can connect to brokers in other clusters through the ATS proxy."}),"\n",(0,o.jsx)(r.p,{children:"This section explains how to set up and use ATS as a reverse proxy, so Pulsar clients can connect to brokers through the ATS proxy using the SNI routing protocol on TLS connection."}),"\n",(0,o.jsx)(r.h3,{id:"set-up-ats-proxy-for-layer-4-sni-routing",children:"Set up ATS Proxy for layer-4 SNI routing"}),"\n",(0,o.jsxs)(r.p,{children:["To set up ATS proxy for layer 4 SNI routing, you need to configure the ",(0,o.jsx)(r.code,{children:"records.conf"})," and ",(0,o.jsx)(r.code,{children:"ssl_server_name.conf"})," files."]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{alt:"Pulsar client SNI",src:n(12527).A+"",width:"1518",height:"974"})}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.a,{href:"https://docs.trafficserver.apache.org/en/latest/admin-guide/files/records.config.en.html",children:"records.config"})," file is located in the ",(0,o.jsx)(r.code,{children:"/usr/local/etc/trafficserver/"})," directory by default. The file lists configurable variables used by the ATS."]}),"\n",(0,o.jsxs)(r.p,{children:["To configure the ",(0,o.jsx)(r.code,{children:"records.config"})," files, complete the following steps."]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["Update TLS port (",(0,o.jsx)(r.code,{children:"http.server_ports"}),") on which proxy listens, and update proxy certs (",(0,o.jsx)(r.code,{children:"ssl.client.cert.path"})," and ",(0,o.jsx)(r.code,{children:"ssl.client.cert.filename"}),") to secure TLS tunneling."]}),"\n",(0,o.jsxs)(r.li,{children:["Configure server ports (",(0,o.jsx)(r.code,{children:"http.connect_ports"}),") used for tunneling to the broker. If Pulsar brokers are listening on ",(0,o.jsx)(r.code,{children:"4443"})," and ",(0,o.jsx)(r.code,{children:"6651"})," ports, add the brokers service port in the ",(0,o.jsx)(r.code,{children:"http.connect_ports"})," configuration."]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"The following is an example."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-conf",children:"# PROXY TLS PORT\nCONFIG proxy.config.http.server_ports STRING 4443:ssl 4080\n# PROXY CERTS FILE PATH\nCONFIG proxy.config.ssl.client.cert.path STRING /proxy-cert.pem\n# PROXY KEY FILE PATH\nCONFIG proxy.config.ssl.client.cert.filename STRING /proxy-key.pem\n\n# The range of origin server ports that can be used for tunneling via CONNECT. # Traffic Server allows tunnels only to the specified ports. Supports both wildcards (*) and ranges (e.g. 0-1023).\nCONFIG proxy.config.http.connect_ports STRING 4443 6651\n"})}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"ssl_server_name"})," file is used to configure TLS connection handling for inbound and outbound connections. The configuration is determined by the SNI values provided by the inbound connection. The file consists of a set of configuration items, and each is identified by an SNI value (",(0,o.jsx)(r.code,{children:"fqdn"}),"). When an inbound TLS connection is made, the SNI value from the TLS negotiation is matched with the items specified in this file. If the values match, the values specified in that item override the default values."]}),"\n",(0,o.jsxs)(r.p,{children:["The following example shows the mapping of the inbound SNI hostname coming from the client, and the actual broker service URL where requests should be redirected. For example, if the client sends the SNI header ",(0,o.jsx)(r.code,{children:"pulsar-broker1"}),", the proxy creates a TLS tunnel by redirecting the request to the ",(0,o.jsx)(r.code,{children:"pulsar-broker1:6651"})," service URL."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-conf",children:"server_config = {\n  {\n     fqdn = 'pulsar-broker-vip',\n     # Forward to Pulsar broker which is listening on 6651\n     tunnel_route = 'pulsar-broker-vip:6651'\n  },\n  {\n     fqdn = 'pulsar-broker1',\n     # Forward to Pulsar broker-1 which is listening on 6651\n     tunnel_route = 'pulsar-broker1:6651'\n  },\n  {\n     fqdn = 'pulsar-broker2',\n     # Forward to Pulsar broker-2 which is listening on 6651\n     tunnel_route = 'pulsar-broker2:6651'\n  },\n}\n"})}),"\n",(0,o.jsxs)(r.p,{children:["After you configure the ",(0,o.jsx)(r.code,{children:"ssl_server_name.config"})," and ",(0,o.jsx)(r.code,{children:"records.config"})," files, the ATS-proxy server handles SNI routing and creates TCP tunnel between the client and the broker."]}),"\n",(0,o.jsx)(r.h3,{id:"configure-pulsar-client-with-sni-routing",children:"Configure Pulsar-client with SNI routing"}),"\n",(0,o.jsx)(r.p,{children:"ATS SNI-routing works only with TLS. You need to enable TLS for the ATS proxy and brokers first, configure the SNI routing protocol, and then connect Pulsar clients to brokers through ATS proxy. Pulsar clients support SNI routing by connecting to the proxy, and sending the target broker URL to the SNI header. This process is processed internally. You only need to configure the following proxy configuration initially when you create a Pulsar client to use the SNI routing protocol."}),"\n",(0,o.jsxs)(i.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C++",value:"C++"},{label:"Python",value:"Python"}],children:[(0,o.jsx)(a.A,{value:"Java",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",children:'String brokerServiceUrl = "pulsar+ssl://pulsar-broker-vip:6651/";\nString proxyUrl = "pulsar+ssl://ats-proxy:443";\nClientBuilder clientBuilder = PulsarClient.builder()\n\t\t.serviceUrl(brokerServiceUrl)\n        .tlsTrustCertsFilePath(TLS_TRUST_CERT_FILE_PATH)\n        .enableTls(true)\n        .allowTlsInsecureConnection(false)\n        .proxyServiceUrl(proxyUrl, ProxyProtocol.SNI)\n        .operationTimeout(1000, TimeUnit.MILLISECONDS);\n\nMap<String, String> authParams = new HashMap();\nauthParams.put("tlsCertFile", TLS_CLIENT_CERT_FILE_PATH);\nauthParams.put("tlsKeyFile", TLS_CLIENT_KEY_FILE_PATH);\nclientBuilder.authentication(AuthenticationTls.class.getName(), authParams);\n\nPulsarClient pulsarClient = clientBuilder.build();\n'})})}),(0,o.jsx)(a.A,{value:"C++",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-cpp",children:'ClientConfiguration config = ClientConfiguration();\nconfig.setUseTls(true);\nconfig.setTlsTrustCertsFilePath("/path/to/cacert.pem");\nconfig.setTlsAllowInsecureConnection(false);\nconfig.setAuth(pulsar::AuthTls::create(\n            "/path/to/client-cert.pem", "/path/to/client-key.pem"););\n\nClient client("pulsar+ssl://ats-proxy:443", config);\n'})})}),(0,o.jsx)(a.A,{value:"Python",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:'from pulsar import Client, AuthenticationTLS\n\nauth = AuthenticationTLS("/path/to/my-role.cert.pem", "/path/to/my-role.key-pk8.pem")\nclient = Client("pulsar+ssl://ats-proxy:443",\n                tls_trust_certs_file_path="/path/to/ca.cert.pem",\n                tls_allow_insecure_connection=False,\n                authentication=auth)\n'})})})]}),"\n",(0,o.jsx)(r.h3,{id:"pulsar-geo-replication-with-sni-routing",children:"Pulsar geo-replication with SNI routing"}),"\n",(0,o.jsx)(r.p,{children:"You can use the ATS proxy for geo-replication. Pulsar brokers can connect to brokers in geo-replication by using SNI routing. To enable SNI routing for broker connection cross clusters, you need to configure SNI proxy URL to the cluster metadata. If you have configured SNI proxy URL in the cluster metadata, you can connect to broker cross clusters through the proxy over SNI routing."}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{alt:"Pulsar geo-replication with SNI routing",src:n(63479).A+"",width:"1494",height:"598"})}),"\n",(0,o.jsxs)(r.p,{children:["In this example, a Pulsar cluster is deployed into two separate regions, ",(0,o.jsx)(r.code,{children:"us-west"})," and ",(0,o.jsx)(r.code,{children:"us-east"}),". Both regions are configured with ATS proxy, and brokers in each region run behind the ATS proxy. We configure the cluster metadata for both clusters, so brokers in one cluster can use SNI routing and connect to brokers in other clusters through the ATS proxy."]}),"\n",(0,o.jsxs)(r.p,{children:["(a) Configure the cluster metadata for ",(0,o.jsx)(r.code,{children:"us-east"})," with ",(0,o.jsx)(r.code,{children:"us-east"})," broker service URL and ",(0,o.jsx)(r.code,{children:"us-east"})," ATS proxy URL with SNI proxy-protocol."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"./pulsar-admin clusters update \\\n    --broker-url-secure pulsar+ssl://east-broker-vip:6651 \\\n    --url http://east-broker-vip:8080 \\\n    --proxy-protocol SNI \\\n    --proxy-url pulsar+ssl://east-ats-proxy:443\n"})}),"\n",(0,o.jsxs)(r.p,{children:["(b) Configure the cluster metadata for ",(0,o.jsx)(r.code,{children:"us-west"})," with ",(0,o.jsx)(r.code,{children:"us-west"})," broker service URL and ",(0,o.jsx)(r.code,{children:"us-west"})," ATS proxy URL with SNI proxy-protocol."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"./pulsar-admin clusters update \\\n    --broker-url-secure pulsar+ssl://west-broker-vip:6651 \\\n    --url http://west-broker-vip:8080 \\\n    --proxy-protocol SNI \\\n    --proxy-url pulsar+ssl://west-ats-proxy:443\n"})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>i});n(96540);var t=n(34164);const o={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:r,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,i),hidden:n,children:r})}},89089:(e,r,n)=>{n.d(r,{A:()=>T});var t=n(96540),o=n(34164),s=n(23104),i=n(56347),a=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:o}}=e;return{value:r,label:n,attributes:t,default:o}}))}(n);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function g(e){let{queryString:r=!1,groupId:n}=e;const o=(0,i.W6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(o.location.search);r.set(s,e),o.replace({...o.location,search:r.toString()})}),[s,o])]}function f(e){const{defaultValue:r,queryString:n=!1,groupId:o}=e,s=h(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[c,d]=g({queryString:n,groupId:o}),[f,x]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[o,s]=(0,u.Dv)(n);return[o,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:o}),b=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(74848);function y(e){let{className:r,block:n,selectedValue:t,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const r=e.currentTarget,n=l.indexOf(r),o=a[n].value;o!==t&&(c(r),i(o))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},r),children:a.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,o.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function S(e){let{lazy:r,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function v(e){const r=f(e);return(0,m.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,m.jsx)(y,{...r,...e}),(0,m.jsx)(S,{...r,...e})]})}function T(e){const r=(0,x.A)();return(0,m.jsx)(v,{...e,children:d(e.children)},String(r))}},12527:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/pulsar-sni-client-8daa2555e32173988e0eb6753e202e96.png"},63479:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/pulsar-sni-geo-296a6da9d1e67d9110e6f04a3132889b.png"},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var t=n(96540);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);