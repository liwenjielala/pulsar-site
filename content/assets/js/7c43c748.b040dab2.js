"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[18332],{97396:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"security-encryption","title":"End-to-End Encryption","description":"Applications can use Pulsar end-to-end encryption (E2EE) to encrypt messages on the producer side and decrypt messages on the consumer side. You can use the public and private key pair that the application configures to perform encryption and decryption. Only the consumers with a valid key can decrypt the encrypted messages.","source":"@site/versioned_docs/version-3.0.x/security-encryption.md","sourceDirName":".","slug":"/security-encryption","permalink":"/docs/3.0.x/security-encryption","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/security-encryption.md","tags":[],"version":"3.0.x","frontMatter":{"id":"security-encryption","title":"End-to-End Encryption","sidebar_label":"End-to-End Encryption"},"sidebar":"docsSidebar","previous":{"title":"Overview","permalink":"/docs/3.0.x/security-overview"},"next":{"title":"TLS Encryption","permalink":"/docs/3.0.x/security-tls-transport"}}');var s=t(74848),a=t(28453),i=t(11470),o=t(19365);const c={id:"security-encryption",title:"End-to-End Encryption",sidebar_label:"End-to-End Encryption"},l=void 0,u={},d=[{value:"How it works in Pulsar",id:"how-it-works-in-pulsar",level:2},{value:"Get started",id:"get-started",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Configure end-to-end encryption",id:"configure-end-to-end-encryption",level:3},{value:"Encrypt a message with multiple keys",id:"encrypt-a-message-with-multiple-keys",level:3},{value:"Troubleshoot",id:"troubleshoot",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Applications can use Pulsar end-to-end encryption (E2EE) to encrypt messages on the producer side and decrypt messages on the consumer side. You can use the public and private key pair that the application configures to perform encryption and decryption. Only the consumers with a valid key can decrypt the encrypted messages."}),"\n",(0,s.jsx)(n.h2,{id:"how-it-works-in-pulsar",children:"How it works in Pulsar"}),"\n",(0,s.jsx)(n.p,{children:"Pulsar uses a dynamically generated symmetric session key to encrypt messages (data). You can use the application-provided ECDSA (Elliptic Curve Digital Signature Algorithm) or RSA (Rivest\u2013Shamir\u2013Adleman) key pair to encrypt the session key (data key), so you do not have to share the secret with everyone."}),"\n",(0,s.jsx)(n.p,{children:"The following figure illustrates how Pulsar encrypts messages on the producer side and decrypts messages on the consumer side."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Pulsar end-to-end encryption",src:t(48719).A+"",width:"2198",height:"532"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The producer generates a session key regularly (every 4 hours or after publishing a certain number of messages) to encrypt the message payload using a symmetric algorithm, such as AES, and fetches the asymmetric public key every 4 hours. The ciphertext is packed as the message body."}),"\n",(0,s.jsx)(n.li,{children:"The producer uses the consumer\u2019s public key to encrypt the session key using an asymmetric algorithm, such as RSA, and adds an alias with the encrypted secret to the message header."}),"\n",(0,s.jsx)(n.li,{children:"The consumer reads the message header and decrypts the session key using its private key."}),"\n",(0,s.jsx)(n.li,{children:"The consumer uses the decrypted session key to decrypt the message payload."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The consumer's public key is shared with the producer, but only the consumer has the access to the private key."}),"\n",(0,s.jsx)(n.li,{children:"Pulsar does not store the encryption key anywhere in the Pulsar service. If you lose or delete the private key, your message is irretrievably lost and unrecoverable."}),"\n"]})}),"\n",(0,s.jsxs)(n.p,{children:["Pulsar isolates the key management and only provides interfaces (",(0,s.jsx)(n.code,{children:"CryptoKeyReader"}),") to access public keys. For production systems, it's highly recommended to extend/implement ",(0,s.jsx)(n.code,{children:"CryptoKeyReader"})," with cloud key management (",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html",children:"KMS"})," or ",(0,s.jsx)(n.a,{href:"https://cloud.google.com/security-key-management",children:"CKM"}),") or PKI (Public Key Infrastructure, such as freeIPA)."]}),"\n",(0,s.jsx)(n.p,{children:"If the produced messages are consumed across application boundaries, you need to ensure that consumers in other applications have access to one of the private keys that can decrypt the messages. You can do this in two ways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Access the public key that the consumer application provides and add it to the producer's keys."}),"\n",(0,s.jsx)(n.li,{children:"Grant access to one of the private keys from the pairs that the producer uses."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Pulsar Java/Python/C++/Node.js client 2.7.1 or later versions."}),"\n",(0,s.jsx)(n.li,{children:"Pulsar Go client 0.6.0 or later versions."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"configure-end-to-end-encryption",children:"Configure end-to-end encryption"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create both public and private key pairs."}),"\n",(0,s.jsxs)(i.A,{groupId:"lang-choice",defaultValue:"ECDSA",values:[{label:"ECDSA (for Java and Go clients)",value:"ECDSA"},{label:"RSA (for Python, C++ and Node.js clients)",value:"RSA"}],children:[(0,s.jsx)(o.A,{value:"ECDSA",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"openssl ecparam -name secp521r1 -genkey -param_enc explicit -out test_ecdsa_privkey.pem\nopenssl ec -in test_ecdsa_privkey.pem -pubout -outform pem -out test_ecdsa_pubkey.pem\n"})})}),(0,s.jsx)(o.A,{value:"RSA",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"openssl genrsa -out test_rsa_privkey.pem 2048\nopenssl rsa -in test_rsa_privkey.pem -pubout -outform PEM -out test_rsa_pubkey.pem\n"})})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Configure a ",(0,s.jsx)(n.code,{children:"CryptoKeyReader"})," on producers, consumers or readers."]}),"\n",(0,s.jsxs)(i.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"C++",value:"C++"},{label:"Go",value:"Go"},{label:"Node.js",value:"Node.js"}],children:[(0,s.jsx)(o.A,{value:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'PulsarClient pulsarClient = PulsarClient.builder().serviceUrl("pulsar://localhost:6650").build();\nString topic = "persistent://my-tenant/my-ns/my-topic";\n// RawFileKeyReader is just an example implementation that\'s not provided by Pulsar\nCryptoKeyReader keyReader = new RawFileKeyReader("test_ecdsa_pubkey.pem", "test_ecdsa_privkey.pem");\n\nProducer<byte[]> producer = pulsarClient.newProducer()\n     .topic(topic)\n     .cryptoKeyReader(keyReader)\n     .addEncryptionKey("myappkey")\n     .create();\n\nConsumer<byte[]> consumer = pulsarClient.newConsumer()\n     .topic(topic)\n     .subscriptionName("my-subscriber-name")\n     .cryptoKeyReader(keyReader)\n     .subscribe();\n\nReader<byte[]> reader = pulsarClient.newReader()\n     .topic(topic)\n     .startMessageId(MessageId.earliest)\n     .cryptoKeyReader(keyReader)\n     .create();\n'})})}),(0,s.jsx)(o.A,{value:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from pulsar import Client, CryptoKeyReader\n\nclient = Client('pulsar://localhost:6650')\ntopic = 'my-topic'\n# CryptoKeyReader is a built-in implementation that reads public key and private key from files\nkey_reader = CryptoKeyReader('test_rsa_pubkey.pem', 'test_rsa_privkey.pem')\n\nproducer = client.create_producer(\n    topic=topic,\n    encryption_key='myappkey',\n    crypto_key_reader=key_reader\n)\n\nconsumer = client.subscribe(\n    topic=topic,\n    subscription_name='my-subscriber-name',\n    crypto_key_reader=key_reader\n)\n\nreader = client.create_reader(\n    topic=topic,\n    start_message_id=MessageId.earliest,\n    crypto_key_reader=key_reader\n)\n\nclient.close()\n"})})}),(0,s.jsx)(o.A,{value:"C++",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'Client client("pulsar://localhost:6650");\nstd::string topic = "persistent://my-tenant/my-ns/my-topic";\n// DefaultCryptoKeyReader is a built-in implementation that reads public key and private key from files\nauto keyReader = std::make_shared<DefaultCryptoKeyReader>("test_rsa_pubkey.pem", "test_rsa_privkey.pem");\n\nProducer producer;\nProducerConfiguration producerConf;\nproducerConf.setCryptoKeyReader(keyReader);\nproducerConf.addEncryptionKey("myappkey");\nclient.createProducer(topic, producerConf, producer);\n\nConsumer consumer;\nConsumerConfiguration consumerConf;\nconsumerConf.setCryptoKeyReader(keyReader);\nclient.subscribe(topic, "my-subscriber-name", consumerConf, consumer);\n\nReader reader;\nReaderConfiguration readerConf;\nreaderConf.setCryptoKeyReader(keyReader);\nclient.createReader(topic, MessageId::earliest(), readerConf, reader);\n'})})}),(0,s.jsx)(o.A,{value:"Go",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'client, err := pulsar.NewClient(pulsar.ClientOptions{\n  URL: "pulsar://localhost:6650",\n})\nif err != nil {\n    log.Fatal(err)\n}\n\ndefer client.Close()\n\ntopic := "persistent://my-tenant/my-ns/my-topic"\nkeyReader := crypto.NewFileKeyReader("test_ecdsa_pubkey.pem", "test_ecdsa_privkey.pem")\nproducer, err := client.CreateProducer(pulsar.ProducerOptions{\n    Topic: topic,\n    Encryption: &pulsar.ProducerEncryptionInfo{\n    \tKeyReader: keyReader,\n    \tKeys:      []string{"myappkey"},\n    },\n})\nif err != nil {\n\tlog.Fatal(err)\n}\ndefer producer.Close()\n\nconsumer, err := client.Subscribe(pulsar.ConsumerOptions{\n    Topic:            topic,\n    SubscriptionName: "my-subscriber-name",\n    Decryption: &pulsar.MessageDecryptionInfo{\n \t   KeyReader: keyReader,\n    },\n})\nif err != nil {\n    log.Fatal(err)\n}\ndefer consumer.Close()\n\nreader, err := client.CreateReader(pulsar.ReaderOptions{\n    Topic: topic,\n    Decryption: &pulsar.MessageDecryptionInfo{\n \t   KeyReader: keyReader,\n    },\n})\nif err != nil {\n    log.Fatal(err)\n}\ndefer reader.Close()\n'})})}),(0,s.jsx)(o.A,{value:"Node.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const Pulsar = require('pulsar-client');\n\nconst topic = 'persistent://my-tenant/my-ns/my-topic';\n\n(async () => {\n// Create a client\nconst client = new Pulsar.Client({\n    serviceUrl: 'pulsar://localhost:6650',\n    operationTimeoutSeconds: 30,\n});\n\n// Create a producer\nconst producer = await client.createProducer({\n    topic: topic,\n    sendTimeoutMs: 30000,\n    batchingEnabled: true,\n    publicKeyPath: \"test_rsa_pubkey.pem\",\n    encryptionKey: \"encryption-key\"\n});\n\n// Create a consumer\nconst consumer = await client.subscribe({\n    topic: topic,\n    subscription: 'my-subscriber-name',\n    subscriptionType: 'Shared',\n    ackTimeoutMs: 10000,\n    privateKeyPath: \"test_rsa_privkey.pem\"\n});\nawait consumer.close();\nawait producer.close();\nawait client.close();\n})();\n"})})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Optional: customize the ",(0,s.jsx)(n.code,{children:"CryptoKeyReader"})," implementation."]}),"\n",(0,s.jsxs)(i.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"C++",value:"C++"},{label:"Go",value:"Go"},{label:"Node.js",value:"Node.js"}],children:[(0,s.jsx)(o.A,{value:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'class RawFileKeyReader implements CryptoKeyReader {\n\n String publicKeyFile = "";\n String privateKeyFile = "";\n\n RawFileKeyReader(String pubKeyFile, String privKeyFile) {\n     publicKeyFile = pubKeyFile;\n     privateKeyFile = privKeyFile;\n }\n\n @Override\n public EncryptionKeyInfo getPublicKey(String keyName, Map<String, String> keyMeta) {\n     EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n     try {\n         keyInfo.setKey(Files.readAllBytes(Paths.get(publicKeyFile)));\n     } catch (IOException e) {\n         System.out.println("ERROR: Failed to read public key from file " + publicKeyFile);\n         e.printStackTrace();\n     }\n     return keyInfo;\n }\n\n @Override\n public EncryptionKeyInfo getPrivateKey(String keyName, Map<String, String> keyMeta) {\n     EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n     try {\n         keyInfo.setKey(Files.readAllBytes(Paths.get(privateKeyFile)));\n     } catch (IOException e) {\n         System.out.println("ERROR: Failed to read private key from file " + privateKeyFile);\n         e.printStackTrace();\n     }\n     return keyInfo;\n }\n}\n'})})}),(0,s.jsx)(o.A,{value:"Python",children:(0,s.jsxs)(n.p,{children:["Currently, customizing the ",(0,s.jsx)(n.code,{children:"CryptoKeyReader"})," implementation is not supported in Python. However, you can use the default implementation by specifying the path of the private key and public keys."]})}),(0,s.jsx)(o.A,{value:"C++",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class CustomCryptoKeyReader : public CryptoKeyReader {\n public:\n Result getPublicKey(const std::string& keyName, std::map<std::string, std::string>& metadata,\n                     EncryptionKeyInfo& encKeyInfo) const override {\n     // TODO\n     return ResultOk;\n }\n\n Result getPrivateKey(const std::string& keyName, std::map<std::string, std::string>& metadata,\n                     EncryptionKeyInfo& encKeyInfo) const override {\n     // TODO\n     return ResultOk;\n }\n};\n"})})}),(0,s.jsx)(o.A,{value:"Go",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"type CustomKeyReader struct {\n    publicKeyPath  string\n    privateKeyPath string\n}\n\nfunc (c *CustomKeyReader) PublicKey(keyName string, keyMeta map[string]string) (*EncryptionKeyInfo, error) {\n    keyInfo := &EncryptionKeyInfo{}\n    // TODO\n    return keyInfo, nil\n}\n\n// PrivateKey read private key from the given path\nfunc (c *CustomKeyReader) PrivateKey(keyName string, keyMeta map[string]string) (*EncryptionKeyInfo, error) {\n    keyInfo := &EncryptionKeyInfo{}\n    // TODO\n    return keyInfo, nil\n}\n"})})}),(0,s.jsx)(o.A,{value:"Node.js",children:(0,s.jsxs)(n.p,{children:["Currently, customizing the ",(0,s.jsx)(n.code,{children:"CryptoKeyReader"})," implementation is not supported in Node.js client. However, you can use the default implementation by specifying the path of the private key and public keys."]})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"encrypt-a-message-with-multiple-keys",children:"Encrypt a message with multiple keys"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"This is only available for Java clients."})}),"\n",(0,s.jsx)(n.p,{children:"You can encrypt a message with more than one key. Producers add all such keys to the config and consumers can decrypt the message as long as they have access to at least one of the keys. Any one of the keys used for encrypting the message is sufficient to decrypt the message."}),"\n",(0,s.jsxs)(n.p,{children:["For example, encrypt the messages using 2 keys (",(0,s.jsx)(n.code,{children:"myapp.messagekey1"})," and ",(0,s.jsx)(n.code,{children:"myapp.messagekey2"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'PulsarClient.newProducer().addEncryptionKey("myapp.messagekey1").addEncryptionKey("myapp.messagekey2");\n'})}),"\n",(0,s.jsx)(n.h2,{id:"troubleshoot",children:"Troubleshoot"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Producer/Consumer loses access to the key","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Producer action fails to indicate the cause of the failure. Application has the option to proceed with sending unencrypted messages in such cases. Call ",(0,s.jsx)(n.code,{children:"PulsarClient.newProducer().cryptoFailureAction(ProducerCryptoFailureAction)"})," to control the producer behavior. The default behavior is to fail the request."]}),"\n",(0,s.jsxs)(n.li,{children:["If consumption fails due to decryption failure or missing keys in the consumer, the application has the option to consume the encrypted message or discard it. Call ",(0,s.jsx)(n.code,{children:"PulsarClient.newConsumer().cryptoFailureAction(ConsumerCryptoFailureAction)"})," to control the consumer behavior. The default behavior is to fail the request. Application is never able to decrypt the messages if the private key is permanently lost."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Batch messaging","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If decryption fails and the message contains batch messages, client is not able to retrieve individual messages in the batch, hence message consumption fails even if ",(0,s.jsx)(n.code,{children:"cryptoFailureAction()"})," is set to ",(0,s.jsx)(n.code,{children:"ConsumerCryptoFailureAction.CONSUME"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"If decryption fails, the message consumption stops and the application notices backlog growth in addition to decryption failure messages in the client log. If the application does not have access to the private key to decrypt the message, the only option is to skip or discard backlogged messages."}),"\n"]})]})}function y(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>j});var r=t(96540),s=t(34164),a=t(23104),i=t(56347),o=t(205),c=t(57485),l=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function y(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=p(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!y({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,d]=h({queryString:t,groupId:s}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),f=(()=>{const e=l??m;return y({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!y({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),s=o[t].value;s!==r&&(l(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function x(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,v.jsx)(b,{...n,...e}),(0,v.jsx)(k,{...n,...e})]})}function j(e){const n=(0,g.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(n))}},48719:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/pulsar-encryption-ed24c413933294ca4c6dc4acfb76eca3.svg"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);