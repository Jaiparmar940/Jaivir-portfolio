import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiTrendingUp, FiSettings } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: FiCode,
      title: 'Software Engineering',
      description: 'Full-stack development with React, mobile apps with SwiftUI/React Native, and AI-driven applications',
      link: '/projects'
    },
    {
      icon: FiSettings,
      title: 'Mechanical Engineering',
      description: 'CAD design with SolidWorks, CNC machining, and precision component fabrication',
      link: '/resume'
    },
    {
      icon: FiTrendingUp,
      title: 'Quantitative Finance',
      description: 'ANN-based derivatives forecasting, time-series analysis, and market modeling research',
      link: '/projects'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-layout">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Jaivir (Jay)</span>
              </h1>
              <p className="hero-subtitle">
                Software Engineer • Quantitative Researcher • Mechanical Engineering Student
              </p>
              <p className="hero-description">
                Dual-degree student at Duke University passionate about AI-driven applications, 
                quantitative finance, and entrepreneurial ventures. Building solutions that create 
                both technical and business value.
              </p>
                          <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                View My Work
                <FiArrowRight />
              </Link>
              <a href="https://linkedin.com/in/jaivir-parmar" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View LinkedIn
              </a>
            </div>
            </motion.div>
            
            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src={process.env.PUBLIC_URL + "/profile.jpg"} 
                alt="Jaivir (Jay) Parmar" 
                className="profile-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">What I Do</h2>
            <p className="section-subtitle">
              Exploring the intersection of technology, finance, and engineering
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  <feature.icon />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <Link to={feature.link} className="feature-link">
                  Learn More <FiArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Quick Access</h2>
            <p className="section-subtitle">
              Navigate to different sections of my portfolio
            </p>
          </motion.div>

          <div className="quick-links-grid">
            <motion.div
              className="quick-link-card card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>Projects</h3>
              <p>Software, finance, and engineering projects</p>
              <Link to="/projects" className="btn btn-primary">View Projects</Link>
            </motion.div>

            <motion.div
              className="quick-link-card card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>Resume</h3>
              <p>Professional experience and skills</p>
              <Link to="/resume" className="btn btn-primary">View Resume</Link>
            </motion.div>

            <motion.div
              className="quick-link-card card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3>Research</h3>
              <p>Technical documentation and certifications</p>
              <Link to="/lab-reports" className="btn btn-primary">View Research</Link>
            </motion.div>


          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 