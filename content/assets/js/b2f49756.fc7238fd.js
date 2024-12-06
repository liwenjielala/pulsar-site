"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[96e3],{59342:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"helm-deploy","title":"Deploying a Pulsar cluster using Helm","description":"Before running helm install, you need to make some decisions about how you will run Pulsar.","source":"@site/versioned_docs/version-2.2.1/helm-deploy.md","sourceDirName":".","slug":"/helm-deploy","permalink":"/docs/2.2.1/helm-deploy","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.1/helm-deploy.md","tags":[],"version":"2.2.1","frontMatter":{"id":"helm-deploy","title":"Deploying a Pulsar cluster using Helm","sidebar_label":"Deployment","original_id":"helm-deploy"}}');var t=s(74848),a=s(28453);const o={id:"helm-deploy",title:"Deploying a Pulsar cluster using Helm",sidebar_label:"Deployment",original_id:"helm-deploy"},l=void 0,i={},c=[{value:"Selecting configuration options",id:"selecting-configuration-options",level:2},{value:"Kubernetes Namespace",id:"kubernetes-namespace",level:3},{value:"Persistence",id:"persistence",level:3},{value:"Affinity",id:"affinity",level:3},{value:"Components",id:"components",level:3},{value:"Docker Images",id:"docker-images",level:3},{value:"TLS",id:"tls",level:3},{value:"Provision TLS certs using cert-manager",id:"provision-tls-certs-using-cert-manager",level:4},{value:"Enable TLS",id:"enable-tls",level:4},{value:"Authentication",id:"authentication",level:3},{value:"Authorization",id:"authorization",level:3},{value:"CPU and RAM resource requirements",id:"cpu-and-ram-resource-requirements",level:3},{value:"Install Dependent Charts",id:"install-dependent-charts",level:2},{value:"Install Local Storage Provisioner",id:"install-local-storage-provisioner",level:3},{value:"Install Cert Manager",id:"install-cert-manager",level:3},{value:"Prepare the Helm Release",id:"prepare-the-helm-release",level:2},{value:"Deploy using Helm",id:"deploy-using-helm",level:2},{value:"Monitoring the Deployment",id:"monitoring-the-deployment",level:2},{value:"Accessing the Pulsar Cluster",id:"accessing-the-pulsar-cluster",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Before running ",(0,t.jsx)(n.code,{children:"helm install"}),", you need to make some decisions about how you will run Pulsar.\nOptions can be specified using Helm's ",(0,t.jsx)(n.code,{children:"--set option.name=value"})," command line option."]}),"\n",(0,t.jsx)(n.h2,{id:"selecting-configuration-options",children:"Selecting configuration options"}),"\n",(0,t.jsxs)(n.p,{children:["In each section collect the options that will be combined to use with ",(0,t.jsx)(n.code,{children:"helm install"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"kubernetes-namespace",children:"Kubernetes Namespace"}),"\n",(0,t.jsxs)(n.p,{children:["By default, the chart is installed to a namespace called ",(0,t.jsx)(n.code,{children:"pulsar"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"\nnamespace: pulsar\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you decide to install the chart into a different k8s namespace, you can include this option in your Helm install command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n--set namespace=<different-k8s-namespace>\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"By default, the chart doesn't create the namespace."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"\nnamespaceCreate: false\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you want the chart to create the k8s namespace automatically, you can include this option in your Helm install command."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n--set namespaceCreate=true\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"persistence",children:"Persistence"}),"\n",(0,t.jsx)(n.p,{children:"By default the chart creates Volume Claims with the expectation that a dynamic provisioner will create the underlying Persistent Volumes."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"\nvolumes:\n  persistence: true\n  # configure the components to use local persistent volume\n  # the local provisioner should be installed prior to enable local persistent volume\n  local_storage: false\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you would like to use local persistent volumes as the persistent storage for your Helm release, you can install ",(0,t.jsx)(n.a,{href:"#install-local-storage-provisioner",children:"local-storage-provisioner"})," and include the following option in your Helm install command."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n--set volumes.local_storage=true\n\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Important"}),": After initial installation, making changes to your storage settings requires manually editing Kubernetes objects,\nso it's best to plan ahead before installing your production instance of Pulsar to avoid extra storage migration work."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This chart is designed for production use, To use this chart in a development environment (e.g. minikube), you can disable persistence by including this option in your Helm install command."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n--set volumes.persistence=false\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"affinity",children:"Affinity"}),"\n",(0,t.jsxs)(n.p,{children:["By default ",(0,t.jsx)(n.code,{children:"anti-affinity"})," is turned on to ensure pods of same component can run on different nodes."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"\naffinity:\n  anti_affinity: true\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you are planning to use this chart in a development environment (e.g. Minikube), you can disable ",(0,t.jsx)(n.code,{children:"anti-affinity"})," by including this option in your Helm install command."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n--set affinity.anti_affinity=false\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"components",children:"Components"}),"\n",(0,t.jsx)(n.p,{children:"This chart is designed for production usage. It deploys a production-ready Pulsar cluster including Pulsar core components and monitoring components."}),"\n",(0,t.jsx)(n.p,{children:"You can customize the components to deploy by turning on/off individual components."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"\n## Components\n##\n## Control what components of Apache Pulsar to deploy for the cluster\ncomponents:\n  # zookeeper\n  zookeeper: true\n  # bookkeeper\n  bookkeeper: true\n  # bookkeeper - autorecovery\n  autorecovery: true\n  # broker\n  broker: true\n  # functions\n  functions: true\n  # proxy\n  proxy: true\n  # toolset\n  toolset: true\n  # pulsar manager\n  pulsar_manager: true\n\n## Monitoring Components\n##\n## Control what components of the monitoring stack to deploy for the cluster\nmonitoring:\n  # monitoring - prometheus\n  prometheus: true\n  # monitoring - grafana\n  grafana: true\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"docker-images",children:"Docker Images"}),"\n",(0,t.jsx)(n.p,{children:"This chart is designed to enable controlled upgrades. So it provides the capability to configure independent image versions for components. You can customize the images by setting individual component."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"\n## Images\n##\n## Control what images to use for each component\nimages:\n  zookeeper:\n    repository: apachepulsar/pulsar-all\n    tag: 2.5.0\n    pullPolicy: IfNotPresent\n  bookie:\n    repository: apachepulsar/pulsar-all\n    tag: 2.5.0\n    pullPolicy: IfNotPresent\n  autorecovery:\n    repository: apachepulsar/pulsar-all\n    tag: 2.5.0\n    pullPolicy: IfNotPresent\n  broker:\n    repository: apachepulsar/pulsar-all\n    tag: 2.5.0\n    pullPolicy: IfNotPresent\n  proxy:\n    repository: apachepulsar/pulsar-all\n    tag: 2.5.0\n    pullPolicy: IfNotPresent\n  functions:\n    repository: apachepulsar/pulsar-all\n    tag: 2.5.0\n  prometheus:\n    repository: prom/prometheus\n    tag: v1.6.3\n    pullPolicy: IfNotPresent\n  grafana:\n    repository: streamnative/apache-pulsar-grafana-dashboard-k8s\n    tag: 0.0.4\n    pullPolicy: IfNotPresent\n  pulsar_manager:\n    repository: apachepulsar/pulsar-manager\n    tag: v0.1.0\n    pullPolicy: IfNotPresent\n    hasCommand: false\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"tls",children:"TLS"}),"\n",(0,t.jsx)(n.p,{children:"This Pulsar Chart can be configured to enable TLS to protect all the traffic between components. Before you enable TLS, you have to provision TLS certificates\nfor the components you have configured to enable TLS."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"#provision-tls-certs-using-cert-manager",children:["Provision TLS certs using ",(0,t.jsx)(n.code,{children:"cert-manager"})]})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"provision-tls-certs-using-cert-manager",children:"Provision TLS certs using cert-manager"}),"\n",(0,t.jsxs)(n.p,{children:["In order to using ",(0,t.jsx)(n.code,{children:"cert-manager"})," to provision the TLS certificates, you have to install ",(0,t.jsx)(n.a,{href:"#install-cert-manager",children:"cert-manager"})," before installing the Pulsar chart. After\nsuccessfully install cert manager, you can then set ",(0,t.jsx)(n.code,{children:"certs.internal_issuer.enabled"}),"\nto ",(0,t.jsx)(n.code,{children:"true"}),". So the Pulsar chart will use ",(0,t.jsx)(n.code,{children:"cert-manager"})," to generate ",(0,t.jsx)(n.code,{children:"selfsigning"})," TLS\ncerts for the configured components."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"\ncerts:\n  internal_issuer:\n    enabled: false\n    component: internal-cert-issuer\n    type: selfsigning\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also customize the generated TLS certificates by configuring the fields as the following."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"\ntls:\n  # common settings for generating certs\n  common:\n    # 90d\n    duration: 2160h\n    # 15d\n    renewBefore: 360h\n    organization:\n      - pulsar\n    keySize: 4096\n    keyAlgorithm: rsa\n    keyEncoding: pkcs8\n\n"})}),"\n",(0,t.jsx)(n.h4,{id:"enable-tls",children:"Enable TLS"}),"\n",(0,t.jsxs)(n.p,{children:["After installing ",(0,t.jsx)(n.code,{children:"cert-manager"}),", you can then set ",(0,t.jsx)(n.code,{children:"tls.enabled"})," to ",(0,t.jsx)(n.code,{children:"true"})," to enable TLS encryption for the entire cluster."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"\ntls:\n  enabled: false\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also control whether to enable TLS encryption for individual component."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"\ntls:\n  # settings for generating certs for proxy\n  proxy:\n    enabled: false\n    cert_name: tls-proxy\n  # settings for generating certs for broker\n  broker:\n    enabled: false\n    cert_name: tls-broker\n  # settings for generating certs for bookies\n  bookie:\n    enabled: false\n    cert_name: tls-bookie\n  # settings for generating certs for zookeeper\n  zookeeper:\n    enabled: false\n    cert_name: tls-zookeeper\n  # settings for generating certs for recovery\n  autorecovery:\n    cert_name: tls-recovery\n  # settings for generating certs for toolset\n  toolset:\n    cert_name: tls-toolset\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"authentication",children:"Authentication"}),"\n",(0,t.jsxs)(n.p,{children:["Authentication is disabled by default. You can set ",(0,t.jsx)(n.code,{children:"auth.authentication.enabled"})," to ",(0,t.jsx)(n.code,{children:"true"})," to turn on authentication.\nCurrently this chart only supports JWT authentication provider. You can set ",(0,t.jsx)(n.code,{children:"auth.authentication.provider"})," to ",(0,t.jsx)(n.code,{children:"jwt"})," to use JWT authentication provider."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'\n# Enable or disable broker authentication and authorization.\nauth:\n  authentication:\n    enabled: false\n    provider: "jwt"\n    jwt:\n      # Enable JWT authentication\n      # If the token is generated by a secret key, set the usingSecretKey as true.\n      # If the token is generated by a private key, set the usingSecretKey as false.\n      usingSecretKey: false\n  superUsers:\n    # broker to broker communication\n    broker: "broker-admin"\n    # proxy to broker communication\n    proxy: "proxy-admin"\n    # pulsar-admin client to broker/proxy communication\n    client: "admin"\n\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you decide to enable authentication, you can run ",(0,t.jsx)(n.a,{href:"#prepare-the-helm-release",children:"prepare helm release"})," to generate token secret keys and tokens for three super users specified in ",(0,t.jsx)(n.code,{children:"auth.superUsers"})," field. The generated token keys and super user tokens are uploaded and stored as kubernetes secrets prefixed with ",(0,t.jsx)(n.code,{children:"<pulsar-release-name>-token-"}),". You can use following command to find those secrets."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\nkubectl get secrets -n <k8s-namespace>\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"authorization",children:"Authorization"}),"\n",(0,t.jsx)(n.p,{children:"Authorization is disabled by default. Authorization can be enabled\nonly if Authentication is enabled."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"\nauth:\n  authorization:\n    enabled: false\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can include this option to turn on authorization."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n--set auth.authorization.enabled=true\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"cpu-and-ram-resource-requirements",children:"CPU and RAM resource requirements"}),"\n",(0,t.jsx)(n.p,{children:"The resource requests, and number of replicas for the Pulsar components in this Chart are set by default to be adequate for a small production deployment. If you are trying to deploy a non-production instance, you can reduce the defaults in order to fit into a smaller cluster."}),"\n",(0,t.jsx)(n.p,{children:"Once you have all of your configuration options collected, we need\nto install dependent charts before proceeding to install the Pulsar\nChart."}),"\n",(0,t.jsx)(n.h2,{id:"install-dependent-charts",children:"Install Dependent Charts"}),"\n",(0,t.jsx)(n.h3,{id:"install-local-storage-provisioner",children:"Install Local Storage Provisioner"}),"\n",(0,t.jsxs)(n.p,{children:["If you decide to use local persistent volumes as the persistent storage, you need to ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/blog/2019/04/04/kubernetes-1.14-local-persistent-volumes-ga/",children:"install a storage provisioner for local persistent volumes"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"One of the easiest way to get started is to use the local storage provisioner provided along with the Pulsar Helm chart."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\nhelm repo add streamnative https://charts.streamnative.io\nhelm repo update\nhelm install pulsar-storage-provisioner streamnative/local-storage-provisioner\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"install-cert-manager",children:"Install Cert Manager"}),"\n",(0,t.jsxs)(n.p,{children:["The Pulsar Chart uses ",(0,t.jsx)(n.a,{href:"https://github.com/jetstack/cert-manager",children:"cert-manager"})," to automate provisioning and managing TLS certificates. If you decide to enable TLS encryption for brokers or proxies, you need to install cert-manager first."]}),"\n",(0,t.jsxs)(n.p,{children:["You can follow the ",(0,t.jsx)(n.a,{href:"https://cert-manager.io/docs/installation/kubernetes/#installing-with-helm",children:"official instructions"})," to install cert-manager."]}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, we provide a bash script ",(0,t.jsx)(n.a,{href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/cert-manager/install-cert-manager.sh",children:"install-cert-manager.sh"})," to install a cert-manager release to namespace ",(0,t.jsx)(n.code,{children:"cert-manager"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\ngit clone https://github.com/apache/pulsar-helm-chart\ncd pulsar-helm-chart\n./scripts/cert-manager/install-cert-manager.sh\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"prepare-the-helm-release",children:"Prepare the Helm Release"}),"\n",(0,t.jsxs)(n.p,{children:["Once you have install all the dependent charts and collected all of your configuration options, you can run ",(0,t.jsx)(n.a,{href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/prepare_helm_release.sh",children:"prepare_helm_release.sh"})," to prepare the helm release."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\ngit clone https://github.com/apache/pulsar-helm-chart\ncd pulsar-helm-chart\n./scripts/pulsar/prepare_helm_release.sh -n <k8s-namespace> -k <helm-release-name>\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"prepare_helm_release"})," creates following resources:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A k8s namespace for installing the Pulsar release"}),"\n",(0,t.jsxs)(n.li,{children:["Create a secret for storing the username and password of control center administrator. The username and password can be passed to ",(0,t.jsx)(n.code,{children:"prepare_helm_release.sh"})," through flags ",(0,t.jsx)(n.code,{children:"--control-center-admin"})," and ",(0,t.jsx)(n.code,{children:"--control-center-password"}),". The username and password is used for logging into Grafana dashboard and Pulsar Manager."]}),"\n",(0,t.jsxs)(n.li,{children:["Create the JWT secret keys and tokens for three superusers: ",(0,t.jsx)(n.code,{children:"broker-admin"}),", ",(0,t.jsx)(n.code,{children:"proxy-admin"}),", and ",(0,t.jsx)(n.code,{children:"admin"}),". By default, it generates asymmetric pubic/private key pair. You can choose to generate symmeric secret key by specifying ",(0,t.jsx)(n.code,{children:"--symmetric"}),".","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"proxy-admin"})," role is used for proxies to communicate to brokers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"broker-admin"})," role is used for inter-broker communications."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"admin"})," role is used by the admin tools."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"deploy-using-helm",children:"Deploy using Helm"}),"\n",(0,t.jsx)(n.p,{children:"Once you have done the following three things, you can proceed to install a Helm release."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Collect all of your configuration options"}),"\n",(0,t.jsx)(n.li,{children:"Install dependent charts"}),"\n",(0,t.jsx)(n.li,{children:"Prepare the Helm release"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In this example, we've named our Helm release ",(0,t.jsx)(n.code,{children:"pulsar"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\ngit clone https://github.com/apache/pulsar-helm-chart\ncd pulsar-helm-chart\nhelm upgrade --install pulsar charts/pulsar \\\n    --timeout 600 \\\n    --set [your configuration options]\n\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["For the first deployment, add ",(0,t.jsx)(n.code,{children:"--set initialize=true"})," option to initialize bookie and Pulsar cluster metadata."]})}),"\n",(0,t.jsxs)(n.p,{children:["You can also use ",(0,t.jsx)(n.code,{children:"--version <installation version>"})," option if you would like to install a specific version of Pulsar Helm chart."]}),"\n",(0,t.jsx)(n.h2,{id:"monitoring-the-deployment",children:"Monitoring the Deployment"}),"\n",(0,t.jsx)(n.p,{children:"This will output the list of resources installed once the deployment finishes which may take 5-10 minutes."}),"\n",(0,t.jsxs)(n.p,{children:["The status of the deployment can be checked by running ",(0,t.jsx)(n.code,{children:"helm status pulsar"})," which can also be done while the deployment is taking place if you run the command in another terminal."]}),"\n",(0,t.jsx)(n.h2,{id:"accessing-the-pulsar-cluster",children:"Accessing the Pulsar Cluster"}),"\n",(0,t.jsxs)(n.p,{children:["The default values will create a ",(0,t.jsx)(n.code,{children:"ClusterIP"})," for the following resources you can use to interact with the cluster."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Proxy: You can use the IP address to produce and consume messages to the installed Pulsar cluster."}),"\n",(0,t.jsxs)(n.li,{children:["Pulsar Manager: You can access the pulsar manager UI at ",(0,t.jsx)(n.code,{children:"http://<pulsar-manager-ip>:9527"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Grafana Dashboard: You can access the Grafana dashboard at ",(0,t.jsx)(n.code,{children:"http://<grafana-dashboard-ip>:3000"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To find the IP address of those components use:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\nkubectl get service -n <k8s-namespace>\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(96540);const t={},a=r.createContext(t);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);