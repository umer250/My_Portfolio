import { motion } from 'framer-motion';
import { iconMap } from '../data/iconMap';
import { skillCategories } from '../data/portfolioData';

const allSkills = skillCategories.flatMap(group => group.skills);
const loopSkills = [...allSkills, ...allSkills];

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-24 relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center font-extrabold mb-14"
        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--text-primary)' }}
      >
        Tools &amp; Technologies
      </motion.h2>

      <div
        className="relative w-full py-4"
        style={{
          overflowX: 'hidden',
          overflowY: 'visible',
          maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="marquee-track">
          {loopSkills.map((skill, i) => {
            const Icon = iconMap[skill.icon];
            return (
              <div
                key={`${skill.name}-${i}`}
                className="marquee-item flex flex-col items-center gap-3 px-8 shrink-0 rounded-2xl"
                style={{ minWidth: 110 }}
              >
                <div
                  className="marquee-icon-box w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: skill.color }}
                >
                  {Icon ? <Icon /> : <span className="text-lg font-bold">{skill.name[0]}</span>}
                </div>
                <span className="text-sm font-medium whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
