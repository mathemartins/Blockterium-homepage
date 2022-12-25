import React from "react";
import MobileTopBar from "../Containers/MobileTopBar";
import SideBar from "../Containers/SideBar";
import TopBar from "../Containers/TopBar";
import DashboardLists from "./DashboardLists";

const DashboardHome = () => {
  return (
    <div className="block w-full h-screen overflow-y-auto">
      <div className="block bg:hidden">
        <MobileTopBar />
      </div>
      <div className="grid grid-cols-12 h-full overflow-scroll overflow-x-hidden  overflow-y-hidden pb-20">
        <div className="col-span-12 bg:col-span-2 h-full hidden bg:block">
          <SideBar />
        </div>
        <div className="col-span-12 bg:col-span-10 min-h-screen relative overflow-y-scroll ">
          <TopBar />
          <div className="m-3 h-full -mt-20">
            <DashboardLists />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
