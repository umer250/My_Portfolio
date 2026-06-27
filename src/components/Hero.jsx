import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { personalInfo, socialLinks, typingRoles } from '../data/portfolioData'
import { Link } from 'react-scroll'

function useTypewriter(words, speed = 90, pause = 1800) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!deleting && subIndex === words[index].length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }
    const t = setTimeout(() => {
      setSubIndex((s) => s + (deleting ? -1 : 1))
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(t)
  }, [subIndex, deleting, index, words, speed, pause])

  return words[index].substring(0, subIndex)
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Hero() {
  const typedText = useTypewriter(typingRoles)

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 2rem 2rem',
        background: `
          radial-gradient(ellipse at 10% 80%, rgba(120,20,60,0.35) 0%, transparent 55%),
          radial-gradient(ellipse at 85% 20%, rgba(30,20,100,0.3) 0%, transparent 55%),
          #0D0D1A
        `,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="hero-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
        }}
      >
        {/* LEFT — Text content */}
        <div>
          {/* Greeting */}
          <motion.p
            {...fadeUp(0.1)}
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '0.3rem',
            }}
          >
            {personalInfo.greeting} {personalInfo.name}!
          </motion.p>

          {/* Role line */}
          <motion.div
            {...fadeUp(0.25)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.2rem',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
                color: '#ffffff',
              }}
            >
              {personalInfo.titleWhite}
            </span>
            <span
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
                color: '#00FF88',
                minWidth: '2ch',
              }}
            >
              {typedText}
              <span className="cursor-blink" style={{ color: '#00FF88' }}>|</span>
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            {...fadeUp(0.4)}
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '0.95rem',
              color: '#AAAACC',
              lineHeight: 1.8,
              textAlign: 'justify',
              marginBottom: '2rem',
              maxWidth: '520px',
            }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.55)}
            style={{ display: 'flex', gap: '1rem', marginBottom: '1.8rem', flexWrap: 'wrap' }}
          >
            <Link to="portfolio" smooth={true} offset={-64} duration={500} style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: '#FFA500', boxShadow: '0 0 16px rgba(255,165,0,0.25)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: '#ffffff',
                  background: '#1E1E30',
                  border: '1px solid #2A2A45',
                  borderRadius: '8px',
                  padding: '0.7rem 1.6rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
              >
                Projects <span style={{ fontSize: '0.8rem' }}>↗</span>
              </motion.button>
            </Link>
            <a href={personalInfo.resumeLink} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: '#FFA500', boxShadow: '0 0 16px rgba(255,165,0,0.25)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: '#000',
                  background: '#FFA500',
                  border: '1px solid #FFA500',
                  borderRadius: '8px',
                  padding: '0.7rem 1.6rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'background 0.2s',
                }}
              >
                Resume <span style={{ fontSize: '0.8rem' }}>↗</span>
              </motion.button>
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div {...fadeUp(0.7)} style={{ display: 'flex', gap: '0.9rem' }}>
            {[
              { href: socialLinks.github,   Icon: FaGithub,   label: 'GitHub' },
              { href: socialLinks.linkedin, Icon: FaLinkedin, label: 'LinkedIn' },
              { href: socialLinks.email,    Icon: FaEnvelope, label: 'Email' },
              { href: socialLinks.whatsapp, Icon: FaWhatsapp, label: 'WhatsApp' },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, backgroundColor: '#2A2A45', boxShadow: '0 0 12px rgba(255,165,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  background: '#1E1E30',
                  border: '1px solid #2A2A45',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '1.1rem',
                  transition: 'background 0.2s',
                  textDecoration: 'none',
                }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
        >
          {/* Outer animated ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              width: 'clamp(270px, 33vw, 360px)',
              height: 'clamp(270px, 33vw, 360px)',
              borderRadius: '50%',
              border: '2px dashed rgba(0,255,136,0.35)',
            }}
          />
          {/* Glow behind photo */}
          <div
            style={{
              position: 'absolute',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(60,40,180,0.45) 0%, transparent 70%)',
              filter: 'blur(35px)',
            }}
          />
          {/* Floating photo */}
          <div
            className="float-anim"
            style={{
              width: 'clamp(240px, 30vw, 320px)',
              height: 'clamp(240px, 30vw, 320px)',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid rgba(0,255,136,0.5)',
              boxShadow: '0 0 30px rgba(0,255,136,0.25), 0 0 60px rgba(80,60,255,0.2)',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <img
              src={personalInfo.profilePhoto}
              alt={personalInfo.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.style.background = 'linear-gradient(135deg, #1A1A2E, #2A2A45)'
                e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:4rem;font-weight:700;color:#FFA500;font-family:Poppins,sans-serif">${personalInfo.name.charAt(0)}</div>`
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Responsive: stack on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:first-child p,
          .hero-grid > div:first-child div {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
