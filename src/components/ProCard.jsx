import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
const ProCard = () => {
  return (
    <div className="h-[25vw] w-[80vw] flex bg-[#F2F2F2] rounded-xl overflow-hidden shadow-xl">
      <div className="h-full w-[40%] flex items-center">
        <img
          className="w-full h-[20vw]"
          src="https://theavnishkumar.in/_next/image?url=%2Fprojects%2Fjava.png&w=1200&q=75"
          alt=""
        />
      </div>
      <div className="px-4 py-4 w-[60%]">
        <h1 className="font-semibold text-2xl leading-8 mb-1">
          Library Management System
        </h1>
        <span className="font-medium text-sm leading-5 mr-4 px-1 py-0.3 rounded-md bg-[#DCFCE6]">
          JAVA
        </span>
        <span className="font-medium text-sm leading-5 mr-4 px-1 py-0.3 bg-[#DCFCE6] rounded-md">
          MySql
        </span>
        <span className="font-medium text-sm leading-5 px-1 py-0.3 bg-[#DCFCE6] rounded-md  ">
          Netbeans
        </span>
        <p className="mt-2 font-normal text-lg leading-7">
          I created a Library Management System using Java, NetBeans, and MySQL.
          It's like having a virtual librarian to keep track of books, users,
          and lending activities. With a user-friendly interface designed in
          NetBeans, navigating through the system feels intuitive and smooth.
          Behind the scenes, MySQL ensures that all library data is safely
          stored and easily accessible.
        </p>
        <div className="flex px-4 h-[20%] w-full items-center gap-6 justify-end">
          <FaGithub className="text-4xl" />
          <MdLiveTv className="text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default ProCard;
