"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[70766],{27912:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"functions-runtime","title":"Configure Functions runtime","description":"You can use the following methods to run functions.","source":"@site/versioned_docs/version-2.7.4/functions-runtime.md","sourceDirName":".","slug":"/functions-runtime","permalink":"/docs/2.7.4/functions-runtime","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.4/functions-runtime.md","tags":[],"version":"2.7.4","frontMatter":{"id":"functions-runtime","title":"Configure Functions runtime","sidebar_label":"Setup: Configure Functions runtime","original_id":"functions-runtime"},"sidebar":"docsSidebar","previous":{"title":"Setup: Pulsar Functions Worker","permalink":"/docs/2.7.4/functions-worker"},"next":{"title":"How-to: Develop","permalink":"/docs/2.7.4/functions-develop"}}');var r=t(74848),s=t(28453);const o={id:"functions-runtime",title:"Configure Functions runtime",sidebar_label:"Setup: Configure Functions runtime",original_id:"functions-runtime"},a=void 0,c={},u=[{value:"Configure thread runtime",id:"configure-thread-runtime",level:2},{value:"Configure process runtime",id:"configure-process-runtime",level:2},{value:"Configure Kubernetes runtime",id:"configure-kubernetes-runtime",level:2},{value:"Basic configuration",id:"basic-configuration",level:3},{value:"Run standalone functions worker on Kubernetes",id:"run-standalone-functions-worker-on-kubernetes",level:3},{value:"Run RBAC in Kubernetes clusters",id:"run-rbac-in-kubernetes-clusters",level:3},{value:"Integrate Kubernetes secrets",id:"integrate-kubernetes-secrets",level:3},{value:"Enable token authentication",id:"enable-token-authentication",level:3},{value:"Run clusters with authentication",id:"run-clusters-with-authentication",level:3},{value:"Customize Kubernetes runtime",id:"customize-kubernetes-runtime",level:3},{value:"Run clusters with geo-replication",id:"run-clusters-with-geo-replication",level:2},{value:"Configure standalone functions worker",id:"configure-standalone-functions-worker",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"You can use the following methods to run functions."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Thread"}),": Invoke functions threads in functions worker."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Process"}),": Invoke functions in processes forked by functions worker."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Kubernetes"}),": Submit functions as Kubernetes StatefulSets by functions worker."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Pulsar supports adding labels to the Kubernetes StatefulSets and services while launching functions, which facilitates selecting the target Kubernetes objects."})}),"\n",(0,r.jsx)(n.p,{children:"The differences of the thread and process modes are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Thread mode: when a function runs in thread mode, it runs on the same Java virtual machine (JVM) with functions worker."}),"\n",(0,r.jsx)(n.li,{children:"Process mode: when a function runs in process mode, it runs on the same machine that functions worker runs."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configure-thread-runtime",children:"Configure thread runtime"}),"\n",(0,r.jsxs)(n.p,{children:["It is easy to configure ",(0,r.jsx)(n.em,{children:"Thread"})," runtime. In most cases, you do not need to configure anything. You can customize the thread group name with the following settings:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'\nfunctionRuntimeFactoryClassName: org.apache.pulsar.functions.runtime.thread.ThreadRuntimeFactory\nfunctionRuntimeFactoryConfigs:\n  threadGroupName: "Your Function Container Group"\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Thread"})," runtime is only supported in Java function."]}),"\n",(0,r.jsx)(n.h2,{id:"configure-process-runtime",children:"Configure process runtime"}),"\n",(0,r.jsxs)(n.p,{children:["When you enable ",(0,r.jsx)(n.em,{children:"Process"})," runtime, you do not need to configure anything."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\nfunctionRuntimeFactoryClassName: org.apache.pulsar.functions.runtime.process.ProcessRuntimeFactory\nfunctionRuntimeFactoryConfigs:\n  # the directory for storing the function logs\n  logDirectory:\n  # change the jar location only when you put the java instance jar in a different location\n  javaInstanceJarLocation:\n  # change the python instance location only when you put the python instance jar in a different location\n  pythonInstanceLocation:\n  # change the extra dependencies location:\n  extraFunctionDependenciesDir:\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Process"})," runtime is supported in Java, Python, and Go functions."]}),"\n",(0,r.jsx)(n.h2,{id:"configure-kubernetes-runtime",children:"Configure Kubernetes runtime"}),"\n",(0,r.jsxs)(n.p,{children:["When the functions worker generates Kubernetes manifests and apply the manifests, the Kubernetes runtime works. If you have run functions worker on Kubernetes, you can use the ",(0,r.jsx)(n.code,{children:"serviceAccount"})," associated with the pod that the functions worker is running in. Otherwise, you can configure it to communicate with a Kubernetes cluster."]}),"\n",(0,r.jsxs)(n.p,{children:["The manifests, generated by the functions worker, include a ",(0,r.jsx)(n.code,{children:"StatefulSet"}),", a ",(0,r.jsx)(n.code,{children:"Service"})," (used to communicate with the pods), and a ",(0,r.jsx)(n.code,{children:"Secret"})," for auth credentials (when applicable). The ",(0,r.jsx)(n.code,{children:"StatefulSet"}),' manifest (by default) has a single pod, with the number of replicas determined by the "parallelism" of the function. On pod boot, the pod downloads the function payload (via the functions worker REST API). The pod\'s container image is configurable, but must have the functions runtime.']}),"\n",(0,r.jsx)(n.p,{children:"The Kubernetes runtime supports secrets, so you can create a Kubernetes secret and expose it as an environment variable in the pod. The Kubernetes runtime is extensible, you can implement classes and customize the way how to generate Kubernetes manifests, how to pass auth data to pods, and how to integrate secrets."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["For the rules of translating Pulsar object names into Kubernetes resource labels, see ",(0,r.jsx)(n.a,{href:"/docs/2.7.4/admin-api-overview#how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes",children:"here"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"basic-configuration",children:"Basic configuration"}),"\n",(0,r.jsxs)(n.p,{children:["It is easy to configure Kubernetes runtime. You can just uncomment the settings of ",(0,r.jsx)(n.code,{children:"kubernetesContainerFactory"})," in the ",(0,r.jsx)(n.code,{children:"functions_worker.yaml"})," file. The following is an example."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\nfunctionRuntimeFactoryClassName: org.apache.pulsar.functions.runtime.kubernetes.KubernetesRuntimeFactory\nfunctionRuntimeFactoryConfigs:\n  # uri to kubernetes cluster, leave it to empty and it will use the kubernetes settings in function worker\n  k8Uri:\n  # the kubernetes namespace to run the function instances. it is `default`, if this setting is left to be empty\n  jobNamespace:\n  # the docker image to run function instance. by default it is `apachepulsar/pulsar`\n  pulsarDockerImageName:\n  # the docker image to run function instance according to different configurations provided by users.\n  # By default it is `apachepulsar/pulsar`.\n  # e.g:\n  # functionDockerImages:\n  #   JAVA: JAVA_IMAGE_NAME\n  #   PYTHON: PYTHON_IMAGE_NAME\n  #   GO: GO_IMAGE_NAME\n  functionDockerImages:\n  # the root directory of pulsar home directory in `pulsarDockerImageName`. by default it is `/pulsar`.\n  # if you are using your own built image in `pulsarDockerImageName`, you need to set this setting accordingly\n  pulsarRootDir:\n  # this setting only takes effects if `k8Uri` is set to null. if your function worker is running as a k8 pod,\n  # setting this to true is let function worker to submit functions to the same k8s cluster as function worker\n  # is running. setting this to false if your function worker is not running as a k8 pod.\n  submittingInsidePod: false\n  # setting the pulsar service url that pulsar function should use to connect to pulsar\n  # if it is not set, it will use the pulsar service url configured in worker service\n  pulsarServiceUrl:\n  # setting the pulsar admin url that pulsar function should use to connect to pulsar\n  # if it is not set, it will use the pulsar admin url configured in worker service\n  pulsarAdminUrl:\n  # the custom labels that function worker uses to select the nodes for pods\n  customLabels:\n  # the directory for dropping extra function dependencies\n  # if it is not an absolute path, it is relative to `pulsarRootDir`\n  extraFunctionDependenciesDir:\n  # Additional memory padding added on top of the memory requested by the function per on a per instance basis\n  percentMemoryPadding: 10\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you run functions worker embedded in a broker on Kubernetes, you can use the default settings."}),"\n",(0,r.jsx)(n.h3,{id:"run-standalone-functions-worker-on-kubernetes",children:"Run standalone functions worker on Kubernetes"}),"\n",(0,r.jsxs)(n.p,{children:["If you run functions worker standalone (that is, not embedded) on Kubernetes, you need to configure ",(0,r.jsx)(n.code,{children:"pulsarSerivceUrl"})," to be the URL of the broker and ",(0,r.jsx)(n.code,{children:"pulsarAdminUrl"})," as the URL to the functions worker."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, both Pulsar brokers and Function Workers run in the ",(0,r.jsx)(n.code,{children:"pulsar"})," K8S namespace. The brokers have a service called ",(0,r.jsx)(n.code,{children:"brokers"})," and the functions worker has a service called ",(0,r.jsx)(n.code,{children:"func-worker"}),". The settings are as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\npulsarServiceUrl: pulsar://broker.pulsar:6650 // or pulsar+ssl://broker.pulsar:6651 if using TLS\npulsarAdminUrl: http://func-worker.pulsar:8080 // or https://func-worker:8443 if using TLS\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"run-rbac-in-kubernetes-clusters",children:"Run RBAC in Kubernetes clusters"}),"\n",(0,r.jsx)(n.p,{children:"If you run RBAC in your Kubernetes cluster, make sure that the service account you use for running functions workers (or brokers, if functions workers run along with brokers) have permissions on the following Kubernetes APIs."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"services"}),"\n",(0,r.jsx)(n.li,{children:"configmaps"}),"\n",(0,r.jsx)(n.li,{children:"pods"}),"\n",(0,r.jsx)(n.li,{children:"apps.statefulsets"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The following is sufficient:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\napiVersion: rbac.authorization.k8s.io/v1beta1\nkind: ClusterRole\nmetadata:\n  name: functions-worker\nrules:\n- apiGroups: [\"\"]\n  resources:\n  - services\n  - configmaps\n  - pods\n  verbs:\n  - '*'\n- apiGroups:\n  - apps\n  resources:\n  - statefulsets\n  verbs:\n  - '*'\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: functions-worker\n---\napiVersion: rbac.authorization.k8s.io/v1beta1\nkind: ClusterRoleBinding\nmetadata:\n  name: functions-worker\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: functions-worker\nsubjectsKubernetesSec:\n- kind: ServiceAccount\n  name: functions-worker\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"If the service-account is not properly configured, an error message similar to this is displayed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n22:04:27.696 [Timer-0] ERROR org.apache.pulsar.functions.runtime.KubernetesRuntimeFactory - Error while trying to fetch configmap example-pulsar-4qvmb5gur3c6fc9dih0x1xn8b-function-worker-config at namespace pulsar\nio.kubernetes.client.ApiException: Forbidden\n\tat io.kubernetes.client.ApiClient.handleResponse(ApiClient.java:882) ~[io.kubernetes-client-java-2.0.0.jar:?]\n\tat io.kubernetes.client.ApiClient.execute(ApiClient.java:798) ~[io.kubernetes-client-java-2.0.0.jar:?]\n\tat io.kubernetes.client.apis.CoreV1Api.readNamespacedConfigMapWithHttpInfo(CoreV1Api.java:23673) ~[io.kubernetes-client-java-api-2.0.0.jar:?]\n\tat io.kubernetes.client.apis.CoreV1Api.readNamespacedConfigMap(CoreV1Api.java:23655) ~[io.kubernetes-client-java-api-2.0.0.jar:?]\n\tat org.apache.pulsar.functions.runtime.KubernetesRuntimeFactory.fetchConfigMap(KubernetesRuntimeFactory.java:284) [org.apache.pulsar-pulsar-functions-runtime-2.4.0-42c3bf949.jar:2.4.0-42c3bf949]\n\tat org.apache.pulsar.functions.runtime.KubernetesRuntimeFactory$1.run(KubernetesRuntimeFactory.java:275) [org.apache.pulsar-pulsar-functions-runtime-2.4.0-42c3bf949.jar:2.4.0-42c3bf949]\n\tat java.util.TimerThread.mainLoop(Timer.java:555) [?:1.8.0_212]\n\tat java.util.TimerThread.run(Timer.java:505) [?:1.8.0_212]\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"integrate-kubernetes-secrets",children:"Integrate Kubernetes secrets"}),"\n",(0,r.jsxs)(n.p,{children:["In order to safely distribute secrets, Pulsar Functions can reference Kubernetes secrets. To enable this, set the ",(0,r.jsx)(n.code,{children:"secretsProviderConfiguratorClassName"})," to ",(0,r.jsx)(n.code,{children:"org.apache.pulsar.functions.secretsproviderconfigurator.KubernetesSecretsProviderConfigurator"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You can create a secret in the namespace where your functions are deployed. For example, you deploy functions to the ",(0,r.jsx)(n.code,{children:"pulsar-func"})," Kubernetes namespace, and you have a secret named ",(0,r.jsx)(n.code,{children:"database-creds"})," with a field name ",(0,r.jsx)(n.code,{children:"password"}),", which you want to mount in the pod as an environment variable called ",(0,r.jsx)(n.code,{children:"DATABASE_PASSWORD"}),". The following functions configuration enables you to reference that secret and mount the value as an environment variable in the pod."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Yaml",children:'\ntenant: "mytenant"\nnamespace: "mynamespace"\nname: "myfunction"\ntopicName: "persistent://mytenant/mynamespace/myfuncinput"\nclassName: "com.company.pulsar.myfunction"\n\nsecrets:\n  # the secret will be mounted from the `password` field in the `database-creds` secret as an env var called `DATABASE_PASSWORD`\n  DATABASE_PASSWORD:\n    path: "database-creds"\n    key: "password"\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"enable-token-authentication",children:"Enable token authentication"}),"\n",(0,r.jsx)(n.p,{children:"When you enable authentication for your Pulsar cluster, you need a mechanism for the pod running your function to authenticate with the broker."}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"org.apache.pulsar.functions.auth.KubernetesFunctionAuthProvider"})," interface provides support for any authentication mechanism. The ",(0,r.jsx)(n.code,{children:"functionAuthProviderClassName"})," in ",(0,r.jsx)(n.code,{children:"function-worker.yml"})," is used to specify your path to this implementation."]}),"\n",(0,r.jsx)(n.p,{children:"Pulsar includes an implementation of this interface for token authentication, and distributes the certificate authority via the same implementation. The configuration is similar as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Yaml",children:"\nfunctionAuthProviderClassName: org.apache.pulsar.functions.auth.KubernetesSecretsTokenAuthProvider\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"For token authentication, the functions worker captures the token that is used to deploy (or update) the function. The token is saved as a secret and mounted into the pod."}),"\n",(0,r.jsx)(n.p,{children:"For custom authentication or TLS, you need to implement this interface or use an alternative mechanism to provide authentication. If you use token authentication and TLS encryption to secure the communication with the cluster, Pulsar passes your certificate authority (CA) to the client, so the client obtains what it needs to authenticate the cluster, and trusts the cluster with your signed certificate."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"If you use tokens that expire when deploying functions, these tokens will expire."})}),"\n",(0,r.jsx)(n.h3,{id:"run-clusters-with-authentication",children:"Run clusters with authentication"}),"\n",(0,r.jsx)(n.p,{children:"When you run a functions worker in a standalone process (that is, not embedded in the broker) in a cluster with authentication, you must configure your functions worker to interact with the broker and authenticate incoming requests. So you need to configure properties that the broker requires for authentication or authorization."}),"\n",(0,r.jsxs)(n.p,{children:["For example, if you use token authentication, you need to configure the following properties in the ",(0,r.jsx)(n.code,{children:"function-worker.yml"})," file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Yaml",children:'\nclientAuthenticationPlugin: org.apache.pulsar.client.impl.auth.AuthenticationToken\nclientAuthenticationParameters: file:///etc/pulsar/token/admin-token.txt\nconfigurationStoreServers: zookeeper-cluster:2181 # auth requires a connection to zookeeper\nauthenticationProviders:\n - "org.apache.pulsar.broker.authentication.AuthenticationProviderToken"\nauthorizationEnabled: true\nauthenticationEnabled: true\nsuperUserRoles:\n  - superuser\n  - proxy\nproperties:\n  tokenSecretKey: file:///etc/pulsar/jwt/secret # if using a secret token\n  tokenPublicKey: file:///etc/pulsar/jwt/public.key # if using public/private key tokens\n\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"You must configure both the Function Worker authorization or authentication for the server to authenticate requests and configure the client to be authenticated to communicate with the broker."})}),"\n",(0,r.jsx)(n.h3,{id:"customize-kubernetes-runtime",children:"Customize Kubernetes runtime"}),"\n",(0,r.jsxs)(n.p,{children:["The Kubernetes integration enables you to implement a class and customize how to generate manifests. You can configure it by setting ",(0,r.jsx)(n.code,{children:"runtimeCustomizerClassName"})," in the ",(0,r.jsx)(n.code,{children:"functions-worker.yml"})," file and use the fully qualified class name. You must implement the ",(0,r.jsx)(n.code,{children:"org.apache.pulsar.functions.runtime.kubernetes.KubernetesManifestCustomizer"})," interface."]}),"\n",(0,r.jsxs)(n.p,{children:["The functions (and sinks/sources) API provides a flag, ",(0,r.jsx)(n.code,{children:"customRuntimeOptions"}),", which is passed to this interface."]}),"\n",(0,r.jsxs)(n.p,{children:["To initialize the ",(0,r.jsx)(n.code,{children:"KubernetesManifestCustomizer"}),", you can provide ",(0,r.jsx)(n.code,{children:"runtimeCustomizerConfig"})," in the ",(0,r.jsx)(n.code,{children:"functions-worker.yml"})," file. ",(0,r.jsx)(n.code,{children:"runtimeCustomizerConfig"})," is passed to the ",(0,r.jsx)(n.code,{children:"public void initialize(Map<String, Object> config)"})," function of the interface. ",(0,r.jsx)(n.code,{children:"runtimeCustomizerConfig"}),"is different from the ",(0,r.jsx)(n.code,{children:"customRuntimeOptions"})," as ",(0,r.jsx)(n.code,{children:"runtimeCustomizerConfig"})," is the same across all functions. If you provide both ",(0,r.jsx)(n.code,{children:"runtimeCustomizerConfig"}),"  and ",(0,r.jsx)(n.code,{children:"customRuntimeOptions"}),", you need to decide how to manage these two configurations in your implementation of ",(0,r.jsx)(n.code,{children:"KubernetesManifestCustomizer"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Pulsar includes a built-in implementation. To use the basic implementation, set ",(0,r.jsx)(n.code,{children:"runtimeCustomizerClassName"})," to ",(0,r.jsx)(n.code,{children:"org.apache.pulsar.functions.runtime.kubernetes.BasicKubernetesManifestCustomizer"}),". The built-in implementation initialized with ",(0,r.jsx)(n.code,{children:"runtimeCustomizerConfig"})," enables you to pass a JSON document as ",(0,r.jsx)(n.code,{children:"customRuntimeOptions"})," with certain properties to augment, which decides how the manifests are generated. If both ",(0,r.jsx)(n.code,{children:"runtimeCustomizerConfig"})," and ",(0,r.jsx)(n.code,{children:"customRuntimeOptions"})," are provided, ",(0,r.jsx)(n.code,{children:"BasicKubernetesManifestCustomizer"})," uses ",(0,r.jsx)(n.code,{children:"customRuntimeOptions"})," to override the configuration if there are conflicts in these two configurations."]}),"\n",(0,r.jsxs)(n.p,{children:["Below is an example of ",(0,r.jsx)(n.code,{children:"customRuntimeOptions"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'\n{\n  "jobName": "jobname", // the k8s pod name to run this function instance\n  "jobNamespace": "namespace", // the k8s namespace to run this function in\n  "extractLabels": {           // extra labels to attach to the statefulSet, service, and pods\n    "extraLabel": "value"\n  },\n  "extraAnnotations": {        // extra annotations to attach to the statefulSet, service, and pods\n    "extraAnnotation": "value"\n  },\n  "nodeSelectorLabels": {      // node selector labels to add on to the pod spec\n    "customLabel": "value"\n  },\n  "tolerations": [             // tolerations to add to the pod spec\n    {\n      "key": "custom-key",\n      "value": "value",\n      "effect": "NoSchedule"\n    }\n  ],\n  "resourceRequirements": {  // values for cpu and memory should be defined as described here: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container\n    "requests": {\n      "cpu": 1,\n      "memory": "4G"\n    },\n    "limits": {\n      "cpu": 2,\n      "memory": "8G"\n    }\n  }\n}\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"run-clusters-with-geo-replication",children:"Run clusters with geo-replication"}),"\n",(0,r.jsx)(n.p,{children:"If you run multiple clusters tied together with geo-replication, it is important to use a different function namespace for each cluster. Otherwise, the function shares a namespace and potentially schedule across clusters."}),"\n",(0,r.jsxs)(n.p,{children:["For example, if you have two clusters: ",(0,r.jsx)(n.code,{children:"east-1"})," and ",(0,r.jsx)(n.code,{children:"west-1"}),", you can configure the functions workers for ",(0,r.jsx)(n.code,{children:"east-1"})," and ",(0,r.jsx)(n.code,{children:"west-1"})," perspectively as follows."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Yaml",children:"\npulsarFunctionsCluster: east-1\npulsarFunctionsNamespace: public/functions-east-1\n\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Yaml",children:"\npulsarFunctionsCluster: west-1\npulsarFunctionsNamespace: public/functions-west-1\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"This ensures the two different Functions Workers use distinct sets of topics for their internal coordination."}),"\n",(0,r.jsx)(n.h2,{id:"configure-standalone-functions-worker",children:"Configure standalone functions worker"}),"\n",(0,r.jsx)(n.p,{children:"When configuring a standalone functions worker, you need to configure properties that the broker requires, especially if you use TLS. And then Functions Worker can communicate with the broker."}),"\n",(0,r.jsx)(n.p,{children:"You need to configure the following required properties."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Yaml",children:"\nworkerPort: 8080\nworkerPortTls: 8443 # when using TLS\ntlsCertificateFilePath: /etc/pulsar/tls/tls.crt # when using TLS\ntlsKeyFilePath: /etc/pulsar/tls/tls.key # when using TLS\ntlsTrustCertsFilePath: /etc/pulsar/tls/ca.crt # when using TLS\npulsarServiceUrl: pulsar://broker.pulsar:6650/ # or pulsar+ssl://pulsar-prod-broker.pulsar:6651/ when using TLS\npulsarWebServiceUrl: http://broker.pulsar:8080/ # or https://pulsar-prod-broker.pulsar:8443/ when using TLS\nuseTls: true # when using TLS, critical!\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);