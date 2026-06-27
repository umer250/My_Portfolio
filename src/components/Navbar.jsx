import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

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

  return (
    <motion.nav
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
        padding: '0 2rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: '#FFA500', letterSpacing: '0.01em' }}>
        Portfolio
      </span>

      {/* Desktop Nav */}
      <div className="desktop-nav" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            onSetActive={() => setActive(link.to)}
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '0.95rem',
              color: active === link.to ? '#FFA500' : '#ffffff',
              cursor: 'pointer',
              position: 'relative',
              paddingBottom: '4px',
              transition: 'color 0.2s',
              textDecoration: 'none',
            }}
          >
            {link.label}
            {active === link.to && (
              <motion.div
                layoutId="nav-underline"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: '#FFA500',
                  borderRadius: '2px',
                }}
              />
            )}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="mobile-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
      >
        <div style={{ width: '24px', height: '2px', background: '#FFA500', marginBottom: '5px', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
        <div style={{ width: '24px', height: '2px', background: '#FFA500', marginBottom: '5px', opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
        <div style={{ width: '24px', height: '2px', background: '#FFA500', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute',
            top: '64px',
            left: 0,
            right: 0,
            background: '#13131F',
            borderBottom: '1px solid rgba(255,165,0,0.2)',
            padding: '1rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
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
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                fontSize: '1rem',
                color: active === link.to ? '#FFA500' : '#ffffff',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}

      <style>{`
        .mobile-hamburger { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: block !important; }
        }
      `}</style>
    </motion.nav>
  )
}
