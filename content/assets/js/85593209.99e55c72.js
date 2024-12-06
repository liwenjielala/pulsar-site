"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[69754],{62839:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>s});const i=JSON.parse('{"id":"security-token-client","title":"Client Authentication using tokens","description":"Token Authentication Overview","source":"@site/versioned_docs/version-2.4.1/security-token-client.md","sourceDirName":".","slug":"/security-token-client","permalink":"/docs/2.4.1/security-token-client","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.1/security-token-client.md","tags":[],"version":"2.4.1","frontMatter":{"id":"security-token-client","title":"Client Authentication using tokens","sidebar_label":"Client Authentication using tokens","original_id":"security-token-client"},"sidebar":"docsSidebar","previous":{"title":"Authentication using TLS","permalink":"/docs/2.4.1/security-tls-authentication"},"next":{"title":"Token authentication admin","permalink":"/docs/2.4.1/security-token-admin"}}');var o=t(74848),l=t(28453);const r={id:"security-token-client",title:"Client Authentication using tokens",sidebar_label:"Client Authentication using tokens",original_id:"security-token-client"},c=void 0,a={},s=[{value:"Token Authentication Overview",id:"token-authentication-overview",level:2},{value:"CLI tools",id:"cli-tools",level:3},{value:"Java client",id:"java-client",level:3},{value:"Python client",id:"python-client",level:3},{value:"Go client",id:"go-client",level:3},{value:"C++ client",id:"c-client",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"token-authentication-overview",children:"Token Authentication Overview"}),"\n",(0,o.jsxs)(n.p,{children:["Pulsar supports authenticating clients using security tokens that are based on ",(0,o.jsx)(n.a,{href:"https://jwt.io/introduction/",children:"JSON Web Tokens"})," (",(0,o.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7519",children:"RFC-7519"}),")."]}),"\n",(0,o.jsx)(n.p,{children:'You can use tokens to identify a Pulsar client and associate with some "principal" (or "role") that\nis permitted to do some actions (for example, publish messages to a topic or consume messages from a topic).'}),"\n",(0,o.jsx)(n.p,{children:"The administrator (or some automated service) typically gives a user a token string."}),"\n",(0,o.jsx)(n.p,{children:"The compact representation of a signed JWT is a string that looks like as the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\neyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY\n\n"})}),"\n",(0,o.jsx)(n.p,{children:'Application specifies the token when you are creating the client instance. An alternative is to pass a "token supplier" (a function that returns the token when the client library needs one).'}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/2.4.1/security-token-admin",children:"Token authentication admin"})," for a reference on how to enable token\nauthentication on a Pulsar cluster."]}),"\n",(0,o.jsx)(n.h3,{id:"cli-tools",children:"CLI tools"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/2.4.1/reference-cli-tools",children:"Command-line tools"})," like ",(0,o.jsx)(n.a,{href:"/docs/2.4.1/reference-pulsar-admin",children:(0,o.jsx)(n.code,{children:"pulsar-admin"})}),", ",(0,o.jsx)(n.a,{href:"/docs/2.4.1/reference-cli-tools#pulsar-perf",children:(0,o.jsx)(n.code,{children:"pulsar-perf"})}),", and ",(0,o.jsx)(n.a,{href:"/docs/2.4.1/reference-cli-tools#pulsar-client",children:(0,o.jsx)(n.code,{children:"pulsar-client"})})," use the ",(0,o.jsx)(n.code,{children:"conf/client.conf"})," config file in a Pulsar installation."]}),"\n",(0,o.jsx)(n.p,{children:"You need to add the following parameters to that file to use the token authentication with CLI tools of Pulsar:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-properties",children:"\nwebServiceUrl=http://broker.example.com:8080/\nbrokerServiceUrl=pulsar://broker.example.com:6650/\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationToken\nauthParams=token:eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY\n\n"})}),"\n",(0,o.jsx)(n.p,{children:"The token string can also be read from a file, eg:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\nauthParams=file:///path/to/token/file\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"java-client",children:"Java client"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactory.token("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY")\n    .build();\n\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Similarly, one can also pass a ",(0,o.jsx)(n.code,{children:"Supplier"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactory.token(() -> {\n            // Read token from custom source\n            return readToken();\n        })\n    .build();\n\n'})}),"\n",(0,o.jsx)(n.h3,{id:"python-client",children:"Python client"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"\nfrom pulsar import Client, AuthenticationToken\n\nclient = Client('pulsar://broker.example.com:6650/',\n                authentication=AuthenticationToken('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY'))\n\n"})}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, with a supplier:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"\ndef read_token():\n    with open('/path/to/token.txt') as tf:\n        return tf.read().strip()\n\nclient = Client('pulsar://broker.example.com:6650/',\n                authentication=AuthenticationToken(read_token))\n\n"})}),"\n",(0,o.jsx)(n.h3,{id:"go-client",children:"Go client"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'\nclient, err := NewClient(ClientOptions{\n\tURL:            "pulsar://localhost:6650",\n\tAuthentication: NewAuthenticationToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY"),\n})\n\n'})}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, with a supplier:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:'\nclient, err := NewClient(ClientOptions{\n\tURL:            "pulsar://localhost:6650",\n\tAuthentication: NewAuthenticationTokenSupplier(func () string {\n        // Read token from custom source\n\t\treturn readToken()\n\t}),\n})\n\n'})}),"\n",(0,o.jsx)(n.h3,{id:"c-client",children:"C++ client"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c++",children:'\n#include <pulsar/Client.h>\n\npulsar::ClientConfiguration config;\nconfig.setAuth(pulsar::AuthToken::createWithToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY"));\n\npulsar::Client client("pulsar://broker.example.com:6650/", config);\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(96540);const o={},l=i.createContext(o);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);