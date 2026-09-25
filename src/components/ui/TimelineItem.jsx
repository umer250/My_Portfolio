import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function TimelineItem({ item, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex gap-6 md:gap-8"
    >
      <div className="flex flex-col items-center shrink-0">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center relative z-10 shrink-0"
          style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-strong)' }}
        >
          <Briefcase size={16} style={{ color: 'var(--accent-strong)' }} />
        </div>
        {!isLast && <div className="w-px flex-1 mt-2" style={{ background: 'var(--border)' }} />}
      </div>

      <div className="card rounded-xl p-6 mb-8 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-semibold" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
              {item.role}
            </h3>
            <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--accent-strong)' }}>
              {item.company}
            </p>
            <p className="flex items-center gap-1.5 text-xs mt-1.5" style={{ color: 'var(--text-faint)' }}>
              <MapPin size={12} />
              {item.location}
            </p>
          </div>
          <div
            className="flex items-center gap-1.5 text-xs whitespace-nowrap px-2.5 py-1 rounded-full"
            style={{ color: 'var(--text-muted)', background: 'var(--bg-elevated)' }}
          >
            <Calendar size={12} />
            {item.period}
          </div>
        </div>

        <ul className="flex flex-col gap-2.5">
          {item.points.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
