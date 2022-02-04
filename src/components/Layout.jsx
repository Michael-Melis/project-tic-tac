import React from "react";
import DropDown from "./DropDown";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children, toggle, isOpen }) => {
  return (
    <div className="bg-primary h-screen font-mono">
      <NavBar toggle={toggle} />
      <DropDown toggle={toggle} isOpen={isOpen} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
