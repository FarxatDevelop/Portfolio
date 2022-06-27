import React from "react";

function PersonCard(props) {
  return (
    <div className="person-box">
      <div className="p-image">
        <img src={props.personImg} alt="" />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis obcaecati non ea, est odit repellat distinctio incidunt, quia aliquam eveniet quod deleniti impedit sapiente atque tenetur porro?</p>
      <div className="socials">
        <div className="socials-icon">
          <i class="fa-brands fa-twitter"></i>
        </div>
        <div className="socials-icon">
          <i class="fa-brands fa-instagram"></i>
        </div>
        <div className="socials-icon">
          <i class="fa-brands fa-facebook-f"></i>
        </div>
      </div>
    </div>
  )
};

export default PersonCard;