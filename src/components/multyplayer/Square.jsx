import React from "react";

const Square = (props) => {
  return (
    <div
      className=" w-24 h-24 border-solid border-4 border-white text-center text-3xl"
      {...props}
    >
      {props.x ? "x" : props.o ? "o" : ""}
    </div>
  );
};

export default Square;
