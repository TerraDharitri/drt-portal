import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};


export default Button;
