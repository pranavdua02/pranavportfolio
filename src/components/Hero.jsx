import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import toon from "../assets/toon.jpg";

const scrollToSection = (sectionId) => {
  // Handle section IDs that may have # prefix
  const id = sectionId.replace("#", "");
  const element = document.getElementById(id) || document.querySelector(`[id*="${id}"]`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Hero() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 lg:px-12 py-12 lg:py-0">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-16">
        {/* Left Side - Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-start justify-center space-y-6 lg:space-y-8">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="w-full"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-indigo-900 mb-4 leading-tight">
              Pranav Dua
            </h1>
            <div className="text-2xl lg:text-4xl font-semibold text-indigo-600 mb-6">
              <Typewriter
                words={[
                  "Software Engineer",
                  "Competitive Programmer",
                  "Tech Enthusiast",
                ]}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
                loop={true}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed"
          >
            Crafting code that brings ideas to life, one algorithm at a time.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <button
              onClick={() => scrollToSection("#projects")}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold text-base lg:text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-200/50"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-4 bg-slate-50 border-2 border-slate-200 text-slate-700 rounded-lg font-semibold text-base lg:text-lg hover:bg-slate-100 hover:border-slate-300 transition-all"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.2,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="w-full lg:w-[45%] flex justify-center lg:justify-end items-start mt-8 lg:mt-0 lg:-mt-16"
        >
          <div className="relative">
            <img
              className="h-72 w-72 lg:h-[500px] lg:w-[500px] rounded-full object-cover shadow-2xl"
              src={toon}
              alt="Pranav Dua"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}