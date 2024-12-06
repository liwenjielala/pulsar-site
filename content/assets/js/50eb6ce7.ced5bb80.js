"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[28536],{64903:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"develop-plugin","title":"Pulsar plugin development","description":"You can develop various plugins for Pulsar, such as entry filters, protocol handlers, interceptors, and so on.","source":"@site/docs/develop-plugin.md","sourceDirName":".","slug":"/develop-plugin","permalink":"/docs/next/develop-plugin","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/docs/develop-plugin.md","tags":[],"version":"current","frontMatter":{"id":"develop-plugin","title":"Pulsar plugin development","sidebar_label":"Plugin"},"sidebar":"docsSidebar","previous":{"title":"Broker load balancer","permalink":"/docs/next/develop-load-manager"},"next":{"title":"Reference","permalink":"/docs/next/reference-landing"}}');var t=r(74848),s=r(28453);const l={id:"develop-plugin",title:"Pulsar plugin development",sidebar_label:"Plugin"},a=void 0,o={},c=[{value:"Additional Servlets",id:"additional-servlets",level:2},{value:"What is an additional servlet?",id:"what-is-an-additional-servlet",level:3},{value:"How to use an additional servlet?",id:"how-to-use-an-additional-servlet",level:3},{value:"Step 1: Create a Maven project",id:"step-1-create-a-maven-project",level:4},{value:"Step 2: Implement the <code>AdditionalServlet</code> interface",id:"step-2-implement-the-additionalservlet-interface",level:4},{value:"Step 3: Package your project into a NAR file",id:"step-3-package-your-project-into-a-nar-file",level:4},{value:"Step 4: Configure and restart broker",id:"step-4-configure-and-restart-broker",level:4},{value:"Entry filter",id:"entry-filter",level:2},{value:"What is an entry filter?",id:"what-is-an-entry-filter",level:3},{value:"How to use an entry filter?",id:"how-to-use-an-entry-filter",level:3},{value:"Step 1: Create a Maven project",id:"step-1-create-a-maven-project-1",level:4},{value:"Step 2: Implement the <code>EntryFilter</code> interface",id:"step-2-implement-the-entryfilter-interface",level:4},{value:"Step 3: package implementation class of entry filter into a NAR file",id:"step-3-package-implementation-class-of-entry-filter-into-a-nar-file",level:4},{value:"Step 4: configure and restart broker",id:"step-4-configure-and-restart-broker-1",level:4}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"You can develop various plugins for Pulsar, such as entry filters, protocol handlers, interceptors, and so on."}),"\n",(0,t.jsx)(n.h2,{id:"additional-servlets",children:"Additional Servlets"}),"\n",(0,t.jsx)(n.p,{children:"This chapter describes what additional servlets are and how to use them."}),"\n",(0,t.jsx)(n.h3,{id:"what-is-an-additional-servlet",children:"What is an additional servlet?"}),"\n",(0,t.jsx)(n.p,{children:"Pulsar offers a multitude of REST APIs to interact with it. To expose additional custom logic as a REST API, Pulsar offers the concept of additional servlets. These servlets run as plugins in either the broker or the pulsar proxy."}),"\n",(0,t.jsx)(n.h3,{id:"how-to-use-an-additional-servlet",children:"How to use an additional servlet?"}),"\n",(0,t.jsxs)(n.p,{children:["Take a look at ",(0,t.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/tests/docker-images/java-test-plugins/src/main/java/org/apache/pulsar/tests/integration/plugins/RandomAdditionalServlet.java",children:"this example implementation"}),", or follow the steps below:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a Maven project."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Implement the ",(0,t.jsx)(n.code,{children:"AdditionalServlet"})," or ",(0,t.jsx)(n.code,{children:"AdditionalServletWithPulsarService"})," interface."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Package your project into a NAR file."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure the ",(0,t.jsx)(n.code,{children:"broker.conf"})," file (or the ",(0,t.jsx)(n.code,{children:"standalone.conf"})," file) and restart your broker."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"step-1-create-a-maven-project",children:"Step 1: Create a Maven project"}),"\n",(0,t.jsxs)(n.p,{children:["For how to create a Maven project, see ",(0,t.jsx)(n.a,{href:"https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.h4,{id:"step-2-implement-the-additionalservlet-interface",children:["Step 2: Implement the ",(0,t.jsx)(n.code,{children:"AdditionalServlet"})," interface"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add a dependency for ",(0,t.jsx)(n.code,{children:"pulsar-broker"})," in the ",(0,t.jsx)(n.code,{children:"pom.xml"})," file as displayed. Otherwise, you can not find the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/web/plugin/servlet/AdditionalServlet.java",children:(0,t.jsx)(n.code,{children:"AdditionalServlet"})})," interface."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<dependency>\n   <groupId>org.apache.pulsar</groupId>\n   <artifactId>pulsar-broker</artifactId>\n   <version>${pulsar.version}</version>\n   <scope>provided</scope>\n</dependency>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Implement the methods of the ",(0,t.jsx)(n.code,{children:"AdditionalServlet"})," interface."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"loadConfig"})," allows you to configure your servlet by loading configuration properties from the ",(0,t.jsx)(n.code,{children:"PulsarConfiguration"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"getBasePath"})," defines the path your servlet will be loaded under."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"getServletHolder"})," returns the ",(0,t.jsx)(n.code,{children:"ServletHolder"})," for this servlet."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"close"})," allows you to free up resources."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Describe a NAR file."}),"\n",(0,t.jsxs)(n.p,{children:["Create an ",(0,t.jsx)(n.code,{children:"additional_servlet.yml"})," file in the ",(0,t.jsx)(n.code,{children:"resources/META-INF/services"})," directory to describe a NAR file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",children:"name: my-servlet\ndescription: Describes my-servlet\nadditionalServletClass: org.my.package.MyServlet\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"step-3-package-your-project-into-a-nar-file",children:"Step 3: Package your project into a NAR file"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the compiled plugin of the NAR file to your ",(0,t.jsx)(n.code,{children:"pom.xml"})," file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<build>\n   <finalName>${project.artifactId}</finalName>\n   <plugins>\n      <plugin>\n         <groupId>org.apache.nifi</groupId>\n         <artifactId>nifi-nar-maven-plugin</artifactId>\n         <version>1.5.0</version>\n         <extensions>true</extensions>\n         <configuration>\n            <finalName>${project.artifactId}-${project.version}</finalName>\n         </configuration>\n         <executions>\n            <execution>\n               <id>default-nar</id>\n               <phase>package</phase>\n               <goals>\n                  <goal>nar</goal>\n               </goals>\n            </execution>\n         </executions>\n      </plugin>\n   </plugins>\n</build>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Generate a NAR file in the ",(0,t.jsx)(n.code,{children:"target"})," directory."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-script",children:"mvn clean install\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"step-4-configure-and-restart-broker",children:"Step 4: Configure and restart broker"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure the following parameters in the ",(0,t.jsx)(n.code,{children:"broker.conf"})," file (or the ",(0,t.jsx)(n.code,{children:"standalone.conf"})," file)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",children:"# Name of pluggable additional servlets\n# Multiple servlets need to be separated by commas.\nadditionalServlets=my-servlet\n# The directory for all additional servlet implementations\nadditionalServletDirectory=tempDir\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Restart your broker."}),"\n",(0,t.jsx)(n.p,{children:"You can see the following broker log if the plug-in is successfully loaded."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Successfully loaded additional servlet for name `my-servlet`\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"entry-filter",children:"Entry filter"}),"\n",(0,t.jsx)(n.p,{children:"This chapter describes what the entry filter is and shows how to use the entry filter."}),"\n",(0,t.jsx)(n.h3,{id:"what-is-an-entry-filter",children:"What is an entry filter?"}),"\n",(0,t.jsxs)(n.p,{children:["The entry filter is an extension point for implementing a custom message entry strategy. With an entry filter, you can decide ",(0,t.jsx)(n.strong,{children:"whether to send messages to consumers"})," (brokers can use the return values of entry filters to determine whether the messages need to be sent or discarded) or ",(0,t.jsx)(n.strong,{children:"send messages to specific consumers."})]}),"\n",(0,t.jsxs)(n.p,{children:["To implement features such as tagged messages or custom delayed messages, use ",(0,t.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/ec0a44058d249a7510bb3d05685b2ee5e0874eb6/pulsar-client-api/src/main/java/org/apache/pulsar/client/api/ConsumerBuilder.java?_pjax=%23js-repo-pjax-container%2C%20div%5Bitemtype%3D%22http%3A%2F%2Fschema.org%2FSoftwareSourceCode%22%5D%20main%2C%20%5Bdata-pjax-container%5D#L174",children:(0,t.jsx)(n.code,{children:"subscriptionProperties"})}),", ",(0,t.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/ec0a44058d249a7510bb3d05685b2ee5e0874eb6/pulsar-client-api/src/main/java/org/apache/pulsar/client/api/ConsumerBuilder.java?_pjax=%23js-repo-pjax-container%2C%20div%5Bitemtype%3D%22http%3A%2F%2Fschema.org%2FSoftwareSourceCode%22%5D%20main%2C%20%5Bdata-pjax-container%5D#L533",children:(0,t.jsx)(n.code,{children:"properties"})}),", and entry filters."]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-use-an-entry-filter",children:"How to use an entry filter?"}),"\n",(0,t.jsx)(n.p,{children:"Follow the steps below:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a Maven project."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Implement the ",(0,t.jsx)(n.code,{children:"EntryFilter"})," interface."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Package the implementation class into a NAR file."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure the ",(0,t.jsx)(n.code,{children:"broker.conf"})," file (or the ",(0,t.jsx)(n.code,{children:"standalone.conf"})," file) and restart your broker."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"step-1-create-a-maven-project-1",children:"Step 1: Create a Maven project"}),"\n",(0,t.jsxs)(n.p,{children:["For how to create a Maven project, see ",(0,t.jsx)(n.a,{href:"https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.h4,{id:"step-2-implement-the-entryfilter-interface",children:["Step 2: Implement the ",(0,t.jsx)(n.code,{children:"EntryFilter"})," interface"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add a dependency for Pulsar broker in the ",(0,t.jsx)(n.code,{children:"pom.xml"})," file to display. Otherwise, you can not find the ",(0,t.jsxs)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/service/plugin/EntryFilter.java",children:[(0,t.jsx)(n.code,{children:"EntryFilter"})," interface"]}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<dependency>\n<groupId>org.apache.pulsar</groupId>\n<artifactId>pulsar-broker</artifactId>\n<version>${pulsar.version}</version>\n<scope>provided</scope>\n</dependency>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Implement the ",(0,t.jsxs)(n.a,{href:"https://github.com/apache/pulsar/blob/2adb6661d5b82c5705ee00ce3ebc9941c99635d5/pulsar-broker/src/main/java/org/apache/pulsar/broker/service/plugin/EntryFilter.java#L34",children:[(0,t.jsx)(n.code,{children:"FilterResult filterEntry(Entry entry, FilterContext context);"})," method"]}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If the method returns ",(0,t.jsx)(n.code,{children:"ACCEPT"})," or NULL, this message is sent to consumers."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If the method returns ",(0,t.jsx)(n.code,{children:"REJECT"}),", this message is filtered out and it does not consume message permits."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If there are multiple entry filters, this message passes through all filters in the pipeline in a round-robin manner. If any entry filter returns ",(0,t.jsx)(n.code,{children:"REJECT"}),", this message is discarded."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can get entry metadata, subscriptions, and other information through ",(0,t.jsx)(n.code,{children:"FilterContext"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Describe a NAR file."}),"\n",(0,t.jsxs)(n.p,{children:["Create an ",(0,t.jsx)(n.code,{children:"entry_filter.yml"})," or ",(0,t.jsx)(n.code,{children:"entry_filter.yaml"})," file in the ",(0,t.jsx)(n.code,{children:"resources/META-INF/services"})," directory to describe a NAR file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",children:"# Entry filter name, which should be configured in the broker.conf file later\nname: entryFilter\n# Entry filter description\ndescription: entry filter\n# Implementation class name of entry filter\nentryFilterClass: com.xxxx.xxxx.xxxx.DefaultEntryFilterImpl\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"step-3-package-implementation-class-of-entry-filter-into-a-nar-file",children:"Step 3: package implementation class of entry filter into a NAR file"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the compiled plugin of the NAR file to your ",(0,t.jsx)(n.code,{children:"pom.xml"})," file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<build>\n        <finalName>${project.artifactId}</finalName>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.nifi</groupId>\n                <artifactId>nifi-nar-maven-plugin</artifactId>\n                <version>1.5.0</version>\n                <extensions>true</extensions>\n                <configuration>\n                    <finalName>${project.artifactId}-${project.version}</finalName>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>default-nar</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>nar</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Generate a NAR file in the ",(0,t.jsx)(n.code,{children:"target"})," directory."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-script",children:"mvn clean install\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"step-4-configure-and-restart-broker-1",children:"Step 4: configure and restart broker"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure the following parameters in the ",(0,t.jsx)(n.code,{children:"broker.conf"})," file (or the ",(0,t.jsx)(n.code,{children:"standalone.conf"})," file)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",children:"# Class name of pluggable entry filters\n# Multiple classes need to be separated by commas.\nentryFilterNames=entryFilter1,entryFilter2,entryFilter3\n# The directory for all entry filter implementations\nentryFiltersDirectory=tempDir\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Restart your broker."}),"\n",(0,t.jsx)(n.p,{children:"You can see the following broker log if the plug-in is successfully loaded."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Successfully loaded entry filter for name `{name of your entry filter}`\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var i=r(96540);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);