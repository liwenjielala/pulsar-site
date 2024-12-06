"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[82665],{99857:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"kubernetes-helm","title":"Get started in Kubernetes","description":"This section guides you through every step of installing and running Apache Pulsar with Helm on Kubernetes quickly, including the following sections:","source":"@site/versioned_docs/version-2.6.3/kubernetes-helm.md","sourceDirName":".","slug":"/kubernetes-helm","permalink":"/docs/2.6.3/kubernetes-helm","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.3/kubernetes-helm.md","tags":[],"version":"2.6.3","frontMatter":{"id":"kubernetes-helm","title":"Get started in Kubernetes","sidebar_label":"Run Pulsar in Kubernetes","original_id":"kubernetes-helm"}}');var r=s(74848),l=s(28453);const i={id:"kubernetes-helm",title:"Get started in Kubernetes",sidebar_label:"Run Pulsar in Kubernetes",original_id:"kubernetes-helm"},c=void 0,t={},o=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Step 0: Prepare a Kubernetes cluster",id:"step-0-prepare-a-kubernetes-cluster",level:2},{value:"Step 1: Install Pulsar Helm chart",id:"step-1-install-pulsar-helm-chart",level:2},{value:"Step 2: Use pulsar-admin to create Pulsar tenants/namespaces/topics",id:"step-2-use-pulsar-admin-to-create-pulsar-tenantsnamespacestopics",level:2},{value:"Step 3: Use Pulsar client to produce and consume messages",id:"step-3-use-pulsar-client-to-produce-and-consume-messages",level:2},{value:"Step 4: Use Pulsar Manager to manage the cluster",id:"step-4-use-pulsar-manager-to-manage-the-cluster",level:2},{value:"Step 5: Use Prometheus and Grafana to monitor cluster",id:"step-5-use-prometheus-and-grafana-to-monitor-cluster",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This section guides you through every step of installing and running Apache Pulsar with Helm on Kubernetes quickly, including the following sections:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Install the Apache Pulsar on Kubernetes using Helm"}),"\n",(0,r.jsx)(n.li,{children:"Start and stop Apache Pulsar"}),"\n",(0,r.jsxs)(n.li,{children:["Create topics using ",(0,r.jsx)(n.code,{children:"pulsar-admin"})]}),"\n",(0,r.jsx)(n.li,{children:"Produce and consume messages using Pulsar clients"}),"\n",(0,r.jsx)(n.li,{children:"Monitor Apache Pulsar status with Prometheus and Grafana"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For deploying a Pulsar cluster for production usage, read the documentation on ",(0,r.jsx)(n.a,{href:"/docs/2.6.3/helm-deploy",children:"how to configure and install a Pulsar Helm chart"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Kubernetes server 1.14.0+"}),"\n",(0,r.jsx)(n.li,{children:"kubectl 1.14.0+"}),"\n",(0,r.jsx)(n.li,{children:"Helm 3.0+"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["For the following steps, step 2 and step 3 are for ",(0,r.jsx)(n.strong,{children:"developers"})," and step 4 and step 5 are for ",(0,r.jsx)(n.strong,{children:"administrators"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"step-0-prepare-a-kubernetes-cluster",children:"Step 0: Prepare a Kubernetes cluster"}),"\n",(0,r.jsxs)(n.p,{children:["Before installing a Pulsar Helm chart, you have to create a Kubernetes cluster. You can follow ",(0,r.jsx)(n.a,{href:"/docs/2.6.3/helm-prepare",children:"the instructions"})," to prepare a Kubernetes cluster."]}),"\n",(0,r.jsxs)(n.p,{children:["We use ",(0,r.jsx)(n.a,{href:"https://minikube.sigs.k8s.io/docs/start/",children:"Minikube"})," in this quick start guide. To prepare a Kubernetes cluster, follow these steps:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a Kubernetes cluster on Minikube."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nminikube start --memory=8192 --cpus=4 --kubernetes-version=<k8s-version>\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"<k8s-version>"})," can be any ",(0,r.jsx)(n.a,{href:"https://minikube.sigs.k8s.io/docs/reference/configuration/kubernetes/",children:"Kubernetes version supported by your Minikube installation"}),", such as ",(0,r.jsx)(n.code,{children:"v1.16.1"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set ",(0,r.jsx)(n.code,{children:"kubectl"})," to use Minikube."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nkubectl config use-context minikube\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["To use the ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/",children:"Kubernetes Dashboard"})," with the local Kubernetes cluster on Minikube, enter the command below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nminikube dashboard\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"The command automatically triggers opening a webpage in your browser."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"step-1-install-pulsar-helm-chart",children:"Step 1: Install Pulsar Helm chart"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add Pulsar charts repo."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nhelm repo add apache https://pulsar.apache.org/charts\n\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nhelm repo update\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Clone the Pulsar Helm chart repository."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ngit clone https://github.com/apache/pulsar-helm-chart\ncd pulsar-helm-chart\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Run the script ",(0,r.jsx)(n.code,{children:"prepare_helm_release.sh"})," to create secrets required for installing the Apache Pulsar Helm chart. The username ",(0,r.jsx)(n.code,{children:"pulsar"})," and password ",(0,r.jsx)(n.code,{children:"pulsar"})," are used for logging into the Grafana dashboard and Pulsar Manager."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n./scripts/pulsar/prepare_helm_release.sh \\\n    -n pulsar \\\n    -k pulsar-mini \\\n    -c\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Use the Pulsar Helm chart to install a Pulsar cluster to Kubernetes."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["You need to specify ",(0,r.jsx)(n.code,{children:"--set initialize=true"})," when installing Pulsar the first time. This command installs and starts Apache Pulsar."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nhelm install \\\n    --values examples/values-minikube.yaml \\\n    --set initialize=true \\\n    --namespace pulsar \\\n    pulsar-mini apache/pulsar\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check the status of all pods."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nkubectl get pods -n pulsar\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If all pods start up successfully, you can see that the ",(0,r.jsx)(n.code,{children:"STATUS"})," is changed to ",(0,r.jsx)(n.code,{children:"Running"})," or ",(0,r.jsx)(n.code,{children:"Completed"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Output"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nNAME                                         READY   STATUS      RESTARTS   AGE\npulsar-mini-bookie-0                         1/1     Running     0          9m27s\npulsar-mini-bookie-init-5gphs                0/1     Completed   0          9m27s\npulsar-mini-broker-0                         1/1     Running     0          9m27s\npulsar-mini-grafana-6b7bcc64c7-4tkxd         1/1     Running     0          9m27s\npulsar-mini-prometheus-5fcf5dd84c-w8mgz      1/1     Running     0          9m27s\npulsar-mini-proxy-0                          1/1     Running     0          9m27s\npulsar-mini-pulsar-init-t7cqt                0/1     Completed   0          9m27s\npulsar-mini-pulsar-manager-9bcbb4d9f-htpcs   1/1     Running     0          9m27s\npulsar-mini-toolset-0                        1/1     Running     0          9m27s\npulsar-mini-zookeeper-0                      1/1     Running     0          9m27s\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Check the status of all services in the namespace ",(0,r.jsx)(n.code,{children:"pulsar"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nkubectl get services -n pulsar\n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Output"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nNAME                         TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)                       AGE\npulsar-mini-bookie           ClusterIP      None             <none>        3181/TCP,8000/TCP             11m\npulsar-mini-broker           ClusterIP      None             <none>        8080/TCP,6650/TCP             11m\npulsar-mini-grafana          LoadBalancer   10.106.141.246   <pending>     3000:31905/TCP                11m\npulsar-mini-prometheus       ClusterIP      None             <none>        9090/TCP                      11m\npulsar-mini-proxy            LoadBalancer   10.97.240.109    <pending>     80:32305/TCP,6650:31816/TCP   11m\npulsar-mini-pulsar-manager   LoadBalancer   10.103.192.175   <pending>     9527:30190/TCP                11m\npulsar-mini-toolset          ClusterIP      None             <none>        <none>                        11m\npulsar-mini-zookeeper        ClusterIP      None             <none>        2888/TCP,3888/TCP,2181/TCP    11m\n\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"step-2-use-pulsar-admin-to-create-pulsar-tenantsnamespacestopics",children:"Step 2: Use pulsar-admin to create Pulsar tenants/namespaces/topics"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"pulsar-admin"})," is the CLI (command-Line Interface) tool for Pulsar. In this step, you can use ",(0,r.jsx)(n.code,{children:"pulsar-admin"})," to create resources, including tenants, namespaces, and topics."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Enter the ",(0,r.jsx)(n.code,{children:"toolset"})," container."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nkubectl exec -it -n pulsar pulsar-mini-toolset-0 -- /bin/bash\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"toolset"})," container, create a tenant named ",(0,r.jsx)(n.code,{children:"apache"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar-admin tenants create apache\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then you can list the tenants to see if the tenant is created successfully."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar-admin tenants list\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You should see a similar output as below. The tenant ",(0,r.jsx)(n.code,{children:"apache"})," has been successfully created."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'\n"apache"\n"public"\n"pulsar"\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"toolset"})," container, create a namespace named ",(0,r.jsx)(n.code,{children:"pulsar"})," in the tenant ",(0,r.jsx)(n.code,{children:"apache"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar-admin namespaces create apache/pulsar\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then you can list the namespaces of tenant ",(0,r.jsx)(n.code,{children:"apache"})," to see if the namespace is created successfully."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar-admin namespaces list apache\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You should see a similar output as below. The namespace ",(0,r.jsx)(n.code,{children:"apache/pulsar"})," has been successfully created."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'\n"apache/pulsar"\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"toolset"})," container, create a topic ",(0,r.jsx)(n.code,{children:"test-topic"})," with ",(0,r.jsx)(n.code,{children:"4"})," partitions in the namespace ",(0,r.jsx)(n.code,{children:"apache/pulsar"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar-admin topics create-partitioned-topic apache/pulsar/test-topic -p 4\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"toolset"})," container, list all the partitioned topics in the namespace ",(0,r.jsx)(n.code,{children:"apache/pulsar"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar-admin topics list-partitioned-topics apache/pulsar\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then you can see all the partitioned topics in the namespace ",(0,r.jsx)(n.code,{children:"apache/pulsar"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'\n"persistent://apache/pulsar/test-topic"\n\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"step-3-use-pulsar-client-to-produce-and-consume-messages",children:"Step 3: Use Pulsar client to produce and consume messages"}),"\n",(0,r.jsx)(n.p,{children:"You can use the Pulsar client to create producers and consumers to produce and consume messages."}),"\n",(0,r.jsxs)(n.p,{children:["By default, the Pulsar Helm chart exposes the Pulsar cluster through a Kubernetes ",(0,r.jsx)(n.code,{children:"LoadBalancer"}),". In Minikube, you can use the following command to check the proxy service."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nkubectl get services -n pulsar | grep pulsar-mini-proxy\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"You will see a similar output as below."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\npulsar-mini-proxy            LoadBalancer   10.97.240.109    <pending>     80:32305/TCP,6650:31816/TCP   28m\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This output tells what are the node ports that Pulsar cluster's binary port and HTTP port are mapped to. The port after ",(0,r.jsx)(n.code,{children:"80:"})," is the HTTP port while the port after ",(0,r.jsx)(n.code,{children:"6650:"})," is the binary port."]}),"\n",(0,r.jsx)(n.p,{children:"Then you can find the IP address and exposed ports of your Minikube server by running the following command."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nminikube service pulsar-mini-proxy -n pulsar\n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Output"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n|-----------|-------------------|-------------|-------------------------|\n| NAMESPACE |       NAME        | TARGET PORT |           URL           |\n|-----------|-------------------|-------------|-------------------------|\n| pulsar    | pulsar-mini-proxy | http/80     | http://172.17.0.4:32305 |\n|           |                   | pulsar/6650 | http://172.17.0.4:31816 |\n|-----------|-------------------|-------------|-------------------------|\n\ud83c\udfc3  Starting tunnel for service pulsar-mini-proxy.\n|-----------|-------------------|-------------|------------------------|\n| NAMESPACE |       NAME        | TARGET PORT |          URL           |\n|-----------|-------------------|-------------|------------------------|\n| pulsar    | pulsar-mini-proxy |             | http://127.0.0.1:61853 |\n|           |                   |             | http://127.0.0.1:61854 |\n|-----------|-------------------|-------------|------------------------|\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"At this point, you can get the service URLs to connect to your Pulsar client. Here are URL examples:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\nwebServiceUrl=http://127.0.0.1:61853/\nbrokerServiceUrl=pulsar://127.0.0.1:61854/\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then you can proceed with the following steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Download the Apache Pulsar tarball from the ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/download/",children:"downloads page"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Decompress the tarball based on your download file."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\ntar -xf <file-name>.tar.gz\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Expose ",(0,r.jsx)(n.code,{children:"PULSAR_HOME"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"(1) Enter the directory of the decompressed download file."}),"\n",(0,r.jsxs)(n.p,{children:["(2) Expose ",(0,r.jsx)(n.code,{children:"PULSAR_HOME"})," as the environment variable."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nexport PULSAR_HOME=$(pwd)\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Configure the Pulsar client."}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"${PULSAR_HOME}/conf/client.conf"})," file, replace ",(0,r.jsx)(n.code,{children:"webServiceUrl"})," and ",(0,r.jsx)(n.code,{children:"brokerServiceUrl"})," with the service URLs you get from the above steps."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a subscription to consume messages from ",(0,r.jsx)(n.code,{children:"apache/pulsar/test-topic"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nbin/pulsar-client consume -s sub apache/pulsar/test-topic  -n 0\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open a new terminal. In the new terminal, create a producer and send 10 messages to the ",(0,r.jsx)(n.code,{children:"test-topic"})," topic."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'\nbin/pulsar-client produce apache/pulsar/test-topic  -m "---------hello apache pulsar-------" -n 10\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Verify the results."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"From the producer side"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Output"})}),"\n",(0,r.jsx)(n.p,{children:"The messages have been produced successfully."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n18:15:15.489 [main] INFO  org.apache.pulsar.client.cli.PulsarClientTool - 10 messages successfully produced\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"From the consumer side"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Output"})}),"\n",(0,r.jsx)(n.p,{children:"At the same time, you can receive the messages as below."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n----- got message -----\n---------hello apache pulsar-------\n\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"step-4-use-pulsar-manager-to-manage-the-cluster",children:"Step 4: Use Pulsar Manager to manage the cluster"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/2.6.3/administration-pulsar-manager",children:"Pulsar Manager"})," is a web-based GUI management tool for managing and monitoring Pulsar."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["By default, the ",(0,r.jsx)(n.code,{children:"Pulsar Manager"})," is exposed as a separate ",(0,r.jsx)(n.code,{children:"LoadBalancer"}),". You can open the Pulsar Manager UI using the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nminikube service -n pulsar pulsar-mini-pulsar-manager\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The Pulsar Manager UI will be open in your browser. You can use the username ",(0,r.jsx)(n.code,{children:"pulsar"})," and password ",(0,r.jsx)(n.code,{children:"pulsar"})," to log into Pulsar Manager."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In Pulsar Manager UI, you can create an environment."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"New Environment"})," button in the top-left corner."]}),"\n",(0,r.jsxs)(n.li,{children:["Type ",(0,r.jsx)(n.code,{children:"pulsar-mini"})," for the field ",(0,r.jsx)(n.code,{children:"Environment Name"})," in the popup window."]}),"\n",(0,r.jsxs)(n.li,{children:["Type ",(0,r.jsx)(n.code,{children:"http://pulsar-mini-broker:8080"})," for the field ",(0,r.jsx)(n.code,{children:"Service URL"})," in the popup window."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"Confirm"})," button in the popup window."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["After successfully creating an environment, you are redirected to the ",(0,r.jsx)(n.code,{children:"tenants"})," page of that environment. Then you can create ",(0,r.jsx)(n.code,{children:"tenants"}),", ",(0,r.jsx)(n.code,{children:"namespaces"})," and ",(0,r.jsx)(n.code,{children:"topics"})," using the Pulsar Manager."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"step-5-use-prometheus-and-grafana-to-monitor-cluster",children:"Step 5: Use Prometheus and Grafana to monitor cluster"}),"\n",(0,r.jsx)(n.p,{children:"Grafana is an open-source visualization tool, which can be used for visualizing time series data into dashboards."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["By default, the Grafana is exposed as a separate ",(0,r.jsx)(n.code,{children:"LoadBalancer"}),". You can open the Grafana UI using the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\nminikube service pulsar-mini-grafana -n pulsar\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The Grafana UI is open in your browser. You can use the username ",(0,r.jsx)(n.code,{children:"pulsar"})," and password ",(0,r.jsx)(n.code,{children:"pulsar"})," to log into the Grafana Dashboard."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"You can view dashboards for different components of a Pulsar cluster."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var a=s(96540);const r={},l=a.createContext(r);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);