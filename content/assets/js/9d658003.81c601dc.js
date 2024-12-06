"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[67132],{97281:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"functions-debug-log-topic","title":"Debug with log topic","description":"When using Pulsar Functions, you can generate logs predefined in functions to a specified log topic and configure consumers to consume messages from the log topic.","source":"@site/versioned_docs/version-3.1.x/functions-debug-log-topic.md","sourceDirName":".","slug":"/functions-debug-log-topic","permalink":"/docs/3.1.x/functions-debug-log-topic","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/functions-debug-log-topic.md","tags":[],"version":"3.1.x","frontMatter":{"id":"functions-debug-log-topic","title":"Debug with log topic","sidebar_label":"Debug with log topic"},"sidebar":"docsSidebar","previous":{"title":"Debug with localrun mode","permalink":"/docs/3.1.x/functions-debug-localrun"},"next":{"title":"Debug with Functions CLI","permalink":"/docs/3.1.x/functions-debug-cli"}}');var i=t(74848),s=t(28453);const c={id:"functions-debug-log-topic",title:"Debug with log topic",sidebar_label:"Debug with log topic"},l=void 0,r={},a=[];function u(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"When using Pulsar Functions, you can generate logs predefined in functions to a specified log topic and configure consumers to consume messages from the log topic."}),"\n",(0,i.jsxs)(n.p,{children:["For example, the following function logs either a WARNING-level or INFO-level log based on whether the incoming string contains the word ",(0,i.jsx)(n.code,{children:"danger"})," or not."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'import org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport org.slf4j.Logger;\n\npublic class LoggingFunction implements Function<String, Void> {\n    @Override\n    public void apply(String input, Context context) {\n        Logger LOG = context.getLogger();\n        String messageId = new String(context.getMessageId());\n\n        if (input.contains("danger")) {\n            LOG.warn("A warning was received in message {}", messageId);\n        } else {\n            LOG.info("Message {} received\\nContent: {}", messageId, input);\n        }\n\n        return null;\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["As shown in the example, you can get the logger via ",(0,i.jsx)(n.code,{children:"context.getLogger()"})," and assign the logger to the ",(0,i.jsx)(n.code,{children:"LOG"})," variable of ",(0,i.jsx)(n.code,{children:"slf4j"}),", so you can define your desired logs in a function using the ",(0,i.jsx)(n.code,{children:"LOG"})," variable."]}),"\n",(0,i.jsx)(n.p,{children:"Meanwhile, you need to specify the topic that the logs can be produced to. The following is an example."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin functions create \\\n  --log-topic persistent://public/default/logging-function-logs \\\n  # Other function configs\n"})}),"\n",(0,i.jsx)(n.p,{children:"The message published to a log topic contains several properties:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"loglevel"}),": the level of the log message."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fqn"}),": the fully qualified function name that pushes this log message."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"instance"}),": the ID of the function instance that pushes this log message."]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var o=t(96540);const i={},s=o.createContext(i);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);