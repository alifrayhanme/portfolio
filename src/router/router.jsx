import { createBrowserRouter } from "react-router";
// import Layout from "../layout/layout";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Layout from "../layout/Layout";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

export default Router;
