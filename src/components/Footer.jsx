import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="section-container py-10 text-center">
        <p className="text-sm" style={{ color: 'var(--text-faint)' }}>
          © {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-xs mt-1.5" style={{ color: 'var(--text-faint)' }}>
          Built with <span style={{ color: 'var(--accent-strong)' }}>♥</span> using React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
