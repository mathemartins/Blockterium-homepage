import React from "react";
import registerSlider from "../../assets/registerSliderImg.svg";

const FirstSlideRoute = () => {
  return (
    <>
      <div className="motionBackground h-[22rem] w-full md:w-[70%] m-auto rounded-3xl flex text-white items-center gap-12">
        <img src={registerSlider} alt="" className="max-h-[22rem] md:hidden" />
        <article className="">
          <h1 className="text-[28px] font-bold w-[65%] max-w-[70%]">
            Seamless integration with massive value
          </h1>
          <p className="text-Lightgrey text-[20px] md:text-[18px] w-[80%] max-w-[90%] my-4">
            Our products are integrated seamlessly into any digital platform or
            website
          </p>
          <button className="bg-black p-5 rounded-xl text-[14px]">
            sign up for free -
          </button>
        </article>
      </div>
      ;
    </>
  );
};

export default FirstSlideRoute;
