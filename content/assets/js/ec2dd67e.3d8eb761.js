"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[13979],{98679:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"helm-deploy","title":"Deploy Pulsar cluster using Helm","description":"Before running helm install, you need to decide how to run Pulsar.","source":"@site/versioned_docs/version-2.8.x/helm-deploy.md","sourceDirName":".","slug":"/helm-deploy","permalink":"/docs/2.8.x/helm-deploy","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/helm-deploy.md","tags":[],"version":"2.8.x","frontMatter":{"id":"helm-deploy","title":"Deploy Pulsar cluster using Helm","sidebar_label":"Deployment","original_id":"helm-deploy"},"sidebar":"docsSidebar","previous":{"title":"Install","permalink":"/docs/2.8.x/helm-install"},"next":{"title":"Upgrade","permalink":"/docs/2.8.x/helm-upgrade"}}');var r=s(74848),t=s(28453);const l={id:"helm-deploy",title:"Deploy Pulsar cluster using Helm",sidebar_label:"Deployment",original_id:"helm-deploy"},o=void 0,i={},c=[{value:"Select configuration options",id:"select-configuration-options",level:2},{value:"Kubernetes namespace",id:"kubernetes-namespace",level:3},{value:"Persistence",id:"persistence",level:3},{value:"Affinity",id:"affinity",level:3},{value:"Components",id:"components",level:3},{value:"Docker images",id:"docker-images",level:3},{value:"TLS",id:"tls",level:3},{value:"Provision TLS certificates using cert-manager",id:"provision-tls-certificates-using-cert-manager",level:4},{value:"Enable TLS",id:"enable-tls",level:4},{value:"Authentication",id:"authentication",level:3},{value:"Authorization",id:"authorization",level:3},{value:"CPU and RAM resource requirements",id:"cpu-and-ram-resource-requirements",level:3},{value:"Install dependent charts",id:"install-dependent-charts",level:2},{value:"Install local storage provisioner",id:"install-local-storage-provisioner",level:3},{value:"Install cert-manager",id:"install-cert-manager",level:3},{value:"Prepare Helm release",id:"prepare-helm-release",level:2},{value:"Deploy Pulsar cluster using Helm",id:"deploy-pulsar-cluster-using-helm",level:2},{value:"Monitor deployment",id:"monitor-deployment",level:2},{value:"Access Pulsar cluster",id:"access-pulsar-cluster",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Before running ",(0,r.jsx)(n.code,{children:"helm install"}),", you need to decide how to run Pulsar.\nOptions can be specified using Helm's ",(0,r.jsx)(n.code,{children:"--set option.name=value"})," command line option."]}),"\n",(0,r.jsx)(n.h2,{id:"select-configuration-options",children:"Select configuration options"}),"\n",(0,r.jsxs)(n.p,{children:["In each section, collect the options that are combined to use with the ",(0,r.jsx)(n.code,{children:"helm install"})," command."]}),"\n",(0,r.jsx)(n.h3,{id:"kubernetes-namespace",children:"Kubernetes namespace"}),"\n",(0,r.jsxs)(n.p,{children:["By default, the Pulsar Helm chart is installed to a namespace called ",(0,r.jsx)(n.code,{children:"pulsar"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\nnamespace: pulsar\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To install the Pulsar Helm chart into a different Kubernetes namespace, you can include this option in the ",(0,r.jsx)(n.code,{children:"helm install"})," command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n--set namespace=<different-k8s-namespace>\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"By default, the Pulsar Helm chart doesn't create the namespace."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\nnamespaceCreate: false\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To use the Pulsar Helm chart to create the Kubernetes namespace automatically, you can include this option in the ",(0,r.jsx)(n.code,{children:"helm install"})," command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n--set namespaceCreate=true\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"persistence",children:"Persistence"}),"\n",(0,r.jsx)(n.p,{children:"By default, the Pulsar Helm chart creates Volume Claims with the expectation that a dynamic provisioner creates the underlying Persistent Volumes."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\nvolumes:\n  persistence: true\n  # configure the components to use local persistent volume\n  # the local provisioner should be installed prior to enable local persistent volume\n  local_storage: false\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To use local persistent volumes as the persistent storage for Helm release, you can install the ",(0,r.jsx)(n.a,{href:"#install-local-storage-provisioner",children:"local storage provisioner"})," and include the following option in the ",(0,r.jsx)(n.code,{children:"helm install"})," command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n--set volumes.local_storage=true\n\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Before installing the production instance of Pulsar, ensure to plan the storage settings to avoid extra storage migration work. Because after initial installation, you must edit Kubernetes objects manually if you want to change storage settings."})}),"\n",(0,r.jsxs)(n.p,{children:["The Pulsar Helm chart is designed for production use. To use the Pulsar Helm chart in a development environment (such as Minikube), you can disable persistence by including this option in your ",(0,r.jsx)(n.code,{children:"helm install"})," command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n--set volumes.persistence=false\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"affinity",children:"Affinity"}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.code,{children:"anti-affinity"})," is enabled to ensure pods of the same component can run on different nodes."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\naffinity:\n  anti_affinity: true\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To use the Pulsar Helm chart in a development environment (such as Minikube), you can disable ",(0,r.jsx)(n.code,{children:"anti-affinity"})," by including this option in your ",(0,r.jsx)(n.code,{children:"helm install"})," command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n--set affinity.anti_affinity=false\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"components",children:"Components"}),"\n",(0,r.jsx)(n.p,{children:"The Pulsar Helm chart is designed for production usage. It deploys a production-ready Pulsar cluster, including Pulsar core components and monitoring components."}),"\n",(0,r.jsx)(n.p,{children:"You can customize the components to be deployed by turning on/off individual components."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\n## Components\n##\n## Control what components of Apache Pulsar to deploy for the cluster\ncomponents:\n  # zookeeper\n  zookeeper: true\n  # bookkeeper\n  bookkeeper: true\n  # bookkeeper - autorecovery\n  autorecovery: true\n  # broker\n  broker: true\n  # functions\n  functions: true\n  # proxy\n  proxy: true\n  # toolset\n  toolset: true\n  # pulsar manager\n  pulsar_manager: true\n\n## Monitoring Components\n##\n## Control what components of the monitoring stack to deploy for the cluster\nmonitoring:\n  # monitoring - prometheus\n  prometheus: true\n  # monitoring - grafana\n  grafana: true\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"docker-images",children:"Docker images"}),"\n",(0,r.jsx)(n.p,{children:"The Pulsar Helm chart is designed to enable controlled upgrades. So it can configure independent image versions for components. You can customize the images by setting individual component."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\n## Images\n##\n## Control what images to use for each component\nimages:\n  zookeeper:\n    repository: apachepulsar/pulsar-all\n    tag: 2.8.4\n    pullPolicy: IfNotPresent\n  bookie:\n    repository: apachepulsar/pulsar-all\n    tag: 2.8.4\n    pullPolicy: IfNotPresent\n  autorecovery:\n    repository: apachepulsar/pulsar-all\n    tag: 2.8.4\n    pullPolicy: IfNotPresent\n  broker:\n    repository: apachepulsar/pulsar-all\n    tag: 2.8.4\n    pullPolicy: IfNotPresent\n  proxy:\n    repository: apachepulsar/pulsar-all\n    tag: 2.8.4\n    pullPolicy: IfNotPresent\n  functions:\n    repository: apachepulsar/pulsar-all\n    tag: 2.8.4\n  prometheus:\n    repository: prom/prometheus\n    tag: v2.17.2\n    pullPolicy: IfNotPresent\n  grafana:\n    repository: streamnative/apache-pulsar-grafana-dashboard-k8s\n    tag: 0.0.16\n    pullPolicy: IfNotPresent\n  pulsar_manager:\n    repository: apachepulsar/pulsar-manager\n    tag: v0.3.0\n    pullPolicy: IfNotPresent\n    hasCommand: false\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"tls",children:"TLS"}),"\n",(0,r.jsx)(n.p,{children:"The Pulsar Helm chart can be configured to enable TLS (Transport Layer Security) to protect all the traffic between components. Before enabling TLS, you have to provision TLS certificates for the required components."}),"\n",(0,r.jsx)(n.h4,{id:"provision-tls-certificates-using-cert-manager",children:"Provision TLS certificates using cert-manager"}),"\n",(0,r.jsxs)(n.p,{children:["To use the ",(0,r.jsx)(n.code,{children:"cert-manager"})," to provision the TLS certificates, you have to install the ",(0,r.jsx)(n.a,{href:"#install-cert-manager",children:"cert-manager"})," before installing the Pulsar Helm chart. After successfully installing the cert-manager, you can set ",(0,r.jsx)(n.code,{children:"certs.internal_issuer.enabled"})," to ",(0,r.jsx)(n.code,{children:"true"}),". Therefore, the Pulsar Helm chart can use the ",(0,r.jsx)(n.code,{children:"cert-manager"})," to generate ",(0,r.jsx)(n.code,{children:"selfsigning"})," TLS certificates for the configured components."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\ncerts:\n  internal_issuer:\n    enabled: false\n    component: internal-cert-issuer\n    type: selfsigning\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can also customize the generated TLS certificates by configuring the fields as the following."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\ntls:\n  # common settings for generating certs\n  common:\n    # 90d\n    duration: 2160h\n    # 15d\n    renewBefore: 360h\n    organization:\n      - pulsar\n    keySize: 4096\n    keyAlgorithm: rsa\n    keyEncoding: pkcs8\n\n"})}),"\n",(0,r.jsx)(n.h4,{id:"enable-tls",children:"Enable TLS"}),"\n",(0,r.jsxs)(n.p,{children:["After installing the ",(0,r.jsx)(n.code,{children:"cert-manager"}),", you can set ",(0,r.jsx)(n.code,{children:"tls.enabled"})," to ",(0,r.jsx)(n.code,{children:"true"})," to enable TLS encryption for the entire cluster."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\ntls:\n  enabled: false\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can also configure whether to enable TLS encryption for individual component."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\ntls:\n  # settings for generating certs for proxy\n  proxy:\n    enabled: false\n    cert_name: tls-proxy\n  # settings for generating certs for broker\n  broker:\n    enabled: false\n    cert_name: tls-broker\n  # settings for generating certs for bookies\n  bookie:\n    enabled: false\n    cert_name: tls-bookie\n  # settings for generating certs for zookeeper\n  zookeeper:\n    enabled: false\n    cert_name: tls-zookeeper\n  # settings for generating certs for recovery\n  autorecovery:\n    cert_name: tls-recovery\n  # settings for generating certs for toolset\n  toolset:\n    cert_name: tls-toolset\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"authentication",children:"Authentication"}),"\n",(0,r.jsxs)(n.p,{children:["By default, authentication is disabled. You can set ",(0,r.jsx)(n.code,{children:"auth.authentication.enabled"})," to ",(0,r.jsx)(n.code,{children:"true"})," to enable authentication.\nCurrently, the Pulsar Helm chart only supports JWT authentication provider. You can set ",(0,r.jsx)(n.code,{children:"auth.authentication.provider"})," to ",(0,r.jsx)(n.code,{children:"jwt"})," to use the JWT authentication provider."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'\n# Enable or disable broker authentication and authorization.\nauth:\n  authentication:\n    enabled: false\n    provider: "jwt"\n    jwt:\n      # Enable JWT authentication\n      # If the token is generated by a secret key, set the usingSecretKey as true.\n      # If the token is generated by a private key, set the usingSecretKey as false.\n      usingSecretKey: false\n  superUsers:\n    # broker to broker communication\n    broker: "broker-admin"\n    # proxy to broker communication\n    proxy: "proxy-admin"\n    # pulsar-admin client to broker/proxy communication\n    client: "admin"\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["To enable authentication, you can run ",(0,r.jsx)(n.a,{href:"#prepare-the-helm-release",children:"prepare helm release"})," to generate token secret keys and tokens for three super users specified in the ",(0,r.jsx)(n.code,{children:"auth.superUsers"})," field. The generated token keys and super user tokens are uploaded and stored as Kubernetes secrets prefixed with ",(0,r.jsx)(n.code,{children:"<pulsar-release-name>-token-"}),". You can use the following command to find those secrets."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nkubectl get secrets -n <k8s-namespace>\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"authorization",children:"Authorization"}),"\n",(0,r.jsx)(n.p,{children:"By default, authorization is disabled. Authorization can be enabled only when authentication is enabled."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\nauth:\n  authorization:\n    enabled: false\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To enable authorization, you can include this option in the ",(0,r.jsx)(n.code,{children:"helm install"})," command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n--set auth.authorization.enabled=true\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"cpu-and-ram-resource-requirements",children:"CPU and RAM resource requirements"}),"\n",(0,r.jsx)(n.p,{children:"By default, the resource requests and the number of replicas for the Pulsar components in the Pulsar Helm chart are adequate for a small production deployment. If you deploy a non-production instance, you can reduce the defaults to fit into a smaller cluster."}),"\n",(0,r.jsx)(n.p,{children:"Once you have all of your configuration options collected, you can install dependent charts before installing the Pulsar Helm chart."}),"\n",(0,r.jsx)(n.h2,{id:"install-dependent-charts",children:"Install dependent charts"}),"\n",(0,r.jsx)(n.h3,{id:"install-local-storage-provisioner",children:"Install local storage provisioner"}),"\n",(0,r.jsxs)(n.p,{children:["To use local persistent volumes as the persistent storage, you need to install a storage provisioner for ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/blog/2019/04/04/kubernetes-1.14-local-persistent-volumes-ga/",children:"local persistent volumes"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"One of the easiest way to get started is to use the local storage provisioner provided along with the Pulsar Helm chart."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\nhelm repo add streamnative https://charts.streamnative.io\nhelm repo update\nhelm install pulsar-storage-provisioner streamnative/local-storage-provisioner\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"install-cert-manager",children:"Install cert-manager"}),"\n",(0,r.jsxs)(n.p,{children:["The Pulsar Helm chart uses the ",(0,r.jsx)(n.a,{href:"https://github.com/jetstack/cert-manager",children:"cert-manager"})," to provision and manage TLS certificates automatically. To enable TLS encryption for brokers or proxies, you need to install the cert-manager in advance."]}),"\n",(0,r.jsxs)(n.p,{children:["For details about how to install the cert-manager, follow the ",(0,r.jsx)(n.a,{href:"https://cert-manager.io/docs/installation/kubernetes/#installing-with-helm",children:"official instructions"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Alternatively, we provide a bash script ",(0,r.jsx)(n.a,{href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/cert-manager/install-cert-manager.sh",children:"install-cert-manager.sh"})," to install a cert-manager release to the namespace ",(0,r.jsx)(n.code,{children:"cert-manager"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ngit clone https://github.com/apache/pulsar-helm-chart\ncd pulsar-helm-chart\n./scripts/cert-manager/install-cert-manager.sh\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"prepare-helm-release",children:"Prepare Helm release"}),"\n",(0,r.jsxs)(n.p,{children:["Once you have install all the dependent charts and collected all of your configuration options, you can run ",(0,r.jsx)(n.a,{href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/prepare_helm_release.sh",children:"prepare_helm_release.sh"})," to prepare the Helm release."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ngit clone https://github.com/apache/pulsar-helm-chart\ncd pulsar-helm-chart\n./scripts/pulsar/prepare_helm_release.sh -n <k8s-namespace> -k <helm-release-name>\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"prepare_helm_release"})," creates the following resources:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A Kubernetes namespace for installing the Pulsar release"}),"\n",(0,r.jsxs)(n.li,{children:["JWT secret keys and tokens for three super users: ",(0,r.jsx)(n.code,{children:"broker-admin"}),", ",(0,r.jsx)(n.code,{children:"proxy-admin"}),", and ",(0,r.jsx)(n.code,{children:"admin"}),". By default, it generates an asymmetric pubic/private key pair. You can choose to generate a symmetric secret key by specifying ",(0,r.jsx)(n.code,{children:"--symmetric"}),".","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"proxy-admin"})," role is used for proxies to communicate to brokers."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"broker-admin"})," role is used for inter-broker communications."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"admin"})," role is used by the admin tools."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"deploy-pulsar-cluster-using-helm",children:"Deploy Pulsar cluster using Helm"}),"\n",(0,r.jsx)(n.p,{children:"Once you have finished the following three things, you can install a Helm release."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Collect all of your configuration options."}),"\n",(0,r.jsx)(n.li,{children:"Install dependent charts."}),"\n",(0,r.jsx)(n.li,{children:"Prepare the Helm release."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In this example, we name our Helm release ",(0,r.jsx)(n.code,{children:"pulsar"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nhelm repo add apache https://pulsar.apache.org/charts\nhelm repo update\nhelm install pulsar apache/pulsar \\\n    --timeout 10m \\\n    --set initialize=true \\\n    --set [your configuration options]\n\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["For the first deployment, add ",(0,r.jsx)(n.code,{children:"--set initialize=true"})," option to initialize bookie and Pulsar cluster metadata."]})}),"\n",(0,r.jsxs)(n.p,{children:["You can also use the ",(0,r.jsx)(n.code,{children:"--version <installation version>"})," option if you want to install a specific version of Pulsar Helm chart."]}),"\n",(0,r.jsx)(n.h2,{id:"monitor-deployment",children:"Monitor deployment"}),"\n",(0,r.jsx)(n.p,{children:"A list of installed resources are output once the Pulsar cluster is deployed. This may take 5-10 minutes."}),"\n",(0,r.jsxs)(n.p,{children:["The status of the deployment can be checked by running the ",(0,r.jsx)(n.code,{children:"helm status pulsar"})," command, which can also be done while the deployment is taking place if you run the command in another terminal."]}),"\n",(0,r.jsx)(n.h2,{id:"access-pulsar-cluster",children:"Access Pulsar cluster"}),"\n",(0,r.jsxs)(n.p,{children:["The default values will create a ",(0,r.jsx)(n.code,{children:"ClusterIP"})," for the following resources, which you can use to interact with the cluster."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Proxy: You can use the IP address to produce and consume messages to the installed Pulsar cluster."}),"\n",(0,r.jsxs)(n.li,{children:["Pulsar Manager: You can access the Pulsar Manager UI at ",(0,r.jsx)(n.code,{children:"http://<pulsar-manager-ip>:9527"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Grafana Dashboard: You can access the Grafana dashboard at ",(0,r.jsx)(n.code,{children:"http://<grafana-dashboard-ip>:3000"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To find the IP addresses of those components, run the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nkubectl get service -n <k8s-namespace>\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var a=s(96540);const r={},t=a.createContext(r);function l(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);