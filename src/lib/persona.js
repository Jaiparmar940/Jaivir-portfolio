import { personaFromCode } from './persona-codes';

const subToPersona = {
  'swe': 'swe',
  'quant': 'quant',
  'consulting': 'consulting',
  'eng': 'engineering',
  'engineering': 'engineering',
  'banking': 'banking',
  'yc': 'yc',
  'yc2026': 'yc2026',
  'code': 'code',
  'build': 'build',
  'ie': 'ie',
};

export function getStickyPersona() {
  try {
    const v = (localStorage.getItem('persona') || '').toLowerCase();
    if (['swe','quant','consulting','engineering','banking','yc','yc2026','code','build','ie'].includes(v)) return v;
  } catch {}
  
  // cookie fallback
  const m = document.cookie.match(/(?:^|;\s*)persona=([^;]+)/);
  if (m) {
    const v = decodeURIComponent(m[1]).toLowerCase();
    if (['swe','quant','consulting','engineering','banking','yc','yc2026','code','build','ie'].includes(v)) return v;
  }
  return null;
}

export function setStickyPersona(persona) {
  try { 
    localStorage.setItem('persona', persona); 
  } catch {}
  document.cookie = `persona=${persona}; Max-Age=${60*60*24*30}; Path=/; SameSite=Lax`;
}

const VALID_PERSONAS = ['swe','quant','consulting','engineering','banking','yc','yc2026','code','build','ie'];

export const POST_AUTH_REDIRECT_KEY = 'postAuthRedirect';

/** Parse hash/path route segments for HashRouter (#/a/b -> ['a','b']). */
export function getRouteParts() {
  const hash = window.location.hash || '';
  if (hash.startsWith('#')) {
    const withoutHash = hash.slice(1);
    const pathOnly = withoutHash.split('?')[0];
    return pathOnly.split('/').filter(Boolean);
  }
  return window.location.pathname.split('/').filter(Boolean);
}

/**
 * If the first route segment is a valid access code, return
 * { persona, code, restPath } where restPath is everything after the code
 * (e.g. /yc2026/project-detail/x -> restPath /project-detail/x).
 */
export function getAccessCodeFromRoute() {
  const parts = getRouteParts();
  if (parts.length === 0) return null;

  const code = parts[0];
  const persona = personaFromCode(code);
  if (!persona) return null;

  const restPath = parts.length > 1 ? `/${parts.slice(1).join('/')}` : '/';
  return { persona, code, restPath };
}

export function detectPersona() {
  try {
    // 1) Access code in URL (password-first deep links) — preferred over sticky
    const fromRoute = getAccessCodeFromRoute();
    if (fromRoute) {
      setStickyPersona(fromRoute.persona);
      return fromRoute.persona;
    }

    // 2) Query param (?code= or ?track=), including inside the hash
    const search =
      window.location.search ||
      (window.location.hash.includes('?')
        ? `?${window.location.hash.split('?')[1]}`
        : '');
    const params = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search);
    const q = params.get('code') || params.get('track');
    if (q) {
      const persona = personaFromCode(q) || (VALID_PERSONAS.includes(q.toLowerCase()) ? q.toLowerCase() : null);
      if (persona) {
        setStickyPersona(persona);
        return persona;
      }
    }

    // 3) Sticky persona (localStorage / cookie)
    const stickyPersona = getStickyPersona();
    if (stickyPersona) {
      return stickyPersona;
    }

    // 4) Subdomain (legacy)
    const host = window.location?.hostname || '';
    const first = host.split('.')[0]?.toLowerCase();
    if (subToPersona[first]) {
      setStickyPersona(subToPersona[first]);
      return subToPersona[first];
    }

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
  yc2026: {
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
    featuredHomeProjects: [26, 1, 25, 5],
    featuredProjectsPage: [26, 1, 25, 5],
    otherProjects: [14, 22, 3, 21, 4, 6, 7, 8, 9, 12, 18, 19, 23, 24, 27, 2],
    personalProjects: [10, 11, 13, 17, 16, 15, 20],
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
