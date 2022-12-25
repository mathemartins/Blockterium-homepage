import React from "react";
import InputFieldTwo from "../Inputs/InputFieldTwo";

const ApiKeyCard = ({ icon, title, network, creditUsage, plan }) => {
  return (
    <>
      <div className="col-span-1 border rounded-md border-b-greySeven p-4 sm:p-8">
        <div className="flex items-center mb-4">
          <div className="bg-primary p-4 mr-3 rounded-full">
            <img src={icon} />
          </div>
          <h3 className="text-mainBlack font-bold">{title}</h3>
        </div>
        <div className="flex items-center mb-3">
          <h6 className="mr-3">Network</h6>{" "}
          <span className="text-mainBlack">{network}</span>
        </div>
        <div className="flex items-center mb-3">
          <h6 className="mr-3">Credit Usage</h6>{" "}
          <span className="text-mainBlack">{creditUsage}</span>
        </div>
        <div className="flex items-center mb-3">
          <h6 className="mr-3">Plan</h6>{" "}
          <span className="text-mainBlack">{plan}</span>
        </div>
        <div>
          <InputFieldTwo
            label="Api Key"
            placeholder="***************************"
          />
        </div>
      </div>
    </>
  );
};

export default ApiKeyCard;
