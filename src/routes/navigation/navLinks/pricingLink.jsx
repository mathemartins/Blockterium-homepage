import React from "react";
import { Link } from "react-scroll";

const Price = () => {
  return (
    <p className="hover:cursor-pointer">
      <Link spy={true} smooth={true} to="pricesection">
        Pricing
      </Link>
    </p>
  );
};

export default Price;
