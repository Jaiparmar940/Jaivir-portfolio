import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiCalendar, FiCode, FiFileText, FiBookOpen, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const skills = {
    'Programming Languages': ['Java', 'JavaScript', 'Python', 'C++', 'TypeScript', 'Swift'],
    'Web & Mobile Development': ['React', 'React Native', 'SwiftUI', 'Firebase', 'Spring Boot', 'Node.js'],
    'Finance & Analytics': ['Time-series Analysis', 'ANN Forecasting', 'Sentiment Analysis', 'Market Modeling', 'SARIMA'],
    'Engineering Tools': ['SolidWorks', 'AutoCAD', 'CNC Machining', 'FEA', 'MATLAB', 'Fusion360'],
    'Business & Leadership': ['Entrepreneurship', 'Project Management', 'Technical Leadership', 'Problem Solving']
  };

  const education = [
    {
      degree: 'B.S. Computer Science, B.S.E. Mechanical Engineering, Innovation & Entrepreneurship',
      school: 'Duke University',
      year: 'Expected May 2026'
    }
  ];

  const navigationLinks = [
    {
      title: 'Projects',
      description: 'Explore my portfolio of software, engineering, and business projects',
      icon: FiCode,
      link: '/projects',
      color: '#3b82f6'
    },
    {
      title: 'Resume',
      description: 'View my professional experience, skills, and qualifications',
      icon: FiFileText,
      link: '/resume',
      color: '#10b981'
    },
    {
      title: 'Research & Lab Reports',
      description: 'Browse my academic research and engineering lab reports',
      icon: FiBookOpen,
      link: '/lab-reports',
      color: '#f59e0b'
    }
  ];

  return (
    <div className="about">
      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">
            Strategic problem-solver with proven business impact, combining analytical rigor with entrepreneurial execution
          </p>
        </motion.div>

        {/* Personal Info Section */}
        <motion.section 
          className="personal-info section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="info-grid">
            <div className="info-card card">
              <motion.div 
                className="profile-image-container"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src={process.env.PUBLIC_URL + "/profile.jpg"} 
                  alt="Jaivir (Jay) Parmar" 
                  className="about-profile-image"
                />
              </motion.div>
              <h3>Personal Information</h3>
              <div className="info-list">
                <div className="info-item">
                  <FiMapPin />
                  <span>Santa Maria, CA</span>
                </div>
                <div className="info-item">
                  <FiMail />
                  <span>jay.parmar@duke.edu</span>
                </div>
                <div className="info-item">
                  <FiCalendar />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>

            <div className="bio-card card">
              <h3>Bio</h3>
              <p>
                I'm a dual-degree student at Duke University pursuing Computer Science and Mechanical Engineering 
                with a focus on Innovation & Entrepreneurship. My unique technical and analytical foundation enables 
                me to approach complex business problems with both quantitative rigor and creative problem-solving.
              </p>
              <p>
                I've demonstrated proven business impact through founding Impression, an AI-driven platform that 
                identified a $2.8B market opportunity and generated measurable results through data-driven optimization. 
                Additionally, I built JPcommerce from the ground up, generating $100,000+ in revenue with 42% profit 
                margins through strategic market analysis and operational excellence. These experiences taught me to 
                think like a consultant - identifying opportunities, analyzing data, and executing solutions that drive 
                real business value.
              </p>
              <p>
                I'm passionate about solving complex business challenges at the intersection of technology and strategy. 
                My experience spans quantitative analysis, market research, operational optimization, and stakeholder 
                management - skills that translate directly to helping clients navigate their most critical business 
                decisions and drive sustainable growth.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          className="skills section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
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

        {/* Education Section */}
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
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="education-header">
                  <h3 className="education-degree">{edu.degree}</h3>
                </div>
                <p className="education-school">{edu.school}</p>
                <p className="education-year">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Navigation Links Section */}
        <motion.section 
          className="navigation-links section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Explore My Work</h2>
          <div className="navigation-links-grid">
            {navigationLinks.map((navItem, index) => (
              <motion.div
                key={navItem.title}
                className="navigation-link-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Link to={navItem.link} className="navigation-link-content">
                  <div className="navigation-link-icon" style={{ color: navItem.color }}>
                    <navItem.icon size={32} />
                  </div>
                  <div className="navigation-link-text">
                    <h3 className="navigation-link-title">{navItem.title}</h3>
                    <p className="navigation-link-description">{navItem.description}</p>
                  </div>
                  <div className="navigation-link-arrow">
                    <FiArrowRight />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About; 