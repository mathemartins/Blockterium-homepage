import React from "react";

const YearlyPriceCard = () => {
  return (
    <div>
      {" "}
      <div className=" border-2 border-greySeven  w-full  text-[14px] p-3 ">
        <div className="pt-4">
          <h2 className="font-semibold text-[18px]">Free</h2>
          <h2 className="font-bold mt-1 mb-6 text-[22px]">
            $0 <span className="font-normal text-[12px]">/ month</span>
          </h2>
        </div>

        <ul className="flex flex-col gap-3">
          <li className="">Unlimited API calls</li>
          <li className="">5rq/s</li>
          <li className="">Community support</li>
          <li className="">API Testnets</li>
          <li className="">Market Data</li>
        </ul>
      </div>
    </div>
  );
};

export default YearlyPriceCard;
