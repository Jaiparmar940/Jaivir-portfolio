import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = ({ project }) => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  console.log('ProjectDetail rendered with project:', project); // Debug log
  console.log('Project images:', project?.images); // Debug log
  console.log('Project images length:', project?.images?.length); // Debug log
  console.log('First image path:', project?.images?.[0]); // Debug log
  console.log('All image paths:', project?.images?.map(img => img)); // Debug log

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <div className="project-not-found">
            <h1>Project Not Found</h1>
            <p>No project data available.</p>
            <button className="back-button" onClick={() => navigate('/projects')}>
              <FiArrowLeft />
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem 0', minHeight: '100vh', backgroundColor: '#fafafa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {/* Back Button */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'none',
            border: 'none',
            color: '#3b82f6',
            fontSize: '1rem',
            cursor: 'pointer',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}
          onClick={() => navigate('/projects')}
        >
          <FiArrowLeft />
          Back to Projects
        </button>

        {/* Project Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem', padding: '2rem 0' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: '#1f2937' }}>{project.title}</h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
            <span style={{ 
              background: '#3b82f6', 
              color: 'white', 
              padding: '0.5rem 1rem', 
              borderRadius: '20px', 
              fontSize: '0.9rem', 
              fontWeight: '500', 
              textTransform: 'capitalize' 
            }}>
              {project.category}
            </span>
            {project.featured && (
              <span style={{ 
                background: '#2563eb', 
                color: 'white', 
                padding: '0.5rem 1rem', 
                borderRadius: '20px', 
                fontSize: '0.9rem', 
                fontWeight: '500' 
              }}>
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Project Gallery */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ 
            width: '100%', 
            height: '500px', 
            borderRadius: '12px', 
            overflow: 'hidden', 
            marginBottom: '1rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f8f9fa',
            position: 'relative'
          }}>
            {/* Navigation Buttons */}
            {project.images && project.images.length > 1 && (
              <>
                {/* Left Arrow */}
                <button
                  onClick={() => setSelectedImage(selectedImage === 0 ? project.images.length - 1 : selectedImage - 1)}
                  style={{
                    position: 'absolute',
                    left: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '20px',
                    zIndex: 10,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(0, 0, 0, 0.9)';
                    e.target.style.transform = 'translateY(-50%) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(0, 0, 0, 0.7)';
                    e.target.style.transform = 'translateY(-50%) scale(1)';
                  }}
                >
                  ←
                </button>
                
                {/* Right Arrow */}
                <button
                  onClick={() => setSelectedImage(selectedImage === project.images.length - 1 ? 0 : selectedImage + 1)}
                  style={{
                    position: 'absolute',
                    right: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '20px',
                    zIndex: 10,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(0, 0, 0, 0.9)';
                    e.target.style.transform = 'translateY(-50%) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(0, 0, 0, 0.7)';
                    e.target.style.transform = 'translateY(-50%) scale(1)';
                  }}
                >
                  →
                </button>
              </>
            )}
            
            {/* Image Counter */}
            {project.images && project.images.length > 1 && (
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500',
                zIndex: 10
              }}>
                {selectedImage + 1} / {project.images.length}
              </div>
            )}
            
            {/* Debug info */}
            <div style={{ 
              position: 'absolute', 
              top: '10px', 
              left: '10px', 
              background: 'rgba(0,0,0,0.7)', 
              color: 'white', 
              padding: '5px', 
              fontSize: '12px',
              zIndex: 10
            }}>
              Debug: {project.images ? `${project.images.length} images` : 'No images array'}
            </div>
            
            {project.images && project.images.length > 0 ? (
              <img 
                src={project.images[selectedImage]} 
                alt={`${project.title} - Image ${selectedImage + 1}`}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain',
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}
                onError={(e) => {
                  console.log('Image failed to load:', project.images[selectedImage]);
                  console.log('Full image path:', project.images[selectedImage]);
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
                onLoad={() => {
                  console.log('Image loaded successfully:', project.images[selectedImage]);
                }}
              />
            ) : (
              <img 
                src={project.image || 'https://picsum.photos/800/600?random=999'} 
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}
            
            {/* Fallback message for failed images */}
            <div style={{
              display: 'none',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '2rem',
              color: '#6b7280'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📷</div>
              <h3 style={{ marginBottom: '0.5rem', color: '#374151' }}>Project Images</h3>
              <p style={{ marginBottom: '1rem' }}>
                {project.images && project.images.length > 0 
                  ? `This project has ${project.images.length} image(s) configured.`
                  : 'No images configured for this project yet.'
                }
              </p>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af' }}>
                Images will appear here once properly formatted and named.
              </p>
              {project.images && project.images.some(img => img.toLowerCase().includes('.heic')) && (
                <div style={{ 
                  background: '#fef3c7', 
                  border: '1px solid #f59e0b', 
                  borderRadius: '8px', 
                  padding: '1rem', 
                  marginTop: '1rem',
                  fontSize: '0.9rem',
                  color: '#92400e'
                }}>
                  <strong>Note:</strong> Some images are in HEIC format which browsers cannot display. 
                  Please convert them to JPG or PNG format for proper display.
                </div>
              )}
            </div>
          </div>
          
          {/* Thumbnail Navigation */}
          {project.images && project.images.length > 1 && (
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              overflowX: 'auto', 
              padding: '0.5rem 0',
              justifyContent: 'center'
            }}>
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} - Thumbnail ${index + 1}`}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '8px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: `3px solid ${selectedImage === index ? '#3b82f6' : 'transparent'}`,
                    opacity: selectedImage === index ? 1 : 0.7
                  }}
                  onClick={() => setSelectedImage(index)}
                  onError={(e) => {
                    console.log('Thumbnail failed to load:', image);
                    console.log('Full thumbnail path:', image);
                    e.target.style.display = 'none';
                  }}
                  onLoad={() => {
                    console.log('Thumbnail loaded successfully:', image);
                  }}
                  onMouseEnter={(e) => {
                    if (selectedImage !== index) {
                      e.target.style.opacity = 1;
                      e.target.style.transform = 'scale(1.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedImage !== index) {
                      e.target.style.opacity = 0.7;
                      e.target.style.transform = 'scale(1)';
                    }
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Project Content */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>Project Overview</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#6b7280', marginBottom: '1.5rem' }}>
              {project.longDescription || project.description}
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>Technologies & Skills</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '1rem' }}>
              {project.technologies.map((tech) => (
                <span key={tech} style={{ 
                  background: '#f9fafb', 
                  color: '#1f2937', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '20px', 
                  fontSize: '0.9rem', 
                  border: '1px solid #e5e7eb' 
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Specifications - Show for engineering projects */}
          {project.category === 'engineering' && project.detailSlug === 'workshop-construction' && (
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>Project Specifications</h2>
              <div style={{ 
                background: '#f8fafc', 
                border: '1px solid #e2e8f0', 
                borderRadius: '12px', 
                padding: '1.5rem' 
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                  <div>
                    <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Building Specifications</h4>
                    <ul style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      <li>Size: 24' x 32' (768 sq ft)</li>
                      <li>Ceiling Height: 12' minimum</li>
                      <li>Foundation: 6" reinforced concrete slab</li>
                      <li>Walls: 2x6 stud construction with insulation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Electrical Systems</h4>
                    <ul style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      <li>Service: 200-amp main electrical service</li>
                      <li>Circuits: Dedicated circuits for heavy machinery</li>
                      <li>Protection: GFCI protection throughout</li>
                      <li>Voltage: 120V and 240V circuits</li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Lighting & Safety</h4>
                    <ul style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      <li>Primary: LED high-bay lighting</li>
                      <li>Illumination: 15,000+ lumens total</li>
                      <li>Emergency: Battery backup systems</li>
                      <li>Ventilation: 6 air changes per hour</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Project Links */}
          {(project.github || project.live) && (
            <div style={{ marginTop: '2rem' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>Project Links</h2>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.8rem 1.5rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '500',
                      background: '#f9fafb',
                      color: '#1f2937',
                      border: '1px solid #e5e7eb'
                    }}
                  >
                    <FiGithub />
                    View Code
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.8rem 1.5rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '500',
                      background: '#2563eb',
                      color: 'white'
                    }}
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 