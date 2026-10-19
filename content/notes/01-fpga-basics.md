# 01 — FPGA Basics

## What is an FPGA?

An FPGA (Field-Programmable Gate Array) is a chip containing configurable digital logic and programmable connections. Engineers configure these resources to implement a digital circuit after the chip has been manufactured.

## What is FPGA fabric?

FPGA fabric is the configurable logic area inside the FPGA. Depending on the device, it contains resources such as lookup tables (LUTs), flip-flops, carry logic, and programmable routing. Some FPGA devices also provide dedicated memory and DSP resources.

## Why use an FPGA?

An FPGA lets engineers implement custom hardware, test it on real silicon, and change the design by reprogramming the device. It is useful for prototyping, parallel processing, custom interfaces, hardware acceleration, and digital signal processing.

## FPGA versus CPU software versus ASIC

- **CPU software:** a processor executes instructions.
- **FPGA:** configurable resources are arranged into hardware circuits.
- **ASIC:** a dedicated chip is manufactured for a particular design.

An FPGA does not manufacture a new chip. It configures the resources already present in the FPGA.

## Why implement and test hardware?

Testing checks whether a design meets its requirements. Typical checks include:
- Correct logical behavior
- Timing and clock requirements
- Interfaces and signal connections
- Pin assignments and electrical standards
- Behavior on the actual board

Simulation can find many design bugs before hardware testing. Physical testing can reveal issues that simulation does not model.

## PolarFire SoC: two major parts

The PolarFire SoC combines:
- A hardened RISC-V processor subsystem for executing software
- Programmable FPGA fabric for custom hardware

These parts can be integrated so software running on the processor interacts with hardware implemented in the fabric.
