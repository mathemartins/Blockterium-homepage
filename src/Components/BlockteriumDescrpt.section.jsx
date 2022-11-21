import React from "react";
import sponsors from "../assets/sponsors.svg";

const BlockteriumDescrpt = () => {
  return (
    <section className="bg-black w-full text-12 flex flex-col items-center pt-[6rem] pb-[12rem]">
      <p className="text-primary mb-6">ML DEVELOPMENT</p>
      <p className="text-primaryFontColor text-[24px] w-[90%] md:w-[55%] text-center mb-5">
        We are a blockchain infrastructure provider enabling businesses and
        enterprises to seamlessly utilize secure blockchain node protocols to
        set up, manage, and scale their digital assets-related operations.
      </p>
      <button className="signup px-4 mb-12 text-white">Start for free -</button>

      <img src={sponsors} alt="" className="w-full sm:w-[80%]  mt-12" />
    </section>
  );
};

export default BlockteriumDescrpt;
