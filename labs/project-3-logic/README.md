# Project 3 – Digital Logic Design

## Overview
This project builds digital logic circuits using **Logisim Evolution** to implement Boolean functions, arithmetic operations, and a finite state machine. It emphasizes truth table derivation, Boolean simplification, modular circuit design, and automated testing.

## Contents
### Q1: Boolean Algebra
- `circuit1a.circ` – Implements a Boolean function from a given expression.
- `circuit1c.circ` – Implements and optimizes logic from a provided truth table.

### Q2: Adder/Subtractor
- `my_adder.circ` – 16-bit ripple-carry adder/subtractor with signed overflow detection.

### Q3: Finite State Machine
- `ignition.circ` – FSM controlling push-button car ignition logic with start/stop conditions.

## Requirements
- Only allowed gates and components per assignment rules (basic gates, DFFs, multiplexers, splitters, tunnels, clocks).
- Pin names and file names must exactly match specifications for automated testing.
- FSM implemented as a Moore machine with outputs determined solely by current state.

## How to Run
1. Open each `.circ` file in Logisim Evolution.
2. Apply the specified inputs to test functionality.
3. Use the provided Python tester with the assignment’s test suite to confirm outputs.
