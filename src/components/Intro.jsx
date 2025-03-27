import React from "react";
import { RiDownloadLine } from "react-icons/ri";
function Intro() {
  return (
    <div>
      <h1 className="text-6xl font-bold">Hi ,</h1>
      <h5 className="text-xl opacity-50">My name is</h5>
      <h1 className="text-4xl font-bold ">Sumit Singh Bora</h1>
      <h2 className="ml-10 mt-3 text-xl font-bold opacity-50">
        a Creative Web Developer
      </h2>
      <button className="flex items-center gap-2 border-2 rounded-full px-6 py-2 bg-[#F2F2F2] mt-8 ml-16">
        Resume <RiDownloadLine />
      </button>
    </div>
  );
}

export default Intro;
