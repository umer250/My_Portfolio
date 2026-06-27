import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaLinkedin, FaGithub, FaWhatsapp,
  FaCheckCircle, FaExclamationTriangle, FaExclamationCircle,
  FaFacebook
} from 'react-icons/fa'
import { socialLinks, personalInfo } from '../data/portfolioData'

// ── Validation ────────────────────────────────────────────────
function validate(fields) {
  const errors = {}
  if (!fields.name.trim()) errors.name = 'Name is required'
  else if (fields.name.trim().length < 2) errors.name = 'Name must be at least 2 characters'
  if (!fields.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = 'Enter a valid email address'
  if (!fields.message.trim()) errors.message = 'Message is required'
  else if (fields.message.trim().length < 10) errors.message = 'Message must be at least 10 characters'
  return errors
}

function hasBlankFields(fields) {
  return !fields.name.trim() || !fields.email.trim() || !fields.message.trim()
}

// ── Field error line ──────────────────────────────────────────
function FieldError({ msg }) {
  if (!msg) return null
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem',
        color: '#FF5555', marginTop: '4px',
        display: 'flex', alignItems: 'center', gap: '4px',
      }}
    >
      <FaExclamationCircle style={{ fontSize: '0.7rem' }} /> {msg}
    </motion.p>
  )
}

// ── Toast notification ────────────────────────────────────────
function Toast({ msg, type }) {
  const bgMap = {
    success: { bg: '#0D2E1A', border: '#00FF88', color: '#00FF88' },
    error:   { bg: '#2E0D0D', border: '#FF5555', color: '#FF5555' },
    warning: { bg: '#2E2200', border: '#FFA500', color: '#FFA500' },
  }
  const t = bgMap[type] || bgMap.error

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 60 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      style={{
        position: 'fixed', top: '80px', right: '24px', zIndex: 9999,
        background: t.bg, border: `1px solid ${t.border}`,
        borderRadius: '10px', padding: '0.9rem 1.4rem',
        display: 'flex', alignItems: 'center', gap: '0.6rem',
        fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem',
        fontWeight: 600, color: t.color,
        boxShadow: `0 8px 30px ${t.border}22`,
        maxWidth: '340px',
      }}
    >
      {type === 'success' && <FaCheckCircle style={{ fontSize: '1.1rem', flexShrink: 0 }} />}
      {type !== 'success' && <FaExclamationTriangle style={{ fontSize: '1.1rem', flexShrink: 0 }} />}
      {msg}
    </motion.div>
  )
}

// ── Styled input ──────────────────────────────────────────────
function Field({ id, name, type = 'text', placeholder, value, onChange, onBlur, error, rows }) {
  const [focused, setFocused] = useState(false)
  const borderColor = error ? '#FF5555' : focused ? '#FFA500' : '#2A2A45'

  const baseStyle = {
    fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem',
    color: '#ffffff', background: '#0D0D1A',
    border: `1px solid ${borderColor}`, borderRadius: '10px',
    padding: '0.85rem 1rem', outline: 'none', width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: focused ? `0 0 0 3px ${error ? 'rgba(255,85,85,0.12)' : 'rgba(255,165,0,0.12)'}` : 'none',
    resize: rows ? 'vertical' : undefined,
  }

  return (
    <div>
      {rows ? (
        <textarea
          id={id} name={name} placeholder={placeholder}
          value={value} rows={rows}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => { setFocused(false); onBlur && onBlur() }}
          style={baseStyle}
        />
      ) : (
        <input
          id={id} name={name} type={type} placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => { setFocused(false); onBlur && onBlur() }}
          style={baseStyle}
        />
      )}
      <FieldError msg={error} />
    </div>
  )
}

// ── Main Contact Component ────────────────────────────────────
export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [toast, setToast] = useState(null)
  const [sending, setSending] = useState(false)
  const [shakeBtn, setShakeBtn] = useState(false)

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 4000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const updated = { ...fields, [name]: value }
    setFields(updated)
    if (touched[name]) setErrors(validate(updated))
  }

  const handleBlur = (name) => {
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate({ ...fields }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Blank fields check first — shows the warning toast exactly as in the video
    if (hasBlankFields(fields)) {
      setShakeBtn(true)
      setTimeout(() => setShakeBtn(false), 500)
      setTouched({ name: true, email: true, message: true })
      setErrors(validate(fields))
      showToast('All fields are required!', 'warning')
      return
    }

    const errs = validate(fields)
    setTouched({ name: true, email: true, message: true })
    setErrors(errs)

    if (Object.keys(errs).length > 0) {
      setShakeBtn(true)
      setTimeout(() => setShakeBtn(false), 500)
      showToast('Please fix the errors above.', 'error')
      return
    }

    setSending(true)
    const subject = `Portfolio Contact from ${fields.name}`
    const body = `Name: ${fields.name}\nEmail: ${fields.email}\n\nMessage:\n${fields.message}`
    window.location.href = `mailto:${personalInfo.email || 'umerm8809@gmail.com'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setTimeout(() => {
      setSending(false)
      setFields({ name: '', email: '', message: '' })
      setTouched({})
      setErrors({})
      showToast("Message sent! I'll get back to you soon.", 'success')
    }, 800)
  }

  const socials = [
    { label: "Let's Connect", sub: 'on LinkedIn', Icon: FaLinkedin, bg: '#0A66C2', href: socialLinks.linkedin },
    { label: "Let's Connect", sub: 'on GitHub',   Icon: FaGithub,   bg: '#24292E', href: socialLinks.github },
    { label: "Let's Connect", sub: 'on WhatsApp', Icon: FaWhatsapp, bg: '#25D366', href: socialLinks.whatsapp },
  ]

  return (
    <section id="contact" style={{ padding: '100px 2rem 0', position: 'relative', zIndex: 1 }}>
      {toast && <Toast msg={toast.msg} type={toast.type} />}

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#FFA500', marginBottom: '0.5rem' }}
          >
            Contact Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem', color: '#AAAACC' }}
          >
            Have any questions? Feel free to ask or connect with me!
          </motion.p>
        </div>

        {/* Two columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="contact-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}
        >
          {/* LEFT — Form */}
          <div style={{ background: '#1A1A2E', border: '1px solid #2A2A45', borderRadius: '16px', padding: '2rem' }}>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#FFA500', marginBottom: '1.5rem' }}>
              Get in Touch
            </h3>

            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Field
                id="name" name="name" placeholder="Your Name"
                value={fields.name} onChange={handleChange}
                onBlur={() => handleBlur('name')}
                error={touched.name && errors.name}
              />
              <Field
                id="email" name="email" type="email" placeholder="Your Email"
                value={fields.email} onChange={handleChange}
                onBlur={() => handleBlur('email')}
                error={touched.email && errors.email}
              />
              <Field
                id="message" name="message" placeholder="Your Message"
                value={fields.message} rows={5}
                onChange={handleChange}
                onBlur={() => handleBlur('message')}
                error={touched.message && errors.message}
              />

              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.72rem', color: fields.message.length < 10 ? '#AAAACC' : '#00FF88', textAlign: 'right', marginTop: '-0.5rem' }}>
                {fields.message.length} chars {fields.message.length >= 10 ? '✓' : `(need ${10 - fields.message.length} more)`}
              </p>

              <motion.button
                type="submit"
                className={shakeBtn ? 'shake' : ''}
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(255,165,0,0.3)' }}
                whileTap={{ scale: 0.97 }}
                disabled={sending}
                style={{
                  fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1rem',
                  color: '#000000', background: '#FFA500', border: 'none',
                  borderRadius: '10px', padding: '0.9rem', cursor: sending ? 'not-allowed' : 'pointer',
                  width: '100%', opacity: sending ? 0.7 : 1, transition: 'opacity 0.2s, box-shadow 0.2s',
                }}
              >
                {sending ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </div>

          {/* RIGHT — Social links */}
          <div style={{ background: '#1A1A2E', border: '1px solid #2A2A45', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#FFA500', marginBottom: '0.5rem' }}>
              Connect With Me
            </h3>
            {socials.map(({ label, sub, Icon, bg, href }) => (
              <motion.a
                key={sub} href={href} target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.03, x: 5 }} whileTap={{ scale: 0.97 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  background: bg, borderRadius: '10px', padding: '1rem 1.2rem',
                  textDecoration: 'none', transition: 'opacity 0.2s',
                }}
              >
                <Icon style={{ fontSize: '1.4rem', color: '#ffffff', flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#ffffff', lineHeight: 1 }}>
                    {label}
                  </p>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.75)', marginTop: '3px' }}>
                    {sub}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <div style={{ textAlign: 'center', padding: '3rem 0 2rem', borderTop: '1px solid #2A2A45', marginTop: '4rem' }}>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', color: '#AAAACC' }}>
            © 2025 {personalInfo.name}™. All Rights Reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
        input:-webkit-autofill, textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 100px #0D0D1A inset !important;
          -webkit-text-fill-color: #ffffff !important;
        }
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20%,60% { transform: translateX(-6px); }
          40%,80% { transform: translateX(6px); }
        }
        .shake { animation: shake 0.45s ease; }
      `}</style>
    </section>
  )
}
