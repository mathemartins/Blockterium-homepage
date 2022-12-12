import React, { useState } from "react";
import MonthlyPlans from "./PricePlans/MonthlyPlans";
import YearlyPlans from "./PricePlans/YearlyPlans";

const Toggle = () => {
  const [toggled, setToggled] = useState(false);

  const toggleSwitch = (event) => {
    setToggled(event.target.checked);
  };

  return (
    <>
      <div className="w-full text-center mb-[3rem]">
        <input type="checkbox" onChange={toggleSwitch} />
      </div>
      <div>{toggled ? <MonthlyPlans /> : <YearlyPlans />}</div>
    </>
  );
};

export default Toggle;
