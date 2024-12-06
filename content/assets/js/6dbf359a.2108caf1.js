"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9219],{54041:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"window-functions-context","title":"Window Functions Context","description":"Java SDK provides access to a window context object that can be used by a window function. This context object provides a wide variety of information and functionality for Pulsar window functions as below.","source":"@site/versioned_docs/version-2.3.1/window-functions-context.md","sourceDirName":".","slug":"/window-functions-context","permalink":"/docs/2.3.1/window-functions-context","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.1/window-functions-context.md","tags":[],"version":"2.3.1","frontMatter":{"id":"window-functions-context","title":"Window Functions Context","sidebar_label":"Window Functions: Context","original_id":"window-functions-context"},"sidebar":"docsSidebar","previous":{"title":"Metrics","permalink":"/docs/2.3.1/functions-metrics"},"next":{"title":"Overview","permalink":"/docs/2.3.1/io-overview"}}');var o=t(74848),s=t(28453);const c={id:"window-functions-context",title:"Window Functions Context",sidebar_label:"Window Functions: Context",original_id:"window-functions-context"},r=void 0,a={},l=[{value:"Spec",id:"spec",level:2},{value:"Get input topics",id:"get-input-topics",level:3},{value:"Get output topic",id:"get-output-topic",level:3},{value:"Get tenant",id:"get-tenant",level:3},{value:"Get namespace",id:"get-namespace",level:3},{value:"Get function name",id:"get-function-name",level:3},{value:"Get function ID",id:"get-function-id",level:3},{value:"Get function version",id:"get-function-version",level:3},{value:"Get instance ID",id:"get-instance-id",level:3},{value:"Get num instances",id:"get-num-instances",level:3},{value:"Get output schema type",id:"get-output-schema-type",level:3},{value:"Logger",id:"logger",level:2},{value:"Metrics",id:"metrics",level:2},{value:"User config",id:"user-config",level:2},{value:"API",id:"api",level:3},{value:"getUserConfigMap",id:"getuserconfigmap",level:4},{value:"getUserConfigValue",id:"getuserconfigvalue",level:4},{value:"getUserConfigValueOrDefault",id:"getuserconfigvalueordefault",level:4},{value:"Routing",id:"routing",level:2},{value:"State storage",id:"state-storage",level:2},{value:"incrCounter",id:"incrcounter",level:4},{value:"getCounter",id:"getcounter",level:4},{value:"putState",id:"putstate",level:4}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["Java SDK provides access to a ",(0,o.jsx)(e.strong,{children:"window context object"})," that can be used by a window function. This context object provides a wide variety of information and functionality for Pulsar window functions as below."]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"#spec",children:"Spec"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Names of all input topics and the output topic associated with the function."}),"\n",(0,o.jsx)(e.li,{children:"Tenant and namespace associated with the function."}),"\n",(0,o.jsx)(e.li,{children:"Pulsar window function name, ID, and version."}),"\n",(0,o.jsx)(e.li,{children:"ID of the Pulsar function instance running the window function."}),"\n",(0,o.jsx)(e.li,{children:"Number of instances that invoke the window function."}),"\n",(0,o.jsx)(e.li,{children:"Built-in type or custom class name of the output schema."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"#logger",children:"Logger"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Logger object used by the window function, which can be used to create window function log messages."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"#user-config",children:"User config"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Access to arbitrary user configuration values."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"#routing",children:"Routing"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Routing is supported in Pulsar window functions. Pulsar window functions send messages to arbitrary topics as per the ",(0,o.jsx)(e.code,{children:"publish"})," interface."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"#metrics",children:"Metrics"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Interface for recording metrics."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"#state-storage",children:"State storage"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Interface for storing and retrieving state in ",(0,o.jsx)(e.a,{href:"#state-storage",children:"state storage"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"spec",children:"Spec"}),"\n",(0,o.jsx)(e.p,{children:"Spec contains the basic information of a function."}),"\n",(0,o.jsx)(e.h3,{id:"get-input-topics",children:"Get input topics"}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"getInputTopics"})," method gets the ",(0,o.jsx)(e.strong,{children:"name list"})," of all input topics."]}),"\n",(0,o.jsx)(e.p,{children:"This example demonstrates how to get the name list of all input topics in a Java window function."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"\npublic class GetInputTopicsWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        Collection<String> inputTopics = context.getInputTopics();\n        System.out.println(inputTopics);\n\n        return null;\n    }\n\n}\n\n"})}),"\n",(0,o.jsx)(e.h3,{id:"get-output-topic",children:"Get output topic"}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"getOutputTopic"})," method gets the ",(0,o.jsx)(e.strong,{children:"name of a topic"})," to which the message is sent."]}),"\n",(0,o.jsx)(e.p,{children:"This example demonstrates how to get the name of an output topic in a Java window function."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"\npublic class GetOutputTopicWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String outputTopic = context.getOutputTopic();\n        System.out.println(outputTopic);\n\n        return null;\n    }\n}\n\n"})}),"\n",(0,o.jsx)(e.h3,{id:"get-tenant",children:"Get tenant"}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"getTenant"})," method gets the tenant name associated with the window function."]}),"\n",(0,o.jsx)(e.p,{children:"This example demonstrates how to get the tenant name in a Java window function."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"\npublic class GetTenantWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String tenant = context.getTenant();\n        System.out.println(tenant);\n\n        return null;\n    }\n\n}\n\n"})}),"\n",(0,o.jsx)(e.h3,{id:"get-namespace",children:"Get namespace"}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"getNamespace"})," method gets the namespace associated with the window function."]}),"\n",(0,o.jsx)(e.p,{children:"This example demonstrates how to get the namespace in a Java window function."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"\npublic class GetNamespaceWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String ns = context.getNamespace();\n        System.out.println(ns);\n\n        return null;\n    }\n\n}\n\n"})}),"\n",(0,o.jsx)(e.h3,{id:"get-function-name",children:"Get function name"}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"getFunctionName"})," method gets the window function name."]}),"\n",(0,o.jsx)(e.p,{children:"This example demonstrates how to get the function name in a Java window function."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"\npublic class GetNameOfWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String functionName = context.getFunctionName();\n        System.out.println(functionName);\n\n        return null;\n    }\n\n}\n\n"})}),"\n",(0,o.jsx)(e.h3,{id:"get-function-id",children:"Get function ID"}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"getFunctionId"})," method gets the window function ID."]}),"\n",(0,o.jsx)(e.p,{children:"This example demonstrates how to get the function ID in a Java window function."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"\npublic class GetFunctionIDWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String functionID = context.getFunctionId();\n        System.out.println(functionID);\n\n        return null;\n    }\n\n}\n\n"})}),"\n",(0,o.jsx)(e.h3,{id:"get-function-version",children:"Get function version"}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"getFunctionVersion"})," method gets the window function version."]}),"\n",(0,o.jsx)(e.p,{children:"This example demonstrates how to get the function version of a Java window function."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"\npublic class GetVersionOfWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String functionVersion = context.getFunctionVersion();\n        System.out.println(functionVersion);\n\n        return null;\n    }\n\n}\n\n"})}),"\n",(0,o.jsx)(e.h3,{id:"get-instance-id",children:"Get instance ID"}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"getInstanceId"})," method gets the instance ID of a window function."]}),"\n",(0,o.jsx)(e.p,{children:"This example demonstrates how to get the instance ID in a Java window function."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"\npublic class GetInstanceIDWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        int instanceId = context.getInstanceId();\n        System.out.println(instanceId);\n\n        return null;\n    }\n\n}\n\n"})}),"\n",(0,o.jsx)(e.h3,{id:"get-num-instances",children:"Get num instances"}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"getNumInstances"})," method gets the number of instances that invoke the window function."]}),"\n",(0,o.jsx)(e.p,{children:"This example demonstrates how to get the number of instances in a Java window function."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"\npublic class GetNumInstancesWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        int numInstances = context.getNumInstances();\n        System.out.println(numInstances);\n\n        return null;\n    }\n\n}\n\n"})}),"\n",(0,o.jsx)(e.h3,{id:"get-output-schema-type",children:"Get output schema type"}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"getOutputSchemaType"})," method gets the built-in type or custom class name of the output schema."]}),"\n",(0,o.jsx)(e.p,{children:"This example demonstrates how to get the output schema type of a Java window function."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"\npublic class GetOutputSchemaTypeWindowFunction implements WindowFunction<String, Void> {\n\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        String schemaType = context.getOutputSchemaType();\n        System.out.println(schemaType);\n\n        return null;\n    }\n}\n\n"})}),"\n",(0,o.jsx)(e.h2,{id:"logger",children:"Logger"}),"\n",(0,o.jsxs)(e.p,{children:["Pulsar window functions using Java SDK has access to an ",(0,o.jsx)(e.a,{href:"https://www.slf4j.org/",children:"SLF4j"})," ",(0,o.jsx)(e.a,{href:"https://www.slf4j.org/api/org/apache/log4j/Logger.html",children:(0,o.jsx)(e.code,{children:"Logger"})})," object that can be used to produce logs at the chosen log level."]}),"\n",(0,o.jsxs)(e.p,{children:["This example logs either a ",(0,o.jsx)(e.code,{children:"WARNING"}),"-level or ",(0,o.jsx)(e.code,{children:"INFO"}),"-level log based on whether the incoming string contains the word ",(0,o.jsx)(e.code,{children:"danger"})," or not in a Java function."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:'\nimport java.util.Collection;\nimport org.apache.pulsar.functions.api.Record;\nimport org.apache.pulsar.functions.api.WindowContext;\nimport org.apache.pulsar.functions.api.WindowFunction;\nimport org.slf4j.Logger;\n\npublic class LoggingWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        Logger log = context.getLogger();\n        for (Record<String> record : inputs) {\n            log.info(record + "-window-log");\n        }\n        return null;\n    }\n\n}\n\n'})}),"\n",(0,o.jsx)(e.p,{children:"If you need your function to produce logs, specify a log topic when creating or running the function."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"\nbin/pulsar-admin functions create \\\n  --jar my-functions.jar \\\n  --classname my.package.LoggingFunction \\\n  --log-topic persistent://public/default/logging-function-logs \\\n  # Other function configs\n\n"})}),"\n",(0,o.jsxs)(e.p,{children:["You can access all logs produced by ",(0,o.jsx)(e.code,{children:"LoggingFunction"})," via the ",(0,o.jsx)(e.code,{children:"persistent://public/default/logging-function-logs"})," topic."]}),"\n",(0,o.jsx)(e.h2,{id:"metrics",children:"Metrics"}),"\n",(0,o.jsx)(e.p,{children:"Pulsar window functions can publish arbitrary metrics to the metrics interface which can be queried."}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"If a Pulsar window function uses the language-native interface for Java, that function is not able to publish metrics and stats to Pulsar."})}),"\n",(0,o.jsx)(e.p,{children:"You can record metrics using the context object on a per-key basis."}),"\n",(0,o.jsxs)(e.p,{children:["This example sets a metric for the ",(0,o.jsx)(e.code,{children:"process-count"})," key and a different metric for the ",(0,o.jsx)(e.code,{children:"elevens-count"})," key every time the function processes a message in a Java function."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:'\nimport java.util.Collection;\nimport org.apache.pulsar.functions.api.Record;\nimport org.apache.pulsar.functions.api.WindowContext;\nimport org.apache.pulsar.functions.api.WindowFunction;\n\n\n/**\n * Example function that wants to keep track of\n * the event time of each message sent.\n */\npublic class UserMetricWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n\n        for (Record<String> record : inputs) {\n            if (record.getEventTime().isPresent()) {\n                context.recordMetric("MessageEventTime", record.getEventTime().get().doubleValue());\n            }\n        }\n\n        return null;\n    }\n}\n\n'})}),"\n",(0,o.jsx)(e.h2,{id:"user-config",children:"User config"}),"\n",(0,o.jsxs)(e.p,{children:["When you run or update Pulsar Functions that are created using SDK, you can pass arbitrary key/value pairs to them with the ",(0,o.jsx)(e.code,{children:"--user-config"})," flag. Key/value pairs ",(0,o.jsx)(e.strong,{children:"must"})," be specified as JSON."]}),"\n",(0,o.jsx)(e.p,{children:"This example passes a user configured key/value to a function."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'\nbin/pulsar-admin functions create \\\n  --name word-filter \\\n --user-config \'{"forbidden-word":"rosebud"}\' \\\n  # Other function configs\n\n'})}),"\n",(0,o.jsx)(e.h3,{id:"api",children:"API"}),"\n",(0,o.jsx)(e.p,{children:"You can use the following APIs to get user-defined information for window functions."}),"\n",(0,o.jsx)(e.h4,{id:"getuserconfigmap",children:"getUserConfigMap"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"getUserConfigMap"})," API gets a map of all user-defined key/value configurations for the window function."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"\n/**\n     * Get a map of all user-defined key/value configs for the function.\n     *\n     * @return The full map of user-defined config values\n     */\n    Map<String, Object> getUserConfigMap();\n\n"})}),"\n",(0,o.jsx)(e.h4,{id:"getuserconfigvalue",children:"getUserConfigValue"}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"getUserConfigValue"})," API gets a user-defined key/value."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"\n/**\n     * Get any user-defined key/value.\n     *\n     * @param key The key\n     * @return The Optional value specified by the user for that key.\n     */\n    Optional<Object> getUserConfigValue(String key);\n\n"})}),"\n",(0,o.jsx)(e.h4,{id:"getuserconfigvalueordefault",children:"getUserConfigValueOrDefault"}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"getUserConfigValueOrDefault"})," API gets a user-defined key/value or a default value if none is present."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"\n/**\n     * Get any user-defined key/value or a default value if none is present.\n     *\n     * @param key\n     * @param defaultValue\n     * @return Either the user config value associated with a given key or a supplied default value\n     */\n    Object getUserConfigValueOrDefault(String key, Object defaultValue);\n\n"})}),"\n",(0,o.jsx)(e.p,{children:"This example demonstrates how to access key/value pairs provided to Pulsar window functions."}),"\n",(0,o.jsx)(e.p,{children:"Java SDK context object enables you to access key/value pairs provided to Pulsar window functions via the command line (as JSON)."}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsxs)(e.p,{children:["For all key/value pairs passed to Java window functions, both the ",(0,o.jsx)(e.code,{children:"key"})," and the ",(0,o.jsx)(e.code,{children:"value"})," are ",(0,o.jsx)(e.code,{children:"String"}),". To set the value to be a different type, you need to deserialize it from the ",(0,o.jsx)(e.code,{children:"String"})," type."]})}),"\n",(0,o.jsx)(e.p,{children:"This example passes a key/value pair in a Java window function."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'\nbin/pulsar-admin functions create \\\n   --user-config \'{"word-of-the-day":"verdure"}\' \\\n  # Other function configs\n\n'})}),"\n",(0,o.jsx)(e.p,{children:"This example accesses values in a Java window function."}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"UserConfigFunction"})," function logs the string ",(0,o.jsx)(e.code,{children:'"The word of the day is verdure"'})," every time the function is invoked (which means every time a message arrives). The user config of ",(0,o.jsx)(e.code,{children:"word-of-the-day"})," is changed ",(0,o.jsx)(e.strong,{children:"only"})," when the function is updated with a new config value via\nmultiple ways, such as the command line tool or REST API."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:'\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport org.slf4j.Logger;\n\nimport java.util.Optional;\n\npublic class UserConfigWindowFunction implements WindowFunction<String, String> {\n    @Override\n    public String process(Collection<Record<String>> input, WindowContext context) throws Exception {\n        Optional<Object> whatToWrite = context.getUserConfigValue("WhatToWrite");\n        if (whatToWrite.get() != null) {\n            return (String)whatToWrite.get();\n        } else {\n            return "Not a nice way";\n        }\n    }\n\n}\n\n'})}),"\n",(0,o.jsx)(e.p,{children:"If no value is provided, you can access the entire user config map or set a default value."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:'\n// Get the whole config map\nMap<String, String> allConfigs = context.getUserConfigMap();\n\n// Get value or resort to default\nString wotd = context.getUserConfigValueOrDefault("word-of-the-day", "perspicacious");\n\n'})}),"\n",(0,o.jsx)(e.h2,{id:"routing",children:"Routing"}),"\n",(0,o.jsxs)(e.p,{children:["You can use the ",(0,o.jsx)(e.code,{children:"context.publish()"})," interface to publish as many results as you want."]}),"\n",(0,o.jsxs)(e.p,{children:["This example shows that the ",(0,o.jsx)(e.code,{children:"PublishFunction"})," class uses the built-in function in the context to publish messages to the ",(0,o.jsx)(e.code,{children:"publishTopic"})," in a Java function."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:'\npublic class PublishWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> input, WindowContext context) throws Exception {\n        String publishTopic = (String) context.getUserConfigValueOrDefault("publish-topic", "publishtopic");\n        String output = String.format("%s!", input);\n        context.publish(publishTopic, output);\n\n        return null;\n    }\n\n}\n\n'})}),"\n",(0,o.jsx)(e.h2,{id:"state-storage",children:"State storage"}),"\n",(0,o.jsxs)(e.p,{children:["Pulsar window functions use ",(0,o.jsx)(e.a,{href:"https://bookkeeper.apache.org",children:"Apache BookKeeper"})," as a state storage interface. Apache Pulsar installation (including the standalone installation) includes the deployment of BookKeeper bookies."]}),"\n",(0,o.jsxs)(e.p,{children:["Apache Pulsar integrates with Apache BookKeeper ",(0,o.jsx)(e.code,{children:"table service"})," to store the ",(0,o.jsx)(e.code,{children:"state"})," for functions. For example, the ",(0,o.jsx)(e.code,{children:"WordCount"})," function can store its ",(0,o.jsx)(e.code,{children:"counters"})," state into BookKeeper table service via Pulsar Functions state APIs."]}),"\n",(0,o.jsx)(e.p,{children:"States are key-value pairs, where the key is a string and the value is arbitrary binary data\u2014counters are stored as 64-bit big-endian binary values. Keys are scoped to an individual Pulsar Function and shared between instances of that function."}),"\n",(0,o.jsx)(e.p,{children:"Currently, Pulsar window functions expose Java API to access, update, and manage states. These APIs are available in the context object when you use Java SDK functions."}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Java API"}),(0,o.jsx)(e.th,{children:"Description"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:(0,o.jsx)(e.code,{children:"incrCounter"})}),(0,o.jsx)(e.td,{children:"Increases a built-in distributed counter referred by key."})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:(0,o.jsx)(e.code,{children:"getCounter"})}),(0,o.jsx)(e.td,{children:"Gets the counter value for the key."})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:(0,o.jsx)(e.code,{children:"putState"})}),(0,o.jsx)(e.td,{children:"Updates the state value for the key."})]})]})]}),"\n",(0,o.jsx)(e.p,{children:"You can use the following APIs to access, update, and manage states in Java window functions."}),"\n",(0,o.jsx)(e.h4,{id:"incrcounter",children:"incrCounter"}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"incrCounter"})," API increases a built-in distributed counter referred by key."]}),"\n",(0,o.jsxs)(e.p,{children:["Applications use the ",(0,o.jsx)(e.code,{children:"incrCounter"})," API to change the counter of a given ",(0,o.jsx)(e.code,{children:"key"})," by the given ",(0,o.jsx)(e.code,{children:"amount"}),". If the ",(0,o.jsx)(e.code,{children:"key"})," does not exist, a new key is created."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"\n    /**\n     * Increment the builtin distributed counter referred by key\n     * @param key The name of the key\n     * @param amount The amount to be incremented\n     */\n    void incrCounter(String key, long amount);\n\n"})}),"\n",(0,o.jsx)(e.h4,{id:"getcounter",children:"getCounter"}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"getCounter"})," API gets the counter value for the key."]}),"\n",(0,o.jsxs)(e.p,{children:["Applications uses the ",(0,o.jsx)(e.code,{children:"getCounter"})," API to retrieve the counter of a given ",(0,o.jsx)(e.code,{children:"key"})," changed by the ",(0,o.jsx)(e.code,{children:"incrCounter"})," API."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"\n    /**\n     * Retrieve the counter value for the key.\n     *\n     * @param key name of the key\n     * @return the amount of the counter value for this key\n     */\n    long getCounter(String key);\n\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Except the ",(0,o.jsx)(e.code,{children:"getCounter"})," API, Pulsar also exposes a general key/value API (",(0,o.jsx)(e.code,{children:"putState"}),") for functions to store general key/value state."]}),"\n",(0,o.jsx)(e.h4,{id:"putstate",children:"putState"}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"putState"})," API updates the state value for the key."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"\n    /**\n     * Update the state value for the key.\n     *\n     * @param key name of the key\n     * @param value state value of the key\n     */\n    void putState(String key, ByteBuffer value);\n\n"})}),"\n",(0,o.jsx)(e.p,{children:"This example demonstrates how applications store states in Pulsar window functions."}),"\n",(0,o.jsxs)(e.p,{children:["The logic of the ",(0,o.jsx)(e.code,{children:"WordCountWindowFunction"})," is simple and straightforward."]}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["The function first splits the received string into multiple words using regex ",(0,o.jsx)(e.code,{children:"\\\\."}),"."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["For each ",(0,o.jsx)(e.code,{children:"word"}),", the function increments the corresponding ",(0,o.jsx)(e.code,{children:"counter"})," by 1 via ",(0,o.jsx)(e.code,{children:"incrCounter(key, amount)"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:'\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\n\nimport java.util.Arrays;\n\npublic class WordCountWindowFunction implements WindowFunction<String, Void> {\n    @Override\n    public Void process(Collection<Record<String>> inputs, WindowContext context) throws Exception {\n        for (Record<String> input : inputs) {\n            Arrays.asList(input.getValue().split("\\\\.")).forEach(word -> context.incrCounter(word, 1));\n        }\n        return null;\n\n    }\n}\n\n'})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>r});var i=t(96540);const o={},s=i.createContext(o);function c(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);