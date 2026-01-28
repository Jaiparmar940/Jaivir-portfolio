import React, { createContext, useContext, useState, useEffect } from 'react';
import { detectPersona, getPersonaConfig } from '../lib/persona';

const PersonaContext = createContext();

export const usePersona = () => {
  const context = useContext(PersonaContext);
  if (!context) {
    throw new Error('usePersona must be used within a PersonaProvider');
  }
  return context;
};

export const PersonaProvider = ({ children }) => {
  const [persona, setPersona] = useState(null);
  const [config, setConfig] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to check and update persona
  const checkPersona = () => {
    try {
      console.log('PersonaProvider: Checking persona...');
      console.log('PersonaProvider: Current hash in checkPersona:', window.location.hash);
      const detectedPersona = detectPersona();
      console.log('PersonaProvider: Detected persona:', detectedPersona);
      
      if (detectedPersona) {
        const personaConfig = getPersonaConfig(detectedPersona);
        console.log('PersonaProvider: Got config:', personaConfig);
        
        setPersona(detectedPersona);
        setConfig(personaConfig);
        setIsAuthenticated(true);
      } else {
        console.log('PersonaProvider: No valid persona detected, showing CodeGate');
        setIsAuthenticated(false);
      }
      
      setIsLoading(false);
    } catch (err) {
      console.error('PersonaProvider: Error checking persona:', err);
      setError(err);
      setIsLoading(false);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    // Initial check
    checkPersona();

    // Listen for hash changes
    const handleHashChange = () => {
      console.log('PersonaProvider: Hash changed, re-checking persona...');
      console.log('PersonaProvider: New hash:', window.location.hash);
      checkPersona();
    };

    // Listen for popstate (back/forward button)
    const handlePopState = () => {
      console.log('PersonaProvider: PopState event, re-checking persona...');
      console.log('PersonaProvider: New hash after popstate:', window.location.hash);
      checkPersona();
    };

    // Listen for location changes (React Router)
    const handleLocationChange = () => {
      console.log('PersonaProvider: Location changed, re-checking persona...');
      console.log('PersonaProvider: New location:', window.location.href);
      checkPersona();
    };

    console.log('PersonaProvider: Setting up event listeners...');
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('popstate', handleLocationChange);

    // Cleanup
    return () => {
      console.log('PersonaProvider: Cleaning up event listeners...');
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const updatePersona = (newPersona) => {
    try {
      console.log('PersonaProvider: Updating persona to:', newPersona);
      const newConfig = getPersonaConfig(newPersona);
      setPersona(newPersona);
      setConfig(newConfig);
      setIsAuthenticated(true);
    } catch (err) {
      console.error('PersonaProvider: Error updating persona:', err);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem('persona');
      document.cookie = 'persona=; Max-Age=0; Path=/; SameSite=Lax';
      setPersona(null);
      setConfig(null);
      setIsAuthenticated(false);
    } catch (err) {
      console.error('PersonaProvider: Error logging out:', err);
    }
  };

  const value = {
    persona,
    config,
    updatePersona,
    isLoading,
    error,
    isAuthenticated,
    logout
  };

  console.log('PersonaProvider: Rendering with value:', value);

  if (error) {
    console.error('PersonaProvider: Rendering with error:', error);
  }

  return (
    <PersonaContext.Provider value={value}>
      {children}
    </PersonaContext.Provider>
  );
};
