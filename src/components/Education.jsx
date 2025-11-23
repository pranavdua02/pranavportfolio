import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{
          y: 50,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
        }}
      >
        <h3 className="capitalize font-bold text-lg lg:text-2xl">{type}</h3>
        <span className="capitaize font-semibold text-indigo-600/75">
          {time} | {place}
        </span>
        <p className="font-medium text-sm lg:text-md w-full">{info}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="flex flex-col items-center pb-32 w-full">
      <h2 className="pt-20 text-5xl font-bold text-indigo-900 mb-20">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-indigo-800 origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor of Technology in Electrical Engineering"
            time="2021-2025"
            place="SVNIT Surat"
            info="Completed a Bachelor of Technology (B.Tech) in Electrical Engineering (EE) at SVNIT Surat, emphasizing a strong foundation in cutting-edge technology and problem-solving skills."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
