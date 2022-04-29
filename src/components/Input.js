import React from "react";
import "../stylesheets/Input.css";

const Input = ({ input }) => {
  return (
    <div className="input_container">
      <div className="input_text">{input}</div>
    </div>
  );
};

export default Input;
