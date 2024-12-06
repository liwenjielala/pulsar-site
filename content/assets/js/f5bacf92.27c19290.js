"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[16937],{44225:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"functions-debug","title":"Debug Pulsar Functions","description":"You can use the following methods to debug Pulsar Functions:","source":"@site/versioned_docs/version-2.6.3/functions-debug.md","sourceDirName":".","slug":"/functions-debug","permalink":"/docs/2.6.3/functions-debug","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.3/functions-debug.md","tags":[],"version":"2.6.3","frontMatter":{"id":"functions-debug","title":"Debug Pulsar Functions","sidebar_label":"How-to: Debug","original_id":"functions-debug"},"sidebar":"docsSidebar","previous":{"title":"How-to: Develop","permalink":"/docs/2.6.3/functions-develop"},"next":{"title":"How-to: Deploy","permalink":"/docs/2.6.3/functions-deploy"}}');var t=s(74848),c=s(28453);const o={id:"functions-debug",title:"Debug Pulsar Functions",sidebar_label:"How-to: Debug",original_id:"functions-debug"},r=void 0,l={},a=[{value:"Captured stderr",id:"captured-stderr",level:2},{value:"Use unit test",id:"use-unit-test",level:2},{value:"Debug with localrun mode",id:"debug-with-localrun-mode",level:2},{value:"Use log topic",id:"use-log-topic",level:2},{value:"Use Functions CLI",id:"use-functions-cli",level:2},{value:"<code>get</code>",id:"get",level:3},{value:"<code>status</code>",id:"status",level:3},{value:"<code>stats</code>",id:"stats",level:3},{value:"<code>list</code>",id:"list",level:3},{value:"<code>trigger</code>",id:"trigger",level:3}];function d(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"You can use the following methods to debug Pulsar Functions:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs/2.6.3/functions-debug#captured-stderr",children:"Captured stderr"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs/2.6.3/functions-debug#use-unit-test",children:"Use unit test"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs/2.6.3/functions-debug#debug-with-localrun-mode",children:"Debug with localrun mode"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs/2.6.3/functions-debug#use-log-topic",children:"Use log topic"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/docs/2.6.3/functions-debug#use-functions-cli",children:"Use Functions CLI"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"captured-stderr",children:"Captured stderr"}),"\n",(0,t.jsxs)(e.p,{children:["Function startup information and captured stderr output is written to ",(0,t.jsx)(e.code,{children:"logs/functions/<tenant>/<namespace>/<function>/<function>-<instance>.log"})]}),"\n",(0,t.jsx)(e.p,{children:"This is useful for debugging why a function fails to start."}),"\n",(0,t.jsx)(e.h2,{id:"use-unit-test",children:"Use unit test"}),"\n",(0,t.jsx)(e.p,{children:"A Pulsar Function is a function with inputs and outputs, you can test a Pulsar Function in a similar way as you test any function."}),"\n",(0,t.jsx)(e.p,{children:"For example, if you have the following Pulsar Function:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'\nimport java.util.function.Function;\n\npublic class JavaNativeExclamationFunction implements Function<String, String> {\n   @Override\n   public String apply(String input) {\n       return String.format("%s!", input);\n   }\n}\n\n'})}),"\n",(0,t.jsx)(e.p,{children:"You can write a simple unit test to test Pulsar Function."}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsx)(e.p,{children:"Pulsar uses testng for testing."})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'\n@Test\npublic void testJavaNativeExclamationFunction() {\n   JavaNativeExclamationFunction exclamation = new JavaNativeExclamationFunction();\n   String output = exclamation.apply("foo");\n   Assert.assertEquals(output, "foo!");\n}\n\n'})}),"\n",(0,t.jsxs)(e.p,{children:["The following Pulsar Function implements the ",(0,t.jsx)(e.code,{children:"org.apache.pulsar.functions.api.Function"})," interface."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\n\npublic class ExclamationFunction implements Function<String, String> {\n   @Override\n   public String process(String input, Context context) {\n       return String.format("%s!", input);\n   }\n}\n\n'})}),"\n",(0,t.jsxs)(e.p,{children:["In this situation, you can write a unit test for this function as well. Remember to mock the ",(0,t.jsx)(e.code,{children:"Context"})," parameter. The following is an example."]}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsx)(e.p,{children:"Pulsar uses testng for testing."})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'\n@Test\npublic void testExclamationFunction() {\n   ExclamationFunction exclamation = new ExclamationFunction();\n   String output = exclamation.process("foo", mock(Context.class));\n   Assert.assertEquals(output, "foo!");\n}\n\n'})}),"\n",(0,t.jsx)(e.h2,{id:"debug-with-localrun-mode",children:"Debug with localrun mode"}),"\n",(0,t.jsx)(e.p,{children:"When you run a Pulsar Function in localrun mode, it launches an instance of the Function on your local machine as a thread."}),"\n",(0,t.jsx)(e.p,{children:"In this mode, a Pulsar Function consumes and produces actual data to a Pulsar cluster, and mirrors how the function actually runs in a Pulsar cluster."}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.p,{children:"Currently, debugging with localrun mode is only supported by Pulsar Functions written in Java. You need Pulsar version 2.4.0 or later to do the following. Even though localrun is available in versions earlier than Pulsar 2.4.0, you cannot debug with localrun mode programmatically or run Functions as threads."})}),"\n",(0,t.jsx)(e.p,{children:"You can launch your function in the following manner."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"\nFunctionConfig functionConfig = new FunctionConfig();\nfunctionConfig.setName(functionName);\nfunctionConfig.setInputs(Collections.singleton(sourceTopic));\nfunctionConfig.setClassName(ExclamationFunction.class.getName());\nfunctionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\nfunctionConfig.setOutput(sinkTopic);\n\nLocalRunner localRunner = LocalRunner.builder().functionConfig(functionConfig).build();\nlocalRunner.start(true);\n\n"})}),"\n",(0,t.jsx)(e.p,{children:"So you can debug functions using an IDE easily. Set breakpoints and manually step through a function to debug with real data."}),"\n",(0,t.jsx)(e.p,{children:"The following example illustrates how to programmatically launch a function in localrun mode."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'\npublic class ExclamationFunction implements Function<String, String> {\n\n   @Override\n   public String process(String s, Context context) throws Exception {\n       return s + "!";\n   }\n\npublic static void main(String[] args) throws Exception {\n    FunctionConfig functionConfig = new FunctionConfig();\n    functionConfig.setName("exclamation");\n    functionConfig.setInputs(Collections.singleton("input"));\n    functionConfig.setClassName(ExclamationFunction.class.getName());\n    functionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\n    functionConfig.setOutput("output");\n\n    LocalRunner localRunner = LocalRunner.builder().functionConfig(functionConfig).build();\n    localRunner.start(false);\n}\n\n'})}),"\n",(0,t.jsx)(e.p,{children:"To use localrun mode programmatically, add the following dependency."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-xml",children:"\n<dependency>\n   <groupId>org.apache.pulsar</groupId>\n   <artifactId>pulsar-functions-local-runner</artifactId>\n   <version>${pulsar.version}</version>\n</dependency>\n\n"})}),"\n",(0,t.jsxs)(e.p,{children:["For complete code samples, see ",(0,t.jsx)(e.a,{href:"https://github.com/jerrypeng/pulsar-functions-demos/tree/master/debugging",children:"here"}),"."]}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.p,{children:"Debugging with localrun mode for Pulsar Functions written in other languages will be supported soon."})}),"\n",(0,t.jsx)(e.h2,{id:"use-log-topic",children:"Use log topic"}),"\n",(0,t.jsx)(e.p,{children:"In Pulsar Functions, you can generate log information defined in functions to a specified log topic. You can configure consumers to consume messages from a specified log topic to check the log information."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Pulsar Functions core programming model",src:s(92086).A+"",width:"1712",height:"1049"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport org.slf4j.Logger;\n\npublic class LoggingFunction implements Function<String, Void> {\n    @Override\n    public void apply(String input, Context context) {\n        Logger LOG = context.getLogger();\n        String messageId = new String(context.getMessageId());\n\n        if (input.contains("danger")) {\n            LOG.warn("A warning was received in message {}", messageId);\n        } else {\n            LOG.info("Message {} received\\nContent: {}", messageId, input);\n        }\n\n        return null;\n    }\n}\n\n'})}),"\n",(0,t.jsxs)(e.p,{children:["As shown in the example above, you can get the logger via ",(0,t.jsx)(e.code,{children:"context.getLogger()"})," and assign the logger to the ",(0,t.jsx)(e.code,{children:"LOG"})," variable of ",(0,t.jsx)(e.code,{children:"slf4j"}),", so you can define your desired log information in a function using the ",(0,t.jsx)(e.code,{children:"LOG"})," variable. Meanwhile, you need to specify the topic to which the log information is produced."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions create \\\n  --log-topic persistent://public/default/logging-function-logs \\\n  # Other function configs\n\n"})}),"\n",(0,t.jsx)(e.h2,{id:"use-functions-cli",children:"Use Functions CLI"}),"\n",(0,t.jsxs)(e.p,{children:["With ",(0,t.jsx)(e.a,{href:"/docs/2.6.3/reference-pulsar-admin#functions",children:"Pulsar Functions CLI"}),", you can debug Pulsar Functions with the following subcommands:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"get"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"status"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"stats"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"list"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"trigger"})}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsxs)(e.p,{children:["For complete commands of ",(0,t.jsx)(e.strong,{children:"Pulsar Functions CLI"}),", see ",(0,t.jsx)(e.a,{href:"/docs/2.6.3/reference-pulsar-admin#functions",children:"here"}),"\u3002"]})}),"\n",(0,t.jsx)(e.h3,{id:"get",children:(0,t.jsx)(e.code,{children:"get"})}),"\n",(0,t.jsx)(e.p,{children:"Get information about a Pulsar Function."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Usage"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"\n$ pulsar-admin functions get options\n\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Options"})}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Flag"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--fqfn"})}),(0,t.jsx)(e.td,{children:"The Fully Qualified Function Name (FQFN) of a Pulsar Function."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--name"})}),(0,t.jsx)(e.td,{children:"The name of a Pulsar Function."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--namespace"})}),(0,t.jsx)(e.td,{children:"The namespace of a Pulsar Function."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--tenant"})}),(0,t.jsx)(e.td,{children:"The tenant of a Pulsar Function."})]})]})]}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"--fqfn"})," consists of ",(0,t.jsx)(e.code,{children:"--name"}),", ",(0,t.jsx)(e.code,{children:"--namespace"})," and ",(0,t.jsx)(e.code,{children:"--tenant"}),", so you can specify either ",(0,t.jsx)(e.code,{children:"--fqfn"})," or ",(0,t.jsx)(e.code,{children:"--name"}),", ",(0,t.jsx)(e.code,{children:"--namespace"})," and ",(0,t.jsx)(e.code,{children:"--tenant"}),"."]})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsxs)(e.p,{children:["You can specify ",(0,t.jsx)(e.code,{children:"--fqfn"})," to get information about a Pulsar Function."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"\n$ ./bin/pulsar-admin functions get public/default/ExclamationFunctio6\n\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Optionally, you can specify ",(0,t.jsx)(e.code,{children:"--name"}),", ",(0,t.jsx)(e.code,{children:"--namespace"})," and ",(0,t.jsx)(e.code,{children:"--tenant"})," to get information about a Pulsar Function."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"\n$ ./bin/pulsar-admin functions get \\\n    --tenant public \\\n    --namespace default \\\n    --name ExclamationFunctio6\n\n"})}),"\n",(0,t.jsxs)(e.p,{children:["As shown below, the ",(0,t.jsx)(e.code,{children:"get"})," command shows input, output, runtime, and other information about the ",(0,t.jsx)(e.em,{children:"ExclamationFunctio6"})," function."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'\n{\n  "tenant": "public",\n  "namespace": "default",\n  "name": "ExclamationFunctio6",\n  "className": "org.example.test.ExclamationFunction",\n  "inputSpecs": {\n    "persistent://public/default/my-topic-1": {\n      "isRegexPattern": false\n    }\n  },\n  "output": "persistent://public/default/test-1",\n  "processingGuarantees": "ATLEAST_ONCE",\n  "retainOrdering": false,\n  "userConfig": {},\n  "runtime": "JAVA",\n  "autoAck": true,\n  "parallelism": 1\n}\n\n'})}),"\n",(0,t.jsx)(e.h3,{id:"status",children:(0,t.jsx)(e.code,{children:"status"})}),"\n",(0,t.jsx)(e.p,{children:"Check the current status of a Pulsar Function."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Usage"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"\n$ pulsar-admin functions status options\n\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Options"})}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Flag"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--fqfn"})}),(0,t.jsx)(e.td,{children:"The Fully Qualified Function Name (FQFN) of a Pulsar Function."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--instance-id"})}),(0,t.jsxs)(e.td,{children:["The instance ID of a Pulsar Function ",(0,t.jsx)("br",{}),"If the ",(0,t.jsx)(e.code,{children:"--instance-id"})," is not specified, it gets the IDs of all instances.",(0,t.jsx)("br",{})]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--name"})}),(0,t.jsx)(e.td,{children:"The name of a Pulsar Function."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--namespace"})}),(0,t.jsx)(e.td,{children:"The namespace of a Pulsar Function."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--tenant"})}),(0,t.jsx)(e.td,{children:"The tenant of a Pulsar Function."})]})]})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"\n$ ./bin/pulsar-admin functions status \\\n    --tenant public \\\n    --namespace default \\\n    --name ExclamationFunctio6 \\\n\n"})}),"\n",(0,t.jsxs)(e.p,{children:["As shown below, the ",(0,t.jsx)(e.code,{children:"status"})," command shows the number of instances, running instances, the instance running under the ",(0,t.jsx)(e.em,{children:"ExclamationFunctio6"})," function, received messages, successfully processed messages, system exceptions, the average latency and so on."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'\n{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReceived" : 1,\n      "numSuccessfullyProcessed" : 1,\n      "numUserExceptions" : 0,\n      "latestUserExceptions" : [ ],\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "averageLatency" : 0.8385,\n      "lastInvocationTime" : 1557734137987,\n      "workerId" : "c-standalone-fw-23ccc88ef29b-8080"\n    }\n  } ]\n}\n\n'})}),"\n",(0,t.jsx)(e.h3,{id:"stats",children:(0,t.jsx)(e.code,{children:"stats"})}),"\n",(0,t.jsx)(e.p,{children:"Get the current stats of a Pulsar Function."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Usage"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"\n$ pulsar-admin functions stats options\n\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Options"})}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Flag"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--fqfn"})}),(0,t.jsx)(e.td,{children:"The Fully Qualified Function Name (FQFN) of a Pulsar Function."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--instance-id"})}),(0,t.jsxs)(e.td,{children:["The instance ID of a Pulsar Function. ",(0,t.jsx)("br",{}),"If the ",(0,t.jsx)(e.code,{children:"--instance-id"})," is not specified, it gets the IDs of all instances.",(0,t.jsx)("br",{})]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--name"})}),(0,t.jsx)(e.td,{children:"The name of a Pulsar Function."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--namespace"})}),(0,t.jsx)(e.td,{children:"The namespace of a Pulsar Function."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--tenant"})}),(0,t.jsx)(e.td,{children:"The tenant of a Pulsar Function."})]})]})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"\n$ ./bin/pulsar-admin functions stats \\\n    --tenant public \\\n    --namespace default \\\n    --name ExclamationFunctio6 \\\n\n"})}),"\n",(0,t.jsx)(e.p,{children:"The output is shown as follows:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'\n{\n  "receivedTotal" : 1,\n  "processedSuccessfullyTotal" : 1,\n  "systemExceptionsTotal" : 0,\n  "userExceptionsTotal" : 0,\n  "avgProcessLatency" : 0.8385,\n  "1min" : {\n    "receivedTotal" : 0,\n    "processedSuccessfullyTotal" : 0,\n    "systemExceptionsTotal" : 0,\n    "userExceptionsTotal" : 0,\n    "avgProcessLatency" : null\n  },\n  "lastInvocation" : 1557734137987,\n  "instances" : [ {\n    "instanceId" : 0,\n    "metrics" : {\n      "receivedTotal" : 1,\n      "processedSuccessfullyTotal" : 1,\n      "systemExceptionsTotal" : 0,\n      "userExceptionsTotal" : 0,\n      "avgProcessLatency" : 0.8385,\n      "1min" : {\n        "receivedTotal" : 0,\n        "processedSuccessfullyTotal" : 0,\n        "systemExceptionsTotal" : 0,\n        "userExceptionsTotal" : 0,\n        "avgProcessLatency" : null\n      },\n      "lastInvocation" : 1557734137987,\n      "userMetrics" : { }\n    }\n  } ]\n}\n\n'})}),"\n",(0,t.jsx)(e.h3,{id:"list",children:(0,t.jsx)(e.code,{children:"list"})}),"\n",(0,t.jsx)(e.p,{children:"List all Pulsar Functions running under a specific tenant and namespace."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Usage"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"\n$ pulsar-admin functions list options\n\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Options"})}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Flag"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--namespace"})}),(0,t.jsx)(e.td,{children:"The namespace of a Pulsar Function."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--tenant"})}),(0,t.jsx)(e.td,{children:"The tenant of a Pulsar Function."})]})]})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"\n$ ./bin/pulsar-admin functions list \\\n    --tenant public \\\n    --namespace default\n\n"})}),"\n",(0,t.jsxs)(e.p,{children:["As shown below, the ",(0,t.jsx)(e.code,{children:"list"})," command returns three functions running under the ",(0,t.jsx)(e.em,{children:"public"})," tenant and the ",(0,t.jsx)(e.em,{children:"default"})," namespace."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"\nExclamationFunctio1\nExclamationFunctio2\nExclamationFunctio3\n\n"})}),"\n",(0,t.jsx)(e.h3,{id:"trigger",children:(0,t.jsx)(e.code,{children:"trigger"})}),"\n",(0,t.jsx)(e.p,{children:"Trigger a specified Pulsar Function with a supplied value. This command simulates the execution process of a Pulsar Function and verifies it."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Usage"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"\n$ pulsar-admin functions trigger options\n\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Options"})}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Flag"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--fqfn"})}),(0,t.jsx)(e.td,{children:"The Fully Qualified Function Name (FQFN) of a Pulsar Function."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--name"})}),(0,t.jsx)(e.td,{children:"The name of a Pulsar Function."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--namespace"})}),(0,t.jsx)(e.td,{children:"The namespace of a Pulsar Function."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--tenant"})}),(0,t.jsx)(e.td,{children:"The tenant of a Pulsar Function."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--topic"})}),(0,t.jsx)(e.td,{children:"The topic name that a Pulsar Function consumes from."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--trigger-file"})}),(0,t.jsx)(e.td,{children:"The path to a file that contains the data to trigger a Pulsar Function."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"--trigger-value"})}),(0,t.jsx)(e.td,{children:"The value to trigger a Pulsar Function."})]})]})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'\n$ ./bin/pulsar-admin functions trigger \\\n    --tenant public \\\n    --namespace default \\\n    --name ExclamationFunctio6 \\\n    --topic persistent://public/default/my-topic-1 \\\n    --trigger-value "hello pulsar functions"\n\n'})}),"\n",(0,t.jsxs)(e.p,{children:["As shown below, the ",(0,t.jsx)(e.code,{children:"trigger"})," command returns the following result:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"\nThis is my function!\n\n"})}),"\n",(0,t.jsxs)(e.admonition,{type:"note",children:[(0,t.jsxs)(e.p,{children:["You must specify the entire topic name when using the ",(0,t.jsx)(e.code,{children:"--topic"})," option. Otherwise, the following error occurs."]}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"\nFunction in trigger function has unidentified topic\nReason: Function in trigger function has unidentified topic\n\n"})})]})]})}function u(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},92086:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/pulsar-functions-overview-9d39ad7e0ec566e6ed2ee7cdf9717963.png"},28453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>r});var i=s(96540);const t={},c=i.createContext(t);function o(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);