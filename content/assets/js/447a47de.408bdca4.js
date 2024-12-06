"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[44005],{20385:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"cookbooks-encryption","title":"Pulsar Encryption","description":"Pulsar encryption allows applications to encrypt messages at the producer and decrypt at the consumer. Encryption is performed using the public/private key pair configured by the application. Encrypted messages can only be decrypted by consumers with a valid key.","source":"@site/versioned_docs/version-2.3.2/cookbooks-encryption.md","sourceDirName":".","slug":"/cookbooks-encryption","permalink":"/docs/2.3.2/cookbooks-encryption","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.2/cookbooks-encryption.md","tags":[],"version":"2.3.2","frontMatter":{"id":"cookbooks-encryption","title":"Pulsar Encryption","sidebar_label":"Encryption "},"sidebar":"docsSidebar","previous":{"title":"Message retention and expiry","permalink":"/docs/2.3.2/cookbooks-retention-expiry"},"next":{"title":"Message queue","permalink":"/docs/2.3.2/cookbooks-message-queue"}}');var r=t(74848),s=t(28453);const o={id:"cookbooks-encryption",title:"Pulsar Encryption",sidebar_label:"Encryption "},a=void 0,c={},l=[{value:"Asymmetric and symmetric encryption",id:"asymmetric-and-symmetric-encryption",level:2},{value:"Producer",id:"producer",level:2},{value:"Consumer",id:"consumer",level:2},{value:"Here are the steps to get started:",id:"here-are-the-steps-to-get-started",level:2},{value:"Key rotation",id:"key-rotation",level:2},{value:"Enabling encryption at the producer application:",id:"enabling-encryption-at-the-producer-application",level:2},{value:"Decrypting encrypted messages at the consumer application:",id:"decrypting-encrypted-messages-at-the-consumer-application",level:2},{value:"Handling Failures:",id:"handling-failures",level:2}];function p(e){const n={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Pulsar encryption allows applications to encrypt messages at the producer and decrypt at the consumer. Encryption is performed using the public/private key pair configured by the application. Encrypted messages can only be decrypted by consumers with a valid key."}),"\n",(0,r.jsx)(n.h2,{id:"asymmetric-and-symmetric-encryption",children:"Asymmetric and symmetric encryption"}),"\n",(0,r.jsx)(n.p,{children:"Pulsar uses dynamically generated symmetric AES key to encrypt messages(data). The AES key(data key) is encrypted using application provided ECDSA/RSA key pair, as a result there is no need to share the secret with everyone."}),"\n",(0,r.jsx)(n.p,{children:"Key is a public/private key pair used for encryption/decryption. The producer key is the public key, and the consumer key is the private key of the key pair."}),"\n",(0,r.jsx)(n.p,{children:"The application configures the producer with the public  key. This key is used to encrypt the AES data key. The encrypted data key is sent as part of message header. Only entities with the private key(in this case the consumer) will be able to decrypt the data key which is used to decrypt the message."}),"\n",(0,r.jsx)(n.p,{children:"A message can be encrypted with more than one key.  Any one of the keys used for encrypting the message is sufficient to decrypt the message"}),"\n",(0,r.jsx)(n.p,{children:"Pulsar does not store the encryption key anywhere in the pulsar service. If you lose/delete the private key, your message is irretrievably lost, and is unrecoverable"}),"\n",(0,r.jsx)(n.h2,{id:"producer",children:"Producer"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"alt text",src:t(20593).A+"",title:"Pulsar Encryption Producer",width:"960",height:"540"})}),"\n",(0,r.jsx)(n.h2,{id:"consumer",children:"Consumer"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"alt text",src:t(42539).A+"",title:"Pulsar Encryption Consumer",width:"960",height:"540"})}),"\n",(0,r.jsx)(n.h2,{id:"here-are-the-steps-to-get-started",children:"Here are the steps to get started:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Create your ECDSA or RSA public/private key pair."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\nopenssl ecparam -name secp521r1 -genkey -param_enc explicit -out test_ecdsa_privkey.pem\nopenssl ec -in test_ecdsa_privkey.pem -pubout -outform pkcs8 -out test_ecdsa_pubkey.pem\n\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Add the public and private key to the key management and configure your producers to retrieve public keys and consumers clients to retrieve private keys."}),"\n",(0,r.jsx)(n.li,{children:"Implement CryptoKeyReader::getPublicKey() interface from producer and CryptoKeyReader::getPrivateKey() interface from consumer, which will be invoked by Pulsar client to load the key."}),"\n",(0,r.jsx)(n.li,{children:'Add encryption key to producer configuration: conf.addEncryptionKey("myapp.key")'}),"\n",(0,r.jsx)(n.li,{children:"Add CryptoKeyReader implementation to producer/consumer config: conf.setCryptoKeyReader(keyReader)"}),"\n",(0,r.jsx)(n.li,{children:"Sample producer application:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nclass RawFileKeyReader implements CryptoKeyReader {\n\n    String publicKeyFile = "";\n    String privateKeyFile = "";\n\n    RawFileKeyReader(String pubKeyFile, String privKeyFile) {\n        publicKeyFile = pubKeyFile;\n        privateKeyFile = privKeyFile;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPublicKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(publicKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read public key from file " + publicKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPrivateKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(privateKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read private key from file " + privateKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n}\nPulsarClient pulsarClient = PulsarClient.create("http://localhost:8080");\n\nProducerConfiguration prodConf = new ProducerConfiguration();\nprodConf.setCryptoKeyReader(new RawFileKeyReader("test_ecdsa_pubkey.pem", "test_ecdsa_privkey.pem"));\nprodConf.addEncryptionKey("myappkey");\n\nProducer producer = pulsarClient.createProducer("persistent://my-tenant/my-ns/my-topic", prodConf);\n\nfor (int i = 0; i < 10; i++) {\n    producer.send("my-message".getBytes());\n}\n\npulsarClient.close();\n\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsx)(n.li,{children:"Sample Consumer Application:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nclass RawFileKeyReader implements CryptoKeyReader {\n\n    String publicKeyFile = "";\n    String privateKeyFile = "";\n\n    RawFileKeyReader(String pubKeyFile, String privKeyFile) {\n        publicKeyFile = pubKeyFile;\n        privateKeyFile = privKeyFile;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPublicKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(publicKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read public key from file " + publicKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPrivateKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(privateKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read private key from file " + privateKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n}\n\nConsumerConfiguration consConf = new ConsumerConfiguration();\nconsConf.setCryptoKeyReader(new RawFileKeyReader("test_ecdsa_pubkey.pem", "test_ecdsa_privkey.pem"));\nPulsarClient pulsarClient = PulsarClient.create("http://localhost:8080");\nConsumer consumer = pulsarClient.subscribe("persistent://my-tenant//my-ns/my-topic", "my-subscriber-name", consConf);\nMessage msg = null;\n\nfor (int i = 0; i < 10; i++) {\n    msg = consumer.receive();\n    // do something\n    System.out.println("Received: " + new String(msg.getData()));\n}\n\n// Acknowledge the consumption of all messages at once\nconsumer.acknowledgeCumulative(msg);\npulsarClient.close();\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"key-rotation",children:"Key rotation"}),"\n",(0,r.jsx)(n.p,{children:"Pulsar generates new AES data key every 4 hours or after a certain number of messages are published. The asymmetric public key is automatically fetched by producer every 4 hours by calling CryptoKeyReader::getPublicKey() to retrieve the latest version."}),"\n",(0,r.jsx)(n.h2,{id:"enabling-encryption-at-the-producer-application",children:"Enabling encryption at the producer application:"}),"\n",(0,r.jsx)(n.p,{children:"If you produce messages that are consumed across application boundaries, you need to ensure that consumers in other applications have access to one of the private keys that can decrypt the messages.  This can be done in two ways:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"The consumer application provides you access to their public key, which you add to your producer keys"}),"\n",(0,r.jsx)(n.li,{children:"You grant access to one of the private keys from the pairs used by producer"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In some cases, the producer may want to encrypt the messages with multiple keys. For this, add all such keys to the config. Consumer will be able to decrypt the message, as long as it has access to at least one of the keys."}),"\n",(0,r.jsx)(n.p,{children:"E.g: If messages needs to be encrypted using 2 keys myapp.messagekey1 and myapp.messagekey2,"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'\nconf.addEncryptionKey("myapp.messagekey1");\nconf.addEncryptionKey("myapp.messagekey2");\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"decrypting-encrypted-messages-at-the-consumer-application",children:"Decrypting encrypted messages at the consumer application:"}),"\n",(0,r.jsx)(n.p,{children:"Consumers require access one of the private keys to decrypt messages produced by the producer. If you would like to receive encrypted messages, create a public/private key and give your public key to the producer application to encrypt messages using your public key."}),"\n",(0,r.jsx)(n.h2,{id:"handling-failures",children:"Handling Failures:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Producer/ Consumer loses access to the key","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Producer action will fail indicating the cause of the failure. Application has the option to proceed with sending unencrypted message in such cases. Call conf.setCryptoFailureAction(ProducerCryptoFailureAction) to control the producer behavior. The default behavior is to fail the request."}),"\n",(0,r.jsx)(n.li,{children:"If consumption failed due to decryption failure or missing keys in consumer, application has the option to consume the encrypted message or discard it. Call conf.setCryptoFailureAction(ConsumerCryptoFailureAction) to control the consumer behavior. The default behavior is to fail the request.\nApplication will never be able to decrypt the messages if the private key is permanently lost."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Batch messaging","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If decryption fails and the message contain batch messages, client will not be able to retrieve individual messages in the batch, hence message consumption fails even if conf.setCryptoFailureAction() is set to CONSUME."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"If decryption fails, the message consumption stops and application will notice backlog growth in addition to decryption failure messages in the client log. If application does not have access to the private key to decrypt the message, the only option is to skip/discard backlogged messages."}),"\n"]})]})}function y(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},42539:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/pulsar-encryption-consumer-2831a122b5b79a1619d00af823b2506c.jpg"},20593:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/pulsar-encryption-producer-1d7f4562a5c743e0442a0ec472ca8ef6.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);