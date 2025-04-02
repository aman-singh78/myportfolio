import React from "react";

const Experience = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Experience heading */}
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-10">Experience</h1>
      
      {/* Experience Container */}
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-4xl bg-[#F2F2F2] rounded-xl shadow-xl p-5 md:p-6 lg:p-8">
        {/* Image Section */}
        <div className="flex flex-col items-center mb-5">
          <img
            className="w-20 h-20 md:w-24 md:h-24 object-contain"
            src="tbiLogo.png"
            alt="Technology Business Incubator Logo"
          />
          <h2 className="mt-3 font-semibold text-sm md:text-base text-center">
            19 Nov 2024 - 23 Feb 2025
          </h2>
        </div>
        
        {/* Text Section */}
        <div className="w-full">
          <h2 className="font-semibold text-base md:text-lg lg:text-xl text-center md:text-left leading-tight mb-4">
            Full Stack Web Development Intern | Technology Business Incubator
          </h2>
          <ul className="mt-3 text-xs md:text-sm lg:text-base space-y-2 md:space-y-3 px-1 md:px-2">
            <li className="flex">
              <span className="mr-2 flex-shrink-0">⦾</span>
              <span>Developed and optimized the frontend of an Employee Management System using React.js, enhancing UI/UX and data visualization, resulting in a 30% faster page load time.</span>
            </li>
            <li className="flex">
              <span className="mr-2 flex-shrink-0">⦾</span>
              <span>Implemented features such as a dashboard, employee profiles, task tracking, and leave management with reusable React components.</span>
            </li>
            <li className="flex">
              <span className="mr-2 flex-shrink-0">⦾</span>
              <span>Learned backend development as well as agile methodologies.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;