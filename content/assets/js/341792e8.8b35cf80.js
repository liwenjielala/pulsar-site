"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[90868],{63235:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"io-kinesis-source","title":"Kinesis source connector","description":"The Kinesis source connector pulls data from Amazon Kinesis and persists data into Pulsar.","source":"@site/versioned_docs/version-2.6.2/io-kinesis-source.md","sourceDirName":".","slug":"/io-kinesis-source","permalink":"/docs/2.6.2/io-kinesis-source","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.2/io-kinesis-source.md","tags":[],"version":"2.6.2","frontMatter":{"id":"io-kinesis-source","title":"Kinesis source connector","sidebar_label":"Kinesis source connector","original_id":"io-kinesis-source"}}');var t=n(74848),r=n(28453);const d={id:"io-kinesis-source",title:"Kinesis source connector",sidebar_label:"Kinesis source connector",original_id:"io-kinesis-source"},c=void 0,o={},a=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"The Kinesis source connector pulls data from Amazon Kinesis and persists data into Pulsar."}),"\n",(0,t.jsxs)(s.p,{children:["This connector uses the ",(0,t.jsx)(s.a,{href:"https://github.com/awslabs/amazon-kinesis-client",children:"Kinesis Consumer Library"})," (KCL) to do the actual consuming of messages. The KCL uses DynamoDB to track state for consumers."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Note: currently, the Kinesis source connector only supports raw messages. If you use KMS encrypted messages, the encrypted messages are sent to downstream. This connector will support decrypting messages in the future release."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(s.p,{children:"The configuration of the Kinesis source connector has the following properties."}),"\n",(0,t.jsx)(s.h3,{id:"property",children:"Property"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Default"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"initialPositionInStream"})}),(0,t.jsx)(s.td,{children:"InitialPositionInStream"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"LATEST"}),(0,t.jsxs)(s.td,{children:["The position where the connector starts from.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Below are the available options:",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"AT_TIMESTAMP"}),": start from the record at or after the specified timestamp.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"LATEST"}),": start after the most recent data record.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"TRIM_HORIZON"}),": start from the oldest available data record."]})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"startAtTime"})}),(0,t.jsx)(s.td,{children:"Date"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:'" " (empty string)'}),(0,t.jsxs)(s.td,{children:["If set to ",(0,t.jsx)(s.code,{children:"AT_TIMESTAMP"}),", it specifies the point in time to start consumption."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"applicationName"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"Pulsar IO connector"}),(0,t.jsxs)(s.td,{children:["The name of the Amazon Kinesis application. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"By default, the application name is included in the user agent string used to make AWS requests. This can assist with troubleshooting, for example, distinguish requests made by separate connector instances."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"checkpointInterval"})}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"60000"}),(0,t.jsx)(s.td,{children:"The frequency of the Kinesis stream checkpoint in milliseconds."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"backoffTime"})}),(0,t.jsx)(s.td,{children:"long"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"3000"}),(0,t.jsx)(s.td,{children:"The amount of time to delay between requests when the connector encounters a throttling exception from AWS Kinesis in milliseconds."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"numRetries"})}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"3"}),(0,t.jsx)(s.td,{children:"The number of re-attempts when the connector encounters an exception while trying to set a checkpoint."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"receiveQueueSize"})}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"1000"}),(0,t.jsxs)(s.td,{children:["The maximum number of AWS records that can be buffered inside the connector. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"Once the ",(0,t.jsx)(s.code,{children:"receiveQueueSize"})," is reached, the connector does not consume any messages from Kinesis until some messages in the queue are successfully consumed."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"dynamoEndpoint"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:'" " (empty string)'}),(0,t.jsxs)(s.td,{children:["The Dynamo end-point URL, which can be found at ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/general/latest/gr/rande.html",children:"here"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"cloudwatchEndpoint"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:'" " (empty string)'}),(0,t.jsxs)(s.td,{children:["The Cloudwatch end-point URL, which can be found at ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/general/latest/gr/rande.html",children:"here"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"useEnhancedFanOut"})}),(0,t.jsx)(s.td,{children:"boolean"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:"true"}),(0,t.jsxs)(s.td,{children:["If set to true, it uses Kinesis enhanced fan-out.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"If set to false, it uses polling."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"awsEndpoint"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:'" " (empty string)'}),(0,t.jsxs)(s.td,{children:["The Kinesis end-point URL, which can be found at ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/general/latest/gr/rande.html",children:"here"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"awsRegion"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:'" " (empty string)'}),(0,t.jsxs)(s.td,{children:["The AWS region. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(s.strong,{children:"Example"}),(0,t.jsx)("br",{})," us-west-1, us-west-2"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"awsKinesisStreamName"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"true"}),(0,t.jsx)(s.td,{children:'" " (empty string)'}),(0,t.jsx)(s.td,{children:"The Kinesis stream name."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"awsCredentialPluginName"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:'" " (empty string)'}),(0,t.jsxs)(s.td,{children:["The fully-qualified class name of implementation of ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/aws/src/main/java/org/apache/pulsar/io/aws/AwsCredentialProviderPlugin.java",children:"AwsCredentialProviderPlugin"}),".",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(s.code,{children:"awsCredentialProviderPlugin"})," has the following built-in plugs:",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"org.apache.pulsar.io.kinesis.AwsDefaultProviderChainPlugin"}),":",(0,t.jsx)("br",{})," this plugin uses the default AWS provider chain.",(0,t.jsx)("br",{}),"For more information, see ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html#credentials-default",children:"using the default credential provider chain"}),".",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.code,{children:"org.apache.pulsar.io.kinesis.STSAssumeRoleProviderPlugin"}),": ",(0,t.jsx)("br",{}),"this plugin takes a configuration via the ",(0,t.jsx)(s.code,{children:"awsCredentialPluginParam"})," that describes a role to assume when running the KCL.",(0,t.jsx)("br",{}),(0,t.jsx)(s.strong,{children:"JSON configuration example"}),(0,t.jsx)("br",{}),(0,t.jsx)(s.code,{children:'{"roleArn": "arn...", "roleSessionName": "name"}'})," ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(s.code,{children:"awsCredentialPluginName"})," is a factory class which creates an AWSCredentialsProvider that is used by Kinesis sink. ",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"If ",(0,t.jsx)(s.code,{children:"awsCredentialPluginName"})," set to empty, the Kinesis sink creates a default AWSCredentialsProvider which accepts json-map of credentials in ",(0,t.jsx)(s.code,{children:"awsCredentialPluginParam"}),"."]})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"awsCredentialPluginParam"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"false"}),(0,t.jsx)(s.td,{children:'" " (empty string)'}),(0,t.jsxs)(s.td,{children:["The JSON parameter to initialize ",(0,t.jsx)(s.code,{children:"awsCredentialsProviderPlugin"}),"."]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(s.p,{children:"Before using the Kinesis source connector, you need to create a configuration file through one of the following methods."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"JSON"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'\n{\n    "awsEndpoint": "https://some.endpoint.aws",\n    "awsRegion": "us-east-1",\n    "awsKinesisStreamName": "my-stream",\n    "awsCredentialPluginParam": "{\\"accessKey\\":\\"myKey\\",\\"secretKey\\":\\"my-Secret\\"}",\n    "applicationName": "My test application",\n    "checkpointInterval": "30000",\n    "backoffTime": "4000",\n    "numRetries": "3",\n    "receiveQueueSize": 2000,\n    "initialPositionInStream": "TRIM_HORIZON",\n    "startAtTime": "2019-03-05T19:28:58.000Z"\n}\n\n'})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"YAML"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'\nconfigs:\n    awsEndpoint: "https://some.endpoint.aws"\n    awsRegion: "us-east-1"\n    awsKinesisStreamName: "my-stream"\n    awsCredentialPluginParam: "{\\"accessKey\\":\\"myKey\\",\\"secretKey\\":\\"my-Secret\\"}"\n    applicationName: "My test application"\n    checkpointInterval: 30000\n    backoffTime: 4000\n    numRetries: 3\n    receiveQueueSize: 2000\n    initialPositionInStream: "TRIM_HORIZON"\n    startAtTime: "2019-03-05T19:28:58.000Z"\n\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>c});var i=n(96540);const t={},r=i.createContext(t);function d(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);