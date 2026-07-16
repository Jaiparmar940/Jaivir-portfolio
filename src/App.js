import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { PersonaProvider, usePersona } from './contexts/PersonaContext';
import CodeGate from './components/CodeGate';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import LabReports from './pages/LabReports';
import Hobbies from './pages/Hobbies';
import Charity from './pages/Charity';
import Contact from './pages/Contact';
import ProjectDetailPage from './pages/ProjectDetailPage';
import PersonaTest from './pages/PersonaTest';
import IEPortfolio from './pages/IEPortfolio';
import IEFinalReflection from './pages/IEFinalReflection';
import Footer from './components/Footer';
import { personaFromCode } from './lib/persona-codes';
import {
  setStickyPersona,
  getAccessCodeFromRoute,
  POST_AUTH_REDIRECT_KEY
} from './lib/persona';

/**
 * Handles /:accessCode and /:accessCode/* (e.g. /yc2026/project-detail/grid-intelligence).
 * Authenticates via the code, then redirects to the remaining path (or home).
 */
const AccessCodeHandler = () => {
  const { updatePersona } = usePersona();
  const navigate = useNavigate();
  const { accessCode, '*': restPath } = useParams();

  useEffect(() => {
    const persona = personaFromCode(accessCode);

    if (!persona) {
      navigate('/', { replace: true });
      return;
    }

    setStickyPersona(persona);
    updatePersona(persona);

    let target = restPath ? `/${restPath}` : '/';

    if (target === '/') {
      try {
        const saved = sessionStorage.getItem(POST_AUTH_REDIRECT_KEY);
        if (saved) {
          target = saved;
          sessionStorage.removeItem(POST_AUTH_REDIRECT_KEY);
        }
      } catch {}
    } else {
      try {
        sessionStorage.removeItem(POST_AUTH_REDIRECT_KEY);
      } catch {}
    }

    if (String(accessCode).toLowerCase() === 'innovation' && target === '/') {
      target = '/ie-portfolio';
    }

    navigate(target, { replace: true });
  }, [accessCode, restPath, navigate, updatePersona]);

  return null;
};

const AppContent = () => {
  const { isAuthenticated, isLoading, updatePersona } = usePersona();
  const location = useLocation();
  const navigate = useNavigate();
  const isIEPortfolio = location.pathname.startsWith('/ie-portfolio');

  // Remember deep links when the gate is shown so login can restore them
  useEffect(() => {
    if (isLoading || isAuthenticated) return;

    const parts = location.pathname.split('/').filter(Boolean);
    if (!parts.length || personaFromCode(parts[0])) return;

    const target = location.pathname + location.search;
    if (target && target !== '/') {
      try {
        sessionStorage.setItem(POST_AUTH_REDIRECT_KEY, target);
      } catch {}
    }
  }, [isAuthenticated, isLoading, location.pathname, location.search]);

  // Password-first URLs while still on the gate (before Routes mount)
  useEffect(() => {
    if (isLoading || isAuthenticated) return;

    const fromRoute = getAccessCodeFromRoute();
    if (!fromRoute) return;

    setStickyPersona(fromRoute.persona);
    updatePersona(fromRoute.persona);

    if (fromRoute.restPath && fromRoute.restPath !== '/') {
      navigate(fromRoute.restPath, { replace: true });
    } else if (fromRoute.code.toLowerCase() === 'innovation') {
      navigate('/ie-portfolio', { replace: true });
    } else {
      try {
        const saved = sessionStorage.getItem(POST_AUTH_REDIRECT_KEY);
        sessionStorage.removeItem(POST_AUTH_REDIRECT_KEY);
        navigate(saved || '/', { replace: true });
      } catch {
        navigate('/', { replace: true });
      }
    }
  }, [isAuthenticated, isLoading, location.pathname, navigate, updatePersona]);

  if (isLoading) {
    return (
      <div className="App" style={{ paddingTop: '80px', textAlign: 'center' }}>
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <CodeGate />;
  }

  return (
    <div className="App">
      {!isIEPortfolio && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project-detail/:slug" element={<ProjectDetailPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/lab-reports" element={<LabReports />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/charity" element={<Charity />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ie-portfolio/final-reflection" element={<IEFinalReflection />} />
          <Route path="/ie-portfolio" element={<IEPortfolio />} />
          <Route path="/persona-test" element={<PersonaTest />} />
          <Route path="/:accessCode/*" element={<AccessCodeHandler />} />
          <Route path="/:accessCode" element={<AccessCodeHandler />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isIEPortfolio && <Footer />}
    </div>
  );
};

function App() {
  return (
    <PersonaProvider>
      <AppContent />
    </PersonaProvider>
  );
}

export default App;
