import React from "react";

const Container = ({ children }) => {
  return (
    <section className="w-full h-screen bg-[#d0CA0D50] flex flex-col justify-center items-center">
      {children}
    </section>
  );
};

export default Container;
