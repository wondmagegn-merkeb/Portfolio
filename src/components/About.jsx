const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-sky-900 text-gray-800 dark:text-white px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4">
          About <span className="text-blue-600 dark:text-sky-400">Me</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto">Let me introduce myself.</p>
      </div>

      <div
        className="flex flex-col md:flex-row items-center gap-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Profile Photo */}
        <div className="flex justify-center md:w-1/3 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-400 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          <img
            src="/IMG_20250524_164945_746.jpg"
            alt="About Me Photo"
            className="relative rounded-xl shadow-2xl w-64 h-64 object-cover border-4 border-blue-600 dark:border-sky-400 hover:scale-105 transition-transform duration-300 float-animation"
          />
        </div>

        {/* Info */}
        <div className="md:w-2/3 space-y-4 text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-2">
            I'm{' '}
            <span className="text-blue-600 dark:text-sky-400">
              Eyerusalem Kindalem Getnet
            </span>
          </h3>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            I'm a{' '}
            <strong className="text-blue-600 dark:text-sky-400">
              Full Stack Developer
            </strong>{' '}
            passionate about building dynamic, user-friendly websites and
            applications. With experience in modern frameworks like{' '}
            <strong>Node.js, Laravel, Angular</strong> and a strong eye for
            design using <strong>Tailwind CSS, Bootstrap</strong>, and custom
            UI, I love turning ideas into reality.
          </p>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            I continuously explore new technologies, write clean and scalable
            code, and bring enthusiasm to every project I work on. Let's build
            something amazing together.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
