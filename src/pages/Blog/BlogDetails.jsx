import { useParams, Link } from "react-router";
import { blogData } from "../../data/blogData";


const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.posts.find((post) => post.slug === slug);

  if (!blog) {
    return (
      <div className="bg-[#1a1a1d] text-gray-200 min-h-screen flex items-center justify-center">
        <p className="text-xl">Blog not found</p>
      </div>
    );
  }
  
  return (
    <div className="bg-bg1 text-white min-h-screen pt-32 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="H2-U text-brand1 mb-6">{blog.title}</h1>
        <div className="flex justify-between text-white Label-U-L py-2.5 mb-6 border-t border-b border-gray">
          <span>Published: {blog.publishedAt}</span>
          <span>{blog.readTime || "5 min read"}</span>
        </div>
        <img
          src={blog.cover}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        <div className="prose prose-invert text-gray-200 max-w-full">
          {blog.content
            .split("\n")
            .filter((line) => line.trim() !== "")
            .map((line, index) => (
              <p key={index}>{line}</p>
            ))}
        </div>
        <div className="py-10">
          <Link
            to="/blogs"
            className="text-brand1 border-b border-brand1 hover:text-white hover:border-white transition"
          >
            &lt;&lt; Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
