import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    // <div className="">
    <span onClick={() => props.removeFriend(props.id)} className="remove winediv">
     
        <img alt={props.name} src={props.image}/>
  
    </span>
  // </div>
  );
}

export default FriendCard;
