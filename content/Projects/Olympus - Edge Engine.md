---
title: Olympus
description: 
tags: [projects, rust, zig, go, state-machine, mqtt, embedded-linux]
publish: true
---
## What
Olympus was initially born as an idea for a product I inherited and owned. 

The idea was that there were various possible permutation of events and states that needed to drive action, alerts, or failsafe mechanisms. 

Olympus refers to the entire stack: 
- Raw data publisher (e.g. flow, power, pressure)
- MQTT broker
- Events Engine - Consumer of data, generating events based on user defined and customizable logic
- States Engine - Consumer of events, generating alerts, actions, and logs. 

All written in Rust for reliability, speed, and flexible deployments in resource-constrained environments.

## Why
In incredibly complex systems, a state engine serves as way to represent the different permutations into a more rigid definition that matters to the system. 

Example: It doesn't matter that temperature of your car engine was high for half a second before coming back down, but if its high for a period of time, you may be more concerned. If you couple that with a loss of pressure in one of your coolant lines (steady decline or sudden) then that means something completely different. 

A way to easily represent and test all permutations while allowing custom analyses of temporal context makes it easy to deploy reliable systems.

## How 
*Coming soon..*

## Updates
***January 2026***
> Got a working implementation (v0.3.0) on an edge compute dev device from work with a custom Yocto build. Built a lightweight backend in go that serves html and JavaScript (baked into the binary) and also taps into the MQTT broker so that I can visualize the environmental data being captured by the BME280 (temperature, pressure, humidity) along with WiFi signal strength. The program actually publishing this data to the broker is written and Zig and the memory footprint and binary size is TINY. Pretty cool. The events and state engine has some basic functionality but next I want to invest time into managing memory buffers a bit better and also add hot-reload of updated config files. So,I can just edit the file and have the state machine logic dynamically change without having to kill the process and restart it.
