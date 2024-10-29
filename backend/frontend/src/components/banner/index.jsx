import React from "react";

const Banner = ({ title, description }) => {
  return (
    <div className="p-4">
      <p className="text-xl font-mono text-[#e5e7eb] flex flex-col items-center">{description}</p>
    </div>
  );
}

export default Banner;