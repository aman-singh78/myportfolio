import React from "react";

const r = ["/", "/about", "/skills", "/experience"];

function Navbar() {
  return (
    <div className="h-[10vh] w-full flex items-center justify-center">
      <div className="flex gap-20 rounded-full bg-[#F2F2F2] px-6 py-3">
        {["Home", "About", "Skills", "Experience"].map((elem, index) => (
          <a href={`#${elem.toLowerCase()}`} key={index}>  {/* Dynamic href */}
            <h1 className="opacity-90 font-normal">{elem}</h1>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
