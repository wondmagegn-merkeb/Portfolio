const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description:
        'A personal portfolio built with HTML, Tailwind CSS, and AOS.js to showcase my skills and projects.',
      image: '/Project 1.png',
      tags: ['HTML', 'Tailwind'],
      tagColor: 'blue',
    },
    {
      id: 2,
      title: 'Telegram Order Bot',
      description:
        'A full-featured bot built with Node.js, Sequelize, and Telegraf for managing food orders.',
      image: '/Project 2.png',
      tags: ['Node.js', 'Telegraf'],
      tagColor: 'green',
    },
    {
      id: 3,
      title: 'A Smart Meal Attendance Tracker',
      description:
        'MealAttend is a modern web app that simplifies meal attendance in schools and institutions. It uses QR code scanning to quickly track student attendance and features a powerful admin dashboard for managing users, viewing reports, and analyzing data.',
      image: '/Project 3.png',
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

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-sky-950 text-gray-800 dark:text-white px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4">
          My <span className="text-blue-600 dark:text-sky-400">Projects</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          A showcase of what I've built using modern web technologies.
        </p>
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
    </section>
  )
}

export default Projects
