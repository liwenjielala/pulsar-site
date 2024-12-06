"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[76187],{96191:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"sql-deployment-configurations","title":"Pulsar SQL configuration and deployment","description":"You can configure Presto Pulsar connector and deploy a cluster with the following instruction.","source":"@site/versioned_docs/version-2.7.1/sql-deployment-configurations.md","sourceDirName":".","slug":"/sql-deployment-configurations","permalink":"/docs/2.7.1/sql-deployment-configurations","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.1/sql-deployment-configurations.md","tags":[],"version":"2.7.1","frontMatter":{"id":"sql-deployment-configurations","title":"Pulsar SQL configuration and deployment","sidebar_label":"Configuration and deployment","original_id":"sql-deployment-configurations"},"sidebar":"docsSidebar","previous":{"title":"Query data","permalink":"/docs/2.7.1/sql-getting-started"},"next":{"title":"REST APIs","permalink":"/docs/2.7.1/sql-rest-api"}}');var t=r(74848),s=r(28453);const l={id:"sql-deployment-configurations",title:"Pulsar SQL configuration and deployment",sidebar_label:"Configuration and deployment",original_id:"sql-deployment-configurations"},i=void 0,a={},c=[{value:"Configure Presto Pulsar Connector",id:"configure-presto-pulsar-connector",level:2},{value:"Query data from existing Presto clusters",id:"query-data-from-existing-presto-clusters",level:2},{value:"Deploy a new cluster",id:"deploy-a-new-cluster",level:2},{value:"Deploy a cluster on multiple nodes",id:"deploy-a-cluster-on-multiple-nodes",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"You can configure Presto Pulsar connector and deploy a cluster with the following instruction."}),"\n",(0,t.jsx)(n.h2,{id:"configure-presto-pulsar-connector",children:"Configure Presto Pulsar Connector"}),"\n",(0,t.jsxs)(n.p,{children:["You can configure Presto Pulsar Connector in the ",(0,t.jsx)(n.code,{children:"${project.root}/conf/presto/catalog/pulsar.properties"})," properties file. The configuration for the connector and the default values are as follows."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-properties",children:"\n# name of the connector to be displayed in the catalog\nconnector.name=pulsar\n\n# the url of Pulsar broker service\npulsar.broker-service-url=http://localhost:8080\n\n# URI of Zookeeper cluster\npulsar.zookeeper-uri=localhost:2181\n\n# minimum number of entries to read at a single time\npulsar.entry-read-batch-size=100\n\n# default number of splits to use per query\npulsar.target-num-splits=4\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can connect Presto to a Pulsar cluster with multiple hosts. To configure multiple hosts for brokers, add multiple URLs to ",(0,t.jsx)(n.code,{children:"pulsar.broker-service-url"}),". To configure multiple hosts for ZooKeeper, add multiple URIs to ",(0,t.jsx)(n.code,{children:"pulsar.zookeeper-uri"}),". The following is an example."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\npulsar.broker-service-url=http://localhost:8080,localhost:8081,localhost:8082\npulsar.zookeeper-uri=localhost1,localhost2:2181\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note: by default, Pulsar SQL does not get the last message in a topic"}),". It is by design and controlled by settings. By default, BookKeeper LAC only advances when subsequent entries are added. If there is no subsequent entry added, the last written entry is not visible to readers until the ledger is closed. This is not a problem for Pulsar which uses managed ledger, but Pulsar SQL directly reads from BookKeeper ledger."]}),"\n",(0,t.jsx)(n.p,{children:"If you want to get the last message in a topic, set the following configurations:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For the broker configuration, set ",(0,t.jsx)(n.code,{children:"bookkeeperExplicitLacIntervalInMills"})," > 0 in ",(0,t.jsx)(n.code,{children:"broker.conf"})," or ",(0,t.jsx)(n.code,{children:"standalone.conf"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For the Presto configuration, set ",(0,t.jsx)(n.code,{children:"pulsar.bookkeeper-explicit-interval"})," > 0 and ",(0,t.jsx)(n.code,{children:"pulsar.bookkeeper-use-v2-protocol=false"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"However, using BookKeeper V3 protocol introduces additional GC overhead to BK as it uses Protobuf."}),"\n",(0,t.jsx)(n.h2,{id:"query-data-from-existing-presto-clusters",children:"Query data from existing Presto clusters"}),"\n",(0,t.jsx)(n.p,{children:"If you already have a Presto cluster, you can copy the Presto Pulsar connector plugin to your existing cluster. Download the archived plugin package with the following command."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.7.1/apache-pulsar-2.7.1-bin.tar.gz\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"deploy-a-new-cluster",children:"Deploy a new cluster"}),"\n",(0,t.jsxs)(n.p,{children:["Since Pulsar SQL is powered by ",(0,t.jsx)(n.a,{href:"https://prestosql.io",children:"Presto"}),", the configuration for deployment is the same for the Pulsar SQL worker."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["For how to set up a standalone single node environment, refer to ",(0,t.jsx)(n.a,{href:"/docs/2.7.1/sql-getting-started",children:"Query data"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"You can use the same CLI args as the Presto launcher."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ ./bin/pulsar sql-worker --help\nUsage: launcher [options] command\n\nCommands: run, start, stop, restart, kill, status\n\nOptions:\n  -h, --help            show this help message and exit\n  -v, --verbose         Run verbosely\n  --etc-dir=DIR         Defaults to INSTALL_PATH/etc\n  --launcher-config=FILE\n                        Defaults to INSTALL_PATH/bin/launcher.properties\n  --node-config=FILE    Defaults to ETC_DIR/node.properties\n  --jvm-config=FILE     Defaults to ETC_DIR/jvm.config\n  --config=FILE         Defaults to ETC_DIR/config.properties\n  --log-levels-file=FILE\n                        Defaults to ETC_DIR/log.properties\n  --data-dir=DIR        Defaults to INSTALL_PATH\n  --pid-file=FILE       Defaults to DATA_DIR/var/run/launcher.pid\n  --launcher-log-file=FILE\n                        Defaults to DATA_DIR/var/log/launcher.log (only in\n                        daemon mode)\n  --server-log-file=FILE\n                        Defaults to DATA_DIR/var/log/server.log (only in\n                        daemon mode)\n  -D NAME=VALUE         Set a Java system property\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The default configuration for the cluster is located in ",(0,t.jsx)(n.code,{children:"${project.root}/conf/presto"}),". You can customize your deployment by modifying the default configuration."]}),"\n",(0,t.jsx)(n.p,{children:"You can set the worker to read from a different configuration directory, or set a different directory to write data."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ ./bin/pulsar sql-worker run --etc-dir /tmp/incubator-pulsar/conf/presto --data-dir /tmp/presto-1\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can start the worker as daemon process."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ ./bin/pulsar sql-worker start\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"deploy-a-cluster-on-multiple-nodes",children:"Deploy a cluster on multiple nodes"}),"\n",(0,t.jsx)(n.p,{children:"You can deploy a Pulsar SQL cluster or Presto cluster on multiple nodes. The following example shows how to deploy a cluster on three-node cluster."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Copy the Pulsar binary distribution to three nodes."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The first node runs as Presto coordinator. The minimal configuration requirement in the ",(0,t.jsx)(n.code,{children:"${project.root}/conf/presto/config.properties"})," file is as follows."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-properties",children:"\ncoordinator=true\nnode-scheduler.include-coordinator=true\nhttp-server.http.port=8080\nquery.max-memory=50GB\nquery.max-memory-per-node=1GB\ndiscovery-server.enabled=true\ndiscovery.uri=<coordinator-url>\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"The other two nodes serve as worker nodes, you can use the following configuration for worker nodes."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-properties",children:"\ncoordinator=false\nhttp-server.http.port=8080\nquery.max-memory=50GB\nquery.max-memory-per-node=1GB\ndiscovery.uri=<coordinator-url>\n\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Modify ",(0,t.jsx)(n.code,{children:"pulsar.broker-service-url"})," and  ",(0,t.jsx)(n.code,{children:"pulsar.zookeeper-uri"})," configuration in the ",(0,t.jsx)(n.code,{children:"${project.root}/conf/presto/catalog/pulsar.properties"})," file accordingly for the three nodes."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start the coordinator node."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\n$ ./bin/pulsar sql-worker run\n\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Start worker nodes."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\n$ ./bin/pulsar sql-worker run\n\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Start the SQL CLI and check the status of your cluster."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ ./bin/pulsar sql --server <coordinate_url>\n\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"Check the status of your nodes."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\npresto> SELECT * FROM system.runtime.nodes;\n node_id |        http_uri         | node_version | coordinator | state\n---------+-------------------------+--------------+-------------+--------\n 1       | http://192.168.2.1:8081 | testversion  | true        | active\n 3       | http://192.168.2.2:8081 | testversion  | false       | active\n 2       | http://192.168.2.3:8081 | testversion  | false       | active\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For more information about deployment in Presto, refer to ",(0,t.jsx)(n.a,{href:"https://prestosql.io/docs/current/installation/deployment.html",children:"Presto deployment"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:'The broker does not advance LAC, so when Pulsar SQL bypass broker to query data, it can only read entries up to the LAC that all the bookies learned. You can enable periodically write LAC on the broker by setting "bookkeeperExplicitLacIntervalInMills" in the broker.conf.'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var o=r(96540);const t={},s=o.createContext(t);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);