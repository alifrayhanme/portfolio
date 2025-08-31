import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="bg-bg1 text-gray-200 min-h-screen flex flex-col justify-center items-center px-6">
      <h1 className="text-6xl font-bold text-brand1 mb-6">404</h1>
      <p className="text-xl mb-4 text-white">Oops! Page not found.</p>
      <p className="text-gray-400 mb-8 text-white">
        The page you are looking for does not exist.
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

export default NotFound;
