import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiDownload, FiCalendar, FiBook, FiAward, FiFilter } from 'react-icons/fi';
import './LabReports.css';

const LabReports = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const labReports = [
    {
      title: 'Falling Ball Viscometer Experiment',
      course: 'Fluid Mechanics',
      date: 'Spring 2023',
      description: 'Determined the viscosities of glycerol, vaseline oil, and SAE-30 vacuum-pump oil using a falling-ball viscometer. Recorded terminal velocities of a steel sphere in each fluid, computed viscosity via Stokes\' law, and validated creeping-flow assumptions by calculating Reynolds numbers.',
      topics: ['Viscosity Measurement', 'Falling-Ball Viscometer', 'Stokes\' Law', 'Reynolds Number', 'Drag Coefficient'],
      file: '/labs/FluidsLab3.pdf',
      featured: true
    },
    {
      title: 'Modeling and PID Disturbance Rejection in Quadcopter Control',
      course: 'Control Systems',
      date: 'Spring 2023',
      description: 'Developed a MATLAB/Simulink model of a quadcopter attitude loop incorporating sensor delays and wind gust disturbances. Designed and analyzed a PID controller to compensate for lag and reject external torques.',
      topics: ['Sensor Delay Modeling', 'Padé Approximation', 'Wind Disturbance Modeling', 'PID Control', 'Quadcopter Stability'],
      file: '/labs/CTRLS_Project.pdf',
      featured: true
    },
    {
      title: 'Venturi Tube Flowmeter Characterization',
      course: 'Fluid Mechanics',
      date: 'Spring 2023',
      description: 'Investigated flow through a Venturi tube to verify Bernoulli\'s principle and calibrate it as a flowmeter. Measured static-pressure drops with manometric tubes and total pressure with a Pitot tube at various flow rates.',
      topics: ['Bernoulli\'s Principle', 'Venturi Tube', 'Flow Rate Measurement', 'Discharge Coefficient', 'Reynolds Number'],
      file: '/labs/Fluids_Lab_4.pdf',
      featured: false
    },
    {
      title: 'MATLAB Modeling and Simulation of Transfer-Function Systems',
      course: 'Control Systems',
      date: 'Spring 2023',
      description: 'Used MATLAB to model and simulate dynamic systems via transfer functions. Derived and stepped bridged-T filter responses and simulated vehicle quarter-car suspension step response.',
      topics: ['Transfer Functions', 'MATLAB Simulation', 'Step & Ramp Responses', 'Filter Circuit Analysis', 'Suspension Modeling'],
      file: '/labs/ME_344_Lab_3.pdf',
      featured: false
    },
    {
      title: 'Loudspeaker Dynamics via Frequency-Domain Transfer Function Estimation',
      course: 'Control Systems',
      date: 'Spring 2023',
      description: 'Characterized a loudspeaker–accelerometer system by driving a Peerless CSX 145H speaker with LabVIEW signals and recording voltage/acceleration data. Used MATLAB\'s tfestimate to extract the acceleration–voltage transfer function.',
      topics: ['Transfer Function Estimation', 'Loudspeaker Dynamics', 'tfestimate', 'Frequency-Response Analysis', 'Mass-Spring-Damper Modeling'],
      file: '/labs/344_Lab_4.pdf',
      featured: false
    },
    {
      title: 'Validation Testing of a Suspension System',
      course: 'Control Systems',
      date: 'Spring 2023',
      description: 'Evaluated three candidate springs (A, B, C) for a vehicle-suspension setup. Measured step-response overshoot and settling times under 1 V input, then performed frequency sweeps and generated Bode plots.',
      topics: ['Step Response Analysis', 'Overshoot & Settling Time', 'Frequency Response', 'Bode Plot', 'Suspension Validation'],
      file: '/labs/344_Lab_5.pdf',
      featured: false
    },
    {
      title: 'PID Control of a Magnetic Levitation System',
      course: 'Control Systems',
      date: 'Spring 2023',
      description: 'Designed and tuned a closed-loop PID controller in LabVIEW to levitate a steel ball using an overhead electromagnet. Linearized the inherently nonlinear ball-magnet dynamics around equilibrium.',
      topics: ['Magnetic Levitation', 'PID Control', 'LabVIEW Implementation', 'System Linearization', 'Performance Metrics'],
      file: '/labs/MagLev_Report.pdf',
      featured: true
    },
    {
      title: 'Metallography and Steel Sample Identification',
      course: 'Material Engineering',
      date: 'Fall 2022',
      description: 'Prepared three unknown metal specimens (annealed steel, quenched steel, cast iron) for microscopic and hardness analyses. Mounted, ground, polished, and etched with Nital to reveal microstructures.',
      topics: ['Metallography', 'Hardness Testing', 'Microstructure Etching', 'Phase Identification', 'Grain-Size Measurement'],
      file: '/labs/ME_221_Lab_4___5.pdf',
      featured: false
    },
    {
      title: 'Structural Design and Analysis of a Pump–Support Platform',
      course: 'Design for Analysis',
      date: 'Spring 2023',
      description: 'Engineered a height-adjustable platform to support a centrifugal pump via dual angled arms. Performed static equilibrium to determine reaction forces and moments, then carried out comprehensive stress analyses.',
      topics: ['Equilibrium Calculations', 'Stress Analysis', 'Buckling & Deflection', 'Factor of Safety', 'Finite Element Validation'],
      file: '/labs/GA6.pdf',
      featured: true
    },
    {
      title: 'Thermocouple Calibration & Steady-State Heat Conduction',
      course: 'Thermodynamics',
      date: 'Fall 2022',
      description: 'Calibrated Type-K thermocouples against a reference standard, then measured temperature profiles in a composite cylindrical rod under steady-state heat conduction.',
      topics: ['Thermocouple Calibration', 'Steady-State Conduction', 'Thermal Conductivity', 'Heat Flux', 'Uncertainty Analysis'],
      file: '/labs/Thermo Lab 1 – Group A.pdf',
      featured: false
    },
    {
      title: 'Cantilever Beam Deflection & Stress Validation',
      course: 'Design for Analysis',
      date: 'Fall 2022',
      description: 'Analyzed deflection and bending stress in cantilever beams loaded with point and distributed forces. Conducted experiments on aluminum and steel specimens and compared results to Euler-Bernoulli beam-theory predictions.',
      topics: ['Beam Deflection', 'Bending Stress', 'Cantilever Beams', 'Euler-Bernoulli Theory', 'Experimental Validation'],
      file: '/labs/ME321 Group Work.pdf',
      featured: false
    },
    {
      title: 'Torsional Vibration of a Two-Mass Shaft System',
      course: 'Design for Analysis',
      date: 'Fall 2022',
      description: 'Modeled a two-mass, two-spring torsional system to derive natural frequencies and mode shapes. Simulated transient response to impulse torques and compared theoretical predictions with experimental measurements.',
      topics: ['Torsional Vibration', 'Natural Frequencies', 'Mode Shapes', 'Rotational Dynamics', 'System Modeling'],
      file: '/labs/ME321 – Individual Assignment 5.pdf',
      featured: false
    },
    {
      title: 'Experimental Otto Cycle Efficiency Analysis',
      course: 'Thermodynamics',
      date: 'Spring 2023',
      description: 'Ran a single-cylinder spark-ignition engine to capture pressure–volume data throughout the cycle. Constructed PV diagrams, calculated thermal efficiency and specific work, and compared actual performance versus the ideal Otto cycle.',
      topics: ['Otto Cycle', 'PV Diagram', 'Thermal Efficiency', 'Internal Combustion Engine', 'Cycle Analysis'],
      file: '/labs/ME 331_ Lab 3 Otto Cycle.pdf',
      featured: false
    },
    {
      title: 'Impact Testing & Coefficient of Restitution',
      course: 'Dynamics',
      date: 'Fall 2022',
      description: 'Dropped steel spheres onto different surfaces, recorded rebound heights, and calculated coefficients of restitution to quantify energy loss. Analyzed how material properties and impact velocity affect restitution.',
      topics: ['Coefficient of Restitution', 'Impact Dynamics', 'Energy Loss', 'Rebound Testing', 'Material Properties'],
      file: '/labs/Coefficient_of_Restitution_Lab.pdf',
      featured: false
    },
    {
      title: 'Curling Stone Collision & Restitution Analysis',
      course: 'Dynamics',
      date: 'Fall 2022',
      description: 'Studied collisions between curling stones on ice. Measured pre- and post-impact velocities for head-on and glancing collisions, computed restitution coefficients, and assessed how ice surface conditions influence collision behavior.',
      topics: ['Curling Stones', 'Collision Dynamics', 'Restitution Coefficient', 'Surface Friction', 'Kinematic Analysis'],
      file: '/labs/Coefficient_of_Restitution_Lab__Curling_.pdf',
      featured: false
    },
    {
      title: 'Transient & Steady-State RLC Circuit Analysis',
      course: 'Electrical Engineering',
      date: 'Fall 2022',
      description: 'Examined an RLC circuit\'s response to step and sinusoidal inputs. Derived time-domain expressions, measured overshoot and settling time, generated Bode plots for steady-state, and confirmed results with SPICE simulations.',
      topics: ['RLC Circuits', 'Transient Response', 'Steady-State Analysis', 'Bode Plot', 'SPICE Simulation'],
      file: '/labs/Circuit_Analysis_Report.pdf',
      featured: false
    },
    {
      title: 'Differential-Drive Robot Dynamics & Control',
      course: 'Dynamics',
      date: 'Spring 2023',
      description: 'Developed kinematic and dynamic models for a differential-drive mobile robot. Designed a state-feedback controller for trajectory tracking, implemented the control in MATLAB/ROS, and conducted experiments to evaluate path-following accuracy.',
      topics: ['Robot Dynamics', 'Differential Drive', 'State-Feedback Control', 'Trajectory Tracking', 'ROS Implementation'],
      file: '/labs/Dynamics_Final_Project.pdf',
      featured: true
    },
    {
      title: 'Laminar vs. Turbulent Pipe Flow Characterization',
      course: 'Fluid Mechanics',
      date: 'Spring 2023',
      description: 'Measured pressure drop across smooth and rough pipes at varying flow rates to identify laminar, transitional, and turbulent regimes. Calculated Reynolds numbers and friction factors, and compared experimental data to the Moody chart.',
      topics: ['Pipe Flow', 'Reynolds Number', 'Friction Factor', 'Laminar-Turbulent Transition', 'Moody Chart'],
      file: '/labs/Fluids_L2.pdf',
      featured: false
    },
    {
      title: 'Tensile Testing of 6061-T6 Aluminum',
      course: 'Mechanics of Solids',
      date: 'Fall 2022',
      description: 'Measured the tensile strength of a 6061-T6 aluminum specimen by recording force, displacement, and strain up to fracture. Generated stress–strain curves in MATLAB/Excel, determined Young\'s modulus, 0.2% offset yield stress, and ultimate tensile stress.',
      topics: ['Tensile Testing', 'Stress–Strain Analysis', 'Young\'s Modulus', 'Yield & Ultimate Strength', 'Mohr\'s Circle'],
      file: '/labs/EGR 201L Lab Report.pdf',
      featured: false
    },
    {
      title: 'Torsion Testing of Aluminum 6061',
      course: 'Material Engineering',
      date: 'Fall 2022',
      description: 'Performed torsion tests on an Al 6061 specimen, recording torque and angular rotation (via video tracking). Converted rotations to shear strain, calculated shear stress, and plotted torque-vs-strain curves in MATLAB.',
      topics: ['Torsion Test', 'Shear Strain & Stress', 'Torque Conversion', 'MATLAB Plotting', 'Stiffness Determination'],
      file: '/labs/Lab #2 - Torsion.pdf',
      featured: false
    },
    {
      title: 'Euler Buckling of Aluminum Columns',
      course: 'Material Engineering',
      date: 'Fall 2022',
      description: 'Tested four Al 6061 columns of varying lengths under axial compression to record critical failure loads. Calculated slenderness ratios, plotted theoretical Euler buckling and yield lines versus experimental loads, and quantified percent errors.',
      topics: ['Column Buckling', 'Slenderness Ratio', 'Euler\'s Critical Load', 'Experimental Verification', 'Error Analysis'],
      file: '/labs/Lab 3 - Buckling of Columns.pdf',
      featured: false
    },
    {
      title: 'Cost & Design Analysis of Alarm Clocks',
      course: 'Product Design',
      date: 'Fall 2022',
      description: 'Disassembled and benchmarked two consumer alarm clocks—standard and vibrating models. Documented materials, subassemblies, and part costs; proposed cost-saving design changes for a more competitive product design.',
      topics: ['Product Teardown', 'Bill of Materials', 'Cost Analysis', 'Design Optimization', 'Assembly Documentation'],
      file: '/labs/Vibrating Clock Lab1.pdf',
      featured: false
    },
    {
      title: 'Design & Testing of a Mousetrap-Powered Sand Vehicle',
      course: 'Product Design',
      date: 'Fall 2022',
      description: 'Developed and iteratively refined a tricycle-style sand vehicle powered by a single mousetrap. Explored sled vs. wheel drives, gear ratios, and sand-traction issues through hands-on prototyping.',
      topics: ['Mechanical Design', 'Prototyping Iterations', 'Traction Optimization', 'Performance Testing', 'Experimental Memo'],
      file: '/labs/DC3 Mousetrap Racecar Memo.pdf',
      featured: false
    },
    {
      title: 'Nozzle Geometry Effects on Tank Discharge',
      course: 'Fluid Mechanics',
      date: 'Spring 2023',
      description: 'Measured quasi-steady discharge times from a cylindrical tank through three nozzle types (borda, sharp-edged, bare hole). Verified assumptions, calculated contraction coefficients via linear regression, and compared experimental vs. theoretical Torricelli discharge.',
      topics: ['Tank Discharge', 'Nozzle Coefficient', 'Torricelli\'s Law', 'Reynolds Number', 'Dimensional Analysis'],
      file: '/labs/Water Tank Discharge Lab Report.pdf',
      featured: false
    },
    {
      title: 'Momentum-Transfer Forces of Water Jets',
      course: 'Fluid Mechanics',
      date: 'Spring 2023',
      description: 'Quantified forces exerted by a constant-flow water jet on flat, 30° inclined, and hemispherical targets. Balanced jet-force against calibrated masses, plotted F vs. Q, and determined experimental drag coefficients.',
      topics: ['Jet Impact', 'Momentum Conservation', 'Force Measurement', 'Drag Coefficient', 'Surface Geometry'],
      file: '/labs/Jet Impact on Surfaces.pdf',
      featured: false
    },
    {
      title: 'PID Pitch Control of a Quadcopter',
      course: 'Control Systems',
      date: 'Spring 2023',
      description: 'Reviewed quadrotor dynamics and PID control literature, then developed a MATLAB/Simulink–based pitch control model. Derived the open-loop transfer function for pitch torque and designed a PID loop for set-point tracking.',
      topics: ['Quadcopter Dynamics', 'PID Control', 'Transfer Function Modeling', 'Simulation Design', 'Disturbance Rejection'],
      file: '/labs/Quadrotor Drone Control.pdf',
      featured: false
    },
    {
      title: 'LabVIEW Sequencer Design ("Let\'s Go Duke!")',
      course: 'Control Systems',
      date: 'Spring 2023',
      description: 'Introduced LabVIEW programming by building a continuous three-step sequencer that cycles three Boolean LEDs and a string indicator through "Let\'s," "Go," and "Duke!" states. Employed loops with shift registers, 500 ms timers, and case structures.',
      topics: ['LabVIEW Basics', 'State Machine', 'Boolean & String Indicators', 'Dataflow Programming', 'Virtual Instruments'],
      file: '/labs/ME 344 Lab 1.pdf',
      featured: false
    },
    {
      title: 'Privacy vs. Pre-emptive Surveillance in Tech',
      course: 'Research Paper',
      date: 'Spring 2023',
      description: 'Argues that individual online privacy rights must take precedence over government or corporate data-collection for crime prevention. Explores ethical tensions between personal liberty and collective security.',
      topics: ['Internet Privacy', 'Surveillance Ethics', 'Government–Tech Relations', 'Individual Rights', 'Democratic Principles'],
      file: '/labs/Privacy Precedes Caution.pdf',
      featured: true
    },
    {
      title: 'American Acculturation & Depression in Asian Immigrants',
      course: 'Research Paper',
      date: 'Spring 2023',
      description: 'Reviews literature on depression prevalence among Asian migrants to the U.S., contrasting origin-country rates with post-immigration figures. Analyzes subculture variations and the role of bicultural identity strength.',
      topics: ['Acculturation', 'Depression Epidemiology', 'Asian Immigrants', 'Cultural Identity', 'COVID-19 Impact'],
      file: '/labs/Jaivir Parmar - Research Paper.pdf',
      featured: true
    },
    {
      title: 'Solar & Maternal Health Landscape in Benin, South Sudan & Mozambique',
      course: 'Research Report',
      date: 'Spring 2023',
      description: 'Provides a country-by-country assessment of rural electrification and health systems in Benin, South Sudan, and Mozambique. Covers energy access rates, ongoing solarization initiatives, and maternal health metrics.',
      topics: ['Energy Access', 'Solar Mini-Grids', 'Maternal Health Metrics', 'Partner Landscape', 'Socioeconomic Barriers'],
      file: '/labs/Landscape Report_ Final Draft.pdf',
      featured: true
    }
  ];

  const certifications = [
    {
      title: 'Vulnerable Subjects - Research Involving Prisoners',
      issuer: 'CITI Program',
      date: 'January 2024',
      credentialId: '60392599',
      description: 'Certification for conducting research involving prisoners as vulnerable subjects',
      featured: true
    },
    {
      title: 'Vulnerable Subjects - Research Involving Pregnant Women, Fetuses, and Neonates',
      issuer: 'CITI Program',
      date: 'January 2024',
      credentialId: '60392600',
      description: 'Certification for conducting research involving pregnant women, fetuses, and neonates as vulnerable subjects',
      featured: true
    },
    {
      title: 'Vulnerable Subjects - Research Involving Children',
      issuer: 'CITI Program',
      date: 'November 2023',
      credentialId: '59638036',
      description: 'Certification for conducting research involving children as vulnerable subjects',
      featured: false
    },
    {
      title: 'Social-Behavioral-Educational Research',
      issuer: 'CITI Program',
      date: 'November 2023',
      credentialId: '59638037',
      description: 'Certification for conducting social-behavioral-educational research',
      featured: false
    }
  ];

  return (
    <div className="lab-reports">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="lab-reports-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">Research</h1>
          <p className="page-subtitle">
            Engineering laboratory reports, technical analyses, research documentation, and professional certifications
          </p>
        </motion.div>

                 {/* Reports Grid */}
         <motion.section 
           className="reports-section section"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
         >
           <h2 className="section-title">Laboratory Reports & Research Papers</h2>
           
           {/* Filter Buttons */}
           <motion.div 
             className="filter-buttons"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             viewport={{ once: true }}
           >
             <button
               className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
               onClick={() => setActiveFilter('all')}
             >
               <FiFilter />
               All Reports
             </button>
             <button
               className={`filter-btn ${activeFilter === 'Fluid Mechanics' ? 'active' : ''}`}
               onClick={() => setActiveFilter('Fluid Mechanics')}
             >
               <FiFilter />
               Fluid Mechanics
             </button>
             <button
               className={`filter-btn ${activeFilter === 'Control Systems' ? 'active' : ''}`}
               onClick={() => setActiveFilter('Control Systems')}
             >
               <FiFilter />
               Control Systems
             </button>
             <button
               className={`filter-btn ${activeFilter === 'Material Engineering' ? 'active' : ''}`}
               onClick={() => setActiveFilter('Material Engineering')}
             >
               <FiFilter />
               Material Engineering
             </button>
             <button
               className={`filter-btn ${activeFilter === 'Design for Analysis' ? 'active' : ''}`}
               onClick={() => setActiveFilter('Design for Analysis')}
             >
               <FiFilter />
               Design for Analysis
             </button>
             <button
               className={`filter-btn ${activeFilter === 'Thermodynamics' ? 'active' : ''}`}
               onClick={() => setActiveFilter('Thermodynamics')}
             >
               <FiFilter />
               Thermodynamics
             </button>
             <button
               className={`filter-btn ${activeFilter === 'Dynamics' ? 'active' : ''}`}
               onClick={() => setActiveFilter('Dynamics')}
             >
               <FiFilter />
               Dynamics
             </button>
             <button
               className={`filter-btn ${activeFilter === 'Mechanics of Solids' ? 'active' : ''}`}
               onClick={() => setActiveFilter('Mechanics of Solids')}
             >
               <FiFilter />
               Mechanics of Solids
             </button>
             <button
               className={`filter-btn ${activeFilter === 'Product Design' ? 'active' : ''}`}
               onClick={() => setActiveFilter('Product Design')}
             >
               <FiFilter />
               Product Design
             </button>
             <button
               className={`filter-btn ${activeFilter === 'Research Paper' ? 'active' : ''}`}
               onClick={() => setActiveFilter('Research Paper')}
             >
               <FiFilter />
               Research Papers
             </button>
           </motion.div>

                      <div className="reports-grid">
             {labReports
               .filter(report => activeFilter === 'all' || report.course === activeFilter)
               .map((report, index) => (
              <motion.div
                key={index}
                className={`report-card card ${report.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {report.featured && (
                  <div className="featured-badge">Featured</div>
                )}
                
                <div className="report-header">
                  <div className="report-icon">
                    <FiFileText />
                  </div>
                  <div className="report-meta">
                    <span className="report-course">{report.course}</span>
                    <span className="report-date">{report.date}</span>
                  </div>
                </div>

                <h3 className="report-title">{report.title}</h3>
                <p className="report-description">{report.description}</p>
                
                <div className="report-topics">
                  <h4>Key Topics:</h4>
                  <div className="topic-tags">
                    {report.topics.map((topic, i) => (
                      <span key={i} className="topic-tag">{topic}</span>
                    ))}
                  </div>
                </div>

                <div className="report-actions">
                  <a 
                    href={report.file} 
                    className="btn btn-primary"
                    download
                  >
                    <FiDownload />
                    Download Report
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Licenses & Certifications */}
        <motion.section 
          className="certifications-section section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Licenses & Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className={`certification-card card ${cert.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {cert.featured && (
                  <div className="featured-badge">Featured</div>
                )}
                
                <div className="certification-header">
                  <div className="certification-icon">
                    <FiAward />
                  </div>
                  <div className="certification-meta">
                    <span className="certification-issuer">{cert.issuer}</span>
                    <span className="certification-date">{cert.date}</span>
                  </div>
                </div>

                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-description">{cert.description}</p>
                
                <div className="certification-details">
                  <span className="credential-id">Credential ID: {cert.credentialId}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Additional Resources */}
        <motion.section 
          className="resources-section section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Additional Resources</h2>
          <div className="resources-grid">
            <motion.div
              className="resource-card card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="resource-icon">
                <FiBook />
              </div>
              <h3>Research Papers</h3>
              <p>Academic papers and research publications in engineering and technology</p>
              <a href="/papers" className="btn btn-secondary">View Papers</a>
            </motion.div>

            <motion.div
              className="resource-card card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="resource-icon">
                <FiFileText />
              </div>
              <h3>Technical Documentation</h3>
              <p>Detailed technical specifications and engineering documentation</p>
              <a href="/docs" className="btn btn-secondary">View Documentation</a>
            </motion.div>

            <motion.div
              className="resource-card card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="resource-icon">
                <FiCalendar />
              </div>
              <h3>Project Presentations</h3>
              <p>Engineering project presentations and technical demonstrations</p>
              <a href="/presentations" className="btn btn-secondary">View Presentations</a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default LabReports; 