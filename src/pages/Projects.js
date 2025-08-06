import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiTrendingUp, FiSettings } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Impression — AI-Driven Dating Profile Optimization',
      category: 'software',
      description: 'Founder & Lead Developer of an AI-driven platform for optimizing dating profiles using real-time A/B testing and GPT API integration.',
      technologies: ['TypeScript', 'React', 'Firebase', 'GPT API', 'Cloud Functions'],
      image: './icons/impression.png',
      github: 'https://github.com/Jaiparmar940/SwipeFix',
      live: 'https://impressiondating.com',
      featured: true
    },
    {
      id: 2,
      title: 'Workly — Mobile Job Matching App',
      category: 'software',
      description: 'Full-featured SwiftUI and React Native application with real-time messaging, Firebase integration, and admin pipeline for job posting management.',
      technologies: ['SwiftUI', 'React Native', 'Firebase', 'Python', 'Firestore'],
      image: 'https://picsum.photos/400/250?random=2',
      github: 'https://github.com/Jaiparmar940/workly.git',
      live: null,
      featured: true
    },
    {
      id: 3,
      title: 'Full-Stack Banking Application',
      category: 'software',
      description: 'Secure RESTful banking application with Spring Boot backend, React frontend, and comprehensive transaction management system.',
      technologies: ['Spring Boot', 'React', 'Spring Security', 'JWT', 'REST APIs'],
      image: 'https://picsum.photos/400/250?random=3',
      github: 'https://github.com/Jaiparmar940/banking_application',
      live: null,
      featured: true
    },
    {
      id: 4,
      title: 'ANN Trade Programming',
      category: 'finance',
      description: 'Independent research project developing artificial neural networks for U.S. options price prediction using historical and sentiment data.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Sentiment Analysis', 'SARIMA'],
      image: 'https://picsum.photos/400/250?random=4',
      github: 'https://github.com/Jaiparmar940/ann-trading',
      live: null,
      featured: false
    },
    {
      id: 5,
      title: 'JPcommerce — Medical Equipment Resale Business',
      category: 'business',
      description: 'Self-started business generating $100,000+ revenue through procurement, restoration, and resale of medical equipment with 42% profit margin.',
      technologies: ['Market Analysis', 'Equipment Restoration', 'E-commerce', 'Negotiation', 'Quality Assurance'],
      image: 'https://picsum.photos/400/250?random=5',
      github: null,
      live: null,
      featured: false
    }
  ];

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
                <img src={project.image} alt={project.title} />
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
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
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