import React from 'react';
import { useParams } from 'react-router-dom';
import { getProjectBySlug } from '../data/projectsData';
import ProjectDetail from '../components/ProjectDetail';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  
  console.log('ProjectDetailPage accessed with slug:', slug); // Debug log
  
  const project = getProjectBySlug(slug);
  
  console.log('Project found:', project); // Debug log

  // Simple test to see if component renders
  console.log('ProjectDetailPage component rendering...');

  if (!project) {
    console.log('No project found for slug:', slug); // Debug log
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Project Not Found</h1>
        <p>The project "{slug}" doesn't exist.</p>
        <a href="/projects" style={{ 
          display: 'inline-block', 
          padding: '0.75rem 1.5rem', 
          backgroundColor: '#2563eb', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: '0.5rem' 
        }}>
          Back to Projects
        </a>
      </div>
    );
  }

  console.log('About to render ProjectDetail component');
  return <ProjectDetail project={project} />;
};

export default ProjectDetailPage; 