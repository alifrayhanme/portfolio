import { Link } from "react-router";

const ErrorPage = ({ message }) => {
  return (
    <div className="bg-bg1 text-gray-200 min-h-screen flex flex-col justify-center items-center px-6">
      <h1 className="text-5xl font-bold text-[#ff0000] mb-6">
        Something Went Wrong
      </h1>
      <p className="text-lg mb-4 text-white">
        {message || "An unexpected error occurred."}
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-brand1 text-bg2 rounded-full font-semibold hover:bg-white hover:text-brand1 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
