"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[22629],{91392:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"administration-proxy","title":"Pulsar proxy","description":"Get a comprehensive understanding of Pulsar proxy.","source":"@site/versioned_docs/version-3.3.x/administration-proxy.md","sourceDirName":".","slug":"/administration-proxy","permalink":"/docs/3.3.x/administration-proxy","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/administration-proxy.md","tags":[],"version":"3.3.x","frontMatter":{"id":"administration-proxy","title":"Pulsar proxy","sidebar_label":"Pulsar proxy","description":"Get a comprehensive understanding of Pulsar proxy."},"sidebar":"docsSidebar","previous":{"title":"Pulsar Shell","permalink":"/docs/3.3.x/administration-pulsar-shell"},"next":{"title":"Anti-affinity namespaces","permalink":"/docs/3.3.x/administration-anti-affinity-namespaces"}}');var t=o(74848),n=o(28453);const i={id:"administration-proxy",title:"Pulsar proxy",sidebar_label:"Pulsar proxy",description:"Get a comprehensive understanding of Pulsar proxy."},a=void 0,c={},d=[{value:"Configure the proxy",id:"configure-the-proxy",level:2},{value:"Use broker URLs",id:"use-broker-urls",level:3},{value:"Use service discovery",id:"use-service-discovery",level:3},{value:"Restricting target broker addresses to mitigate CVE-2022-24280",id:"restricting-target-broker-addresses-to-mitigate-cve-2022-24280",level:3},{value:"Start the proxy",id:"start-the-proxy",level:2},{value:"Stop the proxy",id:"stop-the-proxy",level:2},{value:"Proxy frontends",id:"proxy-frontends",level:2},{value:"Use Pulsar clients with the proxy",id:"use-pulsar-clients-with-the-proxy",level:2}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["Pulsar proxy is an optional gateway. Pulsar proxy is used when direct connections between clients and Pulsar brokers are either infeasible or undesirable. For example, when you run Pulsar in a cloud environment or on ",(0,t.jsx)(r.a,{href:"https://kubernetes.io",children:"Kubernetes"})," or an analogous platform, you can run Pulsar proxy."]}),"\n",(0,t.jsx)(r.p,{children:"The Pulsar proxy is not intended to be exposed on the public internet. The security considerations in the current design expect network perimeter security. The requirement of network perimeter security can be achieved with private networks."}),"\n",(0,t.jsxs)(r.p,{children:["If a proxy deployment cannot be protected with network perimeter security, the alternative would be to use ",(0,t.jsx)(r.a,{href:"/docs/3.3.x/concepts-proxy-sni-routing",children:'Pulsar\'s "Proxy SNI routing" feature'})," with a properly secured and audited solution. In that case Pulsar proxy component is not used at all."]}),"\n",(0,t.jsx)(r.h2,{id:"configure-the-proxy",children:"Configure the proxy"}),"\n",(0,t.jsx)(r.p,{children:"Before using a proxy, you need to configure it with a broker's address in the cluster. You can configure the broker URL in the proxy configuration, or the proxy to connect directly using service discovery."}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"In a production environment service discovery is not recommended."}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"use-broker-urls",children:"Use broker URLs"}),"\n",(0,t.jsx)(r.p,{children:"It is more secure to specify a URL to connect to the brokers."}),"\n",(0,t.jsx)(r.p,{children:"Proxy authorization requires access to ZooKeeper, so if you use these broker URLs to connect to the brokers, you need to disable authorization at the Proxy level. Brokers still authorize requests after the proxy forwards them."}),"\n",(0,t.jsxs)(r.p,{children:["You can configure the broker URLs in ",(0,t.jsx)(r.code,{children:"conf/proxy.conf"})," as follows."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-properties",children:"brokerServiceURL=pulsar://brokers.example.com:6650\nbrokerWebServiceURL=http://brokers.example.com:8080\nfunctionWorkerWebServiceURL=http://function-workers.example.com:8080\n"})}),"\n",(0,t.jsx)(r.p,{children:"If you use TLS, configure the broker URLs in the following way:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-properties",children:"brokerServiceURLTLS=pulsar+ssl://brokers.example.com:6651\nbrokerWebServiceURLTLS=https://brokers.example.com:8443\nfunctionWorkerWebServiceURL=https://function-workers.example.com:8443\n"})}),"\n",(0,t.jsx)(r.p,{children:"The hostname in the URLs provided should be a DNS entry that points to multiple brokers or a virtual IP address, which is backed by multiple broker IP addresses, so that the proxy does not lose connectivity to Pulsar cluster if a single broker becomes unavailable."}),"\n",(0,t.jsx)(r.p,{children:"The ports to connect to the brokers (6650 and 8080, or in the case of TLS, 6651 and 8443) should be open in the network ACLs."}),"\n",(0,t.jsxs)(r.p,{children:["Note that if you do not use functions, you do not need to configure ",(0,t.jsx)(r.code,{children:"functionWorkerWebServiceURL"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"use-service-discovery",children:"Use service discovery"}),"\n",(0,t.jsxs)(r.p,{children:["Pulsar uses ",(0,t.jsx)(r.a,{href:"https://zookeeper.apache.org",children:"ZooKeeper"})," for service discovery. To connect the proxy to ZooKeeper, specify the following in ",(0,t.jsx)(r.code,{children:"conf/proxy.conf"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-properties",children:"metadataStoreUrl=my-zk-0:2181,my-zk-1:2181,my-zk-2:2181\nconfigurationMetadataStoreUrl=my-zk-0:2184,my-zk-remote:2184\n"})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["To use service discovery, you need to open the network ACLs, so the proxy can connects to the ZooKeeper nodes through the ZooKeeper client port (port ",(0,t.jsx)(r.code,{children:"2181"}),") and the configuration store client port (port ",(0,t.jsx)(r.code,{children:"2184"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"However, it is not secure to use service discovery. Because if the network ACL is open, when someone compromises a proxy, they have full access to ZooKeeper."}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"restricting-target-broker-addresses-to-mitigate-cve-2022-24280",children:"Restricting target broker addresses to mitigate CVE-2022-24280"}),"\n",(0,t.jsxs)(r.p,{children:["The Pulsar Proxy trusts clients to provide valid target broker addresses to connect to.\nUnless the Pulsar Proxy is explicitly configured to limit access, the Pulsar Proxy is vulnerable as described in the security advisory ",(0,t.jsx)(r.a,{href:"https://github.com/apache/pulsar/wiki/CVE-2022-24280",children:"Apache Pulsar Proxy target broker address isn't validated (CVE-2022-24280)"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["It is necessary to limit proxied broker connections to known broker addresses by specifying ",(0,t.jsx)(r.code,{children:"brokerProxyAllowedHostNames"})," and ",(0,t.jsx)(r.code,{children:"brokerProxyAllowedIPAddresses"})," settings."]}),"\n",(0,t.jsxs)(r.p,{children:["When specifying ",(0,t.jsx)(r.code,{children:"brokerProxyAllowedHostNames"}),", it's possible to use a wildcard.\nPlease notice that ",(0,t.jsx)(r.code,{children:"*"})," is a wildcard that matches any character in the hostname. It also matches dot ",(0,t.jsx)(r.code,{children:"."})," characters."]}),"\n",(0,t.jsxs)(r.p,{children:["It is recommended to use a pattern that matches only the desired brokers and no other hosts in the local network. Pulsar lookups will use the default host name of the broker by default. This can be overridden with the ",(0,t.jsx)(r.code,{children:"advertisedAddress"})," setting in ",(0,t.jsx)(r.code,{children:"broker.conf"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["To increase security, it is also possible to restrict access with the ",(0,t.jsx)(r.code,{children:"brokerProxyAllowedIPAddresses"})," setting. It is not mandatory to configure ",(0,t.jsx)(r.code,{children:"brokerProxyAllowedIPAddresses"})," when ",(0,t.jsx)(r.code,{children:"brokerProxyAllowedHostNames"})," is properly configured so that the pattern matches only the target brokers.\n",(0,t.jsx)(r.code,{children:"brokerProxyAllowedIPAddresses"})," setting supports a comma separate list of IP address, IP address ranges and IP address networks ",(0,t.jsx)(r.a,{href:"https://seancfoley.github.io/IPAddress/IPAddress/apidocs/inet/ipaddr/IPAddressString.html",children:"(supported format reference)"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Example: limiting by host name in a Kubernetes deployment"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"  # example of limiting to Kubernetes statefulset hostnames that contain \"broker-\"\n  PULSAR_PREFIX_brokerProxyAllowedHostNames: '*broker-*.*.*.svc.cluster.local'\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Example: limiting by both host name and ip address in a ",(0,t.jsx)(r.code,{children:"proxy.conf"})," file for host deployment."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-properties",children:'# require "broker" in host name\nbrokerProxyAllowedHostNames=*broker*.localdomain\n# limit target ip addresses to a specific network\nbrokerProxyAllowedIPAddresses=10.0.0.0/8\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Example: limiting by multiple host name patterns and multiple ip address ranges in a ",(0,t.jsx)(r.code,{children:"proxy.conf"})," file for host deployment."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-properties",children:'# require "broker" in host name\nbrokerProxyAllowedHostNames=*broker*.localdomain,*broker*.otherdomain\n# limit target ip addresses to a specific network or range demonstrating multiple supported formats\nbrokerProxyAllowedIPAddresses=10.10.0.0/16,192.168.1.100-120,172.16.2.*,10.1.2.3\n'})}),"\n",(0,t.jsx)(r.h2,{id:"start-the-proxy",children:"Start the proxy"}),"\n",(0,t.jsx)(r.p,{children:"To start the proxy, run the following commands."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"cd /path/to/pulsar/directory\nbin/pulsar proxy \\\n    --metadata-store zk:my-zk-1:2181,my-zk-2:2181,my-zk-3:2181 \\\n    --configuration-metadata-store zk:my-zk-1:2181,my-zk-2:2181,my-zk-3:2181\n"})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"You can run multiple instances of the Pulsar proxy in a cluster."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"stop-the-proxy",children:"Stop the proxy"}),"\n",(0,t.jsx)(r.p,{children:"Pulsar proxy runs in the foreground by default. To stop the proxy, simply stop the process in which the proxy is running."}),"\n",(0,t.jsx)(r.h2,{id:"proxy-frontends",children:"Proxy frontends"}),"\n",(0,t.jsxs)(r.p,{children:["You can run Pulsar proxy behind some kind of load-distributing frontend, such as an ",(0,t.jsx)(r.a,{href:"https://www.digitalocean.com/community/tutorials/an-introduction-to-haproxy-and-load-balancing-concepts",children:"HAProxy"})," load balancer."]}),"\n",(0,t.jsx)(r.h2,{id:"use-pulsar-clients-with-the-proxy",children:"Use Pulsar clients with the proxy"}),"\n",(0,t.jsxs)(r.p,{children:["Once your Pulsar proxy is up and running, preferably behind a load-distributing ",(0,t.jsx)(r.a,{href:"#proxy-frontends",children:"frontend"}),", clients can connect to the proxy via whichever address that the frontend uses. If the address is the DNS address ",(0,t.jsx)(r.code,{children:"pulsar.cluster.default"}),", for example, the connection URL for clients is ",(0,t.jsx)(r.code,{children:"pulsar://pulsar.cluster.default:6650"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["For more information on Proxy configuration, refer to ",(0,t.jsx)(r.a,{href:"/docs/3.3.x/reference-configuration#pulsar-proxy",children:"Pulsar proxy"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>a});var s=o(96540);const t={},n=s.createContext(t);function i(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);