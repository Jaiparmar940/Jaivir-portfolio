import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiCalendar, FiCode, FiFileText, FiBookOpen, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { usePersona } from '../contexts/PersonaContext';
import './About.css';

const About = () => {
  const { config } = usePersona();
  
  // Dynamic skills based on persona
  const getSkills = () => {
    if (config?.shortName === 'YC') {
      return {
        'Entrepreneurship': ['Venture Building', 'Market Research', 'Business Strategy', 'Product Development', 'Growth Hacking', 'Fundraising'],
        'Technical Skills': ['Full-Stack Development', 'AI/ML Implementation', 'Data Analysis', 'System Architecture', 'Cloud Computing', 'Mobile Development'],
        'Business Operations': ['Financial Modeling', 'Operations Management', 'Team Leadership', 'Strategic Planning', 'Customer Acquisition', 'Revenue Optimization'],
        'Engineering & Design': ['CAD Design', 'Prototyping', 'Manufacturing', 'Quality Control', 'Process Optimization', 'Innovation Management']
      };
    } else {
      return {
        'Programming Languages': ['Java', 'JavaScript', 'Python', 'C++', 'TypeScript', 'Swift'],
        'Web & Mobile Development': ['React', 'React Native', 'SwiftUI', 'Firebase', 'Spring Boot', 'Node.js'],
        'Finance & Analytics': ['Time-series Analysis', 'ANN Forecasting', 'Sentiment Analysis', 'Market Modeling', 'SARIMA'],
        'Engineering Tools': ['SolidWorks', 'AutoCAD', 'CNC Machining', 'FEA', 'MATLAB', 'Fusion360'],
        'Business & Leadership': ['Entrepreneurship', 'Project Management', 'Technical Leadership', 'Problem Solving']
      };
    }
  };

  const skills = getSkills();

  const education = [
    {
      degree: 'B.S. Computer Science, B.S.E. Mechanical Engineering, Innovation & Entrepreneurship',
      school: 'Duke University',
      year: 'Expected May 2026'
    }
  ];

  // Dynamic navigation links based on persona
  const getNavigationLinks = () => {
    if (config?.shortName === 'YC') {
      return [
        {
          title: 'My Ventures',
          description: 'Explore the businesses and ventures I\'ve founded and scaled',
          icon: FiCode,
          link: '/projects',
          color: '#3b82f6'
        },
        {
          title: 'Resume',
          description: 'View my entrepreneurial experience and business track record',
          icon: FiFileText,
          link: '/resume',
          color: '#10b981'
        },
        {
          title: 'About My Journey',
          description: 'Learn more about my entrepreneurial philosophy and approach',
          icon: FiBookOpen,
          link: '/about',
          color: '#f59e0b'
        }
      ];
    } else {
      return [
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
    }
  };

  const navigationLinks = getNavigationLinks();

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
            {config?.shortName === 'YC' 
              ? 'Serial entrepreneur building scalable ventures that solve real problems and create lasting impact'
              : 'Strategic problem-solver with proven business impact, combining analytical rigor with entrepreneurial execution'
            }
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
              {config?.shortName === 'YC' ? (
                <>
                  <p>
                    I'm a serial entrepreneur and dual-degree student at Duke University pursuing Computer Science and 
                    Mechanical Engineering with a focus on Innovation & Entrepreneurship. My unique blend of technical 
                    expertise and business acumen allows me to identify market opportunities and build scalable ventures 
                    that solve real problems.
                  </p>
                  <p>
                    I've founded and scaled multiple profitable businesses, starting with JPcommerce, a resale and 
                    market arbitrage venture that generated $100,000+ in revenue with 42% profit margins. Most recently, 
                    I launched Impression, an AI-driven optimization platform where I identified a $2.8B market 
                    opportunity and built a product that delivers measurable value to users through data-driven 
                    experimentation and strategic product development.
                  </p>
                  <p>
                    My approach to entrepreneurship combines technical innovation with market validation. I believe in 
                    building products that people actually want, using data to guide decisions, and executing with 
                    operational discipline to achieve sustainable growth and impact.
                  </p>
                  <p>
                    I'm passionate about creating ventures that not only generate revenue but also make a meaningful 
                    difference in people's lives. Whether it's optimizing business processes, building AI-powered 
                    solutions, or identifying untapped market opportunities, I thrive on the challenge of turning 
                    ideas into successful, scalable businesses.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    I am a dual-degree student at Duke University pursuing Computer Science and Mechanical Engineering 
                    with a focus on Innovation & Entrepreneurship. This blend of technical and analytical training equips 
                    me to approach complex business problems with both quantitative rigor and creative problem-solving.
                  </p>
                  <p>
                    I have a track record of building ventures that generate measurable business value. As founder of 
                    Impression, an AI-driven optimization platform, I identified a $2.8B market opportunity and delivered 
                    tangible user outcomes through data-driven experimentation and product strategy. Earlier, I launched 
                    JPcommerce, a resale and market arbitrage business that generated $100,000+ in revenue with 42% profit 
                    margins by uncovering inefficiencies in fragmented markets and implementing operational improvements.
                  </p>
                  <p>
                    Across these experiences, I learned to think like an investor and consultant: spotting opportunities 
                    in overlooked markets, analyzing data to guide strategic decisions, and executing with operational 
                    discipline to unlock value.
                  </p>
                  <p>
                    I am passionate about solving high-impact business challenges at the intersection of technology, 
                    strategy, and investment, whether that means optimizing growth, improving operations, or guiding 
                    organizations through their most critical decisions to achieve sustainable results.
                  </p>
                </>
              )}
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