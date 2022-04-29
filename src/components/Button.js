import React from "react";
import "../stylesheets/Button.css";

const Button = ({ children, buttonActive }) => {
  return (
    <div className="button__container">
      <button className="button_click" onClick={() => buttonActive(children)}>
        {children}
      </button>
    </div>
  );
};

export default Button;
