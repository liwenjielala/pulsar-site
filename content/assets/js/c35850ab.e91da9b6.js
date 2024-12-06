"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[10500],{35026:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"io-kinesis","title":"AWS Kinesis Connector","description":"Sink","source":"@site/versioned_docs/version-2.4.2/io-kinesis.md","sourceDirName":".","slug":"/io-kinesis","permalink":"/docs/2.4.2/io-kinesis","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.2/io-kinesis.md","tags":[],"version":"2.4.2","frontMatter":{"id":"io-kinesis","title":"AWS Kinesis Connector","sidebar_label":"AWS Kinesis Connector","original_id":"io-kinesis"}}');var t=i(74848),r=i(28453);const a={id:"io-kinesis",title:"AWS Kinesis Connector",sidebar_label:"AWS Kinesis Connector",original_id:"io-kinesis"},l=void 0,d={},o=[{value:"Sink",id:"sink",level:2},{value:"Sink Configuration Options",id:"sink-configuration-options",level:3},{value:"Message Formats",id:"message-formats",level:3},{value:"<strong>ONLY_RAW_PAYLOAD</strong>",id:"only_raw_payload",level:4},{value:"<strong>FULL_MESSAGE_IN_JSON</strong>",id:"full_message_in_json",level:4},{value:"<strong>FULL_MESSAGE_IN_FB</strong>",id:"full_message_in_fb",level:4}];function c(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"sink",children:"Sink"}),"\n",(0,t.jsx)(s.p,{children:"The Kinesis Sink connector is used to pull data from Pulsar topics and persist the data into\nAWS Kinesis."}),"\n",(0,t.jsx)(s.h3,{id:"sink-configuration-options",children:"Sink Configuration Options"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Required"}),(0,t.jsx)(s.th,{children:"Default"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"awsEndpoint"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"true"})}),(0,t.jsx)(s.td,{children:"null"}),(0,t.jsxs)(s.td,{children:["kinesis end-point url can be found at : ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/general/latest/gr/rande.html",children:"https://docs.aws.amazon.com/general/latest/gr/rande.html"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"awsRegion"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"true"})}),(0,t.jsx)(s.td,{children:"null"}),(0,t.jsx)(s.td,{children:"appropriate aws region eg: us-west-1, us-west-2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"awsKinesisStreamName"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"true"})}),(0,t.jsx)(s.td,{children:"null"}),(0,t.jsx)(s.td,{children:"kinesis stream name"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"awsCredentialPluginName"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"false"})}),(0,t.jsx)(s.td,{children:"null"}),(0,t.jsxs)(s.td,{children:["Fully-Qualified class name of implementation of ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/tree/master//pulsar-io/kinesis/src/main/java/org/apache/pulsar/io/kinesis/AwsCredentialProviderPlugin.java",children:"AwsCredentialProviderPlugin"}),". It is a factory class which creates an AWSCredentialsProvider that will be used by Kinesis Sink. If it is empty then KinesisSink will create a default AWSCredentialsProvider which accepts json-map of credentials in ",(0,t.jsx)(s.code,{children:"awsCredentialPluginParam"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"awsCredentialPluginParam"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"false"})}),(0,t.jsx)(s.td,{children:"null"}),(0,t.jsxs)(s.td,{children:["json-parameters to initialize ",(0,t.jsx)(s.code,{children:"AwsCredentialsProviderPlugin"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"messageFormat"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"true"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"ONLY_RAW_PAYLOAD"})}),(0,t.jsx)(s.td,{children:"Message format in which kinesis sink converts pulsar messages and publishes to kinesis streams"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"message-formats",children:"Message Formats"}),"\n",(0,t.jsx)(s.p,{children:"The available message formats are listed as below:"}),"\n",(0,t.jsx)(s.h4,{id:"only_raw_payload",children:(0,t.jsx)(s.strong,{children:"ONLY_RAW_PAYLOAD"})}),"\n",(0,t.jsx)(s.p,{children:"Kinesis sink directly publishes pulsar message payload as a message into the configured kinesis stream."}),"\n",(0,t.jsx)(s.h4,{id:"full_message_in_json",children:(0,t.jsx)(s.strong,{children:"FULL_MESSAGE_IN_JSON"})}),"\n",(0,t.jsx)(s.p,{children:"Kinesis sink creates a json payload with pulsar message payload, properties and encryptionCtx, and publishes json payload into the configured kinesis stream."}),"\n",(0,t.jsx)(s.h4,{id:"full_message_in_fb",children:(0,t.jsx)(s.strong,{children:"FULL_MESSAGE_IN_FB"})}),"\n",(0,t.jsx)(s.p,{children:"Kinesis sink creates a flatbuffer serialized paylaod with pulsar message payload, properties and encryptionCtx, and publishes flatbuffer payload into the configured kinesis stream."})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>l});var n=i(96540);const t={},r=n.createContext(t);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);