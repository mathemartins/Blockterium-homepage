import React from "react";
import Logo from "../assets/Logo.svg";
import HeroImg from "../assets/HeroImg.svg";

const Hero = () => {
  return (
    <section className="bg-primary w-full py-8 text-white ">
      <div className="m-auto flex flex-col items-center pt-[6rem]">
        <img
          src={Logo}
          alt=""
          className="hidden md:block w-[12rem]  pb-[3rem]"
        />
        <h1 className="text-[36px] md:text-[48px] ss:text-[46px] md:w-[75%] w-[90%] font-bold text-center tracking-tighter">
          Enabling Web3 developers to create their ideal dream applications
        </h1>

        <p className="md:w-[45%] w-[80%] sm:w-[65%]  text-center my-7 text-[22px] md:text-[16px] paraInfo text-Lightgrey ">
          The quickest way to create, test, and use blockchain apps is using
          Blockterium. We provide the most adaptable platform for developers to
          materialize their blockchain concepts quickly.
        </p>

        <button className="signup px-7 mb-6">Start for free -</button>

        <img src={HeroImg} alt="" className="py-12  w-[90%]" />
      </div>
    </section>
  );
};

export default Hero;
