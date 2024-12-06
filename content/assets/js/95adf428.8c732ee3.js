"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[95682],{83104:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"concepts-proxy-sni-routing","title":"Proxy support with SNI routing","description":"Pulsar Proxy with SNI routing","source":"@site/versioned_docs/version-2.6.4/concepts-proxy-sni-routing.md","sourceDirName":".","slug":"/concepts-proxy-sni-routing","permalink":"/docs/2.6.4/concepts-proxy-sni-routing","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.4/concepts-proxy-sni-routing.md","tags":[],"version":"2.6.4","frontMatter":{"id":"concepts-proxy-sni-routing","title":"Proxy support with SNI routing","sidebar_label":"Proxy support with SNI routing","original_id":"concepts-proxy-sni-routing"},"sidebar":"docsSidebar","previous":{"title":"Tiered Storage","permalink":"/docs/2.6.4/concepts-tiered-storage"},"next":{"title":"Get started","permalink":"/docs/2.6.4/schema-get-started"}}');var o=n(74848),s=n(28453);const i={id:"concepts-proxy-sni-routing",title:"Proxy support with SNI routing",sidebar_label:"Proxy support with SNI routing",original_id:"concepts-proxy-sni-routing"},c=void 0,l={},a=[{value:"Pulsar Proxy with SNI routing",id:"pulsar-proxy-with-sni-routing",level:2},{value:"ATS-SNI Routing in Pulsar",id:"ats-sni-routing-in-pulsar",level:3},{value:"Set up ATS Proxy for layer-4 SNI routing",id:"set-up-ats-proxy-for-layer-4-sni-routing",level:4},{value:"Configure Pulsar-client with SNI routing",id:"configure-pulsar-client-with-sni-routing",level:4},{value:"Pulsar geo-replication with SNI routing",id:"pulsar-geo-replication-with-sni-routing",level:4}];function u(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"pulsar-proxy-with-sni-routing",children:"Pulsar Proxy with SNI routing"}),"\n",(0,o.jsx)(r.p,{children:'A proxy server is an intermediary server that forwards requests from multiple clients to different servers across the Internet. The proxy server acts as a "traffic cop" in both forward and reverse proxy scenarios, and benefits your system such as load balancing, performance, security, auto-scaling, and so on.'}),"\n",(0,o.jsxs)(r.p,{children:["The proxy in Pulsar acts as a reverse proxy, and creates a gateway in front of brokers. Proxies such as Apache Traffic Server (ATS), HAProxy, Nginx, and Envoy are not supported in Pulsar. These proxy-servers support ",(0,o.jsx)(r.strong,{children:"SNI routing"}),". SNI routing is used to route traffic to a destination without terminating the SSL connection. Layer 4 routing provides greater transparency because the outbound connection is determined by examining the destination address in the client TCP packets."]}),"\n",(0,o.jsxs)(r.p,{children:["Pulsar clients support ",(0,o.jsx)(r.a,{href:"https://github.com/apache/pulsar/wiki/PIP-60:-Support-Proxy-server-with-SNI-routing",children:"SNI routing protocol"}),", so you can connect to brokers through the proxy. This document walks you through how to set up the ATS proxy, enable SNI routing, and connect Pulsar client to the broker through the ATS proxy."]}),"\n",(0,o.jsx)(r.h3,{id:"ats-sni-routing-in-pulsar",children:"ATS-SNI Routing in Pulsar"}),"\n",(0,o.jsxs)(r.p,{children:["To support ",(0,o.jsx)(r.a,{href:"https://docs.trafficserver.apache.org/en/latest/admin-guide/layer-4-routing.en.html",children:"layer-4 SNI routing"})," with ATS, the inbound connection must be a TLS connection. Pulsar client supports SNI routing protocol on TLS connection, so when Pulsar clients connect to broker through ATS proxy, Pulsar uses ATS as a reverse proxy."]}),"\n",(0,o.jsx)(r.p,{children:"Pulsar supports SNI routing for geo-replication, so brokers can connect to brokers in other clusters through the ATS proxy."}),"\n",(0,o.jsx)(r.p,{children:"This section explains how to set up and use ATS as a reverse proxy, so Pulsar clients can connect to brokers through the ATS proxy using the SNI routing protocol on TLS connection."}),"\n",(0,o.jsx)(r.h4,{id:"set-up-ats-proxy-for-layer-4-sni-routing",children:"Set up ATS Proxy for layer-4 SNI routing"}),"\n",(0,o.jsxs)(r.p,{children:["To support layer 4 SNI routing, you need to configure the ",(0,o.jsx)(r.code,{children:"records.conf"})," and ",(0,o.jsx)(r.code,{children:"ssl_server_name.conf"})," files."]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{alt:"Pulsar client SNI",src:n(12527).A+"",width:"1518",height:"974"})}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.a,{href:"https://docs.trafficserver.apache.org/en/latest/admin-guide/files/records.config.en.html",children:"records.config"})," file is located in the ",(0,o.jsx)(r.code,{children:"/usr/local/etc/trafficserver/"})," directory by default. The file lists configurable variables used by the ATS."]}),"\n",(0,o.jsxs)(r.p,{children:["To configure the ",(0,o.jsx)(r.code,{children:"records.config"})," files, complete the following steps."]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["Update TLS port (",(0,o.jsx)(r.code,{children:"http.server_ports"}),") on which proxy listens, and update proxy certs (",(0,o.jsx)(r.code,{children:"ssl.client.cert.path"})," and ",(0,o.jsx)(r.code,{children:"ssl.client.cert.filename"}),") to secure TLS tunneling."]}),"\n",(0,o.jsxs)(r.li,{children:["Configure server ports (",(0,o.jsx)(r.code,{children:"http.connect_ports"}),") used for tunneling to the broker. If Pulsar brokers are listening on ",(0,o.jsx)(r.code,{children:"4443"})," and ",(0,o.jsx)(r.code,{children:"6651"})," ports, add the brokers service port in the ",(0,o.jsx)(r.code,{children:"http.connect_ports"})," configuration."]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"The following is an example."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"\n# PROXY TLS PORT\nCONFIG proxy.config.http.server_ports STRING 4443:ssl 4080\n# PROXY CERTS FILE PATH\nCONFIG proxy.config.ssl.client.cert.path STRING /proxy-cert.pem\n# PROXY KEY FILE PATH\nCONFIG proxy.config.ssl.client.cert.filename STRING /proxy-key.pem\n\n\n# The range of origin server ports that can be used for tunneling via CONNECT. # Traffic Server allows tunnels only to the specified ports. Supports both wildcards (*) and ranges (e.g. 0-1023).\nCONFIG proxy.config.http.connect_ports STRING 4443 6651\n\n"})}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"ssl_server_name"})," file is used to configure TLS connection handling for inbound and outbound connections. The configuration is determined by the SNI values provided by the inbound connection. The file consists of a set of configuration items, and each is identified by an SNI value (",(0,o.jsx)(r.code,{children:"fqdn"}),"). When an inbound TLS connection is made, the SNI value from the TLS negotiation is matched with the items specified in this file. If the values match, the values specified in that item override the default values."]}),"\n",(0,o.jsxs)(r.p,{children:["The following example shows mapping of the inbound SNI hostname coming from the client, and the actual broker service URL where request should be redirected. For example, if the client sends the SNI header ",(0,o.jsx)(r.code,{children:"pulsar-broker1"}),", the proxy creates a TLS tunnel by redirecting request to the ",(0,o.jsx)(r.code,{children:"pulsar-broker1:6651"})," service URL."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"\nserver_config = {\n  {\n     fqdn = 'pulsar-broker-vip',\n     # Forward to Pulsar broker which is listening on 6651\n     tunnel_route = 'pulsar-broker-vip:6651'\n  },\n  {\n     fqdn = 'pulsar-broker1',\n     # Forward to Pulsar broker-1 which is listening on 6651\n     tunnel_route = 'pulsar-broker1:6651'\n  },\n  {\n     fqdn = 'pulsar-broker2',\n     # Forward to Pulsar broker-2 which is listening on 6651\n     tunnel_route = 'pulsar-broker2:6651'\n  },\n}\n\n"})}),"\n",(0,o.jsxs)(r.p,{children:["After you configure the ",(0,o.jsx)(r.code,{children:"ssl_server_name.config"})," and ",(0,o.jsx)(r.code,{children:"records.config"})," files, the ATS-proxy server handles SNI routing and creates TCP tunnel between the client and the broker."]}),"\n",(0,o.jsx)(r.h4,{id:"configure-pulsar-client-with-sni-routing",children:"Configure Pulsar-client with SNI routing"}),"\n",(0,o.jsx)(r.p,{children:"ATS SNI-routing works only with TLS. You need to enable TLS for the ATS proxy and brokers first, configure the SNI routing protocol, and then connect Pulsar clients to brokers through ATS proxy. Pulsar clients support SNI routing by connecting to the proxy, and sending the target broker URL to the SNI header. This process is processed internally. You only need to configure the following proxy configuration initially when you create a Pulsar client to use the SNI routing protocol."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:'\nString brokerServiceUrl = "pulsar+ssl://pulsar-broker-vip:6651/";\nString proxyUrl = "pulsar+ssl://ats-proxy:443";\nClientBuilder clientBuilder = PulsarClient.builder()\n\t\t.serviceUrl(brokerServiceUrl)\n        .tlsTrustCertsFilePath(TLS_TRUST_CERT_FILE_PATH)\n        .enableTls(true)\n        .allowTlsInsecureConnection(false)\n        .proxyServiceUrl(proxyUrl, ProxyProtocol.SNI)\n        .operationTimeout(1000, TimeUnit.MILLISECONDS);\n\nMap<String, String> authParams = new HashMap();\nauthParams.put("tlsCertFile", TLS_CLIENT_CERT_FILE_PATH);\nauthParams.put("tlsKeyFile", TLS_CLIENT_KEY_FILE_PATH);\nclientBuilder.authentication(AuthenticationTls.class.getName(), authParams);\n\nPulsarClient pulsarClient = clientBuilder.build();\n\n'})}),"\n",(0,o.jsx)(r.h4,{id:"pulsar-geo-replication-with-sni-routing",children:"Pulsar geo-replication with SNI routing"}),"\n",(0,o.jsx)(r.p,{children:"You can use the ATS proxy for geo-replication. Pulsar brokers can connect to brokers in geo-replication by using SNI routing. To enable SNI routing for broker connection cross clusters, you need to configure SNI proxy URL to the cluster metadata. If you have configured SNI proxy URL in the cluster metadata, you can connect to broker cross clusters through the proxy over SNI routing."}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{alt:"Pulsar client SNI",src:n(63479).A+"",width:"1494",height:"598"})}),"\n",(0,o.jsxs)(r.p,{children:["In this example, a Pulsar cluster is deployed into two separate regions, ",(0,o.jsx)(r.code,{children:"us-west"})," and ",(0,o.jsx)(r.code,{children:"us-east"}),". Both regions are configured with ATS proxy, and brokers in each region run behind the ATS proxy. We configure the cluster metadata for both clusters, so brokers in one cluster can use SNI routing and connect to brokers in other clusters through the ATS proxy."]}),"\n",(0,o.jsxs)(r.p,{children:["(a) Configure the cluster metadata for ",(0,o.jsx)(r.code,{children:"us-east"})," with ",(0,o.jsx)(r.code,{children:"us-east"})," broker service URL and ",(0,o.jsx)(r.code,{children:"us-east"})," ATS proxy URL with SNI proxy-protocol."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"\n./pulsar-admin clusters update \\\n--broker-url-secure pulsar+ssl://east-broker-vip:6651 \\\n--url http://east-broker-vip:8080 \\\n--proxy-protocol SNI \\\n--proxy-url pulsar+ssl://east-ats-proxy:443\n\n"})}),"\n",(0,o.jsxs)(r.p,{children:["(b) Configure the cluster metadata for ",(0,o.jsx)(r.code,{children:"us-west"})," with ",(0,o.jsx)(r.code,{children:"us-west"})," broker service URL and ",(0,o.jsx)(r.code,{children:"us-west"})," ATS proxy URL with SNI proxy-protocol."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"\n./pulsar-admin clusters update \\\n--broker-url-secure pulsar+ssl://west-broker-vip:6651 \\\n--url http://west-broker-vip:8080 \\\n--proxy-protocol SNI \\\n--proxy-url pulsar+ssl://west-ats-proxy:443\n\n"})})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},12527:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/pulsar-sni-client-8daa2555e32173988e0eb6753e202e96.png"},63479:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/pulsar-sni-geo-296a6da9d1e67d9110e6f04a3132889b.png"},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var t=n(96540);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);