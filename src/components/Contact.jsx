const Contact = () => {
  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      text: 'eyukk426@gmail.com',
      link: 'mailto:eyukk426@gmail.com',
    },
    {
      icon: 'fas fa-phone',
      text: '+251907363763',
      link: 'tel:+251907363763',
    },
    {
      icon: 'fas fa-map-marker-alt',
      text: 'Bahrdar, Ethiopia',
      link: '#',
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-sky-900 text-gray-800 dark:text-white px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-blue-600 dark:text-sky-400">Contact</span> Me
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
      </div>

      <div
        className="grid md:grid-cols-2 gap-10 items-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Contact Info */}
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/50 dark:bg-sky-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-sky-700 transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-sky-800 flex items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-sky-400 transition-colors duration-300">
                <i className={`${info.icon} text-blue-600 dark:text-sky-400 group-hover:text-white text-xl transition-colors duration-300`}></i>
              </div>
              <span className="font-medium group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors duration-300">
                {info.text}
              </span>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <form
          action="https://formsubmit.co/eyukk426@gmail.com"
          method="POST"
          className="space-y-4"
        >
          {/* Add hidden inputs for configuration */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thanks for reaching out! I'll get back to you soon."
          />
          <input
            type="hidden"
            name="_subject"
            value="New Message from Portfolio Contact Form"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="form-input w-full p-4 rounded-xl bg-gray-100 dark:bg-sky-950 outline-none focus:ring-2 focus:ring-blue-400 border-2 border-transparent focus:border-blue-400 transition-all duration-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="form-input w-full p-4 rounded-xl bg-gray-100 dark:bg-sky-950 outline-none focus:ring-2 focus:ring-blue-400 border-2 border-transparent focus:border-blue-400 transition-all duration-300"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="form-input w-full p-4 rounded-xl bg-gray-100 dark:bg-sky-950 outline-none focus:ring-2 focus:ring-blue-400 border-2 border-transparent focus:border-blue-400 transition-all duration-300 resize-none"
          ></textarea>

          <button
            type="submit"
            className="btn-modern bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 dark:bg-sky-400 dark:hover:bg-sky-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold relative overflow-hidden w-full"
          >
            <span className="relative z-10">
              Send Message <i className="fas fa-paper-plane ml-2"></i>
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
