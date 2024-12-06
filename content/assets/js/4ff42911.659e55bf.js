"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[26998],{66618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"client-libraries-dotnet-setup","title":"Set up C# client","description":"Learn how to set up C# client library in Pulsar.","source":"@site/versioned_docs/version-3.2.x/client-libraries-dotnet-setup.md","sourceDirName":".","slug":"/client-libraries-dotnet-setup","permalink":"/docs/3.2.x/client-libraries-dotnet-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/client-libraries-dotnet-setup.md","tags":[],"version":"3.2.x","frontMatter":{"id":"client-libraries-dotnet-setup","title":"Set up C# client","sidebar_label":"Set up","description":"Learn how to set up C# client library in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"C# client","permalink":"/docs/3.2.x/client-libraries-dotnet"},"next":{"title":"Initialize","permalink":"/docs/3.2.x/client-libraries-dotnet-initialize"}}');var l=n(74848),i=n(28453);const r={id:"client-libraries-dotnet-setup",title:"Set up C# client",sidebar_label:"Set up",description:"Learn how to set up C# client library in Pulsar."},o=void 0,c={},a=[{value:"Step 1: Install C# client library",id:"step-1-install-c-client-library",level:2},{value:"Step 2: Connect to Pulsar cluster",id:"step-2-connect-to-pulsar-cluster",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"To set up C# client library in Pulsar, complete the following steps."}),"\n",(0,l.jsx)(t.h2,{id:"step-1-install-c-client-library",children:"Step 1: Install C# client library"}),"\n",(0,l.jsx)(t.p,{children:"This section describes how to install the Pulsar C# client library through the dotnet CLI."}),"\n",(0,l.jsxs)(t.p,{children:["Alternatively, you can install the Pulsar C# client library through Visual Studio. Note that starting from Visual Studio 2017, the dotnet CLI is automatically installed with any .NET Core related workloads. For more information, see ",(0,l.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/visualstudio/mac/nuget-walkthrough?view=vsmac-2019",children:"Microsoft documentation"}),"."]}),"\n",(0,l.jsx)(t.p,{children:"To install the Pulsar C# client library using the dotnet CLI, follow these steps:"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Install the ",(0,l.jsx)(t.a,{href:"https://dotnet.microsoft.com/download/",children:".NET Core SDK"}),", which provides the dotnet CLI."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Create a project."}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Create a folder for the project."}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Open a terminal window and switch to the new folder."}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Create the project using the following command."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"dotnet new console\n"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Use ",(0,l.jsx)(t.code,{children:"dotnet run"})," to test that the app has been created properly."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Add the DotPulsar NuGet package."}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Use the following command to install the ",(0,l.jsx)(t.code,{children:"DotPulsar"})," package."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"dotnet add package DotPulsar\n"})}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["After the command completes, open the ",(0,l.jsx)(t.code,{children:".csproj"})," file to see the added reference."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-xml",children:'<ItemGroup>\n  <PackageReference Include="DotPulsar" Version="2.0.1" />\n</ItemGroup>\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"step-2-connect-to-pulsar-cluster",children:"Step 2: Connect to Pulsar cluster"}),"\n",(0,l.jsxs)(t.p,{children:["To connect to Pulsar using client libraries, you need to specify a ",(0,l.jsx)(t.a,{href:"/docs/3.2.x/developing-binary-protocol",children:"Pulsar protocol"})," URL."]}),"\n",(0,l.jsxs)(t.p,{children:["You can assign Pulsar protocol URLs to specific clusters and use the ",(0,l.jsx)(t.code,{children:"pulsar"})," scheme. The following is an example of ",(0,l.jsx)(t.code,{children:"localhost"})," with the default port ",(0,l.jsx)(t.code,{children:"6650"}),":"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-http",children:"pulsar://localhost:6650\n"})}),"\n",(0,l.jsxs)(t.p,{children:["If you have multiple brokers, separate ",(0,l.jsx)(t.code,{children:"IP:port"})," by commas:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-http",children:"pulsar://localhost:6550,localhost:6651,localhost:6652\n"})}),"\n",(0,l.jsxs)(t.p,{children:["If you use ",(0,l.jsx)(t.a,{href:"/docs/3.2.x/security-tls-authentication",children:"mTLS"})," authentication, add ",(0,l.jsx)(t.code,{children:"+ssl"})," in the scheme:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-http",children:"pulsar+ssl://pulsar.us-west.example.com:6651\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const l={},i=s.createContext(l);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);