import React from "react";

const Square = (props) => {
  return (
    <div
      className=" flex items-center justify-center w-24 h-24 border-solid border-4 border-white text-6xl hover:border-secondary transition-all duration-300 ease-in-out"
      {...props}
    >
      {props.x ? (
        <h1 className="text-blue-600 ">x</h1>
      ) : props.o ? (
        <h1 className="text-secondary ">o</h1>
      ) : (
        ""
      )}
    </div>
  );
};

export default Square;
