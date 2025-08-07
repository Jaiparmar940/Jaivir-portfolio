import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiMapPin, FiCalendar } from 'react-icons/fi';
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

  const experience = [
    {
      title: 'Software Engineering Intern',
      company: 'WisdomTree Investments',
      period: 'May 2025 - August 2025',
      description: 'Frontend React Developer in New York, NY. Designed responsive UI for commission-free trading platform, integrated real-time market data feeds, and implemented secure authentication flows.'
    },
    {
      title: 'Data Manager & Frontend Developer',
      company: 'Duke Health — Sense to Know Study',
      period: 'May 2023 - May 2025',
      description: 'Managed 5,000+ infant behavioral data entries for AI-driven autism detection application. Developed Java UI tool for model training pipeline visualization, reducing verification time by 40%.'
    },
    {
      title: 'CNC Operator & Design Intern',
      company: 'Central City Machining',
      period: 'May 2022 - August 2022',
      description: 'Programmed CNC and laser cutters for precision components, designed SolidWorks models with FEA optimization, and led vehicle repair operations for profit generation.'
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

            <div className="info-card card">
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
              <a href="/resume.pdf" className="btn btn-primary" download>
                <FiDownload />
                Download Resume
              </a>
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

        {/* Experience Section */}
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
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-description">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About; 