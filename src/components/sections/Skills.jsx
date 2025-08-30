import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { IoLogoNodejs } from "react-icons/io";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase, SiReactrouter } from "react-icons/si";
import SubHeader from "../ui/SubHeader";

const skillsData = [
  { name: "HTML", icon: AiOutlineHtml5, color: "#E54F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#0C73B8" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#0EA5E9" },
  { name: "JS", icon: IoLogoNodejs, color: "#E7A020" },
  { name: "React", icon: FaReact, color: "#28A9E0" },
  { name: "React Router", icon: SiReactrouter, color: "gray" },
  { name: "Firebase", icon: SiFirebase, color: "#ff4a17" },
  { name: "Next.js", icon: RiNextjsLine, color: "#000000" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills-bg flex items-center justify-center lg:py-24 py-16"
    >
      <div className="px-4 xs:px-12 md:px-28 space-y-10">
        {/* Header */}
        <div className="H1-U text-brand1 flex justify-center items-center">
          <p className="w-[50vw] h-0.5"></p>
          <p className="text-center">&lt;/&gt;</p>
        </div>

        {/* Subheader */}
        <SubHeader title={"Skills"} details={"I am striving to never stop learning and improving"}/>

        {/* Web Development Card */}
        <div className="flex flex-col justify-center items-center px-5 py-10 rounded-2xl bg-brand2 space-y-2.5 border-l-8 border-[#0C73B8] mx-auto">
          <FiMonitor className="text-bg2 text-4xl" />
          <p className="Menu-M text-bg2">web development</p>
          <p className="Para-M text-bg1 flex flex-wrap gap-1">
            {skillsData.map((skill, idx) => (
              <span key={idx}>{skill.name}</span>
            )).reduce((prev, curr) => [prev, "·", curr])}
          </p>
        </div>

        {/* Skills Icons */}
        <div className="flex flex-wrap justify-center items-center gap-10 lg:pt-10">
          {skillsData.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div key={idx} className="flex flex-col justify-center items-center gap-2.5">
                <div
                  className="w-20 h-20 rounded-full text-white flex justify-center items-center"
                  style={{ backgroundColor: skill.color }}
                >
                  <Icon className="text-2xl" />
                </div>
                <p
                  className={skill.color === "gray" ? "text-white" : ""}
                  style={{ color: skill.color }}
                >
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
