import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiGlobe } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/jaivir',
      icon: FiGithub
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/Jaivir-Parmar',
      icon: FiLinkedin
    },
    {
      name: 'Email',
      url: 'mailto:jay.parmar@duke.edu',
      icon: FiMail
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Jaivir</h3>
            <p className="footer-description">
              Software Engineer, Quantitative Researcher, and Mechanical Engineering Student at Duke University
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Connect</h4>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Jaivir. All rights reserved.</p>
          <p>Built with React & hosted on GitHub Pages</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 