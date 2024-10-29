import React from "react";

const Button = ({ text, onClick, icon }) => {
  return (
    <button 
      className="font-mono px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md ml-5"
      onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
