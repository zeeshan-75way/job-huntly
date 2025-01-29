import React from "react";
import Navbar from "../components/LandingPage/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/LandingPage/Footer";

const Basic = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Basic;
