import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaSpinner } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'
  const [submitMessage, setSubmitMessage] = useState('')

  const contactInfo = [
    {
      icon: FaEnvelope,
      text: 'wondmagegnmerkebbeleka@gmail.com',
      link: 'mailto:wondmagegnmerkebbeleka@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaPhone,
      text: '+251 977 959 9896',
      link: 'tel:+2519779599896',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaMapMarkerAlt,
      text: 'Hawassa, Ethiopia',
      link: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null)
      setSubmitMessage('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setSubmitMessage('')

    try {
      const response = await fetch('https://formsubmit.co/ajax/wondmagegnmerkebbeleka@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New Message from Portfolio Contact Form',
          _template: 'box',
          _autoresponse: "Thanks for reaching out! I'll get back to you soon.",
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Message sent successfully! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
          setSubmitMessage('')
        }, 5000)
      } else {
        throw new Error(data.message || 'Failed to send message')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage(error.message || 'Failed to send message. Please try again or email me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-sky-50 dark:from-sky-950 dark:via-sky-900 dark:to-sky-950 text-gray-800 dark:text-white px-6 overflow-hidden relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-blue-600 dark:text-sky-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="text-blue-600 dark:text-sky-400">Contact</span> Me
        </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full mt-4"></div>
      </div>

      <div
          className="grid md:grid-cols-2 gap-12 items-start"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Contact Info */}
        <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Let's Connect
            </h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
            <a
              key={index}
              href={info.link}
                  className="group flex items-center gap-4 p-6 rounded-2xl bg-white dark:bg-sky-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-sky-800"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
            >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-2xl text-white" />
              </div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors duration-300">
                {info.text}
              </span>
            </a>
              )
            })}

            {/* Social Links Section */}
            <div className="mt-8 p-6 rounded-2xl bg-white dark:bg-sky-900 shadow-lg border border-gray-200 dark:border-sky-800">
              <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                Follow Me
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </div>
            </div>
        </div>

        {/* Contact Form */}
          <div className="bg-white dark:bg-sky-900 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-sky-800">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Your Name
                </label>
          <input
            type="text"
                  id="name"
            name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
            required
                  className="form-input w-full p-4 rounded-xl bg-gray-50 dark:bg-sky-950 border-2 border-gray-200 dark:border-sky-800 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Your Email
                </label>
          <input
            type="email"
                  id="email"
            name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
            required
                  className="form-input w-full p-4 rounded-xl bg-gray-50 dark:bg-sky-950 border-2 border-gray-200 dark:border-sky-800 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Your Message
                </label>
          <textarea
                  id="message"
            name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  rows="6"
            required
                  className="form-input w-full p-4 rounded-xl bg-gray-50 dark:bg-sky-950 border-2 border-gray-200 dark:border-sky-800 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          ></textarea>
              </div>

              {/* Status Message */}
              {submitStatus && (
                <div
                  className={`p-4 rounded-xl flex items-center gap-3 ${
                    submitStatus === 'success'
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-2 border-green-200 dark:border-green-800'
                      : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-2 border-red-200 dark:border-red-800'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <FaCheckCircle className="text-xl flex-shrink-0" />
                  ) : (
                    <FaExclamationCircle className="text-xl flex-shrink-0" />
                  )}
                  <p className="text-sm font-medium">{submitMessage}</p>
                </div>
              )}

          <button
            type="submit"
                disabled={isSubmitting}
                className="btn-modern w-full bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-500 dark:to-sky-400 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-sky-600 dark:hover:from-blue-600 dark:hover:to-sky-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
                {isSubmitting ? (
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <FaSpinner className="animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <FaPaperPlane />
            </span>
                )}
          </button>
        </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
