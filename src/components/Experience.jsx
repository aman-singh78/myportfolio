import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col items-center gap-10">
        <h1 className="text-6xl font-bold top-0">Experience</h1>
    <div className="h-[25vw] w-[80vw] flex bg-[#F2F2F2] rounded-xl overflow-hidden shadow-xl mt-15">
      <div className="h-full w-[40%] flex  flex-col items-center justify-center">
        <img
          className="w-[16vw] h-[14vw]"
          src="tbiLogo.png"
          alt=""
        />
        <h1 className="mt-4 font-semibold">19 Nov 2024 - 23 Feb 2025</h1>
      </div>
      <div className="px-4 py-4 w-[60%]">
        <h1 className="font-semibold text-2xl leading-8 mb-1">
        Full Stack Web Development Intern | Technology Business Incubator
        </h1>
        
          <ul className="mt-7">
          <li className="mt-4">⦾ Developed and optimized the frontend of an Employee Management System using React.js, enhancing UI/UX and data visualization, resulting in a 30% faster page load time.</li>
<li className="mt-4">⦾ Implemented features such as a dashboard, employee profiles, task tracking, and leave management with
reusable React components.</li>
<li className="mt-4">⦾ Learned backend development as well agile methodologies</li>
          </ul>
        
      </div>
    </div>
    </div>
  );
};

export default Experience;
