import React from "react";

function Navbar() {
  return (
    <div className="h-[10vh] w-full flex items-center justify-center">
      <div className="flex gap-20 rounded-full bg-[#F2F2F2] px-6 py-3">
        {["Home", "About", "Skills", "Experience"].map((elem, index) => (
          <h1 className="opacity-90 font-normal " key={index}>
            {elem}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
