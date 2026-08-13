import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import * as SiIcons from 'react-icons/si';
import { techStack } from '../data/portfolioData';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="tech-stack" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFA500] mb-3">
            Tech Stack
          </h2>
          <p className="text-[#AAAACC] text-base sm:text-lg">
            ✦ Transforming Ideas into Code ✦
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          {techStack.map((skill, index) => {
            const IconComponent = SiIcons[skill.icon];
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -6, 
                  borderColor: '#FFA500',
                  boxShadow: '0 8px 30px rgba(255, 165, 0, 0.2)'
                }}
                className="bg-[#1A1A2E] border border-[#2A2A45] rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center space-y-3 sm:space-y-4 transition-all duration-300 min-h-[160px] sm:min-h-[180px]"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                >
                  {IconComponent ? (
                    <IconComponent size={window.innerWidth < 640 ? 50 : 60} color={skill.color} />
                  ) : (
                    <div 
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-xl sm:text-2xl font-bold"
                      style={{ backgroundColor: skill.color }}
                    >
                      {skill.name.charAt(0)}
                    </div>
                  )}
                </motion.div>

                {/* Skill Name */}
                <h3 className="text-white font-semibold text-center text-xs sm:text-sm md:text-base">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="w-full progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.08, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
