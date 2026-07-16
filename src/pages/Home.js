import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiTrendingUp, FiSettings, FiFileText, FiTool, FiTarget } from 'react-icons/fi';
import { usePersona } from '../contexts/PersonaContext';
import { projectsData } from '../data/projectsData';
import './Home.css';

const Home = () => {
  const { persona, config, isLoading, error } = usePersona();
  
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
  
  // Get featured projects for this persona in the specified order
  const featuredProjects = config.featuredHomeProjects.map(id => 
    projectsData.find(project => project.id === id)
  ).filter(Boolean);

  console.log('Home component: featuredProjects =', featuredProjects);

  // The founder positioning covers the yc2026 deep link and the default SWE persona
  const isFounder = persona === 'yc2026' || config.shortName === 'SWE';

  // Dynamic features based on persona
  const getFeatures = () => {
    if (isFounder) {
      return [
        {
          icon: FiTool,
          title: 'Physical Systems',
          description: 'Diagnosing and repairing real machines — medical equipment, vehicles to the ECU level, CNC-machined parts. The tacit knowledge that never makes it into training data.',
          link: '/projects'
        },
        {
          icon: FiTarget,
          title: 'RL Environments & Evals',
          description: 'Simulated environments where physical reasoning becomes trainable and measurable: physics-grounded scenarios, cheat-resistant graders, verifiable rewards.',
          link: '/project-detail/no-start-env'
        },
        {
          icon: FiCode,
          title: 'ML & Software Systems',
          description: 'Forecasting and optimization at scale — 7,000+ electrical nodes, 100M+ rows — plus the full-stack tooling around it. Firmware to frontend.',
          link: '/projects'
        }
      ];
    } else if (config.shortName === 'YC') {
      return [
        {
          icon: FiTrendingUp,
          title: 'Venture Building',
          description: 'Identifying market opportunities and building scalable businesses from concept to revenue',
          link: '/projects'
        },
        {
          icon: FiCode,
          title: 'Product Development',
          description: 'Creating innovative solutions that solve real problems and deliver measurable value to users',
          link: '/projects'
        },
        {
          icon: FiSettings,
          title: 'Growth & Operations',
          description: 'Scaling ventures through strategic execution, operational excellence, and data-driven decision making',
          link: '/resume'
        }
      ];
    } else if (config.shortName === 'CS') {
      return [
        {
          icon: FiCode,
          title: 'Full-Stack Development',
          description: 'Building scalable web and mobile applications using modern technologies and best practices',
          link: '/projects'
        },
        {
          icon: FiTrendingUp,
          title: 'AI/ML Engineering',
          description: 'Developing intelligent systems and machine learning solutions for real-world applications',
          link: '/projects'
        },
        {
          icon: FiSettings,
          title: 'System Architecture',
          description: 'Designing robust, scalable systems with cloud technologies and DevOps practices',
          link: '/resume'
        }
      ];
    } else if (config.shortName === 'Build') {
      return [
        {
          icon: FiSettings,
          title: 'Mechanical Design',
          description: 'Designing and fabricating precision mechanical systems using CAD and advanced manufacturing',
          link: '/projects'
        },
        {
          icon: FiCode,
          title: 'Integrated Systems',
          description: 'Combining mechanical engineering with software solutions for smart, connected products',
          link: '/projects'
        },
        {
          icon: FiTrendingUp,
          title: 'Product Development',
          description: 'Leading end-to-end product development from concept to manufacturing and deployment',
          link: '/resume'
        }
      ];
    } else {
      return [
        {
          icon: FiTrendingUp,
          title: 'Investment Analysis',
          description: 'Financial modeling, valuation analysis, and market research to identify value creation opportunities',
          link: '/projects'
        },
        {
          icon: FiCode,
          title: 'Data-Driven Strategy',
          description: 'Quantitative analysis and AI-powered insights to drive strategic decision-making and operational improvements',
          link: '/projects'
        },
        {
          icon: FiSettings,
          title: 'Business Operations',
          description: 'Proven track record of building profitable ventures and optimizing operations for sustainable growth',
          link: '/resume'
        }
      ];
    }
  };

  const features = getFeatures();

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
                {isFounder && (
                  <Link to="/project-detail/no-start-env" className="btn btn-primary">
                    Current Work
                    <FiArrowRight />
                  </Link>
                )}
                <Link to={config.ctaLink} className="btn btn-primary">
                  {config.cta}
                  <FiArrowRight />
                </Link>
                <Link to="/resume" className="btn btn-secondary">
                  <FiFileText />
                  View Resume
                </Link>
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

      {/* Featured Projects Section - Hidden for Banking Persona */}
      {config.shortName !== 'Banking' && (
        <section className="featured-projects section">
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                {isFounder || config.shortName === 'YC' || config.shortName === 'Quant'
                  ? 'Featured Projects'
                  : `Featured ${config.name} Projects`}
              </h2>
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
      )}

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
              {isFounder
                ? 'Hardware hands, ML systems, and the software in between'
                : config.shortName === 'YC'
                ? 'Building and scaling ventures that solve real problems and create lasting impact'
                : config.shortName === 'CS'
                ? 'Building scalable software solutions and AI-driven applications with modern technologies'
                : config.shortName === 'Build'
                ? 'Building innovative mechanical systems and products with integrated software solutions'
                : 'Driving value creation through investment analysis, strategic thinking, and operational excellence'
              }
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
              {isFounder
                ? 'The eval, the projects behind it, and the resume'
                : config.shortName === 'YC'
                ? 'Explore my entrepreneurial ventures and business building experience'
                : config.shortName === 'CS'
                ? 'Explore my software development and AI/ML engineering projects'
                : config.shortName === 'Build'
                ? 'Explore my mechanical engineering and integrated systems projects'
                : 'Explore my investment analysis and business strategy work'
              }
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
              <h3>{isFounder ? 'Projects' : config.shortName === 'YC' ? 'My Ventures' : config.shortName === 'CS' ? 'My Code' : config.shortName === 'Build' ? 'My Designs' : 'Investment Analysis'}</h3>
              <p>{isFounder ? 'The benchmark, energy forecasting, robotics, and the hardware businesses that came first' : config.shortName === 'YC' ? 'Entrepreneurial projects and business ventures I\'ve founded and scaled' : config.shortName === 'CS' ? 'Software development projects and AI/ML applications I\'ve built' : config.shortName === 'Build' ? 'Mechanical engineering projects and integrated systems I\'ve designed' : 'Financial modeling, valuation, and market research projects'}</p>
              <Link to="/projects" className="btn btn-primary">{isFounder ? 'View Projects' : config.shortName === 'YC' ? 'View Ventures' : config.shortName === 'CS' ? 'View Code' : config.shortName === 'Build' ? 'View Designs' : 'View Analysis'}</Link>
            </motion.div>

            <motion.div
              className="quick-link-card card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>Resume</h3>
              <p>{isFounder ? 'Work history across hardware, ML, and software' : config.shortName === 'YC' ? 'Entrepreneurial experience and business building track record' : config.shortName === 'CS' ? 'Computer Science experience and technical qualifications' : config.shortName === 'Build' ? 'Mechanical Engineering and Computer Science dual-degree experience' : 'Investment analysis experience and qualifications'}</p>
              <a href={config.resumeUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Resume</a>
            </motion.div>

            <motion.div
              className="quick-link-card card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3>{isFounder || config.shortName === 'YC' || config.shortName === 'CS' || config.shortName === 'Build' ? 'About Me' : 'Research'}</h3>
              <p>{isFounder ? 'From rebuilding engines at 12 to creating evals for physical-systems AI' : config.shortName === 'YC' ? 'My entrepreneurial journey and business philosophy' : config.shortName === 'CS' ? 'My technical background and software engineering journey' : config.shortName === 'Build' ? 'My dual-degree engineering background and product development journey' : 'Quantitative analysis and financial modeling research'}</p>
              <Link to={isFounder || config.shortName === 'YC' || config.shortName === 'CS' || config.shortName === 'Build' ? '/about' : '/lab-reports'} className="btn btn-primary">{isFounder || config.shortName === 'YC' || config.shortName === 'CS' || config.shortName === 'Build' ? 'Learn More' : 'View Research'}</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 