"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[65345],{90332:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>r});const t=JSON.parse('{"id":"functions-debug-cli","title":"Debug with Functions CLI","description":"Learn to debug functions with CLI in Pulsar.","source":"@site/versioned_docs/version-4.0.x/functions-debug-cli.md","sourceDirName":".","slug":"/functions-debug-cli","permalink":"/docs/4.0.x/functions-debug-cli","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-4.0.x/functions-debug-cli.md","tags":[],"version":"4.0.x","frontMatter":{"id":"functions-debug-cli","title":"Debug with Functions CLI","sidebar_label":"Debug with Functions CLI","description":"Learn to debug functions with CLI in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"Debug with log topic","permalink":"/docs/4.0.x/functions-debug-log-topic"},"next":{"title":"How to package","permalink":"/docs/4.0.x/functions-package"}}');var i=s(74848),c=s(28453);const a={id:"functions-debug-cli",title:"Debug with Functions CLI",sidebar_label:"Debug with Functions CLI",description:"Learn to debug functions with CLI in Pulsar."},o=void 0,l={},r=[{value:"<code>get</code>",id:"get",level:2},{value:"<code>list</code>",id:"list",level:2},{value:"<code>status</code>",id:"status",level:2},{value:"<code>stats</code>",id:"stats",level:2},{value:"<code>trigger</code>",id:"trigger",level:2}];function u(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["With ",(0,i.jsx)(e.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/",children:"Pulsar Functions CLI"}),", you can debug Pulsar Functions with the following subcommands:"]}),"\n",(0,i.jsx)(e.h2,{id:"get",children:(0,i.jsx)(e.code,{children:"get"})}),"\n",(0,i.jsxs)(e.p,{children:["To get information about a function, you can specify ",(0,i.jsx)(e.code,{children:"--fqfn"})," as follows."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:" ./bin/pulsar-admin functions get public/default/ExclamationFunctio6\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Alternatively, you can specify ",(0,i.jsx)(e.code,{children:"--name"}),", ",(0,i.jsx)(e.code,{children:"--namespace"})," and ",(0,i.jsx)(e.code,{children:"--tenant"})," as follows."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:" ./bin/pulsar-admin functions get \\\n    --tenant public \\\n    --namespace default \\\n    --name ExclamationFunctio6\n"})}),"\n",(0,i.jsxs)(e.p,{children:["As shown below, the ",(0,i.jsx)(e.code,{children:"get"})," command shows input, output, runtime, and other information about the ",(0,i.jsx)(e.code,{children:"ExclamationFunctio6"})," function."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "tenant": "public",\n  "namespace": "default",\n  "name": "ExclamationFunctio6",\n  "className": "org.example.test.ExclamationFunction",\n  "inputSpecs": {\n    "persistent://public/default/my-topic-1": {\n      "isRegexPattern": false\n    }\n  },\n  "output": "persistent://public/default/test-1",\n  "processingGuarantees": "ATLEAST_ONCE",\n  "retainOrdering": false,\n  "userConfig": {},\n  "runtime": "JAVA",\n  "autoAck": true,\n  "parallelism": 1\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"list",children:(0,i.jsx)(e.code,{children:"list"})}),"\n",(0,i.jsx)(e.p,{children:"To list all Pulsar Functions running under a specific tenant and namespace:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"bin/pulsar-admin functions list \\\n    --tenant public \\\n    --namespace default\n"})}),"\n",(0,i.jsxs)(e.p,{children:["As shown below, the ",(0,i.jsx)(e.code,{children:"list"})," command returns three functions running under the ",(0,i.jsx)(e.code,{children:"public"})," tenant and the ",(0,i.jsx)(e.code,{children:"default"})," namespace."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"ExclamationFunctio1\nExclamationFunctio2\nExclamationFunctio3\n"})}),"\n",(0,i.jsx)(e.h2,{id:"status",children:(0,i.jsx)(e.code,{children:"status"})}),"\n",(0,i.jsx)(e.p,{children:"To check the current status of a function:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:" ./bin/pulsar-admin functions status \\\n    --tenant public \\\n    --namespace default \\\n    --name ExclamationFunctio6\n"})}),"\n",(0,i.jsxs)(e.p,{children:["As shown below, the ",(0,i.jsx)(e.code,{children:"status"})," command shows the number of instances, running instances, the instance running under the ",(0,i.jsx)(e.code,{children:"ExclamationFunctio6"})," function, received messages, successfully processed messages, system exceptions, the average latency and so on."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "numInstances" : 1,\n  "numRunning" : 1,\n  "instances" : [ {\n    "instanceId" : 0,\n    "status" : {\n      "running" : true,\n      "error" : "",\n      "numRestarts" : 0,\n      "numReceived" : 1,\n      "numSuccessfullyProcessed" : 1,\n      "numUserExceptions" : 0,\n      "latestUserExceptions" : [ ],\n      "numSystemExceptions" : 0,\n      "latestSystemExceptions" : [ ],\n      "averageLatency" : 0.8385,\n      "lastInvocationTime" : 1557734137987,\n      "workerId" : "c-standalone-fw-23ccc88ef29b-8080"\n    }\n  } ]\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"stats",children:(0,i.jsx)(e.code,{children:"stats"})}),"\n",(0,i.jsx)(e.p,{children:"To get the current stats of a function:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"bin/pulsar-admin functions stats \\\n    --tenant public \\\n    --namespace default \\\n    --name ExclamationFunctio6\n"})}),"\n",(0,i.jsx)(e.p,{children:"The output is shown as follows:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "receivedTotal" : 1,\n  "processedSuccessfullyTotal" : 1,\n  "systemExceptionsTotal" : 0,\n  "userExceptionsTotal" : 0,\n  "avgProcessLatency" : 0.8385,\n  "1min" : {\n    "receivedTotal" : 0,\n    "processedSuccessfullyTotal" : 0,\n    "systemExceptionsTotal" : 0,\n    "userExceptionsTotal" : 0,\n    "avgProcessLatency" : null\n  },\n  "lastInvocation" : 1557734137987,\n  "instances" : [ {\n    "instanceId" : 0,\n    "metrics" : {\n      "receivedTotal" : 1,\n      "processedSuccessfullyTotal" : 1,\n      "systemExceptionsTotal" : 0,\n      "userExceptionsTotal" : 0,\n      "avgProcessLatency" : 0.8385,\n      "1min" : {\n        "receivedTotal" : 0,\n        "processedSuccessfullyTotal" : 0,\n        "systemExceptionsTotal" : 0,\n        "userExceptionsTotal" : 0,\n        "avgProcessLatency" : null\n      },\n      "lastInvocation" : 1557734137987,\n      "userMetrics" : { }\n    }\n  } ]\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"trigger",children:(0,i.jsx)(e.code,{children:"trigger"})}),"\n",(0,i.jsx)(e.p,{children:"To trigger a specified function with a supplied value:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:' ./bin/pulsar-admin functions trigger \\\n    --tenant public \\\n    --namespace default \\\n    --name ExclamationFunctio6 \\\n    --topic persistent://public/default/my-topic-1 \\\n    --trigger-value "hello pulsar functions"\n'})}),"\n",(0,i.jsxs)(e.p,{children:["This command simulates the execution process of a function and verifies it. As shown below, the ",(0,i.jsx)(e.code,{children:"trigger"})," command returns the following result:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"This is my function!\n"})}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsxs)(e.p,{children:["When using the ",(0,i.jsx)(e.code,{children:"--topic"})," option, you must specify the entire topic name. Otherwise, the following error occurs."]}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:"Function in trigger function has unidentified topic\nReason: Function in trigger function has unidentified topic\n"})})]})]})}function d(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>a,x:()=>o});var t=s(96540);const i={},c=t.createContext(i);function a(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);