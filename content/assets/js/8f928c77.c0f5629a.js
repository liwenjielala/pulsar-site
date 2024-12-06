"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[41129],{36490:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"io-file-source","title":"File source connector","description":"The File source connector pulls messages from files in directories and persists the messages to Pulsar topics.","source":"@site/versioned_docs/version-2.6.3/io-file-source.md","sourceDirName":".","slug":"/io-file-source","permalink":"/docs/2.6.3/io-file-source","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.3/io-file-source.md","tags":[],"version":"2.6.3","frontMatter":{"id":"io-file-source","title":"File source connector","sidebar_label":"File source connector","original_id":"io-file-source"}}');var r=s(74848),l=s(28453);const t={id:"io-file-source",title:"File source connector",sidebar_label:"File source connector",original_id:"io-file-source"},c=void 0,d={},o=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2}];function a(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The File source connector pulls messages from files in directories and persists the messages to Pulsar topics."}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"The configuration of the File source connector has the following properties."}),"\n",(0,r.jsx)(n.h3,{id:"property",children:"Property"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"inputDirectory"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"No default value"}),(0,r.jsx)(n.td,{children:"The input directory to pull files."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"recurse"})}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"Whether to pull files from subdirectory or not."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"keepFile"})}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"If set to true, the file is not deleted after it is processed, which means the file can be picked up continually."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"fileFilter"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"[^\\.].*"}),(0,r.jsx)(n.td,{children:"The file whose name matches the given regular expression is picked up."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pathFilter"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"NULL"}),(0,r.jsxs)(n.td,{children:["If ",(0,r.jsx)(n.code,{children:"recurse"})," is set to true, the subdirectory whose path matches the given regular expression is scanned."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"minimumFileAge"})}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsxs)(n.td,{children:["The minimum age that a file can be processed. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Any file younger than ",(0,r.jsx)(n.code,{children:"minimumFileAge"})," (according to the last modification date) is ignored."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"maximumFileAge"})}),(0,r.jsx)(n.td,{children:"Long"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"Long.MAX_VALUE"}),(0,r.jsxs)(n.td,{children:["The maximum age that a file can be processed. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Any file older than ",(0,r.jsx)(n.code,{children:"maximumFileAge"})," (according to last modification date) is ignored."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"minimumSize"})}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"The minimum size (in bytes) that a file can be processed."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"maximumSize"})}),(0,r.jsx)(n.td,{children:"Double"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"Double.MAX_VALUE"}),(0,r.jsx)(n.td,{children:"The maximum size (in bytes) that a file can be processed."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ignoreHiddenFiles"})}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"Whether the hidden files should be ignored or not."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pollingInterval"})}),(0,r.jsx)(n.td,{children:"Long"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"10000L"}),(0,r.jsx)(n.td,{children:"Indicates how long to wait before performing a directory listing."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"numWorkers"})}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsxs)(n.td,{children:["The number of worker threads that process files.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})," This allows you to process a larger number of files concurrently. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"However, setting this to a value greater than 1 makes the data from multiple files mixed in the target topic."]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Before using the File source connector, you need to create a configuration file through one of the following methods."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"JSON"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'\n{\n    "inputDirectory": "/Users/david",\n    "recurse": true,\n    "keepFile": true,\n    "fileFilter": "[^\\\\.].*",\n    "pathFilter": "*",\n    "minimumFileAge": 0,\n    "maximumFileAge": 9999999999,\n    "minimumSize": 1,\n    "maximumSize": 5000000,\n    "ignoreHiddenFiles": true,\n    "pollingInterval": 5000,\n    "numWorkers": 1\n}\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"YAML"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'\nconfigs:\n    inputDirectory: "/Users/david"\n    recurse: true\n    keepFile: true\n    fileFilter: "[^\\\\.].*"\n    pathFilter: "*"\n    minimumFileAge: 0\n    maximumFileAge: 9999999999\n    minimumSize: 1\n    maximumSize: 5000000\n    ignoreHiddenFiles: true\n    pollingInterval: 5000\n    numWorkers: 1\n\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.p,{children:"Here is an example of using the File source connecter."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pull a Pulsar image."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n$ docker pull apachepulsar/pulsar:{version}\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start Pulsar standalone."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n$ docker run -d -it -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-standalone apachepulsar/pulsar:{version} bin/pulsar standalone\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a configuration file ",(0,r.jsx)(n.em,{children:"file-connector.yaml"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'\nconfigs:\n    inputDirectory: "/opt"\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Copy the configuration file ",(0,r.jsx)(n.em,{children:"file-connector.yaml"})," to the container."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n$ docker cp connectors/file-connector.yaml pulsar-standalone:/pulsar/\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Download the File source connector."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n$ curl -O https://mirrors.tuna.tsinghua.edu.cn/apache/pulsar/pulsar-{version}/connectors/pulsar-io-file-{version}.nar\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start the File source connector."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n$ docker exec -it pulsar-standalone /bin/bash\n\n$ ./bin/pulsar-admin sources localrun \\\n--archive /pulsar/pulsar-io-file-{version}.nar \\\n--name file-test \\\n--destination-topic-name  pulsar-file-test \\\n--source-config-file /pulsar/file-connector.yaml\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start a consumer."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n./bin/pulsar-client consume -s file-test -n 0 pulsar-file-test\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Write the message to the file ",(0,r.jsx)(n.em,{children:"test.txt"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'\necho "hello world!" > /opt/test.txt\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"The following information appears on the consumer terminal window."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\n----- got message -----\nhello world!\n\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(96540);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);