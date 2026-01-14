import { useState, useEffect, useRef } from "react";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaLightbulb,
  FaHeart,
  FaAward,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    { icon: FaProjectDiagram, value: "50+", label: "Projects Completed" },
    { icon: FaUsers, value: "30+", label: "Happy Clients" },
    { icon: FaCode, value: "5+", label: "Years Experience" },
    { icon: FaAward, value: "20+", label: "Certifications" },
  ];

  const highlights = [
    {
      icon: FaLaptopCode,
      title: "Full Stack Development",
      description: "Building end-to-end solutions with modern technologies",
    },
    {
      icon: FaRocket,
      title: "Performance Focused",
      description: "Optimizing applications for speed and scalability",
    },
    {
      icon: FaLightbulb,
      title: "Creative Problem Solver",
      description: "Turning complex challenges into elegant solutions",
    },
    {
      icon: FaHeart,
      title: "Passionate Learner",
      description: "Continuously exploring new technologies and best practices",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-sky-50 dark:from-sky-950 dark:via-sky-900 dark:to-sky-950 text-gray-900 dark:text-white px-6 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-blue-600 dark:text-sky-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Get To Know Me
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="text-blue-600 dark:text-sky-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Profile Image & Stats */}
          <div className="space-y-8">
            {/* Profile Image Card */}
            <div
              className="relative group"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-sky-400 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-white dark:bg-sky-900 rounded-2xl p-6 shadow-2xl">
                <div className="relative mx-auto w-64 h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-sky-500 rounded-full p-1">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                      alt="Wondmagegn Merkeb Beleka"
                      className="w-full h-full rounded-full object-cover relative z-10 float-animation"
                    />
                  </div>
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Wondmagegn Merkeb Beleka
                  </h3>
                  <p className="text-blue-600 dark:text-sky-400 font-semibold">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div
              className="grid grid-cols-2 gap-4"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-sky-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-sky-800"
                  >
                    <div className="flex flex-col items-center text-center">
                      <Icon className="text-3xl text-blue-600 dark:text-sky-400 mb-3" />
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        {isVisible ? stat.value : "0"}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - About Text & Highlights */}
          <div className="space-y-8">
            {/* About Text */}
            <div
              className="bg-white dark:bg-sky-900 rounded-2xl p-8 shadow-xl"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Who I Am
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate{" "}
                  <span className="font-semibold text-blue-600 dark:text-sky-400">
                    Full Stack Developer
                  </span>{" "}
                  dedicated to crafting exceptional digital experiences. With a
                  strong foundation in modern web technologies, I bring ideas to
                  life through clean, efficient code.
                </p>
                <p>
                  My expertise spans across{" "}
                  <span className="font-semibold">
                    Node.js, Laravel, Angular, Go, Python
                  </span>{" "}
                  and frameworks like{" "}
                  <span className="font-semibold">
                    Gin, Echo, Django, Flask, FastAPI
                  </span>{" "}
                  for backend and frontend development, combined with a keen eye
                  for design using{" "}
                  <span className="font-semibold">Tailwind CSS</span> and{" "}
                  <span className="font-semibold">Bootstrap</span>. I believe in
                  writing code that's not just functional, but also maintainable
                  and scalable.
                </p>
                <p>
                  I'm constantly learning and exploring new technologies, always
                  striving to stay at the forefront of web development. Every
                  project is an opportunity to create something meaningful and
                  impactful.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-sky-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-sky-800 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
