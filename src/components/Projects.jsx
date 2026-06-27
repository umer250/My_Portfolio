import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  FaCode, FaCertificate, FaExternalLinkAlt, FaGithub,
  FaArrowLeft, FaTimes, FaCheckCircle, FaSpinner
} from 'react-icons/fa'
import { projects, certificates } from '../data/portfolioData'

// ─── Markdown-to-HTML mini parser ────────────────────────────
function simpleMarkdown(md) {
  if (!md) return ''
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/^[-*] (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]+?<\/li>)/g, '<ul>$1</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hul])/gm, '')
    .trim()
}

// ─── Project Card ─────────────────────────────────────────────
function ProjectCard({ project, index, onDetail }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [imgHovered, setImgHovered] = useState(false)

  const gradients = [
    'linear-gradient(135deg, #1a1a3e 0%, #2d1b69 100%)',
    'linear-gradient(135deg, #0d2137 0%, #1a3a5c 100%)',
    'linear-gradient(135deg, #1a2e1a 0%, #1a3d1a 100%)',
    'linear-gradient(135deg, #2e1a1a 0%, #3d1a2e 100%)',
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(255,165,0,0.15)' }}
      style={{
        background: '#1A1A2E',
        border: '1px solid #2A2A45',
        borderRadius: '14px',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'box-shadow 0.3s, transform 0.3s',
      }}
    >
      {/* Thumbnail */}
      <div
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
        style={{ overflow: 'hidden', height: '190px', position: 'relative' }}
      >
        {project.screenshot ? (
          <motion.img
            src={project.screenshot}
            alt={project.name}
            animate={{ scale: imgHovered ? 1.07 : 1 }}
            transition={{ duration: 0.4 }}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: gradients[index % gradients.length],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '2.5rem', color: 'rgba(255,255,255,0.12)' }}>
              {project.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
            </span>
            <FaCode style={{ color: 'rgba(255,165,0,0.3)', fontSize: '1.5rem' }} />
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '1.2rem 1.3rem 1.3rem' }}>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#ffffff', marginBottom: '0.5rem' }}>
          {project.name}
        </h3>

        <p style={{
          fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '0.83rem', color: '#AAAACC',
          lineHeight: 1.65, marginBottom: '0.8rem',
          display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {project.description}
        </p>

        {/* Tech badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
          {project.techStack.map((tech) => (
            <span key={tech} style={{
              fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', fontWeight: 500,
              color: '#FFA500', background: 'rgba(255,165,0,0.1)',
              border: '1px solid rgba(255,165,0,0.25)', borderRadius: '4px', padding: '2px 8px',
            }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #2A2A45', paddingTop: '0.9rem', gap: '0.5rem' }}>
          {project.liveUrl ? (
            <motion.a
              href={project.liveUrl} target="_blank" rel="noreferrer"
              whileHover={{ x: 2 }}
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.82rem', color: '#00BFFF', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            >
              Live Demo <FaExternalLinkAlt style={{ fontSize: '0.7rem' }} />
            </motion.a>
          ) : (
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.78rem', color: '#555577' }}>
              No Live Demo
            </span>
          )}

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <motion.a
              href={project.githubUrl} target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.05, background: '#2A2A45' }}
              style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.82rem',
                color: '#ffffff', textDecoration: 'none', background: '#2A2A45',
                borderRadius: '6px', padding: '0.35rem 0.8rem',
                display: 'flex', alignItems: 'center', gap: '0.35rem', transition: 'background 0.2s',
              }}
            >
              <FaGithub /> GitHub
            </motion.a>
            <motion.button
              onClick={() => onDetail(project)}
              whileHover={{ scale: 1.05, background: 'rgba(255,165,0,0.15)' }}
              style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.82rem',
                color: '#FFA500', background: 'rgba(255,165,0,0.08)',
                border: '1px solid rgba(255,165,0,0.35)', borderRadius: '6px',
                padding: '0.35rem 0.8rem', cursor: 'pointer', transition: 'background 0.2s',
              }}
            >
              Details
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Full-Screen Detail Page (fixed overlay) ────────────────
function DetailPage({ project, onBack }) {
  const [readmeContent, setReadmeContent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Lock body scroll while detail page is open
    document.body.style.overflow = 'hidden'
    const fetchReadme = async () => {
      try {
        const res = await fetch(`https://api.github.com/repos/umer250/${project.repoName}/readme`, {
          headers: { Accept: 'application/vnd.github.v3+json' },
        })
        if (!res.ok) throw new Error('Not found')
        const data = await res.json()
        const decoded = atob(data.content.replace(/\n/g, ''))
        setReadmeContent(decoded)
      } catch {
        setReadmeContent(null)
      } finally {
        setLoading(false)
      }
    }
    fetchReadme()
    return () => {
      // Restore body scroll on unmount
      document.body.style.overflow = ''
    }
  }, [project.repoName])

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 60 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: '#0D0D1A',
        overflowY: 'auto',
        paddingTop: '80px',
      }}
    >
      <div style={{ padding: '2rem 2rem 4rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Back button */}
        <motion.button
          onClick={onBack}
          whileHover={{ x: -4, background: 'rgba(255,255,255,0.1)' }}
          whileTap={{ scale: 0.96 }}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.95rem',
            color: '#ffffff', background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '8px', padding: '0.55rem 1.1rem',
            cursor: 'pointer', marginBottom: '2.5rem',
            transition: 'background 0.2s',
          }}
        >
          <FaArrowLeft /> Back
        </motion.button>

        <div className="detail-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '2.5rem', alignItems: 'start' }}>
          {/* LEFT — Description */}
          <div>
            <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#ffffff', marginBottom: '1.5rem' }}>
              {project.name}
            </h1>

            {loading ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#AAAACC', fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', marginBottom: '2rem' }}>
                <FaSpinner style={{ animation: 'spin 1s linear infinite' }} /> Fetching details from GitHub...
              </div>
            ) : readmeContent ? (
              <div
                className="readme-content"
                dangerouslySetInnerHTML={{ __html: simpleMarkdown(readmeContent) }}
                style={{ color: '#CCCCDD', fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}
              />
            ) : (
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', color: '#CCCCDD', lineHeight: 1.85, textAlign: 'justify', marginBottom: '2rem' }}>
                {project.description}
              </p>
            )}

            {/* Key Features */}
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: '#ffffff', marginBottom: '1rem' }}>
              Key Features
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {project.features.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '8px', padding: '0.8rem 1rem',
                  }}
                >
                  <span style={{ color: '#00BFFF', fontSize: '0.5rem', marginTop: '0.45rem', flexShrink: 0 }}>●</span>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.92rem', color: '#CCCCDD', lineHeight: 1.5 }}>
                    {feat}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                  <motion.button
                    whileHover={{ scale: 1.04, boxShadow: '0 0 16px rgba(0,191,255,0.35)' }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.9rem',
                      color: '#ffffff', background: '#0077AA',
                      border: 'none', borderRadius: '8px', padding: '0.75rem 1.5rem',
                      cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
                    }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.button>
                </a>
              )}
              <a href={project.githubUrl} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 0 16px rgba(255,255,255,0.15)' }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.9rem',
                    color: '#ffffff', background: '#24292E',
                    border: 'none', borderRadius: '8px', padding: '0.75rem 1.5rem',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
                  }}
                >
                  <FaGithub /> GitHub
                </motion.button>
              </a>
            </div>
          </div>

          {/* RIGHT — Technology Used card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              background: '#1A1A2E',
              border: '1px solid #2A2A45',
              borderRadius: '14px',
              padding: '1.8rem',
            }}
          >
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#ffffff', marginBottom: '1.2rem' }}>
              Technology Used
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}>
              {project.techStack.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25 + i * 0.06 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.45rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px', padding: '0.5rem 0.9rem',
                  }}
                >
                  <span style={{ color: '#FFA500', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.02em', fontFamily: 'monospace' }}>{'</>'}</span>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem', color: '#ffffff', fontWeight: 500 }}>
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Screenshot thumbnail */}
            {project.screenshot && (
              <div style={{ marginTop: '1.8rem', borderRadius: '10px', overflow: 'hidden', border: '1px solid #2A2A45' }}>
                <img src={project.screenshot} alt={project.name} style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
              </div>
            )}
          </motion.div>
        </div>
      </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .readme-content h1 { font-size: 1.6rem; color: #FFA500; margin: 1.2rem 0 0.6rem; font-family: Poppins, sans-serif; }
        .readme-content h2 { font-size: 1.2rem; color: #ffffff; margin: 1rem 0 0.5rem; font-family: Poppins, sans-serif; }
        .readme-content h3 { font-size: 1rem; color: #AAAACC; margin: 0.8rem 0 0.4rem; font-family: Poppins, sans-serif; }
        .readme-content code { background: rgba(255,165,0,0.12); color: #FFA500; padding: 2px 6px; border-radius: 4px; font-size: 0.85em; }
        .readme-content ul { padding-left: 1.2rem; margin: 0.5rem 0; }
        .readme-content li { margin-bottom: 0.3rem; }
        .detail-layout { grid-template-columns: 1fr 380px; }
        @media (max-width: 900px) { .detail-layout { grid-template-columns: 1fr !important; } }
      `}</style>
    </motion.div>
  )
}


// ─── Certificate Card & Lightbox ──────────────────────────────
function CertificateCard({ cert, index, onView }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -6, boxShadow: '0 16px 36px rgba(255,165,0,0.15)' }}
      style={{
        background: '#1A1A2E',
        border: '1px solid #2A2A45',
        borderRadius: '14px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s, transform 0.3s',
      }}
      onClick={() => onView(cert)}
    >
      <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
        <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{
          position: 'absolute', inset: 0, background: 'rgba(0,0,0,0)', display: 'flex',
          alignItems: 'center', justifyContent: 'center', transition: 'background 0.25s',
        }}
          className="cert-overlay"
        />
      </div>
      <div style={{ padding: '1.1rem 1.3rem 1.3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
          <FaCertificate style={{ color: '#FFA500', fontSize: '1rem' }} />
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#ffffff', margin: 0 }}>
            {cert.title}
          </h3>
        </div>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.78rem', color: '#FFA500', marginBottom: '0.4rem', fontWeight: 600 }}>
          {cert.issuer}
        </p>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.82rem', color: '#AAAACC', lineHeight: 1.55 }}>
          {cert.description}
        </p>
      </div>
    </motion.div>
  )
}

function CertLightbox({ cert, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 9999, padding: '2rem',
      }}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative', maxWidth: '860px', width: '100%' }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '-14px', right: '-14px',
            background: '#FFA500', border: 'none', borderRadius: '50%',
            width: '36px', height: '36px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#000', fontSize: '1rem', zIndex: 1,
          }}
        >
          <FaTimes />
        </button>
        <img src={cert.image} alt={cert.title} style={{ width: '100%', borderRadius: '12px', display: 'block', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }} />
        <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#ffffff', textAlign: 'center', marginTop: '1rem' }}>
          {cert.title} — {cert.issuer}
        </p>
      </motion.div>
    </motion.div>
  )
}

// ─── Main Portfolio Component ─────────────────────────────────
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects')
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedCert, setSelectedCert] = useState(null)
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  // Close detail overlay and scroll back to Portfolio Showcase section
  const handleBack = () => {
    setSelectedProject(null)
    // Small delay lets the exit animation start before we scroll
    setTimeout(() => {
      const section = document.getElementById('portfolio')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 80)
  }

  return (
    <>
      {/* Detail page — fixed overlay, always on top */}
      <AnimatePresence>
        {selectedProject && (
          <DetailPage
            key={selectedProject.name}
            project={selectedProject}
            onBack={handleBack}
          />
        )}
      </AnimatePresence>

      <section
      id="portfolio"
      style={{
        minHeight: '100vh',
        padding: '100px 2rem',
        background: `
          radial-gradient(ellipse at 5% 90%, rgba(100,20,80,0.2) 0%, transparent 50%),
          #0D0D1A
        `,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div ref={titleRef} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#FFA500', marginBottom: '0.6rem' }}
          >
            Portfolio Showcase
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem', color: '#AAAACC', maxWidth: '550px', margin: '0 auto', lineHeight: 1.7 }}
          >
            Trace my journey through projects and certifications, each a key milestone in my learning path.
          </motion.p>
        </div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            background: '#13131F', border: '1px solid #2A2A45',
            borderRadius: '10px', overflow: 'hidden',
            marginBottom: '2.5rem', maxWidth: '420px', margin: '0 auto 2.5rem',
          }}
        >
          {[
            { key: 'projects', label: 'Projects', Icon: FaCode },
            { key: 'certificates', label: 'Certificates', Icon: FaCertificate },
          ].map(({ key, label, Icon }) => (
            <motion.button
              key={key}
              onClick={() => setActiveTab(key)}
              whileTap={{ scale: 0.97 }}
              style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.95rem',
                color: activeTab === key ? '#FFA500' : '#AAAACC',
                background: activeTab === key ? '#1A1A2E' : 'transparent',
                border: 'none', padding: '0.9rem',
                cursor: 'pointer', display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: '0.5rem',
                transition: 'all 0.25s',
                borderBottom: activeTab === key ? '2px solid #FFA500' : '2px solid transparent',
              }}
            >
              <Icon /> {label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {projects.map((project, i) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  index={i}
                  onDetail={setSelectedProject}
                />
              ))}
            </motion.div>
          )}

          {/* Certificates grid */}
          {activeTab === 'certificates' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.5rem',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              {certificates.map((cert, i) => (
                <CertificateCard
                  key={cert.title}
                  cert={cert}
                  index={i}
                  onView={setSelectedCert}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Certificate Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <CertLightbox cert={selectedCert} onClose={() => setSelectedCert(null)} />
        )}
      </AnimatePresence>

      <style>{`
        .cert-overlay:hover { background: rgba(0,0,0,0.25) !important; }
      `}</style>
    </section>
    </>
  )
}
