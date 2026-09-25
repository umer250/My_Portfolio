import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="section-container py-10 text-center">
        <p className="text-sm" style={{ color: 'var(--text-faint)' }}>
          © {year} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
