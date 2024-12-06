"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[20115],{32435:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"functions-worker","title":"Deploy and manage functions worker","description":"Before using Pulsar Functions, you need to learn how to set up Pulsar Functions worker and how to configure Functions runtime.","source":"@site/versioned_docs/version-2.7.0/functions-worker.md","sourceDirName":".","slug":"/functions-worker","permalink":"/docs/2.7.0/functions-worker","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.0/functions-worker.md","tags":[],"version":"2.7.0","frontMatter":{"id":"functions-worker","title":"Deploy and manage functions worker","sidebar_label":"Setup: Pulsar Functions Worker","original_id":"functions-worker"},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/docs/2.7.0/functions-overview"},"next":{"title":"Setup: Configure Functions runtime","permalink":"/docs/2.7.0/functions-runtime"}}');var i=r(74848),o=r(28453);const s={id:"functions-worker",title:"Deploy and manage functions worker",sidebar_label:"Setup: Pulsar Functions Worker",original_id:"functions-worker"},c=void 0,l={},a=[{value:"Run Functions-worker with brokers",id:"run-functions-worker-with-brokers",level:2},{value:"Configure Functions-Worker to run with brokers",id:"configure-functions-worker-to-run-with-brokers",level:3},{value:"Configure Stateful-Functions to run with broker",id:"configure-stateful-functions-to-run-with-broker",level:3},{value:"Start Functions-worker with broker",id:"start-functions-worker-with-broker",level:3},{value:"Run Functions-worker separately",id:"run-functions-worker-separately",level:2},{value:"Configure Functions-worker to run separately",id:"configure-functions-worker-to-run-separately",level:3},{value:"Worker parameters",id:"worker-parameters",level:4},{value:"Function package parameter",id:"function-package-parameter",level:4},{value:"Function metadata parameter",id:"function-metadata-parameter",level:4},{value:"Security settings",id:"security-settings",level:4},{value:"Enable TLS transport encryption",id:"enable-tls-transport-encryption",level:5},{value:"Enable Authentication Provider",id:"enable-authentication-provider",level:5},{value:"Enable Authorization Provider",id:"enable-authorization-provider",level:5},{value:"Enable End-to-End Encryption",id:"enable-end-to-end-encryption",level:5},{value:"BookKeeper Authentication",id:"bookkeeper-authentication",level:4},{value:"Start Functions-worker",id:"start-functions-worker",level:3},{value:"Configure Proxies for Functions-workers",id:"configure-proxies-for-functions-workers",level:3},{value:"Compare the Run-with-Broker and Run-separately modes",id:"compare-the-run-with-broker-and-run-separately-modes",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Before using Pulsar Functions, you need to learn how to set up Pulsar Functions worker and how to ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/functions-runtime",children:"configure Functions runtime"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Pulsar ",(0,i.jsx)(n.code,{children:"functions-worker"})," is a logic component to run Pulsar Functions in cluster mode. Two options are available, and you can select either based on your requirements."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#run-functions-worker-with-brokers",children:"run with brokers"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#run-functions-worker-separately",children:"run it separately"})," in a different broker"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"--- Service Urls---"})," lines in the following diagrams represent Pulsar service URLs that Pulsar client and admin use to connect to a Pulsar cluster."]})}),"\n",(0,i.jsx)(n.h2,{id:"run-functions-worker-with-brokers",children:"Run Functions-worker with brokers"}),"\n",(0,i.jsx)(n.p,{children:"The following diagram illustrates the deployment of functions-workers running along with brokers."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"assets/functions-worker-corun.png",src:r(29699).A+"",width:"718",height:"476"})}),"\n",(0,i.jsxs)(n.p,{children:["To enable functions-worker running as part of a broker, you need to set ",(0,i.jsx)(n.code,{children:"functionsWorkerEnabled"})," to ",(0,i.jsx)(n.code,{children:"true"})," in the ",(0,i.jsx)(n.code,{children:"broker.conf"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-conf",children:"\nfunctionsWorkerEnabled=true\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"functionsWorkerEnabled"})," is set to ",(0,i.jsx)(n.code,{children:"true"}),", the functions-worker is started as part of a broker. You need to configure the ",(0,i.jsx)(n.code,{children:"conf/functions_worker.yml"})," file to customize your functions_worker."]}),"\n",(0,i.jsx)(n.p,{children:"Before you run Functions-worker with broker, you have to configure Functions-worker, and then start it with brokers."}),"\n",(0,i.jsx)(n.h3,{id:"configure-functions-worker-to-run-with-brokers",children:"Configure Functions-Worker to run with brokers"}),"\n",(0,i.jsxs)(n.p,{children:["In this mode, most of the settings are already inherited from your broker configuration (for example, configurationStore settings, authentication settings, and so on) since ",(0,i.jsx)(n.code,{children:"functions-worker"})," is running as part of the broker."]}),"\n",(0,i.jsx)(n.p,{children:"Pay attention to the following required settings when configuring functions-worker in this mode."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"numFunctionPackageReplicas"}),": The number of replicas to store function packages. The default value is ",(0,i.jsx)(n.code,{children:"1"}),", which is good for standalone deployment. For production deployment, to ensure high availability, set it to be larger than ",(0,i.jsx)(n.code,{children:"2"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pulsarFunctionsCluster"}),": Set the value to your Pulsar cluster name (same as the ",(0,i.jsx)(n.code,{children:"clusterName"})," setting in the broker configuration)."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If authentication is enabled on the BookKeeper cluster, configure the following BookKeeper authentication settings."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bookkeeperClientAuthenticationPlugin"}),": the BookKeeper client authentication plugin name."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bookkeeperClientAuthenticationParametersName"}),": the BookKeeper client authentication plugin parameters name."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bookkeeperClientAuthenticationParameters"}),": the BookKeeper client authentication plugin parameters."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configure-stateful-functions-to-run-with-broker",children:"Configure Stateful-Functions to run with broker"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to use Stateful-Functions related functions (for example,  ",(0,i.jsx)(n.code,{children:"putState()"})," and ",(0,i.jsx)(n.code,{children:"queryState()"})," related interfaces), follow steps below."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enable the ",(0,i.jsx)(n.strong,{children:"streamStorage"})," service in the BookKeeper."]}),"\n",(0,i.jsxs)(n.p,{children:["Currently, the service uses the NAR package, so you need to set the configuration in ",(0,i.jsx)(n.code,{children:"bookkeeper.conf"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\nextraServerComponents=org.apache.bookkeeper.stream.server.StreamStorageLifecycleComponent\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"After starting bookie, use the following methods to check whether the streamStorage service is started correctly."}),"\n",(0,i.jsx)(n.p,{children:"Input:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\ntelnet localhost 4181\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\nTrying 127.0.0.1...\nConnected to localhost.\nEscape character is '^]'.\n\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Turn on this function in ",(0,i.jsx)(n.code,{children:"functions_worker.yml"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\nstateStorageServiceUrl: bk://<bk-service-url>:4181\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"bk-service-url"})," is the service URL pointing to the BookKeeper table service."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"start-functions-worker-with-broker",children:"Start Functions-worker with broker"}),"\n",(0,i.jsxs)(n.p,{children:["Once you have configured the ",(0,i.jsx)(n.code,{children:"functions_worker.yml"})," file, you can start or restart your broker."]}),"\n",(0,i.jsxs)(n.p,{children:["And then you can use the following command to verify if ",(0,i.jsx)(n.code,{children:"functions-worker"})," is running well."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\ncurl <broker-ip>:8080/admin/v2/worker/cluster\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"After entering the command above, a list of active function workers in the cluster is returned. The output is similar to the following."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'\n[{"workerId":"<worker-id>","workerHostname":"<worker-hostname>","port":8080}]\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"run-functions-worker-separately",children:"Run Functions-worker separately"}),"\n",(0,i.jsxs)(n.p,{children:["This section illustrates how to run ",(0,i.jsx)(n.code,{children:"functions-worker"})," as a separate process in separate machines."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"assets/functions-worker-separated.png",src:r(72239).A+"",width:"1121",height:"667"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In this mode, make sure ",(0,i.jsx)(n.code,{children:"functionsWorkerEnabled"})," is set to ",(0,i.jsx)(n.code,{children:"false"}),", so you won't start ",(0,i.jsx)(n.code,{children:"functions-worker"})," with brokers by mistake."]})}),"\n",(0,i.jsx)(n.h3,{id:"configure-functions-worker-to-run-separately",children:"Configure Functions-worker to run separately"}),"\n",(0,i.jsx)(n.p,{children:"To run function-worker separately, you have to configure the following parameters."}),"\n",(0,i.jsx)(n.h4,{id:"worker-parameters",children:"Worker parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"workerId"}),": The type is string. It is unique across clusters, which is used to identify a worker machine."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"workerHostname"}),": The hostname of the worker machine."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"workerPort"}),": The port that the worker server listens on. Keep it as default if you don't customize it."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"workerPortTls"}),": The TLS port that the worker server listens on. Keep it as default if you don't customize it."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"function-package-parameter",children:"Function package parameter"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"numFunctionPackageReplicas"}),": The number of replicas to store function packages. The default value is ",(0,i.jsx)(n.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"function-metadata-parameter",children:"Function metadata parameter"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pulsarServiceUrl"}),": The Pulsar service URL for your broker cluster."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pulsarWebServiceUrl"}),": The Pulsar web service URL for your broker cluster."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pulsarFunctionsCluster"}),": Set the value to your Pulsar cluster name (same as the ",(0,i.jsx)(n.code,{children:"clusterName"})," setting in the broker configuration)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If authentication is enabled for your broker cluster, you ",(0,i.jsx)(n.em,{children:"should"})," configure the authentication plugin and parameters for the functions worker to communicate with the brokers."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"brokerClientAuthenticationEnabled"}),": Whether to enable the broker client authentication used by function workers to talk to brokers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"clientAuthenticationPlugin"}),": The authentication plugin to be used by the Pulsar client used in worker service."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"clientAuthenticationParameters"}),": The authentication parameter to be used by the Pulsar client used in worker service."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"security-settings",children:"Security settings"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to enable security on functions workers, you ",(0,i.jsx)(n.em,{children:"should"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#enable-tls-transport-encryption",children:"Enable TLS transport encryption"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#enable-authentication-provider",children:"Enable Authentication Provider"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#enable-authorization-provider",children:"Enable Authorization Provider"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#enable-end-to-end-encryption",children:"Enable End-to-End Encryption"})}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"enable-tls-transport-encryption",children:"Enable TLS transport encryption"}),"\n",(0,i.jsx)(n.p,{children:"To enable TLS transport encryption, configure the following settings."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nuseTLS: true\npulsarServiceUrl: pulsar+ssl://localhost:6651/\npulsarWebServiceUrl: https://localhost:8443\n\ntlsEnabled: true\ntlsCertificateFilePath: /path/to/functions-worker.cert.pem\ntlsKeyFilePath:         /path/to/functions-worker.key-pk8.pem\ntlsTrustCertsFilePath:  /path/to/ca.cert.pem\n\n// The path to trusted certificates used by the Pulsar client to authenticate with Pulsar brokers\nbrokerClientTrustCertsFilePath: /path/to/ca.cert.pem\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For details on TLS encryption, refer to ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/security-tls-transport",children:"Transport Encryption using TLS"}),"."]}),"\n",(0,i.jsx)(n.h5,{id:"enable-authentication-provider",children:"Enable Authentication Provider"}),"\n",(0,i.jsx)(n.p,{children:"To enable authentication on Functions Worker, you need to configure the following settings."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Substitute the ",(0,i.jsx)(n.em,{children:"providers list"})," with the providers you want to enable."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nauthenticationEnabled: true\nauthenticationProviders: [ provider1, provider2 ]\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(n.em,{children:"TLS Authentication"})," provider, follow the example below to add the necessary settings.\nSee ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/security-tls-authentication",children:"TLS Authentication"})," for more details."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nbrokerClientAuthenticationPlugin: org.apache.pulsar.client.impl.auth.AuthenticationTls\nbrokerClientAuthenticationParameters: tlsCertFile:/path/to/admin.cert.pem,tlsKeyFile:/path/to/admin.key-pk8.pem\n\nauthenticationEnabled: true\nauthenticationProviders: ['org.apache.pulsar.broker.authentication.AuthenticationProviderTls']\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(n.em,{children:"SASL Authentication"})," provider, add ",(0,i.jsx)(n.code,{children:"saslJaasClientAllowedIds"})," and ",(0,i.jsx)(n.code,{children:"saslJaasBrokerSectionName"}),"\nunder ",(0,i.jsx)(n.code,{children:"properties"})," if needed."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nproperties:\n  saslJaasClientAllowedIds: .*pulsar.*\n  saslJaasBrokerSectionName: Broker\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(n.em,{children:"Token Authentication"})," provider, add necessary settings for ",(0,i.jsx)(n.code,{children:"properties"})," if needed.\nSee ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/security-jwt",children:"Token Authentication"})," for more details."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nproperties:\n  tokenSecretKey:       file://my/secret.key\n  # If using public/private\n  # tokenPublicKey:     file:///path/to/public.key\n\n"})}),"\n",(0,i.jsx)(n.h5,{id:"enable-authorization-provider",children:"Enable Authorization Provider"}),"\n",(0,i.jsxs)(n.p,{children:["To enable authorization on Functions Worker, you need to configure ",(0,i.jsx)(n.code,{children:"authorizationEnabled"}),", ",(0,i.jsx)(n.code,{children:"authorizationProvider"})," and ",(0,i.jsx)(n.code,{children:"configurationStoreServers"}),". The authentication provider connects to ",(0,i.jsx)(n.code,{children:"configurationStoreServers"})," to receive namespace policies."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"\nauthorizationEnabled: true\nauthorizationProvider: org.apache.pulsar.broker.authorization.PulsarAuthorizationProvider\nconfigurationStoreServers: <configuration-store-servers>\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"You should also configure a list of superuser roles. The superuser roles are able to access any admin API. The following is a configuration example."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"\nsuperUserRoles:\n  - role1\n  - role2\n  - role3\n\n"})}),"\n",(0,i.jsx)(n.h5,{id:"enable-end-to-end-encryption",children:"Enable End-to-End Encryption"}),"\n",(0,i.jsx)(n.p,{children:"You can use the public and private key pair that the application configures to perform encryption. Only the consumers with a valid key can decrypt the encrypted messages."}),"\n",(0,i.jsxs)(n.p,{children:["To enable End-to-End encryption on Functions Worker, you can set it by specifying ",(0,i.jsx)(n.code,{children:"--producer-config"})," in the command line terminal, for more information, please refer to ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/security-encryption",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["We include the relevant configuration information of ",(0,i.jsx)(n.code,{children:"CryptoConfig"})," into ",(0,i.jsx)(n.code,{children:"ProducerConfig"}),". The specific configurable field information about ",(0,i.jsx)(n.code,{children:"CryptoConfig"})," is as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\npublic class CryptoConfig {\n    private String cryptoKeyReaderClassName;\n    private Map<String, Object> cryptoKeyReaderConfig;\n\n    private String[] encryptionKeys;\n    private ProducerCryptoFailureAction producerCryptoFailureAction;\n\n    private ConsumerCryptoFailureAction consumerCryptoFailureAction;\n}\n\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"producerCryptoFailureAction"}),": define the action if producer fail to encrypt data one of ",(0,i.jsx)(n.code,{children:"FAIL"}),", ",(0,i.jsx)(n.code,{children:"SEND"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"consumerCryptoFailureAction"}),": define the action if consumer fail to decrypt data one of ",(0,i.jsx)(n.code,{children:"FAIL"}),", ",(0,i.jsx)(n.code,{children:"DISCARD"}),", ",(0,i.jsx)(n.code,{children:"CONSUME"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"bookkeeper-authentication",children:"BookKeeper Authentication"}),"\n",(0,i.jsx)(n.p,{children:"If authentication is enabled on the BookKeeper cluster, you need configure the BookKeeper authentication settings as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bookkeeperClientAuthenticationPlugin"}),": the plugin name of BookKeeper client authentication."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bookkeeperClientAuthenticationParametersName"}),": the plugin parameters name of BookKeeper client authentication."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bookkeeperClientAuthenticationParameters"}),": the plugin parameters of BookKeeper client authentication."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"start-functions-worker",children:"Start Functions-worker"}),"\n",(0,i.jsxs)(n.p,{children:["Once you have finished configuring the ",(0,i.jsx)(n.code,{children:"functions_worker.yml"})," configuration file, you can use the following command to start a ",(0,i.jsx)(n.code,{children:"functions-worker"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar functions-worker\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"configure-proxies-for-functions-workers",children:"Configure Proxies for Functions-workers"}),"\n",(0,i.jsxs)(n.p,{children:["When you are running ",(0,i.jsx)(n.code,{children:"functions-worker"})," in a separate cluster, the admin rest endpoints are split into two clusters. ",(0,i.jsx)(n.code,{children:"functions"}),", ",(0,i.jsx)(n.code,{children:"function-worker"}),", ",(0,i.jsx)(n.code,{children:"source"})," and ",(0,i.jsx)(n.code,{children:"sink"})," endpoints are now served\nby the ",(0,i.jsx)(n.code,{children:"functions-worker"})," cluster, while all the other remaining endpoints are served by the broker cluster.\nHence you need to configure your ",(0,i.jsx)(n.code,{children:"pulsar-admin"})," to use the right service URL accordingly."]}),"\n",(0,i.jsx)(n.p,{children:"In order to address this inconvenience, you can start a proxy cluster for routing the admin rest requests accordingly. Hence you will have one central entry point for your admin service."}),"\n",(0,i.jsxs)(n.p,{children:["If you already have a proxy cluster, continue reading. If you haven't setup a proxy cluster before, you can follow the ",(0,i.jsx)(n.a,{href:"http://pulsar.apache.org/docs/en/administration-proxy/",children:"instructions"})," to\nstart proxies."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"assets/functions-worker-separated.png",src:r(74956).A+"",width:"1079",height:"912"})}),"\n",(0,i.jsxs)(n.p,{children:["To enable routing functions related admin requests to ",(0,i.jsx)(n.code,{children:"functions-worker"})," in a proxy, you can edit the ",(0,i.jsx)(n.code,{children:"proxy.conf"})," file to modify the following settings:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-conf",children:"\nfunctionWorkerWebServiceURL=<pulsar-functions-worker-web-service-url>\nfunctionWorkerWebServiceURLTLS=<pulsar-functions-worker-web-service-url>\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"compare-the-run-with-broker-and-run-separately-modes",children:"Compare the Run-with-Broker and Run-separately modes"}),"\n",(0,i.jsxs)(n.p,{children:["As described above, you can run Function-worker with brokers, or run it separately. And it is more convenient to run functions-workers along with brokers. However, running functions-workers in a separate cluster provides better resource isolation for running functions in ",(0,i.jsx)(n.code,{children:"Process"})," or ",(0,i.jsx)(n.code,{children:"Thread"})," mode."]}),"\n",(0,i.jsx)(n.p,{children:"Use which mode for your cases, refer to the following guidelines to determine."}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"Run-with-Broker"})," mode in the following cases:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["a) if resource isolation is not required when running functions in ",(0,i.jsx)(n.code,{children:"Process"})," or ",(0,i.jsx)(n.code,{children:"Thread"})," mode;"]}),"\n",(0,i.jsx)(n.li,{children:"b) if you configure the functions-worker to run functions on Kubernetes (where the resource isolation problem is addressed by Kubernetes)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"Run-separately"})," mode in the following cases:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"a) you don't have a Kubernetes cluster;"}),"\n",(0,i.jsx)(n.li,{children:"b) if you want to run functions and brokers separately."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Error message: Namespace missing local cluster name in clusters list"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nFailed to get partitioned topic metadata: org.apache.pulsar.client.api.PulsarClientException$BrokerMetadataException: Namespace missing local cluster name in clusters list: local_cluster=xyz ns=public/functions clusters=[standalone]\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"The error message prompts when either of the cases occurs:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["a) a broker is started with ",(0,i.jsx)(n.code,{children:"functionsWorkerEnabled=true"}),", but the ",(0,i.jsx)(n.code,{children:"pulsarFunctionsCluster"})," is not set to the correct cluster in the ",(0,i.jsx)(n.code,{children:"conf/functions_worker.yaml"})," file;"]}),"\n",(0,i.jsxs)(n.li,{children:["b) setting up a geo-replicated Pulsar cluster with ",(0,i.jsx)(n.code,{children:"functionsWorkerEnabled=true"}),", while brokers in one cluster run well, brokers in the other cluster do not work well."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Workaround"})}),"\n",(0,i.jsx)(n.p,{children:"If any of these cases happens, follow the instructions below to fix the problem:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Disable Functions Worker by setting ",(0,i.jsx)(n.code,{children:"functionsWorkerEnabled=false"}),", and restart brokers."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Get the current clusters list of ",(0,i.jsx)(n.code,{children:"public/functions"})," namespace."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar-admin namespaces get-clusters public/functions\n\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Check if the cluster is in the clusters list. If the cluster is not in the list, add it to the list and update the clusters list."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar-admin namespaces set-clusters --clusters <existing-clusters>,<new-cluster> public/functions\n\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["After setting the cluster successfully, enable functions worker by setting ",(0,i.jsx)(n.code,{children:"functionsWorkerEnabled=true"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Set the correct cluster name in ",(0,i.jsx)(n.code,{children:"pulsarFunctionsCluster"})," in the ",(0,i.jsx)(n.code,{children:"conf/functions_worker.yml"})," file, and restart brokers."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},29699:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/functions-worker-corun-1e97464581d9ed837aad294946bd35f6.png"},74956:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/functions-worker-separated-proxy-dbc4927f522e4ed19c925baca826e0cc.png"},72239:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/functions-worker-separated-b484198781204f02277e700746966249.png"},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var t=r(96540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);