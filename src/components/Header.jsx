import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-sky-900/80 backdrop-blur-md shadow-md transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      style={{
        background: isScrolled
          ? document.documentElement.classList.contains('dark')
            ? 'rgba(15, 23, 42, 0.95)'
            : 'rgba(255, 255, 255, 0.95)'
          : document.documentElement.classList.contains('dark')
          ? 'rgba(15, 23, 42, 0.8)'
          : 'rgba(255, 255, 255, 0.8)',
      }}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="text-2xl font-bold text-blue-600 dark:text-sky-300 flex items-center gap-2 hover:scale-110 transition-transform duration-300"
        >
          <i className="fas fa-terminal"></i>Eyerusalem
        </a>
        <nav className="hidden md:flex space-x-6 text-base font-medium">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="nav-link hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1 transition-colors duration-300"
          >
            <i className="fas fa-user-circle"></i> About
          </a>
          <a
            href="#timeline"
            onClick={(e) => scrollToSection(e, 'timeline')}
            className="nav-link hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1 transition-colors duration-300"
          >
            <i className="fas fa-road"></i> My Journey
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className="nav-link hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1 transition-colors duration-300"
          >
            <i className="fas fa-laptop-code"></i> Projects
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, 'skills')}
            className="nav-link hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1 transition-colors duration-300"
          >
            <i className="fas fa-cogs"></i> Skills
          </a>
          <a
            href="/certificates.html"
            className="nav-link hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1 transition-colors duration-300"
          >
            <i className="fas fa-certificate"></i> Certificates
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="nav-link hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1 transition-colors duration-300"
          >
            <i className="fas fa-paper-plane"></i> Contact
          </a>
          <a
            href="/cv.html"
            className="btn-modern inline-block bg-blue-600 dark:bg-sky-400 hover:bg-blue-700 dark:hover:bg-sky-500 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            CV
          </a>
        </nav>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-sky-300 focus:outline-none transition-transform duration-300 hover:scale-110"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden bg-white dark:bg-sky-900 menu-transition ${
          isMenuOpen
            ? 'max-h-[500px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col space-y-2 px-4 pb-4 pt-2 text-base font-medium">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1"
          >
            <i className="fas fa-user-circle"></i> About
          </a>
          <a
            href="#timeline"
            onClick={(e) => scrollToSection(e, 'timeline')}
            className="hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1"
          >
            <i className="fas fa-road"></i> My Journey
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className="hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1"
          >
            <i className="fas fa-laptop-code"></i> Projects
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, 'skills')}
            className="hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1"
          >
            <i className="fas fa-tools"></i> Skills
          </a>
          <a
            href="/certificates.html"
            onClick={handleLinkClick}
            className="hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1"
          >
            <i className="fas fa-certificate"></i> Certificates
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1"
          >
            <i className="fas fa-paper-plane"></i> Contact
          </a>
          <a
            href="/cv.html"
            onClick={handleLinkClick}
            className="inline-block bg-blue-600 dark:bg-sky-400 hover:bg-blue-700 dark:hover:bg-sky-500 text-white text-center px-6 py-3 rounded-xl transition duration-300"
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
