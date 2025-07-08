import React, { useState } from "react";
import { BiBriefcase, BiDownload, BiMenu, BiX } from "react-icons/bi";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const resumeLink =
    "https://drive.google.com/file/d/1X6U1Ams240mZKiKUbP5SJmAvyvuFOmov/view?usp=drivesdk";

  const email = "amansinghthapa33@gmail.com";

  return (
    <nav
      className="h-[10vh] w-full flex items-center justify-between px-6 sm:px-8 md:px-12 
fixed top-0 z-50 bg-white/30 backdrop-blur-lg shadow-md"
    >
      <div className="text-2xl font-bold text-emerald-600">Portfolio</div>

      <div className="block md:hidden ">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-2xl"
        >
          {mobileMenuOpen ? <BiX /> : <BiMenu />}
        </button>
      </div>

      {/* Navigation Links - Visible on medium screens and up */}
      <div className="sm:hidden md:flex justify-center items-center rounded-full bg-[#F2F2F2] px-4 py-3">
        {["Home", "About", "Skills", "Experience"].map((elem, index) => (
          <a
            href={`#${elem.toLowerCase()}`}
            key={index}
            className="px-2 lg:px-5"
          >
            <h1 className="opacity-90 font-normal whitespace-nowrap">{elem}</h1>
          </a>
        ))}
      </div>

      {/* Hire me Button */}
      <div className="sm:hidden md:flex justify-center items-center gap-3 transition-all duration-300 ease-in-out rounded-full ">
        <div className="sm:hidden md:block border-1 rounded-full border-gray-500/30">
          <a href={`mailto:${email}?subject=Job%20Opportunity`}>
            <button className="flex justify-center items-center gap-1 hover:text-gray-900 p-2 rounded-full hover:bg-emerald-200/70 hover:cursor-pointer transition-all duration-300 ease-in-out">
              <span>
                <BiBriefcase />
              </span>
              <span>Hire me</span>
            </button>
          </a>
        </div>

        <div className="sm:hidden md:block border-1 rounded-full border-gray-500/30">
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            download="resume.pdf"
          >
            <button className="flex justify-center items-center gap-1 hover:text-gray-900 p-2 rounded-full hover:bg-emerald-200/70 hover:cursor-pointer transition-all duration-300 ease-in-out">
              <span>
                <BiDownload />
              </span>
              <span>Resume</span>
            </button>
          </a>
        </div>
      </div>

      {/* Mobile Menu - Always shown on small screens when menu is open */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-2xl"
          >
            <BiX />
          </button>

          <div className="flex flex-col items-center gap-6">
            {/* Navigation Links */}
            {["Home", "About", "Skills", "Experience"].map((elem, index) => (
              <a
                href={`#${elem.toLowerCase()}`}
                key={index}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl py-2"
              >
                <h1 className="opacity-90 font-normal">{elem}</h1>
              </a>
            ))}

            {/* Buttons */}
            <div className="flex flex-col gap-4 mt-6">
              <a href=""></a>
              <button className="flex justify-center items-center gap-1 hover:text-gray-900 p-2 rounded-full hover:bg-emerald-200/70 hover:cursor-pointer transition-all duration-300 ease-in-out">
                <span>
                  <BiDownload />
                </span>
                <span>Resume</span>
              </button>

              <button className="flex justify-center items-center gap-1 hover:text-gray-900 p-2 rounded-full hover:bg-emerald-200/70 hover:cursor-pointer transition-all duration-300 ease-in-out border border-gray-600/30">
                <span>
                  <BiBriefcase />
                </span>
                <span>Hire me</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
