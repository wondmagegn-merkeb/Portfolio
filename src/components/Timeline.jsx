import { useEffect, useRef } from 'react'

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
    },
    {
      title: 'Wachemo University – BSc in Computer Science',
      period: '2021 - 2024',
      description:
        'Focused on software engineering, algorithms, databases, and web development. Graduated with practical and project experience.',
    },
    {
      title: 'Tewodros Secondary and Preparatory School',
      period: '2016 - 2020',
      description:
        'Completed high school with a focus on natural sciences, preparing for tech studies.',
    },
  ]

  return (
    <section
      id="timeline"
      className="py-20 bg-gray-50 dark:bg-sky-950 text-gray-900 dark:text-white px-6 max-w-5xl mx-auto"
    >
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4">
          My <span className="text-blue-600 dark:text-sky-400">Journey</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          A brief look at my educational and professional path.
        </p>
      </div>

      <div className="relative border-l-2 border-blue-600 dark:border-sky-400 ml-4">
        {timelineData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (timelineItemsRef.current[index] = el)}
            className="timeline-item mb-10 pl-6 relative bg-white/50 dark:bg-sky-800/50 backdrop-blur-sm p-4 rounded-xl hover:bg-white dark:hover:bg-sky-700 transition-all duration-300"
            data-aos="fade-right"
            data-aos-delay={index * 100}
          >
            <div className="absolute w-5 h-5 bg-blue-600 dark:bg-sky-400 rounded-full -left-[10px] top-6 border-4 border-white dark:border-sky-950 shadow-lg pulse-glow"></div>
            <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
              {item.period}
            </span>
            <p className="mt-2 text-base text-gray-700 dark:text-gray-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline
