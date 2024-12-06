"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[51902],{87631:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"CVE-2023-30429","title":"CVE-2023-30429: Apache Pulsar: Incorrect Authorization for Function Worker when using mTLS Authentication through Pulsar Proxy","description":"Affected versions:","source":"@site/security/CVE-2023-30429.md","sourceDirName":".","slug":"/CVE-2023-30429","permalink":"/security/CVE-2023-30429","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),i=n(28453);const o={},c="CVE-2023-30429: Apache Pulsar: Incorrect Authorization for Function Worker when using mTLS Authentication through Pulsar Proxy",a={},u=[{value:"Affected versions:",id:"affected-versions",level:2},{value:"Description:",id:"description",level:2},{value:"Credit:",id:"credit",level:2},{value:"References:",id:"references",level:2}];function h(e){const r={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"cve-2023-30429-apache-pulsar-incorrect-authorization-for-function-worker-when-using-mtls-authentication-through-pulsar-proxy",children:"CVE-2023-30429: Apache Pulsar: Incorrect Authorization for Function Worker when using mTLS Authentication through Pulsar Proxy"})}),"\n",(0,s.jsx)(r.h2,{id:"affected-versions",children:"Affected versions:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Apache Pulsar before 2.10.4"}),"\n",(0,s.jsx)(r.li,{children:"Apache Pulsar 2.11.0"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description:"}),"\n",(0,s.jsx)(r.p,{children:"Incorrect Authorization vulnerability in Apache Software Foundation Apache Pulsar."}),"\n",(0,s.jsx)(r.p,{children:"This issue affects Apache Pulsar: before 2.10.4, and 2.11.0."}),"\n",(0,s.jsx)(r.p,{children:"When a client connects to the Pulsar Function Worker via the Pulsar Proxy where the Pulsar Proxy uses mTLS authentication to authenticate with the Pulsar Function Worker, the Pulsar Function Worker incorrectly performs authorization by using the Proxy's role for authorization instead of the client's role, which can lead to privilege escalation, especially if the proxy is configured with a superuser role."}),"\n",(0,s.jsx)(r.p,{children:"The recommended mitigation for impacted users is to upgrade the Pulsar Function Worker to a patched version."}),"\n",(0,s.jsxs)(r.p,{children:["2.10 Pulsar Function Worker users should upgrade to at least 2.10.4.",(0,s.jsx)("br",{}),"\n2.11 Pulsar Function Worker users should upgrade to at least 2.11.1.",(0,s.jsx)("br",{}),"\n3.0 Pulsar Function Worker users are unaffected.",(0,s.jsx)("br",{}),"\nAny users running the Pulsar Function Worker for 2.9.* and earlier should upgrade to one of the above patched versions.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(r.h2,{id:"credit",children:"Credit:"}),"\n",(0,s.jsx)(r.p,{children:"Michael Marshall of DataStax (finder)"}),"\n",(0,s.jsx)(r.h2,{id:"references",children:"References:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://lists.apache.org/thread/v0gcvvxswr830314q4b1kybsfmcf3jf8",children:"https://lists.apache.org/thread/v0gcvvxswr830314q4b1kybsfmcf3jf8"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://www.cve.org/CVERecord?id=CVE-2023-30429",children:"https://www.cve.org/CVERecord?id=CVE-2023-30429"})}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/security/",children:"Security Advisories"})})]})}function l(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>c});var t=n(96540);const s={},i=t.createContext(s);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);