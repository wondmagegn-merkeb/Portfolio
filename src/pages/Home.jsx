import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

function Home() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 100,
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default Home;
