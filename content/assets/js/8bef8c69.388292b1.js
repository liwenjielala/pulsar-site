"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[22548],{59684:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"io-canal-source","title":"Canal source connector","description":"The Canal source connector pulls messages from MySQL to Pulsar topics.","source":"@site/versioned_docs/version-2.6.0/io-canal-source.md","sourceDirName":".","slug":"/io-canal-source","permalink":"/docs/2.6.0/io-canal-source","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.0/io-canal-source.md","tags":[],"version":"2.6.0","frontMatter":{"id":"io-canal-source","title":"Canal source connector","sidebar_label":"Canal source connector","original_id":"io-canal-source"}}');var a=s(74848),l=s(28453);const c={id:"io-canal-source",title:"Canal source connector",sidebar_label:"Canal source connector",original_id:"io-canal-source"},t=void 0,i={},o=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"The Canal source connector pulls messages from MySQL to Pulsar topics."}),"\n",(0,a.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(n.p,{children:"The configuration of Canal source connector has the following properties."}),"\n",(0,a.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Required"}),(0,a.jsx)(n.th,{children:"Default"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"username"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"None"}),(0,a.jsx)(n.td,{children:"Canal server account (not MySQL)."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"password"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"None"}),(0,a.jsx)(n.td,{children:"Canal server password (not MySQL)."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"destination"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"None"}),(0,a.jsx)(n.td,{children:"Source destination that Canal source connector connects to."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"singleHostname"})}),(0,a.jsx)(n.td,{children:"false"}),(0,a.jsx)(n.td,{children:"None"}),(0,a.jsx)(n.td,{children:"Canal server address."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"singlePort"})}),(0,a.jsx)(n.td,{children:"false"}),(0,a.jsx)(n.td,{children:"None"}),(0,a.jsx)(n.td,{children:"Canal server port."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"cluster"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"false"}),(0,a.jsxs)(n.td,{children:["Whether to enable cluster mode based on Canal server configuration or not.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsxs)("li",{children:["true: ",(0,a.jsx)(n.strong,{children:"cluster"})," mode.",(0,a.jsx)("br",{}),"If set to true, it talks to ",(0,a.jsx)(n.code,{children:"zkServers"})," to figure out the actual database host.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]}),(0,a.jsxs)("li",{children:["false: ",(0,a.jsx)(n.strong,{children:"standalone"})," mode.",(0,a.jsx)("br",{}),"If set to false, it connects to the database specified by ",(0,a.jsx)(n.code,{children:"singleHostname"})," and ",(0,a.jsx)(n.code,{children:"singlePort"}),". "]})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"zkServers"})}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsx)(n.td,{children:"None"}),(0,a.jsx)(n.td,{children:"Address and port of the Zookeeper that Canal source connector talks to figure out the actual database host."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"batchSize"})}),(0,a.jsx)(n.td,{children:"false"}),(0,a.jsx)(n.td,{children:"1000"}),(0,a.jsx)(n.td,{children:"Batch size to fetch from Canal."})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"Before using the Canal connector, you can create a configuration file through one of the following methods."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"JSON"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'\n{\n    "zkServers": "127.0.0.1:2181",\n    "batchSize": "5120",\n    "destination": "example",\n    "username": "",\n    "password": "",\n    "cluster": false,\n    "singleHostname": "127.0.0.1",\n    "singlePort": "11111",\n}\n\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"YAML"}),"\n",(0,a.jsxs)(n.p,{children:["You can create a YAML file and copy the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/canal/src/main/resources/canal-mysql-source-config.yaml",children:"contents"})," below to your YAML file."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'\nconfigs:\n    zkServers: "127.0.0.1:2181"\n    batchSize: 5120\n    destination: "example"\n    username: ""\n    password: ""\n    cluster: false\n    singleHostname: "127.0.0.1"\n    singlePort: 11111\n\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.p,{children:"Here is an example of storing MySQL data using the configuration file as above."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start a MySQL server."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker pull mysql:5.7\n$ docker run -d -it --rm --name pulsar-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=canal -e MYSQL_USER=mysqluser -e MYSQL_PASSWORD=mysqlpw mysql:5.7\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Create a configuration file ",(0,a.jsx)(n.code,{children:"mysqld.cnf"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n[mysqld]\npid-file    = /var/run/mysqld/mysqld.pid\nsocket      = /var/run/mysqld/mysqld.sock\ndatadir     = /var/lib/mysql\n#log-error  = /var/log/mysql/error.log\n# By default we only accept connections from localhost\n#bind-address   = 127.0.0.1\n# Disabling symbolic-links is recommended to prevent assorted security risks\nsymbolic-links=0\nlog-bin=mysql-bin\nbinlog-format=ROW\nserver_id=1\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Copy the configuration file ",(0,a.jsx)(n.code,{children:"mysqld.cnf"})," to MySQL server."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker cp mysqld.cnf pulsar-mysql:/etc/mysql/mysql.conf.d/\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Restart the MySQL server."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker restart pulsar-mysql\n\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"Create a test database in MySQL server."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker exec -it pulsar-mysql /bin/bash\n$ mysql -h 127.0.0.1 -uroot -pcanal -e 'create database test;'\n\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"6",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start a Canal server and connect to MySQL server."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\n$ docker pull canal/canal-server:v1.1.2\n$ docker run -d -it --link pulsar-mysql -e canal.auto.scan=false -e canal.destinations=test -e canal.instance.master.address=pulsar-mysql:3306 -e canal.instance.dbUsername=root -e canal.instance.dbPassword=canal -e canal.instance.connectionCharset=UTF-8 -e canal.instance.tsdb.enable=true -e canal.instance.gtidon=false --name=pulsar-canal-server -p 8000:8000 -p 2222:2222 -p 11111:11111 -p 11112:11112 -m 4096m canal/canal-server:v1.1.2\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start Pulsar standalone."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker pull apachepulsar/pulsar:2.3.0\n$ docker run -d -it --link pulsar-canal-server -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-standalone apachepulsar/pulsar:2.3.0 bin/pulsar standalone\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Modify the configuration file ",(0,a.jsx)(n.code,{children:"canal-mysql-source-config.yaml"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'\nconfigs:\n    zkServers: ""\n    batchSize: "5120"\n    destination: "test"\n    username: ""\n    password: ""\n    cluster: false\n    singleHostname: "pulsar-canal-server"\n    singlePort: "11111"\n\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Create a consumer file ",(0,a.jsx)(n.code,{children:"pulsar-client.py"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic',\n                            subscription_name='my-sub')\n\nwhile True:\n    msg = consumer.receive()\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Copy the configuration file ",(0,a.jsx)(n.code,{children:"canal-mysql-source-config.yaml"})," and the consumer file  ",(0,a.jsx)(n.code,{children:"pulsar-client.py"})," to Pulsar server."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker cp canal-mysql-source-config.yaml pulsar-standalone:/pulsar/conf/\n$ docker cp pulsar-client.py pulsar-standalone:/pulsar/\n\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"11",children:["\n",(0,a.jsx)(n.li,{children:"Download a Canal connector and start it."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker exec -it pulsar-standalone /bin/bash\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.3.0/connectors/pulsar-io-canal-2.3.0.nar -P connectors\n$ ./bin/pulsar-admin source localrun \\\n--archive ./connectors/pulsar-io-canal-2.3.0.nar \\\n--classname org.apache.pulsar.io.canal.CanalStringSource \\\n--tenant public \\\n--namespace default \\\n--name canal \\\n--destination-topic-name my-topic \\\n--source-config-file /pulsar/conf/canal-mysql-source-config.yaml \\\n--parallelism 1\n\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"12",children:["\n",(0,a.jsx)(n.li,{children:"Consume data from MySQL."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker exec -it pulsar-standalone /bin/bash\n$ python pulsar-client.py\n\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"13",children:["\n",(0,a.jsx)(n.li,{children:"Open another window to log in MySQL server."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\n$ docker exec -it pulsar-mysql /bin/bash\n$ mysql -h 127.0.0.1 -uroot -pcanal\n\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"14",children:["\n",(0,a.jsx)(n.li,{children:"Create a table, and insert, delete, and update data in MySQL server."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\nmysql> use test;\nmysql> show tables;\nmysql> CREATE TABLE IF NOT EXISTS `test_table`(`test_id` INT UNSIGNED AUTO_INCREMENT,`test_title` VARCHAR(100) NOT NULL,\n`test_author` VARCHAR(40) NOT NULL,\n`test_date` DATE,PRIMARY KEY ( `test_id` ))ENGINE=InnoDB DEFAULT CHARSET=utf8;\nmysql> INSERT INTO test_table (test_title, test_author, test_date) VALUES(\"a\", \"b\", NOW());\nmysql> UPDATE test_table SET test_title='c' WHERE test_title='a';\nmysql> DELETE FROM test_table WHERE test_title='c';\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>t});var r=s(96540);const a={},l=r.createContext(a);function c(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);