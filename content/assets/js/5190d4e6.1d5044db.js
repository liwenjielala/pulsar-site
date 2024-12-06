"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[13763],{7134:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"administration-proxy","title":"The Pulsar proxy","description":"The Pulsar proxy is an optional gateway that you can run in front of the brokers in a Pulsar cluster. You can run a Pulsar proxy in cases when direction connections between clients and Pulsar brokers are either infeasible, undesirable, or both, for example when you run Pulsar in a cloud environment or on Kubernetes or an analogous platform.","source":"@site/versioned_docs/version-2.5.0/administration-proxy.md","sourceDirName":".","slug":"/administration-proxy","permalink":"/docs/2.5.0/administration-proxy","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.0/administration-proxy.md","tags":[],"version":"2.5.0","frontMatter":{"id":"administration-proxy","title":"The Pulsar proxy","sidebar_label":"Pulsar proxy","original_id":"administration-proxy"},"sidebar":"docsSidebar","previous":{"title":"Load balance","permalink":"/docs/2.5.0/administration-load-balance"},"next":{"title":"Upgrade","permalink":"/docs/2.5.0/administration-upgrade"}}');var s=t(74848),o=t(28453);const i={id:"administration-proxy",title:"The Pulsar proxy",sidebar_label:"Pulsar proxy",original_id:"administration-proxy"},a=void 0,c={},d=[{value:"Configure the proxy",id:"configure-the-proxy",level:2},{value:"Option 1: Use service discovery",id:"option-1-use-service-discovery",level:3},{value:"Option 2: Use broker URLs",id:"option-2-use-broker-urls",level:3},{value:"Start the proxy",id:"start-the-proxy",level:2},{value:"Stop the proxy",id:"stop-the-proxy",level:2},{value:"Proxy frontends",id:"proxy-frontends",level:2},{value:"Use Pulsar clients with the proxy",id:"use-pulsar-clients-with-the-proxy",level:2},{value:"Proxy configuration",id:"proxy-configuration",level:2}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.a,{href:"/docs/2.5.0/concepts-architecture-overview#pulsar-proxy",children:"Pulsar proxy"})," is an optional gateway that you can run in front of the brokers in a Pulsar cluster. You can run a Pulsar proxy in cases when direction connections between clients and Pulsar brokers are either infeasible, undesirable, or both, for example when you run Pulsar in a cloud environment or on ",(0,s.jsx)(r.a,{href:"https://kubernetes.io",children:"Kubernetes"})," or an analogous platform."]}),"\n",(0,s.jsx)(r.h2,{id:"configure-the-proxy",children:"Configure the proxy"}),"\n",(0,s.jsx)(r.p,{children:"The proxy must have some way to find the addresses of the brokers of the cluster. You can do this by either configuring the proxy to connect directly to service discovery or by specifying a broker URL in the configuration."}),"\n",(0,s.jsx)(r.h3,{id:"option-1-use-service-discovery",children:"Option 1: Use service discovery"}),"\n",(0,s.jsxs)(r.p,{children:["Pulsar uses ",(0,s.jsx)(r.a,{href:"https://zookeeper.apache.org",children:"ZooKeeper"})," for service discovery. To connect the proxy to ZooKeeper, specify the following in ",(0,s.jsx)(r.code,{children:"conf/proxy.conf"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-properties",children:"\nzookeeperServers=zk-0,zk-1,zk-2\nconfigurationStoreServers=zk-0:2184,zk-remote:2184\n\n"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"If you use service discovery, the network ACL must allow the proxy to talk to the ZooKeeper nodes on the zookeeper client port, which is usually 2181, and on the configuration store client port, which is 2184 by default. Opening the network ACLs means that if someone compromises a proxy, they have full access to ZooKeeper. For this reason, using broker URLs to configure the proxy is more secure."}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"option-2-use-broker-urls",children:"Option 2: Use broker URLs"}),"\n",(0,s.jsx)(r.p,{children:"The more secure method of configuring the proxy is to specify a URL to connect to the brokers."}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"security-authorization#enable-authorization-and-assign-superusers",children:"Authorization"})," at the proxy requires access to ZooKeeper, so if you use these broker URLs to connect to the brokers, you should disable the Proxy level authorization. Brokers still authorize requests after the proxy forwards them."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["You can configure the broker URLs in ",(0,s.jsx)(r.code,{children:"conf/proxy.conf"})," as follows."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-properties",children:"\nbrokerServiceURL=pulsar://brokers.example.com:6650\nbrokerWebServiceURL=http://brokers.example.com:8080\nfunctionWorkerWebServiceURL=http://function-workers.example.com:8080\n\n"})}),"\n",(0,s.jsx)(r.p,{children:"Or if you use TLS:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-properties",children:"\nbrokerServiceURLTLS=pulsar+ssl://brokers.example.com:6651\nbrokerWebServiceURLTLS=https://brokers.example.com:8443\nfunctionWorkerWebServiceURL=https://function-workers.example.com:8443\n\n"})}),"\n",(0,s.jsx)(r.p,{children:"The hostname in the URLs provided should be a DNS entry which points to multiple brokers or a Virtual IP which is backed by multiple broker IP addresses so that the proxy does not lose connectivity to the pulsar cluster if a single broker becomes unavailable."}),"\n",(0,s.jsx)(r.p,{children:"The ports to connect to the brokers (6650 and 8080, or in the case of TLS, 6651 and 8443) should be open in the network ACLs."}),"\n",(0,s.jsxs)(r.p,{children:["Note that if you do not use functions, then you do not need to configure ",(0,s.jsx)(r.code,{children:"functionWorkerWebServiceURL"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"start-the-proxy",children:"Start the proxy"}),"\n",(0,s.jsx)(r.p,{children:"To start the proxy:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"\n$ cd /path/to/pulsar/directory\n$ bin/pulsar proxy\n\n"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"You can run as many instances of the Pulsar proxy in a cluster as you want."}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"stop-the-proxy",children:"Stop the proxy"}),"\n",(0,s.jsx)(r.p,{children:"The Pulsar proxy runs by default in the foreground. To stop the proxy, simply stop the process in which the proxy is running."}),"\n",(0,s.jsx)(r.h2,{id:"proxy-frontends",children:"Proxy frontends"}),"\n",(0,s.jsxs)(r.p,{children:["You can run the Pulsar proxy behind some kind of load-distributing frontend, such as an ",(0,s.jsx)(r.a,{href:"https://www.digitalocean.com/community/tutorials/an-introduction-to-haproxy-and-load-balancing-concepts",children:"HAProxy"})," load balancer."]}),"\n",(0,s.jsx)(r.h2,{id:"use-pulsar-clients-with-the-proxy",children:"Use Pulsar clients with the proxy"}),"\n",(0,s.jsxs)(r.p,{children:["Once your Pulsar proxy is up and running, preferably behind a load-distributing ",(0,s.jsx)(r.a,{href:"#proxy-frontends",children:"frontend"}),", clients can connect to the proxy via whichever address that the frontend uses. If the address is the DNS address ",(0,s.jsx)(r.code,{children:"pulsar.cluster.default"}),", for example, then the connection URL for clients is ",(0,s.jsx)(r.code,{children:"pulsar://pulsar.cluster.default:6650"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"proxy-configuration",children:"Proxy configuration"}),"\n",(0,s.jsxs)(r.p,{children:["You can configure the Pulsar proxy using the ",(0,s.jsx)(r.a,{href:"/docs/2.5.0/reference-configuration#proxy",children:(0,s.jsx)(r.code,{children:"proxy.conf"})})," configuration file. The following parameters are available in that file:"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"zookeeperServers"}),(0,s.jsx)(r.td,{children:"The ZooKeeper quorum connection string (as a comma-separated list)"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"configurationStoreServers"}),(0,s.jsx)(r.td,{children:"Configuration store connection string (as a comma-separated list)"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"zookeeperSessionTimeoutMs"}),(0,s.jsx)(r.td,{children:"ZooKeeper session timeout (in milliseconds)"}),(0,s.jsx)(r.td,{children:"30000"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"servicePort"}),(0,s.jsx)(r.td,{children:"The port to use for server binary Protobuf requests"}),(0,s.jsx)(r.td,{children:"6650"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"servicePortTls"}),(0,s.jsx)(r.td,{children:"The port to use to server binary Protobuf TLS requests"}),(0,s.jsx)(r.td,{children:"6651"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"statusFilePath"}),(0,s.jsx)(r.td,{children:"Path for the file used to determine the rotation status for the proxy instance when responding to service discovery health checks"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"authenticationEnabled"}),(0,s.jsx)(r.td,{children:"Whether authentication is enabled for the Pulsar proxy"}),(0,s.jsx)(r.td,{children:"false"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"authenticateMetricsEndpoint"}),(0,s.jsx)(r.td,{children:"Whether the '/metrics' endpoint requires authentication. Defaults to true. 'authenticationEnabled' must also be set for this to take effect."}),(0,s.jsx)(r.td,{children:"true"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"authenticationProviders"}),(0,s.jsx)(r.td,{children:"Authentication provider name list (a comma-separated list of class names)"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"authorizationEnabled"}),(0,s.jsx)(r.td,{children:"Whether authorization is enforced by the Pulsar proxy"}),(0,s.jsx)(r.td,{children:"false"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"authorizationProvider"}),(0,s.jsx)(r.td,{children:"Authorization provider as a fully qualified class name"}),(0,s.jsx)(r.td,{children:"org.apache.pulsar.broker.authorization.PulsarAuthorizationProvider"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"brokerClientAuthenticationPlugin"}),(0,s.jsx)(r.td,{children:"The authentication plugin used by the Pulsar proxy to authenticate with Pulsar brokers"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"brokerClientAuthenticationParameters"}),(0,s.jsx)(r.td,{children:"The authentication parameters used by the Pulsar proxy to authenticate with Pulsar brokers"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"brokerClientTrustCertsFilePath"}),(0,s.jsx)(r.td,{children:"The path to trusted certificates used by the Pulsar proxy to authenticate with Pulsar brokers"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"superUserRoles"}),(0,s.jsx)(r.td,{children:'Role names that are treated as "super-users," meaning that they are able to perform all admin'}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"forwardAuthorizationCredentials"}),(0,s.jsx)(r.td,{children:"Whether client authorization credentials are forwarded to the broker for re-authorization. Authentication must be enabled via authenticationEnabled=true for this to take effect."}),(0,s.jsx)(r.td,{children:"false"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"maxConcurrentInboundConnections"}),(0,s.jsx)(r.td,{children:"Max concurrent inbound connections. The proxy rejects requests beyond that."}),(0,s.jsx)(r.td,{children:"10000"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"maxConcurrentLookupRequests"}),(0,s.jsx)(r.td,{children:"Max concurrent outbound connections. The proxy errors out requests beyond that."}),(0,s.jsx)(r.td,{children:"50000"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tlsEnabledInProxy"}),(0,s.jsx)(r.td,{children:"Whether TLS is enabled for the proxy"}),(0,s.jsx)(r.td,{children:"false"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tlsEnabledWithBroker"}),(0,s.jsx)(r.td,{children:"Whether TLS is enabled when communicating with Pulsar brokers"}),(0,s.jsx)(r.td,{children:"false"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tlsCertificateFilePath"}),(0,s.jsx)(r.td,{children:"Path for the TLS certificate file"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tlsKeyFilePath"}),(0,s.jsx)(r.td,{children:"Path for the TLS private key file"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tlsTrustCertsFilePath"}),(0,s.jsx)(r.td,{children:"Path for the trusted TLS certificate pem file"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tlsHostnameVerificationEnabled"}),(0,s.jsx)(r.td,{children:"Whether the hostname is validated when the proxy creates a TLS connection with brokers"}),(0,s.jsx)(r.td,{children:"false"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tlsRequireTrustedClientCertOnConnect"}),(0,s.jsx)(r.td,{children:"Whether client certificates are required for TLS. Connections are rejected if the client certificate is not trusted."}),(0,s.jsx)(r.td,{children:"false"})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(96540);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);