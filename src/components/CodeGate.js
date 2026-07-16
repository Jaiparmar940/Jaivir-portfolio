import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLock, FiArrowRight, FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { usePersona } from '../contexts/PersonaContext';
import { personaFromCode } from '../lib/persona-codes';
import { setStickyPersona, POST_AUTH_REDIRECT_KEY } from '../lib/persona';
import './CodeGate.css';

const CodeGate = () => {
  const { updatePersona } = usePersona();
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 400));

    const trimmed = code.trim();
    const persona = personaFromCode(trimmed);

    if (persona) {
      setStickyPersona(persona);
      updatePersona(persona);

      let target = '/';
      try {
        const saved = sessionStorage.getItem(POST_AUTH_REDIRECT_KEY);
        if (saved) {
          target = saved;
          sessionStorage.removeItem(POST_AUTH_REDIRECT_KEY);
        }
      } catch {}

      if (trimmed.toLowerCase() === 'innovation' && target === '/') {
        target = '/ie-portfolio';
      }

      setIsLoading(false);
      navigate(target, { replace: true });
    } else {
      setError('Invalid access code. Please try again.');
      setIsLoading(false);
      setCode('');
    }
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    if (error) setError('');
  };

  return (
    <div className="code-gate">
      <div className="code-gate-container">
        <motion.div 
          className="code-gate-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="code-gate-header">
            <div className="lock-icon">
              <FiLock />
            </div>
            <h1>Portfolio Access</h1>
            <p>Enter your access code to view the portfolio</p>
          </div>

          <form onSubmit={handleSubmit} className="code-form">
            <div className="code-input-group">
              <div className="code-input-wrapper">
                <input
                  type={showCode ? 'text' : 'password'}
                  value={code}
                  onChange={handleCodeChange}
                  placeholder="Enter access code"
                  className="code-input"
                  autoComplete="off"
                  autoFocus
                />
                <button
                  type="button"
                  className="toggle-visibility"
                  onClick={() => setShowCode(!showCode)}
                  aria-label={showCode ? 'Hide code' : 'Show code'}
                >
                  {showCode ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              
              {error && (
                <motion.div 
                  className="error-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {error}
                </motion.div>
              )}
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={!code.trim() || isLoading}
            >
              {isLoading ? (
                <span>Verifying...</span>
              ) : (
                <>
                  Access Portfolio
                  <FiArrowRight />
                </>
              )}
            </button>
          </form>

          <div className="code-gate-footer">
            <p>Need an access code? Contact me directly.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CodeGate;
