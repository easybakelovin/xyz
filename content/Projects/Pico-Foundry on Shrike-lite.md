---
title: Pico-Foundry
description: 
tags: [projects, rust, embedded, embassy, fpga, cli, rp2040, shrike-lite]
publish: true
---
## What
Shrike-lite dev board as a dynamic light hardware accelerator, hardware peripheral interface, and serial debug output.

The goods:
- RP2040 firmware
- Bitstreams for the SLG47910V ForgeFPGA with various capabilities
- CLI tool to load bitstreams onto partitioned memory in external flash that the RP2040 will use to flash the FPGA on the shrike-lite
## Why 
Flexible capabilities on the edge with support for various hot-swappable sensing modalities.

## How

*Coming soon..*

## Updates
***March 2026***
> Built and got the CLI tool and RP2040 firmware talking to each other after a headache with the Pico's Execute in Place (XIP) mode. Long story short.. because I was doing a flash write operation, it was necessary to actually run the code for the flash operations from RAM instead of directly from flash as XIP allows so that I would be able to write the FPGA bitstream to the flash itself. Next I want to get the RP2040 to load the bitstream (now stored into a slot in external flash, along with some metadata) to the FPGA.