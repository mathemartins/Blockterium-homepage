import React from "react";
import { Advantage } from "../../assets/index";
import { HiOutlineArrowRight } from "react-icons/hi";
import { coreValues, coreValues1, coreValues2 } from "./data";

const BlockteriumAdvantages = () => {
  return (
    <section className="bg-white py-[6rem] lg:py-[12rem] flex flex-col xsm:flex-row  items-center justify-between px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem]">
      <div className="w-[25%] h-[400px] flex-col justify-between hidden xsm:flex">
        {coreValues1.map(({ img, info, id }) => {
          return (
            <div key={id}>
              <div className="flex flex-col items-center gap-6 justify-center">
                <img src={img} alt="" className="w-10 " />
                <p className="text-[20px] ss:text-[24px] sm:text-[28px] xsm:text-[18px] lg:text-[22px] xl:text-[24px] xsm:w-[90%] xsm:text-center">
                  {info}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <article className="xsm:w-[40%] flex flex-col justify-center items-center h-[400px] xsm:py-6">
        <h1 className="text-[44px] ss:text-[48px] sm:text-[58px] xsm:text-[38px] md:text-[42] lg:text-[46px] xl:text-[64px] font-bold my-4 md:w-[70%] mb-8 text-black leading-[4rem] text-center">
          Why blockerium <br /> is 10x better 🤩!
        </h1>
        <p className="text-[22px] ss:text-[24px] sm:text-[26px] xsm:text-[18px] lg:text-[22px] xl:text-[24px] text-black md:w-[70%] text-center">
          Our solutions include wallet as a service solution (Custodial and
          Non-Custodial for wallet creation, send and receive), Defi yield
          Interoperability solution and decentralized peer - 2 - peer
          infrastructure.
        </p>

        <button className="BlueGradient justify-center hover:bg-white px-10 my-6 text-white flex items-center gap-1 py-1 rounded-2xl">
          Start for free
          <HiOutlineArrowRight />
        </button>
      </article>

      <div className="w-[25%] h-[400px] flex-col justify-between hidden xsm:flex">
        {coreValues2.map(({ img, info, id }) => {
          return (
            <div key={id} className="">
              <div className="flex flex-col items-center gap-6 justify-center">
                <img src={img} alt="" className="w-10 " />
                <p className="text-[20px] ss:text-[24px] sm:text-[28px] xsm:text-[18px] lg:text-[22px] xl:text-[24px] xsm:w-[90%] xsm:text-center">
                  {info}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative xsm:hidden mt-12">
        <div className=" grid sm:grid-rows-2 sm:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-2 ">
          {coreValues.map(({ img, info }) => {
            return (
              <div className="">
                <img src={img} alt="" className="w-8 sm:w-10" />
                <p className="text-[20px] ss:text-[24px] sm:text-[28px] w-[70%] sm:w-full">
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
