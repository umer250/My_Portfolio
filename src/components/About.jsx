import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { personalInfo } from '../data/portfolioData';

const facts = [
  { label: 'Focus', value: 'Full Stack + AI/ML' },
  { label: 'Role', value: 'Full Stack Developer' },
  { label: 'Projects', value: '4 Shipped' },
  { label: 'Certifications', value: '1 Earned' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28" style={{ background: 'var(--bg-surface)' }}>
      <div className="section-container">
        <SectionHeader title="About Me" subtitle="Introduction" />

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {personalInfo.bio.map((para, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {para}
              </p>
            ))}

            <a
              href={personalInfo.resumeLink}
              download
              className="btn-hover inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm self-start mt-2"
              style={{ background: 'var(--accent)', color: '#fff' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-strong)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
            >
              <Download size={15} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {facts.map(fact => (
              <div key={fact.label} className="card rounded-xl p-4">
                <p className="text-xs mb-1" style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-faint)' }}>
                  {fact.label}
                </p>
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {fact.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
