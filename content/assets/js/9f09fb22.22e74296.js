"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9471],{91066:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"functions-package","title":"Package Pulsar Functions","description":"You can package Pulsar functions in Java, Python, and Go. Packaging the window function in Java is the same as packaging a function in Java.","source":"@site/versioned_docs/version-2.10.x/functions-package.md","sourceDirName":".","slug":"/functions-package","permalink":"/docs/2.10.x/functions-package","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/functions-package.md","tags":[],"version":"2.10.x","frontMatter":{"id":"functions-package","title":"Package Pulsar Functions","sidebar_label":"How-to: Package","original_id":"functions-package"},"sidebar":"docsSidebar","previous":{"title":"How-to: Develop","permalink":"/docs/2.10.x/functions-develop"},"next":{"title":"How-to: Debug","permalink":"/docs/2.10.x/functions-debug"}}');var s=t(74848),c=t(28453);const o={id:"functions-package",title:"Package Pulsar Functions",sidebar_label:"How-to: Package",original_id:"functions-package"},a=void 0,r={},l=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Java",id:"java",level:2},{value:"Python",id:"python",level:2},{value:"One python file",id:"one-python-file",level:3},{value:"ZIP file",id:"zip-file",level:3},{value:"PIP",id:"pip",level:3},{value:"Go",id:"go",level:2},{value:"Start Functions in cluster mode",id:"start-functions-in-cluster-mode",level:2}];function u(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["You can package Pulsar functions in Java, Python, and Go. Packaging the window function in Java is the same as ",(0,s.jsx)(e.a,{href:"#java",children:"packaging a function in Java"}),"."]}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsx)(e.p,{children:"Currently, the window function is not available in Python and Go."})}),"\n",(0,s.jsx)(e.h2,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,s.jsxs)(e.p,{children:["Before running a Pulsar function, you need to start Pulsar. You can ",(0,s.jsx)(e.a,{href:"/docs/2.10.x/getting-started-docker",children:"run a standalone Pulsar in Docker"}),", or ",(0,s.jsx)(e.a,{href:"/docs/2.10.x/getting-started-helm",children:"run Pulsar in Kubernetes"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["To check whether the Docker image starts, you can use the ",(0,s.jsx)(e.code,{children:"docker ps"})," command."]}),"\n",(0,s.jsx)(e.h2,{id:"java",children:"Java"}),"\n",(0,s.jsx)(e.p,{children:"To package a function in Java, complete the following steps."}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Create a new maven project with a pom file. In the following code sample, the value of ",(0,s.jsx)(e.code,{children:"mainClass"})," is your package name."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Java",children:'\n<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>java-function</groupId>\n    <artifactId>java-function</artifactId>\n    <version>1.0-SNAPSHOT</version>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.apache.pulsar</groupId>\n            <artifactId>pulsar-functions-api</artifactId>\n            <version>2.6.0</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <artifactId>maven-assembly-plugin</artifactId>\n                <configuration>\n                    <appendAssemblyId>false</appendAssemblyId>\n                    <descriptorRefs>\n                        <descriptorRef>jar-with-dependencies</descriptorRef>\n                    </descriptorRefs>\n                    <archive>\n                    <manifest>\n                        <mainClass>org.example.test.ExclamationFunction</mainClass>\n                    </manifest>\n                </archive>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>make-assembly</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>assembly</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <configuration>\n                    <source>8</source>\n                    <target>8</target>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n\n</project>\n\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Write a Java function."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'\npackage org.example.test;\n\nimport java.util.function.Function;\n\npublic class ExclamationFunction implements Function<String, String> {\n    @Override\n    public String apply(String s) {\n        return "This is my function!";\n    }\n}\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"For the imported package, you can use one of the following interfaces:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Function interface provided by Java 8: ",(0,s.jsx)(e.code,{children:"java.util.function.Function"})]}),"\n",(0,s.jsxs)(e.li,{children:["Pulsar Function interface: ",(0,s.jsx)(e.code,{children:"org.apache.pulsar.functions.api.Function"})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["The main difference between the two interfaces is that the ",(0,s.jsx)(e.code,{children:"org.apache.pulsar.functions.api.Function"})," interface provides the context interface. When you write a function and want to interact with it, you can use context to obtain a wide variety of information and functionality for Pulsar Functions."]}),"\n",(0,s.jsxs)(e.p,{children:["The following example uses ",(0,s.jsx)(e.code,{children:"org.apache.pulsar.functions.api.Function"})," interface with context."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'\npackage org.example.functions;\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\n\nimport java.util.Arrays;\npublic class WordCountFunction implements Function<String, Void> {\n   // This function is invoked every time a message is published to the input topic\n    @Override\n    public Void process(String input, Context context) throws Exception {\n       Arrays.asList(input.split(" ")).forEach(word -> {\n           String counterKey = word.toLowerCase();\n           context.incrCounter(counterKey, 1);\n        });\n       return null;\n   }\n }\n\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Package the Java function."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"\nmvn package\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["After the Java function is packaged, a ",(0,s.jsx)(e.code,{children:"target"})," directory is created automatically. Open the ",(0,s.jsx)(e.code,{children:"target"})," directory to check if there is a JAR package similar to ",(0,s.jsx)(e.code,{children:"java-function-1.0-SNAPSHOT.jar"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Run the Java function."}),"\n",(0,s.jsx)(e.p,{children:"(1) Copy the packaged jar file to the Pulsar image."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"\ndocker exec -it [CONTAINER ID] /bin/bash\ndocker cp <path of java-function-1.0-SNAPSHOT.jar>  CONTAINER ID:/pulsar\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"(2) Run the Java function using the following command."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"\n./bin/pulsar-admin functions localrun \\\n--classname org.example.test.ExclamationFunction \\\n--jar java-function-1.0-SNAPSHOT.jar \\\n--inputs persistent://public/default/my-topic-1 \\\n--output persistent://public/default/test-1 \\\n--tenant public \\\n--namespace default \\\n--name JavaFunction\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"The following log indicates that the Java function starts successfully."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"\n...\n07:55:03.724 [main] INFO  org.apache.pulsar.functions.runtime.ProcessRuntime - Started process successfully\n...\n\n"})}),"\n",(0,s.jsx)(e.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(e.p,{children:"Python Function supports the following three formats:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"One python file"}),"\n",(0,s.jsx)(e.li,{children:"ZIP file"}),"\n",(0,s.jsx)(e.li,{children:"PIP"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"one-python-file",children:"One python file"}),"\n",(0,s.jsxs)(e.p,{children:["To package a function with ",(0,s.jsx)(e.strong,{children:"one python file"})," in Python, complete the following steps."]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Write a Python function."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"\nfrom pulsar import Function //  import the Function module from Pulsar\n\n# The classic ExclamationFunction that appends an exclamation at the end\n# of the input\nclass ExclamationFunction(Function):\n  def __init__(self):\n    pass\n\n  def process(self, input, context):\n    return input + '!'\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["In this example, when you write a Python function, you need to inherit the Function class and implement the ",(0,s.jsx)(e.code,{children:"process()"})," method."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"process()"})," mainly has two parameters:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"input"})," represents your input."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"context"})," represents an interface exposed by the Pulsar Function. You can get the attributes in the Python function based on the provided context object."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Install a Python client."}),"\n",(0,s.jsx)(e.p,{children:"The implementation of a Python function depends on the Python client, so before deploying a Python function, you need to install the corresponding version of the Python client."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"\npip install pulsar-client==2.6.0\n\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Run the Python Function."}),"\n",(0,s.jsx)(e.p,{children:"(1) Copy the Python function file to the Pulsar image."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"\ndocker exec -it [CONTAINER ID] /bin/bash\ndocker cp <path of Python function file>  CONTAINER ID:/pulsar\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"(2) Run the Python function using the following command."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"\n./bin/pulsar-admin functions localrun \\\n--classname <Python Function file name>.<Python Function class name> \\\n--py <path of Python Function file> \\\n--inputs persistent://public/default/my-topic-1 \\\n--output persistent://public/default/test-1 \\\n--tenant public \\\n--namespace default \\\n--name PythonFunction\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"The following log indicates that the Python function starts successfully."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"\n...\n07:55:03.724 [main] INFO  org.apache.pulsar.functions.runtime.ProcessRuntime - Started process successfully\n...\n\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"zip-file",children:"ZIP file"}),"\n",(0,s.jsxs)(e.p,{children:["To package a function with the ",(0,s.jsx)(e.strong,{children:"ZIP file"})," in Python, complete the following steps."]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Prepare the ZIP file."}),"\n",(0,s.jsx)(e.p,{children:"The following is required when packaging the ZIP file of the Python Function."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:'\nAssuming the zip file is named as `func.zip`, unzip the `func.zip` folder:\n    "func/src"\n    "func/requirements.txt"\n    "func/deps"\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["Take ",(0,s.jsx)(e.a,{href:"https://github.com/apache/pulsar/tree/master/tests/docker-images/latest-version-image/python-examples",children:"exclamation.zip"})," as an example. The internal structure of the example is as follows."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"\n.\n\u251c\u2500\u2500 deps\n\u2502\xa0\xa0 \u2514\u2500\u2500 sh-1.12.14-py2.py3-none-any.whl\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 exclamation.py\n\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Run the Python Function."}),"\n",(0,s.jsx)(e.p,{children:"(1) Copy the ZIP file to the Pulsar image."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"\ndocker exec -it [CONTAINER ID] /bin/bash\ndocker cp <path of ZIP file>  CONTAINER ID:/pulsar\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"(2) Run the Python function using the following command."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"\n./bin/pulsar-admin functions localrun \\\n--classname exclamation \\\n--py <path of ZIP file> \\\n--inputs persistent://public/default/in-topic \\\n--output persistent://public/default/out-topic \\\n--tenant public \\\n--namespace default \\\n--name PythonFunction\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"The following log indicates that the Python function starts successfully."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"\n...\n07:55:03.724 [main] INFO  org.apache.pulsar.functions.runtime.ProcessRuntime - Started process successfully\n...\n\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"pip",children:"PIP"}),"\n",(0,s.jsxs)(e.p,{children:["The PIP method is only supported in Kubernetes runtime. To package a function with ",(0,s.jsx)(e.strong,{children:"PIP"})," in Python, complete the following steps."]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Configure the ",(0,s.jsx)(e.code,{children:"functions_worker.yml"})," file."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"\n#### Kubernetes Runtime ####\ninstallUserCodeDependencies: true\n\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Write your Python Function."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"\nfrom pulsar import Function\nimport js2xml\n\n# The classic ExclamationFunction that appends an exclamation at the end\n# of the input\nclass ExclamationFunction(Function):\n def __init__(self):\n   pass\n\n def process(self, input, context):\n  // add your logic\n  return input + '!'\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["You can introduce additional dependencies. When Python Function detects that the file currently used is ",(0,s.jsx)(e.code,{children:"whl"})," and the ",(0,s.jsx)(e.code,{children:"installUserCodeDependencies"})," parameter is specified, the system uses the ",(0,s.jsx)(e.code,{children:"pip install"})," command to install the dependencies required in Python Function."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Generate the ",(0,s.jsx)(e.code,{children:"whl"})," file."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",metastring:"script",children:"\n$ cd $PULSAR_HOME/pulsar-functions/scripts/python\n$ chmod +x generate.sh\n$ ./generate.sh <path of your Python Function> <path of the whl output dir> <the version of whl>\n# e.g: ./generate.sh /path/to/python /path/to/python/output 1.0.0\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["The output is written in ",(0,s.jsx)(e.code,{children:"/path/to/python/output"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"\n-rw-r--r--  1 root  staff   1.8K  8 27 14:29 pulsarfunction-1.0.0-py2-none-any.whl\n-rw-r--r--  1 root  staff   1.4K  8 27 14:29 pulsarfunction-1.0.0.tar.gz\n-rw-r--r--  1 root  staff     0B  8 27 14:29 pulsarfunction.whl\n\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"go",children:"Go"}),"\n",(0,s.jsx)(e.p,{children:"To package a function in Go, complete the following steps."}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Write a Go function."}),"\n",(0,s.jsxs)(e.p,{children:["Currently, Go function can be ",(0,s.jsx)(e.strong,{children:"only"}),' implemented using SDK and the interface of the function is exposed in the form of SDK. Before using the Go function, you need to import "github.com/apache/pulsar/pulsar-function-go/pf".']}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'\nimport (\n    "context"\n    "fmt"\n\n    "github.com/apache/pulsar/pulsar-function-go/pf"\n)\n\nfunc HandleRequest(ctx context.Context, input []byte) error {\n    fmt.Println(string(input) + "!")\n    return nil\n}\n\nfunc main() {\n    pf.Start(HandleRequest)\n}\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"You can use context to connect to the Go function."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'\nif fc, ok := pf.FromContext(ctx); ok {\n    fmt.Printf("function ID is:%s, ", fc.GetFuncID())\n    fmt.Printf("function version is:%s\\n", fc.GetFuncVersion())\n }\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"When writing a Go function, remember that"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["In ",(0,s.jsx)(e.code,{children:"main()"}),", you ",(0,s.jsx)(e.strong,{children:"only"})," need to register the function name to ",(0,s.jsx)(e.code,{children:"Start()"}),". ",(0,s.jsx)(e.strong,{children:"Only"})," one function name is received in ",(0,s.jsx)(e.code,{children:"Start()"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["Go function uses Go reflection, which is based on the received function name, to verify whether the parameter list and returned value list are correct. The parameter list and returned value list ",(0,s.jsx)(e.strong,{children:"must be"})," one of the following sample functions:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"\n func ()\n func () error\n func (input) error\n func () (output, error)\n func (input) (output, error)\n func (context.Context) error\n func (context.Context, input) error\n func (context.Context) (output, error)\n func (context.Context, input) (output, error)\n\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Build the Go function."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"\ngo build <your Go Function filename>.go\n\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Run the Go Function."}),"\n",(0,s.jsx)(e.p,{children:"(1) Copy the Go function file to the Pulsar image."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"\ndocker exec -it [CONTAINER ID] /bin/bash\ndocker cp <your go function path>  CONTAINER ID:/pulsar\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"(2) Run the Go function with the following command."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"\n./bin/pulsar-admin functions localrun \\\n    --go [your go function path]\n    --inputs [input topics] \\\n    --output [output topic] \\\n    --tenant [default:public] \\\n    --namespace [default:default] \\\n    --name [custom unique go function name]\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"The following log indicates that the Go function starts successfully."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"\n...\n07:55:03.724 [main] INFO  org.apache.pulsar.functions.runtime.ProcessRuntime - Started process successfully\n...\n\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"start-functions-in-cluster-mode",children:"Start Functions in cluster mode"}),"\n",(0,s.jsxs)(e.p,{children:["If you want to start a function in cluster mode, replace ",(0,s.jsx)(e.code,{children:"localrun"})," with ",(0,s.jsx)(e.code,{children:"create"})," in the commands above. The following log indicates that your function starts successfully."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:'\n  "Created successfully"\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["For information about parameters on ",(0,s.jsx)(e.code,{children:"--classname"}),", ",(0,s.jsx)(e.code,{children:"--jar"}),", ",(0,s.jsx)(e.code,{children:"--py"}),", ",(0,s.jsx)(e.code,{children:"--go"}),", ",(0,s.jsx)(e.code,{children:"--inputs"}),", run the command ",(0,s.jsx)(e.code,{children:"./bin/pulsar-admin functions"})," or see ",(0,s.jsx)(e.a,{href:"/docs/2.10.x/pulsar-admin#functions",children:"here"}),"."]})]})}function d(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>a});var i=t(96540);const s={},c=i.createContext(s);function o(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);