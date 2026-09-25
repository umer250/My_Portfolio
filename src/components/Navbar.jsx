import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const initials = personalInfo.name.split(' ').map(w => w[0]).join('');

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        background: scrolled ? 'rgba(11, 7, 19, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <Link
            to="home"
            smooth
            duration={400}
            className="cursor-pointer font-black text-lg tracking-tight italic"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            {initials}
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="icon-btn w-9 h-9 flex items-center justify-center rounded-full"
              style={{ color: 'var(--text-muted)', border: '1px solid transparent' }}
            >
              <FaGithub size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="icon-btn w-9 h-9 flex items-center justify-center rounded-full"
              style={{ color: 'var(--text-muted)', border: '1px solid transparent' }}
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={personalInfo.resumeLink}
              download
              className="btn-hover ml-1 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: 'var(--accent)', color: '#fff' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-strong)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
