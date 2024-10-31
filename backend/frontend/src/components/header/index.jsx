import React from "react";

const Header = () => {
  return (
    <header>
    <nav className="bg-[#171717] border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/*  <a href="/" className="flex items-center"> 
                <span className="self-center text-xl font-mono whitespace-nowrap text-[#e5e7eb]">ListTools</span>
            </a>
          */}
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-[#e5e7eb] rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white font-mono" aria-current="page">AI Tools</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header;