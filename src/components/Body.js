import Gradient from "javascript-color-gradient";
import { useState } from "react";
import ColorCard from "./ColorCard";
import { HuePicker } from "react-color";

const Body = () => {
  const [col, setCol] = useState("#5e72eb");
  const [col2, setCol2] = useState("#ff9190");
  const [number, setNumber] = useState(5);
  const [colArr, setColArr] = useState([
    "#7e78d9",
    "#9e7ec7",
    "#bf85b4",
    "#df8ba2",
    "#ff9190",
  ]);

  const fetchColor = () => {
    const gradientArray = new Gradient()
      .setColorGradient(col, col2)
      .setMidpoint(number)
      .getColors();

    // console.log(gradientArray);
    setColArr(gradientArray);
  };

  return (
    <div className="body">
      <div className="input-container">
        <div></div>
        <label htmlFor="color1">Pick First color :</label>{" "}
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
        <label htmlFor="color2">Pick Second color : </label> &nbsp;
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
        <label htmlFor="number">Enter No. of Gradients : </label> &nbsp;
        <input
          type="text"
          value={number}
          id="number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <br></br>
        <button
          onClick={() => {
            fetchColor();
          }}
        >
          Search
        </button>
      </div>
      <ColorCard arr={colArr} />
    </div>
  );
};

export default Body;
