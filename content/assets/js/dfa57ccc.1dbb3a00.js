"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[75175],{1764:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"develop-cpp","title":"Building Pulsar C++ client","description":"Supported platforms","source":"@site/versioned_docs/version-2.3.0/develop-cpp.md","sourceDirName":".","slug":"/develop-cpp","permalink":"/docs/2.3.0/develop-cpp","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.0/develop-cpp.md","tags":[],"version":"2.3.0","frontMatter":{"id":"develop-cpp","title":"Building Pulsar C++ client","sidebar_label":"Building Pulsar C++ client","original_id":"develop-cpp"},"sidebar":"docsSidebar","previous":{"title":"Modular load manager","permalink":"/docs/2.3.0/develop-load-manager"},"next":{"title":"Terminology","permalink":"/docs/2.3.0/reference-terminology"}}');var o=n(74848),i=n(28453);const r={id:"develop-cpp",title:"Building Pulsar C++ client",sidebar_label:"Building Pulsar C++ client",original_id:"develop-cpp"},t=void 0,c={},a=[{value:"Supported platforms",id:"supported-platforms",level:2},{value:"System requirements",id:"system-requirements",level:2},{value:"Compilation",id:"compilation",level:2},{value:"Linux",id:"linux",level:3},{value:"MacOS",id:"macos",level:3}];function d(e){const l={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.h2,{id:"supported-platforms",children:"Supported platforms"}),"\n",(0,o.jsxs)(l.p,{children:["The Pulsar C++ client has been successfully tested on ",(0,o.jsx)(l.strong,{children:"MacOS"})," and ",(0,o.jsx)(l.strong,{children:"Linux"}),"."]}),"\n",(0,o.jsx)(l.h2,{id:"system-requirements",children:"System requirements"}),"\n",(0,o.jsx)(l.p,{children:"You need to have the following installed to use the C++ client:"}),"\n",(0,o.jsxs)(l.ul,{children:["\n",(0,o.jsx)(l.li,{children:(0,o.jsx)(l.a,{href:"https://cmake.org/",children:"CMake"})}),"\n",(0,o.jsx)(l.li,{children:(0,o.jsx)(l.a,{href:"http://www.boost.org/",children:"Boost"})}),"\n",(0,o.jsxs)(l.li,{children:[(0,o.jsx)(l.a,{href:"https://developers.google.com/protocol-buffers/",children:"Protocol Buffers"})," 2.6"]}),"\n",(0,o.jsx)(l.li,{children:(0,o.jsx)(l.a,{href:"https://logging.apache.org/log4cxx",children:"Log4CXX"})}),"\n",(0,o.jsx)(l.li,{children:(0,o.jsx)(l.a,{href:"https://curl.haxx.se/libcurl/",children:"libcurl"})}),"\n",(0,o.jsx)(l.li,{children:(0,o.jsx)(l.a,{href:"https://github.com/google/googletest",children:"Google Test"})}),"\n",(0,o.jsx)(l.li,{children:(0,o.jsx)(l.a,{href:"https://github.com/open-source-parsers/jsoncpp",children:"JsonCpp"})}),"\n"]}),"\n",(0,o.jsx)(l.h2,{id:"compilation",children:"Compilation"}),"\n",(0,o.jsxs)(l.p,{children:["There are separate compilation instructions for ",(0,o.jsx)(l.a,{href:"#macos",children:"MacOS"})," and ",(0,o.jsx)(l.a,{href:"#linux",children:"Linux"}),". For both systems, start by cloning the Pulsar repository:"]}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-shell",children:"\n$ git clone https://github.com/apache/pulsar\n\n"})}),"\n",(0,o.jsx)(l.h3,{id:"linux",children:"Linux"}),"\n",(0,o.jsx)(l.p,{children:"First, install all of the necessary dependencies:"}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-shell",children:"\n$ apt-get install cmake libssl-dev libcurl4-openssl-dev liblog4cxx-dev \\\n  libprotobuf-dev protobuf-compiler libboost-all-dev google-mock libgtest-dev libjsoncpp-dev\n\n"})}),"\n",(0,o.jsxs)(l.p,{children:["Then compile and install ",(0,o.jsx)(l.a,{href:"https://github.com/google/googletest",children:"Google Test"}),":"]}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-shell",children:"\n# libgtest-dev version is 1.18.0 or above\n$ cd /usr/src/googletest\n$ sudo cmake .\n$ sudo make\n$ sudo cp ./googlemock/libgmock.a ./googlemock/gtest/libgtest.a /usr/lib/\n\n# less than 1.18.0\n$ cd /usr/src/gtest\n$ sudo cmake .\n$ sudo make\n$ sudo cp libgtest.a /usr/lib\n\n$ cd /usr/src/gmock\n$ sudo cmake .\n$ sudo make\n$ sudo cp libgmock.a /usr/lib\n\n"})}),"\n",(0,o.jsx)(l.p,{children:"Finally, compile the Pulsar client library for C++ inside the Pulsar repo:"}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-shell",children:"\n$ cd pulsar-client-cpp\n$ cmake .\n$ make\n\n"})}),"\n",(0,o.jsxs)(l.p,{children:["The resulting files, ",(0,o.jsx)(l.code,{children:"libpulsar.so"})," and ",(0,o.jsx)(l.code,{children:"libpulsar.a"}),", will be placed in the ",(0,o.jsx)(l.code,{children:"lib"})," folder of the repo while two tools, ",(0,o.jsx)(l.code,{children:"perfProducer"})," and ",(0,o.jsx)(l.code,{children:"perfConsumer"}),", will be placed in the ",(0,o.jsx)(l.code,{children:"perf"})," directory."]}),"\n",(0,o.jsx)(l.h3,{id:"macos",children:"MacOS"}),"\n",(0,o.jsx)(l.p,{children:"First, install all of the necessary dependencies:"}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-shell",children:"\n# OpenSSL installation\n$ brew install openssl\n$ export OPENSSL_INCLUDE_DIR=/usr/local/opt/openssl/include/\n$ export OPENSSL_ROOT_DIR=/usr/local/opt/openssl/\n\n# Protocol Buffers installation\n$ brew tap homebrew/versions\n$ brew install protobuf260\n$ brew install boost\n$ brew install log4cxx\n\n# Google Test installation\n$ git clone https://github.com/google/googletest.git\n$ cd googletest\n$ git checkout release-1.12.1\n$ cmake .\n$ make install\n\n"})}),"\n",(0,o.jsx)(l.p,{children:"Then compile the Pulsar client library in the repo that you cloned:"}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-shell",children:"\n$ cd pulsar-client-cpp\n$ cmake .\n$ make\n\n"})})]})}function p(e={}){const{wrapper:l}={...(0,i.R)(),...e.components};return l?(0,o.jsx)(l,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,l,n)=>{n.d(l,{R:()=>r,x:()=>t});var s=n(96540);const o={},i=s.createContext(o);function r(e){const l=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function t(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:l},e.children)}}}]);