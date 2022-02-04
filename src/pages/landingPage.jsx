import React from "react";
import { Link } from "react-router-dom";
import computerPic from "../images/computer.png";
import friendsPic from "../images/friends.png";

const LandingPage = () => {
  return (
    <div className="landing-container ">
      <h1 className="h1">Welcome on the Tic-Tac-Toe webapp</h1>
      <h2 className="h2">Let choose between two modes of this game</h2>
      <div className="choose-game-container mb-40">
        <div className=" selected-game">
          <Link to="/singleplayer" className="link-to-game ">
            Try to beat the Computer/JS
            <img
              src={computerPic}
              alt="man kicking computer"
              className="game-img"
            />
          </Link>
        </div>
        <div className="selected-game ">
          <Link to="/multyplayer" className="link-to-game  ">
            Who will win? YOU or your friend?
            <img src={friendsPic} alt="two friends " className="game-img" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
