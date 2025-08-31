import { Link } from "react-router";
import SubHeader from "../../components/ui/SubHeader";
import BlogCart from "../../components/ui/BlogCart";
import { blogData } from "../../data/blogData";

const Blogs = () => {
  return (
    <section className="bg-bg1 flex items-center justify-center lg:py-24 py-16">
      <div className="px-4 xs:px-12 md:px-28 space-y-10 w-full">
        {/* Header */}
        <div>
          <SubHeader
            title="Blogs"
            details="My thoughts on technology and business, welcome to subscribe"
          />
          <div className="flex justify-center items-center my-10">
            <Link
              to={"/subscribe"}
              className="Button-U text-white border-2 border-brand1 py-4 px-8 rounded-full pointer-events-none"
            >
              Subscribe My Blogs
            </Link>
          </div>
        </div>

        {/* Blog List */}
        <div className="space-y-10">
          {blogData.posts.map((blog) => (
            <BlogCart key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
