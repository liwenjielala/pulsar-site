"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[84021],{24923:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"functions-quickstart","title":"Getting started with Pulsar Functions","description":"Get started to create and validate Pulsar functions.","source":"@site/versioned_docs/version-3.2.x/functions-quickstart.md","sourceDirName":".","slug":"/functions-quickstart","permalink":"/docs/3.2.x/functions-quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/functions-quickstart.md","tags":[],"version":"3.2.x","frontMatter":{"id":"functions-quickstart","title":"Getting started with Pulsar Functions","sidebar_label":"Get started","description":"Get started to create and validate Pulsar functions."},"sidebar":"docsSidebar","previous":{"title":"Concepts","permalink":"/docs/3.2.x/functions-concepts"},"next":{"title":"Set up function workers","permalink":"/docs/3.2.x/functions-worker"}}');var a=s(74848),r=s(28453);const i={id:"functions-quickstart",title:"Getting started with Pulsar Functions",sidebar_label:"Get started",description:"Get started to create and validate Pulsar functions."},c=void 0,l={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Start standalone Pulsar",id:"step-1-start-standalone-pulsar",level:2},{value:"Step 2: Create a namespace for test",id:"step-2-create-a-namespace-for-test",level:2},{value:"Step 3: Start functions",id:"step-3-start-functions",level:2},{value:"Start stateful functions",id:"start-stateful-functions",level:3},{value:"Start window functions",id:"start-window-functions",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This hands-on tutorial provides step-by-step instructions and examples on how to create and validate functions in a ",(0,a.jsx)(n.a,{href:"/docs/3.2.x/getting-started-standalone",children:"standalone Pulsar"}),", including stateful functions and window functions."]}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["JDK 8+. For more details, refer to ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar#pulsar-runtime-java-version-recommendation",children:"Pulsar runtime Java version recommendation"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"Windows OS is not supported."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"step-1-start-standalone-pulsar",children:"Step 1: Start standalone Pulsar"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Enable pulsar function in ",(0,a.jsx)(n.code,{children:"conf/standalone.conf"})," (add this field if not exists):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-properties",children:"functionsWorkerEnabled=true\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Start Pulsar locally."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/pulsar standalone\n"})}),"\n",(0,a.jsxs)(n.p,{children:["All the components (including ZooKeeper, BookKeeper, broker, and so on) of a Pulsar service start in order. You can use the ",(0,a.jsx)(n.code,{children:"bin/pulsar-admin brokers healthcheck"})," command to make sure the Pulsar service is up and running."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Check the Pulsar binary protocol port."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"telnet localhost 6650\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Check the Pulsar Function cluster."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin functions-worker get-cluster\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[{"workerId":"c-standalone-fw-localhost-6750","workerHostname":"localhost","port":6750}]\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Make sure a public tenant exists."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin tenants list\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"public\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Make sure a default namespace exists."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin namespaces list public\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"public/default\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Make sure the table service is enabled successfully."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"telnet localhost 4181\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Trying ::1...\ntelnet: connect to address ::1: Connection refused\nTrying 127.0.0.1...\nConnected to localhost.\nEscape character is '^]'.\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"step-2-create-a-namespace-for-test",children:"Step 2: Create a namespace for test"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a tenant and a namespace."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin tenants create test\nbin/pulsar-admin namespaces create test/test-namespace\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"In the same terminal window as step 1, verify the tenant and the namespace."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin namespaces list test\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsx)(n.p,{children:"This output shows that both tenant and namespace are created successfully."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'"test/test-namespace"\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"step-3-start-functions",children:"Step 3: Start functions"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Before starting functions, you need to ",(0,a.jsx)(n.a,{href:"#start-standalone-pulsar",children:"start Pulsar"})," and ",(0,a.jsx)(n.a,{href:"#create-a-namespace-for-test",children:"create a test namespace"}),"."]})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Create a function named ",(0,a.jsx)(n.code,{children:"examples"}),"."]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:["You can see both the ",(0,a.jsx)(n.code,{children:"example-function-config.yaml"})," and ",(0,a.jsx)(n.code,{children:"api-examples.jar"})," files under the ",(0,a.jsx)(n.code,{children:"examples"})," folder of the Pulsar's directory on your local machine."]}),(0,a.jsxs)(n.p,{children:["This example function will add a ",(0,a.jsx)(n.code,{children:"!"})," at the end of every message."]})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin functions create \\\n   --function-config-file $PWD/examples/example-function-config.yaml \\\n   --jar $PWD/examples/api-examples.jar\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Created Successfully\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can check the config of this function in ",(0,a.jsx)(n.code,{children:"examples/example-function-config.yaml"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'tenant: "test"\nnamespace: "test-namespace"\nname: "example" # function name\nclassName: "org.apache.pulsar.functions.api.examples.ExclamationFunction"\ninputs: ["test_src"] # this function will read messages from these topics\noutput: "test_result" # the return value of this function will be sent to this topic\nautoAck: true # function will acknowledge input messages if set true\nparallelism: 1\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You can see the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/java-examples/src/main/java/org/apache/pulsar/functions/api/examples/ExclamationFunction.java",children:"source code"})," of ",(0,a.jsx)(n.code,{children:"ExclamationFunction"}),".\nFor more information about the yaml config, see the ",(0,a.jsx)(n.a,{href:"/docs/3.2.x/functions-cli#yaml-configurations-for-pulsar-functions",children:"reference"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"In the same terminal window as step 1, verify the function's configurations."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin functions get \\\n   --tenant test \\\n   --namespace test-namespace \\\n   --name example\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "tenant": "test",\n    "namespace": "test-namespace",\n    "name": "example",\n    "className": "org.apache.pulsar.functions.api.examples.ExclamationFunction",\n    "inputSpecs": {\n        "test_src": {\n        "isRegexPattern": false,\n        "schemaProperties": {},\n        "consumerProperties": {},\n        "poolMessages": false\n        }\n    },\n    "output": "test_result",\n    "producerConfig": {\n        "useThreadLocalProducers": false,\n        "batchBuilder": ""\n    },\n    "processingGuarantees": "ATLEAST_ONCE",\n    "retainOrdering": false,\n    "retainKeyOrdering": false,\n    "forwardSourceMessageProperty": true,\n    "userConfig": {},\n    "runtime": "JAVA",\n    "autoAck": true,\n    "parallelism": 1,\n    "resources": {\n        "cpu": 1.0,\n        "ram": 1073741824,\n        "disk": 10737418240\n    },\n    "cleanupSubscription": true,\n    "subscriptionPosition": "Latest"\n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"In the same terminal window as step 1, verify the function's status."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin functions status \\\n   --tenant test \\\n   --namespace test-namespace \\\n   --name example\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:'"running": true'})," shows that the function is running."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReceived" : 0,\n      "numSuccessfullyProcessed" : 0,\n      "numUserExceptions" : 0,\n      "latestUserExceptions" : [ ],\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "averageLatency" : 0.0,\n      "lastInvocationTime" : 0,\n      "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In the same terminal window as step 1, subscribe to the ",(0,a.jsx)(n.strong,{children:"output topic"})," ",(0,a.jsx)(n.code,{children:"test_result"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-client consume -s test-sub -n 0 test_result\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In a new terminal window, produce messages to the ",(0,a.jsx)(n.strong,{children:"input topic"})," ",(0,a.jsx)(n.code,{children:"test_src"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'bin/pulsar-client produce -m "test-messages-`date`" -n 10 test_src\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In the same terminal window as step 1, the messages produced by the ",(0,a.jsx)(n.code,{children:"example"})," function are returned. You can see there is a ",(0,a.jsx)(n.code,{children:"!"})," added at the end of every message."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n----- got message -----\ntest-messages-Thu Jul 19 11:59:15 PDT 2021!\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"start-stateful-functions",children:"Start stateful functions"}),"\n",(0,a.jsxs)(n.p,{children:["The standalone mode of Pulsar enables BookKeeper table service for stateful functions. For more information, see ",(0,a.jsx)(n.a,{href:"/docs/3.2.x/functions-develop-state",children:"Configure state storage"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Before starting stateful functions, you need to ",(0,a.jsx)(n.a,{href:"#start-standalone-pulsar",children:"start Pulsar"})," and ",(0,a.jsx)(n.a,{href:"#create-a-namespace-for-test",children:"create a test namespace"}),"."]})}),"\n",(0,a.jsx)(n.p,{children:"The following example provides instructions to start a stateful function to validate counter functions."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Create a function using ",(0,a.jsx)(n.code,{children:"examples/example-stateful-function-config.yaml"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin functions create \\\n   --function-config-file $PWD/examples/example-stateful-function-config.yaml \\\n   --jar $PWD/examples/api-examples.jar\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Created Successfully\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can check the config of this function in ",(0,a.jsx)(n.code,{children:"examples/example-stateful-function-config.yaml"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'tenant: "test"\nnamespace: "test-namespace"\nname: "word_count"\nclassName: "org.apache.pulsar.functions.api.examples.WordCountFunction"\ninputs: ["test_wordcount_src"] # this function will read messages from these topics\nautoAck: true\nparallelism: 1\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You can see the ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/java-examples/src/main/java/org/apache/pulsar/functions/api/examples/WordCountFunction.java",children:"source code"})," of ",(0,a.jsx)(n.code,{children:"WordCountFunction"}),". This function won't return any value but store the occurrence of words in function context. So you don't need to specify an output topic.\nFor more information about the yaml config, see the ",(0,a.jsx)(n.a,{href:"/docs/3.2.x/functions-cli#yaml-configurations-for-pulsar-functions",children:"reference"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In the same terminal window as step 1, get the information of the ",(0,a.jsx)(n.code,{children:"word_count"})," function."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin functions get \\\n   --tenant test \\\n   --namespace test-namespace \\\n   --name word_count\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "tenant": "test",\n  "namespace": "test-namespace",\n  "name": "word_count",\n  "className": "org.apache.pulsar.functions.api.examples.WordCountFunction",\n  "inputSpecs": {\n    "test_wordcount_src": {\n      "isRegexPattern": false,\n      "schemaProperties": {},\n      "consumerProperties": {},\n      "poolMessages": false\n    }\n  },\n  "producerConfig": {\n    "useThreadLocalProducers": false,\n    "batchBuilder": ""\n  },\n  "processingGuarantees": "ATLEAST_ONCE",\n  "retainOrdering": false,\n  "retainKeyOrdering": false,\n  "forwardSourceMessageProperty": true,\n  "userConfig": {},\n  "runtime": "JAVA",\n  "autoAck": true,\n  "parallelism": 1,\n  "resources": {\n    "cpu": 1.0,\n    "ram": 1073741824,\n    "disk": 10737418240\n  },\n  "cleanupSubscription": true,\n  "subscriptionPosition": "Latest"\n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In the same terminal window as step 1, get the status of the ",(0,a.jsx)(n.code,{children:"word_count"})," function."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin functions status \\\n   --tenant test \\\n   --namespace test-namespace \\\n   --name word_count\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n       "error" : "",\n       "numRestarts" : 0,\n       "numReceived" : 0,\n       "numSuccessfullyProcessed" : 0,\n       "numUserExceptions" : 0,\n       "latestUserExceptions" : [ ],\n       "numSystemExceptions" : 0,\n       "latestSystemExceptions" : [ ],\n       "averageLatency" : 0.0,\n       "lastInvocationTime" : 0,\n       "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In the same terminal window as step 1, query the state table for the function with the key ",(0,a.jsx)(n.code,{children:"hello"}),". This operation watches the changes associated with ",(0,a.jsx)(n.code,{children:"hello"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin functions querystate \\\n   --tenant test \\\n   --namespace test-namespace \\\n   --name word_count -k hello -w\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["For more information about the ",(0,a.jsx)(n.code,{children:"pulsar-admin functions querystate options"})," command, including flags, descriptions, default values, and shorthands, see ",(0,a.jsx)(n.a,{href:"pathname:///reference/#/3.2.x/pulsar-admin/",children:"Pulsar admin API"}),"."]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"key 'hello' doesn't exist.\nkey 'hello' doesn't exist.\nkey 'hello' doesn't exist.\n...\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In a new terminal window, produce 10 messages with ",(0,a.jsx)(n.code,{children:"hello"})," to the ",(0,a.jsx)(n.strong,{children:"input topic"})," ",(0,a.jsx)(n.code,{children:"test_wordcount_src"})," using one of the following methods. The value of ",(0,a.jsx)(n.code,{children:"hello"})," is updated to 10."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'bin/pulsar-client produce -m "hello" -n 10 test_wordcount_src\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"6",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"In the same terminal window as step 1, check the result."}),"\n",(0,a.jsxs)(n.p,{children:["The result shows that the ",(0,a.jsx)(n.strong,{children:"output topic"})," ",(0,a.jsx)(n.code,{children:"test_wordcount_dest"})," receives the messages."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "key": "hello",\n  "numberValue": 10,\n  "version": 9\n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In the terminal window as step 5, produce another 10 messages with ",(0,a.jsx)(n.code,{children:"hello"}),". The value of ",(0,a.jsx)(n.code,{children:"hello"})," is updated to 20."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'bin/pulsar-client produce -m "hello" -n 10 test_wordcount_src\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"In the same terminal window as step 1, check the result."}),"\n",(0,a.jsxs)(n.p,{children:["The result shows that the ",(0,a.jsx)(n.strong,{children:"output topic"})," ",(0,a.jsx)(n.code,{children:"test_wordcount_dest"})," receives the value of 20."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n   "key": "hello",\n   "numberValue": 20,\n   "version": 19\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"start-window-functions",children:"Start window functions"}),"\n",(0,a.jsxs)(n.p,{children:["Window functions are a special form of Pulsar Functions. For more information, see ",(0,a.jsx)(n.a,{href:"/docs/3.2.x/functions-concepts#window-function",children:"concepts"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Before starting window functions, you need to ",(0,a.jsx)(n.a,{href:"#start-standalone-pulsar",children:"start Pulsar"}),"  and ",(0,a.jsx)(n.a,{href:"#create-a-namespace-for-test",children:"create a test namespace"}),"."]})}),"\n",(0,a.jsx)(n.p,{children:"The following example provides instructions to start a window function to calculate the sum in a window."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Create a function using ",(0,a.jsx)(n.code,{children:"example-window-function-config.yaml"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin functions create \\\n   --function-config-file $PWD/examples/example-window-function-config.yaml \\\n   --jar $PWD/examples/api-examples.jar\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Created Successfully\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can check the config of this function in ",(0,a.jsx)(n.code,{children:"examples/example-window-function-config.yaml"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'tenant: "test"\nnamespace: "test-namespace"\nname: "window-example"\nclassName: "org.apache.pulsar.functions.api.examples.AddWindowFunction"\ninputs: ["test_window_src"]\noutput: "test_window_result"\nautoAck: true\nparallelism: 1\n\n# every 5 messages, calculate sum of the latest 10 messages\nwindowConfig:\n  windowLengthCount: 10\n  slidingIntervalCount: 5\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You can see the source code of ",(0,a.jsx)(n.code,{children:"AddWindowFunction"})," ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/java-examples/src/main/java/org/apache/pulsar/functions/api/examples/AddWindowFunction.java",children:"here"}),".\nFor more information about the yaml config, see the ",(0,a.jsx)(n.a,{href:"/docs/3.2.x/functions-cli#yaml-configurations-for-pulsar-functions",children:"reference"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"In the same terminal window as step 1, verify the function's configurations."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin functions get \\\n   --tenant test \\\n   --namespace test-namespace \\\n   --name window-example\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "tenant": "test",\n  "namespace": "test-namespace",\n  "name": "window-example",\n  "className": "org.apache.pulsar.functions.api.examples.AddWindowFunction",\n  "inputSpecs": {\n    "test_window_src": {\n      "isRegexPattern": false,\n      "schemaProperties": {},\n      "consumerProperties": {},\n      "poolMessages": false\n    }\n  },\n  "output": "test_window_result",\n  "producerConfig": {\n    "useThreadLocalProducers": false,\n    "batchBuilder": ""\n  },\n  "processingGuarantees": "ATLEAST_ONCE",\n  "retainOrdering": false,\n  "retainKeyOrdering": false,\n  "forwardSourceMessageProperty": true,\n  "userConfig": {},\n  "runtime": "JAVA",\n  "autoAck": false,\n  "parallelism": 1,\n  "resources": {\n    "cpu": 1.0,\n    "ram": 1073741824,\n    "disk": 10737418240\n  },\n  "windowConfig": {\n    "windowLengthCount": 10,\n    "slidingIntervalCount": 5,\n    "actualWindowFunctionClassName": "org.apache.pulsar.functions.api.examples.AddWindowFunction",\n    "processingGuarantees": "ATLEAST_ONCE"\n  },\n  "cleanupSubscription": true,\n  "subscriptionPosition": "Latest"\n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"In the same terminal window as step 1, verify the function's status."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin functions status \\\n   --tenant test \\\n   --namespace test-namespace \\\n   --name window-example\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:'"running": true'})," shows that the function is running."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReceived" : 0,\n      "numSuccessfullyProcessed" : 0,\n      "numUserExceptions" : 0,\n      "latestUserExceptions" : [ ],\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "averageLatency" : 0.0,\n      "lastInvocationTime" : 0,\n      "workerId" : "c-standalone-fw-localhost-8080"\n    }\n  } ]\n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In the same terminal window as step 1, subscribe to the ",(0,a.jsx)(n.strong,{children:"output topic"})," ",(0,a.jsx)(n.code,{children:"test_window_result"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-client consume -s test-sub -n 0 test_window_result\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In a new terminal window, produce messages to the ",(0,a.jsx)(n.strong,{children:"input topic"})," ",(0,a.jsx)(n.code,{children:"test_window_src"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'bin/pulsar-client produce -m "3" -n 10 test_window_src\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In the same terminal window as step 1, the messages produced by the window function ",(0,a.jsx)(n.code,{children:"window-example"})," are returned."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Output"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"----- got message -----\nkey:[null], properties:[], content:15\n----- got message -----\nkey:[null], properties:[], content:30\n"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(96540);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);