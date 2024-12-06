"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[59595],{62357:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"security-extending","title":"Extending Authentication and Authorization in Pulsar","description":"Pulsar provides a way to use custom authentication and authorization mechanisms.","source":"@site/versioned_docs/version-2.6.3/security-extending.md","sourceDirName":".","slug":"/security-extending","permalink":"/docs/2.6.3/security-extending","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.3/security-extending.md","tags":[],"version":"2.6.3","frontMatter":{"id":"security-extending","title":"Extending Authentication and Authorization in Pulsar","sidebar_label":"Extending","original_id":"security-extending"},"sidebar":"docsSidebar","previous":{"title":"End-to-End Encryption","permalink":"/docs/2.6.3/security-encryption"},"next":{"title":"Bouncy Castle Providers","permalink":"/docs/2.6.3/security-bouncy-castle"}}');var a=t(74848),r=t(28453);const o={id:"security-extending",title:"Extending Authentication and Authorization in Pulsar",sidebar_label:"Extending",original_id:"security-extending"},c=void 0,s={},l=[{value:"Authentication",id:"authentication",level:2},{value:"Client authentication plugin",id:"client-authentication-plugin",level:3},{value:"Broker authentication plugin",id:"broker-authentication-plugin",level:3},{value:"Authorization",id:"authorization",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Pulsar provides a way to use custom authentication and authorization mechanisms."}),"\n",(0,a.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,a.jsxs)(n.p,{children:["Pulsar supports mutual TLS and Athenz authentication plugins. For how to use these authentication plugins, you can refer to the description in ",(0,a.jsx)(n.a,{href:"/docs/2.6.3/security-overview",children:"Security"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"You can choose to use a custom authentication mechanism by providing the implementation in the form of two plugins. One plugin is for the Client library and the other plugin is for the Pulsar Broker to validate the credentials."}),"\n",(0,a.jsx)(n.h3,{id:"client-authentication-plugin",children:"Client authentication plugin"}),"\n",(0,a.jsxs)(n.p,{children:["For client library, you need to implement ",(0,a.jsx)(n.code,{children:"org.apache.pulsar.client.api.Authentication"}),". By entering the command below you can pass this class when you create a Pulsar client:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://localhost:6650")\n    .authentication(new MyAuthentication())\n    .build();\n\n'})}),"\n",(0,a.jsx)(n.p,{children:"You can use 2 interfaces to implement on the client side:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Authentication"})," -> ",(0,a.jsx)(n.a,{href:"http://pulsar.apache.org/api/client/org/apache/pulsar/client/api/Authentication.html",children:"http://pulsar.apache.org/api/client/org/apache/pulsar/client/api/Authentication.html"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"AuthenticationDataProvider"})," -> ",(0,a.jsx)(n.a,{href:"http://pulsar.apache.org/api/client/org/apache/pulsar/client/api/AuthenticationDataProvider.html",children:"http://pulsar.apache.org/api/client/org/apache/pulsar/client/api/AuthenticationDataProvider.html"})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["This in turn needs to provide the client credentials in the form of ",(0,a.jsx)(n.code,{children:"org.apache.pulsar.client.api.AuthenticationDataProvider"}),". This leaves the chance to return different kinds of authentication token for different types of connection or by passing a certificate chain to use for TLS."]}),"\n",(0,a.jsx)(n.p,{children:"You can find examples for client authentication providers at:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Mutual TLS Auth -- ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth",children:"https://github.com/apache/pulsar/tree/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth"})]}),"\n",(0,a.jsxs)(n.li,{children:["Athenz -- ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/tree/master/pulsar-client-auth-athenz/src/main/java/org/apache/pulsar/client/impl/auth",children:"https://github.com/apache/pulsar/tree/master/pulsar-client-auth-athenz/src/main/java/org/apache/pulsar/client/impl/auth"})]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"broker-authentication-plugin",children:"Broker authentication plugin"}),"\n",(0,a.jsx)(n.p,{children:"On broker side, you need the corresponding plugin to validate the credentials that the client passes. Broker can support multiple authentication providers at the same time."}),"\n",(0,a.jsxs)(n.p,{children:["In ",(0,a.jsx)(n.code,{children:"conf/broker.conf"})," you can choose to specify a list of valid providers:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-properties",children:"\n# Authentication provider name list, which is comma separated list of class names\nauthenticationProviders=\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To implement ",(0,a.jsx)(n.code,{children:"org.apache.pulsar.broker.authentication.AuthenticationProvider"})," on one single interface:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'\n/**\n * Provider of authentication mechanism\n */\npublic interface AuthenticationProvider extends Closeable {\n\n    /**\n     * Perform initialization for the authentication provider\n     *\n     * @param config\n     *            broker config object\n     * @throws IOException\n     *             if the initialization fails\n     */\n    void initialize(ServiceConfiguration config) throws IOException;\n\n    /**\n     * @return the authentication method name supported by this provider\n     */\n    String getAuthMethodName();\n\n    /**\n     * Validate the authentication for the given credentials with the specified authentication data\n     *\n     * @param authData\n     *            provider specific authentication data\n     * @return the "role" string for the authenticated connection, if the authentication was successful\n     * @throws AuthenticationException\n     *             if the credentials are not valid\n     */\n    String authenticate(AuthenticationDataSource authData) throws AuthenticationException;\n\n}\n\n'})}),"\n",(0,a.jsx)(n.p,{children:"The following is the example for Broker authentication plugins:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Mutual TLS -- ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderTls.java",children:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderTls.java"})]}),"\n",(0,a.jsxs)(n.li,{children:["Athenz -- ",(0,a.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-auth-athenz/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderAthenz.java",children:"https://github.com/apache/pulsar/blob/master/pulsar-broker-auth-athenz/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderAthenz.java"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"authorization",children:"Authorization"}),"\n",(0,a.jsx)(n.p,{children:'Authorization is the operation that checks whether a particular "role" or "principal" has a permission to perform a certain operation.'}),"\n",(0,a.jsx)(n.p,{children:"By default, Pulsar provides an embedded authorization, though configuring a different one through a plugin is also an alternative choice."}),"\n",(0,a.jsxs)(n.p,{children:["To provide a custom provider, you need to implement the ",(0,a.jsx)(n.code,{children:"org.apache.pulsar.broker.authorization.AuthorizationProvider"})," interface, put this class in the Pulsar broker classpath and configure the class in ",(0,a.jsx)(n.code,{children:"conf/broker.conf"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-properties",children:"\n# Authorization provider fully qualified class-name\nauthorizationProvider=org.apache.pulsar.broker.authorization.PulsarAuthorizationProvider\n\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"\n/**\n * Provider of authorization mechanism\n */\npublic interface AuthorizationProvider extends Closeable {\n\n    /**\n     * Perform initialization for the authorization provider\n     *\n     * @param config\n     *            broker config object\n     * @param configCache\n     *            pulsar zk configuration cache service\n     * @throws IOException\n     *             if the initialization fails\n     */\n    void initialize(ServiceConfiguration conf, ConfigurationCacheService configCache) throws IOException;\n\n    /**\n     * Check if the specified role has permission to send messages to the specified fully qualified topic name.\n     *\n     * @param topicName\n     *            the fully qualified topic name associated with the topic.\n     * @param role\n     *            the app id used to send messages to the topic.\n     */\n    CompletableFuture<Boolean> canProduceAsync(TopicName topicName, String role,\n            AuthenticationDataSource authenticationData);\n\n    /**\n     * Check if the specified role has permission to receive messages from the specified fully qualified topic name.\n     *\n     * @param topicName\n     *            the fully qualified topic name associated with the topic.\n     * @param role\n     *            the app id used to receive messages from the topic.\n     * @param subscription\n     *            the subscription name defined by the client\n     */\n    CompletableFuture<Boolean> canConsumeAsync(TopicName topicName, String role,\n            AuthenticationDataSource authenticationData, String subscription);\n\n    /**\n     * Check whether the specified role can perform a lookup for the specified topic.\n     *\n     * For that the caller needs to have producer or consumer permission.\n     *\n     * @param topicName\n     * @param role\n     * @return\n     * @throws Exception\n     */\n    CompletableFuture<Boolean> canLookupAsync(TopicName topicName, String role,\n            AuthenticationDataSource authenticationData);\n\n    /**\n     *\n     * Grant authorization-action permission on a namespace to the given client\n     *\n     * @param namespace\n     * @param actions\n     * @param role\n     * @param authDataJson\n     *            additional authdata in json format\n     * @return CompletableFuture\n     * @completesWith <br />\n     *                IllegalArgumentException when namespace not found<br />\n     *                IllegalStateException when failed to grant permission\n     */\n    CompletableFuture<Void> grantPermissionAsync(NamespaceName namespace, Set<AuthAction> actions, String role,\n            String authDataJson);\n\n    /**\n     * Grant authorization-action permission on a topic to the given client\n     *\n     * @param topicName\n     * @param role\n     * @param authDataJson\n     *            additional authdata in json format\n     * @return CompletableFuture\n     * @completesWith <br />\n     *                IllegalArgumentException when namespace not found<br />\n     *                IllegalStateException when failed to grant permission\n     */\n    CompletableFuture<Void> grantPermissionAsync(TopicName topicName, Set<AuthAction> actions, String role,\n            String authDataJson);\n\n}\n\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(96540);const a={},r=i.createContext(a);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);