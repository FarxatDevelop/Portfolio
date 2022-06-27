import React from "react";

function ServicesCard(props) {
  return (
    <div className="sevices-card">
      <div className="sevices-card-icon">
        <i id="sevices-icon" class={ props.class }></i>
      </div>
      <h1>{props.name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.</p>
      <div className="price">
        <p>$ { props.price }</p>
      </div>
    </div>
  )
};

export default ServicesCard;