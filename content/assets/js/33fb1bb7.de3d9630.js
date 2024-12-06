"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[38729],{44881:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>n,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"tiered-storage-overview","title":"Overview of tiered storage","description":"Pulsar\'s Tiered Storage feature allows older backlog data to be moved from BookKeeper to long term and cheaper storage, while still allowing clients to access the backlog as if nothing has changed.","source":"@site/versioned_docs/version-2.9.x/tiered-storage-overview.md","sourceDirName":".","slug":"/tiered-storage-overview","permalink":"/docs/2.9.x/tiered-storage-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.9.x/tiered-storage-overview.md","tags":[],"version":"2.9.x","frontMatter":{"id":"tiered-storage-overview","title":"Overview of tiered storage","sidebar_label":"Overview","original_id":"tiered-storage-overview"},"sidebar":"docsSidebar","previous":{"title":"REST APIs","permalink":"/docs/2.9.x/sql-rest-api"},"next":{"title":"AWS S3 offloader","permalink":"/docs/2.9.x/tiered-storage-aws"}}');var s=t(74848),i=t(28453);const a={id:"tiered-storage-overview",title:"Overview of tiered storage",sidebar_label:"Overview",original_id:"tiered-storage-overview"},n=void 0,d={},l=[{value:"When to use tiered storage?",id:"when-to-use-tiered-storage",level:2},{value:"How does tiered storage work?",id:"how-does-tiered-storage-work",level:2}];function c(e){const o={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:["Pulsar's ",(0,s.jsx)(o.strong,{children:"Tiered Storage"})," feature allows older backlog data to be moved from BookKeeper to long term and cheaper storage, while still allowing clients to access the backlog as if nothing has changed."]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["Tiered storage uses ",(0,s.jsx)(o.a,{href:"https://jclouds.apache.org",children:"Apache jclouds"})," to support ",(0,s.jsx)(o.a,{href:"https://aws.amazon.com/s3/",children:"Amazon S3"})," and ",(0,s.jsx)(o.a,{href:"https://cloud.google.com/storage/",children:"GCS (Google Cloud Storage)"})," for long term storage."]}),"\n",(0,s.jsxs)(o.p,{children:["With jclouds, it is easy to add support for more ",(0,s.jsx)(o.a,{href:"https://jclouds.apache.org/reference/providers/#blobstore-providers",children:"cloud storage providers"})," in the future."]}),"\n",(0,s.jsx)(o.admonition,{type:"tip",children:(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["For more information about how to use the AWS S3 offloader with Pulsar, see ",(0,s.jsx)(o.a,{href:"/docs/2.9.x/tiered-storage-aws",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["For more information about how to use the GCS offloader with Pulsar, see ",(0,s.jsx)(o.a,{href:"/docs/2.9.x/tiered-storage-gcs",children:"here"}),"."]}),"\n"]}),"\n"]})}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["Tiered storage uses ",(0,s.jsx)(o.a,{href:"http://hadoop.apache.org/",children:"Apache Hadoop"})," to support filesystems for long term storage."]}),"\n",(0,s.jsx)(o.p,{children:"With Hadoop, it is easy to add support for more filesystems in the future."}),"\n",(0,s.jsx)(o.admonition,{type:"tip",children:(0,s.jsxs)(o.p,{children:["For more information about how to use the filesystem offloader with Pulsar, see ",(0,s.jsx)(o.a,{href:"/docs/2.9.x/tiered-storage-filesystem",children:"here"}),"."]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"when-to-use-tiered-storage",children:"When to use tiered storage?"}),"\n",(0,s.jsx)(o.p,{children:"Tiered storage should be used when you have a topic for which you want to keep a very long backlog for a long time."}),"\n",(0,s.jsx)(o.p,{children:"For example, if you have a topic containing user actions which you use to train your recommendation systems, you may want to keep that data for a long time, so that if you change your recommendation algorithm, you can rerun it against your full user history."}),"\n",(0,s.jsx)(o.h2,{id:"how-does-tiered-storage-work",children:"How does tiered storage work?"}),"\n",(0,s.jsxs)(o.p,{children:["A topic in Pulsar is backed by a ",(0,s.jsx)(o.strong,{children:"log"}),", known as a ",(0,s.jsx)(o.strong,{children:"managed ledger"}),". This log is composed of an ordered list of segments. Pulsar only writes to the final segment of the log. All previous segments are sealed. The data within the segment is immutable. This is known as a ",(0,s.jsx)(o.strong,{children:"segment oriented architecture"}),"."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Tiered storage",src:t(70976).A+"",title:"Tiered Storage",width:"1110",height:"697"})}),"\n",(0,s.jsx)(o.p,{children:"The tiered storage offloading mechanism takes advantage of segment oriented architecture. When offloading is requested, the segments of the log are copied one-by-one to tiered storage. All segments of the log (apart from the current segment) written to tiered storage can be offloaded."}),"\n",(0,s.jsxs)(o.p,{children:["Data written to BookKeeper is replicated to 3 physical machines by default. However, once a segment is sealed in BookKeeper, it becomes immutable and can be copied to long term storage. Long term storage can achieve cost savings by using mechanisms such as ",(0,s.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction",children:"Reed-Solomon error correction"})," to require fewer physical copies of data."]}),"\n",(0,s.jsx)(o.p,{children:"Before offloading ledgers to long term storage, you need to configure buckets, credentials, and other properties for the cloud storage service. Additionally, Pulsar uses multi-part objects to upload the segment data and brokers may crash while uploading the data. It is recommended that you add a life cycle rule for your bucket to expire incomplete multi-part upload after a day or two days to avoid getting charged for incomplete uploads. Moreover, you can trigger the offloading operation manually (via REST API or CLI) or automatically (via CLI)."}),"\n",(0,s.jsx)(o.p,{children:"After offloading ledgers to long term storage, you can still query data in the offloaded ledgers with Pulsar SQL."}),"\n",(0,s.jsxs)(o.p,{children:["For more information about tiered storage for Pulsar topics, see ",(0,s.jsx)(o.a,{href:"https://github.com/apache/pulsar/wiki/PIP-17:-Tiered-storage-for-Pulsar-topics",children:"here"}),"."]})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},70976:(e,o,t)=>{t.d(o,{A:()=>r});const r=t.p+"assets/images/pulsar-tiered-storage-72d8b53762992cfeaa58ae3b48dd2522.png"},28453:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>n});var r=t(96540);const s={},i=r.createContext(s);function a(e){const o=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:o},e.children)}}}]);