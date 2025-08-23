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
            Passionate about technology, finance, and engineering with a drive to create innovative solutions
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
                with a focus on Innovation & Entrepreneurship. My academic journey has equipped me with a unique 
                blend of technical skills across software development, quantitative finance, and mechanical engineering.
              </p>
              <p>
                I've had the opportunity to work in diverse environments - from software engineering at WisdomTree 
                Investments to AI research at Duke Health, and entrepreneurial ventures like JPcommerce. This 
                multidisciplinary experience has shaped my approach to problem-solving and innovation.
              </p>
              <p>
                I'm particularly interested in fintech, AI-driven applications, and the intersection of 
                technology and business. I believe in creating solutions that not only solve technical 
                challenges but also create positive societal impact and business value.
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