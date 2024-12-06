"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[89939],{43082:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"admin-api-functions","title":"Managing functions","description":"Pulsar Functions are lightweight compute processes that","source":"@site/versioned_docs/version-2.4.2/admin-api-functions.md","sourceDirName":".","slug":"/admin-api-functions","permalink":"/docs/2.4.2/admin-api-functions","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.2/admin-api-functions.md","tags":[],"version":"2.4.2","frontMatter":{"id":"admin-api-functions","title":"Managing functions","sidebar_label":"Functions","original_id":"admin-api-functions"},"sidebar":"docsSidebar","previous":{"title":"Schemas","permalink":"/docs/2.4.2/admin-api-schemas"},"next":{"title":"Kafka client wrapper","permalink":"/docs/2.4.2/adaptors-kafka"}}');var s=a(74848),t=a(28453);const c={id:"admin-api-functions",title:"Managing functions",sidebar_label:"Functions",original_id:"admin-api-functions"},l=void 0,d={},r=[{value:"Function resources",id:"function-resources",level:2},{value:"Create a function",id:"create-a-function",level:3},{value:"Admin CLI",id:"admin-cli",level:4},{value:"REST API",id:"rest-api",level:4},{value:"Java Admin API",id:"java-admin-api",level:4},{value:"Update a function",id:"update-a-function",level:3},{value:"Admin CLI",id:"admin-cli-1",level:4},{value:"REST Admin API",id:"rest-admin-api",level:4},{value:"Java Admin API",id:"java-admin-api-1",level:4},{value:"Start an instance of a function",id:"start-an-instance-of-a-function",level:3},{value:"Admin CLI",id:"admin-cli-2",level:4},{value:"REST API",id:"rest-api-1",level:4},{value:"Java Admin API",id:"java-admin-api-2",level:4},{value:"Start all instances of a function",id:"start-all-instances-of-a-function",level:3},{value:"Admin CLI",id:"admin-cli-3",level:4},{value:"REST API",id:"rest-api-2",level:4},{value:"Java",id:"java",level:4},{value:"Stop an instance of a function",id:"stop-an-instance-of-a-function",level:3},{value:"Admin CLI",id:"admin-cli-4",level:4},{value:"REST API",id:"rest-api-3",level:4},{value:"Java Admin API",id:"java-admin-api-3",level:4},{value:"Stop all instances of a function",id:"stop-all-instances-of-a-function",level:3},{value:"Admin CLI",id:"admin-cli-5",level:4},{value:"REST API",id:"rest-api-4",level:4},{value:"Java Admin API",id:"java-admin-api-4",level:4},{value:"Restart an instance of a function",id:"restart-an-instance-of-a-function",level:3},{value:"Admin CLI",id:"admin-cli-6",level:4},{value:"REST API",id:"rest-api-5",level:4},{value:"Java Admin API",id:"java-admin-api-5",level:4},{value:"Restart all instances of a function",id:"restart-all-instances-of-a-function",level:3},{value:"Admin CLI",id:"admin-cli-7",level:4},{value:"REST API",id:"rest-api-6",level:4},{value:"Java Admin API",id:"java-admin-api-6",level:4},{value:"List all functions",id:"list-all-functions",level:3},{value:"Admin CLI",id:"admin-cli-8",level:4},{value:"REST API",id:"rest-api-7",level:4},{value:"Java Admin API",id:"java-admin-api-7",level:4},{value:"Delete a function",id:"delete-a-function",level:3},{value:"Admin CLI",id:"admin-cli-9",level:4},{value:"REST API",id:"rest-api-8",level:4},{value:"Java Admin API",id:"java-admin-api-8",level:4},{value:"Get info about a function",id:"get-info-about-a-function",level:3},{value:"Admin CLI",id:"admin-cli-10",level:4},{value:"REST API",id:"rest-api-9",level:4},{value:"Java Admin API",id:"java-admin-api-9",level:4},{value:"Get status of an instance of a function",id:"get-status-of-an-instance-of-a-function",level:3},{value:"Admin CLI",id:"admin-cli-11",level:4},{value:"REST API",id:"rest-api-10",level:4},{value:"Java Admin API",id:"java-admin-api-10",level:4},{value:"Get status of all instances of a function",id:"get-status-of-all-instances-of-a-function",level:3},{value:"Admin CLI",id:"admin-cli-12",level:4},{value:"REST API",id:"rest-api-11",level:4},{value:"Java Admin API",id:"java-admin-api-11",level:4},{value:"Get stats of an instance of a function",id:"get-stats-of-an-instance-of-a-function",level:3},{value:"Admin CLI",id:"admin-cli-13",level:4},{value:"REST API",id:"rest-api-12",level:4},{value:"Java Admin API",id:"java-admin-api-12",level:4},{value:"Get stats of all instances of a function",id:"get-stats-of-all-instances-of-a-function",level:3},{value:"Admin CLI",id:"admin-cli-14",level:4},{value:"REST API",id:"rest-api-13",level:4},{value:"Java Admin API",id:"java-admin-api-13",level:4},{value:"Trigger a function",id:"trigger-a-function",level:3},{value:"Admin CLI",id:"admin-cli-15",level:4},{value:"REST API",id:"rest-api-14",level:4},{value:"Java Admin API",id:"java-admin-api-14",level:4},{value:"Put state associated with a function",id:"put-state-associated-with-a-function",level:3},{value:"Admin CLI",id:"admin-cli-16",level:4},{value:"REST API",id:"rest-api-15",level:4},{value:"Java Admin API",id:"java-admin-api-15",level:4},{value:"Fetch state associated with a function",id:"fetch-state-associated-with-a-function",level:3},{value:"Admin CLI",id:"admin-cli-17",level:4},{value:"REST API",id:"rest-api-16",level:4},{value:"Java Admin CLI",id:"java-admin-cli",level:4}];function o(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Pulsar Functions"})," are lightweight compute processes that"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"consume messages from one or more Pulsar topics"}),"\n",(0,s.jsx)(e.li,{children:"apply a user-supplied processing logic to each message"}),"\n",(0,s.jsx)(e.li,{children:"publish the results of the computation to another topic"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Functions can be managed via the following methods."}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Method"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Admin CLI"})}),(0,s.jsxs)(e.td,{children:["The ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/reference-pulsar-admin#functions",children:(0,s.jsx)(e.code,{children:"functions"})})," command of the ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/reference-pulsar-admin",children:(0,s.jsx)(e.code,{children:"pulsar-admin"})})," tool."]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"REST API"})}),(0,s.jsxs)(e.td,{children:["The ",(0,s.jsx)(e.code,{children:"/admin/v3/functions"})," endpoint of the admin ",(0,s.jsx)(e.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API."]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"Java Admin API"})}),(0,s.jsxs)(e.td,{children:["The ",(0,s.jsx)(e.code,{children:"functions"})," method of the ",(0,s.jsx)(e.a,{href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdmin",children:"PulsarAdmin"})," object in the ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/client-libraries-java",children:"Java API"}),"."]})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"function-resources",children:"Function resources"}),"\n",(0,s.jsx)(e.p,{children:"You can perform the following operations on functions."}),"\n",(0,s.jsx)(e.h3,{id:"create-a-function",children:"Create a function"}),"\n",(0,s.jsx)(e.p,{children:"You can create a Pulsar function in cluster mode (deploy it on a Pulsar cluster) using Admin CLI, REST API or Java Admin API."}),"\n",(0,s.jsx)(e.h4,{id:"admin-cli",children:"Admin CLI"}),"\n",(0,s.jsxs)(e.p,{children:["Use the ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/reference-pulsar-admin#functions-create",children:(0,s.jsx)(e.code,{children:"create"})})," subcommand."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"\n$ pulsar-admin functions create \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --inputs test-input-topic \\\n  --output persistent://public/default/test-output-topic \\\n  --classname org.apache.pulsar.functions.api.examples.ExclamationFunction \\\n  --jar /examples/api-examples.jar\n\n"})}),"\n",(0,s.jsx)(e.h4,{id:"rest-api",children:"REST API"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.a,{href:"https://pulsar.apache.org/functions-rest-api?version=master&apiversion=v3#",children:["POST /admin/v3/functions/",":tenant","/",":namespace","/functionName?version=2.4.2"]})}),"\n",(0,s.jsx)(e.h4,{id:"java-admin-api",children:"Java Admin API"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'\nFunctionConfig functionConfig = new FunctionConfig();\nfunctionConfig.setTenant(tenant);\nfunctionConfig.setNamespace(namespace);\nfunctionConfig.setName(functionName);\nfunctionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\nfunctionConfig.setParallelism(1);\nfunctionConfig.setClassName("org.apache.pulsar.functions.api.examples.ExclamationFunction");\nfunctionConfig.setProcessingGuarantees(FunctionConfig.ProcessingGuarantees.ATLEAST_ONCE);\nfunctionConfig.setTopicsPattern(sourceTopicPattern);\nfunctionConfig.setSubName(subscriptionName);\nfunctionConfig.setAutoAck(true);\nfunctionConfig.setOutput(sinkTopic);\nadmin.functions().createFunction(functionConfig, fileName);\n\n'})}),"\n",(0,s.jsx)(e.h3,{id:"update-a-function",children:"Update a function"}),"\n",(0,s.jsx)(e.p,{children:"You can update a Pulsar function that has been deployed to a Pulsar cluster using Admin CLI, REST API or Java Admin API."}),"\n",(0,s.jsx)(e.h4,{id:"admin-cli-1",children:"Admin CLI"}),"\n",(0,s.jsxs)(e.p,{children:["Use the ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/reference-pulsar-admin#functions-update",children:(0,s.jsx)(e.code,{children:"update"})})," subcommand."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"\n$ pulsar-admin functions update \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --output persistent://public/default/update-output-topic \\\n  # other options\n\n"})}),"\n",(0,s.jsx)(e.h4,{id:"rest-admin-api",children:"REST Admin API"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.a,{href:"https://pulsar.apache.org/functions-rest-api?version=master&apiversion=v3#",children:["PUT /admin/v3/functions/",":tenant","/",":namespace","/functionName?version=2.4.2"]})}),"\n",(0,s.jsx)(e.h4,{id:"java-admin-api-1",children:"Java Admin API"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'\nFunctionConfig functionConfig = new FunctionConfig();\nfunctionConfig.setTenant(tenant);\nfunctionConfig.setNamespace(namespace);\nfunctionConfig.setName(functionName);\nfunctionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\nfunctionConfig.setParallelism(1);\nfunctionConfig.setClassName("org.apache.pulsar.functions.api.examples.ExclamationFunction");\nUpdateOptions updateOptions = new UpdateOptions();\nupdateOptions.setUpdateAuthData(updateAuthData);\nadmin.functions().updateFunction(functionConfig, userCodeFile, updateOptions);\n\n'})}),"\n",(0,s.jsx)(e.h3,{id:"start-an-instance-of-a-function",children:"Start an instance of a function"}),"\n",(0,s.jsxs)(e.p,{children:["You can start a stopped function instance with ",(0,s.jsx)(e.code,{children:"instance-id"})," using Admin CLI, REST API or Java Admin API."]}),"\n",(0,s.jsx)(e.h4,{id:"admin-cli-2",children:"Admin CLI"}),"\n",(0,s.jsxs)(e.p,{children:["Use the ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/reference-pulsar-admin#functions-start",children:(0,s.jsx)(e.code,{children:"start"})})," subcommand."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"\n$ pulsar-admin functions start \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n"})}),"\n",(0,s.jsx)(e.h4,{id:"rest-api-1",children:"REST API"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.a,{href:"https://pulsar.apache.org/functions-rest-api?version=master&apiversion=v3#",children:["POST /admin/v3/functions/",":tenant","/",":namespace","/functionName/",":instanceId","/start?version=2.4.2"]})}),"\n",(0,s.jsx)(e.h4,{id:"java-admin-api-2",children:"Java Admin API"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"\nadmin.functions().startFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n"})}),"\n",(0,s.jsx)(e.h3,{id:"start-all-instances-of-a-function",children:"Start all instances of a function"}),"\n",(0,s.jsx)(e.p,{children:"You can start all stopped function instances using Admin CLI, REST API or Java Admin API."}),"\n",(0,s.jsx)(e.h4,{id:"admin-cli-3",children:"Admin CLI"}),"\n",(0,s.jsxs)(e.p,{children:["Use the ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/reference-pulsar-admin#functions-start",children:(0,s.jsx)(e.code,{children:"start"})})," subcommand."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"\n$ pulsar-admin functions start \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n\n"})}),"\n",(0,s.jsx)(e.h4,{id:"rest-api-2",children:"REST API"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.a,{href:"https://pulsar.apache.org/functions-rest-api?version=master&apiversion=v3#",children:["POST /admin/v3/functions/",":tenant","/",":namespace","/functionName/start?version=2.4.2"]})}),"\n",(0,s.jsx)(e.h4,{id:"java",children:"Java"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"\nadmin.functions().startFunction(tenant, namespace, functionName);\n\n"})}),"\n",(0,s.jsx)(e.h3,{id:"stop-an-instance-of-a-function",children:"Stop an instance of a function"}),"\n",(0,s.jsxs)(e.p,{children:["You can stop a function instance with ",(0,s.jsx)(e.code,{children:"instance-id"})," using Admin CLI, REST API or Java Admin API."]}),"\n",(0,s.jsx)(e.h4,{id:"admin-cli-4",children:"Admin CLI"}),"\n",(0,s.jsxs)(e.p,{children:["Use the ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/reference-pulsar-admin#functions-stop",children:(0,s.jsx)(e.code,{children:"stop"})})," subcommand."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"\n$ pulsar-admin functions stop \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n"})}),"\n",(0,s.jsx)(e.h4,{id:"rest-api-3",children:"REST API"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.a,{href:"https://pulsar.apache.org/functions-rest-api?version=master&apiversion=v3#",children:["POST /admin/v3/functions/",":tenant","/",":namespace","/functionName/",":instanceId","/stop?version=2.4.2"]})}),"\n",(0,s.jsx)(e.h4,{id:"java-admin-api-3",children:"Java Admin API"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"\nadmin.functions().stopFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n"})}),"\n",(0,s.jsx)(e.h3,{id:"stop-all-instances-of-a-function",children:"Stop all instances of a function"}),"\n",(0,s.jsx)(e.p,{children:"You can stop all function instances using Admin CLI, REST API or Java Admin API."}),"\n",(0,s.jsx)(e.h4,{id:"admin-cli-5",children:"Admin CLI"}),"\n",(0,s.jsxs)(e.p,{children:["Use the ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/reference-pulsar-admin#functions-stop",children:(0,s.jsx)(e.code,{children:"stop"})})," subcommand."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"\n$ pulsar-admin functions stop \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n\n"})}),"\n",(0,s.jsx)(e.h4,{id:"rest-api-4",children:"REST API"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.a,{href:"https://pulsar.apache.org/functions-rest-api?version=master&apiversion=v3#",children:["POST /admin/v3/functions/",":tenant","/",":namespace","/functionName/stop?version=2.4.2"]})}),"\n",(0,s.jsx)(e.h4,{id:"java-admin-api-4",children:"Java Admin API"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"\nadmin.functions().stopFunction(tenant, namespace, functionName);\n\n"})}),"\n",(0,s.jsx)(e.h3,{id:"restart-an-instance-of-a-function",children:"Restart an instance of a function"}),"\n",(0,s.jsxs)(e.p,{children:["Restart a function instance with ",(0,s.jsx)(e.code,{children:"instance-id"})," using Admin CLI, REST API or Java Admin API."]}),"\n",(0,s.jsx)(e.h4,{id:"admin-cli-6",children:"Admin CLI"}),"\n",(0,s.jsxs)(e.p,{children:["Use the ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/reference-pulsar-admin#functions-restart",children:(0,s.jsx)(e.code,{children:"restart"})})," subcommand."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"\n$ pulsar-admin functions restart \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n"})}),"\n",(0,s.jsx)(e.h4,{id:"rest-api-5",children:"REST API"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.a,{href:"https://pulsar.apache.org/functions-rest-api?version=master&apiversion=v3#",children:["POST /admin/v3/functions/",":tenant","/",":namespace","/functionName/",":instanceId","/restart?version=2.4.2"]})}),"\n",(0,s.jsx)(e.h4,{id:"java-admin-api-5",children:"Java Admin API"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"\nadmin.functions().restartFunction(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n"})}),"\n",(0,s.jsx)(e.h3,{id:"restart-all-instances-of-a-function",children:"Restart all instances of a function"}),"\n",(0,s.jsx)(e.p,{children:"You can restart all function instances using Admin CLI, REST API or Java admin API."}),"\n",(0,s.jsx)(e.h4,{id:"admin-cli-7",children:"Admin CLI"}),"\n",(0,s.jsxs)(e.p,{children:["Use the ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/reference-pulsar-admin#functions-restart",children:(0,s.jsx)(e.code,{children:"restart"})})," subcommand."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"\n$ pulsar-admin functions restart \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n\n"})}),"\n",(0,s.jsx)(e.h4,{id:"rest-api-6",children:"REST API"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.a,{href:"https://pulsar.apache.org/functions-rest-api?version=master&apiversion=v3#",children:["POST /admin/v3/functions/",":tenant","/",":namespace","/functionName/restart?version=2.4.2"]})}),"\n",(0,s.jsx)(e.h4,{id:"java-admin-api-6",children:"Java Admin API"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"\nadmin.functions().restartFunction(tenant, namespace, functionName);\n\n"})}),"\n",(0,s.jsx)(e.h3,{id:"list-all-functions",children:"List all functions"}),"\n",(0,s.jsx)(e.p,{children:"You can list all Pulsar functions running under a specific tenant and namespace using Admin CLI, REST API or Java Admin API."}),"\n",(0,s.jsx)(e.h4,{id:"admin-cli-8",children:"Admin CLI"}),"\n",(0,s.jsxs)(e.p,{children:["Use the ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/reference-pulsar-admin#functions-list",children:(0,s.jsx)(e.code,{children:"list"})})," subcommand."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"\n$ pulsar-admin functions list \\\n  --tenant public \\\n  --namespace default\n\n"})}),"\n",(0,s.jsx)(e.h4,{id:"rest-api-7",children:"REST API"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.a,{href:"https://pulsar.apache.org/functions-rest-api?version=master&apiversion=v3#",children:["GET /admin/v3/functions/",":tenant","/",":namespace","?version=2.4.2"]})}),"\n",(0,s.jsx)(e.h4,{id:"java-admin-api-7",children:"Java Admin API"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"\nadmin.functions().getFunctions(tenant, namespace);\n\n"})}),"\n",(0,s.jsx)(e.h3,{id:"delete-a-function",children:"Delete a function"}),"\n",(0,s.jsx)(e.p,{children:"You can delete a Pulsar function that is running on a Pulsar cluster using Admin CLI, REST API or Java Admin API."}),"\n",(0,s.jsx)(e.h4,{id:"admin-cli-9",children:"Admin CLI"}),"\n",(0,s.jsxs)(e.p,{children:["Use the ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/reference-pulsar-admin#functions-delete",children:(0,s.jsx)(e.code,{children:"delete"})})," subcommand."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"\n$ pulsar-admin functions delete \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions)\n\n"})}),"\n",(0,s.jsx)(e.h4,{id:"rest-api-8",children:"REST API"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.a,{href:"https://pulsar.apache.org/functions-rest-api?version=master&apiversion=v3#",children:["DELETE /admin/v3/functions/",":tenant","/",":namespace","/functionName?version=2.4.2"]})}),"\n",(0,s.jsx)(e.h4,{id:"java-admin-api-8",children:"Java Admin API"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"\nadmin.functions().deleteFunction(tenant, namespace, functionName);\n\n"})}),"\n",(0,s.jsx)(e.h3,{id:"get-info-about-a-function",children:"Get info about a function"}),"\n",(0,s.jsx)(e.p,{children:"You can get information about a Pulsar function currently running in cluster mode using Admin CLI, REST API or Java Admin API."}),"\n",(0,s.jsx)(e.h4,{id:"admin-cli-10",children:"Admin CLI"}),"\n",(0,s.jsxs)(e.p,{children:["Use the ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/reference-pulsar-admin#functions-get",children:(0,s.jsx)(e.code,{children:"get"})})," subcommand."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"\n$ pulsar-admin functions get \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions)\n\n"})}),"\n",(0,s.jsx)(e.h4,{id:"rest-api-9",children:"REST API"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.a,{href:"https://pulsar.apache.org/functions-rest-api?version=master&apiversion=v3#",children:["GET /admin/v3/functions/",":tenant","/",":namespace","/functionName?version=2.4.2"]})}),"\n",(0,s.jsx)(e.h4,{id:"java-admin-api-9",children:"Java Admin API"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"\nadmin.functions().getFunction(tenant, namespace, functionName);\n\n"})}),"\n",(0,s.jsx)(e.h3,{id:"get-status-of-an-instance-of-a-function",children:"Get status of an instance of a function"}),"\n",(0,s.jsxs)(e.p,{children:["You can get the current status of a Pulsar function instance with ",(0,s.jsx)(e.code,{children:"instance-id"})," using Admin CLI, REST API or Java Admin API."]}),"\n",(0,s.jsx)(e.h4,{id:"admin-cli-11",children:"Admin CLI"}),"\n",(0,s.jsxs)(e.p,{children:["Use the ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/reference-pulsar-admin#functions-status",children:(0,s.jsx)(e.code,{children:"status"})})," subcommand."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"\n$ pulsar-admin functions status \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n"})}),"\n",(0,s.jsx)(e.h4,{id:"rest-api-10",children:"REST API"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.a,{href:"https://pulsar.apache.org/functions-rest-api?version=master&apiversion=v3#",children:["GET /admin/v3/functions/",":tenant","/",":namespace","/functionName/",":instanceId","/status?version=2.4.2"]})}),"\n",(0,s.jsx)(e.h4,{id:"java-admin-api-10",children:"Java Admin API"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"\nadmin.functions().getFunctionStatus(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n"})}),"\n",(0,s.jsx)(e.h3,{id:"get-status-of-all-instances-of-a-function",children:"Get status of all instances of a function"}),"\n",(0,s.jsx)(e.p,{children:"You can get the current status of a Pulsar function instance using Admin CLI, REST API or Java Admin API."}),"\n",(0,s.jsx)(e.h4,{id:"admin-cli-12",children:"Admin CLI"}),"\n",(0,s.jsxs)(e.p,{children:["Use the ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/reference-pulsar-admin#functions-status",children:(0,s.jsx)(e.code,{children:"status"})})," subcommand."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"\n$ pulsar-admin functions status \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions)\n\n"})}),"\n",(0,s.jsx)(e.h4,{id:"rest-api-11",children:"REST API"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.a,{href:"https://pulsar.apache.org/functions-rest-api?version=master&apiversion=v3#",children:["GET /admin/v3/functions/",":tenant","/",":namespace","/functionName/status?version=2.4.2"]})}),"\n",(0,s.jsx)(e.h4,{id:"java-admin-api-11",children:"Java Admin API"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"\nadmin.functions().getFunctionStatus(tenant, namespace, functionName);\n\n"})}),"\n",(0,s.jsx)(e.h3,{id:"get-stats-of-an-instance-of-a-function",children:"Get stats of an instance of a function"}),"\n",(0,s.jsxs)(e.p,{children:["You can get the current stats of a Pulsar Function instance with ",(0,s.jsx)(e.code,{children:"instance-id"})," using Admin CLI, REST API or Java admin API."]}),"\n",(0,s.jsx)(e.h4,{id:"admin-cli-13",children:"Admin CLI"}),"\n",(0,s.jsxs)(e.p,{children:["Use the ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/reference-pulsar-admin#functions-stats",children:(0,s.jsx)(e.code,{children:"stats"})})," subcommand."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"\n$ pulsar-admin functions stats \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --instance-id 1\n\n"})}),"\n",(0,s.jsx)(e.h4,{id:"rest-api-12",children:"REST API"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.a,{href:"https://pulsar.apache.org/functions-rest-api?version=master&apiversion=v3#",children:["GET /admin/v3/functions/",":tenant","/",":namespace","/functionName/",":instanceId","/stats?version=2.4.2"]})}),"\n",(0,s.jsx)(e.h4,{id:"java-admin-api-12",children:"Java Admin API"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"\nadmin.functions().getFunctionStats(tenant, namespace, functionName, Integer.parseInt(instanceId));\n\n"})}),"\n",(0,s.jsx)(e.h3,{id:"get-stats-of-all-instances-of-a-function",children:"Get stats of all instances of a function"}),"\n",(0,s.jsx)(e.p,{children:"You can get the current stats of a Pulsar function using Admin CLI, REST API or Java admin API."}),"\n",(0,s.jsx)(e.h4,{id:"admin-cli-14",children:"Admin CLI"}),"\n",(0,s.jsxs)(e.p,{children:["Use the ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/reference-pulsar-admin#functions-stats",children:(0,s.jsx)(e.code,{children:"stats"})})," subcommand."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"\n$ pulsar-admin functions stats \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions)\n\n"})}),"\n",(0,s.jsx)(e.h4,{id:"rest-api-13",children:"REST API"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.a,{href:"https://pulsar.apache.org/functions-rest-api?version=master&apiversion=v3#",children:["GET /admin/v3/functions/",":tenant","/",":namespace","/functionName/stats?version=2.4.2"]})}),"\n",(0,s.jsx)(e.h4,{id:"java-admin-api-13",children:"Java Admin API"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"\nadmin.functions().getFunctionStats(tenant, namespace, functionName);\n\n"})}),"\n",(0,s.jsx)(e.h3,{id:"trigger-a-function",children:"Trigger a function"}),"\n",(0,s.jsx)(e.p,{children:"You can trigger a specified Pulsar function with a supplied value using Admin CLI, REST API or Java admin API."}),"\n",(0,s.jsx)(e.h4,{id:"admin-cli-15",children:"Admin CLI"}),"\n",(0,s.jsxs)(e.p,{children:["Use the ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/reference-pulsar-admin#functions-trigger",children:(0,s.jsx)(e.code,{children:"trigger"})})," subcommand."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:'\n$ pulsar-admin functions trigger \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --topic (the name of input topic) \\\n  --trigger-value \\"hello pulsar\\"\n  # or --trigger-file (the path of trigger file)\n\n'})}),"\n",(0,s.jsx)(e.h4,{id:"rest-api-14",children:"REST API"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.a,{href:"https://pulsar.apache.org/functions-rest-api?version=master&apiversion=v3#",children:["POST /admin/v3/functions/",":tenant","/",":namespace","/functionName/trigger?version=2.4.2"]})}),"\n",(0,s.jsx)(e.h4,{id:"java-admin-api-14",children:"Java Admin API"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"\nadmin.functions().triggerFunction(tenant, namespace, functionName, topic, triggerValue, triggerFile);\n\n"})}),"\n",(0,s.jsx)(e.h3,{id:"put-state-associated-with-a-function",children:"Put state associated with a function"}),"\n",(0,s.jsx)(e.p,{children:"You can put the state associated with a Pulsar function using Admin CLI, REST API or Java admin API."}),"\n",(0,s.jsx)(e.h4,{id:"admin-cli-16",children:"Admin CLI"}),"\n",(0,s.jsxs)(e.p,{children:["Use the ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/reference-pulsar-admin#functions-putstate",children:(0,s.jsx)(e.code,{children:"putstate"})})," subcommand."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:'\n$ pulsar-admin functions putstate \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --state "{\\"key\\":\\"pulsar\\", \\"stringValue\\":\\"hello pulsar\\"}"\n\n'})}),"\n",(0,s.jsx)(e.h4,{id:"rest-api-15",children:"REST API"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.a,{href:"https://pulsar.apache.org/functions-rest-api?version=master&apiversion=v3#",children:["POST /admin/v3/functions/",":tenant","/",":namespace","/functionName/state/",":key","?version=2.4.2"]})}),"\n",(0,s.jsx)(e.h4,{id:"java-admin-api-15",children:"Java Admin API"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"\nTypeReference<FunctionState> typeRef = new TypeReference<FunctionState>() {};\nFunctionState stateRepr = ObjectMapperFactory.getThreadLocal().readValue(state, typeRef);\nadmin.functions().putFunctionState(tenant, namespace, functionName, stateRepr);\n\n"})}),"\n",(0,s.jsx)(e.h3,{id:"fetch-state-associated-with-a-function",children:"Fetch state associated with a function"}),"\n",(0,s.jsx)(e.p,{children:"You can fetch the current state associated with a Pulsar function using Admin CLI, REST API or Java admin API."}),"\n",(0,s.jsx)(e.h4,{id:"admin-cli-17",children:"Admin CLI"}),"\n",(0,s.jsxs)(e.p,{children:["Use the ",(0,s.jsx)(e.a,{href:"/docs/2.4.2/reference-pulsar-admin#functions-querystate",children:(0,s.jsx)(e.code,{children:"querystate"})})," subcommand."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Example"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"\n$ pulsar-admin functions querystate \\\n  --tenant public \\\n  --namespace default \\\n  --name (the name of Pulsar Functions) \\\n  --key (the key of state)\n\n"})}),"\n",(0,s.jsx)(e.h4,{id:"rest-api-16",children:"REST API"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.a,{href:"https://pulsar.apache.org/functions-rest-api?version=master&apiversion=v3#",children:["GET /admin/v3/functions/",":tenant","/",":namespace","/functionName/state/",":key","?version=2.4.2"]})}),"\n",(0,s.jsx)(e.h4,{id:"java-admin-cli",children:"Java Admin CLI"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"\nadmin.functions().getFunctionState(tenant, namespace, functionName, key);\n\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},28453:(n,e,a)=>{a.d(e,{R:()=>c,x:()=>l});var i=a(96540);const s={},t=i.createContext(s);function c(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);