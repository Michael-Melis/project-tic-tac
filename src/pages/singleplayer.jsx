import React, { useEffect, useState } from 'react';
import Board from '../components/multyplayer/Board';
import Square from '../components/multyplayer/Square';

const defaultSquares = () => new Array(9).fill(null);

const Singleplayer = () => {
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
    const emptyBoxes = allSquares.map((square, i) => (square === null ? i : null)).filter((val) => val !== null);

    setTimeout(() => {
      if (emptyBoxes.length > 0) {
        //zbytocna podmienka
        if (emptyBoxes.length > 0) {
          const exactLines = (a, b, c) => {
            return winningLines.filter((boxIndexes) => {
              const boxValues = boxIndexes.map((index) => allSquares[index]);

              return (
                //tricky part, comparing arrays aby sa matchovali obe polia
                JSON.stringify([a, b, c].sort()) === JSON.stringify(boxValues.sort())
              );
            });
          };

          const aiMove = (index) => {
            let newAllSquares = allSquares;
            newAllSquares[index] = 'o';
            setAllSquares([...newAllSquares]);
          };

          const personWon = exactLines('x', 'x', 'x').length > 0;
          if (personWon) {
            setWinner('x');
          }

          const aiWon = exactLines('o', 'o', 'o').length > 0;
          if (aiWon) {
            setWinner('o');
          }
          //AI moves
          const isAiTurn = allSquares.filter((square) => square !== null).length % 2 === 1;

          if (isAiTurn) {
            const aiWinningBox = exactLines('o', 'o', null);
            //AI winning box
            if (aiWinningBox.length > 0) {
              const winningBlock = aiWinningBox[0].filter((index) => allSquares[index] === null)[0];
              aiMove(winningBlock);
              return;
            }

            //blocking person to win
            const aiBlock = exactLines('x', 'x', null);
            if (aiBlock.length > 0) {
              const blockBox = aiBlock[0].filter((index) => allSquares[index] === null)[0];
              aiMove(blockBox);
              return;
            }
            //making next move smarter-closer to hit the winnin line
            const nextAiMove = exactLines('o', null, null);
            if (nextAiMove.length > 0) {
              aiMove(nextAiMove[0].filter((index) => allSquares[index] === null)[0]);
              return;
            }

            const randomIndex = emptyBoxes[Math.ceil(Math.random() * emptyBoxes.length)];
            aiMove(randomIndex);
          }
        }
      } else {
        setWinner('tie');
      }
    }, 300);
  }, [allSquares]);

  //player moves
  const handleClickOnSquare = (i) => {
    const isPersonTurn = allSquares.filter((square) => square !== null).length % 2 === 0;
    if (isPersonTurn) {
      let newAllSquares = allSquares;
      newAllSquares[i] = 'x';
      setAllSquares([...newAllSquares]);
    }
  };

  const handleResetBoard = () => {
    setAllSquares(defaultSquares);
    setWinner(null);
  };

  return (
    <>
      <h1 className="player-msg text-secondary">Start by choosing empty box, you will represent X </h1>
      <Board>
        {allSquares.map((square, i) => (
          <Square
            key={i}
            onClick={() => handleClickOnSquare(i)}
            x={square === 'x' ? 1 : 0}
            o={square === 'o' ? 1 : 0}
          />
        ))}
      </Board>
      <div className="winner-layout">
        <button className="reset-btn" onClick={handleResetBoard}>
          RESET
        </button>
        {!!winner && winner === 'x' && <div className="winner bg-secondary">You WON!</div>}
        {!!winner && winner === 'o' && <div className="winner bg-red-500">You LOST!</div>}
        {!!winner && winner === 'tie' && <div className="bg-amber-600 winner">It is a tie!</div>}
      </div>
    </>
  );
};

export default Singleplayer;
