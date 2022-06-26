---
layout: project-layout.njk
title: Projects
---

# /Projects  

## CARDANO  

### <a href="https://github.com/blockopszone/cnkit" target="_blank">CNKIT</a>   
  
cnkit is a collection of scripts and configurations that allow to deploy and manage a Cardano stake pool as code, by making use of commonly used tools, while trying to adhere to best practices, and with the ultimate goal of helping to achieve a secure and highly available setup.

<div class="post-image"><img align="left" src="/img/cnschema-white.png"></div>

As it is shown in the architecture diagram, the idea is to control the stake pool from a private and protected network, where many services running in one or many systems take care of all the heavy lifting. This way, a new node can be deployed in almost no time by syncing the binaries and the database files, instead of using the common method of installing all the dependencies and compiling in the production server, that also requires to sync from zero all the database, process that can take up to a day. On the other hand, all the management of the pool is done from the protected systems, so cold keys are never stored in the public servers. The combination of these features makes it possible to update the nodes with less downtime and even implement a sort of automatic failover.

CNKIT is being created to share our experiences after the efforts we made to run our customers' staking pools in the best way we have been able to. In this direction we decided to make an additional effort to put everything together so it can be shared with the community. This process is taking a while, as everything needs to be double checked and documented. Be aware that everything is done in our spare time and offered for free. Please consider supporting us by <a href="/contribute">contributing</a> in any way.

CNKIT is comprised of three major components,

- <a href="https://github.com/blockopszone/cndeploy" target="_blank">cndeploy</a> (beta stage)  
cndeploy consists of a group of Ansible roles that take care of preparing a Linux system to run a node, deploy the binaries and the database, apply the configurations needed for both for relays and block producer in the cluster, and run the nodes. Following Ansible’s best practices, we tried to make all the operations idempotent. The configuration can be stored in a private repository, making it possible to manage the node as code.

- <a href="https://github.com/blockopszone/cncontrol" target="_blank">cncontrol</a> (alpha stage)  
cncontrol consists of a set of configurations and scripts that are triggered after notifications of the monitoring system, aiming to not only notify but also to automatically react to certain scenarios according to a set of defined policies, to for example increase the availability of the stake pool.

- <a href="https://github.com/blockopszone/cnconfig" target="_blank">cnconfig</a> (dev. scheduled for Q4 2022)  
cnconfig is an assistant to create the config files for the other services, taking care of the configuration for the most common scenarios in an easy way.
  
---  
  
### <a href="https://github.com/jmhoms/plutus-pioneer-nixos-vagrant" target="_blank">PPP-NIXOS-VAGRANT</a> 

This repository provides a Vagrantfile and a set of scripts to automate the deployment in a virtual machine of the tools needed to follow the Plutus Pioneer Program. I created it to facilitate my own experimentation with the Playground and with the compiler directly from a shell, for learning purposes.
  
---  
  
### PPP-AWS (dev. scheduled for Q3 2022)  

A set of scripts is being prepared to build images as AWS AMI in an automated way, with the objective to periodically upload them to the marketplace as a free resource for anyone to boot a remote Plutus Pioneer Program environment ready to use, with the only cost of the instance running time billed in seconds by AWS. This initiative is aiming to improve the experience to all the students who struggle with the initial environment setup, mostly due to limitations of software and hardware with their local computers, or for the ones that just don’t want to install an added pile of things to their environment.

