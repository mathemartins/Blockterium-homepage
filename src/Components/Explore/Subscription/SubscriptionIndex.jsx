import React, { useState } from "react";
import TopBarTwo from "../../Containers/TopBarTwo";
import MobileTopBar from "../../Containers/MobileTopBar";
import SideBar from "../../Containers/SideBar";
import ActionButton from "../../Inputs/ActionButton";
import SwitchComp from "../../Inputs/CustomSwitch";
import PricingCard from "../../Cards/PricingCard";
import { ConfirmIcon } from "../../../assets";
import { Dropdown } from "primereact/dropdown";

const SubscriptionIndex = () => {
  const [settingsTab, setSettingsTab] = useState("mainnet");
  const [mode, setMode] = useState(false);
  const [filter, setFilter] = useState("");
  const citySelectItems = [
    { label: "New York", value: "NY" },
    { label: "Rome", value: "RM" },
    { label: "London", value: "LDN" },
    { label: "Istanbul", value: "IST" },
    { label: "Paris", value: "PRS" },
  ];
  return (
    <div className="block w-full h-screen overflow-auto">
      <div className="block bg:hidden">
        <MobileTopBar />
      </div>
      <div className="grid grid-cols-12 h-full overflow-auto">
        <div className="col-span-12 bg:col-span-2 h-full hidden bg:block">
          <SideBar />
        </div>
        <div className="col-span-12 bg:col-span-10 min-h-screen relative overflow-auto">
          <div className="hidden bg:block">
            <TopBarTwo />
          </div>
          <div className="bg-greyEight py-10 sm:py:10 px-5 sm:px-10 h-full">
            <div className="h-full rounded-md">
              <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-2">
                <div className="col-span-1 bg-mainWhite px-2 py-10">
                  <div className="flex items-center justify-between px-2 mb-5">
                    <h3 className="text-mainBlack font-bold text-lg">
                      Plan Type
                    </h3>
                    <div className="text-sm text-mainWhite bg-mainGreen flex items-center rounded-full px-5 py-2">
                      <img src={ConfirmIcon} className="mr-2" />
                      Active
                    </div>
                  </div>
                  <PricingCard />
                  <div className="bg-mainWhite min-h-[200px] mt-5 border border-greySix p-2">
                    <div className="flex items-baseline mb-5">
                      <div className="">
                        <h3 className="text-lg font-semibold text-mainBlack">
                          API Calls
                        </h3>
                        <p className="text-xs text-greyFive">
                          Total Request made
                        </p>
                      </div>
                      <Dropdown
                        optionLabel="name"
                        value={filter}
                        options={citySelectItems}
                        className=" text-[10px]"
                        onChange={(e) => setFilter(e.value)}
                        placeholder="Menu"
                      />
                    </div>
                    <h3 className="text-2xl text-mainBlack font-bold">34</h3>
                  </div>
                </div>
                <div className="sm:col-span-3">dede</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionIndex;
