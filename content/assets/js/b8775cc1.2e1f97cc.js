"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[27159],{35893:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"administration-pulsar-manager","title":"Pulsar Manager","description":"Pulsar Manager is a web-based GUI management and monitoring tool that helps administrators and users manage and monitor tenants, namespaces, topics, subscriptions, brokers, clusters, and so on, and supports dynamic configuration of multiple environments.","source":"@site/versioned_docs/version-2.5.1/administration-pulsar-manager.md","sourceDirName":".","slug":"/administration-pulsar-manager","permalink":"/docs/2.5.1/administration-pulsar-manager","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.1/administration-pulsar-manager.md","tags":[],"version":"2.5.1","frontMatter":{"id":"administration-pulsar-manager","title":"Pulsar Manager","sidebar_label":"Pulsar Manager"},"sidebar":"docsSidebar","previous":{"title":"Geo-replication","permalink":"/docs/2.5.1/administration-geo"},"next":{"title":"Pulsar statistics","permalink":"/docs/2.5.1/administration-stats"}}');var s=a(74848),t=a(28453);const i={id:"administration-pulsar-manager",title:"Pulsar Manager",sidebar_label:"Pulsar Manager"},o=void 0,l={},d=[{value:"Install",id:"install",level:2},{value:"Quick Install",id:"quick-install",level:3},{value:"Configure Database or JWT authentication",id:"configure-database-or-jwt-authentication",level:3},{value:"Configure Database (optional)",id:"configure-database-optional",level:4},{value:"Enable JWT authentication (optional)",id:"enable-jwt-authentication-optional",level:4},{value:"Set the administrator account and password",id:"set-the-administrator-account-and-password",level:3},{value:"Configure the environment",id:"configure-the-environment",level:3},{value:"Other Installation",id:"other-installation",level:2},{value:"Bare-metal installation",id:"bare-metal-installation",level:3},{value:"Custom docker image installation",id:"custom-docker-image-installation",level:3},{value:"Configuration",id:"configuration",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Pulsar Manager is a web-based GUI management and monitoring tool that helps administrators and users manage and monitor tenants, namespaces, topics, subscriptions, brokers, clusters, and so on, and supports dynamic configuration of multiple environments."}),"\n",(0,s.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,s.jsx)(n.h3,{id:"quick-install",children:"Quick Install"}),"\n",(0,s.jsx)(n.p,{children:"The easiest way to use the Pulsar Manager is to run it inside a Docker container."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\ndocker pull apachepulsar/pulsar-manager:v0.2.0\ndocker run -it \\\n    -p 9527:9527 -p 7750:7750 \\\n    -e SPRING_CONFIGURATION_FILE=/pulsar-manager/pulsar-manager/application.properties \\\n    apachepulsar/pulsar-manager:v0.2.0\n\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Pulsar Manager is divided into front-end and back-end, the front-end service port is ",(0,s.jsx)(n.code,{children:"9527"})," and the back-end service port is ",(0,s.jsx)(n.code,{children:"7750"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SPRING_CONFIGURATION_FILE"}),": Default configuration file for spring."]}),"\n",(0,s.jsxs)(n.li,{children:["By default, Pulsar Manager uses the ",(0,s.jsx)(n.code,{children:"herddb"})," database. HerdDB is a SQL distributed database implemented in Java and can be found at ",(0,s.jsx)(n.a,{href:"https://herddb.org/",children:"herddb.org"})," for more information."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"configure-database-or-jwt-authentication",children:"Configure Database or JWT authentication"}),"\n",(0,s.jsx)(n.h4,{id:"configure-database-optional",children:"Configure Database (optional)"}),"\n",(0,s.jsx)(n.p,{children:"If you have a large amount of data, you can use a custom database. Otherwise, some display errors may occur. For example, the topic information cannot be displayed when the topic exceeds 10000.\nThe following is an example of PostgreSQL."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Initialize database and table structures using the ",(0,s.jsx)(n.a,{href:"https://github.com/apache/pulsar-manager/blob/master/src/main/resources/META-INF/sql/postgresql-schema.sql",children:"file"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Download and modify the ",(0,s.jsx)(n.a,{href:"https://github.com/apache/pulsar-manager/blob/master/src/main/resources/application.properties",children:"configuration file"}),", then add the PostgreSQL configuration."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-properties",children:"\nspring.datasource.driver-class-name=org.postgresql.Driver\nspring.datasource.url=jdbc:postgresql://127.0.0.1:5432/pulsar_manager\nspring.datasource.username=postgres\nspring.datasource.password=postgres\n\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Add a configuration mount and start with a docker image."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\ndocker pull apachepulsar/pulsar-manager:v0.2.0\ndocker run -it \\\n    -p 9527:9527 -p 7750:7750 \\\n    -v /your-path/application.properties:/pulsar-manager/pulsar-manager/application.properties\n    -e SPRING_CONFIGURATION_FILE=/pulsar-manager/pulsar-manager/application.properties \\\n    apachepulsar/pulsar-manager:v0.2.0\n\n"})}),"\n",(0,s.jsx)(n.h4,{id:"enable-jwt-authentication-optional",children:"Enable JWT authentication (optional)"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to turn on JWT authentication, configure the ",(0,s.jsx)(n.code,{children:"application.properties"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-properties",children:"\nbackend.jwt.token=token\n\njwt.broker.token.mode=PRIVATE\njwt.broker.public.key=file:///path/broker-public.key\njwt.broker.private.key=file:///path/broker-private.key\n\nor\njwt.broker.token.mode=SECRET\njwt.broker.secret.key=file:///path/broker-secret.key\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u2022\t",(0,s.jsx)(n.code,{children:"backend.jwt.token"}),": token for the superuser. You need to configure this parameter during cluster initialization.\n\u2022\t",(0,s.jsx)(n.code,{children:"jwt.broker.token.mode"}),": multiple modes of generating token, including PUBLIC, PRIVATE, and SECRET.\n\u2022\t",(0,s.jsx)(n.code,{children:"jwt.broker.public.key"}),": configure this option if you use the PUBLIC mode.\n\u2022\t",(0,s.jsx)(n.code,{children:"jwt.broker.private.key"}),": configure this option if you use the PRIVATE mode.\n\u2022\t",(0,s.jsx)(n.code,{children:"jwt.broker.secret.key"}),": configure this option if you use the SECRET mode.\nFor more information, see ",(0,s.jsx)(n.a,{href:"https://pulsar.apache.org/docs/en/security-token-admin/",children:"Token Authentication Admin of Pulsar"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Docker command to add profile and key files mount."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\ndocker pull apachepulsar/pulsar-manager:v0.2.0\ndocker run -it \\\n    -p 9527:9527 -p 7750:7750 \\\n    -v /your-path/application.properties:/pulsar-manager/pulsar-manager/application.properties\n    -v /your-path/private.key:/pulsar-manager/private.key\n    -e SPRING_CONFIGURATION_FILE=/pulsar-manager/pulsar-manager/application.properties \\\n    apachepulsar/pulsar-manager:v0.2.0\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"set-the-administrator-account-and-password",children:"Set the administrator account and password"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'\nCSRF_TOKEN=$(curl http://localhost:7750/pulsar-manager/csrf-token)\ncurl \\\n   -H \'X-XSRF-TOKEN: $CSRF_TOKEN\' \\\n   -H \'Cookie: XSRF-TOKEN=$CSRF_TOKEN;\' \\\n   -H "Content-Type: application/json" \\\n   -X PUT http://localhost:7750/pulsar-manager/users/superuser \\\n   -d \'{"name": "admin", "password": "apachepulsar", "description": "test", "email": "username@test.org"}\'\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"The request parameter in curl command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'\n{"name": "admin", "password": "apachepulsar", "description": "test", "email": "username@test.org"}\n\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," is the Pulsar Manager login username, currently ",(0,s.jsx)(n.code,{children:"admin"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"password"})," is the password of the current user of Pulsar Manager, currently ",(0,s.jsx)(n.code,{children:"apachepulsar"}),". The password should be more than or equal to 6 digits."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"configure-the-environment",children:"Configure the environment"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Login to the system, Visit ",(0,s.jsx)(n.a,{href:"http://localhost:9527",children:"http://localhost:9527"})," to login.  The current default account is  ",(0,s.jsx)(n.code,{children:"admin/apachepulsar"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Click "New Environment" button to add an environment.'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Input the "Environment Name". The environment name is used for identifying an environment.'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Input the "Service URL". The Service URL is the admin service url of your Pulsar cluster.'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"other-installation",children:"Other Installation"}),"\n",(0,s.jsx)(n.h3,{id:"bare-metal-installation",children:"Bare-metal installation"}),"\n",(0,s.jsx)(n.p,{children:"When using binary packages for direct deployment, you can follow these steps."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Download and unzip the binary package, which is available on the ",(0,s.jsx)(n.a,{href:"https://pulsar.apache.org/download/",children:"Pulsar Download"})," page."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\n\twget https://dist.apache.org/repos/dist/release/pulsar/pulsar-manager/pulsar-manager-0.2.0/apache-pulsar-manager-0.2.0-bin.tar.gz\n\ttar -zxvf apache-pulsar-manager-0.2.0-bin.tar.gz\n\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Extract the back-end service binary package and place the front-end resources in the back-end service directory."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\n\tcd pulsar-manager\n\ttar -zxvf pulsar-manager.tar\n\tcd pulsar-manager\n\tcp -r ../dist ui\n\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Modify ",(0,s.jsx)(n.code,{children:"application.properties"})," configuration on demand."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you don't want to modify the ",(0,s.jsx)(n.code,{children:"application.properties"})," file, you can add the configuration to the startup parameters via ",(0,s.jsx)(n.code,{children:". /bin/pulsar-manager --backend.jwt.token=token"})," to add the configuration to the startup parameters. This is a capability of the spring boot framework."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start Pulsar Manager"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\n./bin/pulsar-manager\n\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"custom-docker-image-installation",children:"Custom docker image installation"}),"\n",(0,s.jsxs)(n.p,{children:["You can find the docker image in the ",(0,s.jsx)(n.a,{href:"https://github.com/apache/pulsar-manager/tree/master/docker",children:"Docker Hub"})," directory and build an image from the source code as well:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'\ngit clone https://github.com/apache/pulsar-manager\ncd pulsar-manager/front-end\nnpm install --save\nnpm run build:prod\ncd ..\n./gradlew build -x test\ncd ..\ndocker build -f docker/Dockerfile --build-arg BUILD_DATE=`date -u +"%Y-%m-%dT%H:%M:%SZ"` --build-arg VCS_REF=`latest` --build-arg VERSION=`latest` -t apachepulsar/pulsar-manager .\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"application.properties"}),(0,s.jsx)(n.th,{children:"System env on Docker Image"}),(0,s.jsx)(n.th,{children:"Desc"}),(0,s.jsx)(n.th,{children:"Example"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"backend.jwt.token"}),(0,s.jsx)(n.td,{children:"JWT_TOKEN"}),(0,s.jsx)(n.td,{children:"token for the superuser. You need to configure this parameter during cluster initialization."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"token"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"jwt.broker.token.mode"}),(0,s.jsx)(n.td,{children:"N/A"}),(0,s.jsx)(n.td,{children:"multiple modes of generating token, including PUBLIC, PRIVATE, and SECRET."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"PUBLIC"})," or ",(0,s.jsx)(n.code,{children:"PRIVATE"})," or ",(0,s.jsx)(n.code,{children:"SECRET"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"jwt.broker.public.key"}),(0,s.jsx)(n.td,{children:"PUBLIC_KEY"}),(0,s.jsx)(n.td,{children:"configure this option if you use the PUBLIC mode."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"file:///path/broker-public.key"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"jwt.broker.private.key"}),(0,s.jsx)(n.td,{children:"PRIVATE_KEY"}),(0,s.jsx)(n.td,{children:"configure this option if you use the PRIVATE mode."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"file:///path/broker-private.key"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"jwt.broker.secret.key"}),(0,s.jsx)(n.td,{children:"SECRET_KEY"}),(0,s.jsx)(n.td,{children:"configure this option if you use the SECRET mode."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"file:///path/broker-secret.key"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"spring.datasource.driver-class-name"}),(0,s.jsx)(n.td,{children:"DRIVER_CLASS_NAME"}),(0,s.jsx)(n.td,{children:"the driver class name of the database."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"org.postgresql.Driver"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"spring.datasource.url"}),(0,s.jsx)(n.td,{children:"URL"}),(0,s.jsx)(n.td,{children:"the JDBC URL of your  database."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"jdbc:postgresql://127.0.0.1:5432/pulsar_manager"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"spring.datasource.username"}),(0,s.jsx)(n.td,{children:"USERNAME"}),(0,s.jsx)(n.td,{children:"the username of database."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"postgres"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"spring.datasource.password"}),(0,s.jsx)(n.td,{children:"PASSWORD"}),(0,s.jsx)(n.td,{children:"the password of database."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"postgres"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N/A"}),(0,s.jsx)(n.td,{children:"LOG_LEVEL"}),(0,s.jsx)(n.td,{children:"the level of log."}),(0,s.jsx)(n.td,{children:"DEBUG"})]})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For more information about backend configurations, see ",(0,s.jsx)(n.a,{href:"https://github.com/apache/pulsar-manager/blob/master/src/README",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["For more information about frontend configurations, see ",(0,s.jsx)(n.a,{href:"https://github.com/apache/pulsar-manager/tree/master/front-end",children:"here"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var r=a(96540);const s={},t=r.createContext(s);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);