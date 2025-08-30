/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { sections } from "../../constants/sections";

export const SideNav = () => {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id)
        ),
      { threshold: 0.5 }
    );

    sections.forEach(
      (sec) =>
        document.getElementById(sec.id) &&
        observer.observe(document.getElementById(sec.id))
    );

    return () => observer.disconnect();
  }, []);


  
  return (
    <nav className="fixed top-1/2 left-4 -translate-y-1/2 z-50 bg-bg2 rounded-full shadow-lg hidden md:flex flex-col justify-between items-center w-16 h-[376px] py-2.5 border-2 border-white">
      {sections.map(({ id, icon: Icon }) => (
        <button
          key={id}
          onClick={() =>
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
          }
          className={`w-10 h-10 flex items-center justify-center rounded-full text-2xl transition-all duration-300 ${
            active === id
              ? "bg-white scale-110 shadow-lg"
              : "bg-bg2 hover:bg-bg1 hover:scale-110"
          }`}
        >
          <Icon className={active === id ? "text-bg1" : "text-white"} />
        </button>
      ))}
    </nav>
  );
};
