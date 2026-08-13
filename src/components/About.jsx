import { motion } from 'framer-motion';
import { Download, User } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden"
      style={{ background: 'var(--bg-surface)' }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 80% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Left: Image ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Main image */}
            <div className="relative w-72 h-80 md:w-80 md:h-96">
              {/* Decorative corner elements */}
              <div
                className="absolute -top-3 -left-3 w-24 h-24 rounded-2xl"
                style={{ border: '2px solid var(--accent)', opacity: 0.3 }}
              />
              <div
                className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl"
                style={{ border: '2px solid var(--cyan)', opacity: 0.3 }}
              />

              {/* Image wrapper */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="w-full h-full rounded-2xl overflow-hidden relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(34,211,238,0.08))',
                  border: '1px solid var(--border)',
                }}
              >
                <img
                  src={personalInfo.profileImage}
                  alt="Muhammad Umer"
                  className="w-full h-full object-cover"
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.display = 'flex';
                    e.target.parentElement.style.alignItems = 'center';
                    e.target.parentElement.style.justifyContent = 'center';
                    e.target.parentElement.innerHTML = `
                      <div style="text-align:center">
                        <div style="font-family:var(--font-display);font-size:5rem;font-weight:700;background:linear-gradient(135deg,var(--accent),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent">MU</div>
                        <div style="font-family:var(--font-mono);font-size:0.75rem;color:var(--text-muted);margin-top:0.5rem">Software Engineer</div>
                      </div>
                    `;
                  }}
                />
              </motion.div>

              {/* Role badge floating */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -right-6 top-8 glass-card px-4 py-2 rounded-xl"
                style={{ border: '1px solid rgba(139,92,246,0.25)' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--success)' }} />
                  <span className="text-xs font-medium" style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    Open to Work
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: Content ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3 mb-2">
              <span
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
              >
                About Me
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                Who <span className="gradient-text">I Am</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {personalInfo.bio.map((para, i) => (
                <p key={i} className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {para}
                </p>
              ))}
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                I believe great software is built at the intersection of technical rigor and user empathy. Whether it's an industrial AI system detecting microscopic defects or a responsive web app serving business operations, I bring the same level of craft and intentionality to every project.
              </p>
            </div>

            {/* Quick facts */}
            <div
              className="grid grid-cols-2 gap-3 p-4 rounded-xl"
              style={{ background: 'rgba(139,92,246,0.05)', border: '1px solid var(--border)' }}
            >
              {[
                { label: 'Location',    value: 'Pakistan 🇵🇰' },
                { label: 'Focus',       value: 'Full Stack + AI/ML' },
                { label: 'Experience',  value: '7+ Months' },
                { label: 'Projects',    value: '4+ Shipped' },
              ].map(fact => (
                <div key={fact.label}>
                  <p className="text-xs mb-0.5" style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{fact.label}</p>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{fact.value}</p>
                </div>
              ))}
            </div>

            {/* Download resume */}
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold self-start"
              style={{
                background: 'linear-gradient(135deg, var(--accent), #6d28d9)',
                color: '#fff',
                boxShadow: '0 0 25px rgba(139,92,246,0.3)',
                fontFamily: 'var(--font-body)',
              }}
            >
              <Download size={16} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
