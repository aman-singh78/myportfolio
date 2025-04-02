import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import AnimatedModel from "./AnimatedModel";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function App() {
  const [contentLoaded, setContentLoaded] = useState(false);
  // Check if device is mobile
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // More direct approach to detect preloader completion
  useEffect(() => {
    // First, check if preloader exists
    const preloader = document.getElementById("preloader");

    if (!preloader) {
      // If preloader doesn't exist at all, show content immediately
      console.log("No preloader found, showing content immediately");
      setContentLoaded(true);
      return;
    }

    // If preloader exists but already has hidden class
    if (preloader.classList.contains("hidden")) {
      console.log("Preloader is hidden, showing content");
      setContentLoaded(true);
      return;
    }

    // Wait for preloader to finish
    console.log("Waiting for preloader to complete...");

    // Function to check if preloader is gone
    const checkPreloader = () => {
      const preloader = document.getElementById("preloader");
      if (!preloader || preloader.classList.contains("hidden")) {
        console.log("Preloader removed, showing content");
        setContentLoaded(true);
      }
    };

    // Set multiple ways to detect preloader completion

    // 1. Listen for custom event
    window.addEventListener("preloaderRemoved", function onPreloaderRemoved() {
      console.log("Preloader removed event received");
      setContentLoaded(true);
      window.removeEventListener("preloaderRemoved", onPreloaderRemoved);
    });

    // 2. Set interval to check regularly
    const intervalId = setInterval(checkPreloader, 500);

    // 3. Use mutation observer
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        checkPreloader();
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });

    // 4. Timeout as fallback (show content after 5 seconds regardless)
    const timeoutId = setTimeout(() => {
      console.log("Fallback timeout: showing content");
      setContentLoaded(true);
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener("preloaderRemoved", checkPreloader);
    };
  }, []);

  // Smooth scrolling for all anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }, [contentLoaded]);

  // Variants for section animations
  const sectionVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Variants for content reveal
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  console.log("Content loaded state:", contentLoaded);

  return (
    <>
      {contentLoaded ? (
        <motion.div
          className="relative w-full"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 w-full z-50 bg-white/30 backdrop-blur-lg shadow-md"
          >
            <Navbar />
          </motion.div>

          {/* Scrollable Content */}
          <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
            {/* Hero Section */}
            <section id="home" className="h-screen w-full relative">
              <div className="absolute inset-0 md:w-5xl z-10 flex items-center justify-center gap4 pointer-events-none">
                <motion.div
                  variants={sectionVariants}
                  className="max-w-5xl px-4 md:px-6 lg:px-8"
                >
                  <Intro />
                </motion.div>
              </div>

              {/* 3D Canvas - Only render on non-mobile devices */}
              {!isMobile && (
                <Canvas
                  camera={{ position: [0, 0.4, 3], fov: 30 }}
                  className="absolute top-0 left-0 w-full h-full overflow-hidden"
                >
                  <color attach="background" args={["white"]} />
                  <ambientLight intensity={1} />
                  <directionalLight position={[0, 5, 5]} />
                  <AnimatedModel />
                  <OrbitControls enableZoom={false} />
                </Canvas>
              )}
            </section>

            {/* About Section */}
            <motion.section
              id="about"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
              className=" flex items-center justify-center bg-white px-6 py-16"
            >
              <About />
            </motion.section>

            {/* Experience Section */}
            <motion.section
              id="experience"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
              className="min-h-screen flex items-center justify-center bg-white p-9"
            >
              <Experience />
            </motion.section>

            {/* Skills Section */}
            <motion.section
              id="skills"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
              className="min-h-screen flex items-center justify-center bg-white px-6 py-16"
            >
              <Skills />
            </motion.section>

            {/* Projects Section */}
            <motion.section
              id="projects"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={sectionVariants}
              className="min-h-screen flex items-center justify-center bg-white px-6 py-16"
            >
              <Projects />
            </motion.section>

            {/* Footer Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
              className="flex flex-wrap items-start justify-center bg-white py-12 px-6"
            >
              <Footer />
            </motion.section>
          </div>
        </motion.div>
      ) : (
        // Fallback message in case preloader isn't working correctly
        <div className="h-screen w-full flex items-center justify-center bg-white">
          <p className="text-lg text-gray-600">Loading your portfolio...</p>
        </div>
      )}
    </>
  );
}
