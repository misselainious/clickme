import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper">
  <div className="conatiner">
  {props.children}
  </div>
  </div>;
}

export default Wrapper;
