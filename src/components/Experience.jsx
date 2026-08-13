import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import TimelineItem from './ui/TimelineItem';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 80% 30%, rgba(139,92,246,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <SectionHeader number="04" title="Journey" subtitle="Experience" />

        {/* Timeline */}
        <div className="flex flex-col">
          {experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} />
          ))}

          {/* Open to more */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-6 md:gap-8"
          >
            <div className="flex flex-col items-center flex-shrink-0">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(16,185,129,0.15)',
                  border: '1px solid rgba(16,185,129,0.4)',
                }}
              >
                <div className="w-3 h-3 rounded-full" style={{ background: 'var(--success)' }} />
              </motion.div>
            </div>
            <div className="glass-card rounded-2xl p-6 flex-1 flex items-center gap-4" style={{ border: '1px solid rgba(16,185,129,0.2)' }}>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--success)', fontFamily: 'var(--font-display)' }}>
                  Open to New Opportunities
                </p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  Currently available for full-time roles and freelance projects. Let's build something great together.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
