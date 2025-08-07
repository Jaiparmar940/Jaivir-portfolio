import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiExternalLink, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Charity.css';

const Charity = () => {
  const charityProjects = [
    {
      id: 1,
      title: 'Project Pure - Rainwater Collection Systems',
      organization: 'Inclusive Society',
      description: 'CAD design and fabrication of rainwater collection systems in Panamanian villages, incorporating innovative techniques to filter water without access to electricity. Scheduled for December 2025.',
      period: 'December 2025',
      location: 'Panama',
      impact: 'Sustainable water access',
      link: 'https://inclusivesoc.org/',
      featured: true
    },
    {
      id: 2,
      title: 'Clinic Assistance Mission Trip',
      organization: 'Inclusive Society',
      description: 'Providing medical assistance and healthcare support in rural Panamanian communities during a mission trip. Working alongside local healthcare providers to deliver essential medical services.',
      period: 'December 2025',
      location: 'Panama',
      impact: 'Healthcare access for rural communities',
      link: 'https://inclusivesoc.org/',
      featured: false
    },
    {
      id: 3,
      title: 'STEM Education Outreach',
      organization: 'Local High Schools',
      description: 'Developed and delivered coding workshops for high school students from underrepresented communities. Taught Python programming basics and web development fundamentals.',
      period: '2023 - Present',
      location: 'Durham, NC',
      impact: '50+ students mentored',
      link: 'https://www.code.org/',
      featured: false
    },
    {
      id: 4,
      title: 'Medical Equipment Donation Drive',
      organization: 'JPcommerce Initiative',
      description: 'Organized donation of refurbished medical equipment to rural healthcare facilities. Coordinated logistics and quality assurance for donated equipment.',
      period: '2022 - 2023',
      location: 'North Carolina',
      impact: '15+ facilities supported',
      link: null,
      featured: false
    },
    {
      id: 5,
      title: 'Project Hackerspace',
      organization: 'Inclusive Society',
      description: 'Started a public workshop with a variety of tools ranging from saws to CNC machines for the community to learn and increase their working knowledge of fabrication. The idea was to promote STEM knowledge in the community to increase occupational viability.',
      period: '2023 - Present',
      location: 'Community Workshop',
      impact: 'STEM education and fabrication skills',
      link: 'https://inclusivesoc.org/',
      featured: false
    }
  ];

  return (
    <div className="charity">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="charity-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">Charity & Community Service</h1>
          <p className="page-subtitle">
            Making a positive impact through volunteer work, community service, and charitable initiatives
          </p>
        </motion.div>

        {/* Charity Projects Grid */}
        <motion.div 
          className="charity-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {charityProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`charity-card card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {project.featured && (
                <div className="featured-badge">Featured</div>
              )}
              
              <div className="charity-card-header">
                <div className="charity-icon">
                  <FiHeart />
                </div>
                <div className="charity-meta">
                  <span className="charity-organization">{project.organization}</span>
                  <div className="charity-details">
                    <span className="charity-period">
                      <FiCalendar />
                      {project.period}
                    </span>
                    <span className="charity-location">
                      <FiMapPin />
                      {project.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="charity-content">
                <h3 className="charity-title">{project.title}</h3>
                <p className="charity-description">{project.description}</p>
                
                <div className="charity-impact">
                  <span className="impact-badge">{project.impact}</span>
                </div>
              </div>

              {project.link && (
                <div className="charity-actions">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="charity-link"
                  >
                    <FiExternalLink />
                    Visit Organization
                  </a>
                </div>
              )}
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
          <h2>Interested in collaborating on community service?</h2>
          <p>Let's work together to make a positive impact in our community</p>
          <a href="/contact" className="btn btn-primary">Get In Touch</a>
        </motion.div>
      </div>
    </div>
  );
};

export default Charity; 