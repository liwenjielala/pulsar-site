"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[71720],{44414:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"deploy-monitoring","title":"Monitor","description":"You can use different ways to monitor a Pulsar cluster, exposing both metrics related to the usage of topics and the overall health of the individual components of the cluster.","source":"@site/versioned_docs/version-2.8.x/deploy-monitoring.md","sourceDirName":".","slug":"/deploy-monitoring","permalink":"/docs/2.8.x/deploy-monitoring","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/deploy-monitoring.md","tags":[],"version":"2.8.x","frontMatter":{"id":"deploy-monitoring","title":"Monitor","sidebar_label":"Monitor","original_id":"deploy-monitoring"},"sidebar":"docsSidebar","previous":{"title":"Docker","permalink":"/docs/2.8.x/deploy-docker"},"next":{"title":"ZooKeeper and BookKeeper","permalink":"/docs/2.8.x/administration-zk-bk"}}');var t=r(74848),o=r(28453);const a={id:"deploy-monitoring",title:"Monitor",sidebar_label:"Monitor",original_id:"deploy-monitoring"},i=void 0,c={},l=[{value:"Collect metrics",id:"collect-metrics",level:2},{value:"Broker stats",id:"broker-stats",level:3},{value:"ZooKeeper stats",id:"zookeeper-stats",level:3},{value:"BookKeeper stats",id:"bookkeeper-stats",level:3},{value:"Managed cursor acknowledgment state",id:"managed-cursor-acknowledgment-state",level:3},{value:"Function and connector stats",id:"function-and-connector-stats",level:3},{value:"Configure Prometheus",id:"configure-prometheus",level:2},{value:"Dashboards",id:"dashboards",level:2},{value:"Pulsar per-topic dashboard",id:"pulsar-per-topic-dashboard",level:3},{value:"Grafana",id:"grafana",level:3},{value:"Alerting rules",id:"alerting-rules",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"You can use different ways to monitor a Pulsar cluster, exposing both metrics related to the usage of topics and the overall health of the individual components of the cluster."}),"\n",(0,t.jsx)(n.h2,{id:"collect-metrics",children:"Collect metrics"}),"\n",(0,t.jsx)(n.p,{children:"You can collect broker stats, ZooKeeper stats, and BookKeeper stats."}),"\n",(0,t.jsx)(n.h3,{id:"broker-stats",children:"Broker stats"}),"\n",(0,t.jsx)(n.p,{children:"You can collect Pulsar broker metrics from brokers and export the metrics in JSON format. The Pulsar broker metrics mainly have two types:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Destination dumps"}),", which contain stats for each individual topic. You can fetch the destination dumps using the command below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\nbin/pulsar-admin broker-stats destinations\n\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Broker metrics, which contain the broker information and topics stats aggregated at namespace level. You can fetch the broker metrics by using the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\nbin/pulsar-admin broker-stats monitoring-metrics\n\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"All the message rates are updated every minute."}),"\n",(0,t.jsxs)(n.p,{children:["The aggregated broker metrics are also exposed in the ",(0,t.jsx)(n.a,{href:"https://prometheus.io",children:"Prometheus"})," format at:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\nhttp://$BROKER_ADDRESS:8080/metrics/\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"zookeeper-stats",children:"ZooKeeper stats"}),"\n",(0,t.jsx)(n.p,{children:"The local ZooKeeper, configuration store server and clients that are shipped with Pulsar can expose detailed stats through Prometheus."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\nhttp://$LOCAL_ZK_SERVER:8000/metrics\nhttp://$GLOBAL_ZK_SERVER:8001/metrics\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The default port of local ZooKeeper is ",(0,t.jsx)(n.code,{children:"8000"})," and the default port of the configuration store is ",(0,t.jsx)(n.code,{children:"8001"}),". You can use a different stats port by configuring ",(0,t.jsx)(n.code,{children:"metricsProvider.httpPort"})," in the ",(0,t.jsx)(n.code,{children:"conf/zookeeper.conf"})," file."]}),"\n",(0,t.jsx)(n.h3,{id:"bookkeeper-stats",children:"BookKeeper stats"}),"\n",(0,t.jsxs)(n.p,{children:["You can configure the stats frameworks for BookKeeper by modifying the ",(0,t.jsx)(n.code,{children:"statsProviderClass"})," in the ",(0,t.jsx)(n.code,{children:"conf/bookkeeper.conf"})," file."]}),"\n",(0,t.jsx)(n.p,{children:"The default BookKeeper configuration enables the Prometheus exporter. The configuration is included with Pulsar distribution."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\nhttp://$BOOKIE_ADDRESS:8000/metrics\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The default port for bookie is ",(0,t.jsx)(n.code,{children:"8000"}),". You can change the port by configuring ",(0,t.jsx)(n.code,{children:"prometheusStatsHttpPort"})," in the ",(0,t.jsx)(n.code,{children:"conf/bookkeeper.conf"})," file."]}),"\n",(0,t.jsx)(n.h3,{id:"managed-cursor-acknowledgment-state",children:"Managed cursor acknowledgment state"}),"\n",(0,t.jsx)(n.p,{children:"The acknowledgment state is persistent to the ledger first. When the acknowledgment state fails to be persistent to the ledger, they are persistent to ZooKeeper. To track the stats of acknowledgement, you can configure the metrics for the managed cursor."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'\npulsar_ml_cursor_persistLedgerSucceed(namespace=", ledger_name="", cursor_name:")\npulsar_ml_cursor_persistLedgerErrors(namespace="", ledger_name="", cursor_name:"")\npulsar_ml_cursor_persistZookeeperSucceed(namespace="", ledger_name="", cursor_name:"")\npulsar_ml_cursor_persistZookeeperErrors(namespace="", ledger_name="", cursor_name:"")\npulsar_ml_cursor_nonContiguousDeletedMessagesRange(namespace="", ledger_name="", cursor_name:"")\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"Those metrics are added in the Prometheus interface, you can monitor and check the metrics stats in the Grafana."}),"\n",(0,t.jsx)(n.h3,{id:"function-and-connector-stats",children:"Function and connector stats"}),"\n",(0,t.jsxs)(n.p,{children:["You can collect functions worker stats from ",(0,t.jsx)(n.code,{children:"functions-worker"})," and export the metrics in JSON formats, which contain functions worker JVM metrics."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\npulsar-admin functions-worker monitoring-metrics\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can collect functions and connectors metrics from ",(0,t.jsx)(n.code,{children:"functions-worker"})," and export the metrics in JSON formats."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\npulsar-admin functions-worker function-stats\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The aggregated functions and connectors metrics can be exposed in Prometheus formats as below. You can get ",(0,t.jsx)(n.a,{href:"/docs/2.8.x/functions-worker",children:(0,t.jsx)(n.code,{children:"FUNCTIONS_WORKER_ADDRESS"})})," and ",(0,t.jsx)(n.code,{children:"WORKER_PORT"})," from the ",(0,t.jsx)(n.code,{children:"functions_worker.yml"})," file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\nhttp://$FUNCTIONS_WORKER_ADDRESS:$WORKER_PORT/metrics:\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"configure-prometheus",children:"Configure Prometheus"}),"\n",(0,t.jsxs)(n.p,{children:["You can use Prometheus to collect all the metrics exposed for Pulsar components and set up ",(0,t.jsx)(n.a,{href:"https://grafana.com/",children:"Grafana"})," dashboards to display the metrics and monitor your Pulsar cluster. For details, refer to ",(0,t.jsx)(n.a,{href:"https://prometheus.io/docs/introduction/getting_started/",children:"Prometheus guide"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["When you run Pulsar on bare metal, you can provide the list of nodes to be probed. When you deploy Pulsar in a Kubernetes cluster, the monitoring is setup automatically. For details, refer to ",(0,t.jsx)(n.a,{href:"/docs/2.8.x/helm-deploy",children:"Kubernetes instructions"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"dashboards",children:"Dashboards"}),"\n",(0,t.jsx)(n.p,{children:"When you collect time series statistics, the major problem is to make sure the number of dimensions attached to the data does not explode. Thus you only need to collect time series of metrics aggregated at the namespace level."}),"\n",(0,t.jsx)(n.h3,{id:"pulsar-per-topic-dashboard",children:"Pulsar per-topic dashboard"}),"\n",(0,t.jsxs)(n.p,{children:["The per-topic dashboard instructions are available at ",(0,t.jsx)(n.a,{href:"/docs/2.8.x/administration-pulsar-manager",children:"Pulsar manager"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"grafana",children:"Grafana"}),"\n",(0,t.jsx)(n.p,{children:"You can use grafana to create dashboard driven by the data that is stored in Prometheus."}),"\n",(0,t.jsxs)(n.p,{children:["When you deploy Pulsar on Kubernetes, a ",(0,t.jsx)(n.code,{children:"pulsar-grafana"})," Docker image is enabled by default. You can use the docker image with the principal dashboards."]}),"\n",(0,t.jsx)(n.p,{children:"Enter the command below to use the dashboard manually:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\ndocker run -p3000:3000 \\\n        -e PROMETHEUS_URL=http://$PROMETHEUS_HOST:9090/ \\\n        apachepulsar/pulsar-grafana:latest\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"The following are some Grafana dashboards examples:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/2.8.x/deploy-monitoring#grafana",children:"pulsar-grafana"}),": a Grafana dashboard that displays metrics collected in Prometheus for Pulsar clusters running on Kubernetes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/streamnative/apache-pulsar-grafana-dashboard",children:"apache-pulsar-grafana-dashboard"}),": a collection of Grafana dashboard templates for different Pulsar components running on both Kubernetes and on-premise machines."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"alerting-rules",children:"Alerting rules"}),"\n",(0,t.jsxs)(n.p,{children:["You can set alerting rules according to your Pulsar environment. To configure alerting rules for Apache Pulsar, refer to ",(0,t.jsx)(n.a,{href:"https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/",children:"alerting rules"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var s=r(96540);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);