import { useState } from "react";
import TopBarTwo from "../Containers/TopBarTwo";
import MobileTopBar from "../Containers/MobileTopBar";
import SideBar from "../Containers/SideBar";
import ActionButton from "../Inputs/ActionButton";
import ProfileIndex from "./ProfileIndex";
import AccountIndex from "./AccountIndex";
// import DashboardLists from "./../DashboardLists";

const SettingsIndex = () => {
  const [settingsTab, setSettingsTab] = useState("profile");
  return (
    <div className="block  w-full bg:w-[85%]  bg:ml-[15%]">
      <div className="block bg:hidden">
        <MobileTopBar />
      </div>

      <div className="hidden bg:block sticky top-0 left-0">
        <TopBarTwo />
      </div>

      <div className="bg-greyEight py-6 sm:py:10 px-5 sm:px-10 h-screen">
        <div className="bg-mainWhite p-3 h-[30rem] rounded-md sm:w-[50%]">
          <div className="flex justify-between items-center">
            <div className="flex text-sm ss:text-base items-center">
              <div
                onClick={() => setSettingsTab("profile")}
                className={
                  settingsTab === "profile"
                    ? "text-mainBlue px-2 sm:px-5 py-2 font-bold cursor-pointer border-b-2 border-b-mainBlue"
                    : "text-greyFive px-2 sm:px-5 py-2 font-[100] cursor-pointer"
                }
              >
                Profile
              </div>
              <div
                onClick={() => setSettingsTab("account")}
                className={
                  settingsTab === "account"
                    ? "text-mainBlue px-2 sm:px-5 py-2 font-bold cursor-pointer border-b-2 border-b-mainBlue"
                    : "text-greyFive px-2 sm:px-5 py-2 font-[100] cursor-pointer"
                }
              >
                Account
              </div>
            </div>
            <ActionButton
              label="Update changes"
              classnames="bg-mainBlue text-mainWhite font-semibold text-xs sm:text-base px-2 sm:px-4 py-2 rounded-md"
            />
          </div>
          {settingsTab === "profile" ? <ProfileIndex /> : <AccountIndex />}
        </div>
      </div>
    </div>
  );
};

export default SettingsIndex;

{
  /* <div className="block w-full h-screen overflow-auto">
  <div className="block bg:hidden">
    <MobileTopBar />
  </div>
  <div className="grid grid-cols-12 h-full overflow-auto">
    <div className="col-span-12 bg:col-span-2 h-full hidden bg:block">
      <SideBar />
    </div>
    <div className="col-span-12 bg:col-span-10 min-h-screen relative overflow-scroll">
      <div className="hidden bg:block">
        <TopBarTwo />
      </div>
      <div className="bg-greyEight py-6 sm:py:10 px-5 sm:px-10 h-full">
        <div className="bg-mainWhite p-3 h-full rounded-md sm:w-[50%]">
          <div className="flex justify-between items-center">
            <div className="flex text-sm ss:text-base items-center">
              <div
                onClick={() => setSettingsTab("profile")}
                className={
                  settingsTab === "profile"
                    ? "text-mainBlue px-2 sm:px-5 py-2 font-bold cursor-pointer border-b-2 border-b-mainBlue"
                    : "text-greyFive px-2 sm:px-5 py-2 font-[100] cursor-pointer"
                }
              >
                Profile
              </div>
              <div
                onClick={() => setSettingsTab("account")}
                className={
                  settingsTab === "account"
                    ? "text-mainBlue px-2 sm:px-5 py-2 font-bold cursor-pointer border-b-2 border-b-mainBlue"
                    : "text-greyFive px-2 sm:px-5 py-2 font-[100] cursor-pointer"
                }
              >
                Account
              </div>
            </div>
            <ActionButton
              label="Update changes"
              classnames="bg-mainBlue text-mainWhite font-semibold text-xs sm:text-base px-2 sm:px-4 py-2 rounded-md"
            />
          </div>
          {settingsTab === "profile" ? <ProfileIndex /> : <AccountIndex />}
        </div>
      </div>
    </div>
  </div>
</div> */
}
