import React, { useState } from 'react';
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

  // Render inline markdown: **bold**, [label](url)
  const formatInlineMarkdown = (text) => {
    if (!text) return null;

    // Drop placeholder / localhost links before parsing
    let cleanedText = text
      .replace(/\[[^\]]+\]\(\s*<url>\s*\)/gi, '')
      .replace(/\[[^\]]+\]\(https?:\/\/localhost[^)]*\)/gi, '')
      .replace(/\s*[·•|]\s*[·•|]+\s*/g, ' · ')
      .replace(/^\s*[·•|]\s*/, '')
      .replace(/\s*[·•|]\s*$/, '')
      .replace(/\s{2,}/g, ' ')
      .trim();

    if (!cleanedText) return null;

    const parts = [];
    const tokenRegex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;
    let lastIndex = 0;
    let match;
    let key = 0;

    while ((match = tokenRegex.exec(cleanedText)) !== null) {
      if (match.index > lastIndex) {
        parts.push(cleanedText.slice(lastIndex, match.index));
      }

      if (match[2] !== undefined) {
        const label = match[2];
        const url = match[3].trim();
        parts.push(
          <a
            key={`link-${key++}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 500 }}
          >
            {label}
          </a>
        );
      } else if (match[4] !== undefined) {
        parts.push(
          <strong key={`bold-${key++}`} style={{ color: '#1f2937', fontWeight: 600 }}>
            {match[4]}
          </strong>
        );
      }

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < cleanedText.length) {
      parts.push(cleanedText.slice(lastIndex));
    }

    return parts.length ? parts : null;
  };

  // Function to format rich text content
  const formatRichText = (text) => {
    if (!text) return null;
    
    const lines = text.split('\n');
    const elements = [];
    let currentIndex = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line === '') continue;
      
      // Main heading
      if (line.startsWith('# ')) {
        const headingText = line.replace('# ', '');
        elements.push(
          <h1 key={currentIndex++} style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            color: '#1f2937', 
            marginTop: '2rem', 
            marginBottom: '1.5rem',
            borderBottom: '3px solid #3b82f6',
            paddingBottom: '0.5rem'
          }}>
            {headingText}
          </h1>
        );
      }
      // Section heading: entire line wrapped in **...**
      else if (line.startsWith('**') && line.endsWith('**') && !line.slice(2, -2).includes('**')) {
        const headingText = line.slice(2, -2);
        elements.push(
          <h2 key={currentIndex++} style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            color: '#1f2937', 
            marginTop: '2rem', 
            marginBottom: '1rem',
            borderBottom: '2px solid #e5e7eb',
            paddingBottom: '0.5rem'
          }}>
            {headingText}
          </h2>
        );
      }
      // Bullet points (- or *)
      else if (line.startsWith('- ') || line.startsWith('* ')) {
        const bulletText = line.slice(2);
        const inline = formatInlineMarkdown(bulletText);
        if (inline === null) continue;

        elements.push(
          <div key={currentIndex++} style={{ 
            marginBottom: '0.75rem',
            paddingLeft: '1.5rem',
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start'
          }}>
            <span style={{
              position: 'absolute',
              left: '0',
              top: '0.5rem',
              width: '6px',
              height: '6px',
              backgroundColor: '#3b82f6',
              borderRadius: '50%'
            }}></span>
            <span style={{ 
              fontSize: '1rem', 
              lineHeight: '1.6', 
              color: '#4b5563' 
            }}>
              {inline}
            </span>
          </div>
        );
      }
      // Regular paragraph (supports **Role:** and [links](url))
      else {
        const inline = formatInlineMarkdown(line);
        if (inline === null) continue;

        elements.push(
          <p key={currentIndex++} style={{ 
            fontSize: '1rem', 
            lineHeight: '1.7', 
            color: '#4b5563', 
            marginBottom: '1.5rem',
            textAlign: 'left'
          }}>
            {inline}
          </p>
        );
      }
    }
    
    return elements;
  };

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
            
            {project.images && project.images.length > 0 ? (
              <img 
                src={project.images[selectedImage]} 
                alt={`${project.title} ${selectedImage + 1}`}
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
            <h2 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1.5rem', color: '#1f2937' }}>Project Overview</h2>
            <div style={{ 
              backgroundColor: '#f9fafb', 
              padding: '2rem', 
              borderRadius: '12px', 
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              {formatRichText(project.longDescription || project.description)}
            </div>
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