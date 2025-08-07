import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiActivity, FiMusic, FiGlobe, FiBook, FiTool, FiTarget, FiTruck, FiBattery, FiAward } from 'react-icons/fi';
import './Hobbies.css';

const Hobbies = () => {
  const hobbies = [
    {
      name: 'Working on Cars',
      icon: FiTool,
      category: 'Mechanical',
      description: 'Automotive repair, maintenance, and modification'
    },
    {
      name: 'Fabricating Furniture',
      icon: FiTool,
      category: 'Craftsmanship',
      description: 'Custom furniture design and woodworking'
    },
    {
      name: 'Building Computers',
      icon: FiBattery,
      category: 'Technology',
      description: 'PC assembly, custom builds, and system optimization'
    },
    {
      name: 'Wakeboarding',
      icon: FiActivity,
      category: 'Water Sports',
      description: 'Water skiing and wakeboarding on lakes and rivers'
    },
    {
      name: 'Playing Piano',
      icon: FiMusic,
      category: 'Music',
      description: 'Classical and contemporary piano performance'
    },
    {
      name: 'Weightlifting',
      icon: FiActivity,
      category: 'Fitness',
      description: 'Strength training and powerlifting'
    },
    {
      name: 'Travel',
      icon: FiGlobe,
      category: 'Adventure',
      description: 'Exploring new places and cultures'
    },
    {
      name: 'Existential Philosophy',
      icon: FiBook,
      category: 'Intellectual',
      description: 'Philosophical inquiry and critical thinking'
    },
    {
      name: 'Marine Repair',
      icon: FiTool,
      category: 'Mechanical',
      description: 'Boat maintenance and marine engine work'
    },
    {
      name: 'Closed Course Racing',
      icon: FiTruck,
      category: 'Racing',
      description: 'Track racing and performance driving'
    },
    {
      name: 'Duke Basketball',
      icon: FiAward,
      category: 'Sports',
      description: 'Following Duke Blue Devils basketball'
    },
    {
      name: 'Motorcycle Repair',
      icon: FiTool,
      category: 'Mechanical',
      description: 'Motorcycle maintenance and customization'
    },
    {
      name: 'Motocross Racing',
      icon: FiActivity,
      category: 'Racing',
      description: 'Off-road motorcycle racing and riding'
    },
    {
      name: 'Long Range Shooting',
      icon: FiTarget,
      category: 'Precision',
      description: 'Precision shooting and marksmanship'
    }
  ];

  return (
    <div className="hobbies">
      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="hobbies-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">Hobbies & Interests</h1>
          <p className="page-subtitle">
            A diverse range of activities that fuel my passion for learning, creating, and pushing boundaries
          </p>
        </motion.div>

        {/* Hobbies Grid */}
        <motion.section 
          className="hobbies-section section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Hobbies</h2>
          <div className="hobbies-grid">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon;
              return (
                <motion.div
                  key={index}
                  className="hobby-card card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5
                  }}
                >
                  <div className="hobby-icon">
                    <IconComponent />
                  </div>
                  <h3 className="hobby-title">{hobby.name}</h3>
                  <p className="hobby-description">{hobby.description}</p>
                  <span className="hobby-category">{hobby.category}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Personal Statement */}
        <motion.section 
          className="statement-section section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="statement-card card">
            <div className="statement-icon">
              <FiHeart />
            </div>
            <h2>Why These Hobbies Matter</h2>
            <p>
              These diverse interests reflect my passion for continuous learning and hands-on problem-solving. 
              From mechanical work to intellectual pursuits, each hobby contributes to my growth as both an 
              engineer and an individual. They teach me patience, precision, creativity, and the importance 
              of balancing technical skills with personal development.
            </p>
            <p>
              Whether it's the precision required in long-range shooting, the creativity in furniture making, 
              or the strategic thinking in racing, these activities complement my academic and professional 
              pursuits while providing valuable life skills and personal fulfillment.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Hobbies; 