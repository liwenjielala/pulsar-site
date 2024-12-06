"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[21363],{47935:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>h,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"versioned/pulsar-2.7.2","title":"Apache Pulsar 2.7.2","description":"2021-05-11","source":"@site/release-notes/versioned/pulsar-2.7.2.md","sourceDirName":"versioned","slug":"/versioned/pulsar-2.7.2","permalink":"/release-notes/versioned/pulsar-2.7.2","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-2.7.2.md","tags":[],"version":"current","frontMatter":{"id":"pulsar-2.7.2","title":"Apache Pulsar 2.7.2","sidebar_label":"Apache Pulsar 2.7.2"}}');var r=l(74848),n=l(28453);const a={id:"pulsar-2.7.2",title:"Apache Pulsar 2.7.2",sidebar_label:"Apache Pulsar 2.7.2"},t=void 0,h={},c=[{value:"2021-05-11",id:"2021-05-11",level:4},{value:"Broker",id:"broker",level:4},{value:"Bookie",id:"bookie",level:4},{value:"Dependency upgrade",id:"dependency-upgrade",level:4},{value:"Proxy",id:"proxy",level:4},{value:"Pulsar Admin",id:"pulsar-admin",level:4},{value:"Pulsar SQL",id:"pulsar-sql",level:4},{value:"Docker",id:"docker",level:4},{value:"Client",id:"client",level:4},{value:"Functions and Pulsar IO",id:"functions-and-pulsar-io",level:4},{value:"Tiered Storage",id:"tiered-storage",level:4}];function p(e){const s={a:"a",code:"code",h4:"h4",li:"li",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h4,{id:"2021-05-11",children:"2021-05-11"}),"\n",(0,r.jsx)(s.h4,{id:"broker",children:"Broker"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Fix the useless retry when the maximum number of subscriptions is reached ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/9991",children:"#9991"})]}),"\n",(0,r.jsxs)(s.li,{children:["wrong timeunit in updating lastLedgerCreationInitiationTimestamp ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10049",children:"#10049"})]}),"\n",(0,r.jsxs)(s.li,{children:["Avoid spammy logs in case of BK problems ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10088",children:"#10088"})]}),"\n",(0,r.jsxs)(s.li,{children:["Fix NonDurableCursorImpl initialPosition by startCursorPosition greater than lastConfirmedEntry problem. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10095",children:"#10095"})]}),"\n",(0,r.jsxs)(s.li,{children:["fix 8115 Some partitions get stuck after adding additional consumers to the KEY_SHARED subscriptions ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10096",children:"#10096"})]}),"\n",(0,r.jsxs)(s.li,{children:["Add underReplicate state in the topic internal stats ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10013",children:"#10013"})]}),"\n",(0,r.jsxs)(s.li,{children:["Continue graceful shutdown even if web service closing fails ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/9835",children:"#9835"})]}),"\n",(0,r.jsxs)(s.li,{children:["Issue 9804: Allow to enable or disable the cursor metrics ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/9814",children:"#9814"})]}),"\n",(0,r.jsxs)(s.li,{children:["Allow to configure BookKeeper all BK client features using bookkeeper_ prefix ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/9232",children:"#9232"})]}),"\n",(0,r.jsxs)(s.li,{children:["Fix NPEs and thread safety issue in PersistentReplicator ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/9763",children:"#9763"})]}),"\n",(0,r.jsxs)(s.li,{children:["Non Persistent Topics: Auto-create partitions even when the auto-creation is disabled ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/9786",children:"#9786"})]}),"\n",(0,r.jsxs)(s.li,{children:["Issue 9602: Add schema type validation ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/9797",children:"#9797"})]}),"\n",(0,r.jsxs)(s.li,{children:["Fix message not dispatch for key_shared sub type in non-persistent subscription ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/9826",children:"#9826"})]}),"\n",(0,r.jsxs)(s.li,{children:["zkBookieRackAffinityMapping bug to support for bookkeeper dnsResolver ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/9894",children:"#9894"})]}),"\n",(0,r.jsxs)(s.li,{children:["Messaging Fix delay message block ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10078",children:"#10078"})]}),"\n",(0,r.jsxs)(s.li,{children:["Make PersistentDispatcherMultipleConsumers.readMoreEntries synchronized ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10435",children:"#10435"})]}),"\n",(0,r.jsxs)(s.li,{children:["Fix issue in reusing EntryBatchIndexesAcks instances ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10400",children:"#10400"})]}),"\n",(0,r.jsxs)(s.li,{children:["Fix schema not added when subscribing an empty topic without schema ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/9853",children:"#9853"})]}),"\n",(0,r.jsxs)(s.li,{children:["Support advertisedListeners for standalone ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10297",children:"#10297"})]}),"\n",(0,r.jsxs)(s.li,{children:["Fix schema ledger deletion when deleting topic with delete schema. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10383",children:"#10383"})]}),"\n",(0,r.jsxs)(s.li,{children:["Fix primitive schema upload for ALWAYS_COMPATIBLE strategy. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10386",children:"#10386"})]}),"\n",(0,r.jsxs)(s.li,{children:["Fix schema type check issue when use always compatible strategy ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10367",children:"#10367"})]}),"\n",(0,r.jsxs)(s.li,{children:["Fix CPU 100% when deleting namespace ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10337",children:"#10337"})]}),"\n",(0,r.jsxs)(s.li,{children:["add return statement to exit asyncMarkDelete early on failure ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10272",children:"#10272"})]}),"\n",(0,r.jsxs)(s.li,{children:["Adding more permits debug statements to better diagnose permit issues ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10217",children:"#10217"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"bookie",children:"Bookie"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Fallback to PULSAR_GC if BOOKIE_GC is not defined ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/9621",children:"#9621"})]}),"\n",(0,r.jsxs)(s.li,{children:["Fallback to PULSAR_EXTRA_OPTS if BOOKIE_EXTRA_OPTS isn't defined ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10397",children:"#10397"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"dependency-upgrade",children:"Dependency upgrade"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Upgrade Bouncy Castle to 1.68 ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/9199",children:"#9199"})]}),"\n",(0,r.jsxs)(s.li,{children:["Upgrade athenz version and remove yahoo.bintray.com repository ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10471",children:"#10471"})]}),"\n",(0,r.jsxs)(s.li,{children:["Upgrade Netty version to 4.1.60.final ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10073",children:"#10073"})]}),"\n",(0,r.jsxs)(s.li,{children:["Upgrade commons-io to address CVE-2021-29425 ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10287",children:"#10287"})]}),"\n",(0,r.jsxs)(s.li,{children:["Upgrade Jetty libraries to 9.4.39.v20210325 ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10177",children:"#10177"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"proxy",children:"Proxy"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Issue 10221: Fix authorization error while using proxy and ",(0,r.jsx)(s.code,{children:"Prefix"})," subscription authentication mode ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10226",children:"#10226"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"pulsar-admin",children:"Pulsar Admin"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Add get version command for pulsar rest api, pulsar-admin, pulsar-client ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/9975",children:"#9975"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"pulsar-sql",children:"Pulsar SQL"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Using pulsar SQL query messages will appear NoSuchLedger\u2026 ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/9910",children:"#9910"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"docker",children:"Docker"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Allow DockerImage to be built from source tarball ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/9846",children:"#9846"})]}),"\n",(0,r.jsxs)(s.li,{children:["Fix docker standalone image error ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10359",children:"#10359"})]}),"\n",(0,r.jsxs)(s.li,{children:['Suppress printing of "skip Processing" lines in startup scripts ',(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10275",children:"#10275"})]}),"\n",(0,r.jsxs)(s.li,{children:["Issue 10058",":apply-config-from-env",".py to commented default values ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10060",children:"#10060"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"client",children:"Client"}),"\n",(0,r.jsx)(s.h4,{id:"functions-and-pulsar-io",children:"Functions and Pulsar IO"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Allow customizable function logging ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10389",children:"#10389"})]}),"\n",(0,r.jsxs)(s.li,{children:["Pass through record properties from Pulsar Sources ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/9943",children:"#9943"})]}),"\n",(0,r.jsxs)(s.li,{children:["ISSUE 10153: Pulsar Functions Go fix time unit ns -> ms ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10160",children:"#10160"})]}),"\n",(0,r.jsxs)(s.li,{children:["Kinesis Connector: Fix kinesis sink can not retry to send messages ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10420",children:"#10420"})]}),"\n",(0,r.jsxs)(s.li,{children:["Kinesis Connector: Fix null error messages in onFailure exception in KinesisSink. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/10416",children:"#10416"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"tiered-storage",children:"Tiered Storage"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Prevent Class Loader Leak; Restore Offloader Directory Override ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/9878",children:"#9878"})]}),"\n",(0,r.jsxs)(s.li,{children:["Add logs for cleanup offloaded data operation ",(0,r.jsx)(s.a,{href:"https://github.com/apache/pulsar/pull/9852",children:"#9852"})]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,s,l)=>{l.d(s,{R:()=>a,x:()=>t});var i=l(96540);const r={},n=i.createContext(r);function a(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);