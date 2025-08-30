import { useEffect, useState } from "react";
import SubHeader from "../ui/SubHeader";
import { Link } from "react-router";

const blogData = [
  {
    id: 1,
    title: "What does it take to become a web developer?",
    description:
      "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet…",
    image: "./blog1.png",
    link: "#",
  },
  {
    id: 2,
    title: "The Future of JavaScript Frameworks",
    description:
      "JavaScript frameworks are evolving rapidly. Let's dive into which frameworks might dominate in the coming years…",
    image: "./blog1.png",
    link: "#",
  },
  {
    id: 3,
    title: "Business Lessons from Startups",
    description:
      "Startups teach us a lot about agility and innovation. Here are key business lessons learned…",
    image: "./blog1.png",
    link: "#",
  },
];

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const blog = blogData[currentIndex];

  return (
    <section
      id="blogs"
      className="relative flex items-center justify-center lg:py-24 py-16"
    >
      <div className="px-4 xs:px-12 md:px-28 space-y-10 w-full">
        {/* Header */}
        <SubHeader
          title="Blogs"
          details="My thoughts on technology and business, welcome to subscribe"
        />

        {/* Fixed Container */}
        <div className="border-t-2 border-b-2 border-white py-10 grid sm:grid-cols-3 items-start gap-5 transition-all duration-500 h-[350px] sm:h-[400px]">
          {/* Image */}
          <div className="w-full h-full sm:col-span-1 sm:py-10 overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={blog.image}
              alt={blog.title}
            />
          </div>

          {/* Content */}
          <div className="sm:col-span-2 space-y-5 sm:p-10 overflow-hidden">
            <h2 className="H2-U text-brand1 line-clamp-2">{blog.title}</h2>
            <p className="Para-U text-white line-clamp-4">{blog.description}</p>
            <div className="text-brand1">
              <Link to={"/"} className="border-b-2 border-white">
                Read More
              </Link>
              <span>&gt;&gt;</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-5">
          <Link
            to={"/"}
            className="border-2 border-brand1 bg-brand1 text-bg2 Button-U rounded-full px-2.5 py-1.5"
          >
            View More
          </Link>
          <Link
            to={"/"}
            className="border-2 border-brand1 text-white Button-U rounded-full px-2.5 py-1.5"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
