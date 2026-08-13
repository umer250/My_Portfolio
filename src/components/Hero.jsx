import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content - Text Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 max-w-2xl"
          >
            {/* Main Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight"
            >
              HI, I AM {personalInfo.name.toUpperCase()}!
            </motion.h1>

            {/* Subtitle with green highlight */}
            <motion.h2 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">CREATIVE </span>
              <span className="text-[#00FF88]">PROGRAMMER</span>
            </motion.h2>

            {/* Bio paragraph */}
            <motion.p 
              variants={itemVariants}
              className="text-[#AAAACC] text-base leading-7 mb-8 text-justify max-w-xl"
            >
              I'm a dedicated MERN Stack Developer passionate about creating 
              robust and user-friendly web applications. With hands-on experience 
              in JavaScript frameworks, API integration, and responsive design, I 
              bring innovative solutions to life. I thrive in dynamic environments 
              where I can leverage my expertise in modern web development 
              technologies to deliver impactful digital experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-4 mb-6"
            >
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A2E] text-white border border-[#2A2A45] rounded-lg font-semibold hover:border-[#FFA500] hover:shadow-lg hover:shadow-[#FFA500]/20 transition-all duration-300"
              >
                Projects
                <FaExternalLinkAlt className="text-sm" />
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A2E] text-white border border-[#2A2A45] rounded-lg font-semibold hover:border-[#FFA500] hover:shadow-lg hover:shadow-[#FFA500]/20 transition-all duration-300"
              >
                Resume
                <FaExternalLinkAlt className="text-sm" />
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-4"
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-[#1E1E30] text-white rounded-lg hover:bg-[#2A2A45] hover:text-[#FFA500] transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-[#1E1E30] text-white rounded-lg hover:bg-[#2A2A45] hover:text-[#FFA500] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={socialLinks.email}
                className="w-12 h-12 flex items-center justify-center bg-[#1E1E30] text-white rounded-lg hover:bg-[#2A2A45] hover:text-[#FFA500] transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex-shrink-0 flex items-center justify-center lg:justify-end"
          >
            <motion.div
              animate={floatingAnimation}
              className="relative"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-cyan-600/20 blur-2xl"></div>
              
              {/* Profile Image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/384x384/1A1A2E/FFA500?text=' + personalInfo.initials;
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;