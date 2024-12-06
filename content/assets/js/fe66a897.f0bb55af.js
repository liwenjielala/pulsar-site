"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[51751],{18665:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"io-cdc-canal","title":"CDC Canal Connector","description":"Source Configuration Options","source":"@site/versioned_docs/version-2.4.2/io-cdc-canal.md","sourceDirName":".","slug":"/io-cdc-canal","permalink":"/docs/2.4.2/io-cdc-canal","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.2/io-cdc-canal.md","tags":[],"version":"2.4.2","frontMatter":{"id":"io-cdc-canal","title":"CDC Canal Connector","sidebar_label":"CDC Canal Connector","original_id":"io-cdc-canal"}}');var a=s(74848),r=s(28453);const c={id:"io-cdc-canal",title:"CDC Canal Connector",sidebar_label:"CDC Canal Connector",original_id:"io-cdc-canal"},i=void 0,t={},d=[{value:"Source Configuration Options",id:"source-configuration-options",level:3},{value:"Configuration Example",id:"configuration-example",level:3},{value:"Usage example",id:"usage-example",level:3}];function o(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"source-configuration-options",children:"Source Configuration Options"}),"\n",(0,a.jsx)(n.p,{children:"The Configuration is mostly related to Canal task config."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Required"}),(0,a.jsx)(n.th,{children:"Default"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"zkServers"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"false"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"127.0.0.1:2181"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"The address and port of the zookeeper . if canal server configured to cluster mode"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"batchSize"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"true"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"5120"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Take 5120 records from the canal server in batches"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"username"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"false"})}),(0,a.jsx)(n.td,{children:"``"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Canal server account, not MySQL"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"password"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"false"})}),(0,a.jsx)(n.td,{children:"``"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Canal server password, not MySQL"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"cluster"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"false"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"false"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"Decide whether to open cluster mode based on canal server configuration, true: cluster mode, false: standalone mode"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"singleHostname"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"false"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"127.0.0.1"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"The address of canal server"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"singlePort"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"false"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"11111"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"The port of canal server"})})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"configuration-example",children:"Configuration Example"}),"\n",(0,a.jsx)(n.p,{children:"Here is a configuration Json example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-$json",children:'\n{\n    "zkServers": "127.0.0.1:2181",\n    "batchSize": "5120",\n    "destination": "example",\n    "username": "",\n    "password": "",\n    "cluster": false,\n    "singleHostname": "127.0.0.1",\n    "singlePort": "11111",\n}\n\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You could also find the yaml example in this ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-io/canal/src/main/resources/canal-mysql-source-config.yaml",children:"file"}),", which has similar content below:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-$yaml",children:'\nconfigs:\n    zkServers: "127.0.0.1:2181"\n    batchSize: "5120"\n    destination: "example"\n    username: ""\n    password: ""\n    cluster: false\n    singleHostname: "127.0.0.1"\n    singlePort: "11111"\n\n'})}),"\n",(0,a.jsx)(n.h3,{id:"usage-example",children:"Usage example"}),"\n",(0,a.jsx)(n.p,{children:"Here is a simple example to store MySQL change data using above example config."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Start a MySQL server"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-$bash",children:"\ndocker pull mysql:5.7\ndocker run -d -it --rm --name pulsar-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=canal -e MYSQL_USER=mysqluser -e MYSQL_PASSWORD=mysqlpw mysql:5.7\n\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Modify configuration files mysqld.cnf"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\n[mysqld]\npid-file    = /var/run/mysqld/mysqld.pid\nsocket      = /var/run/mysqld/mysqld.sock\ndatadir     = /var/lib/mysql\n#log-error  = /var/log/mysql/error.log\n# By default we only accept connections from localhost\n#bind-address   = 127.0.0.1\n# Disabling symbolic-links is recommended to prevent assorted security risks\nsymbolic-links=0\nlog-bin=mysql-bin\nbinlog-format=ROW\nserver_id=1\n\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Copy file to mysql server from local and restart mysql server"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-$bash",children:"\ndocker cp mysqld.cnf pulsar-mysql:/etc/mysql/mysql.conf.d/\ndocker restart pulsar-mysql\n\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create test database in mysql server"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-$bash",children:"\ndocker exec -it pulsar-mysql /bin/bash\nmysql -h 127.0.0.1 -uroot -pcanal -e 'create database test;'\n\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Start canal server and connect mysql server"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\ndocker pull canal/canal-server:v1.1.2\ndocker run -d -it --link pulsar-mysql -e canal.auto.scan=false -e canal.destinations=test -e canal.instance.master.address=pulsar-mysql:3306 -e canal.instance.dbUsername=root -e canal.instance.dbPassword=canal -e canal.instance.connectionCharset=UTF-8 -e canal.instance.tsdb.enable=true -e canal.instance.gtidon=false --name=pulsar-canal-server -p 8000:8000 -p 2222:2222 -p 11111:11111 -p 11112:11112 -m 4096m canal/canal-server:v1.1.2\n\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Start pulsar standalone"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-$bash",children:"\ndocker pull apachepulsar/pulsar:2.4.2\ndocker run -d -it --link pulsar-canal-server -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-standalone apachepulsar/pulsar:2.4.2 bin/pulsar standalone\n\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start pulsar-io in standalone"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Config file canal-mysql-source-config.yaml"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-$yaml",children:'\nconfigs:\n    zkServers: ""\n    batchSize: "5120"\n    destination: "test"\n    username: ""\n    password: ""\n    cluster: false\n    singleHostname: "pulsar-canal-server"\n    singlePort: "11111"\n\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Consumer file pulsar-client.py for test"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic',\n                            subscription_name='my-sub')\n\nwhile True:\n    msg = consumer.receive()\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Copy config file and test file to pulsar server"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-$bash",children:"\ndocker cp canal-mysql-source-config.yaml pulsar-standalone:/pulsar/conf/\ndocker cp pulsar-client.py pulsar-standalone:/pulsar/\n\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Download canal connector and start canal connector"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-$bash",children:"\ndocker exec -it pulsar-standalone /bin/bash\nwget http://apache.01link.hk/pulsar/pulsar-2.4.2/connectors/pulsar-io-canal-2.4.2.nar -P connectors\n./bin/pulsar-admin sources localrun --archive ./connectors/pulsar-io-canal-2.4.2.nar --classname org.apache.pulsar.io.canal.CanalStringSource --tenant public --namespace default --name canal --destination-topic-name my-topic --source-config-file /pulsar/conf/canal-mysql-source-config.yaml --parallelism 1\n\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Consumption data"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-$bash",children:"\ndocker exec -it pulsar-standalone /bin/bash\npython pulsar-client.py\n\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Open another window for login mysql server"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-$bash",children:"\ndocker exec -it pulsar-mysql /bin/bash\nmysql -h 127.0.0.1 -uroot -pcanal\n\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create table and insert, delete, update data in mysql server"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\nmysql> use test;\nmysql> show tables;\nmysql> CREATE TABLE IF NOT EXISTS `test_table`(`test_id` INT UNSIGNED AUTO_INCREMENT,`test_title` VARCHAR(100) NOT NULL,\n`test_author` VARCHAR(40) NOT NULL,\n`test_date` DATE,PRIMARY KEY ( `test_id` ))ENGINE=InnoDB DEFAULT CHARSET=utf8;\nmysql> INSERT INTO test_table (test_title, test_author, test_date) VALUES(\"a\", \"b\", NOW());\nmysql> UPDATE test_table SET test_title='c' WHERE test_title='a';\nmysql> DELETE FROM test_table WHERE test_title='c';\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var l=s(96540);const a={},r=l.createContext(a);function c(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);