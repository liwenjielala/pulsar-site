"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8421],{28069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"security-tls-authentication","title":"Authentication using TLS","description":"TLS authentication overview","source":"@site/versioned_docs/version-2.7.4/security-tls-authentication.md","sourceDirName":".","slug":"/security-tls-authentication","permalink":"/docs/2.7.4/security-tls-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.4/security-tls-authentication.md","tags":[],"version":"2.7.4","frontMatter":{"id":"security-tls-authentication","title":"Authentication using TLS","sidebar_label":"Authentication using TLS","original_id":"security-tls-authentication"},"sidebar":"docsSidebar","previous":{"title":"Transport Encryption using TLS","permalink":"/docs/2.7.4/security-tls-transport"},"next":{"title":"Using TLS with KeyStore configure","permalink":"/docs/2.7.4/security-tls-keystore"}}');var r=n(74848),s=n(28453);const o={id:"security-tls-authentication",title:"Authentication using TLS",sidebar_label:"Authentication using TLS",original_id:"security-tls-authentication"},a=void 0,c={},l=[{value:"TLS authentication overview",id:"tls-authentication-overview",level:2},{value:"Create client certificates",id:"create-client-certificates",level:3},{value:"Enable TLS authentication on brokers",id:"enable-tls-authentication-on-brokers",level:2},{value:"Enable TLS authentication on proxies",id:"enable-tls-authentication-on-proxies",level:2},{value:"Client configuration",id:"client-configuration",level:2},{value:"CLI tools",id:"cli-tools",level:3},{value:"Java client",id:"java-client",level:3},{value:"Python client",id:"python-client",level:3},{value:"C++ client",id:"c-client",level:3},{value:"Node.js client",id:"nodejs-client",level:3},{value:"C# client",id:"c-client-1",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"tls-authentication-overview",children:"TLS authentication overview"}),"\n",(0,r.jsxs)(t.p,{children:["TLS authentication is an extension of ",(0,r.jsx)(t.a,{href:"/docs/2.7.4/security-tls-transport",children:"TLS transport encryption"}),". Not only servers have keys and certs that the client uses to verify the identity of servers, clients also have keys and certs that the server uses to verify the identity of clients. You must have TLS transport encryption configured on your cluster before you can use TLS authentication. This guide assumes you already have TLS transport encryption configured."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Bouncy Castle Provider"})," provides TLS related cipher suites and algorithms in Pulsar. If you need ",(0,r.jsx)(t.a,{href:"https://www.bouncycastle.org/fips_faq.html",children:"FIPS"})," version of ",(0,r.jsx)(t.code,{children:"Bouncy Castle Provider"}),", please reference ",(0,r.jsx)(t.a,{href:"/docs/2.7.4/security-bouncy-castle",children:"Bouncy Castle page"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"create-client-certificates",children:"Create client certificates"}),"\n",(0,r.jsx)(t.p,{children:"Client certificates are generated using the certificate authority. Server certificates are also generated with the same certificate authority."}),"\n",(0,r.jsxs)(t.p,{children:["The biggest difference between client certs and server certs is that the ",(0,r.jsx)(t.strong,{children:"common name"})," for the client certificate is the ",(0,r.jsx)(t.strong,{children:"role token"})," which that client is authenticated as."]}),"\n",(0,r.jsx)(t.p,{children:"First, you need to enter the following command to generate the key :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"\n$ openssl genrsa -out admin.key.pem 2048\n\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Similar to the broker, the client expects the key to be in ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/PKCS_8",children:"PKCS 8"})," format, so you need to convert it by entering the following command:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"\n$ openssl pkcs8 -topk8 -inform PEM -outform PEM \\\n      -in admin.key.pem -out admin.key-pk8.pem -nocrypt\n\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Next, enter the command below to generate the certificate request. When you are asked for a ",(0,r.jsx)(t.strong,{children:"common name"}),", enter the ",(0,r.jsx)(t.strong,{children:"role token"})," that you want this key pair to authenticate a client as."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"\n$ openssl req -config openssl.cnf \\\n      -key admin.key.pem -new -sha256 -out admin.csr.pem\n\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["If openssl.cnf is not specified, read ",(0,r.jsx)(t.a,{href:"http://pulsar.apache.org/docs/en/security-tls-transport/#certificate-authority",children:"Certificate authority"})," to get the openssl.cnf."]})}),"\n",(0,r.jsxs)(t.p,{children:["Then, enter the command below to sign with request with the certificate authority. Note that the client certs uses the ",(0,r.jsx)(t.strong,{children:"usr_cert"})," extension, which allows the cert to be used for client authentication."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"\n$ openssl ca -config openssl.cnf -extensions usr_cert \\\n      -days 1000 -notext -md sha256 \\\n      -in admin.csr.pem -out admin.cert.pem\n\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can get a cert, ",(0,r.jsx)(t.code,{children:"admin.cert.pem"}),", and a key, ",(0,r.jsx)(t.code,{children:"admin.key-pk8.pem"})," from this command. With ",(0,r.jsx)(t.code,{children:"ca.cert.pem"}),", clients can use this cert and this key to authenticate themselves to brokers and proxies as the role token ",(0,r.jsx)(t.code,{children:"admin"}),"."]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:'If the "unable to load CA private key" error occurs and the reason of this error is "No such file or directory: /etc/pki/CA/private/cakey.pem" in this step. Try the command below:'}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"\n$ cd /etc/pki/tls/misc/CA\n$ ./CA -newca\n\n"})}),(0,r.jsxs)(t.p,{children:["to generate ",(0,r.jsx)(t.code,{children:"cakey.pem"})," ."]})]}),"\n",(0,r.jsx)(t.h2,{id:"enable-tls-authentication-on-brokers",children:"Enable TLS authentication on brokers"}),"\n",(0,r.jsxs)(t.p,{children:["To configure brokers to authenticate clients, add the following parameters to ",(0,r.jsx)(t.code,{children:"broker.conf"}),", alongside ",(0,r.jsx)(t.a,{href:"/docs/2.7.4/security-tls-transport#broker-configuration",children:"the configuration to enable tls transport"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-properties",children:'\n# Configuration to enable authentication\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderTls\n\n# operations and publish/consume from all topics\nsuperUserRoles=admin\n\n# Authentication settings of the broker itself. Used when the broker connects to other brokers, either in same or other clusters\nbrokerClientTlsEnabled=true\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationTls\nbrokerClientAuthenticationParameters={"tlsCertFile":"/path/my-ca/admin.cert.pem","tlsKeyFile":"/path/my-ca/admin.key-pk8.pem"}\nbrokerClientTrustCertsFilePath=/path/my-ca/certs/ca.cert.pem\n\n'})}),"\n",(0,r.jsx)(t.h2,{id:"enable-tls-authentication-on-proxies",children:"Enable TLS authentication on proxies"}),"\n",(0,r.jsxs)(t.p,{children:["To configure proxies to authenticate clients, add the following parameters to ",(0,r.jsx)(t.code,{children:"proxy.conf"}),", alongside ",(0,r.jsx)(t.a,{href:"/docs/2.7.4/security-tls-transport#proxy-configuration",children:"the configuration to enable tls transport"}),":"]}),"\n",(0,r.jsxs)(t.p,{children:["The proxy should have its own client key pair for connecting to brokers. You need to configure the role token for this key pair in the ",(0,r.jsx)(t.code,{children:"proxyRoles"})," of the brokers. See the ",(0,r.jsx)(t.a,{href:"/docs/2.7.4/security-authorization",children:"authorization guide"})," for more details."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-properties",children:"\n# For clients connecting to the proxy\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderTls\n\n# For the proxy to connect to brokers\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationTls\nbrokerClientAuthenticationParameters=tlsCertFile:/path/to/proxy.cert.pem,tlsKeyFile:/path/to/proxy.key-pk8.pem\n\n"})}),"\n",(0,r.jsx)(t.h2,{id:"client-configuration",children:"Client configuration"}),"\n",(0,r.jsxs)(t.p,{children:["When you use TLS authentication, client connects via TLS transport. You need to configure the client to use ",(0,r.jsx)(t.code,{children:"https://"})," and 8443 port for the web service URL, ",(0,r.jsx)(t.code,{children:"pulsar+ssl://"})," and 6651 port for the broker service URL."]}),"\n",(0,r.jsx)(t.h3,{id:"cli-tools",children:"CLI tools"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/2.7.4/reference-cli-tools",children:"Command-line tools"})," like ",(0,r.jsx)(t.a,{href:"/docs/2.7.4/reference-pulsar-admin",children:(0,r.jsx)(t.code,{children:"pulsar-admin"})}),", ",(0,r.jsx)(t.a,{href:"/docs/2.7.4/reference-cli-tools#pulsar-perf",children:(0,r.jsx)(t.code,{children:"pulsar-perf"})}),", and ",(0,r.jsx)(t.a,{href:"/docs/2.7.4/reference-cli-tools#pulsar-client",children:(0,r.jsx)(t.code,{children:"pulsar-client"})})," use the ",(0,r.jsx)(t.code,{children:"conf/client.conf"})," config file in a Pulsar installation."]}),"\n",(0,r.jsx)(t.p,{children:"You need to add the following parameters to that file to use TLS authentication with the CLI tools of Pulsar:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-properties",children:"\nwebServiceUrl=https://broker.example.com:8443/\nbrokerServiceUrl=pulsar+ssl://broker.example.com:6651/\nuseTls=true\ntlsAllowInsecureConnection=false\ntlsTrustCertsFilePath=/path/to/ca.cert.pem\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationTls\nauthParams=tlsCertFile:/path/to/my-role.cert.pem,tlsKeyFile:/path/to/my-role.key-pk8.pem\n\n"})}),"\n",(0,r.jsx)(t.h3,{id:"java-client",children:"Java client"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'\nimport org.apache.pulsar.client.api.PulsarClient;\n\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar+ssl://broker.example.com:6651/")\n    .enableTls(true)\n    .tlsTrustCertsFilePath("/path/to/ca.cert.pem")\n    .authentication("org.apache.pulsar.client.impl.auth.AuthenticationTls",\n                    "tlsCertFile:/path/to/my-role.cert.pem,tlsKeyFile:/path/to/my-role.key-pk8.pem")\n    .build();\n\n'})}),"\n",(0,r.jsx)(t.h3,{id:"python-client",children:"Python client"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'\nfrom pulsar import Client, AuthenticationTLS\n\nauth = AuthenticationTLS("/path/to/my-role.cert.pem", "/path/to/my-role.key-pk8.pem")\nclient = Client("pulsar+ssl://broker.example.com:6651/",\n                tls_trust_certs_file_path="/path/to/ca.cert.pem",\n                tls_allow_insecure_connection=False,\n\t\t\t\tauthentication=auth)\n\n'})}),"\n",(0,r.jsx)(t.h3,{id:"c-client",children:"C++ client"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c++",children:'\n#include <pulsar/Client.h>\n\npulsar::ClientConfiguration config;\nconfig.setUseTls(true);\nconfig.setTlsTrustCertsFilePath("/path/to/ca.cert.pem");\nconfig.setTlsAllowInsecureConnection(false);\n\npulsar::AuthenticationPtr auth = pulsar::AuthTls::create("/path/to/my-role.cert.pem",\n                                                         "/path/to/my-role.key-pk8.pem")\nconfig.setAuth(auth);\n\npulsar::Client client("pulsar+ssl://broker.example.com:6651/", config);\n\n'})}),"\n",(0,r.jsx)(t.h3,{id:"nodejs-client",children:"Node.js client"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-JavaScript",children:"\nconst Pulsar = require('pulsar-client');\n\n(async () => {\n  const auth = new Pulsar.AuthenticationTls({\n    certificatePath: '/path/to/my-role.cert.pem',\n    privateKeyPath: '/path/to/my-role.key-pk8.pem',\n  });\n\n  const client = new Pulsar.Client({\n    serviceUrl: 'pulsar+ssl://broker.example.com:6651/',\n    authentication: auth,\n    tlsTrustCertsFilePath: '/path/to/ca.cert.pem',\n  });\n})();\n\n"})}),"\n",(0,r.jsx)(t.h3,{id:"c-client-1",children:"C# client"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c#",children:'\nvar clientCertificate = new X509Certificate2("admin.pfx");\nvar client = PulsarClient.Builder()\n                         .AuthenticateUsingClientCertificate(clientCertificate)\n                         .Build();\n\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);