import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'Tech Stack', to: 'techstack' },
  { label: 'Portfolio', to: 'portfolio' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when clicking outside or on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false)
      }
    }
    
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar-container')) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('click', handleClickOutside)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <motion.nav
      className="navbar-container"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(13,13,26,0.95)' : '#13131F',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(255,165,0,0.15)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="nav-content">
        {/* Logo */}
        <div className="logo">
          <span>Portfolio</span>
        </div>

        {/* Desktop Nav */}
        <div className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              onSetActive={() => setActive(link.to)}
              className={`nav-link ${active === link.to ? 'active' : ''}`}
            >
              {link.label}
              {active === link.to && (
                <motion.div
                  layoutId="nav-underline"
                  className="nav-underline"
                />
              )}
            </Link>
          ))}

        </div>

        {/* Mobile Hamburger */}
        <button
          className="mobile-hamburger"
          onClick={(e) => {
            e.stopPropagation()
            setMenuOpen(!menuOpen)
          }}
          aria-label="Toggle mobile menu"
        >
          <div className={`hamburger-line line-1 ${menuOpen ? 'open' : ''}`} />
          <div className={`hamburger-line line-2 ${menuOpen ? 'open' : ''}`} />
          <div className={`hamburger-line line-3 ${menuOpen ? 'open' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        initial={false}
        animate={{
          opacity: menuOpen ? 1 : 0,
          y: menuOpen ? 0 : -10,
          display: menuOpen ? 'flex' : 'none'
        }}
        transition={{ duration: 0.2 }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            onClick={() => setMenuOpen(false)}
            onSetActive={() => setActive(link.to)}
            className={`mobile-nav-link ${active === link.to ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}

      </motion.div>

      <style>{`
        /* Base navbar styles */
        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
          padding: 0 1rem;
          max-width: 100%;
        }

        /* Logo styles */
        .logo span {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          color: #FFA500;
          letter-spacing: 0.01em;
        }

        /* Desktop navigation */
        .desktop-nav {
          display: none;
          gap: 1.5rem;
          align-items: center;
        }

        .nav-link {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 0.875rem;
          color: #ffffff;
          cursor: pointer;
          position: relative;
          padding: 0.5rem 0;
          transition: color 0.2s ease;
          text-decoration: none;
          white-space: nowrap;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #FFA500;
        }

        .nav-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #FFA500;
          border-radius: 2px;
        }



        /* Mobile hamburger */
        .mobile-hamburger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          gap: 4px;
        }

        .hamburger-line {
          width: 24px;
          height: 2px;
          background: #FFA500;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .line-1.open {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .line-2.open {
          opacity: 0;
        }

        .line-3.open {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        /* Mobile menu */
        .mobile-menu {
          position: absolute;
          top: 64px;
          left: 0;
          right: 0;
          background: rgba(19, 19, 31, 0.98);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 165, 0, 0.2);
          padding: 1rem;
          flex-direction: column;
          gap: 0.75rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .mobile-nav-link {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 1rem;
          color: #ffffff;
          cursor: pointer;
          text-decoration: none;
          padding: 0.75rem 0.5rem;
          border-radius: 6px;
          transition: all 0.2s ease;
          text-align: left;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: #FFA500;
          background: rgba(255, 165, 0, 0.1);
        }

        /* Small mobile screens (up to 480px) */
        @media (max-width: 480px) {
          .nav-content {
            padding: 0 0.75rem;
          }

          .logo span {
            font-size: 1.1rem;
          }

          .mobile-hamburger {
            width: 28px;
            height: 28px;
          }

          .hamburger-line {
            width: 20px;
          }

          .mobile-menu {
            padding: 0.75rem;
          }

          .mobile-nav-link {
            font-size: 0.95rem;
            padding: 0.625rem 0.5rem;
          }
        }

        /* Medium mobile screens (481px to 640px) */
        @media (min-width: 481px) and (max-width: 640px) {
          .nav-content {
            padding: 0 1rem;
          }

          .logo span {
            font-size: 1.2rem;
          }
        }

        /* Large mobile/small tablet (641px to 767px) */
        @media (min-width: 641px) and (max-width: 767px) {
          .nav-content {
            padding: 0 1.25rem;
          }

          .logo span {
            font-size: 1.3rem;
          }

          .mobile-menu {
            padding: 1.25rem;
          }

          .mobile-nav-link {
            font-size: 1.05rem;
            padding: 0.875rem 0.75rem;
          }
        }

        /* Tablet screens (768px to 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .nav-content {
            padding: 0 1.5rem;
          }

          .logo span {
            font-size: 1.35rem;
          }

          .mobile-menu {
            padding: 1.5rem;
            gap: 1rem;
          }

          .mobile-nav-link {
            font-size: 1.1rem;
            padding: 1rem 1rem;
          }
        }

        /* Desktop screens (1024px and up) */
        @media (min-width: 1024px) {
          .nav-content {
            padding: 0 2rem;
          }

          .logo span {
            font-size: 1.4rem;
          }

          .desktop-nav {
            display: flex;
          }

          .mobile-hamburger {
            display: none;
          }

          .mobile-menu {
            display: none !important;
          }

          .nav-link {
            font-size: 0.95rem;
            gap: 2rem;
          }
        }

        /* Large desktop screens (1280px and up) */
        @media (min-width: 1280px) {
          .nav-content {
            padding: 0 2.5rem;
          }

          .desktop-nav {
            gap: 2.5rem;
          }
        }

        /* Extra large desktop screens (1536px and up) */
        @media (min-width: 1536px) {
          .nav-content {
            padding: 0 3rem;
          }

          .desktop-nav {
            gap: 3rem;
          }

          .nav-link {
            font-size: 1rem;
          }
        }
      `}</style>
    </motion.nav>
  )
}
