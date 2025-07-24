# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring smooth animations and an interactive design.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **TypeScript**: Type-safe development with full TypeScript support
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Smooth animations and transitions
- **Interactive Components**: Dynamic navigation, contact form, and skill progress bars
- **Fast Performance**: Built with Vite for optimal loading speeds

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Vite
- **Development**: Hot Module Replacement (HMR)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd client-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🚀 Build & Deploy

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Production Build
```bash
npm run build
```
The built files will be in the `dist/` directory.

## 📄 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills and technologies
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Site footer
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles with Tailwind
```

## 🎨 Customization

### Personal Information
Update the following files with your personal information:
- `src/components/Hero.tsx` - Name, title, and description
- `src/components/About.tsx` - About text and statistics
- `src/components/Projects.tsx` - Your projects and details
- `src/components/Skills.tsx` - Your technical skills
- `src/components/Contact.tsx` - Contact information
- `src/components/Footer.tsx` - Social links and footer text

### Styling
- All styling is done with Tailwind CSS utility classes
- Color scheme can be changed by updating the Tailwind classes
- Custom animations are implemented with Framer Motion

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Add navigation link in `src/components/Header.tsx`

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Responsive

The website is fully responsive with:
- Mobile-first design approach
- Responsive navigation with hamburger menu
- Optimized touch interactions
- Flexible grid layouts

## ⚡ Performance

- Optimized bundle size with Vite
- Lazy loading for smooth performance
- Efficient CSS with Tailwind's purging
- Smooth 60fps animations

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
