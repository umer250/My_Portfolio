import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Tech Stack', to: 'tech-stack' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'tech-stack', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' '));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#13131F]/95 backdrop-blur-md border-b border-[#2A2A45]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-[#FFA500]">
              Portfolio
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`nav-link cursor-pointer text-base font-medium transition-all duration-300 relative ${
                  activeSection.toLowerCase().replace(' ', '-') === link.to
                    ? 'text-[#FFA500]'
                    : 'text-white hover:text-[#FFA500]'
                }`}
                onClick={() => setActiveSection(link.name)}
              >
                {link.name}
                {activeSection.toLowerCase().replace(' ', '-') === link.to && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FFA500] rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#FFA500] transition-colors"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#1A1A2E]/95 backdrop-blur-md border-t border-[#2A2A45]">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection.toLowerCase().replace(' ', '-') === link.to
                    ? 'text-[#FFA500] bg-[#2A2A45]'
                    : 'text-white hover:text-[#FFA500] hover:bg-[#2A2A45]'
                }`}
                onClick={() => {
                  setActiveSection(link.name);
                  setIsOpen(false);
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;