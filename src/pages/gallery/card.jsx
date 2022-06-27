import React from "react";

function Card(props) {
  return (
    <div className="gallery-card">
      <img src={props.img} alt="" />
    </div>
  )
};

export default Card;