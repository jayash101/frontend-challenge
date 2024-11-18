import React from "react";

const Input = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  disabled = false,
  error,
  className,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />

      {/* Error message */}
      {error && <span className={`text-red-500 ${className}`}>{error}</span>}
    </div>
  );
};

export default Input;
