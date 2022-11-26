import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import BlockteriumDescrpt from "./Components/BlockteriumDescrpt.section";
import BlockteriumValues from "./Components/BlockteriumValues";
import BlockteriumUse from "./Components/BlockteriumUse";
import BlockteriumSlider from "./Components/BlockteriumSlider";
import BlockteriumIntCards from "./Components/BlockteriumIntCards";
import Slick from "./Components/Slider";

export default function App(props) {
  return (
    <div className="font-assistant">
      <Navbar />
      <Hero />
      <BlockteriumDescrpt />
      <BlockteriumValues />
      <BlockteriumUse />
      <BlockteriumSlider />
      <BlockteriumIntCards />
      <Slick />
    </div>
  );
}
