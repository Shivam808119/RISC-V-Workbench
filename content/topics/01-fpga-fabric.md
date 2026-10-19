# FPGA Fabric

> **Owner:** Member 1 · **Status:** in progress — first draft from our study notes.

## Overview

An **FPGA** (Field-Programmable Gate Array) is a chip full of configurable digital logic and programmable wiring. Instead of running instructions like a CPU, you *configure* the chip so its resources become a custom hardware circuit. The configurable area is called the **fabric**.

## What is inside the fabric?

- **Lookup tables (LUTs)** – small memories that can implement any small logic function.
- **Flip-flops** – store one bit; the building block of registers and counters.
- **Carry logic** – fast paths for arithmetic.
- **Programmable routing** – the wires and switches that connect everything.
- Some devices also include dedicated **memory** and **DSP** blocks.

## FPGA vs CPU software vs ASIC

| | How it works | Changeable? |
|---|---|---|
| CPU software | A processor executes instructions | Yes, by changing the program |
| FPGA | Resources are arranged into a hardware circuit | Yes, by reprogramming the chip |
| ASIC | A dedicated chip made for one design | No |

An FPGA does not manufacture a new chip — it configures resources that are already there.

## Why this matters for PolarFire SoC

PolarFire SoC combines a hardened **RISC-V processor subsystem** with FPGA fabric, so software on the cores can talk to hardware you design in the fabric. See [the big picture](index.html#map).

## Next steps for this page

- [ ] Add a diagram of a LUT + flip-flop
- [ ] Explain how routing works
- [ ] Show our 4-bit counter mapped onto fabric resources
