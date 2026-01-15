import { useState, useEffect } from "react";
import {
  FaCode,
  FaRocket,
  FaArrowDown,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer";
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;

    const type = () => {
      if (!isDeleting && currentIndex < fullText.length) {
        // Typing forward
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(type, 100); // Typing speed: 100ms per character
      } else if (!isDeleting && currentIndex === fullText.length) {
        // Finished typing, wait then start deleting
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
          type();
        }, 2000); // Wait 2 seconds before deleting
      } else if (isDeleting && currentIndex > 0) {
        // Deleting backward
        currentIndex--;
        setTypedText(fullText.slice(0, currentIndex));
        timeoutId = setTimeout(type, 50); // Deleting speed: 50ms per character (faster)
      } else if (isDeleting && currentIndex === 0) {
        // Finished deleting, wait then start typing again
        setIsDeleting(false);
        timeoutId = setTimeout(type, 500); // Wait 0.5 seconds before typing again
      }
    };

    type();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [fullText, isDeleting]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 via-blue-50 to-sky-50 dark:from-sky-950 dark:via-sky-900 dark:to-sky-950 text-gray-900 dark:text-white px-6 overflow-hidden pt-24 md:pt-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* Greeting */}
            <div className="inline-block" data-aos="fade-up">
              <span className="text-lg md:text-xl font-medium text-blue-600 dark:text-sky-400 flex items-center gap-2 justify-center lg:justify-start">
                <FaCode className="animate-pulse" />
                Welcome to my portfolio
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="block">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-sky-400 dark:from-blue-400 dark:via-purple-400 dark:to-sky-300 bg-clip-text text-transparent animate-gradient py-4">
                Wondmagegn
              </span>
            </h1>

            {/* Animated Role */}
            <div
              className="h-12 md:h-16 flex items-center justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative">
                <span className="text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-300">
                  I'm a{" "}
                </span>
                <span className="text-xl md:text-2xl font-bold text-blue-600 dark:text-sky-400 inline-block">
                  {typedText}
                  <span className="inline-block w-1 h-6 md:h-8 bg-blue-600 dark:bg-sky-400 ml-1 animate-blink"></span>
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Crafting beautiful and performant web experiences with modern
              technologies. Passionate about creating solutions that make a
              difference.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-500 dark:to-sky-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaRocket className="group-hover:translate-x-1 transition-transform" />
                  View Projects
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="group px-8 py-4 border-2 border-blue-600 dark:border-sky-400 text-blue-600 dark:text-sky-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white dark:hover:bg-sky-400 dark:hover:text-sky-900 transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaEnvelope className="group-hover:rotate-12 transition-transform" />
                  Contact Me
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div
              className="flex gap-6 justify-center lg:justify-start pt-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white dark:bg-sky-900 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-sky-400"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white dark:bg-sky-900 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-sky-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="mailto:wondmagegnmerkebbeleka@gmail.com"
                className="w-12 h-12 flex items-center justify-center bg-white dark:bg-sky-900 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-sky-400"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            className="hidden lg:flex flex-1 justify-center lg:justify-end"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-sky-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>

              {/* Animated Rings */}
              <div className="absolute inset-0 border-4 border-blue-400/30 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 border-4 border-sky-400/30 rounded-full animate-spin-slow-reverse"></div>

              {/* Profile Image */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-sky-500 rounded-full p-1 animate-gradient-border">
                  <img
                    src="./programmer-line-gradient-icon-vector.jpg"
                    alt="Wondmagegn Profile"
                    className="w-full h-full rounded-full object-cover relative z-10 float-animation"
                  />
                </div>
              </div>

              {/* Floating Code Icon */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white dark:bg-sky-900 rounded-xl shadow-2xl flex items-center justify-center animate-bounce-slow">
                <FaCode className="text-2xl text-blue-600 dark:text-sky-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, "about")}
          className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm font-medium">Scroll</span>
          <FaArrowDown className="text-xl" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
