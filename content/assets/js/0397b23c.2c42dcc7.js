"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[74430],{77050:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"helm-overview","title":"Apache Pulsar Helm Chart","description":"This is the official supported Helm chart to install Apache Pulsar on a cloud-native environment. It was enhanced based on StreamNative\'s Helm Chart.","source":"@site/versioned_docs/version-2.8.x/helm-overview.md","sourceDirName":".","slug":"/helm-overview","permalink":"/docs/2.8.x/helm-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/helm-overview.md","tags":[],"version":"2.8.x","frontMatter":{"id":"helm-overview","title":"Apache Pulsar Helm Chart","sidebar_label":"Overview","original_id":"helm-overview"},"sidebar":"docsSidebar","previous":{"title":"How to monitor transactions?","permalink":"/docs/2.8.x/txn-monitor"},"next":{"title":"Prepare","permalink":"/docs/2.8.x/helm-prepare"}}');var l=s(74848),t=s(28453);const i={id:"helm-overview",title:"Apache Pulsar Helm Chart",sidebar_label:"Overview",original_id:"helm-overview"},a=void 0,o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Pulsar Helm chart quick start",id:"pulsar-helm-chart-quick-start",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Installation",id:"installation",level:2},{value:"Upgrading",id:"upgrading",level:2},{value:"Uninstallation",id:"uninstallation",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["This is the official supported Helm chart to install Apache Pulsar on a cloud-native environment. It was enhanced based on StreamNative's ",(0,l.jsx)(n.a,{href:"https://github.com/streamnative/charts",children:"Helm Chart"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,l.jsx)(n.p,{children:"The Apache Pulsar Helm chart is one of the most convenient ways to operate Pulsar on Kubernetes. This Pulsar Helm chart contains all the required components to get started and can scale to large deployments."}),"\n",(0,l.jsx)(n.p,{children:"This chart includes all the components for a complete experience, but each part can be configured to be installed separately."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Pulsar core components:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"ZooKeeper"}),"\n",(0,l.jsx)(n.li,{children:"Bookies"}),"\n",(0,l.jsx)(n.li,{children:"Brokers"}),"\n",(0,l.jsx)(n.li,{children:"Function workers"}),"\n",(0,l.jsx)(n.li,{children:"Proxies"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Control Center:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Pulsar Manager"}),"\n",(0,l.jsx)(n.li,{children:"Prometheus"}),"\n",(0,l.jsx)(n.li,{children:"Grafana"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"It includes support for:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Security","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Automatically provisioned TLS certificates, using ",(0,l.jsx)(n.a,{href:"https://www.jetstack.io/",children:"Jetstack"}),"'s ",(0,l.jsx)(n.a,{href:"https://cert-manager.io/docs/",children:"cert-manager"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"self-signed"}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://letsencrypt.org/",children:"Let's Encrypt"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["TLS Encryption","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Proxy"}),"\n",(0,l.jsx)(n.li,{children:"Broker"}),"\n",(0,l.jsx)(n.li,{children:"Toolset"}),"\n",(0,l.jsx)(n.li,{children:"Bookie"}),"\n",(0,l.jsx)(n.li,{children:"ZooKeeper"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Authentication","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"JWT"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Authorization"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Storage","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Non-persistence storage"}),"\n",(0,l.jsx)(n.li,{children:"Persistence volume"}),"\n",(0,l.jsx)(n.li,{children:"Local persistent volumes"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Functions","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Kubernetes Runtime"}),"\n",(0,l.jsx)(n.li,{children:"Process Runtime"}),"\n",(0,l.jsx)(n.li,{children:"Thread Runtime"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Operations","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Independent image versions for all components, enabling controlled upgrades"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"pulsar-helm-chart-quick-start",children:"Pulsar Helm chart quick start"}),"\n",(0,l.jsxs)(n.p,{children:["To get up and run with these charts as fast as possible, in a ",(0,l.jsx)(n.strong,{children:"non-production"})," use case, we provide a ",(0,l.jsx)(n.a,{href:"/docs/2.8.x/getting-started-helm",children:"quick start guide"})," for Proof of Concept (PoC) deployments."]}),"\n",(0,l.jsxs)(n.p,{children:["This guide walks the user through deploying these charts with default values and features, but ",(0,l.jsx)(n.em,{children:"does not"})," meet production ready requirements. To deploy these charts into production under sustained load, follow the complete ",(0,l.jsx)(n.a,{href:"/docs/2.8.x/helm-install",children:"Installation Guide"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,l.jsxs)(n.p,{children:["We have done our best to make these charts as seamless as possible. Occasionally, troubles do go outside of our control. We have collected tips and tricks for troubleshooting common issues. Please check them first before raising an ",(0,l.jsx)(n.a,{href:"https://github.com/apache/pulsar/issues/new/choose",children:"issue"}),", and feel free to add to them by raising a ",(0,l.jsx)(n.a,{href:"https://github.com/apache/pulsar/compare",children:"Pull Request"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)(n.p,{children:"The Apache Pulsar Helm chart contains all required dependencies."}),"\n",(0,l.jsxs)(n.p,{children:["If you deploy a PoC for testing, we strongly suggest you follow our ",(0,l.jsx)(n.a,{href:"/docs/2.8.x/getting-started-helm",children:"Quick Start Guide"})," for your first iteration."]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/2.8.x/helm-prepare",children:"Preparation"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/2.8.x/helm-deploy",children:"Deployment"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"upgrading",children:"Upgrading"}),"\n",(0,l.jsxs)(n.p,{children:["Once the Pulsar Helm chart is installed, use the ",(0,l.jsx)(n.code,{children:"helm upgrade"})," to complete configuration changes and chart updates."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"\nhelm repo add apache https://pulsar.apache.org/charts\nhelm repo update\nhelm get values <pulsar-release-name> > pulsar.yaml\nhelm upgrade <pulsar-release-name> apache/pulsar -f pulsar.yaml\n\n"})}),"\n",(0,l.jsxs)(n.p,{children:["For more detailed information, see ",(0,l.jsx)(n.a,{href:"/docs/2.8.x/helm-upgrade",children:"Upgrading"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"uninstallation",children:"Uninstallation"}),"\n",(0,l.jsx)(n.p,{children:"To uninstall the Pulsar Helm chart, run the following command:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"\nhelm delete <pulsar-release-name>\n\n"})}),"\n",(0,l.jsxs)(n.p,{children:["For the purposes of continuity, these charts have some Kubernetes objects that cannot be removed when performing ",(0,l.jsx)(n.code,{children:"helm delete"}),".\nIt is recommended to ",(0,l.jsx)(n.em,{children:"consciously"})," remove these items, as they affect re-deployment."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["PVCs for stateful data: ",(0,l.jsx)(n.em,{children:"consciously"})," remove these items.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"ZooKeeper: This is your metadata."}),"\n",(0,l.jsx)(n.li,{children:"BookKeeper: This is your data."}),"\n",(0,l.jsx)(n.li,{children:"Prometheus: This is your metrics data, which can be safely removed."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Secrets: if the secrets are generated by the ",(0,l.jsx)(n.a,{href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/prepare_helm_release.sh",children:"prepare release script"}),", they contain secret keys and tokens. You can use the ",(0,l.jsx)(n.a,{href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/cleanup_helm_release.sh",children:"cleanup release script"})," to remove these secrets and tokens as needed."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var r=s(96540);const l={},t=r.createContext(l);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);