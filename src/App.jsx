import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/routes/navigation/Navbar";
import { HomePage, SignUp, Login, Pricing } from "./Components/routes/index";
// import BlockteriumDescrpt from "./Components/BlockteriumDescrpt.section";
// import IntegrateWallet from "./Components/IntegrateWallet";
// import BlockteriumUse from "./Components/BlockteriumUse";
// import BlockteriumAim from "./Components/BlockteriumAim";
// import BlockteriumProducts from "./Components/BlockteriumProducts";
// import BlockteriumAdvantages from "./Components/BlockteriumAdvantanges";
// import BlockteriumIntCards from "./Components/BlockteriumIntCards";
// import PopularUseCase from "./Components/PopularUseCase";
// import SubscriptionPlan from "./Components/SubscriptionPlan";
// import ReviewQuestions from "./Components/ReviewQuestions";
// import Reviews from "./Components/Reviews";
// import BlockChainEmpowering from "./Components/home/BlockChainEmpowering";
// import Footer from "./Components/Footer";

export default function App(props) {
  return (
    <div className="font-assistant">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="pricing" element={<Pricing />} />
        </Route>
      </Routes>

      {/* <Hero /> */}
      {/* <BlockteriumDescrpt />
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
      <Footer /> */}
    </div>
  );
}
