import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-black/75 text-white sm:flex p-3 bottom-0 fixed lg:relative w-full justify-evenly hidden ">
      <div className="flex p-2 text-center gap-2">
        <IoHome className="size-5" /> <p>Pune,Maharashtra</p>
      </div>
      <div className="flex p-2 text-center gap-2">
        <FaPhoneAlt className="size-5" />{" "}
        <p className="text-md">+918983745076</p>
      </div>
      <Link to={"mailto:swapnilrathod1002@gmail.com"}>
        <div className="flex p-2 text-center gap-2">
          <SiGmail className="size-5" />{" "}
          <p className="text-md">swapnilrathod1002@gmail.com</p>
        </div>
      </Link>{" "}
      <div className="lg:flex p-2 text-center gap-2 hidden ">
        <Link to="https://www.linkedin.com/in/swapnil-rathod-a5259b245/">
          <FaLinkedin className="size-5 ml-4" />
          <p>LinkedIn</p>
        </Link>
      </div>
      <div className="lg:flex p-2 text-center gap-2  hidden">
        <Link to="https://x.com/SwapniL__R02">
          <FaTwitter className="size-5 ml-4" />
          <p>Twitter</p>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
