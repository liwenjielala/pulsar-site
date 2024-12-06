"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[63881],{58288:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"security-openid-connect","title":"Authentication using OpenID Connect","description":"Apache Pulsar supports authenticating clients using OpenID Connect, which is an implementation of the OAuth 2.0 Protocol. Using an access token obtained from an OpenID Connect compliant Identity Provider service acting as the token issuer, you can identify a Pulsar client and associate it with a \\"principal\\" (or \\"role\\") that is permitted to do some actions, such as publishing messages to a topic or performing some admin operation.","source":"@site/versioned_docs/version-3.0.x/security-openid-connect.md","sourceDirName":".","slug":"/security-openid-connect","permalink":"/docs/3.0.x/security-openid-connect","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/security-openid-connect.md","tags":[],"version":"3.0.x","frontMatter":{"id":"security-openid-connect","title":"Authentication using OpenID Connect","sidebar_label":"Authentication using OpenID Connect"},"sidebar":"docsSidebar","previous":{"title":"Authentication using OAuth 2.0 access tokens","permalink":"/docs/3.0.x/security-oauth2"},"next":{"title":"Authentication using HTTP basic","permalink":"/docs/3.0.x/security-basic-auth"}}');var o=t(74848),s=t(28453);const r={id:"security-openid-connect",title:"Authentication using OpenID Connect",sidebar_label:"Authentication using OpenID Connect"},c=void 0,a={},h=[{value:"OpenID Connect Authentication Flow",id:"openid-connect-authentication-flow",level:2},{value:"Enable OpenID Connect Authentication in the Broker and Proxy",id:"enable-openid-connect-authentication-in-the-broker-and-proxy",level:2},{value:"Signing Key Rotation",id:"signing-key-rotation",level:3},{value:"Enable OpenID Connect Authentication in the Function Worker",id:"enable-openid-connect-authentication-in-the-function-worker",level:2},{value:"Enable Custom OpenID Connect Integration with Kubernetes",id:"enable-custom-openid-connect-integration-with-kubernetes",level:2},{value:"Configuring Pulsar Components and Applications to use Projected Service Account Tokens to Authenticate with other Pulsar Components",id:"configuring-pulsar-components-and-applications-to-use-projected-service-account-tokens-to-authenticate-with-other-pulsar-components",level:2},{value:"Enabling AuthenticationProviderOpenID Connect and AuthenticationProviderToken Simultaneously",id:"enabling-authenticationprovideropenid-connect-and-authenticationprovidertoken-simultaneously",level:2},{value:"Configure OIDC authentication in Pulsar Clients and CLI Tools",id:"configure-oidc-authentication-in-pulsar-clients-and-cli-tools",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Apache Pulsar supports authenticating clients using ",(0,o.jsx)(n.a,{href:"https://openid.net/connect",children:"OpenID Connect"}),', which is an implementation of the OAuth 2.0 Protocol. Using an access token obtained from an OpenID Connect compliant Identity Provider service acting as the token issuer, you can identify a Pulsar client and associate it with a "principal" (or "role") that is permitted to do some actions, such as publishing messages to a topic or performing some admin operation.']}),"\n",(0,o.jsxs)(n.p,{children:["The source code for the OpenID Connect implementation is in the ",(0,o.jsx)(n.a,{href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-auth-oidc/",children:"pulsar-broker-auth-oidc"})," submodule in the Apache Pulsar git repo."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Pulsar's OpenID Connect integration was introduced in Pulsar 3.0.0. As always, if you encounter any issues, please ask questions on Pulsar channels and open issues in GitHub."})}),"\n",(0,o.jsx)(n.h2,{id:"openid-connect-authentication-flow",children:"OpenID Connect Authentication Flow"}),"\n",(0,o.jsxs)(n.p,{children:["After authenticating with the Identity Provider, the Pulsar client gets an access token from the server and passes this access token to Pulsar Server (Broker, Proxy, WebSocket Proxy, or Function Worker) for authentication. When using the ",(0,o.jsx)(n.code,{children:"AuthenticationProviderOpenID"})," class, the Pulsar Server performs the following validations in order:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Validate that the token's issuer claim (",(0,o.jsx)(n.code,{children:"iss"}),") is one of the allowed token issuers (",(0,o.jsx)(n.code,{children:"openIDAllowedTokenIssuers"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:["Retrieve and cache the OpenID Connect discovery document from the issuer following the ",(0,o.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-discovery-1_0.html",children:"OpenID Connect Discovery 1.0"})," specification."]}),"\n",(0,o.jsxs)(n.li,{children:["Verify the resulting JSON document's ",(0,o.jsx)(n.code,{children:"issuer"})," field matches the token's issuer claim."]}),"\n",(0,o.jsxs)(n.li,{children:["Retrieve and cache the public key set from the ",(0,o.jsx)(n.code,{children:"jwks_uri"})," provided by the discovery document obtained in step 2."]}),"\n",(0,o.jsx)(n.li,{children:"Verify the signature of the token using the public key set obtained in step 4."}),"\n",(0,o.jsxs)(n.li,{children:["Validate the token's claims, like ",(0,o.jsx)(n.code,{children:"aud"}),", ",(0,o.jsx)(n.code,{children:"exp"}),", ",(0,o.jsx)(n.code,{children:"iat"}),", and ",(0,o.jsx)(n.code,{children:"nbf"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["When token validation is successful, the Pulsar Server extracts the ",(0,o.jsx)(n.code,{children:"sub"})," claim from the token (or the configured ",(0,o.jsx)(n.code,{children:"openIDRoleClaim"}),") and uses it as the principal for authorization."]}),"\n",(0,o.jsx)(n.li,{children:"When the token expires, the Pulsar Server challenges the client to re-authenticate with the Identity Provider and provide a new access token. If the client fails to re-authenticate, the Pulsar Server closes the connection."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"enable-openid-connect-authentication-in-the-broker-and-proxy",children:"Enable OpenID Connect Authentication in the Broker and Proxy"}),"\n",(0,o.jsxs)(n.p,{children:["To configure Pulsar Servers to authenticate clients using OpenID Connect, add the following parameters to the ",(0,o.jsx)(n.code,{children:"conf/broker.conf"})," and the ",(0,o.jsx)(n.code,{children:"conf/proxy.conf"}),". If you use a standalone Pulsar, you need to add these parameters to the ",(0,o.jsx)(n.code,{children:"conf/standalone.conf"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-properties",children:"# Configuration to enable authentication\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.oidc.AuthenticationProviderOpenID\n\n# Required settings for AuthenticationProviderOpenID\n# A comma separated list of allowed, or trusted, token issuers. The token issuer is the URL of the token issuer.\nPULSAR_PREFIX_openIDAllowedTokenIssuers=https://my-issuer-1.com,https://my-issuer-2.com\n# The list of allowed audiences for the token. The audience is the intended recipient of the token. A token with\n# at least one of these audience claims will pass the audience validation check.\nPULSAR_PREFIX_openIDAllowedAudiences=audience-1,audience-2\n\n# Optional settings (values shown are the defaults)\n# The path to the file containing the trusted certificate(s) of the token issuer(s). If not set, uses the default\n# trust store of the JVM. Note: in version 3.0.0, the default only applies when this setting is not an environment\n# variable and is not in the configuration file.\nPULSAR_PREFIX_openIDTokenIssuerTrustCertsFilePath=\n# The JWT's claim to use for the role/principal during authorization.\nPULSAR_PREFIX_openIDRoleClaim=sub\n# The leeway, in seconds, to use when validating the token's expiration time.\nPULSAR_PREFIX_openIDAcceptedTimeLeewaySeconds=0\n\n# Cache settings\nPULSAR_PREFIX_openIDCacheSize=5\nPULSAR_PREFIX_openIDCacheRefreshAfterWriteSeconds=64800\nPULSAR_PREFIX_openIDCacheExpirationSeconds=86400\nPULSAR_PREFIX_openIDHttpConnectionTimeoutMillis=10000\nPULSAR_PREFIX_openIDHttpReadTimeoutMillis=10000\n\n# The number of seconds to wait before refreshing the JWKS when a token presents a key ID (kid claim) that is not\n# in the cache. This setting is available from Pulsar 3.0.1 and is documented below.\nPULSAR_PREFIX_openIDKeyIdCacheMissRefreshSeconds=300\n\n# Whether to require that issuers use HTTPS. It is part of the OIDC spec to use HTTPS, so the default is true.\n# This setting is for testing purposes and is not recommended for any production environment.\nPULSAR_PREFIX_openIDRequireIssuersUseHttps=true\n\n# A setting describing how to handle discovery of the OpenID Connect configuration document when the issuer is not\n# in the list of allowed issuers. This setting is documented below.\nPULSAR_PREFIX_openIDFallbackDiscoveryMode=DISABLED\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["When using OIDC for a client connecting through the proxy to the broker, it is necessary to set the broker's ",(0,o.jsx)(n.code,{children:"openIDAcceptedTimeLeewaySeconds"})," to double the proxy's ",(0,o.jsx)(n.code,{children:"authenticationRefreshCheckSeconds"})," configuration because the proxy caches the client's token and only refreshes it when it is expired. As such, in certain cases, when the proxy initiates a new connection to the broker, the token may not yet be expired in the proxy, but may be expired when it reaches the broker. You can mitigate this edge case by setting the broker's ",(0,o.jsx)(n.code,{children:"openIDAcceptedTimeLeewaySeconds"})," correctly."]})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The Pulsar WebSocket Proxy does not yet support OpenID Connect authentication. Here is an issue tracking this feature: ",(0,o.jsx)(n.a,{href:"https://github.com/apache/pulsar/issues/20236",children:"#20236"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"signing-key-rotation",children:"Signing Key Rotation"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"This feature is available from Pulsar 3.0.1."})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-discovery-1_0.html",children:"OpenID Connect Discovery 1.0"})," spec gives the ",(0,o.jsx)(n.code,{children:"AuthenticationProviderOpenID"})," a way to discover trusted public keys. The public keys are formatted as a ",(0,o.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc7517",children:"JSON Web Key (JWK)"})," set, also known as a JWKS. When the Identity Provider rotates signing keys, there is a chance that the Identity Provider will start signing tokens with the new key before the JWKS cache has been refreshed. To avoid rejecting tokens signed with the new key, the OIDC Authentication Provider will attempt to refresh the JWKS when a token has a trusted issuer claim but the key ID (kid claim) is not in the issuer's cached JWKS. The ",(0,o.jsx)(n.code,{children:"openIDKeyIdCacheMissRefreshSeconds"})," setting determines how long the OIDC Authentication Provider will wait before attempting to refresh the JWKS. The default value is 300 seconds. It means that a JWKS must have been in the cache for at least 300 seconds before a missing key ID triggers cache invalidation. The ",(0,o.jsx)(n.code,{children:"openIDKeyIdCacheMissRefreshSeconds"})," setting protects the OIDC Authentication Provider from a malicious client that presents a token with a new key ID every time it connects."]}),"\n",(0,o.jsx)(n.h2,{id:"enable-openid-connect-authentication-in-the-function-worker",children:"Enable OpenID Connect Authentication in the Function Worker"}),"\n",(0,o.jsxs)(n.p,{children:["To configure the Pulsar Function Worker to authenticate clients using OpenID Connect, add the following parameters to the ",(0,o.jsx)(n.code,{children:"conf/functions_worker.yml"})," file. The documentation for these settings is ",(0,o.jsx)(n.a,{href:"#enable-openid-connect-authentication-in-the-brokers-proxies-and-websocket-proxies",children:"above"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'# Configuration to enable authentication\nauthenticationEnabled: true\nauthenticationProviders: ["org.apache.pulsar.broker.authentication.oidc.AuthenticationProviderOpenID"]\nproperties:\n  openIDAllowedTokenIssuers: "https://my-issuer-1.com,https://my-issuer-2.com"\n  openIDAllowedAudiences: "audience-1,audience-2"\n  # Note: for 3.0.0, only include when using a custom trust store\n  openIDTokenIssuerTrustCertsFilePath: "/my/custom/trust/store"\n  openIDRoleClaim: "sub"\n  openIDAcceptedTimeLeewaySeconds: 0\n  openIDCacheSize: 5\n  openIDCacheRefreshAfterWriteSeconds: 64800\n  openIDCacheExpirationSeconds: 86400\n  openIDHttpConnectionTimeoutMillis: 10000\n  openIDHttpReadTimeoutMillis: 10000\n  openIDRequireIssuersUseHttps: true\n  openIDFallbackDiscoveryMode: "DISABLED"\n'})}),"\n",(0,o.jsx)(n.h2,{id:"enable-custom-openid-connect-integration-with-kubernetes",children:"Enable Custom OpenID Connect Integration with Kubernetes"}),"\n",(0,o.jsxs)(n.p,{children:["Kubernetes has a built-in OpenID Connect integration where ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#serviceaccount-token-volume-projection",children:"Service Account Token Volume Projections"})," can easily be mounted into pods as signed JWTs that can be used as OpenID Connect access tokens. The only drawback is that the ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#service-account-issuer-discovery",children:"Kubernetes token issuer discovery"})," feature is not completely compliant with the OpenID Spec (as their documentation explicitly mentions). To account for these discrepancies, Pulsar uses the ",(0,o.jsx)(n.code,{children:"openIDFallbackDiscoveryMode"})," setting to integrate with Kubernetes while technically breaking the spec in documented ways."]}),"\n",(0,o.jsxs)(n.p,{children:["The modes configure how the Open ID Connect Authentication Provider should handle a JWT that has an issuer claim that is not explicitly in the allowed issuers set configured by ",(0,o.jsx)(n.code,{children:"openIDAllowedTokenIssuers"}),". The current implementations rely on using the Kubernetes API Server's Open ID Connect features to discover an additional issuer or additional public keys to trust."]}),"\n",(0,o.jsxs)(n.p,{children:["The available values for ",(0,o.jsx)(n.code,{children:"openIDFallbackDiscoveryMode"})," are: ",(0,o.jsx)(n.code,{children:"DISABLED"}),", ",(0,o.jsx)(n.code,{children:"KUBERNETES_DISCOVER_TRUSTED_ISSUER"}),", and ",(0,o.jsx)(n.code,{children:"KUBERNETES_DISCOVER_PUBLIC_KEYS"}),". The quick summary is that EKS requires ",(0,o.jsx)(n.code,{children:"KUBERNETES_DISCOVER_TRUSTED_ISSUER"})," right now, but GKE and AKS require ",(0,o.jsx)(n.code,{children:"KUBERNETES_DISCOVER_PUBLIC_KEYS"}),". The implementation details follow."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"DISABLED"}),": There will be no discovery of additional trusted issuers or public keys. This setting requires that operators explicitly allow all issuers that will be trusted. For the Kubernetes Service Account Token Projections to work, the operator must explicitly trust the issuer on the token's ",(0,o.jsx)(n.code,{children:"iss"})," claim. This is the default setting because it is the only mode that explicitly follows the OIDC spec for verification of discovered provider configuration."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"KUBERNETES_DISCOVER_TRUSTED_ISSUER"}),": The Kubernetes API Server will be used to discover an additional trusted issuer by getting the issuer at the API Server's ",(0,o.jsx)(n.code,{children:"/.well-known/openid-configuration"})," endpoint, verifying that issuer matches the ",(0,o.jsx)(n.code,{children:"iss"})," claim on the supplied token, then treating that issuer as a trusted issuer by discovering the ",(0,o.jsx)(n.code,{children:"jwks_uri"})," via that issuer's ",(0,o.jsx)(n.code,{children:"/.well-known/openid-configuration"})," endpoint. This mode can be helpful in EKS environments where the API Server's public keys served at the ",(0,o.jsx)(n.code,{children:"/openid/v1/jwks"})," endpoint are not the same as the public keys served at the issuer's ",(0,o.jsx)(n.code,{children:"jwks_uri"}),". It fails to be OIDC compliant because the URL used to discover the provider configuration is not the same as the issuer claim on the token."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"KUBERNETES_DISCOVER_PUBLIC_KEYS"}),": The Kubernetes API Server will be used to discover an additional set of valid public keys by getting the issuer at the API Server's ",(0,o.jsx)(n.code,{children:"/.well-known/openid-configuration"})," endpoint, verifying that issuer matches the ",(0,o.jsx)(n.code,{children:"iss"})," claim on the supplied token, then calling the API Server endpoint to get the public keys using a Kubernetes client. This mode is currently useful for getting the public keys from the API Server because the API Server requires custom TLS and authentication, and the Kubernetes client automatically handles those. It fails to be OIDC compliant because the URL used to discover the provider configuration is not the same as the issuer claim on the token."]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.p,{children:["When deploying with either ",(0,o.jsx)(n.code,{children:"KUBERNETES_DISCOVER_TRUSTED_ISSUER"})," or ",(0,o.jsx)(n.code,{children:"KUBERNETES_DISCOVER_PUBLIC_KEYS"}),", you will likely encounter an error like the following ",(0,o.jsx)(n.code,{children:'forbidden: User \\"system:serviceaccount:pulsar:superuser\\" cannot get path \\"/.well-known/openid-configuration/\\"'}),". That error is a result of ",(0,o.jsx)(n.a,{href:"https://github.com/kubernetes/kubernetes/issues/117455",children:"https://github.com/kubernetes/kubernetes/issues/117455"}),", which happens because the ",(0,o.jsx)(n.code,{children:"AuthenticationProviderOpenID"})," plugin uses the Java Kubernetes client to connect to the Kubernetes API Server. The solution, which is minimally invasive, is to run the following command against your target Kubernetes cluster:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'kubectl patch clusterrole system:service-account-issuer-discovery --patch \'{"rules":[{"nonResourceURLs":["/.well-known/openid-configuration/","/.well-known/openid-configuration","/openid/v1/jwks/","/openid/v1/jwks"],"verbs":["get"]}]}\'\n'})})]}),"\n",(0,o.jsx)(n.h2,{id:"configuring-pulsar-components-and-applications-to-use-projected-service-account-tokens-to-authenticate-with-other-pulsar-components",children:"Configuring Pulsar Components and Applications to use Projected Service Account Tokens to Authenticate with other Pulsar Components"}),"\n",(0,o.jsxs)(n.p,{children:["To leverage ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#serviceaccount-token-volume-projection",children:"Service Account Token Volume Projections"})," in your pulsar components, follow the Kubernetes documentation on mounting service account tokens and then configure the pulsar components to use the token with the following config:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-properties",children:"brokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationToken\nbrokerClientAuthenticationParameters=file:///path/to/mounted/token\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We use the ",(0,o.jsx)(n.code,{children:"AuthenticationToken"})," client plugin because Kubernetes automatically retrieves and refreshes the token for us. The ",(0,o.jsx)(n.code,{children:"AuthenticationToken"})," works because it always reads the token from the filesystem, which ensures that it will always read the latest token."]}),"\n",(0,o.jsx)(n.h2,{id:"enabling-authenticationprovideropenid-connect-and-authenticationprovidertoken-simultaneously",children:"Enabling AuthenticationProviderOpenID Connect and AuthenticationProviderToken Simultaneously"}),"\n",(0,o.jsxs)(n.p,{children:["In order to simplify migration from Static JWTs to OIDC Authentication, it is possible to configure both the ",(0,o.jsx)(n.code,{children:"AuthenticationProviderOpenID"})," and ",(0,o.jsx)(n.code,{children:"AuthenticationProviderToken"})," simultaneously. This allows for a seamless transition from static JWTs to OIDC tokens. The ",(0,o.jsx)(n.code,{children:"AuthenticationProviderToken"})," will be used to authenticate clients that do not provide an OIDC token, and the ",(0,o.jsx)(n.code,{children:"AuthenticationProviderOpenID"})," will be used to authenticate clients that do provide an OIDC token."]}),"\n",(0,o.jsx)(n.h2,{id:"configure-oidc-authentication-in-pulsar-clients-and-cli-tools",children:"Configure OIDC authentication in Pulsar Clients and CLI Tools"}),"\n",(0,o.jsxs)(n.p,{children:["The Pulsar OAuth2 client plugin can be used for clients that rely on the Client Credentials Flow for OIDC. See the ",(0,o.jsx)(n.a,{href:"/docs/3.0.x/security-oauth2#configure-oauth2-authentication-in-pulsar-clients",children:"OAuth2 Client"})," documentation for configuring clients to integrate with Pulsar Servers running with the OIDC Authentication Provider."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);