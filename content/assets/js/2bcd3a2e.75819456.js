"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[44801],{66234:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"functions-runtime","title":"Configure Functions runtime","description":"Pulsar Functions support the following methods to run functions.","source":"@site/versioned_docs/version-2.6.2/functions-runtime.md","sourceDirName":".","slug":"/functions-runtime","permalink":"/docs/2.6.2/functions-runtime","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.2/functions-runtime.md","tags":[],"version":"2.6.2","frontMatter":{"id":"functions-runtime","title":"Configure Functions runtime","sidebar_label":"Setup: Configure Functions runtime","original_id":"functions-runtime"},"sidebar":"docsSidebar","previous":{"title":"Setup: Pulsar Functions Worker","permalink":"/docs/2.6.2/functions-worker"},"next":{"title":"How-to: Develop","permalink":"/docs/2.6.2/functions-develop"}}');var s=t(74848),r=t(28453);const o={id:"functions-runtime",title:"Configure Functions runtime",sidebar_label:"Setup: Configure Functions runtime",original_id:"functions-runtime"},a=void 0,u={},c=[{value:"Note",id:"note",level:4},{value:"Configure thread runtime",id:"configure-thread-runtime",level:2},{value:"Configure process runtime",id:"configure-process-runtime",level:2},{value:"Configure Kubernetes runtime",id:"configure-kubernetes-runtime",level:2},{value:"Kubernetes CustomRuntimeOptions",id:"kubernetes-customruntimeoptions",level:3}];function l(e){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Pulsar Functions support the following methods to run functions."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Thread"}),": Invoke functions in threads in Functions Worker."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Process"}),": Invoke functions in processes forked by Functions Worker."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Kubernetes"}),": Submit functions as Kubernetes StatefulSets by Functions Worker."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"note",children:"Note"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Pulsar supports adding labels to the Kubernetes StatefulSets and services while launching functions, which facilitates selecting the target Kubernetes objects."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The differences of the thread and process modes are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Thread mode: when a function runs in thread mode, it runs on the same Java virtual machine (JVM) with Functions worker."}),"\n",(0,s.jsx)(n.li,{children:"Process mode: when a function runs in process mode, it runs on the same machine that Functions worker runs."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configure-thread-runtime",children:"Configure thread runtime"}),"\n",(0,s.jsxs)(n.p,{children:["It is easy to configure ",(0,s.jsx)(n.em,{children:"Thread"})," runtime. In most cases, you do not need to configure anything. You can customize the thread group name with the following settings:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'\nfunctionRuntimeFactoryClassName: org.apache.pulsar.functions.runtime.thread.ThreadRuntimeFactory\nfunctionRuntimeFactoryConfigs:\n  threadGroupName: "Your Function Container Group"\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Thread"})," runtime is only supported in Java function."]}),"\n",(0,s.jsx)(n.h2,{id:"configure-process-runtime",children:"Configure process runtime"}),"\n",(0,s.jsxs)(n.p,{children:["When you enable ",(0,s.jsx)(n.em,{children:"Process"})," runtime, you do not need to configure anything."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"\nfunctionRuntimeFactoryClassName: org.apache.pulsar.functions.runtime.process.ProcessRuntimeFactory\nfunctionRuntimeFactoryConfigs:\n  # the directory for storing the function logs\n  logDirectory:\n  # change the jar location only when you put the java instance jar in a different location\n  javaInstanceJarLocation:\n  # change the python instance location only when you put the python instance jar in a different location\n  pythonInstanceLocation:\n  # change the extra dependencies location:\n  extraFunctionDependenciesDir:\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Process"})," runtime is supported in Java, Python, and Go functions."]}),"\n",(0,s.jsx)(n.h2,{id:"configure-kubernetes-runtime",children:"Configure Kubernetes runtime"}),"\n",(0,s.jsxs)(n.p,{children:["It is easy to configure Kubernetes runtime. You can just uncomment the settings of ",(0,s.jsx)(n.code,{children:"kubernetesContainerFactory"})," in the ",(0,s.jsx)(n.code,{children:"functions_worker.yaml"})," file. The following is an example."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"\nfunctionRuntimeFactoryClassName: org.apache.pulsar.functions.runtime.kubernetes.KubernetesRuntimeFactory\nfunctionRuntimeFactoryConfigs:\n  # uri to kubernetes cluster, leave it to empty and it will use the kubernetes settings in function worker\n  k8Uri:\n  # the kubernetes namespace to run the function instances. it is `default`, if this setting is left to be empty\n  jobNamespace:\n  # the docker image to run function instance. by default it is `apachepulsar/pulsar`\n  pulsarDockerImageName:\n  # the root directory of pulsar home directory in `pulsarDockerImageName`. by default it is `/pulsar`.\n  # if you are using your own built image in `pulsarDockerImageName`, you need to set this setting accordingly\n  pulsarRootDir:\n  # this setting only takes effects if `k8Uri` is set to null. if your function worker is running as a k8 pod,\n  # setting this to true is let function worker to submit functions to the same k8s cluster as function worker\n  # is running. setting this to false if your function worker is not running as a k8 pod.\n  submittingInsidePod: false\n  # setting the pulsar service url that pulsar function should use to connect to pulsar\n  # if it is not set, it will use the pulsar service url configured in worker service\n  pulsarServiceUrl:\n  # setting the pulsar admin url that pulsar function should use to connect to pulsar\n  # if it is not set, it will use the pulsar admin url configured in worker service\n  pulsarAdminUrl:\n  # the custom labels that function worker uses to select the nodes for pods\n  customLabels:\n  # the directory for dropping extra function dependencies\n  # if it is not an absolute path, it is relative to `pulsarRootDir`\n  extraFunctionDependenciesDir:\n  # Additional memory padding added on top of the memory requested by the function per on a per instance basis\n  percentMemoryPadding: 10\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you have already run a Pulsar cluster on Kubernetes, you can keep the settings unchanged at most of time."}),"\n",(0,s.jsx)(n.p,{children:"However, if you enable RBAC on deploying your Pulsar cluster, make sure the service account you use for\nrunning Functions Workers (or brokers, if Functions Workers run along with brokers) have permissions on the following\nkubernetes APIs."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"services"}),"\n",(0,s.jsx)(n.li,{children:"configmaps"}),"\n",(0,s.jsx)(n.li,{children:"pods"}),"\n",(0,s.jsx)(n.li,{children:"apps.statefulsets"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Otherwise, you will not be able to create any functions. The following is an example of error message."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\n22:04:27.696 [Timer-0] ERROR org.apache.pulsar.functions.runtime.KubernetesRuntimeFactory - Error while trying to fetch configmap example-pulsar-4qvmb5gur3c6fc9dih0x1xn8b-function-worker-config at namespace pulsar\nio.kubernetes.client.ApiException: Forbidden\n\tat io.kubernetes.client.ApiClient.handleResponse(ApiClient.java:882) ~[io.kubernetes-client-java-2.0.0.jar:?]\n\tat io.kubernetes.client.ApiClient.execute(ApiClient.java:798) ~[io.kubernetes-client-java-2.0.0.jar:?]\n\tat io.kubernetes.client.apis.CoreV1Api.readNamespacedConfigMapWithHttpInfo(CoreV1Api.java:23673) ~[io.kubernetes-client-java-api-2.0.0.jar:?]\n\tat io.kubernetes.client.apis.CoreV1Api.readNamespacedConfigMap(CoreV1Api.java:23655) ~[io.kubernetes-client-java-api-2.0.0.jar:?]\n\tat org.apache.pulsar.functions.runtime.KubernetesRuntimeFactory.fetchConfigMap(KubernetesRuntimeFactory.java:284) [org.apache.pulsar-pulsar-functions-runtime-2.4.0-42c3bf949.jar:2.4.0-42c3bf949]\n\tat org.apache.pulsar.functions.runtime.KubernetesRuntimeFactory$1.run(KubernetesRuntimeFactory.java:275) [org.apache.pulsar-pulsar-functions-runtime-2.4.0-42c3bf949.jar:2.4.0-42c3bf949]\n\tat java.util.TimerThread.mainLoop(Timer.java:555) [?:1.8.0_212]\n\tat java.util.TimerThread.run(Timer.java:505) [?:1.8.0_212]\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If this happens, you need to grant the required permissions to the service account used for running Functions Workers. An example to grant permissions is shown below: a service account ",(0,s.jsx)(n.code,{children:"functions-worker"})," is granted with permissions to access Kubernetes resources ",(0,s.jsx)(n.code,{children:"services"}),", ",(0,s.jsx)(n.code,{children:"configmaps"}),", ",(0,s.jsx)(n.code,{children:"pods"})," and ",(0,s.jsx)(n.code,{children:"apps.statefulsets"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"\napiVersion: rbac.authorization.k8s.io/v1beta1\nkind: ClusterRole\nmetadata:\n  name: functions-worker\nrules:\n- apiGroups: [\"\"]\n  resources:\n  - services\n  - configmaps\n  - pods\n  verbs:\n  - '*'\n- apiGroups:\n  - apps\n  resources:\n  - statefulsets\n  verbs:\n  - '*'\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: functions-worker\n---\napiVersion: rbac.authorization.k8s.io/v1beta1\nkind: ClusterRoleBinding\nmetadata:\n  name: functions-worker\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: functions-worker\nsubjects:\n- kind: ServiceAccount\n  name: functions-worker\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"kubernetes-customruntimeoptions",children:"Kubernetes CustomRuntimeOptions"}),"\n",(0,s.jsxs)(n.p,{children:["The functions (and sinks/sources) API provides a flag, ",(0,s.jsx)(n.code,{children:"customRuntimeOptions"})," which can be used to pass options to the runtime to customize how the runtime operates."]}),"\n",(0,s.jsxs)(n.p,{children:["In the case of case of kubernetes, this is passed to an instance of the ",(0,s.jsx)(n.code,{children:"org.apache.pulsar.functions.runtime.kubernetes.KubernetesManifestCustomizer"}),". This interface can be overridden\nand allows for a high degree of customization over how the K8S manifests are generated. The interface is injected by passing the class name to the ",(0,s.jsx)(n.code,{children:"runtimeCustomizerClassName"})," in the ",(0,s.jsx)(n.code,{children:"functions-worker.yaml"})]}),"\n",(0,s.jsxs)(n.p,{children:["To use the basic implementation, set ",(0,s.jsx)(n.code,{children:"org.apache.pulsar.functions.runtime.kubernetes.BasicKubernetesManifestCustomizer"}),"\nfor the ",(0,s.jsx)(n.code,{children:"runtimeCustomerClassName"})," property. This implementation takes the following ",(0,s.jsx)(n.code,{children:"customRuntimeOptions"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Json",children:'\n{\n  "jobNamespace": "namespace", // the k8s namespace to run this function in\n  "extractLabels": {           // extra labels to attach to the statefulSet, service, and pods\n    "extraLabel": "value"\n  },\n  "extraAnnotations": {        // extra annotations to attach to the statefulSet, service, and pods\n    "extraAnnotation": "value"\n  },\n  "nodeSelectorLabels": {      // node selector labels to add on to the pod spec\n    "customLabel": "value"\n  },\n  "tolerations": [             // tolerations to add to the pod spec\n    {\n      "key": "custom-key",\n      "value": "value",\n      "effect": "NoSchedule"\n    }\n  ],\n  "resourceRequirements": {  // values for cpu and memory should be defined as described here: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container\n    "requests": {\n      "cpu": 1,\n      "memory": "4G"\n    },\n    "limits": {\n      "cpu": 2,\n      "memory": "8G"\n    }\n  }\n}\n\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);