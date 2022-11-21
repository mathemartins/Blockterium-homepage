import React from "react";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <section className="bg-black w-full h-[3rem] z-10 text-white text-[13px] py-2 fixed top-0 bottom-0 left-0 right-0 px-[5rem]">
      <img src={Logo} alt="" className="md:hidden block w-[8rem] py-2" />
      <div className=" w-full justify-between items-center hidden md:flex">
        <ul className="flex w-[70%] justify-between">
          <li>Company</li>
          <li>Product</li>
          <li>Resources</li>
          <li>Pricing</li>
          <li>Contact Us</li>
        </ul>
        <div className="flex  gap-4">
          <button className="login px-7 py-1">Login</button>
          <button className="signup px-7">Start for free -</button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
