import React, { useEffect, useState } from "react";
import Board from "../components/multyplayer/Board";
import Square from "../components/multyplayer/Square";

const defaultSquares = () => new Array(9).fill(null);

const Multyplayer = () => {
  const [allSquares, setAllSquares] = useState(defaultSquares());
  const [winner, setWinner] = useState(null);

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
    //all possible option to pick
    const emptyBoxes = allSquares
      .map((square, i) => (square === null ? i : null))
      .filter((val) => val !== null);
    if (emptyBoxes.length > 0) {
      if (emptyBoxes.length > 0) {
        const exactLines = (a, b, c) => {
          return winningLines.filter((boxIndexes) => {
            const boxValues = boxIndexes.map((index) => allSquares[index]);
            return (
              JSON.stringify([a, b, c].sort()) ===
              JSON.stringify(boxValues.sort())
            );
          });
        };

        const aiMove = (index) => {
          let newAllSquares = allSquares;
          newAllSquares[index] = "o";
          setAllSquares([...newAllSquares]);
        };

        const personWon = exactLines("x", "x", "x").length > 0;
        if (personWon) {
          setWinner("x");
          console.log(winner);
        }
        const aiWon = exactLines("o", "o", "o").length > 0;
        if (aiWon) {
          setWinner("o");
          console.log(winner);
        }
        //AI moves
        const isAiTurn =
          allSquares.filter((square) => square !== null).length % 2 === 1;

        if (isAiTurn) {
          const aiWinningBox = exactLines("o", "o", null);
          //AI winning box
          if (aiWinningBox.length > 0) {
            const winningBlock = aiWinningBox[0].filter(
              (index) => allSquares[index] === null
            )[0];
            aiMove(winningBlock);
            return;
          }

          //blocking person to win
          const aiBlock = exactLines("x", "x", null);
          if (aiBlock.length > 0) {
            const blockBox = aiBlock[0].filter(
              (index) => allSquares[index] === null
            )[0];
            aiMove(blockBox);
            return;
          }
          //making next move smarter-closer to hit the winnin line
          const nextAiMove = exactLines("o", null, null);
          if (nextAiMove.length > 0) {
            aiMove(
              nextAiMove[0].filter((index) => allSquares[index] === null)[0]
            );
            return;
          }

          const randomIndex =
            emptyBoxes[Math.ceil(Math.random() * emptyBoxes.length)];
          aiMove(randomIndex);
        }
      }
    } else {
      setWinner("tie");
    }
  }, [allSquares]);

  //player moves
  const handleClickOnSquare = (i) => {
    const isPersonTurn =
      allSquares.filter((square) => square !== null).length % 2 === 0;
    if (isPersonTurn) {
      let newAllSquares = allSquares;
      newAllSquares[i] = "x";
      setAllSquares([...newAllSquares]);
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
            onClick={() => handleClickOnSquare(i)}
            x={square === "x" ? 1 : 0}
            o={square === "o" ? 1 : 0}
          />
        ))}
      </Board>
      <button onClick={handleResetBoard}>reset</button>
      {!!winner && winner === "x" && (
        <div className="result green">You WON!</div>
      )}
      {!!winner && winner === "o" && (
        <div className="result red">You LOST!</div>
      )}
      {!!winner && winner === "tie" && (
        <div className="result tie">It is a tie!</div>
      )}
    </>
  );
};

export default Multyplayer;
