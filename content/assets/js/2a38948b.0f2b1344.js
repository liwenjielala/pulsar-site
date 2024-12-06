"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[43276],{30957:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"io-kinesis-sink","title":"Kinesis sink connector","description":"You can download all the Pulsar connectors on download page.","source":"@site/docs/io-kinesis-sink.md","sourceDirName":".","slug":"/io-kinesis-sink","permalink":"/docs/next/io-kinesis-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/docs/io-kinesis-sink.md","tags":[],"version":"current","frontMatter":{"id":"io-kinesis-sink","title":"Kinesis sink connector","sidebar_label":"Kinesis sink connector"}}');var r=n(74848),t=n(28453);const d={id:"io-kinesis-sink",title:"Kinesis sink connector",sidebar_label:"Kinesis sink connector"},a=void 0,l={},o=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Built-in plugins",id:"built-in-plugins",level:3},{value:"Example",id:"example",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["You can download all the Pulsar connectors on ",(0,r.jsx)(s.a,{href:"pathname:///download",children:"download page"}),"."]})}),"\n",(0,r.jsx)(s.p,{children:"The Kinesis sink connector pulls data from Pulsar and persists data into Amazon Kinesis."}),"\n",(0,r.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(s.p,{children:"The configuration of the Kinesis sink connector has the following property."}),"\n",(0,r.jsx)(s.h3,{id:"property",children:"Property"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Required"}),(0,r.jsx)(s.th,{children:"Default"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"messageFormat"})}),(0,r.jsx)(s.td,{children:"MessageFormat"}),(0,r.jsx)(s.td,{children:"true"}),(0,r.jsx)(s.td,{children:"ONLY_RAW_PAYLOAD"}),(0,r.jsxs)(s.td,{children:["Message format in which Kinesis sink converts Pulsar messages and publishes to Kinesis streams.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Below are the available options:",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.code,{children:"ONLY_RAW_PAYLOAD"}),": Kinesis sink directly publishes Pulsar message payload as a message into the configured Kinesis stream. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.code,{children:"FULL_MESSAGE_IN_JSON"}),": Kinesis sink creates a JSON payload with Pulsar message payload, properties and encryptionCtx, and publishes JSON payload into the configured Kinesis stream.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.code,{children:"FULL_MESSAGE_IN_FB"}),": Kinesis sink creates a flatbuffer serialized payload with Pulsar message payload, properties and encryptionCtx, and publishes flatbuffer payload into the configured Kinesis stream.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.code,{children:"FULL_MESSAGE_IN_JSON_EXPAND_VALUE"}),": Kinesis sink sends a JSON structure containing the record topic name, key, payload, properties and event time. The record schema is used to convert the value to JSON."]})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"jsonIncludeNonNulls"})}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"true"}),(0,r.jsxs)(s.td,{children:["Only the properties with non-null values are included when the message format is ",(0,r.jsx)(s.code,{children:"FULL_MESSAGE_IN_JSON_EXPAND_VALUE"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"jsonFlatten"})}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsxs)(s.td,{children:["When it is set to ",(0,r.jsx)(s.code,{children:"true"})," and the message format is ",(0,r.jsx)(s.code,{children:"FULL_MESSAGE_IN_JSON_EXPAND_VALUE"}),", the output JSON is flattened."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"retainOrdering"})}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"Whether Pulsar connectors to retain ordering when moving messages from Pulsar to Kinesis or not."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"awsEndpoint"})}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:'" " (empty string)'}),(0,r.jsxs)(s.td,{children:["The Kinesis end-point URL, which can be found at ",(0,r.jsx)(s.a,{href:"https://docs.aws.amazon.com/general/latest/gr/rande.html",children:"here"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"awsRegion"})}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:'" " (empty string)'}),(0,r.jsxs)(s.td,{children:["The AWS region. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(s.strong,{children:"Example"}),(0,r.jsx)("br",{})," us-west-1, us-west-2"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"awsKinesisStreamName"})}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"true"}),(0,r.jsx)(s.td,{children:'" " (empty string)'}),(0,r.jsx)(s.td,{children:"The Kinesis stream name."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"awsCredentialPluginName"})}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:'" " (empty string)'}),(0,r.jsxs)(s.td,{children:["The fully-qualified class name of implementation of ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/aws/src/main/java/org/apache/pulsar/io/aws/AwsCredentialProviderPlugin.java",children:"AwsCredentialProviderPlugin"}),". ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"It is a factory class which creates an AWSCredentialsProvider that is used by Kinesis sink. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"If it is empty, the Kinesis sink creates a default AWSCredentialsProvider which accepts json-map of credentials in ",(0,r.jsx)(s.code,{children:"awsCredentialPluginParam"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"awsCredentialPluginParam"})}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:'" " (empty string)'}),(0,r.jsxs)(s.td,{children:["The JSON parameter to initialize ",(0,r.jsx)(s.code,{children:"awsCredentialsProviderPlugin"}),"."]})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"built-in-plugins",children:"Built-in plugins"}),"\n",(0,r.jsxs)(s.p,{children:["The following are built-in ",(0,r.jsx)(s.code,{children:"AwsCredentialProviderPlugin"})," plugins:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"org.apache.pulsar.io.aws.AwsDefaultProviderChainPlugin"})}),"\n",(0,r.jsx)(s.p,{children:"This plugin takes no configuration, it uses the default AWS provider chain."}),"\n",(0,r.jsxs)(s.p,{children:["For more information, see ",(0,r.jsx)(s.a,{href:"https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html#credentials-default",children:"AWS documentation"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"org.apache.pulsar.io.aws.STSAssumeRoleProviderPlugin"})}),"\n",(0,r.jsxs)(s.p,{children:["This plugin takes a configuration (via the ",(0,r.jsx)(s.code,{children:"awsCredentialPluginParam"}),") that describes a role to assume when running the KCL."]}),"\n",(0,r.jsx)(s.p,{children:"This configuration takes the form of a small JSON document like:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{"roleArn": "arn...", "roleSessionName": "name"}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.p,{children:"Before using the Kinesis sink connector, you need to create a configuration file through one of the following methods."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"JSON"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n   "configs": {\n      "awsEndpoint": "some.endpoint.aws",\n      "awsRegion": "us-east-1",\n      "awsKinesisStreamName": "my-stream",\n      "awsCredentialPluginParam": "{\\"accessKey\\":\\"myKey\\",\\"secretKey\\":\\"my-Secret\\"}",\n      "messageFormat": "ONLY_RAW_PAYLOAD",\n      "retainOrdering": "true"\n   }\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"YAML"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'configs:\n    awsEndpoint: "some.endpoint.aws"\n    awsRegion: "us-east-1"\n    awsKinesisStreamName: "my-stream"\n    awsCredentialPluginParam: "{\\"accessKey\\":\\"myKey\\",\\"secretKey\\":\\"my-Secret\\"}"\n    messageFormat: "ONLY_RAW_PAYLOAD"\n    retainOrdering: "true"\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>a});var i=n(96540);const r={},t=i.createContext(r);function d(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);