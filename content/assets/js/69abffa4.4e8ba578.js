"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[91146],{20687:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"deploy-monitoring","title":"Monitoring","description":"You can use different ways to monitor a Pulsar cluster, exposing both metrics that relate to the usage of topics and the overall health of the individual components of the cluster.","source":"@site/versioned_docs/version-2.5.0/deploy-monitoring.md","sourceDirName":".","slug":"/deploy-monitoring","permalink":"/docs/2.5.0/deploy-monitoring","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.0/deploy-monitoring.md","tags":[],"version":"2.5.0","frontMatter":{"id":"deploy-monitoring","title":"Monitoring","sidebar_label":"Monitoring","original_id":"deploy-monitoring"},"sidebar":"docsSidebar","previous":{"title":"Bare metal multi-cluster","permalink":"/docs/2.5.0/deploy-bare-metal-multi-cluster"},"next":{"title":"ZooKeeper and BookKeeper","permalink":"/docs/2.5.0/administration-zk-bk"}}');var r=o(74848),s=o(28453);const a={id:"deploy-monitoring",title:"Monitoring",sidebar_label:"Monitoring",original_id:"deploy-monitoring"},i=void 0,l={},d=[{value:"Collect metrics",id:"collect-metrics",level:2},{value:"Broker stats",id:"broker-stats",level:3},{value:"ZooKeeper stats",id:"zookeeper-stats",level:3},{value:"BookKeeper stats",id:"bookkeeper-stats",level:3},{value:"Configure Prometheus",id:"configure-prometheus",level:2},{value:"Dashboards",id:"dashboards",level:2},{value:"Pulsar per-topic dashboard",id:"pulsar-per-topic-dashboard",level:3},{value:"Grafana",id:"grafana",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"You can use different ways to monitor a Pulsar cluster, exposing both metrics that relate to the usage of topics and the overall health of the individual components of the cluster."}),"\n",(0,r.jsx)(t.h2,{id:"collect-metrics",children:"Collect metrics"}),"\n",(0,r.jsx)(t.p,{children:"You can collect broker stats, ZooKeeper stats, and BookKeeper stats."}),"\n",(0,r.jsx)(t.h3,{id:"broker-stats",children:"Broker stats"}),"\n",(0,r.jsx)(t.p,{children:"You can collect Pulsar broker metrics from brokers and export the metrics in JSON format. The Pulsar broker metrics mainly have two types:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Destination dumps"}),", which contain stats for each individual topic. You can fetch the destination dumps using the command below:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"\nbin/pulsar-admin broker-stats destinations\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Broker metrics, which contain the broker information and topics stats aggregated at namespace level. You can fetch the broker metrics using the command below:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"\nbin/pulsar-admin broker-stats monitoring-metrics\n\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"All the message rates are updated every 1min."}),"\n",(0,r.jsxs)(t.p,{children:["The aggregated broker metrics are also exposed in the ",(0,r.jsx)(t.a,{href:"https://prometheus.io",children:"Prometheus"})," format at:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"\nhttp://$BROKER_ADDRESS:8080/metrics//\n\n"})}),"\n",(0,r.jsx)(t.h3,{id:"zookeeper-stats",children:"ZooKeeper stats"}),"\n",(0,r.jsx)(t.p,{children:"The local Zookeeper and configuration store server and clients that are shipped with Pulsar have been instrumented to expose detailed stats through Prometheus as well."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"\nhttp://$LOCAL_ZK_SERVER:8000/metrics\nhttp://$GLOBAL_ZK_SERVER:8001/metrics\n\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The default port of local ZooKeeper is ",(0,r.jsx)(t.code,{children:"8000"})," and the default port of configuration store is ",(0,r.jsx)(t.code,{children:"8001"}),". You can change the default port of local Zookeeper and configuration store by specifying system property ",(0,r.jsx)(t.code,{children:"stats_server_port"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"bookkeeper-stats",children:"BookKeeper stats"}),"\n",(0,r.jsxs)(t.p,{children:["For BookKeeper you can configure the stats frameworks by changing the ",(0,r.jsx)(t.code,{children:"statsProviderClass"})," in\n",(0,r.jsx)(t.code,{children:"conf/bookkeeper.conf"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The default BookKeeper configuration, which is included with Pulsar distribution, enables the Prometheus exporter."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"\nhttp://$BOOKIE_ADDRESS:8000/metrics\n\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The default port for bookie is ",(0,r.jsx)(t.code,{children:"8000"})," (instead of ",(0,r.jsx)(t.code,{children:"8080"}),"). You can change the port by configuring ",(0,r.jsx)(t.code,{children:"prometheusStatsHttpPort"})," in ",(0,r.jsx)(t.code,{children:"conf/bookkeeper.conf"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"configure-prometheus",children:"Configure Prometheus"}),"\n",(0,r.jsxs)(t.p,{children:["You can use Prometheus to collect and store the metrics data. For details, refer to ",(0,r.jsx)(t.a,{href:"https://prometheus.io/docs/introduction/getting_started/",children:"Prometheus guide"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["When you run Pulsar on bare metal, you can provide the list of nodes that needs to be probed. When you deploy Pulsar in a Kubernetes cluster, the monitoring is automatically setup with the ",(0,r.jsx)(t.a,{href:"/docs/2.5.0/deploy-kubernetes",children:"provided"})," instructions."]}),"\n",(0,r.jsx)(t.h2,{id:"dashboards",children:"Dashboards"}),"\n",(0,r.jsx)(t.p,{children:"When you collect time series statistics, the major problem is to make sure the number of dimensions attached to the data does not explode."}),"\n",(0,r.jsx)(t.p,{children:"For that reason you only need to collect time series of metrics aggregated at the namespace level."}),"\n",(0,r.jsx)(t.h3,{id:"pulsar-per-topic-dashboard",children:"Pulsar per-topic dashboard"}),"\n",(0,r.jsxs)(t.p,{children:["The per-topic dashboard instructions are available at ",(0,r.jsx)(t.a,{href:"/docs/2.5.0/administration-dashboard",children:"Dashboard"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"grafana",children:"Grafana"}),"\n",(0,r.jsx)(t.p,{children:"You can use grafana to easily create dashboard driven by the data that is stored in Prometheus."}),"\n",(0,r.jsxs)(t.p,{children:["When you deploy Pulsar on Kubernetes, a ",(0,r.jsx)(t.code,{children:"pulsar-grafana"})," Docker image is enabled by default. You can use the docker image with the principal dashboards."]}),"\n",(0,r.jsx)(t.p,{children:"Enter the command below to use the dashboard manually:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"\ndocker run -p3000:3000 \\\n        -e PROMETHEUS_URL=http://$PROMETHEUS_HOST:9090/ \\\n        apachepulsar/pulsar-grafana:latest\n\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>i});var n=o(96540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);