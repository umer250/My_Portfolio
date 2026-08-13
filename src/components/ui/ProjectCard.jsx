import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -10 }}
      className="group relative glass-card rounded-2xl overflow-hidden flex flex-col cursor-default"
      style={{ border: '1px solid var(--border)' }}
    >
      {/* Project Thumbnail — Gradient Mockup */}
      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}>
        {/* Decorative grid overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(${project.accentColor}30 1px, transparent 1px), linear-gradient(90deg, ${project.accentColor}30 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
        {/* Project initials */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="text-5xl font-bold opacity-20 select-none"
            style={{ fontFamily: 'var(--font-display)', color: project.accentColor }}
          >
            {project.title.split(' ').map(w => w[0]).join('').slice(0, 3)}
          </div>
        </div>
        {/* Glow orb */}
        <div
          className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"
          style={{ background: project.accentColor }}
        />
        {/* Featured badge */}
        {project.featured && (
          <div
            className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{
              fontFamily: 'var(--font-mono)',
              background: `${project.accentColor}25`,
              color: project.accentColor,
              border: `1px solid ${project.accentColor}40`,
            }}
          >
            Featured
          </div>
        )}
        {/* Arrow indicator */}
        <motion.div
          initial={{ opacity: 0, x: 10, y: -10 }}
          whileHover={{ opacity: 1, x: 0, y: 0 }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: `${project.accentColor}30`, color: project.accentColor }}
        >
          <ArrowUpRight size={14} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          <p className="text-xs mb-1" style={{ fontFamily: 'var(--font-mono)', color: project.accentColor }}>
            {project.subtitle}
          </p>
          <h3
            className="text-xl font-bold mb-2 group-hover:transition-colors"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {project.description}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-xs"
              style={{
                fontFamily: 'var(--font-mono)',
                background: `${project.accentColor}12`,
                color: project.accentColor,
                border: `1px solid ${project.accentColor}25`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: project.accentColor }}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: 'var(--text-muted)' }}
            >
              <Github size={14} />
              GitHub
            </a>
          )}
          {!project.demo && !project.github && (
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Private project</span>
          )}
        </div>
      </div>

      {/* Border glow on hover */}
      <style>{`
        .group:hover { border-color: ${project.accentColor}35 !important; box-shadow: 0 20px 60px ${project.accentColor}15; }
      `}</style>
    </motion.div>
  );
}
