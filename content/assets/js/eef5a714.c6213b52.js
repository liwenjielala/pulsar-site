"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[89349],{50551:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"client-libraries-python","title":"Pulsar Python client","description":"Pulsar Python client library is a wrapper over the existing C++ client library and exposes all of the same features. You can find the code in the python GitHub Repository of the C++ client code.","source":"@site/versioned_docs/version-2.7.4/client-libraries-python.md","sourceDirName":".","slug":"/client-libraries-python","permalink":"/docs/2.7.4/client-libraries-python","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.4/client-libraries-python.md","tags":[],"version":"2.7.4","frontMatter":{"id":"client-libraries-python","title":"Pulsar Python client","sidebar_label":"Python","original_id":"client-libraries-python"},"sidebar":"docsSidebar","previous":{"title":"Go","permalink":"/docs/2.7.4/client-libraries-go"},"next":{"title":"C++","permalink":"/docs/2.7.4/client-libraries-cpp"}}');var i=s(74848),c=s(28453);const t={id:"client-libraries-python",title:"Pulsar Python client",sidebar_label:"Python",original_id:"client-libraries-python"},l=void 0,a={},d=[{value:"Install",id:"install",level:2},{value:"Install using pip",id:"install-using-pip",level:3},{value:"Install from source",id:"install-from-source",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Examples",id:"examples",level:2},{value:"Producer example",id:"producer-example",level:3},{value:"Consumer example",id:"consumer-example",level:3},{value:"Reader interface example",id:"reader-interface-example",level:3},{value:"Multi-topic subscriptions",id:"multi-topic-subscriptions",level:3},{value:"Schema",id:"schema",level:2},{value:"Declare and validate schema",id:"declare-and-validate-schema",level:3},{value:"Supported schema types",id:"supported-schema-types",level:3},{value:"Schema definition reference",id:"schema-definition-reference",level:3},{value:"Fields parameters",id:"fields-parameters",level:4},{value:"Schema definition examples",id:"schema-definition-examples",level:4},{value:"Simple definition",id:"simple-definition",level:5},{value:"Using enums",id:"using-enums",level:5},{value:"Complex types",id:"complex-types",level:5},{value:"End-to-end encryption",id:"end-to-end-encryption",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Tutorial",id:"tutorial",level:3},{value:"Prerequisite",id:"prerequisite",level:4},{value:"Step",id:"step",level:4}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Pulsar Python client library is a wrapper over the existing ",(0,i.jsx)(n.a,{href:"/docs/2.7.4/client-libraries-cpp",children:"C++ client library"})," and exposes all of the ",(0,i.jsx)(n.a,{href:"https://pulsar.apache.org/api/cpp/2.7.4",children:"same features"}),". You can find the code in the ",(0,i.jsxs)(n.a,{href:"https://github.com/apache/pulsar-client-python",children:[(0,i.jsx)(n.code,{children:"python"})," GitHub Repository"]})," of the C++ client code."]}),"\n",(0,i.jsx)(n.p,{children:"All the methods in producer, consumer, and reader of a Python client are thread-safe."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/BurntSushi/pdoc",children:"pdoc"}),"-generated API docs for the Python client are available ",(0,i.jsx)(n.a,{href:"https://pulsar.apache.org/api/python/2.7.4",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,i.jsxs)(n.p,{children:["You can install the ",(0,i.jsx)(n.a,{href:"https://pypi.python.org/pypi/pulsar-client",children:(0,i.jsx)(n.code,{children:"pulsar-client"})})," library either via ",(0,i.jsx)(n.a,{href:"https://pypi.python.org/pypi",children:"PyPi"}),", using ",(0,i.jsx)(n.a,{href:"#installation-using-pip",children:"pip"}),", or by building the library from source."]}),"\n",(0,i.jsx)(n.h3,{id:"install-using-pip",children:"Install using pip"}),"\n",(0,i.jsxs)(n.p,{children:["To install the ",(0,i.jsx)(n.code,{children:"pulsar-client"})," library as a pre-built package using the ",(0,i.jsx)(n.a,{href:"https://pip.pypa.io/en/stable/",children:"pip"})," package manager:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"pip install pulsar-client==2.7.4\n"})}),"\n",(0,i.jsx)(n.p,{children:"Installation via PyPi is available for the following Python versions:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Platform"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Supported Python versions"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["MacOS ",(0,i.jsx)("br",{}),"  10.13 (High Sierra), 10.14 (Mojave) ",(0,i.jsx)("br",{})]}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"2.7, 3.7"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Linux"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"2.7, 3.4, 3.5, 3.6, 3.7"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"install-from-source",children:"Install from source"}),"\n",(0,i.jsxs)(n.p,{children:["To install the ",(0,i.jsx)(n.code,{children:"pulsar-client"})," library by building from source, follow ",(0,i.jsx)(n.a,{href:"/docs/2.7.4/client-libraries-cpp#compilation",children:"instructions"})," and compile the Pulsar C++ client library. That builds the Python binding for the library."]}),"\n",(0,i.jsx)(n.p,{children:"To install the built Python bindings:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\n$ git clone https://github.com/apache/pulsar\n$ cd pulsar/pulsar-client-cpp/python\n$ sudo python setup.py install\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,i.jsxs)(n.p,{children:["The complete Python API reference is available at ",(0,i.jsx)(n.a,{href:"https://pulsar.apache.org/api/python/2.7.4",children:"api/python"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["You can find a variety of Python code examples for the ",(0,i.jsx)(n.code,{children:"pulsar-client"})," library."]}),"\n",(0,i.jsx)(n.h3,{id:"producer-example",children:"Producer example"}),"\n",(0,i.jsxs)(n.p,{children:["The following example creates a Python producer for the ",(0,i.jsx)(n.code,{children:"my-topic"})," topic and sends 10 messages on that topic:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\n\nproducer = client.create_producer('my-topic')\n\nfor i in range(10):\n    producer.send(('Hello-%d' % i).encode('utf-8'))\n\nclient.close()\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"consumer-example",children:"Consumer example"}),"\n",(0,i.jsxs)(n.p,{children:["The following example creates a consumer with the ",(0,i.jsx)(n.code,{children:"my-subscription"})," subscription name on the ",(0,i.jsx)(n.code,{children:"my-topic"})," topic, receives incoming messages, prints the content and ID of messages that arrive, and acknowledges each message to the Pulsar broker."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\n\nconsumer = client.subscribe('my-topic', 'my-subscription')\n\nwhile True:\n    msg = consumer.receive()\n    try:\n        print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\n\nclient.close()\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"This example shows how to configure negative acknowledgement."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"\nfrom pulsar import Client, schema\nclient = Client('pulsar://localhost:6650')\nconsumer = client.subscribe('negative_acks','test',schema=schema.StringSchema())\nproducer = client.create_producer('negative_acks',schema=schema.StringSchema())\nfor i in range(10):\n    print('send msg \"hello-%d\"' % i)\n    producer.send_async('hello-%d' % i, callback=None)\nproducer.flush()\nfor i in range(10):\n    msg = consumer.receive()\n    consumer.negative_acknowledge(msg)\n    print('receive and nack msg \"%s\"' % msg.data())\nfor i in range(10):\n    msg = consumer.receive()\n    consumer.acknowledge(msg)\n    print('receive and ack msg \"%s\"' % msg.data())\ntry:\n    # No more messages expected\n    msg = consumer.receive(100)\nexcept:\n    print(\"no more msg\")\n    pass\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"reader-interface-example",children:"Reader interface example"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the Pulsar Python API to use the Pulsar ",(0,i.jsx)(n.a,{href:"/docs/2.7.4/concepts-clients#reader-interface",children:"reader interface"}),". Here's an example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"\n# MessageId taken from a previously fetched message\nmsg_id = msg.message_id()\n\nreader = client.create_reader('my-topic', msg_id)\n\nwhile True:\n    msg = reader.read_next()\n    print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n    # No acknowledgment\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"multi-topic-subscriptions",children:"Multi-topic subscriptions"}),"\n",(0,i.jsxs)(n.p,{children:["In addition to subscribing a consumer to a single Pulsar topic, you can also subscribe to multiple topics simultaneously. To use multi-topic subscriptions, you can supply a regular expression (regex) or a ",(0,i.jsx)(n.code,{children:"List"})," of topics. If you select topics via regex, all topics must be within the same Pulsar namespace."]}),"\n",(0,i.jsx)(n.p,{children:"The following is an example."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"\nimport re\nconsumer = client.subscribe(re.compile('persistent://public/default/topic-*'), 'my-subscription')\nwhile True:\n    msg = consumer.receive()\n    try:\n        print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\nclient.close()\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,i.jsx)(n.h3,{id:"declare-and-validate-schema",children:"Declare and validate schema"}),"\n",(0,i.jsxs)(n.p,{children:["You can declare a schema by passing a class that inherits\nfrom ",(0,i.jsx)(n.code,{children:"pulsar.schema.Record"})," and defines the fields as\nclass variables. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"\nfrom pulsar.schema import *\n\nclass Example(Record):\n    a = String()\n    b = Integer()\n    c = Boolean()\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"With this simple schema definition, you can create producers, consumers and readers instances that refer to that."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"\nproducer = client.create_producer(\n                    topic='my-topic',\n                    schema=AvroSchema(Example) )\n\nproducer.send(Example(a='Hello', b=1))\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:['After creating the producer, the Pulsar broker validates that the existing topic schema is indeed of "Avro" type and that the format is compatible with the schema definition of the ',(0,i.jsx)(n.code,{children:"Example"})," class."]}),"\n",(0,i.jsx)(n.p,{children:"If there is a mismatch, an exception occurs in the producer creation."}),"\n",(0,i.jsx)(n.p,{children:"Once a producer is created with a certain schema definition,\nit will only accept objects that are instances of the declared\nschema class."}),"\n",(0,i.jsx)(n.p,{children:"Similarly, for a consumer/reader, the consumer will return an\nobject, instance of the schema record class, rather than the raw\nbytes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"\nconsumer = client.subscribe(\n                  topic='my-topic',\n                  subscription_name='my-subscription',\n                  schema=AvroSchema(Example) )\n\nwhile True:\n    msg = consumer.receive()\n    ex = msg.value()\n    try:\n        print(\"Received message a={} b={} c={}\".format(ex.a, ex.b, ex.c))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"supported-schema-types",children:"Supported schema types"}),"\n",(0,i.jsxs)(n.p,{children:["You can use different builtin schema types in Pulsar. All the definitions are in the ",(0,i.jsx)(n.code,{children:"pulsar.schema"})," package."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Schema"}),(0,i.jsx)(n.th,{children:"Notes"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"BytesSchema"})}),(0,i.jsxs)(n.td,{children:["Get the raw payload as a ",(0,i.jsx)(n.code,{children:"bytes"})," object. No serialization/deserialization are performed. This is the default schema mode"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"StringSchema"})}),(0,i.jsxs)(n.td,{children:["Encode/decode payload as a UTF-8 string. Uses ",(0,i.jsx)(n.code,{children:"str"})," objects"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"JsonSchema"})}),(0,i.jsx)(n.td,{children:"Require record definition. Serializes the record into standard JSON payload"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"AvroSchema"})}),(0,i.jsx)(n.td,{children:"Require record definition. Serializes in AVRO format"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"schema-definition-reference",children:"Schema definition reference"}),"\n",(0,i.jsxs)(n.p,{children:["The schema definition is done through a class that inherits from ",(0,i.jsx)(n.code,{children:"pulsar.schema.Record"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This class has a number of fields which can be of either\n",(0,i.jsx)(n.code,{children:"pulsar.schema.Field"})," type or another nested ",(0,i.jsx)(n.code,{children:"Record"}),". All the\nfields are specified in the ",(0,i.jsx)(n.code,{children:"pulsar.schema"})," package. The fields\nare matching the AVRO fields types."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field Type"}),(0,i.jsx)(n.th,{children:"Python Type"}),(0,i.jsx)(n.th,{children:"Notes"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Boolean"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"bool"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Integer"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"int"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Long"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"int"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Float"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"float"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Double"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"float"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Bytes"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"bytes"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"String"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"str"})}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Array"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"list"})}),(0,i.jsx)(n.td,{children:"Need to specify record type for items."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Map"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"dict"})}),(0,i.jsxs)(n.td,{children:["Key is always ",(0,i.jsx)(n.code,{children:"String"}),". Need to specify value type."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Additionally, any Python ",(0,i.jsx)(n.code,{children:"Enum"})," type can be used as a valid field type."]}),"\n",(0,i.jsx)(n.h4,{id:"fields-parameters",children:"Fields parameters"}),"\n",(0,i.jsx)(n.p,{children:"When adding a field, you can use these parameters in the constructor."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Argument"}),(0,i.jsx)(n.th,{children:"Default"}),(0,i.jsx)(n.th,{children:"Notes"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"default"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"None"})}),(0,i.jsxs)(n.td,{children:["Set a default value for the field. Eg: ",(0,i.jsx)(n.code,{children:"a = Integer(default=5)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"required"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"False"})}),(0,i.jsx)(n.td,{children:'Mark the field as "required". It is set in the schema accordingly.'})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"schema-definition-examples",children:"Schema definition examples"}),"\n",(0,i.jsx)(n.h5,{id:"simple-definition",children:"Simple definition"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"\nclass Example(Record):\n    a = String()\n    b = Integer()\n    c = Array(String())\n    i = Map(String())\n\n"})}),"\n",(0,i.jsx)(n.h5,{id:"using-enums",children:"Using enums"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"\nfrom enum import Enum\n\nclass Color(Enum):\n    red = 1\n    green = 2\n    blue = 3\n\nclass Example(Record):\n    name = String()\n    color = Color\n\n"})}),"\n",(0,i.jsx)(n.h5,{id:"complex-types",children:"Complex types"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"\nclass MySubRecord(Record):\n    x = Integer()\n    y = Long()\n    z = String()\n\nclass Example(Record):\n    a = String()\n    sub = MySubRecord()\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"end-to-end-encryption",children:"End-to-end encryption"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://pulsar.apache.org/docs/en/next/cookbooks-encryption/#docsNav",children:"End-to-end encryption"})," allows applications to encrypt messages at producers and decrypt at consumers."]}),"\n",(0,i.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to use the end-to-end encryption feature in the Python client, you need to configure ",(0,i.jsx)(n.code,{children:"publicKeyPath"})," and ",(0,i.jsx)(n.code,{children:"privateKeyPath"})," for both producer and consumer."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'\npublicKeyPath: "./public.pem"\nprivateKeyPath: "./private.pem"\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"tutorial",children:"Tutorial"}),"\n",(0,i.jsx)(n.p,{children:"This section provides step-by-step instructions on how to use the end-to-end encryption feature in the Python client."}),"\n",(0,i.jsx)(n.h4,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pulsar Python client 2.7.2 or later"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"step",children:"Step"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create both public and private key pairs."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Input"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\nopenssl genrsa -out private.pem 2048\nopenssl rsa -in private.pem -pubout -out public.pem\n\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a producer to send encrypted messages."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Input"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"\nimport pulsar\n\npublicKeyPath = \"./public.pem\"\nprivateKeyPath = \"./private.pem\"\ncrypto_key_reader = pulsar.CryptoKeyReader(publicKeyPath, privateKeyPath)\nclient = pulsar.Client('pulsar://localhost:6650')\nproducer = client.create_producer(topic='encryption', encryption_key='encryption', crypto_key_reader=crypto_key_reader)\nproducer.send('encryption message'.encode('utf8'))\nprint('sent message')\nproducer.close()\nclient.close()\n\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a consumer to receive encrypted messages."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Input"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"\nimport pulsar\n\npublicKeyPath = \"./public.pem\"\nprivateKeyPath = \"./private.pem\"\ncrypto_key_reader = pulsar.CryptoKeyReader(publicKeyPath, privateKeyPath)\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe(topic='encryption', subscription_name='encryption-sub', crypto_key_reader=crypto_key_reader)\nmsg = consumer.receive()\nprint(\"Received msg '{}' id = '{}'\".format(msg.data(), msg.message_id()))\nconsumer.close()\nclient.close()\n\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the consumer to receive encrypted messages."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Input"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\npython consumer.py\n\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In a new terminal tab, run the producer to produce encrypted messages."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Input"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\npython producer.py\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now you can see the producer sends messages and the consumer receives messages successfully."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Output"})}),"\n",(0,i.jsx)(n.p,{children:"This is from the producer side."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nsent message\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"This is from the consumer side."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nReceived msg 'b'encryption message'' id = '(0,0,-1,-1)'\n\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var r=s(96540);const i={},c=r.createContext(i);function t(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);