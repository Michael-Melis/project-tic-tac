import React from "react";

const Board = (props) => {
  return (
    <div
      className="grid grid-cols-3 grid-rows-3 w-max mx-auto mt-16 cursor-pointer "
      {...props}
    />
  );
};

export default Board;
