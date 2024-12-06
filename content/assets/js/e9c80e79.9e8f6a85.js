"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[74937],{33163:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"administration-proxy","title":"Pulsar proxy","description":"Pulsar proxy is an optional gateway. Pulsar proxy is used when direct connections between clients and Pulsar brokers are either infeasible or undesirable. For example, when you run Pulsar in a cloud environment or on Kubernetes or an analogous platform, you can run Pulsar proxy.","source":"@site/versioned_docs/version-2.5.1/administration-proxy.md","sourceDirName":".","slug":"/administration-proxy","permalink":"/docs/2.5.1/administration-proxy","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.1/administration-proxy.md","tags":[],"version":"2.5.1","frontMatter":{"id":"administration-proxy","title":"Pulsar proxy","sidebar_label":"Pulsar proxy"},"sidebar":"docsSidebar","previous":{"title":"Load balance","permalink":"/docs/2.5.1/administration-load-balance"},"next":{"title":"Upgrade","permalink":"/docs/2.5.1/administration-upgrade"}}');var s=o(74848),t=o(28453);const i={id:"administration-proxy",title:"Pulsar proxy",sidebar_label:"Pulsar proxy"},a=void 0,c={},l=[{value:"Configure the proxy",id:"configure-the-proxy",level:2},{value:"Use broker URLs",id:"use-broker-urls",level:3},{value:"Use service discovery",id:"use-service-discovery",level:3},{value:"Start the proxy",id:"start-the-proxy",level:2},{value:"Stop the proxy",id:"stop-the-proxy",level:2},{value:"Proxy frontends",id:"proxy-frontends",level:2},{value:"Use Pulsar clients with the proxy",id:"use-pulsar-clients-with-the-proxy",level:2}];function d(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Pulsar proxy is an optional gateway. Pulsar proxy is used when direct connections between clients and Pulsar brokers are either infeasible or undesirable. For example, when you run Pulsar in a cloud environment or on ",(0,s.jsx)(r.a,{href:"https://kubernetes.io",children:"Kubernetes"})," or an analogous platform, you can run Pulsar proxy."]}),"\n",(0,s.jsx)(r.h2,{id:"configure-the-proxy",children:"Configure the proxy"}),"\n",(0,s.jsx)(r.p,{children:"Before using the proxy, you need to configure it with the brokers addresses in the cluster. You can configure the broker URL in the proxy configuration, or the proxy to connect directly using service discovery."}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"In a production environment service discovery is not recommended."}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"use-broker-urls",children:"Use broker URLs"}),"\n",(0,s.jsx)(r.p,{children:"It is more secure to specify a URL to connect to the brokers."}),"\n",(0,s.jsx)(r.p,{children:"Proxy authorization requires access to ZooKeeper, so if you use these broker URLs to connect to the brokers, you need to disable authorization at the Proxy level. Brokers still authorize requests after the proxy forwards them."}),"\n",(0,s.jsxs)(r.p,{children:["You can configure the broker URLs in ",(0,s.jsx)(r.code,{children:"conf/proxy.conf"})," as follows."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-properties",children:"\nbrokerServiceURL=pulsar://brokers.example.com:6650\nbrokerWebServiceURL=http://brokers.example.com:8080\nfunctionWorkerWebServiceURL=http://function-workers.example.com:8080\n\n"})}),"\n",(0,s.jsx)(r.p,{children:"If you use TLS, configure the broker URLs in the following way:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-properties",children:"\nbrokerServiceURLTLS=pulsar+ssl://brokers.example.com:6651\nbrokerWebServiceURLTLS=https://brokers.example.com:8443\nfunctionWorkerWebServiceURL=https://function-workers.example.com:8443\n\n"})}),"\n",(0,s.jsx)(r.p,{children:"The hostname in the URLs provided should be a DNS entry which points to multiple brokers or a virtual IP address, which is backed by multiple broker IP addresses, so that the proxy does not lose connectivity to Pulsar cluster if a single broker becomes unavailable."}),"\n",(0,s.jsx)(r.p,{children:"The ports to connect to the brokers (6650 and 8080, or in the case of TLS, 6651 and 8443) should be open in the network ACLs."}),"\n",(0,s.jsxs)(r.p,{children:["Note that if you do not use functions, you do not need to configure ",(0,s.jsx)(r.code,{children:"functionWorkerWebServiceURL"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"use-service-discovery",children:"Use service discovery"}),"\n",(0,s.jsxs)(r.p,{children:["Pulsar uses ",(0,s.jsx)(r.a,{href:"https://zookeeper.apache.org",children:"ZooKeeper"})," for service discovery. To connect the proxy to ZooKeeper, specify the following in ",(0,s.jsx)(r.code,{children:"conf/proxy.conf"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-properties",children:"\nmetadataStoreUrl=my-zk-0:2181,my-zk-1:2181,my-zk-2:2181\nconfigurationMetadataStoreUrl=my-zk-0:2184,my-zk-remote:2184\n\n"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["To use service discovery, you need to open the network ACLs, so the proxy can connects to the ZooKeeper nodes through the ZooKeeper client port (port ",(0,s.jsx)(r.code,{children:"2181"}),") and the configuration store client port (port ",(0,s.jsx)(r.code,{children:"2184"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"However, it is not secure to use service discovery. Because if the network ACL is open, when someone compromises a proxy, they have full access to ZooKeeper."}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"start-the-proxy",children:"Start the proxy"}),"\n",(0,s.jsx)(r.p,{children:"To start the proxy:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"\n$ cd /path/to/pulsar/directory\n$ bin/pulsar proxy \\\n  --metadata-store zk:my-zk-1:2181,my-zk-2:2181,my-zk-3:2181 \\\n  --configuration-metadata-store zk:my-zk-1:2181,my-zk-2:2181,my-zk-3:2181\n\n"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"You can run multiple instances of the Pulsar proxy in a cluster."}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"stop-the-proxy",children:"Stop the proxy"}),"\n",(0,s.jsx)(r.p,{children:"Pulsar proxy runs in the foreground by default. To stop the proxy, simply stop the process in which the proxy is running."}),"\n",(0,s.jsx)(r.h2,{id:"proxy-frontends",children:"Proxy frontends"}),"\n",(0,s.jsxs)(r.p,{children:["You can run Pulsar proxy behind some kind of load-distributing frontend, such as an ",(0,s.jsx)(r.a,{href:"https://www.digitalocean.com/community/tutorials/an-introduction-to-haproxy-and-load-balancing-concepts",children:"HAProxy"})," load balancer."]}),"\n",(0,s.jsx)(r.h2,{id:"use-pulsar-clients-with-the-proxy",children:"Use Pulsar clients with the proxy"}),"\n",(0,s.jsxs)(r.p,{children:["Once your Pulsar proxy is up and running, preferably behind a load-distributing ",(0,s.jsx)(r.a,{href:"#proxy-frontends",children:"frontend"}),", clients can connect to the proxy via whichever address that the frontend uses. If the address is the DNS address ",(0,s.jsx)(r.code,{children:"pulsar.cluster.default"}),", for example, the connection URL for clients is ",(0,s.jsx)(r.code,{children:"pulsar://pulsar.cluster.default:6650"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["For more information on Proxy configuration, refer to ",(0,s.jsx)(r.a,{href:"/docs/2.5.1/reference-configuration#pulsar-proxy",children:"Pulsar proxy"}),"."]})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>a});var n=o(96540);const s={},t=n.createContext(s);function i(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);