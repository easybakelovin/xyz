---
title: My Stacks
description: 
tags: [embedded, engineering, organization]
publish: true
---
## What

Here's what I actually use and work with regularly. I'm expanding this regularly. Please don't assume expertise in all of it - I tinker.

## Hardware

**Microcontrollers**
- [RP2040, RP235x Pico Boards](https://www.raspberrypi.com/documentation/microcontrollers/pico-series.html) - [Shrike-lite](https://store.vicharak.in/?product=shrike&post_type=product&name=shrike&v=0b3b97fa6688) (what I'm building [[Pico-Foundry on Shrike-lite]] on) and PicoW - what I'm building my initial implementation of [[Rusticulum for IoT]] on with [LoRa](https://www.thethingsnetwork.org/docs/lorawan/what-is-lorawan/) via the [SX1262](https://www.semtech.com/products/wireless-rf/lora-connect/sx1262)
- [ESP32 (C3, S3)](https://www.espressif.com/en/products/socs/esp32) - when I need WiFi or Bluetooth; Runs everything from your smart hub to smart switches to BT speakers.. Hard to beat for price and features.
- [nRF91 Series](https://docs.nordicsemi.com/category/nrf-91-series) - Cellular IoT stack boards that are optimized for low power; I am particularly interested in Dect NR+ but it also supports LTE-M, NB-IoT, GNSS.. more to come on my [Thingy:91 X](https://docs.nordicsemi.com/category/thingy91x-category) and [nRF9151](https://docs.nordicsemi.com/category/nrf9151-category) DK. The project I am using these in is [[Starlink]].

**FPGAs**
- Lattice [ECP5](https://www.latticesemi.com/en/Products/FPGAandCPLD/ECP5), [iCE40 Series](https://www.latticesemi.com/en/Products/FPGAandCPLD/iCE40) - Low LUTs and FFs but high in energy efficiency for battery applications. Used in my [Lakritz](https://machdyne.com/product/lakritz-computer/) by Machdyne and [iCESugar-nano)](https://github.com/wuxx/icesugar-nano) boards. 
- [AMD/Xilinx](https://www.amd.com/en/products/adaptive-socs-and-fpgas/fpga.html) - [Spartan 7](https://www.amd.com/en/products/adaptive-socs-and-fpgas/fpga/spartan-7.html),[Artix 7](https://www.amd.com/en/products/adaptive-socs-and-fpgas/fpga/artix-7.html),  and although an MPSoC, the [Zynq UltraScale+](https://www.amd.com/en/products/adaptive-socs-and-fpgas/soc/zynq-ultrascale-plus-mpsoc.html) on the [AUP-ZU3 Board](https://www.realdigital.org/hardware/aup-zu3) is a real workhorse.. I haven't gotten around to using it to its full capabilities yet but getting a Petalinux build and a console UI running on it was a rewarding headache for [[Kratos]]
- Renesas - still learning this one through the ShrikeLite with the [SLG47910](https://www.renesas.com/en/products/slg47910) FPGA which promises to be a good potential for low power applications.

**3D Printing**
- FDM/SLA printing for enclosures and fixtures on my trusty PrusaMK3s

## Software & Firmware

**Languages**
- [Rust Programming Language](https://rust-lang.org/) - learning to love it; especially for [embedded](https://docs.rust-embedded.org/book/) on MCUs with the [Embassy](https://embassy.dev/) framework (*chef's kiss*). If you need to build reliable applications that have a predictable memory footprint and are *blazingly fast*, Rust is a good choice. Here is a project I have using Rust for [[Olympus - Edge Engine]]
- [Python](https://www.python.org/) - quick scripts and automation; very good for agentic AI pair programming
- [TypeScript/JavaScript](https://dev.to/jahid6597/unleashing-the-quirky-and-weird-a-dive-into-the-world-of-javascript-22al) - web stuff; I'm not a front end guy so this is a drag
- C - embedded when I have to.. like [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/index.html); feels like I'm going to step on a rake. The world is built on it.. I accept that
- [Zig](https://ziglang.org/) - picking it up and have been absolutely loving it! The build system, comptime, no hidden control flow. My new embedded Linux language when I need to make things go fast. It's also a good language to write games in - here's my WIP on trying this: [[Artemis]].
- [Go](https://go.dev/) - I use it a lot for things when I don't want to manually manage my memory; Go routines, channels, sometimes too explicit error handling.. All a joy

**Embedded Frameworks**
- Embassy (Rust async framework for embedded)
- ESP-IDF (C)
- Zephyr through [nRF Connect](https://www.nordicsemi.com/Products/Development-tools/nrf-connect-for-desktop/download) SDK.. I don't really touch Zephyr too much..

## Tools

**Development**
- [Visual Studio Code](https://code.visualstudio.com/)) - Not that it's a crutch.. but it's hard to beat all the extensions... I have been using [Zed](https://zed.dev/) a lot more recently and I have to say.. It's on its way to being the replacement for the memory-hog VS Code
- [GitHub](https://github.com/) - all my code is hosted here. Public and private repos
- [Docker](https://www.docker.com/) - Only took a few cross-compilation headaches to buy into this one..

**CAD & Design**
- [AutoCAD / AutoCAD Electrical](https://www.bing.com/search?q=autocad+electrical&cvid=464c2f23d68b4358a2485d8993873b7c&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQABhAMgYICBAAGEDSAQg0ODc4ajBqNKgCCLACAQ&FORM=ANAB01&PC=U531) - for documentation and panel design; Might be a little rusty..
- [SolidWorks](https://my.solidworks.com/try-solidworks?mktid=14231&utm_source=bing&utm_medium=cpc&utm_campaign=202406_nam_sw_bingTM_en_CMP15160_lab_brand_us&utm_adgroup=Trademark&utm_term=solidworks&msclkid=f3805e245cc213397a9a37d160efafbc&utm_source=bing&utm_medium=cpc&utm_campaign=202406_nam_sw_bingTM_en_CMP15160_lab_brand_us&utm_term=solidworks&utm_content=Trademark) - mechanical design; I used to live in here for the longest
- [KiCad](https://www.kicad.org/) - PCB design; Honestly I'm surprised this is free. I am learning slowly..

**Cloud & Infrastructure**
- [Digital Ocean](https://www.digitalocean.com/?utm_adgroup=brand_do&utm_creative=&utm_location=73783&utm_matchtype=p&utm_device=c&msclkid=fe1d5326481d1edf4d2b3ad3741b5919&utm_source=bing&utm_medium=cpc&utm_campaign=search_us_en_brand&utm_term=Digital%20Ocean&utm_content=Brand_Do) - where I host my VPS for testing some  along with some databases.. may host a website soon...
- [Pinecone](https://www.pinecone.io/) - where I have my vector database and embeddings inference; For my RAG app soon..
- Linux - Ubuntu 22.04 distro has been my go-to.

**Networking**
- [WireGuard (go)](https://github.com/WireGuard/wireguard-go) - VPN setups; I needed it during a work project and honestly it is very cool
- [ngrok](https://ngrok.com/) - I use it to test some local websites with friends; Haven't touched it in a while..

**Documentation**
- [Obsidian](https://obsidian.md/) - started using this recently, some cool things you can do with it once you invest time in engineering your setup haha. My OneNote replacement.. iykyk
- [Quartz](https://quartz.jzhao.xyz/) - (that's what this site is)
- Markdown for everything - Maybe I should take
- [Mermaid](https://mermaid.ai/landing?utm_medium=primary_search&utm_campaign=mermaidecosystemfocus-US&utm_source=bing_ads&msclkid=76f16cafbbf61ae6e484055a80e858d5) diagrams - this is an AMAZING thing; embed them within Markdown files, export them as images etc.
- [drawio](https://www.drawio.com/) - This is my go to for diagramming the craziest ideas sometimes
- My notebook + pen + paper - Nothing beats this for ideas.

***More***
