import React, { forwardRef } from "react";

const Form = ({ children, className = "", ...props }, ref) => {
  return (
    <form
      className={`bg-[#1ea5fe] text-white p-8 w-2/5 inline-flex flex-col items-center gap-4 ${className} `}
      {...props}
    >
      {children}
    </form>
  );
};

export default forwardRef(Form);
