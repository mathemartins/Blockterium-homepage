import React from "react";

import { HiOutlineArrowRight } from "react-icons/hi";
import { creatorsCode } from "../assets/index";
import { AiOutlinePlus } from "react-icons/ai";

const BlockteriumAim = () => {
  return (
    <section className="blackGradient w-full text-white flex flex-col gap-[6rem] py-[6rem] lg:py-[12rem] md:pb-[12rem] px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem] ">
      <div className="flex flex-col md:flex-row justify-between md:items-center ">
        <article className="md:w-[38%]  ">
          <AiOutlinePlus className="h-10 w-10 text-Lightgrey" />
          <h2 className="tracking-[0.4rem] sm:text-[13px] text-[18px] title">
            BUILT FOR DEVELOPERS
          </h2>
          <h2 className="text-[44px] ss:text-[48px] sm:text-[58px] md:text-[46px] lg:text-[56px] xl:text-[72px] font-bold my-4  tracking-tighter">
            Build great products with ready-made multichain crypto wallet APIs.
          </h2>
          <p className="text-grey text-[22px] ss:text-[24px] sm:text-[28px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
            Blockterium offers a framework that reduces the complexity of
            blockchain development. This, in turn, reduces the cost and time
            spent on writing codes.
          </p>
          <button className="BlueGradient w-[12rem] justify-center hover:bg-white px-4 mt-12 text-white flex items-center gap-1 py-1 mb-6">
            Start for free
            <HiOutlineArrowRight />
          </button>
        </article>
        <img src={creatorsCode} alt="" className="md:w-[40%] w-full" />
      </div>
    </section>
  );
};

export default BlockteriumAim;
