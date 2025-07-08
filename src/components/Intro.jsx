import React from "react";
import { motion } from "framer-motion";
import { RiDownloadLine } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";

function Intro() {
  // Check if device is mobile
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Animation variants for staggered text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handleDownloadResume = () => {
    // Replace with your actual resume download logic
    alert("Resume download functionality will be implemented here");
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center md:items-start justify-center text-black w-full px-6 md:px-12 lg:px-16 text-center md:text-left"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-1"
      >
        Hi,
      </motion.h1>
      <motion.h5
        variants={itemVariants}
        className="text-lg md:text-xl opacity-60 mb-1"
      >
        My name is
      </motion.h5>
      <motion.h1
        variants={itemVariants}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-600 mb-2"
      >
        Aman Singh Thapa
      </motion.h1>
      <motion.h2
        variants={itemVariants}
        className="text-xl md:text-2xl font-medium opacity-70 mb-4 md:mb-6"
      >
        a Creative Web Developer
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="text-base md:text-lg opacity-80 mb-6 md:mb-8 max-w-xl"
      >
        I build exceptional digital experiences that combine <br /> beautiful
        design with cutting-edge technology.
      </motion.p>
      {/* <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.05, backgroundColor: "#10b981" }}
        whileTap={{ scale: 0.98 }}
        onClick={handleDownloadResume}
        className="flex items-center gap-2 border-2 border-emerald-500 rounded-full px-4 md:px-6 py-2 md:py-3 bg-emerald-400 text-white font-medium transition-all duration-300"
      >
        Download Resume <RiDownloadLine className="text-lg" />
      </motion.button> */}
    </motion.div>
  );
}

export default Intro;
