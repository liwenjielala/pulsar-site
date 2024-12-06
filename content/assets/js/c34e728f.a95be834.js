"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[22489],{50904:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>r,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"functions-cli","title":"Pulsar Functions command line tool","description":"The following tables list Pulsar Functions command-line tools. You can learn Pulsar Functions modes, commands, and parameters.","source":"@site/versioned_docs/version-2.6.4/functions-cli.md","sourceDirName":".","slug":"/functions-cli","permalink":"/docs/2.6.4/functions-cli","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.4/functions-cli.md","tags":[],"version":"2.6.4","frontMatter":{"id":"functions-cli","title":"Pulsar Functions command line tool","sidebar_label":"Reference: CLI","original_id":"functions-cli"},"sidebar":"docsSidebar","previous":{"title":"How-to: Deploy","permalink":"/docs/2.6.4/functions-deploy"},"next":{"title":"Window Functions: Context","permalink":"/docs/2.6.4/window-functions-context"}}');var i=s(74848),d=s(28453);const r={id:"functions-cli",title:"Pulsar Functions command line tool",sidebar_label:"Reference: CLI",original_id:"functions-cli"},c=void 0,l={},h=[{value:"localrun",id:"localrun",level:2},{value:"create",id:"create",level:2},{value:"delete",id:"delete",level:2},{value:"update",id:"update",level:2},{value:"get",id:"get",level:2},{value:"restart",id:"restart",level:2},{value:"stop",id:"stop",level:2},{value:"start",id:"start",level:2}];function a(e){const t={h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The following tables list Pulsar Functions command-line tools. You can learn Pulsar Functions modes, commands, and parameters."}),"\n",(0,i.jsx)(t.h2,{id:"localrun",children:"localrun"}),"\n",(0,i.jsx)(t.p,{children:"Run Pulsar Functions locally, rather than deploying it to the Pulsar cluster."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"auto-ack"}),(0,i.jsx)(t.td,{children:"Whether or not the framework acknowledges messages automatically."}),(0,i.jsx)(t.td,{children:"true"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"broker-service-url"}),(0,i.jsx)(t.td,{children:"The URL for the Pulsar broker."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"classname"}),(0,i.jsx)(t.td,{children:"The class name of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"client-auth-params"}),(0,i.jsx)(t.td,{children:"Client authentication parameter."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"client-auth-plugin"}),(0,i.jsx)(t.td,{children:"Client authentication plugin using which function-process can connect to broker."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CPU"}),(0,i.jsx)(t.td,{children:"The CPU in cores that need to be allocated per function instance (applicable only to docker runtime)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custom-schema-inputs"}),(0,i.jsx)(t.td,{children:"The map of input topics to Schema class names (as a JSON string)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custom-serde-inputs"}),(0,i.jsx)(t.td,{children:"The map of input topics to SerDe class names (as a JSON string)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"dead-letter-topic"}),(0,i.jsx)(t.td,{children:"The topic where all messages that were not processed successfully are sent. This parameter is not supported in Python Functions."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"disk"}),(0,i.jsx)(t.td,{children:"The disk in bytes that need to be allocated per function instance (applicable only to docker runtime)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fqfn"}),(0,i.jsx)(t.td,{children:"The Fully Qualified Function Name (FQFN) for the function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"function-config-file"}),(0,i.jsx)(t.td,{children:"The path to a YAML config file specifying the configuration of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"go"}),(0,i.jsx)(t.td,{children:"Path to the main Go executable binary for the function (if the function is written in Go)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"hostname-verification-enabled"}),(0,i.jsx)(t.td,{children:"Enable hostname verification."}),(0,i.jsx)(t.td,{children:"false"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"inputs"}),(0,i.jsx)(t.td,{children:"The input topic or topics of a Pulsar Function (multiple topics can be specified as a comma-separated list)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"jar"}),(0,i.jsx)(t.td,{children:"Path to the jar file for the function (if the function is written in Java). It also supports URL-path [http/https/file (file protocol assumes that file already exists on worker host)] from which worker can download the package."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"instance-id-offset"}),(0,i.jsx)(t.td,{children:"Start the instanceIds from this offset."}),(0,i.jsx)(t.td,{children:"0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"log-topic"}),(0,i.jsx)(t.td,{children:"The topic to which the logs  a Pulsar Function are produced."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"max-message-retries"}),(0,i.jsx)(t.td,{children:"How many times should we try to process a message before giving up."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"name"}),(0,i.jsx)(t.td,{children:"The name of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"namespace"}),(0,i.jsx)(t.td,{children:"The namespace of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"output"}),(0,i.jsx)(t.td,{children:"The output topic of a Pulsar Function (If none is specified, no output is written)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"output-serde-classname"}),(0,i.jsx)(t.td,{children:"The SerDe class to be used for messages output by the function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"parallelism"}),(0,i.jsx)(t.td,{children:"The parallelism factor of  a Pulsar Function (i.e. the number of function instances to run)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"processing-guarantees"}),(0,i.jsx)(t.td,{children:"The processing guarantees (delivery semantics) applied to the function. Available values: [ATLEAST_ONCE, ATMOST_ONCE, EFFECTIVELY_ONCE]."}),(0,i.jsx)(t.td,{children:"ATLEAST_ONCE"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"py"}),(0,i.jsx)(t.td,{children:"Path to the main Python file/Python Wheel file for the function (if the function is written in Python)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ram"}),(0,i.jsx)(t.td,{children:"The ram in bytes that need to be allocated per function instance (applicable only to process/docker runtime)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"retain-ordering"}),(0,i.jsx)(t.td,{children:"Function consumes and processes messages in order."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"schema-type"}),(0,i.jsx)(t.td,{children:"The builtin schema type or custom schema class name to be used for messages output by the function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sliding-interval-count"}),(0,i.jsx)(t.td,{children:"The number of messages after which the window slides."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sliding-interval-duration-ms"}),(0,i.jsx)(t.td,{children:"The time duration after which the window slides."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"subs-name"}),(0,i.jsx)(t.td,{children:"Pulsar source subscription name if user wants a specific subscription-name for the input-topic consumer."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tenant"}),(0,i.jsx)(t.td,{children:"The tenant of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"timeout-ms"}),(0,i.jsx)(t.td,{children:"The message timeout in milliseconds."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tls-allow-insecure"}),(0,i.jsx)(t.td,{children:"Allow insecure tls connection."}),(0,i.jsx)(t.td,{children:"false"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tls-trust-cert-path"}),(0,i.jsx)(t.td,{children:"tls trust cert file path."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"topics-pattern"}),(0,i.jsx)(t.td,{children:"The topic pattern to consume from list of topics under a namespace that match the pattern. [--input] and [--topic-pattern] are mutually exclusive. Add SerDe class name for a pattern in --custom-serde-inputs (only supported in Java Function)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"use-tls"}),(0,i.jsx)(t.td,{children:"Use tls connection."}),(0,i.jsx)(t.td,{children:"false"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"user-config"}),(0,i.jsx)(t.td,{children:"User-defined config key/values."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"window-length-count"}),(0,i.jsx)(t.td,{children:"The number of messages per window."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"window-length-duration-ms"}),(0,i.jsx)(t.td,{children:"The time duration of the window in milliseconds."}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"create",children:"create"}),"\n",(0,i.jsx)(t.p,{children:"Create and deploy a Pulsar Function in cluster mode."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"auto-ack"}),(0,i.jsx)(t.td,{children:"Whether or not the framework acknowledges messages automatically."}),(0,i.jsx)(t.td,{children:"true"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"classname"}),(0,i.jsx)(t.td,{children:"The class name of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CPU"}),(0,i.jsx)(t.td,{children:"The CPU in cores that need to be allocated per function instance (applicable only to docker runtime)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custom-runtime-options"}),(0,i.jsx)(t.td,{children:"A string that encodes options to customize the runtime, see docs for configured runtime for details"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custom-schema-inputs"}),(0,i.jsx)(t.td,{children:"The map of input topics to Schema class names (as a JSON string)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custom-serde-inputs"}),(0,i.jsx)(t.td,{children:"The map of input topics to SerDe class names (as a JSON string)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"dead-letter-topic"}),(0,i.jsx)(t.td,{children:"The topic where all messages that were not processed successfully are sent. This parameter is not supported in Python Functions."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"disk"}),(0,i.jsx)(t.td,{children:"The disk in bytes that need to be allocated per function instance (applicable only to docker runtime)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fqfn"}),(0,i.jsx)(t.td,{children:"The Fully Qualified Function Name (FQFN) for the function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"function-config-file"}),(0,i.jsx)(t.td,{children:"The path to a YAML config file specifying the configuration of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"go"}),(0,i.jsx)(t.td,{children:"Path to the main Go executable binary for the function (if the function is written in Go)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"inputs"}),(0,i.jsx)(t.td,{children:"The input topic or topics of a Pulsar Function (multiple topics can be specified as a comma-separated list)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"jar"}),(0,i.jsx)(t.td,{children:"Path to the jar file for the function (if the function is written in Java). It also supports URL-path [http/https/file (file protocol assumes that file already exists on worker host)] from which worker can download the package."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"log-topic"}),(0,i.jsx)(t.td,{children:"The topic to which the logs of a Pulsar Function are produced."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"max-message-retries"}),(0,i.jsx)(t.td,{children:"How many times should we try to process a message before giving up."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"name"}),(0,i.jsx)(t.td,{children:"The name of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"namespace"}),(0,i.jsx)(t.td,{children:"The namespace of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"output"}),(0,i.jsx)(t.td,{children:"The output topic of a Pulsar Function (If none is specified, no output is written)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"output-serde-classname"}),(0,i.jsx)(t.td,{children:"The SerDe class to be used for messages output by the function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"parallelism"}),(0,i.jsx)(t.td,{children:"The parallelism factor of a Pulsar Function (i.e. the number of function instances to run)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"processing-guarantees"}),(0,i.jsx)(t.td,{children:"The processing guarantees (delivery semantics) applied to the function. Available values: [ATLEAST_ONCE, ATMOST_ONCE, EFFECTIVELY_ONCE]."}),(0,i.jsx)(t.td,{children:"ATLEAST_ONCE"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"py"}),(0,i.jsx)(t.td,{children:"Path to the main Python file/Python Wheel file for the function (if the function is written in Python)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ram"}),(0,i.jsx)(t.td,{children:"The ram in bytes that need to be allocated per function instance (applicable only to process/docker runtime)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"retain-ordering"}),(0,i.jsx)(t.td,{children:"Function consumes and processes messages in order."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"schema-type"}),(0,i.jsx)(t.td,{children:"The builtin schema type or custom schema class name to be used for messages output by the function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sliding-interval-count"}),(0,i.jsx)(t.td,{children:"The number of messages after which the window slides."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sliding-interval-duration-ms"}),(0,i.jsx)(t.td,{children:"The time duration after which the window slides."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"subs-name"}),(0,i.jsx)(t.td,{children:"Pulsar source subscription name if user wants a specific subscription-name for the input-topic consumer."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tenant"}),(0,i.jsx)(t.td,{children:"The tenant of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"timeout-ms"}),(0,i.jsx)(t.td,{children:"The message timeout in milliseconds."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"topics-pattern"}),(0,i.jsx)(t.td,{children:"The topic pattern to consume from list of topics under a namespace that match the pattern. [--input] and [--topic-pattern] are mutually exclusive. Add SerDe class name for a pattern in --custom-serde-inputs (only supported in Java Function)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"user-config"}),(0,i.jsx)(t.td,{children:"User-defined config key/values."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"window-length-count"}),(0,i.jsx)(t.td,{children:"The number of messages per window."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"window-length-duration-ms"}),(0,i.jsx)(t.td,{children:"The time duration of the window in milliseconds."}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"delete",children:"delete"}),"\n",(0,i.jsx)(t.p,{children:"Delete a Pulsar Function that is running on a Pulsar cluster."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fqfn"}),(0,i.jsx)(t.td,{children:"The Fully Qualified Function Name (FQFN) for the function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"name"}),(0,i.jsx)(t.td,{children:"The name of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"namespace"}),(0,i.jsx)(t.td,{children:"The namespace of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tenant"}),(0,i.jsx)(t.td,{children:"The tenant of a Pulsar Function."}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"update",children:"update"}),"\n",(0,i.jsx)(t.p,{children:"Update a Pulsar Function that has been deployed to a Pulsar cluster."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"auto-ack"}),(0,i.jsx)(t.td,{children:"Whether or not the framework acknowledges messages automatically."}),(0,i.jsx)(t.td,{children:"true"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"classname"}),(0,i.jsx)(t.td,{children:"The class name of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CPU"}),(0,i.jsx)(t.td,{children:"The CPU in cores that need to be allocated per function instance (applicable only to docker runtime)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custom-runtime-options"}),(0,i.jsx)(t.td,{children:"A string that encodes options to customize the runtime, see docs for configured runtime for details"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custom-schema-inputs"}),(0,i.jsx)(t.td,{children:"The map of input topics to Schema class names (as a JSON string)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custom-serde-inputs"}),(0,i.jsx)(t.td,{children:"The map of input topics to SerDe class names (as a JSON string)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"dead-letter-topic"}),(0,i.jsx)(t.td,{children:"The topic where all messages that were not processed successfully are sent. This parameter is not supported in Python Functions."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"disk"}),(0,i.jsx)(t.td,{children:"The disk in bytes that need to be allocated per function instance (applicable only to docker runtime)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fqfn"}),(0,i.jsx)(t.td,{children:"The Fully Qualified Function Name (FQFN) for the function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"function-config-file"}),(0,i.jsx)(t.td,{children:"The path to a YAML config file specifying the configuration of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"go"}),(0,i.jsx)(t.td,{children:"Path to the main Go executable binary for the function (if the function is written in Go)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"inputs"}),(0,i.jsx)(t.td,{children:"The input topic or topics of a Pulsar Function (multiple topics can be specified as a comma-separated list)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"jar"}),(0,i.jsx)(t.td,{children:"Path to the jar file for the function (if the function is written in Java). It also supports URL-path [http/https/file (file protocol assumes that file already exists on worker host)] from which worker can download the package."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"log-topic"}),(0,i.jsx)(t.td,{children:"The topic to which the logs of a Pulsar Function are produced."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"max-message-retries"}),(0,i.jsx)(t.td,{children:"How many times should we try to process a message before giving up."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"name"}),(0,i.jsx)(t.td,{children:"The name of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"namespace"}),(0,i.jsx)(t.td,{children:"The namespace of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"output"}),(0,i.jsx)(t.td,{children:"The output topic of a Pulsar Function (If none is specified, no output is written)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"output-serde-classname"}),(0,i.jsx)(t.td,{children:"The SerDe class to be used for messages output by the function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"parallelism"}),(0,i.jsx)(t.td,{children:"The parallelism factor of a Pulsar Function (i.e. the number of function instances to run)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"processing-guarantees"}),(0,i.jsx)(t.td,{children:"The processing guarantees (delivery semantics) applied to the function. Available values: [ATLEAST_ONCE, ATMOST_ONCE, EFFECTIVELY_ONCE]."}),(0,i.jsx)(t.td,{children:"ATLEAST_ONCE"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"py"}),(0,i.jsx)(t.td,{children:"Path to the main Python file/Python Wheel file for the function (if the function is written in Python)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ram"}),(0,i.jsx)(t.td,{children:"The ram in bytes that need to be allocated per function instance (applicable only to process/docker runtime)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"retain-ordering"}),(0,i.jsx)(t.td,{children:"Function consumes and processes messages in order."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"schema-type"}),(0,i.jsx)(t.td,{children:"The builtin schema type or custom schema class name to be used for messages output by the function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sliding-interval-count"}),(0,i.jsx)(t.td,{children:"The number of messages after which the window slides."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sliding-interval-duration-ms"}),(0,i.jsx)(t.td,{children:"The time duration after which the window slides."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"subs-name"}),(0,i.jsx)(t.td,{children:"Pulsar source subscription name if user wants a specific subscription-name for the input-topic consumer."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tenant"}),(0,i.jsx)(t.td,{children:"The tenant of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"timeout-ms"}),(0,i.jsx)(t.td,{children:"The message timeout in milliseconds."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"topics-pattern"}),(0,i.jsx)(t.td,{children:"The topic pattern to consume from list of topics under a namespace that match the pattern. [--input] and [--topic-pattern] are mutually exclusive. Add SerDe class name for a pattern in --custom-serde-inputs (only supported in Java Function)."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"update-auth-data"}),(0,i.jsx)(t.td,{children:"Whether or not to update the auth data."}),(0,i.jsx)(t.td,{children:"false"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"user-config"}),(0,i.jsx)(t.td,{children:"User-defined config key/values."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"window-length-count"}),(0,i.jsx)(t.td,{children:"The number of messages per window."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"window-length-duration-ms"}),(0,i.jsx)(t.td,{children:"The time duration of the window in milliseconds."}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"get",children:"get"}),"\n",(0,i.jsx)(t.p,{children:"Fetch information about a Pulsar Function."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fqfn"}),(0,i.jsx)(t.td,{children:"The Fully Qualified Function Name (FQFN) for the function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"name"}),(0,i.jsx)(t.td,{children:"The name of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"namespace"}),(0,i.jsx)(t.td,{children:"The namespace of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tenant"}),(0,i.jsx)(t.td,{children:"The tenant of a Pulsar Function."}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"restart",children:"restart"}),"\n",(0,i.jsx)(t.p,{children:"Restart function instance."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fqfn"}),(0,i.jsx)(t.td,{children:"The Fully Qualified Function Name (FQFN) for the function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"instance-id"}),(0,i.jsx)(t.td,{children:"The function instanceId (restart all instances if instance-id is not provided."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"name"}),(0,i.jsx)(t.td,{children:"The name of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"namespace"}),(0,i.jsx)(t.td,{children:"The namespace of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tenant"}),(0,i.jsx)(t.td,{children:"The tenant of a Pulsar Function."}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"stop",children:"stop"}),"\n",(0,i.jsx)(t.p,{children:"Stops function instance."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fqfn"}),(0,i.jsx)(t.td,{children:"The Fully Qualified Function Name (FQFN) for the function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"instance-id"}),(0,i.jsx)(t.td,{children:"The function instanceId (restart all instances if instance-id is not provided."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"name"}),(0,i.jsx)(t.td,{children:"The name of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"namespace"}),(0,i.jsx)(t.td,{children:"The namespace of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tenant"}),(0,i.jsx)(t.td,{children:"The tenant of a Pulsar Function."}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"start",children:"start"}),"\n",(0,i.jsx)(t.p,{children:"Starts a stopped function instance."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fqfn"}),(0,i.jsx)(t.td,{children:"The Fully Qualified Function Name (FQFN) for the function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"instance-id"}),(0,i.jsx)(t.td,{children:"The function instanceId (restart all instances if instance-id is not provided."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"name"}),(0,i.jsx)(t.td,{children:"The name of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"namespace"}),(0,i.jsx)(t.td,{children:"The namespace of a Pulsar Function."}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tenant"}),(0,i.jsx)(t.td,{children:"The tenant of a Pulsar Function."}),(0,i.jsx)(t.td,{})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var n=s(96540);const i={},d=n.createContext(i);function r(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);