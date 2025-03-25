import React from "react";
import "./TicTacToe.css";

const TicTackToe = () => {
  return (
    <>
      <h3> tic tack toe react game </h3>
      <div className="container">
        <div>
          <div className="row">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="row">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <div className="row">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
        <button>reset</button>
      </div>
    </>
  );
};

export default TicTackToe;
