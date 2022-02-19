import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ toggle }) => {
  return (
    <nav className="flex justify-between items-center h-16 bg-navbar text-white font-mono relative " role="navigation">
      <Link
        to="/"
        className="pl-8 font-extrabold tracking-widest  hover:underline transition-all duration-300 ease-in-out text-secondary "
      >
        Michael Melis
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4 hover:text-secondary" to="/">
          Main Menu
        </Link>
        <Link className="p-4 hover:text-secondary" to="/singleplayer">
          Singleplayer
        </Link>
        <Link className="p-4 hover:text-secondary" to="/multyplayer">
          Multy player
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
