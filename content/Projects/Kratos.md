---
title: Kratos
description: 
tags: [projects, rust, go, embedded, fpga, petalinux, embedded-linux, mpsoc, aupzu3, axi]
publish: true
---
## What
Kratos is a brainchild of mine. It is a more than capable edge device with an MPSoC at its core. It is the glue for what I'm building with the [[Rusticulum for IoT]] project. 

At the moment this is the AUP-ZU3 dev board that has Processing System (PS) with both a Quad-core Arm Cortex-A53(64bit) and a real-time Dual-core Arm Cortex-R5 (32bit). It also has an Arm Mali-400 GPU that I need to find out how to better interact with/use. Lastly it has Programmable Logic (PL) that has 71K lookup tables (LUTs) and ~141K flip-flops as well as considerable amount of on-chip RAM (both block and distributed) and 360 (whoa!) DSP slices that I need to figure out how to maximize their use.. Open to ideas.

With this PL core I can:
- extend the native capabilities to support all kinds of peripherals through various IOs
- act as a hardware accelerator for custom AI applications
- act as a encryption engine (for AES, SHA, etc.)
- enable deterministic control
- run custom kernels
- define custom protocols
- run pipelined image processing
- run signal processing pipelines
- unlock extra soft core CPUs 

This all is enabled by the interface between the Processing System (PS) where the custom Petalinux image that was painstakingly hard to get right runs and the PL. 
My core applications (written in Rust or Zig) can run on the PS while communicating with the PL via AXI buses or EMIO.

This helps add support for different modalities such as LoRa, Cell, Bluetooth, you name it, more robustly.

The goods:
- Custom Petalinux build for AUP-ZU3
- Console UI for managing bitstreams, device settings, and custom application packages
- PL- Hardware acceleration bitstreams for neural network applications
- PL - Drivers for various peripherals that enable support for other networking modalities. Sort of like a network interface card
- PL - Small CPU cores such as MicroBlaze or RISC-V 
- PS - Control plane, daemon-like program, I'll call it Orion, that orchestrates all other programs, connectivity, PL fabric control, and device/application lifecycle management
- Enclosure - Small , sleek footprint with ample cooling allowing exposure of ports and header pins
## Why
Well.. why not? Kidding.. There is something special about each and every application. Some need W while others need X and all of them need Y with few begging for Z. 

Kratos is supposed to be a prototype/proof of concept that proves you are allowed to have the whole alphabet, to an extent of course, by providing a platform that enables you to deploy quickly and reliably to enable wireless mesh network capabilities across all flavors of communication stacks. 

You want AI? You got it. You need LoRa stack? Boom, plug it in and go. You want to speed up your encryption and offload it to hardware that is purpose built for your specific application? Be my guest.

## How
*Coming soon.*

## Updates
>***January 2026***
>Got the console UI working with an application written in Go. Pretty vanilla for now, but I at least have an IP_address:Port I can hit and log into see that Kratos is alive and well.

>***April 2026:*** 
>Currently working on a couple PL fabric bitstreams using Vivado and Vitis. My first use case is an encryption accelerator to support the Rusticulum stack. Next I'll need to get the drivers for a LoRa module working.