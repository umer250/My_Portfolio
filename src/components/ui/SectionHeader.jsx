import { motion } from 'framer-motion';

export default function SectionHeader({ number, title, subtitle, light = false }) {
  return (
    <div className="relative mb-16">
      <span className="section-number">{number}</span>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-sm font-semibold tracking-[0.2em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan)' }}
          >
            {subtitle}
          </span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: 'var(--cyan)', opacity: 0.5 }} />
        </div>
        <h2
          className="font-display font-bold"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            lineHeight: 1.1,
            color: light ? 'var(--text-primary)' : 'var(--text-primary)',
          }}
        >
          {title}
        </h2>
      </motion.div>
    </div>
  );
}
