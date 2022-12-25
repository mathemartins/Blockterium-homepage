import React from "react";
import { dashboarb } from "../../assets/index";

const BlockChainEmpowering = () => {
  return (
    <section className="purpleBlackGradient text-white pt-[6rem] text-center w-full xsm:px-[10rem] px-3 ss:px-6 sm:px-12">
      <h1 className="font-bold text-[28px] xsm:text-[36px] tracking-tighter">
        Empowering Web3 developers <br /> to build the apps of their dreams
      </h1>
      <p className="md:w-[45%] w-full xsm:mx-auto my-6 text-grey">
        Our solutions include wallet as a service solution (Custodial and
        Non-Custodial for wallet creation, send and receive), Defi yield
        Interoperability solution and decentralized peer - 2 - peer
        infrastructure.
      </p>
      <button className="bg-darkestGrey px-3 py-1 rounded-3xl text-[13px] mb-24">
        Sign up for free -
      </button>
      <div>
        <img src={dashboarb} className=" rounded-xl hidden md:block" alt="" />
      </div>
    </section>
  );
};

export default BlockChainEmpowering;
