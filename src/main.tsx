import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Layout from './components/Layout.tsx'
import ProjectsPage from './pages/ProjectsPage.tsx'
import CaseStudiesPage from './pages/CaseStudiesPage.tsx'
import BlogPage from './pages/BlogPage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="case-studies" element={<CaseStudiesPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>,
)
