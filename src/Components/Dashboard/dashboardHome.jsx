import React from "react";
import MobileTopBar from "../Containers/MobileTopBar";
import SideBar from "../Containers/SideBar";
import TopBar from "../Containers/TopBar";
import DashboardLists from "./DashboardLists";

const DashboardHome = () => {
  return (
    <div className="block w-full h-screen overflow-auto bg-gradedBlue">
      <div className="block bg:hidden">
        <MobileTopBar />
      </div>
      <div className="grid grid-cols-12 h-full overflow-auto">
        <div className="col-span-12 bg:col-span-2 h-full hidden bg:block">
          <SideBar />
        </div>
        <div className="col-span-12 bg:col-span-10 min-h-screen relative overflow-auto">
          <TopBar />
          <div className="m-3 -mt-20 h-full">
            <DashboardLists />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
