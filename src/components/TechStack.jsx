import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import * as Si from 'react-icons/si'
import * as Fa from 'react-icons/fa'
import { techStack } from '../data/portfolioData'

function SkillCard({ skill, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const IconComponent = skill.icon.startsWith('Fa') ? Fa[skill.icon] : Si[skill.icon]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.94 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.04, borderColor: skill.color + '66' }}
      style={{
        background: 'linear-gradient(145deg, #111827, #0F172A)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '22px',
        padding: '2rem 1rem 1.8rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'border-color 0.3s',
        willChange: 'transform',
      }}
    >
      {/* Radial glow backdrop */}
      <motion.div
        initial={{ opacity: 0.1 }}
        whileHover={{ opacity: 0.28, scale: 1.2 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${skill.color}33 0%, transparent 70%)`,
          filter: 'blur(28px)',
          pointerEvents: 'none',
        }}
      />

      {/* Shimmer sweep on hover */}
      <motion.div
        initial={{ x: '-120%' }}
        whileHover={{ x: '280%' }}
        transition={{ duration: 0.65, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '35%',
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${skill.color}BB, transparent)`,
          pointerEvents: 'none',
        }}
      />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.4 }}
        style={{
          fontSize: '4.5rem',
          color: skill.color,
          zIndex: 2,
          filter: `drop-shadow(0 0 10px ${skill.color}55)`,
          lineHeight: 1,
        }}
      >
        {IconComponent ? <IconComponent /> : <span style={{ fontSize: '3rem' }}>⚙️</span>}
      </motion.div>

      {/* Skill Name */}
      <p
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          fontSize: '0.95rem',
          color: '#ffffff',
          textAlign: 'center',
          margin: 0,
          zIndex: 2,
          letterSpacing: '0.02em',
        }}
      >
        {skill.name}
      </p>
    </motion.div>
  )
}

export default function TechStack() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section
      id="techstack"
      style={{
        minHeight: '100vh',
        padding: '100px 2rem 80px',
        background: `
          radial-gradient(ellipse at 90% 10%, rgba(30,20,100,0.2) 0%, transparent 50%),
          #0D0D1A
        `,
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div ref={titleRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#FFA500',
              marginBottom: '0.5rem',
            }}
          >
            Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1rem',
              color: '#AAAACC',
              letterSpacing: '0.08em',
            }}
          >
            ✦ Transforming Ideas into Code ✦
          </motion.p>
        </div>

        {/* Grid */}
        <div
          className="tech-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '1.4rem',
          }}
        >
          {techStack.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) { .tech-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        @media (max-width: 768px)  { .tech-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 480px)  { .tech-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  )
}