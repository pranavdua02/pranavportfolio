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
        <p className="font-medium text-sm lg:text-md w-full whitespace-pre-line">{info}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="flex flex-col items-center pb-32 w-full">
      <h2 className="pt-20 text-5xl font-bold text-indigo-900 mb-20">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-indigo-800 origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Software Engineer"
            time="July 2025 - Present"
            place="Searce, Pune"
            info={`• Migrating legacy AngularJS user interface modules to Angular 18, improving performance and user experience.
                    • Developed feedback dashboard using SendGrid and Celery for automated admin email notifications, increasing response efficiency.
                    • Implemented RAG-based multi-model chatbot with sentence transformer embeddings and vector DB for similarity analysis, enhancing product knowledge, audit policy access, and database-driven information retrieval.
                    • Automated user access review process using Selenium for web scraping, Pandas for report processing, and IMAP/SMTP for Gmail-based report forwarding, reducing manual effort.
                    • Integrated SonarQube into GitLab CI/CD pipeline, identifying and resolving critical code vulnerabilities, improving code quality.`}
          />
            <Details
            type="Software Engineer Intern"
            time="January 2025 - July 2025"
            place="Searce, Pune"
            info={`• Developed PayAlert and Self Service modules for Invoize O2C tool, streamlining accounts receivable processes.
                    • Automated vendor email notifications via PayAlert, integrating Stripe payment gateway, reducing payment delays by 25%.
                    • Built Self Service dashboard with 30-60-90 day dues analysis, improving cash flow visibility and cutting DSO by 15%.`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
