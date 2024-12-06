"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[87678],{54477:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"security-kerberos","title":"Authentication using Kerberos","description":"Kerberos is a network authentication protocol. By using secret-key cryptography, Kerberos is designed to provide strong authentication for client applications and server applications.","source":"@site/versioned_docs/version-2.5.2/security-kerberos.md","sourceDirName":".","slug":"/security-kerberos","permalink":"/docs/2.5.2/security-kerberos","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.2/security-kerberos.md","tags":[],"version":"2.5.2","frontMatter":{"id":"security-kerberos","title":"Authentication using Kerberos","sidebar_label":"Authentication using Kerberos"},"sidebar":"docsSidebar","previous":{"title":"Authentication using Athenz","permalink":"/docs/2.5.2/security-athenz"},"next":{"title":"Authorization and ACLs","permalink":"/docs/2.5.2/security-authorization"}}');var o=r(74848),t=r(28453);const a={id:"security-kerberos",title:"Authentication using Kerberos",sidebar_label:"Authentication using Kerberos"},s=void 0,c={},l=[{value:"Configuration for Kerberos between Client and Broker",id:"configuration-for-kerberos-between-client-and-broker",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Kerberos principals",id:"kerberos-principals",level:4},{value:"Configure how to connect to KDC",id:"configure-how-to-connect-to-kdc",level:4},{value:"JAAS configuration file",id:"jaas-configuration-file",level:4},{value:"Kerberos configuration for Brokers",id:"kerberos-configuration-for-brokers",level:3},{value:"Configure the <code>broker.conf</code> file",id:"configure-the-brokerconf-file",level:4},{value:"Set Broker JVM parameter",id:"set-broker-jvm-parameter",level:4},{value:"Kerberos configuration for clients",id:"kerberos-configuration-for-clients",level:3},{value:"Java Client and Java Admin Client",id:"java-client-and-java-admin-client",level:4},{value:"Configure CLI tools",id:"configure-cli-tools",level:4},{value:"Kerberos configuration for working with Pulsar Proxy",id:"kerberos-configuration-for-working-with-pulsar-proxy",level:2},{value:"Create principal for Pulsar Proxy in Kerberos",id:"create-principal-for-pulsar-proxy-in-kerberos",level:3},{value:"Add a section in JAAS configuration file for Pulsar Proxy",id:"add-a-section-in-jaas-configuration-file-for-pulsar-proxy",level:3},{value:"Proxy client configuration",id:"proxy-client-configuration",level:3},{value:"Kerberos configuration for Pulsar proxy service",id:"kerberos-configuration-for-pulsar-proxy-service",level:3},{value:"Broker side configuration.",id:"broker-side-configuration",level:3},{value:"Regarding authorization and role token",id:"regarding-authorization-and-role-token",level:2},{value:"Regarding authentication between ZooKeeper and Broker",id:"regarding-authentication-between-zookeeper-and-broker",level:2},{value:"Regarding authentication between BookKeeper and Broker",id:"regarding-authentication-between-bookkeeper-and-broker",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://web.mit.edu/kerberos/",children:"Kerberos"})," is a network authentication protocol. By using secret-key cryptography, ",(0,o.jsx)(n.a,{href:"https://web.mit.edu/kerberos/",children:"Kerberos"})," is designed to provide strong authentication for client applications and server applications."]}),"\n",(0,o.jsxs)(n.p,{children:["In Pulsar, you can use Kerberos with ",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Simple_Authentication_and_Security_Layer",children:"SASL"})," as a choice for authentication. And Pulsar uses the ",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Java_Authentication_and_Authorization_Service",children:"Java Authentication and Authorization Service (JAAS)"})," for SASL configuration. You need to provide JAAS configurations for Kerberos authentication."]}),"\n",(0,o.jsxs)(n.p,{children:["This document introduces how to configure ",(0,o.jsx)(n.code,{children:"Kerberos"})," with ",(0,o.jsx)(n.code,{children:"SASL"})," between Pulsar clients and brokers and how to configure Kerberos for Pulsar proxy in detail."]}),"\n",(0,o.jsx)(n.h2,{id:"configuration-for-kerberos-between-client-and-broker",children:"Configuration for Kerberos between Client and Broker"}),"\n",(0,o.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.p,{children:["To begin, you need to set up (or already have) a ",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Key_distribution_center",children:"Key Distribution Center(KDC)"}),". Also you need to configure and run the ",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Key_distribution_center",children:"Key Distribution Center(KDC)"}),"in advance."]}),"\n",(0,o.jsxs)(n.p,{children:["If your organization already uses a Kerberos server (for example, by using ",(0,o.jsx)(n.code,{children:"Active Directory"}),"), you do not have to install a new server for Pulsar. If your organization does not use a Kerberos server, you need to install one. Your Linux vendor might have packages for ",(0,o.jsx)(n.code,{children:"Kerberos"}),". On how to install and configure Kerberos, refer to ",(0,o.jsx)(n.a,{href:"https://help.ubuntu.com/community/Kerberos",children:"Ubuntu"}),",\n",(0,o.jsx)(n.a,{href:"https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Managing_Smart_Cards/installing-kerberos.html",children:"Redhat"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Note that if you use Oracle Java, you need to download JCE policy files for your Java version and copy them to the ",(0,o.jsx)(n.code,{children:"$JAVA_HOME/jre/lib/security"})," directory."]}),"\n",(0,o.jsx)(n.h4,{id:"kerberos-principals",children:"Kerberos principals"}),"\n",(0,o.jsx)(n.p,{children:"If you use the existing Kerberos system, ask your Kerberos administrator for a principal for each Brokers in your cluster and for every operating system user that accesses Pulsar with Kerberos authentication(via clients and tools)."}),"\n",(0,o.jsx)(n.p,{children:"If you have installed your own Kerberos system, you can create these principals with the following commands:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"\n### add Principals for broker\nsudo /usr/sbin/kadmin.local -q 'addprinc -randkey broker/{hostname}@{REALM}'\nsudo /usr/sbin/kadmin.local -q \"ktadd -k /etc/security/keytabs/{broker-keytabname}.keytab broker/{hostname}@{REALM}\"\n### add Principals for client\nsudo /usr/sbin/kadmin.local -q 'addprinc -randkey client/{hostname}@{REALM}'\nsudo /usr/sbin/kadmin.local -q \"ktadd -k /etc/security/keytabs/{client-keytabname}.keytab client/{hostname}@{REALM}\"\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note that ",(0,o.jsx)(n.em,{children:"Kerberos"})," requires that all your hosts can be resolved with their FQDNs."]}),"\n",(0,o.jsxs)(n.p,{children:["The first part of Broker principal (for example, ",(0,o.jsx)(n.code,{children:"broker"})," in ",(0,o.jsx)(n.code,{children:"broker/{hostname}@{REALM}"}),") is the ",(0,o.jsx)(n.code,{children:"serverType"})," of each host. The suggested values of ",(0,o.jsx)(n.code,{children:"serverType"})," are ",(0,o.jsx)(n.code,{children:"broker"})," (host machine runs service Pulsar Broker) and ",(0,o.jsx)(n.code,{children:"proxy"})," (host machine runs service Pulsar Proxy)."]}),"\n",(0,o.jsx)(n.h4,{id:"configure-how-to-connect-to-kdc",children:"Configure how to connect to KDC"}),"\n",(0,o.jsxs)(n.p,{children:["You need to enter the command below to specify the path to the ",(0,o.jsx)(n.code,{children:"krb5.conf"})," file for the client side and the broker side. The content of ",(0,o.jsx)(n.code,{children:"krb5.conf"})," file indicates the default Realm and KDC information. See ",(0,o.jsx)(n.a,{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/KerberosReq.html",children:"JDK\u2019s Kerberos Requirements"})," for more details."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"\n-Djava.security.krb5.conf=/etc/pulsar/krb5.conf\n\n"})}),"\n",(0,o.jsx)(n.p,{children:"Here is an example of the krb5.conf file:"}),"\n",(0,o.jsxs)(n.p,{children:["In the configuration file, ",(0,o.jsx)(n.code,{children:"EXAMPLE.COM"})," is the default realm; ",(0,o.jsx)(n.code,{children:"kdc = localhost:62037"})," is the kdc server url for realm ",(0,o.jsx)(n.code,{children:"EXAMPLE.COM "}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\n[libdefaults]\n default_realm = EXAMPLE.COM\n\n[realms]\n EXAMPLE.COM  = {\n  kdc = localhost:62037\n }\n\n"})}),"\n",(0,o.jsx)(n.p,{children:"Usually machines configured with kerberos already have a system wide configuration and this configuration is optional."}),"\n",(0,o.jsx)(n.h4,{id:"jaas-configuration-file",children:"JAAS configuration file"}),"\n",(0,o.jsxs)(n.p,{children:["You need JAAS configuration file for the client side and the broker side. JAAS configuration file provides the section of information that is used to connect KDC. Here is an example named ",(0,o.jsx)(n.code,{children:"pulsar_jaas.conf"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'\n PulsarBroker {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarbroker.keytab"\n   principal="broker/localhost@EXAMPLE.COM";\n};\n\n PulsarClient {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarclient.keytab"\n   principal="client/localhost@EXAMPLE.COM";\n};\n\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You need to set the ",(0,o.jsx)(n.code,{children:"JAAS"})," configuration file path as JVM parameter for client and broker. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"\n    -Djava.security.auth.login.config=/etc/pulsar/pulsar_jaas.conf\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"pulsar_jaas.conf"})," file above"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"PulsarBroker"})," is a section name in the JAAS file that each broker uses. This section tells the broker to use which principal inside Kerberos and the location of the keytab where the principal is stored. ",(0,o.jsx)(n.code,{children:"PulsarBroker"})," allows the broker to use the keytab specified in this section."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"PulsarClient"})," is a section name in the JASS file that each broker uses. This section tells the client to use which principal inside Kerberos and the location of the keytab where the principal is stored. ",(0,o.jsx)(n.code,{children:"PulsarClient"})," allows the client to use the keytab specified in this section.\nThe following example also reuses this ",(0,o.jsx)(n.code,{children:"PulsarClient"})," section in both the Pulsar internal admin configuration and in CLI command of ",(0,o.jsx)(n.code,{children:"bin/pulsar-client"}),", ",(0,o.jsx)(n.code,{children:"bin/pulsar-perf"})," and ",(0,o.jsx)(n.code,{children:"bin/pulsar-admin"}),". You can also add different sections for different use cases."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"You can have 2 separate JAAS configuration files:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["the file for a broker that has sections of both ",(0,o.jsx)(n.code,{children:"PulsarBroker"})," and ",(0,o.jsx)(n.code,{children:"PulsarClient"}),";"]}),"\n",(0,o.jsxs)(n.li,{children:["the file for a client that only has a ",(0,o.jsx)(n.code,{children:"PulsarClient"})," section."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"kerberos-configuration-for-brokers",children:"Kerberos configuration for Brokers"}),"\n",(0,o.jsxs)(n.h4,{id:"configure-the-brokerconf-file",children:["Configure the ",(0,o.jsx)(n.code,{children:"broker.conf"})," file"]}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"broker.conf"})," file, set Kerberos related configurations."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Set ",(0,o.jsx)(n.code,{children:"authenticationEnabled"})," to ",(0,o.jsx)(n.code,{children:"true"}),";"]}),"\n",(0,o.jsxs)(n.li,{children:["Set ",(0,o.jsx)(n.code,{children:"authenticationProviders"})," to choose ",(0,o.jsx)(n.code,{children:"AuthenticationProviderSasl"}),";"]}),"\n",(0,o.jsxs)(n.li,{children:["Set ",(0,o.jsx)(n.code,{children:"saslJaasClientAllowedIds"})," regex for principal that is allowed to connect to broker;"]}),"\n",(0,o.jsxs)(n.li,{children:["Set ",(0,o.jsx)(n.code,{children:"saslJaasServerSectionName"})," that corresponds to the section in JAAS configuration file for broker;"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["To make Pulsar internal admin client work properly, you need to set the configuration in the ",(0,o.jsx)(n.code,{children:"broker.conf"})," file as below:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Set ",(0,o.jsx)(n.code,{children:"brokerClientAuthenticationPlugin"})," to client plugin ",(0,o.jsx)(n.code,{children:"AuthenticationSasl"}),";"]}),"\n",(0,o.jsxs)(n.li,{children:["Set ",(0,o.jsx)(n.code,{children:"brokerClientAuthenticationParameters"})," to value in JSON string ",(0,o.jsx)(n.code,{children:'{"saslJaasClientSectionName":"PulsarClient", "serverType":"broker"}'}),", in which ",(0,o.jsx)(n.code,{children:"PulsarClient"})," is the section name in the ",(0,o.jsx)(n.code,{children:"pulsar_jaas.conf"})," file, and ",(0,o.jsx)(n.code,{children:'"serverType":"broker"'})," indicates that the internal admin client connects to a Pulsar Broker;"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Here is an example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderSasl\nsaslJaasClientAllowedIds=.*client.*\nsaslJaasServerSectionName=PulsarBroker\n\n## Authentication settings of the broker itself. Used when the broker connects to other brokers\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationSasl\nbrokerClientAuthenticationParameters={"saslJaasClientSectionName":"PulsarClient", "serverType":"broker"}\n\n'})}),"\n",(0,o.jsx)(n.h4,{id:"set-broker-jvm-parameter",children:"Set Broker JVM parameter"}),"\n",(0,o.jsx)(n.p,{children:"Set JVM parameters for JAAS configuration file and krb5 configuration file with additional options."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"\n   -Djava.security.auth.login.config=/etc/pulsar/pulsar_jaas.conf -Djava.security.krb5.conf=/etc/pulsar/krb5.conf\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can add this at the end of ",(0,o.jsx)(n.code,{children:"PULSAR_EXTRA_OPTS"})," in the file ",(0,o.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/conf/pulsar_env.sh",children:(0,o.jsx)(n.code,{children:"pulsar_env.sh"})})]}),"\n",(0,o.jsxs)(n.p,{children:["You must ensure that the operating system user who starts broker can reach the keytabs configured in the ",(0,o.jsx)(n.code,{children:"pulsar_jaas.conf"})," file and kdc server in the ",(0,o.jsx)(n.code,{children:"krb5.conf"})," file."]}),"\n",(0,o.jsx)(n.h3,{id:"kerberos-configuration-for-clients",children:"Kerberos configuration for clients"}),"\n",(0,o.jsx)(n.h4,{id:"java-client-and-java-admin-client",children:"Java Client and Java Admin Client"}),"\n",(0,o.jsxs)(n.p,{children:["In client application, include ",(0,o.jsx)(n.code,{children:"pulsar-client-auth-sasl"})," in your project dependency."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\n    <dependency>\n      <groupId>org.apache.pulsar</groupId>\n      <artifactId>pulsar-client-auth-sasl</artifactId>\n      <version>${pulsar.version}</version>\n    </dependency>\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Configure the authentication type to use ",(0,o.jsx)(n.code,{children:"AuthenticationSasl"}),", and also provide the authentication parameters to it."]}),"\n",(0,o.jsx)(n.p,{children:"You need 2 parameters:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"saslJaasClientSectionName"}),". This parameter corresponds to the section in JAAS configuration file for client;"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"serverType"}),". This parameter stands for whether this client connects to broker or proxy. And client uses this parameter to know which server side principal should be used."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["When you authenticate between client and broker with the setting in above JAAS configuration file, we need to set ",(0,o.jsx)(n.code,{children:"saslJaasClientSectionName"})," to ",(0,o.jsx)(n.code,{children:"PulsarClient"})," and set ",(0,o.jsx)(n.code,{children:"serverType"})," to ",(0,o.jsx)(n.code,{children:"broker"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The following is an example of creating a Java client:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'\nSystem.setProperty("java.security.auth.login.config", "/etc/pulsar/pulsar_jaas.conf");\nSystem.setProperty("java.security.krb5.conf", "/etc/pulsar/krb5.conf");\n\nMap<String, String> authParams = Maps.newHashMap();\nauthParams.put("saslJaasClientSectionName", "PulsarClient");\nauthParams.put("serverType", "broker");\n\nAuthentication saslAuth = AuthenticationFactory\n        .create(org.apache.pulsar.client.impl.auth.AuthenticationSasl.class.getName(), authParams);\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://my-broker.com:6650")\n        .authentication(saslAuth)\n        .build();\n\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The first two lines in the example above are hard coded, alternatively, you can set additional JVM parameters for JAAS and krb5 configuration file when you run the application like below:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\njava -cp -Djava.security.auth.login.config=/etc/pulsar/pulsar_jaas.conf -Djava.security.krb5.conf=/etc/pulsar/krb5.conf $APP-jar-with-dependencies.jar $CLASSNAME\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You must ensure that the operating system user who starts pulsar client can reach the keytabs configured in the ",(0,o.jsx)(n.code,{children:"pulsar_jaas.conf"})," file and kdc server in the ",(0,o.jsx)(n.code,{children:"krb5.conf"})," file."]}),"\n",(0,o.jsx)(n.h4,{id:"configure-cli-tools",children:"Configure CLI tools"}),"\n",(0,o.jsxs)(n.p,{children:["If you use a command-line tool (such as ",(0,o.jsx)(n.code,{children:"bin/pulsar-client"}),", ",(0,o.jsx)(n.code,{children:"bin/pulsar-perf"})," and ",(0,o.jsx)(n.code,{children:"bin/pulsar-admin"}),"), you need to perform the following steps:"]}),"\n",(0,o.jsxs)(n.p,{children:["Step 1. Enter the command below to configure your ",(0,o.jsx)(n.code,{children:"client.conf"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationSasl\nauthParams={"saslJaasClientSectionName":"PulsarClient", "serverType":"broker"}\n\n'})}),"\n",(0,o.jsx)(n.p,{children:"Step 2. Enter the command below to set JVM parameters for JAAS configuration file and krb5 configuration file with additional options."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"\n   -Djava.security.auth.login.config=/etc/pulsar/pulsar_jaas.conf -Djava.security.krb5.conf=/etc/pulsar/krb5.conf\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can add this at the end of ",(0,o.jsx)(n.code,{children:"PULSAR_EXTRA_OPTS"})," in the file ",(0,o.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/conf/pulsar_tools_env.sh",children:(0,o.jsx)(n.code,{children:"pulsar_tools_env.sh"})}),",\nor add this line ",(0,o.jsx)(n.code,{children:'OPTS="$OPTS -Djava.security.auth.login.config=/etc/pulsar/pulsar_jaas.conf -Djava.security.krb5.conf=/etc/pulsar/krb5.conf "'})," directly to the CLI tool script."]}),"\n",(0,o.jsx)(n.p,{children:"The meaning of configurations is the same as the meaning of configurations in Java client section."}),"\n",(0,o.jsx)(n.h2,{id:"kerberos-configuration-for-working-with-pulsar-proxy",children:"Kerberos configuration for working with Pulsar Proxy"}),"\n",(0,o.jsx)(n.p,{children:"With the above configuration, client and broker can do authentication using Kerberos."}),"\n",(0,o.jsx)(n.p,{children:"A client that connects to Pulsar Proxy is a little different. Pulsar Proxy (as a SASL Server in Kerberos) authenticates Client (as a SASL client in Kerberos) first; and then Pulsar broker authenticates Pulsar Proxy."}),"\n",(0,o.jsx)(n.p,{children:"Now in comparison with the above configuration between client and broker, we show you how to configure Pulsar Proxy as follows."}),"\n",(0,o.jsx)(n.h3,{id:"create-principal-for-pulsar-proxy-in-kerberos",children:"Create principal for Pulsar Proxy in Kerberos"}),"\n",(0,o.jsx)(n.p,{children:"You need to add new principals for Pulsar Proxy comparing with the above configuration. If you already have principals for client and broker, you only need to add the proxy principal here."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"\n### add Principals for Pulsar Proxy\nsudo /usr/sbin/kadmin.local -q 'addprinc -randkey proxy/{hostname}@{REALM}'\nsudo /usr/sbin/kadmin.local -q \"ktadd -k /etc/security/keytabs/{proxy-keytabname}.keytab proxy/{hostname}@{REALM}\"\n### add Principals for broker\nsudo /usr/sbin/kadmin.local -q 'addprinc -randkey broker/{hostname}@{REALM}'\nsudo /usr/sbin/kadmin.local -q \"ktadd -k /etc/security/keytabs/{broker-keytabname}.keytab broker/{hostname}@{REALM}\"\n### add Principals for client\nsudo /usr/sbin/kadmin.local -q 'addprinc -randkey client/{hostname}@{REALM}'\nsudo /usr/sbin/kadmin.local -q \"ktadd -k /etc/security/keytabs/{client-keytabname}.keytab client/{hostname}@{REALM}\"\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"add-a-section-in-jaas-configuration-file-for-pulsar-proxy",children:"Add a section in JAAS configuration file for Pulsar Proxy"}),"\n",(0,o.jsx)(n.p,{children:"In comparison with the above configuration, add a new section for Pulsar Proxy in JAAS configuration file."}),"\n",(0,o.jsxs)(n.p,{children:["Here is an example named ",(0,o.jsx)(n.code,{children:"pulsar_jaas.conf"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'\n PulsarBroker {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarbroker.keytab"\n   principal="broker/localhost@EXAMPLE.COM";\n};\n\n PulsarProxy {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarproxy.keytab"\n   principal="proxy/localhost@EXAMPLE.COM";\n};\n\n PulsarClient {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarclient.keytab"\n   principal="client/localhost@EXAMPLE.COM";\n};\n\n'})}),"\n",(0,o.jsx)(n.h3,{id:"proxy-client-configuration",children:"Proxy client configuration"}),"\n",(0,o.jsxs)(n.p,{children:["Pulsar client configuration is similar with client and broker configuration, except that you need to set ",(0,o.jsx)(n.code,{children:"serverType"})," to ",(0,o.jsx)(n.code,{children:"proxy"})," instead of ",(0,o.jsx)(n.code,{children:"broker"}),", for the reason that you need to do the Kerberos authentication between client and proxy."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'\nSystem.setProperty("java.security.auth.login.config", "/etc/pulsar/pulsar_jaas.conf");\nSystem.setProperty("java.security.krb5.conf", "/etc/pulsar/krb5.conf");\n\nMap<String, String> authParams = Maps.newHashMap();\nauthParams.put("saslJaasClientSectionName", "PulsarClient");\nauthParams.put("serverType", "proxy");        // ** here is the different **\n\nAuthentication saslAuth = AuthenticationFactory\n        .create(org.apache.pulsar.client.impl.auth.AuthenticationSasl.class.getName(), authParams);\n\nPulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://my-broker.com:6650")\n        .authentication(saslAuth)\n        .build();\n\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The first two lines in the example above are hard coded, alternatively, you can set additional JVM parameters for JAAS and krb5 configuration file when you run the application like below:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\njava -cp -Djava.security.auth.login.config=/etc/pulsar/pulsar_jaas.conf -Djava.security.krb5.conf=/etc/pulsar/krb5.conf $APP-jar-with-dependencies.jar $CLASSNAME\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"kerberos-configuration-for-pulsar-proxy-service",children:"Kerberos configuration for Pulsar proxy service"}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"proxy.conf"})," file, set Kerberos related configuration. Here is an example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'\n## related to authenticate client.\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderSasl\nsaslJaasClientAllowedIds=.*client.*\nsaslJaasServerSectionName=PulsarProxy\n\n## related to be authenticated by broker\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationSasl\nbrokerClientAuthenticationParameters={"saslJaasClientSectionName":"PulsarProxy", "serverType":"broker"}\nforwardAuthorizationCredentials=true\n\n'})}),"\n",(0,o.jsx)(n.p,{children:"The first part relates to authenticating between client and Pulsar Proxy. In this phase, client works as SASL client, while Pulsar Proxy works as SASL server."}),"\n",(0,o.jsx)(n.p,{children:"The second part relates to authenticating between Pulsar Proxy and Pulsar Broker. In this phase, Pulsar Proxy works as SASL client, while Pulsar Broker works as SASL server."}),"\n",(0,o.jsx)(n.h3,{id:"broker-side-configuration",children:"Broker side configuration."}),"\n",(0,o.jsxs)(n.p,{children:["The broker side configuration file is the same with the above ",(0,o.jsx)(n.code,{children:"broker.conf"}),", you do not need special configuration for Pulsar Proxy."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderSasl\nsaslJaasClientAllowedIds=.*client.*\nsaslJaasServerSectionName=PulsarBroker\n\n"})}),"\n",(0,o.jsx)(n.h2,{id:"regarding-authorization-and-role-token",children:"Regarding authorization and role token"}),"\n",(0,o.jsxs)(n.p,{children:["For Kerberos authentication, we usually use the authenticated principal as the role token for Pulsar authorization. For more information of authorization in Pulsar, see ",(0,o.jsx)(n.a,{href:"/docs/2.5.2/security-authorization",children:"security authorization"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If you enable 'authorizationEnabled', you need to set ",(0,o.jsx)(n.code,{children:"superUserRoles"})," in ",(0,o.jsx)(n.code,{children:"broker.conf"})," that corresponds to the name registered in kdc."]}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"\nsuperUserRoles=client/{clientIp}@EXAMPLE.COM\n\n"})}),"\n",(0,o.jsx)(n.h2,{id:"regarding-authentication-between-zookeeper-and-broker",children:"Regarding authentication between ZooKeeper and Broker"}),"\n",(0,o.jsxs)(n.p,{children:["Pulsar Broker acts as a Kerberos client when you authenticate with Zookeeper. According to ",(0,o.jsx)(n.a,{href:"https://cwiki.apache.org/confluence/display/ZOOKEEPER/Client-Server+mutual+authentication",children:"ZooKeeper document"}),", you need these settings in ",(0,o.jsx)(n.code,{children:"conf/zookeeper.conf"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\nauthProvider.1=org.apache.zookeeper.server.auth.SASLAuthenticationProvider\nrequireClientAuthScheme=sasl\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Enter the following commands to add a section of ",(0,o.jsx)(n.code,{children:"Client"})," configurations in the file ",(0,o.jsx)(n.code,{children:"pulsar_jaas.conf"}),", which Pulsar Broker uses:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'\n Client {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarbroker.keytab"\n   principal="broker/localhost@EXAMPLE.COM";\n};\n\n'})}),"\n",(0,o.jsx)(n.p,{children:"In this setting, the principal of Pulsar Broker and keyTab file indicates the role of Broker when you authenticate with ZooKeeper."}),"\n",(0,o.jsx)(n.h2,{id:"regarding-authentication-between-bookkeeper-and-broker",children:"Regarding authentication between BookKeeper and Broker"}),"\n",(0,o.jsxs)(n.p,{children:["Pulsar Broker acts as a Kerberos client when you authenticate with Bookie. According to ",(0,o.jsx)(n.a,{href:"https://bookkeeper.apache.org/docs/next/security/sasl/",children:"BookKeeper document"}),", you need to add ",(0,o.jsx)(n.code,{children:"bookkeeperClientAuthenticationPlugin"})," parameter in ",(0,o.jsx)(n.code,{children:"broker.conf"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\nbookkeeperClientAuthenticationPlugin=org.apache.bookkeeper.sasl.SASLClientProviderFactory\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In this setting, ",(0,o.jsx)(n.code,{children:"SASLClientProviderFactory"})," creates a BookKeeper SASL client in a Broker, and the Broker uses the created SASL client to authenticate with a Bookie node."]}),"\n",(0,o.jsxs)(n.p,{children:["Enter the following commands to add a section of ",(0,o.jsx)(n.code,{children:"BookKeeper"})," configurations in the ",(0,o.jsx)(n.code,{children:"pulsar_jaas.conf"})," that Pulsar Broker uses:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'\n BookKeeper {\n   com.sun.security.auth.module.Krb5LoginModule required\n   useKeyTab=true\n   storeKey=true\n   useTicketCache=false\n   keyTab="/etc/security/keytabs/pulsarbroker.keytab"\n   principal="broker/localhost@EXAMPLE.COM";\n};\n\n'})}),"\n",(0,o.jsx)(n.p,{children:"In this setting, the principal of Pulsar Broker and keyTab file indicates the role of Broker when you authenticate with Bookie."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>s});var i=r(96540);const o={},t=i.createContext(o);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);