import React from "react";
import { sponsors } from "../../assets/index";
import { HiOutlineArrowRight } from "react-icons/hi";

const BlockteriumSponsors = () => {
  return (
    <section className="bg-black w-full text-12 flex flex-col items-center justify-center pt-[6rem] pb-[12rem]">
      <p className="text-grey lg:text-[14px] xl:text-[16px]">
        Trusted by 30+ applications
      </p>

      <img src={sponsors} alt="" className="w-full sm:w-[80%] mt-6 mb-16" />

      <p className="text-primaryFontColor text-[22px] md:text-[18px] lg:text-[20px] xl:text-[24px] w-[90%] md:w-[55%] text-center mb-3">
        We are a blockchain infrastructure provider enabling you to seamlessly
        utilize secure blockchain node protocols.
      </p>

      <div className="flex ss:flex-row flex-col gap-3 mt-3 text-[20px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
        <button className="BlueGradient px-7 py-2  flex items-center gap-2 rounded-2xl justify-center text-white w-[70vw] ss:w-[12rem]">
          See case studies <HiOutlineArrowRight />{" "}
        </button>
        <button className="bg-white text-black px-10 py-2  rounded-2xl ss:w-[12rem]">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default BlockteriumSponsors;
