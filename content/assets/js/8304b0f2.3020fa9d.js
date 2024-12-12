"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[34286],{32917:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"develop-triage","title":"Triaging an Issue","description":"This guide documents the issue tracker for users and developers.","source":"@site/contribute/develop-triage.md","sourceDirName":".","slug":"/develop-triage","permalink":"/contribute/develop-triage","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/contribute/develop-triage.md","tags":[],"version":"current","lastUpdatedBy":"Lari Hotari","lastUpdatedAt":1733852650000,"frontMatter":{"id":"develop-triage","title":"Triaging an Issue"},"sidebar":"sidebarDevelopment","previous":{"title":"Coding conventions","permalink":"/contribute/develop-coding-conventions"},"next":{"title":"Label strategy","permalink":"/contribute/develop-labels"}}');var t=i(74848),a=i(28453);const r={id:"develop-triage",title:"Triaging an Issue"},o=void 0,l={},c=[{value:"Checklist for Triaging",id:"checklist-for-triaging",level:2},{value:"Assignees",id:"assignees",level:2},{value:"Helping Triage Issues",id:"helping-triage-issues",level:2},{value:"Classifying Reports",id:"classifying-reports",level:3},{value:"Closing Issues",id:"closing-issues",level:3},{value:"Re-Evaluating Closed Issues",id:"re-evaluating-closed-issues",level:3},{value:"Finding an Issue You Can Help With",id:"finding-an-issue-you-can-help-with",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",input:"input",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["This guide documents the ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/issues",children:"issue tracker"})," for users and developers."]}),"\n",(0,t.jsx)(s.h2,{id:"checklist-for-triaging",children:"Checklist for Triaging"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Read the initial message and the comments."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Check that the title is reasonably concise, while including enough specifics so that those scanning the list of issues can quickly identify its topic."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Leave a brief comment about the proposed next action needed. If there is a long message list, a summary can be very helpful."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","(Committers-only) Set all the relevant ",(0,t.jsx)(s.a,{href:"develop-labels",children:"labels"}),"."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","(Committers-only) Where appropriate, set the Assignees, Reviewers, Milestone fields, and possibly @mention relevant people."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","(Committers-only) If the issue is clearly invalid (unrelated to Pulsar, duplicate, spam, etc), you can close it as ",(0,t.jsx)(s.a,{href:"https://github.blog/changelog/2022-05-19-the-new-github-issues-may-19th-update/",children:'"not planned"'}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"assignees",children:"Assignees"}),"\n",(0,t.jsx)(s.p,{children:"This field indicates who is expected to take the next step in resolving the issue."}),"\n",(0,t.jsxs)(s.p,{children:["Since the Pulsar community follows ",(0,t.jsx)(s.a,{href:"https://www.apache.org/theapacheway/",children:"Community of Peers"})," pattern, a contributor is assigned to an issue only if they ask for or self-assign. GitHub only allows team members or participants to be assigned, and asking for an assignment simplifies this restriction."]}),"\n",(0,t.jsx)(s.h2,{id:"helping-triage-issues",children:"Helping Triage Issues"}),"\n",(0,t.jsx)(s.p,{children:"Once you know your way around how Pulsar's source files are structured and you are comfortable with the workflow, a great way to contribute is to help triage issues. Do realize, though, that experience working on Pulsar is needed in order to effectively help triage."}),"\n",(0,t.jsxs)(s.p,{children:["Around the clock, new issues are being opened on the ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/issues",children:"issue tracker"})," and existing issues are being updated. Every issue needs to be triaged to make sure everything runs smoothly."]}),"\n",(0,t.jsx)(s.h3,{id:"classifying-reports",children:"Classifying Reports"}),"\n",(0,t.jsx)(s.p,{children:"Pulsar provides five issue templates and they define what is desired in each category. Issue tracker holds only actionable items, including bug reports and enhancements. Questions and suggestions are recommended to be posted at:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"mailto:users@pulsar.apache.org",children:"User Mail List"})," (",(0,t.jsx)(s.a,{href:"mailto:users-subscribe@pulsar.apache.org",children:"subscribe"}),"), or"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/discussions",children:"Github Discussion"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["For ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/blob/master/.github/ISSUE_TEMPLATE/bug-report.yml",children:"bug reports"}),", an issue needs to:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"provide the OS and Pulsar version in use"}),"\n",(0,t.jsx)(s.li,{children:"give reproducing steps to facilitate quick location of the problem"}),"\n",(0,t.jsx)(s.li,{children:"clearly explain what is expected and what happens actually"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["For ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/blob/master/.github/ISSUE_TEMPLATE/enhancement.yml",children:"enhancements"}),", an issue needs to:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"describe the motivations (why does Pulsar need it)"}),"\n",(0,t.jsx)(s.li,{children:"describe the proposed solution and add related materials like links if any"}),"\n",(0,t.jsx)(s.li,{children:"describe other alternative solutions or features considered, but rejected"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Frequent raised issues have their own templates: ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/blob/master/.github/ISSUE_TEMPLATE/flaky-test.yml",children:"flaky tests"})," and ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/blob/master/.github/ISSUE_TEMPLATE/doc.yml",children:"document issues"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Pulsar improvement proposal (PIP) has its own ",(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/blob/master/wiki/proposals/PIP.md",children:"workflow"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"closing-issues",children:"Closing Issues"}),"\n",(0,t.jsx)(s.p,{children:"Stale issues coming from years ago are hardly handled today. Also, a huge issue backlog decreases the passion a contributor spends time on issue triaging."}),"\n",(0,t.jsx)(s.p,{children:"Here are several common reasons to close issues especially stale ones that you can use to judge:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["If a bug report is associated with ",(0,t.jsx)(s.a,{href:"/contribute/release-policy#Supported-Versions",children:"unmaintained versions"}),', and it can hardly or cannot be reproduced on maintained versions, you can close the issue with comment "Closing as stale. If it\'s still relevant to maintained versions, feel free to open a new issue."']}),"\n",(0,t.jsx)(s.li,{children:'If an enhancement ticket gets stale for over a year and no one seems working on it, you can close the issue with comment "Closing as stale and no one worked on it. Please open a new issue if you volunteer to do it."'}),"\n",(0,t.jsxs)(s.li,{children:['If a user question is answered in the thread, you can close the issue with comment "Closing as answered"; otherwise, you can ',(0,t.jsx)(s.a,{href:"https://docs.github.com/en/discussions/managing-discussions-for-your-community/managing-discussions#transferring-a-discussion",children:"convert the issue to a discussion"})," under the Q&A category."]}),"\n",(0,t.jsx)(s.li,{children:"If an open issue is already resolved on master or is duplicate to another issue, you can directly close the issue with those resolutions."}),"\n",(0,t.jsxs)(s.li,{children:["Due to historical reasons, some issues are about multilingual clients (C++, Go, Python) or other components moved out to their separate repositories. You can ",(0,t.jsx)(s.a,{href:"https://docs.github.com/en/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository",children:"transfer the issue"}),' to the corresponding repository, or close it with comment "Closing as stale. The development of {the specific module} is permantly moved to {the separate repository}. Please open a new issue there if it\'s still relevent."']}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"re-evaluating-closed-issues",children:"Re-Evaluating Closed Issues"}),"\n",(0,t.jsx)(s.p,{children:"You can concern that some stale issues are still relevant but get closed eagerly."}),"\n",(0,t.jsx)(s.p,{children:"Do worry! Anyone is expected to search before asking. And once they find a closed issue is relevant, they can pick it up or open a new one and refer to the previous one. This is always viable and here are some examples:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/issues/7837",children:"DB2 Connector for Pulsar"})," was picked up with a new volunteer working on it;"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/apache/pulsar/issues/19910",children:"Support basic-authentication in function url"})," refers to a closed issue and supersedes it."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"finding-an-issue-you-can-help-with",children:"Finding an Issue You Can Help With"}),"\n",(0,t.jsxs)(s.p,{children:["If you want to help with triaging, you might also want to search for issues in modules for which you have a working knowledge. Search for the name of a module in the issue tracker, filter by ",(0,t.jsx)(s.code,{children:"component/*"})," label, or use the ",(0,t.jsx)(s.a,{href:"https://github.com/search/advanced",children:"advanced search"})," to find these issues."]})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>o});var n=i(96540);const t={},a=n.createContext(t);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);