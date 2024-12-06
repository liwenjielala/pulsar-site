"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[91771],{66972:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"admin-api-overview","title":"The Pulsar admin interface","description":"The Pulsar admin interface enables you to manage all of the important entities in a Pulsar instance, such as tenants, topics, and namespaces.","source":"@site/versioned_docs/version-2.6.4/admin-api-overview.md","sourceDirName":".","slug":"/admin-api-overview","permalink":"/docs/2.6.4/admin-api-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.4/admin-api-overview.md","tags":[],"version":"2.6.4","frontMatter":{"id":"admin-api-overview","title":"The Pulsar admin interface","sidebar_label":"Overview","original_id":"admin-api-overview"},"sidebar":"docsSidebar","previous":{"title":"C#","permalink":"/docs/2.6.4/client-libraries-dotnet"},"next":{"title":"Clusters","permalink":"/docs/2.6.4/admin-api-clusters"}}');var r=a(74848),t=a(28453);const s={id:"admin-api-overview",title:"The Pulsar admin interface",sidebar_label:"Overview",original_id:"admin-api-overview"},l=void 0,c={},d=[{value:"The REST API is the admin interface",id:"the-rest-api-is-the-admin-interface",level:4},{value:"Admin setup",id:"admin-setup",level:2},{value:"pulsar-admin",id:"pulsar-admin",level:3},{value:"REST API",id:"rest-api",level:3},{value:"Java admin client",id:"java-admin-client",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The Pulsar admin interface enables you to manage all of the important entities in a Pulsar ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/reference-terminology#instance",children:"instance"}),", such as ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/reference-terminology#tenant",children:"tenants"}),", ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/reference-terminology#topic",children:"topics"}),", and ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/reference-terminology#namespace",children:"namespaces"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"You can currently interact with the admin interface via:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Making HTTP calls against the admin ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API provided by Pulsar ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/reference-terminology#broker",children:"brokers"}),". For some restful apis, they might be redirected to topic owner brokers for serving\nwith ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307",children:(0,r.jsx)(n.code,{children:"307 Temporary Redirect"})}),", hence the HTTP callers should handle ",(0,r.jsx)(n.code,{children:"307 Temporary Redirect"}),". If you are using ",(0,r.jsx)(n.code,{children:"curl"}),", you should specify ",(0,r.jsx)(n.code,{children:"-L"}),"\nto handle redirections."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"pulsar-admin"})," CLI tool, which is available in the ",(0,r.jsx)(n.code,{children:"bin"})," folder of your ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/getting-started-standalone",children:"Pulsar installation"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar-admin\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Full documentation for this tool can be found in the ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/reference-pulsar-admin",children:"Pulsar command-line tools"})," doc."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A Java client interface."}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.h4,{id:"the-rest-api-is-the-admin-interface",children:"The REST API is the admin interface"}),"\n",(0,r.jsxs)(n.p,{children:["Under the hood, both the ",(0,r.jsx)(n.code,{children:"pulsar-admin"})," CLI tool and the Java client both use the REST API. If you\u2019d like to implement your own admin interface client, you should use the REST API as well. Full documentation can be found here."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In this document, examples from each of the three available interfaces will be shown."}),"\n",(0,r.jsx)(n.h2,{id:"admin-setup",children:"Admin setup"}),"\n",(0,r.jsxs)(n.p,{children:["Each of Pulsar's three admin interfaces---the ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/reference-pulsar-admin",children:(0,r.jsx)(n.code,{children:"pulsar-admin"})})," CLI tool, the ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/admin/2.6.4",children:"Java admin API"}),", and the ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"REST"})," API ---requires some special setup if you have ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/security-overview#authentication-providers",children:"authentication"})," enabled in your Pulsar ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/reference-terminology#instance",children:"instance"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"pulsar-admin",children:"pulsar-admin"}),"\n",(0,r.jsxs)(n.p,{children:["If you have ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/security-overview#authentication-providers",children:"authentication"})," enabled, you will need to provide an auth configuration to use the ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/reference-pulsar-admin",children:(0,r.jsx)(n.code,{children:"pulsar-admin"})})," tool. By default, the configuration for the ",(0,r.jsx)(n.code,{children:"pulsar-admin"})," tool is found in the ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/reference-configuration#client",children:(0,r.jsx)(n.code,{children:"conf/client.conf"})})," file. Here are the available parameters:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"webServiceUrl"}),(0,r.jsx)(n.td,{children:"The web URL for the cluster."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"http://localhost:8080/",children:"http://localhost:8080/"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"brokerServiceUrl"}),(0,r.jsx)(n.td,{children:"The Pulsar protocol URL for the cluster."}),(0,r.jsx)(n.td,{children:"pulsar://localhost:6650/"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"authPlugin"}),(0,r.jsx)(n.td,{children:"The authentication plugin."}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"authParams"}),(0,r.jsx)(n.td,{children:"The authentication parameters for the cluster, as a comma-separated string."}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"useTls"}),(0,r.jsx)(n.td,{children:"Whether or not TLS authentication will be enforced in the cluster."}),(0,r.jsx)(n.td,{children:"false"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tlsAllowInsecureConnection"}),(0,r.jsx)(n.td,{children:"Accept untrusted TLS certificate from client."}),(0,r.jsx)(n.td,{children:"false"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tlsTrustCertsFilePath"}),(0,r.jsx)(n.td,{children:"Path for the trusted TLS certificate file."}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"rest-api",children:"REST API"}),"\n",(0,r.jsxs)(n.p,{children:["You can find documentation for the REST API exposed by Pulsar ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/reference-terminology#broker",children:"brokers"})," in this reference ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/admin-rest-api#/",children:"document"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"java-admin-client",children:"Java admin client"}),"\n",(0,r.jsxs)(n.p,{children:["To use the Java admin API, instantiate a ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdmin",children:"PulsarAdmin"})," object, specifying a URL for a Pulsar ",(0,r.jsx)(n.a,{href:"/docs/2.6.4/reference-terminology#broker",children:"broker"})," and a ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdminBuilder",children:"PulsarAdminBuilder"}),". Here's a minimal example using ",(0,r.jsx)(n.code,{children:"localhost"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nString url = "http://localhost:8080";\n// Pass auth-plugin class fully-qualified name if Pulsar-security enabled\nString authPluginClassName = "com.org.MyAuthPluginClass";\n// Pass auth-param if auth-plugin class requires it\nString authParams = "param1=value1";\nboolean useTls = false;\nboolean tlsAllowInsecureConnection = false;\nString tlsTrustCertsFilePath = null;\nPulsarAdmin admin = PulsarAdmin.builder()\n.authentication(authPluginClassName,authParams)\n.serviceHttpUrl(url)\n.tlsTrustCertsFilePath(tlsTrustCertsFilePath)\n.allowTlsInsecureConnection(tlsAllowInsecureConnection)\n.build();\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"If you have multiple brokers to use, you can use multi-host like Pulsar service. For example,"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nString url = "http://localhost:8080,localhost:8081,localhost:8082";\n// Pass auth-plugin class fully-qualified name if Pulsar-security enabled\nString authPluginClassName = "com.org.MyAuthPluginClass";\n// Pass auth-param if auth-plugin class requires it\nString authParams = "param1=value1";\nboolean useTls = false;\nboolean tlsAllowInsecureConnection = false;\nString tlsTrustCertsFilePath = null;\nPulsarAdmin admin = PulsarAdmin.builder()\n.authentication(authPluginClassName,authParams)\n.serviceHttpUrl(url)\n.tlsTrustCertsFilePath(tlsTrustCertsFilePath)\n.allowTlsInsecureConnection(tlsAllowInsecureConnection)\n.build();\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>l});var i=a(96540);const r={},t=i.createContext(r);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);