import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-28 relative overflow-hidden">
      <div className="glow-blob" style={{ width: 480, height: 480, bottom: '-10%', right: '10%' }} />

      <div className="section-container relative grid lg:grid-cols-2 gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3">Contact</p>
          <h2
            className="font-extrabold mb-8"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.9rem, 4vw, 2.75rem)', lineHeight: 1.2, color: 'var(--text-primary)' }}
          >
            Let's chat and discover <span style={{ color: 'var(--accent-strong)' }}>exciting</span> opportunities.
          </h2>

          <div className="flex flex-col gap-4 mb-8">
            <a href={socialLinks.email} className="flex items-center gap-3 text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
              <Mail size={18} style={{ color: 'var(--accent-strong)' }} />
              {personalInfo.email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="icon-btn w-10 h-10 flex items-center justify-center rounded-full card"
              style={{ color: 'var(--text-muted)' }}
            >
              <FaGithub size={16} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="icon-btn w-10 h-10 flex items-center justify-center rounded-full card"
              style={{ color: 'var(--text-muted)' }}
            >
              <FaLinkedin size={16} />
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card rounded-2xl p-6 sm:p-8 flex flex-col gap-4"
        >
          <input
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
            style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-strong)', color: 'var(--text-primary)' }}
          />
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
            style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-strong)', color: 'var(--text-primary)' }}
          />
          <textarea
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none transition-colors"
            style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-strong)', color: 'var(--text-primary)' }}
          />
          <button
            type="submit"
            className="btn-hover inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm"
            style={{ background: 'var(--accent)', color: '#fff' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-strong)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
          >
            Send Message
            <Send size={15} />
          </button>
          <p className="text-xs text-center" style={{ color: 'var(--text-faint)' }}>
            Opens your email client with this message pre-filled.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
