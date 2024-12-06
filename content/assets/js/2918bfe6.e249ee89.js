"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[33170],{38215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"security-tls-transport","title":"Transport Encryption using TLS","description":"TLS overview","source":"@site/versioned_docs/version-2.6.2/security-tls-transport.md","sourceDirName":".","slug":"/security-tls-transport","permalink":"/docs/2.6.2/security-tls-transport","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.2/security-tls-transport.md","tags":[],"version":"2.6.2","frontMatter":{"id":"security-tls-transport","title":"Transport Encryption using TLS","sidebar_label":"Transport Encryption using TLS","original_id":"security-tls-transport"},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/docs/2.6.2/security-overview"},"next":{"title":"Authentication using TLS","permalink":"/docs/2.6.2/security-tls-authentication"}}');var i=n(74848),s=n(28453);const o={id:"security-tls-transport",title:"Transport Encryption using TLS",sidebar_label:"Transport Encryption using TLS",original_id:"security-tls-transport"},a=void 0,c={},l=[{value:"TLS overview",id:"tls-overview",level:2},{value:"TLS concepts",id:"tls-concepts",level:2},{value:"Create TLS certificates",id:"create-tls-certificates",level:2},{value:"Certificate authority",id:"certificate-authority",level:3},{value:"Server certificate",id:"server-certificate",level:3},{value:"Broker Configuration",id:"broker-configuration",level:2},{value:"TLS Protocol Version and Cipher",id:"tls-protocol-version-and-cipher",level:3},{value:"Proxy Configuration",id:"proxy-configuration",level:2},{value:"Client configuration",id:"client-configuration",level:2},{value:"Hostname verification",id:"hostname-verification",level:3},{value:"CLI tools",id:"cli-tools",level:3},{value:"Java client",id:"java-client",level:4},{value:"Python client",id:"python-client",level:4},{value:"C++ client",id:"c-client",level:4},{value:"Node.js client",id:"nodejs-client",level:4},{value:"C# client",id:"c-client-1",level:4}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"tls-overview",children:"TLS overview"}),"\n",(0,i.jsx)(t.p,{children:"By default, Apache Pulsar clients communicate with the Apache Pulsar service in plain text. This means that all data is sent in the clear. You can use TLS to encrypt this traffic to protect the traffic from the snooping of a man-in-the-middle attacker."}),"\n",(0,i.jsxs)(t.p,{children:["You can also configure TLS for both encryption and authentication. Use this guide to configure just TLS transport encryption and refer to ",(0,i.jsx)(t.a,{href:"/docs/2.6.2/security-tls-authentication",children:"here"})," for TLS authentication configuration. Alternatively, you can use ",(0,i.jsx)(t.a,{href:"/docs/2.6.2/security-athenz",children:"another authentication mechanism"})," on top of TLS transport encryption."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Note that enabling TLS may impact the performance due to encryption overhead."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"tls-concepts",children:"TLS concepts"}),"\n",(0,i.jsxs)(t.p,{children:["TLS is a form of ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Public-key_cryptography",children:"public key cryptography"}),". Using key pairs consisting of a public key and a private key can perform the encryption. The public key encrpyts the messages and the private key decrypts the messages."]}),"\n",(0,i.jsxs)(t.p,{children:["To use TLS transport encryption, you need two kinds of key pairs, ",(0,i.jsx)(t.strong,{children:"server key pairs"})," and a ",(0,i.jsx)(t.strong,{children:"certificate authority"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["You can use a third kind of key pair, ",(0,i.jsx)(t.strong,{children:"client key pairs"}),", for ",(0,i.jsx)(t.a,{href:"/docs/2.6.2/security-tls-authentication",children:"client authentication"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["You should store the ",(0,i.jsx)(t.strong,{children:"certificate authority"})," private key in a very secure location (a fully encrypted, disconnected, air gapped computer). As for the certificate authority public key, the ",(0,i.jsx)(t.strong,{children:"trust cert"}),", you can freely shared it."]}),"\n",(0,i.jsx)(t.p,{children:"For both client and server key pairs, the administrator first generates a private key and a certificate request, then uses the certificate authority private key to sign the certificate request, finally generates a certificate. This certificate is the public key for the server/client key pair."}),"\n",(0,i.jsxs)(t.p,{children:["For TLS transport encryption, the clients can use the ",(0,i.jsx)(t.strong,{children:"trust cert"})," to verify that the server has a key pair that the certificate authority signed when the clients are talking to the server. A man-in-the-middle attacker does not have access to the certificate authority, so they couldn't create a server with such a key pair."]}),"\n",(0,i.jsxs)(t.p,{children:["For TLS authentication, the server uses the ",(0,i.jsx)(t.strong,{children:"trust cert"})," to verify that the client has a key pair that the certificate authority signed. The common name of the ",(0,i.jsx)(t.strong,{children:"client cert"})," is then used as the client's role token (see ",(0,i.jsx)(t.a,{href:"/docs/2.6.2/security-overview",children:"Overview"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Bouncy Castle Provider"})," provides cipher suites and algorithms in Pulsar. If you need ",(0,i.jsx)(t.a,{href:"https://www.bouncycastle.org/fips_faq.html",children:"FIPS"})," version of ",(0,i.jsx)(t.code,{children:"Bouncy Castle Provider"}),", please reference ",(0,i.jsx)(t.a,{href:"/docs/2.6.2/security-bouncy-castle",children:"Bouncy Castle page"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"create-tls-certificates",children:"Create TLS certificates"}),"\n",(0,i.jsxs)(t.p,{children:["Creating TLS certificates for Pulsar involves creating a ",(0,i.jsx)(t.a,{href:"#certificate-authority",children:"certificate authority"})," (CA), ",(0,i.jsx)(t.a,{href:"#server-certificate",children:"server certificate"}),", and ",(0,i.jsx)(t.a,{href:"#client-certificate",children:"client certificate"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Follow the guide below to set up a certificate authority. You can also refer to plenty of resources on the internet for more details. We recommend ",(0,i.jsx)(t.a,{href:"https://jamielinux.com/docs/openssl-certificate-authority/index.html",children:"this guide"})," for your detailed reference."]}),"\n",(0,i.jsx)(t.h3,{id:"certificate-authority",children:"Certificate authority"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Create the certificate for the CA. You can use CA to sign both the broker and client certificates. This ensures that each party will trust the others. You should store CA in a very secure location (ideally completely disconnected from networks, air gapped, and fully encrypted)."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Entering the following command to create a directory for your CA, and place ",(0,i.jsx)(t.a,{href:"pathname:///examples/openssl.cnf",children:"this openssl configuration file"})," in the directory. You may want to modify the default answers for company name and department in the configuration file. Export the location of the CA directory to the environment variable, CA_HOME. The configuration file uses this environment variable to find the rest of the files and directories that the CA needs."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"\nmkdir my-ca\ncd my-ca\nwget https://pulsar.apache.org/examples/openssl.cnf\nexport CA_HOME=$(pwd)\n\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsx)(t.li,{children:"Enter the commands below to create the necessary directories, keys and certs."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"\nmkdir certs crl newcerts private\nchmod 700 private/\ntouch index.txt\necho 1000 > serial\nopenssl genrsa -aes256 -out private/ca.key.pem 4096\nchmod 400 private/ca.key.pem\nopenssl req -config openssl.cnf -key private/ca.key.pem \\\n    -new -x509 -days 7300 -sha256 -extensions v3_ca \\\n    -out certs/ca.cert.pem\nchmod 444 certs/ca.cert.pem\n\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsxs)(t.li,{children:["After you answer the question prompts, CA-related files are stored in the ",(0,i.jsx)(t.code,{children:"./my-ca"})," directory. Within that directory:"]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"certs/ca.cert.pem"})," is the public certificate. This public certificates is meant to be distributed to all parties involved."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"private/ca.key.pem"})," is the private key. You only need it when you are signing a new certificate for either broker or clients and you must safely guard this private key."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"server-certificate",children:"Server certificate"}),"\n",(0,i.jsx)(t.p,{children:"Once you have created a CA certificate, you can create certificate requests and sign them with the CA."}),"\n",(0,i.jsxs)(t.p,{children:["The following commands ask you a few questions and then create the certificates. When you are asked for the common name, you should match the hostname of the broker. You can also use a wildcard to match a group of broker hostnames, for example, ",(0,i.jsx)(t.code,{children:"*.broker.usw.example.com"}),". This ensures that multiple machines can reuse the same certificate."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Sometimes matching the hostname is not possible or makes no sense,\nsuch as when you create the brokers with random hostnames, or you\nplan to connect to the hosts via their IP. In these cases, you\nshould configure the client to disable TLS hostname verification. For more\ndetails, you can see ",(0,i.jsx)(t.a,{href:"#hostname-verification",children:"the host verification section in client configuration"}),"."]})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Enter the command below to generate the key."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"\nopenssl genrsa -out broker.key.pem 2048\n\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The broker expects the key to be in ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/PKCS_8",children:"PKCS 8"})," format, so enter the following command to convert it."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"\nopenssl pkcs8 -topk8 -inform PEM -outform PEM \\\n      -in broker.key.pem -out broker.key-pk8.pem -nocrypt\n\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Enter the following command to generate the certificate request."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"\nopenssl req -config openssl.cnf \\\n    -key broker.key.pem -new -sha256 -out broker.csr.pem\n\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsx)(t.li,{children:"Sign it with the certificate authority by entering the command below."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"\nopenssl ca -config openssl.cnf -extensions server_cert \\\n    -days 1000 -notext -md sha256 \\\n    -in broker.csr.pem -out broker.cert.pem\n\n"})}),"\n",(0,i.jsxs)(t.p,{children:["At this point, you have a cert, ",(0,i.jsx)(t.code,{children:"broker.cert.pem"}),", and a key, ",(0,i.jsx)(t.code,{children:"broker.key-pk8.pem"}),", which you can use along with ",(0,i.jsx)(t.code,{children:"ca.cert.pem"})," to configure TLS transport encryption for your broker and proxy nodes."]}),"\n",(0,i.jsx)(t.h2,{id:"broker-configuration",children:"Broker Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["To configure a Pulsar ",(0,i.jsx)(t.a,{href:"/docs/2.6.2/reference-terminology#broker",children:"broker"})," to use TLS transport encryption, you need to make some changes to ",(0,i.jsx)(t.code,{children:"broker.conf"}),", which locates in the ",(0,i.jsx)(t.code,{children:"conf"})," directory of your ",(0,i.jsx)(t.a,{href:"/docs/2.6.2/getting-started-standalone",children:"Pulsar installation"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Add these values to the configuration file (substituting the appropriate certificate paths where necessary):"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-properties",children:"\ntlsEnabled=true\ntlsCertificateFilePath=/path/to/broker.cert.pem\ntlsKeyFilePath=/path/to/broker.key-pk8.pem\ntlsTrustCertsFilePath=/path/to/ca.cert.pem\n\n"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["You can find a full list of parameters available in the ",(0,i.jsx)(t.code,{children:"conf/broker.conf"})," file,\nas well as the default values for those parameters, in ",(0,i.jsx)(t.a,{href:"/docs/2.6.2/reference-configuration#broker",children:"Broker Configuration"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"tls-protocol-version-and-cipher",children:"TLS Protocol Version and Cipher"}),"\n",(0,i.jsx)(t.p,{children:"You can configure the broker (and proxy) to require specific TLS protocol versions and ciphers for TLS negiotation. You can use the TLS protocol versions and ciphers to stop clients from requesting downgraded TLS protocol versions or ciphers that may have weaknesses."}),"\n",(0,i.jsx)(t.p,{children:"Both the TLS protocol versions and cipher properties can take multiple values, separated by commas. The possible values for protocol version and ciphers depend on the TLS provider that you are using. Pulsar uses OpenSSL if the OpenSSL is available, but if the OpenSSL is not available, Pulsar defaults back to the JDK implementation."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-properties",children:"\ntlsProtocols=TLSv1.2,TLSv1.1\ntlsCiphers=TLS_DH_RSA_WITH_AES_256_GCM_SHA384,TLS_DH_RSA_WITH_AES_256_CBC_SHA\n\n"})}),"\n",(0,i.jsxs)(t.p,{children:["OpenSSL currently supports ",(0,i.jsx)(t.code,{children:"SSL2"}),", ",(0,i.jsx)(t.code,{children:"SSL3"}),", ",(0,i.jsx)(t.code,{children:"TLSv1"}),", ",(0,i.jsx)(t.code,{children:"TLSv1.1"})," and ",(0,i.jsx)(t.code,{children:"TLSv1.2"})," for the protocol version. You can acquire a list of supported cipher from the openssl ciphers command, i.e. ",(0,i.jsx)(t.code,{children:"openssl ciphers -tls_v2"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"For JDK 8, you can obtain a list of supported values from the documentation:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#SSLContext",children:"TLS protocol"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites",children:"Ciphers"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"proxy-configuration",children:"Proxy Configuration"}),"\n",(0,i.jsx)(t.p,{children:"Proxies need to configure TLS in two directions, for clients connecting to the proxy, and for the proxy connecting to brokers."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-properties",children:"\n# For clients connecting to the proxy\ntlsEnabledInProxy=true\ntlsCertificateFilePath=/path/to/broker.cert.pem\ntlsKeyFilePath=/path/to/broker.key-pk8.pem\ntlsTrustCertsFilePath=/path/to/ca.cert.pem\n\n# For the proxy to connect to brokers\ntlsEnabledWithBroker=true\nbrokerClientTrustCertsFilePath=/path/to/ca.cert.pem\n\n"})}),"\n",(0,i.jsx)(t.h2,{id:"client-configuration",children:"Client configuration"}),"\n",(0,i.jsxs)(t.p,{children:["When you enable the TLS transport encryption, you need to configure the client to use ",(0,i.jsx)(t.code,{children:"https://"})," and port 8443 for the web service URL, and ",(0,i.jsx)(t.code,{children:"pulsar+ssl://"})," and port 6651 for the broker service URL."]}),"\n",(0,i.jsxs)(t.p,{children:["As the server certificate that you generated above does not belong to any of the default trust chains, you also need to either specify the path the ",(0,i.jsx)(t.strong,{children:"trust cert"})," (recommended), or tell the client to allow untrusted server certs."]}),"\n",(0,i.jsx)(t.h3,{id:"hostname-verification",children:"Hostname verification"}),"\n",(0,i.jsx)(t.p,{children:'Hostname verification is a TLS security feature whereby a client can refuse to connect to a server if the "CommonName" does not match the hostname to which the hostname is connecting. By default, Pulsar clients disable hostname verification, as it requires that each broker has a DNS record and a unique cert.'}),"\n",(0,i.jsx)(t.p,{children:'Moreover, as the administrator has full control of the certificate authority, a bad actor is unlikely to be able to pull off a man-in-the-middle attack. "allowInsecureConnection" allows the client to connect to servers whose cert has not been signed by an approved CA. The client disables "allowInsecureConnection" by default, and you should always disable "allowInsecureConnection" in production environments. As long as you disable "allowInsecureConnection", a man-in-the-middle attack requires that the attacker has access to the CA.'}),"\n",(0,i.jsx)(t.p,{children:'One scenario where you may want to enable hostname verification is where you have multiple proxy nodes behind a VIP, and the VIP has a DNS record, for example, pulsar.mycompany.com. In this case, you can generate a TLS cert with pulsar.mycompany.com as the "CommonName," and then enable hostname verification on the client.'}),"\n",(0,i.jsx)(t.p,{children:"The examples below show hostname verification being disabled for the Java client, though you can omit this as the client disables the hostname verification by default. C++/python/Node.js clients do now allow configuring this at the moment."}),"\n",(0,i.jsx)(t.h3,{id:"cli-tools",children:"CLI tools"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/2.6.2/reference-cli-tools",children:"Command-line tools"})," like ",(0,i.jsx)(t.a,{href:"/docs/2.6.2/reference-cli-tools#pulsar-admin",children:(0,i.jsx)(t.code,{children:"pulsar-admin"})}),", ",(0,i.jsx)(t.a,{href:"/docs/2.6.2/reference-cli-tools#pulsar-perf",children:(0,i.jsx)(t.code,{children:"pulsar-perf"})}),", and ",(0,i.jsx)(t.a,{href:"/docs/2.6.2/reference-cli-tools#pulsar-client",children:(0,i.jsx)(t.code,{children:"pulsar-client"})})," use the ",(0,i.jsx)(t.code,{children:"conf/client.conf"})," config file in a Pulsar installation."]}),"\n",(0,i.jsx)(t.p,{children:"You need to add the following parameters to that file to use TLS transport with the CLI tools of Pulsar:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-properties",children:"\nwebServiceUrl=https://broker.example.com:8443/\nbrokerServiceUrl=pulsar+ssl://broker.example.com:6651/\nuseTls=true\ntlsAllowInsecureConnection=false\ntlsTrustCertsFilePath=/path/to/ca.cert.pem\ntlsEnableHostnameVerification=false\n\n"})}),"\n",(0,i.jsx)(t.h4,{id:"java-client",children:"Java client"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'\nimport org.apache.pulsar.client.api.PulsarClient;\n\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar+ssl://broker.example.com:6651/")\n    .enableTls(true)\n    .tlsTrustCertsFilePath("/path/to/ca.cert.pem")\n    .enableTlsHostnameVerification(false) // false by default, in any case\n    .allowTlsInsecureConnection(false) // false by default, in any case\n    .build();\n\n'})}),"\n",(0,i.jsx)(t.h4,{id:"python-client",children:"Python client"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'\nfrom pulsar import Client\n\nclient = Client("pulsar+ssl://broker.example.com:6651/",\n                tls_hostname_verification=True,\n                tls_trust_certs_file_path="/path/to/ca.cert.pem",\n                tls_allow_insecure_connection=False) // defaults to false from v2.2.0 onwards\n\n'})}),"\n",(0,i.jsx)(t.h4,{id:"c-client",children:"C++ client"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c++",children:"\n#include <pulsar/Client.h>\n\nClientConfiguration config = ClientConfiguration();\nconfig.setUseTls(true);  // shouldn't be needed soon\nconfig.setTlsTrustCertsFilePath(caPath);\nconfig.setTlsAllowInsecureConnection(false);\nconfig.setAuth(pulsar::AuthTls::create(clientPublicKeyPath, clientPrivateKeyPath));\nconfig.setValidateHostName(true);\n\n"})}),"\n",(0,i.jsx)(t.h4,{id:"nodejs-client",children:"Node.js client"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-JavaScript",children:"\nconst Pulsar = require('pulsar-client');\n\n(async () => {\n  const client = new Pulsar.Client({\n    serviceUrl: 'pulsar+ssl://broker.example.com:6651/',\n    tlsTrustCertsFilePath: '/path/to/ca.cert.pem',\n  });\n})();\n\n"})}),"\n",(0,i.jsx)(t.h4,{id:"c-client-1",children:"C# client"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c#",children:"\nvar certificate = new X509Certificate2(\"ca.cert.pem\");\nvar client = PulsarClient.Builder()\n                         .TrustedCertificateAuthority(certificate) //If the CA is not trusted on the host, you can add it explicitly.\n                         .VerifyCertificateAuthority(true) //Default is 'true'\n                         .VerifyCertificateName(false)     //Default is 'false'\n                         .Build();\n\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);