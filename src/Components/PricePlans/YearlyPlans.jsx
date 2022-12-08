import React from "react";
import {
  timesIcon,
  greyCheckedIcon,
  GreenCheckedIcon,
} from "../../assets/index";

const YearlyPlans = () => {
  return (
    <div>
      <article className="flex gap-10  justify-center">
        <div className="border-r-4 border-b-4 border border-black hover:border-LightBlue  subscription w-[30%] text-[14px] p-3 ">
          <div>
            <h2 className="font-semibold text-[16px]">Enterprise</h2>
            <h2 className="font-bold mt-2 mb-4 text-[16px]">
              $120 <span className="font-normal text-[14px]">/ Year</span>
            </h2>
            <p className="mb-4">
              Flexible pricing without monthly fees and a 5% fee per
              transaction.
            </p>
          </div>

          <ul className="flex flex-col gap-2">
            <li className="flex gap-3">
              <img src={timesIcon} alt="" />
              <p className="font-bold">5% fee per transaction*</p>
            </li>
            <li className="flex gap-3">
              <img src={greyCheckedIcon} alt="" />
              <p>Unlimited pages</p>
            </li>
            <li className="flex gap-3">
              <img src={greyCheckedIcon} alt="" />
              <p>Unlimited payments</p>
            </li>
            <li className="flex gap-3">
              <img src={greyCheckedIcon} alt="" />
              <p>Email notifications</p>
            </li>
            <li className="flex gap-3">
              <img src={greyCheckedIcon} alt="" />
              <p>Weekly reports</p>
            </li>
            <li className="flex gap-3">
              <img src={greyCheckedIcon} alt="" />
              <p>Customisation options</p>
            </li>
            <li className="flex gap-3">
              <img src={greyCheckedIcon} alt="" />
              <p>No whitelabel branding</p>
            </li>
          </ul>

          <button className="BlueGradient text-white py-1 px-2 my-5">
            Choose Plan
          </button>
        </div>

        <div className="border-r-4 border-b-4 border border-black hover:border-LightBlue w-[30%] text-[14px] p-3 ">
          <div>
            <h2 className="font-semibold text-[16px]">Enterprise</h2>
            <h2 className="font-bold mt-2 mb-4 text-[16px]">
              $360 <span className="font-normal text-[14px]">/ Year</span>
            </h2>
            <p className="mb-4">
              Monthly pricing that automatically adjusts based on your
              transaction volume.
            </p>
          </div>

          <ul className="flex flex-col gap-2">
            <li className="flex gap-3">
              <img src={GreenCheckedIcon} alt="" />
              <p className="font-bold">No transaction fees</p>
            </li>
            <li className="flex gap-3">
              <img src={greyCheckedIcon} alt="" />
              <p>Unlimited pages</p>
            </li>
            <li className="flex gap-3">
              <img src={greyCheckedIcon} alt="" />
              <p>Unlimited payments</p>
            </li>
            <li className="flex gap-3">
              <img src={greyCheckedIcon} alt="" />
              <p>Email notifications</p>
            </li>
            <li className="flex gap-3">
              <img src={greyCheckedIcon} alt="" />
              <p>Weekly reports</p>
            </li>
            <li className="flex gap-3">
              <img src={greyCheckedIcon} alt="" />
              <p>Customisation options</p>
            </li>
            <li className="flex gap-3">
              <img src={greyCheckedIcon} alt="" />
              <p>No whitelabel branding</p>
            </li>
          </ul>

          <button className="BlueGradient text-white py-1 px-2 my-5">
            Choose Plan
          </button>
        </div>

        <div className="border-r-4 border-b-4 border border-black hover:border-LightBlue w-[30%] text-[14px] p-3 ">
          <div>
            <h2 className="font-semibold text-[16px]">Enterprise</h2>
            <h2 className="font-bold mt-2 mb-4 text-[16px]">
              $90 <span className="font-normal text-[14px]">/ Year</span>
            </h2>
            <p className="mb-4">
              Flexible pricing without monthly fees and a 5% fee per
              transaction.
            </p>
          </div>

          <ul className="flex flex-col gap-2">
            <li className="flex gap-3">
              <img src={timesIcon} alt="" />
              <p className="font-bold">5% fee per transaction*</p>
            </li>
            <li className="flex gap-3">
              <img src={greyCheckedIcon} alt="" />
              <p>Unlimited pages</p>
            </li>
            <li className="flex gap-3">
              <img src={greyCheckedIcon} alt="" />
              <p>Unlimited payments</p>
            </li>
            <li className="flex gap-3">
              <img src={greyCheckedIcon} alt="" />
              <p>Email notifications</p>
            </li>
            <li className="flex gap-3">
              <img src={greyCheckedIcon} alt="" />
              <p>Weekly reports</p>
            </li>
            <li className="flex gap-3">
              <img src={greyCheckedIcon} alt="" />
              <p>Customisation options</p>
            </li>
            <li className="flex gap-3">
              <img src={greyCheckedIcon} alt="" />
              <p>No whitelabel branding</p>
            </li>
          </ul>

          <button className="BlueGradient text-white py-1 px-2 my-5">
            Choose Plan
          </button>
        </div>
      </article>
    </div>
  );
};

export default YearlyPlans;
