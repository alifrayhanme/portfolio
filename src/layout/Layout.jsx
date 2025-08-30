import React from "react";
import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/common/Footer";


const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
