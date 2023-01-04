import React from "react";
import { Logo } from "../../assets/index";
import { Footer } from "./index";
import { Link } from "react-router-dom";
import { contactUsPageCards } from "./data";
import { HiOutlineArrowLeft } from "react-icons/hi";

const ContactUs = () => {
  return (
    <>
      <nav className="bg-black w-full z-10 text-white fixed top-0 py-1 left-0 right-0 px-3 ss:px-6  sm:px-12 lg:px-[6rem] xl:px-[10rem]">
        <Link to={"/"}>
          <img
            src={Logo}
            alt=""
            className=" w-[8rem] md:w-[7rem] py-2 hover:cursor-pointer"
          />
        </Link>
      </nav>
      <div className="bg-black w-full py-[6rem] px-3 ss:px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem] xsm:px-[8rem]">
        <h2 className="contact text-[44px] ss:text-[48px] sm:text-[58px] md:text-[48px] lg:text-[56px] xl:text-[72px] font-bold text-center ">
          Contact Us
        </h2>

        <div className="flex flex-col xsm:flex-row gap-6 mt-[4rem] mb-12">
          {contactUsPageCards.map(({ title, img, info, id }) => {
            return (
              <div className="text-grey text-center flex flex-col justify-center items-center text-[14px] bg-darkestBlue px-3 py-12 rounded-xl hover:bg-greyFour hover:border-darkestBlue">
                <img src={img} alt="" className="w-24 h-24" />
                <h2 className="font-bold text-[16px] mt-4 m-2 text-white">
                  {title}
                </h2>
                <p>{info}</p>
              </div>
            );
          })}
        </div>

        {/* <Link to={"/"}>
          <button className="text-white flex justify-center items-center gap-2 m-auto bg-blue px-6 py-1 rounded-xl hover:bg-white hover:text-black">
            <HiOutlineArrowLeft /> Go back home
          </button>
        </Link> */}
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
