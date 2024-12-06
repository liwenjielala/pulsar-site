"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[93621],{58066:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"functions-overview","title":"Pulsar Functions overview","description":"Pulsar Functions are lightweight compute processes that","source":"@site/versioned_docs/version-2.4.0/functions-overview.md","sourceDirName":".","slug":"/functions-overview","permalink":"/docs/2.4.0/functions-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.0/functions-overview.md","tags":[],"version":"2.4.0","frontMatter":{"id":"functions-overview","title":"Pulsar Functions overview","sidebar_label":"Overview","original_id":"functions-overview"},"sidebar":"docsSidebar","previous":{"title":"Schema Registry","permalink":"/docs/2.4.0/concepts-schema-registry"},"next":{"title":"Get started","permalink":"/docs/2.4.0/functions-quickstart"}}');var s=t(74848),a=t(28453);const o={id:"functions-overview",title:"Pulsar Functions overview",sidebar_label:"Overview",original_id:"functions-overview"},r=void 0,c={},l=[{value:"Goals",id:"goals",level:2},{value:"Inspirations",id:"inspirations",level:2},{value:"Programming model",id:"programming-model",level:2},{value:"Word count example",id:"word-count-example",level:3},{value:"Content-based routing example",id:"content-based-routing-example",level:3},{value:"Command-line interface",id:"command-line-interface",level:2},{value:"Fully Qualified Function Name (FQFN)",id:"fully-qualified-function-name-fqfn",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Supported languages",id:"supported-languages",level:2},{value:"Pulsar Functions API",id:"pulsar-functions-api",level:2},{value:"Function context",id:"function-context",level:3},{value:"Language-native functions",id:"language-native-functions",level:3},{value:"Pulsar Functions SDK",id:"pulsar-functions-sdk",level:2},{value:"Java",id:"java",level:3},{value:"Python",id:"python",level:3},{value:"Go",id:"go",level:3},{value:"Deployment",id:"deployment",level:2},{value:"Local run mode",id:"local-run-mode",level:3},{value:"Cluster mode",id:"cluster-mode",level:3},{value:"Run instances in parallel",id:"run-instances-in-parallel",level:3},{value:"Function instance resources",id:"function-instance-resources",level:3},{value:"Logging",id:"logging",level:3},{value:"User configuration",id:"user-configuration",level:3},{value:"Trigger Pulsar Functions",id:"trigger-pulsar-functions",level:3},{value:"Processing guarantees",id:"processing-guarantees",level:2},{value:"Metrics",id:"metrics",level:2},{value:"State storage",id:"state-storage",level:2}];function u(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Pulsar Functions"})," are lightweight compute processes that"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"consume messages from one or more Pulsar topics,"}),"\n",(0,s.jsx)(e.li,{children:"apply a user-supplied processing logic to each message,"}),"\n",(0,s.jsx)(e.li,{children:"publish the results of the computation to another topic."}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["The following is an example of a Pulsar Function written in Java (using the ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/functions-api#java-native-functions",children:"native interface"}),")."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'\nimport java.util.Function;\n\npublic class ExclamationFunction implements Function<String, String> {\n    @Override\n    public String apply(String input) { return String.format("%s!", input); }\n}\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["The following is an example of a Pulsar Function written in Python (using the ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/functions-api#python-native-functions",children:"native interface"}),")."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'\ndef process(input):\n    return "{0}!".format(input)\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"The following is an example of a Pulsar Function written in Go."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'\nimport (\n\t"fmt"\n\t"context"\n\n\t"github.com/apache/pulsar/pulsar-function-go/pf"\n)\n\nfunc HandleRequest(ctx context.Context, in []byte) error {\n\tfmt.Println(string(in) + "!")\n\treturn nil\n}\n\nfunc main() {\n\tpf.Start(HandleRequest)\n}\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["A Pulsar Function is executed each time a message is published to its input topic. For example, if a function has an input topic called ",(0,s.jsx)(e.code,{children:"tweet-stream"}),", the function runs each time a message is published to ",(0,s.jsx)(e.code,{children:"tweet-stream"}),"."]}),"\n",(0,s.jsx)(e.h2,{id:"goals",children:"Goals"}),"\n",(0,s.jsxs)(e.p,{children:["With Pulsar Functions, you can create complex processing logic without deploying a separate neighboring system (such as ",(0,s.jsx)(e.a,{href:"http://storm.apache.org/",children:"Apache Storm"}),", ",(0,s.jsx)(e.a,{href:"https://apache.github.io/incubator-heron",children:"Apache Heron"}),", ",(0,s.jsx)(e.a,{href:"https://flink.apache.org/",children:"Apache Flink"}),"). Pulsar Functions are computing infrastructure of Pulsar messaging system. The core goal is tied to a series of other goals:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Developer productivity (",(0,s.jsx)(e.a,{href:"#language-native-functions",children:"language-native"})," vs ",(0,s.jsx)(e.a,{href:"#the-pulsar-functions-sdk",children:"Pulsar Functions SDK"})," functions)"]}),"\n",(0,s.jsx)(e.li,{children:"Easy troubleshooting"}),"\n",(0,s.jsx)(e.li,{children:"Operational simplicity (no need for an external processing system)"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"inspirations",children:"Inspirations"}),"\n",(0,s.jsx)(e.p,{children:"Pulsar Functions are inspired by (and take cues from) several systems and paradigms:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Stream processing engines such as ",(0,s.jsx)(e.a,{href:"http://storm.apache.org/",children:"Apache Storm"}),", ",(0,s.jsx)(e.a,{href:"https://apache.github.io/incubator-heron",children:"Apache Heron"}),", and ",(0,s.jsx)(e.a,{href:"https://flink.apache.org",children:"Apache Flink"})]}),"\n",(0,s.jsxs)(e.li,{children:['"Serverless" and "Function as a Service" (FaaS) cloud platforms like ',(0,s.jsx)(e.a,{href:"https://aws.amazon.com/lambda/",children:"Amazon Web Services Lambda"}),", ",(0,s.jsx)(e.a,{href:"https://cloud.google.com/functions/",children:"Google Cloud Functions"}),", and ",(0,s.jsx)(e.a,{href:"https://azure.microsoft.com/en-us/services/functions/",children:"Azure Cloud Functions"})]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Pulsar Functions can be described as"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://aws.amazon.com/lambda/",children:"Lambda"}),"-style functions that are"]}),"\n",(0,s.jsx)(e.li,{children:"specifically designed to use Pulsar as a message bus."}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"programming-model",children:"Programming model"}),"\n",(0,s.jsxs)(e.p,{children:["The core programming model of Pulsar Functions is simple. Functions receive messages from one or more ",(0,s.jsxs)(e.strong,{children:["input ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/reference-terminology#topic",children:"topics"})]}),". Each time a message is received, the function will complete the following tasks."]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Apply some processing logic to the input and write output to:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["An ",(0,s.jsx)(e.strong,{children:"output topic"})," in Pulsar"]}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"#state-storage",children:"Apache BookKeeper"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Write logs to a ",(0,s.jsx)(e.strong,{children:"log topic"})," (potentially for debugging purposes)"]}),"\n",(0,s.jsxs)(e.li,{children:["Increment a ",(0,s.jsx)(e.a,{href:"#word-count-example",children:"counter"})]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Pulsar Functions core programming model",src:t(92086).A+"",width:"1712",height:"1049"})}),"\n",(0,s.jsx)(e.h3,{id:"word-count-example",children:"Word count example"}),"\n",(0,s.jsx)(e.p,{children:"If you implement the classic word count example using Pulsar Functions, it looks something like this:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Pulsar Functions word count example",src:t(93285).A+"",width:"1769",height:"916"})}),"\n",(0,s.jsxs)(e.p,{children:["To write the function in ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/functions-api#functions-for-java",children:"Java"})," with ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/functions-api#java-sdk-functions",children:"Pulsar Functions SDK for Java"}),", you can write the function as follows."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'\npackage org.example.functions;\n\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\n\nimport java.util.Arrays;\n\npublic class WordCountFunction implements Function<String, Void> {\n    // This function is invoked every time a message is published to the input topic\n    @Override\n    public Void process(String input, Context context) throws Exception {\n        Arrays.asList(input.split(" ")).forEach(word -> {\n            String counterKey = word.toLowerCase();\n            context.incrCounter(counterKey, 1);\n        });\n        return null;\n    }\n}\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["Bundle and build the JAR file to be deployed. You can find approaches in ",(0,s.jsx)(e.a,{href:"#creating-an-uber-jar",children:"Creating an Uber JAR"})," and ",(0,s.jsx)(e.a,{href:"#creating-a-nar-package",children:"Creating a NAR package"}),".\nThen ",(0,s.jsx)(e.a,{href:"#cluster-run-mode",children:"deploy it"})," in your Pulsar cluster using the ",(0,s.jsx)(e.a,{href:"#command-line-interface",children:"command line"})," as follows."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions create \\\n  --jar target/my-jar-with-dependencies.jar \\\n  --classname org.example.functions.WordCountFunction \\\n  --tenant public \\\n  --namespace default \\\n  --name word-count \\\n  --inputs persistent://public/default/sentences \\\n  --output persistent://public/default/count\n\n"})}),"\n",(0,s.jsx)(e.h3,{id:"content-based-routing-example",children:"Content-based routing example"}),"\n",(0,s.jsx)(e.p,{children:"Pulsar Functions are used in many cases. The following is a sophisticated example that involves content-based routing."}),"\n",(0,s.jsxs)(e.p,{children:["For example, a function takes items (strings) as input and publishes them to either a ",(0,s.jsx)(e.code,{children:"fruits"})," or ",(0,s.jsx)(e.code,{children:"vegetables"})," topic, depending on the item. Or, if an item is neither fruit nor vegetable, a warning is logged to a ",(0,s.jsx)(e.a,{href:"#logging",children:"log topic"}),". The following is a visual representation."]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Pulsar Functions routing example",src:t(14160).A+"",width:"1772",height:"836"})}),"\n",(0,s.jsx)(e.p,{children:"If you implement this routing functionality in Python, it looks something like this:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'\nfrom pulsar import Function\n\nclass RoutingFunction(Function):\n    def __init__(self):\n        self.fruits_topic = "persistent://public/default/fruits"\n        self.vegetables_topic = "persistent://public/default/vegetables"\n\n    @staticmethod\n    def is_fruit(item):\n        return item in ["apple", "orange", "pear", "other fruits..."]\n\n    @staticmethod\n    def is_vegetable(item):\n        return item in ["carrot", "lettuce", "radish", "other vegetables..."]\n\n    def process(self, item, context):\n        if self.is_fruit(item):\n            context.publish(self.fruits_topic, item)\n        elif self.is_vegetable(item):\n            context.publish(self.vegetables_topic, item)\n        else:\n            warning = "The item {0} is neither a fruit nor a vegetable".format(item)\n            context.get_logger().warn(warning)\n\n'})}),"\n",(0,s.jsx)(e.h2,{id:"command-line-interface",children:"Command-line interface"}),"\n",(0,s.jsxs)(e.p,{children:["Pulsar Functions are managed using the ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/reference-ulsar-admin",children:(0,s.jsx)(e.code,{children:"pulsar-admin"})})," CLI tool (in particular the ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/reference-ulsar-admin#functions",children:(0,s.jsx)(e.code,{children:"functions"})})," command). The following example runs a function in the ",(0,s.jsx)(e.a,{href:"#local-run-mode",children:"local run mode"}),"."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions localrun \\\n  --inputs persistent://public/default/test_src \\\n  --output persistent://public/default/test_result \\\n  --jar examples/api-examples.jar \\\n  --classname org.apache.pulsar.functions.api.examples.ExclamationFunction\n\n"})}),"\n",(0,s.jsx)(e.h2,{id:"fully-qualified-function-name-fqfn",children:"Fully Qualified Function Name (FQFN)"}),"\n",(0,s.jsxs)(e.p,{children:["Each Pulsar Function has a ",(0,s.jsx)(e.strong,{children:"Fully Qualified Function Name"})," (FQFN) that consists of three elements: the function tenant, namespace, and function name. FQFN looks like this:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-http",children:"\ntenant/namespace/name\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"FQFNs enable you to create multiple functions with the same name provided that they are in different namespaces."}),"\n",(0,s.jsx)(e.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(e.p,{children:"You can configure a Pulsar Function in the following ways:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Via ",(0,s.jsx)(e.a,{href:"#command-line-interface",children:"command-line arguments"})," passed to the ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/reference-ulsar-admin#functions",children:(0,s.jsx)(e.code,{children:"pulsar-admin functions"})})," interface"]}),"\n",(0,s.jsxs)(e.li,{children:["Via ",(0,s.jsx)(e.a,{href:"http://yaml.org/",children:"YAML"})," configuration files"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"If you use a YAML configuration file, you must specify a path to the file on the command line. The following is an example."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions create \\\n  --function-config-file ./my-function.yaml\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["The following is an example of the ",(0,s.jsx)(e.code,{children:"my-function.yaml"})," file."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:"\nname: my-function\ntenant: public\nnamespace: default\njar: ./target/my-functions.jar\nclassName: org.example.pulsar.functions.MyFunction\ninputs:\n- persistent://public/default/test_src\noutput: persistent://public/default/test_result\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"You can specify some function attributes via CLI arguments or in a configuration file in YAML format."}),"\n",(0,s.jsx)(e.h2,{id:"supported-languages",children:"Supported languages"}),"\n",(0,s.jsxs)(e.p,{children:["Currently, you can write Pulsar Functions in ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/functions-api#functions-for-java",children:"Java"}),", ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/functions-api#functions-for-python",children:"Python"}),", and ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/functions-api#functions-for-go",children:"Go"}),". Support for additional languages is coming soon."]}),"\n",(0,s.jsx)(e.h2,{id:"pulsar-functions-api",children:"Pulsar Functions API"}),"\n",(0,s.jsx)(e.p,{children:"Pulsar Functions API enables you to create processing logic that is:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Type safe. Pulsar Functions can process raw bytes or more complex, application-specific types."}),"\n",(0,s.jsxs)(e.li,{children:["Based on SerDe (",(0,s.jsx)(e.strong,{children:"Ser"}),"ialization/",(0,s.jsx)(e.strong,{children:"De"}),'serialization). A variety of types are supported "out of the box" but you can also create your own custom SerDe logic.']}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"function-context",children:"Function context"}),"\n",(0,s.jsxs)(e.p,{children:["Each Pulsar Function created using ",(0,s.jsx)(e.a,{href:"#the-pulsar-functions-sdk",children:"Pulsar Functions SDK"})," has access to a context object that both provides:"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"A wide variety of information about the function, including:"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"The name of the function"}),"\n",(0,s.jsx)(e.li,{children:"The tenant and namespace of the function"}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"#user-configuration",children:"User-supplied configuration"})," values"]}),"\n"]}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{children:"Special functionality, including:"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["The ability to produce ",(0,s.jsx)(e.a,{href:"#logging",children:"logs"})," to a specified logging topic"]}),"\n",(0,s.jsxs)(e.li,{children:["The ability to produce ",(0,s.jsx)(e.a,{href:"#metrics",children:"metrics"})]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"language-native-functions",children:"Language-native functions"}),"\n",(0,s.jsx)(e.p,{children:'"Native" functions are supported in Java and Python, which means a Pulsar Function can have no dependencies.'}),"\n",(0,s.jsxs)(e.p,{children:['The benefit of native functions is that they do not have any dependencies beyond what\'s already available in Java/Python "out of the box." The downside is that they do not provide access to the function ',(0,s.jsx)(e.a,{href:"#function-context",children:"context"}),", which is necessary for a variety of functionalities, including ",(0,s.jsx)(e.a,{href:"#logging",children:"logging"}),", ",(0,s.jsx)(e.a,{href:"#user-configuration",children:"user configuration"}),", and more."]}),"\n",(0,s.jsx)(e.h2,{id:"pulsar-functions-sdk",children:"Pulsar Functions SDK"}),"\n",(0,s.jsxs)(e.p,{children:["To enable a Pulsar Function to access to a ",(0,s.jsx)(e.a,{href:"#function-context",children:"context object"}),", you can use ",(0,s.jsx)(e.strong,{children:"Pulsar Functions SDK"}),", available for ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/functions-api#functions-for-java",children:"Java"}),", ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/functions-api#functions-for-python",children:"Python"}),", and ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/functions-api#functions-for-go",children:"Go"}),"."]}),"\n",(0,s.jsx)(e.h3,{id:"java",children:"Java"}),"\n",(0,s.jsx)(e.p,{children:"The following is a Java function example that uses information about its context."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport org.slf4j.Logger;\n\npublic class ContextAwareFunction implements Function<String, Void> {\n    @Override\n    public Void process(String input, Context, context) {\n        Logger LOG = context.getLogger();\n        String functionTenant = context.getTenant();\n        String functionNamespace = context.getNamespace();\n        String functionName = context.getFunctionName();\n        LOG.info("Function tenant/namespace/name: {}/{}/{}", functionTenant, functionNamespace, functionName);\n        return null;\n    }\n}\n\n'})}),"\n",(0,s.jsx)(e.h3,{id:"python",children:"Python"}),"\n",(0,s.jsx)(e.p,{children:"The following is a Python function example that uses information about its context."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'\nfrom pulsar import Function\n\nclass ContextAwareFunction(Function):\n    def process(self, input, context):\n        log = context.get_logger()\n        function_tenant = context.get_function_tenant()\n        function_namespace = context.get_function_namespace()\n        function_name = context.get_function_name()\n        log.info("Function tenant/namespace/name: {0}/{1}/{2}".format(function_tenant, function_namespace, function_name))\n\n'})}),"\n",(0,s.jsx)(e.h3,{id:"go",children:"Go"}),"\n",(0,s.jsx)(e.p,{children:"The following is a Go function example that uses information about its context."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'\nimport (\n\t"context"\n\t"fmt"\n\n    "github.com/apache/pulsar/pulsar-function-go/log"\n\t"github.com/apache/pulsar/pulsar-function-go/pf"\n)\n\nfunc contextFunc(ctx context.Context) {\n\tif fc, ok := pf.FromContext(ctx); ok {\n\t\ttenant := fc.GetFuncTenant()\n\t\tnamespace := fc.GetFuncNamespace()\n\t\tname := fc.GetFuncName()\n\t\tlog.Info("Function tenant/namespace/name: %s/%s/%s\\n", tenant, namespace, name)\n\t}\n}\n\nfunc main() {\n\tpf.Start(contextFunc)\n}\n\n'})}),"\n",(0,s.jsx)(e.h2,{id:"deployment",children:"Deployment"}),"\n",(0,s.jsx)(e.p,{children:"Pulsar Functions support a variety of deployment options. You can deploy a Pulsar Function in the following ways."}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Deployment mode"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:(0,s.jsx)(e.a,{href:"#local-run-mode",children:"Local run mode"})}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"The function runs in your local environment, for example, on your laptop."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:(0,s.jsx)(e.a,{href:"#cluster-run-mode",children:"Cluster mode"})}),(0,s.jsxs)(e.td,{style:{textAlign:"left"},children:["The function runs ",(0,s.jsx)(e.em,{children:"inside of"})," your Pulsar cluster, on the same machines as your Pulsar ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/reference-terminology#broker",children:"brokers"}),"."]})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"local-run-mode",children:"Local run mode"}),"\n",(0,s.jsxs)(e.p,{children:["If you run a Pulsar Function in the ",(0,s.jsx)(e.strong,{children:"local run"})," mode, you run it on the machine where you run commands(for example, your laptop, an ",(0,s.jsx)(e.a,{href:"https://aws.amazon.com/ec2/",children:"AWS EC2"})," instance). The following example is about the ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/reference-ulsar-admin#localrun",children:(0,s.jsx)(e.code,{children:"localrun"})})," command."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions localrun \\\n  --py myfunc.py \\\n  --classname myfunc.SomeFunction \\\n  --inputs persistent://public/default/input-1 \\\n  --output persistent://public/default/output-1\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["By default, the function connects to a Pulsar cluster running on the same machine, via a local broker service URL of ",(0,s.jsx)(e.code,{children:"pulsar://localhost:6650"}),". If you run a function with the local run mode, and connect it to a non-local Pulsar cluster, specify a different broker URL using the ",(0,s.jsx)(e.code,{children:"--brokerServiceUrl"})," flag. The following is an example."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions localrun \\\n  --broker-service-url pulsar://my-cluster-host:6650 \\\n  # Other function parameters\n\n"})}),"\n",(0,s.jsx)(e.h3,{id:"cluster-mode",children:"Cluster mode"}),"\n",(0,s.jsxs)(e.p,{children:["When you run Pulsar Functions in the ",(0,s.jsx)(e.strong,{children:"cluster mode"}),", the function code is uploaded to a Pulsar broker and runs ",(0,s.jsx)(e.em,{children:"alongside the broker"})," rather than in your ",(0,s.jsx)(e.a,{href:"#local-run-mode",children:"local environment"}),". You can run a function in the cluster mode using the ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/reference-ulsar-admin#create-1",children:(0,s.jsx)(e.code,{children:"create"})})," command.  The following is an example."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions create \\\n  --py myfunc.py \\\n  --classname myfunc.SomeFunction \\\n  --inputs persistent://public/default/input-1 \\\n  --output persistent://public/default/output-1\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["This command uploads ",(0,s.jsx)(e.code,{children:"myfunc.py"})," to Pulsar, which uses the code to start one ",(0,s.jsx)(e.a,{href:"#parallelism",children:"or more"})," instances of the function."]}),"\n",(0,s.jsx)(e.h3,{id:"run-instances-in-parallel",children:"Run instances in parallel"}),"\n",(0,s.jsxs)(e.p,{children:["When you create Pulsar Functions and run in the ",(0,s.jsx)(e.a,{href:"#cluster-mode",children:"cluster mode"}),", only one ",(0,s.jsx)(e.strong,{children:"instance"})," of Pulsar Functions is running by default. However, you can run multiple instances in parallel. Specify the number of instances when you create Pulsar Functions, or update an existing single-instance function with a new parallel factor."]}),"\n",(0,s.jsx)(e.p,{children:"This command, for example, creates and runs a function with 5 instances in parallel."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions create \\\n  --name parallel-fun \\\n  --tenant public \\\n  --namespace default \\\n  --py func.py \\\n  --classname func.ParallelFunction \\\n  --parallelism 5\n\n"})}),"\n",(0,s.jsx)(e.h3,{id:"function-instance-resources",children:"Function instance resources"}),"\n",(0,s.jsxs)(e.p,{children:["When you run Pulsar Functions in the ",(0,s.jsx)(e.a,{href:"#cluster-mode",children:"cluster mode"}),", you can specify the resources that are assigned to each function ",(0,s.jsx)(e.a,{href:"#run-instances-in-parallel",children:"instance"}),"."]}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Resource"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Specified as..."}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Runtimes"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"CPU"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"The number of cores"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Docker (coming soon)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"RAM"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"The number of bytes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Process, Docker"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Disk space"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"The number of bytes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Docker"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"The following example allocates 8 cores, 8 GB of RAM, and 10 GB of disk space to a function."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions create \\\n  --jar target/my-functions.jar \\\n  --classname org.example.functions.MyFunction \\\n  --cpu 8 \\\n  --ram 8589934592 \\\n  --disk 10737418240\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["For more information on resources, see the ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/functions-deploying#resources",children:"Deploying and Managing Pulsar Functions"})," documentation."]}),"\n",(0,s.jsx)(e.h3,{id:"logging",children:"Logging"}),"\n",(0,s.jsxs)(e.p,{children:["Pulsar Functions created using ",(0,s.jsx)(e.a,{href:"#the-pulsar-functions-sdk",children:"Pulsar Functions SDK"})," can send logs to a log topic that you specify as part of the function configuration. The function created using the following command produces all logs on the ",(0,s.jsx)(e.code,{children:"persistent://public/default/my-func-1-log"})," topic."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions create \\\n  --name my-func-1 \\\n  --log-topic persistent://public/default/my-func-1-log \\\n  # Other configs\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["The following is an example of ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/functions-api#java-logging",children:"Java function"})," that logs at different log levels based on the function input."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'\npublic class LoggerFunction implements Function<String, Void> {\n    @Override\n    public Void process(String input, Context context) {\n        Logger LOG = context.getLogger();\n        if (input.length() &lt;= 100) {\n            LOG.info("This string has a length of {}", input);\n        } else {\n            LOG.warn("This string is getting too long! It has {} characters", input);\n        }\n    }\n}\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["The following is an example of ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/functions-api#go-logging",children:"Go function"})," that logs at different log levels based on the function input."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'\nimport (\n\t"context"\n\n\t"github.com/apache/pulsar/pulsar-function-go/log"\n\t"github.com/apache/pulsar/pulsar-function-go/pf"\n)\n\nfunc loggerFunc(ctx context.Context, input []byte) {\n\tif len(input) &lt;= 100 {\n\t\tlog.Infof("This input has a length of: %d", len(input))\n\t} else {\n\t\tlog.Warnf("This input is getting too long! It has {%d} characters", len(input))\n\t}\n}\n\nfunc main() {\n\tpf.Start(loggerFunc)\n}\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["When you use ",(0,s.jsx)(e.code,{children:"logTopic"})," related functionalities in Go Function, import ",(0,s.jsx)(e.code,{children:"github.com/apache/pulsar/pulsar-function-go/log"}),", and you do not have to use the ",(0,s.jsx)(e.code,{children:"getLogger()"})," context object. The approach is different from Java Function and Python Function."]}),"\n",(0,s.jsx)(e.h3,{id:"user-configuration",children:"User configuration"}),"\n",(0,s.jsxs)(e.p,{children:["You can pass arbitrary key-values to Pulsar Functions via the command line (both keys and values must be string). This set of key-values is called the functions ",(0,s.jsx)(e.strong,{children:"user configuration"}),". User configuration must consist of JSON strings."]}),"\n",(0,s.jsx)(e.p,{children:"The following example passes user configuration to a function."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'\n$ bin/pulsar-admin functions create \\\n  --user-config \'{"key-1":"value-1","key-2","value-2"}\' \\\n  # Other configs\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"The following example accesses that configuration map."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:'\npublic class ConfigMapFunction implements Function<String, Void> {\n    @Override\n    public Void process(String input, Context context) {\n        String val1 = context.getUserConfigValue("key1").get();\n        String val2 = context.getUserConfigValue("key2").get();\n        context.getLogger().info("The user-supplied values are {} and {}", val1, val2);\n        return null;\n    }\n}\n\n'})}),"\n",(0,s.jsx)(e.h3,{id:"trigger-pulsar-functions",children:"Trigger Pulsar Functions"}),"\n",(0,s.jsxs)(e.p,{children:["You can ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/functions-deploying#triggering-pulsar-functions",children:"trigger"})," a Pulsar Function running in the ",(0,s.jsx)(e.a,{href:"#cluster-mode",children:"cluster mode"})," with the ",(0,s.jsx)(e.a,{href:"#command-line-interface",children:"command line"}),". When triggering a Pulsar Function, you can pass a specific value to the Function and get the return value ",(0,s.jsx)(e.em,{children:"without"})," creating a client. Triggering is useful for, but not limited to, testing and debugging purposes."]}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.p,{children:["Triggering a function is no different from invoking a function by producing a message on one of the function input topics. The ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/reference-ulsar-admin#trigger",children:(0,s.jsx)(e.code,{children:"pulsar-admin functions trigger"})})," command is a convenient mechanism for sending messages to functions without using the ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/reference-cli-tools#pulsar-client",children:(0,s.jsx)(e.code,{children:"pulsar-client"})})," tool or a language-specific client library."]})}),"\n",(0,s.jsxs)(e.p,{children:["The following is an example of Pulsar Functions written in Python (using the ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/functions-api#python-native-functions",children:"native interface"}),") that simply reverses string inputs."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"\ndef process(input):\n    return input[::-1]\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"If the function is running in a Pulsar cluster, you can trigger it with the following commands."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'\n$ bin/pulsar-admin functions trigger \\\n  --tenant public \\\n  --namespace default \\\n  --name reverse-func \\\n  --trigger-value "snoitcnuf raslup ot emoclew"\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["And then ",(0,s.jsx)(e.code,{children:"welcome to Pulsar Functions"})," is displayed in the console output."]}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.p,{children:["Instead of passing a string via the CLI, you can trigger Pulsar Functions with the contents of a file using the ",(0,s.jsx)(e.code,{children:"--triggerFile"})," flag."]})}),"\n",(0,s.jsx)(e.h2,{id:"processing-guarantees",children:"Processing guarantees"}),"\n",(0,s.jsx)(e.p,{children:"Pulsar Functions provide three different messaging semantics that you can apply to any function."}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Delivery semantics"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{style:{textAlign:"left"},children:[(0,s.jsx)(e.strong,{children:"At-most-once"})," delivery"]}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:'Each message sent to the function is likely to be processed, or not to be processed (hence "at most").'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{style:{textAlign:"left"},children:[(0,s.jsx)(e.strong,{children:"At-least-once"})," delivery"]}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:'Each message sent to the function can be processed more than once (hence the "at least").'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{style:{textAlign:"left"},children:[(0,s.jsx)(e.strong,{children:"Effectively-once"})," delivery"]}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Each message sent to the function will have one output associated with it."})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:["This command, for example, runs a function in the ",(0,s.jsx)(e.a,{href:"#cluster-mode",children:"cluster mode"})," with effectively-once guarantees applied."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"\n$ bin/pulsar-admin functions create \\\n  --name my-effectively-once-function \\\n  --processing-guarantees EFFECTIVELY_ONCE \\\n  # Other function configs\n\n"})}),"\n",(0,s.jsx)(e.h2,{id:"metrics",children:"Metrics"}),"\n",(0,s.jsxs)(e.p,{children:["Pulsar Functions that use ",(0,s.jsx)(e.a,{href:"#the-pulsar-functions-sdk",children:"Pulsar Functions SDK"})," can publish metrics to Pulsar. For more information, see ",(0,s.jsx)(e.a,{href:"/docs/2.4.0/functions-metrics",children:"Metrics for Pulsar Functions"}),"."]}),"\n",(0,s.jsx)(e.h2,{id:"state-storage",children:"State storage"}),"\n",(0,s.jsxs)(e.p,{children:["Pulsar Functions use ",(0,s.jsx)(e.a,{href:"https://bookkeeper.apache.org",children:"Apache BookKeeper"})," as a state storage interface. Pulsar installation, including the local standalone installation, includes deployment of BookKeeper bookies."]})]})}function d(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},92086:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/pulsar-functions-overview-9d39ad7e0ec566e6ed2ee7cdf9717963.png"},14160:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/pulsar-functions-routing-example-22b3f2b036505ad4d4dfd5f878de3ae3.png"},93285:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/pulsar-functions-word-count-f7b0d99f0a0e03e0b20fd0aa0ff6ef48.png"},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>r});var i=t(96540);const s={},a=i.createContext(s);function o(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);