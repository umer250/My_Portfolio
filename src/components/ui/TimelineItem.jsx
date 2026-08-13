import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export default function TimelineItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex gap-6 md:gap-8"
    >
      {/* Left: Timeline dot + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 300, delay: index * 0.15 + 0.2 }}
          className="w-12 h-12 rounded-full flex items-center justify-center relative z-10 flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, var(--accent), var(--cyan))',
            boxShadow: '0 0 20px rgba(139,92,246,0.5)',
          }}
        >
          <Briefcase size={18} color="#fff" />
        </motion.div>
        <div className="w-0.5 flex-1 mt-4 timeline-line opacity-30" />
      </div>

      {/* Right: Content card */}
      <motion.div
        whileHover={{ y: -4 }}
        className="glass-card rounded-2xl p-6 mb-8 flex-1"
        style={{ border: '1px solid rgba(139,92,246,0.15)' }}
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-2"
              style={{
                fontFamily: 'var(--font-mono)',
                background: 'rgba(139,92,246,0.12)',
                color: 'var(--accent)',
                border: '1px solid rgba(139,92,246,0.25)',
              }}
            >
              {item.type}
            </div>
            <h3
              className="text-xl font-bold"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
            >
              {item.role}
            </h3>
            <p className="text-base font-semibold mt-0.5" style={{ color: 'var(--cyan)' }}>
              {item.company}
            </p>
          </div>
          <div
            className="flex items-center gap-2 text-sm whitespace-nowrap"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
          >
            <Calendar size={14} />
            {item.duration}
          </div>
        </div>

        <ul className="flex flex-col gap-2.5">
          {item.responsibilities.map((resp, i) => (
            <li key={i} className="flex gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: 'var(--accent)' }}
              />
              {resp}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
