"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[79993],{18910:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>r});const t=JSON.parse('{"id":"functions-debug-localrun","title":"Debug with localrun mode","description":"In localrun mode, a function consumes and produces actual data to a Pulsar cluster, and mirrors how the function runs in a Pulsar cluster. This provides a way to test your function and allows you to launch a function instance on your local machine as a thread for easy debugging.","source":"@site/versioned_docs/version-3.1.x/functions-debug-localrun.md","sourceDirName":".","slug":"/functions-debug-localrun","permalink":"/docs/3.1.x/functions-debug-localrun","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/functions-debug-localrun.md","tags":[],"version":"3.1.x","frontMatter":{"id":"functions-debug-localrun","title":"Debug with localrun mode","sidebar_label":"Debug with localrun mode"},"sidebar":"docsSidebar","previous":{"title":"Debug with unit test","permalink":"/docs/3.1.x/functions-debug-unit-test"},"next":{"title":"Debug with log topic","permalink":"/docs/3.1.x/functions-debug-log-topic"}}');var i=o(74848),u=o(28453);const a={id:"functions-debug-localrun",title:"Debug with localrun mode",sidebar_label:"Debug with localrun mode"},c=void 0,s={},r=[];function l(n){const e={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,u.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"In localrun mode, a function consumes and produces actual data to a Pulsar cluster, and mirrors how the function runs in a Pulsar cluster. This provides a way to test your function and allows you to launch a function instance on your local machine as a thread for easy debugging."}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)(e.p,{children:"Debugging with localrun mode is only available for Java functions in Pulsar 2.4.0 or later versions."})}),"\n",(0,i.jsx)(e.p,{children:"Before using localrun mode, you need to add the following dependency."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.apache.pulsar</groupId>\n    <artifactId>pulsar-functions-local-runner-original</artifactId>\n    <version>${pulsar.version}</version>\n</dependency>\n\n<dependency>\n    <groupId>com.google.protobuf</groupId>\n    <artifactId>protobuf-java</artifactId>\n    <version>3.21.9</version>\n</dependency>\n"})}),"\n",(0,i.jsx)(e.p,{children:"For example, you can run your function in the following manner."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"FunctionConfig functionConfig = new FunctionConfig();\nfunctionConfig.setName(functionName);\nfunctionConfig.setInputs(Collections.singleton(sourceTopic));\nfunctionConfig.setClassName(ExclamationFunction.class.getName());\nfunctionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\nfunctionConfig.setOutput(sinkTopic);\n\nLocalRunner localRunner = LocalRunner.builder().functionConfig(functionConfig).build();\nlocalRunner.start(true);\n"})}),"\n",(0,i.jsx)(e.p,{children:"You can debug functions using an IDE. Set breakpoints and manually step through a function to debug with real data."}),"\n",(0,i.jsx)(e.p,{children:"The following code example shows how to run a function in localrun mode."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'public class ExclamationFunction implements Function<String, String> {\n\n    @Override\n    public String process(String s, Context context) throws Exception {\n        return s + "!";\n    }\n\n    public static void main(String[] args) throws Exception {\n        FunctionConfig functionConfig = new FunctionConfig();\n        functionConfig.setName("exclamation");\n        functionConfig.setInputs(Collections.singleton("input"));\n        functionConfig.setClassName(ExclamationFunction.class.getName());\n        functionConfig.setRuntime(FunctionConfig.Runtime.JAVA);\n        functionConfig.setOutput("output");\n\n        LocalRunner localRunner = LocalRunner.builder().functionConfig(functionConfig).build();\n        localRunner.start(false);\n    }\n}\n'})})]})}function d(n={}){const{wrapper:e}={...(0,u.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>a,x:()=>c});var t=o(96540);const i={},u=t.createContext(i);function a(n){const e=t.useContext(u);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),t.createElement(u.Provider,{value:e},n.children)}}}]);