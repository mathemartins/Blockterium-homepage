import React from "react";
import {
  Hero,
  ReviewQuestions,
  Sponsors,
  IntegrateWallet,
  BlockteriumAdvantanges,
  BlockteriumAim,
  BlockteriumIntCards,
  PopularUseCase,
  BlockteriumUse,
  BlockChainEmpowering,
  BlockteriumProducts,
  Footer,
} from "../home/index";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Sponsors />
      <IntegrateWallet />
      <BlockteriumUse />
      <BlockteriumAim />
      <BlockteriumProducts />
      <BlockteriumAdvantanges />
      <BlockteriumIntCards />
      <PopularUseCase />
      <ReviewQuestions />
      <BlockChainEmpowering />
      <Footer />
    </>
  );
};

export default HomePage;
