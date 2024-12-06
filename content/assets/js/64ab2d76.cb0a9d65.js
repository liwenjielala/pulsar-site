"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[61933],{49149:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"security-bouncy-castle","title":"Bouncy Castle Providers","description":"Get a comprehensive understanding of concepts and packaging methods of BouncyCastle in Pulsar.","source":"@site/versioned_docs/version-4.0.x/security-bouncy-castle.md","sourceDirName":".","slug":"/security-bouncy-castle","permalink":"/docs/4.0.x/security-bouncy-castle","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-4.0.x/security-bouncy-castle.md","tags":[],"version":"4.0.x","frontMatter":{"id":"security-bouncy-castle","title":"Bouncy Castle Providers","sidebar_label":"Bouncy Castle Providers","description":"Get a comprehensive understanding of concepts and packaging methods of BouncyCastle in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"TLS Encryption","permalink":"/docs/4.0.x/security-tls-transport"},"next":{"title":"Authentication using mTLS","permalink":"/docs/4.0.x/security-tls-authentication"}}');var o=c(74848),i=c(28453);const a={id:"security-bouncy-castle",title:"Bouncy Castle Providers",sidebar_label:"Bouncy Castle Providers",description:"Get a comprehensive understanding of concepts and packaging methods of BouncyCastle in Pulsar."},r=void 0,d={},l=[{value:"BouncyCastle Introduce",id:"bouncycastle-introduce",level:2},{value:"How BouncyCastle modules packaged in Pulsar",id:"how-bouncycastle-modules-packaged-in-pulsar",level:2},{value:"Include dependencies of BC-non-FIPS",id:"include-dependencies-of-bc-non-fips",level:3},{value:"Modules that include BC-non-FIPS module (<code>bouncy-castle-bc</code>)",id:"modules-that-include-bc-non-fips-module-bouncy-castle-bc",level:3},{value:"Module BC-FIPS (<code>bouncy-castle-bcfips</code>)",id:"module-bc-fips-bouncy-castle-bcfips",level:3},{value:"Exclude BC-non-FIPS and include BC-FIPS",id:"exclude-bc-non-fips-and-include-bc-fips",level:3}];function t(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"bouncycastle-introduce",children:"BouncyCastle Introduce"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Bouncy Castle"})," is a Java library that complements the default Java Cryptographic Extension (JCE),\nand it provides more cipher suites and algorithms than the default JCE provided by Sun."]}),"\n",(0,o.jsxs)(n.p,{children:["In addition to that, ",(0,o.jsx)(n.code,{children:"Bouncy Castle"})," has lots of utilities for reading arcane formats like PEM and ASN.1 that no sane person would want to rewrite themselves."]}),"\n",(0,o.jsxs)(n.p,{children:["In Pulsar, security and crypto have dependencies on BouncyCastle Jars. For the detailed installing and configuring Bouncy Castle FIPS, see ",(0,o.jsx)(n.a,{href:"https://www.bouncycastle.org/documentation.html",children:"BC FIPS Documentation"}),", especially the ",(0,o.jsx)(n.strong,{children:"User Guides"})," and ",(0,o.jsx)(n.strong,{children:"Security Policy"})," PDFs."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Bouncy Castle"})," provides both ",(0,o.jsx)(n.a,{href:"https://www.bouncycastle.org/fips_faq.html",children:"FIPS"})," and non-FIPS versions. But in a JVM, you can not include both of the 2 versions, and you need to exclude the current version before including the other."]}),"\n",(0,o.jsxs)(n.p,{children:["In Pulsar, the security and crypto methods also depend on ",(0,o.jsx)(n.code,{children:"Bouncy Castle"}),", especially in ",(0,o.jsx)(n.a,{href:"/docs/4.0.x/security-tls-authentication",children:"mTLS authentication"})," and ",(0,o.jsx)(n.a,{href:"/docs/4.0.x/security-encryption",children:"Transport Encryption"}),". This document contains the configuration between BouncyCastle FIPS(BC-FIPS) and non-FIPS(BC-non-FIPS) version while using Pulsar."]}),"\n",(0,o.jsx)(n.h2,{id:"how-bouncycastle-modules-packaged-in-pulsar",children:"How BouncyCastle modules packaged in Pulsar"}),"\n",(0,o.jsxs)(n.p,{children:["In Pulsar's ",(0,o.jsx)(n.code,{children:"bouncy-castle"})," module, We provide 2 sub modules: ",(0,o.jsx)(n.code,{children:"bouncy-castle-bc"}),"(for non-FIPS versions) and ",(0,o.jsx)(n.code,{children:"bouncy-castle-bcfips"}),"(for FIPS version), to package BC jars together to make the include and exclude of ",(0,o.jsx)(n.code,{children:"Bouncy Castle"})," easier."]}),"\n",(0,o.jsxs)(n.p,{children:["To achieve this goal, we will need to package several ",(0,o.jsx)(n.code,{children:"bouncy-castle"})," jars together into ",(0,o.jsx)(n.code,{children:"bouncy-castle-bc"})," or ",(0,o.jsx)(n.code,{children:"bouncy-castle-bcfips"})," jar.\nEach of the original bouncy-castle jars is related to security, so BouncyCastle dutifully supplies signed of each jar.\nBut when we do the re-package, Maven shade explodes the BouncyCastle jar file which puts the signatures into META-INF,\nthese signatures aren't valid for this new, uber-jar (signatures are only for the original BC jar).\nUsually, You will meet error like ",(0,o.jsx)(n.code,{children:"java.lang.SecurityException: Invalid signature file digest for Manifest main attributes"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"You can exclude these signatures in the mvn pom file to avoid the above error."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<exclude>META-INF/*.SF</exclude>\n<exclude>META-INF/*.DSA</exclude>\n<exclude>META-INF/*.RSA</exclude>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["But it can also lead to new, cryptic errors, e.g. ",(0,o.jsx)(n.code,{children:"java.security.NoSuchAlgorithmException: PBEWithSHA256And256BitAES-CBC-BC SecretKeyFactory not available"}),"\nBy explicitly specifying where to find the algorithm like this: ",(0,o.jsx)(n.code,{children:'SecretKeyFactory.getInstance("PBEWithSHA256And256BitAES-CBC-BC","BC")'}),"\nIt will get the real error: ",(0,o.jsx)(n.code,{children:"java.security.NoSuchProviderException: JCE cannot authenticate the provider BC"})]}),"\n",(0,o.jsxs)(n.p,{children:["So, we used a ",(0,o.jsx)(n.a,{href:"https://github.com/nthuemmel/executable-packer-maven-plugin",children:"executable packer plugin"})," that uses a jar-in-jar approach to preserve the BouncyCastle signature in a single, executable jar."]}),"\n",(0,o.jsx)(n.h3,{id:"include-dependencies-of-bc-non-fips",children:"Include dependencies of BC-non-FIPS"}),"\n",(0,o.jsxs)(n.p,{children:["Pulsar module ",(0,o.jsx)(n.code,{children:"bouncy-castle-bc"}),", which is defined by ",(0,o.jsx)(n.code,{children:"bouncy-castle/bc/pom.xml"})," contains the needed non-FIPS jars for Pulsar, and packaged as a jar-in-jar(need to provide ",(0,o.jsx)(n.code,{children:"<classifier>pkg</classifier>"}),")."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>org.bouncycastle</groupId>\n  <artifactId>bcpkix-jdk15on</artifactId>\n  <version>${bouncycastle.version}</version>\n</dependency>\n\n<dependency>\n  <groupId>org.bouncycastle</groupId>\n  <artifactId>bcprov-ext-jdk15on</artifactId>\n  <version>${bouncycastle.version}</version>\n</dependency>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["By using this ",(0,o.jsx)(n.code,{children:"bouncy-castle-bc"})," module, you can easily include and exclude BouncyCastle non-FIPS jars."]}),"\n",(0,o.jsxs)(n.h3,{id:"modules-that-include-bc-non-fips-module-bouncy-castle-bc",children:["Modules that include BC-non-FIPS module (",(0,o.jsx)(n.code,{children:"bouncy-castle-bc"}),")"]}),"\n",(0,o.jsxs)(n.p,{children:["For Pulsar client, user need the bouncy-castle module, so ",(0,o.jsx)(n.code,{children:"pulsar-client-original"})," will include the ",(0,o.jsx)(n.code,{children:"bouncy-castle-bc"})," module, and have ",(0,o.jsx)(n.code,{children:"<classifier>pkg</classifier>"})," set to reference the ",(0,o.jsx)(n.code,{children:"jar-in-jar"})," package.\nIt is included as the following example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>bouncy-castle-bc</artifactId>\n  <version>${pulsar.version}</version>\n  <classifier>pkg</classifier>\n</dependency>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["By default ",(0,o.jsx)(n.code,{children:"bouncy-castle-bc"})," already included in ",(0,o.jsx)(n.code,{children:"pulsar-client-original"}),", And ",(0,o.jsx)(n.code,{children:"pulsar-client-original"})," has been included in a lot of other modules like ",(0,o.jsx)(n.code,{children:"pulsar-client-admin"}),", ",(0,o.jsx)(n.code,{children:"pulsar-broker"}),".\nBut for the above shaded jar and signatures reason, we should not package Pulsar's ",(0,o.jsx)(n.code,{children:"bouncy-castle"})," module into ",(0,o.jsx)(n.code,{children:"pulsar-client-all"})," other shaded modules directly, such as ",(0,o.jsx)(n.code,{children:"pulsar-client-shaded"}),", ",(0,o.jsx)(n.code,{children:"pulsar-client-admin-shaded"})," and ",(0,o.jsx)(n.code,{children:"pulsar-broker-shaded"}),".\nSo in the shaded modules, we will exclude the ",(0,o.jsx)(n.code,{children:"bouncy-castle"})," modules."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<filters>\n  <filter>\n    <artifact>org.apache.pulsar:pulsar-client-original</artifact>\n    <includes>\n      <include>**</include>\n    </includes>\n    <excludes>\n      <exclude>org/bouncycastle/**</exclude>\n    </excludes>\n  </filter>\n</filters>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["That means, ",(0,o.jsx)(n.code,{children:"bouncy-castle"})," related jars are not shaded in these fat jars."]}),"\n",(0,o.jsxs)(n.h3,{id:"module-bc-fips-bouncy-castle-bcfips",children:["Module BC-FIPS (",(0,o.jsx)(n.code,{children:"bouncy-castle-bcfips"}),")"]}),"\n",(0,o.jsxs)(n.p,{children:["Pulsar module ",(0,o.jsx)(n.code,{children:"bouncy-castle-bcfips"}),", which is defined by ",(0,o.jsx)(n.code,{children:"bouncy-castle/bcfips/pom.xml"}),", contains the needed FIPS jars for Pulsar.\nSimilar to ",(0,o.jsx)(n.code,{children:"bouncy-castle-bc"}),", ",(0,o.jsx)(n.code,{children:"bouncy-castle-bcfips"})," is also packaged as a ",(0,o.jsx)(n.code,{children:"jar-in-jar"})," package for easy include/exclude."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>org.bouncycastle</groupId>\n  <artifactId>bc-fips</artifactId>\n  <version>${bouncycastle.bc-fips.version}</version>\n</dependency>\n\n<dependency>\n  <groupId>org.bouncycastle</groupId>\n  <artifactId>bcpkix-fips</artifactId>\n  <version>${bouncycastle.bcpkix-fips.version}</version>\n</dependency>\n"})}),"\n",(0,o.jsx)(n.h3,{id:"exclude-bc-non-fips-and-include-bc-fips",children:"Exclude BC-non-FIPS and include BC-FIPS"}),"\n",(0,o.jsxs)(n.p,{children:["If you want to switch from BC-non-FIPS to BC-FIPS version, Here is an example for ",(0,o.jsx)(n.code,{children:"pulsar-broker"})," module:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>pulsar-broker</artifactId>\n  <version>${pulsar.version}</version>\n  <exclusions>\n    <exclusion>\n      <groupId>org.apache.pulsar</groupId>\n      <artifactId>bouncy-castle-bc</artifactId>\n    </exclusion>\n  </exclusions>\n</dependency>\n\n<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>bouncy-castle-bcfips</artifactId>\n  <version>${pulsar.version}</version>\n  <classifier>pkg</classifier>\n</dependency>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For more example, you can reference module ",(0,o.jsx)(n.code,{children:"bcfips-include-test"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>a,x:()=>r});var s=c(96540);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);