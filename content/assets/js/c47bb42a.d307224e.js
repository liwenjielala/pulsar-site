"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[25128],{3039:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"client-libraries-python","title":"The Pulsar Python client","description":"The Pulsar Python client library is a wrapper over the existing C++ client library and exposes all of the same features. You can find the code in the python GitHub Repository of the C++ client code.","source":"@site/versioned_docs/version-2.4.2/client-libraries-python.md","sourceDirName":".","slug":"/client-libraries-python","permalink":"/docs/2.4.2/client-libraries-python","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.2/client-libraries-python.md","tags":[],"version":"2.4.2","frontMatter":{"id":"client-libraries-python","title":"The Pulsar Python client","sidebar_label":"Python","original_id":"client-libraries-python"},"sidebar":"docsSidebar","previous":{"title":"Go","permalink":"/docs/2.4.2/client-libraries-go"},"next":{"title":"C++","permalink":"/docs/2.4.2/client-libraries-cpp"}}');var r=s(74848),l=s(28453);const t={id:"client-libraries-python",title:"The Pulsar Python client",sidebar_label:"Python",original_id:"client-libraries-python"},c=void 0,a={},d=[{value:"Installation",id:"installation",level:2},{value:"Installation using pip",id:"installation-using-pip",level:3},{value:"Installing from source",id:"installing-from-source",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Examples",id:"examples",level:2},{value:"Producer example",id:"producer-example",level:3},{value:"Consumer example",id:"consumer-example",level:3},{value:"Reader interface example",id:"reader-interface-example",level:3},{value:"Schema",id:"schema",level:2},{value:"Declaring and validating schema",id:"declaring-and-validating-schema",level:3},{value:"Supported schema types",id:"supported-schema-types",level:3},{value:"Schema definition reference",id:"schema-definition-reference",level:3},{value:"Fields parameters",id:"fields-parameters",level:4},{value:"Schema definition examples",id:"schema-definition-examples",level:4},{value:"Simple definition",id:"simple-definition",level:5},{value:"Using enums",id:"using-enums",level:5},{value:"Complex types",id:"complex-types",level:5}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The Pulsar Python client library is a wrapper over the existing ",(0,r.jsx)(n.a,{href:"/docs/2.4.2/client-libraries-cpp",children:"C++ client library"})," and exposes all of the ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/cpp/2.4.2",children:"same features"}),". You can find the code in the ",(0,r.jsxs)(n.a,{href:"https://github.com/apache/pulsar-client-python",children:[(0,r.jsx)(n.code,{children:"python"})," GitHub Repository"]})," of the C++ client code."]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.p,{children:["You can install the ",(0,r.jsx)(n.a,{href:"https://pypi.python.org/pypi/pulsar-client",children:(0,r.jsx)(n.code,{children:"pulsar-client"})})," library either via ",(0,r.jsx)(n.a,{href:"https://pypi.python.org/pypi",children:"PyPi"}),", using ",(0,r.jsx)(n.a,{href:"#installation-using-pip",children:"pip"}),", or by building the library from source."]}),"\n",(0,r.jsx)(n.h3,{id:"installation-using-pip",children:"Installation using pip"}),"\n",(0,r.jsxs)(n.p,{children:["To install the ",(0,r.jsx)(n.code,{children:"pulsar-client"})," library as a pre-built package using the ",(0,r.jsx)(n.a,{href:"https://pip.pypa.io/en/stable/",children:"pip"})," package manager:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pip install pulsar-client==2.4.2\n"})}),"\n",(0,r.jsx)(n.p,{children:"Installation via PyPi is available for the following Python versions:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Platform"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Supported Python versions"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["MacOS",(0,r.jsx)("br",{})," 10.11 (El Capitan) \u2014 10.12 (Sierra) \u2014 10.13 (High Sierra) \u2014 10.14 (Mojave)",(0,r.jsx)("br",{})]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"2.7, 3.7"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Linux"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"2.7, 3.4, 3.5, 3.6, 3.7"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"installing-from-source",children:"Installing from source"}),"\n",(0,r.jsxs)(n.p,{children:["To install the ",(0,r.jsx)(n.code,{children:"pulsar-client"})," library by building from source, follow ",(0,r.jsx)(n.a,{href:"/docs/2.4.2/client-libraries-cpp#compilation",children:"these instructions"})," and compile the Pulsar C++ client library. That will also build the Python binding for the library."]}),"\n",(0,r.jsx)(n.p,{children:"To install the built Python bindings:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\n$ git clone https://github.com/apache/pulsar\n$ cd pulsar/pulsar-client-cpp/python\n$ sudo python setup.py install\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,r.jsxs)(n.p,{children:["The complete Python API reference is available at ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/api/python/2.4.2",children:"api/python"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.p,{children:["Below you'll find a variety of Python code examples for the ",(0,r.jsx)(n.code,{children:"pulsar-client"})," library."]}),"\n",(0,r.jsx)(n.h3,{id:"producer-example",children:"Producer example"}),"\n",(0,r.jsxs)(n.p,{children:["This creates a Python producer for the ",(0,r.jsx)(n.code,{children:"my-topic"})," topic and send 10 messages on that topic:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\n\nproducer = client.create_producer('my-topic')\n\nfor i in range(10):\n    producer.send(('Hello-%d' % i).encode('utf-8'))\n\nclient.close()\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"consumer-example",children:"Consumer example"}),"\n",(0,r.jsxs)(n.p,{children:["This creates a consumer with the ",(0,r.jsx)(n.code,{children:"my-subscription"})," subscription on the ",(0,r.jsx)(n.code,{children:"my-topic"})," topic, listen for incoming messages, print the content and ID of messages that arrive, and acknowledge each message to the Pulsar broker:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\n\nconsumer = client.subscribe('my-topic', 'my-subscription')\n\nwhile True:\n    msg = consumer.receive()\n    try:\n        print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\n\nclient.close()\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"This example shows how to configure negative acknowledgement."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"\nfrom pulsar import Client, schema\n\nclient = Client('pulsar://localhost:6650')\n\nconsumer = client.subscribe('negative_acks','test',schema=schema.StringSchema())\nproducer = client.create_producer('negative_acks',schema=schema.StringSchema())\n\nfor i in range(10):\n    print('send msg \"hello-%d\"' % i)\n    producer.send_async('hello-%d' % i, callback=None)\n\nproducer.flush()\n\nfor i in range(10):\n    msg = consumer.receive()\n    consumer.negative_acknowledge(msg)\n    print('receive and nack msg \"%s\"' % msg.data())\n\nfor i in range(10):\n    msg = consumer.receive()\n    consumer.acknowledge(msg)\n    print('receive and ack msg \"%s\"' % msg.data())\n\ntry:\n    # No more messages expected\n    msg = consumer.receive(100)\nexcept:\n    print(\"no more msg\")\n    pass\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"reader-interface-example",children:"Reader interface example"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the Pulsar Python API to use the Pulsar ",(0,r.jsx)(n.a,{href:"/docs/2.4.2/concepts-clients#reader-interface",children:"reader interface"}),". Here's an example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"\n# MessageId taken from a previously fetched message\nmsg_id = msg.message_id()\n\nreader = client.create_reader('my-topic', msg_id)\n\nwhile True:\n    msg = reader.read_next()\n    print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n    # No acknowledgment\n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,r.jsx)(n.h3,{id:"declaring-and-validating-schema",children:"Declaring and validating schema"}),"\n",(0,r.jsxs)(n.p,{children:["A schema can be declared by passing a class that inherits\nfrom ",(0,r.jsx)(n.code,{children:"pulsar.schema.Record"})," and defines the fields as\nclass variables. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"\nfrom pulsar.schema import *\n\nclass Example(Record):\n    a = String()\n    b = Integer()\n    c = Boolean()\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"With this simple schema definition we can then create producers,\nconsumers and readers instances that will be referring to that."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"\nproducer = client.create_producer(\n                    topic='my-topic',\n                    schema=AvroSchema(Example) )\n\nproducer.send(Example(a='Hello', b=1))\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:['When the producer is created, the Pulsar broker will validate that\nthe existing topic schema is indeed of "Avro" type and that the\nformat is compatible with the schema definition of the ',(0,r.jsx)(n.code,{children:"Example"}),"\nclass."]}),"\n",(0,r.jsx)(n.p,{children:"If there is a mismatch, the producer creation will raise an\nexception."}),"\n",(0,r.jsx)(n.p,{children:"Once a producer is created with a certain schema definition,\nit will only accept objects that are instances of the declared\nschema class."}),"\n",(0,r.jsx)(n.p,{children:"Similarly, for a consumer/reader, the consumer will return an\nobject, instance of the schema record class, rather than the raw\nbytes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"\nconsumer = client.subscribe(\n                  topic='my-topic',\n                  subscription_name='my-subscription',\n                  schema=AvroSchema(Example) )\n\nwhile True:\n    msg = consumer.receive()\n    ex = msg.value()\n    try:\n        print(\"Received message a={} b={} c={}\".format(ex.a, ex.b, ex.c))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"supported-schema-types",children:"Supported schema types"}),"\n",(0,r.jsxs)(n.p,{children:["There are different builtin schema types that can be used in Pulsar.\nAll the definitions are in the ",(0,r.jsx)(n.code,{children:"pulsar.schema"})," package."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Schema"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"BytesSchema"})}),(0,r.jsxs)(n.td,{children:["Get the raw payload as a ",(0,r.jsx)(n.code,{children:"bytes"})," object. No serialization/deserialization are performed. This is the default schema mode"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"StringSchema"})}),(0,r.jsxs)(n.td,{children:["Encode/decode payload as a UTF-8 string. Uses ",(0,r.jsx)(n.code,{children:"str"})," objects"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"JsonSchema"})}),(0,r.jsx)(n.td,{children:"Require record definition. Serializes the record into standard JSON payload"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"AvroSchema"})}),(0,r.jsx)(n.td,{children:"Require record definition. Serializes in AVRO format"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"schema-definition-reference",children:"Schema definition reference"}),"\n",(0,r.jsxs)(n.p,{children:["The schema definition is done through a class that inherits from\n",(0,r.jsx)(n.code,{children:"pulsar.schema.Record"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["This class can have a number of fields which can be of either\n",(0,r.jsx)(n.code,{children:"pulsar.schema.Field"})," type or even another nested ",(0,r.jsx)(n.code,{children:"Record"}),". All the\nfields are also specified in the ",(0,r.jsx)(n.code,{children:"pulsar.schema"})," package. The fields\nare matching the AVRO fields types."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Type"}),(0,r.jsx)(n.th,{children:"Python Type"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"bool"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Integer"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"int"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Long"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"int"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Float"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"float"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Double"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"float"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Bytes"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"bytes"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"str"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Array"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"list"})}),(0,r.jsx)(n.td,{children:"Need to specify record type for items"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Map"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"dict"})}),(0,r.jsxs)(n.td,{children:["Key is always ",(0,r.jsx)(n.code,{children:"String"}),". Need to specify value type"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Additionally, any Python ",(0,r.jsx)(n.code,{children:"Enum"})," type can be used as a valid field\ntype"]}),"\n",(0,r.jsx)(n.h4,{id:"fields-parameters",children:"Fields parameters"}),"\n",(0,r.jsx)(n.p,{children:"When adding a field these parameters can be used in the constructor:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Argument"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"default"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"None"})}),(0,r.jsxs)(n.td,{children:["Set a default value for the field. Eg: ",(0,r.jsx)(n.code,{children:"a = Integer(default=5)"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"required"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"False"})}),(0,r.jsx)(n.td,{children:'Mark the field as "required". This will set it in the schema accordingly.'})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"schema-definition-examples",children:"Schema definition examples"}),"\n",(0,r.jsx)(n.h5,{id:"simple-definition",children:"Simple definition"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"\nclass Example(Record):\n    a = String()\n    b = Integer()\n    c = Array(String())\n    i = Map(String())\n\n"})}),"\n",(0,r.jsx)(n.h5,{id:"using-enums",children:"Using enums"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"\nfrom enum import Enum\n\nclass Color(Enum):\n    red = 1\n    green = 2\n    blue = 3\n\nclass Example(Record):\n    name = String()\n    color = Color\n\n"})}),"\n",(0,r.jsx)(n.h5,{id:"complex-types",children:"Complex types"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"\nclass MySubRecord(Record):\n    x = Integer()\n    y = Long()\n    z = String()\n\nclass Example(Record):\n    a = String()\n    sub = MySubRecord()\n\n"})})]})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(96540);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);