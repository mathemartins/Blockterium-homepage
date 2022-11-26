import React from "react";
import { massiveValues } from "./index.js";

const BlockteriumIntCards = () => {
  return (
    <section section className="w-full bg-secondaryColor px-[5rem]">
      <article className=" w-full p-12 text-white ">
        <h1 className=" text-[38px] text-center font-bold tracking-tighter">
          Seamless integration with <br />
          <h1 className="gradientTitle ">massive value</h1>
        </h1>
      </article>

      <div className="grid md:grid-cols-3 md:grid-rows-2 sm:grid-cols-2 sm:grid-rows-3 grid-cols-1 grid-rows-5 w-[100%] gap-x-12 gap-y-[6rem]">
        {massiveValues.map(({ title, img, info }) => {
          return (
            <div className="gradientContainer w-[100%]  text-white flex flex-col items-center p-8 text-center ">
              <img src={img} alt="" />
              <h2 className="mt-10 mb-4 font-bold text-[20px] md:text-[16px]">
                {title}
              </h2>
              <p className="text-[18px] md:text-[16px]  text-grey">{info}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlockteriumIntCards;

{
  /* <div className="hidden md:block w-[100%]">
  <img src={IntegratedValues} alt="" className="" />
</div>; */
}
// import IntegratedValues from "../assets/integratedValues.svg";
