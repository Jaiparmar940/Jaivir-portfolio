# Project 2 – Assembly Programming

## Overview
This project explores MIPS assembly language through both written analysis and programming tasks. It demonstrates understanding of the MIPS instruction set, compiler optimizations, recursion, and dynamic memory allocation. Programs are written for the QtSpim simulator and follow strict MIPS calling conventions.

## Contents
### Written Problems
- Instruction decoding and encoding (e.g., identifying an instruction from its hex code).
- Analyzing compiler optimization effects by comparing unoptimized vs. optimized MIPS assembly output.

### Programming Tasks
1. **byseven.s** – Prints the first N positive integers divisible by 7.
2. **recurse.s** – Recursively computes `f(N) = 3*(N-1) + f(N-1) + 1` with `f(0) = 2`.
3. **PizzaCalc.s** – Reads pizza names, diameters, and costs from input, computes pizza value per dollar, sorts results, and handles arbitrary numbers of entries via heap allocation.

## Requirements
- All code follows MIPS calling conventions (register saving, stack discipline, no data sharing via registers between functions).
- Programs prompt the user with colons at the end of each prompt for compatibility with automated testing.
- Dynamic allocation in `PizzaCalc.s` must occur on-the-fly as input is read.
- No use of system call `exit`; `main` must return via `jr $ra`.

## How to Run
1. Open the `.s` files in QtSpim.
2. Run the program, typing the test input when prompted.
3. Compare output to expected files provided in the assignment.
