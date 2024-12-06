"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[87799],{823:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"administration-pulsar-manager","title":"Pulsar Manager","description":"Pulsar Manager is a web-based GUI management and monitoring tool that helps administrators and users manage and monitor tenants, namespaces, topics, subscriptions, brokers, clusters, and so on, and supports dynamic configuration of multiple environments.","source":"@site/versioned_docs/version-2.8.x/administration-pulsar-manager.md","sourceDirName":".","slug":"/administration-pulsar-manager","permalink":"/docs/2.8.x/administration-pulsar-manager","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/administration-pulsar-manager.md","tags":[],"version":"2.8.x","frontMatter":{"id":"administration-pulsar-manager","title":"Pulsar Manager","sidebar_label":"Pulsar Manager","original_id":"administration-pulsar-manager"},"sidebar":"docsSidebar","previous":{"title":"Geo-replication","permalink":"/docs/2.8.x/administration-geo"},"next":{"title":"Pulsar statistics","permalink":"/docs/2.8.x/administration-stats"}}');var a=r(74848),t=r(28453);const i={id:"administration-pulsar-manager",title:"Pulsar Manager",sidebar_label:"Pulsar Manager",original_id:"administration-pulsar-manager"},o=void 0,l={},c=[{value:"Install",id:"install",level:2},{value:"Set administrator account and password",id:"set-administrator-account-and-password",level:3},{value:"Use custom databases",id:"use-custom-databases",level:3},{value:"Enable JWT authentication",id:"enable-jwt-authentication",level:3},{value:"Log in",id:"log-in",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Pulsar Manager is a web-based GUI management and monitoring tool that helps administrators and users manage and monitor tenants, namespaces, topics, subscriptions, brokers, clusters, and so on, and supports dynamic configuration of multiple environments."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"If you monitor your current stats with Pulsar dashboard, you can try to use Pulsar Manager instead. Pulsar dashboard is deprecated."})}),"\n",(0,a.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,a.jsx)(n.p,{children:"The easiest way to use the Pulsar Manager is to run it inside a Docker container."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"\ndocker pull apachepulsar/pulsar-manager:v0.2.0\ndocker run -it \\\n    -p 9527:9527 -p 7750:7750 \\\n    -e SPRING_CONFIGURATION_FILE=/pulsar-manager/pulsar-manager/application.properties \\\n    apachepulsar/pulsar-manager:v0.2.0\n\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"SPRING_CONFIGURATION_FILE"}),": Default configuration file for spring."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"set-administrator-account-and-password",children:"Set administrator account and password"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'\nCSRF_TOKEN=$(curl http://localhost:7750/pulsar-manager/csrf-token)\ncurl \\\n    -H \'X-XSRF-TOKEN: $CSRF_TOKEN\' \\\n    -H \'Cookie: XSRF-TOKEN=$CSRF_TOKEN;\' \\\n    -H "Content-Type: application/json" \\\n    -X PUT http://localhost:7750/pulsar-manager/users/superuser \\\n    -d \'{"name": "admin", "password": "apachepulsar", "description": "test", "email": "username@test.org"}\'\n\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You can find the docker image in the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar-manager/tree/master/docker",children:"Docker Hub"})," directory and build an image from the source code as well:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'\ngit clone https://github.com/apache/pulsar-manager\ncd pulsar-manager/front-end\nnpm install --save\nnpm run build:prod\ncd ..\n./gradlew build -x test\ncd ..\ndocker build -f docker/Dockerfile --build-arg BUILD_DATE=`date -u +"%Y-%m-%dT%H:%M:%SZ"` --build-arg VCS_REF=`latest` --build-arg VERSION=`latest` -t apachepulsar/pulsar-manager .\n\n'})}),"\n",(0,a.jsx)(n.h3,{id:"use-custom-databases",children:"Use custom databases"}),"\n",(0,a.jsx)(n.p,{children:"If you have a large amount of data, you can use a custom database. The following is an example of PostgreSQL."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Initialize database and table structures using the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar-manager/tree/master/src/main/resources/META-INF/sql/postgresql-schema.sql",children:"file"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Modify the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar-manager/blob/master/src/main/resources/application.properties",children:"configuration file"})," and add PostgreSQL configuration."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\nspring.datasource.driver-class-name=org.postgresql.Driver\nspring.datasource.url=jdbc:postgresql://127.0.0.1:5432/pulsar_manager\nspring.datasource.username=postgres\nspring.datasource.password=postgres\n\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Compile to generate a new executable jar package."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\n./gradlew build -x test\n\n"})}),"\n",(0,a.jsx)(n.h3,{id:"enable-jwt-authentication",children:"Enable JWT authentication"}),"\n",(0,a.jsx)(n.p,{children:"If you want to turn on JWT authentication, configure the following parameters:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"backend.jwt.token"}),": token for the superuser. You need to configure this parameter during cluster initialization."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"jwt.broker.token.mode"}),": multiple modes of generating token, including PUBLIC, PRIVATE, and SECRET."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"jwt.broker.public.key"}),": configure this option if you use the PUBLIC mode."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"jwt.broker.private.key"}),": configure this option if you use the PRIVATE mode."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"jwt.broker.secret.key"}),": configure this option if you use the SECRET mode."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For more information, see ",(0,a.jsx)(n.a,{href:"/docs/2.8.x/security-token-admin",children:"Token Authentication Admin of Pulsar"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"If you want to enable JWT authentication, use one of the following methods."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Method 1: use command-line tool"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\nwget https://dist.apache.org/repos/dist/release/pulsar/pulsar-manager/pulsar-manager-0.2.0/apache-pulsar-manager-0.2.0-bin.tar.gz\ntar -zxvf apache-pulsar-manager-0.2.0-bin.tar.gz\ncd pulsar-manager\ntar -zxvf pulsar-manager.tar\ncd pulsar-manager\ncp -r ../dist ui\n./bin/pulsar-manager --redirect.host=http://localhost --redirect.port=9527 insert.stats.interval=600000 --backend.jwt.token=token --jwt.broker.token.mode=PRIVATE --jwt.broker.private.key=file:///path/broker-private.key --jwt.broker.public.key=file:///path/broker-public.key\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Firstly, ",(0,a.jsx)(n.a,{href:"#set-administrator-account-and-password",children:"set the administrator account and password"})]}),"\n",(0,a.jsxs)(n.p,{children:["Secondly, log in to Pulsar manager through ",(0,a.jsx)(n.a,{href:"http://localhost:7750/ui/index.html",children:"http://localhost:7750/ui/index.html"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Method 2: configure the application.properties file"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\nbackend.jwt.token=token\n\njwt.broker.token.mode=PRIVATE\njwt.broker.public.key=file:///path/broker-public.key\njwt.broker.private.key=file:///path/broker-private.key\n\nor\njwt.broker.token.mode=SECRET\njwt.broker.secret.key=file:///path/broker-secret.key\n\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Method 3: use Docker and enable token authentication."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\nexport JWT_TOKEN=\"your-token\"\ndocker run -it -p 9527:9527 -p 7750:7750 -e REDIRECT_HOST=http://localhost -e REDIRECT_PORT=9527 -e DRIVER_CLASS_NAME=org.postgresql.Driver -e URL='jdbc:postgresql://127.0.0.1:5432/pulsar_manager' -e USERNAME=pulsar -e PASSWORD=pulsar -e LOG_LEVEL=DEBUG -e JWT_TOKEN=$JWT_TOKEN -v $PWD:/data apachepulsar/pulsar-manager:v0.2.0 /bin/sh\n\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"JWT_TOKEN"}),": the token of superuser configured for the broker. It is generated by the  ",(0,a.jsx)(n.code,{children:"bin/pulsar tokens create --secret-key"})," or ",(0,a.jsx)(n.code,{children:"bin/pulsar tokens create --private-key"})," command."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"REDIRECT_HOST"}),": the IP address of the front-end server."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"REDIRECT_PORT"}),": the port of the front-end server."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"DRIVER_CLASS_NAME"}),": the driver class name of the PostgreSQL database."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"URL"}),": the JDBC URL of your PostgreSQL database, such as jdbc:postgresql://127.0.0.1:5432/pulsar_manager. The docker image automatically start a local instance of the PostgreSQL database."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"USERNAME"}),": the username of PostgreSQL."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"PASSWORD"}),": the password of PostgreSQL."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"LOG_LEVEL"}),": the level of log."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Method 4: use Docker and turn on ",(0,a.jsx)(n.strong,{children:"token authentication"})," and ",(0,a.jsx)(n.strong,{children:"token management"})," by private key and public key."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'\nexport JWT_TOKEN="your-token"\nexport PRIVATE_KEY="file:///pulsar-manager/secret/my-private.key"\nexport PUBLIC_KEY="file:///pulsar-manager/secret/my-public.key"\ndocker run -it -p 9527:9527 -p 7750:7750 -e REDIRECT_HOST=http://localhost -e REDIRECT_PORT=9527 -e DRIVER_CLASS_NAME=org.postgresql.Driver -e URL=\'jdbc:postgresql://127.0.0.1:5432/pulsar_manager\' -e USERNAME=pulsar -e PASSWORD=pulsar -e LOG_LEVEL=DEBUG -e JWT_TOKEN=$JWT_TOKEN -e PRIVATE_KEY=$PRIVATE_KEY -e PUBLIC_KEY=$PUBLIC_KEY -v $PWD:/data -v $PWD/secret:/pulsar-manager/secret apachepulsar/pulsar-manager:v0.2.0 /bin/sh\n\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"JWT_TOKEN"}),": the token of superuser configured for the broker. It is generated by the ",(0,a.jsx)(n.code,{children:"bin/pulsar tokens create --private-key"})," command."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"PRIVATE_KEY"}),": private key path mounted in container, generated by ",(0,a.jsx)(n.code,{children:"bin/pulsar tokens create-key-pair"})," command."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"PUBLIC_KEY"}),": public key path mounted in container, generated by ",(0,a.jsx)(n.code,{children:"bin/pulsar tokens create-key-pair"})," command."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"$PWD/secret"}),": the folder where the private key and public key generated by the ",(0,a.jsx)(n.code,{children:"bin/pulsar tokens create-key-pair"})," command are placed locally"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"REDIRECT_HOST"}),": the IP address of the front-end server."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"REDIRECT_PORT"}),": the port of the front-end server."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"DRIVER_CLASS_NAME"}),": the driver class name of the PostgreSQL database."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"URL"}),": the JDBC URL of your PostgreSQL database, such as jdbc:postgresql://127.0.0.1:5432/pulsar_manager. The docker image automatically start a local instance of the PostgreSQL database."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"USERNAME"}),": the username of PostgreSQL."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"PASSWORD"}),": the password of PostgreSQL."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"LOG_LEVEL"}),": the level of log."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Method 5: use Docker and turn on ",(0,a.jsx)(n.strong,{children:"token authentication"})," and ",(0,a.jsx)(n.strong,{children:"token management"})," by secret key."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'\nexport JWT_TOKEN="your-token"\nexport SECRET_KEY="file:///pulsar-manager/secret/my-secret.key"\ndocker run -it -p 9527:9527 -p 7750:7750 -e REDIRECT_HOST=http://localhost -e REDIRECT_PORT=9527 -e DRIVER_CLASS_NAME=org.postgresql.Driver -e URL=\'jdbc:postgresql://127.0.0.1:5432/pulsar_manager\' -e USERNAME=pulsar -e PASSWORD=pulsar -e LOG_LEVEL=DEBUG -e JWT_TOKEN=$JWT_TOKEN -e SECRET_KEY=$SECRET_KEY -v $PWD:/data -v $PWD/secret:/pulsar-manager/secret apachepulsar/pulsar-manager:v0.2.0 /bin/sh\n\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"JWT_TOKEN"}),": the token of superuser configured for the broker. It is generated by the ",(0,a.jsx)(n.code,{children:"bin/pulsar tokens create --secret-key"})," command."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"SECRET_KEY"}),": secret key path mounted in container, generated by ",(0,a.jsx)(n.code,{children:"bin/pulsar tokens create-secret-key"})," command."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"$PWD/secret"}),": the folder where the secret key generated by the ",(0,a.jsx)(n.code,{children:"bin/pulsar tokens create-secret-key"})," command are placed locally"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"REDIRECT_HOST"}),": the IP address of the front-end server."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"REDIRECT_PORT"}),": the port of the front-end server."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"DRIVER_CLASS_NAME"}),": the driver class name of the PostgreSQL database."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"URL"}),": the JDBC URL of your PostgreSQL database, such as jdbc:postgresql://127.0.0.1:5432/pulsar_manager. The docker image automatically start a local instance of the PostgreSQL database."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"USERNAME"}),": the username of PostgreSQL."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"PASSWORD"}),": the password of PostgreSQL."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"LOG_LEVEL"}),": the level of log."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["For more information about backend configurations, see ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar-manager/blob/master/src/README",children:"here"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["For more information about frontend configurations, see ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar-manager/tree/master/front-end",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"log-in",children:"Log in"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"#set-administrator-account-and-password",children:"Set the administrator account and password"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Visit ",(0,a.jsx)(n.a,{href:"http://localhost:9527",children:"http://localhost:9527"})," to log in."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var s=r(96540);const a={},t=s.createContext(a);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);