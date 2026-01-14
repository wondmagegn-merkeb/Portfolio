import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show after scrolling past 600px (past hero section)
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollPosition > 600);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Don't render the button at all if not visible
  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-50 animate-fadeIn"
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};

export default BackToTop;
