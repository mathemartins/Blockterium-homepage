import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import FirstSlideRoute from "./SliderRoute/firstSlideRoute";
import SecondSlide from "./SliderRoute/SecondSlide";

const BlockteriumSlider = () => {
  return (
    <section className="bg-secondaryColor py-[10rem] flex flex-col ">
      <ul className="text-white flex w-full md:w-[70%] m-auto gap-10 mb-12">
        <Link to={"./"}>Regular</Link>
        <Link to={"set-up"}>Set Up Dashboard</Link>

        <li>Earn More</li>
      </ul>
      <Routes>
        <Route path="/" element={<FirstSlideRoute />}></Route>
        <Route path="set-up" element={<SecondSlide />}></Route>
      </Routes>
      <Outlet />
    </section>
  );
};

export default BlockteriumSlider;
