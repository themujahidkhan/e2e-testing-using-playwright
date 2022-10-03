import React from "react";

function Input(props) {
  return (
    <input
      id="nameInput"
      type="text"
      placeholder="Enter your name"
      onChange={props.handleChange}
    />
  );
}

export default Input;
