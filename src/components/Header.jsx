import { useState, useEffect, useRef } from "react";
import {
  FaTerminal,
  FaUserCircle,
  FaRoad,
  FaLaptopCode,
  FaCogs,
  FaCertificate,
  FaPaperPlane,
  FaBars,
  FaTools,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-sky-700/80 backdrop-blur-md shadow-md transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
      style={{
        background: isScrolled
          ? document.documentElement.classList.contains("dark")
            ? "rgba(30, 58, 138, 0.85)"
            : "rgba(255, 255, 255, 0.95)"
          : document.documentElement.classList.contains("dark")
          ? "rgba(30, 58, 138, 0.75)"
          : "rgba(255, 255, 255, 0.8)",
      }}
    >
      <div className="w-full mx-auto flex items-center justify-between p-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-bold text-blue-600 dark:text-sky-300 flex items-center gap-2 hover:scale-110 transition-transform duration-300"
        >
          <FaTerminal />
          WondmagegnDev
        </a>
        <nav className="hidden md:flex space-x-6 text-base font-medium">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="nav-link hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1 transition-colors duration-300"
          >
            <FaUserCircle /> About
          </a>
          <a
            href="#timeline"
            onClick={(e) => scrollToSection(e, "timeline")}
            className="nav-link hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1 transition-colors duration-300"
          >
            <FaRoad /> My Journey
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, "skills")}
            className="nav-link hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1 transition-colors duration-300"
          >
            <FaCogs /> Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "projects")}
            className="nav-link hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1 transition-colors duration-300"
          >
            <FaLaptopCode /> Projects
          </a>

          <a
            href="#certificates"
            onClick={(e) => scrollToSection(e, "certificates")}
            className="nav-link hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1 transition-colors duration-300"
          >
            <FaCertificate /> Certificates
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="nav-link hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1 transition-colors duration-300"
          >
            <FaPaperPlane /> Contact
          </a>
          <a
            href="/cv"
            className="btn-modern inline-block bg-blue-600 dark:bg-sky-400 hover:bg-blue-700 dark:hover:bg-sky-500 text-white px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            CV
          </a>
        </nav>
        <button
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-sky-300 focus:outline-none transition-transform duration-300 hover:scale-110"
          aria-label="Toggle menu"
        >
          <FaBars className="text-xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden bg-white dark:bg-sky-700 menu-transition ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-2 px-4 pb-4 pt-2 text-base font-medium gap-2">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1"
          >
            <FaUserCircle /> About
          </a>
          <a
            href="#timeline"
            onClick={(e) => scrollToSection(e, "timeline")}
            className="hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1"
          >
            <FaRoad /> My Journey
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "projects")}
            className="hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1"
          >
            <FaLaptopCode /> Projects
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollToSection(e, "skills")}
            className="hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1"
          >
            <FaTools /> Skills
          </a>
          <a
            href="#certificates"
            onClick={(e) => scrollToSection(e, "certificates")}
            className="hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1"
          >
            <FaCertificate /> Certificates
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1"
          >
            <FaPaperPlane /> Contact
          </a>
          <a
            href="/cv"
            className="inline-block bg-blue-600 dark:bg-sky-400 hover:bg-blue-700 dark:hover:bg-sky-500 text-white text-center px-6 py-3 rounded-xl transition duration-300"
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
