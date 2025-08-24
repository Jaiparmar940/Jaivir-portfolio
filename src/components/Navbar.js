import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiLogOut } from 'react-icons/fi';
import { usePersona } from '../contexts/PersonaContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { config, logout } = usePersona();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' },
    { path: '/lab-reports', label: 'Research' },
    { path: '/hobbies', label: 'Hobbies' },
    { path: '/charity', label: 'Charity' },
    { path: '/contact', label: 'Contact' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
  };

  // Use fallback values if config is not loaded yet
  const displayConfig = config || { shortName: 'Portfolio', name: 'Portfolio' };

  return (
    <nav className="navbar">
      <div className="container">
        <motion.div 
          className="navbar-brand"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="brand-link">
            <span className="brand-text">Jaivir</span>
            <span className="persona-badge" style={{ backgroundColor: `var(--${config?.primaryColor || 'blue'}-500)` }}>
              {displayConfig.shortName}
            </span>
          </Link>
        </motion.div>

        <div className="nav-menu">
          <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
            {navItems.map((item, index) => (
              <motion.li 
                key={item.path}
                className="nav-item"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Logout Button */}
          <div className="logout-section">
            <button 
              className="logout-btn"
              onClick={handleLogout}
              aria-label="Logout"
            >
              <FiLogOut />
              <span className="logout-label">Logout</span>
            </button>
          </div>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 