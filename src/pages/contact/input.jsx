import React from "react";

function Input(props) {
  const { label, inputId, type } = props;
  return (
    <div className="input">
      <label htmlFor={inputId}>{ label }</label>
      <input type={type} id={inputId} />
    </div>
  )
};

export default Input;