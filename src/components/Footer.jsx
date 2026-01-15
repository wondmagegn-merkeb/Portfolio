import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaHeart,
} from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const quickLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "My Journey", href: "#timeline", id: "timeline" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Certificates", href: "#certificates", id: "certificates" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com",
      label: "GitHub",
      bgColor: "bg-gray-800 dark:bg-gray-800",
      hoverBgColor: "hover:bg-gray-700 dark:hover:bg-gray-700",
      iconColor: "text-white",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      bgColor: "bg-[#0077b5]",
      hoverBgColor: "hover:bg-[#005885]",
      iconColor: "text-white",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com",
      label: "Twitter",
      bgColor: "bg-[#1DA1F2]",
      hoverBgColor: "hover:bg-[#1a8cd8]",
      iconColor: "text-white",
    },
    {
      icon: FaEnvelope,
      href: "mailto:wondmagegnmerkebbeleka@gmail.com",
      label: "Email",
      bgColor: "bg-red-600",
      hoverBgColor: "hover:bg-red-700",
      iconColor: "text-white",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-sky-900 to-sky-950 dark:from-sky-950 dark:via-sky-900 dark:to-gray-900 text-gray-300 dark:text-gray-300 border-t border-sky-800 dark:border-sky-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>

      <div className="relative z-10 w-full mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <FaCode className="text-2xl text-blue-400 dark:text-sky-400" />
              <h3 className="text-2xl font-bold text-white">Wondmagegn</h3>
            </div>
            <p className="text-gray-400 dark:text-gray-400 mb-4 leading-relaxed">
              Full Stack Developer passionate about building innovative web
              solutions and creating exceptional digital experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className={`w-10 h-10 rounded-lg ${social.bgColor} ${social.hoverBgColor} flex items-center justify-center ${social.iconColor} transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl`}
                    aria-label={social.label}
                  >
                    <Icon className="text-xl" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="text-gray-400 dark:text-gray-400 hover:text-blue-400 dark:hover:text-sky-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 dark:bg-sky-400 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 dark:text-gray-400">
                <FaEnvelope className="text-blue-400 dark:text-sky-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:wondmagegnmerkebbeleka@gmail.com"
                  className="hover:text-blue-400 dark:hover:text-sky-400 transition-colors duration-300"
                >
                  wondmagegnmerkebbeleka@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 dark:text-gray-400">
                <FaPhone className="text-blue-400 dark:text-sky-400 mt-1 flex-shrink-0" />
                <span>+251 977 959 9896</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 dark:text-gray-400">
                <FaMapMarkerAlt className="text-blue-400 dark:text-sky-400 mt-1 flex-shrink-0" />
                <span>Ethiopia</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Let's Connect</h4>
            <p className="text-gray-400 dark:text-gray-400 mb-4 text-sm leading-relaxed">
              Have a project in mind? Let's work together to bring your ideas to
              life.
            </p>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-sky-800 dark:border-sky-700 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 dark:text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} Wondmagegn Merkeb Beleka. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-400 dark:text-gray-400 text-sm">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
