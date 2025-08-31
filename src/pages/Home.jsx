import { SideNav } from "../components/common/SideNav";
import { sections } from "../constants/sections";
import AboutMe from "../components/sections/AboutMe";
import Skills from "../components/sections/Skills";
import Works from "../components/sections/Works";
import Contact from "../components/sections/Contact";
import Gellery from "../components/sections/Gellery/Gellery";
import Blog from "../components/sections/Blog";


const Home = () => {
  return (
    <div className="bg-bg1 text-gray-200 font-sans">
      <SideNav sections={sections} />

      <main className="pt-16">
        <Gellery />
        <AboutMe />
        <Skills />
        <Works />
        <Blog />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
