import React from "react";  

const Footer = () => {
  return (
    <div className="flex flex-col w-full h-fit bg-[#171717] text-[#e5e7eb] px-14 py-14">
    <div className="flex flex-row">
        <div className="flex flex-row w-[65%] justify-end gap-16 text-nowrap">
            <div className="grid undefined gap-11"></div>
        </div>
    </div>
    <div className="w-full border-t border-gray-500 my-8"></div>
    <div className="text-center font-mono">Developed by <a href="https://github.com/vinycxuz" target="_blank" rel="noopener noreferrer">vinycxuz</a> © 2024 - All rights reserved.</div>
  </div>
)}

export default Footer;