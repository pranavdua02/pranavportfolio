import React from "react";
import { BsMailbox2 } from "react-icons/bs";
export default function Contact() {
  return (
    <div className="flex flex-col items-center relative w-full">
      <div className="absolute -z-20 w-full h-full">
        <div className="h-[10vh]" />
        <div className="bg-[#6e07f3] w-full h-full" />
      </div>
      <div className="px-5 py-8 w-[90%] lg:py-16 flex items-center justify-evenly flex-col space-y-8 lg:flex-row rounded-[20px] bg-[#141c3a]">
        <h1 className="flex-1 text-3xl text-center font-bold text-white">
          Start a Project
        </h1>
        <p className="flex-1 text-center text-white text-xl font-semibold ">
          Interested in working together? We should queue up a time to chat.
          I'll buy the coffee.
        </p>
        <a
          className="flex-1 flex items-center justify-center"
          href="mailto:duapranav11@gmail.com"
        >
          <button className="flex text-[22px] border-2 border-[#5be9b9] text-[#5be9b9] px-5 py-3 rounded-full hover:text-[#141c3a] hover:bg-[#5be9b9]">
            Mail me at
            <BsMailbox2 className="ml-2 h-8 w-8" />
          </button>
        </a>
      </div>
    </div>
  );
}
