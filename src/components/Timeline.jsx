import { useEffect, useRef } from 'react'
import {
  FaBriefcase,
  FaGraduationCap,
  FaSchool,
  FaCode,
  FaRocket,
  FaAward,
} from 'react-icons/fa'

const Timeline = () => {
  const timelineItemsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, index * 200)
          }
        })
      },
      { threshold: 0.1 }
    )

    timelineItemsRef.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => {
      timelineItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

  const timelineData = [
    {
      title: 'Full Stack Developer',
      period: '2023 - Present',
      description:
        'Building responsive web apps with Node.js, Laravel, Angular, and Tailwind. Developed admin panels, bots, and real-time systems.',
      icon: FaBriefcase,
      type: 'professional',
      color: 'from-blue-500 to-sky-500',
      achievements: [
        'Developed scalable web applications',
        'Built real-time systems',
        'Created admin panels and bots',
      ],
    },
    {
      title: 'Wachemo University – BSc in Computer Science',
      period: '2021 - 2024',
      description:
        'Focused on software engineering, algorithms, databases, and web development. Graduated with practical and project experience.',
      icon: FaGraduationCap,
      type: 'education',
      color: 'from-purple-500 to-pink-500',
      achievements: [
        'Software Engineering',
        'Algorithms & Data Structures',
        'Database Systems',
      ],
    },
    {
      title: 'Tewodros Secondary and Preparatory School',
      period: '2016 - 2020',
      description:
        'Completed high school with a focus on natural sciences, preparing for tech studies.',
      icon: FaSchool,
      type: 'education',
      color: 'from-green-500 to-emerald-500',
      achievements: [
        'Natural Sciences Focus',
        'Foundation for Tech Studies',
      ],
    },
  ]

  return (
    <section
      id="timeline"
      className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-sky-50 dark:from-sky-950 dark:via-sky-900 dark:to-sky-950 text-gray-900 dark:text-white px-6 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-blue-600 dark:text-sky-400 font-semibold text-sm uppercase tracking-wider mb-4">
            My Career Path
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            My <span className="text-blue-600 dark:text-sky-400">Journey</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            A timeline of my educational and professional milestones
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-sky-400 transform md:-translate-x-1/2 opacity-30"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon
              const isEven = index % 2 === 0
              
              return (
                <div
                  key={index}
                  ref={(el) => (timelineItemsRef.current[index] = el)}
                  className="timeline-item relative"
                  data-aos={isEven ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                >
                  {/* Timeline Card */}
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Left Side (Mobile) / Alternating Sides (Desktop) */}
                    <div
                      className={`w-full md:w-5/12 ${
                        isEven ? 'md:mr-auto' : 'md:ml-auto md:order-2'
                      }`}
                    >
                      <div className="bg-white dark:bg-sky-900 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-sky-800 relative overflow-hidden group">
                        {/* Gradient Background Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                        
                        <div className="relative z-10">
                          {/* Icon and Type Badge */}
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className="text-white text-xl" />
                            </div>
                            <div>
                              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                item.type === 'professional'
                                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                                  : 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                              }`}>
                                {item.type === 'professional' ? 'Professional' : 'Education'}
                              </span>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                            {item.title}
                          </h3>

                          {/* Period */}
                          <div className="flex items-center gap-2 mb-4">
                            <FaAward className="text-blue-600 dark:text-sky-400 text-sm" />
                            <span className="text-sm font-semibold text-blue-600 dark:text-sky-400">
                              {item.period}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                            {item.description}
                          </p>

                          {/* Achievements */}
                          <div className="space-y-2">
                            {item.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <FaCode className="text-blue-600 dark:text-sky-400 text-xs mt-1 flex-shrink-0" />
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center - Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 flex items-center justify-center z-20">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.color} border-4 border-white dark:border-sky-950 shadow-xl animate-pulse`}></div>
                      <div className={`absolute w-6 h-6 rounded-full bg-gradient-to-br ${item.color} opacity-20 animate-ping`}></div>
                    </div>

                    {/* Right Side (Mobile) / Alternating Sides (Desktop) */}
                    <div
                      className={`w-full md:w-5/12 ${
                        isEven ? 'md:ml-auto md:order-2' : 'md:mr-auto'
                      }`}
                    >
                      {/* Empty space for alternating layout */}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-sky-900 rounded-full shadow-lg">
            <FaRocket className="text-blue-600 dark:text-sky-400 animate-bounce" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Journey continues...
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
