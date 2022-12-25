import React from "react";
import { HeroImg } from "../../assets/index";
import { HiOutlineArrowRight } from "react-icons/hi";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Price } from "../../routes/navigation/navLinks/index";
const Hero = () => {
  return (
    <section className="w-full h-[1020px] sm:h-[800px] xsm:h-[700px] lg:h-[800px] relative bg-black overflow-hidden pt-[8rem] md:py-[12rem] text-white px-3 ss:px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem]">
      <div className="neww hidden md:flex"></div>
      <div className="lightBg xsm:hidden"></div>
      <div className=" miniLappy md:hidden"></div>
      <div className="flex flex-col xsm:flex-row justify-between items-center">
        <article className="z-[5]">
          <h2 className="font-bold text-[44px] ss:text-[52px] sm:text-[42px] md:text-[46px] lg:text-[56px] xl:text-[72px] tracking-tighter">
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
              className="bg-blue hover:bg-white hover:text-black px-7 py-2 md:py-1 flex items-center gap-2 rounded-xl justify-center"
            >
              Start for free <HiOutlineArrowRight className="animatedIcon" />
            </Link>
            <button className="bg-white flex gap-1 text-black px-10 py-2 md:py-1 rounded-xl mt-3 ss:mt-0 ss:ml-3">
              See <Price />
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
          <img
            src={HeroImg}
            alt=""
            className="z-[5] sm:w-[500px] sm:h-[300px] md:w-full "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
