import React from "react";
import { sponsors } from "../../assets/index";
import { HiOutlineArrowRight } from "react-icons/hi";

const BlockteriumSponsors = () => {
  return (
    <section className="bg-black w-full text-12 flex flex-col items-center justify-center pt-[6rem] xsm:pt-[10rem] pb-[12rem] relative overflow-hidden">
      <p className="text-grey lg:text-[14px] xl:text-[16px]">
        Trusted by 30+ applications
      </p>

      <img src={sponsors} alt="" className="w-full sm:w-[80%]  mb-16" />

      <p className="text-primaryFontColor text-[22px] md:text-[18px] lg:text-[20px] xl:text-[24px] w-[90%] sm:w-[45%] md:w-[30%] text-center mb-3 z-[2]">
        We are a blockchain infrastructure provider enabling you to seamlessly
        utilize secure blockchain node protocols.
      </p>

      <div className="flex ss:flex-row flex-col mt-3 ss:gap-3 text-[20px] md:text-[14px] lg:text-[16px] xl:text-[18px] z-[2]">
        <button className="bg-blue hover:bg-white hover:text-black px-8 py-[0.3rem]  flex items-center gap-2 rounded-2xl justify-center text-white ">
          See case studies <HiOutlineArrowRight className="animatedIcon" />{" "}
        </button>
        <button className="greyGradient text-white px-16 mt-4 ss:mt-0   rounded-2xl ">
          Learn More
        </button>
      </div>
      <div className="sponsorDiv"></div>
    </section>
  );
};

export default BlockteriumSponsors;
