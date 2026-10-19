# 03 — PolarFire SoC Discovery Kit

## Target used in this learning project

- Board: PolarFire SoC Discovery Kit
- Device: `MPFS095T-1FCSG325E`
- Device family in Libero: PolarFire SoC
- Package: FCSG325
- Speed grade: -1

Always confirm the exact board and device from the board documentation. The Discovery Kit and Icicle Kit are different boards; their device selections, pin constraints, and reference designs are not interchangeable.

## What the kit is for

The board provides a physical platform for evaluating the PolarFire SoC. It lets a designer test the programmable FPGA fabric and the hardened RISC-V processor subsystem with real interfaces and peripherals.

## What can be tested on the board?

Depending on the actual board design and its configured pin connections, examples include:
- GPIO and LEDs
- Switches and buttons
- UART communication
- Memory and peripheral interfaces
- Processor-to-fabric communication
- Custom hardware accelerators

Use the official board user guide for exact pin assignments, electrical I/O standards, connectors, clocks, and programming instructions. Do not guess pin locations or electrical settings.

## Without the physical board

You can still learn project setup, Verilog, hierarchy, synthesis, constraints, SmartDesign, and many implementation/reporting steps. A supported simulator can help verify behavior. Physical programming and testing of LEDs, switches, connectors, and real electrical interfaces require access to the board.
