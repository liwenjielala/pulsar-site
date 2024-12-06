"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[29678],{77413:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"helm-overview","title":"Apache Pulsar Helm Chart","description":"This is the official supported Helm chart to install Apache Pulsar on a cloud-native environment. It was enhanced based on StreamNative\'s Helm Chart.","source":"@site/versioned_docs/version-2.2.1/helm-overview.md","sourceDirName":".","slug":"/helm-overview","permalink":"/docs/2.2.1/helm-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.1/helm-overview.md","tags":[],"version":"2.2.1","frontMatter":{"id":"helm-overview","title":"Apache Pulsar Helm Chart","sidebar_label":"Overview","original_id":"helm-overview"}}');var l=s(74848),i=s(28453);const t={id:"helm-overview",title:"Apache Pulsar Helm Chart",sidebar_label:"Overview",original_id:"helm-overview"},o=void 0,a={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Pulsar Helm chart quick start",id:"pulsar-helm-chart-quick-start",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Installation",id:"installation",level:2},{value:"Upgrading",id:"upgrading",level:2},{value:"Uninstall",id:"uninstall",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["This is the official supported Helm chart to install Apache Pulsar on a cloud-native environment. It was enhanced based on StreamNative's ",(0,l.jsx)(n.a,{href:"https://github.com/streamnative/charts",children:"Helm Chart"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,l.jsx)(n.p,{children:"The Apache Pulsar Helm chart is one of the most convenient ways\nto operate Pulsar on Kubernetes. This chart contains all the required components to get started and can scale to large deployments."}),"\n",(0,l.jsx)(n.p,{children:"This chart includes all the components for a complete experience, but each part can be configured to install separately."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Pulsar core components:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"ZooKeeper"}),"\n",(0,l.jsx)(n.li,{children:"Bookies"}),"\n",(0,l.jsx)(n.li,{children:"Brokers"}),"\n",(0,l.jsx)(n.li,{children:"Function workers"}),"\n",(0,l.jsx)(n.li,{children:"Proxies"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Control Center:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Pulsar Manager"}),"\n",(0,l.jsx)(n.li,{children:"Prometheus"}),"\n",(0,l.jsx)(n.li,{children:"Grafana"}),"\n",(0,l.jsx)(n.li,{children:"Alert Manager"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"It includes support for:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Security","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Automatically provisioned TLS certs, using ",(0,l.jsx)(n.a,{href:"https://www.jetstack.io/",children:"Jetstack"}),"'s ",(0,l.jsx)(n.a,{href:"https://cert-manager.io/docs/",children:"cert-manager"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"self-signed"}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://letsencrypt.org/",children:"Let's Encrypt"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["TLS Encryption","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Proxy"}),"\n",(0,l.jsx)(n.li,{children:"Broker"}),"\n",(0,l.jsx)(n.li,{children:"Toolset"}),"\n",(0,l.jsx)(n.li,{children:"Bookie"}),"\n",(0,l.jsx)(n.li,{children:"ZooKeeper"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Authentication","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"JWT"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Authorization"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Storage","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Non-persistence storage"}),"\n",(0,l.jsx)(n.li,{children:"Persistence Volume"}),"\n",(0,l.jsx)(n.li,{children:"Local Persistent Volumes"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Functions","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Kubernetes Runtime"}),"\n",(0,l.jsx)(n.li,{children:"Process Runtime"}),"\n",(0,l.jsx)(n.li,{children:"Thread Runtime"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Operations","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Independent Image Versions for all components, enabling controlled upgrades"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"pulsar-helm-chart-quick-start",children:"Pulsar Helm chart quick start"}),"\n",(0,l.jsxs)(n.p,{children:["For those looking to get up and running with these charts as fast\nas possible, in a ",(0,l.jsx)(n.strong,{children:"non-production"})," use case, we provide\na ",(0,l.jsx)(n.a,{href:"/docs/2.2.1/getting-started-helm",children:"quick start guide"})," for Proof of Concept (PoC) deployments."]}),"\n",(0,l.jsxs)(n.p,{children:["This guide walks the user through deploying these charts with default\nvalues & features, but ",(0,l.jsx)(n.em,{children:"does not"})," meet production ready requirements.\nIf you wish to deploy these charts into production under sustained load,\nyou should follow the complete ",(0,l.jsx)(n.a,{href:"/docs/2.2.1/helm-install",children:"Installation Guide"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,l.jsxs)(n.p,{children:["We've done our best to make these charts as seamless as possible,\noccasionally troubles do surface outside of our control. We've collected\ntips and tricks for troubleshooting common issues. Please examine these first before raising an ",(0,l.jsx)(n.a,{href:"https://github.com/apache/pulsar/issues/new/choose",children:"issue"}),", and feel free to add to them by raising a ",(0,l.jsx)(n.a,{href:"https://github.com/apache/pulsar/compare",children:"Pull Request"}),"!"]}),"\n",(0,l.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)(n.p,{children:"The Apache Pulsar Helm chart contains all required dependencies."}),"\n",(0,l.jsxs)(n.p,{children:["If you are just looking to deploy a Proof of Concept for testing,\nwe strongly suggest you follow our ",(0,l.jsx)(n.a,{href:"/docs/2.2.1/getting-started-helm",children:"Quick Start Guide"})," for your first iteration."]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/2.2.1/helm-prepare",children:"Preparation"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/2.2.1/helm-deploy",children:"Deployment"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"upgrading",children:"Upgrading"}),"\n",(0,l.jsxs)(n.p,{children:["Once your Pulsar Chart is installed, configuration changes and chart\nupdates should be done using ",(0,l.jsx)(n.code,{children:"helm upgrade"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"\ngit clone https://github.com/apache/pulsar-helm-chart\ncd pulsar-helm-chart\nhelm get values <pulsar-release-name> > pulsar.yaml\nhelm upgrade <pulsar-release-name> charts/pulsar -f pulsar.yaml\n\n"})}),"\n",(0,l.jsxs)(n.p,{children:["For more detailed information, see ",(0,l.jsx)(n.a,{href:"/docs/2.2.1/helm-upgrade",children:"Upgrading"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"uninstall",children:"Uninstall"}),"\n",(0,l.jsx)(n.p,{children:"To uninstall the Pulsar Chart, run the following command:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"\nhelm delete <pulsar-release-name>\n\n"})}),"\n",(0,l.jsxs)(n.p,{children:["For the purposes of continuity, these charts have some Kubernetes objects that are not removed when performing ",(0,l.jsx)(n.code,{children:"helm delete"}),".\nThese items we require you to ",(0,l.jsx)(n.em,{children:"consciously"})," remove them, as they affect re-deployment should you choose to."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["PVCs for stateful data, which you must ",(0,l.jsx)(n.em,{children:"consciously"})," remove","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"ZooKeeper: This is your metadata."}),"\n",(0,l.jsx)(n.li,{children:"BookKeeper: This is your data."}),"\n",(0,l.jsx)(n.li,{children:"Prometheus: This is your metrics data, which can be safely removed."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Secrets, if generated by our ",(0,l.jsx)(n.a,{href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/prepare_helm_release.sh",children:"prepare release script"}),". They contain secret keys, tokens, etc. You can use ",(0,l.jsx)(n.a,{href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/cleanup_helm_release.sh",children:"cleanup release script"})," to remove these secrets and tokens as needed."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var r=s(96540);const l={},i=r.createContext(l);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);