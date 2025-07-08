import React from "react";
import { motion } from "framer-motion";
import ProCard from "./ProCard";

const projects = [
  {
    imageUrl: "netFlix.png",
    title: "FlixGPT - Your AI-powered Netflix Movie Recommender ",
    description:
      "An AI-powered movie recommendation app that helps users find the perfect movie or show based on their search. Powered by GPT, it delivers smart, context-aware suggestions tailored to your mood and interests.",
    githubUrl: "https://github.com/aman-singh78/netflix-gpt",
    liveUrl: "#",
    technologies: ["React", "Tailwind", "Node.js"],
  },
  {
    imageUrl: "apiRate.webp",
    title: "API Rate limiter",
    description:
      "A full-stack solution designed to prevent abuse and ensure fair usage of system resources by limiting the number of requests a user can make within a specified timeframe. Built using Express.js and middleware like express-rate-limit, it efficiently manages incoming traffic, protecting the API from DDoS attacks, brute-force attempts, and excessive load.",
    githubUrl: "https://github.com/aman-singh78",
    liveUrl: "#",
    technologies: ["React", "Redux", "Express", "Redis"],
  },
  {
    imageUrl: "devTinder.jpeg",
    title: "DevChain - Your Developer Social Chain Starts Here",
    description:
      "DevChain is a developer-focused networking platform where coders, engineers, and tech enthusiasts can connect, collaborate, and chat in real-time. Whether you're looking to build your network, find collaborators for projects, or simply talk tech, DevChain provides a seamless space to grow togetherSend connection requests, start conversations, and be part of a global community of developers — all in one place.",
    githubUrl: "https://github.com/aman-singh78/devTinder",
    liveUrl: "https://github.com/aman-singh78/devTinder",
    technologies: ["React.js", "Tailwind", "Framer Motion"],
  },
  {
    imageUrl: "portfolio.png",
    title: "3D Developer Portfolio",
    description:
      "Our 3D Developer Portfolio redefines traditional portfolios by incorporating an interactive 3D model that closely resembles the developer, offering a next-level immersive experience. Built with React.js, Three.js, and Tailwind CSS, this portfolio showcases skills, projects, and achievements in a visually stunning and engaging way.",
    githubUrl: "https://github.com/aman-singh78/myportfolio",
    liveUrl: "#",
    technologies: ["Three.js", "React.js", "Framer Motion"],
  },
];

function Projects() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "3rem",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        className="flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-12" variants={headerVariants}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Projects
          </h2>
          <motion.div
            className="h-1 bg-green-500 mx-auto mt-4"
            variants={underlineVariants}
          />
        </motion.div>

        {/* Project Cards Grid - Responsive layout from 1 to 3 columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <ProCard key={index} {...project} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Projects;
