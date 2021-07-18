import React from "react";
import "./button.css";

function Button({ children }) {
  return <button className="ui-button">{children}</button>;
}

export default Button;
