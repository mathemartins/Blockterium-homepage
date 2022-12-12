import React from "react";
import { HeroImg } from "../../assets/index";
import { HiOutlineArrowRight } from "react-icons/hi";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full h-[1020px] sm:h-[1200px] md:h-[700px] lg:h-[800px] relative bg-black overflow-hidden py-[6rem] md:py-[12rem] text-white px-3 sm:px-12 lg:px-[6rem] xl:px-[10rem]">
      <div className="neww hidden md:flex"></div>
      <div className="lightBg md:hidden"></div>
      <div className="flex flex-col md:flex-row justify-between">
        <article className="z-[5]">
          <h2 className="font-bold text-[44px] ss:text-[52px] sm:text-[58px] md:text-[46px] lg:text-[56px] xl:text-[72px] tracking-tighter">
            Create your ideal dream <br className="hidden sm:block" />{" "}
            applications on Blockchain
          </h2>
          <p className="tracking-wide text-[20px] ss:text-[22px] sm:text-[24px] md:text-[20px] lg:text-[22px] xl:text-[24px] my-6">
            The quickest way to create, test, and use blockchain
            <br className="hidden md:block" /> apps is using Blockterium.
          </p>

          <div className="flex ss:flex-row flex-col text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
            <Link
              to={"./sign-up"}
              className="BlueGradient px-7 py-2 md:py-1 flex items-center gap-2 rounded-xl justify-center"
            >
              Start for free <HiOutlineArrowRight className="animatedIcon" />
            </Link>
            <button className="bg-white text-black px-10 py-2 md:py-1 rounded-xl mt-3 ss:mt-0 ss:ml-3">
              See Pricing
            </button>
          </div>
          <Link
            to=""
            className="flex items-center gap-1 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] mt-2"
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
