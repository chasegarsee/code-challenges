Amazon Virtual Private Cloud (Amazon VPC) enables you to launch Amazon Web Services (AWS) resources into a virtual network that you defined

An Internet gateway (IGW) is a VPC component that allows communication between instances in your VPC and the Internet.

Creating additional subnets is useful for creating resources in multiple Availability Zones to provide High Availability.

Configuring the Private Subnets to route internet-bound traffic to the NAT Gateway allows resources in the Private Subnet are able to connect to the Internet, while still keeping the resources private. This is done by configuring a Route Table.

Creating a VPC security group, acts as a virtual firewall. When you launch an instance, you associate one or more security groups with the instance. You can add rules to each security group that allow traffic to or from its associated instances.

[1] What is the smallest size Subnet you can have in a Amazon VPC
==>[a] /28

[2] What is the mazimum size IP address ranch you can have in a Amazon VPC
==>[a] /16

[3] If you need to allow resources in a private subnet to access the internet you need a
==>[a] NAT gateway

[4] Which Amazon service enables a company to create a curtyak network within AWS?
==>[a] Amazon Virtual Private Cloud (VPC)

[5] TRUTH
==>[a] Private subnets do not have direct access to the internet.

[6] To ensure low-latency delivery, Amazon CloudFront uses
==>[a] AWS Edge Locations

[7] What is an optional security control that can be applied at the nubnet layer of a VPC?
==>[a] A network ACL

[8] What happens when you create a new Amazon VPC?
==>[a] a route table is created by default.

[9]
==>[a] security group

[10]
==>[a] 251
