import React from "react";
import { Advantage } from "../../assets/index";
import { HiOutlineArrowRight } from "react-icons/hi";
import { coreValues } from "./data";

const BlockteriumAdvantages = () => {
  return (
    <section className="bg-white py-[6rem] lg:py-[12rem] flex flex-col md:flex-row justify-between items-center px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem]">
      <article className="  ">
        <h1 className="text-[44px] ss:text-[48px] sm:text-[58px] md:text-[46px] lg:text-[56px] xl:text-[72px] font-bold my-4 md:w-[70%] mb-8 text-blue leading-[4rem]">
          Why blockerium is 10x better 🤩!
        </h1>
        <p className="text-[22px] ss:text-[24px] sm:text-[28px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-black md:w-[70%]">
          Our solutions include wallet as a service solution (Custodial and
          Non-Custodial for wallet creation, send and receive), Defi yield
          Interoperability solution and decentralized peer - 2 - peer
          infrastructure.
        </p>

        <button className="BlueGradient w-[12rem] justify-center hover:bg-white px-4 my-12 text-white flex items-center gap-1 py-1 rounded-2xl">
          Start for free
          <HiOutlineArrowRight />
        </button>
      </article>
      <div className="relative">
        <img src={Advantage} className="hidden md:flex" alt="" />
        <div className="md:absolute md:top-7 top-20 grid sm:grid-rows-2 sm:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-2">
          {coreValues.map(({ img, info }) => {
            return (
              <div>
                <img src={img} alt="" className="w-8 " />
                <p className="text-[20px] ss:text-[24px] sm:text-[28px] md:text-[14px] lg:text-[22px] xl:text-[24px]">
                  {info}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlockteriumAdvantages;
