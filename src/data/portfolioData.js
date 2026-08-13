// ─── Muhammad Umer — Portfolio Data ─────────────────────────────────────────
// Edit this file to update all portfolio content without touching component code

export const personalInfo = {
  name: "Muhammad Umer",
  initials: "MU",
  role: "Full-Stack Software Engineer",
  tagline: "Building responsive, scalable web applications, RESTful APIs & AI integrations",
  bio: [
    "I'm a Full-Stack Software Engineer with practical experience building responsive, scalable web applications using React.js, Node.js, Express.js, MongoDB, PostgreSQL, MySQL, and Python FastAPI.",
    "I specialize in developing RESTful APIs, designing database-backed systems, integrating AI models, and connecting full-stack components into maintainable production-ready applications."
  ],
  availability: "Available for opportunities",
  profileImage: "/profile.jpg",
  resumeUrl: "/Umer_CV.pdf",
  location: "Lahore, Pakistan",
  phone: "+92 3006425321",
};

export const socialLinks = {
  github: "https://github.com/umer250",
  linkedin: "https://www.linkedin.com/in/muhammad-umer",
  whatsapp: "https://wa.me/923006425321",
  email: "mailto:umerm8809@gmail.com",
};

// ─── Skills ──────────────────────────────────────────────────────────────────
export const techStack = [
  { name: "React JS",       icon: "SiReact",       color: "#61DAFB",  proficiency: 95 },
  { name: "JavaScript",     icon: "SiJavascript",  color: "#F7DF1E",  proficiency: 95 },
  { name: "TypeScript",     icon: "SiTypescript",  color: "#3178C6",  proficiency: 90 },
  { name: "HTML5",          icon: "SiHtml5",       color: "#E34F26",  proficiency: 95 },
  { name: "CSS3",           icon: "SiCss3",        color: "#1572B6",  proficiency: 90 },
  { name: "TailwindCSS",    icon: "SiTailwindcss", color: "#06B6D4",  proficiency: 90 },
  { name: "Node JS",        icon: "SiNodedotjs",   color: "#339933",  proficiency: 90 },
  { name: "Express JS",     icon: "SiExpress",     color: "#FFFFFF",  proficiency: 90 },
  { name: "Python",         icon: "SiPython",      color: "#3776AB",  proficiency: 88 },
  { name: "FastAPI",        icon: "SiFastapi",     color: "#009688",  proficiency: 85 },
  { name: "Django",         icon: "SiDjango",      color: "#092E20",  proficiency: 82 },
  { name: "MongoDB",        icon: "SiMongodb",     color: "#47A248",  proficiency: 88 },
  { name: "PostgreSQL",     icon: "SiPostgresql",  color: "#4169E1",  proficiency: 85 },
  { name: "Git & GitHub",   icon: "SiGit",         color: "#F05032",  proficiency: 90 },
];

// Legacy export for compatibility
export const skillCategories = [
  {
    name: "Frontend",
    skills: techStack.slice(0, 6),
  },
  {
    name: "Backend",
    skills: techStack.slice(6, 11),
  },
  {
    name: "Databases & Tools",
    skills: techStack.slice(11),
  },
];

export const allSkills = techStack;

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "Inbox Restaurant POS System",
    subtitle: "Full-Stack Point of Sale & Management Platform",
    description:
      "A comprehensive Point of Sale (POS) and restaurant management platform for Inbox Restaurant. Features role-based authentication, real-time order processing, table management, billing & receipt generation, inventory tracking, menu customization, and daily sales reporting.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "POS System", "Tailwind CSS"],
    image: "/inbox-pos.png",
    gradient: "from-amber-600/20 via-orange-600/10 to-yellow-600/20",
    accentColor: "#f59e0b",
    github: "https://github.com/umer250",
    demo: "https://youtu.be/aapbK2DZ1lQ?si=Z4HFw_7VrfTxN9sU",
    demoText: "Watch Demo Playlist",
    featured: true,
  },
  {
    id: 2,
    title: "Enterprise Project Management Platform",
    subtitle: "Full-Stack Task & Team Management",
    description:
      "Developed a full-stack project management application using React.js, Node.js, Express.js, MongoDB, JWT, and Tailwind CSS, featuring role-based authentication, project and task management, Kanban boards, file uploads, notifications, and analytics dashboards.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    gradient: "from-violet-600/20 via-purple-600/10 to-cyan-600/20",
    accentColor: "#8b5cf6",
    github: "https://github.com/umer250",
    demo: "https://umer-portfolio-dev.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "AI-Powered E-Commerce Marketplace",
    subtitle: "Scalable Shopping & AI Recommendation Engine",
    description:
      "Built a scalable e-commerce platform using React.js, Python/FastAPI, MongoDB, and Stripe API, including product management, secure payments, order tracking, inventory management, and AI-powered product recommendations.",
    tags: ["React.js", "Python", "FastAPI", "MongoDB", "Stripe API", "AI"],
    gradient: "from-blue-600/20 via-sky-600/10 to-cyan-600/20",
    accentColor: "#0ea5e9",
    github: "https://github.com/umer250",
    demo: "https://umer-portfolio-dev.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "Smart Healthcare Appointment System",
    subtitle: "Healthcare Scheduling & Patient Dashboard",
    description:
      "Developed a responsive healthcare platform using React.js, Django, PostgreSQL, and JWT, providing appointment scheduling, user authentication, REST APIs, patient and doctor dashboards, and automated reminders.",
    tags: ["React.js", "Django", "PostgreSQL", "REST API", "JWT"],
    gradient: "from-emerald-600/20 via-teal-600/10 to-green-600/20",
    accentColor: "#10b981",
    github: "https://github.com/umer250",
    demo: "https://umer-portfolio-dev.vercel.app/",
    featured: false,
  },
  {
    id: 5,
    title: "Real-Time Collaboration Workspace",
    subtitle: "Instant Communication & Team Workspace",
    description:
      "Created a real-time communication platform using React.js, Node.js, Express.js, MongoDB, and Socket.io, featuring instant messaging, group channels, file sharing, online presence, typing indicators, search, and secure team management.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    gradient: "from-green-600/20 via-emerald-600/10 to-teal-600/20",
    accentColor: "#10b981",
    github: "https://github.com/umer250",
    demo: "https://umer-portfolio-dev.vercel.app/",
    featured: false,
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    company: "App Pillars",
    role: "Full-Stack Web Developer",
    duration: "Nov 2024 – June 2025",
    type: "Full-Stack Engineering",
    responsibilities: [
      "Developed full-stack web applications using React.js, JavaScript/TypeScript, Node.js, Express.js, Python, and FastAPI with MongoDB and SQL databases.",
      "Built and consumed REST APIs, implemented responsive and user-friendly interfaces, and optimized database queries.",
      "Managed CI/CD workflows, cloud platform deployment, unit/integration testing, and authentication.",
      "Wrote clean, maintainable, secure, and production-ready code in collaborative development environments.",
    ],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    institution: "University of Gujrat (UOG)",
    degree: "BS Computer Science (CGPA: 3.47)",
    duration: "Dec 2022 – Aug 2026",
  },
];

// ─── Contact ───────────────────────────────────────────────────────────────────
export const contactInfo = {
  email: "umerm8809@gmail.com",
  phone: "+92 3006425321",
  location: "Lahore, Pakistan",
  linkedin: "https://www.linkedin.com/in/muhammad-umer",
  github: "https://github.com/umer250",
  whatsapp: "https://wa.me/923006425321",
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

