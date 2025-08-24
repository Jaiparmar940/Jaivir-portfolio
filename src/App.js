import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import Footer from './components/Footer';

// Component to handle access code routes
const AccessCodeHandler = () => {
  const { isAuthenticated } = usePersona();
  
  // If authenticated, redirect to home
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  // If not authenticated, show CodeGate
  return <CodeGate />;
};

// Main App component
const AppContent = () => {
  const { isAuthenticated } = usePersona();
  
  if (!isAuthenticated) {
    return <CodeGate />;
  }
  
  return (
    <div className="App">
      <Navbar />
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
          <Route path="/persona-test" element={<PersonaTest />} />
          {/* Handle access code paths - this will trigger persona detection */}
          <Route path="/:accessCode" element={<AccessCodeHandler />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

// Root App component
function App() {
  return (
    <PersonaProvider>
      <AppContent />
    </PersonaProvider>
  );
}

export default App; 