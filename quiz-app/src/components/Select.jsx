import React, { forwardRef, useState } from "react";

const Select = forwardRef(
  (
    {
      label,
      options = [],
      value,
      error,
      onChange,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex items-center gap-5">
        <label htmlFor={label}>{label}</label>

        <select
          id={label}
          disabled={disabled}
          ref={ref}
          className={`text-black py-1 indent-2 max-w-72 min-w-72 capitalize ${className}`}
          onChange={onChange}
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((option, index) => (
            <option key={index} value={option.value} className="text-black capitalize font-bold">
              {option.choice ? option.choice : option.value}
            </option>
          ))}
        </select>

        {error && <span className={`text-red-500 ${className}`}>{error}</span>}
      </div>
    );
  }
);

export default Select;
