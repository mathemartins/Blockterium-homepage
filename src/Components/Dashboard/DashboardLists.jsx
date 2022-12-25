import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Dropdown } from "primereact/dropdown";
import InputField from "../Inputs/InputField";
import {
  profilePicture2,
  testnetIcon,
  testnet2Icon,
  Guide1,
  Guide2,
  LimitKey,
} from "../../assets";
import ActionButton from "../Inputs/ActionButton";
import ApiKeyCard from "../Cards/ApiKeyCard";
import GuideCard from "../Cards/GuideCard";
import { Link } from "react-router-dom";
// import { Carousel } from 'primereact/carousel';

const DashboardLists = () => {
  const [menu, setmenu] = useState("");
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const detail = {
    apiCalls: "34",
    defiYield: "567,890",
    dexP2p: "5",
  };
  const detail2 = [
    {
      apiCalls: "34",
      detail: "Api calls",
    },
    {
      apiCalls: "567,890",
      detail: "DeFi Yield",
    },
    {
      apiCalls: "5",
      detail: "Dex P2P",
    },
  ];
  return (
    <div className="grid bg:grid-cols-8 relative gap-3 mb-20">
      <div className="col-span-1 bg:col-span-6 p-5 min-h-[50%] bg-mainWhite relative border-greySeven border rounded-md">
        <div className="pt-6 border border-greySeven overflow-hidden">
          <div className="block px-4 sm:px-6 mb-7 justify-between">
            <div className="flex ml-auto sm:hidden justify-end mb-5">
              <Dropdown
                optionLabel="name"
                value={menu}
                options={cities}
                className=" text-[10px]"
                onChange={(e) => setmenu(e.value)}
                placeholder="Menu"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={profilePicture2} className="mr-2 ss:mr-3" />
                <div>
                  <h3 className="text-base sm:text-2xl font-bold">
                    Welcome Back Emeka,
                  </h3>
                  <p className="text-greyFive text-sm sm:text-base">
                    Happy Building
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex">
                <Dropdown
                  optionLabel="name"
                  value={menu}
                  options={cities}
                  className=" text-[10px]"
                  onChange={(e) => setmenu(e.value)}
                  placeholder="Menu"
                />
              </div>
            </div>
          </div>
          <div className="flex xs:hidden w-full overflow-hidden">
            {detail2.map((val, index) => (
              <div
                className="min-w-[200px] border border-greySeven py-6"
                key={index}
              >
                <h6 className="text-center">
                  {val.apiCalls}{" "}
                  <span className="text-greyFive ml-2">{val.detail}</span>
                </h6>
              </div>
            ))}
          </div>
          <div className="hidden xs:grid grid-cols-3 border relative text-mainBlack w-full border-greySeven">
            <div className="col-span-1 py-6">
              <h6 className="text-center">
                {detail.apiCalls}{" "}
                <span className="text-greyFive ml-2">Api calls</span>
              </h6>
            </div>
            <div className="col-span-1 border border-x-greySeven py-6">
              <h6 className="text-center">
                ${detail.defiYield}{" "}
                <span className="text-greyFive ml-2">DeFi Yield</span>
              </h6>
            </div>
            <div className="col-span-1 py-6">
              <h6 className="text-center">
                {detail.dexP2p}{" "}
                <span className="text-greyFive ml-2">Dex P2P</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-mainBlack text-lg font-semibold">
              Your Api Keys
            </h3>
            <div>
              <ActionButton
                label="Create new API"
                classnames="bg-mainBlue text-mainWhite p-2 tracking-wide rounded"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mt-5 text-greyFive text-lg font-medium">
            <ApiKeyCard
              icon={testnet2Icon}
              title="Free Mainnet"
              network="Testnet/EU"
              creditUsage="Testnet/EU"
              plan="Free"
            />
            <ApiKeyCard
              icon={testnet2Icon}
              title="Free Mainnet"
              network="Testnet/EU"
              creditUsage="Testnet/EU"
              plan="Free"
            />
          </div>
        </div>
      </div>
      <div className="col-span-1 bg:col-span-2 border border-greySeven rounded-md py-5 px-5 sm:px-2 bg-mainWhite">
        <h3 className="mb-5 font-bold text-lg text-mainBlack">Guides</h3>
        <div className="w-full mb-10">
          <GuideCard
            image={Guide1}
            duration="6 min read"
            text="How to get started with blockain on blockterium"
          />
          <GuideCard
            image={Guide2}
            duration="6 min read"
            text="How to get started with blockain on blockterium"
          />
          <GuideCard
            image={Guide2}
            duration="6 min read"
            text="How to get started with blockain on blockterium"
          />
        </div>
        <div className="p-5">
          <img src={LimitKey} className="mb-4" />
          <div>
            <h3 className="text-xl font-semibold">
              You reached limit for
              <br /> free API keys!
            </h3>
            <p className="my-3">Choose a plan to create New API keys</p>
            <Link to="" className="text-mainBlue">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLists;
