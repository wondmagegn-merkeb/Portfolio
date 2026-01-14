import { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
  FaArrowLeft,
  FaBullseye,
  FaTools,
  FaBriefcase,
  FaUserCircle,
  FaGraduationCap,
  FaLanguage,
  FaUserTie,
  FaSchool,
  FaLaptopCode,
  FaCheck,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNode,
  FaReact,
  FaAngular,
  FaDatabase,
  FaPhp,
  FaCode,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaClock,
  FaBrain,
  FaUserShield,
  FaUniversity,
  FaChalkboardTeacher,
  FaPython,
  FaLaravel,
  FaGitAlt,
  FaJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiGo,
  SiGin,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { Link } from "react-router-dom";

const CV = () => {
  const cvRef = useRef(null);

  const personalInfo = {
    name: "Wondmagegn Merkeb Beleka",
    title: "Full Stack Developer",
    email: "wondmagegnmerkeb@gmail.com",
    phone: "+251923632213",
    location: "Debretabor, Ethiopia",
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face", // Update with actual path
  };

  const objective =
    "Experienced Full Stack Developer with a proven track record of designing and implementing scalable web applications. Seeking to leverage expertise in modern technologies including React, Node.js, and cloud-based solutions to deliver innovative software solutions. Committed to writing clean, maintainable code and collaborating effectively with cross-functional teams to achieve business objectives while continuously advancing technical skills in emerging technologies.";

  const aboutMe =
    "I am Wondmagegn Merkeb Beleka, a Computer Science graduate from Wachemo University with expertise in full-stack web development. I specialize in building scalable, responsive applications using modern technologies including React, Angular, Node.js, and various database systems. My technical proficiency extends across the entire development lifecycle, from frontend user interface design to backend API development and database optimization. With hands-on experience in system troubleshooting, network management, and IT operations, I bring a comprehensive technical perspective to every project. I am recognized for my ability to quickly adapt to new technologies, strong problem-solving capabilities, and collaborative approach to working with cross-functional teams. I am passionate about creating efficient, maintainable code and continuously expanding my knowledge in emerging technologies to deliver cutting-edge solutions.";

  const technicalSkills = [
    // Frontend
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Angular", icon: FaAngular, color: "text-red-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
    // Backend
    { name: "Node.js", icon: FaNode, color: "text-green-400" },
    { name: "Laravel", icon: FaLaravel, color: "text-red-600" },
    { name: "Go", icon: SiGo, color: "text-cyan-500" },
    { name: "Gin", icon: SiGin, color: "text-blue-500" },
    { name: "Python", icon: FaPython, color: "text-yellow-500" },
    { name: "Django", icon: SiDjango, color: "text-green-700" },
    { name: "Flask", icon: SiFlask, color: "text-gray-800" },
    { name: "FastAPI", icon: SiFastapi, color: "text-teal-500" },
    // Databases
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
    // Tools
    { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  ];

  const softSkills = [
    { name: "Teamwork", icon: FaUsers, color: "text-yellow-300" },
    { name: "Creativity", icon: FaLightbulb, color: "text-yellow-400" },
    { name: "Communication", icon: FaComments, color: "text-green-300" },
    { name: "Time Management", icon: FaClock, color: "text-red-400" },
    { name: "Critical Thinking", icon: FaBrain, color: "text-purple-400" },
    { name: "Reliability", icon: FaUserShield, color: "text-blue-300" },
  ];

  const experience = {
    title: "Freelance Full Stack Developer",
    period: "Jan 2023 – Present",
    achievements: [
      "Developed and maintained responsive websites using HTML, CSS, JavaScript, PHP, and Node.js.",
      "Integrated RESTful APIs and database systems (MySQL, MongoDB).",
      "Collaborated with clients to understand project requirements and deliver timely solutions.",
    ],
  };

  const education = [
    {
      institution: "Fetawrati Gebeye Primary School",
      location: "Debretabor",
      period: "2008– 2016",
      icon: FaSchool,
    },
    {
      institution: "Tewodros Secondary and Preparatory School",
      location: "Debretabor",
      period: "2016 – 2018",
      icon: FaUniversity,
    },
    {
      institution: "Tewodros Secondary and Preparatory School",
      location: "Debretabor",
      period: "2018 – 2020",
      icon: FaChalkboardTeacher,
    },
    {
      institution: "Wachemo University",
      location: "BSc in Computer Science",
      period: "2021 – 2024",
      icon: FaLaptopCode,
    },
  ];

  const languages = [
    { name: "Amharic", level: "Native" },
    { name: "English", level: "Proficient" },
  ];

  const references = {
    name: "Mr. Kumela Neda (MBA)",
    position: "Head, Department of Computer Science",
    institution: "Wachemo University",
    phone: "+251923632213",
    email: "kumela2010@gmail.com",
  };

  const handleDownload = async () => {
    if (!cvRef.current) return;

    try {
      // Show loading state
      const downloadBtn = document.querySelector(".download-btn");
      const originalText = downloadBtn?.querySelector("span")?.textContent;
      if (downloadBtn) {
        downloadBtn.disabled = true;
        const span = downloadBtn.querySelector("span");
        if (span) span.textContent = "Generating PDF...";
      }

      // Hide download buttons during PDF generation
      const buttons = document.querySelectorAll(".download-btn");
      buttons.forEach((btn) => {
        btn.style.opacity = "0";
        btn.style.pointerEvents = "none";
      });

      // Wait a bit for any animations to complete
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Create PDF with proper page layout
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = 210; // A4 width in mm
      const pdfHeight = 297; // A4 height in mm
      const margin = 10; // Margin in mm
      const contentWidth = pdfWidth - 2 * margin;
      const contentHeight = pdfHeight - 2 * margin; // Available height per page

      // Capture the entire CV content
      const canvas = await html2canvas(cvRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#082f49",
        allowTaint: true,
        removeContainer: false,
        imageTimeout: 15000,
        windowWidth: cvRef.current.scrollWidth,
        windowHeight: cvRef.current.scrollHeight,
        onclone: (clonedDoc) => {
          // Ensure all styles are preserved
          const clonedElement = clonedDoc.querySelector("[data-cv-content]");
          if (clonedElement) {
            clonedElement.style.backgroundColor = "#082f49";
            clonedElement.style.color = "#ffffff";
          }
          // Hide buttons in cloned document
          const clonedButtons = clonedDoc.querySelectorAll(".download-btn");
          clonedButtons.forEach((btn) => {
            btn.style.display = "none";
          });
        },
      });

      // Calculate image dimensions for PDF
      const imgWidth = contentWidth;
      const imgHeight = (canvas.height * contentWidth) / canvas.width;
      const totalPages = Math.ceil(imgHeight / contentHeight);

      let yOffset = 0;
      let sourceY = 0;

      // Split content across pages with proper layout
      for (let page = 0; page < totalPages; page++) {
        if (page > 0) {
          pdf.addPage();
        }

        // Calculate height for this page
        const remainingHeight = imgHeight - yOffset;
        const pageContentHeight = Math.min(contentHeight, remainingHeight);
        const pageSourceHeight =
          (pageContentHeight / imgHeight) * canvas.height;

        // Create canvas for this page's content
        const pageCanvas = document.createElement("canvas");
        pageCanvas.width = canvas.width;
        pageCanvas.height = pageSourceHeight;
        const pageCtx = pageCanvas.getContext("2d");

        // Draw the portion of the image for this page
        pageCtx.drawImage(
          canvas,
          0,
          sourceY,
          canvas.width,
          pageSourceHeight,
          0,
          0,
          canvas.width,
          pageSourceHeight
        );

        const pageImgData = pageCanvas.toDataURL("image/png", 1.0);

        // Add to PDF with proper margins
        pdf.addImage(
          pageImgData,
          "PNG",
          margin,
          margin,
          imgWidth,
          pageContentHeight,
          undefined,
          "FAST"
        );

        // Update offsets for next page
        yOffset += pageContentHeight;
        sourceY += pageSourceHeight;
      }

      // Save PDF with colored output
      pdf.save(`${personalInfo.name.replace(/\s+/g, "_")}_CV.pdf`);

      // Restore buttons
      buttons.forEach((btn) => {
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
      });

      if (downloadBtn) {
        downloadBtn.disabled = false;
        const span = downloadBtn.querySelector("span");
        if (span && originalText) span.textContent = originalText;
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");

      // Restore buttons on error
      const buttons = document.querySelectorAll(".download-btn");
      buttons.forEach((btn) => {
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
        btn.disabled = false;
      });
    }
  };

  const SectionHeader = ({ icon: Icon, title }) => (
    <h2 className="relative text-2xl font-semibold text-gray-800 mb-4 custom-header-bg border-2 border-blue-100 rounded-full py-2 w-full flex items-center justify-center">
      <span className="absolute -left-4 w-12 h-12 flex items-center justify-center custom-icon-bg text-white rounded-full border-2 border-white shadow-md text-xl">
        <Icon />
      </span>
      {title}
    </h2>
  );

  return (
    <div
      ref={cvRef}
      data-cv-content
      className="min-h-screen bg-sky-950 text-white p-6"
      style={{ backgroundColor: "#082f49" }}
    >
      {/* Download and Back Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <button
          onClick={handleDownload}
          className="download-btn bg-gradient-to-r from-blue-800 to-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
        >
          <FaDownload />
          <span>Download CV</span>
        </button>
        <Link
          to="/"
          className="download-btn bg-gradient-to-r from-blue-800 to-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
        >
          <FaArrowLeft />
          <span>Back</span>
        </Link>
      </div>

      {/* Header */}
      <header
        className="max-w-4xl mx-auto shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-8"
        style={{ backgroundColor: "#208aba", color: "#fff" }}
      >
        <div className="flex items-center gap-5 md:gap-8">
          <img
            src={personalInfo.profileImage}
            alt="Profile picture"
            className="w-28 h-28 rounded-full object-cover border-2 border-violet-600"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <div>
            <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
            <p className="mt-1 text-lg">{personalInfo.title}</p>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <p className="flex items-center">
            <FaEnvelope className="text-white text-lg mr-2" />
            <span>{personalInfo.email}</span>
          </p>
          <p className="flex items-center">
            <FaPhone className="text-white text-lg mr-2" />
            <span>{personalInfo.phone}</span>
          </p>
          <p className="flex items-center">
            <FaMapMarkerAlt className="text-white text-lg mr-2" />
            <span>{personalInfo.location}</span>
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto mt-8 bg-white rounded-lg shadow-md p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-8">
          {/* Objective */}
          <section>
            <SectionHeader icon={FaBullseye} title="Objective" />
            <p className="text-gray-700 leading-relaxed">{objective}</p>
          </section>

          {/* Skills */}
          <section>
            <SectionHeader icon={FaTools} title="Skills" />

            {/* Technical Skills */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-sky-500 rounded-full"></span>
                Technical Skills
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {technicalSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="group skill-card-modern relative flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-4 rounded-xl shadow-lg cursor-pointer text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                    >
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Icon with glow effect */}
                      <div className="relative z-10 mb-2 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Icon
                          className={`text-4xl ${skill.color} drop-shadow-lg`}
                        />
                      </div>

                      {/* Skill name */}
                      <span className="relative z-10 font-semibold text-xs text-center leading-tight group-hover:text-yellow-200 transition-colors duration-300">
                        {skill.name}
                      </span>

                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-500 rounded-full"></span>
                Soft Skills
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {softSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="group skill-card-modern relative flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 p-4 rounded-xl shadow-lg cursor-pointer text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                    >
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Icon with glow effect */}
                      <div className="relative z-10 mb-2 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Icon
                          className={`text-3xl ${skill.color} drop-shadow-lg`}
                        />
                      </div>

                      {/* Skill name */}
                      <span className="relative z-10 font-semibold text-xs text-center leading-tight group-hover:text-yellow-200 transition-colors duration-300">
                        {skill.name}
                      </span>

                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <SectionHeader icon={FaBriefcase} title="Experience" />
            <div>
              <h3 className="font-bold text-lg text-blue-800">
                {experience.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{experience.period}</p>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-8">
          {/* About Me */}
          <section>
            <SectionHeader icon={FaUserCircle} title="About Me" />
            <p className="text-gray-700 leading-relaxed">{aboutMe}</p>
          </section>

          {/* Education */}
          <section>
            <SectionHeader icon={FaGraduationCap} title="Education" />
            <div className="relative">
              {/* Modern Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-30"></div>

              <div className="space-y-6 pl-12">
                {education.map((edu, index) => {
                  const Icon = edu.icon;
                  const colors = [
                    "from-blue-500 to-cyan-500",
                    "from-purple-500 to-pink-500",
                    "from-green-500 to-emerald-500",
                    "from-orange-500 to-red-500",
                  ];
                  const bgColors = [
                    "bg-blue-50 hover:bg-blue-100",
                    "bg-purple-50 hover:bg-purple-100",
                    "bg-green-50 hover:bg-green-100",
                    "bg-orange-50 hover:bg-orange-100",
                  ];

                  return (
                    <div
                      key={index}
                      className={`group timeline-item-modern relative ${bgColors[index]} p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-l-4 border-transparent hover:border-blue-500`}
                    >
                      {/* Animated Icon Circle */}
                      <div
                        className={`absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-gradient-to-br ${colors[index]} text-white rounded-full border-4 border-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl`}
                      >
                        <Icon className="text-lg" />
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                          {edu.institution}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm">
                          <span className="text-gray-600 font-medium">
                            {edu.location}
                          </span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600">{edu.period}</span>
                        </div>
                      </div>

                      {/* Decorative gradient line */}
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${colors[index]} rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <SectionHeader icon={FaLanguage} title="Languages" />
            <ul className="space-y-2">
              {languages.map((lang, index) => (
                <li key={index} className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span className="text-gray-700">
                    {lang.name} – {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* References */}
          <section>
            <SectionHeader icon={FaUserTie} title="References" />
            <div className="text-gray-800">
              <ul>
                <li>
                  <FaCheck className="text-green-500 mr-2 inline" />
                  <strong className="font-bold text-lg text-blue-800">
                    {references.name}
                  </strong>
                  <br />
                  {references.position}
                  <br />
                  <FaUniversity className="text-blue-800 mr-1 inline" />
                  {references.institution}
                  <br />
                  Phone: {references.phone}
                  <br />
                  Email: {references.email}
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      {/* Custom Styles */}
      <style jsx>{`
        .custom-header-bg {
          background-color: #208aba;
          color: white;
          transition: all 0.3s ease;
        }
        .custom-icon-bg {
          background-color: #13526f;
          color: white;
          transition: all 0.3s ease;
        }
        .skill-card-modern {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        .skill-card-modern::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }
        .skill-card-modern:hover::before {
          left: 100%;
        }
        .skill-card-modern:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }
        .timeline-item-modern {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        .timeline-item-modern::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.05) 0%,
            rgba(147, 51, 234, 0.05) 100%
          );
          opacity: 0;
          transition: opacity 0.3s;
          border-radius: 0.75rem;
        }
        .timeline-item-modern:hover::after {
          opacity: 1;
        }
        h2:hover .custom-header-bg {
          background-color: #13526f;
          transform: scale(1.02);
        }
        h2:hover .custom-icon-bg {
          background-color: #208aba;
          transform: scale(1.1) rotate(5deg);
        }
        @media print {
          .download-btn,
          .back-btn {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default CV;
