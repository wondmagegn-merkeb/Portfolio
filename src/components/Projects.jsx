import { useState, useEffect } from "react";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaImages,
} from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "MealAttend - QR-Based Meal Attendance System",
      description:
        "A robust web application designed to streamline meal attendance tracking in schools and institutions. Features QR code scanning for touchless attendance, comprehensive admin dashboard, user management, detailed reporting with PDF/Excel exports, customizable ID card generation, and role-based access control.",
      image: "/projects/meal-attend/mealattend-main.png",
      gallery: [
        "/projects/meal-attend/mealattend-main.png",
        "/projects/meal-attend/mealattend-1.png",
        "/projects/meal-attend/mealattend-2.png",
        "/projects/meal-attend/mealattend-3.png",
        "/projects/meal-attend/mealattend-4.png",
        "/projects/meal-attend/mealattend-5.png",
        "/projects/meal-attend/mealattend-6.png",
        "/projects/meal-attend/mealattend-7.png",
        "/projects/meal-attend/mealattend-8.png",
        "/projects/meal-attend/mealattend-9.png",
        "/projects/meal-attend/mealattend-10.png",
        "/projects/meal-attend/mealattend-11.png",
        "/projects/meal-attend/mealattend-12.png",
        "/projects/meal-attend/mealattend-13.png",
        "/projects/meal-attend/mealattend-14.png",
        "/projects/meal-attend/mealattend-15.png",
        "/projects/meal-attend/mealattend-16.png",
        "/projects/meal-attend/mealattend-17.png",
        "/projects/meal-attend/mealattend-18.png",
        "/projects/meal-attend/mealattend-19.png",
        "/projects/meal-attend/mealattend-20.png",
        "/projects/meal-attend/mealattend-21.png",
        "/projects/meal-attend/mealattend-22.png",
        "/projects/meal-attend/mealattend-23.png",
        "/projects/meal-attend/mealattend-24.png",
        "/projects/meal-attend/mealattend-25.png",
        "/projects/meal-attend/mealattend-26.png",
        "/projects/meal-attend/mealattend-27.png",
        "/projects/meal-attend/mealattend-28.png",
        "/projects/meal-attend/mealattend-29.png",
      ],
      tags: ["Next.js", "Prisma", "PostgreSQL"],
      tagColor: "purple",
    },
    {
      id: 2,
      title: "House Rental System - Hawassa",
      description:
        "A comprehensive property rental management platform for Hawassa, Ethiopia. Connects property owners with renters featuring advanced search and filtering, property categories, booking system with payment integration, interactive maps, reviews and ratings, owner dashboard with analytics, and admin management panel.",
      image: "/projects/house-rental-main.png",
      gallery: [
        "/projects/house-rental-main.png",
        "/projects/house-rental-1.png",
        "/projects/house-rental-2.png",
        "/projects/house-rental-3.png",
        "/projects/house-rental-4.png",
      ],
      tags: ["React", "Node.js", "MongoDB"],
      tagColor: "blue",
    },
    {
      id: 3,
      title: "ORDER_BOT - Telegram Food Ordering System",
      description:
        "A comprehensive food ordering and management system with Telegram bot integration. Features include admin dashboard with analytics, food and category management, order tracking with real-time notifications, user management, audit logs, web push notifications, and dual Telegram bots for users and admins.",
      image: "/projects/order-bot-main.png",
      gallery: [
        "/projects/order-bot-main.png",
        "/projects/order-bot-1.png",
        "/projects/order-bot-2.png",
        "/projects/order-bot-3.png",
        "/projects/order-bot-4.png",
      ],
      tags: ["Node.js", "Telegraf", "MySQL"],
      tagColor: "green",
    },
    {
      id: 4,
      title: "Fyda-Print - ID Card Generator & PDF Merger",
      description:
        "A modern web application for Fast Fyda Print featuring ID card generation, PDF merging capabilities, user authentication, comprehensive admin dashboard, agent panel, and documentation system. Built with React, TypeScript, and Vite for fast performance with dark/light theme support.",
      image: "/projects/fyda-print-main.png",
      gallery: [
        "/projects/fyda-print-main.png",
        "/projects/fyda-print-1.png",
        "/projects/fyda-print-2.png",
        "/projects/fyda-print-3.png",
      ],
      tags: ["React", "TypeScript", "Vite"],
      tagColor: "blue",
    },
    {
      id: 5,
      title: "Wese Hotel Management System",
      description:
        "A modern, comprehensive hotel management admin panel featuring interactive dashboard with revenue analytics, reservation management with calendar view, guest information hub, property setup for rooms and amenities, dining management with menu items, financial tracking with invoices and payments, and user management with role-based access control.",
      image: "/projects/wese-hotel-main.png",
      gallery: [
        "/projects/wese-hotel-main.png",
        "/projects/wese-hotel-1.png",
        "/projects/wese-hotel-2.png",
        "/projects/wese-hotel-3.png",
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      tagColor: "purple",
    },
    {
      id: 6,
      title: "AddisSpark Frontend - Company Portfolio",
      description:
        "A modern, responsive portfolio website for AddisSpark showcasing innovative software solutions, services, and projects. Features multi-page navigation, service showcase, products & solutions display, project portfolio with case studies, technology stack showcase, contact form, and beautiful UI/UX with smooth animations and transitions using yellow and blue gradient theme.",
      image: "/projects/addisspark-main.png",
      gallery: [
        "/projects/addisspark-main.png",
        "/projects/addisspark-2.png",
        "/projects/addisspark-3.png",
        "/projects/addisspark-4.png",
      ],
      tags: ["React", "Vite", "Tailwind CSS"],
      tagColor: "green",
    },
    {
      id: 7,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features dark mode, smooth animations with AOS.js, and a fully responsive design to showcase skills, projects, and professional experience with an elegant and professional UI.",
      image: "/projects/portfolio-main.png",
      gallery: [
        "/projects/portfolio-main.png",
        "/projects/portfolio-1.png",
        "/projects/portfolio-2.png",
        "/projects/portfolio-3.png",
        "/projects/portfolio-4.png",
      ],
      tags: ["React", "Vite", "Tailwind CSS"],
      tagColor: "blue",
    },
  ];

  const getTagClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-100 dark:bg-sky-800 text-blue-600 dark:text-sky-300",
      green:
        "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      purple:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    };
    return colorMap[color] || colorMap.blue;
  };

  const openGallery = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedProject.gallery.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedProject.gallery.length) %
          selectedProject.gallery.length
      );
    }
  };

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeGallery();
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex(
          (prev) => (prev + 1) % selectedProject.gallery.length
        );
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex(
          (prev) =>
            (prev - 1 + selectedProject.gallery.length) %
            selectedProject.gallery.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 dark:bg-sky-950 text-gray-800 dark:text-white px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16" data-aos="fade-up">
        <span className="inline-block text-blue-600 dark:text-sky-400 font-semibold text-sm uppercase tracking-wider mb-4">
          My Work
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          My <span className="text-blue-600 dark:text-sky-400">Projects</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-4">
          A showcase of what I've built using modern web technologies.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full"></div>
      </div>

      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card group bg-white dark:bg-sky-900 rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <button
                onClick={() => openGallery(project)}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 dark:bg-sky-500 text-white px-4 py-2 rounded-lg font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-700 dark:hover:bg-sky-600 z-20 flex items-center gap-2 shadow-lg hover:scale-105"
              >
                <FaImages className="text-base" />
                See Gallery
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-3 flex-wrap">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 ${getTagClasses(
                      project.tagColor
                    )} text-xs rounded-full font-medium`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 dark:bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeGallery}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Close gallery"
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Previous Button */}
            {selectedProject.gallery.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
              >
                <FaChevronLeft className="text-2xl" />
              </button>
            )}

            {/* Image Container */}
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={selectedProject.gallery[currentImageIndex]}
                alt={`${selectedProject.title} - Image ${
                  currentImageIndex + 1
                }`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-fadeIn"
              />
            </div>

            {/* Next Button */}
            {selectedProject.gallery.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Next image"
              >
                <FaChevronRight className="text-2xl" />
              </button>
            )}

            {/* Image Counter */}
            {selectedProject.gallery.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {selectedProject.gallery.length}
              </div>
            )}

            {/* Thumbnail Navigation */}
            {selectedProject.gallery.length > 1 && (
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4">
                {selectedProject.gallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === currentImageIndex
                        ? "border-blue-500 dark:border-sky-400 scale-110"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
