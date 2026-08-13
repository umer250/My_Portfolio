import { motion } from 'framer-motion';
import * as Si from 'react-icons/si';

export default function SkillCard({ skill, index }) {
  const IconComponent = Si[skill.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: index * 0.06,
      }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="skill-card glass-card rounded-xl p-4 flex flex-col items-center gap-3 cursor-default group"
      style={{ minWidth: '90px' }}
    >
      <motion.div
        whileHover={{ rotate: 10, scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="text-3xl transition-colors duration-300"
        style={{ color: 'var(--text-muted)' }}
      >
        {IconComponent ? (
          <IconComponent
            style={{ color: 'inherit' }}
            className="group-hover:text-inherit transition-colors duration-300"
          />
        ) : (
          <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>
            {skill.name[0]}
          </span>
        )}
      </motion.div>

      <span
        className="text-xs font-medium text-center leading-tight"
        style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}
      >
        {skill.name}
      </span>

      {/* Hover glow dot */}
      <div
        className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: skill.color }}
      />

      <style>{`
        .skill-card:hover { border-color: ${skill.color}40 !important; box-shadow: 0 8px 32px ${skill.color}20; }
        .skill-card:hover svg { color: ${skill.color} !important; }
      `}</style>
    </motion.div>
  );
}
