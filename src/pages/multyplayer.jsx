import React, { useState, useEffect } from "react";
import Square from "../components/multyplayer/Square";
import Board from "./../components/multyplayer/Board";

const defaultSquares = () => new Array(9).fill(null);

const Multyplayer = () => {
  const [allSquares, setAllSquares] = useState(defaultSquares());
  const [winner, setWinner] = useState(null);
  const [isPlaying, setIsPlaying] = useState("x");

  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  useEffect(() => {
    const exactLines = (a, b, c) => {
      return winningLines.filter((boxIndexes) => {
        const boxValues = boxIndexes.map((index) => allSquares[index]);
        return (
          JSON.stringify([a, b, c].sort()) === JSON.stringify(boxValues.sort())
        );
      });
    };
    const xWon = exactLines("x", "x", "x").length > 0;
    if (xWon) {
      setWinner("x");
    }
    const oWon = exactLines("o", "o", "o").length > 0;
    if (oWon) {
      setWinner("o");
    }
  }, [allSquares]);

  const handleClickByPlayer = (i) => {
    const isFirstPersonTurn =
      allSquares.filter((square) => square !== null).length % 2 === 0;
    const isSecondPersonTurn =
      allSquares.filter((square) => square !== null).length % 2 === 1;
    if (isFirstPersonTurn) {
      let newAllSquares = allSquares;
      newAllSquares[i] = "x";
      setAllSquares([...newAllSquares]);
      setIsPlaying(!isPlaying);
    } else if (isSecondPersonTurn) {
      let newAllSquares = allSquares;
      newAllSquares[i] = "o";
      setAllSquares([...newAllSquares]);
      setIsPlaying(!isPlaying);
    }
  };
  const handleResetBoard = () => {
    setAllSquares(defaultSquares);
    setWinner(null);
  };

  return (
    <>
      <Board>
        {allSquares.map((square, i) => (
          <Square
            key={i}
            onClick={() => handleClickByPlayer(i)}
            x={square === "x" ? 1 : 0}
            o={square === "o" ? 1 : 0}
          />
        ))}
      </Board>
      <div className="flex flex-col items-center my-10">
        <button
          className="border-2 px-10 py-1 rounded border-secondary text-white font-mono hover:border-navbar hover:text-secondary hover:animate-pulse"
          onClick={handleResetBoard}
        >
          RESET
        </button>
        {!!winner && winner === "x" && (
          <div className="winner bg-secondary">Player with X WON!</div>
        )}
        {!!winner && winner === "o" && (
          <div className="winner bg-secondary">Player with O WON!</div>
        )}
        {!!winner && winner === "tie" && (
          <div className="bg-amber-600 winner">It is a tie!</div>
        )}
      </div>
    </>
  );
};

export default Multyplayer;
