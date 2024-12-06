"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[18131],{71683:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"io-dynamodb-source","title":"AWS DynamoDB source connector","description":"You can download all the Pulsar connectors on download page.","source":"@site/versioned_docs/version-3.2.x/io-dynamodb-source.md","sourceDirName":".","slug":"/io-dynamodb-source","permalink":"/docs/3.2.x/io-dynamodb-source","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/io-dynamodb-source.md","tags":[],"version":"3.2.x","frontMatter":{"id":"io-dynamodb-source","title":"AWS DynamoDB source connector","sidebar_label":"AWS DynamoDB source connector"}}');var r=s(74848),i=s(28453);const d={id:"io-dynamodb-source",title:"AWS DynamoDB source connector",sidebar_label:"AWS DynamoDB source connector"},a=void 0,c={},o=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["You can download all the Pulsar connectors on ",(0,r.jsx)(n.a,{href:"pathname:///download",children:"download page"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"The DynamoDB source connector pulls data from DynamoDB table streams and persists data into Pulsar."}),"\n",(0,r.jsxs)(n.p,{children:["This connector uses the ",(0,r.jsx)(n.a,{href:"https://github.com/awslabs/dynamodb-streams-kinesis-adapter",children:"DynamoDB Streams Kinesis Adapter"}),",\nwhich uses the ",(0,r.jsx)(n.a,{href:"https://github.com/awslabs/amazon-kinesis-client",children:"Kinesis Consumer Library"})," (KCL) to do the actual\nconsuming of messages. The KCL uses DynamoDB to track the state of consumers and requires cloudwatch access to log metrics."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"The configuration of the DynamoDB source connector has the following properties."}),"\n",(0,r.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"initialPositionInStream"})}),(0,r.jsx)(n.td,{children:"InitialPositionInStream"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"LATEST"}),(0,r.jsxs)(n.td,{children:["The position where the connector starts from.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Below are the available options:",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)("li",{children:[(0,r.jsx)(n.code,{children:"AT_TIMESTAMP"}),": start from the record at or after the specified timestamp.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(n.code,{children:"LATEST"}),": start after the most recent data record.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(n.code,{children:"TRIM_HORIZON"}),": start from the oldest available data record."]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"startAtTime"})}),(0,r.jsx)(n.td,{children:"Date"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:'" " (empty string)'}),(0,r.jsxs)(n.td,{children:["If set to ",(0,r.jsx)(n.code,{children:"AT_TIMESTAMP"}),", it specifies the point in time to start consumption."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"applicationName"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"Pulsar IO connector"}),(0,r.jsxs)(n.td,{children:["The name of the KCL application.  Must be unique, as it is used to define the table name for the dynamo table used for state tracking. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"By default, the application name is included in the user agent string used to make AWS requests. This can assist with troubleshooting, for example, distinguish requests made by separate connector instances."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"checkpointInterval"})}),(0,r.jsx)(n.td,{children:"long"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"60000"}),(0,r.jsx)(n.td,{children:"The frequency of the KCL checkpoint in milliseconds."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"backoffTime"})}),(0,r.jsx)(n.td,{children:"long"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"3000"}),(0,r.jsx)(n.td,{children:"The amount of time to delay between requests when the connector encounters a throttling exception from AWS Kinesis in milliseconds."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"numRetries"})}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"The number of re-attempts when the connector encounters an exception while trying to set a checkpoint."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"receiveQueueSize"})}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"1000"}),(0,r.jsxs)(n.td,{children:["The maximum number of AWS records that can be buffered inside the connector. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Once the ",(0,r.jsx)(n.code,{children:"receiveQueueSize"})," is reached, the connector does not consume any messages from Kinesis until some messages in the queue are successfully consumed."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"dynamoEndpoint"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:'" " (empty string)'}),(0,r.jsxs)(n.td,{children:["The Dynamo end-point URL, which can be found at ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/general/latest/gr/rande.html",children:"here"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cloudwatchEndpoint"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:'" " (empty string)'}),(0,r.jsxs)(n.td,{children:["The Cloudwatch end-point URL, which can be found at ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/general/latest/gr/rande.html",children:"here"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"awsEndpoint"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:'" " (empty string)'}),(0,r.jsxs)(n.td,{children:["The DynamoDB Streams end-point URL, which can be found at ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/general/latest/gr/rande.html",children:"here"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"awsRegion"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:'" " (empty string)'}),(0,r.jsxs)(n.td,{children:["The AWS region. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(n.strong,{children:"Example"}),(0,r.jsx)("br",{})," us-west-1, us-west-2"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"awsDynamodbStreamArn"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:'" " (empty string)'}),(0,r.jsx)(n.td,{children:"The DynamoDB stream arn."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"awsCredentialPluginName"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:'" " (empty string)'}),(0,r.jsxs)(n.td,{children:["The fully-qualified class name of implementation of ",(0,r.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/aws/src/main/java/org/apache/pulsar/io/aws/AwsCredentialProviderPlugin.java",children:"AwsCredentialProviderPlugin"}),".",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"awsCredentialProviderPlugin"})," has the following built-in plugs:",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)("li",{children:[(0,r.jsx)(n.code,{children:"org.apache.pulsar.io.kinesis.AwsDefaultProviderChainPlugin"}),":",(0,r.jsx)("br",{})," this plugin uses the default AWS provider chain.",(0,r.jsx)("br",{}),"For more information, see ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html#credentials-default",children:"using the default credential provider chain"}),".",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(n.code,{children:"org.apache.pulsar.io.kinesis.STSAssumeRoleProviderPlugin"}),": ",(0,r.jsx)("br",{}),"this plugin takes a configuration via the ",(0,r.jsx)(n.code,{children:"awsCredentialPluginParam"})," that describes a role to assume when running the KCL.",(0,r.jsx)("br",{}),(0,r.jsx)(n.strong,{children:"JSON configuration example"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:'{"roleArn": "arn...", "roleSessionName": "name"}'})," ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"awsCredentialPluginName"})," is a factory class which creates an AWSCredentialsProvider that is used by Kinesis sink. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"If ",(0,r.jsx)(n.code,{children:"awsCredentialPluginName"})," set to empty, the Kinesis sink creates a default AWSCredentialsProvider which accepts json-map of credentials in ",(0,r.jsx)(n.code,{children:"awsCredentialPluginParam"}),"."]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"awsCredentialPluginParam"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:'" " (empty string)'}),(0,r.jsxs)(n.td,{children:["The JSON parameter to initialize ",(0,r.jsx)(n.code,{children:"awsCredentialsProviderPlugin"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Before using the DynamoDB source connector, you need to create a configuration file through one of the following methods."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"JSON"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n   "configs": {\n      "awsEndpoint": "https://some.endpoint.aws",\n      "awsRegion": "us-east-1",\n      "awsDynamodbStreamArn": "arn:aws:dynamodb:us-west-2:111122223333:table/TestTable/stream/2015-05-11T21:21:33.291",\n      "awsCredentialPluginParam": "{\\"accessKey\\":\\"myKey\\",\\"secretKey\\":\\"my-Secret\\"}",\n      "applicationName": "My test application",\n      "checkpointInterval": "30000",\n      "backoffTime": "4000",\n      "numRetries": "3",\n      "receiveQueueSize": 2000,\n      "initialPositionInStream": "TRIM_HORIZON",\n      "startAtTime": "2019-03-05T19:28:58.000Z"\n   }\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"YAML"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'configs:\n    awsEndpoint: "https://some.endpoint.aws"\n    awsRegion: "us-east-1"\n    awsDynamodbStreamArn: "arn:aws:dynamodb:us-west-2:111122223333:table/TestTable/stream/2015-05-11T21:21:33.291"\n    awsCredentialPluginParam: "{\\"accessKey\\":\\"myKey\\",\\"secretKey\\":\\"my-Secret\\"}"\n    applicationName: "My test application"\n    checkpointInterval: 30000\n    backoffTime: 4000\n    numRetries: 3\n    receiveQueueSize: 2000\n    initialPositionInStream: "TRIM_HORIZON"\n    startAtTime: "2019-03-05T19:28:58.000Z"\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var t=s(96540);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);