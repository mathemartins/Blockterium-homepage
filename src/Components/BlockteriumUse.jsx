import React from "react";
import interaction from "../assets/Interaction.svg";
import BlockchainList from "../assets/BlockchainList.svg";

const BlockteriumUse = () => {
  return (
    <section className="bg-primary py-12 px-12">
      <div className="hidden md:block">
        <img src={interaction} alt="" />
      </div>

      <article className="md:hidden text-white flex flex-col gap-10">
        <h1 className="text-[28px] font-bold">
          Built to help developers scale quickly.
        </h1>
        <p className="text-[20px] text-Lightgrey">
          Build seamlessly on any supported blockchain without any prior
          blockchain knowledge with Blockterium’s API. Deploy your code once to
          any blockchain of your choice.
        </p>
        <img src={BlockchainList} alt="" />
      </article>
    </section>
  );
};

export default BlockteriumUse;
