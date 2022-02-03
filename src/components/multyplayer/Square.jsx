import React from "react";

const Square = (props) => {
  return (
    <div
      className=" w-24 h-24 border-solid border-4 border-white text-center text-5xl items-center"
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
