import { SideNav } from "../components/common/SideNav";
import { sections } from "../constants/sections";
import { scrollToSection } from "../utils/scrollTo";
import AboutMe from "../components/sections/AboutMe";
import Skills from "../components/sections/Skills";
import Works from "../components/sections/Works";
import Blogs from "../components/sections/Blogs";
import Contact from "../components/sections/Contact";
import Gellery from "../components/sections/Gellery/Gellery";

const Home = () => {
  return (
    <div className="bg-bg1 text-gray-200 font-sans">
      <SideNav sections={sections} onScrollTo={scrollToSection} />

      <main className="pt-16">
        <Gellery />
        <AboutMe />
        <Skills />
        <Works />
        <Blogs />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
