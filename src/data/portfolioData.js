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
  resumeLink: '/Resume.pdf',         // Local resume PDF file
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
// Updated with exact projects from resume
// ============================================================
export const projects = [
  {
    name: 'ERP Rice Navigator',
    description: 'A comprehensive full-stack ERP system for Al Gousia Foods, a rice mill and export operations firm in Gujranwala. Features role-based access control with 9 distinct roles, a 4-step manual weighbridge verification workflow, offline-capable gate entry with IndexedDB sync, and detailed financial reporting dashboards.',
    techStack: ['React 19', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'Tailwind CSS', 'Zustand', 'Express 5'],
    features: [
      'Role-Based Access Control with 9 distinct user roles (admin, owner, accountant, manager, gate, storekeeper, export_officer, hr_officer, auditor)',
      '4-step manual weighbridge verification workflow',
      'Offline-capable gate entry with IndexedDB and sync on reconnect',
      'Owner dashboard with real-time KPI cards and financial overview',
      'Multi-stage rice processing and inventory tracking',
      'Export documentation and compliance management'
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/umer250/ERP-Rice-Navigator',
    repoName: 'ERP-Rice-Navigator',
    screenshot: '/porfolio section images/erp.png',
    heroTag: "Enterprise Resource Planning System",
    duration: "Large Scale Full Stack Project",
    overview: "ERP Rice Navigator is a large-scale enterprise resource planning system designed for rice mill and export operations. The platform digitizes the complete operational lifecycle—from gate entry and weighbridge management to inventory tracking, processing, finance, and export compliance. It eliminates manual paperwork and improves operational visibility across departments.",
    problemStatement: "Traditional rice mill operations often rely on spreadsheets and manual logs, causing delays, inventory mismatches, and reporting inaccuracies. This project solves those inefficiencies by centralizing workflows into one unified system.",
    architecture: [
      "Frontend dashboard built using React",
      "REST API services via Node.js backend", 
      "Relational database with PostgreSQL",
      "Prisma ORM for schema and query management",
      "Offline sync mechanism for resilience"
    ],
    challenges: [
      "Handling complex multi-role permissions",
      "Ensuring data consistency in offline mode",
      "Designing scalable transactional workflows"
    ],
    contributions: [
      "Designed database schema",
      "Developed frontend dashboards",
      "Implemented backend business logic", 
      "Built reporting modules"
    ],
    futureImprovements: [
      "AI-based demand forecasting",
      "Mobile app for field operators",
      "IoT weighbridge integration"
    ]
  },
  {
    name: 'Aurax Industries',
    description: 'A luxury editorial portfolio website for Aurax Industries (Pvt) Ltd, a wholesale footwear manufacturer. Features an elegant dark theme design, interactive product catalog with category filtering, factory pipeline showcase, and smooth scroll-driven animations throughout.',
    techStack: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Zustand'],
    features: [
      'Luxury editorial dark theme with glassmorphism effects',
      'Interactive product catalog with category filtering (bug-fixed)',
      'Factory pipeline and manufacturing process showcase',
      'Smooth scroll-driven animations and parallax effects',
      'Staff product upload pipeline with color picker and photo upload',
      'Fully responsive across all device sizes'
    ],
    liveUrl: 'https://aurax-shoe-industries.netlify.app/',
    githubUrl: 'https://github.com/umer250/Aurax_Industries.git',
    repoName: 'Aurax_Industries',
    screenshot: '/porfolio section images/Shoe Factory Website.png',
    heroTag: "Luxury Editorial Portfolio Website",
    duration: "Frontend Design Project",
    overview: "Aurax Industries is a premium digital experience built for a wholesale footwear manufacturer. The website combines modern editorial design, smooth animations, and luxury branding to present products and manufacturing capabilities in a visually compelling way.",
    problemStatement: "Traditional manufacturing websites often feel outdated and fail to communicate brand quality. This project focuses on creating a luxury digital identity that enhances trust and visual storytelling.",
    architecture: [
      "Component-based React architecture",
      "Tailwind utility-first styling",
      "Framer Motion animation system"
    ],
    challenges: [
      "Balancing heavy visuals with performance",
      "Smooth animation optimization", 
      "Maintaining responsiveness"
    ],
    contributions: [
      "Designed UI/UX",
      "Built reusable components",
      "Implemented animations",
      "Optimized performance"
    ],
    futureImprovements: [
      "CMS integration",
      "3D product viewer", 
      "Admin catalog management"
    ]
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
      'Batch processing support for offline analysis'
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/umer250/2d-image-anomaly-detection.git',
    repoName: '2d-image-anomaly-detection',
    screenshot: '/porfolio section images/2S image Anomlay Detection Sytem.png',
    heroTag: "AI Computer Vision System",
    duration: "Machine Learning Project",
    overview: "An AI-powered computer vision system built for automated industrial quality inspection. The system detects anomalies and defects in 2D product images using deep learning, helping manufacturers reduce manual inspection time and improve quality control.",
    problemStatement: "Manual quality inspection is slow, inconsistent, and expensive. This project automates defect detection using machine learning for higher speed and accuracy.",
    architecture: [
      "Image preprocessing with OpenCV",
      "Feature learning via PyTorch model",
      "Anomaly scoring pipeline", 
      "Visualization dashboard"
    ],
    challenges: [
      "Reducing false positives",
      "Improving model generalization",
      "Training with limited anomaly data"
    ],
    contributions: [
      "Data preprocessing",
      "Model training",
      "Evaluation pipeline",
      "Visualization dashboard"
    ],
    futureImprovements: [
      "Edge device deployment",
      "Higher resolution support",
      "Video anomaly detection"
    ]
  },
  {
    name: 'Power BI Dashboard',
    description: 'An advanced interactive business intelligence dashboard built in Power BI. Provides real-time analytics, KPI tracking, and multi-dimensional data visualization for business decision-making. Features drill-through reports, custom DAX measures, and automated data refresh pipelines.',
    techStack: ['Power BI', 'Microsoft Access', 'SQL', 'Excel'],
    features: [
      'Real-time KPI tracking with automated data refresh',
      'Multi-dimensional drill-through report pages',
      'Custom DAX measures for complex business calculations',
      'Interactive slicers and cross-filtering visuals',
      'Automated Python-based ETL data pipeline',
      'Export to PDF and PowerPoint for stakeholder reporting'
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/umer250/PowerBI-Dashboard',
    repoName: 'PowerBI-Dashboard',
    screenshot: '/porfolio section images/Power Bi Dashboard.png',
    heroTag: "Business Intelligence Dashboard",
    duration: "Data Analytics Project", 
    overview: "A modern business intelligence dashboard that transforms raw operational data into actionable insights using Power BI. Designed for executives and managers to track KPIs, trends, and performance metrics in real time.",
    problemStatement: "Businesses often struggle to derive insights from fragmented datasets. This dashboard centralizes analytics for faster, data-driven decision making.",
    architecture: [
      "SQL-based data extraction",
      "Python ETL pipeline",
      "Power BI data modeling",
      "Interactive report layer"
    ],
    challenges: [
      "Optimizing DAX performance",
      "Data cleaning from multiple sources", 
      "Managing refresh pipelines"
    ],
    contributions: [
      "Data modeling",
      "Dashboard development",
      "DAX calculations",
      "ETL automation"
    ],
    futureImprovements: [
      "Cloud deployment",
      "Live streaming data",
      "Predictive analytics integration"
    ]
  },  
];

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
