import React from "react";
import { Link } from "react-router-dom";

const DropDown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "flex flex-col items-center text-secondary bg-navbar translate-x-0 transition-all duration-300 ease-in-out text-xl rounded-b-lg py-8 "
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-4 hover:text-secondary" to="/">
        Main Menu
      </Link>
      <Link className="p-4 hover:text-secondary" to="/singleplayer">
        Single player
      </Link>
      <Link className="p-4 hover:text-secondary" to="/multyplayer">
        Multy player
      </Link>
    </div>
  );
};

export default DropDown;
