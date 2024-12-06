"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[76593],{98529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"security-oauth2","title":"Client authentication using OAuth 2.0 access tokens","description":"Pulsar supports authenticating clients using OAuth 2.0 access tokens. You can use OAuth 2.0 access tokens to identify a Pulsar client and associate the Pulsar client with some \\"principal\\" (or \\"role\\"), which is permitted to do some actions, such as publishing messages to a topic or consume messages from a topic.","source":"@site/versioned_docs/version-2.8.x/security-oauth2.md","sourceDirName":".","slug":"/security-oauth2","permalink":"/docs/2.8.x/security-oauth2","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/security-oauth2.md","tags":[],"version":"2.8.x","frontMatter":{"id":"security-oauth2","title":"Client authentication using OAuth 2.0 access tokens","sidebar_label":"Authentication using OAuth 2.0 access tokens","original_id":"security-oauth2"},"sidebar":"docsSidebar","previous":{"title":"Authentication using Kerberos","permalink":"/docs/2.8.x/security-kerberos"},"next":{"title":"Authentication using HTTP basic","permalink":"/docs/2.8.x/security-basic-auth"}}');var a=n(74848),s=n(28453);const c={id:"security-oauth2",title:"Client authentication using OAuth 2.0 access tokens",sidebar_label:"Authentication using OAuth 2.0 access tokens",original_id:"security-oauth2"},r=void 0,l={},o=[{value:"Authentication provider configuration",id:"authentication-provider-configuration",level:2},{value:"Authentication types",id:"authentication-types",level:3},{value:"Client credentials",id:"client-credentials",level:4},{value:"Typical original OAuth2 request mapping",id:"typical-original-oauth2-request-mapping",level:3},{value:"Client Configuration",id:"client-configuration",level:2},{value:"Java",id:"java",level:3},{value:"C++ client",id:"c-client",level:3},{value:"Go client",id:"go-client",level:3},{value:"Python client",id:"python-client",level:3},{value:"CLI configuration",id:"cli-configuration",level:2},{value:"pulsar-admin",id:"pulsar-admin",level:3},{value:"pulsar-client",id:"pulsar-client",level:3},{value:"pulsar-perf",id:"pulsar-perf",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:'Pulsar supports authenticating clients using OAuth 2.0 access tokens. You can use OAuth 2.0 access tokens to identify a Pulsar client and associate the Pulsar client with some "principal" (or "role"), which is permitted to do some actions, such as publishing messages to a topic or consume messages from a topic.'}),"\n",(0,a.jsxs)(t.p,{children:["This module is used to support the Pulsar client authentication plugin for OAuth 2.0. After communicating with the Oauth 2.0 server, the Pulsar client gets an ",(0,a.jsx)(t.code,{children:"access token"})," from the Oauth 2.0 server, and passes this ",(0,a.jsx)(t.code,{children:"access token"})," to the Pulsar broker to do the authentication. The broker can use the ",(0,a.jsx)(t.code,{children:"org.apache.pulsar.broker.authentication.AuthenticationProviderToken"}),". Or, you can add your own ",(0,a.jsx)(t.code,{children:"AuthenticationProvider"})," to make it with this module."]}),"\n",(0,a.jsx)(t.h2,{id:"authentication-provider-configuration",children:"Authentication provider configuration"}),"\n",(0,a.jsxs)(t.p,{children:["This library allows you to authenticate the Pulsar client by using an access token that is obtained from an OAuth 2.0 authorization service, which acts as a ",(0,a.jsx)(t.em,{children:"token issuer"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"authentication-types",children:"Authentication types"}),"\n",(0,a.jsx)(t.p,{children:"The authentication type determines how to obtain an access token through an OAuth 2.0 authorization flow."}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["Currently, the Pulsar Java client only supports the ",(0,a.jsx)(t.code,{children:"client_credentials"})," authentication type."]})}),"\n",(0,a.jsx)(t.h4,{id:"client-credentials",children:"Client credentials"}),"\n",(0,a.jsxs)(t.p,{children:["The following table lists parameters supported for the ",(0,a.jsx)(t.code,{children:"client credentials"})," authentication type."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Example"}),(0,a.jsx)(t.th,{children:"Required or not"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"type"})}),(0,a.jsx)(t.td,{children:"Oauth 2.0 authentication type."}),(0,a.jsxs)(t.td,{children:[(0,a.jsx)(t.code,{children:"client_credentials"})," (default)"]}),(0,a.jsx)(t.td,{children:"Optional"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"issuerUrl"})}),(0,a.jsx)(t.td,{children:"URL of the authentication provider which allows the Pulsar client to obtain an access token"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"https://accounts.google.com"})}),(0,a.jsx)(t.td,{children:"Required"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"privateKey"})}),(0,a.jsx)(t.td,{children:"URL to a JSON credentials file"}),(0,a.jsxs)(t.td,{children:["Support the following pattern formats: ",(0,a.jsx)("br",{})," ",(0,a.jsxs)("li",{children:[" ",(0,a.jsx)(t.code,{children:"file:///path/to/file"})," "]}),(0,a.jsxs)("li",{children:[(0,a.jsx)(t.code,{children:"file:/path/to/file"})," "]}),(0,a.jsxs)("li",{children:[" ",(0,a.jsx)(t.code,{children:"data:application/json;base64,<base64-encoded value>"})," "]})]}),(0,a.jsx)(t.td,{children:"Required"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"audience"})}),(0,a.jsx)(t.td,{children:'An OAuth 2.0 "resource server" identifier for the Pulsar cluster'}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"https://broker.example.com"})}),(0,a.jsx)(t.td,{children:"Optional"})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["The credentials file contains service account credentials used with the client authentication type. The following shows an example of a credentials file ",(0,a.jsx)(t.code,{children:"credentials_file.json"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'\n{\n  "type": "client_credentials",\n  "client_id": "d9ZyX97q1ef8Cr81WHVC4hFQ64vSlDK3",\n  "client_secret": "on1uJ...k6F6R",\n  "client_email": "1234567890-abcdefghijklmnopqrstuvwxyz@developer.gserviceaccount.com",\n  "issuer_url": "https://accounts.google.com"\n}\n\n'})}),"\n",(0,a.jsxs)(t.p,{children:["In the above example, the authentication type is set to ",(0,a.jsx)(t.code,{children:"client_credentials"}),' by default. And the fields "client_id" and "client_secret" are required.']}),"\n",(0,a.jsx)(t.h3,{id:"typical-original-oauth2-request-mapping",children:"Typical original OAuth2 request mapping"}),"\n",(0,a.jsx)(t.p,{children:"The following shows a typical original OAuth2 request, which is used to obtain the access token from the OAuth2 server."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'\ncurl --request POST \\\n  --url https://dev-kt-aa9ne.us.auth0.com/oauth/token \\\n  --header \'content-type: application/json\' \\\n  --data \'{\n  "client_id":"Xd23RHsUnvUlP7wchjNYOaIfazgeHd9x",\n  "client_secret":"rT7ps7WY8uhdVuBTKWZkttwLdQotmdEliaM5rLfmgNibvqziZ-g07ZH52N_poGAb",\n  "audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/",\n  "grant_type":"client_credentials"}\'\n\n'})}),"\n",(0,a.jsx)(t.p,{children:"In the above example, the mapping relationship is shown as below."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"issuerUrl"})," parameter in this plugin is mapped to ",(0,a.jsx)(t.code,{children:"--url https://dev-kt-aa9ne.us.auth0.com"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"privateKey"})," file parameter in this plugin should at least contains the ",(0,a.jsx)(t.code,{children:"client_id"})," and ",(0,a.jsx)(t.code,{children:"client_secret"})," fields."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"audience"})," parameter in this plugin is mapped to  ",(0,a.jsx)(t.code,{children:'"audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/"'}),". This field is optional and only used by some identity providers in 2.8.2 and later versions."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"client-configuration",children:"Client Configuration"}),"\n",(0,a.jsx)(t.p,{children:"You can use the OAuth2 authentication provider with the following Pulsar clients."}),"\n",(0,a.jsx)(t.h3,{id:"java",children:"Java"}),"\n",(0,a.jsx)(t.p,{children:"You can use the factory method to configure authentication for Pulsar Java client."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'\nimport org.apache.pulsar.client.impl.auth.oauth2.AuthenticationFactoryOAuth2;\n\nString issuerUrl = "https://dev-kt-aa9ne.us.auth0.com";\nString credentialsUrl = "file:///path/to/KeyFile.json";\nString audience = "https://dev-kt-aa9ne.us.auth0.com/api/v2/";\n\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(\n        AuthenticationFactoryOAuth2.clientCredentials(issuerUrl, credentialsUrl, audience))\n    .build();\n\n'})}),"\n",(0,a.jsx)(t.p,{children:"In addition, you can also use the encoded parameters to configure authentication for Pulsar Java client."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'\nAuthentication auth = AuthenticationFactory\n    .create(AuthenticationOAuth2.class.getName(), "{"type":"client_credentials","privateKey":"./key/path/..","issuerUrl":"...","audience":"..."}");\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://broker.example.com:6650/")\n    .authentication(auth)\n    .build();\n\n'})}),"\n",(0,a.jsx)(t.h3,{id:"c-client",children:"C++ client"}),"\n",(0,a.jsxs)(t.p,{children:["The C++ client is similar to the Java client. You need to provide parameters of ",(0,a.jsx)(t.code,{children:"issuerUrl"}),", ",(0,a.jsx)(t.code,{children:"private_key"})," (the credentials file path), and the audience."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c++",children:'\n#include <pulsar/Client.h>\n\npulsar::ClientConfiguration config;\nstd::string params = R"({\n    "issuer_url": "https://dev-kt-aa9ne.us.auth0.com",\n    "private_key": "../../pulsar-broker/src/test/resources/authentication/token/cpp_credentials_file.json",\n    "audience": "https://dev-kt-aa9ne.us.auth0.com/api/v2/"})";\n\nconfig.setAuth(pulsar::AuthOauth2::create(params));\n\npulsar::Client client("pulsar://broker.example.com:6650/", config);\n\n'})}),"\n",(0,a.jsx)(t.h3,{id:"go-client",children:"Go client"}),"\n",(0,a.jsx)(t.p,{children:"To enable OAuth2 authentication in Go client, you need to configure OAuth2 authentication.\nThis example shows how to configure OAuth2 authentication in Go client."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'\noauth := pulsar.NewAuthenticationOAuth2(map[string]string{\n\t\t"type":       "client_credentials",\n\t\t"issuerUrl":  "https://dev-kt-aa9ne.us.auth0.com",\n\t\t"audience":   "https://dev-kt-aa9ne.us.auth0.com/api/v2/",\n\t\t"privateKey": "/path/to/privateKey",\n\t\t"clientId":   "0Xx...Yyxeny",\n\t})\nclient, err := pulsar.NewClient(pulsar.ClientOptions{\n\t\tURL:              "pulsar://my-cluster:6650",\n\t\tAuthentication:   oauth,\n})\n\n'})}),"\n",(0,a.jsx)(t.h3,{id:"python-client",children:"Python client"}),"\n",(0,a.jsx)(t.p,{children:"To enable OAuth2 authentication in Python client, you need to configure OAuth2 authentication.\nThis example shows how to configure OAuth2 authentication in Python client."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'\nfrom pulsar import Client, AuthenticationOauth2\n\nparams = \'\'\'\n{\n    "issuer_url": "https://dev-kt-aa9ne.us.auth0.com",\n    "private_key": "/path/to/privateKey",\n    "audience": "https://dev-kt-aa9ne.us.auth0.com/api/v2/"\n}\n\'\'\'\n\nclient = Client("pulsar://my-cluster:6650", authentication=AuthenticationOauth2(params))\n\n'})}),"\n",(0,a.jsx)(t.h2,{id:"cli-configuration",children:"CLI configuration"}),"\n",(0,a.jsx)(t.p,{children:"This section describes how to use Pulsar CLI tools to connect a cluster through OAuth2 authentication plugin."}),"\n",(0,a.jsx)(t.h3,{id:"pulsar-admin",children:"pulsar-admin"}),"\n",(0,a.jsx)(t.p,{children:"This example shows how to use pulsar-admin to connect to a cluster through OAuth2 authentication plugin."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",metastring:"script",children:'\nbin/pulsar-admin --admin-url https://streamnative.cloud:443 \\\n--auth-plugin org.apache.pulsar.client.impl.auth.oauth2.AuthenticationOAuth2 \\\n--auth-params \'{"privateKey":"file:///path/to/key/file.json",\n    "issuerUrl":"https://dev-kt-aa9ne.us.auth0.com",\n    "audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/"}\' \\\ntenants list\n\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Set the ",(0,a.jsx)(t.code,{children:"admin-url"})," parameter to the Web service URL. A Web service URL is a combination of the protocol, hostname and port ID, such as ",(0,a.jsx)(t.code,{children:"pulsar://localhost:6650"}),".\nSet the ",(0,a.jsx)(t.code,{children:"privateKey"}),", ",(0,a.jsx)(t.code,{children:"issuerUrl"}),", and ",(0,a.jsx)(t.code,{children:"audience"})," parameters to the values based on the configuration in the key file. For details, see ",(0,a.jsx)(t.a,{href:"#authentication-types",children:"authentication types"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"pulsar-client",children:"pulsar-client"}),"\n",(0,a.jsx)(t.p,{children:"This example shows how to use pulsar-client to connect to a cluster through OAuth2 authentication plugin."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",metastring:"script",children:'\nbin/pulsar-client \\\n--url SERVICE_URL \\\n--auth-plugin org.apache.pulsar.client.impl.auth.oauth2.AuthenticationOAuth2 \\\n--auth-params \'{"privateKey":"file:///path/to/key/file.json",\n    "issuerUrl":"https://dev-kt-aa9ne.us.auth0.com",\n    "audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/"}\' \\\nproduce test-topic -m "test-message" -n 10\n\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Set the ",(0,a.jsx)(t.code,{children:"admin-url"})," parameter to the Web service URL. A Web service URL is a combination of the protocol, hostname and port ID, such as ",(0,a.jsx)(t.code,{children:"pulsar://localhost:6650"}),".\nSet the ",(0,a.jsx)(t.code,{children:"privateKey"}),", ",(0,a.jsx)(t.code,{children:"issuerUrl"}),", and ",(0,a.jsx)(t.code,{children:"audience"})," parameters to the values based on the configuration in the key file. For details, see ",(0,a.jsx)(t.a,{href:"#authentication-types",children:"authentication types"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"pulsar-perf",children:"pulsar-perf"}),"\n",(0,a.jsx)(t.p,{children:"This example shows how to use pulsar-perf to connect to a cluster through OAuth2 authentication plugin."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",metastring:"script",children:'\nbin/pulsar-perf produce --service-url pulsar+ssl://streamnative.cloud:6651 \\\n--auth_plugin org.apache.pulsar.client.impl.auth.oauth2.AuthenticationOAuth2 \\\n--auth-params \'{"privateKey":"file:///path/to/key/file.json",\n    "issuerUrl":"https://dev-kt-aa9ne.us.auth0.com",\n    "audience":"https://dev-kt-aa9ne.us.auth0.com/api/v2/"}\' \\\n-r 1000 -s 1024 test-topic\n\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Set the ",(0,a.jsx)(t.code,{children:"admin-url"})," parameter to the Web service URL. A Web service URL is a combination of the protocol, hostname and port ID, such as ",(0,a.jsx)(t.code,{children:"pulsar://localhost:6650"}),".\nSet the ",(0,a.jsx)(t.code,{children:"privateKey"}),", ",(0,a.jsx)(t.code,{children:"issuerUrl"}),", and ",(0,a.jsx)(t.code,{children:"audience"})," parameters to the values based on the configuration in the key file. For details, see ",(0,a.jsx)(t.a,{href:"#authentication-types",children:"authentication types"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var i=n(96540);const a={},s=i.createContext(a);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);