import React, { useState } from "react";
import Board from "../components/multyplayer/Board";
import Square from "../components/multyplayer/Square";

const defaultSquares = () => new Array(9).fill(null);

const Multyplayer = () => {
  const [allSquares, setAllSquares] = useState(defaultSquares());
  const handleClickOnSquare = (i) => {
    const isPersonTurn =
      allSquares.filter((square) => square !== null).length % 2 === 0;
    if (isPersonTurn) {
      let newAllSquares = allSquares;
      newAllSquares[i] = "x";
      setAllSquares([...newAllSquares]);
    }
  };
  console.log(allSquares);
  return (
    <Board>
      {allSquares.map((square, i) => (
        <Square
          key={i}
          onClick={() => handleClickOnSquare(i)}
          x={square === "x" ? 1 : 0}
          o={square === "o" ? 1 : 0}
        />
      ))}
    </Board>
  );
};

export default Multyplayer;
