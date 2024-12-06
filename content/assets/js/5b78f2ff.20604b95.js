"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6055],{5497:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"security-jwt","title":"Authentication using tokens based on JSON Web Tokens","description":"Pulsar supports authenticating clients using security tokens based on JSON Web Tokens (RFC-7519), including all the algorithms that the Java JWT library supports.","source":"@site/versioned_docs/version-2.11.x/security-jwt.md","sourceDirName":".","slug":"/security-jwt","permalink":"/docs/2.11.x/security-jwt","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/security-jwt.md","tags":[],"version":"2.11.x","frontMatter":{"id":"security-jwt","title":"Authentication using tokens based on JSON Web Tokens","sidebar_label":"Authentication using JWT"},"sidebar":"docsSidebar","previous":{"title":"Authentication using mTLS","permalink":"/docs/2.11.x/security-tls-authentication"},"next":{"title":"Authentication using Athenz","permalink":"/docs/2.11.x/security-athenz"}}');var r=t(74848),a=t(28453),s=t(89089),o=t(19365);const l={id:"security-jwt",title:"Authentication using tokens based on JSON Web Tokens",sidebar_label:"Authentication using JWT"},c=void 0,u={},h=[{value:"Create client certificates",id:"create-client-certificates",level:2},{value:"Create a secret key",id:"create-a-secret-key",level:3},{value:"Create a key pair",id:"create-a-key-pair",level:3},{value:"Generate tokens",id:"generate-tokens",level:3},{value:"Enable JWT authentication on brokers/proxies",id:"enable-jwt-authentication-on-brokersproxies",level:2},{value:"Configure JWT authentication in CLI Tools",id:"configure-jwt-authentication-in-cli-tools",level:2},{value:"Configure JWT authentication in Pulsar clients",id:"configure-jwt-authentication-in-pulsar-clients",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Pulsar supports authenticating clients using security tokens based on ",(0,r.jsx)(n.a,{href:"https://jwt.io/introduction/",children:"JSON Web Tokens"})," (",(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7519",children:"RFC-7519"}),"), including all the algorithms that the ",(0,r.jsx)(n.a,{href:"https://github.com/jwtk/jjwt#signature-algorithms-keys",children:"Java JWT library"})," supports."]}),"\n",(0,r.jsxs)(n.p,{children:['A token is a credential associated with a user. The association is done through a "principal" or "role". In the case of JWT tokens, it typically refers to a ',(0,r.jsx)(n.strong,{children:"subject"}),". You can use a token to identify a Pulsar client and associate it with a ",(0,r.jsx)(n.strong,{children:"subject"}),' that is permitted to do specific actions, such as publish messages to a topic or consume messages from a topic. An alternative is to pass a "token supplier" (a function that returns the token when the client library needs one).']}),"\n",(0,r.jsx)(n.p,{children:"The application specifies the token when you create the client instance. The user typically gets the token string from the administrator. The compact representation of a signed JWT is a string that looks like the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Always use ",(0,r.jsx)(n.a,{href:"/docs/2.11.x/security-tls-transport",children:"TLS encryption"})," when connecting to the Pulsar service, because sending a token is equivalent to sending a password over the wire."]})}),"\n",(0,r.jsx)(n.h2,{id:"create-client-certificates",children:"Create client certificates"}),"\n",(0,r.jsx)(n.p,{children:"JWT authentication supports two different kinds of keys to generate and validate the tokens:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Symmetric: A single ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"secret"})})," key."]}),"\n",(0,r.jsxs)(n.li,{children:["Asymmetric: A key pair, including:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["a ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"private"})})," key to generate tokens."]}),"\n",(0,r.jsxs)(n.li,{children:["a ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"public"})})," key to validate tokens."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"create-a-secret-key",children:"Create a secret key"}),"\n",(0,r.jsx)(n.p,{children:"The administrators create the secret key and use it to generate the client tokens. You can also configure this key for brokers to validate the clients."}),"\n",(0,r.jsx)(n.p,{children:"The output file is generated in the root of your Pulsar installation directory. You can also provide an absolute path for the output file using the command below."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"bin/pulsar tokens create-secret-key --output my-secret.key\n"})}),"\n",(0,r.jsx)(n.p,{children:"To generate a base64-encoded private key, enter the following command."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"bin/pulsar tokens create-secret-key --output  /opt/my-secret.key --base64\n"})}),"\n",(0,r.jsx)(n.h3,{id:"create-a-key-pair",children:"Create a key pair"}),"\n",(0,r.jsx)(n.p,{children:"To use asymmetric key encryption, you need to create a pair of keys. The output file is generated in the root of your Pulsar installation directory. You can also provide an absolute path for the output file using the command below."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"bin/pulsar tokens create-key-pair --output-private-key my-private.key --output-public-key my-public.key\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Store ",(0,r.jsx)(n.code,{children:"my-private.key"})," in a safe location and only the administrators can use this private key to generate new tokens."]}),"\n",(0,r.jsxs)(n.li,{children:["The public key file ",(0,r.jsx)(n.code,{children:"my-public.key"})," is distributed to all Pulsar brokers. You can publicly share it without any security concerns."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"generate-tokens",children:"Generate tokens"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Use this command to require the generated token to have a ",(0,r.jsx)(n.strong,{children:"subject"})," fieldset. This command prints the token string on ",(0,r.jsx)(n.code,{children:"stdout"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"bin/pulsar tokens create --secret-key file:///path/to/my-secret.key \\\n            --subject test-user\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Create a token by passing the "private" key using the command below:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"bin/pulsar tokens create --private-key file:///path/to/my-private.key \\\n            --subject test-user\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a token with a pre-defined TTL. Then the token is automatically invalidated."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"bin/pulsar tokens create --secret-key file:///path/to/my-secret.key \\\n            --subject test-user \\\n            --expiry-time 1y\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["The token itself does not have any permission associated. You need to ",(0,r.jsx)(n.a,{href:"/docs/2.11.x/security-authorization#enable-authorization-and-assign-superusers",children:"enable authorization and assign superusers"}),", and use the ",(0,r.jsx)(n.code,{children:"bin/pulsar-admin namespaces grant-permission"})," command to grant permissions to the token."]})}),"\n",(0,r.jsx)(n.h2,{id:"enable-jwt-authentication-on-brokersproxies",children:"Enable JWT authentication on brokers/proxies"}),"\n",(0,r.jsxs)(n.p,{children:["To configure brokers/proxies to authenticate clients using JWT, add the following parameters to the ",(0,r.jsx)(n.code,{children:"conf/broker.conf"})," and the ",(0,r.jsx)(n.code,{children:"conf/proxy.conf"})," file. If you use a standalone Pulsar, you need to add these parameters to the ",(0,r.jsx)(n.code,{children:"conf/standalone.conf"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:'# Configuration to enable authentication\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderToken\n\n# Authentication settings of the broker itself. Used when the broker connects to other brokers, or when the proxy connects to brokers, either in same or other clusters\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationToken\nbrokerClientAuthenticationParameters={"token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0LXVzZXIifQ.9OHgE9ZUDeBTZs7nSMEFIuGNEX18FLR3qvy8mqxSxXw"}\n# Either configure the token string or specify to read it from a file. The following three available formats are all valid:\n# brokerClientAuthenticationParameters={"token":"your-token-string"}\n# brokerClientAuthenticationParameters=token:your-token-string\n# brokerClientAuthenticationParameters=file:///path/to/token\n\n# If using secret key (Note: key files must be DER-encoded)\ntokenSecretKey=file:///path/to/secret.key\n# The key can also be passed inline:\n# tokenSecretKey=data:;base64,FLFyW0oLJ2Fi22KKCm21J18mbAdztfSHN/lAT5ucEKU=\n\n# If using public/private (Note: key files must be DER-encoded)\n# tokenPublicKey=file:///path/to/public.key\n'})}),"\n",(0,r.jsx)(n.h2,{id:"configure-jwt-authentication-in-cli-tools",children:"Configure JWT authentication in CLI Tools"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/2.11.x/reference-cli-tools",children:"Command-line tools"})," like ",(0,r.jsx)(n.a,{href:"pathname:///reference/#/2.11.x/pulsar-admin/",children:(0,r.jsx)(n.code,{children:"pulsar-admin"})}),", ",(0,r.jsx)(n.a,{href:"pathname:///reference/#/2.11.x/pulsar-perf/",children:(0,r.jsx)(n.code,{children:"pulsar-perf"})}),", and ",(0,r.jsx)(n.a,{href:"pathname:///reference/#/2.11.x/pulsar-client/",children:(0,r.jsx)(n.code,{children:"pulsar-client"})})," use the ",(0,r.jsx)(n.code,{children:"conf/client.conf"})," config file in a Pulsar installation."]}),"\n",(0,r.jsxs)(n.p,{children:["You need to add the following parameters to the ",(0,r.jsx)(n.code,{children:"conf/client.conf"})," config file to use the JWT authentication with CLI tools of Pulsar:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:"webServiceUrl=https://broker.example.com:8443/\nbrokerServiceUrl=pulsar://broker.example.com:6650/\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationToken\nauthParams=token:eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY\n"})}),"\n",(0,r.jsx)(n.p,{children:"The token string can also be read from a file, for example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:"authParams=file:///path/to/token/file\n"})}),"\n",(0,r.jsx)(n.h2,{id:"configure-jwt-authentication-in-pulsar-clients",children:"Configure JWT authentication in Pulsar clients"}),"\n",(0,r.jsx)(n.p,{children:"You can use tokens to authenticate the following Pulsar clients."}),"\n",(0,r.jsxs)(s.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Go",value:"Go"},{label:"C++",value:"C++"},{label:"C#",value:"C#"}],children:[(0,r.jsxs)(o.A,{value:"Java",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'PulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactory.token("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY")\uff09\n    .build();\n'})}),(0,r.jsxs)(n.p,{children:["Similarly, you can also pass a ",(0,r.jsx)(n.code,{children:"Supplier"}),":"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'PulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactory.token(() -> {\n            // Read token from custom source\n            return readToken();\n        }))\n    .build();\n'})})]}),(0,r.jsxs)(o.A,{value:"Python",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from pulsar import Client, AuthenticationToken\n\nclient = Client('pulsar://broker.example.com:6650/',\n                authentication=AuthenticationToken('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY'))\n"})}),(0,r.jsxs)(n.p,{children:["Alternatively, you can also pass a ",(0,r.jsx)(n.code,{children:"Supplier"}),":"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def read_token():\n    with open('/path/to/token.txt') as tf:\n        return tf.read().strip()\n\nclient = Client('pulsar://broker.example.com:6650/',\n                authentication=AuthenticationToken(read_token))\n"})})]}),(0,r.jsxs)(o.A,{value:"Go",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'client, err := pulsar.NewClient(pulsar.ClientOptions{\n\tURL:            "pulsar://localhost:6650",\n\tAuthentication: NewAuthenticationToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY"),\n})\n'})}),(0,r.jsxs)(n.p,{children:["Similarly, you can also pass a ",(0,r.jsx)(n.code,{children:"Supplier"}),":"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'client, err := pulsar.NewClient(pulsar.ClientOptions{\n\tURL:            "pulsar://localhost:6650",\n\tAuthentication: pulsar.NewAuthenticationTokenSupplier(func () string {\n        // Read token from custom source\n\t\treturn readToken()\n\t}),\n})\n'})})]}),(0,r.jsx)(o.A,{value:"C++",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'#include <pulsar/Client.h>\n\npulsar::ClientConfiguration config;\nconfig.setAuth(pulsar::AuthToken::createWithToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY"));\n\npulsar::Client client("pulsar://broker.example.com:6650/", config);\n'})})}),(0,r.jsx)(o.A,{value:"C#",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'var client = PulsarClient.Builder()\n                         .AuthenticateUsingToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY")\n                         .Build();\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var i=t(34164);const r={tabItem:"tabItem_Ymn6"};var a=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,s),hidden:t,children:n})}},89089:(e,n,t)=>{t.d(n,{A:()=>v});var i=t(96540),r=t(34164),a=t(23104),s=t(56347),o=t(205),l=t(57485),c=t(31682),u=t(70679);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=d(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[c,h]=f({queryString:t,groupId:r}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,u.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),x=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),b(e)}),[h,b,a]),tabValues:a}}var b=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function g(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==i&&(c(n),s(r))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:h,onClick:u,...a,className:(0,r.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=m(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,y.jsx)(g,{...n,...e}),(0,y.jsx)(k,{...n,...e})]})}function v(e){const n=(0,b.A)();return(0,y.jsx)(j,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);