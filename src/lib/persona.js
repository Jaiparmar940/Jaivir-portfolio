import { personaFromCode } from './persona-codes';

const subToPersona = {
  'swe': 'swe',
  'quant': 'quant',
  'consulting': 'consulting',
  'eng': 'engineering',
  'engineering': 'engineering',
  'banking': 'banking',
  'yc': 'yc',
  'code': 'code',
  'build': 'build',
  'ie': 'ie',
};

export function getStickyPersona() {
  try {
    const v = (localStorage.getItem('persona') || '').toLowerCase();
    if (['swe','quant','consulting','engineering','banking','yc','code','build','ie'].includes(v)) return v;
  } catch {}
  
  // cookie fallback
  const m = document.cookie.match(/(?:^|;\s*)persona=([^;]+)/);
  if (m) {
    const v = decodeURIComponent(m[1]).toLowerCase();
    if (['swe','quant','consulting','engineering','banking','yc','code','build','ie'].includes(v)) return v;
  }
  return null;
}

export function setStickyPersona(persona) {
  try { 
    localStorage.setItem('persona', persona); 
  } catch {}
  document.cookie = `persona=${persona}; Max-Age=${60*60*24*30}; Path=/; SameSite=Lax`;
}

export function detectPersona() {
  try {
    console.log('detectPersona: Starting detection...');
    console.log('detectPersona: Current URL:', window.location.href);
    console.log('detectPersona: Current pathname:', window.location.pathname);
    console.log('detectPersona: Current hash:', window.location.hash);
    
    // 1) Check for sticky persona first
    const stickyPersona = getStickyPersona();
    if (stickyPersona) {
      console.log('detectPersona: Using sticky persona:', stickyPersona);
      return stickyPersona;
    }
    
    // 2) Check URL path for access code
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    console.log('detectPersona: Path parts:', pathParts);
    
    if (pathParts.length > 0) {
      const code = pathParts[0];
      console.log('detectPersona: Checking path code:', code);
      
      const persona = personaFromCode(code);
      console.log('detectPersona: personaFromCode result:', persona);
      
      if (persona) {
        console.log('detectPersona: Valid code found, setting persona:', persona);
        setStickyPersona(persona);
        return persona;
      } else {
        console.log('detectPersona: Invalid code in path:', code);
      }
    }
    
    // 2b) Check hash for access code (for hash-based routing)
    if (window.location.hash) {
      const hashParts = window.location.hash.substring(1).split('/').filter(Boolean);
      console.log('detectPersona: Hash parts:', hashParts);
      
      if (hashParts.length > 0) {
        const code = hashParts[0];
        console.log('detectPersona: Checking hash code:', code);
        
        const persona = personaFromCode(code);
        console.log('detectPersona: personaFromCode result from hash:', persona);
        
        if (persona) {
          console.log('detectPersona: Valid code found in hash, setting persona:', persona);
          setStickyPersona(persona);
          return persona;
        } else {
          console.log('detectPersona: Invalid code in hash:', code);
        }
      }
    }
    
    // 3) querystring override (for testing)
    const params = new URLSearchParams(window.location?.search || '');
    const q = params.get('track');
    console.log('detectPersona: Query param track =', q);
    
    if (q && ['swe','quant','consulting','engineering','banking','yc','code','build','ie'].includes(q)) {
      console.log('detectPersona: Using query param persona:', q);
      setStickyPersona(q);
      return q;
    }

    // 4) subdomain (legacy support)
    const host = window.location?.hostname || '';
    console.log('detectPersona: Hostname =', host);
    
    const first = host.split('.')[0]?.toLowerCase();
    console.log('detectPersona: First part of hostname =', first);
    
    if (subToPersona[first]) {
      console.log('detectPersona: Using subdomain persona:', subToPersona[first]);
      setStickyPersona(subToPersona[first]);
      return subToPersona[first];
    }

    // 5) No valid persona found
    console.log('detectPersona: No valid persona found, returning null');
    return null;
  } catch (error) {
    console.error('detectPersona: Error detecting persona:', error);
    return null;
  }
}

export const personaConfigs = {
  swe: {
    name: 'Software Engineer',
    shortName: 'SWE',
    headline: 'Software Engineer • Full-Stack Developer • AI Specialist',
    subhead: 'Building scalable applications and AI-driven solutions that create real business value',
    proofStats: [
      { label: 'Projects Built', value: '15+' },
      { label: 'Technologies', value: '20+' },
      { label: 'Years Experience', value: '3+' }
    ],
    cta: 'View My Code',
    ctaLink: '/projects',
    primaryColor: 'blue',
    featuredHomeProjects: [5, 14, 22, 18], // JPcommerce, Vehicle Restoration, Hackerspace, Heavy Boulder
    featuredProjectsPage: [5, 14, 22, 1, 2, 3, 21], // Top SWE projects
    description: 'Full-stack developer passionate about building scalable applications, mobile apps, and AI-driven solutions. Experience with React, Node.js, Python, and cloud technologies.',
    resumeUrl: '/resume.pdf'
  },
  quant: {
    name: 'Quantitative Analyst',
    shortName: 'Quant',
    headline: 'Quantitative Analyst • Financial Engineer • Trading Systems Developer',
    subhead: 'Building systematic trading strategies and quantitative models for market making and proprietary trading',
    proofStats: [
      { label: 'Trading Models', value: '8+' },
      { label: 'Business Revenue Generated', value: '$250K+' },
      { label: 'Markets Covered', value: '15+' }
    ],
    cta: 'View My Projects',
    ctaLink: '/projects',
    primaryColor: 'green',
    featuredHomeProjects: [5, 4, 1, 3], // JPcommerce, ANN Trade Programming, Impression, Full-Stack Banking Application
    featuredProjectsPage: [5, 4, 1, 3, 2, 21], // JPcommerce, ANN Trade Programming, Impression, Full-Stack Banking Application, Workly, VisionAssist
    otherProjects: [6, 7, 8, 9, 14, 18, 19, 22, 23, 24], // Pump Support Platform, Autonomous Robot, Mousetrap Car, Crypto Mining, Vehicle Restoration, Heavy Boulder, McDonald's Toy, Hackerspace, Project Pure, CPU Design
    personalProjects: [10], // C6 Corvette Harmonic Balancer Design & Installation
    description: 'Quantitative analyst specializing in systematic trading, market microstructure, and high-frequency strategies. Experience building proprietary trading models and risk management systems for equity and options markets.',
    resumeUrl: '/resume-quant.pdf'
  },
  consulting: {
    name: 'Investment Analysis & Strategy',
    shortName: 'Investment Analysis',
    headline: 'Financial Analyst • Investment Researcher • Business Strategist',
    subhead: 'Driving value creation through data-driven analysis and strategic thinking',
    proofStats: [
      { label: 'Revenue Generated', value: '$250K+' },
      { label: 'Financial Models', value: '10+' },
      { label: 'Investment Analysis', value: '25+' }
    ],
    cta: 'View My Analysis',
    ctaLink: '/projects',
    primaryColor: 'purple',
    featuredHomeProjects: [5, 14, 22, 18], // JPcommerce, Vehicle Restoration, Hackerspace, Heavy Boulder
    featuredProjectsPage: [5, 14, 22, 1, 2, 23], // JPcommerce, Vehicle Restoration, Hackerspace, Impression, Workly, Project Pure
    otherProjects: [9, 3, 4, 21, 24, 18, 6, 19, 8], // Crypto Mining, Banking App, ANN Trade, Vision AI, CPU, Boulder Movement, Pump Platform, Happy Meal, Mousetrap
    personalProjects: [7, 10, 11, 12, 13, 15, 16, 17, 20], // All remaining projects
    description: 'Financial analyst with expertise in investment research, business valuation, and strategic planning. Proven ability to identify value creation opportunities and drive operational improvements.',
    resumeUrl: '/resume-consulting.pdf'
  },
  engineering: {
    name: 'Mechanical Engineering',
    shortName: 'Engineering',
    headline: 'Mechanical Engineer • CAD Designer • Hardware Developer',
    subhead: 'Designing and fabricating precision mechanical systems and components',
    proofStats: [
      { label: 'Projects Completed', value: '25+' },
      { label: 'CAD Hours', value: '500+' },
      { label: 'Prototypes Built', value: '15+' }
    ],
    cta: 'View My Designs',
    ctaLink: '/projects',
    primaryColor: 'orange',
    featuredHomeProjects: [5, 14, 22, 18], // JPcommerce, Vehicle Restoration, Hackerspace, Heavy Boulder
    featuredProjectsPage: [5, 14, 22, 7, 18, 6, 9], // Top engineering projects
    description: 'Mechanical engineer specializing in CAD design, prototyping, and fabrication. Experience with SolidWorks, CNC machining, and precision component design.',
    resumeUrl: '/resume-engineering.pdf'
  },
  banking: {
    name: 'Banking & Financial Services',
    shortName: 'Banking',
    headline: 'Mechanical Engineer • Computer Scientist • Quantitative Researcher',
    subhead: 'Driving financial innovation through technology and data-driven decision making',
    proofStats: [
      { label: 'Revenue Generated', value: '$250K+' },
      { label: 'Ventures Founded', value: '4+' },
      { label: 'Clients Served', value: '450+' }
    ],
    cta: 'View My Portfolio',
    ctaLink: '/projects',
    primaryColor: 'navy',
    featuredHomeProjects: [5, 14, 22, 18], // JPcommerce, Vehicle Restoration, Hackerspace, Heavy Boulder
    featuredProjectsPage: [5, 14, 22, 4, 1, 3], // JPcommerce, Vehicle Restoration, Hackerspace, ANN Trading, Impression, Banking App
    description: 'Emerging professional with experience in financial analysis, market strategy, and venture building. Founded and scaled profitable businesses, developed pricing and predictive models, and applied data-driven methods to optimize operations and evaluate growth opportunities.',
    resumeUrl: '/resume-banking.pdf'
  },
  yc: {
    name: 'Entrepreneur',
    shortName: 'YC',
    headline: 'Entrepreneur • Mechanical Engineer • Computer Scientist',
    subhead: 'Building scalable ventures that solve real problems and create lasting impact',
    proofStats: [
      { label: 'Ventures Founded', value: '4+' },
      { label: 'Revenue Generated', value: '$250K+' },
      { label: 'Projects Delivered', value: '15+' }
    ],
    cta: 'View My Ventures',
    ctaLink: '/projects',
    primaryColor: 'green',
    featuredHomeProjects: [5, 14, 22, 18], // JPcommerce, Vehicle Restoration, Hackerspace, Heavy Boulder
    featuredProjectsPage: [5, 14, 22, 1, 2], // JPcommerce, Vehicle Restoration, Hackerspace, Impression, Workly
    otherProjects: [3, 4, 21, 23, 24, 6, 7, 8, 9], // Banking App, ANN Trade, Vision AI, Project Pure, CPU, Pump Platform, Autonomous Robot, Mousetrap, Crypto Mining
    personalProjects: [10, 11, 12, 13, 15, 16, 17, 20, 18, 19], // All the moved projects plus remaining personal ones
    description: 'Serial entrepreneur with a track record of identifying market opportunities and building profitable ventures. Founded and scaled multiple businesses from concept to revenue, with expertise in product development, market strategy, and operational execution.',
    resumeUrl: '/resume.pdf'
  },
  code: {
    name: 'Computer Science',
    shortName: 'CS',
    headline: 'Computer Science Engineer • Full-Stack Developer • AI/ML Specialist',
    subhead: 'Building scalable software solutions and AI-driven applications with modern technologies',
    proofStats: [
      { label: 'Projects Built', value: '20+' },
      { label: 'Languages', value: '4+' },
      { label: 'Years Coding', value: '5+' }
    ],
    cta: 'View My Code',
    ctaLink: '/projects',
    primaryColor: 'blue',
    featuredHomeProjects: [5, 14, 22, 18], // JPcommerce, Vehicle Restoration, Hackerspace, Heavy Boulder
    featuredProjectsPage: [5, 14, 22, 1, 2, 3, 4, 21], // Top CS projects: JPcommerce, Vehicle Restoration, Hackerspace, Impression, Workly, Banking App, ANN Trade Programming, VisionAssist
    otherProjects: [6, 7, 8, 9, 19, 23, 24], // Pump Support Platform, Autonomous Robot, Mousetrap Car, Crypto Mining, McDonald's Toy, Project Pure, CPU Design
    personalProjects: [8, 10, 11, 12, 13, 15, 16, 17, 20], // All remaining projects including Workshop
    description: 'Computer Science engineer passionate about building scalable software solutions, AI/ML applications, and full-stack development. Experience with modern web technologies, mobile development, and cloud platforms.',
    resumeUrl: '/resume.pdf'
  },
  build: {
    name: 'Mechanical Engineering',
    shortName: 'Build',
    headline: 'Mechanical Engineer • Computer Scientist • Product Designer',
    subhead: 'Building innovative mechanical systems and products with integrated software solutions',
    proofStats: [
      { label: 'Projects Built', value: '25+' },
      { label: 'CAD Hours', value: '500+' },
      { label: 'Years Engineering', value: '5+' }
    ],
    cta: 'View My Designs',
    ctaLink: '/projects',
    primaryColor: 'orange',
    featuredHomeProjects: [5, 14, 22, 18], // JPcommerce, Vehicle Restoration, Hackerspace, Heavy Boulder
    featuredProjectsPage: [5, 14, 22, 7, 18, 6], // Top engineering projects: JPcommerce, Vehicle Restoration, Hackerspace, Autonomous Robot, Boulder Transport, Pump Platform
    otherProjects: [1, 2, 3, 4, 7, 8, 9, 19, 21, 23, 24], // Software, business, and technical projects
    personalProjects: [10, 11, 12, 13, 15, 16, 17, 20], // Personal engineering and creative projects
    description: 'Dual-degree Mechanical Engineer and Computer Scientist passionate about building innovative products and systems. 75% mechanical engineering focus with 25% computer science integration for smart, connected solutions.',
    resumeUrl: '/resume-engineering.pdf'
  },
  ie: {
    name: 'I&E Portfolio',
    shortName: 'I&E',
    headline: 'Innovation & Entrepreneurship Portfolio',
    subhead: 'I&E Certificate Assignment 1',
    proofStats: [
      { label: 'Experiences', value: '2' },
      { label: 'Hours', value: '450+' },
      { label: 'Work Products', value: '2' }
    ],
    cta: 'View I&E Portfolio',
    ctaLink: '/ie-portfolio',
    primaryColor: 'blue',
    featuredHomeProjects: [5, 14, 22, 18],
    featuredProjectsPage: [5, 14, 22, 1, 2],
    description: 'I&E Certificate portfolio.',
    resumeUrl: '/resume.pdf'
  }
};

export function getPersonaConfig(persona) {
  try {
    console.log('getPersonaConfig: Getting config for persona:', persona);
    
    if (!persona || !personaConfigs[persona]) {
      console.warn('getPersonaConfig: Invalid persona, using default:', persona);
      return personaConfigs.swe;
    }
    
    const config = personaConfigs[persona];
    console.log('getPersonaConfig: Got config:', config);
    return config;
  } catch (error) {
    console.error('getPersonaConfig: Error getting config:', error);
    return personaConfigs.swe; // Fallback to default
  }
}

export function getPersonaProjects(persona, allProjects) {
  try {
    console.log('getPersonaProjects: Getting projects for persona:', persona);
    console.log('getPersonaProjects: All projects count:', allProjects?.length);
    
    const config = getPersonaConfig(persona);
    
    if (!config || !allProjects) {
      console.warn('getPersonaProjects: Missing config or projects, returning empty arrays');
      return { featured: [], others: [], personal: [] };
    }
    
    // Get featured projects for this persona
    const featuredIds = new Set(config.featuredProjectsPage);
    console.log('getPersonaProjects: Featured project IDs:', Array.from(featuredIds));
    
    // Get other projects (ordered) if they exist, otherwise fall back to all non-featured
    let otherIds = new Set();
    if (config.otherProjects && config.otherProjects.length > 0) {
      otherIds = new Set(config.otherProjects);
    }
    
    // Get personal projects if they exist
    let personalIds = new Set();
    if (config.personalProjects && config.personalProjects.length > 0) {
      personalIds = new Set(config.personalProjects);
    }
    
    // Separate projects into categories - use ordered featured projects
    const featured = config.featuredProjectsPage.map(id => allProjects.find(p => p.id === id)).filter(Boolean);
    
    let others;
    if (config.otherProjects && config.otherProjects.length > 0) {
      // Use ordered other projects
      others = config.otherProjects.map(id => allProjects.find(p => p.id === id)).filter(Boolean);
    } else {
      // No other projects specified, use all non-featured
      others = allProjects.filter(p => !featuredIds.has(p.id));
    }
    
    // Use personalIds to filter personal projects, or fallback to remaining projects
    const personal = personalIds.size > 0 
      ? allProjects.filter(p => personalIds.has(p.id))
      : allProjects.filter(p => !featuredIds.has(p.id) && !otherIds.has(p.id));
    
    console.log('getPersonaProjects: Featured projects count:', featured.length);
    console.log('getPersonaProjects: Other projects count:', others.length);
    console.log('getPersonaProjects: Personal projects count:', personal.length);
    
    return { featured, others, personal };
  } catch (error) {
    console.error('getPersonaProjects: Error getting projects:', error);
    return { featured: [], others: [], personal: [] }; // Fallback to empty arrays
  }
}

// Re-export personaFromCode for convenience
export { personaFromCode } from './persona-codes';
