"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[92213],{93863:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"functions-overview","title":"Pulsar Functions overview","description":"Pulsar Functions are lightweight compute processes that","source":"@site/versioned_docs/version-2.7.5/functions-overview.md","sourceDirName":".","slug":"/functions-overview","permalink":"/docs/2.7.5/functions-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.5/functions-overview.md","tags":[],"version":"2.7.5","frontMatter":{"id":"functions-overview","title":"Pulsar Functions overview","sidebar_label":"Overview","original_id":"functions-overview"},"sidebar":"docsSidebar","previous":{"title":"Manage schema","permalink":"/docs/2.7.5/schema-manage"},"next":{"title":"Setup: Pulsar Functions Worker","permalink":"/docs/2.7.5/functions-worker"}}');var i=s(74848),a=s(28453);const o={id:"functions-overview",title:"Pulsar Functions overview",sidebar_label:"Overview",original_id:"functions-overview"},r=void 0,l={},c=[{value:"Goals",id:"goals",level:2},{value:"Inspirations",id:"inspirations",level:2},{value:"Programming model",id:"programming-model",level:2},{value:"Word count example",id:"word-count-example",level:3},{value:"Content-based routing example",id:"content-based-routing-example",level:3},{value:"Functions, messages and message types",id:"functions-messages-and-message-types",level:3},{value:"Fully Qualified Function Name (FQFN)",id:"fully-qualified-function-name-fqfn",level:2},{value:"Supported languages",id:"supported-languages",level:2},{value:"Processing guarantees",id:"processing-guarantees",level:2},{value:"Apply processing guarantees to a function",id:"apply-processing-guarantees-to-a-function",level:3},{value:"Update the processing guarantees of a function",id:"update-the-processing-guarantees-of-a-function",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Pulsar Functions"})," are lightweight compute processes that"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"consume messages from one or more Pulsar topics,"}),"\n",(0,i.jsx)(n.li,{children:"apply a user-supplied processing logic to each message,"}),"\n",(0,i.jsx)(n.li,{children:"publish the results of the computation to another topic."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"goals",children:"Goals"}),"\n",(0,i.jsxs)(n.p,{children:["With Pulsar Functions, you can create complex processing logic without deploying a separate neighboring system (such as ",(0,i.jsx)(n.a,{href:"http://storm.apache.org/",children:"Apache Storm"}),", ",(0,i.jsx)(n.a,{href:"https://heron.incubator.apache.org/",children:"Apache Heron"}),", ",(0,i.jsx)(n.a,{href:"https://flink.apache.org/",children:"Apache Flink"}),"). Pulsar Functions are computing infrastructure of Pulsar messaging system. The core goal is tied to a series of other goals:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Developer productivity (language-native vs Pulsar Functions SDK functions)"}),"\n",(0,i.jsx)(n.li,{children:"Easy troubleshooting"}),"\n",(0,i.jsx)(n.li,{children:"Operational simplicity (no need for an external processing system)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"inspirations",children:"Inspirations"}),"\n",(0,i.jsx)(n.p,{children:"Pulsar Functions are inspired by (and take cues from) several systems and paradigms:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Stream processing engines such as ",(0,i.jsx)(n.a,{href:"http://storm.apache.org/",children:"Apache Storm"}),", ",(0,i.jsx)(n.a,{href:"https://apache.github.io/incubator-heron",children:"Apache Heron"}),", and ",(0,i.jsx)(n.a,{href:"https://flink.apache.org",children:"Apache Flink"})]}),"\n",(0,i.jsxs)(n.li,{children:['"Serverless" and "Function as a Service" (FaaS) cloud platforms like ',(0,i.jsx)(n.a,{href:"https://aws.amazon.com/lambda/",children:"Amazon Web Services Lambda"}),", ",(0,i.jsx)(n.a,{href:"https://cloud.google.com/functions/",children:"Google Cloud Functions"}),", and ",(0,i.jsx)(n.a,{href:"https://azure.microsoft.com/en-us/services/functions/",children:"Azure Cloud Functions"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Pulsar Functions can be described as"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://aws.amazon.com/lambda/",children:"Lambda"}),"-style functions that are"]}),"\n",(0,i.jsx)(n.li,{children:"specifically designed to use Pulsar as a message bus."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"programming-model",children:"Programming model"}),"\n",(0,i.jsxs)(n.p,{children:["Pulsar Functions provide a wide range of functionality, and the core programming model is simple. Functions receive messages from one or more ",(0,i.jsxs)(n.strong,{children:["input ",(0,i.jsx)(n.a,{href:"/docs/2.7.5/reference-terminology#topic",children:"topics"})]}),". Each time a message is received, the function will complete the following tasks."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Apply some processing logic to the input and write output to:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["An ",(0,i.jsx)(n.strong,{children:"output topic"})," in Pulsar"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/2.7.5/functions-develop#state-storage",children:"Apache BookKeeper"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Write logs to a ",(0,i.jsx)(n.strong,{children:"log topic"})," (potentially for debugging purposes)"]}),"\n",(0,i.jsxs)(n.li,{children:["Increment a ",(0,i.jsx)(n.a,{href:"#word-count-example",children:"counter"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Pulsar Functions core programming model",src:s(92086).A+"",width:"1712",height:"1049"})}),"\n",(0,i.jsx)(n.p,{children:"You can use Pulsar Functions to set up the following processing chain:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A Python function listens for the ",(0,i.jsx)(n.code,{children:"raw-sentences"}),' topic and "sanitizes" incoming strings (removing extraneous whitespace and converting all characters to lowercase) and then publishes the results to a ',(0,i.jsx)(n.code,{children:"sanitized-sentences"})," topic."]}),"\n",(0,i.jsxs)(n.li,{children:["A Java function listens for the ",(0,i.jsx)(n.code,{children:"sanitized-sentences"})," topic, counts the number of times each word appears within a specified time window, and publishes the results to a ",(0,i.jsx)(n.code,{children:"results"})," topic"]}),"\n",(0,i.jsxs)(n.li,{children:["Finally, a Python function listens for the ",(0,i.jsx)(n.code,{children:"results"})," topic and writes the results to a MySQL table."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"word-count-example",children:"Word count example"}),"\n",(0,i.jsx)(n.p,{children:"If you implement the classic word count example using Pulsar Functions, it looks something like this:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Pulsar Functions word count example",src:s(93285).A+"",width:"1769",height:"916"})}),"\n",(0,i.jsxs)(n.p,{children:["To write the function in Java with ",(0,i.jsx)(n.a,{href:"/docs/2.7.5/functions-develop#available-apis",children:"Pulsar Functions SDK for Java"}),", you can write the function as follows."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'\npackage org.example.functions;\n\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\n\nimport java.util.Arrays;\n\npublic class WordCountFunction implements Function<String, Void> {\n    // This function is invoked every time a message is published to the input topic\n    @Override\n    public Void process(String input, Context context) throws Exception {\n        Arrays.asList(input.split(" ")).forEach(word -> {\n            String counterKey = word.toLowerCase();\n            context.incrCounter(counterKey, 1);\n        });\n        return null;\n    }\n}\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Bundle and build the JAR file to be deployed, and then deploy it in your Pulsar cluster using the ",(0,i.jsx)(n.a,{href:"/docs/2.7.5/functions-deploy#command-line-interface",children:"command line"})," as follows."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions create \\\n  --jar target/my-jar-with-dependencies.jar \\\n  --classname org.example.functions.WordCountFunction \\\n  --tenant public \\\n  --namespace default \\\n  --name word-count \\\n  --inputs persistent://public/default/sentences \\\n  --output persistent://public/default/count\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"content-based-routing-example",children:"Content-based routing example"}),"\n",(0,i.jsx)(n.p,{children:"Pulsar Functions are used in many cases. The following is a sophisticated example that involves content-based routing."}),"\n",(0,i.jsxs)(n.p,{children:["For example, a function takes items (strings) as input and publishes them to either a ",(0,i.jsx)(n.code,{children:"fruits"})," or ",(0,i.jsx)(n.code,{children:"vegetables"})," topic, depending on the item. Or, if an item is neither fruit nor vegetable, a warning is logged to a ",(0,i.jsx)(n.a,{href:"/docs/2.7.5/functions-develop#logger",children:"log topic"}),". The following is a visual representation."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Pulsar Functions routing example",src:s(14160).A+"",width:"1772",height:"836"})}),"\n",(0,i.jsx)(n.p,{children:"If you implement this routing functionality in Python, it looks something like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'\nfrom pulsar import Function\n\nclass RoutingFunction(Function):\n    def __init__(self):\n        self.fruits_topic = "persistent://public/default/fruits"\n        self.vegetables_topic = "persistent://public/default/vegetables"\n\n    @staticmethod\n    def is_fruit(item):\n        return item in [b"apple", b"orange", b"pear", b"other fruits..."]\n\n    @staticmethod\n    def is_vegetable(item):\n        return item in [b"carrot", b"lettuce", b"radish", b"other vegetables..."]\n\n    def process(self, item, context):\n        if self.is_fruit(item):\n            context.publish(self.fruits_topic, item)\n        elif self.is_vegetable(item):\n            context.publish(self.vegetables_topic, item)\n        else:\n            warning = "The item {0} is neither a fruit nor a vegetable".format(item)\n            context.get_logger().warn(warning)\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If this code is stored in ",(0,i.jsx)(n.code,{children:"~/router.py"}),", then you can deploy it in your Pulsar cluster using the ",(0,i.jsx)(n.a,{href:"/docs/2.7.5/functions-deploy#command-line-interface",children:"command line"})," as follows."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions create \\\n  --py ~/router.py \\\n  --classname router.RoutingFunction \\\n  --tenant public \\\n  --namespace default \\\n  --name route-fruit-veg \\\n  --inputs persistent://public/default/basket-items\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"functions-messages-and-message-types",children:"Functions, messages and message types"}),"\n",(0,i.jsx)(n.p,{children:"Pulsar Functions take byte arrays as inputs and spit out byte arrays as output. However in languages that support typed interfaces(Java), you can write typed Functions, and bind messages to types in the following ways."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/2.7.5/functions-develop#schema-registry",children:"Schema Registry"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/2.7.5/functions-develop#serde",children:"SerDe"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"fully-qualified-function-name-fqfn",children:"Fully Qualified Function Name (FQFN)"}),"\n",(0,i.jsxs)(n.p,{children:["Each Pulsar Function has a ",(0,i.jsx)(n.strong,{children:"Fully Qualified Function Name"})," (FQFN) that consists of three elements: the function tenant, namespace, and function name. FQFN looks like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:"\ntenant/namespace/name\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"FQFNs enable you to create multiple functions with the same name provided that they are in different namespaces."}),"\n",(0,i.jsx)(n.h2,{id:"supported-languages",children:"Supported languages"}),"\n",(0,i.jsxs)(n.p,{children:["Currently, you can write Pulsar Functions in Java, Python, and Go. For details, refer to ",(0,i.jsx)(n.a,{href:"/docs/2.7.5/functions-develop",children:"Develop Pulsar Functions"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"processing-guarantees",children:"Processing guarantees"}),"\n",(0,i.jsx)(n.p,{children:"Pulsar Functions provide three different messaging semantics that you can apply to any function."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Delivery semantics"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,i.jsx)(n.strong,{children:"At-most-once"})," delivery"]}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:'Each message sent to the function is likely to be processed, or not to be processed (hence "at most").'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,i.jsx)(n.strong,{children:"At-least-once"})," delivery"]}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:'Each message sent to the function can be processed more than once (hence the "at least").'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,i.jsx)(n.strong,{children:"Effectively-once"})," delivery"]}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Each message sent to the function will have one output associated with it."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"apply-processing-guarantees-to-a-function",children:"Apply processing guarantees to a function"}),"\n",(0,i.jsxs)(n.p,{children:["You can set the processing guarantees for a Pulsar Function when you create the Function. The following ",(0,i.jsx)(n.a,{href:"/docs/2.7.5/reference-pulsar-admin#create-1",children:(0,i.jsx)(n.code,{children:"pulsar-function create"})})," command creates a function with effectively-once guarantees applied."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions create \\\n  --name my-effectively-once-function \\\n  --processing-guarantees EFFECTIVELY_ONCE \\\n  # Other function configs\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The available options for ",(0,i.jsx)(n.code,{children:"--processing-guarantees"})," are:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ATMOST_ONCE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ATLEAST_ONCE"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"EFFECTIVELY_ONCE"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["By default, Pulsar Functions provide at-least-once delivery guarantees. So if you create a function without supplying a value for the ",(0,i.jsx)(n.code,{children:"--processingGuarantees"})," flag, the function provides at-least-once guarantees."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"update-the-processing-guarantees-of-a-function",children:"Update the processing guarantees of a function"}),"\n",(0,i.jsxs)(n.p,{children:["You can change the processing guarantees applied to a function using the ",(0,i.jsx)(n.a,{href:"/docs/2.7.5/reference-pulsar-admin#update-1",children:(0,i.jsx)(n.code,{children:"update"})})," command. The following is an example."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions update \\\n  --processing-guarantees ATMOST_ONCE \\\n  # Other function configs\n\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},92086:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pulsar-functions-overview-9d39ad7e0ec566e6ed2ee7cdf9717963.png"},14160:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pulsar-functions-routing-example-22b3f2b036505ad4d4dfd5f878de3ae3.png"},93285:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pulsar-functions-word-count-f7b0d99f0a0e03e0b20fd0aa0ff6ef48.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var t=s(96540);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);