"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[31581],{48399:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"client-libraries-dotnet-use","title":"Use C# client","description":"Learn how to use C# client in Pulsar.","source":"@site/versioned_docs/version-3.2.x/client-libraries-dotnet-use.md","sourceDirName":".","slug":"/client-libraries-dotnet-use","permalink":"/docs/3.2.x/client-libraries-dotnet-use","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/client-libraries-dotnet-use.md","tags":[],"version":"3.2.x","frontMatter":{"id":"client-libraries-dotnet-use","title":"Use C# client","sidebar_label":"Use","description":"Learn how to use C# client in Pulsar."},"sidebar":"docsSidebar","previous":{"title":"Initialize","permalink":"/docs/3.2.x/client-libraries-dotnet-initialize"},"next":{"title":"WebSocket","permalink":"/docs/3.2.x/client-libraries-websocket"}}');var r=t(74848),i=t(28453);const a={id:"client-libraries-dotnet-use",title:"Use C# client",sidebar_label:"Use",description:"Learn how to use C# client in Pulsar."},c=void 0,d={},o=[{value:"Create a producer",id:"create-a-producer",level:2},{value:"Monitor",id:"monitor",level:3},{value:"Create a consumer",id:"create-a-consumer",level:2},{value:"Monitor",id:"monitor-1",level:3},{value:"Create a reader",id:"create-a-reader",level:2},{value:"Monitor",id:"monitor-2",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This section introduces some hands-on examples to get started with using the Pulsar C# client."}),"\n",(0,r.jsx)(n.h2,{id:"create-a-producer",children:"Create a producer"}),"\n",(0,r.jsx)(n.p,{children:"This section describes how to create a producer."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a producer by using the builder."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'using DotPulsar;\nusing DotPulsar.Extensions;\n\nvar producer = client.NewProducer()\n                     .Topic("persistent://public/default/mytopic")\n                     .Create();\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a producer without using the builder."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'using DotPulsar;\n\nvar options = new ProducerOptions<byte[]>("persistent://public/default/mytopic", Schema.ByteArray);\nvar producer = client.CreateProducer(options);\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"monitor",children:"Monitor"}),"\n",(0,r.jsx)(n.p,{children:"This example shows how to monitor the producer's state."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'private static async ValueTask Monitor(IProducer producer, CancellationToken cancellationToken)\n{\n    var state = ProducerState.Disconnected;\n\n    while (!cancellationToken.IsCancellationRequested)\n    {\n        state = (await producer.StateChangedFrom(state, cancellationToken)).ProducerState;\n\n        var stateMessage = state switch\n        {\n            ProducerState.Connected => $"The producer is connected",\n            ProducerState.Disconnected => $"The producer is disconnected",\n            ProducerState.Closed => $"The producer has closed",\n            ProducerState.Faulted => $"The producer has faulted",\n            ProducerState.PartiallyConnected => $"The producer is partially connected.",\n            _ => $"The producer has an unknown state \'{state}\'"\n        };\n\n        Console.WriteLine(stateMessage);\n\n        if (producer.IsFinalState(state))\n            return;\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"The following table lists states available for the producer."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"State"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Closed"}),(0,r.jsx)(n.td,{children:"The producer or the Pulsar client has been disposed."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Connected"}),(0,r.jsx)(n.td,{children:"All is well."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Disconnected"}),(0,r.jsx)(n.td,{children:"The connection is lost and attempts are being made to reconnect."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Faulted"}),(0,r.jsx)(n.td,{children:"An unrecoverable error has occurred."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PartiallyConnected"}),(0,r.jsx)(n.td,{children:"Some of the sub-producers are disconnected."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"create-a-consumer",children:"Create a consumer"}),"\n",(0,r.jsx)(n.p,{children:"This section describes how to create a consumer."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a consumer by using the builder."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'using DotPulsar;\nusing DotPulsar.Extensions;\n\nvar consumer = client.NewConsumer()\n                     .SubscriptionName("MySubscription")\n                     .Topic("persistent://public/default/mytopic")\n                     .Create();\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a consumer without using the builder."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'using DotPulsar;\n\nvar options = new ConsumerOptions<byte[]>("MySubscription", "persistent://public/default/mytopic", Schema.ByteArray);\nvar consumer = client.CreateConsumer(options);\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"monitor-1",children:"Monitor"}),"\n",(0,r.jsx)(n.p,{children:"This example shows how to monitor the consumer's state."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'private static async ValueTask Monitor(IConsumer consumer, CancellationToken cancellationToken)\n{\n    var state = ConsumerState.Disconnected;\n\n    while (!cancellationToken.IsCancellationRequested)\n    {\n        state = (await consumer.StateChangedFrom(state, cancellationToken)).ConsumerState;\n\n        var stateMessage = state switch\n        {\n            ConsumerState.Active => "The consumer is active",\n            ConsumerState.Inactive => "The consumer is inactive",\n            ConsumerState.Disconnected => "The consumer is disconnected",\n            ConsumerState.Closed => "The consumer has closed",\n            ConsumerState.ReachedEndOfTopic => "The consumer has reached end of topic",\n            ConsumerState.Faulted => "The consumer has faulted",\n            ConsumerState.Unsubscribed => "The consumer is unsubscribed.",\n            _ => $"The consumer has an unknown state \'{state}\'"\n        };\n\n        Console.WriteLine(stateMessage);\n\n        if (consumer.IsFinalState(state))\n            return;\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"The following table lists states available for the consumer."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"State"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Active"}),(0,r.jsx)(n.td,{children:"All is well."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Inactive"}),(0,r.jsxs)(n.td,{children:["All is well. The subscription type is ",(0,r.jsx)(n.code,{children:"Failover"})," and you are not the active consumer."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Closed"}),(0,r.jsx)(n.td,{children:"The consumer or the Pulsar client has been disposed."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Disconnected"}),(0,r.jsx)(n.td,{children:"The connection is lost and attempts are being made to reconnect."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Faulted"}),(0,r.jsx)(n.td,{children:"An unrecoverable error has occurred."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ReachedEndOfTopic"}),(0,r.jsx)(n.td,{children:"No more messages are delivered."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Unsubscribed"}),(0,r.jsx)(n.td,{children:"The consumer has unsubscribed."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"create-a-reader",children:"Create a reader"}),"\n",(0,r.jsx)(n.p,{children:"This section describes how to create a reader."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a reader by using the builder."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'using DotPulsar;\nusing DotPulsar.Extensions;\n\nvar reader = client.NewReader()\n                   .StartMessageId(MessageId.Earliest)\n                   .Topic("persistent://public/default/mytopic")\n                   .Create();\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a reader without using the builder."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'using DotPulsar;\n\nvar options = new ReaderOptions<byte[]>(MessageId.Earliest, "persistent://public/default/mytopic", Schema.ByteArray);\nvar reader = client.CreateReader(options);\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"monitor-2",children:"Monitor"}),"\n",(0,r.jsx)(n.p,{children:"This example shows how to monitor the reader's state."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'private static async ValueTask Monitor(IReader reader, CancellationToken cancellationToken)\n{\n    var state = ReaderState.Disconnected;\n\n    while (!cancellationToken.IsCancellationRequested)\n    {\n        state = (await reader.StateChangedFrom(state, cancellationToken)).ReaderState;\n\n        var stateMessage = state switch\n        {\n            ReaderState.Connected => "The reader is connected",\n            ReaderState.Disconnected => "The reader is disconnected",\n            ReaderState.Closed => "The reader has closed",\n            ReaderState.ReachedEndOfTopic => "The reader has reached end of topic",\n            ReaderState.Faulted => "The reader has faulted",\n            _ => $"The reader has an unknown state \'{state}\'"\n        };\n\n        Console.WriteLine(stateMessage);\n\n        if (reader.IsFinalState(state))\n            return;\n    }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"The following table lists states available for the reader."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"State"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Closed"}),(0,r.jsx)(n.td,{children:"The reader or the Pulsar client has been disposed."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Connected"}),(0,r.jsx)(n.td,{children:"All is well."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Disconnected"}),(0,r.jsx)(n.td,{children:"The connection is lost and attempts are being made to reconnect."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Faulted"}),(0,r.jsx)(n.td,{children:"An unrecoverable error has occurred."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ReachedEndOfTopic"}),(0,r.jsx)(n.td,{children:"No more messages are delivered."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);