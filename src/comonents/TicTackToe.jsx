import React, { useState, useRef } from "react";
import "./TicTacToe.css";
let data = ["", "", "", "", "", "", "", "", ""];

const TicTackToe = () => {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  let boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
  const titleElement = useRef();
  let [count, setCount] = useState(0);
  let [isLock, setIsLock] = useState(false);

  const toggle = (e, index) => {
    if (isLock) {
      return;
    }
    if (count % 2 == 0) {
      console.log(e, index);
      e.target.innerHTML = "<h3>X</h3>";
      data[index] = "X";
      setCount(++count);
    } else {
      console.log(e, index);
      data[index] = "O";
      e.target.innerHTML = "<h3>O</h3>";
      setCount(++count);
    }

    if (count > 8) {
      setIsLock(true);
    }

    cheCkWinner();
  };

  console.log(data);
  const cheCkWinner = () => {
    if (data[0] == data[1] && data[1] == data[2] && data[2] != "") {
      won(data[2]);
    } else if (data[3] == data[4] && data[4] == data[5] && data[5] != "") {
      won(data[5]);
    } else if (data[6] == data[7] && data[7] == data[8] && data[8] != "") {
      won(data[8]);
    } else if (data[0] == data[3] && data[3] == data[6] && data[6] != "") {
      won(data[6]);
    } else if (data[1] == data[4] && data[4] == data[7] && data[7] != "") {
      won(data[7]);
    } else if (data[2] == data[5] && data[5] == data[8] && data[8] != "") {
      won(data[8]);
    } else if (data[0] == data[4] && data[4] == data[8] && data[8] != "") {
      won(data[8]);
    } else if (data[2] == data[4] && data[4] == data[6] && data[6] != "") {
      won(data[6]);
    }
  };
  const won = (winner) => {
    setIsLock(true);
    if (winner == "X") {
      titleElement.current.innerHTML = "x is winner";
    } else {
      titleElement.current.innerHTML = "o is winner";
    }
  };

  const reset = () => {
    data = ["", "", "", "", "", "", "", "", ""];
    setCount(0);

    setIsLock(false);
    titleElement.current.innerHTML = "tic tack toe react game";
    boxArray.map((element) => (element.current.innerHTML = ""));
  };

  return (
    <>
      <h3 ref={titleElement}> tic tack toe react game </h3>
      <div className="container">
        <div>
          <div className="row">
            <div className="box" ref={box1} onClick={(e) => toggle(e, 0)}></div>
            <div className="box" ref={box2} onClick={(e) => toggle(e, 1)}></div>
            <div className="box" ref={box3} onClick={(e) => toggle(e, 2)}></div>
          </div>
          <div className="row">
            <div className="box" ref={box4} onClick={(e) => toggle(e, 3)}></div>
            <div className="box" ref={box5} onClick={(e) => toggle(e, 4)}></div>
            <div className="box" ref={box6} onClick={(e) => toggle(e, 5)}></div>
          </div>
          <div className="row">
            <div className="box" ref={box7} onClick={(e) => toggle(e, 6)}></div>
            <div className="box" ref={box8} onClick={(e) => toggle(e, 7)}></div>
            <div className="box" ref={box9} onClick={(e) => toggle(e, 8)}></div>
          </div>
        </div>
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
};

export default TicTackToe;
