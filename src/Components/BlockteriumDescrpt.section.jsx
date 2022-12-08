import React from "react";
import sponsors from "../assets/sponsors.svg";
import { HiOutlineArrowRight } from "react-icons/hi";

const BlockteriumDescrpt = () => {
  return (
    <section className="bg-black w-full text-12 flex flex-col items-center pt-[6rem] pb-[12rem]">
      <p className="text-grey lg:text-[14px] xl:text-[16px]">
        Trusted by 30+ applications
      </p>

      <img src={sponsors} alt="" className="w-full sm:w-[80%]  my-12" />

      <p className="text-primaryFontColor text-[24px] md:text-[20px] lg:text-[22px] xl:text-[24px] w-[90%] md:w-[55%] text-center mb-5">
        We are a blockchain infrastructure provider enabling you to seamlessly
        utilize secure blockchain node protocols.
      </p>

      <div className="flex ss:flex-row flex-col gap-3 mt-3 text-[20px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
        <button className="BlueGradient px-7 py-2  flex items-center gap-2 rounded-sm justify-center text-white w-[70vw] ss:w-[15rem]">
          See case studies <HiOutlineArrowRight />{" "}
        </button>
        <button className="bg-white text-black px-10 py-2  rounded-sm ss:w-[15rem]">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default BlockteriumDescrpt;
