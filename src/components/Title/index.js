import React from "react";
import "./style.css";

function Title(props) {
  return <div>
  <h1 className="title">{props.children}</h1>
  <p className="instructions">Choose each wine only once! Pay attention to the ones you click, you lose if you click the same one more than once!</p>
  </div>
}

export default Title;
