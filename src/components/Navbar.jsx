import React, { useState } from "react";
import { BiBriefcase, BiDownload, BiMenu, BiX } from "react-icons/bi";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1XtYXOqZqvDMj5af-UGM8xO2kDS6qVkNo";
  const email = "amansinghthapa33@gmail.com";

  return (
    <nav className="relative z-50">
      {/* Top Bar */}
      <div className="h-[10vh] w-full flex items-center justify-between px-6 sm:px-8 md:px-12 fixed top-0 bg-white/30 backdrop-blur-lg shadow-md">
        <div className="text-2xl font-bold text-emerald-600">Portfolio</div>

        {/* Hamburger */}
        <div className="block md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-2xl"
          >
            {mobileMenuOpen ? <BiX /> : <BiMenu />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="sm:hidden md:flex justify-center items-center rounded-full bg-[#F2F2F2] px-4 py-3">
          {["Home", "About", "Skills", "Experience"].map((elem, index) => (
            <a
              href={`#${elem.toLowerCase()}`}
              key={index}
              className="px-2 lg:px-5"
            >
              <h1 className="opacity-90 font-normal whitespace-nowrap">
                {elem}
              </h1>
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="sm:hidden md:flex justify-center items-center gap-3">
          <a
            href={`mailto:${email}?subject=Job%20Opportunity`}
            className="border rounded-full border-gray-300 p-2 hover:bg-emerald-200/70 transition"
          >
            <div className="flex items-center gap-1">
              <BiBriefcase />
              <span>Hire me</span>
            </div>
          </a>
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-full border-gray-300 p-2 hover:bg-emerald-200/70 transition"
          >
            <div className="flex items-center gap-1">
              <BiDownload />
              <span>Resume</span>
            </div>
          </a>
        </div>
      </div>

      {/* ✅ Mobile Fullscreen Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-3xl"
          >
            <BiX />
          </button>

          <div className="flex flex-col items-center gap-6">
            {["Home", "About", "Skills", "Experience"].map((elem, index) => (
              <a
                href={`#${elem.toLowerCase()}`}
                key={index}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl text-gray-800 hover:text-emerald-600"
              >
                {elem}
              </a>
            ))}

            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full hover:bg-emerald-200"
            >
              <BiDownload />
              <span>Resume</span>
            </a>

            <a
              href={`mailto:${email}?subject=Job%20Opportunity`}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full hover:bg-emerald-200"
            >
              <BiBriefcase />
              <span>Hire me</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
