import React, { useState, useEffect, useContext } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Dropdown } from "primereact/dropdown";
import InputField from "../Inputs/InputField";
import InputFieldTwo from "../Inputs/InputFieldTwo";
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
import { useStateContext } from "../../context/ContextProvider";
import axios from "../../api/axios";

const DashboardLists = ({ classnames }) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const fullName = localStorage.getItem("fullName");
  const email = localStorage.getItem("email");
  const DASHBOARD_URL = "/accounts/dashboard/";
  const GENERATE_API_URL = "/accounts/generate/api-key/";

  let [isOpen, setIsOpen] = useState(false);
  const [mainnetApiKey, setMainnetApiKey] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const apiToken = localStorage.getItem("accessToken");

  async function fetchDashboardData() {
    try {
      const response = await axios.get(DASHBOARD_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
        withCredentials: true,
      });

      const ApiCounts = response?.data?.data?.api_count;
      const TestnetKey = response?.data?.data?.testnet_api_key;
      const DefiEarnings = response?.data?.data?.defi_earnings;
      const CreditUsage = response?.data?.data?.credit_usage;
      const DexP = response?.data?.data?.dex_p2p;
      const TestnetNetwork = response?.data?.data?.testnet_network;
      const MainnetNetwork = response?.data?.data?.mainnet_network;

      localStorage.setItem("ApiCounts", ApiCounts);
      localStorage.setItem("TestnetKey", TestnetKey);
      localStorage.setItem("DefiEarnings", DefiEarnings);
      localStorage.setItem("CreditUsage", CreditUsage);
      localStorage.setItem("DexP", DexP);
      localStorage.setItem("TestnetNetwork", TestnetNetwork);
      localStorage.setItem("MainnetNetwork", MainnetNetwork);
    } catch (error) {
      console.log(error);
    }
  }

  async function generateApiKey() {
    try {
      const response = await axios.get(GENERATE_API_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
        withCredentials: true,
      });

      const MainnetKey = response?.data?.data?.mainnet_api_key;
      localStorage.setItem("MainnetKey", MainnetKey);
    } catch (error) {
      console.log(error);
    }
  }

  generateApiKey();

  const apiCalls = localStorage.getItem("ApiCounts");
  const testnetKey = localStorage.getItem("TestnetKey");
  const mainnetKey = localStorage.getItem("MainnetKey");
  const creditUsage = localStorage.getItem("CreditUsage");
  const defiEarnings = localStorage.getItem("DefiEarnings");
  const dexP = localStorage.getItem("DexP");
  const testnetNetwork = localStorage.getItem("TestnetNetwork");
  const mainnetNetwork = localStorage.getItem("MainnetNetwork");

  const AccessToken = async () => {
    await setMainnetApiKey(mainnetKey);
  };

  return (
    <>
      <div className="grid bg:grid-cols-7 relative gap-3 mb-12">
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
                        <h6 className="text-lg">{fullName}</h6>
                        <p className="text-greyFour text-sm font-light">
                          {email}
                        </p>
                      </div>
                      <Link
                        to="/download"
                        className={
                          splitLocation[1] === "download"
                            ? "py-5 px-3 bg-gradedBlue bg-opacity-30 text-[14px] border-t-2 border-t-greyFive"
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
                    <h3 className="text-[20px] font-bold tracking-tighter">
                      {`Welcome back ${fullName},`}
                    </h3>
                    <p className="text-greyFive text-[14px] sm:text-[16px] font-semibold">
                      Happy Building
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex">
                  <Popover className="">
                    <Popover.Button className="flex items-center border  text-mainBlack text-[14px] font-bold !border-greySeven outline-greySeven py-2 px-4">
                      Menu <img src={ArrowDown2} className="ml-2" />
                    </Popover.Button>

                    <Popover.Panel className="absolute z-10 right-0 cursor-pointer drop-shadow-2xl text-mainBlack top-30 w-[300px] bg-mainWhite">
                      <div className="flex flex-col">
                        <div className="pt-5 px-3 pb-5">
                          <h6 className="text-lg">{fullName}</h6>
                          <p className="text-greyFour text-sm font-light">
                            {email}
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
                          to="settings"
                          className={
                            splitLocation[2] === "settings"
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
            <div className="hidden xs:grid grid-cols-3 border-t relative text-mainBlack w-full border-t-greySeven mt-6">
              <div className="col-span-1 py-4">
                <h6 className="text-center text-[14px] font-bold">
                  {apiCalls}
                  <span className="text-greyTen ml-2 font-medium">
                    Api calls
                  </span>
                </h6>
              </div>
              <div className="col-span-1 border-x border-x-greySeven py-4">
                <h6 className="text-center text-[14px] font-bold">
                  {defiEarnings}
                  <span className="text-greyTen ml-2 font-medium">
                    DeFi Yield
                  </span>
                </h6>
              </div>
              <div className="col-span-1 py-4">
                <h6 className="text-center text-[14px] font-bold">
                  {dexP}
                  <span className="text-greyTen ml-2 font-medium">Dex P2P</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="flex items-center justify-between">
              <h3 className="text-mainBlack text-[16px] font-bold">
                Your Api Keys
              </h3>
              <div>
                <ActionButton
                  label="Create new API"
                  classnames="bg-mainBlue text-mainWhite px-2 py-1 tracking-wide rounded"
                  onClick={AccessToken}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mt-5  text-greyFive text-lg font-medium  relative">
              <div className="col-span-1 border rounded-md border-b-greySeven ">
                <div className="p-4 sm:p-6">
                  <ApiKeyCard
                    icon={testnet2Icon}
                    title="Mainnet"
                    network={mainnetNetwork}
                    creditUsage={creditUsage}
                    plan="Enterprise"
                  />
                </div>
                <div className="flex bg-gradedBlue bg-opacity-20 rounded-md  justify-between pb-2">
                  <InputFieldTwo
                    label="Api Key"
                    placeholder="************************************"
                    onChange={(e) => setMainnetApiKey(e.target.value)}
                    value={mainnetApiKey}
                  />
                  <CopyToClipboard text={mainnetApiKey} onCopy={onCopyText}>
                    <div className="copy-area p-3">
                      <ActionButton
                        label="Copy"
                        onClick={() => {}}
                        classnames={`bg-gradedBlue bg-opacity-40 p-2 mr-1 rounded-md  mainBlue ${
                          isCopied ? `text-mainBlue font-bold` : `text-mainBlue`
                        }`}
                      />
                      {isCopied ? (
                        <p className="absolute -bottom-10 left-[50%] text-mainBlue text-sm">
                          Copiedd!!!!
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </CopyToClipboard>
                </div>
              </div>

              <div className="col-span-1 border rounded-md border-b-greySeven ">
                <div className="p-4 sm:p-6">
                  <ApiKeyCard
                    icon={testnet2Icon}
                    title="Testnet"
                    network={testnetNetwork}
                    creditUsage={creditUsage}
                    plan="free"
                  />
                </div>
                <div className="flex bg-gradedBlue bg-opacity-20 rounded-md  justify-between pb-2">
                  <InputFieldTwo
                    label="Api Key"
                    placeholder={testnetKey}
                    // onChange={(e) => setMainnetApiKey(e.target.value)}
                    value={testnetKey}
                  />
                  <CopyToClipboard text={testnetKey} onCopy={onCopyText}>
                    <div className="copy-area p-3">
                      <ActionButton
                        label="Copy"
                        onClick={() => {}}
                        classnames={`bg-gradedBlue bg-opacity-40 p-2 mr-1 rounded-md  mainBlue ${
                          isCopied ? `text-mainBlue font-bold` : `text-mainBlue`
                        }`}
                      />
                      {isCopied ? (
                        <p className="absolute -bottom-10 left-[50%] text-mainBlue text-sm">
                          Copiedd!!!!
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </CopyToClipboard>
                </div>
              </div>
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
