import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGlobe, FiArrowRight } from 'react-icons/fi';
import './Resume.css';

const Resume = () => {
  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'jay.parmar@duke.edu', link: 'mailto:jay.parmar@duke.edu' },
    { icon: FiMapPin, label: 'Location', value: 'San Francisco, CA' },
    { icon: FiGlobe, label: 'LinkedIn', value: 'linkedin.com/in/Jaivir-Parmar', link: 'https://linkedin.com/in/Jaivir-Parmar' }
  ];

  const skills = {
    'Programming Languages': ['Java', 'JavaScript', 'Python', 'C++', 'TypeScript', 'Swift'],
    'Web & Mobile Development': ['React', 'React Native', 'SwiftUI', 'Firebase', 'Spring Boot', 'Node.js'],
    'Finance & Analytics': ['Time-series Analysis', 'ANN Forecasting', 'Sentiment Analysis', 'Market Modeling', 'SARIMA', 'Portfolio Optimization', 'Risk Management', 'Backtesting'],
    'Machine Learning': ['Hidden Markov Models', 'LSTMs', 'TensorFlow', 'PyTorch', 'Regime Detection', 'Neural Networks'],
    'Engineering Tools': ['SolidWorks', 'AutoCAD', 'CNC Machining', 'FEA', 'MATLAB', 'Fusion360'],
    'Business & Leadership': ['Entrepreneurship', 'Project Management', 'Technical Leadership', 'Problem Solving']
  };

  const experience = [
    {
      title: 'Technical Lead',
      company: 'Grid Intelligence',
      period: 'Jan 2026 - May 2026',
      location: 'Durham, NC',
      description: [
        'Led technical team for early-stage B2B SaaS startup with Duke peers predicting localized energy demand and pricing to optimize utility battery storage charge/discharge cycles',
        'Configured foundational ML model architecture and fine-tuned it across 7,000+ localized electrical nodes using 100M+ rows of ingested energy, weather, and market data',
        'Contributed to raising $100k in non-dilutive funding while balancing model accuracy, scalability, real-time inference, and business requirements for grid decarbonization'
      ]
    },
    {
      title: 'Software Engineering Intern',
      company: 'DeWitt Capital Management',
      period: 'May 2025 - Aug 2025',
      location: 'New York, NY',
      description: [
        'Built a regime-aware portfolio optimization engine that integrates minimum variance and Omega-ratio objectives under client policy constraints',
        'Developed and backtested quant models across equities, bonds, and commodities; benchmarked strategies against Bridgewater\'s All Weather ETF (ALLW)',
        'Implemented machine learning (Hidden Markov Models, LSTMs) for market regime detection, enabling dynamic shifts in risk models and asset allocations'
      ]
    },
    {
      title: 'Founder & Lead Developer',
      company: 'Impression AI',
      period: 'Jul 2025 - Sept 2025',
      location: 'Santa Maria, CA',
      description: [
        'Launched mobile platform with 200+ pilot users for real-time A/B testing of dating profiles',
        'Designed gamified rating and token system, improving feature adoption by 50% during beta',
        'Conducted competitor benchmarking and developed growth roadmap including premium features and influencer-driven marketing',
        'Led 4-person beta team, iterating weekly on usability to refine product-market fit'
      ]
    },
    {
      title: 'Founder',
      company: 'JPcommerce — Medical Equipment Repair & Resale',
      period: 'Mar 2020 - May 2025',
      location: 'Santa Maria, CA',
      description: [
        'Built medical equipment repair and resale business, generating $100K+ revenue over five years',
        'Modeled pricing across fragmented marketplaces, improving ROI by 12% through freight shipping contracts',
        'Negotiated global procurement, oversaw repairs, and delivered to underfunded healthcare systems, achieving 50+ five-star client reviews',
        'Directed operations across sourcing, restoration, logistics, and sales, reducing repair cycle time by 30%'
      ]
    },
    {
      title: 'Founder & Lead Operator',
      company: 'Comprehensive Vehicle Restoration & Resale Side Business',
      period: '2020-2026',
      location: 'Multiple Locations, United States',
      description: [
        'Procured, restored, and resold 18 vehicles, consistently achieving 15% average profit margins',
        'Managed sourcing, diagnostics, budgeting, restoration, and client negotiations in full end-to-end business model',
        'Developed daily systematic AI monitoring for Facebook Marketplace for undervalued vehicles'
      ]
    },
    {
      title: 'Data Manager & Frontend Developer',
      company: 'Duke Health — Sense to Know AI Study',
      period: 'May 2023 - May 2025',
      location: 'Durham, NC',
      description: [
        'Managed and validated 5,000+ infant behavioral data entries for AI-driven autism detection platform',
        'Developed Java tool to visualize and verify ML pipelines, reducing manual verification time by 40%',
        'Designed scalable time-series ingestion pipeline for anomaly detection across 5,000+ labeled inputs',
        'Applied statistical validation metrics (F1 score, AUC-ROC) to ensure reliability of models for live deployment'
      ]
    },
    {
      title: 'CNC Operator & Design Intern',
      company: 'Central City Machining',
      period: 'May 2022 - August 2022',
      location: 'Central City',
      description: [
        'Programmed CNC and laser cutters to fabricate precision aftermarket engine and cosmetic components',
        'Designed SolidWorks and AutoCAD models optimized with FEA for durability and material efficiency',
        'Led vehicle repair operations for profit generation, working on engines from manual Porsche to modern transmissions'
      ]
    }
  ];

  const education = [
    {
      degree: 'B.S. Computer Science, B.S.E. Mechanical Engineering, Innovation & Entrepreneurship',
      school: 'Duke University',
      period: 'Graduated May 2026',
      relevant: ['Double Major BSE', 'Innovation & Entrepreneurship certificate', 'Durham, NC']
    }
  ];

  const projects = [
    {
      title: 'JPcommerce — Medical Equipment Resale Business',
      description: 'Self-started business generating $100,000+ revenue through medical equipment restoration and resale',
      tech: ['Market Analysis', 'Equipment Restoration', 'E-commerce', 'Negotiation', 'Quality Assurance'],
      detailSlug: 'jpcommerce-detail',
      externalLink: null
    },
    {
      title: 'Impression — AI-Driven Dating Profile Optimization',
      description: 'Founder & Lead Developer of AI-driven platform with real-time A/B testing and GPT API integration',
      tech: ['TypeScript', 'React', 'Firebase', 'GPT API', 'Cloud Functions'],
      detailSlug: 'impression-detail',
      externalLink: 'https://impressiondating.com'
    },
    {
      title: 'Workly — Mobile Job Matching App',
      description: 'Full-featured SwiftUI and React Native application with real-time messaging and admin pipeline',
      tech: ['SwiftUI', 'React Native', 'Firebase', 'Python', 'Firestore'],
      detailSlug: 'workly-detail',
      externalLink: 'https://github.com/Jaiparmar940/workly.git'
    },
    {
      title: 'Full-Stack Banking Application',
      description: 'Secure RESTful banking application with Spring Boot backend and React frontend',
      tech: ['Spring Boot', 'React', 'Spring Security', 'JWT', 'REST APIs'],
      detailSlug: 'banking-application-detail',
      externalLink: 'https://github.com/Jaiparmar940/banking_application'
    },
    {
      title: 'ANN Trade Programming',
      description: 'Independent research project for U.S. options price prediction using neural networks and sentiment data',
      tech: ['Python', 'TensorFlow', 'Pandas', 'Sentiment Analysis', 'SARIMA'],
      detailSlug: 'ann-trade-detail',
      externalLink: 'https://github.com/jaivir/ann-trading'
    }
  ];

  return (
    <div className="resume">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="resume-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">Resume</h1>
          <p className="page-subtitle">
            Professional experience, skills, and achievements
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.section 
          className="contact-info section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Contact Information</h2>
          <div className="contact-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                className="contact-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <info.icon />
                <div>
                  <span className="contact-label">{info.label}</span>
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="contact-value contact-link">
                      {info.value}
                    </a>
                  ) : (
                    <span className="contact-value">{info.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section 
          className="education section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Education</h2>
          <div className="education-list">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-item card"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="education-header">
                  <div>
                    <h3 className="education-degree">{edu.degree}</h3>
                    <p className="education-school">{edu.school}</p>
                  </div>
                  <div className="education-meta">
                    <span className="education-period">{edu.period}</span>
                  </div>
                </div>
                <ul className="education-relevant">
                  {edu.relevant.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section 
          className="experience section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-item card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-period">{exp.period}</span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                </div>
                <ul className="experience-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section 
          className="projects section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Key Projects</h2>
          <div className="projects-list">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-item card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    <Link 
                      to={`/project-detail/${project.detailSlug}`}
                      className="project-link primary"
                    >
                      View Details <FiArrowRight />
                    </Link>
                    {project.externalLink && (
                      <a 
                        href={project.externalLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link secondary"
                      >
                        External Link
                      </a>
                    )}
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section 
          className="skills section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                className="skill-category card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="skill-category-title">{category}</h3>
                <div className="skill-tags">
                  {skillList.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Resume; 