# 05 — Simulation and Licensing Notes

## Counter simulation status

The first counter testbench was generated from Libero's template. The testbench was edited to:
- Declare `wire [3:0] count;`
- Apply active-high reset for two clock periods, then release it
- Connect the output using `.count(count)`

The counter design itself uses an active-high reset. The testbench must be checked for syntax and behavior before simulation.

## Simulator error encountered

When running **Verify Pre-Synthesized Design → Simulate**, Libero asked to associate `counter_tb.v`. The simulator then opened a Siemens license error saying it could not check out a license and referred to `SALT_LICENSE_SERVER`.

The installed Libero license and a Siemens QuestaSim/ModelSim license are separate. The environment variable `SALT_LICENSE_SERVER` is not itself a license; its value must come from a valid licensing setup. Do not guess a server address or alter the working `LM_LICENSE_FILE` setting for the Microchip license.

## Practical next options

1. Ask the college/lab administrator whether an authorized Siemens simulator license or server is available.
2. Use a free simulator such as Icarus Verilog (and GTKWave for waveform viewing) to simulate the counter independently.
3. Continue with Libero design tasks that do not require the unavailable simulator, while being clear about what has and has not been verified.

## What a successful simulation should show

After reset is released, the 4-bit counter should increment on each rising edge of `clk`:

`0000 → 0001 → 0010 → 0011 → ... → 1111 → 0000`

The reset should force the output to `0000`. A waveform is evidence of simulated behavior, not physical-board validation.
