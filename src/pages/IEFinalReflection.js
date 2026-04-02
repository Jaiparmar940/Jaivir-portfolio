import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiLock } from 'react-icons/fi';
import './IEPortfolio.css';

const SECTIONS = [
  {
    id: 'capstone',
    title: 'Biggest Takeaways from the Capstone',
    paragraphs: [
      'The most important takeaway from the capstone was learning how different building something real is from simply analyzing ideas. Early on, our thinking around Grid Intelligence was naive—we were effectively treating electricity markets like abstract financial systems rather than physical systems with hard constraints. Over time, I developed a much more grounded understanding of how the grid actually operates: electricity must be balanced in real time, congestion creates localized price differences, and renewables introduce volatility that fundamentally changes system behavior.',
      'This shift forced us to abandon simplistic ideas like "moving power from cheap nodes to expensive nodes" and instead focus on what is actually feasible—coordinating storage in time at specific locations and managing congestion risk financially. That realization alone was a major inflection point in how I think about problem-solving: the best ideas are not the most intuitive ones, but the ones that respect underlying system constraints.',
      'Another key takeaway was the importance of integration. Many existing tools in the energy space either focus on forecasting or execution, but rarely both. Through this project, I saw how much value is lost when insights are not translated into action. Our approach, combining congestion forecasting, dispatch optimization, and hedge-aware analytics into a single system, came directly from recognizing these gaps.',
      'Finally, I learned that technical sophistication alone is not enough. A strong idea needs to be grounded in a real customer workflow, a clear value proposition, and a credible path to adoption. The capstone forced me to constantly connect technical decisions back to economic outcomes and user needs.',
    ],
  },
  {
    id: 'evolution',
    title: 'Evolution of My Understanding of Myself and Entrepreneurship',
    paragraphs: [
      'This experience significantly changed how I see both myself and entrepreneurship.',
      'Going into the capstone, I thought of innovation primarily as building something technically impressive. Through this project, I realized that innovation is much more about identifying where value is actually created and captured. In our case, that meant shifting from a technically interesting idea (price prediction) to a system that directly improves decision-making and economic outcomes.',
      'I also became more aware of my own tendencies. I naturally gravitate toward technical depth and system design, but I initially underestimated how important market framing and positioning are. Over time, I started thinking more like an operator, asking not just "does this work?" but "who pays for this, and why now?"',
      'At the same time, I learned that I’m most effective when working on problems that are both technically complex and economically meaningful. The intersection of machine learning, optimization, and energy markets is not an easy space, but that’s exactly what makes it interesting. I’m less motivated by incremental ideas and more drawn to problems where first-principles thinking actually changes the approach.',
      'Perhaps most importantly, I became more comfortable being wrong. Many of our early assumptions about the grid, arbitrage, and market dynamics did not hold up under scrutiny. Instead of seeing that as failure, I now see it as a necessary part of building something real. The speed at which you can invalidate bad assumptions is often more important than the initial idea itself.',
    ],
  },
  {
    id: 'impact',
    title: 'Impact on My Duke Experience and Future Application',
    paragraphs: [
      'The capstone was one of the few experiences at Duke where everything came together, engineering, computer science, and entrepreneurship all had to be applied simultaneously.',
      'In most classes, problems are well-defined and solutions are scoped. In this project, the ambiguity was the main challenge. We had to define the problem, validate whether it was worth solving, and then build toward a solution while continuously adjusting our direction. That made it far more representative of real-world work than traditional coursework.',
      'It also changed how I approach learning. Instead of optimizing for grades or completion, I started optimizing for usefulness, whether something would actually help us build a better system or make a better decision. That shift in mindset is something I plan to carry forward beyond Duke.',
      'Looking ahead, I will apply what I’ve learned in two main ways. First, I now have a much clearer understanding of how to evaluate startup ideas: they need to be grounded in real constraints, tied to measurable value creation, and positioned within an existing workflow. Second, I’ve developed a stronger bias toward action. It is far more effective to build, test, and iterate than to overanalyze in isolation.',
      'More broadly, this experience reinforced that the most impactful opportunities often sit at the intersection of technical systems and market inefficiencies. Whether or not I continue working directly on Grid Intelligence, I plan to keep pursuing problems in that category, where understanding the system deeply leads to non-obvious but high-leverage solutions.',
    ],
  },
];

const THEME_KEY = 'ie-portfolio-theme';

function IEFinalReflection() {
  const [dark, setDark] = useState(() => {
    try {
      const s = window.localStorage.getItem(THEME_KEY);
      if (s === 'dark' || s === 'light') return s === 'dark';
    } catch (_) {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    const root = document.getElementById('ie-final-reflection-root');
    if (root) root.setAttribute('data-theme', dark ? 'dark' : 'light');
    try {
      window.localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light');
    } catch (_) {}
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setBackToTopVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div id="ie-final-reflection-root" className="ie-portfolio">
      <header className="ie-nav-wrap">
        <nav className="ie-nav">
          <span className="ie-nav-title">
            <FiLock className="ie-nav-lock" aria-hidden />
            <Link to="/ie-portfolio" className="ie-nav-back">
              I&E Portfolio
            </Link>
            <span className="ie-nav-sep" aria-hidden>
              /
            </span>
            Final Reflection
            <span className="ie-protected-badge">Protected</span>
          </span>
          <ul className="ie-nav-links">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  className="ie-nav-scroll"
                  onClick={() => scrollToSection(s.id)}
                >
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="ie-theme-btn"
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle light/dark mode"
          >
            {dark ? <FiMoon /> : <FiSun />}
          </button>
        </nav>
      </header>

      <div className="ie-container">
        <section className="ie-hero">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Final Reflection
          </motion.h1>
        </section>

        {SECTIONS.map((section, si) => (
          <motion.section
            key={section.id}
            id={section.id}
            className="ie-section"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="ie-section-card">
              <h2>{section.title}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      <button
        type="button"
        className={`ie-back-to-top ${backToTopVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}

export default IEFinalReflection;
