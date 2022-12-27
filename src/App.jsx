import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navigation/Navbar";
import ContactUs from "./Components/home/contactUs";
import { HomePage, SignUp, Login } from "./routes/index";
import DashboardHome from "./Components/Dashboard/dashboardHome";
import DebugIndex from "./Components/Explore/Debug/DebugIndex";
import SettingsIndex from "./Components/Settings/SettingsIndex";
import PricingIndex from "./Components/Explore/Pricing/PricingIndex";
import SubscriptionIndex from "./Components/Explore/Subscription/SubscriptionIndex";

// ************************************************************************************
// import { RequireAuth } from "./components/";
// import PersistLogin from "./Components/PersistLogin.jsx";
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
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />

        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/explore/debug" element={<DebugIndex />} />
        <Route path="/explore/pricing" element={<PricingIndex />} />
        <Route path="/explore/subscription" element={<SubscriptionIndex />} />
        <Route path="/settings" element={<SettingsIndex />} />
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
