import { FaRegPenToSquare } from "react-icons/fa6";
import { FiMonitor } from "react-icons/fi";
import { IoIosCode } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { RiGalleryView2, RiUser3Line } from "react-icons/ri";

export const sections = [
  { id: "gallery", icon: RiGalleryView2, title: "Gallery" },
  { id: "about-me", icon: RiUser3Line, title: "About Me" },
  { id: "skills", icon: IoIosCode, title: "Skills" },
  { id: "works", icon: FiMonitor, title: "Works" },
  { id: "blogs", icon: FaRegPenToSquare, title: "Blogs" },
  { id: "contact", icon: MdOutlineEmail, title: "Contact" },
];