import { motion } from "framer-motion";

const scrollToSection = (sectionId) => {
  const id = sectionId.replace("#", "");
  const element = document.getElementById(id) || document.querySelector(`[id*="${id}"]`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Header = () => {
  return (
    <header className="w-full">
      <div className="w-full max-w-7xl mx-auto px-6 py-6 lg:px-12 lg:py-8 flex flex-row items-center justify-between">
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
          className="text-2xl lg:text-3xl font-bold text-indigo-900 -ml-2 lg:-ml-4"
        >
          PD.
        </motion.div>
        <motion.nav
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="flex gap-6 lg:gap-8 items-center"
        >
          <button
            onClick={() => scrollToSection("#about")}
            className="text-sm lg:text-base font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("#experience")}
            className="text-sm lg:text-base font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("#skills")}
            className="text-sm lg:text-base font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("#contact")}
            className="text-sm lg:text-base font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
          >
            Contact
          </button>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
