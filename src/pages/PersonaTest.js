import React from 'react';
import { usePersona } from '../contexts/PersonaContext';
import { detectPersona } from '../lib/persona';

const PersonaTest = () => {
  const { persona, config } = usePersona();
  const detectedPersona = detectPersona();

  return (
    <div style={{ padding: '100px 20px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Persona System Test</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2>Current Persona Context</h2>
        <p><strong>Persona:</strong> {persona}</p>
        <p><strong>Name:</strong> {config?.name}</p>
        <p><strong>Short Name:</strong> {config?.shortName}</p>
        <p><strong>Headline:</strong> {config?.headline}</p>
        <p><strong>Subhead:</strong> {config?.subhead}</p>
        <p><strong>Description:</strong> {config?.description}</p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2>Detected Persona</h2>
        <p><strong>Function Result:</strong> {detectedPersona}</p>
        <p><strong>URL:</strong> {window.location.href}</p>
        <p><strong>Hostname:</strong> {window.location.hostname}</p>
        <p><strong>Search Params:</strong> {window.location.search}</p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2>Proof Stats</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {config?.proofStats.map((stat, index) => (
            <div key={index} style={{ 
              padding: '1rem', 
              border: '1px solid #ddd', 
              borderRadius: '8px',
              textAlign: 'center',
              minWidth: '120px'
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3b82f6' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#666' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2>Featured Projects</h2>
        <p><strong>Home Featured:</strong> {config?.featuredHomeProjects.join(', ')}</p>
        <p><strong>Projects Page Featured:</strong> {config?.featuredProjectsPage.join(', ')}</p>
      </div>

      <div>
        <h2>Test Persona Switching</h2>
        <p>Use the persona switcher in the navbar to test different personas.</p>
        <p>You can also test with URL parameters:</p>
        <ul>
          <li><a href="?track=swe">?track=swe</a></li>
          <li><a href="?track=quant">?track=quant</a></li>
          <li><a href="?track=consulting">?track=consulting</a></li>
          <li><a href="?track=engineering">?track=engineering</a></li>
        </ul>
      </div>
    </div>
  );
};

export default PersonaTest;
