// ============================================================
// 🚀 PIPELINE READY: PORTFOLIO DATA HUB
// ============================================================
// This file acts as the SINGLE SOURCE OF TRUTH (pipeline) for 
// the entire portfolio. Any user can simply replace the details 
// in this file with their own to instantly generate their fully 
// functioning portfolio—no other code changes are needed!
// ============================================================

export const personalInfo = {
  name: 'Muhammad Umer',
  greeting: 'HI, I AM',
  titleWhite: 'CREATIVE',
  bio: "I'm a Full Stack Developer who builds powerful web applications and intelligent systems. Combining frontend, backend, AI/ML models, and data analytics, I develop solutions that are scalable, data-driven, and designed to solve real-world problems.",
  profilePhoto: '/profile.jpg',
  resumeLink: '#',                     // Replace with your Google Drive or PDF link
}

// Typewriter cycling roles in the hero section
export const typingRoles = [
  'SOFTWARE ENGINEER',
  'FULL STACK DEVELOPER',
  'PROBLEM SOLVING',
  'DEVELOPER',
  'AI/ML',
  'DATA ANALYTICS',
]

export const socialLinks = {
  github: 'https://github.com/umer250',
  linkedin: 'https://www.linkedin.com/in/muhammad-umer-451333280/',
  email: 'mailto:umerm8809@gmail.com',
  whatsapp: 'https://wa.me/923006425321',
}

// ============================================================
// TECH STACK
// Keys must match react-icons/si icon names (SiReact, SiNodedotjs etc.)
// ============================================================
export const techStack = [
  // Frontend
  { name: 'HTML',          icon: 'SiHtml5',       color: '#E34F26' },
  { name: 'CSS',           icon: 'SiCss3',        color: '#1572B6' },
  { name: 'Tailwind CSS',  icon: 'SiTailwindcss', color: '#06B6D4' },
  { name: 'JavaScript',    icon: 'SiJavascript',  color: '#F7DF1E' },
  { name: 'TypeScript',    icon: 'SiTypescript',  color: '#3178C6' },
  { name: 'React JS',      icon: 'SiReact',       color: '#61DAFB' },
  { name: 'Angular',       icon: 'SiAngular',     color: '#DD0031' },
  // Backend & DB
  { name: 'Node JS',       icon: 'SiNodedotjs',   color: '#339933' },
  { name: 'Express JS',    icon: 'SiExpress',     color: '#FFFFFF' },
  { name: '.NET',          icon: 'SiDotnet',      color: '#512BD4' },
  { name: 'SQL',           icon: 'SiMysql',       color: '#4479A1' },
  // Languages & Tools
  { name: 'Python',        icon: 'SiPython',      color: '#3776AB' },
  { name: 'C++',           icon: 'SiCplusplus',   color: '#00599C' },
  { name: 'Git',           icon: 'SiGit',         color: '#F05032' },
  { name: 'GitHub',        icon: 'SiGithub',      color: '#FFFFFF' },
  { name: 'Docker',        icon: 'SiDocker',      color: '#2496ED' },
  { name: 'AWS',           icon: 'FaAws',         color: '#FF9900' },
  { name: 'Postman',       icon: 'SiPostman',     color: '#FF6C37' },
]

// ============================================================
// PROJECTS
// Add new projects here — they will appear automatically.
// repoName: the GitHub repo slug (github.com/umer250/<repoName>)
// screenshot: path relative to /public folder
// liveUrl: set to null if no live demo
// ============================================================
export const projects = [
  {
    name: 'ERP Rice Navigator',
    description: 'A comprehensive web-based ERP system for a rice mill and export operations firm. Features role-based access control (RBAC) with 9 distinct roles, weighbridge workflow management, offline gate entry capabilities, and detailed financial reporting dashboards.',
    techStack: ['React 19', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    features: [
      'Role-Based Access Control with 9 distinct user roles',
      'Real-time weighbridge workflow management system',
      'Offline-capable gate entry with sync on reconnect',
      'Comprehensive financial and operational reporting',
      'Multi-stage rice processing and inventory tracking',
      'Export documentation and compliance management',
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/umer250/ERP-Rice-Navigator',
    repoName: 'ERP-Rice-Navigator',
    screenshot: '/porfolio section images/erp.png',
  },
  {
    name: 'Aurax Industries',
    description: 'A luxury editorial portfolio website for a wholesale footwear manufacturer. Features an elegant dark theme design, interactive product catalog with filtering, a detailed factory pipeline overview, and smooth scroll-driven animations throughout.',
    techStack: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Luxury editorial dark theme with glassmorphism effects',
      'Interactive product catalog with category filtering',
      'Factory pipeline and manufacturing process showcase',
      'Smooth scroll-driven animations and parallax effects',
      'Fully responsive across all device sizes',
      'Optimized performance with lazy loading',
    ],
    liveUrl: 'https://aurax-shoe-industries.netlify.app/',
    githubUrl: 'https://github.com/umer250/Aurax_Industries.git',
    repoName: 'Aurax_Industries',
    screenshot: '/porfolio section images/Shoe Factory Website.png',
  },
  {
    name: '2D Image Anomaly Detection',
    description: 'An intelligent computer vision system for automated quality control in manufacturing. Uses deep learning techniques to detect surface defects and anomalies in 2D product images with high accuracy, enabling real-time inspection on production lines.',
    techStack: ['Python', 'PyTorch', 'OpenCV', 'NumPy', 'Scikit-learn'],
    features: [
      'Deep learning-based anomaly detection using autoencoders',
      'Real-time image processing and classification pipeline',
      'High-accuracy surface defect detection for quality control',
      'Visualization dashboard for anomaly heatmaps',
      'Configurable sensitivity thresholds for different products',
      'Batch processing support for offline analysis',
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/umer250/2d-image-anomaly-detection.git',
    repoName: '2d-image-anomaly-detection',
    screenshot: '/porfolio section images/2S image Anomlay Detection Sytem.png',
  },
  {
    name: 'Power BI Dashboard',
    description: 'An advanced interactive business intelligence dashboard built in Power BI. Provides real-time analytics, KPI tracking, and multi-dimensional data visualization for business decision-making. Features drill-through reports, custom DAX measures, and automated data refresh pipelines.',
    techStack: ['Power BI', 'DAX', 'SQL', 'Python', 'Excel'],
    features: [
      'Real-time KPI tracking with automated data refresh',
      'Multi-dimensional drill-through report pages',
      'Custom DAX measures for complex business calculations',
      'Interactive slicers and cross-filtering visuals',
      'Automated Python-based ETL data pipeline',
      'Export to PDF and PowerPoint for stakeholder reporting',
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/umer250/PowerBI-Dashboard',
    repoName: 'PowerBI-Dashboard',
    screenshot: '/porfolio section images/Power Bi Dashboard.png',
  },
]

// ============================================================
// CERTIFICATES
// Add new certificates here — they will appear automatically.
// ============================================================
export const certificates = [
  {
    title: 'Data Analytics Course',
    issuer: 'Coursera',
    date: '2024',
    image: '/Certificate/Coursera QHGJGDU9VYW3_page-0001.jpg',
    description: 'Completed a comprehensive Data Analytics course covering data manipulation, visualization, and analysis techniques.',
  },
  {
    title: 'Passed AI Interview',
    issuer: 'Micro1',
    date: '2024',
    image: '/Certificate/certicate by micro1.jpg',
    description: 'Successfully passed the AI-driven technical interview process evaluating software engineering and problem-solving skills.',
  },
]
