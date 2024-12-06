"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[18638],{4020:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"getting-started-standalone","title":"Run a standalone Pulsar cluster locally","description":"For local development and testing, you can run Pulsar in standalone mode on your machine. The standalone mode runs all components inside a single Java Virtual Machine (JVM) process.","source":"@site/versioned_docs/version-2.11.x/getting-started-standalone.md","sourceDirName":".","slug":"/getting-started-standalone","permalink":"/docs/2.11.x/getting-started-standalone","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/getting-started-standalone.md","tags":[],"version":"2.11.x","frontMatter":{"id":"getting-started-standalone","title":"Run a standalone Pulsar cluster locally","sidebar_label":"Run Pulsar locally"},"sidebar":"docsSidebar","previous":{"title":"Get Started","permalink":"/docs/2.11.x/getting-started-home"},"next":{"title":"Run Pulsar in Docker","permalink":"/docs/2.11.x/getting-started-docker"}}');var t=n(74848),a=n(28453);const i={id:"getting-started-standalone",title:"Run a standalone Pulsar cluster locally",sidebar_label:"Run Pulsar locally"},l=void 0,o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Download Pulsar distribution",id:"download-pulsar-distribution",level:2},{value:"Start a Pulsar standalone cluster",id:"start-a-pulsar-standalone-cluster",level:2},{value:"Create a topic",id:"create-a-topic",level:2},{value:"Write messages to the topic",id:"write-messages-to-the-topic",level:2},{value:"Read messages from the topic",id:"read-messages-from-the-topic",level:2},{value:"Write some more messages",id:"write-some-more-messages",level:2},{value:"Stop the Pulsar cluster",id:"stop-the-pulsar-cluster",level:2},{value:"Related Topics",id:"related-topics",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"For local development and testing, you can run Pulsar in standalone mode on your machine. The standalone mode runs all components inside a single Java Virtual Machine (JVM) process."}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["If you're looking to run a full production Pulsar installation, see the ",(0,t.jsx)(s.a,{href:"/docs/2.11.x/deploy-bare-metal",children:"Deploying a Pulsar instance"})," guide."]})}),"\n",(0,t.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(s.p,{children:["Currently, Pulsar is available for 64-bit ",(0,t.jsx)(s.strong,{children:"macOS"})," and ",(0,t.jsx)(s.strong,{children:"Linux"}),". See ",(0,t.jsx)(s.a,{href:"/docs/2.11.x/getting-started-docker",children:"Run Pulsar In Docker"})," if you want to run Pulsar on ",(0,t.jsx)(s.strong,{children:"Windows"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Also, you need the proper 64-bit JRE/JDK version installed. Please refer to ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/blob/master/README.md#pulsar-runtime-java-version-recommendation",children:"Pulsar Runtime Java Version Recommendation"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"download-pulsar-distribution",children:"Download Pulsar distribution"}),"\n",(0,t.jsx)(s.p,{children:"Download the official Apache Pulsar distribution:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"wget https://archive.apache.org/dist/pulsar/pulsar-2.11.4/apache-pulsar-2.11.4-bin.tar.gz\n"})}),"\n",(0,t.jsx)(s.p,{children:"Once downloaded, unpack the tar file:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"tar xvfz apache-pulsar-2.11.4-bin.tar.gz\n"})}),"\n",(0,t.jsx)(s.p,{children:"For the rest of this quickstart all commands are run from the root of the distribution folder, so switch to it:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cd apache-pulsar-2.11.4\n"})}),"\n",(0,t.jsx)(s.p,{children:"List the contents by executing:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"ls -1F\n"})}),"\n",(0,t.jsx)(s.p,{children:"The following directories are created:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Directory"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"bin"})}),(0,t.jsxs)(s.td,{children:["The ",(0,t.jsx)(s.a,{href:"/docs/2.11.x/reference-cli-tools",children:(0,t.jsx)(s.code,{children:"pulsar"})})," entry point script, and many other command-line tools"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"conf"})}),(0,t.jsxs)(s.td,{children:["Configuration files, including ",(0,t.jsx)(s.code,{children:"broker.conf"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"lib"})}),(0,t.jsx)(s.td,{children:"JARs used by Pulsar"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"examples"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.a,{href:"/docs/2.11.x/functions-overview",children:"Pulsar Functions"})," examples"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"instances"})}),(0,t.jsxs)(s.td,{children:["Artifacts for ",(0,t.jsx)(s.a,{href:"/docs/2.11.x/functions-overview",children:"Pulsar Functions"})]})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"start-a-pulsar-standalone-cluster",children:"Start a Pulsar standalone cluster"}),"\n",(0,t.jsx)(s.p,{children:"Run this command to start a standalone Pulsar cluster:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"bin/pulsar standalone\n"})}),"\n",(0,t.jsx)(s.p,{children:"When the Pulsar cluster starts, the following directories are created:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Directory"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"data"})}),(0,t.jsx)(s.td,{children:"All data created by BookKeeper and RocksDB"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"logs"})}),(0,t.jsx)(s.td,{children:"All server-side logs"})]})]})]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["To run the service as a background process, you can use the ",(0,t.jsx)(s.code,{children:"bin/pulsar-daemon start standalone"})," command. For more information, see ",(0,t.jsx)(s.a,{href:"/docs/2.11.x/reference-cli-tools",children:"pulsar-daemon"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"public/default"})," namespace is created when you start a Pulsar cluster. This namespace is for development purposes. All Pulsar topics are managed within namespaces. For more information, see ",(0,t.jsx)(s.a,{href:"/docs/2.11.x/concepts-messaging#namespaces",children:"Namespaces"})," and ",(0,t.jsx)(s.a,{href:"/docs/2.11.x/concepts-messaging#topics",children:"Topics"}),"."]}),"\n"]})}),"\n",(0,t.jsx)(s.h2,{id:"create-a-topic",children:"Create a topic"}),"\n",(0,t.jsx)(s.p,{children:"Pulsar stores messages in topics. It's a good practice to explicitly create topics before using them, even if Pulsar can automatically create topics when they are referenced."}),"\n",(0,t.jsx)(s.p,{children:"To create a new topic, run this command:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"bin/pulsar-admin topics create persistent://public/default/my-topic\n"})}),"\n",(0,t.jsx)(s.h2,{id:"write-messages-to-the-topic",children:"Write messages to the topic"}),"\n",(0,t.jsxs)(s.p,{children:["You can use the ",(0,t.jsx)(s.code,{children:"pulsar"})," command line tool to write messages to a topic. This is useful for experimentation, but in practice you'll use the Producer API in your application code, or Pulsar IO connectors for pulling data in from other systems to Pulsar."]}),"\n",(0,t.jsx)(s.p,{children:"Run this command to produce a message:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"bin/pulsar-client produce my-topic --messages 'Hello Pulsar!'\n"})}),"\n",(0,t.jsx)(s.h2,{id:"read-messages-from-the-topic",children:"Read messages from the topic"}),"\n",(0,t.jsx)(s.p,{children:"Now that some messages have been written to the topic, run this command to launch the consumer and read those messages back:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"bin/pulsar-client consume my-topic -s 'my-subscription' -p Earliest -n 0\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Earliest means consuming from the earliest ",(0,t.jsx)(s.strong,{children:"unconsumed"})," message. ",(0,t.jsx)(s.code,{children:"-n"})," configures the number of messages to consume, 0 means to consume forever."]}),"\n",(0,t.jsx)(s.p,{children:"As before, this is useful for experimenting with messages, but in practice you'll use the Consumer API in your application code, or Pulsar IO connectors for reading data from Pulsar to push to other systems."}),"\n",(0,t.jsx)(s.p,{children:"You'll see the messages you produce in the previous step:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:"----- got message -----\nkey:[null], properties:[], content:Hello Pulsar!\n"})}),"\n",(0,t.jsx)(s.h2,{id:"write-some-more-messages",children:"Write some more messages"}),"\n",(0,t.jsx)(s.p,{children:"Leave the consume command from the previous step running. If you've already closed it, just re-run it."}),"\n",(0,t.jsxs)(s.p,{children:["Now open a new terminal window and produce more messages. The default message separator is ",(0,t.jsx)(s.code,{children:","}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"bin/pulsar-client produce my-topic --messages \"$(seq -s, -f 'Message NO.%g' 1 10)\"\n"})}),"\n",(0,t.jsx)(s.p,{children:"Note how they are displayed almost instantaneously in the consumer terminal."}),"\n",(0,t.jsx)(s.h2,{id:"stop-the-pulsar-cluster",children:"Stop the Pulsar cluster"}),"\n",(0,t.jsxs)(s.p,{children:["Once you've finished you can shut down the Pulsar cluster. Press ",(0,t.jsx)(s.strong,{children:"Ctrl-C"})," in the terminal window in which you started the cluster."]}),"\n",(0,t.jsx)(s.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/2.11.x/concepts-architecture-overview",children:"Pulsar Concepts and Architecture"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/2.11.x/client-libraries",children:"Pulsar Client Libraries"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/2.11.x/io-overview",children:"Pulsar Connectors"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/2.11.x/functions-overview",children:"Pulsar Functions"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var r=n(96540);const t={},a=r.createContext(t);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);