# 02 — Libero SoC Workflow

Libero SoC is Microchip's FPGA design environment. A typical workflow is:

1. **Create project** — select the target device and HDL.
2. **Create/import design** — add Verilog/VHDL or create SmartDesign components.
3. **Build hierarchy** — identify the top-level design root.
4. **Verify / simulate** — use a testbench and a supported simulator where available.
5. **Manage constraints** — specify clock timing and physical pin constraints.
6. **Synthesize** — translate HDL into a logic-level hardware representation.
7. **Place and route** — map and connect the logic using the target FPGA resources.
8. **Verify implementation** — review timing and implementation reports.
9. **Generate programming data** — create the file required to configure the FPGA.
10. **Program and test hardware** — use the supported programming interface and the physical board.

Not every project uses exactly the same flow. A processor-based SoC design may require MSS configuration, SmartDesign integration, generated IP, and additional software tools.

## What synthesis means

Synthesis converts the HDL description into a hardware representation using available FPGA resources. A synthesis success does not prove that timing is met or that the design works on a board.

## What place-and-route means

Placement assigns hardware elements to physical resources. Routing connects them using the FPGA's programmable interconnect. Timing analysis checks whether signal paths meet timing requirements.

## Warnings

Warnings are not all fatal, but they should be read and understood. In the first counter project, synthesis completed with warnings and no errors. One warning concerned the lack of an explicit timing constraint. Add and verify an appropriate clock constraint before treating implementation results as complete.
