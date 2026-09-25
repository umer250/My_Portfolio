import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative grid lg:grid-cols-2 gap-10 items-center py-10"
    >
      <div className="glow-blob" style={{ width: 420, height: 420, top: '10%', [reversed ? 'right' : 'left']: '5%' }} />

      <div className={`relative ${reversed ? 'lg:order-2' : ''}`}>
        <div
          className="group relative rounded-2xl overflow-hidden"
          style={{ background: project.gradient, aspectRatio: '16 / 11', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}
        >
          <div className="absolute top-0 left-0 right-0 h-9 z-10 flex items-center gap-1.5 px-4" style={{ background: 'rgba(0,0,0,0.35)' }}>
            <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
          </div>
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-top pt-9 transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center pt-9">
              <span style={{ fontSize: '4.5rem', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.35))' }}>{project.glyph}</span>
            </div>
          )}
        </div>

        <div
          className="relative sm:absolute sm:-bottom-6 sm:left-6 sm:right-6 mt-4 sm:mt-0 rounded-xl p-5"
          style={{ background: 'rgba(16, 10, 28, 0.85)', backdropFilter: 'blur(12px)', border: '1px solid var(--border)' }}
        >
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{project.description}</p>
        </div>
      </div>

      <div className={reversed ? 'lg:order-1' : ''}>
        <p className="eyebrow mb-2">{project.type}</p>
        <h3
          className="font-extrabold mb-2"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', color: 'var(--text-primary)' }}
        >
          {project.name}
        </h3>
        <p className="text-sm font-medium mb-4" style={{ color: 'var(--accent-strong)' }}>
          {project.techStack.join(', ')}
        </p>

        <ul className="flex flex-col gap-2 mb-6">
          {project.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex gap-2.5 text-sm" style={{ color: 'var(--text-muted)' }}>
              <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--accent-strong)' }} />
              {h}
            </li>
          ))}
        </ul>

        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="pill-btn">
            <FaGithub size={15} />
            GitHub
            <ArrowUpRight size={13} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
