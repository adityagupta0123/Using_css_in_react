import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const img1 ="https://picsum.photos/200";
const img2 = "https://picsum.photos/250";


ReactDom.render(
  <>
    <h1 className="head">Hello :)</h1>
    <div className="imgDiv">
    <img src={img1} alt="image" />
    <img src={img2} />
    </div>
  </>,
  document.getElementById("root")
);