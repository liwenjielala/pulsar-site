"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5096],{64911:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"io-twitter-source","title":"Twitter Firehose source connector","description":"You can download all the Pulsar connectors on download page.","source":"@site/versioned_docs/version-2.11.x/io-twitter-source.md","sourceDirName":".","slug":"/io-twitter-source","permalink":"/docs/2.11.x/io-twitter-source","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/io-twitter-source.md","tags":[],"version":"2.11.x","frontMatter":{"id":"io-twitter-source","title":"Twitter Firehose source connector","sidebar_label":"Twitter Firehose source connector"}}');var s=r(74848),i=r(28453);const o={id:"io-twitter-source",title:"Twitter Firehose source connector",sidebar_label:"Twitter Firehose source connector"},c=void 0,d={},h=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3}];function l(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["You can download all the Pulsar connectors on ",(0,s.jsx)(t.a,{href:"pathname:///download",children:"download page"}),"."]})}),"\n",(0,s.jsx)(t.p,{children:"The Twitter Firehose source connector receives tweets from Twitter Firehose and\nwrites the tweets to Pulsar topics."}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(t.p,{children:"The configuration of the Twitter Firehose source connector has the following properties."}),"\n",(0,s.jsx)(t.h3,{id:"property",children:"Property"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"consumerKey"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:'" " (empty string)'}),(0,s.jsxs)(t.td,{children:["The twitter OAuth consumer key.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"For more information, see ",(0,s.jsx)(t.a,{href:"https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens",children:"Access tokens"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"consumerSecret"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:'" " (empty string)'}),(0,s.jsx)(t.td,{children:"The twitter OAuth consumer secret."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"token"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:'" " (empty string)'}),(0,s.jsx)(t.td,{children:"The twitter OAuth token."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"tokenSecret"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:'" " (empty string)'}),(0,s.jsx)(t.td,{children:"The twitter OAuth secret."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"guestimateTweetTime"})}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsxs)(t.td,{children:["Most firehose events have null createdAt time.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"If ",(0,s.jsx)(t.code,{children:"guestimateTweetTime"})," set to true, the connector estimates the createdTime of each firehose event to be current time."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"clientName"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"openconnector-twitter-source"}),(0,s.jsx)(t.td,{children:"The twitter firehose client name."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"clientHosts"})}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"Constants.STREAM_HOST"}),(0,s.jsx)(t.td,{children:"The twitter firehose hosts to which client connects."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"clientBufferSize"})}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"50000"}),(0,s.jsx)(t.td,{children:"The buffer size for buffering tweets fetched from twitter firehose."})]})]})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["For more information about OAuth credentials, see ",(0,s.jsx)(t.a,{href:"https://developer.twitter.com/en.html",children:"Twitter developers portal"}),"."]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);