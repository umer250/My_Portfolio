import SectionHeader from './ui/SectionHeader';
import ProjectCard from './ui/ProjectCard';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28 relative">
      <div className="section-container">
        <SectionHeader title="Featured Projects" subtitle="Selected Work" />

        <div className="flex flex-col gap-16 sm:gap-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
