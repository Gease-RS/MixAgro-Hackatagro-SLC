import React from "react";
import "./button.css";

function Button({ children, className, component: Component, ...restProps }) {
  return (
    <button className={`ui-button ${className}`} {...restProps}>
      {children}
    </button>
  );
}

Button.defaulProps = {
  className: "",
};

export default Button;
