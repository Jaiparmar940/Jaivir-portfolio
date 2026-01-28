import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import './IEPortfolio.css';

const SECTION_CONTENT = {
  myStory: {
    title: 'My Story',
    id: 'my-story',
    paragraphs: [
      "I'm Jaivir Parmar from Santa Maria, California. I came to Duke wanting to build things that perform in the real world, first through engineering, and increasingly through entrepreneurship. I chose Mechanical Engineering and Computer Science because I'm obsessed with systems: how mechanical constraints, data, and human behavior interact. That shows up in what I like most, cars and performance engineering, and it extends naturally to AI predictors, where you can model reality, test assumptions, and iterate fast.",
      "Over time, I realized I don't just want to solve technical problems; I want to build products people actually use. Entrepreneurship is the most direct path for me to turn technical skill into impact. Previously, I built Impression, a platform that helps people improve dating profiles through structured feedback, testing, and AI suggestions. I also developed quantitative finance tools like the Omega Portfolio Engine, which combines regime detection with portfolio optimization and backtesting.",
      "Long-term, I want to start an impactful social entrepreneurship venture. My goal is to build technology that improves real human outcomes while staying grounded in measurable results, iteration, and accountability.",
    ],
  },
  coursework: {
    title: 'Coursework',
    id: 'coursework',
    paragraphs: [
      "My I&E coursework strengthened how I frame problems, validate solutions, and communicate value, which are kills that directly shaped my projects.",
      "In I&E 263S (Problem Solving in Global Health), the biggest takeaway was disciplined problem framing: understanding stakeholders, constraints, and root causes before jumping to a solution. That mindset transfers directly to consumer products like Impression, where \"the problem\" is rarely what it looks like at first. It pushed me to think in terms of experimentation, feedback loops, and measurable improvement rather than vibes.",
      "In I&E 690 (Global Health Studies – TOP), I focused on how innovation scales responsibly across complex systems. It reinforced that impact isn't just having a clever idea, it's designing around incentives, access, and unintended consequences. That lens influences how I think about building socially impactful products that people can actually adopt.",
      "EGR 101 (Engineering Design & Communication) helped me operationalize execution: translating ideas into prototypes, testing quickly, and communicating clearly to different audiences. That maps directly to shipping real software, documenting decisions, and building something other people can use, not just something that works on my machine.",
      "Across these courses, the common thread was learning to move from insight to execution: identify a real problem, build a testable solution, learn quickly, and iterate.",
    ],
  },
  experiences: {
    title: 'Experiences',
    id: 'experiences',
    items: [
      {
        title: 'Impression',
        hours: '150 hours',
        description: "My 150-hour experience is building Impression, an AI-driven mobile app that helps users optimize dating profiles across platforms like Hinge, Tinder, and Bumble. The core idea is to treat a dating profile like a measurable, testable personal-branding system: users can upload profiles, receive structured peer or AI feedback, and test variations to learn what actually improves outcomes. I chose this experience because it combines product-building, human behavior, and applied machine learning in a real consumer setting. It's entrepreneurial because I'm responsible for the full loop (product design, development, user testing, and iteration) and innovative because it applies experimentation and feedback systems to an area where people usually rely on guesswork.",
        reflection: "The biggest innovation was designing the product around incentives and feedback quality. It's easy to build \"ratings,\" but hard to build reliable signal. That forced me to think about trust, bias, UX, and how to structure prompts and scoring to produce actionable guidance. The experience taught me that execution quality matters more than the idea, especially when the product touches identity, confidence, and social dynamics.",
      },
      {
        title: 'DeWitt Capital Management — Omega Portfolio Engine',
        hours: '300 hours',
        description: "My 300-hour experience is an internship with DeWitt Capital Management, where I built the Omega Portfolio Engine: a regime-aware portfolio optimization system that detects market regimes and optimizes portfolios using Global Minimum Variance and Omega ratio objectives. The platform integrates regime detection models (HMM, LSTM, GMM), walk-forward backtesting, risk constraints (e.g., CVaR, turnover penalties, sector limits), and a Streamlit + FastAPI interface for interactive use. I chose this experience because it sits at the intersection of quantitative finance, applied ML, and productization—turning research-grade ideas into usable tools.",
        reflection: "The key entrepreneurial challenge was bridging research and usability. A model that's \"interesting\" is not automatically a tool that's trustworthy or usable. I had to focus on reliability, error handling, repeatable backtests, and clear outputs so the system could support real decision-making. The innovative aspect is combining regime awareness with optimization and policy management in a system designed to be customizable, explainable, and usable rather than just a notebook experiment.",
      },
    ],
  },
  failure: {
    title: 'Failure + What I Learned',
    id: 'failure',
    paragraphs: [
      "One failure was assuming that a sophisticated method would automatically produce better outcomes. In early iterations of regime detection and optimization, I tried adding complexity (more features, different models, more knobs) before I had a stable baseline and consistent evaluation. That caused confusion and \"performance\" that didn't generalize across backtests because the system wasn't controlled tightly enough.",
      "The fix was going back to fundamentals: define baselines, lock down evaluation methodology (walk-forward splits, consistent metrics), and introduce changes one at a time. That experience reinforced a core entrepreneurship lesson: complexity is not progress. Progress is measured improvement under constraints you can explain and reproduce.",
    ],
  },
  learnings: {
    title: 'Most Important Learnings',
    id: 'learnings',
    paragraphs: [
      "Across both experiences, I learned that innovation is not just invention, it's turning uncertainty into a repeatable process. The consistent pattern was: define the real problem, build the simplest viable version, measure outcomes, and iterate. I also learned that product quality is inseparable from trust: whether you're advising someone on a dating profile or portfolio allocation, the value comes from clarity, reliability, and accountability.",
      "Finally, these experiences strengthened my identity as a founder-engineer. I'm most effective when I can own the full loop (technical execution, user needs, and business logic) and keep moving toward real-world traction rather than abstract \"cool tech.\"",
    ],
  },
  workProducts: {
    title: 'Work Products',
    id: 'work-products',
    omegaRepoUrl: 'https://github.com/Jaiparmar940/allweather-quant-lab',
    paragraphs: [
      "Impression is a consumer-facing product that operationalizes feedback, experimentation, and AI guidance to help users improve dating profiles. The work product is the system itself: a structured feedback mechanism, profile variation testing, and AI-driven suggestions designed to produce actionable improvements.",
      "Omega Portfolio Engine is a full-stack quantitative platform: data ingestion (Yahoo Finance/FRED), regime feature extraction, regime detection (HMM/LSTM/GMM), optimization (GMV, Omega), risk constraints, and walk-forward backtesting with a web interface and API. The work product demonstrates how research can be engineered into a usable tool with reproducible evaluation and a clear user workflow.",
    ],
  },
};

const NAV_LINKS = [
  { label: 'My Story', href: '#my-story' },
  { label: 'Coursework', href: '#coursework' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Failure + Learning', href: '#failure' },
  { label: 'Most Important Learnings', href: '#learnings' },
  { label: 'Work Products', href: '#work-products' },
];

const THEME_KEY = 'ie-portfolio-theme';

function IEPortfolio() {
  const [dark, setDark] = useState(() => {
    try {
      const s = window.localStorage.getItem(THEME_KEY);
      if (s === 'dark' || s === 'light') return s === 'dark';
    } catch (_) {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    const root = document.getElementById('ie-portfolio-root');
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

  return (
    <div id="ie-portfolio-root" className="ie-portfolio">
      <header className="ie-nav-wrap">
        <nav className="ie-nav">
          <span className="ie-nav-title">I&E Portfolio – Assignment 1</span>
          <ul className="ie-nav-links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href}>{label}</a>
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
            Jaivir Parmar
          </motion.h1>
          <p className="ie-hero-meta">Santa Maria, CA · Mechanical Engineering & Computer Science</p>
          <p className="ie-hero-tagline">
            Building products at the intersection of entrepreneurship and AI-driven systems.
          </p>
        </section>

        <motion.section
          id={SECTION_CONTENT.myStory.id}
          className="ie-section"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="ie-section-card">
            <h2>{SECTION_CONTENT.myStory.title}</h2>
            {SECTION_CONTENT.myStory.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.section>

        <motion.section
          id={SECTION_CONTENT.coursework.id}
          className="ie-section"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="ie-section-card">
            <h2>{SECTION_CONTENT.coursework.title}</h2>
            {SECTION_CONTENT.coursework.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.section>

        <motion.section
          id={SECTION_CONTENT.experiences.id}
          className="ie-section"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="ie-section-card">
            <h2>{SECTION_CONTENT.experiences.title}</h2>
            <div className="ie-exp-cards">
              {SECTION_CONTENT.experiences.items.map((exp, i) => (
                <article key={i} className="ie-exp-card">
                  <h3>{exp.title}</h3>
                  <p className="ie-hours">{exp.hours}</p>
                  <p className="ie-label">Description</p>
                  <p>{exp.description}</p>
                  <p className="ie-label">Reflection</p>
                  <p>{exp.reflection}</p>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id={SECTION_CONTENT.failure.id}
          className="ie-section"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="ie-section-card">
            <h2>{SECTION_CONTENT.failure.title}</h2>
            {SECTION_CONTENT.failure.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.section>

        <motion.section
          id={SECTION_CONTENT.learnings.id}
          className="ie-section"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="ie-section-card">
            <h2>{SECTION_CONTENT.learnings.title}</h2>
            {SECTION_CONTENT.learnings.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.section>

        <motion.section
          id={SECTION_CONTENT.workProducts.id}
          className="ie-section"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="ie-section-card">
            <h2>{SECTION_CONTENT.workProducts.title}</h2>
            {SECTION_CONTENT.workProducts.paragraphs.map((p, i) => (
              i === 1 ? (
                <p key={i}>
                  <a href={SECTION_CONTENT.workProducts.omegaRepoUrl} target="_blank" rel="noopener noreferrer" className="ie-ext-link">Omega Portfolio Engine</a>
                  {' is a full-stack quantitative platform: data ingestion (Yahoo Finance/FRED), regime feature extraction, regime detection (HMM/LSTM/GMM), optimization (GMV, Omega), risk constraints, and walk-forward backtesting with a web interface and API. The work product demonstrates how research can be engineered into a usable tool with reproducible evaluation and a clear user workflow.'}
                </p>
              ) : (
                <p key={i}>{p}</p>
              )
            ))}
          </div>
        </motion.section>
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

export default IEPortfolio;
