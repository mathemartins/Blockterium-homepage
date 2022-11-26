import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { massiveValues } from "./index.js";

const Slick = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="w-full bg-secondaryColor sm:hidden">
      <article className=" w-full p-12 text-white ">
        <h1 className="text-[38px] text-center font-bold tracking-tighter">
          Seamless integration with <br />
          <h1 className="gradientTitle ">massive value</h1>
        </h1>
      </article>

      <Slider {...settings} className="mx-10 ">
        {massiveValues.map(({ title, img, info, id }) => {
          return (
            <div key={id}>
              <div className="gradientContainer w-[100%] text-white flex flex-col items-center p-8 text-center md:hidden">
                <img src={img} alt="" />
                <h2 className="mt-10 mb-4 font-bold text-[22px]">{title}</h2>
                <p className="text-[20px]  text-grey">{info}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Slick;
