import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiCalendar, FiCode, FiFileText, FiBookOpen, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { usePersona } from '../contexts/PersonaContext';
import './About.css';

const About = () => {
  const { config } = usePersona();
  
  // Dynamic skills based on persona
  const getSkills = () => {
    if (config?.shortName === 'YC') {
      return {
        'Entrepreneurship': ['Venture Building', 'Market Research', 'Business Strategy', 'Product Development', 'Growth Hacking', 'Fundraising'],
        'Technical Skills': ['Full-Stack Development', 'AI/ML Implementation', 'Data Analysis', 'System Architecture', 'Cloud Computing', 'Mobile Development'],
        'Business Operations': ['Financial Modeling', 'Operations Management', 'Team Leadership', 'Strategic Planning', 'Customer Acquisition', 'Revenue Optimization'],
        'Engineering & Design': ['CAD Design', 'Prototyping', 'Manufacturing', 'Quality Control', 'Process Optimization', 'Innovation Management']
      };
    } else if (config?.shortName === 'CS') {
      return {
        'Programming Languages': ['Java', 'JavaScript', 'Python', 'TypeScript', 'Swift', 'C++'],
        'Web & Mobile Development': ['React', 'React Native', 'SwiftUI', 'Node.js', 'Express.js', 'Firebase'],
        'AI/ML & Data Science': ['TensorFlow', 'PyTorch', 'OpenCV', 'Pandas', 'NumPy', 'Scikit-learn'],
        'Cloud & DevOps': ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Microservices'],
        'Databases & Backend': ['MongoDB', 'PostgreSQL', 'Redis', 'REST APIs', 'GraphQL', 'Spring Boot'],
        'System Design': ['Distributed Systems', 'Load Balancing', 'Caching', 'Message Queues', 'API Design', 'Security']
      };
    } else if (config?.shortName === 'Build') {
      return {
        'Mechanical Design': ['SolidWorks', 'AutoCAD', 'Fusion 360', 'CAD Modeling', 'FEA Analysis', '3D Printing'],
        'Manufacturing & Prototyping': ['CNC Machining', 'Rapid Prototyping', 'Quality Control', 'Process Optimization', 'Lean Manufacturing', 'GD&T'],
        'Programming & Software': ['Python', 'MATLAB', 'C++', 'Arduino', 'Raspberry Pi', 'LabVIEW'],
        'Systems Integration': ['IoT Development', 'Sensor Integration', 'Control Systems', 'Data Acquisition', 'Automation', 'Robotics'],
        'Product Development': ['Design Thinking', 'Project Management', 'Testing & Validation', 'Regulatory Compliance', 'Cost Analysis', 'Supply Chain'],
        'Engineering Analysis': ['Stress Analysis', 'Thermal Analysis', 'Fluid Dynamics', 'Vibration Analysis', 'Material Selection', 'Failure Analysis']
      };
    } else if (config?.shortName === 'Quant') {
      return {
        'Quantitative Analysis': ['Time Series Analysis', 'Statistical Modeling', 'Monte Carlo Simulation', 'Risk Management', 'Portfolio Optimization', 'Factor Analysis'],
        'Trading & Markets': ['Market Microstructure', 'High-Frequency Trading', 'Options Pricing', 'Equity Research', 'Derivatives', 'Market Making'],
        'Programming & Data': ['Python', 'R', 'MATLAB', 'C++', 'SQL', 'Pandas', 'NumPy', 'SciPy'],
        'Machine Learning': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Feature Engineering', 'Model Validation', 'Backtesting'],
        'Financial Engineering': ['Black-Scholes', 'Binomial Models', 'Greeks Calculation', 'Volatility Modeling', 'Correlation Analysis', 'VaR'],
        'Research & Development': ['Algorithm Development', 'Strategy Backtesting', 'Performance Attribution', 'Risk Metrics', 'Regulatory Compliance', 'Documentation']
      };
    } else {
      return {
        'Programming Languages': ['Java', 'JavaScript', 'Python', 'C++', 'TypeScript', 'Swift'],
        'Web & Mobile Development': ['React', 'React Native', 'SwiftUI', 'Firebase', 'Spring Boot', 'Node.js'],
        'Finance & Analytics': ['Time-series Analysis', 'ANN Forecasting', 'Sentiment Analysis', 'Market Modeling', 'SARIMA'],
        'Engineering Tools': ['SolidWorks', 'AutoCAD', 'CNC Machining', 'FEA', 'MATLAB', 'Fusion360'],
        'Business & Leadership': ['Entrepreneurship', 'Project Management', 'Technical Leadership', 'Problem Solving']
      };
    }
  };

  const skills = getSkills();

  const education = [
    {
      degree: 'B.S. Computer Science, B.S.E. Mechanical Engineering, Innovation & Entrepreneurship',
      school: 'Duke University',
      year: 'Expected May 2026'
    }
  ];

  // Dynamic navigation links based on persona
  const getNavigationLinks = () => {
    if (config?.shortName === 'YC') {
      return [
        {
          title: 'My Ventures',
          description: 'Explore the businesses and ventures I\'ve founded and scaled',
          icon: FiCode,
          link: '/projects',
          color: '#3b82f6'
        },
        {
          title: 'Resume',
          description: 'View my entrepreneurial experience and business track record',
          icon: FiFileText,
          link: '/resume',
          color: '#10b981'
        },
        {
          title: 'About My Journey',
          description: 'Learn more about my entrepreneurial philosophy and approach',
          icon: FiBookOpen,
          link: '/about',
          color: '#f59e0b'
        }
      ];
    } else if (config?.shortName === 'CS') {
      return [
        {
          title: 'My Code',
          description: 'Explore my software development projects and AI/ML applications',
          icon: FiCode,
          link: '/projects',
          color: '#3b82f6'
        },
        {
          title: 'Resume',
          description: 'View my technical experience and computer science qualifications',
          icon: FiFileText,
          link: '/resume',
          color: '#10b981'
        },
        {
          title: 'About My Journey',
          description: 'Learn more about my technical background and engineering journey',
          icon: FiBookOpen,
          link: '/about',
          color: '#f59e0b'
        }
      ];
    } else if (config?.shortName === 'Quant') {
      return [
        {
          title: 'My Trading Models',
          description: 'Explore my quantitative models and algorithmic trading strategies',
          icon: FiCode,
          link: '/projects',
          color: '#3b82f6'
        },
        {
          title: 'Resume',
          description: 'View my quantitative analysis experience and trading qualifications',
          icon: FiFileText,
          link: '/resume',
          color: '#10b981'
        },
        {
          title: 'About My Journey',
          description: 'Learn more about my quantitative trading background and market analysis approach',
          icon: FiBookOpen,
          link: '/about',
          color: '#f59e0b'
        }
      ];
    } else if (config?.shortName === 'Build') {
      return [
        {
          title: 'My Designs',
          description: 'Explore my mechanical engineering projects and integrated systems',
          icon: FiCode,
          link: '/projects',
          color: '#3b82f6'
        },
        {
          title: 'Resume',
          description: 'View my Mechanical Engineering and Computer Science experience',
          icon: FiFileText,
          link: '/resume',
          color: '#10b981'
        },
        {
          title: 'About My Journey',
          description: 'Learn more about my engineering background and product development journey',
          icon: FiBookOpen,
          link: '/about',
          color: '#f59e0b'
        }
      ];
    } else {
      return [
        {
          title: 'Projects',
          description: 'Explore my portfolio of software, engineering, and business projects',
          icon: FiCode,
          link: '/projects',
          color: '#3b82f6'
        },
        {
          title: 'Resume',
          description: 'View my professional experience, skills, and qualifications',
          icon: FiFileText,
          link: '/resume',
          color: '#10b981'
        },
        {
          title: 'Research & Lab Reports',
          description: 'Browse my academic research and engineering lab reports',
          icon: FiBookOpen,
          link: '/lab-reports',
          color: '#f59e0b'
        }
      ];
    }
  };

  const navigationLinks = getNavigationLinks();

  return (
    <div className="about">
      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">
            {config?.shortName === 'YC' 
              ? 'Serial entrepreneur building scalable ventures that solve real problems and create lasting impact'
              : config?.shortName === 'CS'
              ? 'Computer Science engineer passionate about building scalable software solutions and AI-driven applications'
              : config?.shortName === 'Quant'
              ? 'Quantitative analyst specializing in systematic trading, algorithmic strategies, and risk management for financial markets'
              : config?.shortName === 'Build'
              ? 'Double-major Mechanical Engineer and Computer Scientist building innovative products with integrated hardware and software solutions'
              : 'Strategic problem-solver with proven business impact, combining analytical rigor with entrepreneurial execution'
            }
          </p>
        </motion.div>

        {/* Personal Info Section */}
        <motion.section 
          className="personal-info section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="info-grid">
            <div className="info-card card">
              <motion.div 
                className="profile-image-container"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src={process.env.PUBLIC_URL + "/profile.jpg"} 
                  alt="Jaivir (Jay) Parmar" 
                  className="about-profile-image"
                />
              </motion.div>
              <h3>Personal Information</h3>
              <div className="info-list">
                <div className="info-item">
                  <FiMapPin />
                  <span>Santa Maria, CA</span>
                </div>
                <div className="info-item">
                  <FiMail />
                  <span>jay.parmar@duke.edu</span>
                </div>
                <div className="info-item">
                  <FiCalendar />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>

            <div className="bio-card card">
              <h3>Bio</h3>
              {config?.shortName === 'YC' ? (
                <>
                  <p>
                    I'm a serial entrepreneur who recently graduated with a double major in Computer Science and 
                    Mechanical Engineering at Duke University with a certificate in Innovation & Entrepreneurship. My unique blend of technical 
                    expertise and business acumen allows me to identify market opportunities and build scalable ventures 
                    that solve real problems.
                  </p>
                  <p>
                    I've founded and scaled multiple profitable businesses, starting with JPcommerce, a resale and 
                    market arbitrage venture that generated $100,000+ in revenue with 42% profit margins. Most recently, 
                    I launched Impression, an AI-driven optimization platform where I identified a $2.8B market 
                    opportunity and built a product that delivers measurable value to users through data-driven 
                    experimentation and strategic product development.
                  </p>
                  <p>
                    My approach to entrepreneurship combines technical innovation with market validation. I believe in 
                    building products that people actually want, using data to guide decisions, and executing with 
                    operational discipline to achieve sustainable growth and impact.
                  </p>
                  <p>
                    I'm passionate about creating ventures that not only generate revenue but also make a meaningful 
                    difference in people's lives. Whether it's optimizing business processes, building AI-powered 
                    solutions, or identifying untapped market opportunities, I thrive on the challenge of turning 
                    ideas into successful, scalable businesses.
                  </p>
                </>
              ) : config?.shortName === 'CS' ? (
                <>
                  <p>
                    I'm a Computer Science and Mechanical Engineering student at Duke University with a passion for 
                    building scalable software solutions and AI-driven applications. My cross-technical background gives me 
                    a unique perspective on solving complex technical challenges with both software engineering rigor 
                    and systems thinking.
                  </p>
                  <p>
                    I have extensive experience in full-stack development, having built multiple production applications 
                    including Impression, an AI-driven optimization platform, and Workly, a cross-platform mobile job 
                    matching app. My technical projects span from computer vision applications using TensorFlow to 
                    custom CPU architecture design, demonstrating both breadth and depth in software engineering.
                  </p>
                  <p>
                    I'm particularly passionate about AI/ML engineering and have developed applications like VisionAssist, 
                    which uses real-time object recognition to help visually impaired users. I enjoy working on projects 
                    that combine cutting-edge technology with real-world impact, whether that's building scalable web 
                    applications, developing machine learning models, or designing distributed systems.
                  </p>
                  <p>
                    My approach to software engineering emphasizes clean code, scalable architecture, and user-centric 
                    design. I believe in building robust, maintainable systems that can grow with user needs while 
                    maintaining high performance and reliability. I'm always eager to learn new technologies and 
                    tackle challenging problems in the intersection of software engineering and artificial intelligence.
                  </p>
                </>
              ) : config?.shortName === 'Quant' ? (
                <>
                  <p>
                    I recently graduated from Duke University with a double major in Computer Science and Mechanical Engineering 
                    with a certificate in Innovation & Entrepreneurship. I have maintained a strong focus on quantitative analysis and algorithmic trading. My technical background in 
                    both software engineering and mathematical modeling provides a unique foundation for developing 
                    sophisticated trading strategies and risk management systems.
                  </p>
                  <p>
                    I have hands-on experience building quantitative models and trading systems, including my ANN Trade 
                    Programming project where I developed artificial neural networks for U.S. options price prediction 
                    using historical and sentiment data. This project involved time-series analysis, feature engineering, 
                    and backtesting methodologies that directly translate to systematic trading applications.
                  </p>
                  <p>
                    My technical projects demonstrate proficiency in the quantitative skills essential for trading: 
                    developing machine learning models for financial prediction, building full-stack applications for 
                    data analysis and visualization, and implementing algorithmic solutions for complex problems. 
                    I've worked with Python, R, MATLAB, and various ML frameworks to build models that can process 
                    market data and generate actionable insights.
                  </p>
                  <p>
                    I'm particularly drawn to the intersection of technology and finance, where quantitative rigor 
                    meets market intuition. My approach combines statistical modeling with practical implementation, 
                    always considering real-world market dynamics and risk constraints. I thrive on the challenge 
                    of turning complex mathematical concepts into profitable trading strategies while maintaining 
                    robust risk management protocols.
                  </p>
                  <p>
                    I'm excited about the opportunity to contribute to Susquehanna's quantitative trading operations, 
                    where I can apply my technical skills to develop innovative trading strategies, improve existing 
                    models, and help drive the firm's competitive advantage in the markets.
                  </p>
                </>
              ) : config?.shortName === 'Build' ? (
                <>
                  <p>
                    I recently graduated Duke University with a double major in Mechanical Engineering and Computer Science 
                    with a 75% mechanical engineering focus and 25% computer science integration. This unique combination 
                    allows me to design and build innovative products that seamlessly integrate hardware and software 
                    solutions for real-world applications.
                  </p>
                  <p>
                    My mechanical engineering expertise spans from autonomous robotics and heavy equipment design to 
                    precision manufacturing and structural analysis. I've designed and built complex systems like an 
                    autonomous block-stacking robot with computer vision capabilities and a heavy-duty boulder transport 
                    device capable of handling 500lb loads across uneven terrain. These projects demonstrate my ability 
                    to solve challenging mechanical problems while integrating smart software solutions.
                  </p>
                  <p>
                    The computer science component of my education enables me to create intelligent, connected systems. 
                    I've developed custom CPU architectures, built IoT solutions for workshop automation, and integrated 
                    sensors and control systems into mechanical designs. This combination of mechanical design and 
                    software integration allows me to create products that are not just functional, but smart and adaptive.
                  </p>
                  <p>
                    I'm passionate about product development and enjoy the entire lifecycle from initial concept through 
                    manufacturing and deployment. My approach combines rigorous engineering analysis with creative 
                    problem-solving, always considering both the mechanical and software aspects of any design challenge. 
                    I believe the future of engineering lies in seamlessly integrated hardware-software systems that 
                    can adapt, learn, and optimize their performance.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    I am a recent graduate from Duke University who earned a double major in Computer Science and Mechanical Engineering 
                    with a certificate in Innovation & Entrepreneurship. This blend of technical and analytical training equips 
                    me to approach complex business problems with both quantitative rigor and creative problem-solving. I am currently spending time to explore the startup space, with a focus in financial technology.
                  </p>
                  <p>
                    I have a track record of building ventures that generate measurable business value. As founder of 
                    Impression, an AI-driven optimization platform, I identified a $2.8B market opportunity and delivered 
                    tangible user outcomes through data-driven experimentation and product strategy. As Technical Lead at Grid Intelligence, I co-founded a B2B SaaS startup with Duke peers, configuring and fine-tuning ML models for localized energy demand and pricing prediction across 7,000+ electrical nodes using 100M+ rows of data; this informed battery storage optimization and helped raise $100k in non-dilutive funding. Earlier, I launched JPcommerce, a resale and market arbitrage business that generated $100,000+ in revenue with 42% profit margins by uncovering inefficiencies in fragmented markets and implementing operational improvements.
                  </p>
                  <p>
                    Across these experiences, I learned to think like an investor and consultant: spotting opportunities 
                    in overlooked markets, analyzing data to guide strategic decisions, and executing with operational 
                    discipline to unlock value.
                  </p>
                  <p>
                    I am passionate about solving high-impact business challenges at the intersection of technology, 
                    strategy, and investment, whether that means optimizing growth, improving operations, or guiding 
                    organizations through their most critical decisions to achieve sustainable results.
                  </p>
                </>
              )}
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          className="skills section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                className="skill-category card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="skill-category-title">{category}</h3>
                <div className="skill-tags">
                  {skillList.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          className="education section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Education</h2>
          <div className="education-list">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-item card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="education-header">
                  <h3 className="education-degree">{edu.degree}</h3>
                </div>
                <p className="education-school">{edu.school}</p>
                <p className="education-year">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Navigation Links Section */}
        <motion.section 
          className="navigation-links section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Explore My Work</h2>
          <div className="navigation-links-grid">
            {navigationLinks.map((navItem, index) => (
              <motion.div
                key={navItem.title}
                className="navigation-link-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Link to={navItem.link} className="navigation-link-content">
                  <div className="navigation-link-icon" style={{ color: navItem.color }}>
                    <navItem.icon size={32} />
                  </div>
                  <div className="navigation-link-text">
                    <h3 className="navigation-link-title">{navItem.title}</h3>
                    <p className="navigation-link-description">{navItem.description}</p>
                  </div>
                  <div className="navigation-link-arrow">
                    <FiArrowRight />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About; 