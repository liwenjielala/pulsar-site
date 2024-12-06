"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[47700],{16019:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"functions-cli","title":"Pulsar Functions CLI and YAML configs","description":"Get a comprehensive understanding of admin CLI and YAML configurations for Pulsar Functions","source":"@site/versioned_docs/version-3.3.x/functions-cli.md","sourceDirName":".","slug":"/functions-cli","permalink":"/docs/3.3.x/functions-cli","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/functions-cli.md","tags":[],"version":"3.3.x","frontMatter":{"id":"functions-cli","title":"Pulsar Functions CLI and YAML configs","sidebar_label":"CLI and YAML configs","description":"Get a comprehensive understanding of admin CLI and YAML configurations for Pulsar Functions"},"sidebar":"docsSidebar","previous":{"title":"Package Go Functions","permalink":"/docs/3.3.x/functions-package-go"},"next":{"title":"Window Functions: Context","permalink":"/docs/3.3.x/window-functions-context"}}');var r=s(74848),i=s(28453),d=s(89089),c=s(19365);const l={id:"functions-cli",title:"Pulsar Functions CLI and YAML configs",sidebar_label:"CLI and YAML configs",description:"Get a comprehensive understanding of admin CLI and YAML configurations for Pulsar Functions"},o=void 0,a={},h=[{value:"Pulsar admin CLI for Pulsar Functions",id:"pulsar-admin-cli-for-pulsar-functions",level:2},{value:"YAML configurations for Pulsar Functions",id:"yaml-configurations-for-pulsar-functions",level:2},{value:"ConsumerConfig",id:"consumerconfig",level:5},{value:"ProducerConfig",id:"producerconfig",level:5},{value:"Resources",id:"resources",level:6},{value:"WindowConfig",id:"windowconfig",level:6},{value:"CryptoConfig",id:"cryptoconfig",level:6},{value:"Example",id:"example",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h5:"h5",h6:"h6",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"pulsar-admin-cli-for-pulsar-functions",children:"Pulsar admin CLI for Pulsar Functions"}),"\n",(0,r.jsxs)(n.p,{children:["The Pulsar admin interface enables you to create and manage Pulsar Functions through CLI. For the latest and complete information, including commands, flags, and descriptions, refer to ",(0,r.jsx)(n.a,{href:"pathname:///reference/#/3.3.x/pulsar-admin/",children:"Pulsar admin CLI"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"yaml-configurations-for-pulsar-functions",children:"YAML configurations for Pulsar Functions"}),"\n",(0,r.jsx)(n.p,{children:"You can configure a function by using a predefined YAML file. The following table outlines the required fields and arguments."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Related Command Argument"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"runtimeFlags"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"Any flags that you want to pass to a runtime (for process & Kubernetes runtime only)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tenant"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--tenant"})}),(0,r.jsx)(n.td,{children:"The tenant of a function."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"namespace"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--namespace"})}),(0,r.jsx)(n.td,{children:"The namespace of a function."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"name"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--name"})}),(0,r.jsx)(n.td,{children:"The name of a function."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"className"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--classname"})}),(0,r.jsx)(n.td,{children:"The class name of a function."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"functionType"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--function-type"})}),(0,r.jsx)(n.td,{children:"The built-in function type."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"inputs"}),(0,r.jsx)(n.td,{children:"List<String>"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"-i"}),", ",(0,r.jsx)(n.code,{children:"--inputs"})]}),(0,r.jsx)(n.td,{children:"The input topics of a function. Multiple topics can be specified as a comma-separated list."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"customSerdeInputs"}),(0,r.jsx)(n.td,{children:"Map<String,String>"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--custom-serde-inputs"})}),(0,r.jsx)(n.td,{children:"The mapping from input topics to SerDe class names."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"topicsPattern"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--topics-pattern"})}),(0,r.jsxs)(n.td,{children:["The topic pattern to consume from a list of topics under a namespace. ",(0,r.jsx)("br",{}),(0,r.jsx)(n.strong,{children:"Note:"})," ",(0,r.jsx)(n.code,{children:"--input"})," and ",(0,r.jsx)(n.code,{children:"--topic-pattern"})," are mutually exclusive. For Java functions, you need to add the SerDe class name for a pattern in ",(0,r.jsx)(n.code,{children:"--custom-serde-inputs"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"customSchemaInputs"}),(0,r.jsx)(n.td,{children:"Map<String,String>"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--custom-schema-inputs"})}),(0,r.jsx)(n.td,{children:"The mapping from input topics to schema properties."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"customSchemaOutputs"}),(0,r.jsx)(n.td,{children:"Map<String,String>"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--custom-schema-outputs"})}),(0,r.jsx)(n.td,{children:"The mapping from output topics to schema properties."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"inputSpecs"}),(0,r.jsxs)(n.td,{children:["Map<String,",(0,r.jsx)(n.a,{href:"#consumerconfig",children:"ConsumerConfig"}),">"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--input-specs"})}),(0,r.jsx)(n.td,{children:"The mapping from inputs to custom configurations."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"output"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"-o"}),", ",(0,r.jsx)(n.code,{children:"--output"})]}),(0,r.jsx)(n.td,{children:"The output topic of a function. If none is specified, no output is written."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"producerConfig"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#producerconfig",children:"ProducerConfig"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--producer-config"})}),(0,r.jsx)(n.td,{children:"The custom configurations for producers."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"outputSchemaType"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"-st"}),", ",(0,r.jsx)(n.code,{children:"--schema-type"})]}),(0,r.jsx)(n.td,{children:"The built-in schema type or custom schema class name used for message outputs."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"outputSerdeClassName"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--output-serde-classname"})}),(0,r.jsx)(n.td,{children:"The SerDe class used for message outputs."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"logTopic"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--log-topic"})}),(0,r.jsx)(n.td,{children:"The topic that the logs of a function are produced to."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"processingGuarantees"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--processing-guarantees"})}),(0,r.jsxs)(n.td,{children:["The processing guarantees (delivery semantics) applied to a function. Available values: ",(0,r.jsx)(n.code,{children:"ATLEAST_ONCE"}),", ",(0,r.jsx)(n.code,{children:"ATMOST_ONCE"}),", ",(0,r.jsx)(n.code,{children:"EFFECTIVELY_ONCE"}),", ",(0,r.jsx)(n.code,{children:"MANUAL"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"retainOrdering"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--retain-ordering"})}),(0,r.jsx)(n.td,{children:"Whether functions consume and process messages in order or not."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"retainKeyOrdering"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--retain-key-ordering"})}),(0,r.jsx)(n.td,{children:"Whether functions consume and process messages in key order or not."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"batchBuilder"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--batch-builder"})}),(0,r.jsxs)(n.td,{children:["Use ",(0,r.jsx)(n.code,{children:"producerConfig.batchBuilder"})," instead. ",(0,r.jsx)("br",{}),(0,r.jsx)(n.strong,{children:"Note"}),": ",(0,r.jsx)(n.code,{children:"batchBuilder"})," will be deprecated in code soon."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"forwardSourceMessageProperty"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--forward-source-message-property"})}),(0,r.jsxs)(n.td,{children:["Whether the properties of input messages are forwarded to output topics or not during processing. When the value is set to ",(0,r.jsx)(n.code,{children:"false"}),", the forwarding is disabled."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userConfig"}),(0,r.jsx)(n.td,{children:"Map<String,Object>"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--user-config"})}),(0,r.jsx)(n.td,{children:"User-defined config key/values."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secrets"}),(0,r.jsx)(n.td,{children:"Map<String,Object>"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--secrets"})}),(0,r.jsx)(n.td,{children:"The mapping from secretName to objects that encapsulate how the secret is fetched by the underlying secrets provider."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"runtime"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsxs)(n.td,{children:["The runtime of a function. Available values: ",(0,r.jsx)(n.code,{children:"java"}),",",(0,r.jsx)(n.code,{children:"python"}),", ",(0,r.jsx)(n.code,{children:"go"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"autoAck"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--auto-ack"})}),(0,r.jsxs)(n.td,{children:["Whether the framework acknowledges messages automatically or not. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(n.strong,{children:"Note"}),": This configuration will be deprecated in future releases. If you specify a delivery semantic, the framework automatically acknowledges messages. If you do not want the framework to auto-ack messages, set the ",(0,r.jsx)(n.code,{children:"processingGuarantees"})," to ",(0,r.jsx)(n.code,{children:"MANUAL"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxMessageRetries"}),(0,r.jsx)(n.td,{children:"Int"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--max-message-retries"})}),(0,r.jsx)(n.td,{children:"The number of retries to process a message before giving up."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"deadLetterTopic"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--dead-letter-topic"})}),(0,r.jsx)(n.td,{children:"The topic used for storing messages that are not processed successfully."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"subName"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--subs-name"})}),(0,r.jsx)(n.td,{children:"The name of Pulsar source subscription used for input-topic consumers if required."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"parallelism"}),(0,r.jsx)(n.td,{children:"Int"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--parallelism"})}),(0,r.jsx)(n.td,{children:"The parallelism factor of a function, that is, the number of function instances to run."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resources"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#resources",children:"Resources"})}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"N/A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fqfn"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--fqfn"})}),(0,r.jsx)(n.td,{children:"The Fully Qualified Function Name (FQFN) of a function."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"windowConfig"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#windowconfig",children:"WindowConfig"})}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"N/A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timeoutMs"}),(0,r.jsx)(n.td,{children:"Long"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--timeout-ms"})}),(0,r.jsx)(n.td,{children:"The message timeout (in milliseconds)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"jar"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--jar"})}),(0,r.jsx)(n.td,{children:"The absolute path of the JAR file for a function (written in Java). It also supports URL paths that workers can download the package from, including HTTP, HTTPS, file (file protocol assuming that file already exists on worker host), and function (package URL from packages management service)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"py"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--py"})}),(0,r.jsx)(n.td,{children:"The absolute path of the main Python/Python wheel file for a function (written in Python). It also supports URL paths that workers can download the package from, including HTTP, HTTPS, file (file protocol assuming that file already exists on worker host), and function (package URL from packages management service)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"go"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--go"})}),(0,r.jsx)(n.td,{children:"The absolute path of the main Go executable binary for the function (written in Go).  It also supports URL paths that workers can download the package from, including HTTP, HTTPS, file (file protocol assuming that file already exists on worker host), and function (package URL from packages management service)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cleanupSubscription"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--cleanup-subscription"})}),(0,r.jsxs)(n.td,{children:["Whether the subscriptions that a function creates or uses should be deleted or not when the function is deleted. The default value is ",(0,r.jsx)(n.code,{children:"true"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"customRuntimeOptions"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--custom-runtime-options"})}),(0,r.jsx)(n.td,{children:"A string that encodes options to customize the runtime."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxPendingAsyncRequests"}),(0,r.jsx)(n.td,{children:"Int"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--max-message-retries"})}),(0,r.jsx)(n.td,{children:"The max number of pending async requests per instance to avoid a large number of concurrent requests."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"exposePulsarAdminClientEnabled"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"Whether the Pulsar admin client is exposed to function context or not. By default, it is disabled."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"subscriptionPosition"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--subs-position"})}),(0,r.jsxs)(n.td,{children:["The position of Pulsar source subscription used for consuming messages from a specified location. The default value is ",(0,r.jsx)(n.code,{children:"Latest"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"skipToLatest"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--skip-to-latest"})}),(0,r.jsx)(n.td,{children:"Whether the consumer should skip to the latest message once the function instance restarts."})]})]})]}),"\n",(0,r.jsx)(n.h5,{id:"consumerconfig",children:"ConsumerConfig"}),"\n",(0,r.jsxs)(n.p,{children:["The following table outlines the nested fields and related arguments under the ",(0,r.jsx)(n.code,{children:"inputSpecs"})," field."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Related Command Argument"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"schemaType"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"N/A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"serdeClassName"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"N/A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"isRegexPattern"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"N/A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"schemaProperties"}),(0,r.jsx)(n.td,{children:"Map<String,String>"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"N/A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"consumerProperties"}),(0,r.jsx)(n.td,{children:"Map<String,String>"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"N/A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"receiverQueueSize"}),(0,r.jsx)(n.td,{children:"Int"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"N/A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cryptoConfig"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#cryptoconfig",children:"CryptoConfig"})}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsxs)(n.td,{children:["Refer to ",(0,r.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin-api/src/main/java/org/apache/pulsar/common/functions/CryptoConfig.java",children:"code"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"poolMessages"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"N/A"})]})]})]}),"\n",(0,r.jsx)(n.h5,{id:"producerconfig",children:"ProducerConfig"}),"\n",(0,r.jsxs)(n.p,{children:["The following table outlines the nested fields and related arguments under the ",(0,r.jsx)(n.code,{children:"producerConfig"})," field."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Related Command Argument"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxPendingMessages"}),(0,r.jsx)(n.td,{children:"Int"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"The max size of a queue that holds messages pending to receive an acknowledgment from a broker."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxPendingMessagesAcrossPartitions"}),(0,r.jsx)(n.td,{children:"Int"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsxs)(n.td,{children:["The number of ",(0,r.jsx)(n.code,{children:"maxPendingMessages"})," across all partitions."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"useThreadLocalProducers"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"N/A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cryptoConfig"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#cryptoconfig",children:"CryptoConfig"})}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsxs)(n.td,{children:["Refer to ",(0,r.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin-api/src/main/java/org/apache/pulsar/common/functions/CryptoConfig.java",children:"code"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"batchBuilder"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--batch-builder"})}),(0,r.jsxs)(n.td,{children:["The type of batch construction method. Available values: ",(0,r.jsx)(n.code,{children:"DEFAULT"})," and ",(0,r.jsx)(n.code,{children:"KEY_BASED"}),". The default value is ",(0,r.jsx)(n.code,{children:"DEFAULT"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"compressionType"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsxs)(n.td,{children:["Message data compression type used by a producer. The default value is ",(0,r.jsx)(n.a,{href:"https://github.com/lz4/lz4",children:(0,r.jsx)(n.code,{children:"LZ4"})}),". ",(0,r.jsx)("br",{}),"Available options:",(0,r.jsxs)("li",{children:[(0,r.jsx)(n.code,{children:"NONE"})," (no compression)"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(n.a,{href:"https://zlib.net/",children:(0,r.jsx)(n.code,{children:"ZLIB"})}),(0,r.jsx)("br",{})]}),(0,r.jsx)("li",{children:(0,r.jsx)(n.a,{href:"https://facebook.github.io/zstd/",children:(0,r.jsx)(n.code,{children:"ZSTD"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.a,{href:"https://google.github.io/snappy/",children:(0,r.jsx)(n.code,{children:"SNAPPY"})})})]})]})]})]}),"\n",(0,r.jsx)(n.h6,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)(n.p,{children:["The following table outlines the nested fields and related arguments under the ",(0,r.jsx)(n.code,{children:"resources"})," field."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Related Command Argument"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cpu"}),(0,r.jsx)(n.td,{children:"double"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--cpu"})}),(0,r.jsx)(n.td,{children:"The CPU in cores that need to be allocated per function instance (for Kubernetes runtime only)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ram"}),(0,r.jsx)(n.td,{children:"Long"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--ram"})}),(0,r.jsx)(n.td,{children:"The RAM in bytes that need to be allocated per function instance (for process/Kubernetes runtime only)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"disk"}),(0,r.jsx)(n.td,{children:"Long"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--disk"})}),(0,r.jsx)(n.td,{children:"The disk in bytes that need to be allocated per function instance (for Kubernetes runtime only)."})]})]})]}),"\n",(0,r.jsx)(n.h6,{id:"windowconfig",children:"WindowConfig"}),"\n",(0,r.jsxs)(n.p,{children:["The following table outlines the nested fields and related arguments under the ",(0,r.jsx)(n.code,{children:"windowConfig"})," field."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Related Command Argument"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"windowLengthCount"}),(0,r.jsx)(n.td,{children:"Int"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--window-length-count"})}),(0,r.jsx)(n.td,{children:"The number of messages per window."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"windowLengthDurationMs"}),(0,r.jsx)(n.td,{children:"Long"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--window-length-duration-ms"})}),(0,r.jsx)(n.td,{children:"The time duration (in milliseconds) per window."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"slidingIntervalCount"}),(0,r.jsx)(n.td,{children:"Int"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--sliding-interval-count"})}),(0,r.jsx)(n.td,{children:"The number of messages after which a window slides."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"slidingIntervalDurationMs"}),(0,r.jsx)(n.td,{children:"Long"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--sliding-interval-duration-ms"})}),(0,r.jsx)(n.td,{children:"The time duration after which a window slides."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lateDataTopic"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"N/A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxLagMs"}),(0,r.jsx)(n.td,{children:"Long"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"N/A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"watermarkEmitIntervalMs"}),(0,r.jsx)(n.td,{children:"Long"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"N/A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timestampExtractorClassName"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"N/A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"actualWindowFunctionClassName"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"N/A"})]})]})]}),"\n",(0,r.jsx)(n.h6,{id:"cryptoconfig",children:"CryptoConfig"}),"\n",(0,r.jsxs)(n.p,{children:["The following table outlines the nested fields and related arguments under the ",(0,r.jsx)(n.code,{children:"cryptoConfig"})," field."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Related Command Argument"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cryptoKeyReaderClassName"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsxs)(n.td,{children:["Refer to ",(0,r.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin-api/src/main/java/org/apache/pulsar/common/functions/CryptoConfig.java",children:"code"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cryptoKeyReaderConfig"}),(0,r.jsx)(n.td,{children:"Map<String,Object>"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"N/A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encryptionKeys"}),(0,r.jsx)(n.td,{children:"String[]"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"N/A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"producerCryptoFailureAction"}),(0,r.jsx)(n.td,{children:"ProducerCryptoFailureAction"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"N/A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"consumerCryptoFailureAction"}),(0,r.jsx)(n.td,{children:"ConsumerCryptoFailureAction"}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"N/A"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"The following example shows how to configure a function using YAML or JSON."}),"\n",(0,r.jsxs)(d.A,{defaultValue:"YAML",values:[{label:"YAML",value:"YAML"},{label:"JSON",value:"JSON"}],children:[(0,r.jsx)(c.A,{value:"YAML",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'tenant: "public"\nnamespace: "default"\nname: "config-file-function"\ninputs:\n  - "persistent://public/default/config-file-function-input-1"\n  - "persistent://public/default/config-file-function-input-2"\noutput: "persistent://public/default/config-file-function-output"\njar: "function.jar"\nparallelism: 1\nresources:\n  cpu: 8\n  ram: 8589934592\nautoAck: true\nuserConfig:\n  foo: "bar"\n'})})}),(0,r.jsx)(c.A,{value:"JSON",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "tenant": "public",\n  "namespace": "default",\n  "name": "config-file-function",\n  "inputs": [\n    "persistent://public/default/config-file-function-input-1",\n    "persistent://public/default/config-file-function-input-2"\n  ],\n  "output": "persistent://public/default/config-file-function-output",\n  "jar": "function.jar",\n  "parallelism": 1,\n  "resources": {\n    "cpu": 8,\n    "ram": 8589934592\n  },\n  "autoAck": true,\n  "userConfig": {\n    "foo": "bar"\n  }\n}\n'})})})]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>d});s(96540);var t=s(34164);const r={tabItem:"tabItem_Ymn6"};var i=s(74848);function d(e){let{children:n,hidden:s,className:d}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,d),hidden:s,children:n})}},89089:(e,n,s)=>{s.d(n,{A:()=>v});var t=s(96540),r=s(34164),i=s(23104),d=s(56347),c=s(205),l=s(57485),o=s(31682),a=s(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:s}=e;const r=(0,d.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function p(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=u(e),[d,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[o,h]=j({queryString:s,groupId:r}),[p,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,a.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),m=(()=>{const e=o??p;return x({value:e,tabValues:i})?e:null})();(0,c.A)((()=>{m&&l(m)}),[m]);return{selectedValue:d,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=s(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function b(e){let{className:n,block:s,selectedValue:t,selectValue:d,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),a=e=>{const n=e.currentTarget,s=l.indexOf(n),r=c[s].value;r!==t&&(o(n),d(r))},h=e=>{let n=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:c.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:h,onClick:a,...i,className:(0,r.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function y(e){let{lazy:n,children:s,selectedValue:i}=e;const d=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=d.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:d.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function A(e){const n=p(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(y,{...n,...e})]})}function v(e){const n=(0,f.A)();return(0,g.jsx)(A,{...e,children:h(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var t=s(96540);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);