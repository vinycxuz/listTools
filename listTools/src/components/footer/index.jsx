import React from "react";  

const Footer = () => {
  return (
    <div className="flex flex-col w-full h-fit bg-[#171717] text-[#e5e7eb] px-14 py-14">
    <div className="flex flex-row">
        <div className="flex flex-col gap-2 justify-center w-[35%] w-[35%]">
            <div className="flex items-center w-full gap-4">
                <div className="text-3xl font-mono">@vinycxuz</div>
            </div>
        </div>
        <div className="flex flex-row w-[65%] justify-end gap-16 text-nowrap">
            <div className="grid undefined gap-11"></div>
        </div>
    </div>
    <div className="w-full border-t border-gray-500 my-8"></div>
    <div className="text-center font-mono">© 2024 vinycxuz - All rights reserved.</div>
  </div>
)}

export default Footer;