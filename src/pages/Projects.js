import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiTrendingUp, FiSettings, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { usePersona } from '../contexts/PersonaContext';
import { projectsData } from '../data/projectsData';
import { getPersonaProjects } from '../lib/persona';
import './Projects.css';

const Projects = () => {
  const { persona, config, isLoading, error } = usePersona();
  const [activeFilter, setActiveFilter] = useState('all');

  // Debug logging
  console.log('Projects component: persona =', persona);
  console.log('Projects component: config =', config);
  console.log('Projects component: isLoading =', isLoading);
  console.log('Projects component: error =', error);

  // Show loading state
  if (isLoading) {
    return (
      <div className="projects" style={{ paddingTop: '80px', textAlign: 'center' }}>
        <div className="container">
          <h1>Loading Projects...</h1>
          <p>Initializing persona system...</p>
        </div>
      </div>
    );
  }
  
  // Show error state
  if (error) {
    return (
      <div className="projects" style={{ paddingTop: '80px', textAlign: 'center' }}>
        <div className="container">
          <h1>Error Loading Projects</h1>
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
      <div className="projects" style={{ paddingTop: '80px', textAlign: 'center' }}>
        <div className="container">
          <h1>Projects Loading...</h1>
          <p>Please wait while we load your personalized experience.</p>
        </div>
      </div>
    );
  }

  // Get persona-specific project organization
  const { featured, others } = getPersonaProjects(persona, projectsData);
  
  console.log('Projects component: featured =', featured);
  console.log('Projects component: others =', others);

  const filters = [
    { key: 'all', label: 'All Projects', icon: FiCode },
    { key: 'software', label: 'Software', icon: FiCode },
    { key: 'finance', label: 'Finance', icon: FiTrendingUp },
    { key: 'business', label: 'Business', icon: FiTrendingUp },
    { key: 'engineering', label: 'Engineering', icon: FiSettings }
  ];

  const filteredOthers = activeFilter === 'all' 
    ? others 
    : others.filter(project => project.category.includes(activeFilter));

  return (
    <div className="projects">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">{config.name} Projects</h1>
          <p className="page-subtitle">
            {config.subhead}
          </p>
        </motion.div>

        {/* Featured Projects Section */}
        {featured.length > 0 && (
          <section className="featured-projects-section">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="section-title">Featured {config.name} Projects</h2>
              <p className="section-subtitle">
                My most impactful work in {config.name.toLowerCase()}
              </p>
            </motion.div>

            <motion.div 
              className="featured-projects-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {featured.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="featured-project-card card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      {project.hasDetailPage ? (
                        <Link to={`/project-detail/${project.detailSlug}`} className="btn btn-primary">
                          View Details <FiArrowRight />
                        </Link>
                      ) : (
                        <div className="project-links">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                              <FiGithub /> Code
                            </a>
                          )}
                          {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                              <FiExternalLink /> Live
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}

        {/* Other Projects Section */}
        {others.length > 0 && (
          <section className="other-projects-section">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">All Other Projects</h2>
              <p className="section-subtitle">
                Explore my complete portfolio across all disciplines
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div 
              className="filter-buttons"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  <filter.icon />
                  {filter.label}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div 
              className="projects-grid"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {filteredOthers.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card card"
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

                    <div className="project-actions">
                      {project.hasDetailPage ? (
                        <Link to={`/project-detail/${project.detailSlug}`} className="btn btn-primary">
                          View Details <FiArrowRight />
                        </Link>
                      ) : (
                        <div className="project-links">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                              <FiGithub /> Code
                            </a>
                          )}
                          {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                              <FiExternalLink /> Live
                            </a>
                            )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Projects; 