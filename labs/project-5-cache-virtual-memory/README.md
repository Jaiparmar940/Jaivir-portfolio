# Project 5 – Caching and Virtual Memory

## Overview
This project covers both **theory** and **implementation** of caching and virtual memory systems. It includes problem-solving for cache behavior, page table sizing, and TLB operation, plus two C programs: a virtual-to-physical address translator and a cache simulator.

## Contents
### Written Problems
- Cache policy rationale and performance calculation.
- Virtual memory page table size analysis.
- Multi-level page table concepts and TLB miss behavior.

### Programming Tasks
1. **virt2phys.c** – Reads a page table from file and translates a given virtual address to a physical address or reports `PAGEFAULT`.
2. **cachesim.c** – Simulates a configurable single-level cache (size, associativity, block size) with LRU replacement, write-through, write-no-allocate policy.

## Requirements
- No use of `%` operator or `math.h`; all address calculations via bitwise operations.
- Address space: 24-bit byte-addressed, big-endian.
- Must match specified output formats exactly for grading.

## How to Run
### virt2phys
```bash
gcc -o virt2phys virt2phys.c
./virt2phys <page-table-file> <virtual-address-hex>
```

### cachesim
```bash
gcc -o cachesim cachesim.c
./cachesim <trace-file> <cache-size-kB> <associativity> <block-size>
```

3. Use provided test suites to confirm correctness.
