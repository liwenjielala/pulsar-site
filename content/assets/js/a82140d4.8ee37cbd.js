"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[97159],{50055:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"security-encryption","title":"Pulsar Encryption","description":"Applications can use Pulsar encryption to encrypt messages on the producer side and decrypt messages on the consumer side. You can use the public and private key pair that the application configures to perform encryption. Only the consumers with a valid key can decrypt the encrypted messages.","source":"@site/versioned_docs/version-2.8.x/security-encryption.md","sourceDirName":".","slug":"/security-encryption","permalink":"/docs/2.8.x/security-encryption","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/security-encryption.md","tags":[],"version":"2.8.x","frontMatter":{"id":"security-encryption","title":"Pulsar Encryption","sidebar_label":"End-to-End Encryption","original_id":"security-encryption"},"sidebar":"docsSidebar","previous":{"title":"Authorization and ACLs","permalink":"/docs/2.8.x/security-authorization"},"next":{"title":"Extending","permalink":"/docs/2.8.x/security-extending"}}');var i=t(74848),s=t(28453);const a={id:"security-encryption",title:"Pulsar Encryption",sidebar_label:"End-to-End Encryption",original_id:"security-encryption"},o=void 0,c={},l=[{value:"Asymmetric and symmetric encryption",id:"asymmetric-and-symmetric-encryption",level:2},{value:"Producer",id:"producer",level:2},{value:"Consumer",id:"consumer",level:2},{value:"Get started",id:"get-started",level:2},{value:"Key rotation",id:"key-rotation",level:2},{value:"Enable encryption at the producer application",id:"enable-encryption-at-the-producer-application",level:2},{value:"Decrypt encrypted messages at the consumer application",id:"decrypt-encrypted-messages-at-the-consumer-application",level:2},{value:"Handle failures",id:"handle-failures",level:2}];function p(e){const n={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Applications can use Pulsar encryption to encrypt messages on the producer side and decrypt messages on the consumer side. You can use the public and private key pair that the application configures to perform encryption. Only the consumers with a valid key can decrypt the encrypted messages."}),"\n",(0,i.jsx)(n.h2,{id:"asymmetric-and-symmetric-encryption",children:"Asymmetric and symmetric encryption"}),"\n",(0,i.jsx)(n.p,{children:"Pulsar uses a dynamically generated symmetric AES key to encrypt messages(data). You can use the application-provided ECDSA (Elliptic Curve Digital Signature Algorithm) or RSA (Rivest\u2013Shamir\u2013Adleman) key pair to encrypt the AES key(data key), so you do not have to share the secret with everyone."}),"\n",(0,i.jsx)(n.p,{children:"Key is a public and private key pair used for encryption or decryption. The producer key is the public key of the key pair, and the consumer key is the private key of the key pair."}),"\n",(0,i.jsx)(n.p,{children:"The application configures the producer with the public key. You can use this key to encrypt the AES data key. The encrypted data key is sent as part of message header. Only entities with the private key (in this case the consumer) are able to decrypt the data key which is used to decrypt the message."}),"\n",(0,i.jsx)(n.p,{children:"You can encrypt a message with more than one key. Any one of the keys used for encrypting the message is sufficient to decrypt the message."}),"\n",(0,i.jsx)(n.p,{children:"Pulsar does not store the encryption key anywhere in the Pulsar service. If you lose or delete the private key, your message is irretrievably lost, and is unrecoverable."}),"\n",(0,i.jsx)(n.h2,{id:"producer",children:"Producer"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(20593).A+"",title:"Pulsar Encryption Producer",width:"960",height:"540"})}),"\n",(0,i.jsx)(n.h2,{id:"consumer",children:"Consumer"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(42539).A+"",title:"Pulsar Encryption Consumer",width:"960",height:"540"})}),"\n",(0,i.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create your ECDSA or RSA public and private key pair by using the following commands."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ECDSA\uff08for Java clients only)"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\nopenssl ecparam -name secp521r1 -genkey -param_enc explicit -out test_ecdsa_privkey.pem\nopenssl ec -in test_ecdsa_privkey.pem -pubout -outform pem -out test_ecdsa_pubkey.pem\n\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"RSA (for C++, Python and Node.js clients)"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\nopenssl genrsa -out test_rsa_privkey.pem 2048\nopenssl rsa -in test_rsa_privkey.pem -pubout -outform pkcs8 -out test_rsa_pubkey.pem\n\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add the public and private key to the key management and configure your producers to retrieve public keys and consumers clients to retrieve private keys."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Implement the ",(0,i.jsx)(n.code,{children:"CryptoKeyReader"})," interface, specifically ",(0,i.jsx)(n.code,{children:"CryptoKeyReader.getPublicKey()"})," for producer and ",(0,i.jsx)(n.code,{children:"CryptoKeyReader.getPrivateKey()"})," for consumer, which Pulsar client invokes to load the key."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Add the encryption key name to the producer builder: PulsarClient.newProducer().addEncryptionKey("myapp.key").'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add CryptoKeyReader implementation to producer or consumer builder: PulsarClient.newProducer().cryptoKeyReader(keyReader) / PulsarClient.newConsumer().cryptoKeyReader(keyReader)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Sample producer application:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'\nclass RawFileKeyReader implements CryptoKeyReader {\n\n    String publicKeyFile = "";\n    String privateKeyFile = "";\n\n    RawFileKeyReader(String pubKeyFile, String privKeyFile) {\n        publicKeyFile = pubKeyFile;\n        privateKeyFile = privKeyFile;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPublicKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(publicKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read public key from file " + publicKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPrivateKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(privateKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read private key from file " + privateKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n}\n\nPulsarClient pulsarClient = PulsarClient.builder().serviceUrl("pulsar://localhost:6650").build();\n\nProducer producer = pulsarClient.newProducer()\n                .topic("persistent://my-tenant/my-ns/my-topic")\n                .addEncryptionKey("myappkey")\n                .cryptoKeyReader(new RawFileKeyReader("test_ecdsa_pubkey.pem", "test_ecdsa_privkey.pem"))\n                .create();\n\nfor (int i = 0; i < 10; i++) {\n    producer.send("my-message".getBytes());\n}\n\nproducer.close();\npulsarClient.close();\n\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsx)(n.li,{children:"Sample Consumer Application:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'\nclass RawFileKeyReader implements CryptoKeyReader {\n\n    String publicKeyFile = "";\n    String privateKeyFile = "";\n\n    RawFileKeyReader(String pubKeyFile, String privKeyFile) {\n        publicKeyFile = pubKeyFile;\n        privateKeyFile = privKeyFile;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPublicKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(publicKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read public key from file " + publicKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n\n    @Override\n    public EncryptionKeyInfo getPrivateKey(String keyName, Map<String, String> keyMeta) {\n        EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n        try {\n            keyInfo.setKey(Files.readAllBytes(Paths.get(privateKeyFile)));\n        } catch (IOException e) {\n            System.out.println("ERROR: Failed to read private key from file " + privateKeyFile);\n            e.printStackTrace();\n        }\n        return keyInfo;\n    }\n}\n\nPulsarClient pulsarClient = PulsarClient.builder().serviceUrl("pulsar://localhost:6650").build();\nConsumer consumer = pulsarClient.newConsumer()\n                .topic("persistent://my-tenant/my-ns/my-topic")\n                .subscriptionName("my-subscriber-name")\n                .cryptoKeyReader(new RawFileKeyReader("test_ecdsa_pubkey.pem", "test_ecdsa_privkey.pem"))\n                .subscribe();\nMessage msg = null;\n\nfor (int i = 0; i < 10; i++) {\n    msg = consumer.receive();\n    // do something\n    System.out.println("Received: " + new String(msg.getData()));\n}\n\n// Acknowledge the consumption of all messages at once\nconsumer.acknowledgeCumulative(msg);\nconsumer.close();\npulsarClient.close();\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"key-rotation",children:"Key rotation"}),"\n",(0,i.jsx)(n.p,{children:"Pulsar generates a new AES data key every 4 hours or after publishing a certain number of messages. A producer fetches the asymmetric public key every 4 hours by calling CryptoKeyReader.getPublicKey() to retrieve the latest version."}),"\n",(0,i.jsx)(n.h2,{id:"enable-encryption-at-the-producer-application",children:"Enable encryption at the producer application"}),"\n",(0,i.jsx)(n.p,{children:"If you produce messages that are consumed across application boundaries, you need to ensure that consumers in other applications have access to one of the private keys that can decrypt the messages. You can do this in two ways:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The consumer application provides you access to their public key, which you add to your producer keys."}),"\n",(0,i.jsx)(n.li,{children:"You grant access to one of the private keys from the pairs that producer uses."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"When producers want to encrypt the messages with multiple keys, producers add all such keys to the config. Consumer can decrypt the message as long as the consumer has access to at least one of the keys."}),"\n",(0,i.jsxs)(n.p,{children:["If you need to encrypt the messages using 2 keys (",(0,i.jsx)(n.code,{children:"myapp.messagekey1"})," and ",(0,i.jsx)(n.code,{children:"myapp.messagekey2"}),"), refer to the following example."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'\nPulsarClient.newProducer().addEncryptionKey("myapp.messagekey1").addEncryptionKey("myapp.messagekey2");\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"decrypt-encrypted-messages-at-the-consumer-application",children:"Decrypt encrypted messages at the consumer application"}),"\n",(0,i.jsx)(n.p,{children:"Consumers require to access one of the private keys to decrypt messages that the producer produces. If you want to receive encrypted messages, create a public or private key and give your public key to the producer application to encrypt messages using your public key."}),"\n",(0,i.jsx)(n.h2,{id:"handle-failures",children:"Handle failures"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Producer/Consumer loses access to the key","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Producer action fails to indicate the cause of the failure. Application has the option to proceed with sending unencrypted messages in such cases. Call ",(0,i.jsx)(n.code,{children:"PulsarClient.newProducer().cryptoFailureAction(ProducerCryptoFailureAction)"})," to control the producer behavior. The default behavior is to fail the request."]}),"\n",(0,i.jsxs)(n.li,{children:["If consumption fails due to decryption failure or missing keys in consumer, the application has the option to consume the encrypted message or discard it. Call ",(0,i.jsx)(n.code,{children:"PulsarClient.newConsumer().cryptoFailureAction(ConsumerCryptoFailureAction)"})," to control the consumer behavior. The default behavior is to fail the request. Application is never able to decrypt the messages if the private key is permanently lost."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Batch messaging","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If decryption fails and the message contains batch messages, client is not able to retrieve individual messages in the batch, hence message consumption fails even if cryptoFailureAction() is set to ",(0,i.jsx)(n.code,{children:"ConsumerCryptoFailureAction.CONSUME"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"If decryption fails, the message consumption stops and the application notices backlog growth in addition to decryption failure messages in the client log. If the application does not have access to the private key to decrypt the message, the only option is to skip or discard backlogged messages."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},42539:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/pulsar-encryption-consumer-2831a122b5b79a1619d00af823b2506c.jpg"},20593:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/pulsar-encryption-producer-1d7f4562a5c743e0442a0ec472ca8ef6.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);