import React from "react";
import { motion } from "framer-motion";
import ProCard from "./ProCard";

const projects = [
  {
    imageUrl: "jobPortal.png",
    title: "Naukri Marg - Online Job Portal",
    description: "Our AI-Driven Job Portal is a cutting-edge platform designed to connect job seekers with the right opportunities while helping recruiters find the best talent efficiently. Built with React.js, Node.js, Express, and MongoDB, it integrates Machine Learning (ML) algorithms to enhance the hiring process through personalized job recommendations and intelligent resume screening.",
    githubUrl: "https://github.com/Pawandasila/Job-portal",
    liveUrl: "https://job-portal-five-lime.vercel.app/",
    technologies: ["React", "Tailwind", "Node.js"],
  },
  {
    imageUrl: "apiRate.webp",
    title: "API Rate limiter",
    description: "A full-stack solution designed to prevent abuse and ensure fair usage of system resources by limiting the number of requests a user can make within a specified timeframe. Built using Express.js and middleware like express-rate-limit, it efficiently manages incoming traffic, protecting the API from DDoS attacks, brute-force attempts, and excessive load.",
    githubUrl: "https://github.com/SumitSingh69",
    liveUrl: "#",
    technologies: ["React", "Redux", "Express", "Redis"],
  },
  {
    imageUrl: "empTask.webp",
    title: "Employee Task Management System",
    description: "Our Employee Task Management System is a powerful and intuitive platform designed to simplify task assignment, tracking, and collaboration within an organization. Built using React.js, it ensures seamless task delegation and monitoring, boosting overall productivity.",
    githubUrl: "https://github.com/SumitSingh69/EmployeeTaskManagement",
    liveUrl: "https://github.com/SumitSingh69/EmployeeTaskManagement",
    technologies: ["React.js", "Tailwind", "Framer Motion"],
  },
  {
    imageUrl: "portf.png",
    title: "3D Developer Portfolio",
    description: "Our 3D Developer Portfolio redefines traditional portfolios by incorporating an interactive 3D model that closely resembles the developer, offering a next-level immersive experience. Built with React.js, Three.js, and Tailwind CSS, this portfolio showcases skills, projects, and achievements in a visually stunning and engaging way.",
    githubUrl: "https://github.com/SumitSingh69/portfolio",
    liveUrl: "https://portfolio-two-ivory-20.vercel.app/",
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
        staggerChildren: 0.15
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "3rem",
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Projects</h2>
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
            <ProCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Projects;