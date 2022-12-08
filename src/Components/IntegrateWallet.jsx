import React from "react";
import creators from "../assets/creatorsCode.svg";
import { HiOutlineArrowRight } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { integrated } from "../assets/index";

const IntegrateWallet = () => {
  return (
    <section className="bg-black w-full text-white flex flex-col gap-[6rem] pb-[10rem] md:pb-[12rem] px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem]">
      <div className="flex flex-col md:flex-row justify-between items-center relative overflow-x-hidden">
        <article className="md:w-[38%] w-[80%] ">
          <AiOutlinePlus className="h-10 w-10 text-Lightgrey" />
          <h2 className="tracking-[0.4rem] sm:text-[13px] text-[18px] title">
            FOR BUSINESSES
          </h2>
          <h2 className="text-[44px] ss:text-[48px] sm:text-[58px] md:text-[46px] lg:text-[56px] xl:text-[72px] font-bold my-4 w-[90%] tracking-tighter">
            Integrate Secure Wallet Infrastructure For Your product.
          </h2>
          <p className="text-grey text-[22px] ss:text-[24px] sm:text-[28px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
            Our platform readily connects with any ecosystem: blockchain,
            fintechs, any businesses that wants to build web3 solution. We offer
            infinite scalability and limitless usage for businesses and
            enterprises.
          </p>
          <button className="BlueGradient w-[12rem] justify-center hover:bg-white px-4 mt-12 text-white flex items-center gap-1 py-1 mb-6">
            Get Started
            <HiOutlineArrowRight />
          </button>
        </article>

        <img src={integrated} alt="" className="md:w-[40%] w-full z-[5] " />
        <div className="lightBall "></div>
      </div>
    </section>
  );
};

export default IntegrateWallet;
