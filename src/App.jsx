import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Experience from "./components/Experience.jsx";
import Profiles from "./components/Profiles.jsx";

function App() {
  return (
    <div className="flex flex-col justify-center w-full">
      <Header />
      <section id="#hero">
        <Hero />
      </section>
      <section id="#about">
        <About />
      </section>
      <section id="#skills">
        <Skills />
      </section>
      <section id="#experience">
        <Experience />
      </section>
      <section id="#profiles">
        <Profiles />
      </section>
      <section id="#education">
        <Education />
      </section>
      <section id="#projects">
        <Projects />
      </section>
      <section id="#achievements">
        <Achievements />
      </section>
      <section id="#contact">
        <Contact />
      </section>
      <section id="#footer">
        <Footer />
      </section>{" "}
    </div>
  );
}

export default App;
