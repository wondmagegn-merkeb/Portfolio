# Portfolio - React + Vite

A modern portfolio website built with React and Vite, featuring smooth animations, dark mode, and responsive design.

## Features

- ⚡️ Built with Vite for fast development and optimized builds
- ⚛️ React 18 with modern hooks
- 🎨 Tailwind CSS for styling
- 🌙 Dark mode support
- 📱 Fully responsive design
- ✨ AOS animations
- 🎯 Smooth scrolling navigation
- 📧 Contact form integration

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
Portfolio/
├── public/              # Static assets (images, PDFs)
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Timeline.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── BackToTop.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles and Tailwind
├── index.html           # HTML template
├── package.json
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **AOS** - Animate On Scroll library
- **Font Awesome** - Icons

## Deployment

The built files will be in the `dist` folder after running `npm run build`. You can deploy this folder to any static hosting service like:

- Vercel
- Netlify
- GitHub Pages
- cPanel (upload the dist folder contents)

## Notes

- The old HTML files (certificates.html, cv.html) are still in the root directory and can be accessed directly or converted to React routes later
- All images and assets should be placed in the `public` folder
- The contact form uses FormSubmit.co service

## License

© 2025 Eyerusalem Kindalem Getnet. All rights reserved.
