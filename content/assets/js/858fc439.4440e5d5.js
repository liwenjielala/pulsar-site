"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[96353],{5188:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"functions-debug-unit-test","title":"Debug with unit test","description":"Like any function with inputs and outputs, you can test Pulsar Functions in a similar way as you test any other function.","source":"@site/versioned_docs/version-3.0.x/functions-debug-unit-test.md","sourceDirName":".","slug":"/functions-debug-unit-test","permalink":"/docs/3.0.x/functions-debug-unit-test","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/functions-debug-unit-test.md","tags":[],"version":"3.0.x","frontMatter":{"id":"functions-debug-unit-test","title":"Debug with unit test","sidebar_label":"Debug with unit test"},"sidebar":"docsSidebar","previous":{"title":"Debug with captured stderr","permalink":"/docs/3.0.x/functions-debug-stderr"},"next":{"title":"Debug with localrun mode","permalink":"/docs/3.0.x/functions-debug-localrun"}}');var o=e(74848),s=e(28453);const a={id:"functions-debug-unit-test",title:"Debug with unit test",sidebar_label:"Debug with unit test"},u=void 0,c={},r=[];function l(t){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Like any function with inputs and outputs, you can test Pulsar Functions in a similar way as you test any other function."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Pulsar uses TestNG for testing."})}),"\n",(0,o.jsx)(n.p,{children:"For example, if you have the following function written through the language-native interface for Java:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'import java.util.function.Function;\n\npublic class JavaNativeExclamationFunction implements Function<String, String> {\n   @Override\n   public String apply(String input) {\n       return String.format("%s!", input);\n   }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"You can write a simple unit test to test the function."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'@Test\npublic void testJavaNativeExclamationFunction() {\n   JavaNativeExclamationFunction exclamation = new JavaNativeExclamationFunction();\n   String output = exclamation.apply("foo");\n   Assert.assertEquals(output, "foo!");\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"The following example is written through the Java SDK."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'import org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\n\npublic class ExclamationFunction implements Function<String, String> {\n   @Override\n   public String process(String input, Context context) {\n       return String.format("%s!", input);\n   }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You can write a unit test to test this function and mock the ",(0,o.jsx)(n.code,{children:"Context"})," parameter as follows."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'@Test\npublic void testExclamationFunction() {\n   ExclamationFunction exclamation = new ExclamationFunction();\n   String output = exclamation.process("foo", mock(Context.class));\n   Assert.assertEquals(output, "foo!");\n}\n'})})]})}function d(t={}){const{wrapper:n}={...(0,s.R)(),...t.components};return n?(0,o.jsx)(n,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},28453:(t,n,e)=>{e.d(n,{R:()=>a,x:()=>u});var i=e(96540);const o={},s=i.createContext(o);function a(t){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function u(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),i.createElement(s.Provider,{value:n},t.children)}}}]);