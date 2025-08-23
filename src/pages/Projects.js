import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiTrendingUp, FiSettings, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedProjects, setExpandedProjects] = useState(new Set());

  const projects = projectsData;
  
  console.log('Projects component loaded with data:', projects); // Debug log
  console.log('Projects with detail pages:', projects.filter(p => p.hasDetailPage)); // Debug log

  const toggleProjectExpansion = (projectId) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const filters = [
    { key: 'all', label: 'All Projects', icon: FiCode },
    { key: 'software', label: 'Software', icon: FiCode },
    { key: 'finance', label: 'Finance', icon: FiTrendingUp },
    { key: 'business', label: 'Business', icon: FiTrendingUp },
    { key: 'engineering', label: 'Engineering', icon: FiSettings }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">
            A collection of my work across software engineering, finance, and mechanical engineering
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="filter-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {project.featured && (
                <div className="featured-badge">Featured</div>
              )}
              
              <div className="project-image">
                <img 
                  src={project.images && project.images.length > 0 ? project.images[0] : project.image} 
                  alt={project.title}
                  onError={(e) => {
                    // Fallback to original image if gallery image fails to load
                    e.target.src = project.image;
                  }}
                />
                {/* Image count indicator */}
                {project.images && project.images.length > 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'rgba(0, 0, 0, 0.8)',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500',
                    zIndex: 5
                  }}>
                    {project.images.length} images
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FiGithub />
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                    {project.hasDetailPage && (
                      <Link 
                        to={`/project-detail/${project.detailSlug}`}
                        className="project-link detail-link"
                        onClick={() => console.log('Detail link clicked for:', project.title, 'slug:', project.detailSlug)}
                      >
                        <FiArrowRight />
                      </Link>
                    )}
                  </div>
                  {/* Gallery hint for projects with multiple images */}
                  {project.images && project.images.length > 1 && (
                    <div style={{
                      position: 'absolute',
                      bottom: '15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'rgba(0, 0, 0, 0.8)',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '16px',
                      fontSize: '11px',
                      fontWeight: '500',
                      whiteSpace: 'nowrap'
                    }}>
                      View Gallery ({project.images.length} images)
                    </div>
                  )}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 5 && (
                    <>
                      {expandedProjects.has(project.id) ? (
                        <>
                          {project.technologies.slice(5).map((tech) => (
                            <span key={tech} className="tech-tag">{tech}</span>
                          ))}
                          <button 
                            className="show-more-btn"
                            onClick={() => toggleProjectExpansion(project.id)}
                          >
                            Show Less
                          </button>
                        </>
                      ) : (
                        <button 
                          className="show-more-btn"
                          onClick={() => toggleProjectExpansion(project.id)}
                        >
                          +{project.technologies.length - 5} more
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="cta-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Interested in working together?</h2>
          <p>Let's discuss how we can bring your ideas to life</p>
          <a href="/contact" className="btn btn-primary">Get In Touch</a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 