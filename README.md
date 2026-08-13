# Portfolio Website

A modern, responsive portfolio website built with React 19 and Tailwind CSS, featuring smooth animations powered by Framer Motion.

## 🎨 Design Features

- **Color Scheme:**
  - Background: `#0D0D1A` (deep dark navy)
  - Card Background: `#1A1A2E`
  - Orange Accent: `#FFA500`
  - Green Accent: `#00FF88`
  - Text: `#FFFFFF` / `#AAAACC`

- **Typography:** Poppins font family (Google Fonts)
- **Animations:** Framer Motion for smooth, professional animations
- **Responsive:** Mobile-first design, works on all screen sizes

## 📦 Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Smooth Scroll:** react-scroll

## 🚀 Quick Start

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deploy to Vercel

### Method 1: Vercel CLI (One Command)

```bash
npx vercel --prod
```

### Method 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and deploy
6. Every push to `main` will auto-deploy

### Method 3: Manual Deploy

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## 📝 Customization

Edit `src/data/portfolioData.js` to update:

- Personal information (name, bio, photo)
- Social media links
- Tech stack and proficiency levels
- Projects with descriptions and links
- Resume URL

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── profile.jpg          # Your profile photo
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Fixed navigation bar
│   │   ├── Hero.jsx         # Hero section with intro
│   │   ├── Skills.jsx       # Tech stack grid
│   │   ├── Projects.jsx     # Portfolio showcase
│   │   └── Footer.jsx       # Footer section
│   ├── data/
│   │   └── portfolioData.js # All content data
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── vercel.json              # Vercel config for SPA
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── package.json
```

## ✨ Features

- ✅ Smooth scroll navigation
- ✅ Active section highlighting in navbar
- ✅ Animated hero section with floating profile image
- ✅ Tech stack grid with progress bars
- ✅ Project cards with hover effects
- ✅ Tab switching (Projects/Certificates)
- ✅ Mobile responsive design
- ✅ Social media links
- ✅ Dark theme optimized

## 🎯 Sections

1. **Navbar** - Fixed navigation with active link highlighting
2. **Home/Hero** - Introduction with CTA buttons and social links
3. **Tech Stack** - Skills grid with animated progress bars
4. **Portfolio** - Project showcase with live demo links
5. **Contact/Footer** - Copyright information

## 🔧 Environment Variables

No environment variables required for basic setup.

For contact form integration, you can add:
- Formspree endpoint
- EmailJS configuration
- Web3Forms API key

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2025. All Rights Reserved.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

For issues or questions, please open an issue in the repository.

---

**Built with ❤️ using React + Vite + Tailwind CSS**
