import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { personalInfo, typingRoles } from '../data/portfolioData';

function useTypewriter(words, speed = 65, pause = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex(i => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText(current.slice(0, deleting ? text.length - 1 : text.length + 1));
      }, deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

const Hero = () => {
  const typed = useTypewriter(typingRoles);
  const firstName = personalInfo.name.split(' ')[0];

  return (
    <section id="home" className="relative pt-32 pb-24 sm:pt-40 overflow-hidden">
      <div className="glow-blob" style={{ width: 500, height: 500, top: '5%', left: '2%' }} />

      <div className="section-container w-full relative">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden" style={{ border: '2px solid var(--border-strong)' }}>
              <img src={personalInfo.profilePhoto} alt={personalInfo.name} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <h1
              className="font-extrabold mb-4"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                lineHeight: 1.15,
                color: 'var(--text-muted)',
              }}
            >
              Hello, I'm <span style={{ color: 'var(--accent-strong)' }}>{firstName}</span> <span className="inline-block">👋</span>
              <span style={{ color: 'var(--text-faint)' }}>.</span>
            </h1>

            <div className="h-8 mb-5 text-lg sm:text-xl font-medium" style={{ color: 'var(--text-primary)' }}>
              <span>{typed}</span>
              <span className="inline-block w-0.5 h-5 ml-0.5 align-middle" style={{ background: 'var(--accent-strong)' }} />
            </div>

            <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8" style={{ color: 'var(--text-muted)' }}>
              {personalInfo.tagline} I specialize in React, TypeScript, Bun/Node.js, and PostgreSQL — with production experience across web and desktop applications.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Link to="projects" smooth offset={-70} duration={400} className="cursor-pointer pill-btn">
                View Projects
              </Link>
              <Link
                to="contact"
                smooth
                offset={-70}
                duration={400}
                className="btn-hover cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm border"
                style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
