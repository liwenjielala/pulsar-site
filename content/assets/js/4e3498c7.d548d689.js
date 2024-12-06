"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[65938],{48648:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"io-elasticsearch-sink","title":"ElasticSearch sink connector","description":"The ElasticSearch sink connector pulls messages from Pulsar topics and persists the messages to indexes.","source":"@site/versioned_docs/version-2.7.5/io-elasticsearch-sink.md","sourceDirName":".","slug":"/io-elasticsearch-sink","permalink":"/docs/2.7.5/io-elasticsearch-sink","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.5/io-elasticsearch-sink.md","tags":[],"version":"2.7.5","frontMatter":{"id":"io-elasticsearch-sink","title":"ElasticSearch sink connector","sidebar_label":"ElasticSearch sink connector","original_id":"io-elasticsearch-sink"}}');var r=n(74848),c=n(28453);const l={id:"io-elasticsearch-sink",title:"ElasticSearch sink connector",sidebar_label:"ElasticSearch sink connector",original_id:"io-elasticsearch-sink"},t=void 0,a={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:2},{value:"Configuration",id:"configuration-1",level:3},{value:"For Elasticsearch After 6.2",id:"for-elasticsearch-after-62",level:4},{value:"For Elasticsearch Before 6.2",id:"for-elasticsearch-before-62",level:4},{value:"Usage",id:"usage",level:3}];function o(e){const s={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"The ElasticSearch sink connector pulls messages from Pulsar topics and persists the messages to indexes."}),"\n",(0,r.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(s.p,{children:"The configuration of the ElasticSearch sink connector has the following properties."}),"\n",(0,r.jsx)(s.h3,{id:"property",children:"Property"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Required"}),(0,r.jsx)(s.th,{children:"Default"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"elasticSearchUrl"})}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"true"}),(0,r.jsx)(s.td,{children:'" " (empty string)'}),(0,r.jsx)(s.td,{children:"The URL of elastic search cluster to which the connector connects."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"indexName"})}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"true"}),(0,r.jsx)(s.td,{children:'" " (empty string)'}),(0,r.jsx)(s.td,{children:"The index name to which the connector writes messages."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"typeName"})}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:'"_doc"'}),(0,r.jsxs)(s.td,{children:["The type name to which the connector writes messages to. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),' The value should be set explicitly to a valid type name other than "_doc" for Elasticsearch version before 6.2, and left to default otherwise.']})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"indexNumberOfShards"})}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"The number of shards of the index."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"indexNumberOfReplicas"})}),(0,r.jsx)(s.td,{children:"int"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"The number of replicas of the index."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"username"})}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:'" " (empty string)'}),(0,r.jsxs)(s.td,{children:["The username used by the connector to connect to the elastic search cluster. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"If ",(0,r.jsx)(s.code,{children:"username"})," is set, then ",(0,r.jsx)(s.code,{children:"password"})," should also be provided."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"password"})}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:'" " (empty string)'}),(0,r.jsxs)(s.td,{children:["The password used by the connector to connect to the elastic search cluster. ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"If ",(0,r.jsx)(s.code,{children:"username"})," is set, then ",(0,r.jsx)(s.code,{children:"password"})," should also be provided."]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.p,{children:"Before using the ElasticSearch sink connector, you need to create a configuration file through one of the following methods."}),"\n",(0,r.jsx)(s.h3,{id:"configuration-1",children:"Configuration"}),"\n",(0,r.jsx)(s.h4,{id:"for-elasticsearch-after-62",children:"For Elasticsearch After 6.2"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"JSON"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'\n{\n    "elasticSearchUrl": "http://localhost:9200",\n    "indexName": "my_index",\n    "username": "scooby",\n    "password": "doobie"\n}\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"YAML"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'\nconfigs:\n    elasticSearchUrl: "http://localhost:9200"\n    indexName: "my_index"\n    username: "scooby"\n    password: "doobie"\n\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"for-elasticsearch-before-62",children:"For Elasticsearch Before 6.2"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"JSON"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'\n{\n    "elasticSearchUrl": "http://localhost:9200",\n    "indexName": "my_index",\n    "typeName": "doc",\n    "username": "scooby",\n    "password": "doobie"\n}\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"YAML"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'\nconfigs:\n    elasticSearchUrl: "http://localhost:9200"\n    indexName: "my_index"\n    typeName: "doc"\n    username: "scooby"\n    password: "doobie"\n\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Start a single node Elasticsearch cluster."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'\n$ docker run -p 9200:9200 -p 9300:9300 \\\n    -e "discovery.type=single-node" \\\n    docker.elastic.co/elasticsearch/elasticsearch:7.5.1\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Start a Pulsar service locally in standalone mode."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"\n$ bin/pulsar standalone\n\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Make sure the NAR file is available at ",(0,r.jsx)(s.code,{children:"connectors/pulsar-io-elastic-search-2.7.5.nar"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Start the Pulsar Elasticsearch connector in local run mode using one of the following methods."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Use the ",(0,r.jsx)(s.strong,{children:"JSON"})," configuration as shown previously."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'\n$ bin/pulsar-admin sinks localrun \\\n    --archive connectors/pulsar-io-elastic-search-2.7.5.nar \\\n    --tenant public \\\n    --namespace default \\\n    --name elasticsearch-test-sink \\\n    --sink-config \'{"elasticSearchUrl":"http://localhost:9200","indexName": "my_index","username": "scooby","password": "doobie"}\' \\\n    --inputs elasticsearch_test\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Use the ",(0,r.jsx)(s.strong,{children:"YAML"})," configuration file as shown previously."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"\n$ bin/pulsar-admin sinks localrun \\\n    --archive connectors/pulsar-io-elastic-search-2.7.5.nar \\\n    --tenant public \\\n    --namespace default \\\n    --name elasticsearch-test-sink \\\n    --sink-config-file elasticsearch-sink.yml \\\n    --inputs elasticsearch_test\n\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Publish records to the topic."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'\n$ bin/pulsar-client produce elasticsearch_test --messages "{\\"a\\":1}"\n\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Check documents in Elasticsearch."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"refresh the index"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"\n    $ curl -s http://localhost:9200/my_index/_refresh\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"search documents"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"\n    $ curl -s http://localhost:9200/my_index/_search\n\n"})}),"\n",(0,r.jsx)(s.p,{children:"You can see the record that published earlier has been successfully written into Elasticsearch."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'\n{"took":2,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":1,"relation":"eq"},"max_score":1.0,"hits":[{"_index":"my_index","_type":"_doc","_id":"FSxemm8BLjG_iC0EeTYJ","_score":1.0,"_source":{"a":1}}]}}\n\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>t});var i=n(96540);const r={},c=i.createContext(r);function l(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);