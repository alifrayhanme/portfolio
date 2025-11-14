import React from "react";
import { BsDownload } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { TiShoppingBag } from "react-icons/ti";

const ProfileCard = () => {
  return (
    <div
      style={{ boxShadow: "-4px -4px 0 0 #12f7d6" }}
      className="w-[280px] xs:w-[320px] h-[520px] border-4 border-white rounded-br-[150px] rounded-tl-[150px] p-5"
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="h-24 w-24 ">
          <img
            className="h-full w-full rounded-full border-2 border-brand1"
            src="./profile.jpg"
            alt="profile"
          />
        </div>
        <div>
          <h2 className="Logo-M text-white">Alif</h2>
          <h3 className="Code-M text-white">Mern Stack Developer</h3>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div>
          <a
            className="flex items-center gap-4"
            href="mailto:alifrayhanme@gmail.com"
          >
            <MdOutlineEmail className="text-brand1" />
            <p className="Code-M text-white">alifrayhan401@gmail.com</p>
          </a>
        </div>
        <div>
          <a
            className="flex items-center gap-4"
            href="https://maps.app.goo.gl/ogwbJVtrJEbY4qZa6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLocationOutline className="text-brand1" />
            <p className="Code-M text-white">Bangladesh</p>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <TiShoppingBag className="text-brand1" />
          <p className="Code-M text-white">Full-time / Freelancer</p>
        </div>
        <div>
          <a
            className="flex items-center gap-4"
            href="https://alifrayhan.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLink className="text-brand1" />
            <p className="Code-M text-white">www.alifrayhan.com</p>
          </a>
        </div>
        <div className="flex items-center gap-4"></div>
      </div>
      <div className="Code-M flex flex-wrap gap-2.5">
        <p className="bg-brand1 px-1 rounded-lg">React.js</p>
        <p className="bg-brand1 px-1 rounded-lg">Next.js</p>
        <p className="bg-brand1 px-1 rounded-lg">MongoDB</p>
        <p className="bg-brand1 px-1 rounded-lg">Mongoose</p>
        <p className="bg-brand1 px-1 rounded-lg">Node.js</p>
        <p className="bg-brand1 px-1 rounded-lg">Express.js</p>
      </div>
      <a href="./Resume.pdf" download="Alif_Rayhan_CV.pdf">
        <button className="flex justify-center items-center gap-4 bg-white px-4 py-2.5 rounded-full mt-5 cursor-pointer">
          <p className="Button-U text-bg1">Download CV</p>
          <BsDownload />
        </button>
      </a>
    </div>
  );
};

export default ProfileCard;
