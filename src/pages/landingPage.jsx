import React from "react";
import { Link } from "react-router-dom";
import computerPic from "../images/computer.png";
import friendsPic from "../images/friends.png";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center font-mono text-white mx-4 ">
      <h1 className="mt-16 text-4xl">Welcome on the Tic-Tac-Toe webpage</h1>
      <h2 className="text-2xl text-secondary my-4">
        Let's choose between two modes of this game
      </h2>
      <div className="flex flex-row justify-between w-3/4 flex-wrap mt-8">
        <div className=" hover:animate-pulse cursor-pointer">
          <Link to="/singleplayer" className="flex flex-col items-center">
            Try to beat the Computer/JS
            <img
              src={computerPic}
              alt="man kicking computer"
              className="object-contain h-28 w-auto mt-4"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center hover:animate-pulse cursor-pointer">
          <Link to="/multyplayer" className="flex flex-col items-center">
            Who will win YOU or your friend?
            <img
              src={friendsPic}
              alt="man kicking computer"
              className="object-contain h-28 w-auto mt-4"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
