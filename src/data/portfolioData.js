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
 { name: "ERP Rice Navigator", heroTag: "Enterprise Resource Planning System", duration: "Large Scale Full Stack Project", overview: "ERP Rice Navigator is a large-scale enterprise resource planning system designed for rice mill and export operations. The platform digitizes the complete operational lifecycle—from gate entry and weighbridge management to inventory tracking, processing, finance, and export compliance. It eliminates manual paperwork and improves operational visibility across departments.", problemStatement: "Traditional rice mill operations often rely on spreadsheets and manual logs, causing delays, inventory mismatches, and reporting inaccuracies. This project solves those inefficiencies by centralizing workflows into one unified system.", description: "Built a scalable web-based ERP platform with secure role-based access control supporting 9 organizational roles. Designed workflows for procurement, gate management, weighbridge operations, rice processing, inventory, accounting, and export documentation. Implemented offline support for critical operations to ensure business continuity during network outages.", techStack: [ "React 19", "Node.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS" ], features: [ "Role-Based Access Control with 9 user roles", "Real-time weighbridge workflow system", "Offline gate entry with synchronization", "Rice processing lifecycle tracking", "Inventory and warehouse management", "Financial analytics dashboards", "Export compliance documentation", "Advanced reporting and audit logs" ], architecture: [ "Frontend dashboard built using React", "REST API services via Node.js backend", "Relational database with PostgreSQL", "Prisma ORM for schema and query management", "Offline sync mechanism for resilience" ], challenges: [ "Handling complex multi-role permissions", "Ensuring data consistency in offline mode", "Designing scalable transactional workflows" ], contributions: [ "Designed database schema", "Developed frontend dashboards", "Implemented backend business logic", "Built reporting modules" ], futureImprovements: [ "AI-based demand forecasting", "Mobile app for field operators", "IoT weighbridge integration" ], githubUrl: "https://github.com/umer250/ERP-Rice-Navigator", screenshot: "/porfolio section images/erp.png" }, { name: "Aurax Industries", heroTag: "Luxury Editorial Portfolio Website", duration: "Frontend Design Project", overview: "Aurax Industries is a premium digital experience built for a wholesale footwear manufacturer. The website combines modern editorial design, smooth animations, and luxury branding to present products and manufacturing capabilities in a visually compelling way.", problemStatement: "Traditional manufacturing websites often feel outdated and fail to communicate brand quality. This project focuses on creating a luxury digital identity that enhances trust and visual storytelling.", description: "Created a visually rich portfolio website with a luxury dark theme, smooth parallax animations, and interactive product browsing. The design emphasizes storytelling through motion and immersive layouts while maintaining high performance.", techStack: [ "React 19", "Vite", "Tailwind CSS", "Framer Motion" ], features: [ "Luxury editorial dark UI", "Glassmorphism design system", "Interactive product catalog", "Category-based filtering", "Factory workflow showcase", "Scroll-triggered animations", "Responsive across all devices" ], architecture: [ "Component-based React architecture", "Tailwind utility-first styling", "Framer Motion animation system" ], challenges: [ "Balancing heavy visuals with performance", "Smooth animation optimization", "Maintaining responsiveness" ], contributions: [ "Designed UI/UX", "Built reusable components", "Implemented animations", "Optimized performance" ], futureImprovements: [ "CMS integration", "3D product viewer", "Admin catalog management" ], liveUrl: "https://aurax-shoe-industries.netlify.app/", githubUrl: "https://github.com/umer250/Aurax_Industries.git", screenshot: "/porfolio section images/Shoe Factory Website.png" }, { name: "2D Image Anomaly Detection", heroTag: "AI Computer Vision System", duration: "Machine Learning Project", overview: "An AI-powered computer vision system built for automated industrial quality inspection. The system detects anomalies and defects in 2D product images using deep learning, helping manufacturers reduce manual inspection time and improve quality control.", problemStatement: "Manual quality inspection is slow, inconsistent, and expensive. This project automates defect detection using machine learning for higher speed and accuracy.", description: "Developed a deep learning-based anomaly detection pipeline using autoencoders and computer vision preprocessing. The model identifies surface defects and generates anomaly heatmaps for interpretability.", techStack: [ "Python", "PyTorch", "OpenCV", "NumPy", "Scikit-learn" ], features: [ "Autoencoder-based anomaly detection", "Real-time defect detection", "Image preprocessing pipeline", "Anomaly heatmap visualization", "Sensitivity threshold tuning", "Batch analysis support" ], architecture: [ "Image preprocessing with OpenCV", "Feature learning via PyTorch model", "Anomaly scoring pipeline", "Visualization dashboard" ], challenges: [ "Reducing false positives", "Improving model generalization", "Training with limited anomaly data" ], contributions: [ "Data preprocessing", "Model training", "Evaluation pipeline", "Visualization dashboard" ], futureImprovements: [ "Edge device deployment", "Higher resolution support", "Video anomaly detection" ], githubUrl: "https://github.com/umer250/2d-image-anomaly-detection.git", screenshot: "/porfolio section images/2S image Anomlay Detection Sytem.png" }, { name: "Power BI Dashboard", heroTag: "Business Intelligence Dashboard", duration: "Data Analytics Project", overview: "A modern business intelligence dashboard that transforms raw operational data into actionable insights using Power BI. Designed for executives and managers to track KPIs, trends, and performance metrics in real time.", problemStatement: "Businesses often struggle to derive insights from fragmented datasets. This dashboard centralizes analytics for faster, data-driven decision making.", description: "Built interactive dashboards featuring advanced DAX calculations, drill-through reports, automated ETL pipelines, and real-time KPI tracking. The system supports deep analytical exploration with intuitive filtering.", techStack: [ "Power BI", "Microsoft Access", "SQL", "Excel" ], features: [ "Real-time KPI monitoring", "Drill-through reports", "Custom DAX calculations", "Interactive slicers", "Cross-filter visualizations", "Automated ETL pipeline", "Export reports to PDF/PPT" ], architecture: [ "SQL-based data extraction", "Python ETL pipeline", "Power BI data modeling", "Interactive report layer" ], challenges: [ "Optimizing DAX performance", "Data cleaning from multiple sources", "Managing refresh pipelines" ], contributions: [ "Data modeling", "Dashboard development", "DAX calculations", "ETL automation" ], futureImprovements: [ "Cloud deployment", "Live streaming data", "Predictive analytics integration" ], githubUrl: "https://github.com/umer250/PowerBI-Dashboard", screenshot: "/porfolio section images/Power Bi Dashboard.png" },
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
