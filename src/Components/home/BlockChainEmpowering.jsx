import React from "react";
import { dashboarb } from "../../assets/index";

const BlockChainEmpowering = () => {
  return (
    <section className="purpleBlackGradient text-white pt-[6rem] text-center w-full px-[10rem] hidden md:block">
      <h1 className="font-bold text-[36px] tracking-tighter">
        Empowering Web3 developers <br /> to build the apps of their dreams
      </h1>
      <p className="w-[45%] mx-auto my-6 text-grey">
        Tatum is the fastest way to build, test and run blockchain apps. We
        offer the most flexible platform for developers to turn their blockchain
        ideas into reality fast.
      </p>
      <button className="bg-darkestGrey px-3 py-1 rounded-3xl text-[13px] mb-24">
        Sign up for free -
      </button>
      <div>
        <img src={dashboarb} className=" rounded-xl" alt="" />
      </div>
    </section>
  );
};

export default BlockChainEmpowering;
