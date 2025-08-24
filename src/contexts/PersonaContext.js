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

  useEffect(() => {
    try {
      console.log('PersonaProvider: Initializing...');
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
      console.error('PersonaProvider: Error initializing:', err);
      setError(err);
      setIsLoading(false);
      setIsAuthenticated(false);
    }
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
