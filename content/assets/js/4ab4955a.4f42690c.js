"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1892],{79254:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"security-token-admin","title":"Token authentication admin","description":"Token Authentication Overview","source":"@site/versioned_docs/version-2.7.0/security-token-admin.md","sourceDirName":".","slug":"/security-token-admin","permalink":"/docs/2.7.0/security-token-admin","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.0/security-token-admin.md","tags":[],"version":"2.7.0","frontMatter":{"id":"security-token-admin","title":"Token authentication admin","sidebar_label":"Token authentication admin","original_id":"security-token-admin"}}');var r=t(74848),s=t(28453);const a={id:"security-token-admin",title:"Token authentication admin",sidebar_label:"Token authentication admin",original_id:"security-token-admin"},o=void 0,l={},c=[{value:"Token Authentication Overview",id:"token-authentication-overview",level:2},{value:"Always use TLS transport encryption",id:"always-use-tls-transport-encryption",level:4},{value:"Secret vs Public/Private keys",id:"secret-vs-publicprivate-keys",level:2},{value:"Secret key",id:"secret-key",level:3},{value:"Creating a secret key",id:"creating-a-secret-key",level:4},{value:"Public/Private keys",id:"publicprivate-keys",level:3},{value:"Creating a key pair",id:"creating-a-key-pair",level:4},{value:"Generating tokens",id:"generating-tokens",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Enabling Token Authentication ...",id:"enabling-token-authentication-",level:2},{value:"... on Brokers",id:"-on-brokers",level:3},{value:"... on Proxies",id:"-on-proxies",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"token-authentication-overview",children:"Token Authentication Overview"}),"\n",(0,r.jsxs)(n.p,{children:["Pulsar supports authenticating clients using security tokens that are based on ",(0,r.jsx)(n.a,{href:"https://jwt.io/introduction/",children:"JSON Web Tokens"})," (",(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7519",children:"RFC-7519"}),")."]}),"\n",(0,r.jsx)(n.p,{children:'Tokens are used to identify a Pulsar client and associate with some "principal" (or "role") which\nwill be then granted permissions to do some actions (eg: publish or consume from a topic).'}),"\n",(0,r.jsx)(n.p,{children:"A user will typically be given a token string by an administrator (or some automated service)."}),"\n",(0,r.jsx)(n.p,{children:"The compact representation of a signed JWT is a string that looks like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\n eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJKb2UifQ.ipevRNuRP6HflG8cFKnmUPtypruRC4fb1DWtoLL62SY\n\n"})}),"\n",(0,r.jsx)(n.p,{children:'Application will specify the token when creating the client instance. An alternative is to pass\na "token supplier", that is to say a function that returns the token when the client library\nwill need one.'}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.h4,{id:"always-use-tls-transport-encryption",children:"Always use TLS transport encryption"}),"\n",(0,r.jsxs)(n.p,{children:["Sending a token is equivalent to sending a password over the wire. It is strongly recommended to\nalways use TLS encryption when talking to the Pulsar service. See\n",(0,r.jsx)(n.a,{href:"/docs/2.7.0/security-tls-transport",children:"Transport Encryption using TLS"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"secret-vs-publicprivate-keys",children:"Secret vs Public/Private keys"}),"\n",(0,r.jsx)(n.p,{children:"JWT support two different kind of keys in order to generate and validate the tokens:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Symmetric :","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["there is a single ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Secret"})})," key that is used both to generate and validate"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Asymmetric: there is a pair of keys.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Private"})})," key is used to generate tokens"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Public"})})," key is used to validate tokens"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"secret-key",children:"Secret key"}),"\n",(0,r.jsx)(n.p,{children:"When using a secret key, the administrator will create the key and he will\nuse it to generate the client tokens. This key will be also configured to\nthe brokers to allow them to validate the clients."}),"\n",(0,r.jsx)(n.h4,{id:"creating-a-secret-key",children:"Creating a secret key"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Output file will be generated in the root of your pulsar installation directory. You can also provide absolute path for the output file."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar tokens create-secret-key --output my-secret.key\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"To generate base64 encoded private key"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar tokens create-secret-key --output  /opt/my-secret.key --base64\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"publicprivate-keys",children:"Public/Private keys"}),"\n",(0,r.jsxs)(n.p,{children:["With public/private, we need to create a pair of keys. Pulsar supports all algorithms supported by the Java JWT library shown ",(0,r.jsx)(n.a,{href:"https://github.com/jwtk/jjwt#signature-algorithms-keys",children:"here"})]}),"\n",(0,r.jsx)(n.h4,{id:"creating-a-key-pair",children:"Creating a key pair"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Output file will be generated in the root of your pulsar installation directory. You can also provide absolute path for the output file."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar tokens create-key-pair --output-private-key my-private.key --output-public-key my-public.key\n\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"my-private.key"})," will be stored in a safe location and only used by administrator to generate\nnew tokens."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"my-public.key"})," will be distributed to all Pulsar brokers. This file can be publicly shared without\nany security concern."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"generating-tokens",children:"Generating tokens"}),"\n",(0,r.jsxs)(n.p,{children:['A token is the credential associated with a user. The association is done through the "principal",\nor "role". In case of JWT tokens, this field it\'s typically referred to as ',(0,r.jsx)(n.strong,{children:"subject"}),", though\nit's exactly the same concept."]}),"\n",(0,r.jsxs)(n.p,{children:["The generated token is then required to have a ",(0,r.jsx)(n.strong,{children:"subject"})," field set."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar tokens create --secret-key file:///path/to/my-secret.key \\\n            --subject test-user\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will print the token string on stdout."}),"\n",(0,r.jsx)(n.p,{children:'Similarly, one can create a token by passing the "private" key:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar tokens create --private-key file:///path/to/my-private.key \\\n            --subject test-user\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"Finally, a token can also be created with a pre-defined TTL. After that time,\nthe token will be automatically invalidated."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar tokens create --secret-key file:///path/to/my-secret.key \\\n            --subject test-user \\\n            --expiry-time 1y\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"authorization",children:"Authorization"}),"\n",(0,r.jsx)(n.p,{children:"The token itself doesn't have any permission associated. That will be determined by the\nauthorization engine. Once the token is created, one can grant permission for this token to do certain\nactions. Eg. :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ bin/pulsar-admin namespaces grant-permission my-tenant/my-namespace \\\n            --role test-user \\\n            --actions produce,consume\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"enabling-token-authentication-",children:"Enabling Token Authentication ..."}),"\n",(0,r.jsx)(n.h3,{id:"-on-brokers",children:"... on Brokers"}),"\n",(0,r.jsxs)(n.p,{children:["To configure brokers to authenticate clients, put the following in ",(0,r.jsx)(n.code,{children:"broker.conf"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:"\n# Configuration to enable authentication and authorization\nauthenticationEnabled=true\nauthorizationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderToken\n\n# If using secret key\ntokenSecretKey=file:///path/to/secret.key\n# The key can also be passed inline:\n# tokenSecretKey=data:;base64,FLFyW0oLJ2Fi22KKCm21J18mbAdztfSHN/lAT5ucEKU=\n\n# If using public/private\n# tokenPublicKey=file:///path/to/public.key\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"-on-proxies",children:"... on Proxies"}),"\n",(0,r.jsxs)(n.p,{children:["To configure proxies to authenticate clients, put the following in ",(0,r.jsx)(n.code,{children:"proxy.conf"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["The proxy will have its own token used when talking to brokers. The role token for this\nkey pair should be configured in the ",(0,r.jsx)(n.code,{children:"proxyRoles"})," of the brokers. See the ",(0,r.jsx)(n.a,{href:"/docs/2.7.0/security-authorization",children:"authorization guide"})," for more details."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:"\n# For clients connecting to the proxy\nauthenticationEnabled=true\nauthorizationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderToken\ntokenSecretKey=file:///path/to/secret.key\n\n# For the proxy to connect to brokers\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationToken\nbrokerClientAuthenticationParameters=token:eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0LXVzZXIifQ.9OHgE9ZUDeBTZs7nSMEFIuGNEX18FLR3qvy8mqxSxXw\n# Or, alternatively, read token from file\n# brokerClientAuthenticationParameters=file:///path/to/proxy-token.txt\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);