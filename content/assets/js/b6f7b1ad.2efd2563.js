"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[69310],{96762:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"functions-deploy-cluster-encryption","title":"Enable end-to-end-encryption","description":"Enable end-to-end-encryption for a function in Pulsar.","source":"@site/versioned_docs/version-4.0.x/functions-deploy-cluster-encryption.md","sourceDirName":".","slug":"/functions-deploy-cluster-encryption","permalink":"/docs/4.0.x/functions-deploy-cluster-encryption","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-4.0.x/functions-deploy-cluster-encryption.md","tags":[],"version":"4.0.x","frontMatter":{"id":"functions-deploy-cluster-encryption","title":"Enable end-to-end-encryption","sidebar_label":"Enable end-to-end-encryption","description":"Enable end-to-end-encryption for a function in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"Enable parallel processing","permalink":"/docs/4.0.x/functions-deploy-cluster-parallelism"},"next":{"title":"Enable package management service","permalink":"/docs/4.0.x/functions-deploy-cluster-package"}}');var i=t(74848),o=t(28453);const c={id:"functions-deploy-cluster-encryption",title:"Enable end-to-end-encryption",sidebar_label:"Enable end-to-end-encryption",description:"Enable end-to-end-encryption for a function in Pulsar."},s=void 0,a={},d=[];function l(e){const n={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["To enable end-to-end ",(0,i.jsx)(n.a,{href:"/docs/4.0.x/security-encryption",children:"encryption"}),", you can specify ",(0,i.jsx)(n.code,{children:"--producer-config"})," and ",(0,i.jsx)(n.code,{children:"--input-specs"})," in the ",(0,i.jsx)(n.a,{href:"pathname:///reference/#/4.0.x/pulsar-admin/",children:(0,i.jsx)(n.code,{children:"pulsar-admin"})})," CLI with the public and private key pair configured by the application. Only the consumers with a valid key can decrypt the encrypted messages."]}),"\n",(0,i.jsxs)(n.p,{children:["The encryption/decryption relevant configuration ",(0,i.jsx)(n.a,{href:"/docs/4.0.x/functions-cli",children:(0,i.jsx)(n.code,{children:"CryptoConfig"})})," is included in both ",(0,i.jsx)(n.code,{children:"ProducerConfig"})," and ",(0,i.jsx)(n.code,{children:"inputSpecs"}),". The specific configurable fields about ",(0,i.jsx)(n.code,{children:"CryptoConfig"})," are as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public class CryptoConfig {\n    private String cryptoKeyReaderClassName;\n    private Map<String, Object> cryptoKeyReaderConfig;\n\n    private String[] encryptionKeys;\n    private ProducerCryptoFailureAction producerCryptoFailureAction;\n\n    private ConsumerCryptoFailureAction consumerCryptoFailureAction;\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"producerCryptoFailureAction"})," defines the action that a producer takes if it fails to encrypt the data. Available options are ",(0,i.jsx)(n.code,{children:"FAIL"})," or ",(0,i.jsx)(n.code,{children:"SEND"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"consumerCryptoFailureAction"})," defines the action that a consumer takes if it fails to decrypt the recieved data. Available options are ",(0,i.jsx)(n.code,{children:"FAIL"}),", ",(0,i.jsx)(n.code,{children:"DISCARD"}),", or ",(0,i.jsx)(n.code,{children:"CONSUME"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more information about these options, refer to ",(0,i.jsx)(n.a,{href:"pathname:///reference/#/4.0.x/client/client-configuration-producer",children:"producer configurations"})," and ",(0,i.jsx)(n.a,{href:"pathname:///reference/#/4.0.x/client/client-configuration-consumer",children:"consumer configurations"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var r=t(96540);const i={},o=r.createContext(i);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);