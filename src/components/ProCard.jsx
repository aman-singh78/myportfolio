import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
const ProCard = (props) => {
  return (
    <div className="h-[25vw] w-[80vw] flex bg-[#F2F2F2] rounded-xl overflow-hidden shadow-xl">
      <div className="h-full w-[40%] flex items-center">
        <img
          className="w-full h-[20vw]"
          src={props.imageUrl}
          alt=""
        />
      </div>
      <div className="px-4 py-4 w-[60%]">
        <h1 className="font-semibold text-2xl leading-8 mb-1">
          {props.title}
        </h1>
        <span className="font-medium text-sm leading-5 mr-4 px-1 py-0.3 rounded-md bg-[#DCFCE6]">
          {props.technologies[0]}
        </span>
        <span className="font-medium text-sm leading-5 mr-4 px-1 py-0.3 bg-[#DCFCE6] rounded-md">
        {props.technologies[1]}
        </span>
        <span className="font-medium text-sm leading-5 px-1 py-0.3 bg-[#DCFCE6] rounded-md  ">
        {props.technologies[2]}
        </span>
        <p className="mt-2 font-normal text-lg leading-7">
          {props.description}
        </p>
        <div className="flex px-4 h-[20%] w-full items-center gap-6 justify-end">
        
        <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-4xl" />
          </a>
          <a href={props.liveUrl} target="_blank" rel="noopener noreferrer">
  <MdLiveTv className="text-4xl" />
</a>
        </div>
      </div>
    </div>
  );
};

export default ProCard;
