import { personaFromCode } from './persona-codes';

const subToPersona = {
  'swe': 'swe',
  'quant': 'quant',
  'consulting': 'consulting',
  'eng': 'engineering',
  'engineering': 'engineering',
};

export function getStickyPersona() {
  try {
    const v = (localStorage.getItem('persona') || '').toLowerCase();
    if (['swe','quant','consulting','engineering'].includes(v)) return v;
  } catch {}
  
  // cookie fallback
  const m = document.cookie.match(/(?:^|;\s*)persona=([^;]+)/);
  if (m) {
    const v = decodeURIComponent(m[1]).toLowerCase();
    if (['swe','quant','consulting','engineering'].includes(v)) return v;
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
    
    if (q && ['swe','quant','consulting','engineering'].includes(q)) {
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
    name: 'Consulting & Strategy',
    shortName: 'Consulting',
    headline: 'Business Consultant • Operations Strategist • Entrepreneur',
    subhead: 'Driving business growth through strategic analysis and operational optimization',
    proofStats: [
      { label: 'Revenue Generated', value: '$100K+' },
      { label: 'Businesses Built', value: '3+' },
      { label: 'Profit Margins', value: '40%+' }
    ],
    cta: 'View My Work',
    ctaLink: '/projects',
    primaryColor: 'purple',
    featuredHomeProjects: [5, 14, 23], // JPcommerce, Vehicle Restoration, Project Pure
    featuredProjectsPage: [5, 14, 23, 9, 22], // Top business/consulting projects
    description: 'Business consultant and entrepreneur with proven track record of building profitable ventures, optimizing operations, and driving strategic growth.',
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
      return { featured: [], others: [] };
    }
    
    // Get featured projects for this persona
    const featuredIds = new Set(config.featuredProjectsPage);
    console.log('getPersonaProjects: Featured project IDs:', Array.from(featuredIds));
    
    // Separate featured and other projects
    const featured = allProjects.filter(p => featuredIds.has(p.id));
    const others = allProjects.filter(p => !featuredIds.has(p.id));
    
    console.log('getPersonaProjects: Featured projects count:', featured.length);
    console.log('getPersonaProjects: Other projects count:', others.length);
    
    return { featured, others };
  } catch (error) {
    console.error('getPersonaProjects: Error getting projects:', error);
    return { featured: [], others: [] }; // Fallback to empty arrays
  }
}

// Re-export personaFromCode for convenience
export { personaFromCode } from './persona-codes';
