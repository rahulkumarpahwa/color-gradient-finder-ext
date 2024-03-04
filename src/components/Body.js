import Gradient from "javascript-color-gradient";
import { useState } from "react";
import ColorCard from "./ColorCard";

const Body = () => {
  const [col, setCol] = useState("#5e72eb");
  const [col2, setCol2] = useState("#ff9190");
  const [number, setNumber] = useState(8);
  const [colArr, setColArr] = useState([
    "#7276e0",
    "#867ad4",
    "#9a7ec9",
    "#af82be",
    "#c385b2",
    "#d789a7",
    "#eb8d9b",
    "#ff9190",
  ]);

  const fetchColor = () => {
    const gradientArray = new Gradient()
      .setColorGradient(col, col2)
      .setMidpoint(number)
      .getColors();

    console.log(gradientArray);
    setColArr(gradientArray);
  };

  return (
    <div className="body">
      <div className="input-container">
        <div className="color-containers">
          <div>
            <h4>Choose Two Colors : </h4>
          </div>
          <div className="color-div">
            <input
              value={col}
              id="color1-input"
              onChange={(e) => {
                setCol(e.target.value);
              }}
            />{" "}
            &nbsp;
            <input
              type="color"
              value={col}
              id="color1"
              onChange={(e) => {
                setCol(e.target.value);
              }}
            />
          </div>
          <div className="color-div">
            <input
              value={col2}
              id="color1-input"
              onChange={(e) => {
                setCol2(e.target.value);
              }}
            />
            <input
              type="color"
              value={col2}
              id="color1"
              onChange={(e) => {
                setCol2(e.target.value);
              }}
            />{" "}
          </div>
        </div>
        <div className="number-btn">
          <div>
            <h4>Enter No. of Gradients :</h4>
          </div>
          <div>
            <input
              type="text"
              value={number}
              id="number"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="button">
          <button
            onClick={() => {
              fetchColor();
            }}
          >
            Search
          </button>
        </div>
      </div>
      <ColorCard arr={colArr} />
    </div>
  );
};

export default Body;
