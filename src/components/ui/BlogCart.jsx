import React from "react";
import { Link } from "react-router";

const BlogCart = ({ blog }) => {
  return (
    <div className="border-t-2 border-white py-10 grid sm:grid-cols-3 items-start gap-5 transition-all duration-500 h-[350px] sm:h-[400px]">
      {/* Image */}
      <div className="w-full h-full sm:col-span-1 sm:py-10 overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={blog.cover}
          alt={blog.title}
        />
      </div>

      {/* Content */}
      <div className="sm:col-span-2 space-y-5 sm:p-10 overflow-hidden">
        <h2 className="H2-U text-brand1 line-clamp-2">{blog.title}</h2>
        <p className="Para-U text-white line-clamp-4">{blog.excerpt}</p>
        <div className="text-brand1">
          <Link to={`/blog/${blog.slug}`} className="border-b-2 border-white">
            Read More
          </Link>
          <span>&gt;&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
