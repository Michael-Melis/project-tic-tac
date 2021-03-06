import React, { useState, useEffect } from 'react';
import Square from '../components/multyplayer/Square';
import Board from './../components/multyplayer/Board';

const defaultSquares = () => new Array(9).fill(null);

const Multyplayer = () => {
  const [allSquares, setAllSquares] = useState(defaultSquares());
  const [winner, setWinner] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true); //musi byt boolean teda true

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
        return JSON.stringify([a, b, c].sort()) === JSON.stringify(boxValues.sort());
      });
    };
    const xWon = exactLines('x', 'x', 'x').length > 0;
    if (xWon) {
      setWinner('x');
      console.log(!!winner, winner);
    }
    const oWon = exactLines('o', 'o', 'o').length > 0;
    if (oWon) {
      setWinner('o');
    }
  }, [allSquares]);

  const handleClickByPlayer = (i) => {
    const isFirstPersonTurn = allSquares.filter((square) => square !== null).length % 2 === 0;
    const isSecondPersonTurn = allSquares.filter((square) => square !== null).length % 2 === 1;
    if (isFirstPersonTurn) {
      let newAllSquares = allSquares;
      newAllSquares[i] = 'x';
      setAllSquares([...newAllSquares]);
      setIsPlaying(!isPlaying);
    } else if (isSecondPersonTurn) {
      let newAllSquares = allSquares;
      newAllSquares[i] = 'o';
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
      {isPlaying ? (
        <h1 className="player-msg text-blue-600">Wainting for move by player representing X</h1>
      ) : (
        <h1 className="player-msg text-secondary">Wainting for move by player representing O</h1>
      )}
      <Board>
        {allSquares.map((square, i) => (
          <Square
            key={i}
            onClick={() => handleClickByPlayer(i)}
            x={square === 'x' ? 1 : 0}
            o={square === 'o' ? 1 : 0}
            isPlaying={isPlaying}
          />
        ))}
      </Board>
      <div className="winner-layout">
        <button className="reset-btn" onClick={handleResetBoard}>
          RESET
        </button>
        {/* Basically, !! make us sure, the value we get is boolean, not falsy, truthy or string etc... */}
        {!!winner && winner === 'x' && <div className="winner bg-blue-600">Player with X WON!</div>}
        {!!winner && winner === 'o' && <div className="winner bg-secondary">Player with O WON!</div>}
        {!!winner && winner === 'tie' && <div className="bg-amber-600 winner">It is a tie!</div>}
      </div>
    </>
  );
};

export default Multyplayer;
