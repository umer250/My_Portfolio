import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCode, FaCertificate, FaYoutube } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFA500] mb-3 sm:mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-[#AAAACC] text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-4">
            Trace my journey through projects and certifications, each a key milestone in my learning path.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-10 sm:mb-12"
        >
          <div className="bg-[#13131F] rounded-lg p-1.5 sm:p-2 inline-flex gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
                activeTab === 'projects'
                  ? 'bg-[#1A1A2E] text-white shadow-lg'
                  : 'text-[#AAAACC] hover:text-white'
              }`}
            >
              <FaCode className="text-sm sm:text-base" /> 
              <span>Projects</span>
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
                activeTab === 'certificates'
                  ? 'bg-[#1A1A2E] text-white shadow-lg'
                  : 'text-[#AAAACC] hover:text-white'
              }`}
            >
              <FaCertificate className="text-sm sm:text-base" /> 
              <span>Certificates</span>
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        {activeTab === 'projects' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        )}

        {/* Certificates Placeholder */}
        {activeTab === 'certificates' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <FaCertificate className="text-[#FFA500] text-6xl mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Certificates Coming Soon</h3>
            <p className="text-[#AAAACC]">
              Professional certifications and achievements will be displayed here.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [imageError, setImageError] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="bg-[#1A1A2E] border border-[#2A2A45] rounded-xl overflow-hidden group card-hover flex flex-col"
    >
      {/* Project Thumbnail */}
      <div className="relative h-44 sm:h-48 overflow-hidden bg-gradient-to-br from-[#1A1A2E] to-[#2A2A45]">
        {project.image && !imageError ? (
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className={`text-6xl font-bold bg-gradient-to-br ${project.gradient} bg-clip-text text-transparent`}>
                {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-5 sm:p-6 space-y-3 sm:space-y-4 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-white">{project.title}</h3>
        
        <p className="text-[#AAAACC] text-xs sm:text-sm line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-medium bg-[#2A2A45] text-[#AAAACC] rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between pt-2 sm:pt-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00FF88] hover:text-[#00FF88]/80 font-semibold flex items-center gap-2 group/link text-xs sm:text-sm"
          >
            {project.demo && project.demo.includes('youtu') ? (
              <FaYoutube className="text-red-500 text-base sm:text-lg group-hover/link:scale-110 transition-transform" />
            ) : null}
            <span>{project.demoText || 'Live Demo'}</span>
            {!project.demo || !project.demo.includes('youtu') ? (
              <FaExternalLinkAlt className="text-xs sm:text-sm group-hover/link:translate-x-1 transition-transform" />
            ) : null}
          </a>
          
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#2A2A45] hover:bg-[#3A3A55] text-white rounded-lg transition-colors flex items-center gap-2"
          >
            <FaGithub />
            Details
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
