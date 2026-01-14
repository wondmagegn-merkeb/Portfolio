import { useState, useEffect } from "react";
import {
  FaTimes,
  FaGraduationCap,
  FaBriefcase,
  FaLaptop,
  FaStar,
  FaTh,
  FaCalendar,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaCertificate,
  FaExpand,
  FaJsSquare,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

const Certificates = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Bachelor of Science in Computer Science",
      issuer: "Wachemo University",
      date: "2021 - 2024",
      location: "Ethiopia",
      status: null,
      category: "academic",
      icon: FaGraduationCap,
      iconColor: "from-blue-500 to-sky-400",
      badgeColor: "bg-blue-100 dark:bg-sky-800 text-blue-600 dark:text-sky-400",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=400&fit=crop&auto=format",
    },
    {
      id: 2,
      title: "Full Stack Developer Certification",
      issuer: "Freelance Development",
      date: "2023 - Present",
      location: null,
      status: "Active",
      category: "professional",
      icon: FaBriefcase,
      iconColor: "from-green-500 to-emerald-400",
      badgeColor:
        "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&auto=format",
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      issuer: "Online Platform",
      date: "2023",
      location: null,
      status: "Verified",
      category: "online",
      icon: FaLaptop,
      iconColor: "from-purple-500 to-pink-400",
      badgeColor:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop&auto=format",
    },
    {
      id: 4,
      title: "Advanced JavaScript Certification",
      issuer: "Online Learning Platform",
      date: "2023",
      location: null,
      status: "Verified",
      category: "online",
      icon: FaJsSquare,
      iconColor: "from-yellow-500 to-orange-400",
      badgeColor:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=400&fit=crop&auto=format",
    },
    {
      id: 5,
      title: "Node.js Backend Development",
      issuer: "Tech Certification Program",
      date: "2023",
      location: null,
      status: "Completed",
      category: "professional",
      icon: FaNodeJs,
      iconColor: "from-green-500 to-teal-400",
      badgeColor:
        "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format",
    },
    {
      id: 6,
      title: "Database Management Systems",
      issuer: "Online Certification Course",
      date: "2024",
      location: null,
      status: "Verified",
      category: "online",
      icon: FaDatabase,
      iconColor: "from-indigo-500 to-blue-400",
      badgeColor:
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&auto=format",
    },
  ];

  const filters = [
    { id: "all", label: "All", icon: FaTh },
    { id: "academic", label: "Academic", icon: FaGraduationCap },
    { id: "professional", label: "Professional", icon: FaBriefcase },
    { id: "online", label: "Online Courses", icon: FaLaptop },
    { id: "other", label: "Other", icon: FaStar },
  ];

  const filteredCertificates =
    activeFilter === "all"
      ? certificates
      : certificates.filter((cert) => cert.category === activeFilter);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedImage) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const getCategoryLabel = (category) => {
    const categoryMap = {
      academic: "Academic",
      professional: "Professional",
      online: "Online Course",
      other: "Other",
    };
    return categoryMap[category] || category;
  };

  return (
    <section
      id="certificates"
      className="py-24 bg-gray-50 dark:bg-sky-950 text-gray-800 dark:text-white px-6"
    >
      {/* Hero Section */}
      <div className="text-center mb-16" data-aos="fade-up">
        <div className="inline-block mb-6">
          <FaCertificate className="text-6xl text-blue-600 dark:text-sky-400 mx-auto animate-bounce-slow" />
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          My{" "}
          <span className="text-blue-600 dark:text-sky-400">Certificates</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          A collection of my achievements, certifications, and professional
          accomplishments.
        </p>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`filter-btn px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-500 dark:to-sky-400 text-white scale-105 shadow-lg"
                    : "bg-gray-200 dark:bg-sky-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-sky-700"
                }`}
              >
                <Icon className="text-base" />
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredCertificates.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map((certificate, index) => {
              const Icon = certificate.icon;
              return (
                <div
                  key={certificate.id}
                  className="certificate-card group bg-white dark:bg-sky-900 rounded-2xl shadow-lg overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div
                    className="cert-image-container relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-sky-800 dark:to-sky-900 cursor-pointer"
                    onClick={() => openModal(certificate.image)}
                  >
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="certificate-image w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="view-fullscreen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 text-blue-600 dark:text-sky-400 px-4 py-2 rounded-lg font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center gap-2 pointer-events-none">
                      <FaExpand />
                      View Full
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${certificate.iconColor} flex items-center justify-center cert-icon shadow-lg`}
                      >
                        <Icon className="text-2xl text-white" />
                      </div>
                      <span
                        className={`px-3 py-1 ${certificate.badgeColor} text-xs rounded-full font-semibold`}
                      >
                        {getCategoryLabel(certificate.category)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {certificate.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {certificate.issuer}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaCalendar className="text-xs" />
                        {certificate.date}
                      </span>
                      {certificate.location && (
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-xs" />
                          {certificate.location}
                        </span>
                      )}
                      {certificate.status && (
                        <span
                          className={`flex items-center gap-1 ${
                            certificate.status === "Active" ||
                            certificate.status === "Completed"
                              ? "text-green-500"
                              : certificate.status === "Verified"
                              ? "text-purple-500 dark:text-purple-400"
                              : ""
                          }`}
                        >
                          {certificate.status === "Active" ||
                          certificate.status === "Completed" ? (
                            <FaCheckCircle className="text-xs" />
                          ) : (
                            <FaCertificate className="text-xs" />
                          )}
                          {certificate.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20" data-aos="fade-up">
            <FaStar className="text-6xl text-gray-400 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No certificates found in this category
            </p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 dark:bg-black/98 z-50 flex items-center justify-center p-4 animate-fadeIn backdrop-blur-sm"
          onClick={closeModal}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90"
            aria-label="Close modal"
          >
            <FaTimes className="text-2xl" />
          </button>
          <div
            className="relative max-w-[95%] max-h-[95vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Certificate"
              className="max-w-full max-h-[95vh] object-contain rounded-lg shadow-2xl animate-fadeIn border-2 border-white/10"
            />
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm z-50 flex items-center gap-2">
            <span>Click outside or press ESC to close</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
