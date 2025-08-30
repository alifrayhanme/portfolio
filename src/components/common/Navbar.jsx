import { useState } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RiDiscordLine } from "react-icons/ri";
import { Link, NavLink } from "react-router";
import SearchBox from "../ui/SearchBox";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);

  return (
    <nav className="bg-bg1 fixed top-0 w-full z-40 px-4 xs:px-8 md:px-20">
      <div className="flex justify-between items-center py-3 md:py-5 border-b border-gray">
        <Link to="/" className="Media-M lg:Logo-M">
          <span className="text-brand1">&lt;h1/&gt;</span>
          <span className="text-white">AlifRayhan</span>
        </Link>
        <ul className="Media-M md:Menu-M text-white flex justify-center items-center gap-3 md:gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "text-brand1" : ""}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) => isActive ? "text-brand1" : ""}
            >
              Blogs
            </NavLink>
          </li>
          <li className="hidden md:flex">
            <SearchBox />
          </li>

          <li className="md:hidden mt-1 relative">
            <div
              onClick={() => {
                setShowInput(!showInput);
              }}
            >
              {showInput ? (
                <>
                  <RxCross2 className="text-white" />
                </>
              ) : (
                <>
                  <IoSearch className="text-white" />
                </>
              )}
            </div>

            {showInput && (
              <div className="absolute top-8 right-0 ">
                <SearchBox />
              </div>
            )}
          </li>

          <li className="hidden md:flex">
            <a
              href="https://www.facebook.com/alifrayhanme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-brand1" />
            </a>
          </li>
          <li className="hidden md:flex">
            <a
              href="https://discord.com/users/alifrayhanme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiDiscordLine className="text-brand1" />
            </a>
          </li>
          <li className="hidden md:flex">
            <a
              href="https://github.com/alifrayhanme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-brand1" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
