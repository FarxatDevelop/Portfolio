import React from "react";

function Card(props) {
  const { img, photoTitle } = props;
  return (
    <div className="home-card">
      <img src={img} alt="" />
      <div className="card-descript">
        <h1>{photoTitle}</h1>
        <button>More photos</button>
      </div>
    </div>
  )
};

export default Card;