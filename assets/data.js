/* ==========================================================
   SITE DATA — the ONE file to edit for names, owners, status.
   Each entry's page lives at content/<section>/<id>.md
   status: "todo" | "wip" | "done"
   ========================================================== */
window.SITE = {
  title: "RISC-V Learning Hub",
  subtitle: "PolarFire SoC Discovery Kit",
  tagline:
    "A team-written reference for the hardware inside the PolarFire SoC — from FPGA fabric to RISC-V cores — explained step by step.",

  // After you create the GitHub repo, paste its URL here (no trailing slash).
  // Example: "https://github.com/your-team/riscv-learning-hub"
  // This turns on the "Edit this page on GitHub" button.
  repo: "",
  branch: "main",

  team: [
    { name: "Member 1", id: "m1" },
    { name: "Member 2", id: "m2" },
    { name: "Member 3", id: "m3" },
    { name: "Member 4", id: "m4" },
  ],

  // PLACEHOLDER topic list — rename / reorder freely.
  topics: [
    { id: "01-fpga-fabric", title: "FPGA Fabric", owner: "m1", status: "wip",
      summary: "LUTs, flip-flops, routing and why an FPGA is not a CPU." },
    { id: "02-riscv-isa", title: "RISC-V ISA Basics", owner: "m1", status: "todo",
      summary: "What an open instruction set is and how RISC-V is organised." },
    { id: "03-mss", title: "Microprocessor Subsystem (MSS)", owner: "m2", status: "todo",
      summary: "The hardened processor block: 1 × E51 monitor core and 4 × U54 application cores." },
    { id: "04-memory", title: "Memory System", owner: "m2", status: "todo",
      summary: "Caches, DDR, on-chip memory and how the cores see them." },
    { id: "05-clocks-resets", title: "Clocks & Resets", owner: "m3", status: "todo",
      summary: "How clocks are generated and how the design starts up cleanly." },
    { id: "06-fic", title: "FIC — Fabric Interface Controllers", owner: "m3", status: "todo",
      summary: "The bridges that connect the processor to the FPGA fabric." },
    { id: "07-peripherals", title: "Peripherals & I/O", owner: "m4", status: "todo",
      summary: "UART, I2C, SPI, GPIO and the board's LEDs, switches and connectors." },
    { id: "08-libero-flow", title: "Libero Design Flow", owner: "m4", status: "wip",
      summary: "From Verilog to a programmed board: synthesis, place-and-route, programming." },
  ],

  // PLACEHOLDER core list — replace with your real 10 cores.
  cores: [
    { id: "core-01-uart",  title: "CoreUART",   owner: "m1", status: "todo", summary: "Serial UART in the fabric." },
    { id: "core-02-i2c",   title: "CoreI2C",    owner: "m1", status: "todo", summary: "I2C controller (used in the reference design)." },
    { id: "core-03-gpio",  title: "CoreGPIO",   owner: "m1", status: "todo", summary: "General-purpose I/O for LEDs and switches." },
    { id: "core-04-spi",   title: "CoreSPI",    owner: "m2", status: "todo", summary: "SPI master/slave controller." },
    { id: "core-05-timer", title: "CoreTimer",  owner: "m2", status: "todo", summary: "Programmable timer / counter." },
    { id: "core-06-pwm",   title: "CorePWM",    owner: "m2", status: "todo", summary: "Pulse-width modulation outputs." },
    { id: "core-07-apb",   title: "CoreAPB3",   owner: "m3", status: "todo", summary: "APB bus fabric for slow peripherals." },
    { id: "core-08-axi",   title: "CoreAXI4Interconnect", owner: "m3", status: "todo", summary: "High-speed AXI4 bus interconnect." },
    { id: "core-09-reset", title: "CoreResetP", owner: "m4", status: "todo", summary: "Reset sequencing for the design." },
    { id: "core-10-ahb",   title: "CoreAHBLite", owner: "m4", status: "todo", summary: "Lightweight AHB bus." },
  ],

  // What the team has already learned (imported from your notes).
  notes: [
    { id: "01-fpga-basics", title: "FPGA Basics", status: "done", summary: "What an FPGA is and how PolarFire SoC combines RISC-V with fabric." },
    { id: "02-libero-workflow", title: "Libero SoC Workflow", status: "done", summary: "The 10-step flow and what synthesis / place-and-route mean." },
    { id: "03-discovery-kit", title: "The Discovery Kit", status: "done", summary: "Board, device MPFS095T-1FCSG325E, and what can be tested." },
    { id: "04-reference-design", title: "Reference Design", status: "wip", summary: "The official TCL reference design and its SmartDesign blocks." },
    { id: "05-simulation-and-licensing", title: "Simulation & Licensing", status: "wip", summary: "The simulator licence issue and free alternatives." },
    { id: "06-official-links", title: "Official Links", status: "done", summary: "Datasheets, user guide, reference-design repo." },
  ],

  projects: [
    { id: "first-counter", title: "First Project: 4-bit Counter", status: "wip", summary: "Our first Verilog design, synthesised in Libero." },
  ],
};
