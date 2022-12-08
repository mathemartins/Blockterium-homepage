import React from "react";
import { PopularUseMd, smallScreen } from "../assets/index";

const PopularUseCase = () => {
  return (
    <section className="bg-black text-white text-center py-[6rem]">
      <div className=" ">
        <article className="mb-16 bg-black py-4">
          <h1 className="text-[44px] ss:text-[48px] sm:text-[58px] md:text-[46px] lg:text-[56px] xl:text-[72px] font-bold tracking-tighter">
            Popular use cases
          </h1>
          <p className="md:text-[14px] text-[18px] lg:text-[22px] text-grey">
            We provide the most adaptable platform for developers <br /> to
            materialize their blockchain concepts quickly.
          </p>
        </article>

        <div className="w-[80%] md:w-[60%] h-[300px] overflow-auto scroll m-auto flex flex-col gap-12">
          <img
            src={PopularUseMd}
            alt=""
            className="w-[90%] m-auto hidden md:block"
          />
          <img
            src={PopularUseMd}
            alt=""
            className="w-[90%] m-auto hidden md:block"
          />
          <img
            src={PopularUseMd}
            alt=""
            className="w-[90%] m-auto hidden md:block"
          />

          <img src={smallScreen} alt="" className="w-[90%] m-auto md:hidden" />
          <img src={smallScreen} alt="" className="w-[90%] m-auto md:hidden" />
          <img src={smallScreen} alt="" className="w-[90%] m-auto md:hidden" />
        </div>
      </div>
    </section>
  );
};

export default PopularUseCase;
