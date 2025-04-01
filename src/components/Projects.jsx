import React from "react";
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
    description: "A full-stack e-commerce website for oOur API Rate Limiter is designed to prevent abuse and ensure fair usage of system resources by limiting the number of requests a user can make within a specified timeframe. Built using Express.js and middleware like express-rate-limit, it efficiently manages incoming traffic, protecting the API from DDoS attacks, brute-force attempts, and excessive load.",
    githubUrl: "https://github.com/yhttps://github.com/SumitSingh69",
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
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-6xl font-bold top-0">Projects</h1>
      {projects.map((project, index) => (
        <ProCard key={index} {...project} />
      ))}
    </div>
  );
}

export default Projects;   
