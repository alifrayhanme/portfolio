import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const IntroSection = () => {
  return (
    <>
      <div className="py-10">
        <p className="Code-M text-brand1 text-start pb-1.5">&lt;h1&gt;</p>
        <h2 className="H2-U text-white text-start pl-3">
          Hey <br /> I'm <span className="text-brand1">Alif</span>
          <br />
          MERN Stack Developer
          <span className="Code-M text-brand1 pl-2">&lt;h1/&gt;</span>
        </h2>
      </div>
      <div>
        <p className="Code-M text-brand1 pb-2.5 text-start">&lt;p&gt;</p>
        <p className="Para-M text-white pl-5 text-start">
          I help business grow by crafting amazing web experiences. If you’re
          looking for a developer that likes to get stuff done,
        </p>
        <p className="Code-M text-brand1 pt-2.5 text-start">&lt;p/&gt;</p>
      </div>
      <div className="flex items-center justify-start gap-4">
        <p className="Menu-M text-brand1 text-start py-4 pl-5">let’s talk</p>
        <a href="mailto:alifrayhanme@gmail.com">
          <div className="bg-gray p-1.5 rounded-full">
            <MdOutlineEmail className="text-brand1" />
          </div>
        </a>
      </div>
    </>
  );
};

export default IntroSection;
