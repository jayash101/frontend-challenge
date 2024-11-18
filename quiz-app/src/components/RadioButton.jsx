import React, { forwardRef } from "react";
import parse from "html-react-parser";

const RadioButton = forwardRef(
  (
    { label = "", value, checked, onChange, disabled = false, error, ...props },
    ref
  ) => {
    return (
      <label>
        <input
          type="radio"
          value={value}
          onChange={onChange}
          disabled={disabled}
          checked={checked}
          ref={ref}
          {...props}
        />
        {parse(label)}

        {error && <div className="text-red-500">{error}</div>}
      </label>
    );
  }
);

export default RadioButton;
