# Libero Design Flow

> **Owner:** Member 4 · **Status:** in progress — summary from our notes; see the full note [Libero SoC Workflow](page.html?s=notes&id=02-libero-workflow).

## The flow in one list

1. **Create project** – pick the target device and HDL.
2. **Create / import design** – Verilog, VHDL or SmartDesign.
3. **Build hierarchy** – choose the top-level root.
4. **Verify / simulate** – testbench + simulator.
5. **Constraints** – clock timing and pin assignments.
6. **Synthesize** – HDL → logic-level hardware.
7. **Place and route** – map onto real FPGA resources and connect them.
8. **Verify implementation** – timing and reports.
9. **Generate programming data**.
10. **Program and test on the board**.

## Where we are

- [x] Project created for `MPFS095T-1FCSG325E`
- [x] 4-bit counter synthesised (warnings, no errors)
- [ ] Simulation (blocked by simulator licence)
- [ ] Constraints, place-and-route, programming

## To write

- [ ] What each report tells you
- [ ] Common warnings and what they mean
