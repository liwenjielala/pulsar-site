"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[88517],{39682:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"deploy-aws","title":"Deploying a Pulsar cluster on AWS using Terraform and Ansible","description":"For instructions on deploying a single Pulsar cluster manually rather than using Terraform and Ansible, see Deploying a Pulsar cluster on bare metal. For instructions on manually deploying a multi-cluster Pulsar instance, see Deploying a Pulsar instance on bare metal.","source":"@site/versioned_docs/version-2.5.2/deploy-aws.md","sourceDirName":".","slug":"/deploy-aws","permalink":"/docs/2.5.2/deploy-aws","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.2/deploy-aws.md","tags":[],"version":"2.5.2","frontMatter":{"id":"deploy-aws","title":"Deploying a Pulsar cluster on AWS using Terraform and Ansible","sidebar_label":"Amazon Web Services"},"sidebar":"docsSidebar","previous":{"title":"Required Tools","permalink":"/docs/2.5.2/helm-tools"},"next":{"title":"Kubernetes","permalink":"/docs/2.5.2/deploy-kubernetes"}}');var t=s(74848),l=s(28453);const a={id:"deploy-aws",title:"Deploying a Pulsar cluster on AWS using Terraform and Ansible",sidebar_label:"Amazon Web Services"},i=void 0,o={},c=[{value:"Requirements and setup",id:"requirements-and-setup",level:2},{value:"Installation",id:"installation",level:2},{value:"SSH setup",id:"ssh-setup",level:2},{value:"Create AWS resources using Terraform",id:"create-aws-resources-using-terraform",level:2},{value:"Apply a non-default configuration",id:"apply-a-non-default-configuration",level:3},{value:"What is installed",id:"what-is-installed",level:3},{value:"Fetch your Pulsar connection URL",id:"fetch-your-pulsar-connection-url",level:3},{value:"Destroy your cluster",id:"destroy-your-cluster",level:3},{value:"Setup Disks",id:"setup-disks",level:2},{value:"Run the Pulsar playbook",id:"run-the-pulsar-playbook",level:2},{value:"Access the cluster",id:"access-the-cluster",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["For instructions on deploying a single Pulsar cluster manually rather than using Terraform and Ansible, see ",(0,t.jsx)(n.a,{href:"/docs/2.5.2/deploy-bare-metal",children:"Deploying a Pulsar cluster on bare metal"}),". For instructions on manually deploying a multi-cluster Pulsar instance, see ",(0,t.jsx)(n.a,{href:"/docs/2.5.2/deploy-bare-metal-multi-cluster",children:"Deploying a Pulsar instance on bare metal"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["One of the easiest ways to get a Pulsar ",(0,t.jsx)(n.a,{href:"/docs/2.5.2/reference-terminology#cluster",children:"cluster"})," running on ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/",children:"Amazon Web Services"})," (AWS) is to use the ",(0,t.jsx)(n.a,{href:"https://terraform.io",children:"Terraform"})," infrastructure provisioning tool and the ",(0,t.jsx)(n.a,{href:"https://www.ansible.com",children:"Ansible"})," server automation tool. Terraform can create the resources necessary for running the Pulsar cluster---",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/ec2/",children:"EC2"})," instances, networking and security infrastructure, etc.---While Ansible can install and run Pulsar on the provisioned resources."]}),"\n",(0,t.jsx)(n.h2,{id:"requirements-and-setup",children:"Requirements and setup"}),"\n",(0,t.jsx)(n.p,{children:"In order to install a Pulsar cluster on AWS using Terraform and Ansible, you need to prepare the following things:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["An ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/account/",children:"AWS account"})," and the ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/cli/",children:(0,t.jsx)(n.code,{children:"aws"})})," command-line tool"]}),"\n",(0,t.jsxs)(n.li,{children:["Python and ",(0,t.jsx)(n.a,{href:"https://pip.pypa.io/en/stable/",children:"pip"})]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/adammck/terraform-inventory",children:(0,t.jsx)(n.code,{children:"terraform-inventory"})})," tool, which enables Ansible to use Terraform artifacts"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You also need to make sure that you are currently logged into your AWS account via the ",(0,t.jsx)(n.code,{children:"aws"})," tool:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ aws configure\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"You can install Ansible on Linux or macOS using pip."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ pip install ansible\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can install Terraform using the instructions ",(0,t.jsx)(n.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You also need to have the Terraform and Ansible configuration for Pulsar locally on your machine. You can find them in the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/pulsar",children:"GitHub repository"})," of Pulsar, which you can fetch using Git commands:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ git clone https://github.com/apache/pulsar\n$ cd pulsar/deployment/terraform-ansible/aws\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ssh-setup",children:"SSH setup"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["If you already have an SSH key and want to use it, you can skip the step of generating an SSH key and update ",(0,t.jsx)(n.code,{children:"private_key_file"})," setting\nin ",(0,t.jsx)(n.code,{children:"ansible.cfg"})," file and ",(0,t.jsx)(n.code,{children:"public_key_path"})," setting in ",(0,t.jsx)(n.code,{children:"terraform.tfvars"})," file."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, if you already have a private SSH key in ",(0,t.jsx)(n.code,{children:"~/.ssh/pulsar_aws"})," and a public key in ",(0,t.jsx)(n.code,{children:"~/.ssh/pulsar_aws.pub"}),",\nfollow the steps below:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["update ",(0,t.jsx)(n.code,{children:"ansible.cfg"})," with following values:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\nprivate_key_file=~/.ssh/pulsar_aws\n\n\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["update ",(0,t.jsx)(n.code,{children:"terraform.tfvars"})," with following values:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\npublic_key_path=~/.ssh/pulsar_aws.pub\n\n\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In order to create the necessary AWS resources using Terraform, you need to create an SSH key. Enter the following commands to create a private SSH key in ",(0,t.jsx)(n.code,{children:"~/.ssh/id_rsa"})," and a public key in ",(0,t.jsx)(n.code,{children:"~/.ssh/id_rsa.pub"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ ssh-keygen -t rsa\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Do ",(0,t.jsx)(n.em,{children:"not"})," enter a passphrase (hit ",(0,t.jsx)(n.strong,{children:"Enter"})," instead when the prompt comes out). Enter the following command to verify that a key has been created:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ ls ~/.ssh\nid_rsa               id_rsa.pub\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"create-aws-resources-using-terraform",children:"Create AWS resources using Terraform"}),"\n",(0,t.jsx)(n.p,{children:"To start building AWS resources with Terraform, you need to install all Terraform dependencies. Enter the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ terraform init\n# This will create a .terraform folder\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"After that, you can apply the default Terraform configuration by entering this command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ terraform apply\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then you see this prompt below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\nDo you want to perform these actions?\n  Terraform will perform the actions described above.\n  Only 'yes' will be accepted to approve.\n\n  Enter a value:\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Type ",(0,t.jsx)(n.code,{children:"yes"})," and hit ",(0,t.jsx)(n.strong,{children:"Enter"}),". Applying the configuration could take several minutes. When the configuration applying finishes, you can see ",(0,t.jsx)(n.code,{children:"Apply complete!"})," along with some other information, including the number of resources created."]}),"\n",(0,t.jsx)(n.h3,{id:"apply-a-non-default-configuration",children:"Apply a non-default configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You can apply a non-default Terraform configuration by changing the values in the ",(0,t.jsx)(n.code,{children:"terraform.tfvars"})," file. The following variables are available:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Variable name"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"public_key_path"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The path of the public key that you have generated."}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"~/.ssh/id_rsa.pub"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"region"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The AWS region in which the Pulsar cluster runs"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"us-west-2"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"availability_zone"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The AWS availability zone in which the Pulsar cluster runs"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"us-west-2a"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"aws_ami"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["The ",(0,t.jsx)(n.a,{href:"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html",children:"Amazon Machine Image"})," (AMI) that the cluster uses"]}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"ami-9fa343e7"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"num_zookeeper_nodes"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["The number of ",(0,t.jsx)(n.a,{href:"https://zookeeper.apache.org",children:"ZooKeeper"})," nodes in the ZooKeeper cluster"]}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"num_bookie_nodes"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The number of bookies that runs in the cluster"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"3"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"num_broker_nodes"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The number of Pulsar brokers that runs in the cluster"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"num_proxy_nodes"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The number of Pulsar proxies that runs in the cluster"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"base_cidr_block"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["The root ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing",children:"CIDR"})," that network assets uses for the cluster"]}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"10.0.0.0/16"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"instance_types"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["The EC2 instance types to be used. This variable is a map with two keys: ",(0,t.jsx)(n.code,{children:"zookeeper"})," for the ZooKeeper instances, ",(0,t.jsx)(n.code,{children:"bookie"})," for the BookKeeper bookies and ",(0,t.jsx)(n.code,{children:"broker"})," and ",(0,t.jsx)(n.code,{children:"proxy"})," for Pulsar brokers and bookies"]}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,t.jsx)(n.code,{children:"t2.small"})," (ZooKeeper), ",(0,t.jsx)(n.code,{children:"i3.xlarge"})," (BookKeeper) and ",(0,t.jsx)(n.code,{children:"c5.2xlarge"})," (Brokers/Proxies)"]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"what-is-installed",children:"What is installed"}),"\n",(0,t.jsx)(n.p,{children:"When you run the Ansible playbook, the following AWS resources are used:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["9 total ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/ec2",children:"Elastic Compute Cloud"})," (EC2) instances running the ",(0,t.jsx)(n.a,{href:"https://access.redhat.com/articles/3135091",children:"ami-9fa343e7"})," Amazon Machine Image (AMI), which runs ",(0,t.jsx)(n.a,{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html-single/7.4_release_notes/index",children:"Red Hat Enterprise Linux (RHEL) 7.4"}),". By default, that includes:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["3 small VMs for ZooKeeper (",(0,t.jsx)(n.a,{href:"https://www.ec2instances.info/?selected=t3.small",children:"t3.small"})," instances)"]}),"\n",(0,t.jsxs)(n.li,{children:["3 larger VMs for BookKeeper ",(0,t.jsx)(n.a,{href:"/docs/2.5.2/reference-terminology#bookie",children:"bookies"})," (",(0,t.jsx)(n.a,{href:"https://www.ec2instances.info/?selected=i3.xlarge",children:"i3.xlarge"})," instances)"]}),"\n",(0,t.jsxs)(n.li,{children:["2 larger VMs for Pulsar ",(0,t.jsx)(n.a,{href:"/docs/2.5.2/reference-terminology#broker",children:"brokers"})," (",(0,t.jsx)(n.a,{href:"https://www.ec2instances.info/?selected=c5.2xlarge",children:"c5.2xlarge"})," instances)"]}),"\n",(0,t.jsxs)(n.li,{children:["1 larger VMs for Pulsar ",(0,t.jsx)(n.a,{href:"/docs/2.5.2/reference-terminology#proxy",children:"proxy"})," (",(0,t.jsx)(n.a,{href:"https://www.ec2instances.info/?selected=c5.2xlarge",children:"c5.2xlarge"})," instances)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["An EC2 ",(0,t.jsx)(n.a,{href:"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html",children:"security group"})]}),"\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/vpc/",children:"virtual private cloud"})," (VPC) for security"]}),"\n",(0,t.jsxs)(n.li,{children:["An ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/api-gateway/",children:"API Gateway"})," for connections from the outside world"]}),"\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.a,{href:"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Route_Tables.html",children:"route table"})," for the Pulsar cluster's VPC"]}),"\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.a,{href:"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html",children:"subnet"})," for the VPC"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["All EC2 instances for the cluster run in the ",(0,t.jsx)(n.a,{href:"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html",children:"us-west-2"})," region."]}),"\n",(0,t.jsx)(n.h3,{id:"fetch-your-pulsar-connection-url",children:"Fetch your Pulsar connection URL"}),"\n",(0,t.jsxs)(n.p,{children:["When you apply the Terraform configuration by entering the command ",(0,t.jsx)(n.code,{children:"terraform apply"}),", Terraform outputs a value for the ",(0,t.jsx)(n.code,{children:"pulsar_service_url"}),". The value should look something like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\npulsar://pulsar-elb-1800761694.us-west-2.elb.amazonaws.com:6650\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can fetch that value at any time by entering the command ",(0,t.jsx)(n.code,{children:"terraform output pulsar_service_url"})," or parsing the ",(0,t.jsx)(n.code,{children:"terraform.tstate"})," file (which is JSON, even though the filename does not reflect that):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ cat terraform.tfstate | jq .modules[0].outputs.pulsar_service_url.value\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"destroy-your-cluster",children:"Destroy your cluster"}),"\n",(0,t.jsxs)(n.p,{children:["At any point, you can destroy all AWS resources associated with your cluster using Terraform's ",(0,t.jsx)(n.code,{children:"destroy"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ terraform destroy\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"setup-disks",children:"Setup Disks"}),"\n",(0,t.jsxs)(n.p,{children:["Before you run the Pulsar playbook, you need to mount the disks to the correct directories on those bookie nodes. Since different type of machines have different disk layout, you need to update the task defined in ",(0,t.jsx)(n.code,{children:"setup-disk.yaml"})," file after changing the ",(0,t.jsx)(n.code,{children:"instance_types"})," in your terraform config,"]}),"\n",(0,t.jsx)(n.p,{children:"To setup disks on bookie nodes, enter this command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ ansible-playbook \\\n  --user='ec2-user' \\\n  --inventory=`which terraform-inventory` \\\n  setup-disk.yaml\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After that, the disks is mounted under ",(0,t.jsx)(n.code,{children:"/mnt/journal"})," as journal disk, and ",(0,t.jsx)(n.code,{children:"/mnt/storage"})," as ledger disk.\nRemember to enter this command just only once. If you attempt to enter this command again after you have run Pulsar playbook, your disks might potentially be erased again, causing the bookies to fail to start up."]}),"\n",(0,t.jsx)(n.h2,{id:"run-the-pulsar-playbook",children:"Run the Pulsar playbook"}),"\n",(0,t.jsx)(n.p,{children:"Once you have created the necessary AWS resources using Terraform, you can install and run Pulsar on the Terraform-created EC2 instances using Ansible."}),"\n",(0,t.jsxs)(n.p,{children:["(Optional) If you want to use any ",(0,t.jsx)(n.a,{href:"/docs/2.5.2/io-connectors",children:"built-in IO connectors"}),", edit the ",(0,t.jsx)(n.code,{children:"Download Pulsar IO packages"})," task in the ",(0,t.jsx)(n.code,{children:"deploy-pulsar.yaml"})," file and uncomment the connectors you want to use."]}),"\n",(0,t.jsx)(n.p,{children:"To run the playbook, enter this command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ ansible-playbook \\\n  --user='ec2-user' \\\n  --inventory=`which terraform-inventory` \\\n  ../deploy-pulsar.yaml\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you have created a private SSH key at a location different from ",(0,t.jsx)(n.code,{children:"~/.ssh/id_rsa"}),", you can specify the different location using the ",(0,t.jsx)(n.code,{children:"--private-key"})," flag in the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ ansible-playbook \\\n  --user='ec2-user' \\\n  --inventory=`which terraform-inventory` \\\n  --private-key=\"~/.ssh/some-non-default-key\" \\\n  ../deploy-pulsar.yaml\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"access-the-cluster",children:"Access the cluster"}),"\n",(0,t.jsxs)(n.p,{children:["You can now access your running Pulsar using the unique Pulsar connection URL for your cluster, which you can obtain following the instructions ",(0,t.jsx)(n.a,{href:"#fetching-your-pulsar-connection-url",children:"above"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"For a quick demonstration of accessing the cluster, we can use the Python client for Pulsar and the Python shell. First, install the Pulsar Python module using pip:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ pip install pulsar-client\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now, open up the Python shell using the ",(0,t.jsx)(n.code,{children:"python"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\n$ python\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once you are in the shell, enter the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"\n>>> import pulsar\n>>> client = pulsar.Client('pulsar://pulsar-elb-1800761694.us-west-2.elb.amazonaws.com:6650')\n# Make sure to use your connection URL\n>>> producer = client.create_producer('persistent://public/default/test-topic')\n>>> producer.send('Hello world')\n>>> client.close()\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"If all of these commands are successful, Pulsar clients can now use your cluster!"})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var r=s(96540);const t={},l=r.createContext(t);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);