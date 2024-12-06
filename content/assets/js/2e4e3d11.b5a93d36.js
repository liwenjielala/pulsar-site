"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[27486],{33407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"security-jwt","title":"Client authentication using tokens based on JSON Web Tokens","description":"Token authentication overview","source":"@site/versioned_docs/version-2.4.0/security-jwt.md","sourceDirName":".","slug":"/security-jwt","permalink":"/docs/2.4.0/security-jwt","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.0/security-jwt.md","tags":[],"version":"2.4.0","frontMatter":{"id":"security-jwt","title":"Client authentication using tokens based on JSON Web Tokens","sidebar_label":"Authentication using JWT","original_id":"security-jwt"},"sidebar":"docsSidebar","previous":{"title":"Authentication using Kerberos","permalink":"/docs/2.4.0/security-kerberos"},"next":{"title":"Authorization and ACLs","permalink":"/docs/2.4.0/security-authorization"}}');var a=t(74848),i=t(28453),o=t(89089),s=t(19365);const l={id:"security-jwt",title:"Client authentication using tokens based on JSON Web Tokens",sidebar_label:"Authentication using JWT",original_id:"security-jwt"},c=void 0,u={},h=[{value:"Token authentication overview",id:"token-authentication-overview",level:2},{value:"Always use TLS transport encryption",id:"always-use-tls-transport-encryption",level:4},{value:"CLI Tools",id:"cli-tools",level:3},{value:"Pulsar client",id:"pulsar-client",level:3},{value:"Enable token authentication",id:"enable-token-authentication",level:2},{value:"Create a secret key",id:"create-a-secret-key",level:3},{value:"Create a key pair",id:"create-a-key-pair",level:3},{value:"Generate tokens",id:"generate-tokens",level:3},{value:"Authorization",id:"authorization",level:3},{value:"Enable token authentication on Brokers",id:"enable-token-authentication-on-brokers",level:3},{value:"Enable token authentication on Proxies",id:"enable-token-authentication-on-proxies",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"token-authentication-overview",children:"Token authentication overview"}),"\n",(0,a.jsxs)(n.p,{children:["Pulsar supports authenticating clients using security tokens that are based on ",(0,a.jsx)(n.a,{href:"https://jwt.io/introduction/",children:"JSON Web Tokens"})," (",(0,a.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7519",children:"RFC-7519"}),")."]}),"\n",(0,a.jsx)(n.p,{children:'You can use tokens to identify a Pulsar client and associate with some "principal" (or "role") that\nis permitted to do some actions (eg: publish to a topic or consume from a topic).'}),"\n",(0,a.jsx)(n.p,{children:"A user typically gets a token string from the administrator (or some automated service)."}),"\n",(0,a.jsx)(n.p,{children:"The compact representation of a signed JWT is a string that looks like as the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\neyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY\n\n"})}),"\n",(0,a.jsx)(n.p,{children:'Application specifies the token when you create the client instance. An alternative is to pass a "token supplier" (a function that returns the token when the client library needs one).'}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.h4,{id:"always-use-tls-transport-encryption",children:"Always use TLS transport encryption"}),"\n",(0,a.jsxs)(n.p,{children:["Sending a token is equivalent to sending a password over the wire. You had better use TLS encryption all the time when you connect to the Pulsar service. See\n",(0,a.jsx)(n.a,{href:"/docs/2.4.0/security-tls-transport",children:"Transport Encryption using TLS"})," for more details."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"cli-tools",children:"CLI Tools"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/2.4.0/reference-cli-tools",children:"Command-line tools"})," like ",(0,a.jsx)(n.a,{href:"/docs/2.4.0/reference-ulsar-admin",children:(0,a.jsx)(n.code,{children:"pulsar-admin"})}),", ",(0,a.jsx)(n.a,{href:"/docs/2.4.0/reference-cli-tools#pulsar-perf",children:(0,a.jsx)(n.code,{children:"pulsar-perf"})}),", and ",(0,a.jsx)(n.a,{href:"/docs/2.4.0/reference-cli-tools#pulsar-client",children:(0,a.jsx)(n.code,{children:"pulsar-client"})})," use the ",(0,a.jsx)(n.code,{children:"conf/client.conf"})," config file in a Pulsar installation."]}),"\n",(0,a.jsx)(n.p,{children:"You need to add the following parameters to that file to use the token authentication with CLI tools of Pulsar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-properties",children:"\nwebServiceUrl=http://broker.example.com:8080/\nbrokerServiceUrl=pulsar://broker.example.com:6650/\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationToken\nauthParams=token:eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"The token string can also be read from a file, for example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\nauthParams=file:///path/to/token/file\n\n"})}),"\n",(0,a.jsx)(n.h3,{id:"pulsar-client",children:"Pulsar client"}),"\n",(0,a.jsx)(n.p,{children:"You can use tokens to authenticate the following Pulsar clients."}),"\n",(0,a.jsxs)(o.A,{defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"Go",value:"Go"},{label:"C++",value:"C++"}],children:[(0,a.jsxs)(s.A,{value:"Java",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactory.token("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY")\n    .build();\n\n'})}),(0,a.jsxs)(n.p,{children:["Similarly, you can also pass a ",(0,a.jsx)(n.code,{children:"Supplier"}),":"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactory.token(() -> {\n            // Read token from custom source\n            return readToken();\n        })\n    .build();\n\n'})})]}),(0,a.jsxs)(s.A,{value:"Python",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"\nfrom pulsar import Client, AuthenticationToken\n\nclient = Client('pulsar://broker.example.com:6650/',\n                authentication=AuthenticationToken('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY'))\n\n"})}),(0,a.jsxs)(n.p,{children:["Alternatively, you can also pass a ",(0,a.jsx)(n.code,{children:"Supplier"}),":"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"\ndef read_token():\n    with open('/path/to/token.txt') as tf:\n        return tf.read().strip()\n\nclient = Client('pulsar://broker.example.com:6650/',\n                authentication=AuthenticationToken(read_token))\n\n"})})]}),(0,a.jsxs)(s.A,{value:"Go",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'\nclient, err := NewClient(ClientOptions{\n\tURL:            "pulsar://localhost:6650",\n\tAuthentication: NewAuthenticationToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY"),\n})\n\n'})}),(0,a.jsxs)(n.p,{children:["Similarly, you can also pass a ",(0,a.jsx)(n.code,{children:"Supplier"}),":"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'\nclient, err := NewClient(ClientOptions{\n\tURL:            "pulsar://localhost:6650",\n\tAuthentication: NewAuthenticationTokenSupplier(func () string {\n        // Read token from custom source\n\t\treturn readToken()\n\t}),\n})\n\n'})})]}),(0,a.jsx)(s.A,{value:"C++",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c++",children:'\n#include <pulsar/Client.h>\n\npulsar::ClientConfiguration config;\nconfig.setAuth(pulsar::AuthToken::createWithToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY"));\n\npulsar::Client client("pulsar://broker.example.com:6650/", config);\n\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"enable-token-authentication",children:"Enable token authentication"}),"\n",(0,a.jsx)(n.p,{children:"On how to enable token authentication on a Pulsar cluster, you can refer to the guide below."}),"\n",(0,a.jsx)(n.p,{children:"JWT supports two different kinds of keys in order to generate and validate the tokens:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Symmetric :","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["You can use a single ",(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"Secret"})})," key to generate and validate tokens."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Asymmetric: A pair of keys consists of the Private key and the Public key.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["You can use ",(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"Private"})})," key to generate tokens."]}),"\n",(0,a.jsxs)(n.li,{children:["You can use ",(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"Public"})})," key to validate tokens."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"create-a-secret-key",children:"Create a secret key"}),"\n",(0,a.jsx)(n.p,{children:"When you use a secret key, the administrator creates the key and uses the key to generate the client tokens. You can also configure this key to brokers in order to validate the clients."}),"\n",(0,a.jsx)(n.p,{children:"Output file is generated in the root of your Pulsar installation directory. You can also provide absolute path for the output file using the command below."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar tokens create-secret-key --output my-secret.key\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"Enter this command to generate base64 encoded private key."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar tokens create-secret-key --output  /opt/my-secret.key --base64\n\n"})}),"\n",(0,a.jsx)(n.h3,{id:"create-a-key-pair",children:"Create a key pair"}),"\n",(0,a.jsxs)(n.p,{children:["With Public and Private keys, you need to create a pair of keys. Pulsar supports all algorithms that the Java JWT library (shown ",(0,a.jsx)(n.a,{href:"https://github.com/jwtk/jjwt#signature-algorithms-keys",children:"here"}),") supports."]}),"\n",(0,a.jsx)(n.p,{children:"Output file is generated in the root of your Pulsar installation directory. You can also provide absolute path for the output file using the command below."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar tokens create-key-pair --output-private-key my-private.key --output-public-key my-public.key\n\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Store ",(0,a.jsx)(n.code,{children:"my-private.key"})," in a safe location and only administrator can use ",(0,a.jsx)(n.code,{children:"my-private.key"})," to generate new tokens."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"my-public.key"})," is distributed to all Pulsar brokers. You can publicly share this file without any security concern."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"generate-tokens",children:"Generate tokens"}),"\n",(0,a.jsxs)(n.p,{children:['A token is the credential associated with a user. The association is done through the "principal" or "role". In the case of JWT tokens, this field is typically referred as ',(0,a.jsx)(n.strong,{children:"subject"}),", though they are exactly the same concept."]}),"\n",(0,a.jsxs)(n.p,{children:["Then, you need to use this command to require the generated token to have a ",(0,a.jsx)(n.strong,{children:"subject"})," field set."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar tokens create --secret-key file:///path/to/my-secret.key \\\n            --subject test-user\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"This command prints the token string on stdout."}),"\n",(0,a.jsx)(n.p,{children:'Similarly, you can create a token by passing the "private" key using the command below:'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar tokens create --private-key file:///path/to/my-private.key \\\n            --subject test-user\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"Finally, you can enter the following command to create a token with a pre-defined TTL. And then the token is automatically invalidated."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar tokens create --secret-key file:///path/to/my-secret.key \\\n            --subject test-user \\\n            --expiry-time 1y\n\n"})}),"\n",(0,a.jsx)(n.h3,{id:"authorization",children:"Authorization"}),"\n",(0,a.jsx)(n.p,{children:"The token itself does not have any permission associated. The authorization engine determines whether the token should have permissions or not. Once you have created the token, you can grant permission for this token to do certain actions. The following is an example."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar-admin namespaces grant-permission my-tenant/my-namespace \\\n            --role test-user \\\n            --actions produce,consume\n\n"})}),"\n",(0,a.jsx)(n.h3,{id:"enable-token-authentication-on-brokers",children:"Enable token authentication on Brokers"}),"\n",(0,a.jsxs)(n.p,{children:["To configure brokers to authenticate clients, add the following parameters to ",(0,a.jsx)(n.code,{children:"broker.conf"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-properties",children:"\n# Configuration to enable authentication and authorization\nauthenticationEnabled=true\nauthorizationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderToken\n\n# If using secret key\ntokenSecretKey=file:///path/to/secret.key\n# The key can also be passed inline:\n# tokenSecretKey=data:base64,FLFyW0oLJ2Fi22KKCm21J18mbAdztfSHN/lAT5ucEKU=\n\n# If using public/private\n# tokenPublicKey=file:///path/to/public.key\n\n"})}),"\n",(0,a.jsx)(n.h3,{id:"enable-token-authentication-on-proxies",children:"Enable token authentication on Proxies"}),"\n",(0,a.jsxs)(n.p,{children:["To configure proxies to authenticate clients, add the following parameters to ",(0,a.jsx)(n.code,{children:"proxy.conf"}),":"]}),"\n",(0,a.jsxs)(n.p,{children:["The proxy uses its own token when connecting to brokers. You need to configure the role token for this key pair in the ",(0,a.jsx)(n.code,{children:"proxyRoles"})," of the brokers. For more details, see the ",(0,a.jsx)(n.a,{href:"/docs/2.4.0/security-authorization",children:"authorization guide"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-properties",children:"\n# For clients connecting to the proxy\nauthenticationEnabled=true\nauthorizationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderToken\ntokenSecretKey=file:///path/to/secret.key\n\n# For the proxy to connect to brokers\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationToken\nbrokerClientAuthenticationParameters=token:eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0LXVzZXIifQ.9OHgE9ZUDeBTZs7nSMEFIuGNEX18FLR3qvy8mqxSxXw\n# Or, alternatively, read token from file\n# brokerClientAuthenticationParameters=file:///path/to/proxy-token.txt\n\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},89089:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(96540),a=t(34164),i=t(23104),o=t(56347),s=t(205),l=t(57485),c=t(31682),u=t(70679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,h]=m({queryString:t,groupId:a}),[b,k]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),f=(()=>{const e=c??b;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),k(e)}),[h,k,i]),tabValues:i}}var k=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==r&&(c(n),o(a))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:h,onClick:u,...i,className:(0,a.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function g(e){const n=b(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,y.jsx)(x,{...n,...e}),(0,y.jsx)(j,{...n,...e})]})}function v(e){const n=(0,k.A)();return(0,y.jsx)(g,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(96540);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);