# 04 — Discovery Kit Reference Design

## Repository used

Official GitHub repository:
https://github.com/polarfire-soc/polarfire-soc-discovery-kit-reference-design

The downloaded project was opened in Libero SoC 2026.1 from the extracted repository directory. The script used was:

`MPFS_DISCOVERY_KIT_REFERENCE_DESIGN.tcl`

The generated project was named `MPFS_DISCOVERY` and targeted `MPFS095T-1FCSG325E`.

## What a TCL script does

TCL is a scripting language used by Libero to automate project setup. A reference-design script can create a project, configure IP and SmartDesign components, add HDL and constraints, and prepare the design flow according to the script's commands.

Running the script does **not** automatically prove that the complete design has been simulated, synthesized, routed, programmed, or tested on hardware.

## Blocks seen in the SmartDesign

The opened reference design showed blocks/tabs including:
- `MPFS_DISCOVERY_KIT`
- `MSS_WRAPPER`
- `CLOCKS_AND_RESETS`
- `FIC_0_PERIPHERALS`
- `CORE_I2C_C0_0_WRAPPER`

These names indicate a larger integrated SoC design, unlike the simple standalone counter.

## Current status and next actions

The project report showed the device details and zero project-summary errors/warnings. The Design Flow panel also displayed **“Please select a root”**, so the root still needs to be selected/verified.

Next:
1. Inspect Design Hierarchy and select the intended top-level root as directed by the official reference-design instructions.
2. Save the project.
3. Check the project/report messages.
4. Do not run implementation blindly; first verify the selected root and required constraints.
5. Follow the repository README for any required setup, script arguments, and build sequence.
