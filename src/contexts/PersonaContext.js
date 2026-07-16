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

const createInitialAuthState = () => {
  try {
    const detectedPersona = detectPersona();
    if (detectedPersona) {
      return {
        persona: detectedPersona,
        config: getPersonaConfig(detectedPersona),
        isAuthenticated: true,
        isLoading: false,
        error: null
      };
    }
  } catch (err) {
    return {
      persona: null,
      config: null,
      isAuthenticated: false,
      isLoading: false,
      error: err
    };
  }

  return {
    persona: null,
    config: null,
    isAuthenticated: false,
    isLoading: false,
    error: null
  };
};

export const PersonaProvider = ({ children }) => {
  const initial = createInitialAuthState();
  const [persona, setPersona] = useState(initial.persona);
  const [config, setConfig] = useState(initial.config);
  const [isLoading, setIsLoading] = useState(initial.isLoading);
  const [error, setError] = useState(initial.error);
  const [isAuthenticated, setIsAuthenticated] = useState(initial.isAuthenticated);

  const checkPersona = () => {
    try {
      const detectedPersona = detectPersona();

      if (detectedPersona) {
        const personaConfig = getPersonaConfig(detectedPersona);
        setPersona(detectedPersona);
        setConfig(personaConfig);
        setIsAuthenticated(true);
      } else {
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
    checkPersona();

    const handleHashChange = () => {
      checkPersona();
    };

    const handlePopState = () => {
      checkPersona();
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const updatePersona = (newPersona) => {
    try {
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

  return (
    <PersonaContext.Provider value={value}>
      {children}
    </PersonaContext.Provider>
  );
};
