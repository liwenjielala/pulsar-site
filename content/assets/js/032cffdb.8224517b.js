"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1751],{38744:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"deploy-monitoring","title":"Monitor","description":"You can use different ways to monitor a Pulsar cluster, exposing both metrics related to the usage of topics and the overall health of the individual components of the cluster.","source":"@site/versioned_docs/version-2.4.1/deploy-monitoring.md","sourceDirName":".","slug":"/deploy-monitoring","permalink":"/docs/2.4.1/deploy-monitoring","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.1/deploy-monitoring.md","tags":[],"version":"2.4.1","frontMatter":{"id":"deploy-monitoring","title":"Monitor","sidebar_label":"Monitor"},"sidebar":"docsSidebar","previous":{"title":"Bare metal multi-cluster","permalink":"/docs/2.4.1/deploy-bare-metal-multi-cluster"},"next":{"title":"ZooKeeper and BookKeeper","permalink":"/docs/2.4.1/administration-zk-bk"}}');var s=n(74848),o=n(28453);const a={id:"deploy-monitoring",title:"Monitor",sidebar_label:"Monitor"},i=void 0,c={},l=[{value:"Collect metrics",id:"collect-metrics",level:2},{value:"Broker stats",id:"broker-stats",level:3},{value:"ZooKeeper stats",id:"zookeeper-stats",level:3},{value:"BookKeeper stats",id:"bookkeeper-stats",level:3},{value:"Managed cursor acknowledgment state",id:"managed-cursor-acknowledgment-state",level:3},{value:"Function and connector stats",id:"function-and-connector-stats",level:3},{value:"Configure Prometheus",id:"configure-prometheus",level:2},{value:"Dashboards",id:"dashboards",level:2},{value:"Pulsar per-topic dashboard",id:"pulsar-per-topic-dashboard",level:3},{value:"Grafana",id:"grafana",level:3},{value:"Alerting rules",id:"alerting-rules",level:2}];function d(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"You can use different ways to monitor a Pulsar cluster, exposing both metrics related to the usage of topics and the overall health of the individual components of the cluster."}),"\n",(0,s.jsx)(r.h2,{id:"collect-metrics",children:"Collect metrics"}),"\n",(0,s.jsx)(r.p,{children:"You can collect broker stats, ZooKeeper stats, and BookKeeper stats."}),"\n",(0,s.jsx)(r.h3,{id:"broker-stats",children:"Broker stats"}),"\n",(0,s.jsx)(r.p,{children:"You can collect Pulsar broker metrics from brokers and export the metrics in JSON format. The Pulsar broker metrics mainly have two types:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"Destination dumps"}),", which contain stats for each individual topic. You can fetch the destination dumps using the command below:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"\nbin/pulsar-admin broker-stats destinations\n\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Broker metrics, which contain the broker information and topics stats aggregated at namespace level. You can fetch the broker metrics by using the following command:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"\nbin/pulsar-admin broker-stats monitoring-metrics\n\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"All the message rates are updated every minute."}),"\n",(0,s.jsxs)(r.p,{children:["The aggregated broker metrics are also exposed in the ",(0,s.jsx)(r.a,{href:"https://prometheus.io",children:"Prometheus"})," format at:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"\nhttp://$BROKER_ADDRESS:8080/metrics/\n\n"})}),"\n",(0,s.jsx)(r.h3,{id:"zookeeper-stats",children:"ZooKeeper stats"}),"\n",(0,s.jsx)(r.p,{children:"The local ZooKeeper, configuration store server and clients that are shipped with Pulsar can expose detailed stats through Prometheus."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"\nhttp://$LOCAL_ZK_SERVER:8000/metrics\nhttp://$GLOBAL_ZK_SERVER:8001/metrics\n\n"})}),"\n",(0,s.jsxs)(r.p,{children:["The default port of local ZooKeeper is ",(0,s.jsx)(r.code,{children:"8000"})," and the default port of the configuration store is ",(0,s.jsx)(r.code,{children:"8001"}),". You can use a different stats port by configuring ",(0,s.jsx)(r.code,{children:"metricsProvider.httpPort"})," in the ",(0,s.jsx)(r.code,{children:"conf/zookeeper.conf"})," file."]}),"\n",(0,s.jsx)(r.h3,{id:"bookkeeper-stats",children:"BookKeeper stats"}),"\n",(0,s.jsxs)(r.p,{children:["You can configure the stats frameworks for BookKeeper by modifying the ",(0,s.jsx)(r.code,{children:"statsProviderClass"})," in the ",(0,s.jsx)(r.code,{children:"conf/bookkeeper.conf"})," file."]}),"\n",(0,s.jsx)(r.p,{children:"The default BookKeeper configuration enables the Prometheus exporter. The configuration is included with Pulsar distribution."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"\nhttp://$BOOKIE_ADDRESS:8000/metrics\n\n"})}),"\n",(0,s.jsxs)(r.p,{children:["The default port for bookie is ",(0,s.jsx)(r.code,{children:"8000"}),". You can change the port by configuring ",(0,s.jsx)(r.code,{children:"prometheusStatsHttpPort"})," in the ",(0,s.jsx)(r.code,{children:"conf/bookkeeper.conf"})," file."]}),"\n",(0,s.jsx)(r.h3,{id:"managed-cursor-acknowledgment-state",children:"Managed cursor acknowledgment state"}),"\n",(0,s.jsx)(r.p,{children:"The acknowledgment state is persistent to the ledger first. When the acknowledgment state fails to be persistent to the ledger, they are persistent to ZooKeeper. To track the stats of acknowledgement, you can configure the metrics for the managed cursor."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:'\nbrk_ml_cursor_persistLedgerSucceed(namespace=", ledger_name="", cursor_name:")\nbrk_ml_cursor_persistLedgerErrors(namespace="", ledger_name="", cursor_name:"")\nbrk_ml_cursor_persistZookeeperSucceed(namespace="", ledger_name="", cursor_name:"")\nbrk_ml_cursor_persistZookeeperErrors(namespace="", ledger_name="", cursor_name:"")\nbrk_ml_cursor_nonContiguousDeletedMessagesRange(namespace="", ledger_name="", cursor_name:"")\n\n'})}),"\n",(0,s.jsx)(r.p,{children:"Those metrics are added in the Prometheus interface, you can monitor and check the metrics stats in the Grafana."}),"\n",(0,s.jsx)(r.h3,{id:"function-and-connector-stats",children:"Function and connector stats"}),"\n",(0,s.jsxs)(r.p,{children:["You can collect functions worker stats from ",(0,s.jsx)(r.code,{children:"functions-worker"})," and export the metrics in JSON formats, which contain functions worker JVM metrics."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"\npulsar-admin functions-worker monitoring-metrics\n\n"})}),"\n",(0,s.jsxs)(r.p,{children:["You can collect functions and connectors metrics from ",(0,s.jsx)(r.code,{children:"functions-worker"})," and export the metrics in JSON formats."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"\npulsar-admin functions-worker function-stats\n\n"})}),"\n",(0,s.jsxs)(r.p,{children:["The aggregated functions and connectors metrics can be exposed in Prometheus formats as below. You can get ",(0,s.jsx)(r.a,{href:"http://pulsar.apache.org/docs/en/next/functions-worker/",children:(0,s.jsx)(r.code,{children:"FUNCTIONS_WORKER_ADDRESS"})})," and ",(0,s.jsx)(r.code,{children:"WORKER_PORT"})," from the ",(0,s.jsx)(r.code,{children:"functions_worker.yml"})," file."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"\nhttp://$FUNCTIONS_WORKER_ADDRESS:$WORKER_PORT/metrics:\n\n"})}),"\n",(0,s.jsx)(r.h2,{id:"configure-prometheus",children:"Configure Prometheus"}),"\n",(0,s.jsxs)(r.p,{children:["You can use Prometheus to collect all the metrics exposed for Pulsar components and set up ",(0,s.jsx)(r.a,{href:"https://grafana.com/",children:"Grafana"})," dashboards to display the metrics and monitor your Pulsar cluster. For details, refer to ",(0,s.jsx)(r.a,{href:"https://prometheus.io/docs/introduction/getting_started/",children:"Prometheus guide"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["When you run Pulsar on bare metal, you can provide the list of nodes to be probed. When you deploy Pulsar in a Kubernetes cluster, the monitoring is setup automatically. For details, refer to ",(0,s.jsx)(r.a,{href:"/docs/2.4.1/helm-deploy",children:"Kubernetes instructions"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"dashboards",children:"Dashboards"}),"\n",(0,s.jsx)(r.p,{children:"When you collect time series statistics, the major problem is to make sure the number of dimensions attached to the data does not explode. Thus you only need to collect time series of metrics aggregated at the namespace level."}),"\n",(0,s.jsx)(r.h3,{id:"pulsar-per-topic-dashboard",children:"Pulsar per-topic dashboard"}),"\n",(0,s.jsxs)(r.p,{children:["The per-topic dashboard instructions are available at ",(0,s.jsx)(r.a,{href:"/docs/administration-pulsar-manager.md",children:"Pulsar manager"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"grafana",children:"Grafana"}),"\n",(0,s.jsx)(r.p,{children:"You can use grafana to create dashboard driven by the data that is stored in Prometheus."}),"\n",(0,s.jsxs)(r.p,{children:["When you deploy Pulsar on Kubernetes with the Pulsar Helm Chart, a ",(0,s.jsx)(r.code,{children:"pulsar-grafana"})," Docker image is enabled by default. You can use the docker image with the principal dashboards."]}),"\n",(0,s.jsx)(r.p,{children:"The following are some Grafana dashboards examples:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"http://pulsar.apache.org/docs/en/deploy-monitoring/#grafana",children:"pulsar-grafana"}),": a Grafana dashboard that displays metrics collected in Prometheus for Pulsar clusters running on Kubernetes."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://github.com/streamnative/apache-pulsar-grafana-dashboard",children:"apache-pulsar-grafana-dashboard"}),": a collection of Grafana dashboard templates for different Pulsar components running on both Kubernetes and on-premise machines."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"alerting-rules",children:"Alerting rules"}),"\n",(0,s.jsxs)(r.p,{children:["You can set alerting rules according to your Pulsar environment. To configure alerting rules for Apache Pulsar, refer to ",(0,s.jsx)(r.a,{href:"https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/",children:"alerting rules"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>i});var t=n(96540);const s={},o=t.createContext(s);function a(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);