"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[16646],{35161:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"functions-worker-stateful","title":"Enable stateful functions","description":"Enable stateful function feature in Pulsar function workers.","source":"@site/versioned_docs/version-4.0.x/functions-worker-stateful.md","sourceDirName":".","slug":"/functions-worker-stateful","permalink":"/docs/4.0.x/functions-worker-stateful","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-4.0.x/functions-worker-stateful.md","tags":[],"version":"4.0.x","frontMatter":{"id":"functions-worker-stateful","title":"Enable stateful functions","sidebar_label":"Enable stateful functions","description":"Enable stateful function feature in Pulsar function workers."},"sidebar":"docsSidebar","previous":{"title":"Configure temporary file path","permalink":"/docs/4.0.x/functions-worker-temp-file-path"},"next":{"title":"Configure function workers for geo-replicated clusters","permalink":"/docs/4.0.x/functions-worker-for-geo-replication"}}');var r=t(74848),o=t(28453);const i={id:"functions-worker-stateful",title:"Enable stateful functions",sidebar_label:"Enable stateful functions",description:"Enable stateful function feature in Pulsar function workers."},l=void 0,c={},a=[];function u(e){const n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["When the stateful APIs of Pulsar Functions are required \u2013 for example, ",(0,r.jsx)(n.code,{children:"putState()"})," and ",(0,r.jsx)(n.code,{children:"queryState()"})," related interfaces \u2013 you need to enable the stateful function feature in function workers."]})}),"\n",(0,r.jsx)(n.p,{children:"To enable the stateful function feature in function workers, complete the following steps."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Enable the ",(0,r.jsx)(n.code,{children:"streamStorage"})," service in BookKeeper.\nCurrently, the service uses the NAR package, so you need to set the configuration in the ",(0,r.jsx)(n.code,{children:"conf/bookkeeper.conf"})," file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"##################################################################\n##################################################################\n# Settings below are used by stream/table service\n##################################################################\n##################################################################\n\n### Grpc Server ###\n\n# the grpc server port to listen on. default is 4181\nstorageserver.grpc.port=4181\n\n### Dlog Settings for table service ###\n\n#### Replication Settings\ndlog.bkcEnsembleSize=3\ndlog.bkcWriteQuorumSize=2\ndlog.bkcAckQuorumSize=2\n\n### Storage ###\n\n# local storage directories for storing table ranges data (e.g. rocksdb sst files)\nstorage.range.store.dirs=data/bookkeeper/ranges\n\n# whether the storage server capable of serving readonly tables. default is false.\nstorage.serve.readonly.tables=false\n\n# the cluster controller schedule interval, in milliseconds. default is 30 seconds.\nstorage.cluster.controller.schedule.interval.ms=30000\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["After starting the bookie, use the following methods to check whether the ",(0,r.jsx)(n.code,{children:"streamStorage"})," service has been started successfully."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Input:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"telnet localhost 4181\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"Trying 127.0.0.1...\nConnected to localhost.\nEscape character is '^]'.\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Configure ",(0,r.jsx)(n.code,{children:"stateStorageServiceUrl"})," in the ",(0,r.jsx)(n.code,{children:"conf/functions_worker.yml"})," file.\n",(0,r.jsx)(n.code,{children:"bk-service-url"})," is the service URL pointing to the BookKeeper table service."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"stateStorageServiceUrl: bk://<bk-service-url>:4181\n"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(96540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);