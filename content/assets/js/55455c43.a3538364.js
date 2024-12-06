"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[53775],{85266:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"functions-runtime-process","title":"Configure process runtime","description":"Configure process runtime for functions in Pulsar.","source":"@site/versioned_docs/version-4.0.x/functions-runtime-process.md","sourceDirName":".","slug":"/functions-runtime-process","permalink":"/docs/4.0.x/functions-runtime-process","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-4.0.x/functions-runtime-process.md","tags":[],"version":"4.0.x","frontMatter":{"id":"functions-runtime-process","title":"Configure process runtime","sidebar_label":"Configure process runtime","description":"Configure process runtime for functions in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"Configure thread runtime","permalink":"/docs/4.0.x/functions-runtime-thread"},"next":{"title":"Configure Kubernetes runtime","permalink":"/docs/4.0.x/functions-runtime-kubernetes"}}');var o=t(74848),r=t(28453);const s={id:"functions-runtime-process",title:"Configure process runtime",sidebar_label:"Configure process runtime",description:"Configure process runtime for functions in Pulsar."},c=void 0,a={},u=[{value:"Set runtime parameter with configuration file",id:"set-runtime-parameter-with-configuration-file",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["You can use the default configurations of process runtime in the ",(0,o.jsx)(n.code,{children:"conf/functions_worker.yml"})," file."]}),"\n",(0,o.jsx)(n.p,{children:"If you want to customize more parameters, refer to the following example."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"functionRuntimeFactoryClassName: org.apache.pulsar.functions.runtime.process.ProcessRuntimeFactory\nfunctionRuntimeFactoryConfigs:\n  # the directory for storing the function logs\n  logDirectory:\n  # change the jar location only when you put the java instance jar in a different location\n  javaInstanceJarLocation:\n  # change the python instance location only when you put the python instance jar in a different location\n  pythonInstanceLocation:\n  # change the extra dependencies location:\n  extraFunctionDependenciesDir:\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For more details, see ",(0,o.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/runtime/src/main/java/org/apache/pulsar/functions/runtime/process/ProcessRuntimeFactoryConfig.java",children:"code"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"set-runtime-parameter-with-configuration-file",children:"Set runtime parameter with configuration file"}),"\n",(0,o.jsxs)(n.p,{children:["Pulsar Functions now supports setting runtime parameters using a configuration file ",(0,o.jsx)(n.strong,{children:"in Python"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example"})}),"\n",(0,o.jsxs)(n.p,{children:["You can start a Python runtime using the configuration file ",(0,o.jsx)(n.code,{children:"config.ini"})," with the following command."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"pulsar-admin functions localrun \\\n  --py /path/to/python_instance.py \\\n  --config-file /path/to/config.ini \\\n  --classname MyFunction \\\n  --logging_level debug \\\n  --inputs persistent://public/default/my-input-topic \\\n  --output persistent://public/default/my-output-topic \\\n  --log-topic persistent://public/default/functions-logs\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:" --config-file"})," is the path to the configuration file. Note that:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:" --config-file"})," should be written in ",(0,o.jsx)(n.code,{children:".ini"})," format, with each parameter being configured as ",(0,o.jsx)(n.code,{children:"key = value"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ini",children:"[DEFAULT]\nlogging_level = info\nmax_pending_async_requests = 1000\nmax_concurrent_requests = 50\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["When you set a parameter through both the configuration file and the command line, like ",(0,o.jsx)(n.code,{children:"logging_level"})," in the example above, the value set through the command line will ",(0,o.jsx)(n.strong,{children:"take precedence over"})," the one set through the configuration file. As a result, the value of ",(0,o.jsx)(n.code,{children:"logging_level"})," is ",(0,o.jsx)(n.code,{children:"debug"}),"."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);