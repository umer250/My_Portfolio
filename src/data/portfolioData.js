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
  resumeLink: '/Umer_CV.pdf',         // ✅ CHANGE 1: Updated to Umer_CV.pdf
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
// ============================================================
export const projects = [
  {
    name: "ERP Rice Navigator",
    heroTag: "Enterprise Resource Planning System",
    duration: "Large Scale Full Stack Project",
    overview: "ERP Rice Navigator is a large-scale enterprise resource planning system designed for rice mill and export operations. The platform digitizes the complete operational lifecycle—from gate entry and weighbridge management to inventory tracking, processing, finance, and export compliance. It eliminates manual paperwork and improves operational visibility across departments.",
    problemStatement: "Traditional rice mill operations often rely on spreadsheets and manual logs, causing delays, inventory mismatches, and reporting inaccuracies. This project solves those inefficiencies by centralizing workflows into one unified system.",
    description: "Built a scalable web-based ERP platform with secure role-based access control supporting 9 organizational roles. Designed workflows for procurement, gate management, weighbridge operations, rice processing, inventory, accounting, and export documentation. Implemented offline support for critical operations to ensure business continuity during network outages.",
    techStack: ["React 19", "Node.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Zustand", "Express 5"],
    features: [
      "Role-Based Access Control with 9 user roles (admin, owner, accountant, manager, gate, storekeeper, export_officer, hr_officer, auditor)",
      "4-step manual weighbridge verification workflow",
      "Offline-capable gate entry with IndexedDB and sync on reconnect",
      "Owner dashboard with real-time KPI cards and financial overview",
      "Rice processing lifecycle tracking",
      "Inventory and warehouse management",
      "Financial analytics dashboards",
      "Export compliance documentation",
      "Advanced reporting and audit logs"
    ],
    architecture: [
      "Frontend dashboard built using React 19 + Vite + Zustand + React Query",
      "REST API services via Node.js + Express 5 backend",
      "Relational database with PostgreSQL",
      "Prisma ORM for schema and query management",
      "Offline sync mechanism using IndexedDB for resilience"
    ],
    challenges: [
      "Handling complex multi-role permissions across 9 roles",
      "Ensuring data consistency in offline mode with IndexedDB",
      "Designing scalable transactional weighbridge workflows"
    ],
    contributions: [
      "Designed full database schema with Prisma ORM",
      "Developed all frontend dashboards per role",
      "Implemented backend business logic with Express 5",
      "Built financial reporting modules"
    ],
    futureImprovements: [
      "AI-based demand forecasting",
      "Mobile app for field operators",
      "IoT weighbridge integration"
    ],
    githubUrl: "https://github.com/umer250/ERP-Rice-Navigator",
    screenshot: "/porfolio section images/erp.png"
  },
  {
    // ✅ CHANGE 2: Replaced Aurax Industries with Inbox Restaurant POS
    name: "Inbox Restaurant POS",
    heroTag: "Full-Stack Point of Sale & Management Platform",
    duration: "Full Stack Project",
    overview: "A comprehensive Point of Sale (POS) and restaurant management platform built for Inbox Restaurant. The system digitizes order management, billing, and daily operations — eliminating manual processes and providing real-time operational visibility for restaurant staff and management.",
    problemStatement: "Restaurant operations often rely on manual order-taking and paper-based billing, causing delays and errors. This POS system solves those inefficiencies by centralizing the entire restaurant workflow into one unified platform.",
    description: "Built a full-stack restaurant POS system with role-based authentication, real-time order processing, table management, billing & receipt generation, inventory tracking, menu customization, and daily sales reporting. Features a clean dark-themed UI inspired by the Inbox brand identity.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    features: [
      "Role-based authentication (admin, staff, manager)",
      "Real-time order processing and kitchen display",
      "Table management and reservation tracking",
      "Billing & receipt generation",
      "Inventory tracking and stock alerts",
      "Menu customization with categories",
      "Daily sales reports and analytics dashboards",
      "Fully responsive for tablet and desktop use"
    ],
    architecture: [
      "React.js frontend with Tailwind CSS",
      "Node.js + Express.js REST API backend",
      "MongoDB database for flexible menu and order data",
      "JWT-based authentication and role management"
    ],
    challenges: [
      "Real-time order synchronization across multiple stations",
      "Designing an intuitive POS UI for fast staff interaction",
      "Managing complex menu configurations with modifiers"
    ],
    contributions: [
      "Designed full UI/UX with Inbox brand identity",
      "Built all backend APIs with Express.js",
      "Implemented real-time order processing",
      "Developed billing and reporting modules"
    ],
    futureImprovements: [
      "Mobile app for waitstaff",
      "Kitchen Display System (KDS) integration",
      "Online ordering and delivery module"
    ],
    liveUrl: "https://youtu.be/aapbK2DZ1lQ?si=Z4HFw_7VrfTxN9sU",
    githubUrl: "https://github.com/umer250",
    screenshot: "/inbox-pos.png"
  },
  {
    name: "2D Image Anomaly Detection",
    heroTag: "AI Computer Vision System",
    duration: "Machine Learning Project",
    overview: "An AI-powered computer vision system built for automated industrial quality inspection. The system detects anomalies and defects in 2D product images using deep learning, helping manufacturers reduce manual inspection time and improve quality control.",
    problemStatement: "Manual quality inspection is slow, inconsistent, and expensive. This project automates defect detection using machine learning for higher speed and accuracy.",
    description: "Developed a deep learning-based anomaly detection pipeline using autoencoders and computer vision preprocessing. The model identifies surface defects and generates anomaly heatmaps for interpretability.",
    techStack: ["Python", "PyTorch", "OpenCV", "NumPy", "Scikit-learn"],
    features: [
      "Autoencoder-based anomaly detection",
      "Real-time defect detection pipeline",
      "Image preprocessing with OpenCV",
      "Anomaly heatmap visualization",
      "Configurable sensitivity threshold tuning",
      "Batch analysis support"
    ],
    architecture: [
      "Image preprocessing with OpenCV",
      "Feature learning via PyTorch autoencoder model",
      "Anomaly scoring pipeline",
      "Visualization dashboard for heatmaps"
    ],
    challenges: [
      "Reducing false positives in detection",
      "Improving model generalization across product types",
      "Training with limited anomaly data"
    ],
    contributions: [
      "Data preprocessing pipeline",
      "Model architecture and training",
      "Evaluation pipeline",
      "Visualization dashboard"
    ],
    futureImprovements: [
      "Edge device deployment",
      "Higher resolution image support",
      "Video anomaly detection"
    ],
    githubUrl: "https://github.com/umer250/2d-image-anomaly-detection.git",
    screenshot: "/porfolio section images/2S image Anomlay Detection Sytem.png"
  },
  {
    name: "Power BI Dashboard",
    heroTag: "Business Intelligence Dashboard",
    duration: "Data Analytics Project",
    overview: "A modern business intelligence dashboard that transforms raw operational data into actionable insights using Power BI. Designed for executives and managers to track KPIs, trends, and performance metrics in real time.",
    problemStatement: "Businesses often struggle to derive insights from fragmented datasets. This dashboard centralizes analytics for faster, data-driven decision making.",
    description: "Built interactive dashboards featuring advanced DAX calculations, drill-through reports, automated ETL pipelines, and real-time KPI tracking. The system supports deep analytical exploration with intuitive filtering.",
    techStack: ["Power BI", "Microsoft Access", "SQL", "Excel"],
    features: [
      "Real-time KPI monitoring",
      "Multi-dimensional drill-through reports",
      "Custom DAX calculations",
      "Interactive slicers and cross-filter visualizations",
      "Automated Python-based ETL pipeline",
      "Export reports to PDF and PowerPoint"
    ],
    architecture: [
      "SQL-based data extraction",
      "Python ETL pipeline",
      "Power BI data modeling",
      "Interactive report layer"
    ],
    challenges: [
      "Optimizing DAX performance for large datasets",
      "Data cleaning from multiple fragmented sources",
      "Managing automated refresh pipelines"
    ],
    contributions: [
      "Data modeling and schema design",
      "Full dashboard development",
      "DAX calculations",
      "ETL automation"
    ],
    futureImprovements: [
      "Cloud deployment",
      "Live streaming data integration",
      "Predictive analytics integration"
    ],
    githubUrl: "https://github.com/umer250/PowerBI-Dashboard",
    screenshot: "/porfolio section images/Power Bi Dashboard.png"
  }
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
