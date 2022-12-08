import React from "react";
import { Logo } from "../assets/index";

const Footer = () => {
  return (
    <section className="w-full footerBg sm:h-[400px] text-Lightgrey pt-[6rem] px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem]">
      <div className="flex flex-col sm:flex-row gap-24 xl:gap-x-32 mb-[4rem] justify-center text-[16px] sm:text-[14px] lg:text-[16px] ">
        <ul>
          <li className="font-semibold sm:text-[18px] text-[20px] mb-3">
            Company
          </li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>

        <ul>
          <li className="font-semibold sm:text-[18px] text-[20px] mb-3">
            Resources
          </li>
          <li>Pricing</li>
          <li>API docs</li>
          <li>Documentations</li>
          <li>Github</li>
        </ul>

        <ul>
          <li className="font-semibold sm:text-[18px] text-[20px] mb-3">
            Quick Links
          </li>
          <li>Products</li>
          <li>Supported Blockchains</li>
        </ul>
      </div>
      <div className="text-center flex flex-col justify-center items-center gap-6">
        <img src={Logo} alt="" className="w-[10rem]" />
        <p className="text-[11px] md:text-[10.5px]  md:w-[50%] text-grey">
          Capital Software & Services Inc. is a financial technology company and
          is not a bank. Banking services provided by Blue Ridge Bank, N.A.;
          Member FDIC. The Capital Software & Services Inc. Visa® Debit Card is
          issued by Blue Ridge Bank, N.A. pursuant to a license from Visa U.S.A.
          Inc. and may be used everywhere Visa debit cards are accepted.
        </p>
      </div>
    </section>
  );
};

export default Footer;
