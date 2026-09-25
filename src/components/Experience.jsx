import SectionHeader from './ui/SectionHeader';
import TimelineItem from './ui/TimelineItem';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28" style={{ background: 'var(--bg-surface)' }}>
      <div className="section-container max-w-4xl">
        <SectionHeader title="Experience" subtitle="Work History" />

        <div className="flex flex-col">
          {experience.map((item, i) => (
            <TimelineItem key={item.company + item.period} item={item} index={i} isLast={i === experience.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
