"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[79523],{34576:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"functions-develop-admin-api","title":"Call Pulsar admin APIs","description":"Learn to call Pulsar admin APIs.","source":"@site/versioned_docs/version-4.0.x/functions-develop-admin-api.md","sourceDirName":".","slug":"/functions-develop-admin-api","permalink":"/docs/4.0.x/functions-develop-admin-api","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-4.0.x/functions-develop-admin-api.md","tags":[],"version":"4.0.x","frontMatter":{"id":"functions-develop-admin-api","title":"Call Pulsar admin APIs","sidebar_label":"Call Pulsar admin APIs","description":"Learn to call Pulsar admin APIs."},"sidebar":"docsSidebar","previous":{"title":"Configure state storage","permalink":"/docs/4.0.x/functions-develop-state"},"next":{"title":"Use schema registry","permalink":"/docs/4.0.x/functions-develop-schema-registry"}}');var i=t(74848),a=t(28453);const o={id:"functions-develop-admin-api",title:"Call Pulsar admin APIs",sidebar_label:"Call Pulsar admin APIs",description:"Learn to call Pulsar admin APIs."},r=void 0,c={},l=[];function u(e){const n={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Pulsar Functions that use the Java SDK have access to the Pulsar admin client, which allows the Pulsar admin client to manage API calls to your Pulsar clusters."}),"\n",(0,i.jsxs)(n.p,{children:["Below is an example of how to use the Pulsar admin client exposed from the function ",(0,i.jsx)(n.code,{children:"context"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'import org.apache.pulsar.client.admin.PulsarAdmin;\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\n\n/**\n * In this particular example, for every input message,\n * the function resets the cursor of the current function\'s subscription to a\n * specified timestamp.\n */\npublic class CursorManagementFunction implements Function<String, String> {\n\n    @Override\n    public String process(String input, Context context) throws Exception {\n        PulsarAdmin adminClient = context.getPulsarAdmin();\n        if (adminClient != null) {\n            String topic = context.getCurrentRecord().getTopicName().isPresent() ?\n                    context.getCurrentRecord().getTopicName().get() : null;\n            String subName = context.getTenant() + "/" + context.getNamespace() + "/" + context.getFunctionName();\n            if (topic != null) {\n                // 1578188166 below is a random-pick timestamp\n                adminClient.topics().resetCursor(topic, subName, 1578188166);\n                return "reset cursor successfully";\n            }\n        }\n        return null;\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["To enable your function to get access to the Pulsar admin client, you need to set ",(0,i.jsx)(n.code,{children:"exposeAdminClientEnabled=true"})," in the ",(0,i.jsx)(n.code,{children:"conf/functions_worker.yml"})," file. To test whether it is enabled or not, you can use the command ",(0,i.jsx)(n.code,{children:"pulsar-admin functions localrun"})," with the flag ",(0,i.jsx)(n.code,{children:"--web-service-url"})," as follows."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bin/pulsar-admin functions localrun \\\n --jar $PWD/my-functions.jar \\\n --classname my.package.CursorManagementFunction \\\n --web-service-url http://pulsar-web-service:8080 \\\n # Other function configs\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(96540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);