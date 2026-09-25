import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { education, certifications } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-28" style={{ background: 'var(--bg-surface)' }}>
      <div className="section-container">
        <SectionHeader title="Education & Certifications" subtitle="Background" />

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide" style={{ color: 'var(--text-faint)' }}>
              Education
            </h3>
            {education.map(edu => (
              <div key={edu.degree} className="card rounded-xl p-6 flex gap-4">
                <div
                  className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center"
                  style={{ background: 'var(--bg-elevated)', color: 'var(--accent-strong)' }}
                >
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h4 className="font-semibold" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                    {edu.degree}
                  </h4>
                  <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>{edu.institution}</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-faint)' }}>{edu.location} · {edu.period}</p>
                  <p className="text-sm mt-2 font-medium" style={{ color: 'var(--text-primary)' }}>{edu.detail}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide" style={{ color: 'var(--text-faint)' }}>
              Certifications
            </h3>
            {certifications.map(cert => (
              <div key={cert.title} className="card rounded-xl p-6 flex gap-4">
                <div
                  className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center"
                  style={{ background: 'var(--bg-elevated)', color: 'var(--accent-strong)' }}
                >
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="font-semibold" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                    {cert.title}
                  </h4>
                  <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>{cert.issuer} · {cert.date}</p>
                  <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>{cert.description}</p>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium mt-2"
                      style={{ color: 'var(--accent-strong)' }}
                    >
                      Verify credential
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
