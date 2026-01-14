import { useState, useEffect } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight, FaImages } from 'react-icons/fa'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description:
        'A personal portfolio built with HTML, Tailwind CSS, and AOS.js to showcase my skills and projects.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop',
      ],
      tags: ['HTML', 'Tailwind'],
      tagColor: 'blue',
    },
    {
      id: 2,
      title: 'Telegram Order Bot',
      description:
        'A full-featured bot built with Node.js, Sequelize, and Telegraf for managing food orders.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1551033406-611cf9a28f61?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1551033406-611cf9a28f61?w=1200&h=800&fit=crop',
      ],
      tags: ['Node.js', 'Telegraf'],
      tagColor: 'green',
    },
    {
      id: 3,
      title: 'A Smart Meal Attendance Tracker',
      description:
        'MealAttend is a modern web app that simplifies meal attendance in schools and institutions. It uses QR code scanning to quickly track student attendance and features a powerful admin dashboard for managing users, viewing reports, and analyzing data.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      ],
      tags: ['Web App', 'QR Code'],
      tagColor: 'purple',
    },
  ]

  const getTagClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-100 dark:bg-sky-800 text-blue-600 dark:text-sky-300',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    }
    return colorMap[color] || colorMap.blue
  }

  const openGallery = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeGallery = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length)
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length)
    }
  }

  useEffect(() => {
    if (!selectedProject) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeGallery()
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length)
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject])

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

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
                    className={`px-3 py-1 ${getTagClasses(project.tagColor)} text-xs rounded-full font-medium`}
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
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
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
                        ? 'border-blue-500 dark:border-sky-400 scale-110'
                        : 'border-transparent opacity-60 hover:opacity-100'
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
  )
}

export default Projects
