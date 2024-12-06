"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[26569],{92195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"security-tls-keystore","title":"Using TLS with KeyStore configure","description":"Overview","source":"@site/versioned_docs/version-2.6.2/security-tls-keystore.md","sourceDirName":".","slug":"/security-tls-keystore","permalink":"/docs/2.6.2/security-tls-keystore","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.2/security-tls-keystore.md","tags":[],"version":"2.6.2","frontMatter":{"id":"security-tls-keystore","title":"Using TLS with KeyStore configure","sidebar_label":"Using TLS with KeyStore configure","original_id":"security-tls-keystore"},"sidebar":"docsSidebar","previous":{"title":"Authentication using TLS","permalink":"/docs/2.6.2/security-tls-authentication"},"next":{"title":"Authentication using JWT","permalink":"/docs/2.6.2/security-jwt"}}');var i=n(74848),s=n(28453);const o={id:"security-tls-keystore",title:"Using TLS with KeyStore configure",sidebar_label:"Using TLS with KeyStore configure",original_id:"security-tls-keystore"},l=void 0,a={},c=[{value:"Overview",id:"overview",level:2},{value:"TLS encryption with KeyStore configure",id:"tls-encryption-with-keystore-configure",level:2},{value:"Generate TLS key and certificate",id:"generate-tls-key-and-certificate",level:3},{value:"Creating your own CA",id:"creating-your-own-ca",level:3},{value:"Signing the certificate",id:"signing-the-certificate",level:3},{value:"Configuring brokers",id:"configuring-brokers",level:3},{value:"Configuring Clients",id:"configuring-clients",level:3},{value:"TLS authentication with KeyStore configure",id:"tls-authentication-with-keystore-configure",level:2},{value:"broker authentication config",id:"broker-authentication-config",level:3},{value:"client authentication configuring",id:"client-authentication-configuring",level:3},{value:"Enabling TLS Logging",id:"enabling-tls-logging",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["Apache Pulsar supports ",(0,i.jsx)(t.a,{href:"/docs/2.6.2/security-tls-transport",children:"TLS encryption"})," and ",(0,i.jsx)(t.a,{href:"/docs/2.6.2/security-tls-authentication",children:"TLS authentication"})," between clients and Apache Pulsar service.\nBy default it uses PEM format file configuration. This page tries to describe use ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Java_KeyStore",children:"KeyStore"})," type configure for TLS."]}),"\n",(0,i.jsx)(t.h2,{id:"tls-encryption-with-keystore-configure",children:"TLS encryption with KeyStore configure"}),"\n",(0,i.jsx)(t.h3,{id:"generate-tls-key-and-certificate",children:"Generate TLS key and certificate"}),"\n",(0,i.jsxs)(t.p,{children:["The first step of deploying TLS is to generate the key and the certificate for each machine in the cluster.\nYou can use Java\u2019s ",(0,i.jsx)(t.code,{children:"keytool"})," utility to accomplish this task. We will generate the key into a temporary keystore\ninitially for broker, so that we can export and sign it later with CA."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"\nkeytool -keystore broker.keystore.jks -alias localhost -validity {validity} -genkeypair -keyalg RSA\n\n"})}),"\n",(0,i.jsx)(t.p,{children:"You need to specify two parameters in the above command:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"keystore"}),": the keystore file that stores the certificate. The ",(0,i.jsx)(t.em,{children:"keystore"})," file contains the private key of\nthe certificate; hence, it needs to be kept safely."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"validity"}),": the valid time of the certificate in days."]}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Ensure that common name (CN) matches exactly with the fully qualified domain name (FQDN) of the server.\nThe client compares the CN with the DNS domain name to ensure that it is indeed connecting to the desired server, not a malicious one."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"creating-your-own-ca",children:"Creating your own CA"}),"\n",(0,i.jsx)(t.p,{children:"After the first step, each broker in the cluster has a public-private key pair, and a certificate to identify the machine.\nThe certificate, however, is unsigned, which means that an attacker can create such a certificate to pretend to be any machine."}),"\n",(0,i.jsxs)(t.p,{children:["Therefore, it is important to prevent forged certificates by signing them for each machine in the cluster.\nA ",(0,i.jsx)(t.code,{children:"certificate authority (CA)"})," is responsible for signing certificates. CA works likes a government that issues passports \u2014\nthe government stamps (signs) each passport so that the passport becomes difficult to forge. Other governments verify the stamps\nto ensure the passport is authentic. Similarly, the CA signs the certificates, and the cryptography guarantees that a signed\ncertificate is computationally difficult to forge. Thus, as long as the CA is a genuine and trusted authority, the clients have\nhigh assurance that they are connecting to the authentic machines."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"\nopenssl req -new -x509 -keyout ca-key -out ca-cert -days 365\n\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The generated CA is simply a ",(0,i.jsx)(t.em,{children:"public-private"})," key pair and certificate, and it is intended to sign other certificates."]}),"\n",(0,i.jsx)(t.p,{children:"The next step is to add the generated CA to the clients' truststore so that the clients can trust this CA:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"\nkeytool -keystore client.truststore.jks -alias CARoot -import -file ca-cert\n\n"})}),"\n",(0,i.jsxs)(t.p,{children:["NOTE: If you configure the brokers to require client authentication by setting ",(0,i.jsx)(t.code,{children:"tlsRequireTrustedClientCertOnConnect"})," to ",(0,i.jsx)(t.code,{children:"true"})," on the\nbroker configuration, then you must also provide a truststore for the brokers and it should have all the CA certificates that clients keys were signed by."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"\nkeytool -keystore broker.truststore.jks -alias CARoot -import -file ca-cert\n\n"})}),"\n",(0,i.jsx)(t.p,{children:"In contrast to the keystore, which stores each machine\u2019s own identity, the truststore of a client stores all the certificates\nthat the client should trust. Importing a certificate into one\u2019s truststore also means trusting all certificates that are signed\nby that certificate. As the analogy above, trusting the government (CA) also means trusting all passports (certificates) that\nit has issued. This attribute is called the chain of trust, and it is particularly useful when deploying TLS on a large BookKeeper cluster.\nYou can sign all certificates in the cluster with a single CA, and have all machines share the same truststore that trusts the CA.\nThat way all machines can authenticate all other machines."}),"\n",(0,i.jsx)(t.h3,{id:"signing-the-certificate",children:"Signing the certificate"}),"\n",(0,i.jsx)(t.p,{children:"The next step is to sign all certificates in the keystore with the CA we generated. First, you need to export the certificate from the keystore:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"\nkeytool -keystore broker.keystore.jks -alias localhost -certreq -file cert-file\n\n"})}),"\n",(0,i.jsx)(t.p,{children:"Then sign it with the CA:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"\nopenssl x509 -req -CA ca-cert -CAkey ca-key -in cert-file -out cert-signed -days {validity} -CAcreateserial -passin pass:{ca-password}\n\n"})}),"\n",(0,i.jsx)(t.p,{children:"Finally, you need to import both the certificate of the CA and the signed certificate into the keystore:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"\nkeytool -keystore broker.keystore.jks -alias CARoot -import -file ca-cert\nkeytool -keystore broker.keystore.jks -alias localhost -import -file cert-signed\n\n"})}),"\n",(0,i.jsx)(t.p,{children:"The definitions of the parameters are the following:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"keystore"}),": the location of the keystore"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ca-cert"}),": the certificate of the CA"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ca-key"}),": the private key of the CA"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ca-password"}),": the passphrase of the CA"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"cert-file"}),": the exported, unsigned certificate of the broker"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"cert-signed"}),": the signed certificate of the broker"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"configuring-brokers",children:"Configuring brokers"}),"\n",(0,i.jsxs)(t.p,{children:["Brokers enable TLS by provide valid ",(0,i.jsx)(t.code,{children:"brokerServicePortTls"})," and ",(0,i.jsx)(t.code,{children:"webServicePortTls"}),", and also need set ",(0,i.jsx)(t.code,{children:"tlsEnabledWithKeyStore"})," to ",(0,i.jsx)(t.code,{children:"true"})," for using KeyStore type configuration.\nBesides this, KeyStore path,  KeyStore password, TrustStore path, and TrustStore password need to provided.\nAnd since broker will create internal client/admin client to communicate with other brokers, user also need to provide config for them, this is similar to how user config the outside client/admin-client.\nIf ",(0,i.jsx)(t.code,{children:"tlsRequireTrustedClientCertOnConnect"})," is ",(0,i.jsx)(t.code,{children:"true"}),", broker will reject the Connection if the Client Certificate is not trusted."]}),"\n",(0,i.jsx)(t.p,{children:"The following TLS configs are needed on the broker side:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-properties",children:"\ntlsEnabledWithKeyStore=true\n# key store\ntlsKeyStoreType=JKS\ntlsKeyStore=/var/private/tls/broker.keystore.jks\ntlsKeyStorePassword=brokerpw\n\n# trust store\ntlsTrustStoreType=JKS\ntlsTrustStore=/var/private/tls/broker.truststore.jks\ntlsTrustStorePassword=brokerpw\n\n# internal client/admin-client config\nbrokerClientTlsEnabled=true\nbrokerClientTlsEnabledWithKeyStore=true\nbrokerClientTlsTrustStoreType=JKS\nbrokerClientTlsTrustStore=/var/private/tls/client.truststore.jks\nbrokerClientTlsTrustStorePassword=clientpw\n\n"})}),"\n",(0,i.jsx)(t.p,{children:"NOTE: it is important to restrict access to the store files via filesystem permissions."}),"\n",(0,i.jsx)(t.p,{children:"Optional settings that may worth consider:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"tlsClientAuthentication=false: Enable/Disable using TLS for authentication. This config when enabled will authenticate the other end\nof the communication channel. It should be enabled on both brokers and clients for mutual TLS."}),"\n",(0,i.jsxs)(t.li,{children:["tlsCiphers=[TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256], A cipher suite is a named combination of authentication, encryption, MAC and key exchange\nalgorithm used to negotiate the security settings for a network connection using TLS network protocol. By default,\nit is null. ",(0,i.jsx)(t.a,{href:"https://www.openssl.org/docs/man1.0.2/apps/ciphers.html",children:"OpenSSL Ciphers"}),"\n",(0,i.jsx)(t.a,{href:"http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites",children:"JDK Ciphers"})]}),"\n",(0,i.jsx)(t.li,{children:"tlsProtocols=[TLSv1.2,TLSv1.1,TLSv1] (list out the TLS protocols that you are going to accept from clients).\nBy default, it is not set."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"configuring-clients",children:"Configuring Clients"}),"\n",(0,i.jsx)(t.p,{children:"This is similar to [TLS encryption configuing for client with PEM type](security-tls-transport.md#Client configuration).\nFor a a minimal configuration, user need to provide the TrustStore information."}),"\n",(0,i.jsx)(t.p,{children:"e.g."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["for ",(0,i.jsx)(t.a,{href:"/docs/2.6.2/reference-cli-tools",children:"Command-line tools"})," like ",(0,i.jsx)(t.a,{href:"reference-cli-tools#pulsar-admin",children:(0,i.jsx)(t.code,{children:"pulsar-admin"})}),", ",(0,i.jsx)(t.a,{href:"reference-cli-tools#pulsar-perf",children:(0,i.jsx)(t.code,{children:"pulsar-perf"})}),", and ",(0,i.jsx)(t.a,{href:"reference-cli-tools#pulsar-client",children:(0,i.jsx)(t.code,{children:"pulsar-client"})})," use the ",(0,i.jsx)(t.code,{children:"conf/client.conf"})," config file in a Pulsar installation."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-properties",children:"\nwebServiceUrl=https://broker.example.com:8443/\nbrokerServiceUrl=pulsar+ssl://broker.example.com:6651/\nuseKeyStoreTls=true\ntlsTrustStoreType=JKS\ntlsTrustStorePath=/var/private/tls/client.truststore.jks\ntlsTrustStorePassword=clientpw\n\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"for java client"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'\nimport org.apache.pulsar.client.api.PulsarClient;\n\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar+ssl://broker.example.com:6651/")\n    .enableTls(true)\n    .useKeyStoreTls(true)\n    .tlsTrustStorePath("/var/private/tls/client.truststore.jks")\n    .tlsTrustStorePassword("clientpw")\n    .allowTlsInsecureConnection(false)\n    .build();\n\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"for java admin client"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'\n    PulsarAdmin amdin = PulsarAdmin.builder().serviceHttpUrl("https://broker.example.com:8443")\n                .useKeyStoreTls(true)\n                .tlsTrustStorePath("/var/private/tls/client.truststore.jks")\n                .tlsTrustStorePassword("clientpw")\n                .allowTlsInsecureConnection(false)\n                .build();\n\n'})}),"\n",(0,i.jsx)(t.h2,{id:"tls-authentication-with-keystore-configure",children:"TLS authentication with KeyStore configure"}),"\n",(0,i.jsxs)(t.p,{children:["This similar to ",(0,i.jsx)(t.a,{href:"/docs/2.6.2/security-tls-authentication",children:"TLS authentication with PEM type"})]}),"\n",(0,i.jsx)(t.h3,{id:"broker-authentication-config",children:"broker authentication config"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"broker.conf"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-properties",children:"\n# Configuration to enable authentication\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderTls\n\n# this should be the CN for one of client keystore.\nsuperUserRoles=admin\n\n# Enable KeyStore type\ntlsEnabledWithKeyStore=true\nrequireTrustedClientCertOnConnect=true\n\n# key store\ntlsKeyStoreType=JKS\ntlsKeyStore=/var/private/tls/broker.keystore.jks\ntlsKeyStorePassword=brokerpw\n\n# trust store\ntlsTrustStoreType=JKS\ntlsTrustStore=/var/private/tls/broker.truststore.jks\ntlsTrustStorePassword=brokerpw\n\n# internal client/admin-client config\nbrokerClientTlsEnabled=true\nbrokerClientTlsEnabledWithKeyStore=true\nbrokerClientTlsTrustStoreType=JKS\nbrokerClientTlsTrustStore=/var/private/tls/client.truststore.jks\nbrokerClientTlsTrustStorePassword=clientpw\n# internal auth config\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls\nbrokerClientAuthenticationParameters=keyStoreType:JKS,keyStorePath:/var/private/tls/client.keystore.jks,keyStorePassword:clientpw\n# currently websocket not support keystore type\nwebSocketServiceEnabled=false\n\n"})}),"\n",(0,i.jsx)(t.h3,{id:"client-authentication-configuring",children:"client authentication configuring"}),"\n",(0,i.jsx)(t.p,{children:"Besides the TLS encryption configuring. The main work is configuring the KeyStore, which contains a valid CN as client role, for client."}),"\n",(0,i.jsx)(t.p,{children:"e.g."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["for ",(0,i.jsx)(t.a,{href:"/docs/2.6.2/reference-cli-tools",children:"Command-line tools"})," like ",(0,i.jsx)(t.a,{href:"reference-cli-tools#pulsar-admin",children:(0,i.jsx)(t.code,{children:"pulsar-admin"})}),", ",(0,i.jsx)(t.a,{href:"reference-cli-tools#pulsar-perf",children:(0,i.jsx)(t.code,{children:"pulsar-perf"})}),", and ",(0,i.jsx)(t.a,{href:"reference-cli-tools#pulsar-client",children:(0,i.jsx)(t.code,{children:"pulsar-client"})})," use the ",(0,i.jsx)(t.code,{children:"conf/client.conf"})," config file in a Pulsar installation."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-properties",children:'\nwebServiceUrl=https://broker.example.com:8443/\nbrokerServiceUrl=pulsar+ssl://broker.example.com:6651/\nuseKeyStoreTls=true\ntlsTrustStoreType=JKS\ntlsTrustStorePath=/var/private/tls/client.truststore.jks\ntlsTrustStorePassword=clientpw\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls\nauthParams={"keyStoreType":"JKS","keyStorePath":"/path/to/keystorefile","keyStorePassword":"keystorepw"}\n\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"for java client"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'\nimport org.apache.pulsar.client.api.PulsarClient;\n\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar+ssl://broker.example.com:6651/")\n    .enableTls(true)\n    .useKeyStoreTls(true)\n    .tlsTrustStorePath("/var/private/tls/client.truststore.jks")\n    .tlsTrustStorePassword("clientpw")\n    .allowTlsInsecureConnection(false)\n    .authentication(\n            "org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls",\n            "keyStoreType:JKS,keyStorePath:/var/private/tls/client.keystore.jks,keyStorePassword:clientpw")\n    .build();\n\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"for java admin client"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'\n    PulsarAdmin amdin = PulsarAdmin.builder().serviceHttpUrl("https://broker.example.com:8443")\n        .useKeyStoreTls(true)\n        .tlsTrustStorePath("/var/private/tls/client.truststore.jks")\n        .tlsTrustStorePassword("clientpw")\n        .allowTlsInsecureConnection(false)\n        .authentication(\n               "org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls",\n               "keyStoreType:JKS,keyStorePath:/var/private/tls/client.keystore.jks,keyStorePassword:clientpw")\n        .build();\n\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"enabling-tls-logging",children:"Enabling TLS Logging"}),"\n",(0,i.jsxs)(t.p,{children:["You can enable TLS debug logging at the JVM level by starting the brokers and/or clients with ",(0,i.jsx)(t.code,{children:"javax.net.debug"})," system property. For example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"\n-Djavax.net.debug=all\n\n"})}),"\n",(0,i.jsxs)(t.p,{children:["You can find more details on this in ",(0,i.jsx)(t.a,{href:"http://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/ReadDebug.html",children:"Oracle documentation"})," on ",(0,i.jsx)(t.a,{href:"http://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/ReadDebug.html",children:"debugging SSL/TLS connections"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);