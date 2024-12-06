"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[80012],{48353:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"security-encryption","title":"Pulsar Encryption","description":"Applications can use Pulsar encryption to encrypt messages on the producer side and decrypt messages on the consumer side. You can use the public and private key pair that the application configures to perform encryption. Only the consumers with a valid key can decrypt the encrypted messages.","source":"@site/versioned_docs/version-2.5.1/security-encryption.md","sourceDirName":".","slug":"/security-encryption","permalink":"/docs/2.5.1/security-encryption","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.1/security-encryption.md","tags":[],"version":"2.5.1","frontMatter":{"id":"security-encryption","title":"Pulsar Encryption","sidebar_label":"End-to-End Encryption"},"sidebar":"docsSidebar","previous":{"title":"Authorization and ACLs","permalink":"/docs/2.5.1/security-authorization"},"next":{"title":"Extend Authentication and Authorization","permalink":"/docs/2.5.1/security-extending"}}');var a=t(74848),s=t(28453),i=t(89089),o=t(19365);const c={id:"security-encryption",title:"Pulsar Encryption",sidebar_label:"End-to-End Encryption"},l=void 0,d={},u=[{value:"Asymmetric and symmetric encryption",id:"asymmetric-and-symmetric-encryption",level:2},{value:"Producer",id:"producer",level:2},{value:"Consumer",id:"consumer",level:2},{value:"Get started",id:"get-started",level:2},{value:"Key rotation",id:"key-rotation",level:2},{value:"Enable encryption at the producer application",id:"enable-encryption-at-the-producer-application",level:2},{value:"Decrypt encrypted messages at the consumer application",id:"decrypt-encrypted-messages-at-the-consumer-application",level:2},{value:"Handle failures",id:"handle-failures",level:2}];function p(e){const n={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Applications can use Pulsar encryption to encrypt messages on the producer side and decrypt messages on the consumer side. You can use the public and private key pair that the application configures to perform encryption. Only the consumers with a valid key can decrypt the encrypted messages."}),"\n",(0,a.jsx)(n.h2,{id:"asymmetric-and-symmetric-encryption",children:"Asymmetric and symmetric encryption"}),"\n",(0,a.jsx)(n.p,{children:"Pulsar uses a dynamically generated symmetric AES key to encrypt messages(data). You can use the application-provided ECDSA (Elliptic Curve Digital Signature Algorithm) or RSA (Rivest\u2013Shamir\u2013Adleman) key pair to encrypt the AES key(data key), so you do not have to share the secret with everyone."}),"\n",(0,a.jsx)(n.p,{children:"Key is a public and private key pair used for encryption or decryption. The producer key is the public key of the key pair, and the consumer key is the private key of the key pair."}),"\n",(0,a.jsx)(n.p,{children:"The application configures the producer with the public key. You can use this key to encrypt the AES data key. The encrypted data key is sent as part of message header. Only entities with the private key (in this case the consumer) are able to decrypt the data key which is used to decrypt the message."}),"\n",(0,a.jsx)(n.p,{children:"You can encrypt a message with more than one key. Any one of the keys used for encrypting the message is sufficient to decrypt the message."}),"\n",(0,a.jsx)(n.p,{children:"Pulsar does not store the encryption key anywhere in the Pulsar service. If you lose or delete the private key, your message is irretrievably lost, and is unrecoverable."}),"\n",(0,a.jsx)(n.h2,{id:"producer",children:"Producer"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alt text",src:t(20593).A+"",title:"Pulsar Encryption Producer",width:"960",height:"540"})}),"\n",(0,a.jsx)(n.h2,{id:"consumer",children:"Consumer"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alt text",src:t(42539).A+"",title:"Pulsar Encryption Consumer",width:"960",height:"540"})}),"\n",(0,a.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Create your ECDSA or RSA public and private key pair by using the following commands."}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"ECDSA\uff08for Java clients only)"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"\nopenssl ecparam -name secp521r1 -genkey -param_enc explicit -out test_ecdsa_privkey.pem\nopenssl ec -in test_ecdsa_privkey.pem -pubout -outform pem -out test_ecdsa_pubkey.pem\n\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"RSA (for C++, Python and Node.js clients)"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"\nopenssl genrsa -out test_rsa_privkey.pem 2048\nopenssl rsa -in test_rsa_privkey.pem -pubout -outform pkcs8 -out test_rsa_pubkey.pem\n\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Add the public and private key to the key management and configure your producers to retrieve public keys and consumers clients to retrieve private keys."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Implement the ",(0,a.jsx)(n.code,{children:"CryptoKeyReader"})," interface, specifically ",(0,a.jsx)(n.code,{children:"CryptoKeyReader.getPublicKey()"})," for producer and ",(0,a.jsx)(n.code,{children:"CryptoKeyReader.getPrivateKey()"})," for consumer, which Pulsar client invokes to load the key."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'Add the encryption key name to the producer builder: PulsarClient.newProducer().addEncryptionKey("myapp.key").'}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Configure a ",(0,a.jsx)(n.code,{children:"CryptoKeyReader"})," to a producer, consumer or reader."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.A,{defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C++",value:"C++"},{label:"Python",value:"Python"},{label:"Node.js",value:"Node.js"}],children:[(0,a.jsx)(o.A,{value:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'\nPulsarClient pulsarClient = PulsarClient.builder().serviceUrl("pulsar://localhost:6650").build();\nString topic = "persistent://my-tenant/my-ns/my-topic";\n// RawFileKeyReader is just an example implementation that\'s not provided by Pulsar\nCryptoKeyReader keyReader = new RawFileKeyReader("test_ecdsa_pubkey.pem", "test_ecdsa_privkey.pem");\n\nProducer<byte[]> producer = pulsarClient.newProducer()\n        .topic(topic)\n        .cryptoKeyReader(keyReader)\n        .addEncryptionKey("myappkey")\n        .create();\n\nConsumer<byte[]> consumer = pulsarClient.newConsumer()\n        .topic(topic)\n        .subscriptionName("my-subscriber-name")\n        .cryptoKeyReader(keyReader)\n        .subscribe();\n\nReader<byte[]> reader = pulsarClient.newReader()\n        .topic(topic)\n        .startMessageId(MessageId.earliest)\n        .cryptoKeyReader(keyReader)\n        .create();\n\n'})})}),(0,a.jsx)(o.A,{value:"C++",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c++",children:'\nClient client("pulsar://localhost:6650");\nstd::string topic = "persistent://my-tenant/my-ns/my-topic";\n// DefaultCryptoKeyReader is a built-in implementation that reads public key and private key from files\nauto keyReader = std::make_shared<DefaultCryptoKeyReader>("test_ecdsa_pubkey.pem", "test_ecdsa_privkey.pem");\n\nProducer producer;\nProducerConfiguration producerConf;\nproducerConf.setCryptoKeyReader(keyReader);\nproducerConf.addEncryptionKey("myappkey");\nclient.createProducer(topic, producerConf, producer);\n\nConsumer consumer;\nConsumerConfiguration consumerConf;\nconsumerConf.setCryptoKeyReader(keyReader);\nclient.subscribe(topic, "my-subscriber-name", consumerConf, consumer);\n\nReader reader;\nReaderConfiguration readerConf;\nreaderConf.setCryptoKeyReader(keyReader);\nclient.createReader(topic, MessageId::earliest(), readerConf, reader);\n\n'})})}),(0,a.jsx)(o.A,{value:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"\nfrom pulsar import Client, CryptoKeyReader\n\nclient = Client('pulsar://localhost:6650')\ntopic = 'persistent://my-tenant/my-ns/my-topic'\n# CryptoKeyReader is a built-in implementation that reads public key and private key from files\nkey_reader = CryptoKeyReader('test_ecdsa_pubkey.pem', 'test_ecdsa_privkey.pem')\n\nproducer = client.create_producer(\n    topic=topic,\n    encryption_key='myappkey',\n    crypto_key_reader=key_reader\n)\n\nconsumer = client.subscribe(\n    topic=topic,\n    subscription_name='my-subscriber-name',\n    crypto_key_reader=key_reader\n)\n\nreader = client.create_reader(\n    topic=topic,\n    start_message_id=MessageId.earliest,\n    crypto_key_reader=key_reader\n)\n\nclient.close()\n\n"})})}),(0,a.jsx)(o.A,{value:"Node.js",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-nodejs",children:"\nconst Pulsar = require('pulsar-client');\n\n(async () => {\n// Create a client\nconst client = new Pulsar.Client({\n    serviceUrl: 'pulsar://localhost:6650',\n    operationTimeoutSeconds: 30,\n});\n\n// Create a producer\nconst producer = await client.createProducer({\n    topic: 'persistent://public/default/my-topic',\n    sendTimeoutMs: 30000,\n    batchingEnabled: true,\n    publicKeyPath: \"public-key.client-rsa.pem\",\n    encryptionKey: \"encryption-key\"\n});\n\n// Create a consumer\nconst consumer = await client.subscribe({\n    topic: 'persistent://public/default/my-topic',\n    subscription: 'sub1',\n    subscriptionType: 'Shared',\n    ackTimeoutMs: 10000,\n    privateKeyPath: \"private-key.client-rsa.pem\"\n});\n\n// Send messages\nfor (let i = 0; i < 10; i += 1) {\n    const msg = `my-message-${i}`;\n    producer.send({\n    data: Buffer.from(msg),\n    });\n    console.log(`Sent message: ${msg}`);\n}\nawait producer.flush();\n\n// Receive messages\nfor (let i = 0; i < 10; i += 1) {\n    const msg = await consumer.receive();\n    console.log(msg.getData().toString());\n    consumer.acknowledge(msg);\n}\n\nawait consumer.close();\nawait producer.close();\nawait client.close();\n})();\n\n"})})})]}),"\n",(0,a.jsxs)(n.ol,{start:"6",children:["\n",(0,a.jsxs)(n.li,{children:["Below is an example of a ",(0,a.jsx)(n.strong,{children:"customized"})," ",(0,a.jsx)(n.code,{children:"CryptoKeyReader"})," implementation."]}),"\n"]}),"\n",(0,a.jsxs)(i.A,{defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"C++",value:"C++"},{label:"Python",value:"Python"},{label:"Node.js",value:"Node.js"}],children:[(0,a.jsx)(o.A,{value:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'\nclass RawFileKeyReader implements CryptoKeyReader {\n\n    String publicKeyFile = "";\n    String privateKeyFile = "";\n\n    RawFileKeyReader(String pubKeyFile, String privKeyFile) {\n        publicKeyFile = pubKeyFile;\n        privateKeyFile = privKeyFile;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPublicKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(publicKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read public key from file " + publicKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPrivateKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(privateKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read private key from file " + privateKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n}\n\n'})})}),(0,a.jsxs)(o.A,{value:"C++",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c++",children:"\nclass CustomCryptoKeyReader : public CryptoKeyReader {\n    public:\n    Result getPublicKey(const std::string& keyName, std::map<std::string, std::string>& metadata,\n                        EncryptionKeyInfo& encKeyInfo) const override {\n        // TODO:\n        return ResultOk;\n    }\n\n    Result getPrivateKey(const std::string& keyName, std::map<std::string, std::string>& metadata,\n                        EncryptionKeyInfo& encKeyInfo) const override {\n        // TODO:\n        return ResultOk;\n    }\n};\n\nauto keyReader = std::make_shared<CustomCryptoKeyReader>(/* ... */);\n// TODO: create producer, consumer or reader based on keyReader here\n\n"})}),(0,a.jsxs)(n.p,{children:["Besides, you can use the ",(0,a.jsx)(n.strong,{children:"default"})," implementation of ",(0,a.jsx)(n.code,{children:"CryptoKeyReader"})," by specifying the paths of ",(0,a.jsx)(n.code,{children:"private key"})," and ",(0,a.jsx)(n.code,{children:"public key"}),"."]})]}),(0,a.jsx)(o.A,{value:"Python",children:(0,a.jsxs)(n.p,{children:["Currently, ",(0,a.jsx)(n.strong,{children:"customized"})," ",(0,a.jsx)(n.code,{children:"CryptoKeyReader"})," implementation is not supported in Python. However, you can use the ",(0,a.jsx)(n.strong,{children:"default"})," implementation by specifying the path of ",(0,a.jsx)(n.code,{children:"private key"})," and ",(0,a.jsx)(n.code,{children:"public key"}),"."]})}),(0,a.jsx)(o.A,{value:"Node.js",children:(0,a.jsxs)(n.p,{children:["Currently, ",(0,a.jsx)(n.strong,{children:"customized"})," ",(0,a.jsx)(n.code,{children:"CryptoKeyReader"})," implementation is not supported in Node.js. However, you can use the ",(0,a.jsx)(n.strong,{children:"default"})," implementation by specifying the path of ",(0,a.jsx)(n.code,{children:"private key"})," and ",(0,a.jsx)(n.code,{children:"public key"}),"."]})})]}),"\n",(0,a.jsx)(n.h2,{id:"key-rotation",children:"Key rotation"}),"\n",(0,a.jsx)(n.p,{children:"Pulsar generates a new AES data key every 4 hours or after publishing a certain number of messages. A producer fetches the asymmetric public key every 4 hours by calling CryptoKeyReader.getPublicKey() to retrieve the latest version."}),"\n",(0,a.jsx)(n.h2,{id:"enable-encryption-at-the-producer-application",children:"Enable encryption at the producer application"}),"\n",(0,a.jsx)(n.p,{children:"If you produce messages that are consumed across application boundaries, you need to ensure that consumers in other applications have access to one of the private keys that can decrypt the messages. You can do this in two ways:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"The consumer application provides you access to their public key, which you add to your producer keys."}),"\n",(0,a.jsx)(n.li,{children:"You grant access to one of the private keys from the pairs that producer uses."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"When producers want to encrypt the messages with multiple keys, producers add all such keys to the config. Consumer can decrypt the message as long as the consumer has access to at least one of the keys."}),"\n",(0,a.jsxs)(n.p,{children:["If you need to encrypt the messages using 2 keys (",(0,a.jsx)(n.code,{children:"myapp.messagekey1"})," and ",(0,a.jsx)(n.code,{children:"myapp.messagekey2"}),"), refer to the following example."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'\nPulsarClient.newProducer().addEncryptionKey("myapp.messagekey1").addEncryptionKey("myapp.messagekey2");\n\n'})}),"\n",(0,a.jsx)(n.h2,{id:"decrypt-encrypted-messages-at-the-consumer-application",children:"Decrypt encrypted messages at the consumer application"}),"\n",(0,a.jsx)(n.p,{children:"Consumers require to access one of the private keys to decrypt messages that the producer produces. If you want to receive encrypted messages, create a public or private key and give your public key to the producer application to encrypt messages using your public key."}),"\n",(0,a.jsx)(n.h2,{id:"handle-failures",children:"Handle failures"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Producer/Consumer loses access to the key","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Producer action fails to indicate the cause of the failure. Application has the option to proceed with sending unencrypted messages in such cases. Call ",(0,a.jsx)(n.code,{children:"PulsarClient.newProducer().cryptoFailureAction(ProducerCryptoFailureAction)"})," to control the producer behavior. The default behavior is to fail the request."]}),"\n",(0,a.jsxs)(n.li,{children:["If consumption fails due to decryption failure or missing keys in consumer, the application has the option to consume the encrypted message or discard it. Call ",(0,a.jsx)(n.code,{children:"PulsarClient.newConsumer().cryptoFailureAction(ConsumerCryptoFailureAction)"})," to control the consumer behavior. The default behavior is to fail the request. Application is never able to decrypt the messages if the private key is permanently lost."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Batch messaging","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If decryption fails and the message contains batch messages, client is not able to retrieve individual messages in the batch, hence message consumption fails even if cryptoFailureAction() is set to ",(0,a.jsx)(n.code,{children:"ConsumerCryptoFailureAction.CONSUME"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"If decryption fails, the message consumption stops and the application notices backlog growth in addition to decryption failure messages in the client log. If the application does not have access to the private key to decrypt the message, the only option is to skip or discard backlogged messages."}),"\n"]})]})}function y(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},89089:(e,n,t)=>{t.d(n,{A:()=>j});var r=t(96540),a=t(34164),s=t(23104),i=t(56347),o=t(205),c=t(57485),l=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function y(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!y({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[l,u]=h({queryString:t,groupId:a}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),f=(()=>{const e=l??m;return y({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!y({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=o[t].value;a!==r&&(l(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function x(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(k,{...n,...e})]})}function j(e){const n=(0,g.A)();return(0,b.jsx)(x,{...e,children:u(e.children)},String(n))}},42539:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/pulsar-encryption-consumer-2831a122b5b79a1619d00af823b2506c.jpg"},20593:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/pulsar-encryption-producer-1d7f4562a5c743e0442a0ec472ca8ef6.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);