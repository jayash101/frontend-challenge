import React from "react";

const Button = ({ type, onClick, disabled = false, value, ...props }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} {...props}>
      {value}
    </button>
  );
};

export default Button;
