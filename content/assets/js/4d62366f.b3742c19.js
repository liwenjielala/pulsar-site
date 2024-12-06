"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[88724],{22230:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"client-libraries-dotnet","title":"Pulsar C# client","description":"You can use the Pulsar C# client (DotPulsar) to create Pulsar producers and consumers in C#. All the methods in the producer, consumer, and reader of a C# client are thread-safe. The official documentation for DotPulsar is available here.","source":"@site/versioned_docs/version-2.3.1/client-libraries-dotnet.md","sourceDirName":".","slug":"/client-libraries-dotnet","permalink":"/docs/2.3.1/client-libraries-dotnet","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.1/client-libraries-dotnet.md","tags":[],"version":"2.3.1","frontMatter":{"id":"client-libraries-dotnet","title":"Pulsar C# client","sidebar_label":"C#","original_id":"client-libraries-dotnet"}}');var t=s(74848),i=s(28453);const a={id:"client-libraries-dotnet",title:"Pulsar C# client",sidebar_label:"C#",original_id:"client-libraries-dotnet"},c=void 0,l={},d=[{value:"Installation",id:"installation",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Procedures",id:"procedures",level:3},{value:"Client",id:"client",level:2},{value:"Create client",id:"create-client",level:3},{value:"Create producer",id:"create-producer",level:3},{value:"Create consumer",id:"create-consumer",level:3},{value:"Create reader",id:"create-reader",level:3},{value:"Configure encryption policies",id:"configure-encryption-policies",level:3},{value:"Configure authentication",id:"configure-authentication",level:3},{value:"Producer",id:"producer",level:2},{value:"Send data",id:"send-data",level:2},{value:"Send messages with customized metadata",id:"send-messages-with-customized-metadata",level:3},{value:"Consumer",id:"consumer",level:2},{value:"Receive messages",id:"receive-messages",level:3},{value:"Acknowledge messages",id:"acknowledge-messages",level:3},{value:"Unsubscribe from topics",id:"unsubscribe-from-topics",level:3},{value:"Note",id:"note",level:4},{value:"Reader",id:"reader",level:2},{value:"Monitoring",id:"monitoring",level:2},{value:"Monitor producer",id:"monitor-producer",level:3},{value:"Monitor consumer state",id:"monitor-consumer-state",level:3},{value:"Monitor reader state",id:"monitor-reader-state",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["You can use the Pulsar C# client (DotPulsar) to create Pulsar producers and consumers in C#. All the methods in the producer, consumer, and reader of a C# client are thread-safe. The official documentation for DotPulsar is available ",(0,t.jsx)(n.a,{href:"https://github.com/apache/pulsar-dotpulsar/wiki",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["You can install the Pulsar C# client library either through the dotnet CLI or through the Visual Studio. This section describes how to install the Pulsar C# client library through the dotnet CLI. For information about how to install the Pulsar C# client library through the Visual Studio, see ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/visualstudio/mac/nuget-walkthrough?view=vsmac-2019",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["Install the ",(0,t.jsx)(n.a,{href:"https://dotnet.microsoft.com/download/",children:".NET Core SDK"}),", which provides the dotnet command-line tool. Starting in Visual Studio 2017, the dotnet CLI is automatically installed with any .NET Core related workloads."]}),"\n",(0,t.jsx)(n.h3,{id:"procedures",children:"Procedures"}),"\n",(0,t.jsx)(n.p,{children:"To install the Pulsar C# client library, following these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a project."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a folder for the project."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open a terminal window and switch to the new folder."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create the project using the following command."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\ndotnet new console\n\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"dotnet run"})," to test that the app has been created properly."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add the DotPulsar NuGet package."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the following command to install the ",(0,t.jsx)(n.code,{children:"DotPulsar"})," package."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\ndotnet add package DotPulsar\n\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["After the command completes, open the ",(0,t.jsx)(n.code,{children:".csproj"})," file to see the added reference."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'\n<ItemGroup>\n  <PackageReference Include="DotPulsar" Version="0.11.0" />\n</ItemGroup>\n\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"client",children:"Client"}),"\n",(0,t.jsx)(n.p,{children:"This section describes some configuration examples for the Pulsar C# client."}),"\n",(0,t.jsx)(n.h3,{id:"create-client",children:"Create client"}),"\n",(0,t.jsx)(n.p,{children:"This example shows how to create a Pulsar C# client connected to localhost."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:"\nvar client = PulsarClient.Builder().Build();\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"To create a Pulsar C# client by using the builder, you can specify the following options."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Option"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ServiceUrl"}),(0,t.jsx)(n.td,{children:"Set the service URL for the Pulsar cluster."}),(0,t.jsx)(n.td,{children:"pulsar://localhost:6650"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"RetryInterval"}),(0,t.jsx)(n.td,{children:"Set the time to wait before retrying an operation or a reconnection."}),(0,t.jsx)(n.td,{children:"3s"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"create-producer",children:"Create producer"}),"\n",(0,t.jsx)(n.p,{children:"This section describes how to create a producer."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a producer by using the builder."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:'\nvar producer = client.NewProducer()\n                     .Topic("persistent://public/default/mytopic")\n                     .Create();\n\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a producer without using the builder."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:'\nvar options = new ProducerOptions("persistent://public/default/mytopic");\nvar producer = client.CreateProducer(options);\n\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-consumer",children:"Create consumer"}),"\n",(0,t.jsx)(n.p,{children:"This section describes how to create a consumer."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a consumer by using the builder."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:'\nvar consumer = client.NewConsumer()\n                     .SubscriptionName("MySubscription")\n                     .Topic("persistent://public/default/mytopic")\n                     .Create();\n\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a consumer without using the builder."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:'\nvar options = new ConsumerOptions("MySubscription", "persistent://public/default/mytopic");\nvar consumer = client.CreateConsumer(options);\n\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-reader",children:"Create reader"}),"\n",(0,t.jsx)(n.p,{children:"This section describes how to create a reader."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a reader by using the builder."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:'\nvar reader = client.NewReader()\n                   .StartMessageId(MessageId.Earliest)\n                   .Topic("persistent://public/default/mytopic")\n                   .Create();\n\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a reader without using the builder."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:'\nvar options = new ReaderOptions(MessageId.Earliest, "persistent://public/default/mytopic");\nvar reader = client.CreateReader(options);\n\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configure-encryption-policies",children:"Configure encryption policies"}),"\n",(0,t.jsx)(n.p,{children:"The Pulsar C# client supports four kinds of encryption policies:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"EnforceUnencrypted"}),": always use unencrypted connections."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"EnforceEncrypted"}),": always use encrypted connections)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PreferUnencrypted"}),": use unencrypted connections, if possible."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PreferEncrypted"}),": use encrypted connections, if possible."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This example shows how to set the ",(0,t.jsx)(n.code,{children:"EnforceUnencrypted"})," encryption policy."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:"\nvar client = PulsarClient.Builder()\n                         .ConnectionSecurity(EncryptionPolicy.EnforceEncrypted)\n                         .Build();\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"configure-authentication",children:"Configure authentication"}),"\n",(0,t.jsx)(n.p,{children:"Currently, the Pulsar C# client supports the TLS (Transport Layer Security) and JWT (JSON Web Token) authentication."}),"\n",(0,t.jsxs)(n.p,{children:["If you have followed ",(0,t.jsx)(n.a,{href:"/docs/2.3.1/security-tls-authentication",children:"Authentication using TLS"}),", you get a certificate and a key. To use them from the Pulsar C# client, follow these steps:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create an unencrypted and password-less pfx file."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:"\nopenssl pkcs12 -export -keypbe NONE -certpbe NONE -out admin.pfx -inkey admin.key.pem -in admin.cert.pem -passout pass:\n\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the admin.pfx file to create an X509Certificate2 and pass it to the Pulsar C# client."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:'\nvar clientCertificate = new X509Certificate2("admin.pfx");\nvar client = PulsarClient.Builder()\n                         .AuthenticateUsingClientCertificate(clientCertificate)\n                         .Build();\n\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"producer",children:"Producer"}),"\n",(0,t.jsx)(n.p,{children:"A producer is a process that attaches to a topic and publishes messages to a Pulsar broker for processing. This section describes some configuration examples about the producer."}),"\n",(0,t.jsx)(n.h2,{id:"send-data",children:"Send data"}),"\n",(0,t.jsx)(n.p,{children:"This example shows how to send data."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:'\nvar data = Encoding.UTF8.GetBytes("Hello World");\nawait producer.Send(data);\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"send-messages-with-customized-metadata",children:"Send messages with customized metadata"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Send messages with customized metadata by using the builder."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:'\nvar data = Encoding.UTF8.GetBytes("Hello World");\nvar messageId = await producer.NewMessage()\n                              .Property("SomeKey", "SomeValue")\n                              .Send(data);\n\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Send messages with customized metadata without using the builder."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:'\nvar data = Encoding.UTF8.GetBytes("Hello World");\nvar metadata = new MessageMetadata();\nmetadata["SomeKey"] = "SomeValue";\nvar messageId = await producer.Send(metadata, data));\n\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"consumer",children:"Consumer"}),"\n",(0,t.jsx)(n.p,{children:"A consumer is a process that attaches to a topic through a subscription and then receives messages. This section describes some configuration examples about the consumer."}),"\n",(0,t.jsx)(n.h3,{id:"receive-messages",children:"Receive messages"}),"\n",(0,t.jsx)(n.p,{children:"This example shows how a consumer receives messages from a topic."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:'\nawait foreach (var message in consumer.Messages())\n{\n    Console.WriteLine("Received: " + Encoding.UTF8.GetString(message.Data.ToArray()));\n}\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"acknowledge-messages",children:"Acknowledge messages"}),"\n",(0,t.jsxs)(n.p,{children:["Messages can be acknowledged individually or cumulatively. For details about message acknowledgement, see ",(0,t.jsx)(n.a,{href:"/docs/2.3.1/concepts-messaging#acknowledgement",children:"acknowledgement"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Acknowledge messages individually."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:'\nawait foreach (var message in consumer.Messages())\n{\n    Console.WriteLine("Received: " + Encoding.UTF8.GetString(message.Data.ToArray()));\n}\n\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Acknowledge messages cumulatively."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:"\nawait consumer.AcknowledgeCumulative(message);\n\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"unsubscribe-from-topics",children:"Unsubscribe from topics"}),"\n",(0,t.jsx)(n.p,{children:"This example shows how a consumer unsubscribes from a topic."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:"\nawait consumer.Unsubscribe();\n\n"})}),"\n",(0,t.jsx)(n.h4,{id:"note",children:"Note"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"A consumer cannot be used and is disposed once the consumer unsubscribes from a topic."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"reader",children:"Reader"}),"\n",(0,t.jsx)(n.p,{children:"A reader is actually just a consumer without a cursor. This means that Pulsar does not keep track of your progress and there is no need to acknowledge messages."}),"\n",(0,t.jsx)(n.p,{children:"This example shows how a reader receives messages."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:'\nawait foreach (var message in reader.Messages())\n{\n    Console.WriteLine("Received: " + Encoding.UTF8.GetString(message.Data.ToArray()));\n}\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"monitoring",children:"Monitoring"}),"\n",(0,t.jsx)(n.p,{children:"This section describes how to monitor the producer, consumer, and reader state."}),"\n",(0,t.jsx)(n.h3,{id:"monitor-producer",children:"Monitor producer"}),"\n",(0,t.jsx)(n.p,{children:"The following table lists states available for the producer."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"State"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Closed"}),(0,t.jsx)(n.td,{children:"The producer or the Pulsar client has been disposed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Connected"}),(0,t.jsx)(n.td,{children:"All is well."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Disconnected"}),(0,t.jsx)(n.td,{children:"The connection is lost and attempts are being made to reconnect."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Faulted"}),(0,t.jsx)(n.td,{children:"An unrecoverable error has occurred."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"This example shows how to monitor the producer state."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:'\nprivate static async ValueTask Monitor(IProducer producer, CancellationToken cancellationToken)\n{\n    var state = ProducerState.Disconnected;\n\n    while (!cancellationToken.IsCancellationRequested)\n    {\n        state = await producer.StateChangedFrom(state, cancellationToken);\n\n        var stateMessage = state switch\n        {\n            ProducerState.Connected => $"The producer is connected",\n            ProducerState.Disconnected => $"The producer is disconnected",\n            ProducerState.Closed => $"The producer has closed",\n            ProducerState.Faulted => $"The producer has faulted",\n            _ => $"The producer has an unknown state \'{state}\'"\n        };\n\n        Console.WriteLine(stateMessage);\n\n        if (producer.IsFinalState(state))\n            return;\n    }\n}\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"monitor-consumer-state",children:"Monitor consumer state"}),"\n",(0,t.jsx)(n.p,{children:"The following table lists states available for the consumer."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"State"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Active"}),(0,t.jsx)(n.td,{children:"All is well."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Inactive"}),(0,t.jsxs)(n.td,{children:["All is well. The subscription type is ",(0,t.jsx)(n.code,{children:"Failover"})," and you are not the active consumer."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Closed"}),(0,t.jsx)(n.td,{children:"The consumer or the Pulsar client has been disposed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Disconnected"}),(0,t.jsx)(n.td,{children:"The connection is lost and attempts are being made to reconnect."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Faulted"}),(0,t.jsx)(n.td,{children:"An unrecoverable error has occurred."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ReachedEndOfTopic"}),(0,t.jsx)(n.td,{children:"No more messages are delivered."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"This example shows how to monitor the consumer state."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:'\nprivate static async ValueTask Monitor(IConsumer consumer, CancellationToken cancellationToken)\n{\n    var state = ConsumerState.Disconnected;\n\n    while (!cancellationToken.IsCancellationRequested)\n    {\n        state = await consumer.StateChangedFrom(state, cancellationToken);\n\n        var stateMessage = state switch\n        {\n            ConsumerState.Active => "The consumer is active",\n            ConsumerState.Inactive => "The consumer is inactive",\n            ConsumerState.Disconnected => "The consumer is disconnected",\n            ConsumerState.Closed => "The consumer has closed",\n            ConsumerState.ReachedEndOfTopic => "The consumer has reached end of topic",\n            ConsumerState.Faulted => "The consumer has faulted",\n            _ => $"The consumer has an unknown state \'{state}\'"\n        };\n\n        Console.WriteLine(stateMessage);\n\n        if (consumer.IsFinalState(state))\n            return;\n    }\n}\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"monitor-reader-state",children:"Monitor reader state"}),"\n",(0,t.jsx)(n.p,{children:"The following table lists states available for the reader."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"State"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Closed"}),(0,t.jsx)(n.td,{children:"The reader or the Pulsar client has been disposed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Connected"}),(0,t.jsx)(n.td,{children:"All is well."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Disconnected"}),(0,t.jsx)(n.td,{children:"The connection is lost and attempts are being made to reconnect."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Faulted"}),(0,t.jsx)(n.td,{children:"An unrecoverable error has occurred."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ReachedEndOfTopic"}),(0,t.jsx)(n.td,{children:"No more messages are delivered."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"This example shows how to monitor the reader state."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c#",children:'\nprivate static async ValueTask Monitor(IReader reader, CancellationToken cancellationToken)\n{\n    var state = ReaderState.Disconnected;\n\n    while (!cancellationToken.IsCancellationRequested)\n    {\n        state = await reader.StateChangedFrom(state, cancellationToken);\n\n        var stateMessage = state switch\n        {\n            ReaderState.Connected => "The reader is connected",\n            ReaderState.Disconnected => "The reader is disconnected",\n            ReaderState.Closed => "The reader has closed",\n            ReaderState.ReachedEndOfTopic => "The reader has reached end of topic",\n            ReaderState.Faulted => "The reader has faulted",\n            _ => $"The reader has an unknown state \'{state}\'"\n        };\n\n        Console.WriteLine(stateMessage);\n\n        if (reader.IsFinalState(state))\n            return;\n    }\n}\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var r=s(96540);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);