import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <p className="eyebrow mb-2.5">{subtitle}</p>
      <h2
        className="font-bold"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
          letterSpacing: '-0.01em',
          color: 'var(--text-primary)',
        }}
      >
        {title}
      </h2>
    </motion.div>
  );
}
