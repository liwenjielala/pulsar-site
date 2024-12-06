"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[81771],{96214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"functions-develop-security","title":"Enable security on functions","description":"Prerequisites","source":"@site/versioned_docs/version-2.11.x/functions-develop-security.md","sourceDirName":".","slug":"/functions-develop-security","permalink":"/docs/2.11.x/functions-develop-security","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/functions-develop-security.md","tags":[],"version":"2.11.x","frontMatter":{"id":"functions-develop-security","title":"Enable security on functions","sidebar_label":"Enable security on functions"},"sidebar":"docsSidebar","previous":{"title":"Use metrics to monitor functions","permalink":"/docs/2.11.x/functions-develop-metrics"},"next":{"title":"Configure state storage","permalink":"/docs/2.11.x/functions-develop-state"}}');var s=n(74848),o=n(28453),i=n(89089),a=n(19365);const c={id:"functions-develop-security",title:"Enable security on functions",sidebar_label:"Enable security on functions"},u=void 0,l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure function workers",id:"configure-function-workers",level:2},{value:"Get the secret",id:"get-the-secret",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["If you want to enable security on functions, you need to ",(0,s.jsx)(t.a,{href:"/docs/2.11.x/functions-worker",children:"enable security settings"})," on function workers first."]}),"\n",(0,s.jsx)(t.h2,{id:"configure-function-workers",children:"Configure function workers"}),"\n",(0,s.jsx)(t.p,{children:"To use the secret APIs from the context, you need to set the following two parameters for function workers."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"secretsProviderConfiguratorClassName"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"secretsProviderConfiguratorConfig"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Pulsar Functions provided two types of ",(0,s.jsx)(t.code,{children:"SecretsProviderConfigurator"})," implementation and both can be used as the value of ",(0,s.jsx)(t.code,{children:"secretsProviderConfiguratorClassName"})," directly:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"org.apache.pulsar.functions.secretsproviderconfigurator.DefaultSecretsProviderConfigurator"}),": This is a barebones version of a secrets provider which wires in ",(0,s.jsx)(t.code,{children:"ClearTextSecretsProvider"})," to the function instances."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"org.apache.pulsar.functions.secretsproviderconfigurator.KubernetesSecretsProviderConfigurator"}),": This is used by default for running in Kubernetes and it uses Kubernetes built-in secrets and binds them as environment variables (via ",(0,s.jsx)(t.code,{children:"EnvironmentBasedSecretsProvider"}),") within the function container to ensure that the secrets are available to the function at runtime."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Function workers use the ",(0,s.jsx)(t.code,{children:"org.apache.pulsar.functions.secretsproviderconfigurator.SecretsProviderConfigurator"})," interface to choose the ",(0,s.jsx)(t.code,{children:"SecretsProvider"})," class name and its associated configurations at the time of starting the function instances."]}),"\n",(0,s.jsxs)(t.p,{children:["Function instances use the ",(0,s.jsx)(t.code,{children:"org.apache.pulsar.functions.secretsprovider.SecretsProvider"})," interface to fetch the secrets. The implementation that ",(0,s.jsx)(t.code,{children:"SecretsProvider"})," uses is determined by ",(0,s.jsx)(t.code,{children:"SecretsProviderConfigurator"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["You can also implement your own ",(0,s.jsx)(t.code,{children:"SecretsProviderConfigurator"})," if you want to use different ",(0,s.jsx)(t.code,{children:"SecretsProvider"})," for function instances."]}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.p,{children:["Currently, only Java and Python runtime support ",(0,s.jsx)(t.code,{children:"SecretsProvider"}),". The Java and Python Runtime have the following two providers:"]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["ClearTextSecretsProvider (default for ",(0,s.jsx)(t.code,{children:"DefaultSecretsProviderConfigurator"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["EnvironmentBasedSecretsProvider (default for ",(0,s.jsx)(t.code,{children:"KubernetesSecretsProviderConfigurator"}),")"]}),"\n"]})]}),"\n",(0,s.jsx)(t.h2,{id:"get-the-secret",children:"Get the secret"}),"\n",(0,s.jsxs)(t.p,{children:["Once ",(0,s.jsx)(t.code,{children:"SecretsProviderConfigurator"})," is set, you can get the secret using the ",(0,s.jsx)(t.a,{href:"/docs/2.11.x/functions-concepts#context",children:(0,s.jsx)(t.code,{children:"Context"})})," object as follows."]}),"\n",(0,s.jsxs)(i.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"}],children:[(0,s.jsx)(a.A,{value:"Java",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'import org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport org.slf4j.Logger;\n\npublic class GetSecretValueFunction implements Function<String, Void> {\n\n    @Override\n    public Void process(String input, Context context) throws Exception {\n        Logger LOG = context.getLogger();\n        String secretValue = context.getSecret(input);\n\n        if (!secretValue.isEmpty()) {\n            LOG.info("The secret {} has value {}", input, secretValue);\n        } else {\n            LOG.warn("No secret with key {}", input);\n        }\n\n        return null;\n    }\n}\n'})})}),(0,s.jsx)(a.A,{value:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from pulsar import Function\n\nclass GetSecretValueFunction(Function):\n    def process(self, input, context):\n        logger = context.get_logger()\n        secret_value = context.get_secret(input)\n        if secret_provider is None:\n            logger.warn('No secret with key {0} '.format(input))\n        else:\n            logger.info(\"The secret {0} has value {1}\".format(input, secret_value))\n"})})})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var o=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}},89089:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),s=n(34164),o=n(23104),i=n(56347),a=n(205),c=n(57485),u=n(31682),l=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=h(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=p({queryString:n,groupId:s}),[v,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,l.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),g=(()=>{const e=u??v;return f({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{g&&c(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),l=e=>{const t=e.currentTarget,n=c.indexOf(t),s=a[n].value;s!==r&&(u(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:d,onClick:l,...o,className:(0,s.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:o}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=v(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,b.jsx)(x,{...t,...e}),(0,b.jsx)(j,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);