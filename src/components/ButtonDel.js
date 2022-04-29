import React from "react";
import "../stylesheets/ButtonDel.css";

const ButtonDel = ({ children, deleteActive }) => {
  return (
    <div className="container_buttonDel">
      <button className="button_del" onClick={deleteActive}>
        {children}
      </button>
    </div>
  );
};

export default ButtonDel;
