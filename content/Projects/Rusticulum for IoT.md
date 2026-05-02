---
title: Rusticulum
description: 
tags: [projects, rust, embedded, embassy, LoRa, picow, sx1262]
publish: true
---
## What
An implementation of the [Reticulum](https://reticulum.network/) network that builds a mesh network of embedded IoT devices that is agnostic to hardware or networking stacks. Written in Rust.

This initial working implementation is based primarily on PicoW interfacing with an SX1262 for LoRa, but I have plans to expand this to other MCUs by keeping the core IoT mesh stack library compatible with no-std projects.

The goods:
- PicoW firmware using Embassy
- SX1262 driver library
- Rusticulum-core custom library compatible as a Reticulum node, transport node, and destination.
- nRF91 firmware for cellular applications

This would work hand in hand with [[Kratos]] running the same stack.

## Why
Mesh networking in IoT applications to provide robust and secure connections that are agnostic to networking stack. This lets integrators worry less about how to implement and instead focus on what capabilities they unlock with their bespoke mix and meshing of IoT hardware for security and coverage.

A Gateway with multimodal network stack capabilities is necessary to act as the bridge. Nodes of the mesh network can be multimodal or single-modality. Data is encrypted throughout and each node announces its capabilities
## How
*Coming soon..*


## Updates
***April 2026***
> First implementation is up and working. It was a headache getting it to play nicely with Reticulum. The instance on my computer with RNode was seeing the announces but I had issues with the packet structure. Now I can announce from the Pico (with SX1262), receive LXMF messages, and act as a transport node. Next I want to implement a lightweight control/IoT protocol so that I can control, poll, ping, establish links, update, etc. the Pico from another device on the Reticulum network. It should only be able to be done from provisioned destinations so that not anyone can just send these commands, so that will be a bit complex. I'd have to really map out the device provisioning process and also come up with a more complete "address book" so that the nodes in the network can understand "skills" or capabilities of the other nodes such as *cloud backhaul* or *analytics processing* or *data store (with X memory available)* or *mission control (can send commands)* for a robust and resilient IoT network.