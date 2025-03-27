import React from "react";
import ProCard from "./ProCard";
function Projects() {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-6xl font-bold top-0">Projects</h1>
      <ProCard />
      <ProCard />
    </div>
  );
}

export default Projects;
