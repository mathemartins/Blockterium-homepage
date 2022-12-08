import React from "react";
import { Logo } from "../assets/index";
import { FaBars } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiOutlineArrowRight } from "react-icons/hi";

const Navbar = () => {
  return (
    <>
      <section className="bg-black w-full z-10 text-white fixed top-0 py-2 left-0 right-0 px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem]">
        <div className="flex items-center justify-between text-center text-[13px] lg:text-[16px]">
          <img src={Logo} alt="" className="md:w-[7rem] w-[10rem] py-2" />
          <div>
            <FaBars className="w-[3rem] h-[1.75rem]  sm:w-[2rem] sm:h-[3rem] md:hidden" />
          </div>
          <ul className="md:flex items-center w-[45%] lg:w-[40%] justify-between  hidden ">
            <li className="flex items-center gap-2">
              Product <MdOutlineKeyboardArrowDown className="w-4 h-5" />
            </li>
            <li>How it Works</li>
            <li className="flex items-center gap-2">
              Resources <MdOutlineKeyboardArrowDown className="w-4 h-5" />
            </li>
            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>

          <div className="hidden md:flex  gap-2">
            <button className="greyGradient px-7 py-1">Login</button>
            <button className="BlueGradient px-5 rounded-sm flex gap-2 items-center">
              Start for free <HiOutlineArrowRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;

//  <div className=" w-full justify-between items-center hidden md:flex">
//    <ul className="flex w-[70%] justify-between">
//      <li>Company</li>
//      <li>Product</li>
//      <li>Resources</li>
//      <li>Pricing</li>
//      <li>Contact Us</li>
//    </ul>
//    <div className="flex  gap-4">
//      <button className="login px-7 py-1">Login</button>
//      <button className="BlueGradient px-7">Start for free -</button>
//    </div>
//  </div>;
