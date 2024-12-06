"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[94438],{23279:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"functions-runtime-kubernetes","title":"Configure Kubernetes runtime","description":"The Kubernetes runtime works when a function worker generates and applies Kubernetes manifests. The manifests generated by a function worker include:","source":"@site/versioned_docs/version-3.0.x/functions-runtime-kubernetes.md","sourceDirName":".","slug":"/functions-runtime-kubernetes","permalink":"/docs/3.0.x/functions-runtime-kubernetes","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/functions-runtime-kubernetes.md","tags":[],"version":"3.0.x","frontMatter":{"id":"functions-runtime-kubernetes","title":"Configure Kubernetes runtime","sidebar_label":"Configure Kubernetes runtime"},"sidebar":"docsSidebar","previous":{"title":"Configure process runtime","permalink":"/docs/3.0.x/functions-runtime-process"},"next":{"title":"Customize Java runtime options","permalink":"/docs/3.0.x/functions-runtime-java-options"}}');var i=t(74848),r=t(28453);const o={id:"functions-runtime-kubernetes",title:"Configure Kubernetes runtime",sidebar_label:"Configure Kubernetes runtime"},a=void 0,c={},u=[{value:"Configure basic settings",id:"configure-basic-settings",level:3},{value:"Integrate Kubernetes secrets",id:"integrate-kubernetes-secrets",level:3},{value:"Enable token authentication",id:"enable-token-authentication",level:3},{value:"Enable Kubernetes service account token projection for function pod authentication",id:"enable-kubernetes-service-account-token-projection-for-function-pod-authentication",level:3},{value:"Customize Kubernetes runtime",id:"customize-kubernetes-runtime",level:3},{value:"How to define Pulsar resource names when running Pulsar in Kubernetes",id:"how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The Kubernetes runtime works when a function worker generates and applies Kubernetes manifests. The manifests generated by a function worker include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["a ",(0,i.jsx)(n.code,{children:"StatefulSet"}),"\nBy default, the ",(0,i.jsx)(n.code,{children:"StatefulSet"})," manifest has a single pod with a number of replicas. The number is determined by the ",(0,i.jsx)(n.a,{href:"/docs/3.0.x/functions-deploy-cluster-parallelism",children:"parallelism"})," of the function. The pod downloads the function payload (via the function worker REST API) on pod boot. The pod's container image is configurable if the function runtime is configured."]}),"\n",(0,i.jsxs)(n.li,{children:["a ",(0,i.jsx)(n.code,{children:"Service"})," (used to communicate with the pod)"]}),"\n",(0,i.jsxs)(n.li,{children:["a ",(0,i.jsx)(n.code,{children:"Secret"})," for authenticating credentials (when applicable).\nThe Kubernetes runtime supports secrets. You can create a Kubernetes secret and expose it as an environment variable in the pod."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["For the rules of translating Pulsar object names into Kubernetes resource labels, see ",(0,i.jsx)(n.a,{href:"/docs/3.0.x/admin-api-overview#how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes",children:"instructions"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"configure-basic-settings",children:"Configure basic settings"}),"\n",(0,i.jsxs)(n.p,{children:["To quickly configure a Kubernetes runtime, you can use the default settings of ",(0,i.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/runtime/src/main/java/org/apache/pulsar/functions/runtime/kubernetes/KubernetesRuntimeFactoryConfig.java",children:(0,i.jsx)(n.code,{children:"KubernetesRuntimeFactoryConfig"})})," in the ",(0,i.jsx)(n.code,{children:"conf/functions_worker.yml"})," file."]}),"\n",(0,i.jsxs)(n.p,{children:["If you have [set up a Pulsar cluster on Kubernetes using ",(0,i.jsx)(n.a,{href:"/docs/3.0.x/helm-install",children:"Helm chart"}),", which means function workers have also been set up on Kubernetes, you can use the ",(0,i.jsx)(n.code,{children:"serviceAccount"})," associated with the pod where the function worker is running. Otherwise, you can configure function workers to communicate with a Kubernetes cluster by setting ",(0,i.jsx)(n.code,{children:"functionRuntimeFactoryConfigs"})," to ",(0,i.jsx)(n.code,{children:"k8Uri"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"integrate-kubernetes-secrets",children:"Integrate Kubernetes secrets"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/secret/",children:"Secret"})," in Kubernetes is an object that holds some confidential data such as a password, a token, or a key. When you create a secret in the Kubernetes namespace where your functions are deployed, functions can safely reference and distribute it. To enable this feature, set ",(0,i.jsx)(n.code,{children:"secretsProviderConfiguratorClassName"})," to ",(0,i.jsx)(n.code,{children:"org.apache.pulsar.functions.secretsproviderconfigurator.KubernetesSecretsProviderConfigurator"})," in the ",(0,i.jsx)(n.code,{children:"conf/functions-worker.yml"})," file."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, you ",(0,i.jsx)(n.a,{href:"/docs/3.0.x/functions-deploy",children:"deploy a function"})," to the ",(0,i.jsx)(n.code,{children:"pulsar-func"})," Kubernetes namespace, and you have a secret named ",(0,i.jsx)(n.code,{children:"database-creds"})," with a field name ",(0,i.jsx)(n.code,{children:"password"}),", which you want to mount in the pod as an environment variable named ",(0,i.jsx)(n.code,{children:"DATABASE_PASSWORD"}),". The following configurations enable functions to reference the secret and mount the value as an environment variable in the pod."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'tenant: "mytenant"\nnamespace: "mynamespace"\nname: "myfunction"\ninputs: [ "persistent://mytenant/mynamespace/myfuncinput" ]\nclassName: "com.company.pulsar.myfunction"\n\nsecrets:\n  # the secret will be mounted from the `password` field in the `database-creds` secret as an env var called `DATABASE_PASSWORD`\n  DATABASE_PASSWORD:\n    path: "database-creds"\n    key: "password"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"enable-token-authentication",children:"Enable token authentication"}),"\n",(0,i.jsx)(n.p,{children:"When you use token authentication, TLS encryption, or custom authentications to secure the communication with your Pulsar cluster, Pulsar passes your certificate authority (CA) to the client, so the client can authenticate the cluster with your signed certificate."}),"\n",(0,i.jsxs)(n.p,{children:["To enable the authentication for your Pulsar cluster, you need to specify a mechanism for the pod running your function to authenticate the broker, by implementing the ",(0,i.jsx)(n.code,{children:"org.apache.pulsar.functions.auth.KubernetesFunctionAuthProvider"})," interface."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For token authentication, Pulsar includes an implementation of the above interface to distribute the CA. The function worker captures the token that deploys (or updates) the function, saves it as a secret, and mounts it into the pod."}),"\n",(0,i.jsxs)(n.p,{children:["The configuration in the ",(0,i.jsx)(n.code,{children:"conf/function-worker.yml"})," file is as follows. ",(0,i.jsx)(n.code,{children:"functionAuthProviderClassName"})," is used to specify the path to this implementation."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"functionAuthProviderClassName: org.apache.pulsar.functions.auth.KubernetesSecretsTokenAuthProvider\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For TLS or custom authentication, you can either implement the ",(0,i.jsx)(n.code,{children:"org.apache.pulsar.functions.auth.KubernetesFunctionAuthProvider"})," interface or use an alternative mechanism."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If the token you use to deploy the function has an expiration date, you may need to deploy the function again after it expires."})}),"\n",(0,i.jsx)(n.h3,{id:"enable-kubernetes-service-account-token-projection-for-function-pod-authentication",children:"Enable Kubernetes service account token projection for function pod authentication"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"KubernetesServiceAccountTokenAuthProvider"})," uses ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#serviceaccount-token-volume-projection",children:"service account token volume projections"})," to mount a token into the function's pod. The function worker and broker can verify this token using OpenID Connect. The primary benefit of this integration is that tokens have a short time to live, are managed by Kubernetes, and do not inherit the permission used to create the function."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["This feature requires that the broker and the function worker are configured to use the ",(0,i.jsx)(n.code,{children:"AuthenticationProviderOpenID"}),". Documentation to enable this provider can be found ",(0,i.jsx)(n.a,{href:"/docs/3.0.x/security-openid-connect",children:"here"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"Here is an example configuration for the function worker to utilize this feature:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'functionAuthProviderClassName: "org.apache.pulsar.functions.auth.KubernetesServiceAccountTokenAuthProvider"\nfunctionRuntimeFactoryConfigs:\n  kubernetesFunctionAuthProviderConfig:\n    # Required\n    serviceAccountTokenExpirationSeconds: "600"\n    serviceAccountTokenAudience: "the-required-audience"\n    # Optional\n    brokerClientTrustCertsSecretName: "my-secret-pulsar-broker-client-trust-certs"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The function pod deploys with the default Kubernetes service account for the target namespace. Because the service account name maps to the ",(0,i.jsx)(n.code,{children:"sub"})," claim on the JWT projected into the pod's filesystem, all pods with the same service account will have the same permission within Pulsar. There is ongoing work to improve this integration."]}),"\n",(0,i.jsx)(n.p,{children:"Here is a sample JWT generated by this feature running in EKS (with some information redacted):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "aud": [\n    "your-audience"\n  ],\n  "exp": 1710969822,\n  "iat": 1679433822,\n  "iss": "https://oidc.eks.us-east-2.amazonaws.com/id/some-id",\n  "kubernetes.io": {\n    "namespace": "pulsar-function",\n    "pod": {\n      "name": "function-pod-0",\n      "uid": "fbac8f9e-a47d-4ad7-a8f0-cc9a65d1331c"\n    },\n    "serviceaccount": {\n      "name": "default",\n      "uid": "5964f9d3-3dce-467c-8dbe-d0f463063d7a"\n    },\n    "warnafter": 1679437429\n  },\n  "nbf": 1679433822,\n  "sub": "system:serviceaccount:pulsar-function:default"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["To grant permission to this function pod, you need to grant permissions to the role claim, which is the ",(0,i.jsx)(n.code,{children:"sub"})," claim by default, ",(0,i.jsx)(n.code,{children:"system:serviceaccount:pulsar-function:default"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"customize-kubernetes-runtime",children:"Customize Kubernetes runtime"}),"\n",(0,i.jsx)(n.p,{children:"Customizing Kubernetes runtime allows you to customize Kubernetes resources created by the runtime, including how to generate manifests, how to pass authenticated data to pods, and how to integrate secrets."}),"\n",(0,i.jsxs)(n.p,{children:["To customize Kubernetes runtime, you can set ",(0,i.jsx)(n.code,{children:"runtimeCustomizerClassName"})," in the ",(0,i.jsx)(n.code,{children:"conf/functions-worker.yml"})," file and use the fully qualified class name."]}),"\n",(0,i.jsxs)(n.p,{children:["The function API provides a flag named ",(0,i.jsx)(n.code,{children:"customRuntimeOptions"}),", which is passed to the ",(0,i.jsx)(n.code,{children:"org.apache.pulsar.functions.runtime.kubernetes.KubernetesManifestCustomizer"})," interface. To initialize ",(0,i.jsx)(n.code,{children:"KubernetesManifestCustomizer"}),", you can set ",(0,i.jsx)(n.code,{children:"runtimeCustomizerConfig"})," in the ",(0,i.jsx)(n.code,{children:"conf/functions-worker.yml"})," file."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"runtimeCustomizerConfig"})," is the same across all functions. If you provide both ",(0,i.jsx)(n.code,{children:"runtimeCustomizerConfig"})," and ",(0,i.jsx)(n.code,{children:"customRuntimeOptions"}),", you need to decide how to manage these two configurations in your implementation of the ",(0,i.jsx)(n.code,{children:"KubernetesManifestCustomizer"})," interface."]})}),"\n",(0,i.jsxs)(n.p,{children:["Pulsar includes a built-in implementation initialized with ",(0,i.jsx)(n.code,{children:"runtimeCustomizerConfig"}),". It enables you to pass a JSON document as ",(0,i.jsx)(n.code,{children:"customRuntimeOptions"})," with certain properties to augment. To use this built-in implementation, set ",(0,i.jsx)(n.code,{children:"runtimeCustomizerClassName"})," to ",(0,i.jsx)(n.code,{children:"org.apache.pulsar.functions.runtime.kubernetes.BasicKubernetesManifestCustomizer"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If both ",(0,i.jsx)(n.code,{children:"runtimeCustomizerConfig"})," and ",(0,i.jsx)(n.code,{children:"customRuntimeOptions"})," are provided and have conflicts, ",(0,i.jsx)(n.code,{children:"BasicKubernetesManifestCustomizer"})," uses ",(0,i.jsx)(n.code,{children:"customRuntimeOptions"})," to override ",(0,i.jsx)(n.code,{children:"runtimeCustomizerConfig"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Below is an example of configuring ",(0,i.jsx)(n.code,{children:"customRuntimeOptions"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "jobName": "jobname", // the k8s pod name to run this function instance\n  "jobNamespace": "namespace", // the k8s namespace to run this function in\n  "extractLabels": {           // extra labels to attach to the statefulSet, service, and pods\n    "extraLabel": "value"\n  },\n  "extraAnnotations": {        // extra annotations to attach to the statefulSet, service, and pods\n    "extraAnnotation": "value"\n  },\n  "nodeSelectorLabels": {      // node selector labels to add on to the pod spec\n    "customLabel": "value"\n  },\n  "tolerations": [             // tolerations to add to the pod spec\n    {\n      "key": "custom-key",\n      "value": "value",\n      "effect": "NoSchedule"\n    }\n  ],\n  "resourceRequirements": {  // values for cpu and memory should be defined as described here: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container\n    "requests": {\n      "cpu": 1,\n      "memory": "4G"\n    },\n    "limits": {\n      "cpu": 2,\n      "memory": "8G"\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes",children:"How to define Pulsar resource names when running Pulsar in Kubernetes"}),"\n",(0,i.jsx)(n.p,{children:"If you run Pulsar Functions or connectors on Kubernetes, you need to follow the Kubernetes naming convention to define the names of your Pulsar resources, whichever admin interface you use."}),"\n",(0,i.jsxs)(n.p,{children:["Kubernetes requires a name that can be used as a DNS subdomain name as defined in ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names",children:"RFC 1123"}),". Pulsar supports more legal characters than the Kubernetes naming convention. If you create a Pulsar resource name with special characters that are not supported by Kubernetes (for example, including colons in a Pulsar namespace name), Kubernetes runtime translates the Pulsar object names into Kubernetes resource labels which are in RFC 1123-compliant forms. Consequently, you can run functions or connectors using Kubernetes runtime. The rules for translating Pulsar object names into Kubernetes resource labels are as below:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Truncate to 63 characters"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Replace the following characters with dashes (-):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Non-alphanumeric characters"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Underscores (_)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Dots (.)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Replace beginning and ending non-alphanumeric characters with 0"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you get an error in translating Pulsar object names into Kubernetes resource labels (for example, you may have a naming collision if your Pulsar object name is too long) or want to customize the translating rules, see ",(0,i.jsx)(n.a,{href:"/docs/3.0.x/functions-runtime-kubernetes#customize-kubernetes-runtime",children:"customize Kubernetes runtime"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["For how to configure Kubernetes runtime, see ",(0,i.jsx)(n.a,{href:"/docs/3.0.x/functions-runtime-kubernetes",children:"instructions"}),"."]}),"\n"]})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);