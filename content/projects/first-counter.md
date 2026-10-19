# First Counter — Verilog

A small first design used to learn the Libero SoC project flow.

## Design behavior

- 4-bit unsigned counter
- Rising-edge clock
- Active-high asynchronous reset
- Wraps from `4'b1111` to `4'b0000`

## Files

- `rtl/counter.v` — synthesizable design
- `testbench/counter_tb.v` — simple simulation testbench

## Expected sequence

After reset is released, each rising clock edge increments `count` by one:
`0, 1, 2, ..., 15, 0, ...`

## Status

The design was created in Libero and synthesis completed with warnings and no errors. Simulation was not completed because the installed Siemens simulator reported a licensing error. The testbench should be simulated with a correctly licensed simulator or a free alternative before claiming the behavior has been verified.

## Source code

### rtl/counter.v

```verilog
module counter (
    input wire clk,
    input wire rst,
    output reg [3:0] count
);

always @(posedge clk or posedge rst) begin
    if (rst)
        count <= 4'b0000;
    else
        count <= count + 1'b1;
end

endmodule

```

### testbench/counter_tb.v

```verilog
`timescale 1ns/100ps

module counter_tb;

    // 100 ns period = 10 MHz clock
    parameter SYSCLK_PERIOD = 100;

    reg SYSCLK;
    reg NSYSRESET;
    wire [3:0] count;

    // Initial values
    initial begin
        SYSCLK = 1'b0;
        NSYSRESET = 1'b0;
    end

    // Active-high reset pulse: hold reset high for two clock periods,
    // then release it so the counter can count.
    initial begin
        NSYSRESET = 1'b1;
        #(SYSCLK_PERIOD * 2);
        NSYSRESET = 1'b0;
    end

    // Clock driver
    always @(SYSCLK)
        #(SYSCLK_PERIOD / 2.0) SYSCLK <= !SYSCLK;

    // Unit under test
    counter counter_0 (
        .clk(SYSCLK),
        .rst(NSYSRESET),
        .count(count)
    );

    // End the simulation after a useful observation window.
    initial begin
        #(SYSCLK_PERIOD * 20);
        $finish;
    end

endmodule

```
