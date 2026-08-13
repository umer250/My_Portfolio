import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#13131F] border-t border-[#2A2A45] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-[#AAAACC] text-sm">
            © 2025 {personalInfo.name}™. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
