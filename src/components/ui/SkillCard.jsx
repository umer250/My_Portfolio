import { motion } from 'framer-motion';
import { iconMap } from '../../data/iconMap';

export default function SkillCard({ skill, index }) {
  const IconComponent = iconMap[skill.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="card-hover card rounded-lg px-3.5 py-2.5 flex items-center gap-2.5"
    >
      <span className="text-base shrink-0 flex items-center justify-center" style={{ color: skill.color, opacity: 0.9 }}>
        {IconComponent ? (
          <IconComponent />
        ) : (
          <span className="text-xs font-semibold" style={{ fontFamily: 'var(--font-mono)' }}>
            {skill.name[0]}
          </span>
        )}
      </span>
      <span className="text-sm font-medium whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>
        {skill.name}
      </span>
    </motion.div>
  );
}
