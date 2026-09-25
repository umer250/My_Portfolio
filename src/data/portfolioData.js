// ============================================================
// PORTFOLIO DATA — single source of truth for site content.
// All facts below are sourced directly from Muhammad Umer's CV.
// ============================================================

export const personalInfo = {
  name: 'Muhammad Umer',
  role: 'Full Stack Developer',
  location: 'Gujranwala, Pakistan',
  email: 'umerm8809@gmail.com',
  phone: '+92 300 642 5321',
  profilePhoto: '/Profile.png',
  resumeLink: '/Umer_Resume.pdf',
  tagline: 'Building fast, reliable software across web, desktop, and data.',
  bio: [
    "I'm a full-stack software engineer who enjoys building performant web, desktop, and data-driven applications — from offline-capable POS systems running on Tauri to REST/RPC APIs backed by PostgreSQL.",
    'My work spans the entire stack: relational database modeling with Drizzle ORM, type-safe backends with Bun and Elysia.js, and responsive interfaces with React and TypeScript.',
    "I care about writing production-ready, maintainable code — with a solid foundation in OOP, data structures, and system design.",
  ],
}

export const typingRoles = [
  'FULL STACK DEVELOPER',
  'REACT & TYPESCRIPT',
  'DESKTOP APPS WITH TAURI',
  'BUN & ELYSIA.JS',
  'AI / ML WITH PYTORCH',
]

export const socialLinks = {
  github: 'https://github.com/umer250',
  linkedin: 'https://www.linkedin.com/in/muhammad-umer-451333280/',
  email: 'mailto:umerm8809@gmail.com',
}

// ============================================================
// TECHNICAL SKILLS
// Keys map to react-icons/si (or fa) icon component names.
// ============================================================
export const skillCategories = [
  {
    category: 'Languages',
    skills: [
      { name: 'C++', icon: 'SiCplusplus', color: '#00599C' },
      { name: 'Python', icon: 'SiPython', color: '#3776AB' },
      { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
      { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
      { name: 'SQL', icon: 'SiMysql', color: '#4479A1' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: 'SiReact', color: '#61DAFB' },
      { name: 'Tauri', icon: 'SiTauri', color: '#FFC131' },
      { name: 'TanStack Query', icon: 'SiReactquery', color: '#FF4154' },
      { name: 'Zustand', icon: 'SiReact', color: '#8B5CF6' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06B6D4' },
      { name: 'shadcn/ui', icon: 'SiShadcnui', color: '#F1F5F9' },
      { name: 'Radix UI', icon: 'SiRadixui', color: '#F1F5F9' },
      { name: 'Bootstrap', icon: 'SiBootstrap', color: '#7952B3' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Bun', icon: 'SiBun', color: '#FBF0DF' },
      { name: 'Elysia.js', icon: 'SiElysia', color: '#8B5CF6' },
      { name: 'FastAPI', icon: 'SiFastapi', color: '#009688' },
      { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
      { name: 'Express.js', icon: 'SiExpress', color: '#FFFFFF' },
      { name: 'Django', icon: 'SiDjango', color: '#092E20' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#4169E1' },
      { name: 'Drizzle ORM', icon: 'SiDrizzle', color: '#C5F74F' },
      { name: 'MySQL', icon: 'SiMysql', color: '#4479A1' },
      { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
    ],
  },
  {
    category: 'AI / ML',
    skills: [
      { name: 'PyTorch', icon: 'SiPytorch', color: '#EE4C2C' },
      { name: 'Pandas', icon: 'SiPandas', color: '#150458' },
      { name: 'OpenCV', icon: 'SiOpencv', color: '#5C3EE8' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: 'SiGit', color: '#F05032' },
      { name: 'GitHub', icon: 'SiGithub', color: '#FFFFFF' },
      { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
      { name: 'Vite', icon: 'SiVite', color: '#646CFF' },
      { name: 'Postman', icon: 'SiPostman', color: '#FF6C37' },
    ],
  },
]

// ============================================================
// PROJECTS — only projects listed on the CV, with real repo links.
// ============================================================
export const projects = [
  {
    name: 'Dastaan POS',
    tagline: 'Desktop Restaurant Management & POS System',
    type: 'Company Project',
    description:
      'A fast, offline-capable desktop POS built with React, TypeScript, and Tauri, backed by a local PostgreSQL database. A high-speed Bun + Elysia.js backend with TanStack Query and Zustand powers smooth, responsive checkout workflows.',
    highlights: [
      'Offline-capable desktop POS using React, TypeScript, and Tauri with a local PostgreSQL database',
      'High-speed backend with Bun and Elysia.js, using TanStack Query and Zustand for responsive checkout workflows',
      'Debian-based local server connecting multiple POS terminals, kitchen displays, and receipt printers over a local network',
      'Subscription and licensing system that automatically restricts access when software rental payments are overdue',
    ],
    techStack: ['React', 'TypeScript', 'Tauri', 'Bun', 'Elysia.js', 'PostgreSQL', 'TanStack Query', 'Zustand'],
    githubUrl: 'https://github.com/umer250/Dastaan-POS',
    gradient: 'linear-gradient(135deg, #7c3aed, #db2777)',
    image: '/projects/dastaan-pos.webp',
  },
  {
    name: 'Arif Poultry Management System',
    tagline: 'Poultry Farm ERP with Double-Entry Accounting',
    type: 'Personal Project',
    description:
      'A responsive, high-performance ERP for multi-farmhouse poultry operations, with an ultra-fast type-safe backend and a full double-entry general ledger.',
    highlights: [
      'Responsive ERP interface using React, TanStack Router/Query/Virtual, and shadcn/ui with virtualized data grids and multi-dimensional filters',
      'Type-safe backend using Bun, Elysia.js, and Effect-TS with PostgreSQL and Drizzle ORM',
      'Full double-entry general ledger with database balance triggers, automated journal postings, and real-time P&L and Trial Balance reports',
      'Multi-farmhouse flock cycle tracking with automated FIFO lot-based inventory deduction and dynamic unit conversions',
      'OpenTelemetry distributed tracing and immutable transaction-level audit logging',
    ],
    techStack: ['React', 'TanStack Suite', 'shadcn/ui', 'Bun', 'Elysia.js', 'Effect-TS', 'PostgreSQL', 'Drizzle ORM'],
    githubUrl: 'https://github.com/umer250/Arif-Poultry-ERP',
    gradient: 'linear-gradient(135deg, #059669, #2563eb)',
    image: '/projects/arif-poultry-erp.webp',
  },
  {
    name: 'Zeebaish POS',
    tagline: 'Desktop Retail & Apparel Management POS System',
    type: 'Personal Project',
    description:
      'An offline-first desktop POS for apparel retail, with a headless Bun + Elysia.js backend bundled as a native Tauri sidecar and direct hardware printing written in Rust.',
    highlights: [
      'Offline-first desktop POS using React, TypeScript, and Tauri 2, with a headless Bun + Elysia.js backend as a native sidecar process',
      'Direct hardware printing in Rust supporting ESC/POS thermal receipts and ZPL barcode / garment price-tag printing',
      'Secure licensing and anti-tamper system with automated trial tracking and feature locking via Windows Task Scheduler',
      'Type-safe API using Bun, Elysia.js, Drizzle ORM, and Effect-TS with functional error handling and dependency injection',
    ],
    techStack: ['React', 'TypeScript', 'Tauri', 'Rust', 'Bun', 'Elysia.js', 'Drizzle ORM', 'Effect-TS'],
    githubUrl: 'https://github.com/umer250/Zeebaish-POS',
    gradient: 'linear-gradient(135deg, #ea580c, #a855f7)',
    image: '/projects/zeebaish-pos.webp',
  },
  {
    name: '2D Image Anomaly Detection',
    tagline: 'Industrial Quality Inspection System',
    type: 'Final Year Project',
    description:
      'An unsupervised anomaly detection system for industrial quality inspection, achieving 98.5% AUROC across 15 MVTec AD categories with zero defect training data.',
    highlights: [
      'Unsupervised anomaly detection system using PyTorch and PatchCore, achieving 98.5% AUROC across 15 MVTec AD categories',
      'FastAPI and PostgreSQL backend with SQLAlchemy, supporting fast inference and automated database migrations',
      'Defect heatmaps generated with OpenCV and SciPy Gaussian filtering for detailed industrial defect localization',
    ],
    techStack: ['Python', 'PyTorch', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'OpenCV', 'SciPy'],
    githubUrl: 'https://github.com/umer250/2d-image-anomaly-detection',
    gradient: 'linear-gradient(135deg, #0891b2, #4f46e5)',
    image: '/projects/anomaly-detection.webp',
  },
]

// ============================================================
// EXPERIENCE
// ============================================================
export const experience = [
  {
    role: 'Full Stack Developer',
    company: '9T Solutions',
    location: 'Gujranwala, Pakistan',
    period: 'Jan 2026 – Present',
    points: [
      'Built websites and developed management systems for small retail businesses.',
      'Managed projects from requirements gathering through to deployment and support.',
      'Designed databases and backend systems end-to-end.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'App Pilars',
    location: 'Gujranwala, Pakistan',
    period: 'Nov 2024 – Jun 2025',
    points: [
      'Developed full-stack web features and reusable UI components using React.js, TypeScript, Node.js, and Python.',
      'Built and consumed secure RESTful APIs with JWT authentication, RBAC, and SQL/MongoDB database integrations.',
      'Wrote unit tests, resolved bugs, and participated in sprint planning and Git/GitHub code reviews.',
    ],
  },
]

// ============================================================
// EDUCATION
// ============================================================
export const education = [
  {
    degree: 'Bachelor of Science in Computer Science (BSCS)',
    institution: 'University of Gujrat (UOG)',
    location: 'Gujrat, Pakistan',
    period: '2022 – 2026',
    detail: 'CGPA: 3.47 / 4.0',
  },
]

// ============================================================
// CERTIFICATIONS
// ============================================================
export const certifications = [
  {
    title: 'Foundations: Data, Data, Everywhere',
    issuer: 'Google (via Coursera)',
    date: 'Jan 2026',
    description:
      'Foundational training in data ecosystems, analytical frameworks, SQL fundamentals, and data-driven problem solving, authorized by Google.',
    verifyUrl: 'https://coursera.org/verify/QHGJGDU9VYW3',
  },
]
