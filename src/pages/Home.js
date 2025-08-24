import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiTrendingUp, FiSettings, FiDownload } from 'react-icons/fi';
import { usePersona } from '../contexts/PersonaContext';
import { projectsData } from '../data/projectsData';
import './Home.css';

const Home = () => {
  const { config, isLoading, error } = usePersona();
  
  // Debug logging
  console.log('Home component: config =', config);
  console.log('Home component: isLoading =', isLoading);
  console.log('Home component: error =', error);
  
  // Show loading state
  if (isLoading) {
    return (
      <div className="home" style={{ paddingTop: '80px', textAlign: 'center' }}>
        <div className="container">
          <h1>Loading...</h1>
          <p>Initializing persona system...</p>
        </div>
      </div>
    );
  }
  
  // Show error state
  if (error) {
    return (
      <div className="home" style={{ paddingTop: '80px', textAlign: 'center' }}>
        <div className="container">
          <h1>Error Loading Portfolio</h1>
          <p>There was an error initializing the persona system.</p>
          <pre style={{ textAlign: 'left', background: '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
            {error.toString()}
          </pre>
        </div>
      </div>
    );
  }
  
  // Show fallback if no config
  if (!config) {
    return (
      <div className="home" style={{ paddingTop: '80px', textAlign: 'center' }}>
        <div className="container">
          <h1>Portfolio Loading...</h1>
          <p>Please wait while we load your personalized experience.</p>
        </div>
      </div>
    );
  }
  
  // Get featured projects for this persona
  const featuredProjects = projectsData.filter(project => 
    config.featuredHomeProjects.includes(project.id)
  );

  console.log('Home component: featuredProjects =', featuredProjects);

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
                {config.headline}
              </p>
              <p className="hero-description">
                {config.description}
              </p>
              
              {/* Proof Bar */}
              <motion.div 
                className="proof-bar"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {config.proofStats.map((stat, index) => (
                  <div key={stat.label} className="proof-stat">
                    <div className="proof-value">{stat.value}</div>
                    <div className="proof-label">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              <div className="hero-actions">
                <Link to={config.ctaLink} className="btn btn-primary">
                  {config.cta}
                  <FiArrowRight />
                </Link>
                <a href={config.resumeUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  <FiDownload />
                  Download Resume
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

      {/* Featured Projects Section */}
      <section className="featured-projects section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Featured {config.name} Projects</h2>
            <p className="section-subtitle">
              {config.subhead}
            </p>
          </motion.div>

          <div className="featured-projects-grid">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="featured-project-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="project-image">
                  <img 
                    src={project.images && project.images.length > 0 ? project.images[0] : project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = project.image;
                    }}
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <Link to={`/project-detail/${project.detailSlug || project.id}`} className="project-link">
                    View Project <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
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
              <a href={config.resumeUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Resume</a>
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