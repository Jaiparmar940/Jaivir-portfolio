# Custom CPU Architecture - Single-Cycle Processor Design in Logisim

## Project Overview
This project represents the comprehensive design and implementation of a custom Central Processing Unit (CPU) using Logisim, a digital logic simulator. The CPU is a single-cycle processor implementing a MIPS-like instruction set architecture, demonstrating deep understanding of computer architecture principles and digital logic design.

## Architecture Overview

### Design Philosophy
The CPU follows the classic von Neumann architecture with a unified memory space for both instructions and data. It implements a single-cycle execution model where each instruction completes in one clock cycle, providing a foundation for understanding fundamental computer architecture concepts.

### Key Specifications
- **Architecture**: Single-cycle processor
- **Data Width**: 16-bit data paths
- **Memory**: 64K x 16 instruction ROM, 64K x 16 data RAM
- **Registers**: Multiple general-purpose registers with 16-bit width
- **Clock**: Synchronous operation with reset capability
- **I/O**: Integrated keyboard input and teletype output

## Core Architecture Components

### 1. Program Counter & Instruction Fetch

#### Program Counter (PC)
- **Component**: SingleReg with clock and reset functionality
- **Function**: Holds the address of the current instruction
- **Increment Logic**: PC + 1 (or PC + 4 for byte-addressable memory)
- **Control**: Synchronous updates with reset capability

#### Instruction Memory (ROM)
- **Size**: 64K x 16 bits (65,536 instructions)
- **Address Range**: 0x0000 to 0xFFFF
- **Data Width**: 16-bit instruction words
- **Function**: Stores program instructions for execution

#### Instruction Fetch Logic
- **PC Update**: Automatic increment for sequential execution
- **Branch Target**: Calculated addresses for conditional branches
- **Jump Target**: Direct and register-based jump destinations

### 2. Instruction Decode & Control Unit

#### Instruction Decoder
The central control unit that parses instruction opcodes and generates control signals for all CPU components.

#### Control Signals Generated
- **ALU Control (oprd)**: Specifies ALU operation type
- **Memory Control**:
  - `DMwe`: Data Memory Write Enable
  - `Rwd`: Read Word from memory
- **Register Control**:
  - `Rwe`: Register Write Enable
  - `Rdst`: Destination register selection
- **Branch & Jump Logic**:
  - `Bne`: Branch if Not Equal
  - `Ble`: Branch if Less than or Equal
  - `JP`: Direct Jump
  - `JR`: Jump Register
  - `JAL`: Jump and Link
- **I/O Control**:
  - `TTY`: Teletype output enable
  - `KB`: Keyboard input enable
- **Data Path Control**:
  - `ALUinB`: ALU input B selection (register vs. immediate)
  - `Rwd`: Register write data source selection

#### Instruction Format Parsing
- **Opcode (opcd)**: Primary instruction type identifier
- **Register Specifiers**: Rs, Rt, Rd for source and destination registers
- **Shift Amount (shamt)**: For shift operations
- **Immediate Values**: Sign-extended constants for I-type instructions
- **Address Fields**: For jump and branch instructions

### 3. Register File

#### Architecture
- **Data Width**: 16-bit registers
- **Read Ports**: Two simultaneous read operations (Rs, Rt)
- **Write Port**: Single write port with destination selection
- **Clock Control**: Synchronous operation with reset functionality

#### Functionality
- **Read Operations**: Simultaneous access to two registers
- **Write Operations**: Single register write per clock cycle
- **Reset Capability**: Initialize all registers to known state
- **Destination Selection**: Choose between Rd and Rdst based on instruction type

#### Control Interface
- **ReadReg1, ReadReg2**: Source register addresses
- **WriteReg**: Destination register address
- **WriteData**: Data to be written
- **WriteEnable**: Control signal for register writes

### 4. Arithmetic Logic Unit (ALU)

#### Operations Supported
- **Arithmetic**: Addition, subtraction
- **Logical**: AND, OR, XOR operations
- **Shift Operations**: Left and right shifts with configurable amounts
- **Comparison**: Less than, equal to, zero detection

#### Input Sources
- **Input 1**: Primary data from register file (ReadData1)
- **Input 2**: Secondary data from register or immediate value
- **Operation Code**: Specifies the operation to perform
- **Shift Amount**: For shift operations

#### Output Flags
- **Result (out1)**: Primary ALU output
- **Zero Flag**: Indicates if result equals zero
- **Less Than Flag**: Indicates if result is less than zero
- **Overflow Flag**: Indicates arithmetic overflow

#### Control Interface
- **Operation Selection**: Based on instruction decoder output
- **Input Selection**: Choose between register and immediate values
- **Flag Generation**: Automatic status flag generation

### 5. Memory System

#### Memory Latch
- **Function**: Buffers memory address and data
- **Inputs**: Address, write enable, clock, data input
- **Outputs**: Latched address, write enable, output enable, data
- **Purpose**: Ensures proper timing for memory operations

#### Data Memory (RAM)
- **Size**: 64K x 16 bits
- **Access**: Read and write operations
- **Control**: Write enable and output enable signals
- **Timing**: Synchronous with CPU clock

#### Memory Operations
- **Load Operations**: Read data from memory to registers
- **Store Operations**: Write register data to memory
- **Address Calculation**: ALU result used as memory address
- **Data Transfer**: Bidirectional data flow between CPU and memory

### 6. Control Flow & Branching

#### Branch Logic
- **Conditional Branches**: Based on ALU status flags
- **Branch Types**:
  - `Bne`: Branch if not equal (zero flag = 0)
  - `Ble`: Branch if less than or equal (less flag = 1 or zero flag = 1)
- **Target Calculation**: PC + offset (sign-extended immediate)

#### Jump Logic
- **Direct Jumps (JP)**: Absolute address from instruction
- **Register Jumps (JR)**: Address from register value
- **Jump and Link (JAL)**: Store return address before jumping

#### PC Update Logic
- **Sequential Execution**: PC + 1 (default)
- **Branch Target**: Calculated branch address
- **Jump Target**: Direct or register-based jump address
- **Multiplexer Control**: Selection based on control signals

### 7. I/O System

#### Keyboard Input (key_out)
- **Function**: Real-time keyboard input processing
- **Control**: Enabled by KB signal from instruction decoder
- **Clock**: Synchronized with CPU clock
- **Reset**: Initialize input state
- **Integration**: Can be written to registers for program input

#### Teletype Output (TTY)
- **Function**: Character output for user interaction
- **Input**: Data from ALU result
- **Control**: Enabled by TTY signal from instruction decoder
- **Clock**: Synchronized with CPU clock
- **Purpose**: Program output and debugging

### 8. Data Paths & Control Logic

#### Multiplexer Networks
- **ALU Input Selection**: Choose between register and immediate values
- **Register Write Data**: Select from ALU result, memory data, or I/O
- **PC Update**: Choose between sequential, branch, and jump targets
- **Destination Register**: Select between Rd and Rdst

#### Sign Extension
- **6-bit to 16-bit**: Extend immediate values for ALU operations
- **12-bit to 16-bit**: Extend addresses for jump instructions
- **Purpose**: Maintain proper data width throughout the system

#### Data Flow Control
- **Register to ALU**: Source operand routing
- **ALU to Memory**: Address and data routing
- **Memory to Register**: Load data routing
- **I/O Integration**: Input and output data routing

## Instruction Set Architecture

### Instruction Categories

#### Arithmetic Instructions
- **ADD**: Register addition
- **SUB**: Register subtraction
- **Logical Operations**: AND, OR, XOR
- **Shift Operations**: Left and right shifts

#### Data Transfer Instructions
- **LOAD**: Memory to register transfer
- **STORE**: Register to memory transfer
- **Register Transfer**: Between registers

#### Control Flow Instructions
- **Conditional Branches**: Based on comparison results
- **Unconditional Jumps**: Direct and register-based
- **Jump and Link**: Function call support

#### I/O Instructions
- **Keyboard Input**: Read from keyboard to register
- **Teletype Output**: Write register data to output

### Instruction Encoding
- **Opcode Field**: Primary instruction identifier
- **Register Fields**: Source and destination specifications
- **Immediate Values**: Constants for immediate operations
- **Address Fields**: Jump and branch targets

## Implementation Details

### Digital Logic Components
- **Registers**: State-holding elements with clock and reset
- **Multiplexers**: Data path selection and routing
- **Adders**: Address calculation and PC increment
- **Memory Modules**: ROM and RAM for instruction and data storage
- **Control Logic**: Gates and decoders for signal generation

### Timing Considerations
- **Clock Distribution**: Synchronous operation throughout
- **Reset Logic**: Proper initialization of all components
- **Memory Timing**: Read and write cycle management
- **I/O Synchronization**: Input and output timing control

### Design Validation
- **Functional Testing**: Verify correct instruction execution
- **Timing Analysis**: Ensure proper clock cycle operation
- **Control Signal Verification**: Validate all control logic
- **Data Path Testing**: Verify correct data flow

## Testing & Validation

### Testing Methodology
- **Unit Testing**: Individual component verification
- **Integration Testing**: Component interaction validation
- **System Testing**: Complete CPU operation verification
- **Performance Testing**: Clock cycle and timing validation

### Test Programs
- **Basic Arithmetic**: Addition, subtraction, logical operations
- **Memory Operations**: Load and store instruction testing
- **Control Flow**: Branch and jump instruction testing
- **I/O Operations**: Keyboard input and teletype output testing

### Debugging Features
- **Teletype Output**: Real-time program execution monitoring
- **Register Inspection**: View register contents during execution
- **Memory Inspection**: Examine memory contents and addresses
- **Control Signal Monitoring**: Verify control signal generation

## Technical Achievements

### Architecture Design
- **Complete CPU Implementation**: Full instruction set support
- **Efficient Data Paths**: Optimized routing and control
- **Integrated I/O**: Real-time input and output capabilities
- **Robust Control Logic**: Comprehensive instruction decoding

### Engineering Excellence
- **Modular Design**: Well-structured component organization
- **Scalable Architecture**: Foundation for future enhancements
- **Comprehensive Testing**: Thorough validation and verification
- **Documentation**: Complete technical documentation

### Educational Value
- **Learning Tool**: Understanding computer architecture principles
- **Hands-on Experience**: Practical digital logic design
- **System Integration**: Component interaction and timing
- **Problem Solving**: Debugging and optimization skills

## Future Enhancements

### Architecture Improvements
- **Pipeline Implementation**: Multi-cycle execution for performance
- **Cache Memory**: Instruction and data caching
- **Floating Point Unit**: Extended arithmetic capabilities
- **Vector Processing**: SIMD instruction support

### Technology Upgrades
- **Advanced ALU**: More complex arithmetic operations
- **Memory Management**: Virtual memory and protection
- **Interrupt Handling**: External event processing
- **DMA Support**: Direct memory access capabilities

### Educational Extensions
- **Visualization Tools**: Enhanced debugging and monitoring
- **Simulation Scenarios**: Pre-built test programs
- **Performance Analysis**: Timing and efficiency metrics
- **Comparative Studies**: Different architecture implementations

## Conclusion

This Custom CPU Architecture project represents a significant achievement in digital logic design and computer architecture education. By implementing a complete, functional CPU from first principles using Logisim, the project demonstrates comprehensive understanding of computer architecture concepts and digital logic design principles.

The single-cycle processor successfully executes a complete instruction set including arithmetic operations, data transfer, control flow, and I/O operations. The integrated I/O system provides real-time interaction capabilities, making the CPU a practical tool for learning and experimentation.

The project serves as an excellent foundation for understanding modern processor design and provides a solid base for future enhancements such as pipelining, caching, and advanced instruction sets. The comprehensive testing and validation ensure reliable operation and provide valuable debugging experience.

This implementation demonstrates the power of digital logic simulation tools in computer architecture education and shows how complex systems can be built and understood through systematic design and implementation. The project represents a significant milestone in computer engineering education and provides a valuable resource for understanding fundamental computer architecture principles.
