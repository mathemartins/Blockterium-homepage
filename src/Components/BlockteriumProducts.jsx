import React from "react";
import { Decentralised } from "../assets/index";
import BlockchainList from "../assets/BlockchainList.svg";

const BlockteriumProducts = () => {
  return (
    <section className="BlueGradient py-[6rem] lg:py-[12rem] flex flex-col md:flex-row justify-between items-center px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem]">
      <article className=" text-white ">
        <p className="tracking-[0.3em] text-[14px] lg:text-[16px]">
          PRODUCTS YOU CAN BUILD ON
        </p>
        <h1 className="text-[44px] ss:text-[48px] sm:text-[58px] md:text-[46px] lg:text-[56px] xl:text-[72px] font-bold my-4 md:w-[70%] mb-8 tracking-tighter">
          Build decentralised applications with unlimited API calls.
        </h1>
        <p className="text-[22px] ss:text-[24px] sm:text-[28px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-Lightgrey md:w-[70%]">
          Build seamlessly on any supported blockchain without any prior
          blockchain knowledge with Blockterium’s API. Deploy your code once to
          any blockchain of your choice.
        </p>
      </article>
      <div className="">
        <img src={Decentralised} className="" alt="" />
      </div>
    </section>
  );
};

export default BlockteriumProducts;
