import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleTokggle = () => {
    setClick((pre) => !pre);
  };
  return (
    <>
      <header
        id="navBar-head"
        className="flex justify-between items-center p-5 max-h-32 bg-white/10 backdrop-blur-sm  w-full  font-bold text-white fixed top-0"
      >
        <h1 className="text-2xl md:text-3xl   bg-clip-text text-transparent bg-gradient-to-bl  from-[#AF1740] to-red-200 brightness-110 ">
          Portfolio
        </h1>

        <ul
          className={` flex-row absolute top-16 right-2 sm:top-0 sm:relative sm:flex gap-4  md:text-2xl transition-all duration-300 ease-in-out transform   ${
            click
              ? "opacity-100 scale-100 "
              : " opacity-0 scale-0 sm:opacity-100  sm:scale-100"
          }`}
        >
          <li className=" p-1 hover:border-blue-700 hover:shadow-red-500 hover:shadow-md  rounded-md">
            <Link to="/">Home</Link>
          </li>
          <li className=" p-1 hover:border-blue-700 hover:shadow-red-500 hover:shadow-md rounded-lg">
            <Link to="/about">About</Link>
          </li>
          <li className="p-1 hover:border-blue-700 rounded-lg hover:shadow-red-500 hover:shadow-md">
            <Link to="/project">Project</Link>
          </li>
          <li className=" p-1  hover:shadow-red-500 rounded-lg hover:shadow-md bg-none">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <GiHamburgerMenu
          className={`sm:hidden size-6 cursor-pointer ${click && "hidden"} `}
          onClick={handleTokggle}
        />
        {click && (
          <RxCross2
            onClick={handleTokggle}
            className={`size-8 cursor-pointer sm:hidden`}
          />
        )}
      </header>
    </>
  );
}

export default Navbar;
