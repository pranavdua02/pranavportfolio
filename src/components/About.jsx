import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import Resume from "../assets/Resume.pdf";

const About = () => {
  return (
    <div className="bg-[#6e07f3] flex flex-col items-center h-[34rem] w-full">
      <h1 className="lg:text-3xl text-lg text-center font-bold text-white pt-[5rem] pb-[1rem] lg:pt-[10rem]">
        Hi, I'm Pranav. Nice to meet you.
      </h1>
      <div className="flex flex-row items-center justify-center">
        <p className="text-white lg:text-2xl text-sm font-semibold px-[2.4rem] py-[2.4rem] w-full lg:w-[60rem] xl:w-[70rem] text-center">
          "Software Engineer at Searce | Turning complex problems into fast, scalable systems with modern web stacks and cloud. C++ competitive programmer at heart, now shipping production code that drives real business impact. Obsessed with clean architecture, performance, and constant learning. Let’s build the future – one efficient line at a time! 🚀"
        </p>
      </div>
      <div className="p-3">
        <a
          href={Resume}
          target="_blank"
          rel="noreferrer"
          download="Pranav Dua Resume"
        >
          <button className="bg-white text-[15px] lg:text-[22px] flex text-indigo-400 px-3 py-2 lg:px-5 lg:py-3 rounded-full hover:text-white hover:bg-[#9893da]">
            Resume
            <BiLinkExternal className="ml-2 h-5 w-5 lg:h-8 lg:w-8" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
