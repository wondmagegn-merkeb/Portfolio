import { useEffect, useRef } from "react";
import {
  FaServer,
  FaDatabase,
  FaPalette,
  FaTools,
  FaLaptopCode,
  FaNode,
  FaReact,
  FaAngular,
  FaLaravel,
  FaGitAlt,
  FaJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiGin,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiFirebase,
  SiTypescript,
  SiVuedotjs,
  SiNextdotjs,
  SiRedux,
  SiVite,
  SiSvelte,
  SiGraphql,
  SiNuxtdotjs,
  SiDocker,
  SiPostman,
} from "react-icons/si";

const Skills = () => {
  const skillCardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, index * 50);
          }
        });
      },
      { threshold: 0.1 }
    );

    skillCardsRef.current.forEach((card) => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.5s ease";
        observer.observe(card);
      }
    });

    return () => {
      skillCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      icon: FaPalette,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", icon: FaReact, color: "text-blue-500" },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "text-gray-900 dark:text-white",
        },
        { name: "Vue.js", icon: SiVuedotjs, color: "text-green-500" },
        { name: "Angular", icon: FaAngular, color: "text-red-500" },
        { name: "Svelte", icon: SiSvelte, color: "text-orange-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
        { name: "Redux", icon: SiRedux, color: "text-purple-600" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
        { name: "Vite", icon: SiVite, color: "text-yellow-400" },
        // { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
        // { name: "Nuxt.js", icon: SiNuxtdotjs, color: "text-green-600" },
      ],
    },
    {
      title: "Backend",
      icon: FaServer,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: FaNode, color: "text-green-600" },
        {
          name: "Express",
          icon: SiExpress,
          color: "text-gray-800 dark:text-gray-200",
        },
        { name: "Laravel", icon: FaLaravel, color: "text-red-600" },
        { name: "Gin", icon: SiGin, color: "text-blue-500" },
        { name: "Django", icon: SiDjango, color: "text-green-700" },
        {
          name: "Flask",
          icon: SiFlask,
          color: "text-gray-800 dark:text-gray-200",
        },
        { name: "FastAPI", icon: SiFastapi, color: "text-teal-500" },
      ],
    },
    {
      title: "Databases",
      icon: FaDatabase,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
        { name: "SQLite", icon: SiSqlite, color: "text-blue-500" },
        { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
      ],
    },
    {
      title: "Tools & Others",
      icon: FaTools,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
        { name: "Docker", icon: SiDocker, color: "text-blue-500" },
        { name: "Postman", icon: SiPostman, color: "text-orange-600" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-sky-50 dark:from-sky-950 dark:via-sky-900 dark:to-sky-950 text-gray-900 dark:text-white px-6 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-blue-600 dark:text-sky-400 font-semibold text-sm uppercase tracking-wider mb-4">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            My <span className="text-blue-600 dark:text-sky-400">Skills</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Technologies and tools I use to build modern, scalable applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={categoryIndex}
                className="bg-white dark:bg-sky-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-sky-800"
                data-aos="fade-up"
                data-aos-delay={categoryIndex * 100}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                  >
                    <CategoryIcon className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    const globalIndex = categoryIndex * 100 + skillIndex;
                    return (
                      <div
                        key={skillIndex}
                        ref={(el) => {
                          if (el) skillCardsRef.current[globalIndex] = el;
                        }}
                        className="group relative bg-gradient-to-br from-gray-50 to-blue-50 dark:from-sky-800 dark:to-sky-900 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-sky-700 cursor-pointer overflow-hidden"
                      >
                        {/* Hover Gradient Effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        ></div>

                        <div className="relative z-10 flex flex-col items-center text-center">
                          <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                            <SkillIcon className={`text-4xl ${skill.color}`} />
                          </div>
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Card */}
        <div
          className="mt-12 bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-500 dark:to-sky-400 rounded-2xl p-8 shadow-2xl text-white"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <FaLaptopCode className="text-3xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">
                  Full Stack Expertise
                </h3>
                <p className="text-blue-100 dark:text-sky-100">
                  Building end-to-end solutions with modern technologies
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-4xl font-bold mb-1">
                {skillCategories.reduce(
                  (acc, cat) => acc + cat.skills.length,
                  0
                )}
                +
              </div>
              <div className="text-blue-100 dark:text-sky-100">
                Technologies
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
