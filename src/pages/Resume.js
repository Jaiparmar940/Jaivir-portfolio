import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGlobe } from 'react-icons/fi';
import './Resume.css';

const Resume = () => {
  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'jay.parmar@duke.edu' },
    { icon: FiMapPin, label: 'Location', value: 'Durham, NC' },
    { icon: FiGlobe, label: 'LinkedIn', value: 'linkedin.com/in/Jaivir-Parmar' }
  ];

  const skills = {
    'Programming Languages': ['Java', 'JavaScript', 'Python', 'C++', 'TypeScript', 'Swift'],
    'Web & Mobile Development': ['React', 'React Native', 'SwiftUI', 'Firebase', 'Spring Boot', 'Node.js'],
    'Finance & Analytics': ['Time-series Analysis', 'ANN Forecasting', 'Sentiment Analysis', 'Market Modeling', 'SARIMA'],
    'Engineering Tools': ['SolidWorks', 'AutoCAD', 'CNC Machining', 'FEA', 'MATLAB', 'Fusion360'],
    'Business & Leadership': ['Entrepreneurship', 'Project Management', 'Technical Leadership', 'Problem Solving']
  };

  const experience = [
    {
      title: 'Software Engineering Intern',
      company: 'WisdomTree Investments',
      period: 'May 2025 - August 2025',
      location: 'New York, NY',
      description: [
        'Designed and implemented responsive React UI for commission-free trading platform',
        'Integrated real-time market data feeds with socket-based updates for live charts and portfolio metrics',
        'Collaborated with compliance and security teams to implement secure authentication flows (OAuth, multi-factor)',
        'Optimized performance using code-splitting, lazy loading, and list virtualization for large portfolios'
      ]
    },
    {
      title: 'Data Manager & Frontend Developer',
      company: 'Duke Health — Sense to Know Study',
      period: 'May 2023 - May 2025',
      location: 'Durham, NC',
      description: [
        'Managed and validated 5,000+ infant behavioral data entries for AI-driven autism detection application',
        'Developed Java user interface tool to visualize and verify model training pipelines, cutting manual verification time by 40%',
        'Trained 10 research assistants on efficient use of the new UI system'
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
      period: 'Expected May 2026',
      relevant: ['Dual-degree program', 'Innovation & Entrepreneurship focus', 'Durham, NC']
    }
  ];

  const projects = [
    {
      title: 'Impression — AI-Driven Dating Profile Optimization',
      description: 'Founder & Lead Developer of AI-driven platform with real-time A/B testing and GPT API integration',
      tech: ['TypeScript', 'React', 'Firebase', 'GPT API', 'Cloud Functions'],
      link: 'https://impressiondating.com'
    },
    {
      title: 'Workly — Mobile Job Matching App',
      description: 'Full-featured SwiftUI and React Native application with real-time messaging and admin pipeline',
      tech: ['SwiftUI', 'React Native', 'Firebase', 'Python', 'Firestore'],
      link: 'https://github.com/Jaiparmar940/workly.git'
    },
    {
      title: 'Full-Stack Banking Application',
      description: 'Secure RESTful banking application with Spring Boot backend and React frontend',
      tech: ['Spring Boot', 'React', 'Spring Security', 'JWT', 'REST APIs'],
      link: 'https://github.com/Jaiparmar940/banking_application'
    },
    {
      title: 'ANN Trade Programming',
      description: 'Independent research project for U.S. options price prediction using neural networks and sentiment data',
      tech: ['Python', 'TensorFlow', 'Pandas', 'Sentiment Analysis', 'SARIMA'],
      link: 'https://github.com/jaivir/ann-trading'
    },
    {
      title: 'JPcommerce — Medical Equipment Resale Business',
      description: 'Self-started business generating $100,000+ revenue through medical equipment restoration and resale',
      tech: ['Market Analysis', 'Equipment Restoration', 'E-commerce', 'Negotiation', 'Quality Assurance'],
      link: null
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
                  <span className="contact-value">{info.value}</span>
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
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
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