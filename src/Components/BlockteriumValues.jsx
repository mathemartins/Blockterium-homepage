import React from "react";
import creators from "../assets/creatorsCode.svg";

const BlockteriumValues = () => {
  return (
    <section className="bg-black w-full text-white flex flex-col gap-[6rem] sm:px-[5rem] px-[3rem] pt-12 pb-[12rem]">
      <div className="flex flex-col sm:flex-row justify-between ">
        <article className="md:w-[38%] w-full mt-[10rem]">
          <h2 className="tracking-[0.4rem] sm:text-[13px] text-[18px] title">
            CREATORS AND BUSINESSES
          </h2>
          <h2 className="text-[24px] font-bold my-4 w-[70%]">
            Seamless integration with massive value.
          </h2>
          <p className="text-grey md:text-[18px] text-[20px]">
            Our platform readily connects with any ecosystem. We offer infinite
            scalability and limitless usage for businesses and enterprises.
          </p>
          <div className="bg-primary h-[0.157rem] w-[6rem] mt-3"></div>
        </article>
        <img src={creators} alt="" className="sm:w-[40%] w-full" />
      </div>

      <div className="flex flex-col sm:flex-row justify-between ">
        <article className="md:w-[38%] w-full mt-[10rem]">
          <h2 className="tracking-[0.4rem] sm:text-[13px] text-[18px] title">
            CREATORS AND BUSINESSES
          </h2>
          <h2 className="text-[24px] font-bold my-4 w-[70%]">
            Seamless integration with massive value.
          </h2>
          <p className="text-grey sm:text-[18px] text-[20px]">
            Our platform readily connects with any ecosystem. We offer infinite
            scalability and limitless usage for businesses and enterprises.
          </p>
          <div className="bg-primary h-[0.157rem] w-[6rem] mt-3"></div>
        </article>
        <img src={creators} alt="" className="sm:w-[40%] w-full" />
      </div>
    </section>
  );
};

export default BlockteriumValues;
