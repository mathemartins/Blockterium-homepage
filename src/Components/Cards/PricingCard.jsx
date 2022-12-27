import React, { useState } from "react";
import ActionButton from "../Inputs/ActionButton";
import { Pricing } from "../home";
import { SubPackages } from "../../assets/index";
import Toggle from "../../Components/home/Toggle";

const PricingCard = ({ plan, subscription, benefits, custom }) => {
  return (
    <section
      className="bg-darkestBlue flex flex-col items-center relative sm:px-12 lg:px-[6rem] xl:px-[10rem] overflow-x-hidden"
      id="pricesection"
    >
      <div className="bg-GreyOne w-[70vw] pt-10  flex flex-col items-center rounded-t-[80px]">
        <div className="bg-GreyTwo w-[80vw] pt-10 rounded-t-[80px] flex flex-col items-center justify-center">
          <div className="bg-greySix w-[100vw] rounded-t-[80px] py-[4rem] px-3 ss:px-6 md:px-[4rem] lg:px-[6rem] xl:px-[10rem]">
            <div className="text-center text-[14px] mb-[1rem]">
              <h1 className="font-bold text-[20px]">Plans and Pricing</h1>
              <p className="text-[16px]">
                Choose the best plan for your business
              </p>
            </div>
            <div className="bg-white pb-12">
              <Toggle />
              <img
                src={SubPackages}
                className="w-[80vw] m-auto hidden md:block"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCard;

// <>

//   <Pricing />
//   {custom && (
//     <ActionButton
//       classnames="bg-mainBlue text-mainWhite rounded w-[130px] py-2 px-4"
//       label="Contact Sales"
//     />
//   )}
// </>

{
  /* <div>
        <h6 className="text-lg font-semibold  mb-5">Free</h6>
        <h3 className="text-3xl font-bold mb-3">
          $0 <span className="text-sm text-greyTen font-light">/Month</span>
        </h3>
        <div className="text-greyTen text-sm">
          <p className="mb-5">Unlimited API Calls</p>
          <p className="mb-5">5 rq/s</p>
          <p className="mb-5">Community Support</p>
          <p className="mb-5">All Testnets</p>
          <p className="mb-5">Market Data</p>
        </div>
      </div> */
}
