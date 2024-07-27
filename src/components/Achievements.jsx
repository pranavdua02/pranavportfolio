import React from "react";
import { AiOutlineLink, AiFillGithub, AiFillCheckSquare, AiFillDropboxSquare, AiFillGoogleCircle, AiFillCheckCircle } from "react-icons/ai";
import GS from "../assets/GirlScript.png";
import BO from "../assets/BajajOhm.png";
import ZK from "../assets/Zorko.png";

const Cards = ({ image, name, tech, link, github, description }) => {
  return (
    <div className=" bg-white flex flex-1 flex-col items-center mx-2 my-3 p-4 rounded-[20px] border shadow-md">
      <img
        className=" object-shrink rounded-2xl border-2 border-gray-200"
        src={image}
        alt=""
      />
      <div className="flex w-full flex-col mt-5 p-2">
        <div className="flex flex-1 justify-between">
          <h1 className="text-3xl font-bold ">{name}</h1>
          <div className="flex space-x-2">
            <a href={github} target="_blank">
              <AiFillGithub className="text-3xl text-[#6e07f3] hover:text-indigo-700 cursor-pointer" />
            </a>
            <a href={link} target="_blank">
              <AiOutlineLink className="text-3xl text-[#6e07f3] hover:text-indigo-700 cursor-pointer" />
            </a>
          </div>
        </div>
        <span className="text-[#6e07f3] text-xl">{tech}</span>
      </div>
      <p className="text-lg text-gray-500 p-2 mt-3">{description}</p>
    </div>
  );
};

const Achievements = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-[#6e07f3] h-[45vh] flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white pt-[6rem] pb-[1rem] lg:pt-[10rem]">
        Achievements
        </h1>
        <p className="text-white lg:text-xl font-medium px-2 py-2 lg:px-[2.4rem] lg:py-[2.4rem] w-full lg:w-[60rem] xl:w-[70rem] text-center">
        Throughout my career, I’ve actively participated in a diverse range of hackathons and competitions, which have honed my skills and expanded my horizons.
        </p>
      </div>
      <div className="relative flex flex-col items-center z-0">
        <div className="h-[20vh] w-full absolute bg-[#6e07f3] -z-10" />
        <div className="w-[90%] flex flex-col lg:flex-row justify-center">
          <Cards
            image={GS}
            name="GSSoC'24"
            tech="Open Source | MERN | Machine Learning | Version Control"
            link="https://gssoc.girlscript.tech/"
            github="https://github.com/pranavdua02"
            description="Active participation in GSSoC'24 involved working extensively with the MERN stack and machine learning for open source contributions. This included leveraging version control systems for efficient code management and collaboration. Contributions were made through submitting and reviewing pull requests, which facilitated the integration of new features and improvements. This experience enhanced technical skills and provided a deeper understanding of teamwork and open source development practices."
          />
          <Cards
            image={ZK}
            name="Hack The Tank 2.0"
            tech="React Native | Expo | Twillo | GoogleMaps"
            github="https://devfolio.co/projects/zorko-companion-app-dba0"
            link="https://devfolio.co/projects/zorko-companion-app-dba0"
            description="
In the HTT 2.0 Hackathon, my team ranked among the top 30 out of over 700 registered teams. We focused on designing an app using Expo for the Shark Tank-renowned startup, Zorko. This accomplishment highlighted our ability to develop innovative solutions under pressure and showcased our technical skills and teamwork in a highly competitive environment."
          />
          <Cards
            image={BO}
            name="Bajaj's Ohm Challenge"
            tech="Electric Vehicle | Simulation | BMS "
            link="https://drive.google.com/file/d/1PEkBRdtBYe6KTeSHi4g3DhcXjXXGWpkO/view?usp=drive_link"
            github="https://github.com/dibyam-jalan27/Palak_Pallette"
            description="Emerging as the campus winners in Bajaj's OHM Challenge, the team leveraged extensive knowledge of EV simulation and its essentials. The comprehensive understanding of electric vehicle dynamics, battery management, and simulation tools enabled the development of innovative solutions that impressed the judges. This achievement highlighted the team's technical expertise and ability to work effectively in a competitive environment."
          />
        </div>
      </div>
      <div className="flex item-center justify-center my-20">
        <a href="https://drive.google.com/drive/folders/1DpvtEeaSAUIjIK4j0f42JdJ0dt-vUnDm?usp=drive_link" target="_blank">
          <button className="flex text-[11px] lg:text-[22px] border-2 border-indigo-400 text-indigo-400 px-3 lg:px-5 py-2 lg:py-3 rounded-full hover:text-white hover:bg-indigo-400">
            <AiFillCheckCircle className="text-lg lg:text-3xl mr-2" />
            Check out more Achievements Here
          </button>
        </a>
      </div>
    </div>
  );
};

export default Achievements;
