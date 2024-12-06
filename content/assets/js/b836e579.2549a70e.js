"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[31320],{34772:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"functions-worker-corun","title":"Run function workers with brokers","description":"Run Pulsar function workers with brokers.","source":"@site/versioned_docs/version-3.2.x/functions-worker-corun.md","sourceDirName":".","slug":"/functions-worker-corun","permalink":"/docs/3.2.x/functions-worker-corun","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/functions-worker-corun.md","tags":[],"version":"3.2.x","frontMatter":{"id":"functions-worker-corun","title":"Run function workers with brokers","sidebar_label":"Run function workers with brokers","description":"Run Pulsar function workers with brokers."},"sidebar":"docsSidebar","previous":{"title":"Set up function workers","permalink":"/docs/3.2.x/functions-worker"},"next":{"title":"Run function workers separately","permalink":"/docs/3.2.x/functions-worker-run-separately"}}');var t=r(74848),i=r(28453);const s={id:"functions-worker-corun",title:"Run function workers with brokers",sidebar_label:"Run function workers with brokers",description:"Run Pulsar function workers with brokers."},c=void 0,u={},l=[{value:"Step 1: Enable function workers to run with brokers",id:"step-1-enable-function-workers-to-run-with-brokers",level:3},{value:"Step 2: Configure function workers to run with brokers",id:"step-2-configure-function-workers-to-run-with-brokers",level:3},{value:"Step 3: Start function workers to run with brokers",id:"step-3-start-function-workers-to-run-with-brokers",level:3}];function a(e){const n={admonition:"admonition",code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The following diagram illustrates the deployment of function workers running along with brokers."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Deployment of function workers in Pulsar",src:r(13236).A+"",width:"1040",height:"515"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Service URLs"})," in the illustration represent Pulsar service URLs that Pulsar client and Pulsar admin use to connect to a Pulsar cluster."]})}),"\n",(0,t.jsx)(n.p,{children:"To set up function workers to run with brokers, complete the following steps:"}),"\n",(0,t.jsx)(n.h3,{id:"step-1-enable-function-workers-to-run-with-brokers",children:"Step 1: Enable function workers to run with brokers"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"conf/broker.conf"})," file (",(0,t.jsx)(n.code,{children:"conf/standalone.conf"})," for Pulsar standalone), set ",(0,t.jsx)(n.code,{children:"functionsWorkerEnabled"})," to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",children:"functionsWorkerEnabled=true\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-2-configure-function-workers-to-run-with-brokers",children:"Step 2: Configure function workers to run with brokers"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"run-with-brokers"})," mode, most settings of function workers are inherited from your broker configuration (for example, configuration store settings, authentication settings, and so on). You can customize other worker settings by configuring the ",(0,t.jsx)(n.code,{children:"conf/functions_worker.yml"})," file based on your needs."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["To ensure high availability in a production deployment (a cluster with multiple brokers), set ",(0,t.jsx)(n.code,{children:"numFunctionPackageReplicas"})," to equal the number of bookies. The default value ",(0,t.jsx)(n.code,{children:"1"})," is only for one-node cluster deployment."]}),"\n",(0,t.jsxs)(n.li,{children:["To initialize distributed log metadata in runtime (",(0,t.jsx)(n.code,{children:"initializedDlogMetadata = true"}),"), ensure that it has been initialized by the ",(0,t.jsx)(n.code,{children:"bin/pulsar initialize-cluster-metadata"})," command."]}),"\n"]})}),"\n",(0,t.jsx)(n.p,{children:"When authentication is enabled on the BookKeeper cluster, you need to configure the following authentication settings for your function workers."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bookkeeperClientAuthenticationPlugin"}),": the authentication plugin name of BookKeeper client."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bookkeeperClientAuthenticationParametersName"}),": the authentication plugin parameters of BookKeeper client, including names and values."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bookkeeperClientAuthenticationParameters"}),": the authentication plugin parameters of BookKeeper client."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"step-3-start-function-workers-to-run-with-brokers",children:"Step 3: Start function workers to run with brokers"}),"\n",(0,t.jsx)(n.p,{children:"Once function workers are configured properly, you can start the brokers (function workers are running with the brokers)."}),"\n",(0,t.jsx)(n.p,{children:"To verify whether each worker is running or not, you can use the following command."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl <broker-ip>:8080/admin/v2/worker/cluster\n"})}),"\n",(0,t.jsx)(n.p,{children:"If a list of active function workers is returned, it means they have been started successfully. The output is similar to the following."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[{"workerId":"<worker-id>","workerHostname":"<worker-hostname>","port":8080}]\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},13236:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/function-workers-corun-3490654906f448b8c60ed5c52e01c0da.svg"},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var o=r(96540);const t={},i=o.createContext(t);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);