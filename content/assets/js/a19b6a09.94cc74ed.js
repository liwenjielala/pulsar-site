"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4186],{86296:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"functions-package-python","title":"Package Python Functions","description":"Learn to package Python functions in Pulsar.","source":"@site/docs/functions-package-python.md","sourceDirName":".","slug":"/functions-package-python","permalink":"/docs/next/functions-package-python","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/docs/functions-package-python.md","tags":[],"version":"current","frontMatter":{"id":"functions-package-python","title":"Package Python Functions","sidebar_label":"Package Python Functions","description":"Learn to package Python functions in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"Package Java Functions","permalink":"/docs/next/functions-package-java"},"next":{"title":"Package Go Functions","permalink":"/docs/next/functions-package-go"}}');var i=t(74848),o=t(28453);const c={id:"functions-package-python",title:"Package Python Functions",sidebar_label:"Package Python Functions",description:"Learn to package Python functions in Pulsar."},l=void 0,a={},r=[{value:"One Python file",id:"one-python-file",level:2},{value:"ZIP file",id:"zip-file",level:2},{value:"PIP",id:"pip",level:2}];function h(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Python functions support the following three packaging formats:"}),"\n",(0,i.jsx)(e.h2,{id:"one-python-file",children:"One Python file"}),"\n",(0,i.jsxs)(e.p,{children:["To package a Python function into ",(0,i.jsx)(e.strong,{children:"one Python file"}),", complete the following steps."]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Write a Python function."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"from pulsar import Function #  import the Function module from Pulsar\n\n# The classic ExclamationFunction that appends an exclamation at the end\n# of the input\nclass ExclamationFunction(Function):\n    def __init__(self):\n        pass\n\n    def process(self, input, context):\n        return input + '!'\n"})}),"\n",(0,i.jsxs)(e.p,{children:["In this example, when you write a Python function, you need to inherit the Function class and implement the ",(0,i.jsx)(e.code,{children:"process()"})," method."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"process()"})," mainly has two parameters:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"input"})," represents your input."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"context"})," represents an interface exposed by the Pulsar Function. You can get the attributes in the Python function based on the provided context object."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Install a Python client. The implementation of a Python function depends on the Python client."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"pip install pulsar-client==2.10.0\n"})}),"\n",(0,i.jsx)(e.p,{children:"And install protobuf tools to generate the proto files:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"pip install 'protobuf==3.20.*'\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Copy the Python function file to the Pulsar image."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"docker exec -it [CONTAINER ID] /bin/bash\ndocker cp <path of Python function file>  CONTAINER ID:/pulsar\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Run the Python function using the following command."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"./bin/pulsar-admin functions localrun \\\n    --classname <Python Function file name>.<Python Function class name> \\\n    --py <absolute path of Python Function file> \\\n    --inputs persistent://public/default/my-topic-1 \\\n    --output persistent://public/default/test-1 \\\n    --tenant public \\\n    --namespace default \\\n    --name PythonFunction\n"})}),"\n",(0,i.jsx)(e.p,{children:"The following log indicates that the Python function starts successfully."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:" ...\n 07:55:03.724 [main] INFO  org.apache.pulsar.functions.runtime.ProcessRuntime - Started process successfully\n ...\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"zip-file",children:"ZIP file"}),"\n",(0,i.jsxs)(e.p,{children:["To package a Python function into a ",(0,i.jsx)(e.strong,{children:"ZIP file"}),", complete the following steps."]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Prepare the ZIP file."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:' Assuming the zip file is named as `func.zip`, unzip the `func.zip` folder:\n     "func/src"\n     "func/requirements.txt"\n     "func/deps"\n'})}),"\n",(0,i.jsxs)(e.p,{children:["Take the ",(0,i.jsx)(e.a,{href:"https://github.com/apache/pulsar/tree/master/tests/docker-images/latest-version-image/python-examples",children:"exclamation.zip"})," file as an example. The internal structure of the example is as follows."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:" .\n \u251c\u2500\u2500 deps\n \u2502   \u2514\u2500\u2500 sh-1.12.14-py2.py3-none-any.whl\n \u2514\u2500\u2500 src\n     \u2514\u2500\u2500 exclamation.py\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Copy the ZIP file to the Pulsar image."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:" docker exec -it [CONTAINER ID] /bin/bash\n docker cp <path of ZIP file>  CONTAINER ID:/pulsar\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Run the Python function using the following command."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"./bin/pulsar-admin functions localrun \\\n    --classname exclamation \\\n    --py <absolute path of ZIP file> \\\n    --inputs persistent://public/default/in-topic \\\n    --output persistent://public/default/out-topic \\\n    --tenant public \\\n    --namespace default \\\n    --name PythonFunction\n"})}),"\n",(0,i.jsx)(e.p,{children:"The following log indicates that the Python function starts successfully."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:" ...\n 07:55:03.724 [main] INFO  org.apache.pulsar.functions.runtime.ProcessRuntime - Started process successfully\n ...\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"pip",children:"PIP"}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)(e.p,{children:"The PIP method is only supported in Kubernetes runtime."})}),"\n",(0,i.jsxs)(e.p,{children:["To package a Python function with ",(0,i.jsx)(e.strong,{children:"PIP"}),", complete the following steps."]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Configure the ",(0,i.jsx)(e.code,{children:"functions_worker.yml"})," file."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:" #### Kubernetes Runtime ####\n installUserCodeDependencies: true\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Write your Python Function."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"from pulsar import Function\nimport js2xml\n\n# The classic ExclamationFunction that appends an exclamation at the end\n# of the input\nclass ExclamationFunction(Function):\n    def __init__(self):\n        pass\n\n    def process(self, input, context):\n        # add your logic\n        return input + '!'\n"})}),"\n",(0,i.jsxs)(e.p,{children:["You can introduce additional dependencies. When Python functions detect that the file currently used is ",(0,i.jsx)(e.code,{children:"whl"})," and the ",(0,i.jsx)(e.code,{children:"installUserCodeDependencies"})," parameter is specified, the system uses the ",(0,i.jsx)(e.code,{children:"pip install"})," command to install the dependencies required in Python functions."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Generate the ",(0,i.jsx)(e.code,{children:"whl"})," file."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"cd $PULSAR_HOME/pulsar-functions/scripts/python\nchmod +x generate.sh\n./generate.sh <path of your Python Function> <path of the whl output dir> <the version of whl>\n# e.g: ./generate.sh /path/to/python /path/to/python/output 1.0.0\n"})}),"\n",(0,i.jsxs)(e.p,{children:["The output is written in ",(0,i.jsx)(e.code,{children:"/path/to/python/output"}),":"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:" -rw-r--r--  1 root  staff   1.8K  8 27 14:29 pulsarfunction-1.0.0-py2-none-any.whl\n -rw-r--r--  1 root  staff   1.4K  8 27 14:29 pulsarfunction-1.0.0.tar.gz\n -rw-r--r--  1 root  staff     0B  8 27 14:29 pulsarfunction.whl\n"})}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var s=t(96540);const i={},o=s.createContext(i);function c(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);