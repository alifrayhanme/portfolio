import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import Blogs from "../pages/Blog/Blogs";
import BlogDetails from "../pages/Blog/BlogDetails";
import NotFound from "../components/error/NotFound";
import ErrorPage from "../components/error/ErrorPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blog/:slug", element: <BlogDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default Router;
