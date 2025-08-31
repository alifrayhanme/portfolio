import { useEffect, useState } from "react";
import SubHeader from "../ui/SubHeader";
import { Link } from "react-router";

import BlogCart from "../ui/BlogCart";
import { blogData } from "../../data/blogData";

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogData.posts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const blog = blogData.posts[currentIndex];

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

        {/* Blog Container */}
        <BlogCart blog={blog} />

        {/* Buttons */}
        <div className="flex justify-center items-center gap-5">
          <Link
            to={"/blogs"}
            className="border-2 border-brand1 bg-brand1 text-bg2 Button-U rounded-full px-2.5 py-1.5"
          >
            View More
          </Link>
          <Link
            to={"/subscribe"}
            className="border-2 border-brand1 text-white Button-U rounded-full px-2.5 py-1.5 pointer-events-none"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
