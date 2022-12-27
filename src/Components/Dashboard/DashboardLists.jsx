import React, { useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import { Dropdown } from "primereact/dropdown";
import InputField from "../Inputs/InputField";
import {
  profilePicture2,
  testnetIcon,
  testnet2Icon,
  Guide1,
  Guide2,
  LimitKey,
  ArrowDown2,
} from "../../assets";
import ActionButton from "../Inputs/ActionButton";
import ApiKeyCard from "../Cards/ApiKeyCard";
import GuideCard from "../Cards/GuideCard";
import { Link, useLocation } from "react-router-dom";
import { Popover } from "@headlessui/react";
import LogoutModal from "../Modal/LogoutModal";

const DashboardLists = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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
    <>
      <div className="grid bg:grid-cols-7 relative gap-3 mb-20">
        <div className="col-span-1 bg:col-span-5 p-5 min-h-[50%] bg-mainWhite relative border-greySeven border rounded-md">
          <div className="pt-6 border border-greySeven">
            <div className="block px-4 sm:px-6 mb-7 justify-between relative">
              <div className="flex ml-auto sm:hidden justify-end mb-5">
                <Popover className="relative">
                  <Popover.Button className="flex items-center border font-semibold text-mainBlack !border-greySeven outline-greySeven py-2 px-4">
                    Menu <img src={ArrowDown2} className="ml-1" />
                  </Popover.Button>

                  <Popover.Panel className="absolute z-10 right-0 cursor-pointer drop-shadow-2xl text-mainBlack top-10 w-[300px] bg-mainWhite">
                    <div className="flex flex-col">
                      <div className="pt-5 px-3 pb-5">
                        <h6 className="text-lg">Adewale adedamola</h6>
                        <p className="text-greyFour text-sm font-light">
                          adedamolamoses@gmail.com
                        </p>
                      </div>
                      <Link
                        to="/download"
                        className={
                          splitLocation[1] === "download"
                            ? "py-5 px-3 bg-gradedBlue bg-opacity-30 text-base border-t-2 border-t-greyFive"
                            : "py-5 px-3 text-base border-t-2 border-t-greyFive"
                        }
                      >
                        Download pitch deck
                      </Link>
                      <Link
                        to="/billing"
                        className={
                          splitLocation[1] === "billing"
                            ? "py-5 px-3 bg-gradedBlue bg-opacity-30 text-base"
                            : "py-5 px-3 text-base"
                        }
                      >
                        Billing
                      </Link>
                      <Link
                        to="/settings"
                        className={
                          splitLocation[1] === "settings"
                            ? "py-5 px-3 bg-gradedBlue bg-opacity-30 text-base"
                            : "py-5 px-3 text-base"
                        }
                      >
                        Settings
                      </Link>
                      <div className="py-5 px-3 text-base" onClick={openModal}>
                        Logout
                      </div>
                    </div>
                  </Popover.Panel>
                </Popover>
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
                  <Popover className="">
                    <Popover.Button className="flex items-center border font-semibold text-mainBlack !border-greySeven outline-greySeven py-2 px-4">
                      Menu <img src={ArrowDown2} className="ml-2" />
                    </Popover.Button>

                    <Popover.Panel className="absolute z-10 right-0 cursor-pointer drop-shadow-2xl text-mainBlack top-30 w-[300px] bg-mainWhite">
                      <div className="flex flex-col">
                        <div className="pt-5 px-3 pb-5">
                          <h6 className="text-lg">Adewale adedamola</h6>
                          <p className="text-greyFour text-sm font-light">
                            adedamolamoses@gmail.com
                          </p>
                        </div>
                        <Link
                          to="/download"
                          className={
                            splitLocation[1] === "download"
                              ? "py-5 px-3 bg-gradedBlue bg-opacity-30 text-base border-t-2 border-t-greyFive"
                              : "py-5 px-3 text-base border-t-2 border-t-greyFive"
                          }
                        >
                          Download pitch deck
                        </Link>
                        <Link
                          to="/billing"
                          className={
                            splitLocation[1] === "billing"
                              ? "py-5 px-3 bg-gradedBlue bg-opacity-30 text-base"
                              : "py-5 px-3 text-base"
                          }
                        >
                          Billing
                        </Link>
                        <Link
                          to="/settings"
                          className={
                            splitLocation[1] === "settings"
                              ? "py-5 px-3 bg-gradedBlue bg-opacity-30 text-base"
                              : "py-5 px-3 text-base"
                          }
                        >
                          Settings
                        </Link>
                        <div
                          className="py-5 px-3 text-base"
                          onClick={openModal}
                        >
                          Logout
                        </div>
                      </div>
                    </Popover.Panel>
                  </Popover>
                </div>
              </div>
            </div>
            <div className="flex xs:hidden overflow-hidden bg-red-400">
              {/* {
                                detail2.map((val, index)=> (
                                    <div className='min-w-[150px] border border-greySeven py-6' key={index}>
                                        <h6 className='text-center'>{val.apiCalls} <span className='text-greyFive ml-2'>{val.detail}</span></h6>
                                    </div>
                                ))
                            } */}
            </div>
            <div className="hidden xs:grid grid-cols-3 border-t relative text-mainBlack w-full border-t-greySeven">
              <div className="col-span-1 py-6">
                <h6 className="text-center">
                  {detail.apiCalls}{" "}
                  <span className="text-greyFive ml-2">Api calls</span>
                </h6>
              </div>
              <div className="col-span-1 border-x border-x-greySeven py-6">
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
          <div className="p-5 group border border-greySeven bg-[#FAFAFF] hover:bg-primary">
            <img src={LimitKey} className="mb-4" />
            <div className="group-hover:text-mainWhite">
              <h3 className="text-xl font-semibold group-hover:text-mainWhite">
                You reached limit for
                <br /> free API keys!
              </h3>
              <p className="my-3 group-hover:text-mainWhite group-hover:opacity-25">
                Choose a plan to create New API keys
              </p>
              <Link
                to=""
                className="text-mainBlue text-sm group-hover:text-mainWhite"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <LogoutModal
          closeModal={closeModal}
          openModal={openModal}
          isOpen={isOpen}
          title="Logout"
          text="You are about to logout from your account, are you sure?"
        />
      )}
    </>
  );
};

export default DashboardLists;
