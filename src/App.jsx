import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import BlockteriumDescrpt from "./Components/BlockteriumDescrpt.section";
import IntegrateWallet from "./Components/IntegrateWallet";
import BlockteriumUse from "./Components/BlockteriumUse";
import BlockteriumAim from "./Components/BlockteriumAim";
import BlockteriumProducts from "./Components/BlockteriumProducts";
import BlockteriumAdvantages from "./Components/BlockteriumAdvantanges";
import BlockteriumIntCards from "./Components/BlockteriumIntCards";
import PopularUseCase from "./Components/PopularUseCase";
import SubscriptionPlan from "./Components/SubscriptionPlan";
import ReviewQuestions from "./Components/ReviewQuestions";
import Reviews from "./Components/Reviews";
import BlockChainEmpowering from "./Components/BlockChainEmpowering";
import Footer from "./Components/Footer";

export default function App(props) {
  return (
    <div className="font-assistant">
      <Navbar />
      <Hero />
      <BlockteriumDescrpt />
      <IntegrateWallet />
      <BlockteriumUse />
      <BlockteriumAim />
      <BlockteriumProducts />
      <BlockteriumAdvantages />
      <BlockteriumIntCards />
      <PopularUseCase />
      <SubscriptionPlan />
      <ReviewQuestions />
      <BlockChainEmpowering />
      <Footer />
    </div>
  );
}

/*<BlockteriumSlider />
      <BlockteriumIntCards />
      <Slick />
      <SubscriptionPlan /> */

/* <Reviews /> */

/* <BlockChainEmpowering /> */

/* <Footer /> */
