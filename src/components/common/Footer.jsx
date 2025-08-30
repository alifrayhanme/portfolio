import { FaGithub, FaTwitter } from "react-icons/fa";
import { RiDiscordLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-bg2 w-full px-4 xs:px-8 md:px-20">
      <div className="flex justify-around items-center py-3 md:py-5 border-t border-gray">
        {/* Left: Copyright */}
        <p className="text-sm text-brand1">
          © {new Date().getFullYear()} Alif Rayhan. All rights reserved.
        </p>

        {/* Right: Social Links */}
        <div className="flex gap-5 text-lg text-white">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
