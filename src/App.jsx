import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import BlockteriumDescrpt from "./Components/BlockteriumDescrpt.section";
import BlockteriumValues from "./Components/BlockteriumValues";
import BlockteriumUse from "./Components/BlockteriumUse";

export default function App(props) {
  return (
    <div>
      <Navbar />
      <Hero />
      <BlockteriumDescrpt />
      <BlockteriumValues />
      <BlockteriumUse />
    </div>
  );
}
