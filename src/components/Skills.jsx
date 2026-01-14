import { useEffect, useRef } from 'react'

const Skills = () => {
  const skillCardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = '1'
              entry.target.style.transform = 'translateY(0)'
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 }
    )

    skillCardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = '0'
        card.style.transform = 'translateY(20px)'
        card.style.transition = 'all 0.5s ease'
        observer.observe(card)
      }
    })

    return () => {
      skillCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  const skills = [
    { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-600', hoverColor: 'group-hover:text-orange-600' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-600', hoverColor: 'group-hover:text-blue-600' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: 'text-yellow-500', hoverColor: 'group-hover:text-yellow-500' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-600', hoverColor: 'group-hover:text-green-600' },
    { name: 'PHP', icon: 'fab fa-php', color: 'text-indigo-700', hoverColor: 'group-hover:text-indigo-700' },
    { name: 'Laravel', icon: 'fab fa-laravel', color: 'text-red-600', hoverColor: 'group-hover:text-red-600' },
    { name: 'Angular', icon: 'fab fa-angular', color: 'text-red-500', hoverColor: 'group-hover:text-red-500' },
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-500', hoverColor: 'group-hover:text-orange-500' },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-sky-900 text-gray-800 dark:text-white px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4">
          My <span className="text-blue-600 dark:text-sky-400">Skills</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          Here are some of the technologies I use to build modern and efficient
          web applications.
        </p>
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center"
        data-aos="zoom-in-up"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (skillCardsRef.current[index] = el)}
            className="skill-card group flex flex-col items-center p-6 rounded-2xl bg-white/50 dark:bg-sky-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-sky-700 transition-all duration-300 cursor-pointer"
          >
            <div className="skill-icon mb-3">
              <i className={`${skill.icon} text-5xl ${skill.color}`}></i>
            </div>
            <span
              className={`text-lg font-semibold transition-colors duration-300 ${skill.color} ${skill.hoverColor}`}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
