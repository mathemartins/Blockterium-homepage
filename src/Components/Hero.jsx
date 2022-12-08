import React from "react";
import { HeroImg } from "../assets/index";
import { HiOutlineArrowRight } from "react-icons/hi";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full h-[1020px] sm:h-[1200px] md:h-[700px]  lg:h-[800px] relative bg-black overflow-hidden py-[8rem] md:py-[12rem] text-white px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem]">
      <div className="neww hidden md:flex"></div>
      <div className="lightBg md:hidden"></div>
      <div className="flex flex-col md:flex-row justify-between">
        <article className="flex flex-col gap-8 md:gap-4">
          <h2 className="font-bold text-[44px] ss:text-[48px] sm:text-[58px] md:text-[46px] lg:text-[56px] xl:text-[72px] tracking-tighter">
            Create your ideal dream <br className="hidden sm:block" />{" "}
            applications on Blockchain
          </h2>
          <p className="tracking-wide text-[22px] ss:text-[24px] sm:text-[28px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
            The quickest way to create, test, and use blockchain{" "}
            <br className="hidden md:block" /> apps is using Blockterium.
          </p>

          <div className="flex ss:flex-row flex-col gap-3 text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
            <button className="BlueGradient px-7 py-2 md:py-1 flex items-center gap-2 rounded-sm justify-center">
              Start for free <HiOutlineArrowRight />{" "}
            </button>
            <button className="bg-white text-black px-10 py-2 md:py-1 rounded-sm">
              See Pricing
            </button>
          </div>
          <Link
            to=""
            className="flex items-center gap-1 text-[16px] md:text-[14px] lg:text-[16px] xl:text-[18px] mt-2"
          >
            <AiOutlineCloudDownload /> Download whitepaper/ deck
          </Link>
        </article>
        <div className="md:w-[50%]">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <article className=" w-[60%] text-white ">
  <h2 className="md:text-[48px] lg:text-[54px] xl:text-[68px] font-bold">
    Create your ideal dream <br /> applications on Blockchain
  </h2>
  <p className="md:text-[22px] lg:text-[28px] lg:tracking-wide lg:w-[75%] xl:w-[60%]">
    The quickest way to create, test, and use blockchain apps is using
    Blockterium.
  </p>
</article>; */
}
