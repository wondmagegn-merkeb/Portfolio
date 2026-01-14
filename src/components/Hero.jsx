const Hero = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-gray-50 via-blue-50 to-sky-50 dark:from-sky-950 dark:via-sky-900 dark:to-sky-950 text-gray-900 dark:text-white px-6 text-center md:text-left max-w-7xl mx-auto overflow-hidden">
      {/* Animated background pattern */}
      <div className="hero-bg"></div>

      {/* Text Content */}
      <div className="relative md:w-1/2 space-y-6 z-10" data-aos="fade-up">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 fade-in-up">
          Hi, I'm
          <span className="text-blue-600 dark:text-sky-400 relative inline-block">
            <span className="relative z-10">Eyerusalem</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-400/30 dark:bg-sky-400/30 -z-0 transform -skew-x-12"></span>
          </span>
        </h1>
        <p
          className="text-lg md:text-xl max-w-md fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          A passionate
          <span className="font-semibold text-blue-600 dark:text-sky-400">
            {' '}Full Stack Developer{' '}
          </span>
          crafting beautiful and performant web experiences.
        </p>
        <div
          className="flex gap-6 justify-center md:justify-start mt-6 fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className="btn-modern bg-blue-600 dark:bg-sky-400 text-white dark:text-sky-900 font-semibold px-8 py-4 rounded-xl shadow-xl hover:bg-blue-700 dark:hover:bg-sky-500 transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="btn-modern border-2 border-blue-600 dark:border-sky-400 text-blue-600 dark:text-sky-400 font-semibold px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white dark:hover:bg-sky-400 dark:hover:text-sky-900 transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10">Contact Me</span>
          </a>
        </div>
      </div>

      {/* Photo */}
      <div
        className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center z-10"
        data-aos="zoom-in"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full blur-2xl opacity-30 float-animation"></div>
          <img
            src="/IMG_20250524_165026_591.jpg"
            alt="Eyerusalem Profile"
            className="relative rounded-full shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-blue-600 dark:border-sky-400 float-animation hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
