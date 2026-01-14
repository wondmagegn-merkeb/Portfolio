const Footer = () => {
  const socialLinks = [
    { icon: 'fab fa-github', href: '#' },
    { icon: 'fab fa-linkedin', href: '#' },
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fas fa-envelope', href: 'mailto:eyukk@gmail.com' },
  ]

  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-sky-900 dark:to-sky-800 text-gray-700 dark:text-gray-300 py-8 px-6 mt-4 border-t border-gray-200 dark:border-sky-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm font-medium">
          &copy; 2025 Eyerusalem Kindalem Getnet. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target={social.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={social.href.startsWith('mailto:') ? undefined : 'noopener'}
              className="w-10 h-10 rounded-full bg-white dark:bg-sky-800 flex items-center justify-center hover:bg-blue-600 dark:hover:bg-sky-400 hover:text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
