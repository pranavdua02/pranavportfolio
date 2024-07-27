import React from "react";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import OJ from "../assets/Online-Judge.png";
import PP from "../assets/Palak-Pallete.png";
import Di from "../assets/Discord.png";

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

const Projects = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-[#6e07f3] h-[45vh] flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white pt-[6rem] pb-[1rem] lg:pt-[10rem]">
          Projects
        </h1>
        <p className="text-white lg:text-xl font-medium px-2 py-2 lg:px-[2.4rem] lg:py-[2.4rem] w-full lg:w-[60rem] xl:w-[70rem] text-center">
        Here is a showcase of my projects, demonstrating my skills and innovations across various challenges and contributions.
        </p>
      </div>
      <div className="relative flex flex-col items-center z-0">
        <div className="h-[20vh] w-full absolute bg-[#6e07f3] -z-10" />
        <div className="w-[90%] flex flex-col lg:flex-row justify-center">
          <Cards
            image={OJ}
            name="CasePy Hub"
            tech="Typescript | Postgresql | Stripe | Uploadthing | Nextjs14 | Kinde-auth"
            link="https://ecommerce-iphone.vercel.app/"
            github="https://github.com/pranavdua02/Ecommerce_iphone"
            description="Welcome to CasePy Hub, your premier site for custom phone cases! Built with Next.js 14, our site offers a stunning landing page, unique artworks, and a sleek UI. Enjoy direct purchases, a customizable configurator, and secure Kinde authentication. Manage orders with our admin dashboard and drag-and-drop uploads. Powered by Stripe for payments, Prisma ORM, and Neon.tech PostgreSQL, and deployed on Vercel for top performance. Discover all this and more at CasePy Hub!"
          />
          <Cards
            image={Di}
            name="Study Notion"
            tech=" AWS | MERN | Edtech | Cloudinary | JWT-Auth | Bycryptjs"
            github="https://github.com/pranavdua02/StudyNotion"
            link="https://studynotion-frontend.vercel.app"
            description="
StudyNotion is a comprehensive ed-tech platform built with the MERN stack (ReactJS, NodeJS, MongoDB, ExpressJS). It enables users to create, consume, and rate educational content, providing an engaging learning experience for students and a global showcase for instructors. The platform features a well-structured architecture, an interactive front-end, a robust back-end, and efficient APIs. Deployment is streamlined with cloud hosting, and rigorous testing ensures quality. Future enhancements are planned to improve functionality and user experience."
          />
          <Cards
            image={PP}
            name="S.A.D.A.K"
            tech="Python | Docker | Kubernetes | Computer-Vision | RCNN | Yolov8"
            link="https://sadakapp.streamlit.app/"
            github="https://github.com/pranavdua02/S.A.D.A.K"
            description="Object detection-based system using computer vision components leveraging pre-trained models like YOLOv8 and supervision.These models can automatically detect and geo-reference bottlenecks and road congestions from images captured by the onboard cameras in real time, providing actionable insights for smooth and optimized traffic flow."
          />
        </div>
      </div>
      <div className="flex item-center justify-center my-20">
        <a href="https://github.com/pranavdua02" target="_blank">
          <button className="flex text-[11px] lg:text-[22px] border-2 border-indigo-400 text-indigo-400 px-3 lg:px-5 py-2 lg:py-3 rounded-full hover:text-white hover:bg-indigo-400">
            <AiFillGithub className="text-lg lg:text-3xl mr-2" />
            Check out more Projects Here
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
