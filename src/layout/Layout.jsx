import React from "react";
import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
