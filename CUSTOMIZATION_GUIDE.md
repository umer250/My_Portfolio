# Portfolio Customization Guide

Your portfolio has been rebuilt to match the reference design at https://naeem-portfolio-dev.vercel.app/

## 🎯 Quick Setup (5 Steps)

### 1. Update Personal Information

Open `src/data/portfolioData.js` and update:

```javascript
export const personalInfo = {
  name: "Your Full Name",           // e.g., "John Doe"
  initials: "YN",                    // e.g., "JD" (for logo)
  role: "MERN Stack Developer",      // Your job title
  bio: [
    "Your first paragraph about yourself...",
    "Your second paragraph..."
  ],
  availability: "Available for opportunities",
  profileImage: "/profile.jpg",      // Place your photo in public folder
  resumeUrl: "/resume.pdf",          // Place your resume in public folder
};
```

### 2. Update Social Links

```javascript
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourprofile",
  whatsapp: "https://wa.me/1234567890",         // Format: country code + number (no + or -)
  email: "mailto:your.email@example.com",
  facebook: "https://www.facebook.com/yourprofile",
};
```

### 3. Update Tech Stack

The skills are already configured with HTML, CSS, JavaScript, Bootstrap, TailwindCSS, React JS, Next JS, Node JS, Express JS, MongoDB, and Git.

To add more skills, edit the `skillCategories` array:

```javascript
export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", icon: "SiHtml5", color: "#E34F26" },
      // Add more skills here
    ],
  },
  // Add more categories here
];
```

**Available Icons:** Use icons from [Simple Icons](https://simpleicons.org/). Format: `Si` + PascalCase name (e.g., `SiReact`, `SiJavascript`)

### 4. Update Projects

Replace the sample projects with your own:

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    subtitle: "Short description",
    description: "Longer description explaining what the project does...",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "from-violet-600/20 via-purple-600/10 to-cyan-600/20",
    accentColor: "#8b5cf6",
    github: "https://github.com/yourusername/project",
    demo: "https://your-project-demo.com",
    featured: true,
  },
  // Add more projects...
];
```

**Gradient Options:**
- Purple: `"from-violet-600/20 via-purple-600/10 to-cyan-600/20"`
- Blue: `"from-blue-600/20 via-sky-600/10 to-cyan-600/20"`
- Green: `"from-emerald-600/20 via-teal-600/10 to-green-600/20"`
- Orange: `"from-orange-600/20 via-amber-600/10 to-yellow-600/20"`

### 5. Setup Contact Form

1. Go to [formspree.io](https://formspree.io)
2. Sign up for free
3. Create a new form
4. Copy your form ID
5. Update in `portfolioData.js`:

```javascript
export const contactInfo = {
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/yourprofile",
  whatsapp: "https://wa.me/1234567890",
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID_HERE",
};
```

## 📁 Files to Replace

Place these files in the `public` folder:

1. **profile.jpg** - Your profile photo (square aspect ratio recommended)
2. **resume.pdf** - Your resume/CV
3. **Favicon.png** - Your website favicon (256x256px recommended)

## 🚀 Running Your Portfolio

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 🎨 Customization Tips

### Change Color Scheme

Edit `src/index.css` color variables:

```css
:root {
  --accent:       #8b5cf6;  /* Purple - change to your color */
  --cyan:         #22d3ee;  /* Cyan accent */
  --bg-primary:   #030712;  /* Background */
}
```

### Modify Rotating Roles in Hero

Edit `src/components/Hero.jsx`:

```javascript
const ROTATING_ROLES = [
  "CREATIVE",
  "PROGRAMMER",
  "PROBLEM SOLVER",
  "REACT DEVELOPER",
  "MERN DEVELOPER"
];
```

### Add/Remove Sections

Edit `src/App.jsx` to add or remove sections:

```javascript
<main>
  <Hero />
  <Skills />
  <Projects />
  <Contact />
</main>
```

## 📋 Section IDs for Navigation

- Home: `#home`
- Tech Stack: `#tech`
- Portfolio: `#portfolio`
- Contact: `#contact`

These match the navigation links in the Navbar.

## ⚠️ Common Issues

### Images not showing?
- Make sure images are in the `public` folder
- Use paths starting with `/` (e.g., `/profile.jpg`)
- Check image names match exactly (case-sensitive)

### Icons not showing?
- Verify icon names at [Simple Icons](https://simpleicons.org/)
- Format: `Si` + PascalCase (e.g., `SiReact`, not `SiReactjs`)
- Install react-icons if missing: `npm install react-icons`

### Contact form not working?
- Make sure you've created a form on Formspree
- Check the endpoint URL is correct
- Test with a valid email

## 🎯 What's Different from the Reference?

Your portfolio now has:
- ✅ Animated marquee text with rotating roles
- ✅ Simplified navigation (Home, Tech Stack, Portfolio, Contact)
- ✅ Large tech stack icons with grid layout
- ✅ Project cards with gradients
- ✅ Social connection links in Contact
- ✅ Clean, modern design matching the reference

## 📞 Need Help?

If you encounter any issues:
1. Check this guide first
2. Make sure all dependencies are installed (`npm install`)
3. Clear your browser cache and restart dev server
4. Check the browser console for errors

---

**Built with React + Vite + Tailwind CSS + Framer Motion**
