import React from "react";
import { Logo } from "../../assets/index";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="w-full footerBg  text-Lightgrey pt-[6rem] pb-12  px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem]">
      <div className="flex flex-col sm:flex-row gap-24 xl:gap-x-32 mb-[4rem] justify-center text-[16px] sm:text-[14px] lg:text-[16px] ">
        <ul>
          <li className="font-semibold sm:text-[18px] text-[20px] mb-3">
            Company
          </li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>

        <ul>
          <li className="font-semibold sm:text-[18px] text-[20px] mb-3">
            Resources
          </li>
          <li>Pricing</li>
          <li>API docs</li>
          <li>Documentations</li>
          <li>Github</li>
        </ul>

        <ul>
          <li className="font-semibold sm:text-[18px] text-[20px] mb-3">
            Quick Links
          </li>
          <li>Products</li>
          <li>Supported Blockchains</li>
        </ul>
      </div>
      <div className="text-center flex flex-col justify-center items-center gap-6">
        <img src={Logo} alt="" className="w-[10rem]" />
        <p className="text-[11px] md:text-[10.5px]  md:w-[50%] text-grey">
          This is a blockchain infrastructure company that allows businesses or
          enterprises to access secured blockchain node protocols to establish,
          run and scale their digital assets activities seamlessly.
        </p>

        <div className="flex flex-col sm:flex-row text-[14px]">
          <p>Ⓒ Blockterium 2022– All Rights Reserved</p>
          <span className="flex justify-center items-center text-white gap-2 mt-2 sm:mt-0 sm:ml-2">
            <BsTwitter />
            <BsInstagram />
            <BsFacebook />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
