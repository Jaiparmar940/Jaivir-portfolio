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
};

export function getStickyPersona() {
  try {
    const v = (localStorage.getItem('persona') || '').toLowerCase();
    if (['swe','quant','consulting','engineering','banking','yc','code'].includes(v)) return v;
  } catch {}
  
  // cookie fallback
  const m = document.cookie.match(/(?:^|;\s*)persona=([^;]+)/);
  if (m) {
    const v = decodeURIComponent(m[1]).toLowerCase();
    if (['swe','quant','consulting','engineering','banking','yc','code'].includes(v)) return v;
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
    
    if (q && ['swe','quant','consulting','engineering','banking','yc','code'].includes(q)) {
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
    featuredHomeProjects: [1, 2, 3], // Impression, Workly, Full-Stack Banking
    featuredProjectsPage: [1, 2, 3, 21, 24], // Top SWE projects
    description: 'Full-stack developer passionate about building scalable applications, mobile apps, and AI-driven solutions. Experience with React, Node.js, Python, and cloud technologies.',
    resumeUrl: '/resume.pdf'
  },
  quant: {
    name: 'Quantitative Researcher',
    shortName: 'Quant',
    headline: 'Quantitative Researcher • Financial Engineer • Data Scientist',
    subhead: 'Developing predictive models and quantitative strategies for financial markets',
    proofStats: [
      { label: 'Models Built', value: '5+' },
      { label: 'Accuracy', value: '85%+' },
      { label: 'Research Papers', value: '3+' }
    ],
    cta: 'View My Research',
    ctaLink: '/projects',
    primaryColor: 'green',
    featuredHomeProjects: [4, 5, 23], // ANN Trading, JPcommerce, Project Pure
    featuredProjectsPage: [4, 5, 23, 21, 24], // Top quant/finance projects
    description: 'Quantitative researcher focused on developing machine learning models for financial markets, time-series analysis, and algorithmic trading strategies.',
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
    featuredHomeProjects: [5, 14, 22, 1], // JPcommerce, Vehicle Restoration Business, Hackerspace, Impression
    featuredProjectsPage: [1, 2, 5, 14, 23, 22], // Impression, Workly, JPcommerce, Vehicle Restoration, Project Pure, Hackerspace
    otherProjects: [9, 3, 4, 21, 24, 18, 6, 19, 8], // Crypto Mining, Banking App, ANN Trade, Vision AI, CPU, Boulder Movement, Pump Platform, Happy Meal, Mousetrap
    personalProjects: [7, 10, 11, 12, 13, 15, 16, 17, 20], // All remaining projects
    description: 'Financial analyst with expertise in investment research, business valuation, and strategic planning. Proven ability to identify value creation opportunities and drive operational improvements.',
    resumeUrl: '/resume-consulting.pdf'
  },
  engineering: {
    name: 'Mechanical Engineer',
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
    featuredHomeProjects: [7, 18, 20], // Autonomous Robot, Boulder Transport, Workshop
    featuredProjectsPage: [7, 18, 20, 6, 8, 9], // Top engineering projects
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
    featuredHomeProjects: [5, 4, 1], // JPcommerce, ANN Trading, Impression
    featuredProjectsPage: [5, 4, 1, 3, 14], // JPcommerce, ANN Trading, Impression, Banking App, Vehicle Restoration
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
    featuredHomeProjects: [1, 2, 5, 14], // Impression, Workly, JPcommerce, Vehicle Restoration
    featuredProjectsPage: [1, 2, 5, 14, 22], // Impression, Workly, JPcommerce, Vehicle Restoration, Hackerspace
    otherProjects: [3, 4, 21, 23, 24, 6, 7, 8, 9], // Banking App, ANN Trade, Vision AI, Project Pure, CPU, Pump Platform, Autonomous Robot, Mousetrap, Crypto Mining
    personalProjects: [10, 11, 12, 13, 15, 16, 17, 20, 18, 19], // All the moved projects plus remaining personal ones
    description: 'Serial entrepreneur with a track record of identifying market opportunities and building profitable ventures. Founded and scaled multiple businesses from concept to revenue, with expertise in product development, market strategy, and operational execution.',
    resumeUrl: '/resume.pdf'
  },
  code: {
    name: 'Computer Science Engineer',
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
    featuredHomeProjects: [1, 2, 3, 21], // Impression, Workly, Banking App, VisionAssist
    featuredProjectsPage: [1, 2, 3, 4, 21, 24], // Top CS projects: Impression, Workly, Banking App, ANN Trade Programming, VisionAssist, CPU Design
    otherProjects: [5, 6, 7, 9, 14, 18, 19, 22, 23], // JPcommerce, Pump Support Platform, Autonomous Robot, Crypto Mining, Vehicle Restoration, Boulder Transport, McDonald's Toy, Hackerspace, Project Pure
    personalProjects: [8, 10, 11, 12, 13, 15, 16, 17, 20], // All remaining projects including Workshop
    description: 'Computer Science engineer passionate about building scalable software solutions, AI/ML applications, and full-stack development. Experience with modern web technologies, mobile development, and cloud platforms.',
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
    
    // Separate projects into categories
    const featured = allProjects.filter(p => featuredIds.has(p.id));
    
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
