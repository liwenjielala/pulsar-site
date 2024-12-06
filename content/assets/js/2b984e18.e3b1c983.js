"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[66066],{36463:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"functions-deploy","title":"Deploy Pulsar Functions","description":"Requirements","source":"@site/versioned_docs/version-2.7.0/functions-deploy.md","sourceDirName":".","slug":"/functions-deploy","permalink":"/docs/2.7.0/functions-deploy","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.0/functions-deploy.md","tags":[],"version":"2.7.0","frontMatter":{"id":"functions-deploy","title":"Deploy Pulsar Functions","sidebar_label":"How-to: Deploy","original_id":"functions-deploy"},"sidebar":"docsSidebar","previous":{"title":"How-to: Debug","permalink":"/docs/2.7.0/functions-debug"},"next":{"title":"Reference: CLI","permalink":"/docs/2.7.0/functions-cli"}}');var i=s(74848),r=s(28453);const c={id:"functions-deploy",title:"Deploy Pulsar Functions",sidebar_label:"How-to: Deploy",original_id:"functions-deploy"},l=void 0,a={},o=[{value:"Requirements",id:"requirements",level:2},{value:"Command-line interface",id:"command-line-interface",level:2},{value:"Default arguments",id:"default-arguments",level:3},{value:"Example of default arguments",id:"example-of-default-arguments",level:3},{value:"Local run mode",id:"local-run-mode",level:2},{value:"Cluster mode",id:"cluster-mode",level:2},{value:"Update functions in cluster mode",id:"update-functions-in-cluster-mode",level:3},{value:"Parallelism",id:"parallelism",level:3},{value:"Function instance resources",id:"function-instance-resources",level:3},{value:"Resources are <em>per instance</em>",id:"resources-are-per-instance",level:4},{value:"Trigger Pulsar Functions",id:"trigger-pulsar-functions",level:2},{value:"Topic info is not required",id:"topic-info-is-not-required",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsx)(n.p,{children:"To deploy and manage Pulsar Functions, you need to have a Pulsar cluster running. There are several options for this:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can run a ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/getting-started-standalone",children:"standalone cluster"})," locally on your own machine."]}),"\n",(0,i.jsxs)(n.li,{children:["You can deploy a Pulsar cluster on ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/deploy-kubernetes",children:"Kubernetes"}),", ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/deploy-aws",children:"Amazon Web Services"}),", ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/deploy-bare-metal",children:"bare metal"}),", ",(0,i.jsx)(n.a,{href:"https://dcos.io/",children:"DC/OS"}),", and more."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you run a non-",(0,i.jsx)(n.a,{href:"/docs/2.7.0/reference-terminology#standalone",children:"standalone"})," cluster, you need to obtain the service URL for the cluster. How you obtain the service URL depends on how you deploy your Pulsar cluster."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to deploy and trigger Python user-defined functions, you need to install ",(0,i.jsx)(n.a,{href:"http://pulsar.apache.org/docs/en/client-libraries-python/",children:"the pulsar python client"})," on all the machines running ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/functions-worker",children:"functions workers"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"command-line-interface",children:"Command-line interface"}),"\n",(0,i.jsxs)(n.p,{children:["Pulsar Functions are deployed and managed using the ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/reference-pulsar-admin#functions",children:(0,i.jsx)(n.code,{children:"pulsar-admin functions"})})," interface, which contains commands such as ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/reference-pulsar-admin#functions-create",children:(0,i.jsx)(n.code,{children:"create"})})," for deploying functions in ",(0,i.jsx)(n.a,{href:"#cluster-mode",children:"cluster mode"}),", ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/reference-pulsar-admin#trigger",children:(0,i.jsx)(n.code,{children:"trigger"})})," for ",(0,i.jsx)(n.a,{href:"#triggering-pulsar-functions",children:"triggering"})," functions, ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/reference-pulsar-admin#list-2",children:(0,i.jsx)(n.code,{children:"list"})})," for listing deployed functions."]}),"\n",(0,i.jsxs)(n.p,{children:["To learn more commands, refer to ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/reference-pulsar-admin#functions",children:(0,i.jsx)(n.code,{children:"pulsar-admin functions"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"default-arguments",children:"Default arguments"}),"\n",(0,i.jsx)(n.p,{children:"When managing Pulsar Functions, you need to specify a variety of information about functions, including tenant, namespace, input and output topics, and so on. However, some parameters have default values if you do not specify values for them. The following table lists the default values."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Function name"}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["You can specify any value for the class name (except org, library, or similar class names). For example, when you specify the flag ",(0,i.jsx)(n.code,{children:"--classname org.example.MyFunction"}),", the function name is ",(0,i.jsx)(n.code,{children:"MyFunction"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Tenant"}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Derived from names of the input topics. If the input topics are under the ",(0,i.jsx)(n.code,{children:"marketing"})," tenant, which means the topic names have the form ",(0,i.jsx)(n.code,{children:"persistent://marketing/{namespace}/{topicName}"}),", the tenant is ",(0,i.jsx)(n.code,{children:"marketing"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Namespace"}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Derived from names of the input topics. If the input topics are under the ",(0,i.jsx)(n.code,{children:"asia"})," namespace under the ",(0,i.jsx)(n.code,{children:"marketing"})," tenant, which means the topic names have the form ",(0,i.jsx)(n.code,{children:"persistent://marketing/asia/{topicName}"}),", then the namespace is ",(0,i.jsx)(n.code,{children:"asia"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Output topic"}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,i.jsx)(n.code,{children:"{input topic}-{function name}-output"}),". For example, if an input topic name of a function is ",(0,i.jsx)(n.code,{children:"incoming"}),", and the function name is ",(0,i.jsx)(n.code,{children:"exclamation"}),", then the name of the output topic is ",(0,i.jsx)(n.code,{children:"incoming-exclamation-output"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Subscription type"}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["For ",(0,i.jsx)(n.code,{children:"at-least-once"})," and ",(0,i.jsx)(n.code,{children:"at-most-once"})," ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/functions-overview#processing-guarantees",children:"processing guarantees"}),", the ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/concepts-messaging#shared",children:(0,i.jsx)(n.code,{children:"SHARED"})})," mode is applied by default; for ",(0,i.jsx)(n.code,{children:"effectively-once"})," guarantees, the ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/concepts-messaging#failover",children:(0,i.jsx)(n.code,{children:"FAILOVER"})})," mode is applied."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Processing guarantees"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"/docs/2.7.0/functions-overview#processing-guarantees",children:(0,i.jsx)(n.code,{children:"ATLEAST_ONCE"})})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Pulsar service URL"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"pulsar://localhost:6650"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"example-of-default-arguments",children:"Example of default arguments"}),"\n",(0,i.jsxs)(n.p,{children:["Take the ",(0,i.jsx)(n.code,{children:"create"})," command as an example."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions create \\\n  --jar my-pulsar-functions.jar \\\n  --classname org.example.MyFunction \\\n  --inputs my-function-input-topic1,my-function-input-topic2\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The function has default values for the function name (",(0,i.jsx)(n.code,{children:"MyFunction"}),"), tenant (",(0,i.jsx)(n.code,{children:"public"}),"), namespace (",(0,i.jsx)(n.code,{children:"default"}),"), subscription type (",(0,i.jsx)(n.code,{children:"SHARED"}),"), processing guarantees (",(0,i.jsx)(n.code,{children:"ATLEAST_ONCE"}),"), and Pulsar service URL (",(0,i.jsx)(n.code,{children:"pulsar://localhost:6650"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"local-run-mode",children:"Local run mode"}),"\n",(0,i.jsxs)(n.p,{children:["If you run a Pulsar Function in ",(0,i.jsx)(n.strong,{children:"local run"})," mode, it runs on the machine from which you enter the commands (on your laptop, an ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/ec2/",children:"AWS EC2"})," instance, and so on). The following is a ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/reference-pulsar-admin#localrun",children:(0,i.jsx)(n.code,{children:"localrun"})})," command example."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions localrun \\\n  --py myfunc.py \\\n  --classname myfunc.SomeFunction \\\n  --inputs persistent://public/default/input-1 \\\n  --output persistent://public/default/output-1\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["By default, the function connects to a Pulsar cluster running on the same machine, via a local ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/reference-terminology#broker",children:"broker"})," service URL of ",(0,i.jsx)(n.code,{children:"pulsar://localhost:6650"}),". If you use local run mode to run a function but connect it to a non-local Pulsar cluster, you can specify a different broker URL using the ",(0,i.jsx)(n.code,{children:"--brokerServiceUrl"})," flag. The following is an example."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions localrun \\\n  --broker-service-url pulsar://my-cluster-host:6650 \\\n  # Other function parameters\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"cluster-mode",children:"Cluster mode"}),"\n",(0,i.jsxs)(n.p,{children:["When you run a Pulsar Function in ",(0,i.jsx)(n.strong,{children:"cluster"})," mode, the function code is uploaded to a Pulsar broker and runs ",(0,i.jsx)(n.em,{children:"alongside the broker"})," rather than in your ",(0,i.jsx)(n.a,{href:"#local-run-mode",children:"local environment"}),". You can run a function in cluster mode using the ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/reference-pulsar-admin#create-1",children:(0,i.jsx)(n.code,{children:"create"})})," command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions create \\\n  --py myfunc.py \\\n  --classname myfunc.SomeFunction \\\n  --inputs persistent://public/default/input-1 \\\n  --output persistent://public/default/output-1\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"update-functions-in-cluster-mode",children:"Update functions in cluster mode"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/reference-pulsar-admin#update-1",children:(0,i.jsx)(n.code,{children:"update"})})," command to update a Pulsar Function running in cluster mode. The following command updates the function created in the ",(0,i.jsx)(n.a,{href:"#cluster-mode",children:"cluster mode"})," section."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions update \\\n  --py myfunc.py \\\n  --classname myfunc.SomeFunction \\\n  --inputs persistent://public/default/new-input-topic \\\n  --output persistent://public/default/new-output-topic\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"parallelism",children:"Parallelism"}),"\n",(0,i.jsxs)(n.p,{children:["Pulsar Functions run as processes or threads, which are called ",(0,i.jsx)(n.strong,{children:"instances"}),". When you run a Pulsar Function, it runs as a single instance by default. With one localrun command, you can only run a single instance of a function. If you want to run multiple instances, you can use localrun command multiple times."]}),"\n",(0,i.jsxs)(n.p,{children:["When you create a function, you can specify the ",(0,i.jsx)(n.em,{children:"parallelism"})," of a function (the number of instances to run). You can set the parallelism factor using the ",(0,i.jsx)(n.code,{children:"--parallelism"})," flag of the ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/reference-pulsar-admin#functions-create",children:(0,i.jsx)(n.code,{children:"create"})})," command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions create \\\n  --parallelism 3 \\\n  # Other function info\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can adjust the parallelism of an already created function using the ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/reference-pulsar-admin#update-1",children:(0,i.jsx)(n.code,{children:"update"})})," interface."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions update \\\n  --parallelism 5 \\\n  # Other function\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you specify a function configuration via YAML, use the ",(0,i.jsx)(n.code,{children:"parallelism"})," parameter. The following is a config file example."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"\n# function-config.yaml\nparallelism: 3\ninputs:\n- persistent://public/default/input-1\noutput: persistent://public/default/output-1\n# other parameters\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"The following is corresponding update command."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions update \\\n  --function-config-file function-config.yaml\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"function-instance-resources",children:"Function instance resources"}),"\n",(0,i.jsxs)(n.p,{children:["When you run Pulsar Functions in ",(0,i.jsx)(n.a,{href:"#cluster-mode",children:"cluster mode"}),", you can specify the resources that are assigned to each function ",(0,i.jsx)(n.a,{href:"#parallelism",children:"instance"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Resource"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Specified as"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Runtimes"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"CPU"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The number of cores"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Kubernetes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"RAM"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The number of bytes"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Process, Docker"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Disk space"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The number of bytes"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Docker"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"The following function creation command allocates 8 cores, 8 GB of RAM, and 10 GB of disk space to a function."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions create \\\n  --jar target/my-functions.jar \\\n  --classname org.example.functions.MyFunction \\\n  --cpu 8 \\\n  --ram 8589934592 \\\n  --disk 10737418240\n\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.h4,{id:"resources-are-per-instance",children:["Resources are ",(0,i.jsx)(n.em,{children:"per instance"})]}),"\n",(0,i.jsx)(n.p,{children:"The resources that you apply to a given Pulsar Function are applied to each instance of the function. For example, if you apply 8 GB of RAM to a function with a parallelism of 5, you are applying 40 GB of RAM for the function in total. Make sure that you take the parallelism (the number of instances) factor into your resource calculations."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"trigger-pulsar-functions",children:"Trigger Pulsar Functions"}),"\n",(0,i.jsxs)(n.p,{children:["If a Pulsar Function is running in ",(0,i.jsx)(n.a,{href:"#cluster-mode",children:"cluster mode"}),", you can ",(0,i.jsx)(n.strong,{children:"trigger"})," it at any time using the command line. Triggering a function means that you send a message with a specific value to the function and get the function output (if any) via the command line."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Triggering a function is to invoke a function by producing a message on one of the input topics. With the ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/reference-pulsar-admin#trigger",children:(0,i.jsx)(n.code,{children:"pulsar-admin functions trigger"})})," command, you can send messages to functions without using the ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/reference-cli-tools#pulsar-client",children:(0,i.jsx)(n.code,{children:"pulsar-client"})})," tool or a language-specific client library."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To learn how to trigger a function, you can start with Python function that returns a simple string based on the input."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'\n# myfunc.py\ndef process(input):\n    return "This function has been triggered with a value of {0}".format(input)\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You can run the function in ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/functions-deploy#local-run-mode",children:"local run mode"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions create \\\n  --tenant public \\\n  --namespace default \\\n  --name myfunc \\\n  --py myfunc.py \\\n  --classname myfunc \\\n  --inputs persistent://public/default/in \\\n  --output persistent://public/default/out\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then assign a consumer to listen on the output topic for messages from the ",(0,i.jsx)(n.code,{children:"myfunc"})," function with the ",(0,i.jsx)(n.a,{href:"/docs/2.7.0/reference-cli-tools#consume",children:(0,i.jsx)(n.code,{children:"pulsar-client consume"})})," command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-client consume persistent://public/default/out \\\n  --subscription-name my-subscription\n  --num-messages 0 # Listen indefinitely\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"And then you can trigger the function."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'\n$ bin/pulsar-admin functions trigger \\\n  --tenant public \\\n  --namespace default \\\n  --name myfunc \\\n  --trigger-value "hello world"\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"The consumer listening on the output topic produces something as follows in the log."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n----- got message -----\nThis function has been triggered with a value of hello world\n\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.h4,{id:"topic-info-is-not-required",children:"Topic info is not required"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"trigger"})," command, you only need to specify basic information about the function (tenant, namespace, and name). To trigger the function, you do not need to know the function input topics."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var t=s(96540);const i={},r=t.createContext(i);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);